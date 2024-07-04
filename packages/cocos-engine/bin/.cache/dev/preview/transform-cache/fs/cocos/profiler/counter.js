System.register("q-bundled:///fs/cocos/profiler/counter.js", [], function (_export, _context) {
  "use strict";

  var Counter;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [],
    execute: function () {
      /*
       Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
      
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
      _export("Counter", Counter = /*#__PURE__*/function () {
        function Counter(id, opts, now) {
          this._opts = void 0;
          this._total = 0;
          this._value = 0;
          this._averageValue = 0;
          this._accumValue = 0;
          this._accumSamples = 0;
          this._id = id;
          this._opts = opts;
          this._accumStart = now;
        }
        var _proto = Counter.prototype;
        _proto.sample = function sample(now) {
          this._average(this._value, now);
        };
        _proto.human = function human() {
          var _this$_opts = this._opts,
            average = _this$_opts.average,
            isInteger = _this$_opts.isInteger;
          var v = average ? this._averageValue : this._value;
          return isInteger ? Math.round(v) : Math.round(v * 100) / 100;
        };
        _proto.alarm = function alarm() {
          if (this._opts.below !== undefined && this._value < this._opts.below) {
            return true;
          }
          if (this._opts.over !== undefined && this._value > this._opts.over) {
            return true;
          }
          return false;
        };
        _proto._average = function _average(v, now) {
          if (now === void 0) {
            now = 0;
          }
          if (this._opts.average) {
            this._accumValue += v;
            ++this._accumSamples;
            var t = now;
            if (t - this._accumStart >= this._opts.average) {
              this._averageValue = this._accumValue / this._accumSamples;
              this._accumValue = 0;
              this._accumStart = t;
              this._accumSamples = 0;
            }
          }
        };
        _createClass(Counter, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(val) {
            this._value = val;
          }
        }]);
        return Counter;
      }());
    }
  };
});