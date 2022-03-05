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
		displayMessage('⛔ No Number!');
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!');
		displayNumber('🎉' + secretNumber + '🎉');
		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
			if (highscore === 20) {
				document.querySelector('.highscore').textContent =
					'Jackpot🏆 ' + highscore;
			}
			// document.querySelector('#score1').textContent = displayScoer;
		}
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 too high' : '📉 too low');
			score--;
			displayScore(score);
		} else {
			displayMessage('💥 You lost the game!');
			displayScore(0);
		}
	}

	document.querySelector('.again').addEventListener('click', function () {
		score = 20;
		secretNumber = Math.trunc(Math.random() * 20) + 1;
		// displayNumber('🎉' + secretNumber + '🎉');
		displayNumber('?');
		displayScore(score);
		displayMessage('Start Guessing...');
		document.querySelector('body').style.backgroundColor = '#2235e0';
		document.querySelector('.number').style.width = '15rem';
		document.querySelector('.guess').value = '';

		if (highscore === 20) {
			document.querySelector('.highscore').textContent =
				'Jackpot🏆 ' + highscore;
		}
	});
});
