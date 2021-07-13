const headerHover = document.querySelector(".header-hover");
const header = document.querySelector(".main-header");
var headerHeight = header.offsetHeight;
var sectionHeight = document.querySelector(".wealth-section").clientHeight;
var currentScrollPos = window.pageYOffset;
headerHover.addEventListener("mouseover", () => {
    header.style.top = "0";
  });
header.addEventListener("mouseleave", () => {
  if (currentScrollPos > sectionHeight){
    header.style.top = "-" + headerHeight + "px";
  }
});