import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(handleTimeupdate, 1000));

function handleTimeupdate() {
  player
    .getCurrentTime()
    .then(currentTime => localStorage.setItem(LOCALSTORAGE_KEY, currentTime));
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);
