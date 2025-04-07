// document.addEventListener('DOMContentLoaded', () => {


// const setActiveTab = (tabId) => {
//   const targetActive = document.querySelector(`#${tabId}`);
//   if (!targetActive) return;

//   articles.forEach(tabContent => {
//     tabContent.style.opacity = "0";
//     setTimeout(() => {
//       tabContent.style.display = "none";
//       tabContent.classList.remove("show");
//     }, 200); // 0.5초 후 사라짐
//   });

//   setTimeout(() => {
//     targetActive.style.display = "block";
//     setTimeout(() => {
//       targetActive.style.opacity = "1";
//       targetActive.classList.add("show");
//     }, 10); // 약간의 딜레이 후 나타남
//   }, 200);
// };

// });








// 키보드 이벤트 ======================================
const arrowNext = document.querySelector(".slide-btn-next");
const arrowPrev = document.querySelector(".slide-btn-prev");

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    arrowNext.classList.add("hover");
    setTimeout(() => {
      arrowNext.classList.remove("hover");
    }, 1000);
  }

  if (e.key === "ArrowLeft") {
    arrowPrev.classList.add("hover");
    setTimeout(() => {
      arrowPrev.classList.remove("hover");
    }, 1000);
  }
});

// mobile 팝업 open /close ==========================
// const hamburger = document.querySelector('.mo-hamburger');
// const closeBtn = document.querySelector('.close-x');

// hamburger.addEventListener('click', () => {
//   mobileMenu.classList.toggle('show');
//   sideBar.classList.toggle('show');
// });

// closeBtn.addEventListener('click', () => {
//   sideBar.classList.remove('show');
//   mobileMenu.classList.remove('show');
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const logos = document.querySelectorAll('.logo');
//   const mainSection = document.querySelector('#main-page');
//   const tabItems = document.querySelectorAll('.gnb-list');
//   const articles = document.querySelectorAll('.gnb-item');
//   const activeTab = sessionStorage.getItem('activeTab');
//   const sideBar = document.querySelector('.side-menu');
//   const mobileMenu = document.querySelector('.mobile-menu');


//   articles.forEach(section => section.classList.remove('show'));

//   if (activeTab) {
//     const activeSection = document.querySelector(activeTab);
//     if (activeSection) {
//       activeSection.classList.add('show');
//     }
//   } else {
//     mainSection.classList.add('show');
//   }

//   logos.forEach(logo => {
//     logo.addEventListener('click', () => {
//       articles.forEach(section => section.classList.remove('show'));
//       mainSection.classList.add('show');
//       sessionStorage.removeItem('activeTab');
//     });
//   });


//   tabItems.forEach(tab => {
//     tab.addEventListener('click', () => {
//       const targetSelector = tab.getAttribute('data-target');
//       const targetSection = document.querySelector(targetSelector);

//       if (targetSection) {
//         articles.forEach(section => section.classList.remove('show'));
//         targetSection.classList.add('show');
//         sessionStorage.setItem('activeTab', targetSelector);
//         // 사이드바 및 모바일 메뉴 숨기기==============
//         sideBar.classList.remove('show');
//         setTimeout(() => {
//           mobileMenu.classList.remove('show');
//         }, 200);
//         // ====================================
//       }
//     });
//   });

//   // mobile 팝업 open /close ==========================
//   // const hamburger = document.querySelector('.mo-hamburger');
//   // const closeBtn = document.querySelector('.close-x');

//   // hamburger.addEventListener('click', () => {
//   //   mobileMenu.classList.toggle('show');
//   //   sideBar.classList.toggle('show');
//   // });

//   // closeBtn.addEventListener('click', () => {
//   //   sideBar.classList.remove('show');
//   //   mobileMenu.classList.remove('show');
//   // });
// });

