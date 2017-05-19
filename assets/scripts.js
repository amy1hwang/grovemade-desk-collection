console.debug("[Scripts.js]", "Initialized");
$(function() {
  $('.show-superbar').click(function(event){
      event.stopPropagation();
       $(".superbar").slideToggle().css('display', 'flex');
  });
  $(".superbar").on("click", function (event) {
      event.stopPropagation();
  });
  $(document).on("click", function () {
      $(".superbar").slideUp();
  });

  //fixed header on scroll
  var num = 40;
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
        $('.header').addClass('fixed');
        $('.superbar').addClass('sup-fixed');
      } else {
        $('.header').removeClass('fixed');
        $('.superbar').removeClass('sup-fixed');
      };
  });

  //sildeshow
  $("[data-index-swiper]").swiper({
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      loop: true,
      effect: "fade",
      fade: {
        crossFade: true
      },
      speed: 1000,
      autoplay: 5000
  });

  //to the top
  $('.to-the-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 800);
  });


  $("[data-product-swiper]").swiper({
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      loop: true,
      effect: "fade",
      fade: {
        crossFade: true
      },
      speed: 1000,
      autoplay: 5000
  });

});
