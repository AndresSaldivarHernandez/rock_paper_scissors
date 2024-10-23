let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const resultsDisplay = document.querySelector(".results-display");

rockButton.addEventListener("click", () => {
    playRound("rock");
});

paperButton.addEventListener("click", () => {
    playRound("paper");
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors");
});

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

function createResult(computerChoice, humanChoice, result) {
    const resultScreen = document.createElement("div");
    resultScreen.classList.add("round-count");
    const leftSide = document.createElement("p");
    leftSide.classList.add("human-display");
    const rightSide = document.createElement("p");
    rightSide.classList.add("computer-display")
    const middle = document.createElement("p");
    middle.classList.add("result");
    leftSide.textContent = "Human: " + humanChoice;
    middle.textContent = result;
    rightSide.textContent = "Computer: " + computerChoice;
    resultsDisplay.prepend(resultScreen);
    resultScreen.appendChild(leftSide);
    resultScreen.appendChild(middle);
    resultScreen.appendChild(rightSide);
}

function playRound(humanChoiceForRound) {
    let computerChoiceForRound = getComputerChoice();
    switch (humanChoiceForRound) {
        case "rock":
            switch (computerChoiceForRound){
                case "rock":
                    createResult("Rock", "Rock", "Draw!");
                    break;
                case "paper":
                    createResult("Paper", "Rock", "Loss!");
                    computerScore += 1;
                    break;  
                case "scissors":
                    createResult("Scissors", "Rock", "Win!");
                    humanScore += 1;
                    break;  
            }
            break;

        case "paper":
            switch (computerChoiceForRound){
                case "rock":
                    createResult("Rock", "Paper", "Win!");
                    humanScore += 1;
                    break;
                case "paper":
                    createResult("Paper", "Paper", "Draw!");
                    break;  
                case "scissors":
                    createResult("Scissors", "Paper", "Loss!");
                    computerScore += 1;
                    break;  
            }
            break;

        case "scissors":
            switch (computerChoiceForRound){
                case "rock":
                    createResult("Rock", "Scissors", "Loss!");
                    computerScore += 1;
                    break;
                case "paper":
                    createResult("Paper", "Scissors", "Win!");
                    humanScore += 1;
                    break;  
                case "scissors":
                    createResult("Scissors", "Scissors", "Draw!");
                    break;  
            }
            break;
    }
}

