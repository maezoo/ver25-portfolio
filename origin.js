
var myFullpage = new fullpage("#fullpage", {
  controlArrows: true,
  controlArrowsHTML: [
    '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-left"></i></div>',
    '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-right"></i></div>'
  ],
  anchors: ["new", "coding", "design", "aboutMe"],
  scrollBar: false,
  slidesNavigation: true,

  onLeave: function (origin, destination, direction) {
    const goTopBtn = document.querySelector(".go-top");
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo");

    // Go Top 버튼 처리 =================================
    if (destination.index === 3) {
      goTopBtn.classList.add("showUp");
    } else {
      goTopBtn.classList.remove("showUp");
    }

    // 헤더 숨김 처리 =================================
    if (destination.index === 0) {
      header.classList.remove("hide");

    } else {
      header.classList.add("hide");
    }
    // =============================================  
    logo.addEventListener("click", function () {
      fullpage_api.moveTo("new");
    });
  }
});

// =============================================
const goTopBtn = document.querySelector(".go-top");

if (goTopBtn) {
  goTopBtn.addEventListener("click", function () {
    fullpage_api.moveTo("new");
  });
}

// =============================================
const arrowNext = document.querySelector(".fp-controlArrow.fp-next");
const arrowPrev = document.querySelector(".fp-controlArrow.fp-prev");

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    arrowNext.classList.add("hover");

    setTimeout(() => {
      arrowNext.classList.remove("hover");
    }, 1000);
  }

  if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    arrowPrev.classList.add("hover");

    setTimeout(() => {
      arrowPrev.classList.remove("hover");
    }, 1000);
  }
});

// =======================================================
// 팝업 열기 + 닫기 =========================================
// 스크롤 비활성화 콜백 함수
const disableScrolling = () => {
  if (typeof fullpage_api !== 'undefined') {
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
  }
};

// 스크롤 활성화 콜백 함수
const enableScrolling = () => {
  if (typeof fullpage_api !== 'undefined') {
    fullpage_api.setAllowScrolling(true);
    fullpage_api.setKeyboardScrolling(true);
  }
};

const designIphone = document.querySelectorAll('.design_box');
const designPopUp = document.querySelectorAll('.thumb-popUp');
// const header = document.querySelector('header');

// 팝업 열기
designIphone.forEach(item => {
  item.addEventListener('click', () => {
    const targetImg = item.getAttribute('data-target');
    const targetPopUp = document.querySelector(`#${targetImg}`);

    if (targetPopUp) {
      targetPopUp.classList.add('show');
      // header.classList.remove('hide');
      disableScrolling();
    }
  });
});


// 팝업 닫기
designPopUp.forEach(showPop => {
  showPop.addEventListener('click', (event) => {
    showPop.classList.remove('show');
    // header.classList.add('hide');
    enableScrolling();
  });
});

// // =======================================================
// // clone_5 스와이퍼 ========================================
var swiper = new Swiper(".mySwiper", {

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 10000,
  },
  keyboard: true,
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
});

// // =======================================================

var swiper2 = new Swiper(".desSwiper", {
  // autoplay: {
  //   delay: 300,
  // },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});


