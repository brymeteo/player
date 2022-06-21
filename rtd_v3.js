var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// GLOBAL RTD CONFIGURATION PARAMETERS

var unicaUrl = 'rtcd1.sky.it';
var page = "";
var page_disdetta = "";
var rtd_debug = false;
var path = '/content/skyit/it/rtd/';
var path_disdetta = '/content/skyit/it/rtd/brick-disdetta/';
var rtdDefaultPath = '/default/rtd_default_';
var rtdDefaultDisdettaPath = '/default/brick_default_';
var categories = new Array();
var categoriesBottom = new Array();
var contractCode = '';
var rtdsessionidcookie = '';
var unicaWebConnectorBaseURL = '';
var unicaURLData = '';
var rtdContractCodeValidator = new RegExp('^[0-9]+$');
var rtdSessionIdValidator = new RegExp('^[0-9_]+$');
var SESSION_FLG_LOG = 0;
var WSC_HOST = '';
var CHECK_RTD_URL = '';
var USER_STATUS; // LOGGED - NOT_LOGGED - 

if (location.host.indexOf("preaem") == 0) {
  // WEBCONNECTOR DI COLLAUDO
  unicaUrl = 'coll.rtcd1.sky.it';
}


//WEBCONNECTOR OFFERS CONFIGURATION

var IP_HOMEPAGE = 'IP_HomePage';
var IP_SKYGO = 'IP_SkyGo';
var IP_MYSKY = 'IP_MySky';
var IP_ONDEMAND = 'IP_SkyOnDemand';
var IP_SKYLINK = 'IP_SkyLink';
var IP_MV = 'IP_SkyMultiVision';
var IP_SKYHD = 'IP_SkyHD';
var IP_SKY3D = 'IP_Sky3D';
var IP_DKEY = 'IP_SkyDigitalKey';
var IP_FAMIGLIA = 'IP_SkyFamiglia';
var IP_CINEMA = 'IP_SkyCinema';
var IP_SPORT = 'IP_SkySport';
var IP_CALCIO = 'IP_SkyCalcio';
var IP_BOXSET = 'IP_SkyBoxSets';
var IP_MGM = 'IP_MemberGetMember';
var IP_INFODISDETTA = 'IP_InfoDisdetta_Alto';


//PAGE NAMING CONFIGURATION

var pageipskygo = 'plus.html';
var pageipmysky = 'my-sky.html';
var pageipondemand = 'sky-on-demand.html';
var pageipskylink = 'sky-link.html';
var pageipmv = 'sky-multiscreen.html';
var pageipskyhd = 'hd.html';
var pageipsky3d = 'sky-3d.html';
var pageipfamiglia = 'sky-famiglia.html';
var pageipcinema = 'pacchetti-cinema.html';
var pageipsport = 'pacchetti-sport.html';
var pageipcalcio = 'sky-calcio.html';
var pageipboxset = 'box-sets.html';
var pageipipmgm = 'presenta-un-amico.html';
var pageipskydk = 'sky-digital-key.html';
var pageinfodisdetta = "info-disdetta";

//AVAILABLE INTERACTION POINTS

var iphp = '';
var ipskygo = '';
var ipmysky = '';
var ipondemand = '';
var ipskylink = '';
var ipmv = '';
var ipskyhd = '';
var ipsky3d = '';
var ipdkey = '';
var ipfamiglia = '';
var ipcinema = '';
var ipsport = '';
var ipcalcio = '';
var ipboxset = '';
var ipmgm = '';
var ipinfodisdetta = '';

// EVENTS

var VISUALIZED = 'Visualized';
var PRESENTED = 'Presented';
var ACCEPTED = 'Accepted';
var flagVisualized = false;

function jsonp_request(url) {
	var head = document.getElementsByTagName("head")[0]; 
	var script = document.createElement("SCRIPT"); 
	script.type = "text/javascript"; 
	script.src = url ;  
	head.appendChild(script); 
}

