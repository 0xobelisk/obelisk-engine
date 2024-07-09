System.register("q-bundled:///fs/pal/pacer/pacer-web.js", ["../../../virtual/internal%253Aconstants.js", "../../cocos/core/data/utils/asserts.js", "../integrity-check.js"], function (_export, _context) {
  "use strict";

  var EDITOR, assertIsTrue, checkPalIntegrity, withImpl, Pacer, FRAME_RESET_TIME;
  _export("Pacer", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_cocosCoreDataUtilsAssertsJs) {
      assertIsTrue = _cocosCoreDataUtilsAssertsJs.assertIsTrue;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
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
      FRAME_RESET_TIME = 2000;
      _export("Pacer", Pacer = class Pacer {
        constructor() {
          this._stHandle = 0;
          this._onTick = null;
          this._targetFrameRate = 60;
          this._frameTime = 0;
          this._startTime = 0;
          this._isPlaying = false;
          this._frameCount = 0;
          this._callback = null;
          this._rAF = void 0;
          this._cAF = void 0;
          this._handleRAF = stamp => {
            const currTime = performance.now();
            const elapseTime = currTime - this._startTime;
            const elapseFrame = Math.floor(elapseTime / this._frameTime);
            if (elapseFrame < 0) {
              this._startTime = currTime;
              this._frameCount = 0;
            }
            if (elapseFrame < this._frameCount) {
              this._stHandle = this._rAF.call(window, this._handleRAF);
            } else {
              this._frameCount = elapseFrame + 1;
              if (this._callback) {
                this._callback();
              }
            }
          };
          this._frameTime = 1000 / this._targetFrameRate;
          this._rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
          this._cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.ocancelAnimationFrame;
        }
        get targetFrameRate() {
          return this._targetFrameRate;
        }
        set targetFrameRate(val) {
          if (this._targetFrameRate !== val) {
            assertIsTrue(val > 0);
            this._targetFrameRate = val;
            this._frameTime = 1000 / this._targetFrameRate;
            if (this._isPlaying) {
              this.stop();
              this.start();
            }
          }
        }
        set onTick(val) {
          this._onTick = val;
        }
        get onTick() {
          return this._onTick;
        }
        start() {
          var _globalThis$__globalX;
          if (this._isPlaying) return;
          const recordStartTime = EDITOR || this._rAF === undefined || ((_globalThis$__globalX = globalThis.__globalXR) === null || _globalThis$__globalX === void 0 ? void 0 : _globalThis$__globalX.isWebXR);
          const updateCallback = () => {
            if (recordStartTime) this._startTime = performance.now();
            if (this._isPlaying) {
              this._stHandle = this._stTime(updateCallback);
            }
            if (this._onTick) {
              this._onTick();
            }
          };
          this._startTime = performance.now();
          this._stHandle = this._stTime(updateCallback);
          this._isPlaying = true;
          this._frameCount = 0;
        }
        stop() {
          if (!this._isPlaying) return;
          this._ctTime(this._stHandle);
          this._stHandle = 0;
          this._isPlaying = false;
          this._frameCount = 0;
        }
        _stTime(callback) {
          var _globalThis$__globalX2;
          if (EDITOR || this._rAF === undefined || (_globalThis$__globalX2 = globalThis.__globalXR) !== null && _globalThis$__globalX2 !== void 0 && _globalThis$__globalX2.isWebXR) {
            const currTime = performance.now();
            const elapseTime = Math.max(0, currTime - this._startTime);
            const timeToCall = Math.max(0, this._frameTime - elapseTime);
            return setTimeout(callback, timeToCall);
          }
          this._callback = callback;
          return this._rAF.call(window, this._handleRAF);
        }
        _ctTime(id) {
          var _globalThis$__globalX3;
          if (EDITOR || this._cAF === undefined || (_globalThis$__globalX3 = globalThis.__globalXR) !== null && _globalThis$__globalX3 !== void 0 && _globalThis$__globalX3.isWebXR) {
            clearTimeout(id);
          } else if (id) {
            this._cAF.call(window, id);
          }
        }
      });
      checkPalIntegrity(withImpl());
    }
  };
});