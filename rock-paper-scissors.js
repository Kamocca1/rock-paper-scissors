function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber > 33 && randomNumber <= 66) {
        return "paper";
    } else if (randomNumber > 66 && randomNumber <= 99) {
        return "scissors";
    } else {
        return getComputerChoice();
    }
}

function getHumanChoice() {
    return (choice = prompt(
        "Pick a hand by typing 'rock', 'paper', or 'scissors' below"
    ));
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("Draw! Rock vs Rock");
            } else if (computerChoice === "paper") {
                ++computerScore;
                console.log("You lose! Paper beats rock");
            } else if (computerChoice === "scissors") {
                ++humanScore;
                console.log("You win! Rock beats scissors");
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                ++humanScore;
                console.log("You win! Paper beats rock");
            } else if (computerChoice === "paper") {
                console.log("Draw! Paper vs Paper");
            } else if (computerChoice === "scissors") {
                ++computerScore;
                console.log("You lose! Scissors beats paper");
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                ++computerScore;
                console.log("You lose! Rock beats scissors");
            } else if (computerChoice === "paper") {
                ++humanScore;
                console.log("You win! Scissors beats paper");
            } else if (computerChoice === "scissors") {
                console.log("Draw! Scissors vs Scissors");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

playGame();
