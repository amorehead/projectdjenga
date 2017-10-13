$(document).ready(function() {

  /* Display Menu on scroll */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#sidebar').fadeIn(500);
    } else {
      $('#sidebar').fadeOut(500);
    }
  });

  /* Smooth scroll
  still isnt working, ill get on it though
  itll basically allow that button to smooth scroll to the bottom of the page
  */


});
