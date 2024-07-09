System.register("q-bundled:///fs/pal/pacer/pacer-web.js", ["../../../virtual/internal%253Aconstants.js", "../../cocos/core/data/utils/asserts.js", "../integrity-check.js"], function (_export, _context) {
  "use strict";

  var EDITOR, assertIsTrue, checkPalIntegrity, withImpl, FRAME_RESET_TIME, Pacer;
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
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_cocosCoreDataUtilsAssertsJs) {
      assertIsTrue = _cocosCoreDataUtilsAssertsJs.assertIsTrue;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }],
    execute: function () {
      FRAME_RESET_TIME = 2000;
      _export("Pacer", Pacer = /*#__PURE__*/function () {
        function Pacer() {
          var _this = this;
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
          this._handleRAF = function (stamp) {
            var currTime = performance.now();
            var elapseTime = currTime - _this._startTime;
            var elapseFrame = Math.floor(elapseTime / _this._frameTime);
            if (elapseFrame < 0) {
              _this._startTime = currTime;
              _this._frameCount = 0;
            }
            if (elapseFrame < _this._frameCount) {
              _this._stHandle = _this._rAF.call(window, _this._handleRAF);
            } else {
              _this._frameCount = elapseFrame + 1;
              if (_this._callback) {
                _this._callback();
              }
            }
          };
          this._frameTime = 1000 / this._targetFrameRate;
          this._rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
          this._cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.ocancelAnimationFrame;
        }
        var _proto = Pacer.prototype;
        _proto.start = function start() {
          var _globalThis$__globalX,
            _this2 = this;
          if (this._isPlaying) return;
          var recordStartTime = EDITOR || this._rAF === undefined || ((_globalThis$__globalX = globalThis.__globalXR) === null || _globalThis$__globalX === void 0 ? void 0 : _globalThis$__globalX.isWebXR);
          var updateCallback = function updateCallback() {
            if (recordStartTime) _this2._startTime = performance.now();
            if (_this2._isPlaying) {
              _this2._stHandle = _this2._stTime(updateCallback);
            }
            if (_this2._onTick) {
              _this2._onTick();
            }
          };
          this._startTime = performance.now();
          this._stHandle = this._stTime(updateCallback);
          this._isPlaying = true;
          this._frameCount = 0;
        };
        _proto.stop = function stop() {
          if (!this._isPlaying) return;
          this._ctTime(this._stHandle);
          this._stHandle = 0;
          this._isPlaying = false;
          this._frameCount = 0;
        };
        _proto._stTime = function _stTime(callback) {
          var _globalThis$__globalX2;
          if (EDITOR || this._rAF === undefined || (_globalThis$__globalX2 = globalThis.__globalXR) !== null && _globalThis$__globalX2 !== void 0 && _globalThis$__globalX2.isWebXR) {
            var currTime = performance.now();
            var elapseTime = Math.max(0, currTime - this._startTime);
            var timeToCall = Math.max(0, this._frameTime - elapseTime);
            return setTimeout(callback, timeToCall);
          }
          this._callback = callback;
          return this._rAF.call(window, this._handleRAF);
        };
        _proto._ctTime = function _ctTime(id) {
          var _globalThis$__globalX3;
          if (EDITOR || this._cAF === undefined || (_globalThis$__globalX3 = globalThis.__globalXR) !== null && _globalThis$__globalX3 !== void 0 && _globalThis$__globalX3.isWebXR) {
            clearTimeout(id);
          } else if (id) {
            this._cAF.call(window, id);
          }
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
              this._frameTime = 1000 / this._targetFrameRate;
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