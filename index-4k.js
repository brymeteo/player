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

function dragCircle(){
  var topContentWidth = $('.top_content').width();
  var dragItem = $('.dragItem');
  var dragItemWidth = dragItem.width();

  var lastStop = topContentWidth - dragItemWidth;

  var dragStop = document.getElementById("top_content");
  var snapStops = [0, lastStop];

  var dragItem = Draggable.create("#dragItem", {
    type: "x",
    throwProps: true,
    bounds: dragStop,
    edgeResistance: 1,
    snap: snapStops,
    onDrag: changeQuality,
    onThrowUpdate: changeQuality,
    dragClickables: true,
  });

  function changeQuality() {
    // TweenMax.set(".panelWrap", { x: this.x * 6 });
    var movement = this.x;

    var dividerSaturate = 600;
    var dividerContrast = 240;

    var movementSaturate = .8 + movement/dividerSaturate;
    var movementContrast = 1 + movement/dividerContrast;


    TweenMax.set(".quattrok-drag_background", { '-webkit-filter': 'saturate(' + movementSaturate + ') contrast(' + movementContrast + ')' });

    if(movement == snapStops[0]){
      $('#hd').addClass('active').siblings().removeClass('active');
    }else if(movement == snapStops[1]){
      $('#4k').addClass('active').siblings().removeClass('active');
    }
  }

  $('.top_content-roundBox').on('click', function(){
    var dataSnap = $(this).data('snap');
    var snapToGo = snapStops[dataSnap];
    var duration = .6;

    TweenMax.to('.dragItem', duration, {x: snapToGo});

    if(snapToGo == snapStops[0]){
      $('#hd').addClass('active').siblings().removeClass('active');
      TweenMax.to(".quattrok-drag_background", duration, { '-webkit-filter': 'saturate(0.8) contrast(1)' });
    }else if(snapToGo == snapStops[1]){
      $('#4k').addClass('active').siblings().removeClass('active');
      TweenMax.to(".quattrok-drag_background", duration, { '-webkit-filter': 'saturate(1) contrast(1.6)' });
    }
  });
}


$(function(){
  dragCircle();
})


}
/*
     FILE ARCHIVED ON 12:51:33 Sep 29, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:59:58 Jul 03, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 126.852
  exclusion.robots: 0.241
  exclusion.robots.policy: 0.23
  RedisCDXSource: 0.805
  esindex: 0.007
  LoadShardBlock: 107.327 (3)
  PetaboxLoader3.datanode: 79.939 (4)
  CDXLines.iter: 15.77 (3)
  load_resource: 74.942
  PetaboxLoader3.resolve: 20.905
*/