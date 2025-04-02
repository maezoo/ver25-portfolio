(function () {
  'use strict';
  window.addEventListener('load', function () {
    var canvas = document.getElementById('canvas');

    if (!canvas || !canvas.getContext) {
      return false;
    }

    /********************
      Random Number
    ********************/

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /********************
      Var
    ********************/

    var ctx = canvas.getContext('2d');
    var X = canvas.width = window.innerWidth;
    var Y = canvas.height = window.innerHeight;
    var mouseX = null;
    var mouseY = null;
    var shapeNum = 300;
    var shapes = [];
    var style = {
      black: 'black',
      white: 'white',
      lineWidth: 4,
    };


    /********************
      Animation
    ********************/

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (cb) {
        setTimeout(cb, 17);
      };

    /********************
      Shape
    ********************/

    function Shape(ctx, x, y) {
      this.ctx = ctx;
      this.init(x, y);
    }

    Shape.prototype.init = function (x, y) {
      this.x = x;
      this.y = y;
      this.r = rand(10, 25);
      this.ga = Math.random() * Math.random() * Math.random() * Math.random();
      this.v = {
        x: Math.random(),
        y: -1
      };
      this.l = rand(0, 20);
      this.sl = this.l;
    };

    Shape.prototype.updateParams = function () {
      var ratio = this.l / this.sl;
      //this.r *= ratio;
      this.l -= 0.5;
      if (this.l < 0) {
        this.init(X * (Math.random() + Math.random()) / 2, rand(0, Y));
      }
    };

    Shape.prototype.updatePosition = function () {
      this.x += Math.random();
      this.y += -Math.random();
    };

    Shape.prototype.draw = function () {
      var ctx = this.ctx;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = this.ga;
      //ctx.fillStyle = 'rgb(123, 252, 100)';
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };

    Shape.prototype.render = function (i) {
      this.updatePosition();
      this.updateParams();
      this.draw();
    };

    for (var i = 0; i < shapeNum; i++) {
      var s = new Shape(ctx, X * (Math.random() + Math.random()) / 2, rand(0, Y));
      shapes.push(s);
    }

    /********************
      Render
    ********************/

    function render() {
      ctx.clearRect(0, 0, X, Y);
      for (var i = 0; i < shapes.length; i++) {
        shapes[i].render(i);
      }
      requestAnimationFrame(render);
    }

    render();

    /********************
      Event
    ********************/

    function onResize() {
      X = canvas.width = window.innerWidth;
      Y = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', function () {
      onResize();
    });

    window.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, false);

  });
})();

// ====================================================
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
const designPopUp = document.querySelectorAll('.design-pop-up');
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
    header.classList.add('hide');
    enableScrolling();
  });
});



// DOM이 완전히 로드된 후에 코드 실행
// $(document).ready(function () {


//   // 오버레이 네비게이션을 CSS에서 보이게 설정
//   $('.overlay-navigation').css({
//     'display': 'block',
//     'opacity': '0'
//   });

//   $('.hamburger').click(function () {
//     $('.hamburger').css('pointer-events', 'none');
//     var overlay_navigation = $('.overlay-navigation'),
//       top_bar = $('.bar-top'),
//       middle_bar = $('.bar-middle'),
//       bottom_bar = $('.bar-bottom');

//     overlay_navigation.toggleClass('overlay-active');
//     if (overlay_navigation.hasClass('overlay-active')) {

//       top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
//       middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
//       bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
//       overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
//       overlay_navigation.velocity('transition.slideLeftIn', {
//         duration: 300,
//         delay: 0,
//         begin: function () {
//           $('nav ul li').velocity('transition.perspectiveLeftIn', {
//             stagger: 150,
//             delay: 0,
//             complete: function () {
//               $('nav ul li a').velocity({
//                 opacity: [1, 0],
//               }, {
//                 delay: 10,
//                 duration: 140
//               });
//               $('.hamburger').css('pointer-events', 'auto');
//             }
//           })
//         }
//       })

//     } else {
//       $('.hamburger').css('pointer-events', 'none');
//       top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
//       middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
//       bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
//       overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
//       $('nav ul li').velocity('transition.perspectiveRightOut', {
//         stagger: 150,
//         delay: 0,
//         complete: function () {
//           overlay_navigation.velocity('transition.fadeOut', {
//             delay: 0,
//             duration: 300,
//             complete: function () {
//               $('nav ul li a').velocity({
//                 opacity: [0, 1],
//               }, {
//                 delay: 0,
//                 duration: 50
//               });
//               $('.hamburger').css('pointer-events', 'auto');
//             }
//           });
//         }
//       })
//     }
//   });

//   // 페이지 로드 시 초기 설정을 위한 추가 코드 (필요한 경우)
//   console.log('Navigation menu initialized');
// });