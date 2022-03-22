$(document).ready(function(){
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
})


