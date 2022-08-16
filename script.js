const btnEnviar = document.querySelector('#enviar');
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

const formData = document.querySelector('#evaluation-form');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const materia = document.querySelectorAll('.subject');
const main = document.querySelector('main');

const familia = document.getElementsByName('family');
function selectingFamily() {
  let result = '';
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked) {
      result = familia[i].value;
    }
  }
  return result;
}

function selectingMaterias() {
  let result = '';
  for (let i = 0; i < materia.length; i += 1) {
    if (materia[i].checked) {
      result += `${materia[i].value}, `;
    }
  }
  return result.substring(0, result.length - 2);
}

function evaluation() {
  const avaliacao = document.getElementsByName('rate');
  let result = '';
  for (let i = 0; i < avaliacao.length; i += 1) {
    if (avaliacao[i].checked) {
      result = avaliacao[i].value;
    }
  }
  return result;
}

function selectedHouse() {
  return house.value;
}

btnSubmit.addEventListener('click', () => {
  const newForm = document.createElement('div');
  newForm.setAttribute('id', 'evaluation-form');
  const p = document.createElement('p');
  p.setAttribute('id', 'form-data');
  p.innerText = `Nome: ${nome.value} ${sobrenome.value}
Email: ${email.value}
Casa: ${selectedHouse()}
Família: ${selectingFamily()}
Matérias: ${selectingMaterias()}
Avaliação: ${evaluation()}
Observações: ${textArea.value}`;
  main.removeChild(formData);
  main.appendChild(p);
  main.appendChild(newForm);
  newForm.style.display = 'none';
});
