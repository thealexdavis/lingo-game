var loginbtn = document.getElementById("login_player");
var gamecode = document.getElementById("gamecode");
hopperStandby = '<div id="theball"></div><button id="shuffleButton" onclick="shuffleHopper()">SHUFFLE</button><button id="drawButton" onclick="drawBall()">DRAW</button>';
var gameMainStage = document.getElementById("main_container");
standbyTemplate = '<img src="/img/logo.png" class="standbylogo">';
blueBallStandby = '<div class="blue balldisplay"><span class="number" id="ballNumber"></span></div>';
redBallStandby = '<div class="red balldisplay"><span class="number" id="ballNumber"></span></div>';
goldBallStandby = '<div class="gold balldisplay"><span class="number" id="ballNumber"></span></div>';
greenBallStandby = '<div class="green balldisplay"><span class="number" id="ballNumber"></span></div>';
whiteBallStandby = '<div class="white balldisplay"><span class="number" id="ballNumber"></span></div>';
yellowBallStandby = '<div class="yellow balldisplay"><span class="number" id="ballNumber"></span></div>';
purpleBallStandby = '<div class="purple balldisplay"><span class="number" id="ballNumber"></span></div>';
playerNum = 0;
hopperLock = true;
function shuffleHopper(){
	//GET PLAYER NUMBER IN HERE LATER
	if(!hopperLock){
		socket.emit('shuffle hopper', playerNum);
		document.getElementById("shuffleButton").blur();
		document.activeElement.blur();
	}
}
function drawBall(){
	//GET PLAYER NUMBER IN HERE LATER
	if(!hopperLock){
		socket.emit('draw ball', playerNum);
		document.getElementById("drawButton").blur();
		hopperLock = true;
		document.activeElement.blur();
	}
}
//LOGIN START
loginbtn.addEventListener("click", login);
function login(event){
	loginbtn.blur();
	event.preventDefault();
 	myUserId = socket.id;
	myUserName = document.getElementById("username").value;
	gamecode = document.getElementById("gamecode").value;
	loginInfo = [myUserName, gamecode, myUserId];
	socket.emit('login player', loginInfo);
}
socket.on('standbyGame',function(data) {
	playerNum = data[0];
	gameMainStage.innerHTML = standbyTemplate;
	document.getElementById("header").className = 'loggedin';
	document.getElementById("playername").innerHTML = myUserName;
});
//LOGIN END
socket.on('showTheHopper',function(data) {
	if(data == playerNum){
		gameMainStage.innerHTML = hopperStandby;
		hopperLock = false;
	}
});
socket.on('hideTheHopper',function(data) {
	if(data == playerNum){
		gameMainStage.innerHTML = standbyTemplate;
		hopperLock = true;
	}
});
socket.on('unlockTheHopper',function(data) {
	if(data == playerNum){
		hopperLock = false;
		gameMainStage.innerHTML = hopperStandby;
	}
});
socket.on('displayTheBall',function(teamNum, theBall) {
	if(teamNum == playerNum){
		if(theBall == "X"){
			gameMainStage.innerHTML = redBallStandby;
		} else if(theBall == "?"){
			gameMainStage.innerHTML = whiteBallStandby;
		} else {
			gameMainStage.innerHTML = blueBallStandby;
		}
		document.getElementById("ballNumber").innerHTML = theBall;
	}
});