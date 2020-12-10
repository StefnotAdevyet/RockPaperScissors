var scorePlayer = 0;
var scoreComputer = 0;


function computerPlay() {
  var choice = Math.floor(Math.random() * 3 + 1);
  if (choice === 1) {
    return 'rock'
  } else if (choice === 2) {
    return 'paper'
  } else if (choice === 3) {
    return 'scissors'
  }
}

function playRound(playerSelection, computerSelection) {   
  if (playerSelection === computerSelection) {
      alert('It\'s a TIE!' + ' the score is ' + scorePlayer + ' to ' + scoreComputer);
    } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      scoreComputer = scoreComputer + 1;
      alert('Paper beats rock, YOU LOSE!' + ' the score is ' + scorePlayer + ' to ' + scoreComputer);      
    } else if (computerSelection === 'scissors') {
      scorePlayer = scorePlayer + 1;
      alert('Rock beats scissors, YOU WIN!!' + ' the score is ' + scorePlayer + ' to ' + scoreComputer);      
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      scoreComputer = scoreComputer + 1;
      alert('Rock beats scissors, YOU LOSE!' + ' the score is ' + scorePlayer + ' to ' + scoreComputer);      
    } else if (computerSelection === 'paper') {
      scorePlayer = scorePlayer + 1;
      alert('Scissors beats paper, YOU WIN!!' + ' the score is ' + scorePlayer + ' to ' + scoreComputer);      
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      scoreComputer = scoreComputer + 1;
      alert('Scissors beats paper, YOU LOSE!' + ' the score is ' + scorePlayer + ' to ' + scoreComputer);      
    } else if (computerSelection === 'rock') {
      scorePlayer = scorePlayer + 1
      alert('Paper beats rock, YOU WIN!!' + ' the score is ' + scorePlayer + ' to ' + scoreComputer);      
      ;
    }
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  playerSelection = document.querySelector(buttons.id)
  button.addEventListener('click', () => {
    if (button.id === 'reset') {
      scorePlayer = 0;
      scoreComputer = 0;
      alert('The scores have been reset.')
    } else {
    alert(playRound(button.id, computerPlay()));
    }
})})



