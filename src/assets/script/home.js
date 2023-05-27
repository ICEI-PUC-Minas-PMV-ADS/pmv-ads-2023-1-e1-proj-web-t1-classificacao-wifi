
// Código para o banner
const bannerSliders = document.querySelector('.banner .sliders');
const bannerPointers = document.querySelectorAll('.banner .pointer');

let bannerActiveSlideIndex = 0;

function setBannerActiveSlide(index) {
    bannerSliders.style.marginLeft = `${-index * 100}vw`;
    bannerPointers[bannerActiveSlideIndex].classList.remove('active');
    bannerPointers[index].classList.add('active');
    bannerActiveSlideIndex = index;
}

bannerPointers.forEach((pointer, index) => {
    pointer.addEventListener('click', () => {
    setBannerActiveSlide(index);
    });
});

// Código para a seção "Nosso Time"
const teamSliders = document.querySelector('.section_team .sliders');
const teamPointers = document.querySelectorAll('.section_team_area .pointer');

let teamActiveSlideIndex = 0;

function setTeamActiveSlide(index) {
  if (index === 0) {
    document.querySelector('.section_team').style.maxWidth = '880px';
    document.querySelector('.sliders').style.marginLeft = '0px';
  } else if (index === 1) {
    document.querySelector('.section_team').style.maxWidth = '600px';
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
