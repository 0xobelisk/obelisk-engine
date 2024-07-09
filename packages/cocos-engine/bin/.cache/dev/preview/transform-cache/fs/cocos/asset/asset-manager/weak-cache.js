System.register("q-bundled:///fs/cocos/asset/asset-manager/weak-cache.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var js, WeakCache;
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
    setters: [function (_coreIndexJs) {
      js = _coreIndexJs.js;
    }],
    execute: function () {
      _export("default", WeakCache = /*#__PURE__*/function () {
        function WeakCache(map) {
          this._weakMap = {};
          if (typeof window.WeakRef === 'undefined') throw new Error('this platform does not support WeakRef!');
          if (map) {
            for (var _key in map) {
              this._weakMap[_key] = new WeakRef(map[_key]);
            }
          }
        }
        var _proto = WeakCache.prototype;
        _proto.add = function add(key, val) {
          this._weakMap[key] = new WeakRef(val);
          return val;
        };
        _proto.has = function has(key) {
          return key in this._weakMap && !!this._weakMap[key].deref();
        };
        _proto.get = function get(key) {
          return this._weakMap[key] && this._weakMap[key].deref();
        };
        _proto.remove = function remove(key) {
          var out = this._weakMap[key];
          delete this._weakMap[key];
          return out && out.deref();
        };
        _proto.clear = function clear() {
          this._weakMap = js.createMap(true);
        };
        _proto.forEach = function forEach(func) {
          for (var _key2 in this._weakMap) {
            var _val = this.get(_key2);
            if (_val) {
              func(_val, _key2);
            }
          }
        };
        _proto.find = function find(predicate) {
          for (var _key3 in this._weakMap) {
            var _val2 = this.get(_key3);
            if (_val2 && predicate(_val2, _key3)) {
              return this._weakMap[_key3].deref();
            }
          }
          return null;
        };
        _proto.destroy = function destroy() {
          this._weakMap = {};
        };
        _createClass(WeakCache, [{
          key: "count",
          get: function get() {
            return Object.values(this._weakMap).filter(function (weakRef) {
              return weakRef.deref();
            }).length;
          }
        }]);
        return WeakCache;
      }());
    }
  };
});