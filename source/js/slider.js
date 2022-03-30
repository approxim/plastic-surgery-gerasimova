// $(".slick-track").css("max-width", $(window).width());


// sliders
$(document).ready(function(){
  // operations
  $(".operations__wrapper").slick({
      mobileFirst: true,
      dots: false,
      infinite: false,
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

  $(".articles__list").slick({    
    mobileFirst: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          variableWidth: false,
          arrows: true
        }          
      }
    ]
  });

  // reviews
  $('.reviews__wrapper').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>'
  });

  // reviews photo
  $('.reviews__image-slider').slick({
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  }).on('afterChange', function(event, slick){
    event.stopPropagation();
  });


  // clinic
  $('.clinic__slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>'
  });

  // реинициализация слайдера при клике на табы (выбор города)
  $(".clinic__tab").on('click', function (e) {
    $(".clinic__slider").slick('reinit');
  });
})

// Одинаковая высота слайдов в slick slider
$('.reviews__wrapper').on('setPosition', function () {
  $(this).find('.reviews__item').height('auto');
  var slickTrack = $(this).find('.slick-track');
  var slickTrackHeight = $(slickTrack).height();
  $(this).find('.reviews__item').css('height', slickTrackHeight + 'px');
});	





