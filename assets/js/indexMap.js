// on tags click
$(".navigation-links a").on("click", function () {
    $(".navigation-links a").removeClass("active")
    $(this).addClass("active");
    $('.map-bg > div').addClass("d-none");
    $('.tags-content > div').addClass("d-none")
    $('.marker-with-popup').addClass("d-none")
    $(".interactive-map .map-cont .svg-map svg path").removeClass("active-sec")
    
    // ryadh
    if( $("#reyadh-link").hasClass("active")){
      console.log("ryaadh");
      $('.map-bg > div.ryadh-bg').removeClass("d-none");
      $('.tags-content .ryadh-content').removeClass("d-none")
      $('.marker-with-popup.reyadh').removeClass("d-none")

      $('.map-bg > div.ryadh-bg').addClass("d-block");
      $('.tags-content .ryadh-content').addClass("d-block")
      $('.marker-with-popup.reyadh').addClass("d-block")
      $("#reyadh-location").addClass("active-sec")

    }

    // makkah
    else if( $("#makkah-link").hasClass("active")){
      console.log("makkah");
      $('.map-bg > div.makaah-bg').removeClass("d-none");
      $('.tags-content .makkah-content').removeClass("d-none")
      $('.marker-with-popup.makkah').removeClass("d-none")

      $('.map-bg > div.makaah-bg').addClass("d-block");
      $('.tags-content .makkah-content').addClass("d-block")
      $('.marker-with-popup.makkah').addClass("d-block")
      $("#makkah-location").addClass("active-sec")
    }

     // madenah
     else if( $("#madenah-link").hasClass("active")){
      console.log("madenah");
      $('.map-bg > div.madinah-bg').removeClass("d-none");
      $('.tags-content .madenah-content').removeClass("d-none")
      $('.marker-with-popup.madinah ').removeClass("d-none")

      $('.map-bg > div.madinah-bg').addClass("d-block");
      $('.tags-content .madenah-content').addClass("d-block")
      $('.marker-with-popup.madinah ').addClass("d-block")
      $("#madenah-location").addClass("active-sec")

    }

      // sharqia
      else if( $("#sharqia-link").hasClass("active")){
      console.log("sharqia");
      $('.map-bg > div.sharqia-bg').removeClass("d-none");
      $('.tags-content .sharqia-content').removeClass("d-none")
      $('.marker-with-popup.sharqia ').removeClass("d-none")

      $('.map-bg > div.sharqia-bg').addClass("d-block");
      $('.tags-content .sharqia-content').addClass("d-block")
      $('.marker-with-popup.sharqia ').addClass("d-block")
      $("#sharqia-location").addClass("active-sec")
      }

      // asser
      else if( $("#asser-link").hasClass("active")){
        console.log("asser");
        $('.map-bg > div.asser-bg').removeClass("d-none");
        $('.tags-content .asser-content').removeClass("d-none")
        $('.marker-with-popup.asser ').removeClass("d-none")
  
        $('.map-bg > div.asser-bg').addClass("d-block");
        $('.tags-content .asser-content').addClass("d-block")
        $('.marker-with-popup.asser ').addClass("d-block")
        $("#asser-location").addClass("active-sec")
      }

       // shamalia
       else if( $("#shamalia-link").hasClass("active")){
        console.log("shamalia");
        $('.map-bg > div.shamalia-bg').removeClass("d-none");
        $('.tags-content .shamalia-content').removeClass("d-none")
        $('.marker-with-popup.shamalia ').removeClass("d-none")
  
        $('.map-bg > div.shamalia-bg').addClass("d-block");
        $('.tags-content .shamalia-content').addClass("d-block")
        $('.marker-with-popup.shamalia ').addClass("d-block")
        $("#shamalia-location").addClass("active-sec")
      }

        // baaha
        else if( $("#baaha-link").hasClass("active")){
          console.log("baaha");
          $('.map-bg > div.baaha-bg').removeClass("d-none");
          $('.tags-content .baaha-content').removeClass("d-none")
          $('.marker-with-popup.baaha ').removeClass("d-none")

          $('.map-bg > div.baaha-bg').addClass("d-block");
          $('.tags-content .baaha-content').addClass("d-block")
          $('.marker-with-popup.baaha ').addClass("d-block")
          $("#baaha-location").addClass("active-sec")
        }

        // qasim
        else if( $("#qasim-link").hasClass("active")){
          console.log("qasim");
          $('.map-bg > div.qasim-bg').removeClass("d-none");
          $('.tags-content .qasim-content').removeClass("d-none")
          $('.marker-with-popup.qasim ').removeClass("d-none")

          $('.map-bg > div.qasim-bg').addClass("d-block");
          $('.tags-content .qasim-content').addClass("d-block")
          $('.marker-with-popup.qasim ').addClass("d-block")
          $("#qasim-location").addClass("active-sec")
        }

        // haael
        else if( $("#haael-link").hasClass("active")){
          console.log("haael");
          $('.map-bg > div.haael-bg').removeClass("d-none");
          $('.tags-content .haael-content').removeClass("d-none")
          $('.marker-with-popup.haael').removeClass("d-none")

          $('.map-bg > div.haael-bg').addClass("d-block");
          $('.tags-content .haael-content').addClass("d-block")
          $('.marker-with-popup.haael').addClass("d-block")
          $("#haael-location").addClass("active-sec")
        }

         // tabuk
         else if( $("#tabuk-link").hasClass("active")){
          console.log("tabuk");
          $('.map-bg > div.tabuk-bg').removeClass("d-none");
          $('.tags-content .tabuk-content').removeClass("d-none")
          $('.marker-with-popup.tabuk').removeClass("d-none")

          $('.map-bg > div.tabuk-bg').addClass("d-block");
          $('.tags-content .tabuk-content').addClass("d-block")
          $('.marker-with-popup.tabuk').addClass("d-block")
          $("#tabuk-location").addClass("active-sec")
        }

        // gouf
        else if( $("#gouf-link").hasClass("active")){
          console.log("gouf");
          $('.map-bg > div.gouf-bg').removeClass("d-none");
          $('.tags-content .gouf-content').removeClass("d-none")
          $('.marker-with-popup.gouf').removeClass("d-none")

          $('.map-bg > div.gouf-bg').addClass("d-block");
          $('.tags-content .gouf-content').addClass("d-block")
          $('.marker-with-popup.gouf').addClass("d-block")
          $("#gouf-location").addClass("active-sec")
        }

         // gazan
         else if( $("#gazan-link").hasClass("active")){
          console.log("gazan");
          $('.map-bg > div.gazan-bg').removeClass("d-none");
          $('.tags-content .gazan-content').removeClass("d-none")
          $('.marker-with-popup.gazan').removeClass("d-none")

          $('.map-bg > div.gazan-bg').addClass("d-block");
          $('.tags-content .gazan-content').addClass("d-block")
          $('.marker-with-popup.gazan').addClass("d-block")
          $("#gazan-location").addClass("active-sec")
        }

         // nagran
         else if( $("#nagran-link").hasClass("active")){
          console.log("nagran");
          $('.map-bg > div.nagran-bg').removeClass("d-none");
          $('.tags-content .nagran-content').removeClass("d-none")
          $('.marker-with-popup.nagran').removeClass("d-none")

          $('.map-bg > div.nagran-bg').addClass("d-block");
          $('.tags-content .nagran-content').addClass("d-block")
          $('.marker-with-popup.nagran').addClass("d-block")
          $("#nagran-location").addClass("active-sec")
        }

  })



