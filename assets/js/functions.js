// @codekit-prepend "jquery.js";
// @codekit-prepend "navigation.js";
// @codekit-prepend "slider.js";


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
    speed: 500,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  });
});
