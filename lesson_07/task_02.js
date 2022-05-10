"use strict";

{

    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    const getAverageValue = (arr) => {
        let sumCash = 0;
        for (const elem of arr) {
            sumCash += elem;
        }
        return Math.floor(sumCash / arr.length)
    }
    
    console.log('getAverageValue: ', getAverageValue(allСashbox));







}