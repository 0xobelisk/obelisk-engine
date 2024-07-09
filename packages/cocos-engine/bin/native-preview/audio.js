System.register(['./node-event-18d96a1b.js', './index-ce98320e.js', './deprecated-f8df8d32.js', './director-dc238483.js', './builtin-res-mgr.jsb-c9e8e53a.js', './decorators-b63b63a2.js', './find-7a03d1cc.js', './device-90bc7390.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './scene-asset.jsb-0d4c6201.js', './touch-af62e326.js'], (function (exports) {
    'use strict';
    var _applyDecoratedDescriptor, Asset, Component, legacyCC, EventTarget, systemInfo, Platform, clamp01, ccclass, applyDecoratedInitializer, override, serializable, fastRemoveAt, type, clamp, replaceProperty, markAsWarning, setClassAlias, game, Game, downloader, factory;
    return {
        setters: [function (module) {
            _applyDecoratedDescriptor = module.H;
            Asset = module.A;
            Component = module.C;
        }, function (module) {
            legacyCC = module.l;
            EventTarget = module.aD;
            systemInfo = module.bY;
            Platform = module.bR;
            clamp01 = module.G;
            ccclass = module.by;
            applyDecoratedInitializer = module.bx;
            override = module.bd;
            serializable = module.bf;
            fastRemoveAt = module.bz;
            type = module.bw;
            clamp = module.F;
            replaceProperty = module.ag;
            markAsWarning = module.ai;
            setClassAlias = module.cj;
        }, function (module) {
            game = module.g;
            Game = module.G;
        }, function () {}, function (module) {
            downloader = module.aD;
            factory = module.aG;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            let AudioEvent;
            (function (AudioEvent) {
              AudioEvent["PLAYED"] = "play";
              AudioEvent["PAUSED"] = "pause";
              AudioEvent["STOPPED"] = "stop";
              AudioEvent["SEEKED"] = "seeked";
              AudioEvent["ENDED"] = "ended";
              AudioEvent["INTERRUPTION_BEGIN"] = "interruptionBegin";
              AudioEvent["INTERRUPTION_END"] = "interruptionEnd";
              AudioEvent["USER_GESTURE"] = "on_gesture";
            })(AudioEvent || (AudioEvent = {}));
            let AudioType;
            (function (AudioType) {
              AudioType[AudioType["DOM_AUDIO"] = 0] = "DOM_AUDIO";
              AudioType[AudioType["WEB_AUDIO"] = 1] = "WEB_AUDIO";
              AudioType[AudioType["MINIGAME_AUDIO"] = 2] = "MINIGAME_AUDIO";
              AudioType[AudioType["NATIVE_AUDIO"] = 3] = "NATIVE_AUDIO";
              AudioType[AudioType["UNKNOWN_AUDIO"] = 4] = "UNKNOWN_AUDIO";
            })(AudioType || (AudioType = {}));
            let AudioState;
            (function (AudioState) {
              AudioState[AudioState["INIT"] = 0] = "INIT";
              AudioState[AudioState["PLAYING"] = 1] = "PLAYING";
              AudioState[AudioState["PAUSED"] = 2] = "PAUSED";
              AudioState[AudioState["STOPPED"] = 3] = "STOPPED";
              AudioState[AudioState["INTERRUPTED"] = 4] = "INTERRUPTED";
            })(AudioState || (AudioState = {}));
            class AudioPCMDataView {
              constructor(...args) {
                this._bufferView = void 0;
                this._normalizeFactor = 1;
                if (args.length === 2) {
                  this._bufferView = args[0];
                  this._normalizeFactor = args[1];
                } else {
                  const arrayBuffer = args[0];
                  const Ctor = args[1];
                  const normalizeFactor = args[2];
                  this._bufferView = new Ctor(arrayBuffer);
                  this._normalizeFactor = normalizeFactor;
                }
              }
              get length() {
                return this._bufferView.length;
              }
              getData(offset) {
                return this._bufferView[offset] * this._normalizeFactor;
              }
            } exports('AudioPCMDataView', AudioPCMDataView);

            function removeUnneededCalls(instance) {
              const size = instance._operationQueue.length;
              const tmpQueue = instance._operationQueue.slice();
              const reserveOps = [];
              let seekSearched = false;
              for (let i = size - 1; i >= 0; i--) {
                const opInfo = tmpQueue[i];
                if (opInfo.op === 'stop') {
                  reserveOps.push(opInfo);
                  break;
                } else if (opInfo.op === 'seek') {
                  if (!seekSearched) {
                    reserveOps.push(opInfo);
                    seekSearched = true;
                  }
                } else if (seekSearched) {
                  reserveOps.push(opInfo);
                  break;
                } else if (reserveOps.length === 0) {
                  reserveOps.push(opInfo);
                }
              }
              instance._operationQueue = reserveOps.reverse();
            }
            let operationId = 0;
            function _tryCallingRecursively(target, opInfo) {
              if (opInfo.invoking) {
                return;
              }
              opInfo.invoking = true;
              opInfo.func.call(target, ...opInfo.args).then(() => {
                opInfo.invoking = false;
                target._operationQueue.shift();
                target._eventTarget.emit(opInfo.id.toString());
                removeUnneededCalls(target);
                const nextOpInfo = target._operationQueue[0];
                if (nextOpInfo) {
                  _tryCallingRecursively(target, nextOpInfo);
                }
              }).catch(e => {});
            }
            function enqueueOperation(target, propertyKey, descriptor) {
              const originalOperation = descriptor.value;
              descriptor.value = function (...args) {
                return new Promise(resolve => {
                  const id = operationId++;
                  const instance = this;
                  instance._operationQueue.push({
                    op: propertyKey,
                    id,
                    func: originalOperation,
                    args,
                    invoking: false
                  });
                  instance._eventTarget.once(id.toString(), resolve);
                  const opInfo = instance._operationQueue[0];
                  _tryCallingRecursively(instance, opInfo);
                });
              };
            }

            var _class2$2, _class3$2;
            const urlCount = {};
            const audioEngine = jsb.AudioEngine;
            const INVALID_AUDIO_ID = -1;
            var AudioBufferFormat;
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
            const bufferConstructorMap = {
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
              [AudioBufferFormat.FLOAT_32]: {
                ctor: Float32Array,
                maxValue: 1
              },
              [AudioBufferFormat.FLOAT_64]: {
                ctor: Float64Array,
                maxValue: 1
              }
            };
            class OneShotAudio {
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
            }
            let AudioPlayer = (_class2$2 = (_class3$2 = class AudioPlayer {
              constructor(url) {
                this._url = void 0;
                this._id = INVALID_AUDIO_ID;
                this._state = AudioState.INIT;
                this._pcmHeader = void 0;
                this._eventTarget = new EventTarget();
                this._operationQueue = [];
                this._cachedState = {
                  duration: 1,
                  loop: false,
                  currentTime: 0,
                  volume: 1
                };
                this._url = url;
                this._pcmHeader = null;
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
            }, _class3$2.maxAudioChannel = audioEngine.getMaxAudioInstance(), _class3$2), (_applyDecoratedDescriptor(_class2$2.prototype, "seek", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2$2.prototype, "seek"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "play", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2$2.prototype, "play"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "pause", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2$2.prototype, "pause"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "stop", [enqueueOperation], Object.getOwnPropertyDescriptor(_class2$2.prototype, "stop"), _class2$2.prototype)), _class2$2);
            legacyCC.AudioPlayer = AudioPlayer;

            var _dec$1, _class$1, _class2$1, _initializer$1, _class3$1;
            let AudioClip = exports('AudioClip', (_dec$1 = ccclass('cc.AudioClip'), _dec$1(_class$1 = (_class2$1 = (_class3$1 = class AudioClip extends Asset {
              constructor(...args) {
                super(...args);
                this._duration = _initializer$1 && _initializer$1();
                this._loadMode = AudioType.UNKNOWN_AUDIO;
                this._meta = null;
                this._player = null;
              }
              set duration(v) {
                this._duration = v;
              }
              destroy() {
                var _this$_player;
                const destroyResult = super.destroy();
                (_this$_player = this._player) === null || _this$_player === void 0 ? void 0 : _this$_player.destroy();
                this._player = null;
                if (this._meta) {
                  this._meta.player = null;
                }
                return destroyResult;
              }
              set _nativeAsset(meta) {
                this._meta = meta;
                if (meta) {
                  this._loadMode = meta.type;
                  this._player = meta.player;
                } else {
                  this._meta = null;
                  this._loadMode = AudioType.UNKNOWN_AUDIO;
                  this._duration = 0;
                }
              }
              get _nativeAsset() {
                return this._meta;
              }
              get _nativeDep() {
                return {
                  uuid: this._uuid,
                  audioLoadMode: this.loadMode,
                  ext: this._native,
                  __isNative__: true
                };
              }
              get loadMode() {
                return this._loadMode;
              }
              validate() {
                return !!this._meta;
              }
              getDuration() {
                if (this._duration) {
                  return this._duration;
                }
                return this._meta ? this._meta.duration : 0;
              }
              get state() {
                return this._player ? this._player.state : AudioState.INIT;
              }
              getCurrentTime() {
                return this._player ? this._player.currentTime : 0;
              }
              getVolume() {
                return this._player ? this._player.volume : 0;
              }
              getLoop() {
                return this._player ? this._player.loop : false;
              }
              setCurrentTime(time) {
                var _this$_player2;
                (_this$_player2 = this._player) === null || _this$_player2 === void 0 ? void 0 : _this$_player2.seek(time).catch(e => {});
              }
              setVolume(volume) {
                if (this._player) {
                  this._player.volume = volume;
                }
              }
              setLoop(loop) {
                if (this._player) {
                  this._player.loop = loop;
                }
              }
              play() {
                var _this$_player3;
                (_this$_player3 = this._player) === null || _this$_player3 === void 0 ? void 0 : _this$_player3.play().catch(e => {});
              }
              pause() {
                var _this$_player4;
                (_this$_player4 = this._player) === null || _this$_player4 === void 0 ? void 0 : _this$_player4.pause().catch(e => {});
              }
              stop() {
                var _this$_player5;
                (_this$_player5 = this._player) === null || _this$_player5 === void 0 ? void 0 : _this$_player5.stop().catch(e => {});
              }
              playOneShot(volume = 1) {
                if (this._nativeAsset) {
                  AudioPlayer.loadOneShotAudio(this._nativeAsset.url, volume).then(oneShotAudio => {
                    oneShotAudio.play();
                  }).catch(e => {});
                }
              }
            }, _class3$1.AudioType = AudioType, _class3$1), (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_duration", [serializable], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "_nativeDep", [override], Object.getOwnPropertyDescriptor(_class2$1.prototype, "_nativeDep"), _class2$1.prototype)), _class2$1)) || _class$1));
            legacyCC.AudioClip = AudioClip;

            function loadAudioPlayer(url, options, onComplete) {
              AudioPlayer.load(url, {
                audioLoadMode: options.audioLoadMode
              }).then(player => {
                const audioMeta = {
                  player,
                  url,
                  duration: player.duration,
                  type: player.type
                };
                onComplete(null, audioMeta);
              }).catch(err => {
                onComplete(err);
              });
            }
            function createAudioClip(id, data, options, onComplete) {
              const out = new AudioClip();
              out._nativeUrl = id;
              out._nativeAsset = data;
              out.duration = data.duration;
              onComplete(null, out);
            }
            downloader.register({
              '.mp3': loadAudioPlayer,
              '.ogg': loadAudioPlayer,
              '.wav': loadAudioPlayer,
              '.m4a': loadAudioPlayer
            });
            factory.register({
              '.mp3': createAudioClip,
              '.ogg': createAudioClip,
              '.wav': createAudioClip,
              '.m4a': createAudioClip
            });

            class AudioManager {
              constructor() {
                this._oneShotAudioInfoList = [];
                this._audioPlayerInfoList = [];
              }
              _findIndex(audioInfoList, audio) {
                return audioInfoList.findIndex(item => item.audio === audio);
              }
              _tryAddPlaying(audioInfoList, audio) {
                const idx = this._findIndex(audioInfoList, audio);
                if (idx > -1) {
                  audioInfoList[idx].playTime = performance.now();
                  return false;
                }
                audioInfoList.push({
                  audio,
                  playTime: performance.now()
                });
                return true;
              }
              addPlaying(audio) {
                if (audio instanceof AudioPlayer) {
                  this._tryAddPlaying(this._audioPlayerInfoList, audio);
                } else {
                  this._tryAddPlaying(this._oneShotAudioInfoList, audio);
                }
              }
              _tryRemovePlaying(audioInfoList, audio) {
                const idx = this._findIndex(audioInfoList, audio);
                if (idx === -1) {
                  return false;
                }
                fastRemoveAt(audioInfoList, idx);
                return true;
              }
              removePlaying(audio) {
                if (audio instanceof AudioPlayer) {
                  this._tryRemovePlaying(this._audioPlayerInfoList, audio);
                } else {
                  this._tryRemovePlaying(this._oneShotAudioInfoList, audio);
                }
              }
              discardOnePlayingIfNeeded() {
                if (this._audioPlayerInfoList.length + this._oneShotAudioInfoList.length < AudioPlayer.maxAudioChannel) {
                  return;
                }
                let audioInfoToDiscard;
                if (this._oneShotAudioInfoList.length > 0) {
                  this._oneShotAudioInfoList.forEach(audioInfo => {
                    if (!audioInfoToDiscard || audioInfo.playTime < audioInfoToDiscard.playTime) {
                      audioInfoToDiscard = audioInfo;
                    }
                  });
                } else {
                  this._audioPlayerInfoList.forEach(audioInfo => {
                    if (!audioInfoToDiscard || audioInfo.playTime < audioInfoToDiscard.playTime) {
                      audioInfoToDiscard = audioInfo;
                    }
                  });
                }
                if (audioInfoToDiscard) {
                  audioInfoToDiscard.audio.stop();
                  this.removePlaying(audioInfoToDiscard.audio);
                }
              }
              pause() {
                this._oneShotAudioInfoList.forEach(info => {
                  info.audio.stop();
                });
                this._audioPlayerInfoList.forEach(info => {
                  info.audio.pause().catch(e => {});
                });
              }
              resume() {
                this._audioPlayerInfoList.forEach(info => {
                  info.audio.play().catch(e => {});
                });
              }
            }
            const audioManager = new AudioManager();

            var _dec, _dec2, _dec3, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _class3;
            const _LOADED_EVENT = 'audiosource-loaded';
            var AudioSourceEventType;
            (function (AudioSourceEventType) {
              AudioSourceEventType["STARTED"] = "started";
              AudioSourceEventType["ENDED"] = "ended";
            })(AudioSourceEventType || (AudioSourceEventType = {}));
            var AudioOperationType;
            (function (AudioOperationType) {
              AudioOperationType["PLAY"] = "play";
              AudioOperationType["STOP"] = "stop";
              AudioOperationType["PAUSE"] = "pause";
              AudioOperationType["SEEK"] = "seek";
            })(AudioOperationType || (AudioOperationType = {}));
            let AudioSource = (_dec = ccclass('cc.AudioSource'), _dec2 = type(AudioClip), _dec3 = type(AudioClip), _dec(_class = (_class2 = (_class3 = class AudioSource extends Component {
              constructor(...args) {
                super(...args);
                this._clip = _initializer && _initializer();
                this._player = null;
                this._hasRegisterListener = false;
                this._loop = _initializer2 && _initializer2();
                this._playOnAwake = _initializer3 && _initializer3();
                this._volume = _initializer4 && _initializer4();
                this._cachedCurrentTime = -1;
                this._operationsBeforeLoading = [];
                this._isLoaded = false;
                this._lastSetClip = null;
              }
              static get maxAudioChannel() {
                return AudioPlayer.maxAudioChannel;
              }
              _resetPlayer() {
                if (this._player) {
                  audioManager.removePlaying(this._player);
                  this._unregisterListener();
                  this._player.destroy();
                  this._player = null;
                }
              }
              set clip(val) {
                if (val === this._clip) {
                  return;
                }
                this._clip = val;
                this._syncPlayer();
              }
              get clip() {
                return this._clip;
              }
              _syncPlayer() {
                const clip = this._clip;
                if (this._lastSetClip === clip) {
                  return;
                }
                if (!clip) {
                  this._lastSetClip = null;
                  this._resetPlayer();
                  return;
                }
                if (!clip._nativeAsset) {
                  console.error('Invalid audio clip');
                  return;
                }
                this._isLoaded = false;
                this._lastSetClip = clip;
                this._operationsBeforeLoading.length = 0;
                AudioPlayer.load(clip._nativeAsset.url, {
                  audioLoadMode: clip.loadMode
                }).then(player => {
                  var _this$node;
                  if (this._lastSetClip !== clip) {
                    player.destroy();
                    return;
                  }
                  this._isLoaded = true;
                  this._resetPlayer();
                  this._player = player;
                  this._syncStates();
                  (_this$node = this.node) === null || _this$node === void 0 ? void 0 : _this$node.emit(_LOADED_EVENT);
                }).catch(e => {});
              }
              _registerListener() {
                if (!this._hasRegisterListener && this._player) {
                  const player = this._player;
                  player.onEnded(() => {
                    var _this$node2;
                    audioManager.removePlaying(player);
                    (_this$node2 = this.node) === null || _this$node2 === void 0 ? void 0 : _this$node2.emit(AudioSourceEventType.ENDED, this);
                  });
                  player.onInterruptionBegin(() => {
                    audioManager.removePlaying(player);
                  });
                  player.onInterruptionEnd(() => {
                    if (this._player === player) {
                      audioManager.addPlaying(player);
                    }
                  });
                  this._hasRegisterListener = true;
                }
              }
              _unregisterListener() {
                if (this._player && this._hasRegisterListener) {
                  this._player.offEnded();
                  this._player.offInterruptionBegin();
                  this._player.offInterruptionEnd();
                  this._hasRegisterListener = false;
                }
              }
              set loop(val) {
                this._loop = val;
                if (this._player) {
                  this._player.loop = val;
                }
              }
              get loop() {
                return this._loop;
              }
              set playOnAwake(val) {
                this._playOnAwake = val;
              }
              get playOnAwake() {
                return this._playOnAwake;
              }
              set volume(val) {
                if (Number.isNaN(val)) {
                  console.warn('illegal audio volume!');
                  return;
                }
                val = clamp(val, 0, 1);
                if (this._player) {
                  this._player.volume = val;
                  this._volume = this._player.volume;
                } else {
                  this._volume = val;
                }
              }
              get volume() {
                return this._volume;
              }
              onLoad() {
                this._syncPlayer();
              }
              onEnable() {
                if (this._playOnAwake && !this.playing) {
                  this.play();
                }
              }
              onDisable() {
                const rootNode = this._getRootNode();
                if (rootNode !== null && rootNode !== void 0 && rootNode._persistNode) {
                  return;
                }
                this.pause();
              }
              onDestroy() {
                this.stop();
                this.clip = null;
              }
              getPCMData(channelIndex) {
                return new Promise(resolve => {
                  if (channelIndex !== 0 && channelIndex !== 1) {
                    console.warn('Only support channel index 0 or 1 to get buffer');
                    resolve(undefined);
                    return;
                  }
                  if (this._player) {
                    resolve(this._player.getPCMData(channelIndex));
                  } else {
                    var _this$node3;
                    (_this$node3 = this.node) === null || _this$node3 === void 0 ? void 0 : _this$node3.once(_LOADED_EVENT, () => {
                      var _this$_player;
                      resolve((_this$_player = this._player) === null || _this$_player === void 0 ? void 0 : _this$_player.getPCMData(channelIndex));
                    });
                  }
                });
              }
              getSampleRate() {
                return new Promise(resolve => {
                  if (this._player) {
                    resolve(this._player.sampleRate);
                  } else {
                    var _this$node4;
                    (_this$node4 = this.node) === null || _this$node4 === void 0 ? void 0 : _this$node4.once(_LOADED_EVENT, () => {
                      resolve(this._player.sampleRate);
                    });
                  }
                });
              }
              _getRootNode() {
                var _currentNode, _currentNode$parent;
                let currentNode = this.node;
                let currentGrandparentNode = (_currentNode = currentNode) === null || _currentNode === void 0 ? void 0 : (_currentNode$parent = _currentNode.parent) === null || _currentNode$parent === void 0 ? void 0 : _currentNode$parent.parent;
                while (currentGrandparentNode) {
                  var _currentNode2, _currentNode3, _currentNode3$parent;
                  currentNode = (_currentNode2 = currentNode) === null || _currentNode2 === void 0 ? void 0 : _currentNode2.parent;
                  currentGrandparentNode = (_currentNode3 = currentNode) === null || _currentNode3 === void 0 ? void 0 : (_currentNode3$parent = _currentNode3.parent) === null || _currentNode3$parent === void 0 ? void 0 : _currentNode3$parent.parent;
                }
                return currentNode;
              }
              play() {
                if (!this._isLoaded && this.clip) {
                  this._operationsBeforeLoading.push({
                    op: AudioOperationType.PLAY,
                    params: null
                  });
                  return;
                }
                this._registerListener();
                audioManager.discardOnePlayingIfNeeded();
                if (this.state === AudioState.PLAYING) {
                  var _this$_player2;
                  (_this$_player2 = this._player) === null || _this$_player2 === void 0 ? void 0 : _this$_player2.stop().catch(e => {});
                }
                const player = this._player;
                if (player) {
                  player.play().then(() => {
                    var _this$node5;
                    (_this$node5 = this.node) === null || _this$node5 === void 0 ? void 0 : _this$node5.emit(AudioSourceEventType.STARTED, this);
                  }).catch(e => {
                    audioManager.removePlaying(player);
                  });
                  audioManager.addPlaying(player);
                }
              }
              pause() {
                var _this$_player3;
                if (!this._isLoaded && this.clip) {
                  this._operationsBeforeLoading.push({
                    op: AudioOperationType.PAUSE,
                    params: null
                  });
                  return;
                }
                (_this$_player3 = this._player) === null || _this$_player3 === void 0 ? void 0 : _this$_player3.pause().catch(e => {});
              }
              stop() {
                if (!this._isLoaded && this.clip) {
                  this._operationsBeforeLoading.push({
                    op: AudioOperationType.STOP,
                    params: null
                  });
                  return;
                }
                if (this._player) {
                  this._player.stop().catch(e => {});
                  audioManager.removePlaying(this._player);
                }
              }
              playOneShot(clip, volumeScale = 1) {
                if (!clip._nativeAsset) {
                  console.error('Invalid audio clip');
                  return;
                }
                let player;
                AudioPlayer.loadOneShotAudio(clip._nativeAsset.url, this._volume * volumeScale, {
                  audioLoadMode: clip.loadMode
                }).then(oneShotAudio => {
                  player = oneShotAudio;
                  audioManager.discardOnePlayingIfNeeded();
                  oneShotAudio.onEnd = () => {
                    audioManager.removePlaying(oneShotAudio);
                  };
                  oneShotAudio.play();
                  audioManager.addPlaying(oneShotAudio);
                }).catch(e => {
                  if (player) {
                    audioManager.removePlaying(player);
                  }
                });
              }
              _syncStates() {
                if (this._player) {
                  this._player.loop = this._loop;
                  this._player.volume = this._volume;
                  this._operationsBeforeLoading.forEach(opInfo => {
                    if (opInfo.op === AudioOperationType.SEEK) {
                      this._cachedCurrentTime = opInfo.params && opInfo.params[0];
                      if (this._player) {
                        this._player.seek(this._cachedCurrentTime).catch(e => {});
                      }
                    } else {
                      var _this$opInfo$op;
                      (_this$opInfo$op = this[opInfo.op]) === null || _this$opInfo$op === void 0 ? void 0 : _this$opInfo$op.call(this);
                    }
                  });
                  this._operationsBeforeLoading.length = 0;
                }
              }
              set currentTime(num) {
                var _this$_player4;
                if (Number.isNaN(num)) {
                  console.warn('illegal audio time!');
                  return;
                }
                num = clamp(num, 0, this.duration);
                if (!this._isLoaded && this.clip) {
                  this._operationsBeforeLoading.push({
                    op: AudioOperationType.SEEK,
                    params: [num]
                  });
                  return;
                }
                this._cachedCurrentTime = num;
                (_this$_player4 = this._player) === null || _this$_player4 === void 0 ? void 0 : _this$_player4.seek(this._cachedCurrentTime).catch(e => {});
              }
              get currentTime() {
                return this._player ? this._player.currentTime : this._cachedCurrentTime < 0 ? 0 : this._cachedCurrentTime;
              }
              get duration() {
                var _this$_clip$getDurati, _this$_clip;
                return (_this$_clip$getDurati = (_this$_clip = this._clip) === null || _this$_clip === void 0 ? void 0 : _this$_clip.getDuration()) !== null && _this$_clip$getDurati !== void 0 ? _this$_clip$getDurati : this._player ? this._player.duration : 0;
              }
              get state() {
                return this._player ? this._player.state : AudioState.INIT;
              }
              get playing() {
                return this.state === AudioSource.AudioState.PLAYING;
              }
            }, _class3.AudioState = AudioState, _class3.EventType = AudioSourceEventType, _class3), (_initializer = applyDecoratedInitializer(_class2.prototype, "_clip", [_dec2], function () {
              return null;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_loop", [serializable], function () {
              return false;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_playOnAwake", [serializable], function () {
              return true;
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "_volume", [serializable], function () {
              return 1;
            }), _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "clip"), _class2.prototype)), _class2)) || _class); exports({ AudioSource: AudioSource, AudioSourceComponent: AudioSource });

            replaceProperty(AudioClip, 'AudioClip', [{
              name: 'PlayingState',
              newName: 'AudioState',
              target: AudioSource,
              targetName: 'AudioSource'
            }]);
            markAsWarning(AudioClip.prototype, 'AudioClip.prototype', ['state', 'play', 'pause', 'stop', 'playOneShot', 'setCurrentTime', 'setVolume', 'setLoop', 'getCurrentTime', 'getVolume', 'getLoop'].map(item => ({
              name: item,
              suggest: `please use AudioSource.prototype.${item} instead`
            })));

            legacyCC.AudioSourceComponent = AudioSource;
            setClassAlias(AudioSource, 'cc.AudioSourceComponent');

        })
    };
}));
