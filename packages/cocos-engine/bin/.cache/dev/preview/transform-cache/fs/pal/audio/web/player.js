System.register("q-bundled:///fs/pal/audio/web/player.js", ["../../../cocos/core/index.js", "../type.js", "./player-dom.js", "./player-web.js"], function (_export, _context) {
  "use strict";

  var warnID, AudioType, AudioPlayerDOM, AudioContextAgent, AudioPlayerWeb, OneShotAudio, AudioPlayer;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
      _export("OneShotAudio", OneShotAudio = /*#__PURE__*/function () {
        function OneShotAudio(audio) {
          this._audio = void 0;
          this._audio = audio;
        }
        var _proto = OneShotAudio.prototype;
        _proto.play = function play() {
          this._audio.play();
        };
        _proto.stop = function stop() {
          this._audio.stop();
        };
        _createClass(OneShotAudio, [{
          key: "onPlay",
          get: function get() {
            return this._audio.onPlay;
          },
          set: function set(v) {
            this._audio.onPlay = v;
          }
        }, {
          key: "onEnd",
          get: function get() {
            return this._audio.onEnd;
          },
          set: function set(v) {
            this._audio.onEnd = v;
          }
        }]);
        return OneShotAudio;
      }());
      _export("AudioPlayer", AudioPlayer = /*#__PURE__*/function () {
        function AudioPlayer(player) {
          this._player = void 0;
          this._player = player;
        }
        AudioPlayer.load = function load(url, opts) {
          return new Promise(function (resolve, reject) {
            if ((opts === null || opts === void 0 ? void 0 : opts.audioLoadMode) === AudioType.DOM_AUDIO || !AudioContextAgent.support) {
              if (!AudioContextAgent.support) {
                warnID(5201);
              }
              AudioPlayerDOM.load(url).then(function (domPlayer) {
                resolve(new AudioPlayer(domPlayer));
              })["catch"](reject);
            } else {
              AudioPlayerWeb.load(url).then(function (webPlayer) {
                resolve(new AudioPlayer(webPlayer));
              })["catch"](reject);
            }
          });
        };
        var _proto2 = AudioPlayer.prototype;
        _proto2.destroy = function destroy() {
          this._player.destroy();
        };
        AudioPlayer.loadNative = function loadNative(url, opts) {
          if ((opts === null || opts === void 0 ? void 0 : opts.audioLoadMode) === AudioType.DOM_AUDIO || !AudioContextAgent.support) {
            if (!AudioContextAgent.support) {
              warnID(5201);
            }
            return AudioPlayerDOM.loadNative(url);
          }
          return AudioPlayerWeb.loadNative(url);
        };
        AudioPlayer.loadOneShotAudio = function loadOneShotAudio(url, volume, opts) {
          return new Promise(function (resolve, reject) {
            if ((opts === null || opts === void 0 ? void 0 : opts.audioLoadMode) === AudioType.DOM_AUDIO || !AudioContextAgent.support) {
              if (!AudioContextAgent.support) {
                warnID(5201);
              }
              AudioPlayerDOM.loadOneShotAudio(url, volume).then(function (oneShotAudioDOM) {
                // HACK: AudioPlayer should be a friend class in OneShotAudio
                resolve(new OneShotAudio(oneShotAudioDOM));
              })["catch"](reject);
            } else {
              AudioPlayerWeb.loadOneShotAudio(url, volume).then(function (oneShotAudioWeb) {
                // HACK: AudioPlayer should be a friend class in OneShotAudio
                resolve(new OneShotAudio(oneShotAudioWeb));
              })["catch"](reject);
            }
          });
        };
        _proto2.getPCMData = function getPCMData(channelIndex) {
          return this._player.getPCMData(channelIndex);
        };
        _proto2.seek = function seek(time) {
          return this._player.seek(time);
        };
        _proto2.play = function play() {
          return this._player.play();
        };
        _proto2.pause = function pause() {
          return this._player.pause();
        };
        _proto2.stop = function stop() {
          return this._player.stop();
        };
        _proto2.onInterruptionBegin = function onInterruptionBegin(cb) {
          this._player.onInterruptionBegin(cb);
        };
        _proto2.offInterruptionBegin = function offInterruptionBegin(cb) {
          this._player.offInterruptionBegin(cb);
        };
        _proto2.onInterruptionEnd = function onInterruptionEnd(cb) {
          this._player.onInterruptionEnd(cb);
        };
        _proto2.offInterruptionEnd = function offInterruptionEnd(cb) {
          this._player.offInterruptionEnd(cb);
        };
        _proto2.onEnded = function onEnded(cb) {
          this._player.onEnded(cb);
        };
        _proto2.offEnded = function offEnded(cb) {
          this._player.offEnded(cb);
        };
        _createClass(AudioPlayer, [{
          key: "src",
          get: function get() {
            return this._player.src;
          }
        }, {
          key: "type",
          get: function get() {
            return this._player.type;
          }
        }, {
          key: "state",
          get: function get() {
            return this._player.state;
          }
        }, {
          key: "loop",
          get: function get() {
            return this._player.loop;
          },
          set: function set(val) {
            this._player.loop = val;
          }
        }, {
          key: "volume",
          get: function get() {
            return this._player.volume;
          },
          set: function set(val) {
            this._player.volume = val;
          }
        }, {
          key: "duration",
          get: function get() {
            return this._player.duration;
          }
        }, {
          key: "currentTime",
          get: function get() {
            return this._player.currentTime;
          }
        }, {
          key: "sampleRate",
          get: function get() {
            return this._player.sampleRate;
          }
        }]);
        return AudioPlayer;
      }());
      AudioPlayer.maxAudioChannel = 24;
    }
  };
});