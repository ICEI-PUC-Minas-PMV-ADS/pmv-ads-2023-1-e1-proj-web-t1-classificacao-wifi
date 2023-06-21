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
      let formData = {
        nome: document.querySelector('#nome').value,
        CRM: document.querySelector('#CRM').value,
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value,
        };
        let formDataJSON = JSON.stringify(formData);
        localStorage.setItem('dadosFormulario', formDataJSON);
      form.submit();
      window.location.href = 'login.html'

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
      // Redirecionar para a página de login após a limpeza de erros
      window.location.href = 'login.html'
    }
  }
};

let form = document.querySelector('.validador');
//bloqueio no envio
form.addEventListener('submit', validador.handleSubmit);

//Banco local de Usuários (lcalStorage)

let usuarios = localStorage.getItem("meusUsuarios");
const formulario = document.querySelector("form");

if(usuarios){
  usuarios = JSON.parse(usuarios);
} else{
  usuarios = [];
}

console.log (usuarios);

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let novoUsuario = new Object();
    novoUsuario.nome = this.nome.value;
    novoUsuario.CRM = this.CRM.value;
    novoUsuario.email = this.email.value;
    novoUsuario.senha = this.senha.value;
    
    usuarios.push(novoUsuario);

    this.reset();

    localStorage.setItem("meusUsuarios", JSON.stringify(usuarios));
})