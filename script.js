// Rock Paper Scissors game

// get computer choice

function getComputerChoice () {
    // random number between 1 and 3
    const rand = Math.floor(Math.random() * (4 - 1) + 1);
    if (rand > 2) {
        /*return*/console.log("rock");
    } else if (rand === 2) {
        /*return*/console.log("paper");
    } else {
        /*return*/console.log("scissors");
    }
}

getComputerChoice();