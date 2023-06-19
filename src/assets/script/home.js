
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

// regras do formulário

let validador = {
  handleSubmit:(event)=>{
    event.preventDefault(); //para o comportamento padrão (enviar)
    let send = true; //enviar o ormulário

    let inputs = form.querySelectorAll('input'); //pega todos inputs do form

    validador.clearErrors();

  for(let i=0; i<inputs.length; i++) {
    let input = inputs[i]; 
    let check = validador.checkInput(input);
    if(check !== true) {
      send = false;
      validador.showError(input, check);
    } //se a função não retornar true exiba o erro
   } //realiza um loop em cada um dos campos e verifica cada um individualmente

    //se enviar o formulário
    if(send) {
      form.submit();
    }
  },
  //função que verifica se tem alguma regra
  checkInput:(input)=>{
    let regras = input.getAttribute('data-regras');
    if(regras !== null) {
      regras = regras.split('|');
      for(let k in regras) {
        let rDatails = regras[k].split('=');
        switch(rDatails[0]){
            case 'required':
              if(input.value === '') { 
                return 'Este campo é obrigatório.';
              }
            break;
            case 'min':
              if(input.value.length < rDatails[1]) {
                return 'Este campo precisa ter no mínimo '+ rDatails[1] +' caracteres';
              } //requisição de caracteres
            break;
            case 'email':
              if(input.value !=''){
                let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
                if(!regex.test(input.value.toLowerCase())) {
                  return 'E-mail digitado não é válido!';
                }
              } //veifica se foi digitado um email
            break;
        }
      }
    }
    return true;
  },
  showError:(input, error) =>{
    input.style.borderColor = '#FF0000'; //quando houver erro deixar a borda vermelha

    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = error; //exibe o texto

    input.parentElement.insertBefore(errorElement, input.ElementSibling);

  },
  clearErrors:()=>{
    let inputs = form.querySelectorAll('input');
    for(let i=0; i<inputs.length;i++) {
      inputs[i].style = '';
    }

    let errorElement = document.querySelectorAll('.error');
    for(let i=0; i<errorElement.length;i++) {
      errorElement[i].remove(); //evita a duplicidade dos erros
    }
  }
};

let form = document.querySelector('.validador');
//bloqueio no envio
form.addEventListener('submit', validador.handleSubmit);
