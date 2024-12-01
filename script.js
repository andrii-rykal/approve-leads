"use strict";

const checkbox = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".header-menu a");

const sliders = [
  {
    container: document.querySelector(".hero-slider"),
    line: document.querySelector(".slider-line"),
    items: document.querySelectorAll(".slider-photo"),
    prevBtn: document.getElementById("prev"),
    nextBtn: document.getElementById("next"),
    infinite: true,
  },
  {
    container: document.querySelector(".review-block"),
    line: document.querySelector(".review-line"),
    items: document.querySelectorAll(".review-place"),
    prevBtn: document.querySelector(".review-btn-prev"),
    nextBtn: document.querySelector(".review-btn-next"),
    prevBtnSvg: document.getElementById("svg-left"),
    nextBtnSvg: document.getElementById("svg-right"),
    infinite: false,
  },
];

const initSlider = ({
  container,
  line,
  items,
  prevBtn,
  nextBtn,
  prevBtnSvg,
  nextBtnSvg,
  infinite,
}) => {
  let sliderCount = 0;

  const updateButtons = () => {
    if (!infinite) {
      prevBtn.classList.toggle("review-disabled", sliderCount <= 0);
      nextBtn.classList.toggle("review-disabled", sliderCount >= items.length - 1);

      prevBtnSvg?.classList.toggle("svg-disabled", sliderCount <= 0);
      nextBtnSvg?.classList.toggle("svg-disabled", sliderCount >= items.length - 1);
    }
  };

  const rollSlider = () => {
    const sliderWidth = container.clientWidth;
    line.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  };

  const nextSlide = () => {
    sliderCount = infinite
      ? (sliderCount + 1) % items.length
      : Math.min(sliderCount + 1, items.length - 1);
    rollSlider();
    updateButtons();
  };

  const prevSlide = () => {
    sliderCount = infinite
      ? (sliderCount - 1 + items.length) % items.length
      : Math.max(sliderCount - 1, 0);
    rollSlider();
    updateButtons();
  };

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  window.addEventListener("resize", rollSlider);

  if (!infinite) updateButtons();

  setInterval(() => {
    if (infinite) nextSlide();
  }, 10000);
};

sliders.forEach(initSlider);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => (checkbox.checked = false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) checkbox.checked = false;
});
