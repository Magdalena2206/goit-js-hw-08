import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('vimeo-player');

const currentTimeKey = 'video-current-time';

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(currentTimeKey, JSON.stringify(seconds));
};
player.on('timeupdate', throttle(getCurrentTime, 1000))
.setCurrentTime(JSON.parse(localStorage.getItem(currentTimeKey)) || 0)

.catch(function (error) { console.error(error) });



