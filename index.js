function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getComputerChoice() {
  options = ["rock", "paper", "scissors"];
  choice = options[getRndInteger(1,4) - 1];
  return choice
}

function singleRound(computerSelection, playerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = window.prompt("Rock, Paper, or Scissors?").toLowerCase();
  if (computerSelection == "rock" && playerSelection == "rock") {
    console.log("It's a tie!")
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    console.log("You win! Paper beats rock!")
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    console.log ("You lose! Rock beats scissors!")
  } else if (computerSelection == "paper" && playerSelection == "paper") {
    console.log("It's a tie!")
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log("You lose! Paper beats rock!")
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    console.log ("You win! Scissors beats paper!")
  } else if (computerSelection == "scissors" && playerSelection == "scissors") {
    console.log("It's a tie!")
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    console.log("You lose! Scissors beats paper!")
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    console.log ("You win! Rock beats scissors!")
  } else {
    console.log("Uh oh. Something went wrong!")
  }
}

singleRound()