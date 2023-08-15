$(document).ready(function () {
  const navbar = $('#navbar');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      navbar.addClass('navbar-light bg-light');
    } else {
      navbar.removeClass('navbar-light bg-light');
    }
  });

  function adjustTextSize() {
    if ($(window).width() <= 576) {
      alert("hubla")
      $('.caption-slide').addClass('display-2');
    } else {
      $('.caption-slide').removeClass('display-4');
    }
  }

  // Initial adjustment on page load
  adjustTextSize();

  // Adjust text size on window resize
  $(window).resize(function() {
    adjustTextSize();
  });
});
