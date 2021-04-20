$(function() {
    var isPromoHeaderLoaded = false;

    function isDesktopWidth(number) {
        var media = $(window).width();
        return media >= (number || 1200);
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        }
    }

    function createAllProductsMenu(products) {
        var fragranceState = [],
            materialState = [],
            colorState = [],
            $fragranceList = $("#app-list__fragrance"),
            $materialList = $("#app-list__material"),
            $colorList = $("#app-list__color");

        function _setState(stateObj, data) {
            var isExist = false;
            stateObj.forEach(function(elem, ind, arr) {
                if (elem.tag.toString().toLowerCase() === data.tag.toString().toLowerCase()) {
                    isExist = true;
                    return false;
                }
            });
            if (!isExist) {
                stateObj.push(data);
            }
        }

        products.map(function(product) {
            product.tags.forEach(function(tag) {
                // Fragrance
                if (tag.indexOf("Fragrance: ") !== -1) {
                    _setState(fragranceState, {
                        name: "fragrance",
                        tag: tag,
                        title: tag.slice("Fragrance: ".length)
                    });
                }
                //Material
                if (tag.indexOf("Material: ") !== -1) {
                    _setState(materialState, {
                        name: "material",
                        tag: tag,
                        title: tag.slice("Material: ".length)
                    });
                }
                //Color
                if (tag.indexOf("Metal Color: ") !== -1) {
                    _setState(colorState, {
                        name: "color",
                        tag: tag,
                        title: tag.slice("Metal Color: ".length)
                    });
                }

            });
        });

        function _filterSort(a, b) {
            if (a.tag > b.tag) {
                return 1;
            }
            if (a.tag < b.tag) {
                return -1;
            }
            return 0;
        }

        function _addContentToList($elem, state) {
            var listItemsNode = "";
            if (state && state.length) {
                $elem.empty();
                state.map(function(elem) {
                    listItemsNode += '<li><a href="/collections/all-products#' + elem.name + '=' + encodeURI(elem.tag) + '">' + elem.title + '</a></li>';
                });
                if (listItemsNode) {
                    listItemsNode += '<li><a class="app-animated-link" href="/collections/all-products"><span>Shop all</span></a></li>'
                }
                $elem.append(listItemsNode);
            }
        }

        fragranceState.sort(_filterSort);
        materialState.sort(_filterSort);
        colorState.sort(_filterSort);

        _addContentToList($fragranceList, fragranceState);
        _addContentToList($materialList, materialState);
        _addContentToList($colorList, colorState);

    }

    function addNavAnalyticEvents(name) {
        try {
            alooma.track(name, {
                "customer_email": appCustomerEmail || ""
            });
            ga("send", {
                hitType: "event",
                eventCategory: name,
                eventAction: "click",
                eventLabel: "navigation"
            });
        } catch (e) {
            console.error(e);
        }
    }

    function createDesktopMenu() {
        var $menu = $("#app-nav__list-wrapper").find(".app-nav__list"),
            $subMenuDesktop = $("#app-nav-secondary-desktop");

        // try {
        //     createAllProductsMenu(allProductsCollection);
        // } catch (e) {
        //     console.error(e);
        // }

        $(document).mouseup(e => {
            if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$subMenuDesktop.is(e.target) && $subMenuDesktop.has(e.target).length === 0) {
                $subMenuDesktop.removeClass("app-nav__dr-wrapper-active");
                $menu.find(".app-nav__list__item").removeClass("app-dropdown-active");
            }
        });

        $menu.on("mouseenter", ".app-nav__list__item", function() {
            var media = $(window).width();
            if (isDesktopWidth()) {
                $subMenuDesktop.empty().removeClass("app-nav__dr-wrapper-active");
                $menu.find(".app-nav__list__item").removeClass("app-dropdown-active");
                if ($(this).hasClass("app-nav__list__item__has-dropdown")) {
                    $(this).addClass("app-dropdown-active");
                    $(this).children(".app-nav__dr").clone().appendTo("#app-nav-secondary-desktop");
                    $subMenuDesktop.children(".app-nav__dr").show(0);
                    $subMenuDesktop.show(0).addClass("app-nav__dr-wrapper-active");
                }
                $(".app-autocomplete__list").removeClass("is-active");
            }
        });

        $subMenuDesktop.on("mouseleave", function() {
            $(this).removeClass("app-nav__dr-wrapper-active");
            $menu.find(".app-nav__list__item").removeClass("app-dropdown-active");
        });

        $subMenuDesktop.on("click", "a", function() {
            $menu.find(".app-nav__list__item").removeClass("app-dropdown-active");
            $subMenuDesktop.removeClass("app-nav__dr-wrapper-active");
        });
    }


    function createMobileMenu() {
        var $menuMobile = $("#app-nav-secondary-mobile"),
            $mobileNavBtn = $("#app-hamburger"),
            $menu = $("#app-nav__list-wrapper").find(".app-nav__list");

        $menuMobile.find(".app-nav__mobile__inner")
            .find(".app-nav__mobile__top__inner__left")
            //         	.append($(".app-points").clone())
            .append($(".app-re-header__customer-info").clone())
            .parent().append('<button type="button" id="app-nav__mobile__close-btn" class="app-nav__mobile__close-btn"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M21 1L1 21M1 1L21 21" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg></button>')
            .parent()
            .append('<a href="/pages/inner-circle" class="app-member-btn" id="app-member-btn">Become a member</a>')

        $("#app-nav__mobile__close-btn").on("click", function() {
            closeMobileNavHandler();
        });

        $menuMobile
            .find(".app-nav__mobile__inner")
            .append('<div id="app-nav__mobile__bottom" class="app-nav__mobile__bottom"><div id="app-nav__mobile__bottom__step-1"></div><div id="app-nav__mobile__bottom__step-2"></div></div>')
            .find("#app-nav__mobile__bottom").find("#app-nav__mobile__bottom__step-1")
            .append($menu.clone())
            .append($("#app-nav__mobile-content").clone())
            .closest("#app-nav__mobile__bottom").append($("#app-account__wrapper").clone());

        $menuMobile
            .on("click", ".app-nav__mobile__overlay", closeMobileNavHandler)
            .find(".app-close-mobile-nav-btn").on("click", closeMobileNavHandler);

        $mobileNavBtn.on("click", function() {
            $menuMobile.show(0);
            $menuMobile.find(".app-nav__mobile__overlay").animate({
                opacity: 1
            }, 250);
            $menuMobile.find(".app-nav__mobile__inner").animate({
                left: 0
            }, 150, function() {
                calculateMobileNavBottomHeight();
            });
            $("body").addClass("app-overlay-n");
        });

        function closeMobileNavHandler() {
            $menuMobile.find(".app-nav__mobile__inner").animate({
                left: "-100%"
            }, 150);
            $menuMobile.find(".app-nav__mobile__overlay").animate({
                opacity: 0
            }, 350, function() {
                $menuMobile.hide(0);
            });

            $("body").removeClass("app-overlay-n");

            var $step1 = $("#app-nav__mobile__bottom__step-1"),
                $step2 = $("#app-nav__mobile__bottom__step-2");


            $step2.hide(0, function() {
                $step2.empty().hide(0);
                $step1.show(0);
                $step1.closest("#app-nav__mobile__bottom").get(0).scrollTo(0, 0);
            });
        }

        function calculateMobileNavBottomHeight() {
            var windowHeight = $(window).height(),
                mobileMenuTopHeight = $("#app-nav__mobile__top").innerHeight(),
                $mobileMenuBottom = $("#app-nav__mobile__bottom");

            $mobileMenuBottom.innerHeight(windowHeight - mobileMenuTopHeight);
        }

        var mobileWindowResizeHandler = debounce(function() {
            if (!isDesktopWidth()) {
                calculateMobileNavBottomHeight();
            }
            changeContentPosition();
            //             changeContentPosition();

        }, 250);

        $(window).on("resize", mobileWindowResizeHandler);

        $menuMobile.on("click", ".app-nav__list__item__has-dropdown .app-nav__link", function(e) {
            e.preventDefault();
            var $step1 = $("#app-nav__mobile__bottom__step-1"),
                $step2 = $("#app-nav__mobile__bottom__step-2"),
                categoryName = $(this).text();

            $step2
                .empty()
                .hide(0)
                .append('<button type="button" class="app-step-category__btn"><span>' + categoryName + '</span></button>')
                .append($(this).closest(".app-nav__list__item__has-dropdown").find(".app-nav__dr").clone());
            $step2.find(".app-nav__dr").show(0);
            $step1.hide(0, function() {
                $step2.closest("#app-nav__mobile__bottom").get(0).scrollTo(0, 0);
                $step2.show(0);
            });
        });

        $menuMobile.on("click", ".app-step-category__btn", function() {
            var $step1 = $("#app-nav__mobile__bottom__step-1"),
                $step2 = $("#app-nav__mobile__bottom__step-2");

            $step2.hide(0, function() {
                $step1.closest("#app-nav__mobile__bottom").get(0).scrollTo(0, 0);
                $step1.show(0);
            });
        });

        $menuMobile.on("click", "a", function() {
            if (!($(this).next().hasClass("app-nav__dr"))) {
                closeMobileNavHandler();
            }
        });

        $("#app-nav__mobile__bottom").on("click", ".app-nav__accordion .app-nav__d__list-title", function() {
            if (!isDesktopWidth()) {
                var $accordion = $(this).closest(".app-nav__accordion");

                if (!$(this).hasClass("app-nav__d__list-title__active")) {
                    $accordion.find(".app-nav__d__list").stop().slideUp(400);
                    $accordion.find(".app-nav__d__list-title").removeClass("app-nav__d__list-title__active");
                }

                $(this).toggleClass("app-nav__d__list-title__active");
                $(this).next().stop().slideToggle();

                $(this).closest("#app-nav__mobile__bottom").animate({
                    scrollTop: 0
                }, 400)
            };
        });

        $("#app-header__icon-nav__search").on("click", function() {
            if (!isDesktopWidth()) {

                $("#app-search").stop().slideToggle(100, function() {
                    changeContentPosition();
                    $("#app-search").find(".app-search").focus();
                });
            }
        });

        $(".app-search-btn__state-1").on("click", function() {
            $("#app-search").find(".app-search").focus();
        });

        //       $menuMobile.on("click", ".app-add-product-col", function(e) {
        //       	e.preventDefault();
        //       });

        //       $menuMobile.on("click", ".app-add-product-col__link-text", function() {
        //       	location.href = $(this).closest(".app-add-product-col").attr("href");
        //       });
    }

    function changeContentPosition() {
        var $header = $("#app-header"),
            $content = $("#app-content");
        $content.css("margin-top", $header.outerHeight() + "px");
        //         if (!isDesktopWidth()) {
        //             $content.css("margin-top", $header.outerHeight() + "px");
        //         } else {
        //             $content.css("margin-top", 0);
        //         }

    }

    function createUserDropdown() {
        var $userDropdown = $(".app-user__dropdown"),
            $dropdownContainer = $("#app-user__dropdown__wrapper"),
            $openUserDropdownButton = $("#app-header__icon-nav__customer");

        $openUserDropdownButton.on("mouseenter", function() {
            if (isDesktopWidth()) {
                $dropdownContainer.find(".app-user__dropdown").addClass("app-user__dropdown__active");
            }
        });

        $openUserDropdownButton.on("click", function(e) {
            if (!isDesktopWidth()) {
                e.preventDefault();
                $dropdownContainer.find(".app-user__dropdown").toggleClass("app-user__dropdown__active");
            }
        });

        $userDropdown.find("#app-user__close-btn").on("click", function() {
            $userDropdown.removeClass("app-user__dropdown__active");
        });

        $(".app-re-header__icon-nav").on("mouseleave", function() {
            if (isDesktopWidth()) {
                $userDropdown.removeClass("app-user__dropdown__active");
            }
        });

        $(".app-re-header__icon-nav__cart").on("mouseenter", function() {
            if (isDesktopWidth()) {
                $userDropdown.removeClass("app-user__dropdown__active");
            }
        });

        $(document).mouseup(e => {
            if (!($userDropdown.is(e.target) && $userDropdown.has(e.target).length === 0) && !(!$openUserDropdownButton.is(e.target) && $openUserDropdownButton.has(e.target).length)) {
                $userDropdown.removeClass("app-user__dropdown__active");
            }
        });
    }

    function initHeaderTopSlider() {
        var $promoSlider = $("#app-promo-slider");
        $promoSlider.on('init', function(event, slick, direction) {
            $promoSlider.closest(".app-promo-slider").css("opacity", 1);
            changeContentPosition();
            isPromoHeaderLoaded = true;
        });
        $promoSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            prevArrow: '<button type="button" class="app-promo-slider__prev"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0.5L1 5.5L6 10.5" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            nextArrow: '<button type="button" class="app-promo-slider__next"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.5L6 5.5L1 10.5" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            autoplay: true,
            autoplaySpeed: 4000
        });
    }

    function initCart() {
        Shopify.getCart((data) => {
            var price = data.total_price / 100,
                count = data.item_count;
            $("#app-cart-count").text(count);
        });
    }

    function handleMembershipVerification(response) {
        if (response.isInner && response.isActive) {
            $(".app-user__list__subscription").show(0);
            $(".app-account__list__subscription").show(0);
        } else {
            $(".app-subscribe-btn-holder").show(0);
            $(".app-member-btn").show(0);
        }
    }

    function initSubsctiptionElements() {
        var $current_logged_in_customer = {
                "email": appCustomerEmail ? appCustomerEmail : ""
            },
            _ajaxLoginTool = new ShopifyAJAXAccount(),
            _vipStore = new VipStore();

        /* checkout membership automatically for logged in user*/
        if ($current_logged_in_customer && $current_logged_in_customer.email !== "") {
            _vipStore.verifyMembership($current_logged_in_customer.email)
                .done(handleMembershipVerification)
                .fail(handleMembershipVerification);
        } else if (sessionStorage.getItem("customer_email")) {
            /* try to check session storage for email */
            $current_logged_in_customer.email = sessionStorage.getItem("customer_email");
            _vipStore.verifyMembership($current_logged_in_customer.email)
                .done(handleMembershipVerification)
                .fail(handleMembershipVerification);
        } else {
            $(".app-subscribe-btn-holder").show(0);
            $(".app-member-btn").show(0);
        }
        $(".app-subscribe-btn").on("click", function(e) {
            e.preventDefault();
            addNavAnalyticEvents("nav subscribe");
            location.href = $(this).attr("href");
        });

        $(".app-member-btn").on("click", function(e) {
            e.preventDefault();
            addNavAnalyticEvents("nav become member");
            location.href = $(this).attr("href");
        });
    }

    function init() {
        createDesktopMenu();
        createMobileMenu();
        createUserDropdown();
        initHeaderTopSlider();
        changeContentPosition();
        // initCart();
        // initSubsctiptionElements();

        var loadInt = setInterval(function() {
            if (isPromoHeaderLoaded) {
                clearInterval(loadInt);
                setTimeout(function() {
                    $(document).trigger("appHeaderLoaded");
                }, 0);
            }
        }, 100);

        $("#app-nav-secondary-mobile, #app-nav-secondary-desktop").on("click", "a[href*=#]", function() {
            if ($("#" + $(this).attr("href").split('#')[1]) && $("#" + $(this).attr("href").split('#')[1]).length && location.hash === ("#" + $(this).attr("href").split('#')[1])) {
                $(document).trigger("anchorLinkClick", [$("#" + $(this).attr("href").split('#')[1]).offset().top]);
                //             changeScrollPosition($("#" + $(this).attr("href").split('#')[1]).offset().top)
            }
        });
    }

    init();
});
