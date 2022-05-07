'use strict';

const salary = Number(prompt('Какой у вас доход?', 0));

function payTax(data){
    if(!(Number.isNaN(data))){
        if(data < 15000){
            console.log('Налог равен 13%');
        }
        if(data >= 15000 && data < 50000){
            console.log('Налог равен 20%');
        }
        if( data >= 50000){
            console.log('Налог равен 20%');
        };
    } else  {
        console.log('Вы ввели некорректные данные');
    }
}

payTax(salary);

