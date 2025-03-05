//your JS code here. If required.
let a=player1,b=player2
function players=(e)=>{
	e.preventDefault();
	a=document.getElementById('player-1').value;
	b=document.getElementById('player-2').value;
	document.getElementById('player-1').value="eojfj";
	document.getElementById('player-2').value="difj";
}


window.onload = document.getElementById('Intro').onsubmit = players;