function createUrl() {
  unicaWebConnectorBaseURL = document.location.protocol + '//' + unicaUrl + '/uiconnector/pageTag';
  var url = location.href.split('?')[0].replace(':443', '');

  //DA RIMUOVERE DOPO A/B TEST
    if (url.indexOf("/pacchetti-sport.html")>-1){
		url= url.replace("/pacchetti-sport","/sky-sport");
    }
	    if (url.indexOf("/pacchetti-cinema.html")>-1){
		url= url.replace("/pacchetti-cinema","/sky-cinema");
    }

  unicaURLData = 'ok=Y';
  try {
    unicaURLData += '&url=' + url;
  } catch (err) {}
  try {
    unicaURLData += '&title=' + document.title;
  } catch (err) {}
  try {
    unicaURLData += '&referrer=' + document.referrer;
  } catch (err) {}
  try {
    unicaURLData += '&cookie=' + 'RtdSessionId=' + $.cookie('RtdSessionId') + ';RtdContractCode=' + $.cookie('RtdContractCode');
  } catch (err) {}
  try {
    unicaURLData += '&browser=' + navigator.userAgent;
  } catch (err) {}
  try {
    unicaURLData += '&screensize=' + screen.width + 'x' + screen.height;
  } catch (err) {}
  try {
    unicaURLData += '&session_flg_log=' + SESSION_FLG_LOG;
  } catch (err) {}
  try {
    if (affiliateSitesForUnicaTag) {
      var unica_asv = "";
      document.write("<style id=\"unica_asht1\" type=\"text/css\"> p#unica_ashtp a {border:1px #000000 solid; height:100px !important;width:100px !important; display:block !important; overflow:hidden !important;} p#unica_ashtp a:visited {height:999px !important;width:999px !important;} </style>");
      var unica_ase = document.getElementById("unica_asht1");
      for (var unica_as in affiliateSitesForUnicaTag) {
        var unica_asArr = affiliateSitesForUnicaTag[unica_as];
        var unica_ashbv = false;
        for (var unica_asIndex = 0; unica_asIndex < unica_asArr.length && unica_ashbv == false; unica_asIndex++) {
          var unica_asURL = unica_asArr[unica_asIndex];
          document.write("<p id=\"unica_ashtp\" style=\"position:absolute;top:0;left:-10000px;height:20px;width:20px;overflow:hidden;margin:0;padding:0;visibility:visible;\"><a href=\"" + unica_asURL + "\">" + unica_as + "&nbsp;</a></p>");
          var unica_ae = document.getElementById("unica_ashtp").childNodes[0];
          if (unica_ae.currentStyle) {
            if (parseFloat(unica_ae.currentStyle["width"]) > 900) unica_ashbv = true
          } else if (window.getComputedStyle) {
            if (parseFloat(document.defaultView.getComputedStyle(unica_ae, null).getPropertyValue("width")) > 900) unica_ashbv = true
          }
          unica_ae.parentNode.parentNode.removeChild(unica_ae.parentNode)
        }
        if (unica_ashbv == true) {
          unica_asv += (unica_asv == "" ? "" : ";") + unica_as
        }
      }
      unica_ase.parentNode.removeChild(unica_ase);
      unicaURLData += "&affiliates=" + encodeURIComponent(unica_asv);
    }
  } catch (err) {}
}

