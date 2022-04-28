'use strict';

const productName = 'центробежные насосы';
const numberOfProducts = 24;
const productCategory = 'лопастные гидромашины';
const productPrice =  '2500p'

console.log('productName: ', productName);


function SumPrice(price, number){
    return number * price;
} 

console.log('SumPrice: ', SumPrice(parseInt(productPrice), numberOfProducts));


