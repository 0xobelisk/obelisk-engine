System.register("q-bundled:///fs/pal/audio/native/player.js", ["pal/system-info", "../type.js", "../../../cocos/core/event/index.js", "../../../cocos/core/global-exports.js", "../../../cocos/core/index.js", "../operation-queue.js", "../../system-info/enum-type/index.js", "../../../cocos/game/index.js"], function (_export, _context) {
  "use strict";

  var systemInfo, AudioType, AudioState, AudioEvent, AudioPCMDataView, EventTarget, legacyCC, clamp01, enqueueOperation, Platform, Game, game, _bufferConstructorMap, _class2, _class3, urlCount, audioEngine, INVALID_AUDIO_ID, AudioBufferFormat, bufferConstructorMap, OneShotAudio, AudioPlayer;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_typeJs) {
      AudioType = _typeJs.AudioType;
      AudioState = _typeJs.AudioState;
      AudioEvent = _typeJs.AudioEvent;
      AudioPCMDataView = _typeJs.AudioPCMDataView;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_cocosCoreGlobalExportsJs) {
      legacyCC = _cocosCoreGlobalExportsJs.legacyCC;
    }, function (_cocosCoreIndexJs) {
      clamp01 = _cocosCoreIndexJs.clamp01;
    }, function (_operationQueueJs) {
      enqueueOperation = _operationQueueJs.enqueueOperation;
    }, function (_systemInfoEnumTypeIndexJs) {
      Platform = _systemInfoEnumTypeIndexJs.Platform;
    }, function (_cocosGameIndexJs) {
      Game = _cocosGameIndexJs.Game;
      game = _cocosGameIndexJs.game;
    }],
    execute: function () {
      urlCount = {};
      audioEngine = jsb.AudioEngine;
      INVALID_AUDIO_ID = -1;
      (function (AudioBufferFormat) {
        AudioBufferFormat[AudioBufferFormat["UNKNOWN"] = 0] = "UNKNOWN";
        AudioBufferFormat[AudioBufferFormat["SIGNED_8"] = 1] = "SIGNED_8";
        AudioBufferFormat[AudioBufferFormat["UNSIGNED_8"] = 2] = "UNSIGNED_8";
        AudioBufferFormat[AudioBufferFormat["SIGNED_16"] = 3] = "SIGNED_16";
        AudioBufferFormat[AudioBufferFormat["UNSIGNED_16"] = 4] = "UNSIGNED_16";
        AudioBufferFormat[AudioBufferFormat["SIGNED_32"] = 5] = "SIGNED_32";
        AudioBufferFormat[AudioBufferFormat["UNSIGNED_32"] = 6] = "UNSIGNED_32";
        AudioBufferFormat[AudioBufferFormat["FLOAT_32"] = 7] = "FLOAT_32";
        AudioBufferFormat[AudioBufferFormat["FLOAT_64"] = 8] = "FLOAT_64";
      })(AudioBufferFormat || (AudioBufferFormat = {}));
      bufferConstructorMap = (_bufferConstructorMap = {}, _bufferConstructorMap[AudioBufferFormat.UNKNOWN] = undefined, _bufferConstructorMap[AudioBufferFormat.SIGNED_8] = {
        ctor: Int8Array,
        maxValue: 127
      }, _bufferConstructorMap[AudioBufferFormat.UNSIGNED_8] = {
        ctor: Uint8Array,
        maxValue: 255
      }, _bufferConstructorMap[AudioBufferFormat.SIGNED_16] = {
        ctor: Int16Array,
        maxValue: 32767
      }, _bufferConstructorMap[AudioBufferFormat.UNSIGNED_16] = {
        ctor: Uint16Array,
        maxValue: 65535
      }, _bufferConstructorMap[AudioBufferFormat.SIGNED_32] = {
        ctor: Int32Array,
        maxValue: 2147483647
      }, _bufferConstructorMap[AudioBufferFormat.UNSIGNED_32] = {
        ctor: Uint32Array,
        maxValue: 4294967295
      }, _bufferConstructorMap[AudioBufferFormat.FLOAT_32] = {
        ctor: Float32Array,
        maxValue: 1
      }, _bufferConstructorMap[AudioBufferFormat.FLOAT_64] = {
        ctor: Float64Array,
        maxValue: 1
      }, _bufferConstructorMap);
      _export("OneShotAudio", OneShotAudio = /*#__PURE__*/function () {
        function OneShotAudio(url, volume) {
          this._id = INVALID_AUDIO_ID;
          this._url = void 0;
          this._volume = void 0;
          this._onPlayCb = void 0;
          this._onEndCb = void 0;
          this._url = url;
          this._volume = volume;
        }
        var _proto = OneShotAudio.prototype;
        _proto.play = function play() {
          var _this = this,
            _this$onPlay;
          this._id = jsb.AudioEngine.play2d(this._url, false, this._volume);
          jsb.AudioEngine.setFinishCallback(this._id, function () {
            var _this$onEnd;
            (_this$onEnd = _this.onEnd) === null || _this$onEnd === void 0 ? void 0 : _this$onEnd.call(_this);
          });
          (_this$onPlay = this.onPlay) === null || _this$onPlay === void 0 ? void 0 : _this$onPlay.call(this);
        };
        _proto.stop = function stop() {
          if (this._id === INVALID_AUDIO_ID) {
            return;
          }
          jsb.AudioEngine.stop(this._id);
        };
        _createClass(OneShotAudio, [{
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
        return OneShotAudio;
      }());
      _export("AudioPlayer", AudioPlayer = (_class2 = (_class3 = /*#__PURE__*/function () {
        function AudioPlayer(url) {
          this._url = void 0;
          this._id = INVALID_AUDIO_ID;
          this._state = AudioState.INIT;
          this._pcmHeader = void 0;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._eventTarget = new EventTarget();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._operationQueue = [];
          // NOTE: we need to cache the state in case the audio id is invalid.
          this._cachedState = {
            duration: 1,
            // wrong value before playing
            loop: false,
            currentTime: 0,
            volume: 1
          };
          this._url = url;
          // this._pcmHeader = audioEngine.getPCMHeader(url);
          this._pcmHeader = null;
          // event
          game.on(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.on(Game.EVENT_RESUME, this._onInterruptedEnd, this);
        }
        var _proto2 = AudioPlayer.prototype;
        _proto2.destroy = function destroy() {
          game.off(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.off(Game.EVENT_RESUME, this._onInterruptedEnd, this);
          if (--urlCount[this._url] <= 0) {
            audioEngine.uncache(this._url);
          }
        };
        _proto2._onInterruptedBegin = function _onInterruptedBegin() {
          var _this2 = this;
          if (this._state === AudioState.PLAYING) {
            this.pause().then(function () {
              _this2._state = AudioState.INTERRUPTED;
              _this2._eventTarget.emit(AudioEvent.INTERRUPTION_BEGIN);
            })["catch"](function (e) {});
          }
        };
        _proto2._onInterruptedEnd = function _onInterruptedEnd() {
          var _this3 = this;
          if (this._state === AudioState.INTERRUPTED) {
            this.play().then(function () {
              _this3._eventTarget.emit(AudioEvent.INTERRUPTION_END);
            })["catch"](function (e) {});
          }
        };
        AudioPlayer.load = function load(url, opts) {
          return new Promise(function (resolve, reject) {
            AudioPlayer.loadNative(url, opts).then(function (url) {
              resolve(new AudioPlayer(url));
            })["catch"](function (err) {
              return reject(err);
            });
          });
        };
        AudioPlayer.loadNative = function loadNative(url, opts) {
          return new Promise(function (resolve, reject) {
            if (systemInfo.platform === Platform.WIN32) {
              // NOTE: audioEngine.preload() not works well on Win32 platform.
              // Especially when there is not audio output device. But still need to preload
              audioEngine.preload(url, function (isSuccess) {
                console.debug('somehow preload success on windows');
              });
              resolve(url);
            } else {
              audioEngine.preload(url, function (isSuccess) {
                if (isSuccess) {
                  resolve(url);
                } else {
                  reject(new Error('load audio failed'));
                }
              });
            }
          });
        };
        AudioPlayer.loadOneShotAudio = function loadOneShotAudio(url, volume, opts) {
          return new Promise(function (resolve, reject) {
            AudioPlayer.loadNative(url, opts).then(function (url) {
              // HACK: AudioPlayer should be a friend class in OneShotAudio
              resolve(new OneShotAudio(url, volume));
            })["catch"](reject);
          });
        };
        _proto2.getPCMData = function getPCMData(channelIndex) {
          var arrayBuffer = audioEngine.getOriginalPCMBuffer(this._url, channelIndex);
          if (this._pcmHeader === null) {
            this._pcmHeader = jsb.AudioEngine.getPCMHeader(this._url);
          }
          var audioBufferInfo = bufferConstructorMap[this._pcmHeader.audioFormat];
          if (!arrayBuffer || !audioBufferInfo) {
            return undefined;
          }
          return new AudioPCMDataView(arrayBuffer, audioBufferInfo.ctor, 1 / audioBufferInfo.maxValue);
        };
        _proto2.seek = function seek(time) {
          var _this4 = this;
          return new Promise(function (resolve) {
            // Duration is invalid before player
            // time = clamp(time, 0, this.duration);
            if (_this4._isValid) {
              audioEngine.setCurrentTime(_this4._id, time);
            }
            _this4._cachedState.currentTime = time;
            return resolve();
          });
        };
        _proto2.play = function play() {
          var _this5 = this;
          return new Promise(function (resolve) {
            if (_this5._isValid) {
              if (_this5._state === AudioState.PAUSED || _this5._state === AudioState.INTERRUPTED) {
                audioEngine.resume(_this5._id);
              } else if (_this5._state === AudioState.PLAYING) {
                audioEngine.pause(_this5._id);
                audioEngine.setCurrentTime(_this5._id, 0);
                audioEngine.resume(_this5._id);
              }
            } else {
              _this5._id = audioEngine.play2d(_this5._url, _this5._cachedState.loop, _this5._cachedState.volume);
              if (_this5._isValid) {
                if (_this5._cachedState.currentTime !== 0) {
                  audioEngine.setCurrentTime(_this5._id, _this5._cachedState.currentTime);
                  _this5._cachedState.currentTime = 0;
                }
                audioEngine.setFinishCallback(_this5._id, function () {
                  _this5._cachedState.currentTime = 0;
                  _this5._id = INVALID_AUDIO_ID;
                  _this5._state = AudioState.INIT;
                  _this5._eventTarget.emit(AudioEvent.ENDED);
                });
              }
            }
            _this5._state = AudioState.PLAYING;
            resolve();
          });
        };
        _proto2.pause = function pause() {
          var _this6 = this;
          return new Promise(function (resolve) {
            if (_this6._isValid) {
              audioEngine.pause(_this6._id);
            }
            _this6._state = AudioState.PAUSED;
            resolve();
          });
        };
        _proto2.stop = function stop() {
          var _this7 = this;
          return new Promise(function (resolve) {
            if (_this7._isValid) {
              audioEngine.stop(_this7._id);
            }
            _this7._state = AudioState.STOPPED;
            _this7._id = INVALID_AUDIO_ID;
            _this7._cachedState.currentTime = 0;
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
        _createClass(AudioPlayer, [{
          key: "_isValid",
          get: function get() {
            return this._id !== INVALID_AUDIO_ID;
          }
        }, {
          key: "src",
          get: function get() {
            return this._url;
          }
        }, {
          key: "type",
          get: function get() {
            return AudioType.NATIVE_AUDIO;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }, {
          key: "loop",
          get: function get() {
            if (!this._isValid) {
              return this._cachedState.loop;
            }
            return audioEngine.isLoop(this._id);
          },
          set: function set(val) {
            if (this._isValid) {
              audioEngine.setLoop(this._id, val);
            }
            this._cachedState.loop = val;
          }
        }, {
          key: "volume",
          get: function get() {
            if (!this._isValid) {
              return this._cachedState.volume;
            }
            return audioEngine.getVolume(this._id);
          },
          set: function set(val) {
            val = clamp01(val);
            if (this._isValid) {
              audioEngine.setVolume(this._id, val);
            }
            this._cachedState.volume = val;
          }
        }, {
          key: "duration",
          get: function get() {
            if (!this._isValid) {
              return this._cachedState.duration;
            }
            return audioEngine.getDuration(this._id);
          }
        }, {
          key: "currentTime",
          get: function get() {
            if (!this._isValid) {
              return this._cachedState.currentTime;
            }
            return audioEngine.getCurrentTime(this._id);
          }
        }, {
          key: "sampleRate",
          get: function get() {
            if (this._pcmHeader === null) {
              this._pcmHeader = jsb.AudioEngine.getPCMHeader(this._url);
            }
            return this._pcmHeader.sampleRate;
          }
        }]);
        return AudioPlayer;
      }(), _class3.maxAudioChannel = audioEngine.getMaxAudioInstance(), _class3), (_applyDecoratedDescriptor(_class2.prototype, "seek", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "seek"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "play", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "play"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "pause", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "pause"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "stop", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "stop"), _class2.prototype)), _class2)); // REMOVE_ME
      legacyCC.AudioPlayer = AudioPlayer;
    }
  };
});