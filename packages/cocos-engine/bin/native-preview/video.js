System.register(['./builtin-res-mgr.jsb-c9e8e53a.js', './index-ce98320e.js', './rendering-sub-mesh.jsb-25043997.js', './node-event-18d96a1b.js', './scene-asset.jsb-0d4c6201.js', './find-7a03d1cc.js', './sprite-renderer-9a6a919d.js', './deprecated-f8df8d32.js', './director-dc238483.js', './device-90bc7390.js', './touch-af62e326.js', './decorators-b63b63a2.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './murmurhash2_gc-2108d723.js', './deprecated-fcfb90f6.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js', './renderer-3bf7a012.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js'], (function (exports) {
    'use strict';
    var downloader, factory, ccclass, applyDecoratedInitializer, serializable, ccwindow, log, Enum, legacyCC, error, mat4, sys, BrowserType, warn, OS, screen, contains, visibleRect, screenAdapter, type, requireComponent, clamp, replaceProperty, Asset, _applyDecoratedDescriptor, EventHandler, Component, UITransform, game, director, ClearFlagBit;
    return {
        setters: [function (module) {
            downloader = module.aD;
            factory = module.aG;
        }, function (module) {
            ccclass = module.by;
            applyDecoratedInitializer = module.bx;
            serializable = module.bf;
            ccwindow = module.c6;
            log = module.a;
            Enum = module.aa;
            legacyCC = module.l;
            error = module.e;
            mat4 = module.t;
            sys = module.aL;
            BrowserType = module.cb;
            warn = module.w;
            OS = module.bZ;
            screen = module.aK;
            contains = module.cE;
            visibleRect = module.aN;
            screenAdapter = module.bW;
            type = module.bw;
            requireComponent = module.cC;
            clamp = module.F;
            replaceProperty = module.ag;
        }, function () {}, function (module) {
            Asset = module.A;
            _applyDecoratedDescriptor = module.H;
            EventHandler = module.E;
            Component = module.C;
        }, function () {}, function () {}, function (module) {
            UITransform = module.c;
        }, function (module) {
            game = module.g;
        }, function (module) {
            director = module.n;
        }, function (module) {
            ClearFlagBit = module.H;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            var _dec$1, _class$1, _class2$1, _initializer$1;
            let VideoClip = exports('VideoClip', (_dec$1 = ccclass('cc.VideoClip'), _dec$1(_class$1 = (_class2$1 = class VideoClip extends Asset {
              constructor() {
                super();
                this._duration = _initializer$1 && _initializer$1();
                this._video = null;
              }
              set _nativeAsset(clip) {
                this._video = clip;
                if (clip) {
                  this._duration = clip.duration;
                } else {
                  this._duration = 0;
                }
              }
              get _nativeAsset() {
                return this._video;
              }
            }, (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_duration", [serializable], function () {
              return 0;
            })), _class2$1)) || _class$1));

            const ccdocument$1 = ccwindow.document;
            function downloadVideo(url, options, onComplete) {
              const video = ccdocument$1.createElement('video');
              const source = ccdocument$1.createElement('source');
              video.appendChild(source);
              const req = new XMLHttpRequest();
              req.open('GET', url, true);
              req.responseType = 'blob';
              req.onload = function onload() {
                if (this.status === 200 || this.status === 0) {
                  source.src = URL.createObjectURL(this.response);
                  onComplete(null, video);
                } else {
                  onComplete(new Error(`${req.status}(no response)`));
                }
              };
              req.onerror = function onerror() {
                const message = `load video failure - ${url}`;
                log(message);
                onComplete(new Error(message));
              };
              req.send();
            }
            function createVideoClip(id, data, options, onComplete) {
              const out = new VideoClip();
              out._nativeUrl = id;
              out._nativeAsset = data;
              onComplete(null, out);
            }
            downloader.register({
              '.mp4': downloadVideo,
              '.avi': downloadVideo,
              '.mov': downloadVideo,
              '.mpg': downloadVideo,
              '.mpeg': downloadVideo,
              '.rm': downloadVideo,
              '.rmvb': downloadVideo
            });
            factory.register({
              '.mp4': createVideoClip,
              '.avi': createVideoClip,
              '.mov': createVideoClip,
              '.mpg': createVideoClip,
              '.mpeg': createVideoClip,
              '.rm': createVideoClip,
              '.rmvb': createVideoClip
            });

            const ResourceType = Enum({
              REMOTE: 0,
              LOCAL: 1
            });
            let EventType;
            (function (EventType) {
              EventType["NONE"] = "none";
              EventType["PLAYING"] = "playing";
              EventType["PAUSED"] = "paused";
              EventType["STOPPED"] = "stopped";
              EventType["COMPLETED"] = "completed";
              EventType["META_LOADED"] = "meta-loaded";
              EventType["READY_TO_PLAY"] = "ready-to-play";
              EventType["ERROR"] = "error";
              EventType["CLICKED"] = "clicked";
            })(EventType || (EventType = {}));
            let READY_STATE;
            (function (READY_STATE) {
              READY_STATE[READY_STATE["HAVE_NOTHING"] = 0] = "HAVE_NOTHING";
              READY_STATE[READY_STATE["HAVE_METADATA"] = 1] = "HAVE_METADATA";
              READY_STATE[READY_STATE["HAVE_CURRENT_DATA"] = 2] = "HAVE_CURRENT_DATA";
              READY_STATE[READY_STATE["HAVE_FUTURE_DATA"] = 3] = "HAVE_FUTURE_DATA";
              READY_STATE[READY_STATE["HAVE_ENOUGH_DATA"] = 4] = "HAVE_ENOUGH_DATA";
            })(READY_STATE || (READY_STATE = {}));

            class VideoPlayerImpl {
              constructor(component) {
                this._componentEventList = new Map();
                this._state = EventType.NONE;
                this._video = null;
                this._onInterruptedBegin = void 0;
                this._onInterruptedEnd = void 0;
                this._interrupted = false;
                this._loaded = false;
                this._loadedMeta = false;
                this._ignorePause = false;
                this._fullScreenOnAwake = false;
                this._visible = true;
                this._playing = false;
                this._cachedCurrentTime = -1;
                this._waitingFullscreen = false;
                this._waitingPlay = false;
                this._keepAspectRatio = false;
                this._component = null;
                this._uiTrans = null;
                this._node = null;
                this._stayOnBottom = false;
                this._dirty = false;
                this._forceUpdate = false;
                this._w = 0;
                this._h = 0;
                this._m00 = 0;
                this._m01 = 0;
                this._m04 = 0;
                this._m05 = 0;
                this._m12 = 0;
                this._m13 = 0;
                this._component = component;
                this._node = component.node;
                this._uiTrans = component.node.getComponent(UITransform);
                this._onInterruptedBegin = () => {
                  if (!this.video || this._state !== EventType.PLAYING) {
                    return;
                  }
                  this.video.pause();
                  this._interrupted = true;
                };
                this._onInterruptedEnd = () => {
                  if (!this._interrupted || !this.video) {
                    return;
                  }
                  this.video.play();
                  this._interrupted = false;
                };
                legacyCC.game.on(legacyCC.Game.EVENT_PAUSE, this._onInterruptedBegin);
                legacyCC.game.on(legacyCC.Game.EVENT_RESUME, this._onInterruptedEnd);
              }
              get fullScreenOnAwake() {
                return this._fullScreenOnAwake;
              }
              get loaded() {
                return this._loaded;
              }
              get componentEventList() {
                return this._componentEventList;
              }
              get video() {
                return this._video;
              }
              get state() {
                return this._state;
              }
              get isPlaying() {
                return this._playing;
              }
              get UICamera() {
                return director.root.batcher2D.getFirstRenderCamera(this._node);
              }
              onLoadedMetadata(e) {
                this._loadedMeta = true;
                this._forceUpdate = true;
                if (this._visible) {
                  this.enable();
                } else {
                  this.disable();
                }
                this.dispatchEvent(EventType.META_LOADED);
                const video = e.target;
                if (this._keepAspectRatio && video) {
                  this.syncUITransform(video.videoWidth, video.videoHeight);
                }
                this.delayedFullScreen();
                this.delayedPlay();
              }
              onCanPlay(e) {
                this._loaded = true;
                this.dispatchEvent(EventType.READY_TO_PLAY);
              }
              onPlay(e) {
                this._playing = true;
                this.dispatchEvent(EventType.PLAYING);
              }
              onPlaying(e) {
                this.dispatchEvent(EventType.PLAYING);
              }
              onPause(e) {
                this._playing = false;
                if (this._ignorePause) {
                  this._ignorePause = false;
                  return;
                }
                this.dispatchEvent(EventType.PAUSED);
              }
              onStoped(e) {
                this._playing = false;
                this._ignorePause = false;
                this.dispatchEvent(EventType.STOPPED);
              }
              onEnded(e) {
                this._playing = false;
                this.dispatchEvent(EventType.COMPLETED);
              }
              onClick(e) {
                this.dispatchEvent(EventType.CLICKED);
              }
              onError(e) {
                this.dispatchEvent(EventType.ERROR);
                const video = e.target;
                if (video && video.error) {
                  error(`Error ${video.error.code}; details: ${video.error.message}`);
                }
              }
              play() {
                if (this._loadedMeta || this._loaded) {
                  this.canPlay();
                } else {
                  this._waitingPlay = true;
                }
              }
              delayedPlay() {
                if (this._waitingPlay) {
                  this.canPlay();
                  this._waitingPlay = false;
                }
              }
              syncFullScreenOnAwake(enabled) {
                this._fullScreenOnAwake = enabled;
                if (this._loadedMeta || this._loaded) {
                  this.canFullScreen(enabled);
                } else {
                  this._waitingFullscreen = true;
                }
              }
              delayedFullScreen() {
                if (this._waitingFullscreen) {
                  this.canFullScreen(this._fullScreenOnAwake);
                  this._waitingFullscreen = false;
                }
              }
              dispatchEvent(key) {
                const callback = this._componentEventList.get(key);
                if (callback) {
                  this._state = key;
                  callback.call(this);
                }
              }
              syncUITransform(width, height) {
                if (this._uiTrans) {
                  this._uiTrans.width = width;
                  this._uiTrans.height = height;
                }
              }
              syncCurrentTime() {
                if (!this.video) {
                  return;
                }
                if (this._cachedCurrentTime !== -1 && this.video.currentTime !== this._cachedCurrentTime) {
                  this.seekTo(this._cachedCurrentTime);
                  this._cachedCurrentTime = -1;
                }
              }
              destroy() {
                this.removeVideoPlayer();
                this._componentEventList.clear();
                legacyCC.game.off(legacyCC.Game.EVENT_PAUSE, this._onInterruptedBegin);
                legacyCC.game.off(legacyCC.Game.EVENT_RESUME, this._onInterruptedEnd);
              }
            }
            legacyCC.internal.VideoPlayerImpl = VideoPlayerImpl;

            const ccdocument = ccwindow.document;
            const MIN_ZINDEX = -(2 ** 15);
            const _mat4_temp = mat4();
            class VideoPlayerImplWeb extends VideoPlayerImpl {
              constructor(component) {
                super(component);
                this._eventList = new Map();
                this._clearColorA = -1;
                this._clearFlag = void 0;
              }
              addListener(type, handler) {
                if (!this._video) {
                  return;
                }
                this._eventList.set(type, handler);
                this._video.addEventListener(type, handler);
              }
              removeAllListeners() {
                this._eventList.forEach((handler, type) => {
                  if (!this._video) {
                    return;
                  }
                  this._video.removeEventListener(type, handler);
                });
                this._eventList.clear();
              }
              canPlay() {
                if (this.video) {
                  const promise = this.video.play();
                  if (ccwindow.Promise && promise instanceof Promise) {
                    promise.catch(error => {}).then(() => {
                      this.syncCurrentTime();
                    });
                  }
                }
              }
              pause() {
                if (this.video) {
                  this.video.pause();
                  this._cachedCurrentTime = this.video.currentTime;
                }
              }
              resume() {
                this.play();
              }
              stop() {
                if (this.video) {
                  this._ignorePause = true;
                  this.video.currentTime = 0;
                  this.video.pause();
                  this._cachedCurrentTime = 0;
                  setTimeout(() => {
                    this._ignorePause = false;
                    this.dispatchEvent(EventType.STOPPED);
                  }, 0);
                }
              }
              syncClip(clip) {
                this.removeVideoPlayer();
                if (!clip) {
                  return;
                }
                this.createVideoPlayer(clip.nativeUrl);
              }
              syncURL(url) {
                this.removeVideoPlayer();
                if (!url) {
                  return;
                }
                this.createVideoPlayer(url);
              }
              syncPlaybackRate(val) {
                if (sys.browserType === BrowserType.UC) {
                  warn('playbackRate is not supported by the uc mobile browser.');
                  return;
                }
                if (this.video) {
                  this.video.playbackRate = val;
                }
              }
              syncVolume(val) {
                if (this.video) {
                  this.video.volume = val;
                }
              }
              syncMute(enabled) {
                if (this.video) {
                  this.video.muted = enabled;
                }
              }
              syncLoop(enabled) {
                if (this.video) {
                  this.video.loop = enabled;
                }
              }
              getDuration() {
                if (!this.video) {
                  return 0;
                }
                return this.video.duration;
              }
              getCurrentTime() {
                if (this.video) {
                  return this.video.currentTime;
                }
                return -1;
              }
              seekTo(val) {
                if (this.video) {
                  this.video.currentTime = val;
                  this._cachedCurrentTime = this.video.currentTime;
                }
              }
              canFullScreen(enabled) {
                const video = this._video;
                if (!video || video.readyState !== READY_STATE.HAVE_ENOUGH_DATA) {
                  return;
                }
                if (sys.os === OS.IOS && sys.isBrowser) {
                  if (enabled) {
                    if (video.webkitEnterFullscreen) {
                      video.webkitEnterFullscreen();
                    }
                  } else if (video.webkitExitFullscreen) {
                    video.webkitExitFullscreen();
                  }
                  this._fullScreenOnAwake = video.webkitDisplayingFullscreen;
                  return;
                }
                if (!screen.supportsFullScreen) {
                  this._fullScreenOnAwake = enabled;
                  this._forceUpdate = true;
                  this.syncMatrix();
                  return;
                }
                if (enabled) {
                  if (sys.browserType === BrowserType.IE) {
                    video.style.transform = '';
                  }
                  video.setAttribute('x5-video-player-fullscreen', 'true');
                  screen.requestFullScreen(video, document => {
                    const fullscreenElement = sys.browserType === BrowserType.IE ? document.msFullscreenElement : document.fullscreenElement;
                    this._fullScreenOnAwake = fullscreenElement === video;
                  }, () => {
                    this._fullScreenOnAwake = false;
                  });
                } else {
                  video.removeAttribute('x5-video-player-fullscreen');
                  screen.exitFullScreen();
                }
              }
              syncStayOnBottom(enabled) {
                if (this._video) {
                  this._video.style['z-index'] = enabled ? MIN_ZINDEX : 0;
                  this._stayOnBottom = enabled;
                }
                this._dirty = true;
              }
              syncKeepAspectRatio(enabled) {
                this._keepAspectRatio = enabled;
                if (enabled && this._loadedMeta && this._video) {
                  this.syncUITransform(this._video.videoWidth, this._video.videoHeight);
                }
              }
              removeVideoPlayer() {
                const video = this._video;
                if (video) {
                  if (contains(game.container, video)) {
                    game.container.removeChild(video);
                    this.removeAllListeners();
                  }
                }
                this._cachedCurrentTime = 0;
                this._playing = false;
                this._loaded = false;
                this._loadedMeta = false;
                this._video = null;
              }
              createVideoPlayer(url) {
                const video = this._video = ccdocument.createElement('video');
                video.className = 'cocosVideo';
                video.style.visibility = 'hidden';
                video.style.position = 'absolute';
                video.style.bottom = '0px';
                video.style.left = '0px';
                video.style['transform-origin'] = '0px 100% 0px';
                video.style['-webkit-transform-origin'] = '0px 100% 0px';
                video.setAttribute('preload', 'auto');
                video.setAttribute('webkit-playsinline', '');
                video.setAttribute('x5-playsinline', '');
                video.setAttribute('playsinline', '');
                this._bindDomEvent();
                game.container.appendChild(video);
                const source = ccdocument.createElement('source');
                video.appendChild(source);
                source.src = url;
              }
              _bindDomEvent() {
                this._video;
                this.addListener('loadedmetadata', this.onLoadedMetadata.bind(this));
                this.addListener('canplay', this.onCanPlay.bind(this));
                this.addListener('canplaythrough', this.onCanPlay.bind(this));
                this.addListener('play', this.onPlay.bind(this));
                this.addListener('playing', this.onPlaying.bind(this));
                this.addListener('pause', this.onPause.bind(this));
                this.addListener('click', this.onClick.bind(this));
                this.addListener('ended', this.onEnded.bind(this));
                this.addListener('error', this.onError.bind(this));
              }
              onCanPlay(e) {
                const video = e.target;
                if (this._loaded && video) {
                  return;
                }
                switch (video.readyState) {
                  case READY_STATE.HAVE_METADATA:
                  case READY_STATE.HAVE_ENOUGH_DATA:
                    {
                      super.onCanPlay(e);
                      break;
                    }
                }
              }
              enable() {
                if (this._video) {
                  this._visible = true;
                  if (this._video.style.visibility === 'visible') {
                    return;
                  }
                  this._video.style.visibility = 'visible';
                }
              }
              disable(noPause) {
                if (this._video) {
                  if (!noPause && this._playing) {
                    this._video.pause();
                  }
                  this._visible = false;
                  if (this._video.style.visibility === 'hidden') {
                    return;
                  }
                  this._video.style.visibility = 'hidden';
                }
              }
              syncMatrix() {
                if (!this._video || !this._visible || !this._component) return;
                const camera = this.UICamera;
                if (!camera) {
                  return;
                }
                if (screen.fullScreen()) {
                  return;
                }
                if (this._dirty) {
                  this._dirty = false;
                  if (this._stayOnBottom) {
                    this._clearColorA = camera.clearColor.w;
                    this._clearFlag = camera.clearFlag;
                    camera.clearColor.w = 0;
                    camera.clearFlag = ClearFlagBit.ALL;
                  } else if (this._clearFlag) {
                    camera.clearColor.w = this._clearColorA;
                    camera.clearFlag = this._clearFlag;
                    this._clearColorA = -1;
                    this._clearFlag = null;
                  }
                }
                this._component.node.getWorldMatrix(_mat4_temp);
                camera.update(true);
                camera.worldMatrixToScreen(_mat4_temp, _mat4_temp, game.canvas.width, game.canvas.height);
                let width = 0;
                let height = 0;
                if (this._fullScreenOnAwake) {
                  width = visibleRect.width;
                  height = visibleRect.height;
                } else {
                  width = this._uiTrans.contentSize.width;
                  height = this._uiTrans.contentSize.height;
                }
                if (!this._forceUpdate && this._m00 === _mat4_temp.m00 && this._m01 === _mat4_temp.m01 && this._m04 === _mat4_temp.m04 && this._m05 === _mat4_temp.m05 && this._m12 === _mat4_temp.m12 && this._m13 === _mat4_temp.m13 && this._w === width && this._h === height) {
                  return;
                }
                this._m00 = _mat4_temp.m00;
                this._m01 = _mat4_temp.m01;
                this._m04 = _mat4_temp.m04;
                this._m05 = _mat4_temp.m05;
                this._m12 = _mat4_temp.m12;
                this._m13 = _mat4_temp.m13;
                this._w = width;
                this._h = height;
                const dpr = screenAdapter.devicePixelRatio;
                const scaleX = 1 / dpr;
                const scaleY = 1 / dpr;
                const container = game.container;
                const sx = _mat4_temp.m00 * scaleX;
                const b = _mat4_temp.m01;
                const c = _mat4_temp.m04;
                const sy = _mat4_temp.m05 * scaleY;
                this._video.style.width = `${this._w}px`;
                this._video.style.height = `${this._h}px`;
                if (sys.browserType !== BrowserType.MOBILE_QQ) {
                  this._video.style.objectFit = this._keepAspectRatio ? 'none' : 'fill';
                } else {
                  warn('keepAspectRatio is not supported by the qq mobile browser.');
                }
                const w = this._w * scaleX;
                const h = this._h * scaleY;
                const {
                  x,
                  y
                } = this._uiTrans.anchorPoint;
                const appx = w * _mat4_temp.m00 * x;
                const appy = h * _mat4_temp.m05 * y;
                const offsetX = container && container.style.paddingLeft ? parseInt(container.style.paddingLeft) : 0;
                const offsetY = container && container.style.paddingBottom ? parseInt(container.style.paddingBottom) : 0;
                const tx = _mat4_temp.m12 * scaleX - appx + offsetX;
                const ty = _mat4_temp.m13 * scaleY - appy + offsetY;
                const matrix = `matrix(${sx},${-b},${-c},${sy},${tx},${-ty})`;
                this._video.style.transform = matrix;
                this._video.style['-webkit-transform'] = matrix;
                if (sys.browserType !== BrowserType.IE) {
                  this._forceUpdate = false;
                }
              }
            }

            class VideoPlayerImplManager {
              static getImpl(component) {
                return new VideoPlayerImplWeb(component);
              }
            }
            legacyCC.internal.VideoPlayerImplManager = VideoPlayerImplManager;

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _class3;
            let VideoPlayer = exports('VideoPlayer', (_dec = ccclass('cc.VideoPlayer'), _dec2 = requireComponent(UITransform), _dec3 = type(VideoClip), _dec4 = type(ResourceType), _dec5 = type(VideoClip), _dec6 = type([EventHandler]), _dec(_class = _dec2(_class = (_class2 = (_class3 = class VideoPlayer extends Component {
              constructor(...args) {
                super(...args);
                this._resourceType = _initializer && _initializer();
                this._remoteURL = _initializer2 && _initializer2();
                this._clip = _initializer3 && _initializer3();
                this._playOnAwake = _initializer4 && _initializer4();
                this._volume = _initializer5 && _initializer5();
                this._mute = _initializer6 && _initializer6();
                this._playbackRate = _initializer7 && _initializer7();
                this._loop = _initializer8 && _initializer8();
                this._fullScreenOnAwake = _initializer9 && _initializer9();
                this._stayOnBottom = _initializer10 && _initializer10();
                this._keepAspectRatio = _initializer11 && _initializer11();
                this._impl = null;
                this._cachedCurrentTime = 0;
                this.videoPlayerEvent = _initializer12 && _initializer12();
              }
              get resourceType() {
                return this._resourceType;
              }
              set resourceType(val) {
                if (this._resourceType !== val) {
                  this._resourceType = val;
                  this.syncSource();
                }
              }
              get remoteURL() {
                return this._remoteURL;
              }
              set remoteURL(val) {
                if (this._remoteURL !== val) {
                  this._remoteURL = val;
                  this.syncSource();
                }
              }
              get clip() {
                return this._clip;
              }
              set clip(val) {
                if (this._clip !== val) {
                  this._clip = val;
                  this.syncSource();
                }
              }
              get playOnAwake() {
                return this._playOnAwake;
              }
              set playOnAwake(value) {
                this._playOnAwake = value;
              }
              get playbackRate() {
                return this._playbackRate;
              }
              set playbackRate(value) {
                this._playbackRate = value;
                if (this._impl) {
                  this._impl.syncPlaybackRate(value);
                }
              }
              get volume() {
                return this._volume;
              }
              set volume(value) {
                this._volume = value;
                if (this._impl) {
                  this._impl.syncVolume(value);
                }
              }
              get mute() {
                return this._mute;
              }
              set mute(value) {
                this._mute = value;
                if (this._impl) {
                  this._impl.syncMute(value);
                }
              }
              get loop() {
                return this._loop;
              }
              set loop(value) {
                this._loop = value;
                if (this._impl) {
                  this._impl.syncLoop(value);
                }
              }
              get keepAspectRatio() {
                return this._keepAspectRatio;
              }
              set keepAspectRatio(value) {
                if (this._keepAspectRatio !== value) {
                  this._keepAspectRatio = value;
                  if (this._impl) {
                    this._impl.syncKeepAspectRatio(value);
                  }
                }
              }
              get fullScreenOnAwake() {
                {
                  if (this._impl) {
                    this._fullScreenOnAwake = this._impl.fullScreenOnAwake;
                    return this._fullScreenOnAwake;
                  }
                }
                return this._fullScreenOnAwake;
              }
              set fullScreenOnAwake(value) {
                if (this._fullScreenOnAwake !== value) {
                  this._fullScreenOnAwake = value;
                  if (this._impl) {
                    this._impl.syncFullScreenOnAwake(value);
                  }
                }
              }
              get stayOnBottom() {
                return this._stayOnBottom;
              }
              set stayOnBottom(value) {
                if (this._stayOnBottom !== value) {
                  this._stayOnBottom = value;
                  if (this._impl) {
                    this._impl.syncStayOnBottom(value);
                  }
                }
              }
              get nativeVideo() {
                return this._impl && this._impl.video || null;
              }
              get currentTime() {
                if (!this._impl) {
                  return this._cachedCurrentTime;
                }
                return this._impl.getCurrentTime();
              }
              set currentTime(val) {
                if (Number.isNaN(val)) {
                  warn(`illegal video time! value:${val}`);
                  return;
                }
                val = clamp(val, 0, this.duration);
                this._cachedCurrentTime = val;
                if (this._impl) {
                  this._impl.seekTo(val);
                }
              }
              get duration() {
                if (!this._impl) {
                  return 0;
                }
                return this._impl.getDuration();
              }
              get state() {
                if (!this._impl) {
                  return EventType.NONE;
                }
                return this._impl.state;
              }
              get isPlaying() {
                if (!this._impl) {
                  return false;
                }
                return this._impl.isPlaying;
              }
              syncSource() {
                if (!this._impl) {
                  return;
                }
                if (this._resourceType === ResourceType.REMOTE) {
                  this._impl.syncURL(this._remoteURL);
                } else {
                  this._impl.syncClip(this._clip);
                }
                this._cachedCurrentTime = 0;
                this._impl.syncLoop(this._loop);
                this._impl.syncVolume(this._volume);
                this._impl.syncMute(this._mute);
                this._impl.seekTo(this._cachedCurrentTime);
                this._impl.syncPlaybackRate(this._playbackRate);
                this._impl.syncStayOnBottom(this._stayOnBottom);
                this._impl.syncKeepAspectRatio(this._keepAspectRatio);
                this._impl.syncFullScreenOnAwake(this._fullScreenOnAwake);
              }
              __preload() {
                this._impl = VideoPlayerImplManager.getImpl(this);
                this.syncSource();
                this._impl.componentEventList.set(EventType.META_LOADED, this.onMetaLoaded.bind(this));
                this._impl.componentEventList.set(EventType.READY_TO_PLAY, this.onReadyToPlay.bind(this));
                this._impl.componentEventList.set(EventType.PLAYING, this.onPlaying.bind(this));
                this._impl.componentEventList.set(EventType.PAUSED, this.onPaused.bind(this));
                this._impl.componentEventList.set(EventType.STOPPED, this.onStopped.bind(this));
                this._impl.componentEventList.set(EventType.COMPLETED, this.onCompleted.bind(this));
                this._impl.componentEventList.set(EventType.ERROR, this.onError.bind(this));
                this._impl.componentEventList.set(EventType.CLICKED, this.onClicked.bind(this));
                if (this._playOnAwake && this._impl.loaded) {
                  this.play();
                }
              }
              onEnable() {
                if (this._impl) {
                  this._impl.enable();
                }
              }
              onDisable() {
                if (this._impl) {
                  this._impl.disable();
                }
              }
              onDestroy() {
                if (this._impl) {
                  this._impl.destroy();
                  this._impl = null;
                }
              }
              update(dt) {
                if (this._impl) {
                  this._impl.syncMatrix();
                }
              }
              onMetaLoaded() {
                EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.META_LOADED);
                this.node.emit('meta-loaded', this);
              }
              onReadyToPlay() {
                if (this._playOnAwake && !this.isPlaying) {
                  this.play();
                }
                EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.READY_TO_PLAY);
                this.node.emit(EventType.READY_TO_PLAY, this);
              }
              onPlaying() {
                EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.PLAYING);
                this.node.emit(EventType.PLAYING, this);
              }
              onPaused() {
                EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.PAUSED);
                this.node.emit(EventType.PAUSED, this);
              }
              onStopped() {
                EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.STOPPED);
                this.node.emit(EventType.STOPPED, this);
              }
              onCompleted() {
                EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.COMPLETED);
                this.node.emit(EventType.COMPLETED, this);
              }
              onError() {
                EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.ERROR);
                this.node.emit(EventType.ERROR, this);
              }
              onClicked() {
                EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.CLICKED);
                this.node.emit(EventType.CLICKED, this);
              }
              play() {
                if (this._impl) {
                  this._impl.play();
                }
              }
              resume() {
                if (this._impl) {
                  this._impl.resume();
                }
              }
              pause() {
                if (this._impl) {
                  this._impl.pause();
                }
              }
              stop() {
                if (this._impl) {
                  this._impl.stop();
                }
              }
            }, _class3.EventType = EventType, _class3.ResourceType = ResourceType, _class3), (_initializer = applyDecoratedInitializer(_class2.prototype, "_resourceType", [serializable], function () {
              return ResourceType.LOCAL;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_remoteURL", [serializable], function () {
              return '';
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_clip", [_dec3, serializable], function () {
              return null;
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "_playOnAwake", [serializable], function () {
              return true;
            }), _initializer5 = applyDecoratedInitializer(_class2.prototype, "_volume", [serializable], function () {
              return 1.0;
            }), _initializer6 = applyDecoratedInitializer(_class2.prototype, "_mute", [serializable], function () {
              return false;
            }), _initializer7 = applyDecoratedInitializer(_class2.prototype, "_playbackRate", [serializable], function () {
              return 1;
            }), _initializer8 = applyDecoratedInitializer(_class2.prototype, "_loop", [serializable], function () {
              return false;
            }), _initializer9 = applyDecoratedInitializer(_class2.prototype, "_fullScreenOnAwake", [serializable], function () {
              return false;
            }), _initializer10 = applyDecoratedInitializer(_class2.prototype, "_stayOnBottom", [serializable], function () {
              return false;
            }), _initializer11 = applyDecoratedInitializer(_class2.prototype, "_keepAspectRatio", [serializable], function () {
              return true;
            }), _applyDecoratedDescriptor(_class2.prototype, "resourceType", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "resourceType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "clip"), _class2.prototype), _initializer12 = applyDecoratedInitializer(_class2.prototype, "videoPlayerEvent", [serializable, _dec6], function () {
              return [];
            })), _class2)) || _class) || _class));
            legacyCC.internal.VideoPlayer = VideoPlayer;

            replaceProperty(VideoPlayer.prototype, 'VideoPlayer.prototype', [{
              name: 'onPasued',
              newName: 'onPaused'
            }]);

        })
    };
}));
