const mainPrevBtn = document.querySelector("#main_prev");
const mainNextBtn = document.querySelector("#main_next");
const mainStopBtn = document.querySelector("#main_stop");
const mainPlayBtn = document.querySelector("#main_play");
const slideImg = document.querySelector(".slide__img");
let currentIndex = 0;
let intervalState = true; // 자동 슬라이드 재생 상태
let delayState = false; // 슬라이드 다음, 이전 버튼 클릭 딜레이 여부

slideImg.style.width = "8400px";
let firstNode = slideImg.firstElementChild.cloneNode(true);
let lastNode = slideImg.lastElementChild.cloneNode(true);

slideImg.appendChild(firstNode);
slideImg.insertBefore(lastNode, slideImg.firstChild);
slideImg.style.transform = "translateX(-1400px)";


// 다음 페이지로 넘기기
const nextPage = () => {
    if(!delayState) { 
        delayState = true;
        setTimeout(() => { delayState = false; }, 1000);
        if ( currentIndex == 3) {
          setTimeout(() => {
            slideImg.style.transition = "none";
            slideImg.style.transform = "translateX(-1400px)";
            currentIndex = 0;
          }, 800);
        }
        slideImg.style.transition = ".8s";
        slideImg.style.transform = `translateX(-${1400 + (1400 * (currentIndex++ + 1 ))}px)`;
      }
}
// 다음 페이지로 넘기기 버튼
mainNextBtn.addEventListener("click", nextPage);

// 앞 페이지로 넘기기 버튼
mainPrevBtn.addEventListener("click", () => {
  if(!delayState) {
    delayState = true;
    setTimeout(() => { delayState = false; }, 1000);
    if ( currentIndex == 0) {
      setTimeout(() => {
        slideImg.style.transition = "none";
        slideImg.style.transform = "translateX(-5600px)";
        currentIndex = 3;
      }, 800);
    }
    slideImg.style.transition = ".8s";
    slideImg.style.transform = `translateX(-${1400 + (1400 * (currentIndex-- - 1))}px)`;
  }
}); 

// 자동 슬라이드 재생 버튼
let autoSlide = setInterval(nextPage, 8000);

mainPlayBtn.addEventListener("click", () => {
    if(!intervalState) {
        intervalState = true;
        autoSlide = setInterval(nextPage, 2500);
    }
})

// 자동 슬라이드 중지 버튼
mainStopBtn.addEventListener("click", () => {
    if(intervalState) {
        intervalState = false
        clearInterval(autoSlide);
    }
})