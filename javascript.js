function getComputerChoice() {
    let num = Math.random();
    if (num<=0.333) {
        return "ROCK";
    } else if (num>0.333 && num<=0.666){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

let HumanScore=0;
let ComputerScore=0;

let compText = document.querySelector("p");

function playRound(humanChoice, computerChoice) {
    if (humanChoice=="ROCK" && computerChoice=="PAPER") {
        compText.textContent = "Computer chose Paper! You lose!";
        ComputerScore++;
    } else if(humanChoice=="PAPER" && computerChoice=="ROCK") {
        compText.textContent = "Computer chose Rock! You win!";
        HumanScore++;
    } else if (humanChoice=="ROCK" && computerChoice=="SCISSORS") {
        compText.textContent = "Computer chose Scissors! You win!";
        HumanScore++;
    } else if (humanChoice=="SCISSORS" && computerChoice=="ROCK") {
        compText.textContent = "Computer chose Rock! You lose!";
        ComputerScore++;
    } else if (humanChoice=="SCISSORS" && computerChoice=="PAPER") {
        compText.textContent = "Computer chose Paper! You win!";
        HumanScore++;
    } else if (humanChoice=="PAPER" && computerChoice=="SCISSORS") {
        compText.textContent = "Computer chose Scissors! You lose!";
        ComputerScore++;
    } else {
        compText.textContent = `Both chose ${humanChoice}! Draw!`
    }
}

const scores = document.querySelector("#scores");
scores.textContent = `Your Score: ${HumanScore}         Computer Score: ${ComputerScore}`;

const buttons = document.querySelectorAll(".options button");

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        const humanChoice = event.currentTarget.id.toUpperCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        scores.textContent = `Your Score: ${HumanScore} Computer Score: ${ComputerScore}`;

        if (HumanScore === 5) {
            alert("You won this game of Rock Paper Scissors!");
            resetGame();
        } else if (ComputerScore === 5) {
            alert("You lose this game of Rock Paper Scissors!");
        }
    });
});


