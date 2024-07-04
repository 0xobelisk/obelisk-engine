System.register("q-bundled:///fs/cocos/physics-2d/box2d/platform/physics-debug-draw.js", ["@cocos/box2d", "../../../core/index.js", "../../framework/index.js"], function (_export, _context) {
  "use strict";

  var b2, Color, PHYSICS_2D_PTM_RATIO, _tmp_vec2, _tmp_color, GREEN_COLOR, RED_COLOR, PhysicsDebugDraw;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
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
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
    }, function (_frameworkIndexJs) {
      PHYSICS_2D_PTM_RATIO = _frameworkIndexJs.PHYSICS_2D_PTM_RATIO;
    }],
    execute: function () {
      _tmp_vec2 = new b2.Vec2();
      _tmp_color = new Color();
      GREEN_COLOR = Color.GREEN;
      RED_COLOR = Color.RED;
      _export("PhysicsDebugDraw", PhysicsDebugDraw = /*#__PURE__*/function (_b2$Draw) {
        _inheritsLoose(PhysicsDebugDraw, _b2$Draw);
        function PhysicsDebugDraw(drawer) {
          var _this;
          _this = _b2$Draw.call(this) || this;
          _this._drawer = null;
          _this._xf = new b2.Transform();
          _this._dxf = new b2.Transform();
          _this._drawer = drawer;
          return _this;
        }
        var _proto = PhysicsDebugDraw.prototype;
        _proto._DrawPolygon = function _DrawPolygon(vertices, vertexCount) {
          var drawer = this._drawer;
          for (var i = 0; i < vertexCount; i++) {
            b2.Transform.MulXV(this._xf, vertices[i], _tmp_vec2);
            var x = _tmp_vec2.x * PHYSICS_2D_PTM_RATIO;
            var y = _tmp_vec2.y * PHYSICS_2D_PTM_RATIO;
            if (i === 0) drawer.moveTo(x, y);else {
              drawer.lineTo(x, y);
            }
          }
          drawer.close();
        };
        _proto.DrawPolygon = function DrawPolygon(vertices, vertexCount, color) {
          this._applyStrokeColor(color);
          this._DrawPolygon(vertices, vertexCount);
          this._drawer.stroke();
        };
        _proto.DrawSolidPolygon = function DrawSolidPolygon(vertices, vertexCount, color) {
          this._applyFillColor(color);
          this._DrawPolygon(vertices, vertexCount);
          this._drawer.fill();
          this._drawer.stroke();
        };
        _proto._DrawCircle = function _DrawCircle(center, radius) {
          b2.Transform.MulXV(this._xf, center, _tmp_vec2);
          //scale?
          this._drawer.circle(_tmp_vec2.x * PHYSICS_2D_PTM_RATIO, _tmp_vec2.y * PHYSICS_2D_PTM_RATIO, radius * PHYSICS_2D_PTM_RATIO);
        };
        _proto.DrawCircle = function DrawCircle(center, radius, color) {
          this._applyStrokeColor(color);
          this._DrawCircle(center, radius);
          this._drawer.stroke();
        };
        _proto.DrawSolidCircle = function DrawSolidCircle(center, radius, axis, color) {
          this._applyFillColor(color);
          this._DrawCircle(center, radius);
          this._drawer.fill();
        };
        _proto.DrawSegment = function DrawSegment(p1, p2, color) {
          var drawer = this._drawer;
          if (p1.x === p2.x && p1.y === p2.y) {
            this._applyFillColor(color);
            this._DrawCircle(p1, 2 / PHYSICS_2D_PTM_RATIO);
            drawer.fill();
            return;
          }
          this._applyStrokeColor(color);
          b2.Transform.MulXV(this._xf, p1, _tmp_vec2);
          drawer.moveTo(_tmp_vec2.x * PHYSICS_2D_PTM_RATIO, _tmp_vec2.y * PHYSICS_2D_PTM_RATIO);
          b2.Transform.MulXV(this._xf, p2, _tmp_vec2);
          drawer.lineTo(_tmp_vec2.x * PHYSICS_2D_PTM_RATIO, _tmp_vec2.y * PHYSICS_2D_PTM_RATIO);
          drawer.stroke();
        };
        _proto.DrawTransform = function DrawTransform(xf) {
          var drawer = this._drawer;
          drawer.strokeColor = RED_COLOR;
          _tmp_vec2.x = _tmp_vec2.y = 0;
          b2.Transform.MulXV(xf, _tmp_vec2, _tmp_vec2);
          drawer.moveTo(_tmp_vec2.x * PHYSICS_2D_PTM_RATIO, _tmp_vec2.y * PHYSICS_2D_PTM_RATIO);
          _tmp_vec2.x = 1;
          _tmp_vec2.y = 0;
          b2.Transform.MulXV(xf, _tmp_vec2, _tmp_vec2);
          drawer.lineTo(_tmp_vec2.x * PHYSICS_2D_PTM_RATIO, _tmp_vec2.y * PHYSICS_2D_PTM_RATIO);
          drawer.stroke();
          drawer.strokeColor = GREEN_COLOR;
          _tmp_vec2.x = _tmp_vec2.y = 0;
          b2.Transform.MulXV(xf, _tmp_vec2, _tmp_vec2);
          drawer.moveTo(_tmp_vec2.x * PHYSICS_2D_PTM_RATIO, _tmp_vec2.y * PHYSICS_2D_PTM_RATIO);
          _tmp_vec2.x = 0;
          _tmp_vec2.y = 1;
          b2.Transform.MulXV(xf, _tmp_vec2, _tmp_vec2);
          drawer.lineTo(_tmp_vec2.x * PHYSICS_2D_PTM_RATIO, _tmp_vec2.y * PHYSICS_2D_PTM_RATIO);
          drawer.stroke();
        };
        _proto.DrawPoint = function DrawPoint(center, radius, color) {
          //empty
        };
        _proto.DrawParticles = function DrawParticles() {
          //empty
        };
        _proto._applyStrokeColor = function _applyStrokeColor(color) {
          this._drawer.strokeColor = _tmp_color.set(color.r * 255, color.g * 255, color.b * 255, 150);
        };
        _proto._applyFillColor = function _applyFillColor(color) {
          this._drawer.fillColor = _tmp_color.set(color.r * 255, color.g * 255, color.b * 255, 150);
        };
        _proto.PushTransform = function PushTransform(xf) {
          this._xf = xf;
        };
        _proto.PopTransform = function PopTransform() {
          this._xf = this._dxf;
        };
        return PhysicsDebugDraw;
      }(b2.Draw));
    }
  };
});