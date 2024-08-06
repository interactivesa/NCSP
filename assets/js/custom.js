  // Fixed Menu 
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        document.querySelector(".main-Nav").classList.add("fixedTop");
      } else {
        document.querySelector(".main-Nav").classList.remove("fixedTop");
      }
    });
  });

  var scrollToo = function (sectionEl = "", callback = function () {}) {
    $("html, body").animate(
      {
        scrollTop: sectionEl ? calculateOffset(sectionEl) : 0,
      },
      800,
      "swing",
      callback()
    );
  };

  var calculateOffset = function (el) {
    if ($(el).length == 0) return;
    if ($(window).width() >= 980) return Math.floor($(el).offset().top - 69);
    return Math.floor($(el).offset().top);
  };

  // Main Menu
  $(function () {
    if (window.innerWidth >= 1200) {
      document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
        everyitem.addEventListener('mouseover', function(e){
    
          let el_link = this.querySelector('a[data-bs-toggle]');
    
          if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add('show');
            nextEl.classList.add('show');
          }
        });
        everyitem.addEventListener('mouseleave', function(e){
          let el_link = this.querySelector('a[data-bs-toggle]');
    
          if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove('show');
            nextEl.classList.remove('show');
          }  
        })
      });
    
      $('.top-nav .dropdown').hover(function(){ 
        // console.log("top");
        $('.dropdown-toggle', this).trigger('click');   
      });
    } 
  
    $(document).scroll(function () {
      var scroll = $(this).scrollTop();
      var navbar = $(".main-navbar");
      if ($(window).width() >= 992) {
        if (scroll > 140) {
          if (!navbar.hasClass("fixed")) {
            $("body").css({ "padding-top": navbar.height() + "px" });
            navbar.addClass("fixed");
          }
        } else {
          navbar.removeClass("fixed");
          $("body").css({ "padding-top": "0px" });
          $(".search-toggle").removeClass("d-none");
        }
      }



      /*
        navigator
      */

        if (scroll == 0) {
          $("ul.navigator li").removeClass("active");
          $("#sec1").addClass("active");
        } else $("#sec1").removeClass("active");
        
        if (scroll >= calculateOffset(".about") - 200) {
          $("ul.navigator li").removeClass("active");
          $("#sec2").addClass("active");
        } else $("#sec2").removeClass("active");
    
        
        if (scroll >= calculateOffset(".gallery") - 200) {
          $("ul.navigator li").removeClass("active");
          $("#sec3").addClass("active");
        } else $("#sec3").removeClass("active");
    
        if (scroll >= calculateOffset(".Numbers") - 200) {
          $("ul.navigator li").removeClass("active");
          $("#sec4").addClass("active");
        } else $("#sec4").removeClass("active");
       
        if (scroll >= calculateOffset(".map") - 200) {
          $("ul.navigator li").removeClass("active");
          $("#sec5").addClass("active");
        } else $("#sec5").removeClass("active");
    
        if (scroll >= calculateOffset(".bgNews") - 200) {
          $("ul.navigator li").removeClass("active");
          $("#sec6").addClass("active");
        } else $("#sec6").removeClass("active");
    
        if (scroll >= calculateOffset(".partners") - 200) {
          $("ul.navigator li").removeClass("active");
          $("#sec7").addClass("active");
        } else $("#sec7").removeClass("active");
     










    });  
  
    $(".search-toggle").on("click", function (e) {
      $(".search-box").fadeToggle("fast", function() {
      $(".search-box input").focus();
    });
        
    $(document).click(function(e) {
    if (!$(e.target).is('.searchbox, .searchbox *')) {
    $(".searchbox").hide();
    }
    });
    $('.closeSearch').click(function(e) {
    $(".searchbox").hide();
    $(".search-input").val("");
    });
  
      $(".search-box").toggleClass("open-search");
  
      e.stopPropagation(); 
    });

    $(document).click(function(e) {
      if (!$(e.target).is('.search-box input, .search-toggle*')) {
        $(".search-box").hide();
        $("body").removeClass("header-popup-open");
        $(".search-box").toggleClass("open-search");
        $(".search-box input").val("");
      }
    });


    // navigator clicks

    $("#sec1 a").on("click", function () {
      scrollToo(false, function () {
        $("ul.navigator li").removeClass("active");
        $("#sec1").addClass("active");
      });
    });
    $("#sec2 a").on("click", function () {
      scrollToo(".about", function () {
        $("ul.navigator li").removeClass("active");
        $("#sec2").addClass("active");
      });
    });
    
    $("#sec3 a").on("click", function () {
      scrollToo(".gallery", function () {
        $("ul.navigator li").removeClass("active");
        $("#sec3").addClass("active");
      });
    });
    $("#sec4 a").on("click", function () {
      scrollToo(".Numbers", function () {
        $("ul.navigator li").removeClass("active");
        $("#sec4").addClass("active");
      });
    });
    $("#sec5 a").on("click", function () {
      scrollToo(".map", function () {
        $("ul.navigator li").removeClass("active");
        $("#sec5").addClass("active");
      });
    });
    $("#sec6 a").on("click", function () {
      scrollToo(".bgNews", function () {
        $("ul.navigator li").removeClass("active");
        $("#sec6").addClass("active");
      });
    });
    $("#sec7 a").on("click", function () {
      scrollToo(".partners", function () {
        // $("ul.navigator li").removeClass("active");
        $("#sec7").addClass("active");
      });
    });
    







  });
 
 $( document ).ready(function() {
    // Slider Arrows 
    let arrow = [
      '<img src="../assets/images/shared/slider-right-arrow.svg" />',
      '<img src="../assets/images/shared/slider-left-arrow.svg" />',
    ]
    // Banner  
    $('.owl-carousel-banner').owlCarousel({
      loop: false,
      margin:0,
      nav: false,
      rtl: true,
      items: 1,
      autoplay: true,
    })

    // Numbers
    var numbersSlider = $('.Numbers .owl-carousel');
      numbersSlider.owlCarousel({
      nav: false,
      items: 6,
      margin:20,
      rtl: true,
      responsive:{
        0:{
          items:1
        },
        375:{
          items:2
        },
        1000:{
          items:3
        },
        1400:{
          items:6
        }
      }
    });

    // Counter 
    jQuery(function ($) {
      "use strict";      
      var counterUp = window.counterUp["default"];     
      var $counters = $(".counter");

      /* Start counting, do this on DOM ready or with Waypoints. */
      $counters.each(function (ignore, counter) {
        var waypoint = new Waypoint({
          element: $(this),
          handler: function () {
            counterUp(counter, {
              duration: 1500,
              delay: 10
            });
          },
          offset: 'bottom-in-view',
        });
      });          
    });

    // News Slider 
    $('.owl-carousel-news').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      rtl: true,
      navText: arrow,
      
      responsive:{
        0:{
          items:1
        },
        800:{
          items:2
        },
        1400:{
          items: 3
        }
      }
    })

    // Partners Slider 
    $('.owl-carousel-partners').owlCarousel({
      loop: false,
      margin: 20,
      nav: false,
      dots: true,
      rtl: true,
      autoplay: true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
        0:{
          items:1,
          slideBy:1,
        },
        575:{
          items:2,
          slideBy:2,
        },
        1000:{
          items:3,
          slideBy:3,
          margin: 15,
        },
        1400:{
          items:5,
          slideBy:5,
          
        }
      }
    })

    AOS.init({
        duration: 1000,
    });




    var swiper = new Swiper(".thumbsSlider", {
      spaceBetween: 0,
      slidesPerView: 2,
      initialSlide: 1,
      freeMode: false,
  });
   
  var swiper2 = new Swiper(".mainSlider", {
      // spaceBetween: 10,
      // effect:"fade",
      // fadeEffect: {
      //   crossFade: false
      // },
   
      effect: 'creative',
      creativeEffect: {
          prev: {
              // will set `translateZ(-400px)` on previous slides
              translate: ['100%', 0, 0],
              opacity: 0.5
          },
          next: {
              // will set `translateX(100%)` on next slides
              translate: ['-100%', 0, 0],
              opacity: 0.5
          },
      },
   
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      thumbs: {
          swiper: swiper,
      },
      scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
      },
  });
   
  swiper = new Swiper(".thumbsSlider", {
      spaceBetween: 0,
      slidesPerView: 2,
      initialSlide: 3,
      freeMode: false,
  });
   
  $(".thumbsSlider .swiper-slide").click(function () {
      $(".thumbsSlider .swiper-slide").removeClass("hide");
      $(this).addClass("hide");
  });


    // console.log(swiper.slides.length,"swiper.slides.length");
    // if(swiper.slides.length <= 1 ){
    //   console.log("slides  less than 1 " );
    //   $(".thumbsSlider .swiper-slide ").addClass("full-width-Slide")
    // }
    // else {
    //   console.log("slides  bigger than 1 ");
    // }

  });








  /*
  fullpage home pahe scroll plugin
  */ 


  // new fullpage('#fullpage', {
  //   navigation: true,
  //   responsiveWidth: 700,
  //   anchors: ['home', 'about-us', 'contact'],
  //   parallax: true,
  //   onLeave: function(origin, destination, direction){
  //       console.log("Leaving section" + origin.index);
  //   },
  //   });



















