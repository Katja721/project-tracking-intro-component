"use strict";
const hamburgerIcon = document.querySelector(".hamburger-icon");
const menu = document.querySelector(".menu-mobile");
const closeIcon = document.querySelector(".close-icon");
hamburgerIcon.addEventListener("click", function () {
  hamburgerIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  menu.classList.remove("hidden");
});
closeIcon.addEventListener("click", function () {
  hamburgerIcon.classList.remove("hidden");

  closeIcon.classList.add("hidden");
  menu.classList.add("hidden");
});
