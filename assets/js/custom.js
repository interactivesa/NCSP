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
      margin: 0,
      nav: false,
      dots: true,
      rtl: true,
      autoplay: true,
      autoplayTimeout:2000,
      responsive:{
        375:{
          items:1
        },
        1000:{
          items:3
        },
        1400:{
          items:4
        }
      }
    })

    AOS.init({
        duration: 1000,
    });
  });