'use strict';

{
  const randomNumber = (max, min) => {
    Math.round(Math.random() * (max - min) + min);
  };

  const generateNumber = (arr) => {
    arr.push(randomNumber(0, 10));
    const sumOfElem = arr.reduce((acc, elem) => acc + elem, 0);

    if (sumOfElem > 50) {
      return arr;
    }
    return generateNumber(arr);
  };

  console.log(generateNumber([]));
}
