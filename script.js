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
    let humanSelection = prompt ("Please Enter 'Rock', 'Paper' or 'Scissors'");

    return humanSelection
}

let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a Draw!")

    } else if ((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("Human Wins!")
        humanScore++; 

    } else {
        console.log("Computer Wins!")
        computerScore++
    }
    return
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound (humanChoice, computerChoice);

console.log(`Score:
    Human: ${humanScore} 
    Computer: ${computerScore}`)