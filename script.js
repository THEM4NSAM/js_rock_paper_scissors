function getComputerChoice() {
    let a = Math.random();

    let computerSelection = null;

    if (a <= 0.33) {
        computerSelection = "rock";
    } else if (a <= 0.66) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }

    return computerSelection

}


function getHumanChoice() {
    let humanSelection = prompt ("Please Enter Rock, Paper or Scissors");

    return humanSelection
}

let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);