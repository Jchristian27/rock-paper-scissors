function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getComputerChoice() {
  options = ["rock", "paper", "scissors"];
  choice = options[getRndInteger(1,4) - 1];
  return choice;
}

choiceRock = document.querySelector('#rock');
choicePaper = document.querySelector('#paper');
choiceScissors = document.querySelector('#scissors');

choiceRock.addEventListener('mousedown', function() {
  singleRound(getComputerChoice(), 'rock');
});

choicePaper.addEventListener('mousedown', function() {
  singleRound(getComputerChoice(), 'paper');
});

choiceScissors.addEventListener('mousedown', function() {
  singleRound(getComputerChoice(), 'scissors');
});

function singleRound(computerSelection, playerSelection) {
  winner = "";
  if (computerSelection === "rock" && playerSelection === "paper") {
    winner = "player";
    console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`);
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    winner = "player";
    console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`);
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    winner = "player";
    console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`);
  } else if (computerSelection === playerSelection) {
    console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. It's a tie!`);
  } else {
    winner = "computer";
    console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. You lose!`);
  }
}

// function game() {
//   computerScore = 0;
//   playerScore = 0;
//   for (let i = 0; i < 100; i++) {
//      if (i < 100) {
//       console.log(singleRound())
//       if (winner === "player") {
//         playerScore += 1;
//         console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`)
//         console.log("")
//         if (playerScore === 5) {
//           console.log("YOU WON THIS MATCH! GAME OVER")
//           break
//         } else if (computerScore === 5) {
//           console.log("YOU LOST THIS MATCH! GAME OVER")
//           break
//         }
//       } else if (winner === "computer") {
//         computerScore += 1;
//         console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`)
//         console.log("")
//         if (playerScore === 5) {
//           console.log("YOU WON THIS MATCH! GAME OVER")
//           break
//         } else if (computerScore === 5) {
//           console.log("YOU LOST THIS MATCH! GAME OVER")
//           break
//         }
//       } else {
//         console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`)
//         console.log("")
//       }
//     }
//   }
// }

// game()

