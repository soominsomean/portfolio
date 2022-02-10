"use strict";

// // Make navbar trasparent when it is on the top
// const navbar = document.querySelector("#navbar");
// const navbarHeight = navbar.getBoundingClientRect().height;
// document.addEventListener("scroll", () => {
//   console.log(window.scrollY);
//   console.log(`navbarHeight: ${navbarHeight}`);
//   if (window.scrollY > navbarHeight) {
//     navbar.classList.add("navbar--dark");
//   } else {
//     navbar.classList.remove("navbar--dark");
//   }
// });

// Make navbar trasparent when it is on the top
const about = document.querySelector("#about");
const aboutHeight = about.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`aboutHeight: ${aboutHeight}`);
  if (window.scrollY > aboutHeight - 150) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// //Handle scrolling when tapping on contact me button
// Currenlty I am using mailto
// const homeContactBtn = document.querySelector(".home__contact");
// homeContactBtn.addEventListener("click", () => {
// scrollIntoView("#contact");
// });

//Make Home transparent as we scroll down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Make scroll into view into a function as we expect it to be reused multiple times
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
