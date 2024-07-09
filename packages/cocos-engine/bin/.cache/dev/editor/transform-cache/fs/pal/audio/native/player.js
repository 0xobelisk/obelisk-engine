System.register("q-bundled:///fs/pal/audio/native/player.js", ["pal/system-info", "../type.js", "../../../cocos/core/event/index.js", "../../../cocos/core/global-exports.js", "../../../cocos/core/index.js", "../operation-queue.js", "../../system-info/enum-type/index.js", "../../../cocos/game/index.js"], function (_export, _context) {
  "use strict";

  var systemInfo, AudioType, AudioState, AudioEvent, AudioPCMDataView, EventTarget, legacyCC, clamp01, enqueueOperation, Platform, Game, game, OneShotAudio, _class2, _class3, urlCount, audioEngine, INVALID_AUDIO_ID, AudioBufferFormat, bufferConstructorMap, AudioPlayer;
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
  _export("OneShotAudio", void 0);
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
      bufferConstructorMap = {
        [AudioBufferFormat.UNKNOWN]: undefined,
        [AudioBufferFormat.SIGNED_8]: {
          ctor: Int8Array,
          maxValue: 127
        },
        [AudioBufferFormat.UNSIGNED_8]: {
          ctor: Uint8Array,
          maxValue: 255
        },
        [AudioBufferFormat.SIGNED_16]: {
          ctor: Int16Array,
          maxValue: 32767
        },
        [AudioBufferFormat.UNSIGNED_16]: {
          ctor: Uint16Array,
          maxValue: 65535
        },
        [AudioBufferFormat.SIGNED_32]: {
          ctor: Int32Array,
          maxValue: 2147483647
        },
        [AudioBufferFormat.UNSIGNED_32]: {
          ctor: Uint32Array,
          maxValue: 4294967295
        },
        // decoded float data is normalized data, so we specify the maxValue as 1.
        [AudioBufferFormat.FLOAT_32]: {
          ctor: Float32Array,
          maxValue: 1
        },
        [AudioBufferFormat.FLOAT_64]: {
          ctor: Float64Array,
          maxValue: 1
        }
      };
      _export("OneShotAudio", OneShotAudio = class OneShotAudio {
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
        constructor(url, volume) {
          this._id = INVALID_AUDIO_ID;
          this._url = void 0;
          this._volume = void 0;
          this._onPlayCb = void 0;
          this._onEndCb = void 0;
          this._url = url;
          this._volume = volume;
        }
        play() {
          var _this$onPlay;
          this._id = jsb.AudioEngine.play2d(this._url, false, this._volume);
          jsb.AudioEngine.setFinishCallback(this._id, () => {
            var _this$onEnd;
            (_this$onEnd = this.onEnd) === null || _this$onEnd === void 0 ? void 0 : _this$onEnd.call(this);
          });
          (_this$onPlay = this.onPlay) === null || _this$onPlay === void 0 ? void 0 : _this$onPlay.call(this);
        }
        stop() {
          if (this._id === INVALID_AUDIO_ID) {
            return;
          }
          jsb.AudioEngine.stop(this._id);
        }
      });
      _export("AudioPlayer", AudioPlayer = (_class2 = (_class3 = class AudioPlayer {
        constructor(url) {
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
        destroy() {
          game.off(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.off(Game.EVENT_RESUME, this._onInterruptedEnd, this);
          if (--urlCount[this._url] <= 0) {
            audioEngine.uncache(this._url);
          }
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
        static load(url, opts) {
          return new Promise((resolve, reject) => {
            AudioPlayer.loadNative(url, opts).then(url => {
              resolve(new AudioPlayer(url));
            }).catch(err => reject(err));
          });
        }
        static loadNative(url, opts) {
          return new Promise((resolve, reject) => {
            if (systemInfo.platform === Platform.WIN32) {
              // NOTE: audioEngine.preload() not works well on Win32 platform.
              // Especially when there is not audio output device. But still need to preload
              audioEngine.preload(url, isSuccess => {
                console.debug('somehow preload success on windows');
              });
              resolve(url);
            } else {
              audioEngine.preload(url, isSuccess => {
                if (isSuccess) {
                  resolve(url);
                } else {
                  reject(new Error('load audio failed'));
                }
              });
            }
          });
        }
        static loadOneShotAudio(url, volume, opts) {
          return new Promise((resolve, reject) => {
            AudioPlayer.loadNative(url, opts).then(url => {
              // HACK: AudioPlayer should be a friend class in OneShotAudio
              resolve(new OneShotAudio(url, volume));
            }).catch(reject);
          });
        }
        get _isValid() {
          return this._id !== INVALID_AUDIO_ID;
        }
        get src() {
          return this._url;
        }
        get type() {
          return AudioType.NATIVE_AUDIO;
        }
        get state() {
          return this._state;
        }
        get loop() {
          if (!this._isValid) {
            return this._cachedState.loop;
          }
          return audioEngine.isLoop(this._id);
        }
        set loop(val) {
          if (this._isValid) {
            audioEngine.setLoop(this._id, val);
          }
          this._cachedState.loop = val;
        }
        get volume() {
          if (!this._isValid) {
            return this._cachedState.volume;
          }
          return audioEngine.getVolume(this._id);
        }
        set volume(val) {
          val = clamp01(val);
          if (this._isValid) {
            audioEngine.setVolume(this._id, val);
          }
          this._cachedState.volume = val;
        }
        get duration() {
          if (!this._isValid) {
            return this._cachedState.duration;
          }
          return audioEngine.getDuration(this._id);
        }
        get currentTime() {
          if (!this._isValid) {
            return this._cachedState.currentTime;
          }
          return audioEngine.getCurrentTime(this._id);
        }
        get sampleRate() {
          if (this._pcmHeader === null) {
            this._pcmHeader = jsb.AudioEngine.getPCMHeader(this._url);
          }
          return this._pcmHeader.sampleRate;
        }
        getPCMData(channelIndex) {
          const arrayBuffer = audioEngine.getOriginalPCMBuffer(this._url, channelIndex);
          if (this._pcmHeader === null) {
            this._pcmHeader = jsb.AudioEngine.getPCMHeader(this._url);
          }
          const audioBufferInfo = bufferConstructorMap[this._pcmHeader.audioFormat];
          if (!arrayBuffer || !audioBufferInfo) {
            return undefined;
          }
          return new AudioPCMDataView(arrayBuffer, audioBufferInfo.ctor, 1 / audioBufferInfo.maxValue);
        }
        seek(time) {
          return new Promise(resolve => {
            // Duration is invalid before player
            // time = clamp(time, 0, this.duration);
            if (this._isValid) {
              audioEngine.setCurrentTime(this._id, time);
            }
            this._cachedState.currentTime = time;
            return resolve();
          });
        }
        play() {
          return new Promise(resolve => {
            if (this._isValid) {
              if (this._state === AudioState.PAUSED || this._state === AudioState.INTERRUPTED) {
                audioEngine.resume(this._id);
              } else if (this._state === AudioState.PLAYING) {
                audioEngine.pause(this._id);
                audioEngine.setCurrentTime(this._id, 0);
                audioEngine.resume(this._id);
              }
            } else {
              this._id = audioEngine.play2d(this._url, this._cachedState.loop, this._cachedState.volume);
              if (this._isValid) {
                if (this._cachedState.currentTime !== 0) {
                  audioEngine.setCurrentTime(this._id, this._cachedState.currentTime);
                  this._cachedState.currentTime = 0;
                }
                audioEngine.setFinishCallback(this._id, () => {
                  this._cachedState.currentTime = 0;
                  this._id = INVALID_AUDIO_ID;
                  this._state = AudioState.INIT;
                  this._eventTarget.emit(AudioEvent.ENDED);
                });
              }
            }
            this._state = AudioState.PLAYING;
            resolve();
          });
        }
        pause() {
          return new Promise(resolve => {
            if (this._isValid) {
              audioEngine.pause(this._id);
            }
            this._state = AudioState.PAUSED;
            resolve();
          });
        }
        stop() {
          return new Promise(resolve => {
            if (this._isValid) {
              audioEngine.stop(this._id);
            }
            this._state = AudioState.STOPPED;
            this._id = INVALID_AUDIO_ID;
            this._cachedState.currentTime = 0;
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
      }, _class3.maxAudioChannel = audioEngine.getMaxAudioInstance(), _class3), (_applyDecoratedDescriptor(_class2.prototype, "seek", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "seek"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "play", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "play"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "pause", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "pause"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "stop", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2.prototype, "stop"), _class2.prototype)), _class2)); // REMOVE_ME
      legacyCC.AudioPlayer = AudioPlayer;
    }
  };
});