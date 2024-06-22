timerActivated = false;
function startTimer(seconds, container, oncomplete) {
    var startTime, timer, obj, ms = seconds*1000,
        display = document.getElementById(container);
    obj = {};
    obj.resume = function() {
        startTime = new Date().getTime();
        timer = setInterval(obj.step,250); // adjust this number to affect granularity
                            // lower numbers are more accurate, but more CPU-expensive
    };
    obj.pause = function() {
        ms = obj.step();
        clearInterval(timer);
    };
    obj.step = function() {
        var now = Math.max(0,ms-(new Date().getTime()-startTime)),
            m = Math.floor(now/60000), s = Math.floor(now/1000)%60;
        s = (s < 10 ? "0" : "")+s;
        display.innerHTML = m+":"+s;
        console.log(now);
        if( now < 1000) {
            clearInterval(timer);
            obj.resume = function() {};
            if( oncomplete) oncomplete();
        }
        return now;
    };
    obj.resume();
    return obj;
}

// start:
/*
var timer = startTimer(1*15, "time", function() {
	document.getElementById("timer").className = "red";
});
// pause:
timer.pause();
// resume:
timer.resume();
*/

function convert(input) {
    var parts = input.split(':'),
        minutes = +parts[0],
        seconds = +parts[1];
    return (minutes * 60 + seconds).toFixed(3);
}

socket.on('timerActivate',function(timerType, theTimer) {
	if(timerType == 1){
		if(!timerActivated){
			timerActivated = true;
			timer = startTimer(convert(theTimer), "time", function() {
				document.getElementById("timer").className = "red";
			});
		} else {
			timer.resume();
		}
	}
	if(timerType == 2){
		timer.pause();
	}
	if(timerType == 3){
		document.getElementById("timer").className = '';
		document.getElementById("time").innerHTML = theTimer;
		timerActivated = false;
	}
});
socket.on('syncScore',function(team, score) {
	document.getElementById("p"+team+"score").innerHTML = score;
});
socket.on('syncBonusRound',function(right,bonus) {
	document.getElementById("correct_words").innerHTML = right;
	document.getElementById("bonus_leters").innerHTML = bonus;
});