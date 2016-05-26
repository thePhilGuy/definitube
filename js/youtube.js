// loaded url global variable
var loadedURL = '0vrdgDdPApQ';

// Load YouTube IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Initialize Player IFrames
var player;
var player2;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
	  height: '324',
	  width: '576',
	  playerVars: {'controls': 0, 'showinfo': 0},
	  videoId: loadedURL,
	  suggestedQuality: 'hd1080',
	  events: {
	    'onReady': onPlayerReadyHigh,
	    'onStateChange': onPlayerStateChange
	  }
	});
	player2 = new YT.Player('player2', {
	  height: '324',
	  width: '576',
	  playerVars: {'controls': 0, 'showinfo': 0},
	  videoId: loadedURL,
	  suggestedQuality: 'small',
	  events: {
	    'onReady': onPlayerReadyLow,
	    'onStateChange': onPlayerStateChange
	  }
	});
}

// Set left player quality
function onPlayerReadyHigh(event) {
	event.target.setPlaybackQuality('hd1080');
}

// Set right player quality
function onPlayerReadyLow(event) {
	event.target.setPlaybackQuality('small');
}

var eventCounter = 0;
var player1_state = -1;
var player2_state = -1;
function onPlayerStateChange(event) {

	// if either goes into buffering, pause the other.

	// Once it starts playing again, play the one that was paused.

	eventCounter++;
	console.log(eventCounter + ' -- player: ' + event.target.a.id + ' state: ' + event.data);
	if (event.target.a.id === 'player') {
		player1_state = event.data;
		console.log(eventCounter + ' -- player: ' + event.target.a.id + ' state set to: ' + player1_state);
		// Lower definition side waited for us
		if (player1_state == 1 && player2_state == 2) {
			// Play
			player2.playVideo();
		}
	} else {
		player2_state = event.data;
		console.log(eventCounter + ' -- player: ' + event.target.a.id + ' state set to: ' + player2_state);
		// Higher definition side is still loading
		if (player2_state == 1 && player1_state == 3) {
			// Pause
			player2.pauseVideo();
		}
	}
}

/* Play button
// Acts on both videos
*/
function playVideos() {
    var p = document.createElement('p');
    var t = document.createTextNode("Played!");
    p.appendChild(t);
    document.body.appendChild(p);

    player.playVideo();
    player2.playVideo();
}

function pauseVideos() {
    var p = document.createElement('p');
    var t = document.createTextNode("Paused!");
    p.appendChild(t);
    document.body.appendChild(p);

    player2.pauseVideo();
    player.pauseVideo();
}
