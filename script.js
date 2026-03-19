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


function playGame () {

    let humanScore = 0
    let computerScore = 0

    let roundsPlayed = 0

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


    for (let i = 0; i < 5; i++) {
        roundsPlayed++
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound (humanChoice, computerChoice);

    }

    if (humanScore === computerScore) {
        console.log("Close but its a Draw!")
    } else if (humanScore < computerScore) {
        console.log("Computer Wins This Time!")
    } else {
        console.log("Human Wins This Time!")
    }

        console.log(`Score:
            Human: ${humanScore} 
            Computer: ${computerScore}`)

    return
}

playGame();