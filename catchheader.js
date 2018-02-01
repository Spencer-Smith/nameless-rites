$(document).ready(function() {
  document.getElementById("indexheader").style.position="relative";
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 520) {
      document.getElementById("indexheader").style.position="fixed";
    }
    else {
      document.getElementById("indexheader").style.position="relative";
    }
  });
});
