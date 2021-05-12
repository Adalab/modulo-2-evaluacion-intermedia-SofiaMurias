'use strict'

const buttonElement = document.querySelector('.js-btn')
const userNumber= document.querySelector('.js-inputNumber')
const randomNumber = getRandomNumber()
const boxtrack = document.querySelector('.js-track')
const numberTry = document.querySelector('.js-try')


function handlerclickbtn(){
    getNumberInput()
    numberTryCount()
}

function getRandomNumber() {
   const randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
}  

console.log('El número aleatorio es '+ randomNumber);

function getNumberInput(){
    const userTryNumber = parseInt(userNumber.value)
    console.log(userTryNumber);

    if (userTryNumber ===  randomNumber){
        boxtrack.innerHTML = 'Has ganado campeona!!!';
    }
    else if (userTryNumber < 1 || userTryNumber > 100){
        boxtrack.innerHTML = 'Prueba con un número del 1 al 100';
    }
    else if (userTryNumber < randomNumber){
        boxtrack.innerHTML = 'Demasiado bajo';
    }
         
    else if (userTryNumber > randomNumber){
        boxtrack.innerHTML = 'Demasiado alto';
    }
    
 console.log(boxtrack);
}

function numberTryCount(){
    
    numberTry.innerHTML= 'nº intentos'
    console.log(numberTry);
}

buttonElement.addEventListener('click', handlerclickbtn);



