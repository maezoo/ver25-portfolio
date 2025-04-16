const tapList = document.querySelectorAll('.side-tab li');
const tapItem = document.querySelectorAll('.tab-content');
// 초기 설정: 첫 번째 탭과 콘텐츠 보이게
if (tapList.length > 0 && tapItem.length > 0) {
    tapList[0].classList.add('active');
    tapItem[0].classList.add('show');
}

tapList.forEach(tab => {
    tab.addEventListener('click', () => {
        // 모든 콘텐츠 숨기기
        tapItem.forEach(item => item.classList.remove('show'));

        // 모든 탭에서 active 제거
        tapList.forEach(t => t.classList.remove('active'));

        // 클릭된 탭에 active 추가
        tab.classList.add('active');

        // 연결된 콘텐츠 선택해서 보이기
        const targetId = tab.getAttribute('data-target');
        const targetContent = document.querySelector(targetId);
        if (targetContent) {
            targetContent.classList.add('show');
        }
    });
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

