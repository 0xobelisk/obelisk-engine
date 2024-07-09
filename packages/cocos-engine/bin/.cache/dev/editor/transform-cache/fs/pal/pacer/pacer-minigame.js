System.register("q-bundled:///fs/pal/pacer/pacer-minigame.js", ["pal/minigame", "../../cocos/core/data/utils/asserts.js", "../integrity-check.js"], function (_export, _context) {
  "use strict";

  var minigame, assertIsTrue, checkPalIntegrity, withImpl, Pacer;
  _export("Pacer", void 0);
  return {
    setters: [function (_palMinigame) {
      minigame = _palMinigame.minigame;
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
      _export("Pacer", Pacer = class Pacer {
        constructor() {
          this._rafHandle = 0;
          this._onTick = null;
          this._updateCallback = void 0;
          this._targetFrameRate = 60;
          this._isPlaying = false;
          this._updateCallback = () => {
            if (this._isPlaying) {
              this._rafHandle = requestAnimationFrame(this._updateCallback);
            }
            if (this._onTick) {
              this._onTick();
            }
          };
        }
        get targetFrameRate() {
          return this._targetFrameRate;
        }
        set targetFrameRate(val) {
          if (this._targetFrameRate !== val) {
            assertIsTrue(val > 0);
            this._targetFrameRate = val;
            minigame.setPreferredFramesPerSecond(this._targetFrameRate);
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
          if (this._isPlaying) return;
          this._rafHandle = requestAnimationFrame(this._updateCallback);
          this._isPlaying = true;
        }
        stop() {
          if (!this._isPlaying) return;
          cancelAnimationFrame(this._rafHandle);
          this._rafHandle = 0;
          this._isPlaying = false;
        }
      });
      checkPalIntegrity(withImpl());
    }
  };
});