"use strict";

const currencyExchange = (euro) => {
let dollar =  euro / 1.2;
let ruble = 73 * dollar;
return Math.round(ruble);

}
console.log(currencyExchange(4));