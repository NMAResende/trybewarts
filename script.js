//Requisito 3
function formButton() {
    const btnEnviar = document.querySelector('#enviar');
    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');
    const email = "tryber@teste.com";
    const senha = "123456";
    btnEnviar.addEventListener('click', function (event) {
        event.preventDefault();
        if (inputEmail.value === email && inputPassword.value === senha) {
            alert("Olá, Tryber!");
        } else {
            alert("Email ou senha inválidos.");
        }
    })
}
formButton();
