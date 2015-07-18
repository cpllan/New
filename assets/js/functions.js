// @codekit-prepend "jquery.js";

// @codekit-prepend "navigation.js";

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
