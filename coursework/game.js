'use strict';
(() => {
  const langArray = {
    figuresEng: ['rock', 'scissors', 'paper'],
    figuresRus: ['камень', 'ножницы', 'бумага'],
  };
  let marbleMove = 0;

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {
      let figuresOption = 'figuresRus';
      let playerAnswer = '';
      let phraseLang = 'RU';
      let lang = [];
      let Answer = '';
      const comp = getRandomIntInclusive(0, 2);
      const phrase = {
        EN: ['draw', 'Score', 'You', 'Computer', 'Computer won',
          'You won', 'Do you wont to play again?', 'Game is over'],
        RU: ['ничья', 'Счет', 'Вы', 'Компютер', 'Компютер выиграл',
          'Вы выиграли', 'Хотите сыграть еще раз?', 'Игра окончена'],
      };

      if (language === 'EN' || language === 'ENG') {
        Answer = prompt('rock, scissors, paper?', 'rock');
        phraseLang = 'EN';
        lang = langArray.figuresEng;
        figuresOption = 'figuresEng';
      } else {
        Answer = prompt('камень, ножнецы, бумага?', 'камень');
        phraseLang = 'RU';
        lang = langArray.figuresRus;
      }
      lang[comp][0].toLowerCase();

      if (!Answer) {
        if (confirm(phrase[phraseLang][6])) {
          return start();
        } else {
          alert(phrase[phraseLang][7]);
          return;
        }
      }

      if (lang.forEach((elem) => {
        if (elem.slice(0, Answer.length).includes(Answer.toLowerCase())) {
          playerAnswer = elem;
        }
      }));

      if (!playerAnswer) {
        return start();
      }

      const compare = (com, play) => {
        if (com[0] === play[0]) {
          alert(phrase[phraseLang][0]);
          alert(
            `${phrase[phraseLang][1]}:\n ${phrase[phraseLang][3]}:${result.computer} \n ${phrase[phraseLang][2]}: ${result.player}`);
          return start();
        }

        if ((play[0] === langArray[figuresOption][0][0] &&
               com[0] === langArray[figuresOption][1][0]) ||
               (play[0] === langArray[figuresOption][1][0] &&
                com[0] === langArray[figuresOption][2][0]) ||
                (play[0] === langArray[figuresOption][2][0] &&
                  com[0] === langArray[figuresOption][0][0])) {
                    alert(`${phrase[phraseLang][3]}: ${com}\n ${phrase[phraseLang][2]}:${play} \n ${phrase[phraseLang][5]}`);
                    result.player += 1;
                    marbleMove = 1;
                    window.firstStep = marbleMove;
          alert(
            `${phrase[phraseLang][1]}:\n ${phrase[phraseLang][3]}:${result.computer} \n ${phrase[phraseLang][2]}: ${result.player}`);
        } else {
          alert(`${phrase[phraseLang][3]}: ${com}\n ${phrase[phraseLang][2]}:${play}\n ${phrase[phraseLang][4]}`);
          result.computer += 1;
          marbleMove = -1;
          window.firstStep = marbleMove;
          alert(
            `${phrase[phraseLang][1]}:\n ${phrase[phraseLang][3]}:${result.computer}\n${phrase[phraseLang][2]}: ${result.player}`);
        }
      };
      compare(lang[comp], playerAnswer);
    };
  };

  window.gameStart = game;
}

)();
