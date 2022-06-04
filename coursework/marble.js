'use strict';
window.gameMarble = (() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  const playMarble = () => {
    const player = {
      name: 'ты',
      answer: null,
      number: null,
      balls: 5,
    };

    const bot = {
      name: 'бот',
      answer: null,
      number: null,
      balls: 5,
    };


    return function startMarble(step) {
      const compareAnswers = (pl1, pl2) => {
        if (pl2.name === 'бот') {
          pl1.number = +prompt(`Загадайте число шариков!, У вас есть ${pl1.balls} `, 1);
          pl2.answer = (getRandomIntInclusive(1, 2) % 2 === 0) ? 'четное' : 'нечетное';
        } else {
          pl1.number = getRandomIntInclusive(1, bot.balls);
          pl2.answer = prompt(`Угадайте четное число шариков загадал бот
            или нечетное`, 'четное');
        }

        if (pl2.number === 0 || pl1.number === 0) {
          return;
        }
        if (pl1.number > pl1.balls) {
          alert(`У вас есть только ${player.balls} шариков!`);
          return startMarble();
        }

        if (pl1.number % 2 === 0 && pl2.answer === 'четное' || pl1.number % 2 !== 0 && pl2.answer === 'нечетное') {
          alert(`${pl2.name} выиграл!`);
          pl1.balls -= pl1.number;
          pl2.balls += pl1.number;
        } else {
          alert(`${pl1.name} выиграл!`);
          pl1.balls += pl1.number;
          pl2.balls -= pl2.number;
        }
        alert(`Число оставшихся шариков:
        Игрок: ${player.balls},
        Бот: ${bot.balls}`);
        if (bot.balls <= 0) {
          alert('Вы выиграли игру');
          return;
        } else if (player.balls <= 0) {
          alert('Вы проиграли. У вас неосталось шариков');
          return;
        }
        return compareAnswers(pl2, pl1);
      };
      if (step === 1) {
        compareAnswers(player, bot);
      } else if (step === -1) {
        compareAnswers(bot, player);
      }
    };
  };
  return playMarble;
})();
