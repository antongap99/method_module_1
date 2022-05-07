'use strict';

const salary1 = Number(prompt('Какой у вас доход?', 0));

function payTax(data){
    if(!(Number.isNaN(data))){
        if(data < 15000){

            console.log(`Ваша зарплата с учетом НДС равна ${data * 0.87}р`);

        }
        if(data >= 15000 && data < 50000){
            console.log(`Ваша зарплата с учетом НДС равна ${(data - 15000) * 0.8 + 15000}р`);
        }
        if( data >= 50000){
            console.log(`Ваша зарплата с учетом НДС равна ${(data - 50000) * 0.7 + 50000}р`);
        };
    } else  {
        console.log('Вы ввели некорректные данные');
    }
}

payTax(salary1);