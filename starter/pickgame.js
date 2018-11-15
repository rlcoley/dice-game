/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var socres, roundScore, activePlayer;

var lastDice;



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
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  // 2. Display result
  // show image
  document.getElementById('dice1').style.display =  'block'
  document.getElementById('dice2').style.display =  'block'
  // diceimg.style.display = 'block'
  // change image
  document.getElementById('dice1').src = 'dice-' + dice1+'.png'
  document.getElementById('dice1').src = 'dice-' + dice2+'.png'

  // 3. Update the round score if the  rolled number was NOT a 1
  if (dice1 !== 1 && dice2 !== 1) {
    roundScore += dice1 + dice2
    document.getElementById('currentscore-ply' + activePlayer).innerHTML = roundScore
  }else {
      nextPlayer()
  }

  lastDice = dice1 + dice2

})


// when Hold Turn is clicked 3 things happen
holdTurn.addEventListener('click', function() {

    // 1. Add Current Score to Global Score
      scores[activePlayer] += roundScore

    // 2. Update the UI
    document.querySelector('#totalscore-ply' + activePlayer).textContent = scores[activePlayer]

    var input = document.querySelector('.set_score').value
    var winningScore
    // Undefined, 0, null or '' are COERCED to false
    // Anything else is COERCED to true
    if (input) {
      winningScore = input
    }else {
      winningScore = 100
    }

    // 3. Check if player won the game
    if (scores[activePlayer] >=winningScore) {
      document.getElementById('dice1').style.display =  'none'
      document.getElementById('dice2').style.display =  'none'
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
  document.getElementById('dice1').style.display =  'none'
  document.getElementById('dice2').style.display =  'none'
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
  document.getElementById('dice1').style.display =  'none'
  document.getElementById('dice2').style.display =  'none'

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