// map locations click 
  
$(".interactive-map .map-cont .svg-map svg ").on("click", function () {
  $(".navigation-links a").removeClass("active")
    $(".interactive-map .map-cont .svg-map svg path").removeClass("active-sec");
    $('.map-bg > div').addClass("d-none");
    $('.tags-content > div').addClass("d-none")
    $('.marker-with-popup').addClass("d-none")
    console.log("locationClicked");

    
    // #reyadh-location
    if( $("#reyadh-location").hasClass("active")){
      console.log("reyadh00");
      $('.map-bg > div.ryadh-bg').removeClass("d-none");
      $('.tags-content .ryadh-content').removeClass("d-none")
      $('.marker-with-popup.reyadh').removeClass("d-none")

      $('.map-bg > div.ryadh-bg').addClass("d-block");
      $('.tags-content .ryadh-content').addClass("d-block")
      $('.marker-with-popup.reyadh').addClass("d-block")
      $("#reyadh-location").addClass("active-sec")
      $(".navigation-links #reyadh-link").addClass("active")
    }

    // #makkah-location
    else if( $("#makkah-location").hasClass("active")){
      console.log("makkah00");
      console.log("makkah");
      $('.map-bg > div.makaah-bg').removeClass("d-none");
      $('.tags-content .makkah-content').removeClass("d-none")
      $('.marker-with-popup.makkah').removeClass("d-none")

      $('.map-bg > div.makaah-bg').addClass("d-block");
      $('.tags-content .makkah-content').addClass("d-block")
      $('.marker-with-popup.makkah').addClass("d-block")
      $("#makkah-location").addClass("active-sec")
      $(".navigation-links #makkah-link").addClass("active")
    }
    // #madenah-location
    else if( $("#madenah-location").hasClass("active")){
      console.log("madenah00");
      $('.map-bg > div.madinah-bg').removeClass("d-none");
      $('.tags-content .madenah-content').removeClass("d-none")
      $('.marker-with-popup.madinah ').removeClass("d-none")

      $('.map-bg > div.madinah-bg').addClass("d-block");
      $('.tags-content .madenah-content').addClass("d-block")
      $('.marker-with-popup.madinah ').addClass("d-block")
      $("#madenah-location").addClass("active-sec")
      $(".navigation-links #madenah-link").addClass("active")
    }
    // #sharqia-location
    else if( $("#sharqia-location").hasClass("active")){
      console.log("sharqia00");
      $('.map-bg > div.sharqia-bg').removeClass("d-none");
      $('.tags-content .sharqia-content').removeClass("d-none")
      $('.marker-with-popup.sharqia').removeClass("d-none")

      $('.map-bg > div.sharqia-bg').addClass("d-block");
      $('.tags-content .sharqia-content').addClass("d-block")
      $('.marker-with-popup.sharqia').addClass("d-block")
      $("#sharqia-location").addClass("active-sec")
      $(".navigation-links #sharqia-link").addClass("active")
    }
    // #asser-location
    else if( $("#asser-location").hasClass("active")){
      console.log("asser00");
      $('.map-bg > div.asser-bg').removeClass("d-none");
      $('.tags-content .asser-content').removeClass("d-none")
      $('.marker-with-popup.asser').removeClass("d-none")

      $('.map-bg > div.asser-bg').addClass("d-block");
      $('.tags-content .asser-content').addClass("d-block")
      $('.marker-with-popup.asser').addClass("d-block")
      $("#asser-location").addClass("active-sec")
      $(".navigation-links #asser-link").addClass("active")
    }
    // #shamalia-location
    else if( $("#shamalia-location").hasClass("active")){
      console.log("shamalia00");
      $('.map-bg > div.shamalia-bg').removeClass("d-none");
      $('.tags-content .shamalia-content').removeClass("d-none")
      $('.marker-with-popup.shamalia').removeClass("d-none")

      $('.map-bg > div.shamalia-bg').addClass("d-block");
      $('.tags-content .shamalia-content').addClass("d-block")
      $('.marker-with-popup.shamalia').addClass("d-block")
      $("#shamalia-location").addClass("active-sec")
      $(".navigation-links #shamalia-link").addClass("active")
    }
    // #baaha-location
    else if( $("#baaha-location").hasClass("active")){
      console.log("baaha00");
      $('.map-bg > div.baaha-bg').removeClass("d-none");
      $('.tags-content .baaha-content').removeClass("d-none")
      $('.marker-with-popup.baaha').removeClass("d-none")

      $('.map-bg > div.baaha-bg').addClass("d-block");
      $('.tags-content .baaha-content').addClass("d-block")
      $('.marker-with-popup.baaha').addClass("d-block")
      $("#baaha-location").addClass("active-sec")
      $(".navigation-links #baaha-link").addClass("active")
    }
    // #qasim-location
    else if( $("#qasim-location").hasClass("active")){
      console.log("qasim00");
      $('.map-bg > div.qasim-bg').removeClass("d-none");
      $('.tags-content .qasim-content').removeClass("d-none")
      $('.marker-with-popup.qasim').removeClass("d-none")

      $('.map-bg > div.qasim-bg').addClass("d-block");
      $('.tags-content .qasim-content').addClass("d-block")
      $('.marker-with-popup.qasim').addClass("d-block")
      $("#qasim-location").addClass("active-sec")
      $(".navigation-links #qasim-link").addClass("active")
    }
    // #haael-location
    else if( $("#haael-location").hasClass("active")){
      console.log("haael00");
      $('.map-bg > div.haael-bg').removeClass("d-none");
      $('.tags-content .haael-content').removeClass("d-none")
      $('.marker-with-popup.haael').removeClass("d-none")

      $('.map-bg > div.haael-bg').addClass("d-block");
      $('.tags-content .haael-content').addClass("d-block")
      $('.marker-with-popup.haael').addClass("d-block")
      $("#haael-location").addClass("active-sec")
      $(".navigation-links #haael-link").addClass("active")
    }
    // #tabuk-location
    else if( $("#tabuk-location").hasClass("active")){
      console.log("tabuk00");
      $('.map-bg > div.tabuk-bg').removeClass("d-none");
      $('.tags-content .tabuk-content').removeClass("d-none")
      $('.marker-with-popup.tabuk').removeClass("d-none")

      $('.map-bg > div.tabuk-bg').addClass("d-block");
      $('.tags-content .tabuk-content').addClass("d-block")
      $('.marker-with-popup.tabuk').addClass("d-block")
      $("#tabuk-location").addClass("active-sec")
      $(".navigation-links #tabuk-link").addClass("active")
    }
    // #gouf-location
    else if( $("#gouf-location").hasClass("active")){
      console.log("gouf00");
      $('.map-bg > div.gouf-bg').removeClass("d-none");
      $('.tags-content .gouf-content').removeClass("d-none")
      $('.marker-with-popup.gouf').removeClass("d-none")

      $('.map-bg > div.gouf-bg').addClass("d-block");
      $('.tags-content .gouf-content').addClass("d-block")
      $('.marker-with-popup.gouf').addClass("d-block")
      $("#gouf-location").addClass("active-sec")
      $(".navigation-links #gouf-link").addClass("active")
    }
    // #gazan-location
    else if( $("#gazan-location").hasClass("active")){
      console.log("gazan00");
      $('.map-bg > div.gazan-bg').removeClass("d-none");
      $('.tags-content .gazan-content').removeClass("d-none")
      $('.marker-with-popup.gazan').removeClass("d-none")

      $('.map-bg > div.gazan-bg').addClass("d-block");
      $('.tags-content .gazan-content').addClass("d-block")
      $('.marker-with-popup.gazan').addClass("d-block")
      $("#gazan-location").addClass("active-sec")
      $(".navigation-links #gazan-link").addClass("active")
    }

    // #nagran-location
    else if( $("#nagran-location").hasClass("active")){
      console.log("nagran00");
      $('.map-bg > div.nagran-bg').removeClass("d-none");
      $('.tags-content .nagran-content').removeClass("d-none")
      $('.marker-with-popup.nagran').removeClass("d-none")

      $('.map-bg > div.nagran-bg').addClass("d-block");
      $('.tags-content .nagran-content').addClass("d-block")
      $('.marker-with-popup.nagran').addClass("d-block")
      $("#nagran-location").addClass("active-sec")
      $(".navigation-links #nagran-link").addClass("active")
    }
})


