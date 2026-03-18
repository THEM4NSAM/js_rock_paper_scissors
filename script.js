function getComputerChoice() {
    let a = Math.random();

    let computerChoice = null;

    if (a <= 0.33) {
        computerChoice = "rock";
    } else if (a <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice

}

console.log(getComputerChoice())