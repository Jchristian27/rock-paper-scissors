let defaultDomState = document.body.innerHTML;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getComputerChoice() {
  options = ["rock", "paper", "scissors"];
  choice = options[getRndInteger(1,4) - 1];
  return choice;
}

function declareWinner() {
  if (playerScore > 4) {
    window.alert("You Won!");
    document.location.reload()
  } else if (computerScore > 4) {
    window.alert("You Lost :(");
    document.location.reload()
  }
}

let choiceRock = document.querySelector('#rock');
let choicePaper = document.querySelector('#paper');
let choiceScissors = document.querySelector('#scissors');
let title = document.querySelector('.title');
let playerScoreHTML = document.querySelector('#player-score-num');
let computerScoreHTML = document.querySelector('#computer-score-num');
let playerScore = 0;
let computerScore = 0;


choiceRock.addEventListener('click', function() {
  game(getComputerChoice(), 'rock');
  declareWinner();
});

choicePaper.addEventListener('click', function() {
  game(getComputerChoice(), 'paper');
  declareWinner();
});

choiceScissors.addEventListener('click', function() {
  game(getComputerChoice(), 'scissors');
  declareWinner();
});

function game(computerSelection, playerSelection) {
  winner = "";
  if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore += 1;
    title.innerHTML = `<h2>You chose ${playerSelection} and the computer chose ${computerSelection}.</h2><h3>You win!</h3>`;
    playerScoreHTML.innerText = playerScore;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore += 1;
    title.innerHTML = `<h2>You chose ${playerSelection} and the computer chose ${computerSelection}.</h2><h3>You win!</h3>`;
    playerScoreHTML.innerText = playerScore;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore += 1;
    title.innerHTML = `<h2>You chose ${playerSelection} and the computer chose ${computerSelection}.</h2><h3>You win!</h3>`;
    playerScoreHTML.innerText = playerScore;
  } else if (computerSelection === playerSelection) {
    title.innerHTML = `<h2>You chose ${playerSelection} and the computer chose ${computerSelection}.</h2><h3>It's a tie!</h3>`;
  } else {
    computerScore += 1
    title.innerHTML = `<h2>You chose ${playerSelection} and the computer chose ${computerSelection}.</h2><h3>You lose!</h3>`;
    computerScoreHTML.innerText = computerScore;
  }
}

//When you need to reset the DOM, just replace the current body with:
// document.body.innerHTML = defaultDomState;

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

