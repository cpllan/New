// @codekit-prepend "jquery.js";
// @codekit-prepend "navigation.js";
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