function RtdStart() {
  createUrl();
  try {
    var parts = window.location.href.split('/');
    page = parts[parts.length - 1];
	page_disdetta = parts[parts.length - 2];
  } catch (err) {}
  var myurl = unicaWebConnectorBaseURL + "?" + unicaURLData + '&_=' + $.now();
  // STUB 
  if (rtd_debug) myurl = 'https://web.archive.org/web/20171123135720/https://preaem.www.sky.it/etc/designs/skyit/temp/rtd_resp.js';
  $.ajax({
    url: myurl,
    async: false,
    dataType: "script",
    timeout: 4000,
    success: function(data) {
      $.getJSON('/content/skyit/it/rtd/configuration/rtd_configuration.html', function(config) {
        if (typeof unicaReturnedOffers != 'undefined') {

          //    $.ajaxSetup({
          //      async: false
          //    });
           

          $.each(unicaReturnedOffers, function(ip) {
            if (typeof config != 'undefined' && typeof config.RTDCONF != 'undefined') { //se è stata settata la configurazione

              var conf = config.RTDCONF;
              if (this.domelementID.indexOf(IP_HOMEPAGE) != -1 && conf[IP_HOMEPAGE] == 'on') {
                iphp = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_SKYGO) != -1 && conf[IP_SKYGO] == 'on') {
                ipskygo = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_MYSKY) != -1 && conf[IP_MYSKY] == 'on') {
                ipmysky = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_ONDEMAND) != -1 && conf[IP_ONDEMAND] == 'on') {
                ipondemand = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_SKYLINK) != -1 && conf[IP_SKYLINK] == 'on') {
                ipskylink = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_MV) != -1 && conf[IP_MV] == 'on') {
                ipmv = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_SKYHD) != -1 && conf[IP_SKYHD] == 'on') {
                ipskyhd = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_SKY3D) != -1 && conf[IP_SKY3D] == 'on') {
                ipsky3d = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_DKEY) != -1 && conf[IP_DKEY] == 'on') {
                ipdkey = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_FAMIGLIA) != -1 && conf[IP_FAMIGLIA] == 'on') {
                ipfamiglia = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_CINEMA) != -1 && conf[IP_CINEMA] == 'on') {
                ipcinema = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_SPORT) != -1 && conf[IP_SPORT] == 'on') {
                ipsport = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_CALCIO) != -1 && conf[IP_CALCIO] == 'on') {
                ipcalcio = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_BOXSET) != -1 && conf[IP_BOXSET] == 'on') {
                ipboxset = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_MGM) != -1 && conf[IP_MGM] == 'on') {
                ipmgm = this.domelementID;
              }
              if (this.domelementID.indexOf(IP_INFODISDETTA) != -1 && conf[IP_INFODISDETTA] == 'on') {
              	ipinfodisdetta = this.domelementID;
              }
            }
          });

        } else {
           unicaReturnedOffers = [];
           var index = 0;
        }

         /* if (iphp != '' && page == "") {
            var indexHP = 0;
            $.each(unicaReturnedOffers[iphp].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = iphp;
                getJsonContentForHP(this, indexHP, false);
                indexHP++;
              }
            });
          } else {

            //get default 
            if (page == "") {
              getJsonContentForHP(this, 0, true);
              // da scommentare quando le cr sono definitive, per visualizzare i 3 defualt
     //         getJsonContentForHP(this, 1, true);
     //         getJsonContentForHP(this, 2, true);
            } 

          }*/
        /*  if (ipskygo != '' && page.indexOf(pageipskygo) != -1) {
            $.each(unicaReturnedOffers[ipskygo].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipskygo;
                  if (getJsonContentForTecnologia(this, index)){
                      putInTheMiddle();
                      return false;}
              }
            });
          } else {


            //get default 
              if (page == pageipskygo) {
				  
                  getJsonContentForTecnologia(this, index, true, IP_SKYGO);
				  hideCTA();
              }

          }*/
        /*  if (ipmysky != '' && page == pageipmysky) {
            $.each(unicaReturnedOffers[ipmysky].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipmysky;
                if (getJsonContentForTecnologia(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page == pageipmysky) getJsonContentForTecnologia(this, index, true, IP_MYSKY);

          }*/
         /* if (ipdkey != '' && page.indexOf(pageipskydk) != -1) {
            $.each(unicaReturnedOffers[ipdkey].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipdkey;
                if (getJsonContentForTecnologia(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page == pageipskydk) getJsonContentForTecnologia(this, index, true, IP_DKEY);

          }*/
         /* if (ipondemand != '' && page == pageipondemand) {
            $.each(unicaReturnedOffers[ipondemand].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipondemand;
                  if (getJsonContentForTecnologia(this, index)){
					putInTheMiddle();
                  return false;
                  }
              }
            });
          } else {

            //get default 
              if (page == pageipondemand) {
                  getJsonContentForTecnologia(this, index, true, IP_ONDEMAND);
				  hideCTA();
              }

          }*/
          /*if (ipskylink != '' && page == pageipskylink) {
            $.each(unicaReturnedOffers[ipskylink].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipskylink;
                if (getJsonContentForTecnologia(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page == pageipskylink) getJsonContentForTecnologia(this, index, true, IP_SKYLINK);

          }*/
         /* if (ipmv != '' && page == pageipmv) {
            $.each(unicaReturnedOffers[ipmv].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipmv;
                if (getJsonContentForTecnologia(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page == pageipmv) getJsonContentForTecnologia(this, index, true, IP_MV);

          }*/
        /*  if (ipskyhd != '' && page == pageipskyhd) {
            $.each(unicaReturnedOffers[ipskyhd].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipskyhd;
                if (getJsonContentForTecnologia(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page == pageipskyhd) getJsonContentForTecnologia(this, index, true, IP_SKYHD);

          }*/
          /*if (ipsky3d != '' && page == pageipsky3d) {
            $.each(unicaReturnedOffers[ipsky3d].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipsky3d;
                if (getJsonContentForTecnologia(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page == pageipsky3d) getJsonContentForTecnologia(this, index, true, IP_SKY3D);

          }*/
          /*if (ipfamiglia != '' && page == pageipfamiglia) {
            $.each(unicaReturnedOffers[ipfamiglia].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipfamiglia;
                if (getJsonContentForPacchetti(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page == pageipfamiglia) getJsonContentForPacchetti(this, index, true, IP_FAMIGLIA);

          }*/
          if (ipcinema != '' && page.indexOf(pageipcinema)>-1) {
            $.each(unicaReturnedOffers[ipcinema].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipcinema;
                if (getJsonContentForPacchetti(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page.indexOf(pageipcinema)>-1) getJsonContentForPacchetti(this, index, true, IP_CINEMA);

          }
          if (ipsport != '' && page.indexOf(pageipsport)>-1) {
            $.each(unicaReturnedOffers[ipsport].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipsport;
                if (getJsonContentForPacchetti(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page.indexOf(pageipsport)>-1) getJsonContentForPacchetti(this, index, true, IP_SPORT);

          }
          /*if (ipcalcio != '' && page == pageipcalcio) {
            $.each(unicaReturnedOffers[ipcalcio].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipcalcio;
                if (getJsonContentForPacchetti(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page == pageipcalcio) getJsonContentForPacchetti(this, index, true, IP_CALCIO);

          }*/
        /*  if (ipboxset != '' && page == pageipboxset) {
            $.each(unicaReturnedOffers[ipboxset].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = ipboxset;
                if (getJsonContentForPacchetti(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page == pageipboxset) getJsonContentForPacchetti(this, index, true, IP_BOXSET);

          }*/
          /*if (ipmgm != '' && page == pageipipmgm) {
            $.each(unicaReturnedOffers[ipmgm].offers, function(index) {
              if ($.inArray(this.MAIN_PRODUCT, categories) == -1) {
                this.page = iphp;
                if (getJsonContentForPacchetti(this, index))
                  return false;
              }
            });
          } else {

            //get default 
            if (page == pageipipmgm) getJsonContentForPacchetti(this, index, true, IP_MGM);

          }*/

         /* if (ipinfodisdetta != '' && (page.indexOf(pageinfodisdetta)>-1 || page_disdetta.indexOf(pageinfodisdetta)>-1) ){
            $.each(unicaReturnedOffers[ipinfodisdetta].offers, function(index) {
                this.page = ipinfodisdetta;
                if (getJsonContentForInfoDisdetta(this, index))
                  return false;   
            });
          } else {

            //get default 
            if (page == pageinfodisdetta) getJsonContentForInfoDisdetta(this, index, true, IP_INFODISDETTA);

          }*/
      }); //fine config
    },
    error: function(xhr, ajaxOptions, thrownError) {
      // do nothing
    }
  });
}

