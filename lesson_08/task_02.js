"use strict";

{

const generateRandonArray = (numb, n, m) => {
    const array = [];
    let max, min;
    let arr; 

    for(let i = 1; i < numb; i++){
        array.push(i)
    }
    //console.log('array: ', array);
    
    if(n > m){
        max = n;
        min = m;
        arr  = array.map((num) => {
            return Math.round(Math.random() * (max - min) + min)
        })
    } else{
        max = m;
        min = n;
        arr  = array.map((num) => {
            return Math.round(Math.random() * (max - min) + min)
        })
    }
    //console.log('max : ', max );
    
    return arr
}

console.log(generateRandonArray(15, -5, -100))

}