'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('â No Number!');
  } else if (guess === secretNumber) {
    displayMessage('ð Correct Number!');
    displayNumber('ð' + secretNumber + 'ð');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      if (highscore === 20) {
        document.querySelector('.highscore').textContent =
          'Jackpotð ' + highscore;
      }
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'ð too high' : 'ð too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('ð¥ You lost the game!');
      displayScore(0);
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayNumber('?');
    displayScore(score);
    displayMessage('Start Guessing...');
    document.querySelector('body').style.backgroundColor = '#2235e0';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

    if (highscore === 20) {
      document.querySelector('.highscore').textContent =
        'Jackpotð ' + highscore;
    }
  });
});
