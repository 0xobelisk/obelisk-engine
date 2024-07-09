System.register("q-bundled:///fs/pal/screen-adapter/minigame/screen-adapter.js", ["../../../../virtual/internal%253Aconstants.js", "pal/minigame", "pal/system-info", "../../../cocos/core/platform/debug.js", "../../../cocos/core/event/event-target.js", "../../../cocos/core/math/index.js", "../../system-info/enum-type/index.js", "../enum-type/index.js", "../../integrity-check.js"], function (_export, _context) {
  "use strict";

  var ALIPAY, BYTEDANCE, VIVO, minigame, systemInfo, warnID, EventTarget, Size, OS, Orientation, checkPalIntegrity, withImpl, ScreenAdapter, rotateLandscape, fs, screenOrientation, screenAdapter;
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
      ALIPAY = _virtualInternal253AconstantsJs.ALIPAY;
      BYTEDANCE = _virtualInternal253AconstantsJs.BYTEDANCE;
      VIVO = _virtualInternal253AconstantsJs.VIVO;
    }, function (_palMinigame) {
      minigame = _palMinigame.minigame;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_cocosCorePlatformDebugJs) {
      warnID = _cocosCorePlatformDebugJs.warnID;
    }, function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
    }, function (_cocosCoreMathIndexJs) {
      Size = _cocosCoreMathIndexJs.Size;
    }, function (_systemInfoEnumTypeIndexJs) {
      OS = _systemInfoEnumTypeIndexJs.OS;
    }, function (_enumTypeIndexJs) {
      Orientation = _enumTypeIndexJs.Orientation;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }],
    execute: function () {
      // HACK: In some platform like CocosPlay or Alipay iOS end
      // the windowSize need to rotate when init screenAdapter if it's landscape
      rotateLandscape = false;
      try {
        if (ALIPAY) {
          if (systemInfo.os === OS.IOS && !minigame.isDevTool) {
            // TODO: use pal/fs
            // issue: https://github.com/cocos/cocos-engine/issues/14647
            fs = my.getFileSystemManager();
            screenOrientation = JSON.parse(fs.readFileSync({
              filePath: 'game.json',
              encoding: 'utf8'
            }).data).screenOrientation;
            rotateLandscape = screenOrientation === 'landscape';
          }
        }
      } catch (e) {
        console.error(e);
      }
      ScreenAdapter = class ScreenAdapter extends EventTarget {
        get supportFullScreen() {
          return false;
        }
        get isFullScreen() {
          return false;
        }
        get devicePixelRatio() {
          const sysInfo = minigame.getSystemInfoSync();
          return sysInfo.pixelRatio;
        }
        get windowSize() {
          const sysInfo = minigame.getSystemInfoSync();
          const dpr = this.devicePixelRatio;
          let screenWidth = sysInfo.windowWidth;
          let screenHeight = sysInfo.windowHeight;
          if (BYTEDANCE) {
            screenWidth = sysInfo.screenWidth;
            screenHeight = sysInfo.screenHeight;
          }
          if (ALIPAY && rotateLandscape && screenWidth < screenHeight) {
            const temp = screenWidth;
            screenWidth = screenHeight;
            screenHeight = temp;
          }
          return new Size(screenWidth * dpr, screenHeight * dpr);
        }
        set windowSize(size) {
          warnID(1221);
        }
        get resolution() {
          const windowSize = this.windowSize;
          const resolutionScale = this.resolutionScale;
          return new Size(windowSize.width * resolutionScale, windowSize.height * resolutionScale);
        }
        get resolutionScale() {
          return this._resolutionScale;
        }
        set resolutionScale(value) {
          var _this$_cbToUpdateFram;
          if (value === this._resolutionScale) {
            return;
          }
          this._resolutionScale = value;
          (_this$_cbToUpdateFram = this._cbToUpdateFrameBuffer) === null || _this$_cbToUpdateFram === void 0 ? void 0 : _this$_cbToUpdateFram.call(this);
        }
        get orientation() {
          return minigame.orientation;
        }
        set orientation(value) {
          console.warn('Setting orientation is not supported yet.');
        }
        get safeAreaEdge() {
          const minigameSafeArea = minigame.getSafeArea();
          const windowSize = this.windowSize;
          // NOTE: safe area info on vivo platform is in physical pixel.
          // No need to multiply with DPR.
          const dpr = VIVO ? 1 : this.devicePixelRatio;
          let topEdge = minigameSafeArea.top * dpr;
          let bottomEdge = windowSize.height - minigameSafeArea.bottom * dpr;
          let leftEdge = minigameSafeArea.left * dpr;
          let rightEdge = windowSize.width - minigameSafeArea.right * dpr;
          const orientation = this.orientation;
          // Make it symmetrical.
          if (orientation === Orientation.PORTRAIT) {
            if (topEdge < bottomEdge) {
              topEdge = bottomEdge;
            } else {
              bottomEdge = topEdge;
            }
          } else if (leftEdge < rightEdge) {
            leftEdge = rightEdge;
          } else {
            rightEdge = leftEdge;
          }
          return {
            top: topEdge,
            bottom: bottomEdge,
            left: leftEdge,
            right: rightEdge
          };
        }
        get isProportionalToFrame() {
          return this._isProportionalToFrame;
        }
        set isProportionalToFrame(v) {}
        constructor() {
          var _minigame$onWindowRes;
          super();
          this.isFrameRotated = false;
          this.handleResizeEvent = true;
          this._cbToUpdateFrameBuffer = void 0;
          this._resolutionScale = 1;
          this._isProportionalToFrame = false;
          (_minigame$onWindowRes = minigame.onWindowResize) === null || _minigame$onWindowRes === void 0 ? void 0 : _minigame$onWindowRes.call(minigame, () => {
            this.emit('window-resize', this.windowSize.width, this.windowSize.height);
          });
        }
        init(options, cbToRebuildFrameBuffer) {
          this._cbToUpdateFrameBuffer = cbToRebuildFrameBuffer;
          this._cbToUpdateFrameBuffer();
        }
        requestFullScreen() {
          return Promise.reject(new Error('request fullscreen is not supported on this platform.'));
        }
        exitFullScreen() {
          return Promise.reject(new Error('exit fullscreen is not supported on this platform.'));
        }
      };
      _export("screenAdapter", screenAdapter = new ScreenAdapter());
      checkPalIntegrity(withImpl());
    }
  };
});