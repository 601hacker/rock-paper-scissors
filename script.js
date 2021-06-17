let playerSelection;
let computerSelection;

setup();

function computerPlay() {
    let AI = ['rock', 'paper', 'scissor']
    return AI[Math.round(Math.random() * 2)];
}

function setup() {
    playerSelection = prompt('Pick Rock, Paper or Scissor').toLowerCase();
    computerSelection = computerPlay();
    singleRound(playerSelection, computerSelection);
}

function singleRound(playerSelection, computerSelection) {
    
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        console.log(`It's a draw!`);
    } else  if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log(`You lose!`);
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log(`You win!`);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You win`);
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log(`It's a draw!`);
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        console.log(`You lose!`);
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        console.log(`You lose!`);
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log(`You win!`);
    } else if (playerSelection == 'scissor' && computerSelection == 'scissor') {
        console.log(`It's a draw!`);
    }
}