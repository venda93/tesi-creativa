let vw = window.innerWidth;

if (vw < 992) {
  $(".menu-toggler").on("click", function () {
    $(".nav-menu").slideToggle();
    $("body").toggleClass("openedMenu");
    $("body").toggleClass("no-scroll");
  });
  $(".nav-link").on("click", function () {
    $(".nav-menu").slideUp();
  });
  $(".img-link").on("click", function () {
    $(".nav-menu").slideUp();
    $("body").removeClass("openedMenu");
    $("body").removeClass("no-scroll");
  });
  $(".dark-bg").on("click", function () {
    $(".nav-menu").slideUp();
    $("body").removeClass("openedMenu");
    $("body").removeClass("no-scroll");
  });
}
