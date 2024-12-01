"use strict";

const checkbox = document.getElementById("menu");
const menuLinks = document.querySelectorAll('.header-menu a');

const heroSlider = document.querySelector(".hero-slider");
const heroSliderImages = document.querySelectorAll(".slider-photo");
const heroSliderLine = document.querySelector(".slider-line");
const heroPrevBtn = document.getElementById("prev");
const heroNextBtn = document.getElementById("next");

const reviewSlider = document.querySelector(".review-block");
const reviewSliderItems = document.querySelectorAll(".review-place");
const reviewSliderLine = document.querySelector(".review-line");
const reviewPrevBtn = document.querySelector(".review-btn-prev");
const reviewNextBtn = document.querySelector(".review-btn-next");
const reviewPrevBtnSvg = document.getElementById("svg-left");
const reviewNextBtnSvg = document.getElementById("svg-right");

const initInfinitySlider = (
  sliderContainer,
  sliderLine,
  sliderImages,
  prevBtn,
  nextBtn
) => {
  let sliderCount = 0;

  const rollSlider = () => {
    const sliderWidth = sliderContainer.clientWidth;

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

  setInterval(() => {
    nextSlide();
  }, 5000);

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  window.addEventListener("resize", rollSlider);
};

initInfinitySlider(
  heroSlider,
  heroSliderLine,
  heroSliderImages,
  heroPrevBtn,
  heroNextBtn
);

const initFinishSlider = (
  sliderContainer,
  sliderLine,
  sliderImages,
  prevBtn,
  nextBtn
) => {
  let sliderCount = 0;

  const rollSlider = () => {
    const sliderWidth = sliderContainer.clientWidth;

    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  };

  const nextSlide = () => {
    sliderCount++;

    if (sliderCount >= sliderImages.length - 1) {
      sliderCount = sliderImages.length - 1;
      reviewNextBtn.classList.add("review-disabled");
      reviewNextBtnSvg.classList.add("svg-disabled");
    } else {
      reviewNextBtn.classList.remove("review-disabled");
      reviewNextBtnSvg.classList.remove("svg-disabled");
    }

    reviewPrevBtnSvg.classList.remove("svg-disabled");
    reviewPrevBtn.classList.remove("review-disabled");

    rollSlider();
  };

  const prevSlide = () => {
    sliderCount--;

    if (sliderCount < 1) {
      sliderCount = 0; 
      reviewPrevBtnSvg.classList.add("svg-disabled");
      reviewPrevBtn.classList.add("review-disabled");
    } else {
      reviewPrevBtnSvg.classList.remove("svg-disabled");
      reviewPrevBtn.classList.remove("review-disabled");
    }

    reviewNextBtnSvg.classList.remove("svg-disabled");
    reviewNextBtn.classList.remove("review-disabled");

    rollSlider();
  };

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  window.addEventListener("resize", rollSlider);

  if (sliderCount === 0) {
    reviewPrevBtnSvg.classList.add("svg-disabled");
    reviewPrevBtn.classList.add("review-disabled");
  }
};

initFinishSlider(
  reviewSlider,
  reviewSliderLine,
  reviewSliderItems,
  reviewPrevBtn,
  reviewNextBtn
);

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    checkbox.checked = false;
  });
});

window.addEventListener("resize", () => {
  const viewportWidth = window.innerWidth;

  if (viewportWidth > 768) {
    checkbox.checked = false;
  }
});
