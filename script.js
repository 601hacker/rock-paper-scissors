let playerSelection;
let computerSelection;
let singleRoundResults;

setup();                                                                            //starts the function chain

function setup() {
    fiveRound();
}

function computerPlay() {                                                           //randomizer for Rock, Paper, Scissor
    let AI = ['rock', 'paper', 'scissor']
    return AI[Math.round(Math.random() * 2)];
}

function singleRound(playerSelection, computerSelection) {                          // Single round of Rock, Paper, Scissor
    
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 0;
    } else  if (playerSelection == 'rock' && computerSelection == 'paper') {
        return -1;
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        return 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 1;
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 0;
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        return -1;
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        return -1;
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        return 1;
    } else if (playerSelection == 'scissor' && computerSelection == 'scissor') {
        return 0;
    }
}

function fiveRound() {                                                              //Loops singleRound function for five rounds and keeps score
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt('pick');
        computerSelection = computerPlay();
        let singleRoundResults = singleRound(playerSelection, computerSelection);
        if (singleRoundResults === 1) {
            playerWins++;
        } else if (singleRoundResults === -1) {
            computerWins++;
        } else if (singleRoundResults === 0) {
            playerWins++;
            computerWins++;
        } else if (singleRoundResults === undefined || singleRoundResults === null) {
            console.log('Wrong input, refresh to play again');
            return;
        }
        console.log(`Computer: ${computerWins}; Player: ${playerWins};`);
    }

    if (computerWins > playerWins) {                                                //Results
        console.log('Computer Won!~');
    } else if (computerWins < playerWins) {
        console.log('Player Won!~');
    } else {
        console.log('TIE')
    }
}