
//menu de vagegação

const menuOpener = document.querySelector('.menu_opener');
const nav = document.querySelector('nav');

menuOpener.addEventListener('click', () => {
  if (nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});


// carousel banner

const bannerSliders = document.querySelector('.banner .sliders');
const bannerPointers = document.querySelectorAll('.banner .pointer');

let bannerActiveSlideIndex = 0;
let bannerTimer = null;

function setBannerActiveSlide(index) {
    bannerSliders.style.marginLeft = `${-index * 100}vw`;
    bannerPointers[bannerActiveSlideIndex].classList.remove('active');
    bannerPointers[index].classList.add('active');
    bannerActiveSlideIndex = index;
}

function startBannerTimer() {
    bannerTimer = setInterval(() => {
        const nextIndex = (bannerActiveSlideIndex + 1) % bannerPointers.length;
        setBannerActiveSlide(nextIndex);
    }, 4000); // Tempo de espera de 4 segundos
}

function restartBannerTimer() {
    clearInterval(bannerTimer);
    setTimeout(() => {
        startBannerTimer();
    }, 5000); // Tempo de espera de 5 segundos antes de reiniciar
}

bannerPointers.forEach((pointer, index) => {
    pointer.addEventListener('click', () => {
        setBannerActiveSlide(index);
        restartBannerTimer(); // Reinicia o temporizador após o clique
    });
});

startBannerTimer(); // Inicia o temporizador automaticamente



// carousel team

const teamSliders = document.querySelector('.section_team .sliders');
const teamPointers = document.querySelectorAll('.section_team_area .pointer');

let teamActiveSlideIndex = 0;
let sliderMarginLeft = 0;
let sliderInterval = null;

function setTeamActiveSlide() {
  const mediaQueryMinWidth = window.matchMedia('(min-width: 450px) and (max-width: 800px)');
  const mediaQueryMaxWidth = window.matchMedia('(max-width: 450px)');

  clearInterval(sliderInterval);

  if (mediaQueryMinWidth.matches) {
    document.querySelector('.section_team').style.maxWidth = '600px';
    teamSliders.style.marginLeft = '0';
    sliderMarginLeft = 0;

    sliderInterval = setInterval(() => {
      if (sliderMarginLeft === 0) {
        teamSliders.style.marginLeft = '-600px';
        sliderMarginLeft = -600;
      } else if (sliderMarginLeft === -600) {
        teamSliders.style.marginLeft = '-1200px';
        sliderMarginLeft = -1200;
        document.querySelector('.section_team').style.maxWidth = '300px';
      } else {
        teamSliders.style.marginLeft = '0';
        sliderMarginLeft = 0;
        document.querySelector('.section_team').style.maxWidth = '600px';
      }
    }, 3000);
  } else if (mediaQueryMaxWidth.matches) {
    document.querySelector('.section_team').style.maxWidth = '300px';
    teamSliders.style.marginLeft = '0';
    sliderMarginLeft = 0;

    sliderInterval = setInterval(() => {
      if (sliderMarginLeft > -1200) {
        teamSliders.style.marginLeft = `${sliderMarginLeft - 300}px`;
        sliderMarginLeft -= 300;
      } else {
        teamSliders.style.marginLeft = '0';
        sliderMarginLeft = 0;
      }
    }, 3000);
  } else {
    document.querySelector('.section_team').style.maxWidth = '880px';
    teamSliders.style.marginLeft = '0px';

    sliderInterval = setInterval(() => {
      if (teamSliders.style.marginLeft === '0px') {
        document.querySelector('.section_team').style.maxWidth = '600px';
        teamSliders.style.marginLeft = '-880px';
      } else {
        document.querySelector('.section_team').style.maxWidth = '880px';
        teamSliders.style.marginLeft = '0px';
      }
    }, 3000);
  }
}

window.addEventListener('resize', () => {
  setTeamActiveSlide();
});

setTeamActiveSlide();
