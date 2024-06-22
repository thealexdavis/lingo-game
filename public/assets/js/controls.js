masterOdd = [[1,3,5,7,9,11,13,15],[17,19,21,23,25,27,29],[31,33,35,37,39,41,43,45],[47,49,51,53,55,57,59],[61,63,65,67,69,71,73,75]];
masterEven = [[2,4,6,8,10,12,14],[16,18,20,22,24,26,28,30],[32,34,36,38,40,42,44],[46,48,50,52,54,56,58,60],[62,64,66,68,70,72,74]];
markoffStarters = [[1,4,6,7,8,13,15,20,22,24],[0,1,7,8,10,14,16,17,23,24],[0,2,4,6,10,14,16,17,18,21],[2,3,6,9,10,12,16,18,21,23],[2,3,5,6,9,11,14,17,21,24]];
markoffStartersBonus = [[0,1,2,8,11,12,14,17,19,20,22,23],[0,2,3,5,6,9,11,14,18,20,21,25],[0,2,3,5,6,9,10,13,15,16,22,24],[3,5,6,7,8,10,11,16,17,18,22,24],[2,3,5,6,9,11,13,15,16,19,21,24]];
player1Set = false;
player2Set = false;

team1Board = '<tr> <td id="team1square1" onclick="markOff(1,1)"></td> <td id="team1square2" onclick="markOff(1,2)"></td> <td id="team1square3" onclick="markOff(1,3)"></td> <td id="team1square4" onclick="markOff(1,4)"></td> <td id="team1square5" onclick="markOff(1,5)"></td> </tr> <tr> <td id="team1square6" onclick="markOff(1,6)"></td> <td id="team1square7" onclick="markOff(1,7)"></td> <td id="team1square8" onclick="markOff(1,8)"></td> <td id="team1square9" onclick="markOff(1,9)"></td> <td id="team1square10" onclick="markOff(1,10)"></td> </tr> <tr> <td id="team1square11" onclick="markOff(1,11)"></td> <td id="team1square12" onclick="markOff(1,12)"></td> <td id="team1square13" onclick="markOff(1,13)"></td> <td id="team1square14" onclick="markOff(1,14)"></td> <td id="team1square15" onclick="markOff(1,15)"></td> </tr> <tr> <td id="team1square16" onclick="markOff(1,16)"></td> <td id="team1square17" onclick="markOff(1,17)"></td> <td id="team1square18" onclick="markOff(1,18)"></td> <td id="team1square19" onclick="markOff(1,19)"></td> <td id="team1square20" onclick="markOff(1,20)"></td> </tr> <tr> <td id="team1square21" onclick="markOff(1,21)"></td> <td id="team1square22" onclick="markOff(1,22)"></td> <td id="team1square23" onclick="markOff(1,23)"></td> <td id="team1square24" onclick="markOff(1,24)"></td> <td id="team1square25" onclick="markOff(1,25)"></td> </tr>';
team2Board = '<tr> <td id="team2square1" onclick="markOff(2,1)"></td> <td id="team2square2" onclick="markOff(2,2)"></td> <td id="team2square3" onclick="markOff(2,3)"></td> <td id="team2square4" onclick="markOff(2,4)"></td> <td id="team2square5" onclick="markOff(2,5)"></td> </tr> <tr> <td id="team2square6" onclick="markOff(2,6)"></td> <td id="team2square7" onclick="markOff(2,7)"></td> <td id="team2square8" onclick="markOff(2,8)"></td> <td id="team2square9" onclick="markOff(2,9)"></td> <td id="team2square10" onclick="markOff(2,10)"></td> </tr> <tr> <td id="team2square11" onclick="markOff(2,11)"></td> <td id="team2square12" onclick="markOff(2,12)"></td> <td id="team2square13" onclick="markOff(2,13)"></td> <td id="team2square14" onclick="markOff(2,14)"></td> <td id="team2square15" onclick="markOff(2,15)"></td> </tr> <tr> <td id="team2square16" onclick="markOff(2,16)"></td> <td id="team2square17" onclick="markOff(2,17)"></td> <td id="team2square18" onclick="markOff(2,18)"></td> <td id="team2square19" onclick="markOff(2,19)"></td> <td id="team2square20" onclick="markOff(2,20)"></td> </tr> <tr> <td id="team2square21" onclick="markOff(2,21)"></td> <td id="team2square22" onclick="markOff(2,22)"></td> <td id="team2square23" onclick="markOff(2,23)"></td> <td id="team2square24" onclick="markOff(2,24)"></td> <td id="team2square25" onclick="markOff(2,25)"></td> </tr>';

