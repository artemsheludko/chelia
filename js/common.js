$(document).ready(function() {
  "use strict";

  /* =======================
  // Toggle Menu
  ======================= */
  $(".hamburger-icon").on("click", function() {
    $(".menu-nav").toggleClass("is-open");
  });

  /* =======================
  // Sticky Header
  ======================= */
  $(".header").sticky({ topSpacing: 0 });

  /* =======================
  // Responsive Videos
  ======================= */
  $(".main").fitVids({ customSelector: ['iframe[src*="ted.com"]'] });

  /* =======================
  // Easy Pie Chart
  ======================= */
  var ww = window.innerWidth,
    wh = window.innerHeight;

  function reveals() {
    $(window).on('scroll', function () {
      $(".chart").each(function (i) {
        var el_top = $(this).offset().top,
          win_bottom = wh + $(window).scrollTop();

        if (el_top < win_bottom) {
          $(".chart").easyPieChart({
            lineWidth: 10,
            scaleLength: 0,
            size: 120,
            lineCap: "circle",
            animate: 2000,
            scaleColor: "#dfe0e0",
            onStep: function (from, to, percent) {
              $(this.el).find('.percent').text(Math.round(percent));
            },
            barColor: function (percent) {
              var ctx = this.renderer.getCtx();
              var canvas = this.renderer.getCanvas();
              var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
              gradient.addColorStop(0, "#FFA7A7");
              gradient.addColorStop(1, "#FF2828"); 
              return gradient;
            }
          });
        }
      });
    }).scroll();
  }

  setTimeout(function () {
    reveals();
  }, 500);


  /* =======================
  // Featherlight.js
  ======================= */
  var workLink = $(".work-popup-link");
  
  $(workLink).featherlight({ targetAttr: "href" });
  
  $(workLink).click(function() {
    var workImageAlt = $(this).find(".work-image").attr("title");
    $('<div class="caption">').text(workImageAlt).appendTo($(".featherlight-content"));
  });


  /* =======================
  // Slick Slider
  ======================= */
  $(".slick").slick({
    infinite: true,
    slideToShow: 1,
    dots: true,
    arrows: false
  });

  /* =======================
  // Paralax Effect
  ======================= */
  $(window).scroll(function () {
    var st = $(this).scrollTop();

    $(".hero").css({
      "transform": "translate3d(0px, " + st / 7 + "px, 0px)"
    })
  });

  /* =======================
  // Smooth State
  ======================= */
  var $page = $("#canvas"),
    options = {
      debug: true,
      prefetch: true,
      blacklist: ".work-popup-link",
      cacheLength: 2,
      onStart: {
        duration: 250, // Duration of our animation
        render: function($container) {
          // Add your CSS animation reversing class
          $container.addClass("is-exiting");
          // Restart your animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass("is-exiting");

          // Inject the new content
          $container.html($newContent);

          // Inject Sticky
          $(".header").sticky({ topSpacing: 0 });

          $(".hamburger-icon").on("click", function() {
            $(".menu-nav").toggleClass("is-open");
          });

          // Inject PieChart
          var ww = window.innerWidth,
            wh = window.innerHeight;

          function reveals() {
            $(window).on('scroll', function () {
              $(".chart").each(function (i) {
                var el_top = $(this).offset().top,
                  win_bottom = wh + $(window).scrollTop();

                if (el_top < win_bottom) {
                  $(".chart").easyPieChart({
                    lineWidth: 10,
                    scaleLength: 0,
                    size: 120,
                    lineCap: "circle",
                    animate: 2000,
                    scaleColor: "#dfe0e0",
                    barColor: function (percent) {
                      var ctx = this.renderer.getCtx();
                      var canvas = this.renderer.getCanvas();
                      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                      gradient.addColorStop(0, "#FFA7A7");
                      gradient.addColorStop(1, "#FF2828");
                      return gradient;
                    }
                  });
                }
              });
            }).scroll();
          }

          setTimeout(function () {
            reveals();
          }, 500);

          // Inject Slick Slider
          $(".slick").slick({
            infinite: true,
            slideToShow: 1,
            dots: true,
            arrows: false
          });

          // Inject Featherlight
          var workLink = $(".work-popup-link");

          $(workLink).featherlight({ targetAttr: "href" });

          $(workLink).click(function () {
            var workImageAlt = $(this).find(".work-image").attr("title");
            $('<div class="caption">').text(workImageAlt).appendTo($(".featherlight-content"));
          });

        }
      }
    },
    smoothState = $page.smoothState(options).data("smoothState");
});
