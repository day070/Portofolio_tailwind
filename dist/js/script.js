// Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// animate text
const text = document.querySelector(".teks-kedua");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Student";
  }, 0);
  setTimeout(() => {
    text.textContent = "Programmer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Desaigner";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);
