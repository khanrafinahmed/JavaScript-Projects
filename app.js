var scores, roundscore, activePlayer, gamePlaying, prevDice;


init();



document.querySelector('.btn-roll').addEventListener('click', function()
{

	if(gamePlaying)
	{
	var dice= Math.floor(Math.random() * 6) + 1;

	var dice2= Math.floor(Math.random() * 6) + 1;


	var DOMDice= document.querySelector('.dice');

	var DOMDice2= document.querySelector('.dice2');

	DOMDice.style.display= 'block';

	DOMDice2.style.display='block';

	DOMDice.src= 'dice-' + dice + '.png';

	DOMDice2.src= 'dice-' + dice +'.png';

	
	if(dice !== 1)
	{
		if(prevDice=== 6 && dice===6)
		{

			roundscore= 0;

			scores[activePlayer]= roundscore;

			document.querySelector('#score-' + activePlayer).textContent= scores[activePlayer];

			document.querySelector('#current-' + activePlayer).textContent= roundscore;

			nextplayer();

		}

		else
		{

		prevDice= dice;

		roundscore += dice;

		document.querySelector('#current-' + activePlayer).textContent= roundscore;

		}
	}

	else
	{
	
		nextplayer();

	}


	}
	
});

document.querySelector('.btn-hold').addEventListener('click', function()
{

	if(gamePlaying)
	{
	scores[activePlayer]+= roundscore;

	document.querySelector('#score-' + activePlayer).textContent= scores[activePlayer];

	var input= document.querySelector('.final-score').value;

	var winningScore;

	if(input)
	{
		winningScore= input;
	}

	else
	{
		winningScore= 100;
	}

	
	if(scores[activePlayer]>=winningScore)
	{
		document.querySelector('#name-' + activePlayer).textContent= 'Winner!';

		document.querySelector('.dice').style.display= 'none';

		document.querySelector('.dice2').style.display= 'none';

		document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');

		document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');

		gamePlaying= false;

	}

	else
	{
		
	nextplayer();

	}

	}

	

});

function nextplayer()
{
		activePlayer===0 ? activePlayer=1 : activePlayer=0;

		roundscore=0;

		document.getElementById('current-0').textContent= '0';

		document.getElementById('current-1').textContent= '0';

		document.querySelector('.player-0-panel').classList.toggle('active');

		document.querySelector('.player-1-panel').classList.toggle('active');

}


document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
	scores= [0,0];

	roundscore= 0;

	activePlayer= 0;

	gamePlaying= true;

	document.querySelector('.dice').style.display= 'none';

	document.querySelector('.dice2').style.display= 'none';

	document.getElementById('score-0').textContent= '0';

	document.getElementById('current-0').textContent= '0';

	document.getElementById('score-1').textContent= '0';

	document.getElementById('current-1').textContent= '0';

	document.getElementById('name-0').textContent = 'Player 1';
    
    document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');

	document.querySelector('.player-1-panel').classList.remove('winner');


	document.querySelector('.player-0-panel').classList.remove('active');

	document.querySelector('.player-1-panel').classList.remove('active');


	document.querySelector('.player-0-panel').classList.add('active');

    


}
