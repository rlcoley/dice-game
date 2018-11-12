/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as they wish. Each result get added to thier ROUND score
- BUT, if the player rolls a 1, all their ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that their ROUND score gets added to their global score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var socres, roundScore, activePlayer;

// init()

// Dice img, hold button, roll button, and new game
var diceimg = document.getElementsByClassName('dice')[0]
var rollDice = document.getElementsByClassName('btn-roll')[0]
var holdTurn = document.getElementsByClassName('btn-hold')[0]
var newGame =  document.getElementsByClassName('btn-new')[0]






// Total and Current Scores
var totalScorePly1 = document.getElementById('totalscore-ply1')
var totalScorePly2 = document.getElementById('totalscore-ply2')
var currentScorePly1 = document.getElementById('currentscore-ply1')
var currentScorePly2 = document.getElementById('currentscore-ply2')






// When Roll Dice gets clicked 3 things happen
rollDice.addEventListener('click', function() {
  // console.log('clicked');

  // 1. get random number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display result
  // show image
  diceimg.style.display = 'block'
  // change image
  diceimg.src = 'dice-' + dice+'.png'

  // 3. Update the round score if the  rolled number was NOT a 1
  if (dice > 1) {

    // Add score
    roundScore += dice
    document.getElementById('currentscore-ply' + activePlayer).innerHTML = roundScore

  }else {
      // console.log('Rolled a one');
      nextPlayer()


  }

})


// when Hold Turn is clicked 3 things happen
holdTurn.addEventListener('click', function() {

    // 1. Add Current Score to Global Score
      scores[activePlayer] += roundScore

    // 2. Update the UI
    // console.log(scores);
    document.querySelector('#totalscore-ply' + activePlayer).textContent = scores[activePlayer]
    console.log(totalScorePly1.innerHTML, totalScorePly2.innerHTML);
    console.log(scores[activePlayer]);
    // 3. Check if player won the game
    if (scores[activePlayer] >=25) {
      diceimg.style.display = 'none';
      document.querySelector('#name-' + activePlayer).textContent = "Game Bitch"
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    }else {

      // Next Player
      nextPlayer()
    }



})


function nextPlayer() {
  // Hide dice
  diceimg.style.display = 'none';
  // Change player
  // alternates between player1 and player2
  activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;

  // set Current score back to 0
  roundScore = 0
  document.getElementById('currentscore-ply1').innerHTML = roundScore
  document.getElementById('currentscore-ply2').innerHTML = roundScore

  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.player-2-panel').classList.toggle('active');
}


newGame.addEventListener('click', init)

function init() {
  scores = [0,0,0];
  roundScore = 0;
  activePlayer = 1;

  // Hide dice
  diceimg.style.display = 'none';

  // game start art zero
  totalScorePly1.innerHTML = "0";
  totalScorePly2.innerHTML = "0";
  currentScorePly1.innerHTML = "0";
  currentScorePly2.innerHTML = "0";
  document.getElementById('name-1').innerHTML = "Player 1"
  document.getElementById('name-2').innerHTML = "Player 2"

  document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
  document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');

}




// console.log(dice);
// document.querySelector('#current-' + activePlayer).textContent = dice;
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
