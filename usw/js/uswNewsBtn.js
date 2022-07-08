const newsList2 = document.querySelector(".news_list2");
const newsButton = document.querySelector(".news__button a");
const newsButtonArrow = document.querySelector(".news__button span");
let newsButtonState = false // false는 hide, true는 open

// 수원대 뉴스 MORE, CLOSE 버튼
newsButton.addEventListener("click", () => {
  if(!newsButtonState) {
    newsButtonState = true;
    newsButton.textContent = "CLOSE";
    newsList2.style.height = "305px";
    newsButtonArrow.style.background = "url(/Github/CloneCoding/usw/img/hide_btn.png) no-repeat";
    newsButtonArrow.style.backgroundSize = "contain";
  } else {
    newsButtonState = false;
    newsButton.textContent = "MORE"
    newsList2.style.height = "0px";
    newsButtonArrow.style.background = "url(/Github/CloneCoding/usw/img/show_btn.png) no-repeat";
    newsButtonArrow.style.backgroundSize = "contain";
  }
});