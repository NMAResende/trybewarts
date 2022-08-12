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

function sendingForm() {
const submitBtn = document.querySelector("#submit-btn");
const agreementChecked = document.querySelector("#agreement");
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (agreementChecked)
});

}
