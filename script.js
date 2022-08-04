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
    if(playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors"){

        if (playerSelection === computerSelection){
            let resultDraw = "It's a draw! " + playerSelection + " draws with " + computerSelection + "."
            return resultDraw;
        }
        else if (playerSelection === "Rock" && computerSelection === "Scissors"){
            let result = "You win! " + playerSelection + " beats " + computerSelection + "."
            win++;
            return result;
    
        }
        else if (playerSelection === "Scissors" && computerSelection === "Paper"){
            let result = "You win! " + playerSelection + " beats " + computerSelection + "."
            win++;
            return result;
        }
        else if(playerSelection === "Paper" && computerSelection === "Rock"){
            let result = "You win! " + playerSelection + " beats " + computerSelection + "."
            win++;
            return result;
        }
        else{
            let result = "You lose. " + playerSelection + " loses to " + computerSelection + "."
            lose++;
            return result;
        }  
    } 
    else{
        let result = playerSelection + " does not exist. Please try again."
        return result;
    }

   
} 

const playerSelection = "";




function game(){
    win = 0;
    lose = 0;
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        let playerType = prompt("Rock, Paper, or Scissors?")
        console.log("You choose " + capitalize(playerType));  
        console.log("Computer chooses " + computerSelection);
        console.log(playRound(capitalize(playerType), computerSelection));

        console.log("Your Wins: " + win + "   Computer wins: " + lose);
    }

}

/* create function to fix capitalization*/
function capitalize(playerType){

        let playerSelection = playerType.charAt(0).toUpperCase() + playerType.slice(1).toLowerCase();
        return playerSelection;

      }


game();



/* Need to Create a new function in order to make the word the correct spelling.
Create new if statement to make sure any text outside rock paper or scissors is a restart.
Create a function to add points and display*/