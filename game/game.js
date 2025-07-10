const playerName = localStorage.getItem('rps_playerName') || 'Игрок';
const totalRounds = parseInt(localStorage.getItem('rps_totalRounds')) || 3;
let currentRound = 0;
let playerWins = 0;
let computerWins = 0;

document.getElementById('player-info').textContent = `Игрок: ${playerName}`;
document.getElementById('total-rounds').textContent = totalRounds;

const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        if (currentRound >= totalRounds) return;

        const playerChoice = img.dataset.choice;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let resultText = `Ты выбрал ${playerChoice}, компьютер выбрал ${computerChoice}. `;

        if (playerChoice === computerChoice) {
            resultText += 'Ничья!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            resultText += 'Ты выиграл раунд!';
            playerWins++;
        } else {
            resultText += 'Компьютер выиграл раунд!';
            computerWins++;
        }

        currentRound++;
        document.getElementById('result').textContent = resultText;
        document.getElementById('current-round').textContent = currentRound;
        document.getElementById('player-wins').textContent = playerWins;
        document.getElementById('computer-wins').textContent = computerWins;

        if (currentRound === totalRounds) {
            endGame();
        }
    });
});

