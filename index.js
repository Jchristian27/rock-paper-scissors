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

function game(computerSelection, playerSelection) {
  winner = "";
  if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore += 1;
    title.innerHTML = `<h2>You chose ${playerSelection} and the computer chose ${computerSelection}</h2><h3>You win!</h3>`;
    playerScoreHTML.innerText = playerScore;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore += 1;
    title.innerHTML = `<h2>You chose ${playerSelection} and the computer chose ${computerSelection}</h2><h3>You win!</h3>`;
    playerScoreHTML.innerText = playerScore;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore += 1;
    title.innerHTML = `<h2>You chose ${playerSelection} and the computer chose ${computerSelection}</h2><h3>You win!</h3>`;
    playerScoreHTML.innerText = playerScore;
  } else if (computerSelection === playerSelection) {
    title.innerHTML = `<h2>You chose ${playerSelection} and the computer chose ${computerSelection}</h2><h3>It's a tie!</h3>`;
  } else {
    computerScore += 1
    title.innerHTML = `<h2>You chose ${playerSelection} and the computer chose ${computerSelection}</h2><h3>You lose!</h3>`;
    computerScoreHTML.innerText = computerScore;
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