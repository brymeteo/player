
(function() {

  /* jshint ignore:start */
  //Promise polyfill
  !function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(){}function n(e){if(!(this instanceof n))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],f(e,this)}function t(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,n._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var i;try{i=n(e._value)}catch(f){return void r(t.promise,f)}o(t.promise,i)}else(1===e._state?o:r)(t.promise,e._value)})):e._deferreds.push(t)}function o(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var o=t.then;if(t instanceof n)return e._state=3,e._value=t,void i(e);if("function"==typeof o)return void f(function(e,n){return function(){e.apply(n,arguments)}}(o,t),e)}e._state=1,e._value=t,i(e)}catch(u){r(e,u)}}function r(e,n){e._state=2,e._value=n,i(e)}function i(e){2===e._state&&0===e._deferreds.length&&n._immediateFn(function(){e._handled||n._unhandledRejectionFn(e._value)});for(var o=0,r=e._deferreds.length;r>o;o++)t(e,e._deferreds[o]);e._deferreds=null}function f(e,n){var t=!1;try{e(function(e){t||(t=!0,o(n,e))},function(e){t||(t=!0,r(n,e))})}catch(i){if(t)return;t=!0,r(n,i)}}var u=function(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})},c=setTimeout;n.prototype["catch"]=function(e){return this.then(null,e)},n.prototype.then=function(n,o){var r=new this.constructor(e);return t(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(n,o,r)),r},n.prototype["finally"]=u,n.all=function(e){return new n(function(n,t){function o(e,f){try{if(f&&("object"==typeof f||"function"==typeof f)){var u=f.then;if("function"==typeof u)return void u.call(f,function(n){o(e,n)},t)}r[e]=f,0==--i&&n(r)}catch(c){t(c)}}if(!e||"undefined"==typeof e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n(function(n){n(e)})},n.reject=function(e){return new n(function(n,t){t(e)})},n.race=function(e){return new n(function(n,t){for(var o=0,r=e.length;r>o;o++)e[o].then(n,t)})},n._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){c(e,0)},n._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();l.Promise?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=u):l.Promise=n});
  // Array.prototype.find polyfill
  Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(r){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),t=e.length>>>0;if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var n=arguments[1],i=0;i<t;){var o=e[i];if(r.call(n,o,i,e))return o;i++}},configurable:!0,writable:!0});
  /* jshint ignore:end */

  //override local console.

  var console = window.console; // console is then overridden with console defined into util.js

  //var jquery;
  var loadScript = function(src, attr) {
    console.log("[CTLIVE SDK] Loading Script [" + src + "]");
    return new Promise(
      function(resolve /*, reject*/) {
        var script = document.createElement("script");
        script.onload = function () {
          resolve();
        };
        script.src = src;
        if (attr) {
          Object.keys(attr).forEach(
            function(key){
              script.setAttribute(key,attr[key]);
            }
          );
        }
        document.head.appendChild(script);
      }
    );
  };

  function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

  var fetchDomain = function() {
    var myScript = document.querySelector('script[src*="livechatsdk.js"]');
    var tenant = "DEFAULT";
    if (!myScript) {
      console.error("[CTLIVE SDK] Script location not found");
      return tenant;
    }
    tenant = myScript.src.replace(/^(.*\/livechat\/(.*)\/lib).*/,"$2").toUpperCase();
    if ( typeof domain !== "undefined" ) {
      console.log("[CTLIVE SDK] Domain", domain);
    }
    return tenant;
  };

  var fetchLocalDomain = function() {
    var myScript = document.querySelector('script[src*="livechatsdk.js"]');
    if (!myScript) {
      console.error("[CTLIVE SDK] Script location not found");
      return;
    }
    var baseUrl = myScript.src.replace(/^(.*\/livechat\/).*/,"$1") + fetchDomain() + "/";
    console.log("[CTLIVE SDK] Base URL", baseUrl);
    return baseUrl;
  };

  var getQueryVariable = function (url,variable) {
    var query = url.substring(url.indexOf("?") + 1, url.length);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if(pair[0] == variable){return pair[1];}
    }
    return(false);
  };

  var detectLanguage = function () {
    var lang = "";
    var myScript = document.querySelector('script[src*="livechatsdk.js"]');
    if (myScript !== null ) {
      var src = myScript.getAttribute("src");
      if ( src.indexOf("lang=") > - 1 ) {
        lang = getQueryVariable(src, "lang");
      }
    }
    return lang;
  };

  var config;
  var domain = fetchDomain();
  var serverDomain = fetchLocalDomain();
  var language = detectLanguage();
  var widgets = {};
  var LIVECHAT = null;
  var require = null;

  var loadConfig = function () {
    console.log("[CTLIVE SDK] - loadConfig");
    return Promise.resolve(require(['jquery']))
    .then(function(jquery) {
      return jquery.ajax({
        url: serverDomain + 'config',
        data: { r : window.location.origin + window.location.pathname },
        jsonp:"callback",
        dataType:"jsonp"
      });
    })
    .then(function(_config) {
      var enableConfig = {};
      enableConfig.services = _config.services;
      config = enableConfig;
      return config;
    });
  };

  var loadConfigByServiceID = function (serviceID) {
    console.log("[CTLIVE SDK] - loadConfig");
    return Promise.resolve(require(['jquery']))
    .then(function(jquery) {
      return jquery.ajax({
        url: serverDomain + 'config/' + serviceID,
        jsonp:"callback",
        dataType:"jsonp"
      });
    })
    .then(function(_config) {
      var enableConfig = {};
      enableConfig.services = _config.services;
      config = enableConfig;
      return config;
    });
  };

  var createWidget = function () {
    console.log("[CTLIVE SDK] Create Widget");
    return Promise.all(config.services.map(function (s) {
      return Promise.resolve(require([s.widget.require]))
      .then(function (w) {
        // Se lingua e' impostata tramite parametro di query string lang=, uso quella
        if ( language !== null && language.length > 0 ) {
          LIVECHAT.LANG = language;
        } else if ( typeof s.language !== "undefined" && s.language !== null && s.language.length > 0 ) {
          // Altrimenti imposto lingua in base a parametro language nel servizio
          LIVECHAT.LANG = s.language;
        } else {
          // Default
          LIVECHAT.LANG = "en-gb";
        }

        LIVECHAT.DOMAIN = domain;
        widgets[s.widget.id] = new w(s, serverDomain);
      });
    }));
  };

  var injectIFrame = function($,LIVECHAT) {
    return Promise.resolve(require('util'))
    .then(function(util){
      // Injection iframe per settare cookie nel dominio serverDomain
      if ($(".licha_connector_iframe").length == 0) {
        $("body").append("<iframe class=\"licha_connector_iframe\" id=\"" + LIVECHAT.ConnectorIframeID + "\" src=\"" + LIVECHAT.url + "lib/core/liveChatConnector.html\" style=\"display: none;\"></iframe>");
      }
      return new Promise(function(resolve /*,reject*/){
        util.eventEmitter.once('connectorLoaded',function(event){
          console.log("[CTLIVE SDK] Received connectorLoaded",event);
          console.log("[CTLIVE SDK] IFrame injected");
          resolve(event);
        });
  
      });
    /*
      $("#" + LIVECHAT.ConnectorIframeID).on('load', function() {
        console.log("IFrame loaded");
        resolve();
      });
      */
    });
  };


  var getContactInfo = function() {
    var postData = {};
    postData.command = "getContact";
    return Promise.resolve(require('util'))
    .then(function(util) {
      return new Promise(function(resolve){
        document.getElementById(LIVECHAT.ConnectorIframeID).contentWindow.postMessage(JSON.stringify(postData), "*");
        util.eventEmitter.once('contactInfo',function(event){
          console.log("[CTLIVE SDK] Received contactInfo",event);
          resolve(event);
        });
      });
    });
  };

  var deleteChatIDCookie = function (chat_id) {
    // Rimuovo cookie chat id
    var postData = {};
    postData.command = "contactRemoved";
    postData.chatid = chat_id;
    return Promise.resolve(require('util'))
    .then(function() {
      return new Promise(function(resolve){
        document.getElementById(LIVECHAT.ConnectorIframeID).contentWindow.postMessage(JSON.stringify(postData), "*");
        resolve();
      });
    });
  };
  

  var checkPersistence = function() {
    var LICHA_Obj = null;
    var lang = "";
    var contact = null;
    console.log("[CTLIVE SDK] Check Persistence");
    return new Promise(function(resolve) {
      require(['jquery','liveChatProtocol'],function(jquery,livechat){
        resolve({
          jquery:jquery,
          livechat:livechat}
        );
      });
    })
    .then(function(libs){
      var $ = libs.jquery;
      LIVECHAT = libs.livechat;
      LIVECHAT.url = serverDomain;
      return injectIFrame($,LIVECHAT);
    })
    .then(function(){
      // Recupero da config id servizi attivi e li metto in LIVECHAT.Hash_Active_ServiceID_Widget_DOMID
      var i = 0;
      for ( i = 0; i < config.services.length; i++ ) {
        LIVECHAT.Hash_Active_ServiceID_Widget_DOMID[config.services[i].id] = "";
      }
      return Promise.resolve();
    })
    .then(getContactInfo)
    .then(function(ev){
      console.log("[CTLIVE SDK] - Persistence contactInfo is:", ev);
      if (!ev.chatid) {
        return Promise.reject("NotFound");
      }
      console.log("[CTLIVE SDK] Persistence ChatID is: " + ev.chatid );
      return Promise.resolve(require('liveChatProtocol'))
      .then(function(LICHA){
        LICHA_Obj = LICHA;
        LICHA.DOMAIN = domain;
        LICHA.isChatLive = true;
        return LICHA.getContactByChatID(ev.chatid);
      })
      .then(function(data) {
        contact = data.contact;
        console.log("[CTLIVE SDK] Persistence contact is:", contact);
        return Promise.resolve();
      })
      .then(function() {
        // Se lingua e' impostata tramite parametro di query string lang=, uso quella
        if ( language !== null && language.length > 0 ) {
          lang = language;
        } else {
          // Altrimenti imposto lingua in base a parametro language nel servizio
          if ( typeof contact !== "undefined" && contact !== null ) {
            for ( var j = 0; j < config.services.length; j++ ) {
              if ( contact.servid === config.services[j].id ) {
                if ( typeof config.services[j].language !== "undefined" && config.services[j].language !== null && config.services[j].language.length > 0 ) {
                  lang = config.services[j].language;
                }
              }
            }
          }
        }
        if ( lang.length === 0 ) {
          // Default
          lang = "en-gb";
        }
        LICHA_Obj.LANG = lang;
        return Promise.resolve();
      })
      .then(function(){
        // Localizzazine: recupero literal globali
        return LIVECHAT.getGlobalLiteralsFromFile(lang);
      })
      .then(function(data){
        // Localizzazione: metto literal global in LIVECHAT.Literals_Global_Tenant
        console.log("[CTLIVE SDK] Localization: get global literals [" + lang + "]", data);
        if ( data.result === true ) {
          LIVECHAT.Literals_Global_Tenant = data.literals;
        }
        return Promise.resolve();
      })
      .then(function(){
        // Localizzazine: recupero literal tenant
        return LIVECHAT.getLiterals(lang, "tenant");
      })
      .then(function(data){
        // Localizzazione: faccio merge dei literal tenant con oggetto LIVECHAT.Literals_Global_Tenant
        console.log("[CTLIVE SDK] Localization: get tenant literals [" + lang + "]", data);
        if ( data.result === true ) {
          Object.assign(LIVECHAT.Literals_Global_Tenant, data.literals);
        }
        return Promise.resolve();
      })
      .then(function(){
        // Localizzazine: recupero literal service
        return LIVECHAT.getLiterals(lang, "service", contact.servid);
      })
      .then(function(data){
        // Localizzazione: faccio merge dei literal service con oggetto LIVECHAT.Literals_Global_Tenant
        console.log("[CTLIVE SDK] Localization: get service literals [" + lang + "]", data);
        if ( data.result === true ) {
          Object.assign(LIVECHAT.Literals_Global_Tenant, data.literals);
        }
        console.log("[CTLIVE SDK] Localization: Literals_Global_Tenant", LIVECHAT.Literals_Global_Tenant);
        return Promise.resolve();
      })
      .then(function(data){
        if (!contact) {
          // Cookie LIVECHAT_CONTACT presente, ma chat non piu' attiva: elimino cookie e setto flag isChatLive a false
          console.log("[CTLIVE SDK] Persistence contact not found. Delete LIVECHAT_CONTACT [" + ev.chatid + "] from storage");
          LIVECHAT.isChatLive = false;
          deleteChatIDCookie(ev.chatid);
          return Promise.reject("NotFound");    
        } else {
          // Verifico che contatto non sia gia' terminato
          if ( typeof contact.endTime !== "undefined" && contact.endTime !== null && contact.endTime.toString().length > 0 ) {
            // Chat gia' terminata: elimino cookie e setto flag isChatLive a false
            console.log("[CTLIVE SDK] Persistence contact found but already ended. Delete LIVECHAT_CONTACT [" + ev.chatid + "] from storage");
            LIVECHAT.isChatLive = false;
            deleteChatIDCookie(ev.chatid);
            return Promise.reject("NotFound");
          } else {
            // Verifico che contatto sia di tipo chat e non call, cbn, cbl, cbfs
            if ( contact.ctlive_type === "chat" ) {
              console.log("[CTLIVE SDK] Persistence retrieve chat:" + ev.chatid);
              return retrieveChat(contact);
            } else {
              // Termino contatto
              // widgets[contact.widgetid].recoveryByContact(contact);
              if ( contact.ctlive_type === "call" ) {
                LIVECHAT.endCallContact(ev.chatid, false);
              } else if ( contact.ctlive_type === "cbn" ) {
                LIVECHAT.endCallbackContact(ev.chatid, false, "cbn");
              } else if ( contact.ctlive_type === "cbl" ) {
                LIVECHAT.endCallbackContact(ev.chatid, false, "cbl");
              } else if ( contact.ctlive_type === "cbfs" ) {
                LIVECHAT.endCallbackContact(ev.chatid, false, "cbfs");
              }
              return Promise.reject("invalid ctlive_type: " + contact.ctlive_type);
            }
          }
        }
      });
    })
    .catch(function(err){
      console.log("[CTLIVE SDK] Persistence received error:", err);
      return Promise.reject(err || "internal error");
    }); 
  };

  var retrieveChat = function(contact) {
    console.log("[CTLIVE SDK] retrieveChat for serviceID:" + contact.servid);
    var service = {};
    return loadConfigByServiceID(contact.servid)
    .then(function(config){
      service = config.services.find(function(s) {
        return s.id === contact.servid;
      });
  
      if (!service) {
        console.error("[CTLIVE SDK] retrieveChat error - service not found for servid:" + contact.servid);
        return Promise.reject("ServiceNotFound");
      }
      return Promise.resolve(require([service.widget.require]));
    })
    .then(function (w) {
      widgets[service.widget.id] = new w(service, serverDomain);
      /*
      var i = 0;
      var keys_array = Object.keys(widgets);
      for ( i = 0; i < keys_array.length; i++ ) {
        widgets[keys_array[i]].startCheckMedia();
      }
      */
      widgets[contact.widgetid].recoveryByContact(contact);
    });
    
  };

  var startLicha = function() {
      checkPersistence()
      .catch(function(err){
        console.log("[CTLIVE SDK] Start received error:", err);
        return createWidget();
      });
  };

  var startWindowListener = function() {
    console.log("[CTLIVE SDK] startWindowListener");
    return Promise.resolve(require('util'))
    .then(function(util){
      window.addEventListener("message", function(event) {
        //console.log("[CTLIVE SDK] received event:", event);
        var livechat_domain = serverDomain.replace('http://','').replace('https://','').split(/[/?#]/)[0];
        livechat_domain = livechat_domain.toLowerCase();
        var message_domain = event.origin;
        message_domain = message_domain.replace('http://','').replace('https://','').split(/[/?#]/)[0];
        message_domain = message_domain.toLowerCase();

        //console.log("[CTLIVE SDK] Message domain", message_domain);
        //console.log("[CTLIVE SDK] CTLive  domain", livechat_domain);
        // Elabora solo i messaggi provenienti dal server domain dove e' stata scaricata la libreria di CTLive
        if (message_domain == livechat_domain) {
          var v = null;
          if (typeof event.data === "string" && IsJsonString(event.data)) {
            v = JSON.parse(event.data);
          } else {
            v = event.data;
          }
          if (v && v.command) {
            console.log("[CTLIVE SDK] Emit event:", v.command);
            util.eventEmitter.emit(v.command, v);
          } 
        }
      });
    });  
  };

  // Breve guida per il caricamento delle librerie:
  // Sintassi AMD (Asynchronous Module Definition):
  //    - esempio "amdlib/@joeattardi/emoji-button/dist/index.js?define=__ctliveDefine" 
  //      Verrà caricata la libreria situata in node_modules nel percorso indicato a partire da "@joeattardi"
  //      Il percorso delle libreria all'interno della cartella node_modules è gestito direttamente dal packet manager di Node e si basa sulle 
  //      dipendenze indicate in package.json
  //
  //
  // Sintassi non AMD: 
  //    - esempio "lib/emoji"
  //      Verrà caricata la libreria situata nella cartella "public\lib"
  //
  //      **** A CHE SERVE il parametro __ctliveDefine ? ****
  //      La configurazione che usiamo di curl.js prevede che la direttiva define si chiami __ctliveDefine.
  //      Per questo una libreria per venire correttamente caricata non deve avere la direttiva define (che non è definita da curl.js) ma la direttiva __ctliveDefine
  //      L'abbiamo fatto per evitare che in un sito web che utilizza già un loader ci siano conflitti con la nostra curl.js
  //      In caso contrario si potrebbe riscontrare il seguente errore in console: !!!! define() missing or duplicated !!!!
  //      Puo' quindi essere necessario sostituire nel codice della libreria presente in ublic\lib la direttiva define con __ctliveDefine.
  // 
  // Una volta assegnato un nome simbolico (per esempio "EmojiButton") si potrà direttamente avere la istanza della libreria o nel costruttore
  // della classe base del Widget:
  //   module.exports = factory( require("EmojiButton") );
  //   |                  
  //   define([ "EmojiButton" ], function( {EmojiButton} ) {
  //
  // oppure su richiesta utilizzando il caricamento dinamico dei moduli di RequireJS:
  //   require("EmojiButton")

  window.__ctliveOriginalCurl = window.curl;
  window.curl = {
    apiName: "__ctliveCurl",
    defineName: "__ctliveDefine",
    baseUrl: serverDomain,
    paths: {
        util: "lib/util",
        liveChatProtocol: "lib/core/liveChatProtocol", 
        socketIOClient: "amdlib/socket.io-client/dist/socket.io.min.js?define=__ctliveDefine",
        "jquery": "amdlib/jquery/dist/jquery.min.js?define=__ctliveDefine",
        "jquery-ui-dist": "amdlib/jquery-ui-dist/jquery-ui.min.js?define=__ctliveDefine",
        he: "amdlib/he/he.js?define=__ctliveDefine",
        EmojiButton: "amdlib/@joeattardi/emoji-button/dist/emoji.js?define=__ctliveDefine",
        EmojiShortcut: "lib/emoji_shortcut",
        SIP: "amdlib/sip.js/sip.min.js?define=__ctliveDefine",
        UAParser: "amdlib/ua-parser-js/dist/ua-parser.min.js?define=__ctliveDefine",
        customDocument: "customDocument"
    },
  };

  var loadjQueryWithoutConflict = function () {
    return Promise.resolve(require('jquery'))
    .then(function () {
      var jq = jQuery.noConflict(true);
      console.log("[CTLIVE SDK] jQuery version:" + jq.fn.jquery);
      window.lichaJQuery = jq; //To debug only
    });
  };

  var changeConsole = function() {
    require('util')
    .then(function(util){
      console = util.initConsole();
      window.lichaUtil = util;
    });
  };

  loadScript(fetchLocalDomain() + 'lib/curl-amd/dist/curl/curl.js').then(function(){
    window.curl = window.__ctliveOriginalCurl;
    /* global __ctliveCurl */
    require = __ctliveCurl;
  })
  .then(changeConsole)
  .then(loadjQueryWithoutConflict)
  .then(startWindowListener)
  .then(loadConfig)
  .then(startLicha)

  //.then(createWidget)
  .catch(console.error);



  
  
})(); 