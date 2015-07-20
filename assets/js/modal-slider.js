// @codekit-prepend "jquery.js";
// @codekit-prepend "slider.js";

$(document).ready(function(){
  $('.modal-slider').slick({
    speed: 300,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  });
});
