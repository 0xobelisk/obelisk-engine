System.register("q-bundled:///fs/pal/screen-adapter/web/screen-adapter.js", ["../../../../virtual/internal%253Aconstants.js", "pal/system-info", "../../../cocos/core/platform/debug.js", "../../../cocos/core/event/event-target.js", "../../../cocos/core/math/index.js", "../enum-type/index.js", "../../../predefine.js", "../../integrity-check.js", "../../system-info/enum-type/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, TEST, systemInfo, warnID, EventTarget, Size, Orientation, legacyCC, checkPalIntegrity, withImpl, OS, ScreenAdapter, EVENT_TIMEOUT, orientationMap, WindowType, screenAdapter;
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_cocosCorePlatformDebugJs) {
      warnID = _cocosCorePlatformDebugJs.warnID;
    }, function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
    }, function (_cocosCoreMathIndexJs) {
      Size = _cocosCoreMathIndexJs.Size;
    }, function (_enumTypeIndexJs) {
      Orientation = _enumTypeIndexJs.Orientation;
    }, function (_predefineJs) {
      legacyCC = _predefineJs.default;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }, function (_systemInfoEnumTypeIndexJs) {
      OS = _systemInfoEnumTypeIndexJs.OS;
    }],
    execute: function () {
      EVENT_TIMEOUT = EDITOR ? 5 : 200;
      orientationMap = {
        auto: Orientation.AUTO,
        landscape: Orientation.LANDSCAPE,
        portrait: Orientation.PORTRAIT
      };
      /**
       * On Web platform, the game window may points to different type of window.
       */
      (function (WindowType) {
        WindowType[WindowType["Unknown"] = 0] = "Unknown";
        WindowType[WindowType["SubFrame"] = 1] = "SubFrame";
        WindowType[WindowType["BrowserWindow"] = 2] = "BrowserWindow";
        WindowType[WindowType["Fullscreen"] = 3] = "Fullscreen";
      })(WindowType || (WindowType = {}));
      ScreenAdapter = class ScreenAdapter extends EventTarget {
        get supportFullScreen() {
          return this._supportFullScreen;
        }
        get isFullScreen() {
          if (!this._supportFullScreen) {
            return false;
          }
          return !!document[this._fn.fullscreenElement];
        }
        get devicePixelRatio() {
          var _window$devicePixelRa;
          // TODO: remove the down sampling operation in DPR after supporting resolutionScale
          return Math.min((_window$devicePixelRa = window.devicePixelRatio) !== null && _window$devicePixelRa !== void 0 ? _window$devicePixelRa : 1, 2);
        }
        get windowSize() {
          const result = this._windowSizeInCssPixels;
          const dpr = this.devicePixelRatio;
          result.width *= dpr;
          result.height *= dpr;
          return result;
        }
        set windowSize(size) {
          if (this._windowType !== WindowType.SubFrame) {
            warnID(9202);
            return;
          }
          this._resizeFrame(this._convertToSizeInCssPixels(size));
        }
        get resolution() {
          const windowSize = this.windowSize;
          const resolutionScale = this.resolutionScale;
          return new Size(windowSize.width * resolutionScale, windowSize.height * resolutionScale);
        }
        get resolutionScale() {
          return this._resolutionScale;
        }
        set resolutionScale(v) {
          var _this$_cbToUpdateFram;
          if (v === this._resolutionScale) {
            return;
          }
          this._resolutionScale = v;
          (_this$_cbToUpdateFram = this._cbToUpdateFrameBuffer) === null || _this$_cbToUpdateFram === void 0 ? void 0 : _this$_cbToUpdateFram.call(this);
        }
        get orientation() {
          return this._orientation;
        }
        set orientation(value) {
          if (this._orientation === value) {
            return;
          }
          this._orientation = value;
          this._updateFrame();
        }
        _updateFrame() {
          this._updateFrameState();
          this._resizeFrame();
        }
        get safeAreaEdge() {
          const dpr = this.devicePixelRatio;
          const _top = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--safe-top') || '0') * dpr;
          const _bottom = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--safe-bottom') || '0') * dpr;
          const _left = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--safe-left') || '0') * dpr;
          const _right = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--safe-right') || '0') * dpr;
          return {
            top: _top,
            bottom: _bottom,
            left: _left,
            right: _right
          };
        }
        get isProportionalToFrame() {
          return this._isProportionalToFrame;
        }
        set isProportionalToFrame(v) {
          if (this._isProportionalToFrame === v) {
            return;
          }
          this._isProportionalToFrame = v;
          this._updateContainer();
        }
        get _windowSizeInCssPixels() {
          if (TEST) {
            return new Size(window.innerWidth, window.innerHeight);
          }
          if (this.isProportionalToFrame) {
            if (!this._gameContainer) {
              warnID(9201);
              return new Size(0, 0);
            }
            return new Size(this._gameContainer.clientWidth, this._gameContainer.clientHeight);
          }
          let fullscreenTarget;
          let width;
          let height;
          switch (this._windowType) {
            case WindowType.SubFrame:
              if (!this._gameFrame) {
                warnID(9201);
                return new Size(0, 0);
              }
              return new Size(this._gameFrame.clientWidth, this._gameFrame.clientHeight);
            case WindowType.Fullscreen:
              fullscreenTarget = this._getFullscreenTarget();
              width = this.isFrameRotated ? fullscreenTarget.clientHeight : fullscreenTarget.clientWidth;
              height = this.isFrameRotated ? fullscreenTarget.clientWidth : fullscreenTarget.clientHeight;
              return new Size(width, height);
            case WindowType.BrowserWindow:
              width = this.isFrameRotated ? window.innerHeight : window.innerWidth;
              height = this.isFrameRotated ? window.innerWidth : window.innerHeight;
              return new Size(width, height);
            case WindowType.Unknown:
            default:
              return new Size(0, 0);
          }
        }
        get _windowType() {
          if (this._isHeadlessMode) {
            return WindowType.Unknown;
          }
          if (this.isFullScreen) {
            return WindowType.Fullscreen;
          }
          if (!this._gameFrame) {
            warnID(9201);
            return WindowType.Unknown;
          }
          if (this._exactFitScreen) {
            // Note: It doesn't work well to determine whether the frame exact fits the screen.
            // Need to specify the attribute from Editor.
            return WindowType.BrowserWindow;
          }
          return WindowType.SubFrame;
        }
        //Store the device's orientation.

        constructor() {
          super();
          // TODO: need to access frame from 'pal/launcher' module
          this.isFrameRotated = false;
          this.handleResizeEvent = true;
          this._gameFrame = void 0;
          this._gameContainer = void 0;
          this._gameCanvas = void 0;
          this._isProportionalToFrame = false;
          this._cachedFrameStyle = {
            width: '0px',
            height: '0px'
          };
          this._cachedContainerStyle = {
            width: '0px',
            height: '0px'
          };
          this._cbToUpdateFrameBuffer = void 0;
          this._supportFullScreen = false;
          this._touchEventName = void 0;
          this._onFullscreenChange = void 0;
          this._onFullscreenError = void 0;
          // We need to set timeout to handle screen event.
          this._orientationChangeTimeoutId = -1;
          this._cachedFrameSize = new Size(0, 0);
          // cache before enter fullscreen.
          this._exactFitScreen = false;
          this._isHeadlessMode = false;
          this._fn = {};
          // Function mapping for cross browser support
          this._fnGroup = [['requestFullscreen', 'exitFullscreen', 'fullscreenchange', 'fullscreenEnabled', 'fullscreenElement', 'fullscreenerror'], ['requestFullScreen', 'exitFullScreen', 'fullScreenchange', 'fullScreenEnabled', 'fullScreenElement', 'fullscreenerror'], ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitIsFullScreen', 'webkitCurrentFullScreenElement', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozFullScreen', 'mozFullScreenElement', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'msFullscreenEnabled', 'msFullscreenElement', 'msfullscreenerror']];
          this._resolutionScale = 1;
          this._orientation = Orientation.AUTO;
          //The orientation set by user.
          this._orientationDevice = Orientation.AUTO;
          this._gameFrame = document.getElementById('GameDiv');
          this._gameContainer = document.getElementById('Cocos3dGameContainer');
          this._gameCanvas = document.getElementById('GameCanvas');
          // Compability with old preview or build template in Editor.
          if (!TEST && !EDITOR) {
            if (!this._gameFrame) {
              var _this$_gameCanvas, _this$_gameCanvas$par;
              this._gameFrame = document.createElement('div');
              this._gameFrame.setAttribute('id', 'GameDiv');
              (_this$_gameCanvas = this._gameCanvas) === null || _this$_gameCanvas === void 0 ? void 0 : (_this$_gameCanvas$par = _this$_gameCanvas.parentNode) === null || _this$_gameCanvas$par === void 0 ? void 0 : _this$_gameCanvas$par.insertBefore(this._gameFrame, this._gameCanvas);
              this._gameFrame.appendChild(this._gameCanvas);
            }
            if (!this._gameContainer) {
              var _this$_gameCanvas2, _this$_gameCanvas2$pa;
              this._gameContainer = document.createElement('div');
              this._gameContainer.setAttribute('id', 'Cocos3dGameContainer');
              (_this$_gameCanvas2 = this._gameCanvas) === null || _this$_gameCanvas2 === void 0 ? void 0 : (_this$_gameCanvas2$pa = _this$_gameCanvas2.parentNode) === null || _this$_gameCanvas2$pa === void 0 ? void 0 : _this$_gameCanvas2$pa.insertBefore(this._gameContainer, this._gameCanvas);
              this._gameContainer.appendChild(this._gameCanvas);
            }
          }
          let fnList;
          const fnGroup = this._fnGroup;
          for (let i = 0; i < fnGroup.length; i++) {
            fnList = fnGroup[i];
            // detect event support
            if (typeof document[fnList[1]] !== 'undefined') {
              for (let i = 0; i < fnList.length; i++) {
                this._fn[fnGroup[0][i]] = fnList[i];
              }
              break;
            }
          }
          this._supportFullScreen = this._fn.requestFullscreen !== undefined;
          this._touchEventName = 'ontouchstart' in window ? 'touchend' : 'mousedown';
          this._registerEvent();
        }
        init(options, cbToRebuildFrameBuffer) {
          this._cbToUpdateFrameBuffer = cbToRebuildFrameBuffer;
          this.orientation = orientationMap[options.configOrientation];
          this._exactFitScreen = options.exactFitScreen;
          this._isHeadlessMode = options.isHeadlessMode;
          this._resizeFrame();
        }
        requestFullScreen() {
          return new Promise((resolve, reject) => {
            if (this.isFullScreen) {
              resolve();
              return;
            }
            this._cachedFrameSize = this.windowSize;
            this._doRequestFullScreen().then(() => {
              resolve();
            }).catch(() => {
              const fullscreenTarget = this._getFullscreenTarget();
              if (!fullscreenTarget) {
                reject(new Error('Cannot access fullscreen target'));
                return;
              }
              fullscreenTarget.addEventListener(this._touchEventName, () => {
                this._doRequestFullScreen().then(() => {
                  resolve();
                }).catch(reject);
              }, {
                once: true,
                capture: true
              });
            });
          });
        }
        exitFullScreen() {
          return new Promise((resolve, reject) => {
            const requestPromise = document[this._fn.exitFullscreen]();
            if (window.Promise && requestPromise instanceof Promise) {
              requestPromise.then(() => {
                this.windowSize = this._cachedFrameSize;
                resolve();
              }).catch(reject);
              return;
            }
            this.windowSize = this._cachedFrameSize;
            resolve();
          });
        }
        _registerEvent() {
          document.addEventListener(this._fn.fullscreenerror, () => {
            var _this$_onFullscreenEr;
            (_this$_onFullscreenEr = this._onFullscreenError) === null || _this$_onFullscreenEr === void 0 ? void 0 : _this$_onFullscreenEr.call(this);
          });
          window.addEventListener('resize', () => {
            // if (!this.handleResizeEvent) {
            //     return;
            // }
            this._resizeFrame();
          });
          const notifyOrientationChange = orientation => {
            if (orientation === this._orientationDevice) {
              return;
            }
            this._orientationDevice = orientation;
            this._updateFrame();
            this.emit('orientation-change', orientation);
          };
          const getOrientation = () => {
            let tmpOrientation = Orientation.PORTRAIT;
            switch (window.orientation) {
              case 0:
                tmpOrientation = Orientation.PORTRAIT;
                break;
              case 90:
                // Handle landscape orientation, top side facing to the right
                tmpOrientation = Orientation.LANDSCAPE_RIGHT;
                break;
              case -90:
                // Handle landscape orientation, top side facing to the left
                tmpOrientation = Orientation.LANDSCAPE_LEFT;
                break;
              case 180:
                tmpOrientation = Orientation.PORTRAIT_UPSIDE_DOWN;
                break;
              default:
                tmpOrientation = this._orientationDevice;
                break;
            }
            return tmpOrientation;
          };
          /*After receive orientation-change event, window.innerWidth & innerHeight may not change immediately,
          so we delay EVENT_TIMEOUT to handle orientation-change.*/
          let handleOrientationChange;
          const orientationChangeCallback = () => {
            if (this._orientationChangeTimeoutId !== -1) {
              clearTimeout(this._orientationChangeTimeoutId);
            }
            this._orientationChangeTimeoutId = setTimeout(() => {
              handleOrientationChange();
            }, EVENT_TIMEOUT);
          };
          if (typeof window.matchMedia === 'function') {
            const updateDPRChangeListener = () => {
              var _window$matchMedia, _window$matchMedia$ad;
              const dpr = window.devicePixelRatio;
              // NOTE: some browsers especially on iPhone doesn't support MediaQueryList
              (_window$matchMedia = window.matchMedia(`(resolution: ${dpr}dppx)`)) === null || _window$matchMedia === void 0 ? void 0 : (_window$matchMedia$ad = _window$matchMedia.addEventListener) === null || _window$matchMedia$ad === void 0 ? void 0 : _window$matchMedia$ad.call(_window$matchMedia, 'change', () => {
                this.emit('window-resize', this.windowSize.width, this.windowSize.height);
                updateDPRChangeListener();
              }, {
                once: true
              });
            };
            updateDPRChangeListener();
            const mediaQueryPortrait = window.matchMedia('(orientation: portrait)');
            const mediaQueryLandscape = window.matchMedia('(orientation: landscape)');
            // eslint-disable-next-line no-restricted-globals
            const hasScreeOrientation = screen.orientation;
            handleOrientationChange = () => {
              let tmpOrientation = this._orientationDevice;
              if (mediaQueryPortrait.matches) {
                tmpOrientation = Orientation.PORTRAIT;
                if (hasScreeOrientation) {
                  // eslint-disable-next-line no-restricted-globals
                  const orientationType = screen.orientation.type;
                  if (orientationType === 'portrait-primary') {
                    tmpOrientation = Orientation.PORTRAIT;
                  } else {
                    tmpOrientation = Orientation.PORTRAIT_UPSIDE_DOWN;
                  }
                }
              } else if (mediaQueryLandscape.matches) {
                tmpOrientation = Orientation.LANDSCAPE;
                if (hasScreeOrientation) {
                  // eslint-disable-next-line no-restricted-globals
                  const orientationType = screen.orientation.type;
                  if (orientationType === 'landscape-primary') {
                    tmpOrientation = Orientation.LANDSCAPE_LEFT;
                  } else {
                    tmpOrientation = Orientation.LANDSCAPE_RIGHT;
                  }
                }
              }
              notifyOrientationChange(tmpOrientation);
            };
            mediaQueryPortrait.addEventListener('change', orientationChangeCallback);
            mediaQueryLandscape.addEventListener('change', orientationChangeCallback);
          } else {
            handleOrientationChange = () => {
              const tmpOrientation = getOrientation();
              notifyOrientationChange(tmpOrientation);
            };
            window.addEventListener('orientationchange', orientationChangeCallback);
          }
          document.addEventListener(this._fn.fullscreenchange, () => {
            var _this$_onFullscreenCh;
            (_this$_onFullscreenCh = this._onFullscreenChange) === null || _this$_onFullscreenCh === void 0 ? void 0 : _this$_onFullscreenCh.call(this);
            this.emit('fullscreen-change', this.windowSize.width, this.windowSize.height);
          });
        }
        _convertToSizeInCssPixels(size) {
          const clonedSize = size.clone();
          const dpr = this.devicePixelRatio;
          clonedSize.width /= dpr;
          clonedSize.height /= dpr;
          return clonedSize;
        }

        /**
         * The frame size may be from screen size or an external editor options by setting screen.windowSize.
         * @param sizeInCssPixels you need to specify this size when the windowType is SubFrame.
         */
        _resizeFrame(sizeInCssPixels) {
          if (!this._gameFrame) {
            return;
          }
          // Center align the canvas
          this._gameFrame.style.display = 'flex';
          this._gameFrame.style['justify-content'] = 'center';
          this._gameFrame.style['align-items'] = 'center';
          if (this._windowType === WindowType.SubFrame) {
            if (!sizeInCssPixels) {
              this._updateContainer();
              return;
            }
            this._gameFrame.style.width = `${sizeInCssPixels.width}px`;
            this._gameFrame.style.height = `${sizeInCssPixels.height}px`;
          } else {
            const winWidth = window.innerWidth;
            let winHeight = window.innerHeight;
            //On certain android devices, window.innerHeight may not account for the height of the virtual keyboard, so dynamic calculation is necessary.
            const inputHeight = document.body.scrollHeight - winHeight;
            if (systemInfo.os === OS.ANDROID && winHeight < inputHeight) {
              winHeight += inputHeight;
            }
            if (this.isFrameRotated) {
              this._gameFrame.style['-webkit-transform'] = 'rotate(90deg)';
              this._gameFrame.style.transform = 'rotate(90deg)';
              this._gameFrame.style['-webkit-transform-origin'] = '0px 0px 0px';
              this._gameFrame.style.transformOrigin = '0px 0px 0px';
              this._gameFrame.style.margin = `0 0 0 ${winWidth}px`;
              this._gameFrame.style.width = `${winHeight}px`;
              this._gameFrame.style.height = `${winWidth}px`;
            } else {
              this._gameFrame.style['-webkit-transform'] = 'rotate(0deg)';
              this._gameFrame.style.transform = 'rotate(0deg)';
              // TODO
              // this._gameFrame.style['-webkit-transform-origin'] = '0px 0px 0px';
              // this._gameFrame.style.transformOrigin = '0px 0px 0px';
              this._gameFrame.style.margin = '0px auto';
              this._gameFrame.style.width = `${winWidth}px`;
              this._gameFrame.style.height = `${winHeight}px`;
            }
          }
          this._updateContainer();
        }
        _getFullscreenTarget() {
          const windowType = this._windowType;
          if (windowType === WindowType.Fullscreen) {
            return document[this._fn.fullscreenElement];
          }
          if (windowType === WindowType.SubFrame) {
            return this._gameFrame;
          }
          // On web mobile, the transform of game frame doesn't work when it's on fullscreen.
          // So we need to make the body fullscreen.
          return document.body;
        }
        _doRequestFullScreen() {
          return new Promise((resolve, reject) => {
            if (!this._supportFullScreen) {
              reject(new Error('fullscreen is not supported'));
              return;
            }
            const fullscreenTarget = this._getFullscreenTarget();
            if (!fullscreenTarget) {
              reject(new Error('Cannot access fullscreen target'));
              return;
            }
            this._onFullscreenChange = undefined;
            this._onFullscreenError = undefined;
            const requestPromise = fullscreenTarget[this._fn.requestFullscreen]();
            if (window.Promise && requestPromise instanceof Promise) {
              requestPromise.then(resolve).catch(reject);
            } else {
              this._onFullscreenChange = resolve;
              this._onFullscreenError = reject;
            }
          });
        }
        _updateFrameState() {
          const orientation = this.orientation;
          const width = window.innerWidth;
          const height = window.innerHeight;
          const isBrowserLandscape = width > height;
          this.isFrameRotated = systemInfo.isMobile && (isBrowserLandscape && orientation === Orientation.PORTRAIT || !isBrowserLandscape && orientation === Orientation.LANDSCAPE);
        }
        _updateContainer() {
          if (!this._gameContainer) {
            warnID(9201);
            return;
          }
          if (this.isProportionalToFrame) {
            if (!this._gameFrame) {
              warnID(9201);
              return;
            }
            // TODO: access designedResolution from Launcher module.
            const designedResolution = legacyCC.view.getDesignResolutionSize();
            const frame = this._gameFrame;
            const frameW = frame.clientWidth;
            const frameH = frame.clientHeight;
            const designW = designedResolution.width;
            const designH = designedResolution.height;
            const scaleX = frameW / designW;
            const scaleY = frameH / designH;
            const containerStyle = this._gameContainer.style;
            let containerW;
            let containerH;
            if (scaleX < scaleY) {
              containerW = frameW;
              containerH = designH * scaleX;
            } else {
              containerW = designW * scaleY;
              containerH = frameH;
            }
            // Set window size on game container
            containerStyle.width = `${containerW}px`;
            containerStyle.height = `${containerH}px`;
          } else {
            const containerStyle = this._gameContainer.style;
            // game container exact fit game frame.
            containerStyle.width = '100%';
            containerStyle.height = '100%';
          }

          // Cache Test
          if (this._gameFrame && (this._cachedFrameStyle.width !== this._gameFrame.style.width || this._cachedFrameStyle.height !== this._gameFrame.style.height || this._cachedContainerStyle.width !== this._gameContainer.style.width || this._cachedContainerStyle.height !== this._gameContainer.style.height)) {
            this.emit('window-resize', this.windowSize.width, this.windowSize.height);

            // Update Cache
            this._cachedFrameStyle.width = this._gameFrame.style.width;
            this._cachedFrameStyle.height = this._gameFrame.style.height;
            this._cachedContainerStyle.width = this._gameContainer.style.width;
            this._cachedContainerStyle.height = this._gameContainer.style.height;
          }
        }
      };
      _export("screenAdapter", screenAdapter = new ScreenAdapter());
      checkPalIntegrity(withImpl());
    }
  };
});