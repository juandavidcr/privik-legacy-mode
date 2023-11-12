var ie = false;
function stopNowRandom(){
		stopNow();
		if (!_quiz) // dictation practice or quiz??
			timeID = setTimeout("randomGenerator()", delay* 1000);
}

function choose(value){
	document.getElementById("correctletter").innerHTML = generateHeader(letterIndex * 2) + letterArray[letterIndex] + "</a>";
	document.getElementById("correctword").innerHTML = generateHeaderPlay(letterIndex  * 2 + 1) + wordArray[letterIndex]  + "</a>";
	if (value == letterIndex){
		document.getElementById("answerright").innerHTML = "<img src='/images/check.gif' width='16' height='25'>";
		removeLetter(currentIndex)
		document.getElementById("wrongletter").innerHTML = ""
		document.getElementById("wrongword").innerHTML = ""
		document.getElementById("answerleft").innerHTML = ""
		document.getElementById("complete").innerHTML =  "";
		randomGenerator()
	}
	else{
		missed++;
		document.getElementById("answerright").innerHTML = "<img src='/images/arrow2.gif' width='11' height='13'>";
		document.getElementById("answerleft").innerHTML = "<img src='/images/x3.gif' width='11' height='13'>";
		document.getElementById("wrongletter").innerHTML = generateHeader(value * 2) + letterArray[value] + "</a>"
		document.getElementById("wrongword").innerHTML = generateHeaderPlay(value  * 2 + 1) + wordArray[value] +"</a>"
		document.getElementById("complete").innerHTML =  "";
			setTimeout("randomGenerator()", delay*1000);
	 }
}
function choose2(one, two){
	if (one == letterIndex || two == letterIndex)
		choose(letterIndex);
	else choose(one)
}
function removeLetter(currentIndex){
		tempArray = currentArray.slice(0, currentIndex);
		tempArray2 = currentArray.slice(currentIndex + 1, currentArray.length);
		currentArray = tempArray.concat(tempArray2);
}
currentvalue = -1;
function playSound( value){
	if (clearid != -1)
		window.clearTimeout(clearid)
	//if (currentvalue != value){

		currentvalue = value;
		toPlay= times[value];
		if (timeID != 0){
			window.clearTimeout(timeID)
		}
		playSoundSegment(toPlay, times[value + 1])
}
function play(evt,  value){

	playSound( value)
	value = value - 1;
	value = value / 2;
	//popUp(evt,"A"+value)
	playAndShowId(evt, value);
}

function playAndShowId(evt, id){	
	var showPopup = true;
	if (showPopup) {
		var popUp = document.getElementById('A'+ id);
		var textToDisplay = popUp.innerHTML;
		//var grammar = popUp.getAttribute("grammar");
			
		/*if (showTranslation) {
			popUp = document.getElementById('T'+ id);
			if (popUp != null)
				textToDisplay = textToDisplay  + "<br /><em>(" +  popUp.innerHTML + ")</em>";;
			//alert(textToDisplay);
		}*/
		showtip(evt, textToDisplay, null);
	}
}

function showtip(evt, text, grammar) { 
	tip = document.getElementById("popup");
	tip.innerHTML = text;
	tip.style.visibility = 'visible';
	/*if (grammar != null) {
		if (grammar == 'm') {
			tip.style.backgroundColor = "#DDDDFF";
		}
		else if (grammar == 'f') {
			tip.style.backgroundColor = "#FFDDDD";
		}
		else {
			tip.style.backgroundColor = "#DDFFDD";
		}
	}*/
	showing = true;
	//alert(document.getElementById("fucker").offsetTop);
	position(evt, tip, 10, 20);
}

var tip;
var ns6;
var ie;
var showing = false;
var offsetfromcursorX=2;//10; //Customize x offset of tooltip
var offsetfromcursorY=2;//20; //Customize y offset of tooltip

function ietruebody() {
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
}

function position(e, popup, offsetfromcursorX, offsetfromcursorY) {
		var nondefaultpos=false;
		var curX=(ns6)?e.pageX : event.clientX+ietruebody().scrollLeft;
		var curY=(ns6)?e.pageY : event.clientY+ietruebody().scrollTop;
		//Find out how close the mouse is to the corner of the window
		var winwidth=ie&&!window.opera? ietruebody().clientWidth : window.innerWidth-20;
		var winheight=ie&&!window.opera? ietruebody().clientHeight : window.innerHeight-20;
	
		var rightedge=ie&&!window.opera? winwidth-event.clientX-offsetfromcursorX : winwidth-e.clientX-offsetfromcursorX;
		var bottomedge=ie&&!window.opera? winheight-event.clientY-offsetfromcursorY : winheight-e.clientY-offsetfromcursorY;
	
		var leftedge=(offsetfromcursorX<0)? offsetfromcursorX*(-1) : -1000;
	
		//if the horizontal distance isn't enough to accomodate the width of the context menu
		if (rightedge<popup.offsetWidth) {
		//move the horizontal position of the menu to the left by it's width
			popup.style.left=curX-popup.offsetWidth+"px";
			nondefaultpos=true;
		}
		else if (curX<leftedge)
		{popup.style.left="5px";}
		else {
		//position the horizontal position of the menu where the mouse is positioned
			popup.style.left=curX+offsetfromcursorX+"px";
		//pointerobj.style.left=curX+offsetfromcursorX+"px";
		}
	
		//same concept with the vertical position
		if (bottomedge<popup.offsetHeight) {
			popup.style.top=curY-popup.offsetHeight-offsetfromcursorY+"px";
			nondefaultpos=true;
		}
		else {
			popup.style.top=curY+offsetfromcursorY+"px";
		}
}

