import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTimeKey = 'video-current-time';

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(currentTimeKey, JSON.stringify(seconds));
};
player.on('timeupdate', throttle(getCurrentTime), 1000);
player.setCurrentTime(JSON.parse(localStorage.getItem(currentTimeKey)) || 0);

   player.catch(function (error) { console.error(error) });




    
      

