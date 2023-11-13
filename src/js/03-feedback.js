import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

const LOCALSTORAGE_KEY = 'feedback-form-state';

const { email: userEmail, message: userMessage } = form.elements;
const dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

userEmail.value = dataForm.email || '';
userMessage.value = dataForm.message || '';

function handleInput(event) {
  dataForm.email = userEmail.value;
  dataForm.message = userMessage.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
}

function handleSubmit(event) {
  event.preventDefault();
  console.log({ email: userEmail.value, message: userMessage.value });

  if (userEmail.value === '' || userMessage.value === '') {
    return alert('All fields must be filled!');
  }
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}
