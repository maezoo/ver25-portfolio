// // =======================================================

var myProjectSwiper = new Swiper(".myProjectSwiper", {
  mousewheel: true,
  loop: true,
  // keyboard: true,
  keyboard: {
    enabled: true, // 키보드 이벤트 활성화
    onlyInViewport: true, // 화면 안에 있을 때만 작동
  },
  pagination: {
    el: ".slide-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".slide-btn-next",
    prevEl: ".slide-btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1
    }
  },
});

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

var swiper2 = new Swiper(".mySwiper2", {
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

