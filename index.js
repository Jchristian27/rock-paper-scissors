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
  winner = "";
  if (computerSelection == "rock" && playerSelection == "rock") {
    return "It's a tie!";
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    winner = "player";
    return "You win! Paper beats rock!";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    winner = "computer";
    return "You lose! Rock beats scissors!";
  } else if (computerSelection == "paper" && playerSelection == "paper") {
    return "It's a tie!";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    winner = "computer";
    return "You lose! Paper beats rock!";
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    winner = "player";
    return  "You win! Scissors beats paper!";
  } else if (computerSelection == "scissors" && playerSelection == "scissors") {
    return "It's a tie!";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    winner = "computer";
    return "You lose! Scissors beats paper!";
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    winner = "player";
    return "You win! Rock beats scissors!";
  } else {
    return "Uh oh. Something went wrong!";
  }
}

function game() {
  computerScore = 0;
  playerScore = 0;
  for (let i = 0; i < 100; i++) {
     if (i < 100) {
      console.log(singleRound())
      if (winner == "player") {
        playerScore += 1;
        console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`)
        console.log("")
        if (playerScore == 5) {
          console.log("YOU WON THIS MATCH! GAME OVER")
          break
        } else if (computerScore == 5) {
          console.log("YOU LOST THIS MATCH! GAME OVER")
          break
        }
      } else if (winner == "computer") {
        computerScore += 1;
        console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`)
        console.log("")
        if (playerScore == 5) {
          console.log("YOU WON THIS MATCH! GAME OVER")
          break
        } else if (computerScore == 5) {
          console.log("YOU LOST THIS MATCH! GAME OVER")
          break
        }
      } else {
        console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`)
        console.log("")
      }
    }
  }
}

game()