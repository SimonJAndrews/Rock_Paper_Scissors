
// There are the three possible options//
let options = ["rock", "paper", "scissors"];
//this function generates a random number and rounds it down to a whiole number//
function getComputerChoice(){
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

// this function checks who is the winner and returns the answer. it takes two arguments.
function checkWinner(playerSelection, computerSelection){
  if(playerSelection === computerSelection){
  return "Tie";
  }else if((playerSelection === "rock" && computerSelection === "scissors") || 
  (playerSelection === "paper" && computerSelection === "rock") ||
   (playerSelection === "scissors" && computerSelection === "paper")){
    return "Player";
  }else{
    return "Computer"
  }
}
//this function checks the result of the checkWinner function above and returns a message dependant on the result.
function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection,computerSelection);
    if ( result == "Tie"){
      return "its a Tie!"
    }else if (result == "Player"){
      return `You win ${playerSelection} beats ${computerSelection}`
    } else{
      return `You lose ${computerSelection} beats ${playerSelection}`
    }
  }
// This function gets the players choice using input and converts it to lower case. It also makes sure the input is valid(validated.)
  function getPlayerChoice(){
   let validatedInput = false;
   while(validatedInput == false){
    const choice = prompt("Rock Paper or Scissors");
   if(choice == null){
      continue;
   }
   const choiceInLower = choice.toLowerCase();
   if (options.includes(choiceInLower)){
     validatedInput = true;
     return choiceInLower;
   }

   }
  }

  // This function increments the scores of each player, tracks the round and logs the outcome messages to console.
  function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for (let index = 0; index < 5; index++) {
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection,computerSelection))
      console.log("--------------------")
      if(checkWinner(playerSelection , computerSelection) == "Player"){
        scorePlayer++
      }else if (checkWinner(playerSelection , computerSelection)== "Computer"){
        scoreComputer++
      }
    }
    console.log("Game Over")
    if (scorePlayer > scoreComputer){
      console.log("Congratulations You Win !")
    }else if(scorePlayer < scoreComputer){
      console.log(" Sorry The computer won. Better luck next time")
    }else{
      console.log("Its a Draw!!!")
    }
  }

  game()










