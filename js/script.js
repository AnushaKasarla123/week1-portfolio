// script.js — form validation (simulated) and footer year

document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formStatus = document.getElementById('formStatus');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formStatus.textContent = '';

    if (!nameInput.value || nameInput.value.trim().length < 2) {
      nameError.textContent = 'Please enter your name (min 2 chars).';
      valid = false;
    }
    if (!validateEmail(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    }
    if (!messageInput.value || messageInput.value.trim().length < 10) {
      messageError.textContent = 'Message must be at least 10 characters.';
      valid = false;
    }

    if (!valid) return;

    formStatus.textContent = 'Sending message...';

    setTimeout(() => {
      formStatus.textContent = 'Thanks! Your message has been sent (simulated).';
      form.reset();
    }, 900);
  });
});
