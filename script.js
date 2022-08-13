const btnEnviar = document.querySelector('#enviar');
const name = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const emailForm = document.querySelector('#input-email');
const house = document.querySelector('#house');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const btnSubmit = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');

function formButton() {
  const email = 'tryber@teste.com';
  const senha = '123456';
  btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputEmail.value === email && inputPassword.value === senha) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
formButton();

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
});

function submit() {
  checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  });
}
submit();

function count(event) {
  counter.innerHTML = 500;
  counter.innerHTML -= event.target.value.length;
}

textArea.addEventListener('keyup', count);

function informations() {
  let userName = localStorage.getItem('#input-name');
}