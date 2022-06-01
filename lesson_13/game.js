'use strict';
(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];


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
        FIGURES_ENG : FIGURES_RUS;
    if ((!(language === 'EN' || language === 'ENG'))) {
      return function start() {
        const comp = getRandomIntInclusive(0, 2);
        let playerAnswer = '';
        let Answer = '';
        lang[comp][0].toLowerCase();

        if (language === 'EN' || language === 'ENG') {
          Answer = prompt('rock, scissors,paper ?', 'камень');
        } else {
          Answer = prompt('камень, ножнецы, бумага?', 'камень');
        }

        if (!Answer) {
          if (confirm('Хотите сыграть еще раз?')) {
            return start();
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
          return start();
        }


        const compare = (com, play) => {
          if (com[0] === play[0]) {
            alert('Ничья');
            alert(
              `Cчет:\n Компютер: ${result.computer} \n вы: ${result.player}`);
            if (confirm('Еще?')) {
              return start();
            } else {
              return;
            }
          }

          if (com[0] === 'к' && play[0] === 'н') {
            alert(`Компютер: камень\n Вы: ножницы \n Компютер выиграл`);
            result.computer += 1;
            alert(
              `Cчет:\n Компютер: ${result.computer} \n вы: ${result.player}`);
            if (confirm('Еще?')) {
              return start();
            } else {
              return;
            }
          }
          if (com[0] === 'н' && play[0] === 'к') {
            alert(`Компютер: ножницы\n Вы: камень \n вы выиграли`);
            result.player += 1;
            alert(
              `Cчет:\n Компютер: ${result.computer} \n вы: ${result.player}`);
            if (confirm('Еще?')) {
              return start();
            } else {
              return;
            }
          }

          if (com[0] === 'б' && play[0] === 'к') {
            alert(`Компютер: бумага\n Вы: камень \n Компютер выиграл`);
            result.computer += 1;
            alert(
              `Cчет:\n Компютер: ${result.computer} \n вы: ${result.player}`);
            if (confirm('Еще?')) {
              return start();
            } else {
              return;
            }
          }
          if (com[0] === 'к' && play[0] === 'б') {
            alert(`Компютер: камень\n Вы: бумага \n вы выиграли`);
            result.player += 1;
            alert(
              `Cчет:\n Компютер: ${result.computer} \n вы: ${result.player}`);
            if (confirm('Еще?')) {
              return start();
            } else {
              return;
            }
          }

          if (com[0] === 'н' && play[0] === 'б') {
            alert(`Компютер: ножницы\n Вы: бумага \n Компютер выиграл`);
            result.computer += 1;
            alert(
              `Cчет:\n Компютер: ${result.computer} \n вы: ${result.player}`);
            if (confirm('Еще?')) {
              return start();
            } else {
              return;
            }
          }
          if (com[0] === 'б' && play[0] === 'н') {
            alert(`Компютер: бумага\n Вы: ножницы \n вы выиграли`);
            result.player += 1;
            alert(
              `Cчет:\n Компютер: ${result.computer} \n вы: ${result.player}`);
            if (confirm('Еще?')) {
              return start();
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
        let Answer = '';
        lang[comp][0].toLowerCase();


        if (language === 'EN' || language === 'ENG') {
          Answer = prompt('rock, scissors, paper ?', 'rock');
        } else {
          Answer = prompt('камень, ножнецы, бумага?', 'камень');
        }

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
            alert('draw');
            alert(
              `Score:\n Computer: ${result.computer} \n You: ${result.player}`);
            if (confirm('will you play again?')) {
              return startEngilshVersion();
            } else {
              return;
            }
          }

          if (com[0] === 'r' && play[0] === 's') {
            alert(`Computer: rock\n You: scissors \n Computer won`);
            result.computer += 1;
            alert(
              `Score:\n Computer: ${result.computer} \n You: ${result.player}`);
            if (confirm('will you play again?')) {
              return startEngilshVersion();
            } else {
              return;
            }
          }
          if (com[0] === 's' && play[0] === 'r') {
            alert(`Computer: scissors\n You: rock \n you won`);
            result.player += 1;
            alert(
              `Score:\n Computer: ${result.computer} \n You: ${result.player}`);
            if (confirm('will you play again?')) {
              return startEngilshVersion();
            } else {
              return;
            }
          }

          if (com[0] === 'p' && play[0] === 'r') {
            alert(`Computer: paper\n You: rock \n Computer won`);
            result.computer += 1;
            alert(
              `Score:\n Computer: ${result.computer} \n You: ${result.player}`);
            if (confirm('will you play again?')) {
              return startEngilshVersion();
            } else {
              return;
            }
          }
          if (com[0] === 'r' && play[0] === 'p') {
            alert(`Computer: rock\n You: paper \n you won`);
            result.player += 1;
            alert(
              `Score:\n Computer: ${result.computer} \n You: ${result.player}`);
            if (confirm('will you play again?')) {
              return startEngilshVersion();
            } else {
              return;
            }
          }

          if (com[0] === 's' && play[0] === 'p') {
            alert(`Computer: scissors\n You: paper \n Computer won`);
            result.computer += 1;
            alert(
              `Score:\n Computer: ${result.computer} \n You: ${result.player}`);
            if (confirm('will you play again?')) {
              return startEngilshVersion();
            } else {
              return;
            }
          }
          if (com[0] === 'p' && play[0] === 's') {
            alert(`Computer: paper\n You: scissors \n you won`);
            result.player += 1;
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
