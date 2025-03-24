
//let greeting = alert("It's time to rock! Or paper... or scissors.")
//create the choices for the computer
//get the computer choice
function getComputerChoice() {
    let  computerChoice = Math.floor(Math.random() * 3);
    if  (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

//get human choice using prompt
//put humanChoice to lower case and create function to determine if it is a valid option
function getHumanChoice() {
  let humanChoice = prompt("Enter rock, paper or scissors:").toLowerCase();
  if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
  } else {
    alert("Please enter a valid option.");
  }
}

//create two new variables to keep track of scores
let humanScore = 0;
let computerScore = 0;
//something is wrong: when computer and human tie, it says "Computer wins"
function playRound(humanSelection, computerSelection) {
    let result;
    if (humanSelection === computerScore) {
       result = "It's a tie";
    } else if ((humanSelection === "rock" && computerSelection === "scissors")||
                (humanSelection === "paper" && computerSelection === "rock") ||
                (humanSelection === "scissors" && computerSelection === "paper")) {
                    result = "You win";
                    humanScore++;
                } else { 
                    result = "Computer wins"; 
                    computerScore++;             
                 }
                    console.log(`You chose ${humanChoice} and computer chose ${computerChoice} ${result}`);
                    console.log(`Your score: ${humanScore}\n Computer score: ${computerScore}`);
}
//needed to use backticks rather than quotes

//create a playGame function that plays 5 rounds and determines the winner
function playGame () {
 while (computerScore < 3 && humanScore < 3) {
    const humanTurn = getHumanChoice();
    const computerTurn = getComputerChoice();
 }
 playRound(humanTurn, computerTurn);

 if (humanScore > computerScore) {
    alert("You win :)");
} else if (computerScore > humanScore) {
    alert("Computer wins");
} else {
    return "It's a tie"
}
}

playGame();