/*function getJsonContentForHP(offer, indiceofferta, default_content) {

  if (default_content) {
    var urlBrick = path + rtdDefaultPath + IP_HOMEPAGE + '_' + indiceofferta + '.html';
  } else {
    var urlBrick = path + "rtd_" + offer.OFFER_CODE.split('.')[2] + ".html";
  }

  function setHomePageSlideContent(obj, data) {
    $(obj).find('.singleMainItem_containerImage').css('background-image', 'url(' + data[0].HOME.image + ')');
    $(obj).find('.singleMainItem_offerInfo span').html(data[0].HOME.text);
    $(obj).find('.singleMainItem_offerInfo span').css('color', data[0].HOME.textColor);
    $(obj).find('.singleMainItem_offerInfo a').attr('style', 'background-color:' + data[0].HOME.colorCTA + ' !important');
    $(obj).find('.singleMainItem_offerInfo a').attr('href', abbonamentoLink(data[0].HOME.linkCTA, offer));
    $(obj).find('.singleMainItem_offerInfo a').text(data[0].HOME.labelCTA);
    $(obj).find('.singleMainItem_offerInfo a').click(function(e) {
      e.preventDefault();
      // tracciamento evento Presented
      callClickThru(offer, PRESENTED);
      //CTA
      delayPageRedirect(abbonamentoLink(data[0].HOME.linkCTA, offer));
    });
  }


  $.ajax({
    url: urlBrick,
    dataType: 'json',
    data: {
      "_": $.now()
    },
    async: false,
    success: function(data) {

      if (data[0]) {
        //titolo tab - parco e prosepct
        $('.multipleSlider').each(function() {
          $(this).find('.multipleSlider_nav-item').each(function(tabslider) {
            if (tabslider == indiceofferta) {
              $(this).text(data[0].HOME.tabName);
              $(this).css('background-color', data[0].HOME.backgroundColorBox);


              // tracciamento evento Visualized
              if (tabslider === 0) {
                // un solo tracciamento per parco o prospect
                if (!flagVisualized) {
                  flagVisualized = true;
                  callClickThru(offer, VISUALIZED);
                }
              } else {
                $(this).one("click", function() {
                  callClickThru(offer, VISUALIZED);
                });
              }

              categories.push(offer.MAIN_PRODUCT);

            }
          });
        });

        //immagine di sfondo, testo, colori - parco 
        $('.parcoSingleMainItem_slide').each(function(tabslider) {
          if (tabslider == indiceofferta) {
            setHomePageSlideContent(this, data);
          }
        });
        //immagine di sfondo, testo, colori - prospect
        $('.prospectSingleMainItem_slide').each(function(tabslider) {
          if (tabslider == indiceofferta) {
            setHomePageSlideContent(this, data);
          }
        });
        //mobile - parco e prosepct
        $('.mobileMultipleSlider ul').each(function() {
          $(this).find('li').each(function(tabslider) {
            if (tabslider == indiceofferta) {
              $(this).find('button').text(data[0].HOME.tabName);
              $(this).find('button').css('background-color', data[0].HOME.backgroundColorBox);
            }
          });
        });
        $('.mobileMultipleSlider').each(function() {
          var tabsize = $(this).find('.mobileMultipleSlider_item').size();
          $(this).find('.mobileMultipleSlider_item').each(function(tabslider) {
            //vengono creati a runtime due slide fittizzi attorno ai veri slide                         
            if ((tabslider == indiceofferta + 1) && (tabslider != tabsize - 1)) {
              $(this).find('.singleMainItem_containerImage').css('background-image', 'url(' + data[0].HOME.image + ')');
              $(this).find('.singleMainItem_offerInfo span').html(data[0].HOME.text);
              $(this).find('.singleMainItem_offerInfo span').css('color', data[0].HOME.textColor);
              $(this).find('.singleMainItem_offerInfo a').attr('style', 'background-color:' + data[0].HOME.colorCTA + ' !important');
              $(this).find('.singleMainItem_offerInfo a').attr('href', abbonamentoLink(data[0].HOME.linkCTA, offer));
              $(this).find('.singleMainItem_offerInfo a').text(data[0].HOME.labelCTA);
              $(this).find('.singleMainItem_offerInfo a').click(function(e) {
                e.preventDefault();
                // tracciamento evento Presented
                callClickThru(offer, PRESENTED);
                //cta
                delayPageRedirect(abbonamentoLink(data[0].HOME.linkCTA, offer));
              });
            }
          });
        });

      }
    },
  });
}*/

