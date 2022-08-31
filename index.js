function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getComputerChoice() {
  options = ["rock", "paper", "scissors"];
  choice = options[getRndInteger(1,4) - 1];
  return choice;
}

function singleRound(computerSelection, playerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = window.prompt("Rock, Paper, or Scissors?").toLowerCase();
  if (computerSelection == "rock" && playerSelection == "rock") {
    console.log(`It's a tie! Player Score: ${playerScore} Computer Score: ${computerScore}`)
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    playerScore += 1
    console.log(`You win! Paper beats rock! Player Score: ${playerScore} Computer Score: ${computerScore}`)
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    computerScore += 1
    console.log (`You lose! Rock beats scissors! Player Score: ${playerScore} Computer Score: ${computerScore}`)
  } else if (computerSelection == "paper" && playerSelection == "paper") {
    console.log(`It's a tie! Player Score: ${playerScore} Computer Score: ${computerScore}`)
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    computerScore += 1
    console.log(`You lose! Paper beats rock! Player Score: ${playerScore} Computer Score: ${computerScore}`)
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    playerScore += 1
    console.log (`You win! Scissors beats paper! Player Score: ${playerScore} Computer Score: ${computerScore}`)
  } else if (computerSelection == "scissors" && playerSelection == "scissors") {
    console.log(`It's a tie! Player Score: ${playerScore} Computer Score: ${computerScore}`)
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    computerScore += 1
    console.log(`You lose! Scissors beats paper! Player Score: ${playerScore} Computer Score: ${computerScore}`)
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    playerScore += 1
    console.log (`You win! Rock beats scissors! Player Score: ${playerScore} Computer Score: ${computerScore}`)
  } else {
    console.log("Uh oh. Something went wrong!")
  }
}

function game() {
  computerScore = 0;
  playerScore = 0;
  for (let i = 0; i < 5; i++) {
     if (i < 5) {
      singleRound()
    }
  }
  if (computerScore == 5) {
    console.log("The Computer Won :(")
  } else if (playerScore == 5) {
    console.log("You won!")
  } 
}

game()