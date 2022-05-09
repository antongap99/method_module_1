"use strict";

{
const firstNumber = prompt('Введите число?', 5);
const secondNumber = prompt('Введите число?', 10);

const MaxNumber = (first, second) => {
    let result;
    switch(first > second){
        case true:
        result = second;
        break;
        
        case false:
        result = second;
        break;
    }
    return result;
}
        
        console.log('MaxNumber: ', MaxNumber(firstNumber, secondNumber));
}