/*function getJsonContentForTecnologia(offer, index, default_content, default_filename) {

  if (default_content) {
    urlBrick = path + rtdDefaultPath + default_filename + '.html';
  } else {
    var urlBrick = path + "rtd_" + offer.OFFER_CODE.split('.')[2] + ".html";
  }

  var contentSuccess = false;
  // attenzione, il seguente codice funziona solamente se le chiamate vengono effettuate in maniera sincronta,
  // vedere l'ajax setup

  $.ajax({
    url: urlBrick,
    dataType: 'json',
    data: {
      "_": $.now()
    },
    async: false,
    success: function(data) {
      if (data[2]) {
        var target = $('#final-cta .col-cta').eq(1);
        $(target).find('p').text('');
        $('#final-cta .col-cta').eq(0).hide();
        $(target).css('width', '100%');
        //setto i valori dal cms
        // if (data[2].BUTTON.colorCTA != '') $(target).find('.faiDaTeBtn').css('background-color', data[2].BUTTON.colorCTA);
        if (data[2].BUTTON.linkCTA != '') $(target).find('.faiDaTeBtn').attr('href', abbonamentoLink(data[2].BUTTON.linkCTA, offer)).click(function(e) {
          e.preventDefault();
          // tracciamento evento Presented
          callClickThru(offer, PRESENTED);
          //cta
          delayPageRedirect(abbonamentoLink(data[2].BUTTON.linkCTA, offer));
        });
        if (data[2].BUTTON.labelCTA != '') $(target).find('.faiDaTeBtn p').html(data[2].BUTTON.labelCTA);
        // se non c'è l'html per il testo promo, questo viene creato.
        if ($('.promo-row').size() == 0) {
          var html = '<div class="promo-row"><p class="promo-price"></p></div>';
          $('.final-cta-wrap').prepend(html);
          data[2].BUTTON.text += '<br/>';
        }
        $('.promo-price').html(data[2].BUTTON.text);
        // if (data[2].BUTTON.textColor != '') $('.promo-price').css('color', data[2].BUTTON.textColor);

        // tracciamento evento Visualized
        if (!flagVisualized) {
          flagVisualized = true;
          callClickThru(offer, VISUALIZED);
        }
        contentSuccess = true;
      }
    },
  });
  return contentSuccess;
}
*/
function getJsonContentForPacchetti(offer, index, default_content, default_filename) {

  if (default_content) {
    var urlBrick = path + rtdDefaultPath + default_filename + '.html';
  } else {
    var urlBrick = path + "rtd_" + offer.OFFER_CODE.split('.')[2] + ".html";
  }


  var contentSuccess = false;

  $.ajax({
    url: urlBrick,
    dataType: 'json',
    data: {
      "_": $.now()
    },
    async: false,
    success: function(data) {

      if (data[1]) {
        var titlePacchetti = $('.ParcoView_title');
		var disponibilitaPacchetti = $('.ParcoView_disponibilita');
        //BOX CONTENITORE
		$(titlePacchetti).each(function(){
			 $(this).html(data[1].OTHERS.titleRTDPanel);
		});
		$(disponibilitaPacchetti).html(data[1].OTHERS.text);
	    //CTA
        var targetAnchor = $(titlePacchetti).parent().find('a');
        $(targetAnchor).attr('href', abbonamentoLink(data[1].OTHERS.linkCTA, offer));
        $(targetAnchor).click(function(e) {
          e.preventDefault();
          // tracciamento evento Presented
          callClickThru(offer, PRESENTED);
          //cta
          delayPageRedirect(abbonamentoLink(data[1].OTHERS.linkCTA, offer));
        });
        //  if (data[1].OTHERS.colorCTA != '')   $(targetAnchor).css('color', data[1].OTHERS.colorCTA);
        if (data[1].OTHERS.labelCTA != '') $(targetAnchor).text(data[1].OTHERS.labelCTA);

        //nascondo la fascia 'non sei cliente'
        $('.switch_container.prospectSwitch').hide();

        // $('.bannerBig_imageItem').css('background-image', 'url(' + data[1].OTHERS.todo + ')');

        $('.switch_container').hide();

        // tracciamento evento Visualized
        if (!flagVisualized) {
          flagVisualized = true;
          callClickThru(offer, VISUALIZED);
        }
        contentSuccess = true;

      }

    },
  });

  return contentSuccess;
}

