"use strict";

{

const generateRandonArray = (numb, n, m, option) => {
    const array = [];
    let max, min;
    let arr; 
    let result;
    let j;

    for(let i = 1; i < numb; i++){
        array.push(i)
    }
    //aadd .console.log('array: ', array);
    
    if(n > m){
        max = n;
        min = m;
        arr  = array.map((num) => {
            return Math.round(Math.random() * (max - min) + min);
        })
        
    } else{
        max = m;
        min = n;
        arr  = array.map((num) => {
            return Math.round(Math.random() * (max - min) + min);
        })
    }



        if(option ==='even'){
            result = arr.filter((elem) => elem % 2 == 0)

            while(result.length < numb){
                j =  Math.round(Math.random()*100);
                if(j % 2 == 0){
                    result.push(j);
                }
            }
            
        }
        if(option ==='odd'){
            result = arr.filter((elem) => !(elem % 2 == 0))
            while(result.length < numb){
                j =  Math.round(Math.random()*100);
                if(!(j % 2 == 0)){
                    result.push(j);
                }
            }
        } 

        return result;
}
    

console.log(generateRandonArray(15, -5, -100, 'odd'))
console.log(generateRandonArray(15, -5, -100, 'even'))

}