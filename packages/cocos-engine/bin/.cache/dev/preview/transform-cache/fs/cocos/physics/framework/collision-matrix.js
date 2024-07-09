System.register("q-bundled:///fs/cocos/physics/framework/collision-matrix.js", ["./physics-enum.js"], function (_export, _context) {
  "use strict";

  var PhysicsGroup, CollisionMatrix;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  return {
    setters: [function (_physicsEnumJs) {
      PhysicsGroup = _physicsEnumJs.PhysicsGroup;
    }],
    execute: function () {
      _export("CollisionMatrix", CollisionMatrix = function CollisionMatrix(strategy) {
        if (strategy === 1) {
          var self = this;
          var _loop = function _loop(i) {
            var key = "_" + (1 << i);
            self[key] = 0;
            self.updateArray = [];
            Object.defineProperty(self, 1 << i, {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              get: function get() {
                return this[key];
              },
              set: function set(v) {
                if (this[key] !== v) {
                  this[key] = v;
                  if (this.updateArray.indexOf(i) < 0) {
                    this.updateArray.push(i);
                  }
                }
              }
            });
          };
          for (var i = 0; i < 32; i++) {
            _loop(i);
          }
          // eslint-disable-next-line dot-notation
          this['_1'] = PhysicsGroup.DEFAULT;
        } else {
          for (var _i = 0; _i < 32; _i++) {
            var key = 1 << _i;
            this["" + key] = 0;
          }
          this['1'] = PhysicsGroup.DEFAULT;
        }
      });
    }
  };
});