$(document).ready(function() {
  var updateHeader = function() {
    if ($(window).scrollTop() > 520) {
      $("#indexheader").css("position", "fixed");
    }
    else {
      $("#indexheader").css("position", "relative");
    }
  }

  updateHeader();

  $(window).on('scroll', function() {
     updateHeader();
  });
});
