// Rock Paper Scissors game //

// get computer choice//

function getComputerChoice () {
    // random number between 1 and 3
    const rand = Math.floor(Math.random() * (4 - 1) + 1);
    if (rand > 2) {
        console.log("Computer chooses: rock");
        return "rock";
    } else if (rand === 2) {
        console.log("Computer chooses: paper");
        return "paper";
    } else {
        console.log("I choose: scissors");
        return "scissors";
    }
}

// get human choice from prompt //

function getHumanChoice () {
    const humanChoice = prompt("Please choose: Rock, Paper or Scissors");
    console.log(`You Chose: ${humanChoice}`);
    return humanChoice;
}

// declare score variables

let humanScore = 0;
let computerScore = 0;

// play single round //
// rock beats scissors, scissors beats paper, paper beats rock

function playRound(humanChoice, computerChoice) {
    // force all lower case answers
    const hc = humanChoice.toLowerCase();
    const cc = computerChoice.toLowerCase();
    if (hc === "rock" && cc === "scissors") {
        console.log("You win!")
        humanScore++;
    } else if (hc === "scissors" && cc === "paper") {
        console.log("You win!")
        humanScore++;
    } else if (hc === "paper" && cc === "rock") {
        console.log("You win!")
        humanScore++; //computer wins
    } else if (hc === "scissors" && cc === "rock") {
        console.log("I win!")
        computerScore++;
    } else if (hc === "paper" && cc === "scissors") {
        console.log("I win!")
        computerScore++;
    } else if (hc === "rock" && cc === "paper") {
        console.log("I win!")
        computerScore++;
    }
    console.log(`The Score is - Computer: ${computerScore} Human: ${humanScore}`)
    return;
}

const humanSelection = getComputerChoice();
const computerSelection = getHumanChoice();

playRound(humanSelection, computerSelection);

