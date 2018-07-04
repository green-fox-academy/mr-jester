'use strict'
function passFunc() {
  console.log('are u working')
  document.querySelectorAll(".pass").forEach(element => {
    if (element.type === "password") {
      element.type = "text";
    } else {
      element.type = "password"
    }
  });
}
function passInvis() {
  document.querySelectorAll(".pass").forEach(element => {

    if (element.type === "text") {
      element.type = "password";
    } else {
      element.type = "text"
    }
  })
}
const buttonPassVis = document.querySelector('.passvis')
buttonPassVis.addEventListener('mousedown', (event) => {
  passFunc();
})
const buttonPassInvis = document.querySelector('.passvis');
buttonPassInvis.addEventListener('mouseup', (event) => {
  passInvis();
});
const button = document.querySelector('.submit');
const input = document.querySelectorAll('.pass')[0];
input.addEventListener('input', (event) => {
  if (document.querySelector('#mainPass').value === document.querySelector('#repass').value) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
})
const input1 = document.querySelectorAll('.pass')[1];
input1.addEventListener('input', (event) => {
  if (document.querySelector('#mainPass').value === document.querySelector('#repass').value) {
    button.disabled = false;
  } else {
    button.disabled = true
  }
})