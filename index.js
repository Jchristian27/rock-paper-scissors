function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getComputerChoice() {
  options = ["rock", "paper", "scissors"];
  choice = options[getRndInteger(1,4) - 1];
  return choice;
}

let choiceRock = document.querySelector('#rock');
let choicePaper = document.querySelector('#paper');
let choiceScissors = document.querySelector('#scissors');
let title = document.querySelector('.title');
let playerScoreHTML = document.querySelector('#player-score');
let computerScoreHTML = document.querySelector('#computer-score');
let playerScore = 0;
let computerScore = 0;


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
    playerScore += 1;
    title.innerHTML = `<h3>You chose ${playerSelection} and the computer chose ${computerSelection}. You win!</h3>`;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore += 1;
    title.innerHTML = `<h3>You chose ${playerSelection} and the computer chose ${computerSelection}. You win!</h3>`;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore += 1;
    title.innerHTML = `<h3>You chose ${playerSelection} and the computer chose ${computerSelection}. You win!</h3>`;
  } else if (computerSelection === playerSelection) {
    title.innerHTML = `<h3>You chose ${playerSelection} and the computer chose ${computerSelection}. It's a tie!</h3>`;
  } else {
    computerScore += 1
    title.innerHTML = `<h3>You chose ${playerSelection} and the computer chose ${computerSelection}. You lose!</h3>`;
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

