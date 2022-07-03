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

    if (document.getElementsByClassName('modal').length > 0) {
        $.modal.init();
    }
});

$.modal = {

    init: function () {
        var _ww;
        var $modal = $('.modal');
        var _type = $modal.attr('data-modal');

        if (_type === 'sport') {
            $.modal.sportSwiper = undefined;
            $.modal.customScrollbar = undefined;
            $.modal.getJson();
            $.modal.initScrollbar();
            $.modal.setInteractions();
            $.modal.registerHelper();

            $(window).resize(function () {
                $.modal.initMobileCarousel();
                $.modal.initScrollbar();
            });
        }

        if (_type === 'cinema') {
            $.modal.getCinemaJson();
            $.modal.registerHelper();
//            $.modal.initScrollbar();


            $(window).resize(function () {
                $.modal.showModalText();
            });
        }
    },
    getJson: function (category) {
        var template = Handlebars.templates['modal.tmpl'];
        var _category = category;

        $.getJSON($('.modal--sport').attr('data-path') + 'events.json', function (context) {

            if ((_category !== undefined) && (_category !== 'all')) {
                var filterContext = {};
                var foundElements = $.grep(context.events, function (el) {

                    if (el.category.indexOf(_category) >= 0) {
                        return true;
                    }

                });
                filterContext = {
                    events: foundElements
                }
                context = filterContext;
            }

            var html = template(context);
            $('.js-swiper-wrapper').html(html);

            $('.js-swiper-wrapper').find('div[data-type]').each(function () {
                if ($(this).attr('data-type').indexOf('Esclusiva') !== -1) {
                    var logo = $(this).find('.modal__img--logo');
                    $('<span class="esclusiva">In esclusiva su </span>').insertBefore(logo);
                }
            });
            $.modal.initMobileCarousel();
        });

    },
    getCinemaJson: function () {
        var template = Handlebars.templates['modalCinema.tmpl'];

        $.getJSON($('.modal--cinema').attr('data-path') + 'movies.json', function (context) {
            var html = template(context);
            $('.js-cinema-modal-content').html(html);
            $.modal.showModalText();
            $.modal.initScrollbar();
        });

    },
    checkCondition: function (v1, operator, v2) {
        switch (operator) {
            case '==':
                return (v1 == v2);
            case '===':
                return (v1 === v2);
            case '!==':
                return (v1 !== v2);
            case '<':
                return (v1 < v2);
            case '<=':
                return (v1 <= v2);
            case '>':
                return (v1 > v2);
            case '>=':
                return (v1 >= v2);
            case '&&':
                return (v1 && v2);
            case '||':
                return (v1 || v2);
            default:
                return false;
        }
    },
    registerHelper: function () {
        Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
            return $.modal.checkCondition(v1, operator, v2)
                    ? options.fn(this)
                    : options.inverse(this);
        });
    },
    showModalText: function () {
        $('.modal__text--description').each(function () {
            var _text = $(this).find('.js-text-height');
            var _textHeight = _text.outerHeight();
            var _containerTextHeight = $(this).outerHeight();

            if (_textHeight > _containerTextHeight) {
                $(this).siblings('.modal__cta--more').addClass('modal__cta--show');
            }
        });

        $('.js-all-modal-content').click(function () {
            $(this).removeClass('modal__cta--show');
            $(this).siblings('.modal__text--description').css('max-height', 'none');
            $(this).siblings('.js-partial-modal-content').addClass('modal__cta--show');
        });

        $('.js-partial-modal-content').click(function () {
            $(this).removeClass('modal__cta--show');
            $(this).siblings('.modal__text--description').removeAttr('style');
            $(this).siblings('.js-all-modal-content').addClass('modal__cta--show');
        });
    },
    initScrollbar: function ()Â {
        var $container = $('.modal__body');
        var _ww = $(window).width();

        if (_ww >= 768 && $.modal.customScrollbar === undefined) {
            $container.mCustomScrollbar({
                theme: 'skyCustomSb',
                scrollbarPosition: 'outside'
            });
            $.modal.customScrollbar = 1;
        } else if (_ww < 768 && $.modal.customScrollbar !== undefined) {
            $container.mCustomScrollbar('destroy');
            $.modal.customScrollbar = undefined;
        }
    },
    initMobileCarousel: function ()Â {
        var _elemClass = '.js-swiper-modal-sport';
        var _wrapperClass = $(_elemClass).find('.mCSB_container');
        var _ww = $(window).width();

        if (_ww < 760 && $.modal.sportSwiper === undefined) {
            $('.js-swiper-modal-sport').addClass('modal--sport-shown');
            $('.js-swiper-wrapper').addClass('swiper-wrapper');
            $.modal.sportSwiper = new Swiper(_elemClass, {
                pagination: '.swiper-pagination',
                loop: false,
                slidesPerView: 'auto',
                centeredSlides: true,
                paginationClickable: true,
                observer: true,
                'onPaginationRendered': function (swiper) {
//          console.log(swiper.slides.length);
                    if (swiper.slides.length > 1) {
                        $('.swiper-pagination').addClass('swiper-pagination--show');
                    } else {
                        $('.swiper-pagination').removeClass('swiper-pagination--show');
                    }
                }
            });
        } else if (_ww >= 768 && $.modal.sportSwiper !== undefined) {
            $.modal.destroyMobileCarousel();
        }
    },
    destroyMobileCarousel: function () {
        $.modal.sportSwiper.destroy(true, true);
        $.modal.sportSwiper = undefined;
        $('.js-swiper-wrapper').removeClass('swiper-wrapper');
        $('.swiper-pagination').html('');
    },
    setInteractions: function () {
        $('.js-modal-filter').click(function (e) {
            var _type = $(this).attr('data-filter');
            e.preventDefault;
            if ($.modal.sportSwiper !== undefined) {
                $.modal.destroyMobileCarousel();
                $('.js-swiper-modal-sport').removeClass('modal--sport-shown');
            }
            $.modal.filterElement(_type, $(this));
            return false
        });
    },
    filterElement: function (type, filter) {
        var $elem = $('.modal__block');
        $(filter).addClass('is-active').siblings().removeClass('is-active');
        $.modal.getJson(type);
    }
};

}
/*
     FILE ARCHIVED ON 12:51:33 Sep 29, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:56:08 Jul 03, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 71.695
  exclusion.robots: 0.312
  exclusion.robots.policy: 0.298
  RedisCDXSource: 0.801
  esindex: 0.013
  LoadShardBlock: 48.129 (3)
  PetaboxLoader3.datanode: 52.502 (4)
  CDXLines.iter: 18.936 (3)
  load_resource: 176.982
  PetaboxLoader3.resolve: 61.943
*/