import throttle from "lodash.throttle";
const feedbackForm ="feedback-form-state";
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem(feedbackForm, JSON.stringify(state));
}, 500);


emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);


const storedState = localStorage.getItem(feedbackForm);
if (storedState) {
  const state = JSON.parse(storedState);
  emailInput.value = state.email;
  messageInput.value = state.message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value
  };
    localStorage.removeItem(feedbackForm);
  emailInput.value = '';
  messageInput.value = '';
  console.log(state);
});





