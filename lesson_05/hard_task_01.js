"use strict";
{

    const Nod = (firstNumber, secondNumber) => {

        let first = firstNumber;
        let second = secondNumber;


        while (first != 0 && second != 0){
            if(first > second){
                first = first % second;
            } else{
                second = second % first ;
            }
        }
        return first + second;
    }
    console.log('Nod: ', Nod(36, 12));
}
