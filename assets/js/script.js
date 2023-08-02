(function ($) {
    "use strict";

    var slopeADV = {
        
        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 150) {
                    fixed_top.addClass("sticky");
                } else {
                    fixed_top.removeClass("sticky");
                }
            });
        },

        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {
            var hero_slider = new Swiper('.hero_slider', {
                slidesPerView: 1,
                spaceBetween: 0,
                autoplay: {
                    delay: 0,
                },
                loop: true,
                speed: 2000,
                centeredSlides: true,
                disableOnInteraction: true,
                breakpoints: {
                    576: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 3.5,
                    },
                }
            }); 
            var project_slider = new Swiper('.project_slider', {
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 5000,
                },
                loop: true,
                speed: 1000,
                centeredSlides: true,
                slideToClickedSlide: true,
                breakpoints: { 
                    576: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    992: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                    },
                },
            });
            
            var service_slider = new Swiper('.service_slider', {
                slidesPerView: 1.5,
                spaceBetween: 10,
                autoplay: {
                    delay: 4000,
                },
                loop: true,
                speed: 1000,
                centeredSlides: true,
                slideToClickedSlide: true,
                breakpoints: { 
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1360: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },                
            }); 
            var clients_slider = new Swiper('.clients_slider', {
                slidesPerView: 2,
                spaceBetween: 10,
                autoplay: {
                    delay: 5000,
                },
                loop: true,
                speed: 1000,
                centeredSlides: true,
                breakpoints: { 
                    400: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    576: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }
            }); 
        },

        glightbox: function(){
            const lightbox = GLightbox({
                touchNavigation: true,
                loop: true,
                autoplayVideos: true
            });
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                `<a href='#home' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg></a>`
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#home']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        initialize: function() {
			slopeADV.scroll_to_top();
			slopeADV.sticky_header();
			slopeADV.swiperCarousel();
			slopeADV.glightbox();
		}
    };
    $(function() {
		slopeADV.initialize();
	});

})(jQuery);

/* ============================================================ */
/* PRELOADER
/* ============================================================ */
$(window).on('load', function() {
    $(".preloader").fadeOut();     
});
    

function ImagesliderApp(el) {
    this.el = el;

    el.addEventListener("mousemove", updateSlider.bind(this));
    el.addEventListener("touchstart", updateSlider.bind(this));
    el.addEventListener("touchmove", updateSlider.bind(this));
}

function updateSlider(e) {
    var rightImageContainer = this.el.querySelector(".hero-wrapper");
    var {
        left,
        width
    } = rightImageContainer.getBoundingClientRect();
    var pageX = e.type == "mousemove" ? e.pageX : e.changedTouches[0].pageX;
    var position = ((pageX - left) / width) * 100;

    if (position < 100 && position > 0) {
        this.el.querySelector(".hero-clipping-wrapper").style.width = `${position}%`;
        this.el.querySelector(".handlebar_wrapper").style.left = `${position}%`;
    }
}

var hero = document.getElementById("hero-section");

setTimeout(function() {
    ImagesliderApp(hero);
}, 1000);   


wow = new WOW({
    resetAnimation: true,
});
wow.init();