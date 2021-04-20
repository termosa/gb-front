$(function() {
    function addAccordionEvents(elemStr) {
        var time = 300,
            $elem = $(elemStr);

        function isDesktopWidth(number) {
            var media = $(window).width();
            return media >= (number || 1200);
        }

        $elem.on("click", ".app-f-accordion__title", function() {
            if (!isDesktopWidth(992)) {
                $(this).closest(elemStr).find(".app-f-accordion__item").removeClass("app-f-accordion__item_active");


                $(this).closest(elemStr).find(".app-f-accordion__item:not(.app-f-accordion__item_active)").each(function(ind, elem) {
                    $(elem).find(".app-f-accordion__description").stop(0).slideUp(time);
                });

                if ($(this).closest(".app-f-accordion__item").find(".app-f-accordion__description").is(":visible")) {
                    $(this).closest(".app-f-accordion__item").find(".app-f-accordion__description").stop().slideUp(time);
                } else {
                    $(this).closest(".app-f-accordion__item").find(".app-f-accordion__description").stop().slideDown(time);
                    $(this).closest(".app-f-accordion__item").addClass("app-f-accordion__item_active");
                }
            }
        });
    }
    addAccordionEvents("#app-f-accordion");
});