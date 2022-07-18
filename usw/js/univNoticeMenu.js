const noticeMenus = document.querySelectorAll(".univ_notice > ul li a");
const noticeList = document.querySelector(".notice__list");
const listWidth = 760;
let clickedMenu;

//클릭된 메뉴 요소 인덱스 반환 함수
const getIndex = (att) => {
  for(i = 0; i < noticeMenus.length; i++) {
    if(noticeMenus[i] == att) {
      return i;
    }
  }
}

//메뉴 포커스 시 색상 변경 함수
const grayFont = (att) => {
  att.style.color = "gray";
}

//클릭된 메뉴 초기화
clickedMenu = noticeMenus[0];
clickedMenu.style.background = "var(--suwon-navy)";
clickedMenu.style.color = "#FFF";

//클릭 함수
const menuClick = (att) => {
  clickedMenu.style.background = "#FBFCFE";
  clickedMenu.style.color = "black";

  att.style.background = "var(--suwon-navy)";
  att.style.color = "#fff";
  noticeList.style.transform = `translateX(-${listWidth * getIndex(att)}px)`;
  clickedMenu = att; 
}