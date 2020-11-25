$(document).ready(function () {
  // Mobile menu
  $(".logo-bar").click(function () {
    $(".menu ul").slideToggle(500);
 
    return false;
  });
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  // Scroll top
  $(".nav-link,.scrollSectionBtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1000
    );

    return false;
  });
});
$(window).scroll(function () {
  var scrollValue = $(this).scrollTop();

  if (scrollValue > 500) {
    $(".scrollBtn").fadeIn();
    $(".navigation").addClass('sticky');
  } else {
    $(".scrollBtn").fadeOut();
    $(".navigation").removeClass('sticky');
  }
});
