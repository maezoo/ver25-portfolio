/************************************************************************************** */
// 디자인 슬라이드 팝업 열기+닫기
// =========================================
const polaroid = document.querySelectorAll('.modal');
const nextBtn = document.querySelectorAll('.slide-next');
const nextprev = document.querySelectorAll('.slide-prev');
let des1slide, des2slide, des3slide;

document.addEventListener("DOMContentLoaded", function () {
    des1slide = new Swiper(".des1-slide", {
        navigation: {
            nextEl: ".des1-Slide-next",
            prevEl: ".des1-Slide-prev",
        },
        on: {
            slideChange: function () {
                toggleNextButton(des1slide);
                togglePrevButton(des1slide);
            }
        }
    });

    des2slide = new Swiper(".des2-slide", {
        navigation: {
            nextEl: ".des2-Slide-next",
            prevEl: ".des2-Slide-prev",
        },
        on: {
            slideChange: function () {
                toggleNextButton(des2slide);
                togglePrevButton(des2slide);
            }
        }
    });

    des3slide = new Swiper(".des3-slide", {
        navigation: {
            nextEl: ".des3-Slide-next",
            prevEl: ".des3-Slide-prev",
        },
        on: {
            slideChange: function () {
                toggleNextButton(des3slide);
                togglePrevButton(des3slide);
            }
        }
    });

    function toggleNextButton(swiperInstance) {
        const nextBtn = swiperInstance.navigation.nextEl;
        if (swiperInstance.isEnd) {
            nextBtn.classList.add("hidden");
        } else {
            nextBtn.classList.remove("hidden");
        }
    }

    function togglePrevButton(swiperInstance) {
        const prevBtn = swiperInstance.navigation.prevEl;
        if (swiperInstance.isBeginning) {
            prevBtn.classList.add("hidden");
        } else {
            prevBtn.classList.remove("hidden");
        }
    }
    // *** 팝업 열기 + 해당 슬라이드로 이동 ***
    polaroid.forEach((item) => {
        item.addEventListener("click", () => {
            const targetId = item.getAttribute("data-target");
            const slideIndex = parseInt(item.getAttribute("data-slide-index"));

            let popup = null;
            let swiperInstance = null;

            // *** 각 썸네일에 맞는 팝업 설정 ***
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

            // *** 팝업 열기 + 방향키 표시 ***
            if (popup && swiperInstance) {
                popup.classList.add("show");
                if (!isNaN(slideIndex)) {
                    swiperInstance.slideTo(slideIndex);
                    setTimeout(() => {
                        toggleNextButton(swiperInstance);
                        togglePrevButton(swiperInstance);
                    }, 100);
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
// ************************************************************************************** */
// 디자인 탭 메뉴
// =========================================
const tabList = document.querySelectorAll('.side-tab li');
const tabItem = document.querySelectorAll('.tab-content');
const tabWrap = document.querySelector('.content-wrapper');

// *** 첫 번째 탭과 콘텐츠 보이게 ***
if (tabList.length > 0 && tabItem.length > 0) {
    tabList[0].classList.add('active');
    tabItem[0].classList.add('show');
}

tabList.forEach(tab => {
    tab.addEventListener('click', () => {
        tabItem.forEach(item => item.classList.remove('show'));
        tabList.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetId = tab.getAttribute('data-target');
        const targetContent = document.querySelector(targetId);
        if (targetContent) {

            tabWrap.classList.add('rotate');
            setTimeout(() => {
                tabWrap.classList.remove('rotate');
            }, 800);
            targetContent.classList.add('show');
        }
    });
});

