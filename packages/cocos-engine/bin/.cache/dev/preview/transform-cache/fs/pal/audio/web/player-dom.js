System.register("q-bundled:///fs/pal/audio/web/player-dom.js", ["pal/system-info", "../type.js", "../../../cocos/core/event/index.js", "../../../cocos/core/index.js", "../operation-queue.js", "../../system-info/enum-type/index.js", "../../../cocos/game/index.js"], function (_export, _context) {
  "use strict";

  var systemInfo, AudioEvent, AudioState, AudioType, EventTarget, clamp, clamp01, enqueueOperation, BrowserType, OS, Game, game, _class2, OneShotAudioDOM, AudioPlayerDOM;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  function ensurePlaying(domAudio) {
    return new Promise(function (resolve) {
      var promise = domAudio.play();
      if (promise === undefined) {
        // Chrome50/Firefox53 below
        return resolve();
      }
      promise.then(resolve)["catch"](function () {
        var onGesture = function onGesture() {
          domAudio.play().then(function () {
            // HACK NOTE: if the user slide after touch start, the context cannot be resumed correctly.
            canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('touchend', onGesture, {
              capture: true
            });
            canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('mouseup', onGesture, {
              capture: true
            });
          })["catch"](function (e) {});
          resolve();
        };
        var canvas = document.getElementById('GameCanvas');
        canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('touchend', onGesture, {
          capture: true
        });
        canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mouseup', onGesture, {
          capture: true
        });
      });
      return null;
    });
  }
  return {
    setters: [function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_typeJs) {
      AudioEvent = _typeJs.AudioEvent;
      AudioState = _typeJs.AudioState;
      AudioType = _typeJs.AudioType;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_cocosCoreIndexJs) {
      clamp = _cocosCoreIndexJs.clamp;
      clamp01 = _cocosCoreIndexJs.clamp01;
    }, function (_operationQueueJs) {
      enqueueOperation = _operationQueueJs.enqueueOperation;
    }, function (_systemInfoEnumTypeIndexJs) {
      BrowserType = _systemInfoEnumTypeIndexJs.BrowserType;
      OS = _systemInfoEnumTypeIndexJs.OS;
    }, function (_cocosGameIndexJs) {
      Game = _cocosGameIndexJs.Game;
      game = _cocosGameIndexJs.game;
    }],
    execute: function () {
      _export("OneShotAudioDOM", OneShotAudioDOM = /*#__PURE__*/function () {
        function OneShotAudioDOM(nativeAudio, volume) {
          this._domAudio = void 0;
          this._onPlayCb = void 0;
          this._onEndCb = void 0;
          this._domAudio = nativeAudio;
          nativeAudio.volume = volume;
        }
        var _proto = OneShotAudioDOM.prototype;
        _proto.play = function play() {
          var _this = this;
          ensurePlaying(this._domAudio).then(function () {
            var _this$onPlay;
            (_this$onPlay = _this.onPlay) === null || _this$onPlay === void 0 ? void 0 : _this$onPlay.call(_this);
          })["catch"](function (e) {});
        };
        _proto.stop = function stop() {
          this._domAudio.pause();
        };
        _createClass(OneShotAudioDOM, [{
          key: "onPlay",
          get: function get() {
            return this._onPlayCb;
          },
          set: function set(cb) {
            this._onPlayCb = cb;
          }
        }, {
          key: "onEnd",
          get: function get() {
            return this._onEndCb;
          },
          set: function set(cb) {
            if (this._onEndCb) {
              this._domAudio.removeEventListener('ended', this._onEndCb);
            }
            this._onEndCb = cb;
            if (cb) {
              this._domAudio.addEventListener('ended', cb);
            }
          }
        }]);
        return OneShotAudioDOM;
      }());
      _export("AudioPlayerDOM", AudioPlayerDOM = (_class2 = /*#__PURE__*/function () {
        function AudioPlayerDOM(nativeAudio) {
          var _this2 = this;
          this._domAudio = void 0;
          this._state = AudioState.INIT;
          this._onEnded = void 0;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._eventTarget = new EventTarget();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._operationQueue = [];
          this._domAudio = nativeAudio;

          // event
          game.on(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.on(Game.EVENT_RESUME, this._onInterruptedEnd, this);
          this._onEnded = function () {
            _this2.seek(0)["catch"](function (e) {});
            _this2._state = AudioState.INIT;
            _this2._eventTarget.emit(AudioEvent.ENDED);
          };
          this._domAudio.addEventListener('ended', this._onEnded);
        }
        var _proto2 = AudioPlayerDOM.prototype;
        _proto2.destroy = function destroy() {
          game.off(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.off(Game.EVENT_RESUME, this._onInterruptedEnd, this);
          this._domAudio.removeEventListener('ended', this._onEnded);
          // NOTE: need to release DOM Audio instance
          this._domAudio = null;
        };
        AudioPlayerDOM.load = function load(url) {
          return new Promise(function (resolve, reject) {
            AudioPlayerDOM.loadNative(url).then(function (domAudio) {
              resolve(new AudioPlayerDOM(domAudio));
            })["catch"](reject);
          });
        };
        AudioPlayerDOM.loadNative = function loadNative(url) {
          return new Promise(function (resolve, reject) {
            var domAudio = document.createElement('audio');
            var loadedEvent = 'canplaythrough';
            if (systemInfo.os === OS.IOS) {
              // iOS no event that used to parse completed callback
              // this time is not complete, can not play
              loadedEvent = 'loadedmetadata';
            } else if (systemInfo.browserType === BrowserType.FIREFOX) {
              loadedEvent = 'canplay';
            }
            var timer = setTimeout(function () {
              if (domAudio.readyState === 0) {
                failure();
              } else {
                success();
              }
            }, 8000);
            var clearEvent = function clearEvent() {
              clearTimeout(timer);
              domAudio.removeEventListener(loadedEvent, success, false);
              domAudio.removeEventListener('error', failure, false);
            };
            var success = function success() {
              clearEvent();
              resolve(domAudio);
            };
            var failure = function failure() {
              clearEvent();
              var message = "load audio failure - " + url;
              reject(new Error(message));
            };
            domAudio.addEventListener(loadedEvent, success, false);
            domAudio.addEventListener('error', failure, false);
            domAudio.src = url;
          });
        };
        AudioPlayerDOM.loadOneShotAudio = function loadOneShotAudio(url, volume) {
          return new Promise(function (resolve, reject) {
            AudioPlayerDOM.loadNative(url).then(function (domAudio) {
              // HACK: AudioPlayer should be a friend class in OneShotAudio
              var oneShotAudio = new OneShotAudioDOM(domAudio, volume);
              resolve(oneShotAudio);
            })["catch"](reject);
          });
        };
        _proto2._onInterruptedBegin = function _onInterruptedBegin() {
          var _this3 = this;
          if (this._state === AudioState.PLAYING) {
            this.pause().then(function () {
              _this3._state = AudioState.INTERRUPTED;
              _this3._eventTarget.emit(AudioEvent.INTERRUPTION_BEGIN);
            })["catch"](function (e) {});
          }
        };
        _proto2._onInterruptedEnd = function _onInterruptedEnd() {
          var _this4 = this;
          if (this._state === AudioState.INTERRUPTED) {
            this.play().then(function () {
              _this4._eventTarget.emit(AudioEvent.INTERRUPTION_END);
            })["catch"](function (e) {});
          }
        };
        _proto2.getPCMData = function getPCMData(channelIndex) {
          return undefined;
        };
        _proto2.seek = function seek(time) {
          time = clamp(time, 0, this.duration);
          this._domAudio.currentTime = time;
          return Promise.resolve();
        };
        _proto2.play = function play() {
          var _this5 = this;
          return new Promise(function (resolve) {
            ensurePlaying(_this5._domAudio).then(function () {
              _this5._state = AudioState.PLAYING;
              resolve();
            })["catch"](function (e) {});
          });
        };
        _proto2.pause = function pause() {
          this._domAudio.pause();
          this._state = AudioState.PAUSED;
          return Promise.resolve();
        };
        _proto2.stop = function stop() {
          var _this6 = this;
          return new Promise(function (resolve) {
            _this6._domAudio.pause();
            _this6._domAudio.currentTime = 0;
            _this6._state = AudioState.STOPPED;
            resolve();
          });
        };
        _proto2.onInterruptionBegin = function onInterruptionBegin(cb) {
          this._eventTarget.on(AudioEvent.INTERRUPTION_BEGIN, cb);
        };
        _proto2.offInterruptionBegin = function offInterruptionBegin(cb) {
          this._eventTarget.off(AudioEvent.INTERRUPTION_BEGIN, cb);
        };
        _proto2.onInterruptionEnd = function onInterruptionEnd(cb) {
          this._eventTarget.on(AudioEvent.INTERRUPTION_END, cb);
        };
        _proto2.offInterruptionEnd = function offInterruptionEnd(cb) {
          this._eventTarget.off(AudioEvent.INTERRUPTION_END, cb);
        };
        _proto2.onEnded = function onEnded(cb) {
          this._eventTarget.on(AudioEvent.ENDED, cb);
        };
        _proto2.offEnded = function offEnded(cb) {
          this._eventTarget.off(AudioEvent.ENDED, cb);
        };
        _createClass(AudioPlayerDOM, [{
          key: "src",
          get: function get() {
            return this._domAudio ? this._domAudio.src : '';
          }
        }, {
          key: "type",
          get: function get() {
            return AudioType.DOM_AUDIO;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }, {
          key: "loop",
          get: function get() {
            return this._domAudio.loop;
          },
          set: function set(val) {
            this._domAudio.loop = val;
          }
        }, {
          key: "volume",
          get: function get() {
            return this._domAudio.volume;
          },
          set: function set(val) {
            val = clamp01(val);
            this._domAudio.volume = val;
          }
        }, {
          key: "duration",
          get: function get() {
            return this._domAudio.duration;
          }
        }, {
          key: "currentTime",
          get: function get() {
            return this._domAudio.currentTime;
          }
        }, {
          key: "sampleRate",
          get: function get() {
            return 0;
          }
        }]);
        return AudioPlayerDOM;
      }(), (_applyDecoratedDescriptor(_class2.prototype, "seek", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "seek"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "play", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "play"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "pause", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "pause"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "stop", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "stop"), _class2.prototype)), _class2));
    }
  };
});