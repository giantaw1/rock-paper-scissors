// CORE GAME LOGIC //
// initalize score and round variables

let playerScore = 0;
let computerScore = 0;
let round = 1;

// get computer choice

function getComputerChoice() {
    // random number between 1 and 3
    const options = ["Rock", "Paper", "Scissors"]
    const rand = Math.floor(Math.random() * options.length);
    return options[rand];
}

// has player won?

function hasPlayerWon(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "rock")
    );
}
// play a round

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    if (hasPlayerWon(playerChoice, computerChoice)) {
        playerScore++;
        return  `Player wins!  ${playerChoice} beats ${computerChoice}`; 
    } else if (computerChoice === playerChoice) {
        return `It's a Tie!  Both chose ${playerChoice}.  Choose again!`;
    } else {
        computerScore++;
        return `Computer wins!  ${computerChoice} beats ${playerChoice}`; 
    };
}

// play full game - first to 5

function playGame(playerChoice) {
    //create dom elements
    resultsContainer.style.display = 'block';
    roundResultsMsg.innerText = playRound(playerChoice);
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;
    currentRoundSpan.innerText = round;
   
    round++;

    if (playerScore === 5 || computerScore === 5) {
        winnerMsg.innerText = `${playerScore === 5 ? "Player" : "Computer"} has won the game!`;
        resetBtn.style.display = 'block';
        playButtonsContainer.style.display = 'none';
    }
}

// reset game after winner determined

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    // hide/show DOM elements
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;
    currentRoundSpan.innerText = round;
    resetBtn.style.display = 'none';
    playButtonsContainer.style.display = 'flex';
    resultsContainer.style.display = 'none';
    roundResultsMsg.innerText = '';
    winnerMsg.innerText = '';
}

// RPS-UI UPDATE //

// initialize button variables
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');

// initialize DOM element variables
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const currentRoundSpan = document.getElementById('round');
const resultsContainer = document.querySelector('.results-container');
const roundResultsMsg = document.getElementById('results-msg');
const winnerMsg = document.getElementById('winner-msg');
const playButtonsContainer = document.querySelector('.play-buttons');



//  button functionality
resetBtn.addEventListener ('click', resetGame);

rockBtn.addEventListener('click', e => {
    playGame('Rock');
});

paperBtn.addEventListener('click', e => {
    playGame('Paper');
} );

scissorsBtn.addEventListener('click', e => {
    playGame('Scissors');
});

