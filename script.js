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
// GAME RULES: rock beats scissors, scissors beats paper, paper beats rock

 // initalize score and round variables
 let humanScore = 0;
 let computerScore = 0;
 let round = 1;

function playRound(humanChoice, computerChoice) {
    const hc = humanChoice;
    const cc = computerChoice;
    const roundWinner = '';
    if (hc === "rock" && cc === "scissors") { // human wins
        roundWinner = "Computer chooses Scissors - You win!";
        humanScore++;
        round++;
    } else if (hc === "scissors" && cc === "paper") {
        roundWinner = "Computer chooses Paper - You win!";
        humanScore++;
        round++;
    } else if (hc === "paper" && cc === "rock") {
        roundWinner = "Computer chooses Rock - You win!";
        humanScore++; 
        round++;
    } else if (hc === "scissors" && cc === "rock") { //computer wins
        roundWinner = "Computer chooses Rock - Computer wins!";
        computerScore++;
        round++;
    } else if (hc === "paper" && cc === "scissors") {
        roundWinner = "Computer chooses Scissors - Computer wins!";
        computerScore++;
        round++;
    } else if (hc === "rock" && cc === "paper") {
        roundWinner = "Computer chooses Paper - Computer wins!";
        computerScore++;
        round++;
    } else if (hc === "rock" && cc === "rock") { // its a tie
        roundWinner = "It's a tie - choose again!";
        round++;
    } else if (hc === "paper" && cc === "paper") {
        roundWinner = "It's a tie - choose again!";
        round++;
    } else if (hc === "scissors" && cc === "scissors") {
        roundWinner = "It's a tie - choose again!";
        round++;
    }
    // return console.log(`Human Chose: ${hc} || Computer Chose: ${cc} \n
    // The Score is - Computer: ${computerScore} Human: ${humanScore}`);
}


// RPS-UI update - grab variables from buttons

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const currentRound = document.getElementById('current-score');

// play round with player choice from button clicks

function playGameBtn(playerChoice) {
    const humanSelection = playerChoice;
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);
    if (round === 1) {
        const result = document.createElement('ul');
        const currentResult = document.createElement('li');
        currentRound.appendChild(result);
        result.appendChild(currentResult);
        currentResult.createTextNode('roundWinner');
    } else if (round > 1) {
        currentResult.createTextNode('roundWinner');
    }
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
//         const humanSelection = getHumanChoice();
//         console.log(`Round: ${i + 1}`);
//         playRound(humanSelection, computerSelection);
//     }
    
//     return console.log(`Final score: Computer: ${computerScore} -- Player: ${humanScore}`);
// }

// playGame();