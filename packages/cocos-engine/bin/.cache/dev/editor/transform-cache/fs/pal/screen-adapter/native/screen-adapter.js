System.register("q-bundled:///fs/pal/screen-adapter/native/screen-adapter.js", ["../../../../virtual/internal%253Aconstants.js", "../../../cocos/core/event/event-target.js", "../../../cocos/core/math/index.js", "../../integrity-check.js", "../enum-type/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, EventTarget, Size, checkPalIntegrity, withImpl, Orientation, ScreenAdapter, orientationMap, screenAdapter;
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
    }, function (_cocosCoreMathIndexJs) {
      Size = _cocosCoreMathIndexJs.Size;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }, function (_enumTypeIndexJs) {
      Orientation = _enumTypeIndexJs.Orientation;
    }],
    execute: function () {
      /*
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
      // these value is defined in the native layer
      orientationMap = {
        0: Orientation.PORTRAIT,
        '-90': Orientation.LANDSCAPE_LEFT,
        90: Orientation.LANDSCAPE_RIGHT,
        180: Orientation.PORTRAIT_UPSIDE_DOWN
      };
      ScreenAdapter = class ScreenAdapter extends EventTarget {
        get supportFullScreen() {
          return false;
        }
        get isFullScreen() {
          return false;
        }
        get devicePixelRatio() {
          return jsb.device.getDevicePixelRatio() || 1;
        }
        get windowSize() {
          const dpr = this.devicePixelRatio;
          // NOTE: fix precision issue on Metal render end.
          const width = jsb.window.innerWidth;
          const height = jsb.window.innerHeight;
          // NOTE: fix precision issue on Metal render end.
          const roundWidth = Math.round(width);
          const roundHeight = Math.round(height);
          return new Size(roundWidth * dpr, roundHeight * dpr);
        }
        set windowSize(size) {
          console.warn('Setting window size is not supported yet.');
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
          return orientationMap[jsb.device.getDeviceOrientation()];
        }
        set orientation(value) {
          console.warn('Setting orientation is not supported yet.');
        }
        get safeAreaEdge() {
          const nativeSafeArea = jsb.device.getSafeAreaEdge();
          const dpr = this.devicePixelRatio;
          let topEdge = nativeSafeArea.x * dpr;
          let bottomEdge = nativeSafeArea.z * dpr;
          let leftEdge = nativeSafeArea.y * dpr;
          let rightEdge = nativeSafeArea.w * dpr;
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
          super();
          this.isFrameRotated = false;
          this.handleResizeEvent = true;
          this._cbToUpdateFrameBuffer = void 0;
          this._resolutionScale = 1;
          this._isProportionalToFrame = false;
          this._registerEvent();
        }
        init(options, cbToRebuildFrameBuffer) {
          this._cbToUpdateFrameBuffer = cbToRebuildFrameBuffer;
          if (!EDITOR) {
            this._cbToUpdateFrameBuffer();
          }
        }
        requestFullScreen() {
          return Promise.reject(new Error('request fullscreen has not been supported yet on this platform.'));
        }
        exitFullScreen() {
          return Promise.reject(new Error('exit fullscreen has not been supported yet on this platform.'));
        }
        _registerEvent() {
          jsb.onResize = event => {
            if (event.width === 0 || event.height === 0) return;
            // TODO: remove this function calling
            window.resize(event.width / this.devicePixelRatio, event.height / this.devicePixelRatio);
            this.emit('window-resize', event.width, event.height, event.windowId);
          };
          jsb.onOrientationChanged = event => {
            this.emit('orientation-change', this.orientation);
          };
        }
      };
      _export("screenAdapter", screenAdapter = new ScreenAdapter());
      checkPalIntegrity(withImpl());
    }
  };
});