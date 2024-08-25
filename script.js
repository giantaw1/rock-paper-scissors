// Rock Paper Scissors game //

// get computer choice//
function getComputerChoice () {
    // random number between 1 and 3
    const options = ["Rock", "Paper", "Scissors"]
    const rand = Math.floor(Math.random() * options.length);
    return options[rand];
}

// CORE GAME LOGIC

// initalize score and round variables

let playerScore = 0;
let computerScore = 0;
let round = 1;

// has player won?

function hasPlayerWon (player, computer) {
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
        return  `Round: ${round}. Player wins! ${playerChoice} beats ${computerChoice}`; 
    } else if (computerChoice === playerChoice) {
        return `Round: ${round}. It's a Tie! Both chose ${playerChoice}. Choose again!`;
    } else {
        computerScore++;
        return `Round: ${round}. Computer wins! ${computerChoice} beats ${playerChoice}`; 
    };
}

// play full game - console only

function playGame (playerChoice) {
    console.log(playRound(playerChoice));
    console.log(`Player score: ${playerScore} Computer Score: ${computerScore}`);
    round++;

    if (playerScore === 5 || computerScore === 5) {
        console.log(`${playerScore === 5 ? "Player" : "Computer"} has won the game!`)
    }
}

// reset game after 5

function resetGame (){
    playerScore = 0;
    computerScore = 0;
    round = 1;
    // hide/show DOM elements
}

// RPS-UI update - grab variables from buttons

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const resetBtn = document.getElementById('reset');


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

