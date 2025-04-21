const polaroid = document.querySelectorAll('.modal');
let des1slide, des2slide, des3slide;

document.addEventListener("DOMContentLoaded", function () {
    // 슬라이드 초기화
    des1slide = new Swiper(".des1-slide", {
        keyboard: true,
        navigation: {
            nextEl: ".des1-Slide-next",
            prevEl: ".des1-Slide-prev",
        },
    });

    des2slide = new Swiper(".des2-slide", {
        keyboard: true,
        navigation: {
            nextEl: ".des2-Slide-next",
            prevEl: ".des2-Slide-prev",
        },
    });

    des3slide = new Swiper(".des3-slide", {
        keyboard: true,
        navigation: {
            nextEl: ".des3-Slide-next",
            prevEl: ".des3-Slide-prev",
        },
    });

    // 썸네일 클릭 시 팝업 열기 + 해당 슬라이드로 이동
    polaroid.forEach((item) => {
        item.addEventListener("click", () => {
            const targetId = item.getAttribute("data-target");
            const slideIndex = parseInt(item.getAttribute("data-slide-index"));

            let popup = null;
            let swiperInstance = null;

            // 각 팝업에 맞는 swiper와 팝업 설정
            if (["juice", "sunscreen", "dessert"].includes(targetId)) {
                popup = document.querySelector("#des1slide");
                swiperInstance = des1slide;
            } else if (["nonsan", "postec"].includes(targetId)) {
                popup = document.querySelector("#des2slide");
                swiperInstance = des2slide;
            } else if (["logo", "card", "banner-1", "banner-2"].includes(targetId)) {
                popup = document.querySelector("#des3slide");
                swiperInstance = des3slide;
            }

            // 팝업 열기
            if (popup && swiperInstance) {
                popup.classList.add("show");
                if (!isNaN(slideIndex)) {
                    swiperInstance.slideTo(slideIndex);
                }
            }
        });
    });

    const closeBtn = document.querySelectorAll(".close-btn");
    closeBtn.forEach((btnX) => {
        btnX.addEventListener("click", function (e) {
            e.preventDefault();
            const popup = this.closest(".thumb-popUp");
            if (popup) {
                popup.classList.remove("show");
            }
        });
    });
});

// polaroid.forEach((item) => {
//     item.addEventListener('click', () => {
//         const targetId = item.getAttribute('data-target');
//         const slideIndex = parseInt(item.getAttribute('data-slide-index'));

//         const targetPopup = Array.from(designPopUp).find(popup => {
//             const swiperContainer = popup.querySelector('.swiper');
//             return swiperContainer && swiperContainer.getAttribute('data-target') === targetId;
//         });

//         if (targetPopup) {
//             targetPopup.classList.add('show');

//             if (!isNaN(slideIndex)) {
//                 if (targetId === "des3slide") {
//                     des3slide.slideTo(slideIndex); // or slideIndex - 1
//                 }
//             }
// }
// });
// });
// });

// 닫기 버튼 이벤트 등록
// const closeBtn = targetPopup.querySelector('.close-btn');
// if (closeBtn) {
//     closeBtn.addEventListener('click', () => {
//         targetPopup.classList.remove('show');
//     }, { once: true });
// }













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
// const designPopUp = document.querySelectorAll('.pop-close');
// const postecPop = docu ent.querySelector('.postec-popUp');

// const polaroid = document.querySelectorAll('.modal');


// 




// .forEach(showPop => {
// closeBtn.forEach(showPop => {
//     showPop.addEventListener('click', (event) => {




// // 팝업 닫기 - 배경 클릭
// popup.addEventListener('click', () => {
//     popup.classList.remove('show');
// });

// // 팝업 닫기 - close 버튼 따로 눌렀을 때도 닫히게 하려면 아래도 추가 가능
// const closeBtn = popup.querySelector('.close-btn');
// if (closeBtn) {
//     closeBtn.addEventListener('click', (e) => {
//         e.stopPropagation(); // 배경 닫기 이벤트 방지
//         popup.classList.remove('show');
//     });
// }

// polaroid.forEach(item => {
//     item.addEventListener('click', () => {
//         const targetImg = item.getAttribute('data-index');
//         const targetPopUp = document.querySelector(`#${targetImg}`);

//         if (targetPopUp) {
//             targetPopUp.classList.add('show');
//         }
//     });
// });

// designPopUp.forEach(showPop => {
//     showPop.addEventListener('click', (event) => {
//         showPop.classList.remove('show');
//     });
// });





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

