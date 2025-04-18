
// =========================================
// 디자인 탭 메뉴
// =========================================
const tabList = document.querySelectorAll('.side-tab li');
const tabItem = document.querySelectorAll('.tab-content');
const tabWrap = document.querySelector('.content-wrapper');

// 초기 설정: 첫 번째 탭과 콘텐츠 보이게
if (tabList.length > 0 && tabItem.length > 0) {
    tabList[0].classList.add('active');
    tabItem[0].classList.add('show');
}

tabList.forEach(tab => {
    tab.addEventListener('click', () => {
        // 모든 콘텐츠 숨기기
        tabItem.forEach(item => item.classList.remove('show'));

        // 모든 탭에서 active 제거
        tabList.forEach(t => t.classList.remove('active'));

        // 클릭된 탭에 active 추가
        tab.classList.add('active');

        // 연결된 콘텐츠 선택해서 보이기
        const targetId = tab.getAttribute('data-target');
        const targetContent = document.querySelector(targetId);
        if (targetContent) {

            tabWrap.classList.add('rotate');

            // 애니메이션 후 클래스 제거 (애니메이션 지속시간과 동일하게 맞추기)
            setTimeout(() => {
                tabWrap.classList.remove('rotate');
            }, 800);
            // =======================
            targetContent.classList.add('show');
        }
    });
});

// =========================================
// 디자인 팝업 열기+닫기
// =========================================
const polaroid = document.querySelectorAll('.modal');
const designPopUp = document.querySelectorAll('.thumb-popUp');
// const designPopUp = document.querySelectorAll('.pop-close');
// const postecPop = document.querySelector('.postec-popUp');

polaroid.forEach(item => {
    item.addEventListener('click', () => {
        const targetImg = item.getAttribute('data-target');
        const targetPopUp = document.querySelector(`#${targetImg}`);

        if (targetPopUp) {
            targetPopUp.classList.add('show');
        }
    });
});

designPopUp.forEach(showPop => {
    showPop.addEventListener('click', (event) => {
        showPop.classList.remove('show');
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
//   const articles = document.querySelectorAll('.');
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

