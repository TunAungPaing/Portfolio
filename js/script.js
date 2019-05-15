$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Web Developer.", "Legendary Gamer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  var skill = $(".skillsSection").offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > skill - $(window).height() + 250) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 150,
        onStep: function(from, to, percent) {
          $(this.el)
            .find("percent")
            .text(Math.round(percent));
        }
      });
    }
  });
});
