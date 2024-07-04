System.register("q-bundled:///fs/pal/audio/web/player-dom.js", ["pal/system-info", "../type.js", "../../../cocos/core/event/index.js", "../../../cocos/core/index.js", "../operation-queue.js", "../../system-info/enum-type/index.js", "../../../cocos/game/index.js"], function (_export, _context) {
  "use strict";

  var systemInfo, AudioEvent, AudioState, AudioType, EventTarget, clamp, clamp01, enqueueOperation, BrowserType, OS, Game, game, OneShotAudioDOM, _class2, AudioPlayerDOM;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
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
    return new Promise(resolve => {
      const promise = domAudio.play();
      if (promise === undefined) {
        // Chrome50/Firefox53 below
        return resolve();
      }
      promise.then(resolve).catch(() => {
        const onGesture = () => {
          domAudio.play().then(() => {
            // HACK NOTE: if the user slide after touch start, the context cannot be resumed correctly.
            canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('touchend', onGesture, {
              capture: true
            });
            canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('mouseup', onGesture, {
              capture: true
            });
          }).catch(e => {});
          resolve();
        };
        const canvas = document.getElementById('GameCanvas');
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
  _export("OneShotAudioDOM", void 0);
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
      _export("OneShotAudioDOM", OneShotAudioDOM = class OneShotAudioDOM {
        get onPlay() {
          return this._onPlayCb;
        }
        set onPlay(cb) {
          this._onPlayCb = cb;
        }
        get onEnd() {
          return this._onEndCb;
        }
        set onEnd(cb) {
          if (this._onEndCb) {
            this._domAudio.removeEventListener('ended', this._onEndCb);
          }
          this._onEndCb = cb;
          if (cb) {
            this._domAudio.addEventListener('ended', cb);
          }
        }
        constructor(nativeAudio, volume) {
          this._domAudio = void 0;
          this._onPlayCb = void 0;
          this._onEndCb = void 0;
          this._domAudio = nativeAudio;
          nativeAudio.volume = volume;
        }
        play() {
          ensurePlaying(this._domAudio).then(() => {
            var _this$onPlay;
            (_this$onPlay = this.onPlay) === null || _this$onPlay === void 0 ? void 0 : _this$onPlay.call(this);
          }).catch(e => {});
        }
        stop() {
          this._domAudio.pause();
        }
      });
      _export("AudioPlayerDOM", AudioPlayerDOM = (_class2 = class AudioPlayerDOM {
        constructor(nativeAudio) {
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
          this._onEnded = () => {
            this.seek(0).catch(e => {});
            this._state = AudioState.INIT;
            this._eventTarget.emit(AudioEvent.ENDED);
          };
          this._domAudio.addEventListener('ended', this._onEnded);
        }
        destroy() {
          game.off(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.off(Game.EVENT_RESUME, this._onInterruptedEnd, this);
          this._domAudio.removeEventListener('ended', this._onEnded);
          // NOTE: need to release DOM Audio instance
          this._domAudio = null;
        }
        static load(url) {
          return new Promise((resolve, reject) => {
            AudioPlayerDOM.loadNative(url).then(domAudio => {
              resolve(new AudioPlayerDOM(domAudio));
            }).catch(reject);
          });
        }
        static loadNative(url) {
          return new Promise((resolve, reject) => {
            const domAudio = document.createElement('audio');
            let loadedEvent = 'canplaythrough';
            if (systemInfo.os === OS.IOS) {
              // iOS no event that used to parse completed callback
              // this time is not complete, can not play
              loadedEvent = 'loadedmetadata';
            } else if (systemInfo.browserType === BrowserType.FIREFOX) {
              loadedEvent = 'canplay';
            }
            const timer = setTimeout(() => {
              if (domAudio.readyState === 0) {
                failure();
              } else {
                success();
              }
            }, 8000);
            const clearEvent = () => {
              clearTimeout(timer);
              domAudio.removeEventListener(loadedEvent, success, false);
              domAudio.removeEventListener('error', failure, false);
            };
            const success = () => {
              clearEvent();
              resolve(domAudio);
            };
            const failure = () => {
              clearEvent();
              const message = `load audio failure - ${url}`;
              reject(new Error(message));
            };
            domAudio.addEventListener(loadedEvent, success, false);
            domAudio.addEventListener('error', failure, false);
            domAudio.src = url;
          });
        }
        static loadOneShotAudio(url, volume) {
          return new Promise((resolve, reject) => {
            AudioPlayerDOM.loadNative(url).then(domAudio => {
              // HACK: AudioPlayer should be a friend class in OneShotAudio
              const oneShotAudio = new OneShotAudioDOM(domAudio, volume);
              resolve(oneShotAudio);
            }).catch(reject);
          });
        }
        _onInterruptedBegin() {
          if (this._state === AudioState.PLAYING) {
            this.pause().then(() => {
              this._state = AudioState.INTERRUPTED;
              this._eventTarget.emit(AudioEvent.INTERRUPTION_BEGIN);
            }).catch(e => {});
          }
        }
        _onInterruptedEnd() {
          if (this._state === AudioState.INTERRUPTED) {
            this.play().then(() => {
              this._eventTarget.emit(AudioEvent.INTERRUPTION_END);
            }).catch(e => {});
          }
        }
        get src() {
          return this._domAudio ? this._domAudio.src : '';
        }
        get type() {
          return AudioType.DOM_AUDIO;
        }
        get state() {
          return this._state;
        }
        get loop() {
          return this._domAudio.loop;
        }
        set loop(val) {
          this._domAudio.loop = val;
        }
        get volume() {
          return this._domAudio.volume;
        }
        set volume(val) {
          val = clamp01(val);
          this._domAudio.volume = val;
        }
        get duration() {
          return this._domAudio.duration;
        }
        get currentTime() {
          return this._domAudio.currentTime;
        }
        get sampleRate() {
          return 0;
        }
        getPCMData(channelIndex) {
          return undefined;
        }
        seek(time) {
          time = clamp(time, 0, this.duration);
          this._domAudio.currentTime = time;
          return Promise.resolve();
        }
        play() {
          return new Promise(resolve => {
            ensurePlaying(this._domAudio).then(() => {
              this._state = AudioState.PLAYING;
              resolve();
            }).catch(e => {});
          });
        }
        pause() {
          this._domAudio.pause();
          this._state = AudioState.PAUSED;
          return Promise.resolve();
        }
        stop() {
          return new Promise(resolve => {
            this._domAudio.pause();
            this._domAudio.currentTime = 0;
            this._state = AudioState.STOPPED;
            resolve();
          });
        }
        onInterruptionBegin(cb) {
          this._eventTarget.on(AudioEvent.INTERRUPTION_BEGIN, cb);
        }
        offInterruptionBegin(cb) {
          this._eventTarget.off(AudioEvent.INTERRUPTION_BEGIN, cb);
        }
        onInterruptionEnd(cb) {
          this._eventTarget.on(AudioEvent.INTERRUPTION_END, cb);
        }
        offInterruptionEnd(cb) {
          this._eventTarget.off(AudioEvent.INTERRUPTION_END, cb);
        }
        onEnded(cb) {
          this._eventTarget.on(AudioEvent.ENDED, cb);
        }
        offEnded(cb) {
          this._eventTarget.off(AudioEvent.ENDED, cb);
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "seek", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "seek"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "play", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "play"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "pause", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "pause"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "stop", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "stop"), _class2.prototype)), _class2));
    }
  };
});