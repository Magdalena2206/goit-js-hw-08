import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTimeKey = 'video-current-time';

player.on('timeupdate', throttle(getCurrentTime), 1000);
const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(currentTimeKey, JSON.stringify(seconds));
};
player.setCurrentTime(JSON.parse(localStorage.getItem(currentTimeKey)) || 0);

   player.catch(function (error) { console.log('error') });




    
      

