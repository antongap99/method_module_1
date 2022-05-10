"use strict";

{

const getAveragePriceGoods =(allСashbox) => {
    const result = [];
    let sumAvg = 0;

    for (const elem of allСashbox) {
      result.push(elem[1]/elem[0]);
    }

    
    for(const elem of result){
        sumAvg += elem;
    }


    return Math.round(sumAvg/result.length);
}    


console.log('getAveragePriceGoods: ', getAveragePriceGoods([
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
  ]));


}