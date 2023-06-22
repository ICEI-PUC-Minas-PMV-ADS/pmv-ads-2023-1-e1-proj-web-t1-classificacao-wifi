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

//Regras do formulário + login localStorage funcional

let validador = {
  handleSubmit: (event) => {
    event.preventDefault();//para o comportamento padrão (enviar)
    let send = true; //enviar as informações

    let inputs = form.querySelectorAll('input'); //pega todos inputs do form
    validador.clearErrors();

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = validador.checkInput(input);
      if (check !== true) {
        send = false;
        validador.showError(input, check);
      } //se a função não retornar true exiba o erro
    } //realiza um loop em cada um dos campos e verifica cada um individualmente

    if (send) {
      const email = form.email.value;
      const senha = form.senha.value;

      const usuarios = JSON.parse(localStorage.getItem("meusUsuarios")) || [];

      const usuarioValido = usuarios.find(usuario => usuario.email === email);

      //validação do Usuário
      if (usuarioValido) {
        if (usuarioValido.senha === senha) {
          window.location.href = "wifi.html"; // Redirecionar para a página de wifi após verificar a validade do email e senha
        } else {
          let senhaInput = form.querySelector('[name=senha]');
          validador.showError(senhaInput, 'Senha inválida'); //senha inserida != da senha armaznada no localStorage
        }
      } else {
        let emailInput = form.querySelector('[name=email]');
        validador.showError(emailInput, 'E-mail inválido'); //email inserido != do email armaznado no localStorage
      }

      form.reset();
    }
  },

  //função que verifica se tem alguma regra
  checkInput: (input) => {
    let regras = input.getAttribute('data-regras');
    if (regras !== null) {
      regras = regras.split('|');
      for (let k in regras) {
        let rDetails = regras[k].split('=');
        switch (rDetails[0]) {
          case 'required':
            if (input.value === '') {
              return 'Este campo é obrigatório.';
            }
            break;
          case 'min':
            if (input.value.length < rDetails[1]) {
              return 'Este campo precisa ter no mínimo ' + rDetails[1] + ' caracteres';
            }
            break;
          case 'email':
            if (input.value !== '') {
              let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input.nextElementSibling);
  },

  //evita a duplicidade dos erros
      
  clearErrors: () => {
    let inputs = form.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.borderColor = '';
    }

    let errorElements = document.querySelectorAll('.error');
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].remove();
    }
  }
};

let form = document.querySelector('.validador');
form.addEventListener('submit', validador.handleSubmit);

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
