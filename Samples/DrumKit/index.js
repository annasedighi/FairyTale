let nowPlaying;
let nowActive;
let isPlaying = false;
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (audio) {
        if (nowPlaying) {
            nowPlaying.pause();
            nowActive.classList.remove('playing');
        }

        nowPlaying = audio;
        nowPlaying.play();
        isPlaying = true;
        nowActive = key;
        nowActive.classList.add('playing');
    } else if (e.keyCode == 32 && nowPlaying) {
        togglePlay();
    }
});

function togglePlay() {
    if (isPlaying) {
        nowPlaying.pause();
        nowActive.classList.remove('playing');
    } else {
        nowPlaying.play();
        nowActive.classList.add('playing');
    }
    
    isPlaying = !isPlaying;
};
