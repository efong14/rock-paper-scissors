let computerSelection = getComputerChoice();
        console.log(computerSelection);

let playerSelection = "";
        
let result = "";

let playerPoints = 0;

let computerPoints = 0;

const paper = document.querySelector(".Paper");
    paper.addEventListener('click', () => {
    playerSelection = 'paper';
    showResults ();
    chooseAgain ();
})
        
const scissors = document.querySelector(".Scissors");
    scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    showResults ();
    chooseAgain ();
})
        
const rock = document.querySelector(".Rock");
    rock.addEventListener('click', () => {
    playerSelection = 'rock';
    showResults ();
    chooseAgain ();
})
// On clicking the button player selection will be set to its respective choice and playRound will play via showResults.;

let resultText = document.querySelector(".resultText")
let wins = document.querySelector(".winsNum")
let losses = document.querySelector(".lossesNum")

function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];
    const chosen = options [Math.floor(Math.random()*3)];
    // Generates a random number from 0-2 to choose one option from the array,;
    return chosen;
    }

// function addScore {

// }    

function win () {
    playerPoints += 1;
    computerPoints += 0;
    resultText.textContent = `${result}`;
    wins.textContent = `${playerPoints}`;
    losses.textContent = `${computerPoints}`;
}

function lose () {
    playerPoints += 0;
    computerPoints += 1;
    resultText.textContent = `${result}`;
    wins.textContent = `${playerPoints}`;
    losses.textContent = `${computerPoints}`;
}

function tie () {
    playerPoints += 0;
    computerPoints += 0;
    resultText.textContent = `${result}`;
    wins.textContent = `${playerPoints}`;
    losses.textContent = `${computerPoints}`;

}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper"
        || playerSelection == "scissors" && computerSelection == "scissors") {
            result = "Tie!";
            tie ();
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            result = "You win! Rock beats Scissors";
            win ();
        }else if (playerSelection == "paper" && computerSelection == "rock") {
            result = "You win! Paper beats Rock";
            win ();
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            result = "You win! Scissors beats Paper";
            win ();
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            result = "You lose! Paper beats Rock";
            lose ();
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            result = "You lose! Scissors beats Paper";
            lose ();
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            result = "You lose! Rock beats Scissors";
            lose ();
        } else {
            result = "Try again!";
}}

function showResults () {
    console.log (playerSelection);
    playRound (playerSelection, computerSelection);
    console.log (result);
    console.log (playerPoints)
    console.log (computerPoints)
}

function chooseAgain () {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    //resets the computer choice to play another round;
}