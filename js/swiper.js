
var postecSlide = new Swiper(".postecSlide", {
  keyboard: true,
  loop: true,
  navigation: {
    nextEl: ".postecSlide-next",
    prevEl: ".postecSlide-prev",
  },
});



// =====================================================
// =====================================================
// =====================================================
const arrowNext = document.querySelector(".slide-btn-next");
const arrowPrev = document.querySelector(".slide-btn-prev");
const fadeInUp = document.querySelectorAll(".fade-in-up");
// const swiperSlide = document.querySelectorAll(".swiper-slide")
// const slideActive = document.querySelectorAll(".swiper-slide-active")


let previousIndex = 0;

var myProjectSwiper = new Swiper(".myProjectSwiper", {
  slidesPerView: 1,
  mousewheel: true,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".slide-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".slide-btn-next",
    prevEl: ".slide-btn-prev",
  },

  on: {
    slideChange(swiper) {
      const currentIndex = swiper.realIndex;

      if (currentIndex > previousIndex || (previousIndex === swiper.slides.length - 1 && currentIndex === 0)) {

        arrowNext.classList.add("hover");
        setTimeout(() => {
          arrowNext.classList.remove("hover");
        }, 1000);

      } else if (currentIndex < previousIndex || (previousIndex === 0 && currentIndex === swiper.slides.length - 1)) {
        arrowPrev.classList.add("hover");
        setTimeout(() => {
          arrowPrev.classList.remove("hover");
        }, 1000);
      }

      previousIndex = currentIndex;

    },
  }


});

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

console.log("현재 슬라이드 index:", swiper.activeIndex);
console.log("선택된 h3.fade-in-up 개수:", fadeInUps.length);
