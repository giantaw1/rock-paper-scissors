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

 // declare score variables
 let humanScore = 0;
 let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // force all lower case answers
    const hc = humanChoice;
    const cc = computerChoice;
    if (hc === "rock" && cc === "scissors") { // human wins
        console.log("Computer chooses Scissors - You win!")
        humanScore++;
    } else if (hc === "scissors" && cc === "paper") {
        console.log("Computer chooses Paper - You win!")
        humanScore++;
    } else if (hc === "paper" && cc === "rock") {
        console.log("Computer chooses Rock - You win!")
        humanScore++; 
    } else if (hc === "scissors" && cc === "rock") { //computer wins
        console.log("Computer chooses Rock - Computer wins!")
        computerScore++;
    } else if (hc === "paper" && cc === "scissors") {
        console.log("Computer chooses Scissors - Computer wins!")
        computerScore++;
    } else if (hc === "rock" && cc === "paper") {
        console.log("Computer chooses Paper - Computer wins!")
        computerScore++;
    } else if (hc === "rock" && cc === "rock") { // its a tie
        console.log("It's a tie - choose again!");
    } else if (hc === "paper" && cc === "paper") {
        console.log("It's a tie - choose again!");
    } else if (hc === "scissors" && cc === "scissors") {
        console.log("It's a tie - choose again!");
    }
    return console.log(`Human Chose: ${hc} || Computer Chose: ${cc} \n
    The Score is - Computer: ${computerScore} Human: ${humanScore}`);
}


// RPS-UI update - grab variables from buttons

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');


// play round with player choice from button clicks

function playGameBtn(playerChoice) {
    const humanSelection = playerChoice;
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);
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