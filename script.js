let playerSelection = prompt('Pick Rock, Paper or Scissor');

function computerPlay() {
    let AI = ['rock', 'paper', 'scissor']
    return AI[Math.round(Math.random() * 2)];
}