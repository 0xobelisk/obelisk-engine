System.register("q-bundled:///fs/pal/audio/web/player.js", ["../../../cocos/core/index.js", "../type.js", "./player-dom.js", "./player-web.js"], function (_export, _context) {
  "use strict";

  var warnID, AudioType, AudioPlayerDOM, AudioContextAgent, AudioPlayerWeb, OneShotAudio, AudioPlayer;
  _export({
    OneShotAudio: void 0,
    AudioPlayer: void 0
  });
  return {
    setters: [function (_cocosCoreIndexJs) {
      warnID = _cocosCoreIndexJs.warnID;
    }, function (_typeJs) {
      AudioType = _typeJs.AudioType;
    }, function (_playerDomJs) {
      AudioPlayerDOM = _playerDomJs.AudioPlayerDOM;
    }, function (_playerWebJs) {
      AudioContextAgent = _playerWebJs.AudioContextAgent;
      AudioPlayerWeb = _playerWebJs.AudioPlayerWeb;
    }],
    execute: function () {
      /*
       Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
      
       https://www.cocos.com/
      
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights to
       use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
       of the Software, and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
      
       The above copyright notice and this permission notice shall be included in
       all copies or substantial portions of the Software.
      
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      _export("OneShotAudio", OneShotAudio = class OneShotAudio {
        get onPlay() {
          return this._audio.onPlay;
        }
        set onPlay(v) {
          this._audio.onPlay = v;
        }
        get onEnd() {
          return this._audio.onEnd;
        }
        set onEnd(v) {
          this._audio.onEnd = v;
        }
        constructor(audio) {
          this._audio = void 0;
          this._audio = audio;
        }
        play() {
          this._audio.play();
        }
        stop() {
          this._audio.stop();
        }
      });
      _export("AudioPlayer", AudioPlayer = class AudioPlayer {
        constructor(player) {
          this._player = void 0;
          this._player = player;
        }
        static load(url, opts) {
          return new Promise((resolve, reject) => {
            if ((opts === null || opts === void 0 ? void 0 : opts.audioLoadMode) === AudioType.DOM_AUDIO || !AudioContextAgent.support) {
              if (!AudioContextAgent.support) {
                warnID(5201);
              }
              AudioPlayerDOM.load(url).then(domPlayer => {
                resolve(new AudioPlayer(domPlayer));
              }).catch(reject);
            } else {
              AudioPlayerWeb.load(url).then(webPlayer => {
                resolve(new AudioPlayer(webPlayer));
              }).catch(reject);
            }
          });
        }
        destroy() {
          this._player.destroy();
        }
        static loadNative(url, opts) {
          if ((opts === null || opts === void 0 ? void 0 : opts.audioLoadMode) === AudioType.DOM_AUDIO || !AudioContextAgent.support) {
            if (!AudioContextAgent.support) {
              warnID(5201);
            }
            return AudioPlayerDOM.loadNative(url);
          }
          return AudioPlayerWeb.loadNative(url);
        }
        static loadOneShotAudio(url, volume, opts) {
          return new Promise((resolve, reject) => {
            if ((opts === null || opts === void 0 ? void 0 : opts.audioLoadMode) === AudioType.DOM_AUDIO || !AudioContextAgent.support) {
              if (!AudioContextAgent.support) {
                warnID(5201);
              }
              AudioPlayerDOM.loadOneShotAudio(url, volume).then(oneShotAudioDOM => {
                // HACK: AudioPlayer should be a friend class in OneShotAudio
                resolve(new OneShotAudio(oneShotAudioDOM));
              }).catch(reject);
            } else {
              AudioPlayerWeb.loadOneShotAudio(url, volume).then(oneShotAudioWeb => {
                // HACK: AudioPlayer should be a friend class in OneShotAudio
                resolve(new OneShotAudio(oneShotAudioWeb));
              }).catch(reject);
            }
          });
        }
        get src() {
          return this._player.src;
        }
        get type() {
          return this._player.type;
        }
        get state() {
          return this._player.state;
        }
        get loop() {
          return this._player.loop;
        }
        set loop(val) {
          this._player.loop = val;
        }
        get volume() {
          return this._player.volume;
        }
        set volume(val) {
          this._player.volume = val;
        }
        get duration() {
          return this._player.duration;
        }
        get currentTime() {
          return this._player.currentTime;
        }
        get sampleRate() {
          return this._player.sampleRate;
        }
        getPCMData(channelIndex) {
          return this._player.getPCMData(channelIndex);
        }
        seek(time) {
          return this._player.seek(time);
        }
        play() {
          return this._player.play();
        }
        pause() {
          return this._player.pause();
        }
        stop() {
          return this._player.stop();
        }
        onInterruptionBegin(cb) {
          this._player.onInterruptionBegin(cb);
        }
        offInterruptionBegin(cb) {
          this._player.offInterruptionBegin(cb);
        }
        onInterruptionEnd(cb) {
          this._player.onInterruptionEnd(cb);
        }
        offInterruptionEnd(cb) {
          this._player.offInterruptionEnd(cb);
        }
        onEnded(cb) {
          this._player.onEnded(cb);
        }
        offEnded(cb) {
          this._player.offEnded(cb);
        }
      });
      AudioPlayer.maxAudioChannel = 24;
    }
  };
});