"use strict";
const myWeight = '88 кг'
const speedLight = 3e8;

function calculateEnergy(weight, speed ){
    return parseFloat(weight) * speed ** 2
}
//console.log('parseFloat(myWeight): ',typeof parseFloat(myWeight));
//console.log('parseFloat(speedLight): ',typeof parseFloat(speedLight));
//console.log('calculateEnergy: ', calculateEnergy(myWeight, speedLight));