
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


// carousel team_falta deixar responsivo

const teamSliders = document.querySelector('.section_team .sliders');
const teamPointers = document.querySelectorAll('.section_team_area .pointer');

let teamActiveSlideIndex = 0;

function setTeamActiveSlide(index) {
  if (index === 0 ) {
    document.querySelector('.section_team').style.maxWidth = '880px';
    document.querySelector('.sliders').style.marginLeft = '0px';
  } else if (index === 1) {
    document.querySelector('.section_team').style.maxWidth = '580px';
    document.querySelector('.sliders').style.marginLeft = '-880px';
  }

  teamPointers[teamActiveSlideIndex].classList.remove('active');
  teamPointers[index].classList.add('active');
  teamActiveSlideIndex = index;
}

teamPointers.forEach((pointer, index) => {
  pointer.addEventListener('click', () => {
    setTeamActiveSlide(index);
  });
});




