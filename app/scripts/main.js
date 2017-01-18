$(document).ready(function() {

  $('#menu-toggle').click(function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
  });

  $('.slider').slick({
    infinite: true,
    dots: true,
    lazyLoad: 'progressive',
    autoplaySpeed: 5000,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    speed: 500
  });

  var $carousel = $('.carousel');

  $carousel
    .slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      focusOnSelect: true,
      lazyload: 'progressive',
      slidesToShow: 12,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 9
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    })
    .magnificPopup({
      type: 'image',
      delegate: 'a:not(.slick-cloned)',
      gallery: {
        enabled: true
      },
      callbacks: {
        open: function() {
          var current = $carousel.slick('slickCurrentSlide');
          $carousel.magnificPopup('goTo', current);
        },
        beforeClose: function() {
          $carousel.slick('slickGoTo', parseInt(this.index));
        }
      }
    });

    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      disable: 'mobile'
    });

    var forEach=function(t,o,r){if('[object Object]'===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll('.hamburger');
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener('click', function() {
          this.classList.toggle('is-active');
        }, false);
      });
    }

});

