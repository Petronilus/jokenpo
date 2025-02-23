
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;

}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
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
    else {
        return "You lose!"
    }

}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choicep = prompt("Rock Paper Scissors");
        if (choicep == null) {
            continue;
        }
        const choiceInLower = choicep.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let score = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 3; i++) {
        const playerSelection = getPlayerChoice();
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
    else {
        console.log("It's a tie!");
    }
}

game()
