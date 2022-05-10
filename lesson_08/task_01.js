"use strict";

{

const generateRandonArray = (numb) => {
    const array = [];
    
        
    for(let i = 1; i < numb; i++){
        array.push(i)
    }
    //console.log('array: ', array);
    
    
    
    let arr = array.map((num) => {

        let newNum = Boolean(num);
        Boolean(num);

        return Math.round(Math.random() * 100)
    })


    return arr
}

console.log(generateRandonArray(15))

}