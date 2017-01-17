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
      responsive: [
        {
          breakpoint: 1930,
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
});

