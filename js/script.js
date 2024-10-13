
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice) {
    case 0: 
        return "rock";
    case 1: 
        return "paper";
    case 2: 
        return "scissors";
    }
}

function getHumanChoice() {
    do {
        let humanChoice = window.prompt("Pick Rock, Paper, or Scissors!");
        humanChoice = humanChoice.toLowerCase();
        let isValidInput = true;
        switch (humanChoice){
            case "rock":
                return "rock";
            case "paper":
                return "paper";
            case "scissors":
                return "scissors";
            default:
                window.alert("Input not valid. Please try again.");
                isValidInput = false;
                break;
        }
    } while (isValidInput = true);
}

function playRound(humanChoiceForRound, computerChoiceForRound) {
    switch (humanChoiceForRound) {
        case "rock":
            switch (computerChoiceForRound){
                case "rock":
                    alert("Rock v. Rock. It's a Tie!");
                    break;
                case "paper":
                    alert("Rock v. Paper. You Lose!");
                    computerScore += 1;
                    break;  
                case "scissors":
                    alert("Rock v. Scissors. You Win!");
                    humanScore += 1;
                    break;  
            }
            break;

        case "paper":
            switch (computerChoiceForRound){
                case "rock":
                    alert("Paper v. Rock. You Win!");
                    humanScore += 1;
                    break;
                case "paper":
                    alert("Paper v. Paper. It's a Tie!");
                    break;  
                case "scissors":
                    alert("Paper v. Scissors. You Lose!");
                    computerScore += 1;
                    break;  
            }
            break;

        case "scissors":
            switch (computerChoiceForRound){
                case "rock":
                    alert("Scissors v. Rock. You Lose!");
                    computerScore += 1;
                    break;
                case "paper":
                    alert("Scissors v. Paper. You Win!");
                    humanScore += 1;
                    break;  
                case "scissors":
                    alert("Scissors v. Scissors. It's a Tie!");
                    break;  
            }
            break;
    }
}

function playGame() {
    for (let rounds = 0; rounds < 5; rounds++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    let finalMessage = (humanScore > computerScore) ? "You Win!" : "You Lose!";
    alert(finalMessage + "\n" + "Final Score:" + "\n" + humanScore + " - " + computerScore);
}

playGame();

