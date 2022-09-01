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
  if (computerSelection === "rock" && playerSelection === "paper") {
    winner = "player";
    return `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    winner = "player";
    return  `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    winner = "player";
    return `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`;
  } else if (computerSelection === playerSelection) {
    return `You chose ${playerSelection} and the computer chose ${computerSelection}. It's a tie!`
  } else {
    winner = "computer";
    return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lose!`;
  }
}

function game() {
  computerScore = 0;
  playerScore = 0;
  for (let i = 0; i < 100; i++) {
     if (i < 100) {
      console.log(singleRound())
      if (winner === "player") {
        playerScore += 1;
        console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`)
        console.log("")
        if (playerScore === 5) {
          console.log("YOU WON THIS MATCH! GAME OVER")
          break
        } else if (computerScore === 5) {
          console.log("YOU LOST THIS MATCH! GAME OVER")
          break
        }
      } else if (winner === "computer") {
        computerScore += 1;
        console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`)
        console.log("")
        if (playerScore === 5) {
          console.log("YOU WON THIS MATCH! GAME OVER")
          break
        } else if (computerScore === 5) {
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



