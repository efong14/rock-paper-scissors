let computerSelection = getComputerChoice();
        console.log(computerSelection);

        let playerSelection = (prompt("Rock, Paper or Scissors?").toLowerCase());
        console.log(playerSelection);

        let chooseAgain = () => {
            playerSelection = (prompt("Rock, Paper or Scissors?").toLowerCase());
            console.log(playerSelection);
            computerSelection = getComputerChoice();
            console.log(computerSelection);
            //resets the player and computer choice to play another round
        }

        function getComputerChoice () {
            // let choiceRandom = Math.floor(Math.random()*3);
            // switch (choiceRandom) {
            // case 0:
            //     return "rock";
            //     break;
            // case 1:
            //     return "paper";
            //     break;
            // case 2:
            //     return "scissors";
            //     break;
            // default:
            //     "";
            // }}
            const options = ["rock", "paper", "scissors"]
            const chosen = options [Math.floor(Math.random()*3)]
            // Generates a random number from 0-2 to choose one option from the array,
            return chosen
            }


        function playRound (playerSelection, computerSelection) {
            return playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper"
                || playerSelection == "scissors" && computerSelection == "scissors"? "Tie!" 
                : playerSelection == "rock" && computerSelection == "scissors" ? "You win! Rock beats Scissors"
                : playerSelection == "paper" && computerSelection == "rock" ? "You win! Paper beats Rock"
                : playerSelection == "scissors" && computerSelection == "paper" ? "You win! Scissors beats Paper"
                : playerSelection == "rock" && computerSelection == "paper" ? "You lose! Paper beats Rock"
                : playerSelection == "paper" && computerSelection == "scissors" ? "You lose! Scissors beats Paper"
                : playerSelection == "scissors" && computerSelection == "rock" ? "You lose! Rock beats Scissors"
                : "Try again!";
            }
        
        console.log (playRound (playerSelection, computerSelection));

        // function game() {
        //     console.log (playRound(playerSelection, computerSelection));
        //     chooseAgain ();
        //     console.log (playRound(playerSelection, computerSelection));
        //     chooseAgain ();
        //     console.log (playRound(playerSelection, computerSelection));
        //     chooseAgain ();
        //     console.log (playRound(playerSelection, computerSelection));
        //     chooseAgain ();
        //     console.log (playRound(playerSelection, computerSelection));
        // }

        // game();