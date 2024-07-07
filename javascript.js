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

function getHumanChoice() {
    let input= prompt("Choose one among Rock, Paper and Scissors:", "");
    newInput=input.toUpperCase();
    return newInput;
}

let HumanScore=0;
let ComputerScore=0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice=="ROCK" && computerChoice=="PAPER") {
        console.log("You lose! Paper beats Rock");
        ComputerScore++;
    } else if(humanChoice=="PAPER" && computerChoice=="ROCK") {
        console.log("You win! Paper beats Rock");
        HumanScore++;
    } else if (humanChoice=="ROCK" && computerChoice=="SCISSORS") {
        console.log("You win! Rock beats Scissors");
        HumanScore++;
    } else if (humanChoice=="SCISSORS" && computerChoice=="ROCK") {
        console.log("You lose! Rock beats Scissors");
        ComputerScore++;
    } else if (humanChoice=="SCISSORS" && computerChoice=="PAPER") {
        console.log("You win! Scissors beats Paper");
        HumanScore++;
    } else if (humanChoice=="PAPER" && computerChoice=="SCISSORS") {
        console.log("You lose! Scissors beats Paper");
        ComputerScore++;
    } 
}

function playGame() {
    
    for (let i=0; i<5; i++){
        const HumanSelect=getHumanChoice();
        const ComputerSelect=getComputerChoice();
        console.log("You chose", HumanSelect);
        console.log("Computer chose", ComputerSelect);
        playRound(HumanSelect, ComputerSelect);
        console.log("Your Score:", HumanScore);
        console.log("Computer Score:", ComputerScore);
    }

    if (HumanScore>ComputerScore) {
        console.log("You won this game of Rock Paper Scissors!");
    } else if (HumanScore<ComputerScore){
        console.log("You lose this game of Rock Paper Scissors!");
    } else {
        console.log("You drew this game of Rock Paper Scissors!");
    }
}

playGame();