document.getElementById("word_guessed").onsubmit = function(){
	event.preventDefault();
	guessWord = document.getElementById("guess_word");
	socket.emit('word to board', guessWord.value);
	if(fiveletterWords.includes(guessWord.value)){
		guessWord.className = 'valid';
	} else {
		guessWord.className = 'invalid';
	}
};
document.getElementById("bonusLetter").onclick = function(){
	roundType = getRoundType();
	roundType = parseInt(roundType);
	bonusAllow = true;
	if(roundType == 2){
		bonusLetterNum = parseInt(document.getElementsByName("bonusLetters")[0].value);
		if(bonusLetterNum == 0){
			bonusAllow = false;
		} else {
			bonusLetterNum = bonusLetterNum - 1;
			document.getElementsByName("bonusLetters")[0].value = bonusLetterNum;
			syncBonus();
		}
	}
	if(bonusAllow){
		masterWord = document.getElementById("actual_word").value;
		socket.emit('give bonus letter', masterWord);
	}
};
document.getElementById("startWord").onclick = function(){
	masterWord = document.getElementById("actual_word").value;
	roundType = getRoundType();
	roundType = parseInt(roundType);
	socket.emit('start the word', masterWord, roundType);
};
document.getElementById("checkWord").onclick = function(){
	guessWord = document.getElementById("guess_word").value;
	masterWord = document.getElementById("actual_word").value;
	roundType = getRoundType();
	roundType = parseInt(roundType);
	socket.emit('check the word', guessWord, masterWord, roundType);
	document.getElementById("guess_word").value = "";
	document.getElementById("guess_word").className = "";
};
document.getElementById("revealWord").onclick = function(){
	masterWord = document.getElementById("actual_word").value;
	socket.emit('reveal the word', masterWord);
};
document.getElementById("newLineBonus").onclick = function(){
	masterWord = document.getElementById("actual_word").value;
	socket.emit('new line bonus', masterWord);
};
document.getElementById("newLine").onclick = function(){
	masterWord = document.getElementById("actual_word").value;
	socket.emit('new line', masterWord);
};
function resetBoard(typeReset,teamNumber){
	if(typeReset == 1){
		document.getElementById("actual_word").className = '';
		document.getElementById("actual_word").value = '';
		document.getElementById("guess_word").value = "";
		document.getElementById("guess_word").className = "";
	}
	socket.emit('reset board', typeReset, teamNumber);
}
document.getElementById("getWord").onclick = function(){
	document.getElementById("actual_word").className = 'mask';
	document.getElementById("actual_word").value = getWord(fiveletterWords);
};
document.getElementById("display_master").onclick = function(){
	document.getElementById("actual_word").className = '';
};
document.getElementById("hide_master").onclick = function(){
	document.getElementById("actual_word").className = 'mask';
};
function addScore(team,type){
	currentScore = document.getElementById("team"+team+"score").value;
	if(type !== 3){
		mainroundType = parseInt(getmainRoundType());
		if(type == 1){
			basePoints = 25;
		}
		if(type == 2){
			basePoints = 50;
		}
		if(type == 3){
			basePoints = 100;
		}
		newPoints = parseInt(basePoints) * parseInt(mainroundType);
		newScore = parseInt(currentScore) + parseInt(newPoints);
		document.getElementById("team"+team+"score").value = newScore;
	} else {
		newScore = currentScore;
	}
	socket.emit('sync score', team, newScore);
};
function getRoundType(){
	var ele = document.getElementsByName('roundType'); 
	for(i = 0; i < ele.length; i++) { 
		if(ele[i].checked){
			roundType = ele[i].value;
		}	
	}
	return roundType;
}
function getmainRoundType(){
	var ele = document.getElementsByName('mainroundType'); 
	for(i = 0; i < ele.length; i++) { 
		if(ele[i].checked){
			roundTypeRound = ele[i].value;
		}	
	}
	return roundTypeRound;
}
function markOff(team,square){
	var elem = document.getElementById('team'+team+'square'+square);
	if(elem.classList.contains("markoff")){
		elem.className = '';
		typeMarkoff = 2;
	} else {
		elem.className = 'markoff';
		typeMarkoff = 1;
	}
	socket.emit('mark square', team,square,typeMarkoff);
}
function getWord(items){
	var randomIndex = Math.floor(Math.random() * items.length);
// 	items = items.splice(randomIndex, 1)[0];
	return items[randomIndex].toUpperCase();
}
function getBoard(team){
	roundType = getRoundType();
	roundType = parseInt(roundType);
	mainroundType = parseInt(getmainRoundType());
	theBoard = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	if(team == 1){
		team1Hopper = [];
		team1Numbers = [];
		numbersPossible = [[1,3,5,7,9,11,13,15],[17,19,21,23,25,27,29],[31,33,35,37,39,41,43,45],[47,49,51,53,55,57,59],[61,63,65,67,69,71,73,75]];
	}
	if (team == 2){
		team2Hopper = [];
		team2Numbers = [];
		numbersPossible = [[2,4,6,8,10,12,14],[16,18,20,22,24,26,28,30],[32,34,36,38,40,42,44],[46,48,50,52,54,56,58,60],[62,64,66,68,70,72,74]];
	}
	for(x=0;x<numbersPossible.length;x++){
		thisColumn = numbersPossible[x];
		for(y=0;y<5;y++){
			var randomIndex = Math.floor(Math.random() * thisColumn.length);
			var randomItem = thisColumn.splice(randomIndex, 1)[0];
			var squarePos = (x+1) + (y * 5);
			document.getElementById('team'+team+'square'+squarePos).innerHTML = randomItem;
			if(team == 1){
				team1Numbers.push(randomItem);
			}
			if(team == 2){
				team2Numbers.push(randomItem);
			}
			theBoard[squarePos-1] = randomItem;
		}
	}
	randomMarkoff = Math.floor(Math.random() * 5);
	if(roundType == 1){
		markoffBoard = markoffStarters[randomMarkoff];
	} else {
		markoffBoard = markoffStartersBonus[randomMarkoff];
	}
	for(x=0;x<markoffBoard.length;x++){
		boardSpace = markoffBoard[x] + 1;
		document.getElementById('team'+team+'square'+boardSpace).className = 'markoff';
	}
	for(x=1;x<26;x++){
		if(!document.getElementById('team'+team+'square'+x).classList.contains("markoff")){
			if(team == 1){
				team1Hopper.push(document.getElementById('team'+team+'square'+x).innerHTML);
			}
			if (team==2){
				team2Hopper.push(document.getElementById('team'+team+'square'+x).innerHTML);
			}
		}
	}
	if(roundType == 1){
		if(team == 1){
			team1Hopper.push("X");
			team1Hopper.push("X");
			team1Hopper.push("X");
		}
		if (team==2){
			team2Hopper.push("X");
			team2Hopper.push("X");
			team2Hopper.push("X");
		}
	}
	mainroundType = parseInt(mainroundType);
	if(roundType == 1 && mainroundType > 1){
		addQuestion(team);
	}
	socket.emit('generate board', team,theBoard,markoffBoard);
}
function addQuestion(team){
	if(team == 1){
		team1Hopper.push("?");
		team1Hopper.push("?");
		console.log(team1Hopper);
	}
	if (team==2){
		team2Hopper.push("?");
		team2Hopper.push("?");
		console.log(team2Hopper);
	}
}
function clearBoard(team){
	if(team == 1){
		team1Numbers = [];
	}
	if(team == 2){
		team2Numbers = [];
	}
	for(x=0;x<5;x++){
		for(y=0;y<5;y++){
			var squarePos = (x+1) + (y * 5);
			document.getElementById('team'+team+'square'+squarePos).innerHTML = "";
			document.getElementById('team'+team+'square'+squarePos).className = '';
		}
	}	
	socket.emit('clear board', team);
}
socket.on('shuffleTheHopper',function(team) {
	shuffleHopper(team);
});
socket.on('drawTheBall',function(team) {
	displayBall(team);
});
function shuffleHopper(team){
	if(team == 1){
		theHopper = team1Hopper;
	}
	if(team == 2){
		theHopper = team2Hopper;
	}
	randomIndex = Math.floor(Math.random() * theHopper.length);
// 	var ballChosen = theHopper[randomIndex];
	if(team == 1){
// 		 team1Hopper.splice(randomIndex, 1);
	}
	if(team == 2){
// 		 team2Hopper.splice(randomIndex, 1);
	}
 	console.log(randomIndex);
}
function displayBall(team){
	if(team == 1){
		theHopper = team1Hopper;
	}
	if(team == 2){
		theHopper = team2Hopper;
	}
 	var ballChosen = theHopper[randomIndex];
	if(team == 1){
 		 team1Hopper.splice(randomIndex, 1);
	}
	if(team == 2){
 		 team2Hopper.splice(randomIndex, 1);
	}
	document.getElementById("team"+team+"ballnumber").innerHTML = ballChosen;
	socket.emit('display ball', team, ballChosen);
}
function unlockHopper(team){
	document.getElementById("team"+team+"ballnumber").innerHTML = "";
	socket.emit('unlock hopper', team);
}
function showHopper(team){
	socket.emit('show hopper', team);
}
function hideHopper(team){
	socket.emit('hide hopper', team);
}

