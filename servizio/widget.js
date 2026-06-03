/**
 * BryMeteo Widget v1.0
 * Utilizzo:
 *   <script src="widget.js" data-localita="berra" data-selector="true"></script>
 *
 * Parametri data-*:
 *   data-localita   : ID città di default (es. "berra", "ferrara", ...)
 *   data-selector   : "true" per mostrare il menu a tendina localities
 *   data-giorni     : numero giorni da mostrare (default 7, max 8)
 *   data-theme      : "light" (default) | "dark"
 */
(function () {
  'use strict';

  /* ── DOMINI AUTORIZZATI ── */
  const ALLOWED_DOMAINS = [
    'localhost',
    '127.0.0.1',
    'brymeteo.it',
    'www.brymeteo.it',
    'brymeteo.webnode.it',
    'brymeteo.github.io',
    'www.w3schools.com',
    // aggiungi qui il dominio del cliente
  ];

  function isDomainAllowed() {
    const host = window.location.hostname.toLowerCase();
    return ALLOWED_DOMAINS.some(d => host === d || host.endsWith('.' + d));
  }

  /* ── TROVA IL TAG SCRIPT CORRENTE ── */
  const currentScript = document.currentScript ||
    (function () {
      const scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1];
    })();

  /* ── LEGGI PARAMETRI ── */
  const cfg = {
    localita:  (currentScript.getAttribute('data-localita')  || 'berra').toLowerCase(),
    selector:  (currentScript.getAttribute('data-selector')  || 'false') === 'true',
    giorni:    Math.min(parseInt(currentScript.getAttribute('data-giorni') || '7', 10), 8),
    theme:     (currentScript.getAttribute('data-theme')     || 'light'),
  };

  /* ── COSTANTI ── */
  const OVERRIDE_URL       = 'https://brymeteo.github.io/player/maps:italia:/italia/meteo-override.json';
  const ALERT_DEFAULT_ICON = 'https://cdn.meteocons.com/3.0.0-next.10/svg/flat/code-green.svg';

  const CITIES = [
    {name:"Berra",          id:"berra",        lat:44.976, lon:11.977},
    {name:"Serravalle",     id:"serravalle",    lat:44.965, lon:12.046},
    {name:"Guarda",         id:"guarda",        lat:44.969, lon:11.8017},
    {name:"Cologna",        id:"cologna",       lat:44.968, lon:11.897},
    {name:"Ferrara",        id:"ferrara",       lat:44.835, lon:11.619},
    {name:"Copparo",        id:"copparo",       lat:44.895, lon:11.827},
    {name:"Jolanda di S.",  id:"jolanda",       lat:44.884, lon:11.979},
    {name:"Codigoro",       id:"codigoro",      lat:44.831, lon:12.109},
    {name:"Comacchio",      id:"comacchio",     lat:44.697, lon:12.182},
    {name:"Bondeno",        id:"bondeno",       lat:44.885, lon:11.416},
    {name:"Argenta",        id:"argenta",       lat:44.614, lon:11.837},
    {name:"Portomaggiore",  id:"portomaggiore", lat:44.697, lon:11.807},
    {name:"Lagosanto",      id:"lagosanto",     lat:44.756, lon:12.134},
    {name:"Mesola",         id:"mesola",        lat:44.922, lon:12.229},
    {name:"Goro",           id:"goro",          lat:44.873, lon:12.297},
    {name:"Tresigallo",     id:"tresigallo",    lat:44.817, lon:11.897},
    {name:"Migliarino",     id:"migliarino",    lat:44.769, lon:11.933},
    {name:"Fiscaglia",      id:"fiscaglia",     lat:44.773, lon:11.937},
  ];

  const BANDS = [
    {name:"Notte",      rep:2,  hours:[0,1,2,3,4,5]},
    {name:"Mattino",    rep:9,  hours:[6,7,8,9,10,11]},
    {name:"Pomeriggio", rep:14, hours:[12,13,14,15,16,17]},
    {name:"Sera",       rep:20, hours:[18,19,20,21,22,23]},
  ];

  const LEVEL_LABELS = {green:'Verde',yellow:'Giallo',orange:'Arancio',red:'Rosso'};
  const MONTHS_IT    = ['GENNAIO','FEBBRAIO','MARZO','APRILE','MAGGIO','GIUGNO','LUGLIO','AGOSTO','SETTEMBRE','OTTOBRE','NOVEMBRE','DICEMBRE'];
  const WEEKDAYS_IT  = ['domenica','lunedì','martedì','mercoledì','giovedì','venerdì','sabato'];

  /* ── STATO ── */
  const state = {
    weatherCache: {},
    overrideMap:  {},
    alertMap:     {},
    selectedCity: CITIES.find(c => c.id === cfg.localita) || CITIES[0],
    containerId:  'brymeteo-widget-' + Math.random().toString(36).slice(2,7),
  };

  /* ── CSS INIETTATO ── */
  const WIDGET_CSS = `
    .bm-widget-wrap{font-family:'Nunito',sans-serif;max-width:960px;margin:0 auto;color:#1a1f2e;box-sizing:border-box;}
    .bm-widget-wrap *{box-sizing:border-box;}

    /* FONT */
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

    /* HEADER */
    .bm-wh{display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap;padding:0 4px;}
    .bm-logo{width:60px;height:60px;border-radius:13px;object-fit:contain;flex-shrink:0;box-shadow:0 2px 10px rgba(0,0,0,.13);}
    .bm-title{flex:1;font-size:clamp(16px,3vw,26px);font-weight:900;line-height:1.15;color:#1a1f2e;}
    .bm-right{display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0;}
    .bm-loc-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:flex-end;}
    .bm-loc-label{font-size:13px;color:#888;font-weight:600;}
    .bm-loc-wrap{display:flex;align-items:center;gap:5px;}
    .bm-sel{appearance:none;-webkit-appearance:none;background:white;border:2px solid #dde3ec;border-radius:8px;padding:7px 32px 7px 11px;font-family:'Nunito',sans-serif;font-size:14px;font-weight:800;color:#1a1f2e;cursor:pointer;min-width:150px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;box-shadow:0 1px 4px rgba(0,0,0,.08);}
    .bm-sel:focus{outline:none;border-color:#2d7ab5;}
    .bm-badge{background:#1e5799;color:white;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;white-space:nowrap;}

    /* LOADING */
    .bm-loading{text-align:center;padding:40px 20px;color:#888;font-size:15px;font-weight:600;}
    .bm-spinner{width:32px;height:32px;border:4px solid #dde3ec;border-top-color:#2d7ab5;border-radius:50%;animation:bm-spin .7s linear infinite;margin:0 auto 12px;}
    @keyframes bm-spin{to{transform:rotate(360deg);}}

    /* DESKTOP BLOCK */
    .bm-day-block{background:white;border-radius:12px;overflow:hidden;margin-bottom:16px;box-shadow:0 2px 10px rgba(0,0,0,.07);border:1px solid #dde3ec;}
    .bm-band-hdr{display:flex;background:#1e5799;color:white;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;}
    .bm-bh-day{width:110px;flex-shrink:0;padding:10px 12px;border-right:1px solid rgba(255,255,255,.15);}
    .bm-bh-cell{flex:1;padding:10px 6px;text-align:center;border-right:1px solid rgba(255,255,255,.15);}
    .bm-bh-cell:last-child{border-right:none;}
    .bm-band-row{display:flex;border-top:1px solid #dde3ec;}
    .bm-band-row.alt{background:#f2f4f7;}
    .bm-day-col{width:110px;flex-shrink:0;padding:20px 10px;text-align:center;border-right:1px solid #dde3ec;display:flex;flex-direction:column;align-items:center;justify-content:center;}
    .bm-day-col .bm-wd{font-size:13px;font-weight:700;color:#4a5568;}
    .bm-day-col .bm-dn{font-size:34px;font-weight:900;line-height:1;}
    .bm-day-col .bm-mo{font-size:12px;font-weight:700;color:#4a5568;text-transform:uppercase;letter-spacing:.4px;}
    .bm-cell{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px 6px;text-align:center;border-right:1px solid #dde3ec;gap:5px;}
    .bm-cell:last-child{border-right:none;}
    .bm-cell .bm-wx{width:80px;height:80px;object-fit:contain;}
    .bm-cell .bm-ai{width:72px;height:72px;object-fit:contain;}
    .bm-cell .bm-temp{font-size:22px;font-weight:800;}
    .bm-cell .bm-lv{font-size:14px;font-weight:800;margin-top:2px;}
    .bm-cell .bm-msg{font-size:11px;color:#888;line-height:1.3;max-width:86px;}
    .bm-lv.green{color:#1ea854;} .bm-lv.yellow{color:#d4900a;} .bm-lv.orange{color:#c05a00;} .bm-lv.red{color:#c0392b;}

    /* MOBILE CARD */
    .bm-m-card{background:white;border-radius:12px;overflow:hidden;margin-bottom:16px;box-shadow:0 2px 10px rgba(0,0,0,.07);border:1px solid #dde3ec;}
    .bm-m-hdr{background:#1e5799;color:white;padding:12px 16px;display:flex;align-items:center;gap:12px;}
    .bm-m-dn{font-size:30px;font-weight:900;line-height:1;}
    .bm-m-txt{display:flex;flex-direction:column;}
    .bm-m-wd{font-size:16px;font-weight:700;text-transform:lowercase;}
    .bm-m-mo{font-size:12px;font-weight:600;opacity:.8;text-transform:uppercase;letter-spacing:.4px;}
    .bm-m-band{border-top:1px solid #dde3ec;display:flex;flex-direction:column;}
    .bm-m-band-hdr{background:#2c5f9e;color:white;font-size:12px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;padding:8px 14px;}
    .bm-m-body{display:flex;border-top:1px solid #dde3ec;}
    .bm-m-half{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 10px;gap:6px;text-align:center;}
    .bm-m-half:first-child{border-right:1px solid #dde3ec;}
    .bm-m-hl{font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#888;margin-bottom:2px;}
    .bm-m-half .bm-wx{width:68px;height:68px;object-fit:contain;}
    .bm-m-half .bm-ai{width:60px;height:60px;object-fit:contain;}
    .bm-m-half .bm-temp{font-size:24px;font-weight:900;}
    .bm-m-half .bm-lv{font-size:15px;font-weight:800;}
    .bm-m-half .bm-msg{font-size:12px;color:#888;line-height:1.4;max-width:130px;}

    /* FOOTER */
    .bm-footer{text-align:center;font-size:11px;color:#aaa;padding:8px 0 2px;font-weight:600;}
    .bm-footer a{color:#1e5799;text-decoration:none;}

    /* RESPONSIVE */
    .bm-desktop{display:block;} .bm-mobile{display:none;}
    @media(max-width:639px){
      .bm-desktop{display:none!important;} .bm-mobile{display:block!important;}
      .bm-right{flex-direction:column;align-items:flex-start;}
      .bm-sel{min-width:140px;font-size:13px;}
    }
    @media(min-width:640px){
      .bm-right{flex-direction:row;align-items:center;gap:10px;}
    }
  `;

  /* ── ICONE WMO ── */
  const iconUrls = {
    sole_pieno_d:'https://brymeteo.github.io/tv/Grafica/Icone/05.svg',sole_pieno_n:'https://brymeteo.github.io/tv/Grafica/Icone/02.svg',
    poco_nuvoloso_d:'https://brymeteo.github.io/tv/Grafica/Icone/21.svg',poco_nuvoloso_n:'https://brymeteo.github.io/tv/Grafica/Icone/22.svg',
    nuvole_sparse_d:'https://brymeteo.github.io/tv/Grafica/Icone/26.svg',nuvole_sparse_n:'https://brymeteo.github.io/tv/Grafica/Icone/27.svg',
    coperto_d:'https://brymeteo.github.io/tv/Grafica/Icone/10.svg',coperto_n:'https://brymeteo.github.io/tv/Grafica/Icone/11.svg',
    nebbia_d:'https://brymeteo.github.io/tv/Grafica/Icone/06.svg',nebbia_n:'https://brymeteo.github.io/tv/Grafica/Icone/04.svg',
    nebbia_intensa_d:'https://brymeteo.github.io/tv/Grafica/Icone/03.svg',nebbia_intensa_n:'https://brymeteo.github.io/tv/Grafica/Icone/03.svg',
    pioviggine_leggera_d:'https://brymeteo.github.io/tv/Grafica/Icone/15.svg',pioviggine_leggera_n:'https://brymeteo.github.io/tv/Grafica/Icone/12.svg',
    pioviggine_moderata_d:'https://brymeteo.github.io/tv/Grafica/Icone/16.svg',pioviggine_moderata_n:'https://brymeteo.github.io/tv/Grafica/Icone/13.svg',
    pioviggine_forte_d:'https://brymeteo.github.io/tv/Grafica/Icone/17.svg',pioviggine_forte_n:'https://brymeteo.github.io/tv/Grafica/Icone/14.svg',
    pioggia_leggera_d:'https://brymeteo.github.io/tv/Grafica/Icone/18.svg',pioggia_leggera_n:'https://brymeteo.github.io/tv/Grafica/Icone/18.svg',
    pioggia_moderata_d:'https://brymeteo.github.io/tv/Grafica/Icone/19.svg',pioggia_moderata_n:'https://brymeteo.github.io/tv/Grafica/Icone/19.svg',
    pioggia_forte_d:'https://brymeteo.github.io/tv/Grafica/Icone/20.svg',pioggia_forte_n:'https://brymeteo.github.io/tv/Grafica/Icone/20.svg',
    neve_leggera_d:'https://brymeteo.github.io/tv/Grafica/Icone/30.svg',neve_leggera_n:'https://brymeteo.github.io/tv/Grafica/Icone/30.svg',
    neve_moderata_d:'https://brymeteo.github.io/tv/Grafica/Icone/31.svg',neve_moderata_n:'https://brymeteo.github.io/tv/Grafica/Icone/31.svg',
    neve_forte_d:'https://brymeteo.github.io/tv/Grafica/Icone/31.svg',neve_forte_n:'https://brymeteo.github.io/tv/Grafica/Icone/31.svg',
    nevischio_d:'https://7e11bb4538.cbaul-cdnwnd.com/873c19a2e1fe56e8793848f12717e9be/200001457-b18ecb18ee/39.svg?ph=7e11bb4538',
    nevischio_n:'https://7e11bb4538.cbaul-cdnwnd.com/873c19a2e1fe56e8793848f12717e9be/200001457-b18ecb18ee/39.svg?ph=7e11bb4538',
    rovescio_leggero_d:'https://brymeteo.github.io/tv/Grafica/Icone/15.svg',rovescio_leggero_n:'https://brymeteo.github.io/tv/Grafica/Icone/12.svg',
    rovescio_moderato_d:'https://brymeteo.github.io/tv/Grafica/Icone/16.svg',rovescio_moderato_n:'https://brymeteo.github.io/tv/Grafica/Icone/13.svg',
    rovescio_forte_d:'https://brymeteo.github.io/tv/Grafica/Icone/17.svg',rovescio_forte_n:'https://brymeteo.github.io/tv/Grafica/Icone/14.svg',
    rovescio_neve_d:'https://brymeteo.github.io/tv/Grafica/Icone/32.svg',rovescio_neve_n:'https://brymeteo.github.io/tv/Grafica/Icone/32.svg',
    temporale_leggero_d:'https://brymeteo.github.io/tv/Grafica/Icone/25.svg',temporale_leggero_n:'https://brymeteo.github.io/tv/Grafica/Icone/24.svg',
    temporale_grandine_d:'https://brymeteo.github.io/player/maps:italia:/italia/44.svg',temporale_grandine_n:'https://brymeteo.github.io/player/maps:italia:/italia/44.svg',
    temporale_violento_d:'https://brymeteo.github.io/tv/Grafica/Icone/23.svg',temporale_violento_n:'https://brymeteo.github.io/tv/Grafica/Icone/23.svg',
    grandine_d:'https://brymeteo.github.io/tv/Grafica/Icone/20.svg',grandine_n:'https://brymeteo.github.io/tv/Grafica/Icone/20.svg',
  };

  function isNight(h){return h<6||h>=20;}
  function getIconUrl(code,hour,rain){
    const n=isNight(hour)?'n':'d',wet=(rain||0)>=0.5;let key;
    switch(code){
      case 0:key=`sole_pieno_${n}`;break;case 1:key=`poco_nuvoloso_${n}`;break;case 2:key=`nuvole_sparse_${n}`;break;case 3:key=`coperto_${n}`;break;
      case 45:case 48:key=`nebbia_${n}`;break;
      case 51:key=wet?`pioviggine_leggera_${n}`:`coperto_${n}`;break;case 53:key=wet?`pioviggine_moderata_${n}`:`coperto_${n}`;break;case 55:key=wet?`pioviggine_forte_${n}`:`coperto_${n}`;break;
      case 56:case 57:key=wet?`pioviggine_leggera_${n}`:`coperto_${n}`;break;
      case 61:key=wet?`pioggia_leggera_${n}`:`nuvole_sparse_${n}`;break;case 63:key=wet?`pioggia_moderata_${n}`:`coperto_${n}`;break;case 65:key=wet?`pioggia_forte_${n}`:`coperto_${n}`;break;
      case 66:case 67:key=wet?`pioggia_leggera_${n}`:`coperto_${n}`;break;
      case 71:key=`neve_leggera_${n}`;break;case 73:key=`neve_moderata_${n}`;break;case 75:key=`neve_forte_${n}`;break;case 77:key=`nevischio_${n}`;break;
      case 80:key=wet?`rovescio_leggero_${n}`:`nuvole_sparse_${n}`;break;case 81:key=wet?`rovescio_moderato_${n}`:`coperto_${n}`;break;case 82:key=wet?`rovescio_forte_${n}`:`coperto_${n}`;break;
      case 85:case 86:key=`rovescio_neve_${n}`;break;
      case 95:key=`temporale_leggero_${n}`;break;case 96:key=`temporale_grandine_${n}`;break;case 99:key=`temporale_violento_${n}`;break;
      default:key=`coperto_${n}`;
    }
    return iconUrls[key]||iconUrls['sole_pieno_d'];
  }

  /* ── DATE HELPERS ── */
  function italianDateStr(n){
    const d=new Date();d.setDate(d.getDate()+(n||0));
    return new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Rome'}).format(d);
  }
  function makeTs(ds,ts){
    if(!ds)return null;
    const [y,m,d]=ds.split('-').map(Number),[hh,mm]=(ts||'00:00').split(':').map(Number);
    return new Date(y,m-1,d,hh,mm,0).getTime();
  }
  function isAlertActive(a,dateStr,hour){
    if(!a)return false;
    const from=makeTs(a.validFrom,a.validFromTime),to=makeTs(a.validTo,a.validToTime);
    const [y,m,d]=dateStr.split('-').map(Number);
    const ref=new Date(y,m-1,d,hour,0,0).getTime();
    if(from===null&&to===null)return true;
    if(from!==null&&ref<from)return false;
    if(to!==null&&ref>to)return false;
    return true;
  }
  function dateInfo(offsetDays){
    const ds=italianDateStr(offsetDays),[y,m,d]=ds.split('-').map(Number),dt=new Date(y,m-1,d,12,0,0);
    return {dateStr:ds,weekday:WEEKDAYS_IT[dt.getDay()],dayNum:dt.getDate(),month:MONTHS_IT[dt.getMonth()]};
  }

  /* ── FETCH ── */
  async function loadOverrides(){
    try{
      const res=await fetch(OVERRIDE_URL+'?_='+Date.now());if(!res.ok)return;
      const data=await res.json();
      state.overrideMap={};
      (data.overrides||[]).forEach(o=>{state.overrideMap[`${o.zone}|${o.date}|${o.hour}`]=o;});
      state.alertMap={};
      (data.alerts||[]).forEach(a=>{state.alertMap[a.zone]={iconUrl:a.iconUrl||ALERT_DEFAULT_ICON,level:a.level||'green',message:a.message||'',validFrom:a.validFrom||null,validFromTime:a.validFromTime||null,validTo:a.validTo||null,validToTime:a.validToTime||null};});
    }catch(e){console.warn('[BryMeteo]',e.message);}
  }
  async function fetchCity(city){
    const r=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&hourly=temperature_2m,precipitation,weathercode&forecast_days=8&timezone=Europe%2FRome`);
    if(!r.ok)throw new Error('HTTP '+r.status);
    return (await r.json()).hourly;
  }

  /* ── OVERRIDE/ALERT HELPERS ── */
  function applyOverride(zoneId,dateStr,hour,temp,rain,code){
    const o=state.overrideMap[`${zoneId}|${dateStr}|${hour}`];
    if(!o)return{temp,rain,code};
    return{temp:o.temp!==undefined?o.temp:temp,rain:o.precipitation!==undefined?o.precipitation:rain,code:o.weatherCode!==undefined?o.weatherCode:code};
  }
  function getAlertForBand(zoneId,dateStr,band){
    const a=state.alertMap[zoneId];if(!a)return null;
    return band.hours.some(h=>isAlertActive(a,dateStr,h))?a:null;
  }
  function getBandData(hourlyData,zoneId,dateStr,band){
    const repH=band.rep,target=`${dateStr}T${String(repH).padStart(2,'0')}:00`;
    let idx=hourlyData.time.indexOf(target);
    if(idx===-1){for(const h of band.hours){const t2=`${dateStr}T${String(h).padStart(2,'0')}:00`;idx=hourlyData.time.indexOf(t2);if(idx!==-1)break;}}
    if(idx===-1)return null;
    const ov=applyOverride(zoneId,dateStr,repH,Math.round(hourlyData.temperature_2m[idx]),hourlyData.precipitation[idx]||0,hourlyData.weathercode[idx]);
    return{...ov,hour:repH};
  }

  /* ── RENDER ── */
  function h(tag,cls,inner,extra){
    const e=document.createElement(tag);
    if(cls)e.className=cls;
    if(inner!==undefined)e.innerHTML=inner;
    if(extra)Object.assign(e,extra);
    return e;
  }

  function renderDesktopDay(hourlyData,zoneId,offsetDays){
    const{dateStr,weekday,dayNum,month}=dateInfo(offsetDays);
    const block=h('div','bm-day-block bm-desktop');
    const cols=BANDS.map(b=>`<div class="bm-bh-cell">${b.name.toUpperCase()}</div>`).join('');

    // meteo header + row
    block.insertAdjacentHTML('beforeend',`<div class="bm-band-hdr"><div class="bm-bh-day">GIORNO</div>${cols}</div>`);
    const mRow=h('div','bm-band-row');
    mRow.insertAdjacentHTML('beforeend',`<div class="bm-day-col"><div class="bm-wd">${weekday}</div><div class="bm-dn">${dayNum}</div><div class="bm-mo">${month}</div></div>`);
    BANDS.forEach(band=>{
      const bd=getBandData(hourlyData,zoneId,dateStr,band);
      const c=h('div','bm-cell');
      c.innerHTML=bd?`<img class="bm-wx" src="${getIconUrl(bd.code,bd.hour,bd.rain)}" alt=""><div class="bm-temp">${bd.temp}°C</div>`:'<span style="color:#ccc">—</span>';
      mRow.appendChild(c);
    });
    block.appendChild(mRow);

    // alert header + row
    block.insertAdjacentHTML('beforeend',`<div class="bm-band-hdr"><div class="bm-bh-day">GIORNO</div>${cols}</div>`);
    const aRow=h('div','bm-band-row alt');
    aRow.insertAdjacentHTML('beforeend',`<div class="bm-day-col"><div class="bm-wd">${weekday}</div><div class="bm-dn">${dayNum}</div><div class="bm-mo">${month}</div></div>`);
    BANDS.forEach(band=>{
      const ao=getAlertForBand(zoneId,dateStr,band);
      const lvl=ao?ao.level:'green';
      const c=h('div','bm-cell');
      c.innerHTML=`<img class="bm-ai" src="${ao?ao.iconUrl:ALERT_DEFAULT_ICON}" alt="${lvl}"><div class="bm-lv ${lvl}">${LEVEL_LABELS[lvl]||'Verde'}</div><div class="bm-msg">${ao&&ao.message?ao.message:'Nessun avviso'}</div>`;
      aRow.appendChild(c);
    });
    block.appendChild(aRow);
    return block;
  }

  function renderMobileDay(hourlyData,zoneId,offsetDays){
    const{dateStr,weekday,dayNum,month}=dateInfo(offsetDays);
    const card=h('div','bm-m-card bm-mobile');
    card.insertAdjacentHTML('beforeend',`<div class="bm-m-hdr"><div class="bm-m-dn">${dayNum}</div><div class="bm-m-txt"><div class="bm-m-wd">${weekday}</div><div class="bm-m-mo">${month}</div></div></div>`);
    BANDS.forEach(band=>{
      const bd=getBandData(hourlyData,zoneId,dateStr,band);
      const ao=getAlertForBand(zoneId,dateStr,band);
      const lvl=ao?ao.level:'green';
      const bandDiv=h('div','bm-m-band');
      bandDiv.innerHTML=`
        <div class="bm-m-band-hdr">${band.name.toUpperCase()}</div>
        <div class="bm-m-body">
          <div class="bm-m-half">
            <div class="bm-m-hl">Meteo</div>
            ${bd?`<img class="bm-wx" src="${getIconUrl(bd.code,bd.hour,bd.rain)}" alt=""><div class="bm-temp">${bd.temp}°C</div>`:'<span style="color:#ccc;font-size:22px">—</span>'}
          </div>
          <div class="bm-m-half">
            <div class="bm-m-hl">Allerta</div>
            <img class="bm-ai" src="${ao?ao.iconUrl:ALERT_DEFAULT_ICON}" alt="${lvl}">
            <div class="bm-lv ${lvl}">${LEVEL_LABELS[lvl]||'Verde'}</div>
            <div class="bm-msg">${ao&&ao.message?ao.message:'Nessun avviso'}</div>
          </div>
        </div>`;
      card.appendChild(bandDiv);
    });
    return card;
  }

  function renderContent(container){
    const city=state.selectedCity;
    const hourlyData=state.weatherCache[city.name];
    const content=container.querySelector('.bm-content');
    if(!hourlyData){content.innerHTML='<div class="bm-loading"><div class="bm-spinner"></div>Caricamento…</div>';return;}
    content.innerHTML='';
    for(let i=0;i<cfg.giorni;i++){
      content.appendChild(renderDesktopDay(hourlyData,city.id,i));
      content.appendChild(renderMobileDay(hourlyData,city.id,i));
    }
    content.insertAdjacentHTML('beforeend','<div class="bm-footer">Powered by <a href="https://brymeteo.it" target="_blank">© Brymeteo 2026</a></div>');
  }

  /* ── COSTRUISCI IL WIDGET NEL DOM ── */
  function buildWidget(){
    // Inietta CSS una volta sola
    if(!document.getElementById('brymeteo-widget-css')){
      const styleEl=document.createElement('style');
      styleEl.id='brymeteo-widget-css';
      styleEl.textContent=WIDGET_CSS;
      document.head.appendChild(styleEl);
    }

    // Contenitore
    const wrap=document.createElement('div');
    wrap.className='bm-widget-wrap';
    wrap.id=state.containerId;

    // Header
    const selOptions=cfg.selector
      ?`<div class="bm-loc-row">
          <span class="bm-loc-label">··· Seleziona località</span>
          <div class="bm-loc-wrap">
            <span>📍</span>
            <select class="bm-sel" id="bm-sel-${state.containerId}">
              ${CITIES.map(c=>`<option value="${c.id}" ${c.id===state.selectedCity.id?'selected':''}>${c.name} (Ferrara)</option>`).join('')}
            </select>
          </div>
        </div>`
      :`<div class="bm-loc-row"><span class="bm-loc-label">📍 ${state.selectedCity.name} (Ferrara)</span></div>`;

    wrap.innerHTML=`
      <div class="bm-wh">
        <img class="bm-logo" src="https://i.ibb.co/bRK9hTLf/safari-pinned-taby.png" alt="BryMeteo">
        <div class="bm-title">Previsioni meteo Riva del Po</div>
        <div class="bm-right">
          ${selOptions}
          <span class="bm-badge">Dati forniti da Brymeteo</span>
        </div>
      </div>
      <div class="bm-content">
        <div class="bm-loading"><div class="bm-spinner"></div>Caricamento previsioni…</div>
      </div>`;

    // Inserisci dopo il tag script
    currentScript.parentNode.insertBefore(wrap, currentScript.nextSibling);

    // Event listener selector
    if(cfg.selector){
      const sel=wrap.querySelector(`#bm-sel-${state.containerId}`);
      if(sel){
        sel.addEventListener('change', async function(){
          const city=CITIES.find(c=>c.id===this.value);if(!city)return;
          state.selectedCity=city;
          const content=wrap.querySelector('.bm-content');
          content.innerHTML='<div class="bm-loading"><div class="bm-spinner"></div>Caricamento dati per '+city.name+'…</div>';
          if(!state.weatherCache[city.name]){
            try{state.weatherCache[city.name]=await fetchCity(city);}
            catch(e){content.innerHTML='<div class="bm-loading">Errore caricamento dati.</div>';return;}
          }
          renderContent(wrap);
        });
      }
    }
    return wrap;
  }

  /* ── INIT ── */
  async function init(){
    // Check dominio
    if(!isDomainAllowed()){
      console.warn('[BryMeteo] Widget non autorizzato su questo dominio:', window.location.hostname);
      return;
    }

    const wrap=buildWidget();
    await loadOverrides();
    try{
      state.weatherCache[state.selectedCity.name]=await fetchCity(state.selectedCity);
    }catch(e){
      wrap.querySelector('.bm-content').innerHTML='<div class="bm-loading">Errore caricamento dati meteo.</div>';
      return;
    }
    renderContent(wrap);
  }

  // Aspetta il DOM se necessario
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', init);
  }else{
    init();
  }

})();
