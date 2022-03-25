
// sliders
$(document).ready(function(){
    // operations
    $(".operations__wrapper").slick({    
        mobileFirst: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        // variableWidth: true,
        responsive: [
          {
            breakpoint: 768,
            settings: "unslick"
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
      nextArrow: '<div class="next"></div>',
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
})

// Одинаковая высота слайдов в slick slider
$('.reviews__wrapper').on('setPosition', function () {
  $(this).find('.reviews__item').height('auto');
  var slickTrack = $(this).find('.slick-track');
  var slickTrackHeight = $(slickTrack).height();
  $(this).find('.reviews__item').css('height', slickTrackHeight + 'px');
});	