/*function getJsonContentForInfoDisdetta(offer, index, default_content, default_filename) {

  if (default_content) {
    var urlBrick = path_disdetta + rtdDefaultDisdettaPath + default_filename + '.html';
  } else {
    var urlBrick = path_disdetta + "brick_" + offer.OFFER_CODE.split('.')[2] + ".html";
  }


  var contentSuccess = false;

  $.ajax({
    url: urlBrick,
    dataType: 'json',
    data: {
      "_": $.now()
    },
    async: false,
    success: function(data) {

      if (data[3]) {
        var target = $('.bannerTop_container'); //seleziona i div sia parco che prospect
        //BOX CONTENITORE
          $(target).html("<a href=\"javascript:void(0)\" style=\"display:block;text-decoration:none;\"> <img src=\"//pnst.sky.it" + data[3].DISDETTA.imageDisdetta + "\"></a>");
		
		$(target).click (function(){
			callClickThru(offer, PRESENTED);
			callClickThru(offer, ACCEPTED);
            var redirect = data[3].DISDETTA.linkDisdetta;
            if (redirect != null && redirect !=""){
				window.location.href = redirect;
            }

		})
        // tracciamento evento Visualized
        if (!flagVisualized) {
          flagVisualized = true;
          callClickThru(offer, VISUALIZED);
        }
        contentSuccess = true;

      }

    },
  });

  return contentSuccess;
}
*/

