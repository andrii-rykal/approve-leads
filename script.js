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




// "use strict";

// const checkbox = document.getElementById("menu");
// const menuLinks = document.querySelectorAll('.header-menu a');

// const heroSlider = document.querySelector(".hero-slider");
// const heroSliderImages = document.querySelectorAll(".slider-photo");
// const heroSliderLine = document.querySelector(".slider-line");
// const heroPrevBtn = document.getElementById("prev");
// const heroNextBtn = document.getElementById("next");

// const reviewSlider = document.querySelector(".review-block");
// const reviewSliderItems = document.querySelectorAll(".review-place");
// const reviewSliderLine = document.querySelector(".review-line");
// const reviewPrevBtn = document.querySelector(".review-btn-prev");
// const reviewNextBtn = document.querySelector(".review-btn-next");
// const reviewPrevBtnSvg = document.getElementById("svg-left");
// const reviewNextBtnSvg = document.getElementById("svg-right");

// const initInfinitySlider = (
//   sliderContainer,
//   sliderLine,
//   sliderImages,
//   prevBtn,
//   nextBtn
// ) => {
//   let sliderCount = 0;

//   const rollSlider = () => {
//     const sliderWidth = sliderContainer.clientWidth;

//     sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
//   };

//   const nextSlide = () => {
//     sliderCount++;

//     if (sliderCount >= sliderImages.length) {
//       sliderCount = 0;
//     }

//     rollSlider();
//   };

//   const prevSlide = () => {
//     sliderCount--;

//     if (sliderCount < 0) {
//       sliderCount = sliderImages.length - 1;
//     }

//     rollSlider();
//   };

//   setInterval(() => {
//     nextSlide();
//   }, 10000);

//   nextBtn.addEventListener("click", nextSlide);
//   prevBtn.addEventListener("click", prevSlide);

//   window.addEventListener("resize", rollSlider);
// };

// initInfinitySlider(
//   heroSlider,
//   heroSliderLine,
//   heroSliderImages,
//   heroPrevBtn,
//   heroNextBtn
// );

// const initFinishSlider = (
//   sliderContainer,
//   sliderLine,
//   sliderImages,
//   prevBtn,
//   nextBtn
// ) => {
//   let sliderCount = 0;

//   const rollSlider = () => {
//     const sliderWidth = sliderContainer.clientWidth;

//     sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
//   };

//   const nextSlide = () => {
//     sliderCount++;

//     if (sliderCount >= sliderImages.length - 1) {
//       sliderCount = sliderImages.length - 1;
//       reviewNextBtn.classList.add("review-disabled");
//       reviewNextBtnSvg.classList.add("svg-disabled");
//     } else {
//       reviewNextBtn.classList.remove("review-disabled");
//       reviewNextBtnSvg.classList.remove("svg-disabled");
//     }

//     reviewPrevBtnSvg.classList.remove("svg-disabled");
//     reviewPrevBtn.classList.remove("review-disabled");

//     rollSlider();
//   };

//   const prevSlide = () => {
//     sliderCount--;

//     if (sliderCount < 1) {
//       sliderCount = 0; 
//       reviewPrevBtnSvg.classList.add("svg-disabled");
//       reviewPrevBtn.classList.add("review-disabled");
//     } else {
//       reviewPrevBtnSvg.classList.remove("svg-disabled");
//       reviewPrevBtn.classList.remove("review-disabled");
//     }

//     reviewNextBtnSvg.classList.remove("svg-disabled");
//     reviewNextBtn.classList.remove("review-disabled");

//     rollSlider();
//   };

//   nextBtn.addEventListener("click", nextSlide);
//   prevBtn.addEventListener("click", prevSlide);

//   window.addEventListener("resize", rollSlider);

//   if (sliderCount === 0) {
//     reviewPrevBtnSvg.classList.add("svg-disabled");
//     reviewPrevBtn.classList.add("review-disabled");
//   }
// };

// initFinishSlider(
//   reviewSlider,
//   reviewSliderLine,
//   reviewSliderItems,
//   reviewPrevBtn,
//   reviewNextBtn
// );

// menuLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     checkbox.checked = false;
//   });
// });

// window.addEventListener("resize", () => {
//   const viewportWidth = window.innerWidth;

//   if (viewportWidth > 768) {
//     checkbox.checked = false;
//   }
// });
