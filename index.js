var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var express = require('express');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/extras', (req, res) => {
  res.sendFile(__dirname + '/extras.html');
});

app.get('/player', (req, res) => {
  res.sendFile(__dirname + '/hopper.html');
});

app.get('/word', (req, res) => {
  res.sendFile(__dirname + '/board.html');
});

app.get('/bingo', (req, res) => {
  res.sendFile(__dirname + '/bingo.html');
});

app.get('/controls', (req, res) => {
  res.sendFile(__dirname + '/controls.html');
});

io.on('connection', function(socket){
	socket.on('word to board', function(word){
		io.emit('boardWord', word);
	});
	socket.on('start the word', function(word, round){
		io.emit('startWord', word, round);
	});
	socket.on('check the word', function(guess, word, round){
		io.emit('checkWord', guess, word, round);
	});
	socket.on('reveal the word', function(word){
		io.emit('revealWord', word);
	});
	socket.on('new line bonus', function(word){
		io.emit('newLineBonus', word);
	});
	socket.on('give bonus letter', function(word){
		io.emit('bonusLetter', word);
	});
	socket.on('new line', function(word){
		io.emit('newLine', word);
	});
	socket.on('reset board', function(typeReset, teamNumber){
		io.emit('resetBoard', typeReset, teamNumber);
	});
	socket.on('generate board', function(teamNumber, theBoard,markoffBoard){
		io.emit('generateBoard', teamNumber, theBoard, markoffBoard);
	});
	socket.on('mark square', function(teamNumber, squareNumber,typeMarkoff){
		io.emit('markoffSquare', teamNumber, squareNumber,typeMarkoff);
	});
	socket.on('shuffle hopper', function(teamNumber){
		io.emit('shuffleTheHopper', teamNumber);
	});
	socket.on('draw ball', function(teamNumber){
		io.emit('drawTheBall', teamNumber);
	});
	//CHECK GAMECODE AND LOGIN
	socket.on('login player', function(data){
		sendData = [data[0],data[1],data[2]];
		io.emit('checkUsername', sendData);
		if (gameCode == data[1]){
			socket.join(gameCode);
		}
	});
	//PLAYER HAS LOGGED IN
	socket.on('logged in', function(playerVal){
		socket.broadcast.to(playerVal[1]).emit('standbyGame', playerVal);
		io.emit('newPlayerHost', playerVal);
	});
	socket.on('show hopper', function(teamNumber){
		io.emit('showTheHopper', teamNumber);
	});
	socket.on('hide hopper', function(teamNumber){
		io.emit('hideTheHopper', teamNumber);
	});
	socket.on('unlock hopper', function(teamNumber){
		io.emit('unlockTheHopper', teamNumber);
	});
	socket.on('display ball', function(teamNumber, theBall){
		io.emit('displayTheBall', teamNumber, theBall);
	});
	socket.on('clear board', function(teamNumber){
		io.emit('clearTheBoard', teamNumber);
	});
	socket.on('timer action', function(timerType, theTimer){
		io.emit('timerActivate', timerType, theTimer);
	});
	socket.on('sync score', function(team, score){
		io.emit('syncScore', team, score);
	});
	socket.on('bonus correct', function(bonusScore){
		io.emit('bonusRight', bonusScore);
	});
	socket.on('sync bonus', function(rightScore,bonusScore){
		io.emit('syncBonusRound', rightScore,bonusScore);
	});
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});


function getUserID(length){
	var result           = '';
   var characters       = '0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   if(userIds.indexOf(result) !== -1){
	   getUserID(6)
	} else {
		return result;	
	}
}

function makeid(length) {
   var result           = '';
   var characters       = '0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

var gameCode = makeid(6);