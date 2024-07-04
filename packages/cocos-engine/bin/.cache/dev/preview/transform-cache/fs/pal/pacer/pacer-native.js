System.register("q-bundled:///fs/pal/pacer/pacer-native.js", ["../../cocos/core/data/utils/asserts.js", "../integrity-check.js"], function (_export, _context) {
  "use strict";

  var assertIsTrue, checkPalIntegrity, withImpl, Pacer;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
    setters: [function (_cocosCoreDataUtilsAssertsJs) {
      assertIsTrue = _cocosCoreDataUtilsAssertsJs.assertIsTrue;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }],
    execute: function () {
      _export("Pacer", Pacer = /*#__PURE__*/function () {
        function Pacer() {
          var _this = this;
          this._rafHandle = 0;
          this._onTick = null;
          this._targetFrameRate = 60;
          this._isPlaying = false;
          this._updateCallback = void 0;
          this._updateCallback = function () {
            if (_this._isPlaying) {
              _this._rafHandle = requestAnimationFrame(_this._updateCallback);
            }
            if (_this._onTick) {
              _this._onTick();
            }
          };
        }
        var _proto = Pacer.prototype;
        _proto.start = function start() {
          if (this._isPlaying) return;
          this._rafHandle = requestAnimationFrame(this._updateCallback);
          this._isPlaying = true;
        };
        _proto.stop = function stop() {
          if (!this._isPlaying) return;
          cancelAnimationFrame(this._rafHandle);
          this._rafHandle = 0;
          this._isPlaying = false;
        };
        _createClass(Pacer, [{
          key: "targetFrameRate",
          get: function get() {
            return this._targetFrameRate;
          },
          set: function set(val) {
            if (this._targetFrameRate !== val) {
              assertIsTrue(val > 0);
              this._targetFrameRate = val;
              jsb.setPreferredFramesPerSecond(this._targetFrameRate);
              if (this._isPlaying) {
                this.stop();
                this.start();
              }
            }
          }
        }, {
          key: "onTick",
          get: function get() {
            return this._onTick;
          },
          set: function set(val) {
            this._onTick = val;
          }
        }]);
        return Pacer;
      }());
      checkPalIntegrity(withImpl());
    }
  };
});