'use strict';

{
  const guessTheNumber = () => {
    let number;
    let numberOfUser;
    const userPrompt = [];
    let attempt;

    // ввести диапазон
    const diapazon = prompt('Введите два числа через пробел').split(' ');
    console.log('diapazon : ', diapazon);

    // число попыток
    const maxi = Number(diapazon[1]);
    const mini = Number(diapazon[0]);
       (maxi === 100 && mini === 50) ?
       (attempt = 15) : (attempt = Math.ceil((maxi - mini) * 0.7));
       // console.log(attempt);

       // загадать число
       const randomNumber = (max, min) => {
         number = Math.round(Math.random() * (max - min) + min);
       };
       randomNumber(maxi, mini);


       (function gameNumber() {
         console.log(userPrompt);
         numberOfUser = prompt('Введите число!');
         if (numberOfUser === null) {
           return;
         }
         console.log(' numberOfUser: ', numberOfUser);
         if (Number.isNaN(Number(numberOfUser))) {
           alert('Нужно ввести число !');
           return gameNumber();
         }
         console.log(userPrompt.includes(Number(numberOfUser)));
         if (userPrompt.includes(Number(numberOfUser))) {
           alert('Это число вы уже вводили!');
           return gameNumber();
         }

         if (numberOfUser > number) {
           alert('больше!');
           userPrompt.push(Number(numberOfUser));
           return gameNumber();
         }
         // если меньше
         if (numberOfUser < number) {
           alert('меньше!');
           userPrompt.push(Number(numberOfUser));
           return gameNumber();
         }
         if (userPrompt.length > attempt) {
           alert('закончились попытки');
           return;
         }

         // Если угадали
         if (numberOfUser = number) {
           userPrompt.push(Number(numberOfUser));
           alert('Правильно');
           console.log(userPrompt);
           console.log(number);
           return;
         }
       })();
  };

  guessTheNumber();
}
