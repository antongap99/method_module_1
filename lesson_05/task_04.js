"use strict";

const calculate = (totalSumOfCart, numberOfGoods, promo) => {
    let totalSum = totalSumOfCart;
    if(numberOfGoods > 10) totalSum *= (1 - 0.03);
    
    if(totalSum > 30000){
        totalSum *= (1 - 0.15);
    }
    
    if(promo === 'METHED'){
        totalSum *=  (1 - 0.1);
    }
    
    if(promo === 'G3H2Z1' && totalSum > 2000){
        totalSum = totalSum - 500;
    }
    return totalSum;
} 
console.log('calculate: ', calculate(40000, 20, 'METHED'));