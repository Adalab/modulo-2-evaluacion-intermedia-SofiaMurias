"use strict";

const buttonElement = document.querySelector(".js-btn");
const userNumber = document.querySelector(".js-inputNumber");
const randomNumber = getRandomNumber();
const boxtrack = document.querySelector(".js-track");
const numberTry = document.querySelector(".js-try");

function handlerclickbtn() {
  getNumberInput();
  countTry();
}

function getRandomNumber() {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
}

function getNumberInput() {
  const userTryNumber = parseInt(userNumber.value);

  if (userTryNumber === randomNumber) {
    boxtrack.innerHTML = "Has ganado campeona!!!";
  } else if (userTryNumber < 1 || userTryNumber > 100) {
    boxtrack.innerHTML = "Prueba con un número del 1 al 100";
  } else if (userTryNumber < randomNumber) {
    boxtrack.innerHTML = "Demasiado bajo";
  } else if (userTryNumber > randomNumber) {
    boxtrack.innerHTML = "Demasiado alto";
  }
}

let counter = 0;
function countTry() {
  (counter += 1), (numberTry.innerHTML = "Número de intentos: " + counter);
}

buttonElement.addEventListener("click", handlerclickbtn);
