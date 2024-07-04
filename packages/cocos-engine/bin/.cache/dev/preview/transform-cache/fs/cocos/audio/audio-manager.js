System.register("q-bundled:///fs/cocos/audio/audio-manager.js", ["pal/audio", "../core/index.js"], function (_export, _context) {
  "use strict";

  var AudioPlayer, js, AudioManager, audioManager;
  return {
    setters: [function (_palAudio) {
      AudioPlayer = _palAudio.AudioPlayer;
    }, function (_coreIndexJs) {
      js = _coreIndexJs.js;
    }],
    execute: function () {
      /*
       Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
      
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
      _export("AudioManager", AudioManager = /*#__PURE__*/function () {
        function AudioManager() {
          this._oneShotAudioInfoList = [];
          this._audioPlayerInfoList = [];
        }
        var _proto = AudioManager.prototype;
        _proto._findIndex = function _findIndex(audioInfoList, audio) {
          return audioInfoList.findIndex(function (item) {
            return item.audio === audio;
          });
        };
        _proto._tryAddPlaying = function _tryAddPlaying(audioInfoList, audio) {
          var idx = this._findIndex(audioInfoList, audio);
          if (idx > -1) {
            // update play time
            audioInfoList[idx].playTime = performance.now();
            return false;
          }
          audioInfoList.push({
            audio: audio,
            playTime: performance.now()
          });
          return true;
        };
        _proto.addPlaying = function addPlaying(audio) {
          if (audio instanceof AudioPlayer) {
            this._tryAddPlaying(this._audioPlayerInfoList, audio);
          } else {
            this._tryAddPlaying(this._oneShotAudioInfoList, audio);
          }
        };
        _proto._tryRemovePlaying = function _tryRemovePlaying(audioInfoList, audio) {
          var idx = this._findIndex(audioInfoList, audio);
          if (idx === -1) {
            return false;
          }
          js.array.fastRemoveAt(audioInfoList, idx);
          return true;
        };
        _proto.removePlaying = function removePlaying(audio) {
          if (audio instanceof AudioPlayer) {
            this._tryRemovePlaying(this._audioPlayerInfoList, audio);
          } else {
            this._tryRemovePlaying(this._oneShotAudioInfoList, audio);
          }
        };
        _proto.discardOnePlayingIfNeeded = function discardOnePlayingIfNeeded() {
          if (this._audioPlayerInfoList.length + this._oneShotAudioInfoList.length < AudioPlayer.maxAudioChannel) {
            return;
          }

          // TODO: support discard policy for audio source
          var audioInfoToDiscard;
          if (this._oneShotAudioInfoList.length > 0) {
            this._oneShotAudioInfoList.forEach(function (audioInfo) {
              if (!audioInfoToDiscard || audioInfo.playTime < audioInfoToDiscard.playTime) {
                audioInfoToDiscard = audioInfo;
              }
            });
          } else {
            this._audioPlayerInfoList.forEach(function (audioInfo) {
              if (!audioInfoToDiscard || audioInfo.playTime < audioInfoToDiscard.playTime) {
                audioInfoToDiscard = audioInfo;
              }
            });
          }
          if (audioInfoToDiscard) {
            audioInfoToDiscard.audio.stop();
            this.removePlaying(audioInfoToDiscard.audio);
          }
        };
        _proto.pause = function pause() {
          this._oneShotAudioInfoList.forEach(function (info) {
            info.audio.stop();
          });
          this._audioPlayerInfoList.forEach(function (info) {
            info.audio.pause()["catch"](function (e) {});
          });
        };
        _proto.resume = function resume() {
          // onShotAudio can not be resumed
          this._audioPlayerInfoList.forEach(function (info) {
            info.audio.play()["catch"](function (e) {});
          });
        };
        return AudioManager;
      }());
      _export("audioManager", audioManager = new AudioManager());
    }
  };
});