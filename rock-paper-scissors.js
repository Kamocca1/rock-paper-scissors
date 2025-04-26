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
        if (humanScore === 5 || computerScore === 5) {
            return;
        }
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                result.textContent = "Draw! Rock vs Rock";
            } else if (computerChoice === "paper") {
                ++computerScore;
                result.textContent = "You lose! Paper beats rock";
            } else if (computerChoice === "scissors") {
                ++humanScore;
                result.textContent = "You win! Rock beats scissors";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                ++humanScore;
                result.textContent = "You win! Paper beats rock";
            } else if (computerChoice === "paper") {
                result.textContent = "Draw! Paper vs Paper";
            } else if (computerChoice === "scissors") {
                ++computerScore;
                result.textContent = "You lose! Scissors beats paper";
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                ++computerScore;
                result.textContent = "You lose! Rock beats scissors";
            } else if (computerChoice === "paper") {
                ++humanScore;
                result.textContent = "You win! Scissors beats paper";
            } else if (computerChoice === "scissors") {
                result.textContent = "Draw! Scissors vs Scissors";
            }
        }

        score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
        if (humanScore === 5) {
            result.textContent = "Player wins!";
            return;
        } else if (computerScore === 5) {
            result.textContent = "Computer wins!";
            return;
        }
    }

    const body = document.querySelector("body");

    const div = document.createElement("div");
    const result = document.createElement("p");
    const score = document.createElement("p");
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    rock.textContent = "rock";
    paper.textContent = "paper";
    scissors.textContent = "scissors";

    body.appendChild(div);
    body.appendChild(result);
    body.appendChild(score);
    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

playGame();
