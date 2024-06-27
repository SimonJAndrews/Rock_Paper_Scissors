

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const computer = getComputerChoice(1,4);

  if(computer === 1){
    console.log("Rock");
  } else if (computer === 2) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  } ;
  