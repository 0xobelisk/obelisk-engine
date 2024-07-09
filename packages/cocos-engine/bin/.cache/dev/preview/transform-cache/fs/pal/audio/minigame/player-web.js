System.register("q-bundled:///fs/pal/audio/minigame/player-web.js", ["pal/minigame", "../../../cocos/core/index.js", "../../../cocos/core/platform/debug.js", "../../../cocos/core/event/index.js", "../audio-buffer-manager.js", "../audio-timer.js", "../operation-queue.js", "../type.js", "../../../cocos/game/index.js"], function (_export, _context) {
  "use strict";

  var minigame, clamp01, debug, EventTarget, audioBufferManager, AudioTimer, enqueueOperation, AudioEvent, AudioPCMDataView, AudioState, AudioType, Game, game, _minigame$tt, _minigame$tt$getAudio, _class2, audioContext, OneShotAudioWeb, AudioPlayerWeb;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_palMinigame) {
      minigame = _palMinigame.minigame;
    }, function (_cocosCoreIndexJs) {
      clamp01 = _cocosCoreIndexJs.clamp01;
    }, function (_cocosCorePlatformDebugJs) {
      debug = _cocosCorePlatformDebugJs;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_audioBufferManagerJs) {
      audioBufferManager = _audioBufferManagerJs.audioBufferManager;
    }, function (_audioTimerJs) {
      AudioTimer = _audioTimerJs.default;
    }, function (_operationQueueJs) {
      enqueueOperation = _operationQueueJs.enqueueOperation;
    }, function (_typeJs) {
      AudioEvent = _typeJs.AudioEvent;
      AudioPCMDataView = _typeJs.AudioPCMDataView;
      AudioState = _typeJs.AudioState;
      AudioType = _typeJs.AudioType;
    }, function (_cocosGameIndexJs) {
      Game = _cocosGameIndexJs.Game;
      game = _cocosGameIndexJs.game;
    }],
    execute: function () {
      audioContext = (_minigame$tt = minigame.tt) === null || _minigame$tt === void 0 ? void 0 : (_minigame$tt$getAudio = _minigame$tt.getAudioContext) === null || _minigame$tt$getAudio === void 0 ? void 0 : _minigame$tt$getAudio.call(_minigame$tt);
      _export("OneShotAudioWeb", OneShotAudioWeb = /*#__PURE__*/function () {
        function OneShotAudioWeb(audioBuffer, volume, url) {
          this._bufferSourceNode = void 0;
          this._onPlayCb = void 0;
          this._url = void 0;
          this._onEndCb = void 0;
          this._bufferSourceNode = audioContext.createBufferSource();
          this._bufferSourceNode.buffer = audioBuffer;
          this._bufferSourceNode.loop = false;
          this._url = url;
          var gainNode = audioContext.createGain();
          gainNode.gain.value = volume;
          this._bufferSourceNode.connect(gainNode);
          gainNode.connect(audioContext.destination);
        }
        var _proto = OneShotAudioWeb.prototype;
        _proto.play = function play() {
          var _this$onPlay,
            _this = this;
          this._bufferSourceNode.start();
          (_this$onPlay = this.onPlay) === null || _this$onPlay === void 0 ? void 0 : _this$onPlay.call(this);
          this._bufferSourceNode.onended = function () {
            var _this$_onEndCb;
            audioBufferManager.tryReleasingCache(_this._url);
            (_this$_onEndCb = _this._onEndCb) === null || _this$_onEndCb === void 0 ? void 0 : _this$_onEndCb.call(_this);
          };
        };
        _proto.stop = function stop() {
          this._bufferSourceNode.onended = null; // stop will call ended callback
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
      _export("AudioPlayerWeb", AudioPlayerWeb = (_class2 = /*#__PURE__*/function () {
        function AudioPlayerWeb(audioBuffer, url) {
          this._src = void 0;
          this._audioBuffer = void 0;
          this._sourceNode = void 0;
          this._gainNode = void 0;
          this._volume = 1;
          this._loop = false;
          this._state = AudioState.INIT;
          this._audioTimer = void 0;
          this._readyToHandleOnShow = false;
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
          this._gainNode = audioContext.createGain();
          this._gainNode.connect(audioContext.destination);
          this._src = url;
          // event
          game.on(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.on(Game.EVENT_RESUME, this._onInterruptedEnd, this);
        }
        var _proto2 = AudioPlayerWeb.prototype;
        _proto2.destroy = function destroy() {
          this._audioTimer.destroy();
          if (this._audioBuffer) {
            // NOTE: need to release AudioBuffer instance
            this._audioBuffer = null;
          }
          audioBufferManager.tryReleasingCache(this._src);
          game.off(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.off(Game.EVENT_RESUME, this._onInterruptedEnd, this);
        };
        _proto2._onInterruptedBegin = function _onInterruptedBegin() {
          var _this2 = this;
          if (this._state === AudioState.PLAYING) {
            this.pause().then(function () {
              _this2._state = AudioState.INTERRUPTED;
              _this2._readyToHandleOnShow = true;
              _this2._eventTarget.emit(AudioEvent.INTERRUPTION_BEGIN);
            })["catch"](function (e) {
              debug.warn('_onInterruptedBegin error', e);
            });
          }
        };
        _proto2._onInterruptedEnd = function _onInterruptedEnd() {
          var _this3 = this;
          // We don't know whether onShow or resolve callback in pause promise is called at first.
          if (!this._readyToHandleOnShow) {
            this._eventTarget.once(AudioEvent.INTERRUPTION_BEGIN, this._onInterruptedEnd, this);
            return;
          }
          if (this._state === AudioState.INTERRUPTED) {
            this.play().then(function () {
              _this3._eventTarget.emit(AudioEvent.INTERRUPTION_END);
            })["catch"](function (e) {
              debug.warn('_onInterruptedEnd error', e);
            });
          }
          this._readyToHandleOnShow = false;
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
            // NOTE: maybe url is a temp path, which is not reliable.
            // need to cache the decoded audio buffer.
            var cachedAudioBuffer = audioBufferManager.getCache(url);
            if (cachedAudioBuffer) {
              audioBufferManager.retainCache(url);
              resolve(cachedAudioBuffer);
              return;
            }
            // TODO: use pal/fs
            fsUtils.readArrayBuffer(url, function (err, arrayBuffer) {
              if (err) {
                reject(err);
                return;
              }
              audioContext.decodeAudioData(arrayBuffer).then(function (decodedAudioBuffer) {
                audioBufferManager.addCache(url, decodedAudioBuffer);
                resolve(decodedAudioBuffer);
              })["catch"](reject);
            });
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
        _proto2.getPCMData = function getPCMData(channelIndex) {
          return new AudioPCMDataView(this._audioBuffer.getChannelData(channelIndex), 1);
        };
        _proto2.seek = function seek(time) {
          var _this4 = this;
          return new Promise(function (resolve) {
            _this4._audioTimer.seek(time);
            if (_this4._state === AudioState.PLAYING) {
              // one AudioBufferSourceNode can't start twice
              // need to create a new one to start from the offset
              _this4._doPlay().then(resolve)["catch"](function (e) {
                debug.warn('seek error', e);
              });
            } else {
              resolve();
            }
          });
        };
        _proto2.play = function play() {
          return this._doPlay();
        }

        // The decorated play() method can't be call in seek()
        // so we define this method to ensure that the audio seeking works.
        ;
        _proto2._doPlay = function _doPlay() {
          var _this5 = this;
          return new Promise(function (resolve) {
            // one AudioBufferSourceNode can't start twice
            _this5._stopSourceNode();
            _this5._sourceNode = audioContext.createBufferSource();
            _this5._sourceNode.buffer = _this5._audioBuffer;
            _this5._sourceNode.loop = _this5._loop;
            _this5._sourceNode.connect(_this5._gainNode);
            _this5._sourceNode.start(0, _this5._audioTimer.currentTime);
            _this5._state = AudioState.PLAYING;
            _this5._audioTimer.start();
            _this5._sourceNode.onended = function () {
              _this5._audioTimer.stop();
              _this5._eventTarget.emit(AudioEvent.ENDED);
              _this5._state = AudioState.INIT;
            };
            resolve();
          });
        };
        _proto2._stopSourceNode = function _stopSourceNode() {
          try {
            if (this._sourceNode) {
              this._sourceNode.onended = null; // stop will call ended callback
              this._sourceNode.stop();
              this._sourceNode.disconnect();
              this._sourceNode.buffer = null;
              this._sourceNode = undefined;
            }
          } catch (e) {
            // sourceNode can't be stopped twice, especially on Safari.
          }
        };
        _proto2.pause = function pause() {
          if (this._state !== AudioState.PLAYING || !this._sourceNode) {
            return Promise.resolve();
          }
          this._audioTimer.pause();
          this._state = AudioState.PAUSED;
          this._stopSourceNode();
          return Promise.resolve();
        };
        _proto2.stop = function stop() {
          if (!this._sourceNode) {
            this._audioTimer.stop();
            this._state = AudioState.STOPPED;
            return Promise.resolve();
          }
          this._audioTimer.stop();
          this._state = AudioState.STOPPED;
          this._stopSourceNode();
          return Promise.resolve();
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
        _createClass(AudioPlayerWeb, [{
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
            this._gainNode.gain.value = val;
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
        }, {
          key: "sampleRate",
          get: function get() {
            return this._audioBuffer.sampleRate;
          }
        }]);
        return AudioPlayerWeb;
      }(), (_applyDecoratedDescriptor(_class2.prototype, "seek", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "seek"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "play", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "play"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "pause", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "pause"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "stop", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "stop"), _class2.prototype)), _class2));
    }
  };
});