//mobile
var sectionHeight = document.querySelector(".wealth-section").clientHeight;
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var vw = window.innerWidth;
var currentScrollPos = window.pageYOffset;
var header = document.querySelector(".main-header");
var headerHeight = header.offsetHeight;
const headerHover = document.querySelector(".header-hover");
if(vw > 992){
  if (currentScrollPos > sectionHeight){
    headerHover.style.pointerEvents = "initial";
    header.style.position = "fixed";
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-" + headerHeight + "px";
    }
    prevScrollpos = currentScrollPos;
  }
  else{
    if (currentScrollPos < (sectionHeight/2)){
      header.style.position = "initial";
    }
    headerHover.style.pointerEvents = "none";
    header.style.top = "-" + headerHeight + "px";
  }
}
else{
  header.style.position = "fixed";
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
      header.style.top = "-" + headerHeight + "px";
  }
  prevScrollpos = currentScrollPos;
}
}
