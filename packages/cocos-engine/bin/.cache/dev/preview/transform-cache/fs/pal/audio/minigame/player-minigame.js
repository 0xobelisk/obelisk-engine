System.register("q-bundled:///fs/pal/audio/minigame/player-minigame.js", ["pal/minigame", "pal/system-info", "../../../../virtual/internal%253Aconstants.js", "../../../cocos/core/event/index.js", "../type.js", "../../../cocos/core/index.js", "../operation-queue.js"], function (_export, _context) {
  "use strict";

  var minigame, systemInfo, TAOBAO, TAOBAO_MINIGAME, HUAWEI, VIVO, OPPO, EventTarget, AudioEvent, AudioState, AudioType, clamp, clamp01, enqueueOperation, _class2, OneShotAudioMinigame, AudioPlayerMinigame;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
      _export("OneShotAudioMinigame", OneShotAudioMinigame = /*#__PURE__*/function () {
        function OneShotAudioMinigame(nativeAudio, volume) {
          var _this = this;
          this._innerAudioContext = void 0;
          this._onPlayCb = void 0;
          this._onEndCb = void 0;
          this._innerAudioContext = nativeAudio;
          nativeAudio.volume = volume;
          nativeAudio.onPlay(function () {
            var _this$_onPlayCb;
            (_this$_onPlayCb = _this._onPlayCb) === null || _this$_onPlayCb === void 0 ? void 0 : _this$_onPlayCb.call(_this);
          });
          var endCallback = function endCallback() {
            if (_this._innerAudioContext) {
              var _this$_onEndCb;
              // NOTE: Type 'null' is not assignable to type 'InnerAudioContext'.
              _this._innerAudioContext = null;
              systemInfo.off('hide', _this._onInterruptedBegin, _this);
              systemInfo.off('show', _this._onInterruptedEnd, _this);
              (_this$_onEndCb = _this._onEndCb) === null || _this$_onEndCb === void 0 ? void 0 : _this$_onEndCb.call(_this);
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
        var _proto = OneShotAudioMinigame.prototype;
        _proto._onInterruptedBegin = function _onInterruptedBegin() {
          this._innerAudioContext.pause();
        };
        _proto._onInterruptedEnd = function _onInterruptedEnd() {
          this._innerAudioContext.play();
        };
        _proto.play = function play() {
          this._innerAudioContext.play();
        };
        _proto.stop = function stop() {
          this._innerAudioContext.stop();
        };
        _createClass(OneShotAudioMinigame, [{
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
            this._onEndCb = cb;
          }
        }]);
        return OneShotAudioMinigame;
      }());
      _export("AudioPlayerMinigame", AudioPlayerMinigame = (_class2 = /*#__PURE__*/function () {
        var _proto2 = AudioPlayerMinigame.prototype;
        _proto2._resetSeekCache = function _resetSeekCache() {
          this._cacheTime = 0;
          this._needSeek = false;
          this._seeking = false;
          if ((HUAWEI || VIVO || OPPO) && this._innerAudioContext) {
            this._innerAudioContext.startTime = 0;
          }
        }
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;

        function AudioPlayerMinigame(innerAudioContext) {
          var _this2 = this;
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
          var eventTarget = this._eventTarget;
          this._onPlay = function () {
            _this2._state = AudioState.PLAYING;
            eventTarget.emit(AudioEvent.PLAYED);
            if (_this2._needSeek) {
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              _this2.seek(_this2._cacheTime)["catch"](function (e) {});
            }
          };
          innerAudioContext.onPlay(this._onPlay);
          this._onPause = function () {
            _this2._state = AudioState.PAUSED;
            try {
              var currentTime = _this2._innerAudioContext.currentTime;
              if (currentTime !== null && currentTime !== undefined) {
                _this2._cacheTime = currentTime;
              }
            } catch (_unused) {
              // Do nothing, cacheTime is not updated.
            }
            eventTarget.emit(AudioEvent.PAUSED);
          };
          innerAudioContext.onPause(this._onPause);
          this._onStop = function () {
            _this2._state = AudioState.STOPPED;
            // Reset all properties
            _this2._resetSeekCache();
            eventTarget.emit(AudioEvent.STOPPED);
            if (TAOBAO || TAOBAO_MINIGAME) {
              /**Unable to seek again after stop; After stop, regardless of whether the starttime has been set,
              the playback will always start from 0 again**/
            } else {
              var currentTime = _this2._innerAudioContext ? _this2._innerAudioContext.currentTime : 0;
              if (currentTime !== 0) {
                _this2._innerAudioContext.seek(0);
              }
            }
          };
          innerAudioContext.onStop(this._onStop);
          this._onSeeked = function () {
            eventTarget.emit(AudioEvent.SEEKED);
            _this2._seeking = false;
            if (_this2._needSeek) {
              _this2._needSeek = false;
              if (_this2._cacheTime.toFixed(2) !== _this2._innerAudioContext.currentTime.toFixed(2)) {
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                _this2.seek(_this2._cacheTime)["catch"](function (e) {});
              }
            }
          };
          innerAudioContext.onSeeked(this._onSeeked);
          this._onEnded = function () {
            _this2._state = AudioState.INIT;
            _this2._resetSeekCache();
            eventTarget.emit(AudioEvent.ENDED);
          };
          innerAudioContext.onEnded(this._onEnded);
        }
        _proto2.destroy = function destroy() {
          var _this3 = this;
          systemInfo.off('hide', this._onInterruptedBegin, this);
          systemInfo.off('show', this._onInterruptedEnd, this);
          if (this._innerAudioContext) {
            ['Play', 'Pause', 'Stop', 'Seeked', 'Ended'].forEach(function (event) {
              _this3._offEvent(event);
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
        };
        _proto2._onInterruptedBegin = function _onInterruptedBegin() {
          var _this4 = this;
          if (this._state === AudioState.PLAYING) {
            this.pause().then(function () {
              _this4._state = AudioState.INTERRUPTED;
              _this4._readyToHandleOnShow = true;
              _this4._eventTarget.emit(AudioEvent.INTERRUPTION_BEGIN);
              // eslint-disable-next-line @typescript-eslint/no-empty-function
            })["catch"](function (e) {});
          }
        };
        _proto2._onInterruptedEnd = function _onInterruptedEnd() {
          var _this5 = this;
          // We don't know whether onShow or resolve callback in pause promise is called at first.
          if (!this._readyToHandleOnShow) {
            this._eventTarget.once(AudioEvent.INTERRUPTION_END, this._onInterruptedEnd, this);
            return;
          }
          if (this._state === AudioState.INTERRUPTED) {
            this.play().then(function () {
              _this5._eventTarget.emit(AudioEvent.INTERRUPTION_END);
              // eslint-disable-next-line @typescript-eslint/no-empty-function
            })["catch"](function (e) {});
          }
          this._readyToHandleOnShow = false;
        };
        _proto2._offEvent = function _offEvent(eventName) {
          if (this["_on" + eventName]) {
            this._innerAudioContext["off" + eventName](this["_on" + eventName]);
            this["_on" + eventName] = null;
          }
        };
        AudioPlayerMinigame.load = function load(url) {
          return new Promise(function (resolve, reject) {
            AudioPlayerMinigame.loadNative(url).then(function (innerAudioContext) {
              resolve(new AudioPlayerMinigame(innerAudioContext));
            })["catch"](reject);
          });
        };
        AudioPlayerMinigame.loadNative = function loadNative(url) {
          return new Promise(function (resolve, reject) {
            var innerAudioContext = minigame.createInnerAudioContext();
            var timer = setTimeout(function () {
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
        };
        AudioPlayerMinigame.loadOneShotAudio = function loadOneShotAudio(url, volume) {
          return new Promise(function (resolve, reject) {
            AudioPlayerMinigame.loadNative(url).then(function (innerAudioContext) {
              // HACK: AudioPlayer should be a friend class in OneShotAudio
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              resolve(new OneShotAudioMinigame(innerAudioContext, volume));
            })["catch"](reject);
          });
        };
        _proto2.getPCMData = function getPCMData(channelIndex) {
          return undefined;
        };
        _proto2.seek = function seek(time) {
          var _this6 = this;
          return new Promise(function (resolve) {
            // KNOWN ISSUES: on Baidu: currentTime returns without numbers on decimal places
            if (_this6._state === AudioState.PLAYING && !_this6._seeking) {
              time = clamp(time, 0, _this6.duration);
              _this6._seeking = true;
              _this6._cacheTime = time;
              _this6._eventTarget.once(AudioEvent.SEEKED, resolve);
              _this6._innerAudioContext.seek(time);
            } else {
              //Huawei, vivo, Oppo platform, after stop, regardless of whether the seek has been called, the playback will always start from 0 again
              if ((HUAWEI || VIVO || OPPO) && (_this6._state === AudioState.STOPPED || _this6._state === AudioState.INIT)) {
                _this6._innerAudioContext.startTime = time;
              } else if (_this6._cacheTime !== time) {
                // Skip the invalid seek
                _this6._cacheTime = time;
                _this6._needSeek = true;
              }
              resolve();
            }
          });
        };
        _proto2.play = function play() {
          var _this7 = this;
          return new Promise(function (resolve) {
            _this7._eventTarget.once(AudioEvent.PLAYED, resolve);
            _this7._innerAudioContext.play();
          });
        };
        _proto2.pause = function pause() {
          var _this8 = this;
          return new Promise(function (resolve) {
            if (_this8.state !== AudioState.PLAYING) {
              resolve();
            } else {
              _this8._eventTarget.once(AudioEvent.PAUSED, resolve);
              _this8._innerAudioContext.pause();
            }
          });
        };
        _proto2.stop = function stop() {
          var _this9 = this;
          return new Promise(function (resolve) {
            if (AudioState.INIT === _this9._state) {
              _this9._resetSeekCache();
              resolve();
              return;
            }
            _this9._eventTarget.once(AudioEvent.STOPPED, resolve);
            _this9._innerAudioContext.stop();
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
        _createClass(AudioPlayerMinigame, [{
          key: "src",
          get: function get() {
            return this._innerAudioContext ? this._innerAudioContext.src : '';
          }
        }, {
          key: "type",
          get: function get() {
            return AudioType.MINIGAME_AUDIO;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }, {
          key: "loop",
          get: function get() {
            return this._innerAudioContext.loop;
          },
          set: function set(val) {
            this._innerAudioContext.loop = val;
          }
        }, {
          key: "volume",
          get: function get() {
            return this._innerAudioContext.volume;
          },
          set: function set(val) {
            val = clamp01(val);
            this._innerAudioContext.volume = val;
          }
        }, {
          key: "duration",
          get: function get() {
            // KNOWN ISSUES: duration doesn't work well
            // On WeChat platform, duration is 0 at the time audio is loaded.
            return this._innerAudioContext.duration;
          }
        }, {
          key: "currentTime",
          get: function get() {
            if ((HUAWEI || VIVO || OPPO) && (this._state === AudioState.STOPPED || this._state === AudioState.INIT)) {
              return this._innerAudioContext.startTime;
            }
            if (this._state !== AudioState.PLAYING || this._needSeek || this._seeking) {
              return this._cacheTime;
            }
            return this._innerAudioContext.currentTime;
          }
        }, {
          key: "sampleRate",
          get: function get() {
            return 0;
          }
        }]);
        return AudioPlayerMinigame;
      }(), (_applyDecoratedDescriptor(_class2.prototype, "seek", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "seek"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "play", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "play"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "pause", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "pause"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "stop", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "stop"), _class2.prototype)), _class2));
    }
  };
});