function addAccordionEvents($elem) {
  var time = 300
  if ($elem.find('.pdp-a-item__description')) {
    $($elem.find('.pdp-a-item__description').get(0))
      .show(0)
      .closest('.pdp-a-item')
      .find('.pdp-a-item__title')
      .addClass('pdp-a-item__title_active')
  }

  $elem.on('click', '.pdp-a-item__title', function () {
    $(this).closest('.pdp-accordion').find('.pdp-a-item__title').removeClass('pdp-a-item__title_active')

    $(this)
      .closest('.pdp-accordion')
      .find('.pdp-a-item__title:not(.pdp-a-item__title_active)')
      .each(function (ind, elem) {
        $(elem).closest('.pdp-a-item').find('.pdp-a-item__description').stop(0).slideUp(time)
      })

    if ($(this).closest('.pdp-a-item').find('.pdp-a-item__description').is(':visible')) {
      $(this).closest('.pdp-a-item').find('.pdp-a-item__description').stop().slideUp(time)
    } else {
      $(this).closest('.pdp-a-item').find('.pdp-a-item__description').stop().slideDown(time)
      $(this).addClass('pdp-a-item__title_active')
    }
  })
}

function initChooser($elem) {
  var $icChooser = $elem,
    $pdpAdditionalText = $('.pdp__additional-text')

  $icChooser.on('click', '.pdp__chooser__btn', function () {
    $(this).toggleClass('pdp__chooser__btn-active')
    // if ($(this).hasClass("pdp__chooser__btn-active")) {
    //     addPDPTracking("IC PDP Upsell - Question Mark Clicked");
    // }
    $(this).closest('.pdp__chooser__item').find('.pdp__chooser__item__part-bottom').slideToggle('fast')
  })

  $('#pdp__already-a-member-link').on('click', function (e) {
    e.preventDefault()
    location.href = $(this).attr('href')
  })

  $icChooser.on('change', '.pdp-radio-group', function () {
    $icChooser.find('.pdp__chooser__item').removeClass('pdp__chooser__item__highlighted')
    $(this).closest('.pdp__chooser__item').addClass('pdp__chooser__item__highlighted')
    if (this.value === 'discount') {
      // addPDPTracking("IC PDP Upsell - IC Price Clicked");
      $pdpAdditionalText.fadeIn()
      // $pdpSticker.fadeIn();
      // $productPrice.text('{{ product.price | times: price_multiplier | money }}');
      // if (!compareAtPrice) {
      //     $comparePrice.text('{{ product.price | money }}').addClass("compare-product-price-active");
      // }
    } else {
      // addPDPTracking("IC PDP Upsell - Regular Price Clicked");
      $pdpAdditionalText.hide()
      // $pdpSticker.hide();
      // $productPrice.text('{{ product.price | money }}');
      // if (!compareAtPrice) {
      //     $comparePrice.text('').removeClass("compare-product-price-active");
      // }
    }
  })
}

init()

function initProductCarousel($elem) {
  var $itemsList = $('#pdp-carousel-items__list'),
    isBlockedList

  $elem.on('init', function (event, slick) {
    $(this).css('opacity', 1)

    $itemsList.on('click', 'li', function () {
      if (!isBlockedList) {
        isBlockedList = true
        $itemsList.find('li').removeClass('pdp-carousel-item_active')
        $(this).addClass('pdp-carousel-item_active')
        $elem.slick('slickGoTo', $(this).index())
      }
    })
  })

  $elem.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    isBlockedList = true
    $itemsList.find('li').removeClass('pdp-carousel-item_active')
    $($itemsList.find('li').get(nextSlide)).addClass('pdp-carousel-item_active')
  })

  $elem.on('afterChange', function () {
    isBlockedList = false
  })

  $elem.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    adaptiveHeight: true,
    dots: false,
    arrows: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  })
}

function init() {
  addAccordionEvents($('#pdp-description'))
  initChooser($('#pdp-ic-chooser'))
  initProductCarousel($('#pdp-carousel'))
}