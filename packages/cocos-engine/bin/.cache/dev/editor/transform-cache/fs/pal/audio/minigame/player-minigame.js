System.register("q-bundled:///fs/pal/audio/minigame/player-minigame.js", ["pal/minigame", "pal/system-info", "../../../../virtual/internal%253Aconstants.js", "../../../cocos/core/event/index.js", "../type.js", "../../../cocos/core/index.js", "../operation-queue.js"], function (_export, _context) {
  "use strict";

  var minigame, systemInfo, TAOBAO, TAOBAO_MINIGAME, HUAWEI, VIVO, OPPO, EventTarget, AudioEvent, AudioState, AudioType, clamp, clamp01, enqueueOperation, OneShotAudioMinigame, _class2, AudioPlayerMinigame;
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
  _export("OneShotAudioMinigame", void 0);
  return {
    setters: [function (_palMinigame) {
      minigame = _palMinigame.minigame;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_virtualInternal253AconstantsJs) {
      TAOBAO = _virtualInternal253AconstantsJs.TAOBAO;
      TAOBAO_MINIGAME = _virtualInternal253AconstantsJs.TAOBAO_MINIGAME;
      HUAWEI = _virtualInternal253AconstantsJs.HUAWEI;
      VIVO = _virtualInternal253AconstantsJs.VIVO;
      OPPO = _virtualInternal253AconstantsJs.OPPO;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_typeJs) {
      AudioEvent = _typeJs.AudioEvent;
      AudioState = _typeJs.AudioState;
      AudioType = _typeJs.AudioType;
    }, function (_cocosCoreIndexJs) {
      clamp = _cocosCoreIndexJs.clamp;
      clamp01 = _cocosCoreIndexJs.clamp01;
    }, function (_operationQueueJs) {
      enqueueOperation = _operationQueueJs.enqueueOperation;
    }],
    execute: function () {
      _export("OneShotAudioMinigame", OneShotAudioMinigame = class OneShotAudioMinigame {
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
          this._onEndCb = cb;
        }
        constructor(nativeAudio, volume) {
          this._innerAudioContext = void 0;
          this._onPlayCb = void 0;
          this._onEndCb = void 0;
          this._innerAudioContext = nativeAudio;
          nativeAudio.volume = volume;
          nativeAudio.onPlay(() => {
            var _this$_onPlayCb;
            (_this$_onPlayCb = this._onPlayCb) === null || _this$_onPlayCb === void 0 ? void 0 : _this$_onPlayCb.call(this);
          });
          const endCallback = () => {
            if (this._innerAudioContext) {
              var _this$_onEndCb;
              // NOTE: Type 'null' is not assignable to type 'InnerAudioContext'.
              this._innerAudioContext = null;
              systemInfo.off('hide', this._onInterruptedBegin, this);
              systemInfo.off('show', this._onInterruptedEnd, this);
              (_this$_onEndCb = this._onEndCb) === null || _this$_onEndCb === void 0 ? void 0 : _this$_onEndCb.call(this);
              /**The destroy interface, in some platform implementations, internally invokes stop,
               * triggering the onStop callback, consequently leading to an infinite loop. **/
              nativeAudio.destroy();
            }
          };
          nativeAudio.onEnded(endCallback);
          nativeAudio.onStop(endCallback); //OneShotAudio can not be reused.

          // event
          systemInfo.on('hide', this._onInterruptedBegin, this);
          systemInfo.on('show', this._onInterruptedEnd, this);
        }
        _onInterruptedBegin() {
          this._innerAudioContext.pause();
        }
        _onInterruptedEnd() {
          this._innerAudioContext.play();
        }
        play() {
          this._innerAudioContext.play();
        }
        stop() {
          this._innerAudioContext.stop();
        }
      });
      _export("AudioPlayerMinigame", AudioPlayerMinigame = (_class2 = class AudioPlayerMinigame {
        _resetSeekCache() {
          this._cacheTime = 0;
          this._needSeek = false;
          this._seeking = false;
          if ((HUAWEI || VIVO || OPPO) && this._innerAudioContext) {
            this._innerAudioContext.startTime = 0;
          }
        }
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */

        constructor(innerAudioContext) {
          this._innerAudioContext = void 0;
          this._state = AudioState.INIT;
          this._cacheTime = 0;
          this._needSeek = false;
          this._seeking = false;
          this._onPlay = void 0;
          this._onPause = void 0;
          this._onStop = void 0;
          this._onSeeked = void 0;
          this._onEnded = void 0;
          this._readyToHandleOnShow = false;
          this._eventTarget = new EventTarget();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._operationQueue = [];
          this._innerAudioContext = innerAudioContext;
          this._eventTarget = new EventTarget();

          // event
          systemInfo.on('hide', this._onInterruptedBegin, this);
          systemInfo.on('show', this._onInterruptedEnd, this);
          const eventTarget = this._eventTarget;
          this._onPlay = () => {
            this._state = AudioState.PLAYING;
            eventTarget.emit(AudioEvent.PLAYED);
            if (this._needSeek) {
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              this.seek(this._cacheTime).catch(e => {});
            }
          };
          innerAudioContext.onPlay(this._onPlay);
          this._onPause = () => {
            this._state = AudioState.PAUSED;
            try {
              const currentTime = this._innerAudioContext.currentTime;
              if (currentTime !== null && currentTime !== undefined) {
                this._cacheTime = currentTime;
              }
            } catch {
              // Do nothing, cacheTime is not updated.
            }
            eventTarget.emit(AudioEvent.PAUSED);
          };
          innerAudioContext.onPause(this._onPause);
          this._onStop = () => {
            this._state = AudioState.STOPPED;
            // Reset all properties
            this._resetSeekCache();
            eventTarget.emit(AudioEvent.STOPPED);
            if (TAOBAO || TAOBAO_MINIGAME) {
              /**Unable to seek again after stop; After stop, regardless of whether the starttime has been set,
              the playback will always start from 0 again**/
            } else {
              const currentTime = this._innerAudioContext ? this._innerAudioContext.currentTime : 0;
              if (currentTime !== 0) {
                this._innerAudioContext.seek(0);
              }
            }
          };
          innerAudioContext.onStop(this._onStop);
          this._onSeeked = () => {
            eventTarget.emit(AudioEvent.SEEKED);
            this._seeking = false;
            if (this._needSeek) {
              this._needSeek = false;
              if (this._cacheTime.toFixed(2) !== this._innerAudioContext.currentTime.toFixed(2)) {
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                this.seek(this._cacheTime).catch(e => {});
              }
            }
          };
          innerAudioContext.onSeeked(this._onSeeked);
          this._onEnded = () => {
            this._state = AudioState.INIT;
            this._resetSeekCache();
            eventTarget.emit(AudioEvent.ENDED);
          };
          innerAudioContext.onEnded(this._onEnded);
        }
        destroy() {
          systemInfo.off('hide', this._onInterruptedBegin, this);
          systemInfo.off('show', this._onInterruptedEnd, this);
          if (this._innerAudioContext) {
            ['Play', 'Pause', 'Stop', 'Seeked', 'Ended'].forEach(event => {
              this._offEvent(event);
            });
            // NOTE: innerAudioContext might not stop the audio playing, have to call it explicitly.
            this._innerAudioContext.stop();
            this._innerAudioContext.destroy();
            // NOTE: Type 'null' is not assignable to type 'InnerAudioContext'
            this._innerAudioContext = null;
            // Restore the state of the audio, otherwise it will cause 'destroy' to be called first and 'stop' to be called later.
            // this will cause a error.
            this._state = AudioState.INIT;
          }
        }
        _onInterruptedBegin() {
          if (this._state === AudioState.PLAYING) {
            this.pause().then(() => {
              this._state = AudioState.INTERRUPTED;
              this._readyToHandleOnShow = true;
              this._eventTarget.emit(AudioEvent.INTERRUPTION_BEGIN);
              // eslint-disable-next-line @typescript-eslint/no-empty-function
            }).catch(e => {});
          }
        }
        _onInterruptedEnd() {
          // We don't know whether onShow or resolve callback in pause promise is called at first.
          if (!this._readyToHandleOnShow) {
            this._eventTarget.once(AudioEvent.INTERRUPTION_END, this._onInterruptedEnd, this);
            return;
          }
          if (this._state === AudioState.INTERRUPTED) {
            this.play().then(() => {
              this._eventTarget.emit(AudioEvent.INTERRUPTION_END);
              // eslint-disable-next-line @typescript-eslint/no-empty-function
            }).catch(e => {});
          }
          this._readyToHandleOnShow = false;
        }
        _offEvent(eventName) {
          if (this[`_on${eventName}`]) {
            this._innerAudioContext[`off${eventName}`](this[`_on${eventName}`]);
            this[`_on${eventName}`] = null;
          }
        }
        get src() {
          return this._innerAudioContext ? this._innerAudioContext.src : '';
        }
        get type() {
          return AudioType.MINIGAME_AUDIO;
        }
        static load(url) {
          return new Promise((resolve, reject) => {
            AudioPlayerMinigame.loadNative(url).then(innerAudioContext => {
              resolve(new AudioPlayerMinigame(innerAudioContext));
            }).catch(reject);
          });
        }
        static loadNative(url) {
          return new Promise((resolve, reject) => {
            const innerAudioContext = minigame.createInnerAudioContext();
            const timer = setTimeout(() => {
              clearEvent();
              resolve(innerAudioContext);
            }, 8000);
            function clearEvent() {
              innerAudioContext.offCanplay(success);
              innerAudioContext.offError(fail);
            }
            function success() {
              clearEvent();
              clearTimeout(timer);
              resolve(innerAudioContext);
            }
            function fail(err) {
              clearEvent();
              clearTimeout(timer);
              // eslint-disable-next-line no-console
              console.error('failed to load innerAudioContext');
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              reject(new Error(err));
            }
            innerAudioContext.onCanplay(success);
            innerAudioContext.onError(fail);
            innerAudioContext.src = url;
          });
        }
        static loadOneShotAudio(url, volume) {
          return new Promise((resolve, reject) => {
            AudioPlayerMinigame.loadNative(url).then(innerAudioContext => {
              // HACK: AudioPlayer should be a friend class in OneShotAudio
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              resolve(new OneShotAudioMinigame(innerAudioContext, volume));
            }).catch(reject);
          });
        }
        get state() {
          return this._state;
        }
        get loop() {
          return this._innerAudioContext.loop;
        }
        set loop(val) {
          this._innerAudioContext.loop = val;
        }
        get volume() {
          return this._innerAudioContext.volume;
        }
        set volume(val) {
          val = clamp01(val);
          this._innerAudioContext.volume = val;
        }
        get duration() {
          // KNOWN ISSUES: duration doesn't work well
          // On WeChat platform, duration is 0 at the time audio is loaded.
          return this._innerAudioContext.duration;
        }
        get currentTime() {
          if ((HUAWEI || VIVO || OPPO) && (this._state === AudioState.STOPPED || this._state === AudioState.INIT)) {
            return this._innerAudioContext.startTime;
          }
          if (this._state !== AudioState.PLAYING || this._needSeek || this._seeking) {
            return this._cacheTime;
          }
          return this._innerAudioContext.currentTime;
        }
        get sampleRate() {
          return 0;
        }
        getPCMData(channelIndex) {
          return undefined;
        }
        seek(time) {
          return new Promise(resolve => {
            // KNOWN ISSUES: on Baidu: currentTime returns without numbers on decimal places
            if (this._state === AudioState.PLAYING && !this._seeking) {
              time = clamp(time, 0, this.duration);
              this._seeking = true;
              this._cacheTime = time;
              this._eventTarget.once(AudioEvent.SEEKED, resolve);
              this._innerAudioContext.seek(time);
            } else {
              //Huawei, vivo, Oppo platform, after stop, regardless of whether the seek has been called, the playback will always start from 0 again
              if ((HUAWEI || VIVO || OPPO) && (this._state === AudioState.STOPPED || this._state === AudioState.INIT)) {
                this._innerAudioContext.startTime = time;
              } else if (this._cacheTime !== time) {
                // Skip the invalid seek
                this._cacheTime = time;
                this._needSeek = true;
              }
              resolve();
            }
          });
        }
        play() {
          return new Promise(resolve => {
            this._eventTarget.once(AudioEvent.PLAYED, resolve);
            this._innerAudioContext.play();
          });
        }
        pause() {
          return new Promise(resolve => {
            if (this.state !== AudioState.PLAYING) {
              resolve();
            } else {
              this._eventTarget.once(AudioEvent.PAUSED, resolve);
              this._innerAudioContext.pause();
            }
          });
        }
        stop() {
          return new Promise(resolve => {
            if (AudioState.INIT === this._state) {
              this._resetSeekCache();
              resolve();
              return;
            }
            this._eventTarget.once(AudioEvent.STOPPED, resolve);
            this._innerAudioContext.stop();
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