document.onmousemove=positiontip;

function positiontip(evt) {	
	if (showing) {
		position(evt, tip, 10, 20);
	}
}

function popUp(evt, ggg) { 
	id = ggg
	if (ie){
		if (document.body.clientHeight < evt.y + 60){
			xy = parseInt(evt.y) - 60
		}
		else xy = parseInt(evt.y)
		if (document.body.clientWidth < evt.x + 151){
			xc = parseInt(evt.x) - 150
		}
		else xc = parseInt(evt.x)
		popUpWin = eval(docObj + ggg + styleObj)
		 popUpWin.top = xy + 23 + document.body.scrollTop
		popUpWin.left = Math.max(2, xc) + 5 
		popUpWin.visibility = "visible"  
		popUpWin.status = ""
	}
    else{
        if (window.innerWidth < evt.pageX + 310){
			xc = evt.pageX - 301
		}
		else xc = evt.pageX
		if (window.innerHeight  + window.pageYOffset < evt.pageY + 50){
			xy = evt.pageY - 40
	
		}
		else xy = evt.pageY  + 30
		document.getElementById(id).style.top = xy;
		document.getElementById(id).style.left = xc +3; 
		document.getElementById(id).style.visibility = 'visible'
	}
}

function playLetter(){
	playSound(letterIndex *2 )
}

function copyOriginalArray(){
	size = originalArray.length;
	newArray = new Array()
	for (y = 0; y < size; y++){
		 newArray.push(originalArray[y]);
	}
	return newArray;
}

function randomize(){
	reorder = copyOriginalArray();
	currentValue = 0;
	oldButtonLocations = new Array()
	for (i = startValue; i < startValue + reorder.length; i++){
		id = "loc" + i;
		here = document.getElementById(id).innerHTML
		oldButtonLocations.push(here);	
	}
	while (reorder.length != 0){
			index = Math.floor(Math.random() * reorder.length);
			reorderIndex = reorder[index];
			id = "loc" + reorderIndex;
			//alert(id)
			document.getElementById(id).innerHTML = oldButtonLocations[currentValue];
			tempArray = reorder.slice(0, index);
			if (index == 0){
				reorder.shift();
			}
			else if (index == reorder.length){
				reorder.pop();
			}
			else{
				tempArray2 = reorder.slice(index + 1, reorder.length);
				reorder = tempArray.concat(tempArray2);
			}
			currentValue++;
	}
}



var timeID = 0


function next(){
	randomGenerator()
}


	
var originalArray = new Array();

var currentArray = originalArray.reverse();

var checkerid;

var playing = true;
 var letterIndex = -1;
var oldIndex = -2;

var id;
var clearid = -1;

function clearID(){
	currentvalue = -1;
}

function pd() {
	//clearid = setTimeout("clearID()",200);
	//document.getElementById(id).style.visibility =  "hidden"
	
	if (tip != null) {
		tip.style.visibility =  "hidden"	
		showing = false;
	}
}

function generateHeader(value){
	return "<a class='displayshape' onmouseover='playSound(" + value + ")'>";
}

function generateHeaderPlay(value){
	return "<a class='displayshape' onmouseover='play(event, " + value + ")' onmouseout='pd()' >";
}


function setDisplayedValues(letterIndex){
	let = letterArray[letterIndex];
	document.getElementById("letter").innerHTML = let
	document.getElementById("word").innerHTML = wordArray[letterIndex];
}
var delay = 2;

function init(){
	
	setPlayerVariable();
	loaded = true;
	console.log("init");
	player.addEventListener('canplaythrough', randomGenerator, false);
	
}

function alphaQuiz(){
	
	_quiz = true;
	for (i = 0; i < groups; i++){
			active.push(true);
	}

	for (n = 0; n < total; n++){
		originalArray.push(n);
	}
	init()
}
var startValue = 0;
function alphaQuiz2(){
	_quiz = true;
	groups = 0;
	for (n = startValue; n < endValue; n++){
		originalArray.push(n);
	}
	init()
}


function advance(){
	removeLetter(currentIndex);
	getLetterIndex();
	randomGenerator();
	//pd()
	if (hidden){
			
			document.getElementById("show_button").disabled = false;
			document.getElementById("letter").style.visibility = "hidden";
			document.getElementById("word").style.visibility = "hidden";
			document.getElementById("show_button").focus();
	}
}

