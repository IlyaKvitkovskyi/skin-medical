const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const submitButton = document.querySelector('button[type="submit"]');

function isValidName(name) {
  const regex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
  return regex.test(name);
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPhone(phone) {
  const regex = /^\+?[0-9]{7,15}$/;
  return regex.test(phone);
}

nameInput.addEventListener('blur', () => {
  if (!isValidName(nameInput.value)) {
    nameInput.setCustomValidity('Имя может содержать только буквы');
  } else {
    nameInput.setCustomValidity('');
  }
});

surnameInput.addEventListener('blur', () => {
  if (!isValidName(surnameInput.value)) {
    surnameInput.setCustomValidity('Фамилия может содержать только буквы');
  } else {
    surnameInput.setCustomValidity('');
  }
});

emailInput.addEventListener('blur', () => {
  if (!isValidEmail(emailInput.value)) {
    emailInput.setCustomValidity('Введите корректный адрес электронной почты');
  } else {
    emailInput.setCustomValidity('');
  }
});

phoneInput.addEventListener('blur', () => {
  if (!isValidPhone(phoneInput.value)) {
    phoneInput.setCustomValidity('Введите корректный номер телефона');
  } else {
    phoneInput.setCustomValidity('');
  }
});

form.addEventListener('input', () => {
  if (nameInput.checkValidity() && surnameInput.checkValidity() && emailInput.checkValidity() && phoneInput.checkValidity()) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Отправка формы
form.addEventListener('submit', (event) => {
  event.preventDefault();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const surname = surnameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  $.ajax({
    url: 'https://example.com/submit-form',
    type: 'POST',
    data: {
      name: name,
      surname: surname,
      email: email,
      phone: phone
    },
    success: function(response) {
      console.log(response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });
});

