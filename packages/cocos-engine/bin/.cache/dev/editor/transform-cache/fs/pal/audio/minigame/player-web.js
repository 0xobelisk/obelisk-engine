System.register("q-bundled:///fs/pal/audio/minigame/player-web.js", ["pal/minigame", "../../../cocos/core/index.js", "../../../cocos/core/platform/debug.js", "../../../cocos/core/event/index.js", "../audio-buffer-manager.js", "../audio-timer.js", "../operation-queue.js", "../type.js", "../../../cocos/game/index.js"], function (_export, _context) {
  "use strict";

  var minigame, clamp01, debug, EventTarget, audioBufferManager, AudioTimer, enqueueOperation, AudioEvent, AudioPCMDataView, AudioState, AudioType, Game, game, OneShotAudioWeb, _minigame$tt, _minigame$tt$getAudio, _class2, audioContext, AudioPlayerWeb;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  _export("OneShotAudioWeb", void 0);
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
      _export("OneShotAudioWeb", OneShotAudioWeb = class OneShotAudioWeb {
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
        constructor(audioBuffer, volume, url) {
          this._bufferSourceNode = void 0;
          this._onPlayCb = void 0;
          this._url = void 0;
          this._onEndCb = void 0;
          this._bufferSourceNode = audioContext.createBufferSource();
          this._bufferSourceNode.buffer = audioBuffer;
          this._bufferSourceNode.loop = false;
          this._url = url;
          const gainNode = audioContext.createGain();
          gainNode.gain.value = volume;
          this._bufferSourceNode.connect(gainNode);
          gainNode.connect(audioContext.destination);
        }
        play() {
          var _this$onPlay;
          this._bufferSourceNode.start();
          (_this$onPlay = this.onPlay) === null || _this$onPlay === void 0 ? void 0 : _this$onPlay.call(this);
          this._bufferSourceNode.onended = () => {
            var _this$_onEndCb;
            audioBufferManager.tryReleasingCache(this._url);
            (_this$_onEndCb = this._onEndCb) === null || _this$_onEndCb === void 0 ? void 0 : _this$_onEndCb.call(this);
          };
        }
        stop() {
          this._bufferSourceNode.onended = null; // stop will call ended callback
          audioBufferManager.tryReleasingCache(this._url);
          this._bufferSourceNode.stop();
          this._bufferSourceNode.disconnect();
          this._bufferSourceNode.buffer = null;
        }
      });
      _export("AudioPlayerWeb", AudioPlayerWeb = (_class2 = class AudioPlayerWeb {
        constructor(audioBuffer, url) {
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
        destroy() {
          this._audioTimer.destroy();
          if (this._audioBuffer) {
            // NOTE: need to release AudioBuffer instance
            this._audioBuffer = null;
          }
          audioBufferManager.tryReleasingCache(this._src);
          game.off(Game.EVENT_PAUSE, this._onInterruptedBegin, this);
          game.off(Game.EVENT_RESUME, this._onInterruptedEnd, this);
        }
        _onInterruptedBegin() {
          if (this._state === AudioState.PLAYING) {
            this.pause().then(() => {
              this._state = AudioState.INTERRUPTED;
              this._readyToHandleOnShow = true;
              this._eventTarget.emit(AudioEvent.INTERRUPTION_BEGIN);
            }).catch(e => {
              debug.warn('_onInterruptedBegin error', e);
            });
          }
        }
        _onInterruptedEnd() {
          // We don't know whether onShow or resolve callback in pause promise is called at first.
          if (!this._readyToHandleOnShow) {
            this._eventTarget.once(AudioEvent.INTERRUPTION_BEGIN, this._onInterruptedEnd, this);
            return;
          }
          if (this._state === AudioState.INTERRUPTED) {
            this.play().then(() => {
              this._eventTarget.emit(AudioEvent.INTERRUPTION_END);
            }).catch(e => {
              debug.warn('_onInterruptedEnd error', e);
            });
          }
          this._readyToHandleOnShow = false;
        }
        static load(url) {
          return new Promise((resolve, reject) => {
            AudioPlayerWeb.loadNative(url).then(audioBuffer => {
              resolve(new AudioPlayerWeb(audioBuffer, url));
            }).catch(reject);
          });
        }
        static loadNative(url) {
          return new Promise((resolve, reject) => {
            // NOTE: maybe url is a temp path, which is not reliable.
            // need to cache the decoded audio buffer.
            const cachedAudioBuffer = audioBufferManager.getCache(url);
            if (cachedAudioBuffer) {
              audioBufferManager.retainCache(url);
              resolve(cachedAudioBuffer);
              return;
            }
            // TODO: use pal/fs
            fsUtils.readArrayBuffer(url, (err, arrayBuffer) => {
              if (err) {
                reject(err);
                return;
              }
              audioContext.decodeAudioData(arrayBuffer).then(decodedAudioBuffer => {
                audioBufferManager.addCache(url, decodedAudioBuffer);
                resolve(decodedAudioBuffer);
              }).catch(reject);
            });
          });
        }
        static loadOneShotAudio(url, volume) {
          return new Promise((resolve, reject) => {
            AudioPlayerWeb.loadNative(url).then(audioBuffer => {
              // HACK: AudioPlayer should be a friend class in OneShotAudio
              const oneShotAudio = new OneShotAudioWeb(audioBuffer, volume, url);
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              resolve(oneShotAudio);
            }).catch(reject);
          });
        }
        get src() {
          return this._src;
        }
        get type() {
          return AudioType.WEB_AUDIO;
        }
        get state() {
          return this._state;
        }
        get loop() {
          return this._loop;
        }
        set loop(val) {
          this._loop = val;
          if (this._sourceNode) {
            this._sourceNode.loop = val;
          }
        }
        get volume() {
          return this._volume;
        }
        set volume(val) {
          val = clamp01(val);
          this._volume = val;
          this._gainNode.gain.value = val;
        }
        get duration() {
          return this._audioBuffer.duration;
        }
        get currentTime() {
          return this._audioTimer.currentTime;
        }
        get sampleRate() {
          return this._audioBuffer.sampleRate;
        }
        getPCMData(channelIndex) {
          return new AudioPCMDataView(this._audioBuffer.getChannelData(channelIndex), 1);
        }
        seek(time) {
          return new Promise(resolve => {
            this._audioTimer.seek(time);
            if (this._state === AudioState.PLAYING) {
              // one AudioBufferSourceNode can't start twice
              // need to create a new one to start from the offset
              this._doPlay().then(resolve).catch(e => {
                debug.warn('seek error', e);
              });
            } else {
              resolve();
            }
          });
        }
        play() {
          return this._doPlay();
        }

        // The decorated play() method can't be call in seek()
        // so we define this method to ensure that the audio seeking works.
        _doPlay() {
          return new Promise(resolve => {
            // one AudioBufferSourceNode can't start twice
            this._stopSourceNode();
            this._sourceNode = audioContext.createBufferSource();
            this._sourceNode.buffer = this._audioBuffer;
            this._sourceNode.loop = this._loop;
            this._sourceNode.connect(this._gainNode);
            this._sourceNode.start(0, this._audioTimer.currentTime);
            this._state = AudioState.PLAYING;
            this._audioTimer.start();
            this._sourceNode.onended = () => {
              this._audioTimer.stop();
              this._eventTarget.emit(AudioEvent.ENDED);
              this._state = AudioState.INIT;
            };
            resolve();
          });
        }
        _stopSourceNode() {
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
        }
        pause() {
          if (this._state !== AudioState.PLAYING || !this._sourceNode) {
            return Promise.resolve();
          }
          this._audioTimer.pause();
          this._state = AudioState.PAUSED;
          this._stopSourceNode();
          return Promise.resolve();
        }
        stop() {
          if (!this._sourceNode) {
            this._audioTimer.stop();
            this._state = AudioState.STOPPED;
            return Promise.resolve();
          }
          this._audioTimer.stop();
          this._state = AudioState.STOPPED;
          this._stopSourceNode();
          return Promise.resolve();
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