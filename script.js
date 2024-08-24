// Rock Paper Scissors game //

// get computer choice//
function getComputerChoice () {
    // random number between 1 and 3
    const rand = Math.floor(Math.random() * (4 - 1) + 1);
    if (rand > 2) {
        return "rock";
    } else if (rand === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// play single round //
// CORE GAME LOGIC

 // initalize score and round variables

let humanScore = 0;
let computerScore = 0;
let round = 1;

let roundResultsText = '';
let roundWinnerText = '';
let scoreResultsText = '';

function playRound(humanChoice, computerChoice) {
    const hc = humanChoice;
    const cc = computerChoice;
    
    if (hc === "rock" && cc === "scissors") { // human wins
        roundResultsText = `Player Chose: ${hc} || Computer Chose: ${cc}`;
        roundWinnerText = "Computer chooses Scissors - You win!";
        humanScore++;
       
    } else if (hc === "scissors" && cc === "paper") {
        roundResultsText = `Player Chose: ${hc} || Computer Chose: ${cc}`;
        roundWinnerText = "Computer chooses Paper - You win!";
        humanScore++;
        
    } else if (hc === "paper" && cc === "rock") {
        roundResultsText = `Player Chose: ${hc} || Computer Chose: ${cc}`;
        roundWinnerText = "Computer chooses Rock - You win!";
        humanScore++; 
        
    } else if (hc === "scissors" && cc === "rock") { //computer wins
        roundResultsText = `Player Chose: ${hc} || Computer Chose: ${cc}`;
        roundWinnerText = "Computer chooses Rock - Computer wins!";
        computerScore++;
       
    } else if (hc === "paper" && cc === "scissors") {
        roundResultsText = `Player Chose: ${hc} || Computer Chose: ${cc}`;
        roundWinnerText = "Computer chooses Scissors - Computer wins!";
        computerScore++;
        
    } else if (hc === "rock" && cc === "paper") {
        roundResultsText = `Player Chose: ${hc} || Computer Chose: ${cc}`;
        roundWinnerText = "Computer chooses paper - Computer wins!";
        computerScore++;
        
    } else if (hc === "rock" && cc === "rock") { // its a tie
        roundResultsText = `Player Chose: ${hc} || Computer Chose: ${cc}`;
        roundWinnerText = "It's a tie - choose again!";
        
    } else if (hc === "paper" && cc === "paper") {
        roundResultsText = `Player Chose: ${hc} || Computer Chose: ${cc}`;
        roundWinnerText = "It's a tie - choose again!";
        
    } else if (hc === "scissors" && cc === "scissors") {
        roundResultsText = `Player Chose: ${hc} || Computer Chose: ${cc}`;
        roundWinnerText = "It's a tie - choose again!";
       
    }
}

// RPS-UI update - grab variables from buttons

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// display current round 
const currentRound = document.getElementById('current-round');
const currentResult = document.createElement('p'); 
currentRound.appendChild(currentResult);
const currentResultText = document.createTextNode(roundResultsText);
currentResult.appendChild(currentResultText);

// display current round winner
const currentWinnerDiv = document.getElementById('current-winner');
const roundWinner = document.createElement('p');
currentWinnerDiv.appendChild(roundWinner);
const currentWinnerText = document.createTextNode(roundWinnerText);
roundWinner.appendChild(currentWinnerText);

// display current round and score
const currentScore = document.getElementById('current-score');
const scores = document.createElement('p');
currentScore.appendChild(scores);
const currentScoreText = document.createTextNode(scoreResultsText);
scores.appendChild(currentScoreText);

const finalResults = document.getElementById('final-results');


// play round with player choice from button clicks

function playGameBtn(playerChoice) {
    const humanSelection = playerChoice;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    scoreResultsText = `Round ${round} Score is - Computer: ${computerScore} Player: ${humanScore}`;

    currentRound.style.display = 'block';
    currentScore.style.display = 'block';
    currentWinnerDiv.style.display = 'block'; 

    currentResult.innerText = roundResultsText;
    roundWinner.innerText = roundWinnerText;
    scores.innerText = scoreResultsText;
    
    round++;

}


rockBtn.addEventListener('click', e => {
    playGameBtn('rock');
});

paperBtn.addEventListener('click', e => {
    playGameBtn('paper');
} );

scissorsBtn.addEventListener('click', e => {
    playGameBtn('scissors');
});



// Play auto 5-round game

// function playGame () {
//     for (let i = 0; i < 5; i++) {
//         const computerSelection = getComputerChoice();
//         const humanSelection = getPlayerChoice();
//         console.log(`Round: ${i + 1}`);
//         playRound(humanSelection, computerSelection);
//     }
    
//     return console.log(`Final score: Computer: ${computerScore} -- Player: ${humanScore}`);
// }

// playGame();