import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const storageCurrentTime = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(storageCurrentTime, JSON.stringify(data.seconds));  
}, 1000));

console.log(player);

player.setCurrentTime(30.456)
  .then(function(seconds) {
    localStorage.setItem(storageCurrentTime, JSON.stringify(seconds));
    console.log(seconds);
  })
  .catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
