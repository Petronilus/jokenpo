
const input = document.querySelector("input");
const button = document.querySelector("button");
const span = document.querySelector("span");
const computerSpan = document.querySelector("#computer");

button.addEventListener("click", game);



const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;

}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == "ERROR") {
        return "ERROR";
    }
    
    else if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie!"
    }
    else if (result == "Player") {
        return "You Win!"
    }
    else if (result == "Computer") {
        return "You lose!"
    }

    else if (result == "ERROR") {
        return "ERROR"
    }

}

function getPlayerChoice() {
    const choicep = input.value;
        const choiceInLower = choicep.toLowerCase();
        if (options.includes(choiceInLower)) {
            return choiceInLower;
        }
        else {
            return "ERROR"
        }
};

let score = 0;
let scoreComputer = 0;

function game() {
    
    console.log("Welcome!")
    for (let i = 0; i < 1; i++) {
        const playerSelection = getPlayerChoice();
        if (playerSelection === "ERROR") {
            console.log("Error: Invalid choice. Please choose rock, paper, or scissors.");
            return; // Termina o jogo aqui caso a escolha do jogador seja inválida
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-----------------------------------");
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            score++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
     if (score > scoreComputer) {
        console.log("You are the Champion, my friend!");
    }
    else if(score < scoreComputer){
        console.log("Go home, man...");
     }
    
    input.value = "";
    input.focus();
    
    span.textContent = score;
    computerSpan.textContent = scoreComputer;

   
}
