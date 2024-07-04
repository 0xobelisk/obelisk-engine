System.register("q-bundled:///fs/cocos/physics-2d/builtin/shapes/shape-2d.js", ["../../../../exports/physics-2d-framework.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var PhysicsSystem2D, Rect, BuiltinShape2D;
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
    setters: [function (_exportsPhysics2dFrameworkJs) {
      PhysicsSystem2D = _exportsPhysics2dFrameworkJs.PhysicsSystem2D;
    }, function (_coreIndexJs) {
      Rect = _coreIndexJs.Rect;
    }],
    execute: function () {
      _export("BuiltinShape2D", BuiltinShape2D = /*#__PURE__*/function () {
        function BuiltinShape2D() {
          this._collider = null;
          this._worldAabb = new Rect();
          //contacts contain this Shape
          this._contacts = [];
        }
        var _proto = BuiltinShape2D.prototype;
        _proto.apply = function apply() {};
        _proto.initialize = function initialize(comp) {
          this._collider = comp;
        };
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          PhysicsSystem2D.instance.physicsWorld.addShape(this);
        };
        _proto.onDisable = function onDisable() {
          PhysicsSystem2D.instance.physicsWorld.removeShape(this);
        };
        _proto.start = function start() {};
        _proto.update = function update() {};
        _proto.containsPoint = function containsPoint(p) {
          if (!this.worldAABB.contains(p)) {
            return false;
          }
          return true;
        };
        _proto.intersectsRect = function intersectsRect(rect) {
          if (!this.worldAABB.intersects(rect)) {
            return false;
          }
          return true;
        };
        _proto.onGroupChanged = function onGroupChanged() {
          PhysicsSystem2D.instance.physicsWorld.updateShapeGroup(this);
        };
        _createClass(BuiltinShape2D, [{
          key: "impl",
          get: function get() {
            return null;
          }
        }, {
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }, {
          key: "worldAABB",
          get: function get() {
            return this._worldAabb;
          }
        }]);
        return BuiltinShape2D;
      }());
    }
  };
});