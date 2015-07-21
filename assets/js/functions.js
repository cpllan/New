// @codekit-prepend "jquery.js";
// @codekit-prepend "navigation.js";
// @codekit-prepend "slider.js";
// @codekit-prepend "lazyload.js";
// @codekit-prepend "jquery.mixitup.js";
// @codekit-prepend "modal.js";

  $(document).ready(function() {
    $('#menu').sidr({
      name: 'respNav',
      side: 'right',
      source: '#navigation'
    });
  });

  $(document).bind("click", function () {
      $.sidr('close', 'respNav');
  });

$(document).ready(function(){
  $('.home-slider').slick({
    speed: 300,
    arrows: true,
    dots: true,
    prevArrow: '<span class="slick-prev ion-chevron-left"></span>',
    nextArrow: '<span class="slick-next ion-chevron-right"></span>',
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  });
});

$(function(){
  $('#Container').mixItUp({
    animation: {
    duration: 400,
    effects: 'fade',
    easing: 'ease'
    }
  });
});

$('#manual-ajax').click(function(event) {
  event.preventDefault();
    $.get(this.href, function(html) {
    $(html).appendTo('body').modal();
  });
});
