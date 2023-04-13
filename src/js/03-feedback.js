import throttle from "lodash.throttle";

const FEEDBACK_FORM = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
  const state = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(state));
}, 500);

form.addEventListener('input', saveFormState);

const storedState = localStorage.getItem(FEEDBACK_FORM);
if (storedState) {
  const state = JSON.parse(storedState);
  email.value = state.email;
  message.value = state.message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, message } = event.target.elements;
  if (email.value.trim() && message.value.trim()) {
    const state = {
      email: email.value,
      message: message.value,
    };
    localStorage.removeItem(FEEDBACK_FORM);
    form.reset();
    console.log(state);
  } else {
    alert("Всі поля повинні бути заповнені!");
  }
});



