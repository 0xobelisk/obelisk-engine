System.register("q-bundled:///fs/cocos/core/geometry/triangle.js", ["../math/index.js", "./enums.js"], function (_export, _context) {
  "use strict";

  var Vec3, enums, Triangle;
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
    setters: [function (_mathIndexJs) {
      Vec3 = _mathIndexJs.Vec3;
    }, function (_enumsJs) {
      enums = _enumsJs.default;
    }],
    execute: function () {
      /**
       * @en
       * Basic Geometry: Triangle.
       * @zh
       * 基础几何：三角形。
       */
      _export("Triangle", Triangle = /*#__PURE__*/function () {
        /**
         * @en
         * Creates a new triangle instance.
         * @zh
         * 创建一个新的三角形。
         * @param {number} ax @en The x component of point a @zh a 点的 x 部分。
         * @param {number} ay @en The y component of point a @zh a 点的 y 部分。
         * @param {number} az @en The z component of point a @zh a 点的 z 部分。
         * @param {number} bx @en The x component of point b @zh b 点的 x 部分。
         * @param {number} by @en The y component of point b @zh b 点的 y 部分。
         * @param {number} bz @en The z component of point b @zh b 点的 z 部分。
         * @param {number} cx @en The x component of point c @zh c 点的 x 部分。
         * @param {number} cy @en The y component of point c @zh c 点的 y 部分。
         * @param {number} cz @en The z component of point c @zh c 点的 z 部分。
         * @returns {Triangle} @en The created Triangle instance. @zh 创建出的三角形实例。
         */
        Triangle.create = function create(ax, ay, az, bx, by, bz, cx, cy, cz) {
          if (ax === void 0) {
            ax = 1;
          }
          if (ay === void 0) {
            ay = 0;
          }
          if (az === void 0) {
            az = 0;
          }
          if (bx === void 0) {
            bx = 0;
          }
          if (by === void 0) {
            by = 0;
          }
          if (bz === void 0) {
            bz = 0;
          }
          if (cx === void 0) {
            cx = 0;
          }
          if (cy === void 0) {
            cy = 0;
          }
          if (cz === void 0) {
            cz = 1;
          }
          return new Triangle(ax, ay, az, bx, by, bz, cx, cy, cz);
        }

        /**
         * @en
         * Clones a triangle instance.
         * @zh
         * 克隆一个新的三角形。
         * @param t @en The Triangle object to be cloned from. @zh 克隆的目标。
         * @returns @en The cloned triangle instance. @zh 克隆出的新对象。
         */;
        Triangle.clone = function clone(t) {
          return new Triangle(t.a.x, t.a.y, t.a.z, t.b.x, t.b.y, t.b.z, t.c.x, t.c.y, t.c.z);
        }

        /**
         * @en
         * Copies the values from one triangle to another.
         * @zh
         * 复制一个三角形的值到另一个三角形中。
         * @param out @en The target Triangle object to be copied to. @zh 接受操作的三角形。
         * @param t @en A Triangle object to be copied from. @zh 被复制的三角形。
         * @returns @en The target Triangle object to be copied to, same as the `out` parameter. @zh 接受操作的三角形，与 `out` 参数相同。
         */;
        Triangle.copy = function copy(out, t) {
          Vec3.copy(out.a, t.a);
          Vec3.copy(out.b, t.b);
          Vec3.copy(out.c, t.c);
          return out;
        }

        /**
         * @en
         * Creates a triangle instance from three points.
         * @zh
         * 用三个点创建一个三角形。
         * @param out @en The Triangle object to be modified. @zh 接受操作的三角形。
         * @param a @en The point value to set out.a. @zh a 点。
         * @param b @en The point value to set out.b. @zh b 点。
         * @param c @en The point value to set out.c. @zh c 点。
         * @returns @en The Triangle object to be modified， same as the `out` parameter. @zh 接受操作的三角形，与 `out` 参数相同。
         */;
        Triangle.fromPoints = function fromPoints(out, a, b, c) {
          Vec3.copy(out.a, a);
          Vec3.copy(out.b, b);
          Vec3.copy(out.c, c);
          return out;
        }

        /**
         * @en
         * Sets the components of a triangle to the given values.
         * @zh
         * 将给定三角形的属性设置为给定值。
         * @param out @en The Triangle object to be set. @zh 接受操作的三角形。
         * @param ax @en The value to set out.a.x. @zh a 点的 x 部分。
         * @param ay @en The value to set out.a.y. @zh a 点的 y 部分。
         * @param az @en The value to set out.a.z. @zh a 点的 z 部分。
         * @param bx @en The value to set out.b.x. @zh b 点的 x 部分。
         * @param by @en The value to set out.b.y. @zh b 点的 y 部分。
         * @param bz @en The value to set out.b.z. @zh b 点的 z 部分。
         * @param cx @en The value to set out.c.x. @zh c 点的 x 部分。
         * @param cy @en The value to set out.c.y. @zh c 点的 y 部分。
         * @param cz @en The value to set out.c.z. @zh c 点的 z 部分。
         * @returns @en The Triangle object to be set, same as the `out` parameter. @zh 接受操作的三角形，与 `out` 参数相同。
         */;
        Triangle.set = function set(out, ax, ay, az, bx, by, bz, cx, cy, cz) {
          out.a.x = ax;
          out.a.y = ay;
          out.a.z = az;
          out.b.x = bx;
          out.b.y = by;
          out.b.z = bz;
          out.c.x = cx;
          out.c.y = cy;
          out.c.z = cz;
          return out;
        }

        /**
         * @en
         * Point a.
         * @zh
         * 点 a。
         */;

        /**
         * @en
         * Constructs a triangle.
         * @zh
         * 构造一个三角形。
         * @param {number} ax @en x component of point a. @zh a 点的 x 部分。
         * @param {number} ay @en y component of point a. @zh a 点的 y 部分。
         * @param {number} az @en z component of point a. @zh a 点的 z 部分。
         * @param {number} bx @en x component of point b. @zh b 点的 x 部分。
         * @param {number} by @en y component of point b. @zh b 点的 y 部分。
         * @param {number} bz @en z component of point b. @zh b 点的 z 部分。
         * @param {number} cx @en x component of point c. @zh c 点的 x 部分。
         * @param {number} cy @en y component of point c. @zh c 点的 y 部分。
         * @param {number} cz @en z component of point c. @zh c 点的 z 部分。
         */
        function Triangle(ax, ay, az, bx, by, bz, cx, cy, cz) {
          if (ax === void 0) {
            ax = 0;
          }
          if (ay === void 0) {
            ay = 0;
          }
          if (az === void 0) {
            az = 0;
          }
          if (bx === void 0) {
            bx = 1;
          }
          if (by === void 0) {
            by = 0;
          }
          if (bz === void 0) {
            bz = 0;
          }
          if (cx === void 0) {
            cx = 0;
          }
          if (cy === void 0) {
            cy = 1;
          }
          if (cz === void 0) {
            cz = 0;
          }
          this.a = void 0;
          /**
           * @en
           * Point b.
           * @zh
           * 点 b。
           */
          this.b = void 0;
          /**
           * @en
           * Point c.
           * @zh
           * 点 c。
           */
          this.c = void 0;
          this._type = void 0;
          this._type = enums.SHAPE_TRIANGLE;
          this.a = new Vec3(ax, ay, az);
          this.b = new Vec3(bx, by, bz);
          this.c = new Vec3(cx, cy, cz);
        }
        _createClass(Triangle, [{
          key: "type",
          get:
          /**
           * @en
           * Gets the type of the triangle, always returns `enums.SHAPE_TRIANGLE`.
           * @zh
           * 获取此三角形的类型，固定返回 `enums.SHAPE_TRIANGLE`。
           */
          function get() {
            return this._type;
          }
        }]);
        return Triangle;
      }());
    }
  };
});