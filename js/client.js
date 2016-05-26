function getYoutubeVideoId(url) {
    var youtubeUrl = url.substring('https://www.youtube.com/watch?v='.length);
    return youtubeUrl;
}

function load_video() {
    var url = document.getElementById("youtube_url").value;
    url = getYoutubeVideoId(url);
    player.cueVideoById(url);
    player2.cueVideoById(url);
}
