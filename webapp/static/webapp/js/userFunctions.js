$(document).ready(function() {

  /* Display Menu on scroll */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#sidebar').fadeIn(500);
    } else {
      $('#sidebar').fadeOut(500);
    }
  });

  /* Smooth scroll for menu */
  


});
