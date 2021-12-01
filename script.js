const form = document.getElementById("form");
const password1Element = document.getElementById("password1");
const password2Element = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;
const validatePasswords = () => {
  if (password1Element.value === password2Element.value) {
    passwordsMatch = true;
  } else {
    passwordsMatch = false;
    message.textContent = "Passwords Do Not Match";
    message.style.color = "red";
    messageContainer.style.border = "red 1px solid";
    password1Element.style.border = "red 1px solid";
    password2Element.style.border = "red 1px solid";
  }
};

const validateForm = () => {
  isValid = form.checkValidity();
  validatePasswords();
  if (!isValid) {
    message.textContent = "Please fill out the form correctly";
    message.style.color = "red";
    messageContainer.style.border = "red 1px solid";
    return;
  } else if (!passwordsMatch) {
    message.textContent = "Passwords Do Not Match";
    message.style.color = "red";
    messageContainer.style.border = "red 1px solid";
    password1Element.style.border = "red 1px solid";
    password2Element.style.border = "red 1px solid";
    return;
  } else if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.border = "green 1px solid";
  } else {
    message.textContent = "";
    messageContainer.style.border = "";
  }
};

const processFormData = (e) => {
  e.preventDefault();
  validateForm();
};

form.addEventListener("submit", processFormData);
