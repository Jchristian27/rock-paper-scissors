function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getComputerChoice() {
  options = ["Rock", "Paper", "Scissors"]
  choice = options[getRndInteger(1,4) - 1]
  console.log(choice)
}

getComputerChoice()