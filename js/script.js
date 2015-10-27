// Load YouTube IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create both player iframes 
var leftPlayer, rightPlayer;
function onYoutubeIframeAPIReady() {
	leftPlayer = new YT.Player('leftPlayer', {
		// config leftPlayer
	});
	rightPlayer = new YT.Player('rightPlayer', {
		// config rightPlayer
	});
}

/* Play button
// Acts on both videos
*/
function playVideos() {
    var p = document.createElement('p');
    var t = document.createTextNode("Playing!");
    p.appendChild(t);
    document.body.appendChild(p);
    alert("haaaa");
}