// #reyadh-location
$("#reyadh-location").on("click", function () {
  console.log("reyadh");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})

// #makkah-location
$("#makkah-location").on("click", function () {
  console.log("makkah");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})

// #madenah-location
$("#madenah-location").on("click", function () {
  console.log("madenah");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})

// #sharqia-location
$("#sharqia-location").on("click", function () {
  console.log("sharqia");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})

// #asser-location
$("#asser-location").on("click", function () {
  console.log("asser");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})

// #shamalia-location
$("#shamalia-location").on("click", function () {
  console.log("shamalia");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})

// #baaha-location
$("#baaha-location").on("click", function () {
  console.log("baaha");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})

// #qasim-location
$("#qasim-location").on("click", function () {
  console.log("qasim");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})

// #haael-location
$("#haael-location").on("click", function () {
  console.log("haael");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})

// #tabuk-location
$("#tabuk-location").on("click", function () {
  console.log("tabuk");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})


// #gouf-location
$("#gouf-location").on("click", function () {
  console.log("gouf");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})


// #gazan-location
$("#gazan-location").on("click", function () {
  console.log("gazan");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})





// #nagran-location
$("#nagran-location").on("click", function () {
  console.log("nagran");
  $(".interactive-map .map-cont .svg-map svg path").removeClass("active");
  $(this).addClass("active");
})