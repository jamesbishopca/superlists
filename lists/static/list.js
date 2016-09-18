jQuery(document).ready(function ($) {
  $('div').on('keypress', 'input[name="text"]', function () {
    $('.has-error').hide();
  });

  $('div').on('click', 'input[name="text"]', function() {
    $('.has-error').hide();
  });
});
