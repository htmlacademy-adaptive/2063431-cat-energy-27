const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector(".main-nav__toggle");
const clippedImage = document.querySelector(".example__image-after");
const clippedImageSecond = document.querySelector(".example__image-before");
const clippingSlider = document.querySelector(".example__compare-input");

// Меню навигации

navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
})

// Слайдер

clippingSlider.addEventListener("input", (event) => {
  const newValue = `${event.target.value}%`;
  clippedImage.style.setProperty("--exposure", newValue);
  clippedImageSecond.style.setProperty("--exposure", newValue);
})

let animationFrame;
clippingSlider.addEventListener("input", (event) => {
  if (animationFrame) cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(() => {
    this.shadowRoot.host.style.setProperty(
      "--exposure",
      `${target.newValue}%`
    );
  });
});
