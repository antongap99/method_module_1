"use strict";

{

    
    const guessTheNumber = () => {
        let number;
        let numberOfUser;
    
    
        const randomNumber = (max, min) => {number = Math.round(Math.random()*(max - min) + min)} 
        randomNumber(100, 1);
        
        
        while(numberOfUser != number){
            numberOfUser = prompt('Введите число!');
            if(numberOfUser == null){
                break;
            }
            console.log(' numberOfUser: ',  numberOfUser);
            
            if(Number.isNaN(Number(numberOfUser))){
                alert("Нужно ввести число !");
                continue;
            }
            if(numberOfUser >  number){
                alert("больше!");

                continue;
            } 
            if(numberOfUser < number){
                alert("меньше!");
                
                continue;
            }
        }
        alert('Правильно');
    }
    
   // guessTheNumber()
}