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
	  videoId: 'ht2TigJp88w',
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
	  videoId: 'ht2TigJp88w',
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

function onPlayerStateChange(event) {

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