/* begin fxn with getComputerChoice */
/* getComputerChoice should randomly return Rock Paper or Scissors*/
function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice <= 1/3){
        let computerChoice = "Scissors";
        return computerChoice;
    }
    else if (randomChoice <= 2/3){
        let computerChoice = "Paper";
        return computerChoice;
    }
    else{
        let computerChoice = "Rock";
        return computerChoice;
    }
}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        let result = "It's a draw! " + playerSelection + " draws with " + computerSelection + "."
        return result;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        let result = "You win! " + playerSelection + " beats " + computerSelection + ".";
        return result;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        let result = "You win! " + playerSelection + " beats " + computerSelection + ".";
        return result;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        let result = "You win! " + playerSelection + " beats " + computerSelection + ".";
        return result;
    }
    else{
        let result = "You lose. " + playerSelection + " loses to " + computerSelection + ".";
        return result;
    }
} 

const playerSelection = " ";
const computerSelection = getComputerChoice();

/* Need to Create a new function in order to make the word the correct spelling.
Create new if statement to make sure any text outside rock paper or scissors is a restart.
Create a function to add points and display*/

function game(){

    for(let i = 0; i < 1; i++){
        let playerSelection = prompt("Rock, Paper, or Scissors?")
        console.log("You choose " + playerSelection);  
        console.log("Computer chooses " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }

}


game();

