var $motionBox = $('.motion-box');
var $turret = $('img');
var $gameover = $('.game-over');
var scale = 10;	// capture resolution over motion resolution
var isActivated = false;
var isTargetInSight = false;
var isKnockedOver = false;
var lostTimeout;
var counterval = document.getElementById("counter");
var count=1;
var dead = false;
var timeleft = 30;

function initSuccess() {
	counter_func();
}

function initError() {
	alert('Something went wrong.');
}

function startComplete() {
	// setTimeout(activate, 500);
}

function activate() {
	isActivated = true;
	
}

function notactivate(){
	isActivated = false;
	play('activated');
}

function timer(){
			var downloadTimer = setInterval(function(){
  			if(timeleft <= 0 || dead == true){
    		clearInterval(downloadTimer);
  		}
  		document.getElementById("progressBar").value = 30 - timeleft;
  		timeleft -= 1;
		}, 1000);
}
function counter_func(){
	if(count==1)
		document.getElementById("counter").innerHTML = '3';
	else if(count==2)
		document.getElementById("counter").innerHTML = '2';
	else if(count==3)
		document.getElementById("counter").innerHTML = '1';
	else if(count==4)
		document.getElementById("counter").innerHTML = 'Start';
	else{
		document.getElementById("counter").innerHTML ="<br><br><Br><br>"
		DiffCamEngine.start();
		notactivate();
		timer();
		return;	
	}
	setTimeout(wait,1000);
}
function wait(){
	count++;
	console.log(count);
	counter_func();
}
function capture(payload) {
	// if (!isActivated || isKnockedOver) {
	// 	return;
	// }
	if(count!=5)
		return;

	if(timeleft <= 0){
		console.log("here");
		$gameover.css({
			display: 'block',
		});
		document.getElementById("won_lose").style.color="lightgreen";
		document.getElementById("won_lose").innerHTML = "You Won";
		pause('activated');
		myStopFunction();
	}

	setTimeout(activate,4000);
	if(isActivated){
	var box = payload.motionBox;
	if (box) {
		// video is flipped, so we're positioning from right instead of left
		var right = box.x.min * scale + 1;
		var top = box.y.min * scale + 1;
		var width = (box.x.max - box.x.min) * scale;
		var height = (box.y.max - box.y.min) * scale;

		$motionBox.css({
			display: 'block',
			right: right,
			top: top,
			width: 200,
			height: 200
		});

		// if (!isTargetInSight) {
		// 	isTargetInSight = true;
		// 	play('i-see-you');
		// } else {
			pause('i-see-you');
			play('fire');
			dead = true;
			const myTimeout = setTimeout(myStopFunction, 1000);
			

		$gameover.css({
			display: 'block',
		});

		// }

		// clearTimeout(lostTimeout);
		// lostTimeout = setTimeout(declareLost, 2000);

	}
		play('i-see-you');
		setTimeout(notactivate,4000);

	}

	// video is flipped, so (0, 0) is at top right
	if (payload.checkMotionPixel(0, 0)) {
		knockOver();
	}
}

function myStopFunction() {
	$motionBox.hide();
	pause('i-see-you');
	pause('activated');

	DiffCamEngine.stop();

}
function declareLost() {

	isTargetInSight = false;
	play('target-lost');
}

// function knockOver() {
// 	isKnockedOver = true;
// 	clearTimeout(lostTimeout);

// 	$turret.addClass('knocked-over');
// 	$motionBox.hide();

// 	play('ow');
// }

function play(audioId) {
	$('#audio-' + audioId)[0].play();
}
function pause(audioId) {
	$('#audio-' + audioId)[0].pause();
}
DiffCamEngine.init({
	video: document.getElementById('video'),
	// captureIntervalTime: 50,
	includeMotionBox: true,
	includeMotionPixels: true,
	initSuccessCallback: initSuccess,
	initErrorCallback: initError,
	startCompleteCallback: startComplete,
	captureCallback: capture
});
