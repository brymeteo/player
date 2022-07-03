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

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modal.tmpl'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n    <div class=\"modal__block swiper-slide modal__block--sport\" data-type=\""
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"modal__item modal__item--small "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.firstTeam : depth0),"||",(depth0 != null ? depth0.secondTeam : depth0),{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n            <div class=\"modal__row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.typeSlug : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <h3 class=\"modal__title\">\n                    "
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\n                </h3>\n            </div>\n            <div class=\"modal__row has-overflow\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.firstTeam : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.secondTeam : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"modal__item modal__item--large\">\n            <h3 class=\"modal__title\">\n                "
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\n            </h3>\n            <ul class=\"modal__info\">\n                <li class=\"modal__info__item modal__info__item--mobile\">\n                    "
    + alias4(((helper = (helper = helpers.date_long || (depth0 != null ? depth0.date_long : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date_long","hash":{},"data":data}) : helper)))
    + "\n                </li>\n                <li class=\"modal__info__item modal__info__item--desktop\">\n                    "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n                </li>\n                <li class=\"modal__info__item modal__info__item--desktop\">\n                    "
    + alias4(((helper = (helper = helpers.date_short || (depth0 != null ? depth0.date_short : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date_short","hash":{},"data":data}) : helper)))
    + "\n                </li>\n                <li class=\"modal__info__item modal__info__item--desktop\">\n                    "
    + alias4(((helper = (helper = helpers.hour || (depth0 != null ? depth0.hour : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hour","hash":{},"data":data}) : helper)))
    + "\n                </li>\n            </ul>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.channelSlug : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "modal__item--border";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <img class=\"modal__img modal__img--competition"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.firstTeamSlug : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.secondTeamSlug : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" src=\"/etc/designs/skycommon/html/content/skyit/it/newSky-common/img/modale-eventi/"
    + container.escapeExpression(((helper = (helper = helpers.typeSlug || (depth0 != null ? depth0.typeSlug : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"typeSlug","hash":{},"data":data}) : helper)))
    + ".png\" alt=\"\">\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " modal__img--no-teams";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"modal__badge"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.secondTeam : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.firstTeamSlug : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <div class=\"modal__badge__description\">\n                        "
    + container.escapeExpression(((helper = (helper = helpers.firstTeam || (depth0 != null ? depth0.firstTeam : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"firstTeam","hash":{},"data":data}) : helper)))
    + "\n                    </div>\n                </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " modal__badge--no-sep";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <img class=\"modal__img modal__img--team\" src=\"/etc/designs/skycommon/html/content/skyit/it/newSky-common/img/modale-eventi/"
    + container.escapeExpression(((helper = (helper = helpers.firstTeamSlug || (depth0 != null ? depth0.firstTeamSlug : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"firstTeamSlug","hash":{},"data":data}) : helper)))
    + ".png\" alt=\"\">\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"modal__badge"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.firstTeam : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.secondTeamSlug : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <div class=\"modal__badge__description\">\n                        "
    + container.escapeExpression(((helper = (helper = helpers.secondTeam || (depth0 != null ? depth0.secondTeam : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"secondTeam","hash":{},"data":data}) : helper)))
    + "\n                    </div>\n                </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <img class=\"modal__img modal__img--team\" src=\"/etc/designs/skycommon/html/content/skyit/it/newSky-common/img/modale-eventi/"
    + container.escapeExpression(((helper = (helper = helpers.secondTeamSlug || (depth0 != null ? depth0.secondTeamSlug : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"secondTeamSlug","hash":{},"data":data}) : helper)))
    + ".png\" alt=\"\">\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <img class=\"modal__img modal__img--logo\" src=\"/etc/designs/skycommon/html/content/skyit/it/newSky-common/img/modale-eventi/"
    + alias4(((helper = (helper = helpers.channelSlug || (depth0 != null ? depth0.channelSlug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"channelSlug","hash":{},"data":data}) : helper)))
    + ".png\" alt=\"image "
    + alias4(((helper = (helper = helpers.channelSlug || (depth0 != null ? depth0.channelSlug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"channelSlug","hash":{},"data":data}) : helper)))
    + "\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.events || (depth0 != null ? depth0.events : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"events","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.events) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});
})();

}
/*
     FILE ARCHIVED ON 12:51:33 Sep 29, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:02:12 Jul 03, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 110.024
  exclusion.robots: 0.182
  exclusion.robots.policy: 0.176
  cdx.remote: 0.061
  esindex: 0.008
  LoadShardBlock: 85.759 (3)
  PetaboxLoader3.datanode: 53.969 (4)
  CDXLines.iter: 15.308 (3)
  PetaboxLoader3.resolve: 62.195 (2)
  load_resource: 56.939
*/