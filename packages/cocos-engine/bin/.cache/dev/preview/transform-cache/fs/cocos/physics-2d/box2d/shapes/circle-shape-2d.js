System.register("q-bundled:///fs/cocos/physics-2d/box2d/shapes/circle-shape-2d.js", ["@cocos/box2d", "./shape-2d.js", "../../framework/physics-types.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var b2, b2Shape2D, PHYSICS_2D_PTM_RATIO, Vec2, b2CircleShape;
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
    setters: [function (_cocosBox2d) {
      b2 = _cocosBox2d.default;
    }, function (_shape2dJs) {
      b2Shape2D = _shape2dJs.b2Shape2D;
    }, function (_frameworkPhysicsTypesJs) {
      PHYSICS_2D_PTM_RATIO = _frameworkPhysicsTypesJs.PHYSICS_2D_PTM_RATIO;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
    }],
    execute: function () {
      _export("b2CircleShape", b2CircleShape = /*#__PURE__*/function (_b2Shape2D) {
        _inheritsLoose(b2CircleShape, _b2Shape2D);
        function b2CircleShape() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _b2Shape2D.call.apply(_b2Shape2D, [this].concat(args)) || this;
          _this._worldPosition = new Vec2();
          return _this;
        }
        var _proto = b2CircleShape.prototype;
        _proto._createShapes = function _createShapes(scaleX, scaleY, relativePositionX, relativePositionY) {
          scaleX = Math.abs(scaleX);
          scaleY = Math.abs(scaleY);
          var comp = this.collider;
          var offsetX = (relativePositionX + comp.offset.x * scaleX) / PHYSICS_2D_PTM_RATIO;
          var offsetY = (relativePositionY + comp.offset.y * scaleY) / PHYSICS_2D_PTM_RATIO;
          var shape = new b2.CircleShape();
          shape.m_radius = comp.radius / PHYSICS_2D_PTM_RATIO * scaleX;
          shape.m_p.Set(offsetX, offsetY);
          return [shape];
        };
        _createClass(b2CircleShape, [{
          key: "worldRadius",
          get: function get() {
            return this._shapes[0].m_radius * PHYSICS_2D_PTM_RATIO;
          }
        }, {
          key: "worldPosition",
          get: function get() {
            var p = this._shapes[0].m_p;
            return this._worldPosition.set(p.x * PHYSICS_2D_PTM_RATIO, p.y * PHYSICS_2D_PTM_RATIO);
          }
        }]);
        return b2CircleShape;
      }(b2Shape2D));
    }
  };
});