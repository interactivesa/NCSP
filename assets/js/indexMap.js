$(document).ready(function () {
  // Navigation links hover
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

  // SVG map locations hover
  $(".interactive-map .map-cont .svg-map svg path").hover(
    function () {
      $(".navigation-links a").removeClass("active");
      $(".interactive-map .map-cont .svg-map svg path").removeClass("active-sec");
      $('.map-bg > div').addClass("d-none");
      $('.tags-content > div').addClass("d-none");
      $('.marker-with-popup').addClass("d-none");
      
      $(this).addClass("active-sec");

      const id = $(this).attr('id');
      handleLocationChange(id);
    },
    function () {
      $(this).removeClass("active-sec");
    }
  );

  function handleLocationChange(id) {
    if (id.includes("reyadh")) {
      console.log("reyadh");
      $('.map-bg > div.ryadh-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .ryadh-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.reyadh').removeClass("d-none").addClass("d-block");
      $("#reyadh-location").addClass("active-sec");
      $(".navigation-links #reyadh-link").addClass("active");
    } else if (id.includes("makkah")) {
      console.log("makkah");
      $('.map-bg > div.makaah-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .makkah-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.makkah').removeClass("d-none").addClass("d-block");
      $("#makkah-location").addClass("active-sec");
      $(".navigation-links #makkah-link").addClass("active");
    } else if (id.includes("madenah")) {
      console.log("madenah");
      $('.map-bg > div.madinah-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .madenah-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.madinah').removeClass("d-none").addClass("d-block");
      $("#madenah-location").addClass("active-sec");
      $(".navigation-links #madenah-link").addClass("active");
    } else if (id.includes("sharqia")) {
      console.log("sharqia");
      $('.map-bg > div.sharqia-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .sharqia-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.sharqia').removeClass("d-none").addClass("d-block");
      $("#sharqia-location").addClass("active-sec");
      $(".navigation-links #sharqia-link").addClass("active");
    } else if (id.includes("asser")) {
      console.log("asser");
      $('.map-bg > div.asser-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .asser-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.asser').removeClass("d-none").addClass("d-block");
      $("#asser-location").addClass("active-sec");
      $(".navigation-links #asser-link").addClass("active");
    } else if (id.includes("shamalia")) {
      console.log("shamalia");
      $('.map-bg > div.shamalia-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .shamalia-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.shamalia').removeClass("d-none").addClass("d-block");
      $("#shamalia-location").addClass("active-sec");
      $(".navigation-links #shamalia-link").addClass("active");
    } else if (id.includes("baaha")) {
      console.log("baaha");
      $('.map-bg > div.baaha-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .baaha-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.baaha').removeClass("d-none").addClass("d-block");
      $("#baaha-location").addClass("active-sec");
      $(".navigation-links #baaha-link").addClass("active");
    } else if (id.includes("qasim")) {
      console.log("qasim");
      $('.map-bg > div.qasim-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .qasim-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.qasim').removeClass("d-none").addClass("d-block");
      $("#qasim-location").addClass("active-sec");
      $(".navigation-links #qasim-link").addClass("active");
    } else if (id.includes("haael")) {
      console.log("haael");
      $('.map-bg > div.haael-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .haael-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.haael').removeClass("d-none").addClass("d-block");
      $("#haael-location").addClass("active-sec");
      $(".navigation-links #haael-link").addClass("active");
    } else if (id.includes("tabuk")) {
      console.log("tabuk");
      $('.map-bg > div.tabuk-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .tabuk-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.tabuk').removeClass("d-none").addClass("d-block");
      $("#tabuk-location").addClass("active-sec");
      $(".navigation-links #tabuk-link").addClass("active");
    } else if (id.includes("gouf")) {
      console.log("gouf");
      $('.map-bg > div.gouf-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .gouf-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.gouf').removeClass("d-none").addClass("d-block");
      $("#gouf-location").addClass("active-sec");
      $(".navigation-links #gouf-link").addClass("active");
    } else if (id.includes("gazan")) {
      console.log("gazan");
      $('.map-bg > div.gazan-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .gazan-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.gazan').removeClass("d-none").addClass("d-block");
      $("#gazan-location").addClass("active-sec");
      $(".navigation-links #gazan-link").addClass("active");
    } else if (id.includes("nagran")) {
      console.log("nagran");
      $('.map-bg > div.nagran-bg').removeClass("d-none").addClass("d-block");
      $('.tags-content .nagran-content').removeClass("d-none").addClass("d-block");
      $('.marker-with-popup.nagran').removeClass("d-none").addClass("d-block");
      $("#nagran-location").addClass("active-sec");
      $(".navigation-links #nagran-link").addClass("active");
    }
  }
});