System.register("q-bundled:///fs/cocos/render-scene/scene/octree.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, Octree;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }],
    execute: function () {
      /**
       * @en The octree culling configuration of the render scene
       * @zh 渲染场景的八叉树剔除配置
       */
      _export("Octree", Octree = /*#__PURE__*/function () {
        function Octree() {
          this._enabled = false;
          this._minPos = new Vec3(0, 0, 0);
          this._maxPos = new Vec3(0, 0, 0);
          this._depth = 0;
        }
        var _proto = Octree.prototype;
        _proto.initialize = function initialize(octreeInfo) {
          this._enabled = octreeInfo.enabled;
          this._minPos = octreeInfo.minPos;
          this._maxPos = octreeInfo.maxPos;
          this._depth = octreeInfo.depth;
        };
        _createClass(Octree, [{
          key: "enabled",
          get: function get() {
            return this._enabled;
          }

          /**
           * @en Minimum position of the scene's bounding box
           * @zh 场景包围盒最小值
           */,
          set:
          /**
           * @en Whether octree culling is enabled in the render scene
           * @zh 是否开启八叉树加速剔除
           */
          function set(val) {
            this._enabled = val;
          }
        }, {
          key: "minPos",
          get: function get() {
            return this._minPos;
          },
          set: function set(val) {
            this._minPos = val;
          }

          /**
           * @en Maximum position of the scene's bounding box
           * @zh 场景包围盒最大值
           */
        }, {
          key: "maxPos",
          get: function get() {
            return this._maxPos;
          },
          set: function set(val) {
            this._maxPos = val;
          }

          /**
           * @en The depth of the octree
           * @zh 八叉树深度
           */
        }, {
          key: "depth",
          get: function get() {
            return this._depth;
          },
          set: function set(val) {
            this._depth = val;
          }
        }]);
        return Octree;
      }());
    }
  };
});