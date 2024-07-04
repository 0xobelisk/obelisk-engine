System.register("q-bundled:///fs/pal/audio/web/player-web.js", ["../../../../virtual/internal%253Aconstants.js", "../type.js", "../../../cocos/core/event/index.js", "../../../cocos/core/index.js", "../../../cocos/core/platform/debug.js", "../operation-queue.js", "../audio-timer.js", "../audio-buffer-manager.js", "../../../cocos/game/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, AudioPCMDataView, AudioEvent, AudioState, AudioType, EventTarget, clamp01, debug, enqueueOperation, AudioTimer, audioBufferManager, Game, game, _class3, AudioContextClass, _contextRunningEvent, AudioContextAgent, audioContextAgent, OneShotAudioWeb, AudioPlayerWeb;
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
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_typeJs) {
      AudioPCMDataView = _typeJs.AudioPCMDataView;
      AudioEvent = _typeJs.AudioEvent;
      AudioState = _typeJs.AudioState;
      AudioType = _typeJs.AudioType;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_cocosCoreIndexJs) {
      clamp01 = _cocosCoreIndexJs.clamp01;
    }, function (_cocosCorePlatformDebugJs) {
      debug = _cocosCorePlatformDebugJs;
    }, function (_operationQueueJs) {
      enqueueOperation = _operationQueueJs.enqueueOperation;
    }, function (_audioTimerJs) {
      AudioTimer = _audioTimerJs.default;
    }, function (_audioBufferManagerJs) {
      audioBufferManager = _audioBufferManagerJs.audioBufferManager;
    }, function (_cocosGameIndexJs) {
      Game = _cocosGameIndexJs.Game;
      game = _cocosGameIndexJs.game;
    }],
    execute: function () {
      // NOTE: fix CI
      AudioContextClass = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
      _contextRunningEvent = 'on-context-running';
      _export("AudioContextAgent", AudioContextAgent = /*#__PURE__*/function () {
        function AudioContextAgent() {
          var _this = this;
          this._eventTarget = void 0;
          this._context = void 0;
          this._isRunning = false;
          this._context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
          this._eventTarget = new EventTarget();
          this._context.onstatechange = function () {
            if (_this._context.state === 'running') {
              _this._isRunning = true;
              _this._eventTarget.emit(_contextRunningEvent);
            } else {
              _this._isRunning = false;
            }
          };
        }
        var _proto = AudioContextAgent.prototype;
        _proto.onceRunning = function onceRunning(cb, target) {
          this._eventTarget.once(_contextRunningEvent, cb, target);
        };
        _proto.offRunning = function offRunning(cb, target) {
          this._eventTarget.off(_contextRunningEvent, cb, target);
        };
        _proto.decodeAudioData = function decodeAudioData(audioData) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var promise = _this2._context.decodeAudioData(audioData, function (audioBuffer) {
              resolve(audioBuffer);
            }, function (err) {
              // TODO: need to reject the error.
              // eslint-disable-next-line no-console
              console.error('failed to load Web Audio', err);
            });
            promise === null || promise === void 0 ? void 0 : promise["catch"](reject); // Safari doesn't support the promise based decodeAudioData
          });
        };
        _proto.runContext = function runContext() {
          var _this3 = this;
          return new Promise(function (resolve) {
            if (_this3.isRunning) {
              resolve();
              return;
            }
            var context = _this3._context;
            if (!context.resume) {
              resolve();
              return;
            }
            context.resume()["catch"](function (e) {
              debug.warn('runContext error', e);
            });
            if (context.state === 'running') {
              resolve();
              return;
            }
            // Force running audio context if state is not 'running', may be 'suspended' or 'interrupted'.
            var canvas = document.getElementById('GameCanvas');
            // HACK NOTE: if the user slide after touch start, the context cannot be resumed correctly.
            var onGesture = function onGesture() {
              context.resume().then(function () {
                canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('touchend', onGesture, {
                  capture: true
                });
                canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('mouseup', onGesture, {
                  capture: true
                });
                resolve();
              })["catch"](function (e) {
                debug.warn('onGesture resume error', e);
              });
            };
            canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('touchend', onGesture, {
              capture: true
            });
            canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mouseup', onGesture, {
              capture: true
            });
          });
        };
        _proto.createBufferSource = function createBufferSource(audioBuffer, loop) {
          var sourceBufferNode = this._context.createBufferSource();
          if (audioBuffer !== undefined) {
            sourceBufferNode.buffer = audioBuffer;
          }
          if (loop !== undefined) {
            sourceBufferNode.loop = loop;
          }
          return sourceBufferNode;
        };
        _proto.createGain = function createGain(volume) {
          if (volume === void 0) {
            volume = 1;
          }
          var gainNode = this._context.createGain();
          this.setGainValue(gainNode, volume);
          return gainNode;
        };
        _proto.setGainValue = function setGainValue(gain, volume) {
          if (gain.gain.setTargetAtTime) {
            try {
              gain.gain.setTargetAtTime(volume, this._context.currentTime, 0);
            } catch (e) {
              // Some unknown browsers may crash if timeConstant is 0
              gain.gain.setTargetAtTime(volume, this._context.currentTime, 0.01);
            }
          } else {
            gain.gain.value = volume;
          }
        };
        _proto.connectContext = function connectContext(audioNode) {
          if (!this._context) {
            return;
          }
          audioNode.connect(this._context.destination);
        };
        _createClass(AudioContextAgent, [{
          key: "isRunning",
          get: function get() {
            return this._isRunning;
          }
        }, {
          key: "currentTime",
          get: function get() {
            return this._context.currentTime;
          }
        }]);
        return AudioContextAgent;
      }());
      AudioContextAgent.support = !!AudioContextClass;
      if (AudioContextAgent.support) {
        audioContextAgent = new AudioContextAgent();
      }
      _export("OneShotAudioWeb", OneShotAudioWeb = /*#__PURE__*/function () {
        function OneShotAudioWeb(audioBuffer, volume, url) {
          this._duration = void 0;
          this._bufferSourceNode = void 0;
          this._onPlayCb = void 0;
          this._currentTimer = 0;
          this._url = void 0;
          this._onEndCb = void 0;
          this._duration = audioBuffer.duration;
          this._url = url;
          this._bufferSourceNode = audioContextAgent.createBufferSource(audioBuffer, false);
          var gainNode = audioContextAgent.createGain(volume);
          this._bufferSourceNode.connect(gainNode);
          audioContextAgent.connectContext(gainNode);
        }
        var _proto2 = OneShotAudioWeb.prototype;
        _proto2.play = function play() {
          var _this4 = this;
          if (EDITOR_NOT_IN_PREVIEW) {
            return;
          }
          this._bufferSourceNode.start();
          // audioContextAgent does exist
          audioContextAgent.runContext().then(function () {
            var _this4$onPlay;
            (_this4$onPlay = _this4.onPlay) === null || _this4$onPlay === void 0 ? void 0 : _this4$onPlay.call(_this4);
            _this4._currentTimer = window.setTimeout(function () {
              var _this4$onEnd;
              audioBufferManager.tryReleasingCache(_this4._url);
              (_this4$onEnd = _this4.onEnd) === null || _this4$onEnd === void 0 ? void 0 : _this4$onEnd.call(_this4);
            }, _this4._duration * 1000);
          })["catch"](function (e) {
            debug.warn('play error', e);
          });
        };
        _proto2.stop = function stop() {
          clearTimeout(this._currentTimer);
          audioBufferManager.tryReleasingCache(this._url);
          this._bufferSourceNode.stop();
          this._bufferSourceNode.disconnect();
          this._bufferSourceNode.buffer = null;
        };
        _createClass(OneShotAudioWeb, [{
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
        return OneShotAudioWeb;
      }());
      _export("AudioPlayerWeb", AudioPlayerWeb = (_class3 = /*#__PURE__*/function () {
        function AudioPlayerWeb(audioBuffer, url) {
          this._src = void 0;
          this._audioBuffer = void 0;
          this._sourceNode = void 0;
          this._gainNode = void 0;
          this._currentTimer = 0;
          this._volume = 1;
          this._loop = false;
          this._state = AudioState.INIT;
          this._audioTimer = void 0;
          this._runningCallback = void 0;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._eventTarget = new EventTarget();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._operationQueue = [];
          this._audioBuffer = audioBuffer;
          this._audioTimer = new AudioTimer(audioBuffer);
          this._gainNode = audioContextAgent.createGain();
          audioContextAgent.connectContext(this._gainNode);
          this._src = url;
          // event
          game.on(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.on(Game.EVENT_RESUME, this._onInterruptedEnd, this);
        }
        var _proto3 = AudioPlayerWeb.prototype;
        _proto3.destroy = function destroy() {
          window.clearTimeout(this._currentTimer);
          this._audioTimer.destroy();
          if (this._audioBuffer) {
            // NOTE: need to release AudioBuffer instance
            this._audioBuffer = null;
          }
          audioBufferManager.tryReleasingCache(this._src);
          game.off(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.off(Game.EVENT_RESUME, this._onInterruptedEnd, this);
          this.offRunning();
        };
        AudioPlayerWeb.load = function load(url) {
          return new Promise(function (resolve, reject) {
            AudioPlayerWeb.loadNative(url).then(function (audioBuffer) {
              resolve(new AudioPlayerWeb(audioBuffer, url));
            })["catch"](reject);
          });
        };
        AudioPlayerWeb.loadNative = function loadNative(url) {
          return new Promise(function (resolve, reject) {
            var cachedAudioBuffer = audioBufferManager.getCache(url);
            if (cachedAudioBuffer) {
              audioBufferManager.retainCache(url);
              resolve(cachedAudioBuffer);
              return;
            }
            var xhr = new XMLHttpRequest();
            var errInfo = "load audio failed: " + url + ", status: ";
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function () {
              if (xhr.status === 200 || xhr.status === 0) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                audioContextAgent.decodeAudioData(xhr.response).then(function (decodedAudioBuffer) {
                  audioBufferManager.addCache(url, decodedAudioBuffer);
                  resolve(decodedAudioBuffer);
                })["catch"](function (e) {
                  debug.warn('loadNative error', url, e);
                });
              } else {
                reject(new Error("" + errInfo + xhr.status + "(no response)"));
              }
            };
            xhr.onerror = function () {
              reject(new Error("" + errInfo + xhr.status + "(error)"));
            };
            xhr.ontimeout = function () {
              reject(new Error("" + errInfo + xhr.status + "(time out)"));
            };
            xhr.onabort = function () {
              reject(new Error("" + errInfo + xhr.status + "(abort)"));
            };
            xhr.send(null);
          });
        };
        AudioPlayerWeb.loadOneShotAudio = function loadOneShotAudio(url, volume) {
          return new Promise(function (resolve, reject) {
            AudioPlayerWeb.loadNative(url).then(function (audioBuffer) {
              // HACK: AudioPlayer should be a friend class in OneShotAudio
              var oneShotAudio = new OneShotAudioWeb(audioBuffer, volume, url);
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              resolve(oneShotAudio);
            })["catch"](reject);
          });
        };
        _proto3.getPCMData = function getPCMData(channelIndex) {
          return new AudioPCMDataView(this._audioBuffer.getChannelData(channelIndex), 1);
        };
        _proto3._onInterruptedBegin = function _onInterruptedBegin() {
          var _this5 = this;
          if (this._state === AudioState.PLAYING) {
            this.pause().then(function () {
              _this5._state = AudioState.INTERRUPTED;
              _this5._eventTarget.emit(AudioEvent.INTERRUPTION_BEGIN);
            })["catch"](function (e) {
              debug.warn('_onInterruptedBegin error', e);
            });
          }
        };
        _proto3._onInterruptedEnd = function _onInterruptedEnd() {
          var _this6 = this;
          if (this._state === AudioState.INTERRUPTED) {
            this.play().then(function () {
              _this6._eventTarget.emit(AudioEvent.INTERRUPTION_END);
            })["catch"](function (e) {
              debug.warn('_onInterruptedEnd error', e);
            });
          }
        };
        _proto3.offRunning = function offRunning() {
          if (this._runningCallback) {
            audioContextAgent.offRunning(this._runningCallback);
            this._runningCallback = undefined;
          }
        };
        _proto3.seek = function seek(time) {
          var _this7 = this;
          return new Promise(function (resolve) {
            _this7.offRunning();
            _this7._audioTimer.seek(time);
            if (_this7._state === AudioState.PLAYING) {
              // one AudioBufferSourceNode can't start twice
              // need to create a new one to start from the offset
              _this7._doPlay().then(resolve)["catch"](function (e) {
                debug.warn('seek error', e);
              });
            } else {
              resolve();
            }
          });
        };
        _proto3.play = function play() {
          this.offRunning();
          if (EDITOR_NOT_IN_PREVIEW) {
            return Promise.resolve();
          }
          return this._doPlay();
        }

        // The decorated play() method can't be call in seek()
        // so we define this method to ensure that the audio seeking works.
        ;
        _proto3._doPlay = function _doPlay() {
          var _this8 = this;
          return new Promise(function (resolve) {
            if (audioContextAgent.isRunning) {
              _this8._startSourceNode();
              resolve();
            } else {
              _this8.offRunning();
              _this8._runningCallback = function () {
                _this8._startSourceNode();
                resolve();
              };
              // Running event may be emit when:
              // - manually resume audio context.
              // - system automatically resume audio context when enter foreground from background.
              audioContextAgent.onceRunning(_this8._runningCallback);
              // Ensure resume context.
              audioContextAgent.runContext()["catch"](function (e) {
                debug.warn('doPlay error', e);
              });
            }
          });
        };
        _proto3._startSourceNode = function _startSourceNode() {
          var _this9 = this;
          // one AudioBufferSourceNode can't start twice
          this._stopSourceNode();
          this._sourceNode = audioContextAgent.createBufferSource(this._audioBuffer, this.loop);
          this._sourceNode.connect(this._gainNode);
          this._sourceNode.loop = this._loop;
          this._sourceNode.start(0, this._audioTimer.currentTime);
          this._state = AudioState.PLAYING;
          this._audioTimer.start();

          /* still not supported by all platforms *
          this._sourceNode.onended = this._onEnded;
          /* doing it manually for now */
          var checkEnded = function checkEnded() {
            if (_this9.loop) {
              _this9._currentTimer = window.setTimeout(checkEnded, _this9._audioBuffer.duration * 1000);
            } else {
              // do ended
              _this9._audioTimer.stop();
              _this9._eventTarget.emit(AudioEvent.ENDED);
              _this9._state = AudioState.INIT;
            }
          };
          window.clearTimeout(this._currentTimer);
          this._currentTimer = window.setTimeout(checkEnded, (this._audioBuffer.duration - this._audioTimer.currentTime) * 1000);
        };
        _proto3._stopSourceNode = function _stopSourceNode() {
          try {
            if (this._sourceNode) {
              this._sourceNode.stop();
              this._sourceNode.disconnect();
              this._sourceNode.buffer = null;
              this._sourceNode = undefined;
            }
          } catch (e) {
            // sourceNode can't be stopped twice, especially on Safari.
          }
        };
        _proto3.pause = function pause() {
          this.offRunning();
          if (this._state !== AudioState.PLAYING || !this._sourceNode) {
            return Promise.resolve();
          }
          this._audioTimer.pause();
          this._state = AudioState.PAUSED;
          window.clearTimeout(this._currentTimer);
          this._stopSourceNode();
          return Promise.resolve();
        };
        _proto3.stop = function stop() {
          this.offRunning();
          if (!this._sourceNode) {
            this._audioTimer.stop();
            this._state = AudioState.STOPPED;
            return Promise.resolve();
          }
          this._audioTimer.stop();
          this._state = AudioState.STOPPED;
          window.clearTimeout(this._currentTimer);
          this._stopSourceNode();
          return Promise.resolve();
        };
        _proto3.onInterruptionBegin = function onInterruptionBegin(cb) {
          this._eventTarget.on(AudioEvent.INTERRUPTION_BEGIN, cb);
        };
        _proto3.offInterruptionBegin = function offInterruptionBegin(cb) {
          this._eventTarget.off(AudioEvent.INTERRUPTION_BEGIN, cb);
        };
        _proto3.onInterruptionEnd = function onInterruptionEnd(cb) {
          this._eventTarget.on(AudioEvent.INTERRUPTION_END, cb);
        };
        _proto3.offInterruptionEnd = function offInterruptionEnd(cb) {
          this._eventTarget.off(AudioEvent.INTERRUPTION_END, cb);
        };
        _proto3.onEnded = function onEnded(cb) {
          this._eventTarget.on(AudioEvent.ENDED, cb);
        };
        _proto3.offEnded = function offEnded(cb) {
          this._eventTarget.off(AudioEvent.ENDED, cb);
        };
        _createClass(AudioPlayerWeb, [{
          key: "sampleRate",
          get: function get() {
            return this._audioBuffer.sampleRate;
          }
        }, {
          key: "src",
          get: function get() {
            return this._src;
          }
        }, {
          key: "type",
          get: function get() {
            return AudioType.WEB_AUDIO;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }, {
          key: "loop",
          get: function get() {
            return this._loop;
          },
          set: function set(val) {
            this._loop = val;
            if (this._sourceNode) {
              this._sourceNode.loop = val;
            }
          }
        }, {
          key: "volume",
          get: function get() {
            return this._volume;
          },
          set: function set(val) {
            val = clamp01(val);
            this._volume = val;
            audioContextAgent.setGainValue(this._gainNode, val);
          }
        }, {
          key: "duration",
          get: function get() {
            return this._audioBuffer.duration;
          }
        }, {
          key: "currentTime",
          get: function get() {
            return this._audioTimer.currentTime;
          }
        }]);
        return AudioPlayerWeb;
      }(), (_applyDecoratedDescriptor(_class3.prototype, "seek", [enqueueOperation], Object.getOwnPropertyDescriptor(_class3.prototype, "seek"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "play", [enqueueOperation], Object.getOwnPropertyDescriptor(_class3.prototype, "play"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "pause", [enqueueOperation], Object.getOwnPropertyDescriptor(_class3.prototype, "pause"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "stop", [enqueueOperation], Object.getOwnPropertyDescriptor(_class3.prototype, "stop"), _class3.prototype)), _class3));
    }
  };
});