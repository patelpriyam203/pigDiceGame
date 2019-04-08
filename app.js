var score, roundScore, activePlayer;

score = [0,0];
roundScore = 0;
activePlayer = 0;


// Hide the dice
document.querySelector('.dice').style.display = 'none';

// Setting our initial score to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Role Dice Button
document.querySelector('.btn-roll').addEventListener('click', function(){
    // Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
    // Update the round score if the rolled number was not 1

});