//CHECK USERNAME AND KEY
socket.on('checkUsername',function(userSend) {
	if(userSend[1] == document.getElementsByName("team1pascode")[0].value && !player1Set){
		document.getElementsByName("team1name1")[0].value = userSend[0];
		player1Set = true;
		socket.emit('logged in', [1,userSend[2],userSend[0]]);
	}
	if(userSend[1] == document.getElementsByName("team2pascode")[0].value && !player2Set){
		document.getElementsByName("team2name1")[0].value = userSend[0];
		player2Set = true;
		socket.emit('logged in', [2,userSend[2],userSend[0]]);
	}
});

function timerAction(typeAction){
	theTimer = document.getElementsByName("timerAmount")[0].value;
	socket.emit('timer action', typeAction,theTimer);
}

function syncBonus(){
	rightNumber = parseInt(document.getElementsByName("bonusCorrect")[0].value);
	bonusNumber = parseInt(document.getElementsByName("bonusLetters")[0].value);
	socket.emit('sync bonus', rightNumber,bonusNumber);
}

function bonusCorrect(){
	bonusNumber = parseInt(document.getElementsByName("bonusCorrect")[0].value);
	bonusNumber = bonusNumber + 1;
	document.getElementsByName("bonusCorrect")[0].value = bonusNumber;
	resetBoard(1,1);
	syncBonus();
}