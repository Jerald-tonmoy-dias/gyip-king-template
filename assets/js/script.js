(function ($) {
  /*
      1.0 Data Background Function
      7. nice select
      8. slider 
      7. WOW.js Initialization

  */

  $(document).ready(function () {
    // 1.0 Scroll top button
    $(window).on("scroll", function () {
      var scrollBar = $(this).scrollTop();
      if (scrollBar > 150) {
        $(".scroll-top-btn").fadeIn(400); // 400ms fade-in
      } else {
        $(".scroll-top-btn").fadeOut(400); // 400ms fade-out
      }
    });

    $(".scroll-top-btn").on("click", function () {
      $("html, body").animate({
        scrollTop: 0
      }, 400); // 400ms scroll duration
    });

    // 1.1 Data Background Function
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });


    
  // 2. Mobile Menu
  $(".moble-menu-trigger-btn").on("click", function () {

    $(".pp-mobile-menu-wrapper").addClass("active");
  });

  $(".pp-mobile-menu-wrapper .close").on("click", function () {
    $(".pp-mobile-menu-wrapper").removeClass("active");
  });

  $(".pp-mobile-menu-wrapper ul li.has-submenu").each(function () {
    $(this).on("click", function () {
      $(this).children("ul").slideToggle();
      $(this).children("i").toggleClass("icon-rotate");
    });
  });

  $(document).on("mouseup", function (e) {
    var offCanvusMenu = $(".pp-mobile-menu-wrapper");

    if (
      !offCanvusMenu.is(e.target) &&
      offCanvusMenu.has(e.target).length === 0
    ) {
      $(".pp-mobile-menu-wrapper").removeClass("active");
    }
  });

    // nice select
    $('select').niceSelect();


    // slider 
    var gw_blog_slider = $(".gw-blog-slider");
    gw_blog_slider.owlCarousel({
      loop: false,
      margin: 24,
      items: 4,
      dots: true,

      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 2 },
        992: { items: 3 },
      },
    });



    // 7. WOW.js Initialization
    new WOW().init();
  });
})(jQuery);
