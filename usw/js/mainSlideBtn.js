const mainPrevBtn = document.querySelector("#main_prev");
const mainNextBtn = document.querySelector("#main_next");
const slideImg = document.querySelector(".slide__img");
const mainSlides = document.querySelectorAll(".main_slides");
const slideLength = 1400;
let currentIndex = 0;

slideImg.style.width = "8400px";
let firstNode = slideImg.firstElementChild.cloneNode(true);
let lastNode = slideImg.lastElementChild.cloneNode(true);

slideImg.appendChild(firstNode);
slideImg.insertBefore(lastNode, slideImg.firstChild);
slideImg.style.transform = "translateX(-1400px)";

mainNextBtn.addEventListener("click", () => {
  if ( currentIndex == 3) {
    setTimeout(() => {
      slideImg.style.transition = "none";
      slideImg.style.transform = "translateX(-1400px";
      currentIndex = 0;
    }, 500);
  }
  slideImg.style.transition = ".5s";
  slideImg.style.transform = `translateX(-${1400 + (1400 * (currentIndex++ + 1 ))}px)`
});

mainPrevBtn.addEventListener("click", () => {
  if ( currentIndex == 0) {
    setTimeout(() => {
      slideImg.style.transition = "none";
      slideImg.style.transform = "translateX(-5600px)";
      currentIndex = 3;
    }, 500);
  }
  slideImg.style.transition = ".5s";
  slideImg.style.transform = `translateX(-${1400 + (1400 * (currentIndex-- - 1))}px)`;
});