function formButton() {
  const btnEnviar = document.querySelector('#enviar');
  const inputEmail = document.querySelector('#email');
  const inputPassword = document.querySelector('#password');
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

const btnSubmit = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');

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
