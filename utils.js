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

$(function () {

  $.utils.init();

});

$.utils = {

  init: function () {
    var _el = document.getElementsByTagName('html')[0];

    $.utils.checkUserAgent(_el);
    $.utils.checkTouch(_el);

  },
  checkUserAgent: function(el) {
    var _ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var _safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var _ie = $.utils.checkIe();
    var _ff = /firefox/i.test(navigator.userAgent);

//    console.log(el);

  //		console.log(window.navigator.userAgent);

    if (_ios) {
//      el.classList.add('ios');
      $(el).addClass('ios');
    } else {
//      el.classList.remove('ios');
      $(el).removeClass('ios');
    }

    if (_safari) {
//      el.classList.add('safari');
      $(el).addClass('safari');
    } else {
//      el.classList.remove('safari');
      $(el).removeClass('safari');
    }

    if (_ie) {
//      el.classList.add(_ie);
      $(el).addClass(_ie);
    } else {
//      el.classList.remove(_ie);
      $(el).removeClass(_ie);
    }

    if (_ff) {
//      el.classList.add('firefox');
      $(el).addClass('firefox');
    } else {
//      el.classList.remove('firefox');
      $(el).removeClass('firefox');
    }
  },
  checkIe: function() {
    var _ua = window.navigator.userAgent;
    var _version;
    var _msie;
    var _trident;
    var _edge;

    _msie = _ua.indexOf('MSIE ');
    if (_msie > 0) {

      _version =  parseInt(_ua.substring(_msie + 5, _ua.indexOf('.', _msie)), 10);
      return 'ie' + _version;
    }

    _trident = _ua.indexOf('Trident/');
    if (_trident > 0) {

      var _rv = _ua.indexOf('rv:');
      _version =  parseInt(_ua.substring(_rv + 3, _ua.indexOf('.', _rv)), 10);
      return 'ie' + _version;
    }

    _edge = _ua.indexOf('Edge/');
    if (_edge > 0) {

      _version =  parseInt(_ua.substring(_edge + 5, _ua.indexOf('.', _edge)), 10);
      return 'edge' + _version;
    }

    return false;
  },
  checkTouch: function(el) {
    var isTouch = 'ontouchstart' in document.documentElement;

    if (isTouch) {
//      el.classList.add('touch');
      $(el).addClass('touch');
    } else {
//      el.classList.add('no-touch');
      $(el).addClass('no-touch');
    }
  }

};

}
/*
     FILE ARCHIVED ON 12:51:32 Sep 29, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:56:07 Jul 03, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1823.793
  exclusion.robots: 0.165
  exclusion.robots.policy: 0.158
  cdx.remote: 0.056
  esindex: 0.007
  LoadShardBlock: 59.17 (3)
  PetaboxLoader3.datanode: 91.001 (4)
  CDXLines.iter: 14.327 (3)
  load_resource: 124.93
  PetaboxLoader3.resolve: 60.003
*/