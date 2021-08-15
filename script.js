let userScore = 0;
let gameScore = 0;
let numberOfTies = 0;

function computerPlay () {
    const figures = ["rock", "paper", "scissors"];
    const rng = Math.floor(Math.random()*(3-0)+0);
    const computerChoice = figures[rng];   

    return computerChoice;
}

function playRound () {    

    let playerSelection = prompt("Select rock, paper or scissors. If you pick anything else, you lose a point :)").toLowerCase();
    let computerSelection = computerPlay();

    if(playerSelection == computerSelection){
        numberOfTies += 1;
        return ("it's a tie!");
    } else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        userScore += 1;
        return ("you win! " + playerSelection + " beats " + computerSelection);
    } else {
        gameScore += 1;
        return ("you lost! " + computerSelection + " beats " + playerSelection);
    }
   
}

function game() {
    userScore = 0;
    gameScore = 0;

    for(let i=0; i<5; i++){
        console.log(playRound());
    }

    console.log("The final score is... Player: " + userScore + ", Computer: " + gameScore + ". The game tied " + numberOfTies + " times.");
}

console.log(game());