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

// regras do formulário

const validador = {
  handleSubmit: (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll('input');
    let send = true;

    validador.clearErrors();

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const check = validador.checkInput(input);
      if (check !== true) {
        send = false;
        validador.showError(input, check);
      }
    }

    if (send) {
      const formData = {
        nome: document.querySelector('#nome').value,
        CRM: document.querySelector('#CRM').value,
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value,
      };

      const formDataJSON = JSON.stringify(formData);
      localStorage.setItem('dadosFormulario', formDataJSON);

      // Realize o redirecionamento para a página de login aqui
      window.location.href = 'login.html';
    }
  },

  checkInput: (input) => {
    const regras = input.getAttribute('data-regras');
    if (regras !== null) {
      const regrasArray = regras.split('|');
      for (const regra of regrasArray) {
        const [tipo, valor] = regra.split('=');
        switch (tipo) {
          case 'required':
            if (input.value === '') {
              return 'Este campo é obrigatório.';
            }
            break;
          case 'min':
            if (input.value.length < parseInt(valor)) {
              return `Este campo precisa ter no mínimo ${valor} caracteres.`;
            }
            break;
          case 'email':
            if (input.value !== '') {
              const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (!regex.test(input.value.toLowerCase())) {
                return 'E-mail digitado não é válido!';
              }
            }
            break;
        }
      }
    }
    return true;
  },

  showError: (input, error) => {
    input.style.borderColor = '#FF0000';

    let errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error')) {
      errorElement.innerHTML = error;
    } else {
      errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerHTML = error;
      input.parentNode.insertBefore(errorElement, input.nextElementSibling);
    }
  },

  clearErrors: () => {
    const errorElements = document.querySelectorAll('.validador .error');
    for (const errorElement of errorElements) {
      errorElement.remove();
    }

    const inputs = document.querySelectorAll('.validador input');
    for (const input of inputs) {
      input.style.borderColor = '';
    }
  },
};

const form = document.querySelector('.validador');
form.addEventListener('submit', validador.handleSubmit);

let usuarios = localStorage.getItem('meusUsuarios');
const formulario = document.querySelector('form');

if (usuarios) {
  usuarios = JSON.parse(usuarios);
} else {
  usuarios = [];
}

console.log(usuarios);

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  const novoUsuario = {
    nome: this.nome.value,
    CRM: this.CRM.value,
    email: this.email.value,
    senha: this.senha.value,
  };

  usuarios.push(novoUsuario);

  this.reset();

  localStorage.setItem('meusUsuarios', JSON.stringify(usuarios));
});

// Mostrar/Ocultar senha

function mostrarSenha(){
  var senha=document.getElementById("senha");
  if (senha.type=="password"){
    senha.type="text";    
  }
  else {
    senha.type="password";
  }
}
