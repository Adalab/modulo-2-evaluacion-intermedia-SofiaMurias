'use strict'

const buttonElement = document.querySelector('.js-btn')
const userNumber= document.querySelector('.js-inputNumber')
const randomNumber = getRandomNumber()
const boxtrack = document.querySelector('.js-track')
const numberTry =document.querySelector('.js-try')


function handlerclickbtn(){
    getRandomNumber()
    getNumberInput()
    numberTry()

}

function getRandomNumber() {
   const randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
}  

console.log('El número aleatorio es '+ getRandomNumber());

function getNumberInput(){
    const userTryNumber = parseInt(userNumber.value)
    if (userTryNumber =  randomNumber){
        boxtrack.innerHTML = 'Has ganado campeona!!!';
    }
    else if (userTryNumber < randomNumber){
        boxtrack.innerHTML = 'Demasiado bajo';
    }
         
    else if (userTryNumber > randomNumber){
        boxtrack.innerHTML = 'Demasiado alto';
    }
    
    else if (userTryNumber < 1 || userTryNumber > 100){
        boxtrack.innerHTML = 'Prueba con un número del 1 al 100';
    }
 console.log(boxtrack);
}

function numberTrycount(){
    numberTry.innerHTML= 'estos son el numero de intetos'
    console.log(numberTry);
}

buttonElement.addEventListener = ('click', handlerclickbtn)



