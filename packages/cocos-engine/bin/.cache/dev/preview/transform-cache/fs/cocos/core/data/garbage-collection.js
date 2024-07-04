System.register("q-bundled:///fs/cocos/core/data/garbage-collection.js", ["../../../../virtual/internal%253Aconstants.js"], function (_export, _context) {
  "use strict";

  var EDITOR, targetSymbol, GarbageCollectionManager, garbageCollectionManager;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2019-2023 Xiamen Yaji Software Co., Ltd.
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
    }],
    execute: function () {
      targetSymbol = Symbol('[[target]]');
      GarbageCollectionManager = /*#__PURE__*/function () {
        function GarbageCollectionManager() {
          this._finalizationRegistry = EDITOR && typeof FinalizationRegistry !== 'undefined' ? new FinalizationRegistry(this.finalizationRegistryCallback.bind(this)) : null;
          this._gcObjects = new WeakMap();
        }
        var _proto = GarbageCollectionManager.prototype;
        _proto.registerGCObject = function registerGCObject(gcObject) {
          if (EDITOR && this._finalizationRegistry) {
            var _token = {};
            var proxy = new Proxy(gcObject, {
              get: function get(target, property, receiver) {
                if (property === targetSymbol) {
                  return target;
                }
                var val = Reflect.get(target, property);
                if (typeof val === 'function' && property !== 'constructor') {
                  var original = val;
                  // NOTE: fix error - 'this' implicitly has type 'any' because it does not have a type annotation.
                  val = function newFunc() {
                    return original.apply(this[targetSymbol], arguments);
                  };
                }
                return val;
              },
              set: function set(target, prop, value, receiver) {
                target[prop] = value;
                return true;
              }
            });
            this._gcObjects.set(_token, gcObject);
            this._finalizationRegistry.register(proxy, _token, _token);
            return proxy;
          } else {
            return gcObject;
          }
        };
        _proto.init = function init() {};
        _proto.finalizationRegistryCallback = function finalizationRegistryCallback(token) {
          var gcObject = this._gcObjects.get(token);
          if (gcObject) {
            this._gcObjects["delete"](token);
            gcObject.destroy();
          }
          this._finalizationRegistry.unregister(token);
        };
        _proto.destroy = function destroy() {};
        return GarbageCollectionManager;
      }();
      /**
       * @engineInternal
       */
      _export("garbageCollectionManager", garbageCollectionManager = new GarbageCollectionManager());
    }
  };
});