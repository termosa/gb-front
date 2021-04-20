$(function() {
    function initBannerSlider() {
        var $slider = $("#app-h-banner-slider");

        $slider.on('init', function(event, slick, direction) {
            $slider.css("opacity", 1);
        });

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    function initProductsSlider() {
        var $slider = $("#app-h-product-slider");

        $slider.on('init', function(event, slick, direction) {
            $slider.css("opacity", 1);
        });

        $slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {

            var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

            if ($slider.next().hasClass("app-h-progress-wrapper")) {
                $slider.next().find(".app-h-progress").css('background-size', calc + '% 100%')
                    .attr('aria-valuenow', calc);
                $slider.next().find(".app-h-progress__label").text(calc + '% completed');
            }
        });

        $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

    function initMostFunSlider() {
        var $slider = $("#app-h-mf-slider");

        $slider.on('init', function(event, slick, direction) {
            $slider.css("opacity", 1);
        });

        $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            // autoplay: true,
            // autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            }]
        });
    }

    function initMediaSlider() {
        var $slider = $("#app-h-media-slider");

        $slider.on('init', function(event, slick, direction) {
            $slider.css("opacity", 1);
        });

        $slider.slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 800,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            }]
        });
    }

    function initShopSlider() {
        var $slider = $("#app-h-shop-slider");

        $slider.on('init', function(event, slick, direction) {
            $slider.css("opacity", 1);
        });

        $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            }]
        });
    }

    function init() {
        initBannerSlider();
        initProductsSlider();
        initMostFunSlider();
        initMediaSlider();
        initShopSlider();
    }

    init();
});