/**
 * wrapper per chiamata con url calcolata da @link clickThru}
 * @param  {Object} offer     offerta selezionata
 * @param  {String} eventType tipo di evento (Visualized, Presented)
 */
function callClickThru(offer, eventType) {
  if (offer == undefined) return;
  if ($.cookie('RtdSessionId') && $.cookie('RtdContractCode') && eventType !== undefined) {
    jsonp_request(clickThru(offer, eventType));

    //   $.getJSON(clickThru(offer, eventType), {});


  }
}

/**
 * creazione url finale in base al tipo di evento
 * @param  {Object} offer     offerta selezionata, non definita in caso evento Alive
 * @param  {String} eventType tipo di evento (Visualized, Presented, Alive)
 * @return {String}           url finale da richiamare
 */
function clickThru(offer, eventType) {
  var url = document.location.protocol + '//' + unicaUrl + '/uiconnector/clickThru';
  var p = offer.page;
  var t = offer ? offer.TREATMENT_CODE : undefined;
  var s = $.cookie('RtdSessionId');
  var v = $.cookie('RtdContractCode');
  var l = 'Contratto';
  var lastevent = "";
  var u = "blank.html";
  var learn = '0';
  var session_flg_log = "";
  var clickThruUrl;

  switch (eventType) {
    case VISUALIZED:
      {
        clickThruUrl = url + '?u=' + u + '&p=' + p + '&t=' + t + '&e=' + eventType + '&s=' + s + '&v=' + v + '&l=' + l + '&learn=' + learn;
        break;
      }
    case PRESENTED:
      {
        var resp = 'EXP';
        clickThruUrl = url + '?u=' + u + '&p=' + p + '&t=' + t + '&e=' + eventType + '&s=' + s + '&v=' + v + '&l=' + l + '&resp=' + resp + '&learn=' + learn;
        break;
      }
	case ACCEPTED:
	  {
		var resp = 'CMT';
        clickThruUrl = url + '?u=' + u + '&p=' + p + '&t=' + t + '&e=' + eventType + '&s=' + s + '&v=' + v + '&l=' + l + '&resp=' + resp + '&learn=' + learn;
        break;
	  }

  }


    if (typeof(SESSION_FLG_LOG) != "undefined"){
        session_flg_log = SESSION_FLG_LOG;
		clickThruUrl += '&session_flg_log=' + session_flg_log;
    }


  return clickThruUrl;
}

