const nav = document.querySelector(".mobile-nav-menu");
const burger = document.querySelector(".burger");
const x = document.querySelector(".close-btn");

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
x.addEventListener("click", () => {
    nav.classList.toggle("open");
  });