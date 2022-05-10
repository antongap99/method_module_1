"use strict";

{
const leapYear = (n, m) => {
    let years = [];
    if(n > m){
        for(let i = m; i <= n; i++){
            years.push(i);
        }
    } else{
        for(let i = n; i <= m; i++){
            years.push(i);
        }
    }

   // console.log(years);

    let yearsDivisible= years.filter(elem =>  (elem % 100 != 0 && elem % 400 == 0) || (elem % 4 == 0 && elem % 100 != 0));
    let yearsDivisibleBy400 = years.filter(elem =>  (elem % 400 == 0))

    let result = [...yearsDivisible, yearsDivisibleBy400].flat(1).sort((a, b) => a - b);
    
    return result;

}



console.log('leapYear(0, 2000): ', leapYear(1600, 2115));





}