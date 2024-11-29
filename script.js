"use strict";

const checkbox = document.getElementById('menu');

const slider = document.querySelector(".hero-slider");
const sliderImages = document.querySelectorAll(".slider-photo");
const sliderLine = document.querySelector(".slider-line");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let sliderCount = 0;

const rollSlider = () => {
  const sliderWidth = slider.clientWidth;

  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

const nextSlide = () => {
  sliderCount++;

  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
  }

  rollSlider();
};

const prevSlide = () => {
  sliderCount--;

  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1;
  }

  rollSlider();
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// setInterval(() => {
//   nextSlide();
// }, 3000);

window.addEventListener('resize', () => {
  const viewportWidth = window.innerWidth;
  
  if (viewportWidth > 768) {
    checkbox.checked = false;
  }
});