function abbonamentoLink(href, offer) {
  if (offer == undefined) return;
  try {
    if (href.indexOf('wsc') != -1) { //monto gli URL per Arricchisci Abbonamento
      var hrefParts = new Array();
      hrefParts.push(WSC_HOST);
      hrefParts.push(offer.TREATMENT_CODE);
      hrefParts.push(offer.OFFER_CODE.split('.')[2]);
      return hrefParts.join('/').toLowerCase();
    } else {
      return href;
    }
  } catch (err) {
    return "#";
  }
}

/*
function abbonamentoLinkOld(href, offer) {
  if (href.indexOf('abbonamento') != -1) { //monto gli URL per Arricchisci Abbonamento
    if (href.indexOf('listino') != -1) {
      var listino = 'listino';
    } else {
      var listino = 'promozione';
    }
    var hrefParts = href.split('/');
    hrefParts.push(offer.TREATMENT_CODE);
    hrefParts.push(offer.OFFER_CODE.split('.')[2]);
    hrefParts.push(listino);
    hrefParts.push(offer.MAIN_PRODUCT);
    return hrefParts.join('/').toLowerCase();
  } else {
    return href;
  }
}
*/

function initRTD() {
    if ($.cookie("PETERWITT") != null){
      	SESSION_FLG_LOG = 1;
    }

    if ($.cookie('RtdSessionId') != null && $.cookie('RtdContractCode') != null && rtdContractCodeValidator.test($.cookie('RtdContractCode')) && rtdSessionIdValidator.test($.cookie('RtdSessionId'))) {
        RtdStart();
    } else if ($.cookie("ext") != null){
		return;
    }
}
var checkRtdDone = function(data) {
  USER_STATUS = data.response.userStatus;
  initRTD();
}
var check_RTD = function() {
  // call solo se esiste cookie peterwitt o ext
  if ($.cookie("PETERWITT") || $.cookie("ext")) {
    $.ajax({
      url: CHECK_RTD_URL,
      datatype: "json",
      contentType: "application/json",
      type: "POST",
      xhrFields: {
        withCredentials: true
      }
    }).done(function(data) {
      if (typeof checkRtdDone !== "undefined") {
        checkRtdDone(data);
      }
    }).fail(function(jqxhr, textStatus, error) {
      if (typeof checkRtdFail !== "undefined") {
        checkRtdFail(jqxhr, textStatus, error);
      }
    }).always(function() {
      if (typeof checkRtdAlways !== "undefined") {
        checkRtdAlways();
      }
    });
  } else {
    if (typeof checkRtdFail !== "undefined") {
      checkRtdFail();
    }
  }
}

var delayPageRedirect = function(cta) {
  setTimeout(function() {
    window.location.href = cta;
  }, 250);
}


$(function() {
  //  CHECK_RTD_URL = getSkyWSCUrl("/wscrest/loginServices/checkRTD", true);
  WSC_HOST = getSkyWSCUrl("/wscpub/preupselling/arricchisci/tutto", true);
  CHECK_RTD_URL = getSkyWSCUrl("/wscrest/loginServices/checkRTD", true);
  //CHECK_RTD_URL = "https://web.archive.org/web/20171123135720/https://collprj.abbonamento.sky.it/wscrest/loginServices/checkRTD"
  if (typeof CQ == "undefined") check_RTD();
});

function putInTheMiddle(){

    $(".col-cta > p").hide();
    $(".col-cta:first").hide();
    $(".col-cta:last").addClass("central");
    $(".final-cta-wrap p.promo-price").hide();
}

function hideCTA() {

	$('a.internalNavMenu_itemBtn.faiDaTeBtn.basicTransition.btnRounded').hide();
    $('div.col-cta').hide();
	$('.promo-price').hide();

}

}
/*
     FILE ARCHIVED ON 13:57:20 Nov 23, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:06:13 Jun 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 113.288
  exclusion.robots: 0.137
  exclusion.robots.policy: 0.131
  RedisCDXSource: 0.609
  esindex: 0.006
  LoadShardBlock: 94.216 (3)
  PetaboxLoader3.datanode: 84.957 (5)
  CDXLines.iter: 13.968 (3)
  PetaboxLoader3.resolve: 292.792 (3)
  load_resource: 577.064 (2)
*/