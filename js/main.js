// =========================================
//  메뉴 오버레이 + 메뉴전환
// =========================================
const hamburger = document.querySelector('.hamburger');
const overlayNav = document.querySelector('.overlay-navigation');
const topBar = document.querySelector('.bar-top');
const middleBar = document.querySelector('.bar-middle');
const bottomBar = document.querySelector('.bar-bottom');
const gnbList = document.querySelectorAll('.gnb-list');
const gnbLinks = document.querySelectorAll('.gnb-list a');
const articles = document.querySelectorAll('.gnb-item');
const activeTab = sessionStorage.getItem('activeTab');
const Logo = document.querySelector('.logo');

// 함수: 오버레이 닫기
const closeOverlay = () => {
  overlayNav.classList.remove('overlay-active', 'show', 'overlay-slide-down');
  overlayNav.classList.add('overlay-slide-up');

  topBar.classList.remove('animate-top-bar');
  topBar.classList.add('animate-out-top-bar');

  middleBar.classList.remove('animate-middle-bar');
  middleBar.classList.add('animate-out-middle-bar');

  bottomBar.classList.remove('animate-bottom-bar');
  bottomBar.classList.add('animate-out-bottom-bar');

  gnbList.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('active');
    }, index * 150);
  });

  setTimeout(() => {
    gnbLinks.forEach(link => {
      link.classList.remove('on');
    });
    hamburger.style.pointerEvents = 'auto';
  }, gnbList.length * 150 + 100);
};

// 햄버거 버튼 클릭 시 오버레이 열고 닫기
hamburger.addEventListener('click', function () {
  hamburger.style.pointerEvents = 'none';

  const isActive = overlayNav.classList.contains('overlay-active');

  if (!isActive) {
    overlayNav.classList.remove('overlay-slide-up');
    overlayNav.classList.add('overlay-active', 'show', 'overlay-slide-down');

    topBar.classList.remove('animate-out-top-bar');
    topBar.classList.add('animate-top-bar');

    middleBar.classList.remove('animate-out-middle-bar');
    middleBar.classList.add('animate-middle-bar');

    bottomBar.classList.remove('animate-out-bottom-bar');
    bottomBar.classList.add('animate-bottom-bar');

    gnbList.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('active');
        // }, index * 150);
      }, index * 150);
    });

    setTimeout(() => {
      gnbLinks.forEach(link => {
        link.classList.add('on');
      });
      hamburger.style.pointerEvents = 'auto';
    }, gnbList.length * 150 + 100);

  } else {
    closeOverlay();
  }
});

// 함수: 탭메뉴 전환 ===========================
const setActiveTab = (tabId) => {
  const targetActive = document.querySelector(`#${tabId}`);
  if (targetActive) {
    articles.forEach(tabContent => {
      tabContent.classList.remove('show');
    });
    targetActive.classList.add('show');
  }
};

// 새로고침 시 이전 탭 복원 
if (activeTab) {
  setActiveTab(activeTab);
} else {
  setActiveTab('intro-page');
}

// 탭 전환 + 오버레이 닫기
gnbList.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.getAttribute('data-target').substring(1);
    setActiveTab(targetSelector);
    sessionStorage.setItem('activeTab', targetSelector);
    closeOverlay();
  });
});

// 로고 클릭 시 intro로 이동 + 오버레이 닫기
Logo.addEventListener('click', () => {
  setActiveTab('intro-page');
  sessionStorage.removeItem('activeTab');
  closeOverlay();
});


// =========================================
//  인트로 반짝임 효과 
// =========================================
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








