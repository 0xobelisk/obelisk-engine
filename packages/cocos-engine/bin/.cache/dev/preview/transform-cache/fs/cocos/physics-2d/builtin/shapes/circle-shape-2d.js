System.register("q-bundled:///fs/cocos/physics-2d/builtin/shapes/circle-shape-2d.js", ["./shape-2d.js", "../../../core/index.js", "../intersection-2d.js"], function (_export, _context) {
  "use strict";

  var BuiltinShape2D, Vec2, Mat4, Intersection2D, tempVec2, tempMat4, BuiltinCircleShape;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
    setters: [function (_shape2dJs) {
      BuiltinShape2D = _shape2dJs.BuiltinShape2D;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      Mat4 = _coreIndexJs.Mat4;
    }, function (_intersection2dJs) {
      Intersection2D = _intersection2dJs.default;
    }],
    execute: function () {
      tempVec2 = new Vec2();
      tempMat4 = new Mat4();
      _export("BuiltinCircleShape", BuiltinCircleShape = /*#__PURE__*/function (_BuiltinShape2D) {
        _inheritsLoose(BuiltinCircleShape, _BuiltinShape2D);
        function BuiltinCircleShape() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BuiltinShape2D.call.apply(_BuiltinShape2D, [this].concat(args)) || this;
          _this._worldPosition = new Vec2();
          _this._worldRadius = 0;
          return _this;
        }
        var _proto = BuiltinCircleShape.prototype;
        _proto.update = function update() {
          var aabb = this._worldAabb;
          var collider = this.collider;
          var worldMatrix = collider.node.getWorldMatrix(tempMat4);

          // calculate world position
          Vec2.transformMat4(tempVec2, collider.offset, worldMatrix);
          var worldPos = this._worldPosition;
          worldPos.x = tempVec2.x;
          worldPos.y = tempVec2.y;

          // calculate world radius
          worldMatrix.m12 = worldMatrix.m13 = 0;
          tempVec2.x = collider.radius;
          tempVec2.y = 0;
          Vec2.transformMat4(tempVec2, tempVec2, worldMatrix);
          var d = this._worldRadius = tempVec2.length();
          aabb.x = worldPos.x - d;
          aabb.y = worldPos.y - d;
          aabb.width = d * 2;
          aabb.height = d * 2;
        };
        _proto.containsPoint = function containsPoint(p) {
          if (!this.worldAABB.contains(p)) {
            return false;
          }
          var dist = Vec2.subtract(tempVec2, p, this.worldPosition).length();
          return dist < this.worldRadius;
        };
        _proto.intersectsRect = function intersectsRect(rect) {
          if (!this.worldAABB.intersects(rect)) {
            return false;
          }
          return Intersection2D.rectCircle(rect, this.worldPosition, this.worldRadius);
        };
        _createClass(BuiltinCircleShape, [{
          key: "worldPosition",
          get: function get() {
            return this._worldPosition;
          }
        }, {
          key: "worldRadius",
          get: function get() {
            return this._worldRadius;
          }
        }]);
        return BuiltinCircleShape;
      }(BuiltinShape2D));
    }
  };
});