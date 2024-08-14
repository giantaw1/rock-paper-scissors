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

// get human choice from prompt //

function getHumanChoice () {
    const humanChoice = prompt("Please choose: Rock, Paper or Scissors");
    //console.log(`You Chose: ${humanChoice}`);
    return humanChoice;
}

// play single round //
// rock beats scissors, scissors beats paper, paper beats rock

 // declare score variables
 let humanScore = 0;
 let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // force all lower case answers
    const hc = humanChoice.toLowerCase();
    const cc = computerChoice.toLowerCase();
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


function playGame () {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        console.log(`Round: ${i + 1}`);
        playRound(humanSelection, computerSelection);
    }
    
    return console.log(`Final score: Computer: ${computerScore} -- Player: ${humanScore}`);
}


playGame();