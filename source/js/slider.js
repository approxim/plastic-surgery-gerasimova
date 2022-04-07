// sliders
$(document).ready(function(){
  // operations
  $(".operations__wrapper").slick({
    // lazyLoad: 'ondemand',
    mobileFirst: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });

  // Статьи
  $(".articles__list").slick({
    mobileFirst: true,
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: true,
          // centerMode: true,
          // focusOnSelect: true
        }
      }
    ]
  });

  // reviews
  $('.reviews__wrapper').slick({
    infinite: true,
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>'
  });

  // reviews photo
  $('.reviews__image').slick({
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  }).on('afterChange', function(event, slick){
    event.stopPropagation(); // Слайдер в слайдере
  });

  // clinic
  $('.clinic__images').slick({
    mobileFirst: true,
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          prevArrow: '<div class="prev"></div>',
          nextArrow: '<div class="next"></div>'
        }
      }
    ]
  });

  



  // Исправление ошибки, при которой нажатие на слайд было при пролистывании
  $('.reviews__image-slider').on("mousedown mouseup", function (event) {
    event.stopPropagation();
  })
  $('.reviews__image-slider').on("touchstart touchend", function (event) {
    event.stopPropagation();
  })
})

// Одинаковая высота слайдов в slick slider
// $('.reviews__wrapper').on('setPosition', function () {
//   $(this).find('.reviews__item').height('auto');
//   var slickTrack = $(this).find('.slick-track');
//   var slickTrackHeight = $(slickTrack).height();
//   $(this).find('.reviews__item').css('height', slickTrackHeight + 'px');
// });






// $('.operations__result').click(function() {
  // $('.modal-result').fadeIn();

  

    // Кнопки в модальном окне
  // $('.modal-result__control').slick({
  //   mobileFirst: true,
  //   infinite: false,
  //   dots: false,
  //   arrows: false,
  //   fade: false,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   focusOnSelect: true,
  //   prevArrow: '<div class="prev"></div>',
  //   nextArrow: '<div class="next"></div>',

  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         // focusOnSelect: false,
  //         slidesToShow: 5,
  //         arrows: false
  //       }
  //     }
  //   ]
  // });

  // // модальное окно Result
  // $(".modal-result__slides").slick({
  //   lazyLoad: 'ondemand',
  //   mobileFirst: true,
  //   dots: true,
  //   infinite: false,
  //   arrows: false,
  //   fade: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: true,
  //         dots: false,
  //         prevArrow: '<div class="prev"></div>',
  //         nextArrow: '<div class="next"></div>'
  //       }
  //     }
  //   ]
  // });

// });