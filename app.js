const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    if(userChoice=="rock"){
      userChoiceDisplay.innerHTML='<img src="images/RockUser.png" alt="rock">'
    }
    else if(userChoice=="paper"){
      userChoiceDisplay.innerHTML='<img src="images/PaperUser.png" alt="paper">'
    }
    else if(userChoice=="scissors"){
      userChoiceDisplay.innerHTML='<img src="images/ScissorsUser.png" alt="scissors">'
    }
    // userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; //or you can use possibleChoices.length

  if (randomNumber === 1) {
    computerChoice = "rock";
    computerChoiceDisplay.innerHTML = '<img src="images/Rock.png" alt="rock">';
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
    computerChoiceDisplay.innerHTML = '<img src="images/Scissors.png" alt="scissors">';
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
    computerChoiceDisplay.innerHTML = '<img src="images/Paper.png" alt="paper">';
    
  }
  // computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "it's a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lose!";
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "you win!";
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = "you lose!";
  }
  resultDisplay.innerHTML = result;
}
