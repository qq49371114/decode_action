//Wed Sep 25 2024 07:43:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const playSource = {
    "src": KKYS.safePlay().url("FNF9aVQF!G*0ux@2hAigUeB3"),
    "type": "application/x-mpegURL"
  },
  config = {
    "lang": "zh",
    "id": "my-video",
    "autoplay": true,
    "url": playSource.src,
    "playsinline": true,
    "pip": true,
    "keyShortcut": "on",
    "height": "100%",
    "width": "100%",
    "plugins": [],
    "x5-video-player-type": "h5",
    "x5-video-player-fullscreen": true,
    "x5-video-orientation": "landscape",
    "commonStyle": {
      "playedColor": "var(--fs-primary-color)",
      "volumeColor": "var(--fs-primary-color)"
    },
    "playbackRate": {
      "list": [{
        "text": "2.0X",
        "rate": 2
      }, {
        "text": "1.5X",
        "rate": 1.5
      }, {
        "text": "1.25X",
        "rate": 1.25
      }, {
        "text": "1X",
        "iconText": "倍速",
        "rate": 1
      }, {
        "text": "0.75X",
        "rate": 0.75
      }, {
        "text": "0.5X",
        "rate": 0.5
      }]
    }
  };
if (playSource.type == "application/x-mpegURL" && HlsPlayer.isSupported()) config.plugins.push(window.HlsPlayer), config.hls = {
  "retryCount": 30,
  "retryDelay": 1000,
  "loadTimeout": 10000,
  "fetchOptions": {
    "mode": "cors",
    "headers": {
      "Origin": ""
    },
    "referrer": "no-referrer"
  }
};else {
  if (playSource.type == "video/mp4") config.plugins.push(window.Mp4Plugin), config.mp4plugin = {
    "maxBufferLength": 50,
    "minBufferLength": 10
  };else {}
}
xgplayer = new window.Player(config);
const playProgress = window.localStorage.getItem(playSource.src);
playProgress && (xgplayer.currentTime = parseFloat(playProgress));
const Events = window.Player.Events;
xgplayer.on(Events.LOAD_START, onPlayerLoadStartHandler);
xgplayer.on(Events.LOADED_DATA, onPlayerLoadedDataHandler);
xgplayer.on(Events.PLAY, onPlayerPlayHandler);
xgplayer.on(Events.PAUSE, onPlayerPauseHandler);
xgplayer.on(Events.ENDED, onPlayerEndedHandler);
xgplayer.on(Events.ERROR, onPlayerErrorHandler);
xgplayer.on(Events.TIME_UPDATE, onPlayerTimeUpdateHandler);
xgplayer.on(Events.WAITING, onPlayerWaitingHandler);
xgplayer.on(Events.SEEKING, onPlayerSeekingHandler);
xgplayer.on(Events.SEEKED, onPlayerSeekedHandler);
updatePlayBoxSize();