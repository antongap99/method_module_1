"use strict";

{

    
    const guessTheNumber = () => {
        let number;
        let numberOfUser;
        let userPrompt = [];
        let attempt;
    
        //ввести диапазон
        let diapazon = prompt('Введите два числа через пробел').split(' ')
        console.log('diapazon : ', diapazon );

        //число попыток
        const maxi = Number(diapazon[1]);
        const mini = Number(diapazon[0]);
       (maxi == 100 && mini == 50)? (attempt = 15) : (attempt = Math.ceil((maxi - mini) * 0.7));
        console.log(attempt);

        //загадать число
        const randomNumber = (max, min) => {number = Math.round(Math.random()*(max - min) + min)} 
        randomNumber(maxi, mini);
        
        
        while(numberOfUser != number){
            console.log(userPrompt);
            numberOfUser = prompt('Введите число!');

            //кнопка отмена
            if(numberOfUser == null){
                break;
            }
            console.log(' numberOfUser: ',  numberOfUser);
            //если ввели не числовую строку
            if(Number.isNaN(Number(numberOfUser))){
                alert("Нужно ввести число !");
                continue;
            }
            // если число уже вводили
            if(userPrompt.includes(Number(numberOfUser))){
                alert('Это число вы уже вводили!');
                continue;
            }


            //если больше
            if(numberOfUser >  number){
                alert("больше!");
                userPrompt.push(Number(numberOfUser));
                continue;
            } 
            //если меньше
            if(numberOfUser < number){
                alert("меньше!");
                userPrompt.push(Number(numberOfUser));
                continue;
            }

            if(userPrompt.length > attempt){
                'закончились попытки'
                break;
            }

            //Если угадали
            if(numberOfUser = number) {
                userPrompt.push(Number(numberOfUser));    
                alert('Правильно');
                console.log(userPrompt)
            } 
        }
    }
    
    guessTheNumber();
}