function startShow(){
	init();
	_quiz = true;
	_slideshow = true;
	for (i = 0; i < groups; i++){
		active.push(true);
	}
	for (n = 0; n < total; n++){
		originalArray.push(n);
	}
	document.getElementById("show_button").focus();
	getLetterIndex();
	//randomGenerator();

}
function startShow2(){
	_slideshow = true;
	groups = 0;
	for (n = startValue; n < endValue; n++){
		originalArray.push(n);
	}
	document.getElementById("show_button").focus();
	getLetterIndex();
	init();
}


var _slideshow = false;
var letterIndex;
var currentIndex; 
var missed = 0;
function getLetterIndex(){
	totalcurrent = currentArray.length;
	
	if (totalcurrent == 0){
		currentArray = originalArray.reverse();
		for (z =0; z < groups; z++){
			if (!active[z]){
				remove(z);
					
			}
		}
		totalcurrent = currentArray.length;
		if (!_slideshow){
			if (missed == 0)
				document.getElementById("complete").innerHTML =  "<img src='../../images/goldenstar.gif' width='39' height='38'>";
			else if (missed == 1)
				 document.getElementById("complete").innerHTML =  "<img src='../../images/bluestar.gif' width='39' height='38'>";
			else 
				 document.getElementById("complete").innerHTML =  "<img src='../../images/redstar.gif' width='39' height='38'>";
		}
		missed = 0;
	}
	currentIndex = Math.floor(Math.random() * totalcurrent);
	letterIndex = currentArray[currentIndex];
	while (oldIndex == letterIndex & totalcurrent > 1){
		currentIndex = Math.floor(Math.random() * totalcurrent);
		letterIndex = currentArray[currentIndex];
	}
	oldIndex = letterIndex;
}

function randomGenerator(){
		console.log("random");
		getLetterIndex();
		console.log("letter" + letterIndex);
		toPlay= times[letterIndex *2 ];
		//alert("toPlay" + toPlay);
		playAt(toPlay)
		console.log("playing" + toPlay);
		//stop =  - toPlay;
   		playSoundSegment(toPlay,times[letterIndex *2 + 1]); 
		
		if (timeID != 0)
			window.clearTimeout(timeID)
		//alert("stop" + stop);
		//console.log("stopping" + stop);
		//timeID = setTimeout(stopNowRandom, stop * 1000);
		if (_slideshow){
			document.getElementById("letter").innerHTML = generateHeader(letterIndex * 2) + letterArray[letterIndex] + "</a>";
			document.getElementById("word").innerHTML = generateHeaderPlay(letterIndex  * 2 + 1) + wordArray[letterIndex]  + "</a>";
		}
}



function isAvailable(value){

	return active[value];

}

function remove(group){

	if (group == 0){
		start = 0;
	}
	else{
		start = range[group - 1];
	}
	end = range[group]
	var temp = new Array()
	for (i = 0; i < currentArray.length; i++){
		value = currentArray[i];
		if (value < start ||  value >= end){
			temp.push(value)
		
		}
		else{
			
			jj = "letter" + value	
			if (!_slideshow)
				document.getElementById(jj).style.visibility = "hidden"

		}
	}
	currentArray = temp;

}
function show(){
		document.getElementById("letter").style.visibility = "visible";
		document.getElementById("word").style.visibility = "visible";
		document.getElementById("advance").focus();
		document.getElementById("show_button").disabled = "true";
		//alert(getElementByID("show_button"));
}
var hidden = true;
function hide(elem){

		if (!elem.checked){
			hidden = true;
			document.getElementById("show_char").innerHTML = "<input type='submit' id='show_button' name='Submit' value='Show Character' onClick='show()'>";
			document.getElementById("show_char").style.visibility = "visible";
			document.getElementById("letter").style.visibility = "hidden";
			document.getElementById("word").style.visibility = "hidden";
			document.getElementById("show_button").focus();
		}
		else{
			hidden = false;
			document.getElementById("letter").style.visibility = "visible";
			document.getElementById("word").style.visibility = "visible";
			document.getElementById("show_char").innerHTML = "";
			document.getElementById("show_char").style.visibility = "hidden";
			document.getElementById("advance").focus();
		}
}

function addRanges(start, finish){
	for (i = start; i < finish; i++){
		currentArray.push(i);	
	}
}

function add(group){
	if  (group == 0){
		addRanges(0,range[group]);
		for (i = 0; i < range[group]; i++){
			jj = "letter" + i;
			document.getElementById(jj).style.visibility = "visible"
		}
	}
	else {
			if (group == 0){
				start = 0;
			}
			else  start = range[group-1];
			addRanges(start, range[group]);
			for (i = start; i < range[group]; i++){
				jj = "letter" + i;
				if (!_slideshow)
				document.getElementById(jj).style.visibility = "visible"
			}

	}

}
active = new Array();
function changeGroup(element){

	if (element.checked){
	
		active[element.value] = true;
		add(element.value);		
	}
	else{

		active[element.value] = false;
		// check to see that at least one group is active
		activated = false;
		for (i = 0; i < active.length; i++){
			if (active[i] == true)
				activated = true;
		}
		if (!activated){
			active[element.value] = true;
			element.checked = true;
			return;		
		}
		remove(element.value);	
		randomGenerator();
	}

}