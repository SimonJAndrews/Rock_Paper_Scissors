
// There are the three possible options//
let options = ["rock", "paper", "scissors"];
//this function generates a random number and rounds it down to a whiole number//
function getComputerChoice(){
  const choice = options[Math.floor(Math.random() * options.length)];
  console.log(choice)
  return choice;
}

// this function checks who is the winner and returns the answer. it takes two arguments.
function checkWinner(playerSelection, computerSelection){
  if(playerSelection == computerSelection){
  return "its a Tie.";

  }else if((playerSelection == "rock" && computerSelection == "scissors") || 
  (playerSelection == "paper" && computerSelection == "rock") ||
   (playerSelection =="scissors" && computerSelection == "paper")){
    return "Player";
  }else{
    return "Computer"
  }
}
//this function checks the result of the checkWinner function above and returns a message dependant on the result.
function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection,computerSelection);
    if ( result == "its a Tie"){
      return "its a Tie!"
    }else if (result == "Player"){
      return `You win ${playerSelection} beats ${computerSelection}`
    } else{
      return `You lose ${computerSelection} beats ${playerSelection}`
    }
  }


const playerSelection ="rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));






