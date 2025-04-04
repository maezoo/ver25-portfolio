const hamburger = document.querySelector('.hamburger');
const overlayNav = document.querySelector('.overlay-navigation');
const topBar = document.querySelector('.bar-top');
const middleBar = document.querySelector('.bar-middle');
const bottomBar = document.querySelector('.bar-bottom');
const hamSpan = document.querySelector('.hamburger span');
const gnbList = document.querySelectorAll('.gnb-list');
const gnbLinks = document.querySelectorAll('.gnb-list a');


hamburger.addEventListener('click', () => {
  hamburger.style.pointerEvents = 'none';
  overlayNav.classList.toggle('overlay-active');

  if (overlayNav.classList.contains('overlay-active')) {
    topBar.classList.remove('animate-out-top-bar');
    topBar.classList.add('animate-top-bar');

    middleBar.classList.remove('animate-out-middle-bar');
    middleBar.classList.add('animate-middle-bar');

    bottomBar.classList.remove('animate-out-bottom-bar');
    bottomBar.classList.add('animate-bottom-bar');

    overlayNav.classList.remove('overlay-slide-up');
    overlayNav.classList.add('overlay-slide-down');
    overlayNav.style.display = 'block';
    overlayNav.style.opacity = 1;

    gnbList.forEach((item, i) => {
      const delay = 0.2 + i * 0.15;
      item.style.display = 'flex';
      item.style.opacity = 0;
      item.style.animation = `fadeInLeft 0.5s ease forwards ${delay}s`;
    });

    gnbLinks.forEach(link => {
      link.style.opacity = 1;
    });

  } else {
    topBar.classList.remove('animate-top-bar');
    topBar.classList.add('animate-out-top-bar');

    middleBar.classList.remove('animate-middle-bar');
    middleBar.classList.add('animate-out-middle-bar');

    bottomBar.classList.remove('animate-bottom-bar');
    bottomBar.classList.add('animate-out-bottom-bar');

    overlayNav.classList.remove('overlay-slide-down');
    overlayNav.classList.add('overlay-slide-up');

    gnbList.forEach((item, i) => {
      const delay = 0.1 * i;
      item.style.animation = `fadeOutRight 0.4s ease forwards ${delay}s`;

      setTimeout(() => {
        item.style.display = 'none';
      }, 400 + delay * 1000); // 애니메이션 끝나고 display none
    });

    gnbLinks.forEach(link => {
      link.style.opacity = 0;
    });

    setTimeout(() => {
      overlayNav.style.opacity = 0;
      overlayNav.style.display = 'none';
    }, 800);
  }

  setTimeout(() => {
    hamburger.style.pointerEvents = 'auto';
  }, 800);
});









// =============================


// hamburger.addEventListener('click', () => {
//   hamburger.style.pointerEvents = 'none';

//   const isOpen = overNav.classList.contains('overlay-active');

//   if (!isOpen) {
//     overNav.classList.add('overlay-active');
//     topBar.classList.remove('animate-out-top-bar');
//     topBar.classList.add('animate-top-bar');
//     middleBar.classList.remove('animate-out-middle-bar');
//     middleBar.classList.add('animate-middle-bar');
//     bottomBar.classList.remove('animate-out-bottom-bar');
//     bottomBar.classList.add('animate-bottom-bar');
//     overNav.classList.remove('overlay-slide-up');
//     overNav.classList.add('overlay-slide-down');

//     Velocity(overNav, "transition.slideLeftIn", {
//       duration: 300,
//       delay: 0,
//       begin: function () {
//         Velocity(gnbList, "transition.perspectiveLeftIn", {
//           stagger: 150,
//           delay: 0,
//           complete: function () {
//             Velocity(gnbLinks, { opacity: [1, 0] }, { duration: 140 });
//             hamburger.style.pointerEvents = 'auto';
//           }
//         });
//       }
//     });



//     overNav.classList.toggle('open'); // 예시 클래스
//     topBar.classList.toggle('animate-top');
//     middleBar.classList.toggle('animate-middle');
//     bottomBar.classList.toggle('animate-bottom');
//     setTimeout(() => {
//       hamburger.style.pointerEvents = 'auto';
//     }, 800);
//   });




// overNav.toggleClass('overlay-active');
// if (overNav.hasClass('overlay-active')) {

//   top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
//   middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
//   bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
//   overNav.removeClass('overlay-slide-up').addClass('overlay-slide-down')
//   overNav.velocity('transition.slideLeftIn', {
//     duration: 300,
//     delay: 0,
//     begin: function () {
//       $('.gnb-list').velocity('transition.perspectiveLeftIn', {
//         stagger: 150,
//         delay: 0,
//         complete: function () {
//           $('.gnb-list a').velocity({
//             opacity: [1, 0],
//           }, {
//             delay: 10,
//             duration: 140
//           });
//           $('.hamburger').css('pointer-events', 'auto');
//         }
//       })
//     }
//   })

// } else {
//   $('.hamburger').css('pointer-events', 'none');
//   top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
//   middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
//   bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
//   overNav.removeClass('overlay-slide-down').addClass('overlay-slide-up')
//   $('.gnb-list').velocity('transition.perspectiveRightOut', {
//     stagger: 150,
//     delay: 0,
//     complete: function () {
//       overNav.velocity('transition.fadeOut', {
//         delay: 0,
//         duration: 300,
//         complete: function () {
//           $('.gnb-list a').velocity({
//             opacity: [0, 1],
//           }, {
//             delay: 0,
//             duration: 50
//           });
//           $('.hamburger').css('pointer-events', 'auto');
//         }
//       });
//     }
//   })
// }
// })