'use strict';

/*const factorial = (n) => {
    if(n === 0){
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}
//console.log('factorial: ', factorial(5));

const fac = (n) => {
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result
}*/
//console.log(fac(5));
//ряд фибоначи fibonachi = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946]
const fibo = (n) => {
    if(n <= 2) { 
      return 1;
    } else{
        return fibo(n - 1) + fibo(n - 2)
    }
}
//console.log('fibo(8): ', fibo(8));

const fibo2 = (n) => {
    let a = 1;
    let b = 1;
    let c;
    let i = 0;
    while (i < n -2){
        c = a + b;
        a = b;
        b = c;
        i++;
    }
    return c
}

console.log('fibo2: ', fibo2(8));