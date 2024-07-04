System.register("q-bundled:///fs/cocos/video/video-player-impl.js", ["../core/global-exports.js", "../2d/framework/index.js", "./video-player-enums.js", "../core/platform/index.js", "../game/director.js"], function (_export, _context) {
  "use strict";

  var legacyCC, UITransform, EventType, error, director, VideoPlayerImpl;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_dFrameworkIndexJs) {
      UITransform = _dFrameworkIndexJs.UITransform;
    }, function (_videoPlayerEnumsJs) {
      EventType = _videoPlayerEnumsJs.EventType;
    }, function (_corePlatformIndexJs) {
      error = _corePlatformIndexJs.error;
    }, function (_gameDirectorJs) {
      director = _gameDirectorJs.director;
    }],
    execute: function () {
      _export("VideoPlayerImpl", VideoPlayerImpl = /*#__PURE__*/function () {
        function VideoPlayerImpl(component) {
          var _this = this;
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
          this._onInterruptedBegin = function () {
            if (!_this.video || _this._state !== EventType.PLAYING) {
              return;
            }
            _this.video.pause();
            _this._interrupted = true;
          };
          this._onInterruptedEnd = function () {
            if (!_this._interrupted || !_this.video) {
              return;
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            _this.video.play();
            _this._interrupted = false;
          };
          /* handle pause & resume */
          legacyCC.game.on(legacyCC.Game.EVENT_PAUSE, this._onInterruptedBegin);
          legacyCC.game.on(legacyCC.Game.EVENT_RESUME, this._onInterruptedEnd);
        }

        //
        var _proto = VideoPlayerImpl.prototype;
        // video player event
        _proto.onLoadedMetadata = function onLoadedMetadata(e) {
          this._loadedMeta = true;
          this._forceUpdate = true;
          if (this._visible) {
            this.enable();
          } else {
            this.disable();
          }
          this.dispatchEvent(EventType.META_LOADED);
          var video = e.target;
          if (this._keepAspectRatio && video) {
            this.syncUITransform(video.videoWidth, video.videoHeight);
          }
          this.delayedFullScreen();
          this.delayedPlay();
        };
        _proto.onCanPlay = function onCanPlay(e) {
          this._loaded = true;
          this.dispatchEvent(EventType.READY_TO_PLAY);
        };
        _proto.onPlay = function onPlay(e) {
          this._playing = true;
          this.dispatchEvent(EventType.PLAYING);
        };
        _proto.onPlaying = function onPlaying(e) {
          this.dispatchEvent(EventType.PLAYING);
        };
        _proto.onPause = function onPause(e) {
          this._playing = false;
          if (this._ignorePause) {
            this._ignorePause = false;
            return;
          }
          this.dispatchEvent(EventType.PAUSED);
        };
        _proto.onStoped = function onStoped(e) {
          this._playing = false;
          this._ignorePause = false;
          this.dispatchEvent(EventType.STOPPED);
        };
        _proto.onEnded = function onEnded(e) {
          this._playing = false;
          this.dispatchEvent(EventType.COMPLETED);
        };
        _proto.onClick = function onClick(e) {
          this.dispatchEvent(EventType.CLICKED);
        };
        _proto.onError = function onError(e) {
          this.dispatchEvent(EventType.ERROR);
          var video = e.target;
          if (video && video.error) {
            error("Error " + video.error.code + "; details: " + video.error.message);
          }
        };
        _proto.play = function play() {
          if (this._loadedMeta || this._loaded) {
            this.canPlay();
          } else {
            this._waitingPlay = true;
          }
        };
        _proto.delayedPlay = function delayedPlay() {
          if (this._waitingPlay) {
            this.canPlay();
            this._waitingPlay = false;
          }
        };
        _proto.syncFullScreenOnAwake = function syncFullScreenOnAwake(enabled) {
          this._fullScreenOnAwake = enabled;
          if (this._loadedMeta || this._loaded) {
            this.canFullScreen(enabled);
          } else {
            this._waitingFullscreen = true;
          }
        };
        _proto.delayedFullScreen = function delayedFullScreen() {
          if (this._waitingFullscreen) {
            this.canFullScreen(this._fullScreenOnAwake);
            this._waitingFullscreen = false;
          }
        };
        _proto.dispatchEvent = function dispatchEvent(key) {
          var callback = this._componentEventList.get(key);
          if (callback) {
            this._state = key;
            callback.call(this);
          }
        };
        _proto.syncUITransform = function syncUITransform(width, height) {
          if (this._uiTrans) {
            this._uiTrans.width = width;
            this._uiTrans.height = height;
          }
        };
        _proto.syncCurrentTime = function syncCurrentTime() {
          if (!this.video) {
            return;
          }
          if (this._cachedCurrentTime !== -1 && this.video.currentTime !== this._cachedCurrentTime) {
            this.seekTo(this._cachedCurrentTime);
            this._cachedCurrentTime = -1;
          }
        };
        _proto.destroy = function destroy() {
          this.removeVideoPlayer();
          this._componentEventList.clear();
          legacyCC.game.off(legacyCC.Game.EVENT_PAUSE, this._onInterruptedBegin);
          legacyCC.game.off(legacyCC.Game.EVENT_RESUME, this._onInterruptedEnd);
        };
        _createClass(VideoPlayerImpl, [{
          key: "fullScreenOnAwake",
          get: function get() {
            return this._fullScreenOnAwake;
          }
        }, {
          key: "loaded",
          get: function get() {
            return this._loaded;
          }
        }, {
          key: "componentEventList",
          get: function get() {
            return this._componentEventList;
          }
        }, {
          key: "video",
          get: function get() {
            return this._video;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }, {
          key: "isPlaying",
          get: function get() {
            return this._playing;
          }
        }, {
          key: "UICamera",
          get: function get() {
            return director.root.batcher2D.getFirstRenderCamera(this._node);
          }
        }]);
        return VideoPlayerImpl;
      }());
      legacyCC.internal.VideoPlayerImpl = VideoPlayerImpl;
    }
  };
});