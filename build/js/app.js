// Mobile menu

const menu = document.querySelector(".mobile-btn");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

const mobileMenu = () => {
  menu.classList.toggle("active");
  nav.classList.toggle("mobile-menu");
  body.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);

// slick-slider
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  });
});
