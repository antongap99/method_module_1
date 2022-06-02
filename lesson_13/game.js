'use strict';
(() => {
  const langArray = {
    figuresEng: ['rock', 'scissors', 'paper'],
    figuresRus: ['камень', 'ножницы', 'бумага'],
  };

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

    const lang = language === 'EN' || language === 'ENG' ?
        langArray.figuresEng : langArray.figuresRus;

    if ((!(language === 'EN' || language === 'ENG'))) {
      return function startRuVersion() {
        const comp = getRandomIntInclusive(0, 2);
        let playerAnswer = '';
        const Answer = prompt('камень, ножнецы, бумага?', 'камень');
        lang[comp][0].toLowerCase();


        if (!Answer) {
          if (confirm('Хотите сыграть еще раз?')) {
            return startRuVersion();
          } else {
            alert('Играла окончена!');
            return;
          }
        }

        if (lang.forEach((elem) => {
          if (elem.slice(0, Answer.length).includes(Answer.toLowerCase())) {
            playerAnswer = elem;
          }
        }));

        if (!playerAnswer) {
          return startRuVersion();
        }

        const compare = (com, play) => {
          if (com[0] === play[0]) {
            alert('Ничья');
            alert(
              `Cчет:\n Компютер: ${result.computer} \n вы: ${result.player}`);
            if (confirm('Еще?')) {
              return startRuVersion();
            } else {
              return;
            }
          }

          if ((play[0] === langArray.figuresRus[0][0] &&
               com[0] === langArray.figuresRus[1][0]) ||
               (play[0] === langArray.figuresRus[1][0] &&
                com[0] === langArray.figuresRus[2][0]) ||
                (play[0] === langArray.figuresRus[2][0] &&
                com[0] === langArray.figuresRus[0][0])) {
            alert(`Компютер: ${com}\n Вы: ${play} \n вы выиграли`);
            result.player += 1;
            alert(
              `Cчет:\n Компютер: ${result.computer} \n вы: ${result.player}`);
            if (confirm('Еще?')) {
              return startRuVersion();
            } else {
              return;
            }
          } else {
            alert(`Компютер: ${com}\n Вы: ${play} \n Компютер выиграл`);
            result.computer += 1;
            alert(
              `Cчет:\n Компютер: ${result.computer} \n вы: ${result.player}`);
            if (confirm('Еще?')) {
              return startRuVersion();
            } else {
              return;
            }
          }
        };
        compare(lang[comp], playerAnswer);
      };
    } else {
      return function startEngilshVersion() {
        const comp = getRandomIntInclusive(0, 2);
        let playerAnswer = '';
        const Answer = prompt('rock, scissors, paper ?', 'rock');
        lang[comp][0].toLowerCase();

        if (!Answer) {
          if (confirm('Do you want to play again?')) {
            return startEngilshVersion();
          } else {
            alert('The game is over!');
            return;
          }
        }


        if (lang.forEach((elem) => {
          if (elem.slice(0, Answer.length).includes(Answer.toLowerCase())) {
            playerAnswer = elem;
          }
        }));

        if (!playerAnswer) {
          return startEngilshVersion();
        }


        const compare = (com, play) => {
          if (com[0] === play[0]) {
            alert('Draw');
            alert(
              `Cчет:\n Computer: ${result.computer} \n you: ${result.player}`);
            if (confirm('will you play again?')) {
              return startEngilshVersion();
            } else {
              return;
            }
          }

          if ((play[0] === langArray.figuresEng[0][0] &&
                 com[0] === langArray.figuresEng[1][0]) ||
                 (play[0] === langArray.figuresEng[1][0] &&
                  com[0] === langArray.figuresEng[2][0]) ||
                  (play[0] === langArray.figuresEng[2][0] &&
                  com[0] === langArray.figuresEng[0][0])) {
            alert(`Computer: ${com}\n You: ${play} \n You won`);
            result.player += 1;
            alert(
              `Score:\n Computer: ${result.computer} \n You: ${result.player}`);
            if (confirm('will you play again?')) {
              return startEngilshVersion();
            } else {
              return;
            }
          } else {
            alert(`Computer: ${com}\n You: ${play} \n Computer won`);
            result.computer += 1;
            alert(
              `Score:\n Computer: ${result.computer} \n You: ${result.player}`);
            if (confirm('will you play again?')) {
              return startEngilshVersion();
            } else {
              return;
            }
          }
        };
        compare(lang[comp], playerAnswer);
      };
    }
  };
  window.gameStart = game;
}
)();
