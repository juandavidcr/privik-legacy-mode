var showMenu = true;
var html5 = true;
var subtractBy = 0;
var gecko = false;
var player;
var stopTime;
var hasChain = false;
var nextChainSegment;

function stopNow() {
	timeID = 0;
	player.pause();			
	playing = false;
	if (speakingQuiz) {
		setTimeout(selectNextSpeakingQuizElement, delay);
	}
	if (hasChain){
		hasChain = false;
		if (slowSeek) {
			setStopper(nextChainSegment.duration * 1000);
			playAt(nextChainSegment.start);
		}
		else{
			playAt(nextChainSegment.start);
			timeID = setTimeout(stopNow, nextChainSegment.duration *1000 );		
		}		
	}
}

function playChain(chain){
	if  (timeID != -1){
		clearTimeout(timeID);	
	}
	hasChain = true;
	nextChainSegment = chain[1];
	if (slowSeek) {
		setStopper(chain[0].duration * 1000);
		playAt(chain[0].start);
	}
	else{
		playAt(chain[0].start);
		timeID = setTimeout(stopNow, chain[0].duration *1000 );		
	}
}


function seekEvent() {
	player.play();
	timeID = setTimeout(stopNow, stopTime);
}

function setPlayerVariable() {
	player =  document.getElementsByTagName("audio")[0];
	if (player){
		if (navigator.userAgent.indexOf("Chrome") !== -1) { //  || navigator.userAgent.indexOf("Opera") != -1
			slowSeek = true;
			player.addEventListener("seeked", seekEvent, false);
		} else if (navigator.userAgent.indexOf("Firefox") != -1) {
			slowSeek = true;
			player.addEventListener("seeked", seekEvent, false);
			gecko = true;
		}
	
		player.play();
	
		if (player.readyState > 3) {
			stopAt(times[0] - .1);
			loadedVar = true;		
		} else {
			player.addEventListener("playing", function () {				
				if (!loadedVar) {
					stopAt(times[0] - .1);
					loadedVar = true;
				}
			}, true );
		}
	}
}
