// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@      SHOW & REMOVE MENU      @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navToggle = document.querySelector('.nav__toggle'),
  navMenu = document.querySelector('.nav__menu'),
  navLogo = document.querySelector('.nav__menu-logo'),
  overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
  overlay.classList.add('show-overlay');
  document.body.classList.add('remove-body-scroll');
});

navLogo.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
  document.body.classList.remove('remove-body-scroll');
});

overlay.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
  document.body.classList.remove('remove-body-scroll');
});

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((e) => {
  e.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    overlay.classList.remove('show-overlay');
    document.body.classList.remove('remove-body-scroll');
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@            SCROLL UP              @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const scrollUp = document.querySelector('.scrollup');

window.addEventListener('scroll', function () {
  if (this.scrollY > 100) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@          VIDEO SECTION            @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const videoFile = document.getElementById('video-file'),
  videoButton = document.getElementById('video-button'),
  videoIcon = document.getElementById('video-icon');

videoButton.addEventListener('click', playPause);

function playPause() {
  if (videoFile.paused) {
    videoFile.play();
    videoIcon.classList.add('bi-stop');
    videoIcon.classList.remove('bi-play');
  } else {
    videoFile.pause();
    videoIcon.classList.add('bi-play');
    videoIcon.classList.remove('bi-stop');
  }
}

// when the video ends
videoFile.addEventListener('ended', finalVideo);

function finalVideo() {
  videoIcon.classList.add('bi-play');
  videoIcon.classList.remove('bi-stop');
}
