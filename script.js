// Rock Paper Scissors game //

// get computer choice

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
        console.log("Computer chooses: scissors");
        return "scissors";
    }
}


// get human choice from prompt

function getHumanChoice () {
    const humanChoice = prompt("Please choose: Rock, Paper or Scissors");
    console.log(`You Chose: ${humanChoice}`);
    return humanChoice;
}

getHumanChoice();