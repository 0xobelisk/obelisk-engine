System.register("q-bundled:///fs/cocos/core/math/rect.js", ["../data/class.js", "../value-types/value-type.js", "./size.js", "./vec2.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var CCClass, ValueType, Size, Vec2, legacyCC, Rect;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2013-2016 Chukong Technologies Inc.
                                                                                                                                                                                                            Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            http://www.cocos.com
                                                                                                                                                                                                           
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
  function rect(x, y, width, height) {
    if (x === void 0) {
      x = 0;
    }
    if (y === void 0) {
      y = 0;
    }
    if (width === void 0) {
      width = 0;
    }
    if (height === void 0) {
      height = 0;
    }
    return new Rect(x, y, width, height);
  }
  _export("rect", rect);
  return {
    setters: [function (_dataClassJs) {
      CCClass = _dataClassJs.CCClass;
    }, function (_valueTypesValueTypeJs) {
      ValueType = _valueTypesValueTypeJs.ValueType;
    }, function (_sizeJs) {
      Size = _sizeJs.Size;
    }, function (_vec2Js) {
      Vec2 = _vec2Js.Vec2;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      /**
       * @en
       * A 2D rectangle defined by x, y position at the bottom-left corner and width, height.
       * All points inside the rectangle are greater than or equal to the minimum point and less than or equal to the maximum point.
       * The width is defined as xMax - xMin and the height is defined as yMax - yMin.
       * @zh
       * 该类表示一个二维矩形，由其左下角的 x、y 坐标以及宽度和高度组成。
       * 矩形内的所有点都大于等于矩形的最小点 (xMin, yMin) 并且小于等于矩形的最大点 (xMax, yMax)。
       * 矩形的宽度定义为 xMax - xMin；高度定义为 yMax - yMin。
       */
      _export("Rect", Rect = /*#__PURE__*/function (_ValueType) {
        _inheritsLoose(Rect, _ValueType);
        /**
         * @en Creates a rectangle from two coordinate values.
         * @zh 由任意两个点创建一个矩形，目标矩形即是这两个点各向 x、y 轴作线所得到的矩形。
         * @param v1 Specified point 1.
         * @param v2 Specified point 2.
         * @returns Target rectangle.
         */
        Rect.fromMinMax = function fromMinMax(out, v1, v2) {
          var minX = Math.min(v1.x, v2.x);
          var minY = Math.min(v1.y, v2.y);
          var maxX = Math.max(v1.x, v2.x);
          var maxY = Math.max(v1.y, v2.y);
          out.x = minX;
          out.y = minY;
          out.width = maxX - minX;
          out.height = maxY - minY;
          return out;
        }

        /**
         * @en Calculate the interpolation result between this rect and another one with given ratio
         * @zh 根据指定的插值比率，从当前矩形到目标矩形之间做插值。
         * @param out Output rect.
         * @param from Original rect.
         * @param to Target rect.
         * @param ratio The interpolation coefficient.The range is [0,1].
         */;
        Rect.lerp = function lerp(out, from, to, ratio) {
          var x = from.x;
          var y = from.y;
          var w = from.width;
          var h = from.height;
          out.x = x + (to.x - x) * ratio;
          out.y = y + (to.y - y) * ratio;
          out.width = w + (to.width - w) * ratio;
          out.height = h + (to.height - h) * ratio;
          return out;
        }

        /**
         * @en Returns the overlapping portion of 2 rectangles.
         * @zh 计算当前矩形与指定矩形重叠部分的矩形，将其赋值给输出矩形。
         * @param out Output Rect.
         * @param one One of the specify Rect.
         * @param other Another of the specify Rect.
         */;
        Rect.intersection = function intersection(out, one, other) {
          var axMin = one.x;
          var ayMin = one.y;
          var axMax = one.x + one.width;
          var ayMax = one.y + one.height;
          var bxMin = other.x;
          var byMin = other.y;
          var bxMax = other.x + other.width;
          var byMax = other.y + other.height;
          out.x = Math.max(axMin, bxMin);
          out.y = Math.max(ayMin, byMin);
          out.width = Math.min(axMax, bxMax) - out.x;
          out.height = Math.min(ayMax, byMax) - out.y;
          return out;
        }

        /**
         * @en Returns the smallest rectangle that contains the current rect and the given rect.
         * @zh 创建同时包含当前矩形和指定矩形的最小矩形，将其赋值给输出矩形。
         * @param out Output Rect.
         * @param one One of the specify Rect.
         * @param other Another of the specify Rect.
         */;
        Rect.union = function union(out, one, other) {
          var x = one.x;
          var y = one.y;
          var w = one.width;
          var h = one.height;
          var bx = other.x;
          var by = other.y;
          var bw = other.width;
          var bh = other.height;
          out.x = Math.min(x, bx);
          out.y = Math.min(y, by);
          out.width = Math.max(x + w, bx + bw) - out.x;
          out.height = Math.max(y + h, by + bh) - out.y;
          return out;
        }

        /**
         * @en Returns whether rect a is equal to rect b.
         * @zh 判断两个矩形是否相等。
         * @param a The first rect to be compared.
         * @param b The second rect to be compared.
         * @returns Returns `true' when the minimum and maximum values of both rectangles are equal, respectively; otherwise, returns `false'.
         */;
        Rect.equals = function equals(a, b) {
          return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
        }

        /**
         * @en The minimum x value.
         * @zh 获取或设置矩形在 x 轴上的最小值。
         */;

        function Rect(x, y, width, height) {
          var _this;
          _this = _ValueType.call(this) || this;
          if (typeof x === 'object') {
            _this.x = x.x;
            _this.y = x.y;
            _this.width = x.width;
            _this.height = x.height;
          } else {
            _this.x = x || 0;
            _this.y = y || 0;
            _this.width = width || 0;
            _this.height = height || 0;
          }
          return _this;
        }

        /**
         * @en clone the current Rect.
         * @zh 克隆当前矩形。
         */
        var _proto = Rect.prototype;
        _proto.clone = function clone() {
          return new Rect(this.x, this.y, this.width, this.height);
        }

        /**
         * @en Set values with another Rect.
         * @zh 设置当前矩形使其与指定矩形相等。
         * @param other Specified Rect.
         * @returns `this`
         */;
        _proto.set = function set(x, y, width, height) {
          if (typeof x === 'object') {
            this.x = x.x;
            this.y = x.y;
            this.width = x.width;
            this.height = x.height;
          } else {
            this.x = x || 0;
            this.y = y || 0;
            this.width = width || 0;
            this.height = height || 0;
          }
          return this;
        }

        /**
         * @en Check whether the current Rect equals another one.
         * @zh 判断当前矩形是否与指定矩形相等。
         * @param other Specified rectangles.
         * @returns Returns `true' when the minimum and maximum values of both rectangles are equal, respectively; otherwise, returns `false'.
         */;
        _proto.equals = function equals(other) {
          return this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
        }

        /**
         * @en Calculate the interpolation result between this Rect and another one with given ratio.
         * @zh 根据指定的插值比率，从当前矩形到目标矩形之间做插值。
         * @param to Target Rect.
         * @param ratio The interpolation coefficient.The range is [0,1].
         */;
        _proto.lerp = function lerp(to, ratio) {
          var x = this.x;
          var y = this.y;
          var w = this.width;
          var h = this.height;
          this.x = x + (to.x - x) * ratio;
          this.y = y + (to.y - y) * ratio;
          this.width = w + (to.width - w) * ratio;
          this.height = h + (to.height - h) * ratio;
          return this;
        }

        /**
         * @en Return the information of the current rect in string
         * @zh 返回当前矩形的字符串表示。
         * @returns The information of the current rect in string
         */;
        _proto.toString = function toString() {
          return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
        }

        /**
         * @en Check whether the current rectangle intersects with the given one.
         * @zh 判断当前矩形是否与指定矩形相交。
         * @param other Specified rectangles.
         * @returns If intersected, return `true', otherwise return `false'.
         */;
        _proto.intersects = function intersects(other) {
          var maxax = this.x + this.width;
          var maxay = this.y + this.height;
          var maxbx = other.x + other.width;
          var maxby = other.y + other.height;
          return !(maxax < other.x || maxbx < this.x || maxay < other.y || maxby < this.y);
        }

        /**
         * @en Check whether the current rect contains the given point.
         * @zh 判断当前矩形是否包含指定的点。
         * @param point Specified point.
         * @returns The specified point is included in the rectangle and returns `true', otherwise it returns `false'.
         */;
        _proto.contains = function contains(point) {
          return this.x <= point.x && this.x + this.width >= point.x && this.y <= point.y && this.y + this.height >= point.y;
        }

        /**
         * @en Returns true if the other rect entirely inside this rectangle.
         * @zh 判断当前矩形是否包含指定矩形。
         * @param other Specified rectangles.
         * @returns Returns `true' if all the points of the specified rectangle are included in the current rectangle, `false' otherwise.
         */;
        _proto.containsRect = function containsRect(other) {
          return this.x <= other.x && this.x + this.width >= other.x + other.width && this.y <= other.y && this.y + this.height >= other.y + other.height;
        }

        /**
         * @en Apply matrix4 to the rect.
         * @zh
         * 应用矩阵变换到当前矩形：
         * 应用矩阵变换到当前矩形的最小点得到新的最小点，
         * 将当前矩形的尺寸视为二维向量应用矩阵变换得到新的尺寸；
         * 并将如此构成的新矩形。
         * @param matrix The matrix4
         */;
        _proto.transformMat4 = function transformMat4(mat) {
          var ol = this.x;
          var ob = this.y;
          var or = ol + this.width;
          var ot = ob + this.height;
          var lbx = mat.m00 * ol + mat.m04 * ob + mat.m12;
          var lby = mat.m01 * ol + mat.m05 * ob + mat.m13;
          var rbx = mat.m00 * or + mat.m04 * ob + mat.m12;
          var rby = mat.m01 * or + mat.m05 * ob + mat.m13;
          var ltx = mat.m00 * ol + mat.m04 * ot + mat.m12;
          var lty = mat.m01 * ol + mat.m05 * ot + mat.m13;
          var rtx = mat.m00 * or + mat.m04 * ot + mat.m12;
          var rty = mat.m01 * or + mat.m05 * ot + mat.m13;
          var minX = Math.min(lbx, rbx, ltx, rtx);
          var maxX = Math.max(lbx, rbx, ltx, rtx);
          var minY = Math.min(lby, rby, lty, rty);
          var maxY = Math.max(lby, rby, lty, rty);
          this.x = minX;
          this.y = minY;
          this.width = maxX - minX;
          this.height = maxY - minY;
          return this;
        }

        /**
         * @en
         * Applies a matrix transformation to the current rectangle and outputs the result to the four vertices.
         * @zh
         * 应用矩阵变换到当前矩形，并将结果输出到四个顶点上。
         *
         * @param mat The mat4 to apply
         * @param out_lb The left bottom point
         * @param out_lt The left top point
         * @param out_rb The right bottom point
         * @param out_rt The right top point
         */;
        _proto.transformMat4ToPoints = function transformMat4ToPoints(mat, out_lb, out_lt, out_rt, out_rb) {
          var ol = this.x;
          var ob = this.y;
          var or = ol + this.width;
          var ot = ob + this.height;
          out_lb.x = mat.m00 * ol + mat.m04 * ob + mat.m12;
          out_lb.y = mat.m01 * ol + mat.m05 * ob + mat.m13;
          out_rb.x = mat.m00 * or + mat.m04 * ob + mat.m12;
          out_rb.y = mat.m01 * or + mat.m05 * ob + mat.m13;
          out_lt.x = mat.m00 * ol + mat.m04 * ot + mat.m12;
          out_lt.y = mat.m01 * ol + mat.m05 * ot + mat.m13;
          out_rt.x = mat.m00 * or + mat.m04 * ot + mat.m12;
          out_rt.y = mat.m01 * or + mat.m05 * ot + mat.m13;
        };
        _createClass(Rect, [{
          key: "xMin",
          get: function get() {
            return this.x;
          },
          set: function set(value) {
            this.width += this.x - value;
            this.x = value;
          }

          /**
           * @en The minimum y value.
           * @zh 获取或设置矩形在 y 轴上的最小值。
           */
        }, {
          key: "yMin",
          get: function get() {
            return this.y;
          },
          set: function set(value) {
            this.height += this.y - value;
            this.y = value;
          }

          /**
           * @en The maximum x value.
           * @zh 获取或设置矩形在 x 轴上的最大值。
           */
        }, {
          key: "xMax",
          get: function get() {
            return this.x + this.width;
          },
          set: function set(value) {
            this.width = value - this.x;
          }

          /**
           * @en The maximum y value.
           * @zh 获取或设置矩形在 y 轴上的最大值。
           */
        }, {
          key: "yMax",
          get: function get() {
            return this.y + this.height;
          },
          set: function set(value) {
            this.height = value - this.y;
          }

          /**
           * @en The position of the center of the rectangle.
           * @zh 获取或设置矩形中心点的坐标。
           */
        }, {
          key: "center",
          get: function get() {
            return new Vec2(this.x + this.width * 0.5, this.y + this.height * 0.5);
          },
          set: function set(value) {
            this.x = value.x - this.width * 0.5;
            this.y = value.y - this.height * 0.5;
          }

          /**
           * @en Returns a new [[Vec2]] object representing the position of the rectangle
           * @zh 获取或设置矩形的 x 和 y 坐标。
           */
        }, {
          key: "origin",
          get: function get() {
            return new Vec2(this.x, this.y);
          },
          set: function set(value) {
            this.x = value.x;
            this.y = value.y;
          }

          /**
           * @en Returns a new [[Size]] object represents the width and height of the rectangle
           * @zh 获取或设置矩形的尺寸。
           */
        }, {
          key: "size",
          get: function get() {
            return new Size(this.width, this.height);
          },
          set: function set(value) {
            this.width = value.width;
            this.height = value.height;
          }

          // compatibility with vector interfaces
        }, {
          key: "z",
          get: function get() {
            return this.width;
          },
          set: function set(val) {
            this.width = val;
          }
        }, {
          key: "w",
          get: function get() {
            return this.height;
          }

          /**
           * @en The minimum x value.
           * @zh 矩形最小点的 x 坐标。
           */

          /**
           * @en The minimum y value.
           * @zh 矩形最小点的 y 坐标。
           */

          /**
           * @en The width of the Rect.
           * @zh 矩形的宽度。
           */

          /**
           * @en The height of the Rect.
           * @zh 矩形的高度。
           */,
          set: function set(val) {
            this.height = val;
          }
        }]);
        return Rect;
      }(ValueType));
      CCClass.fastDefine('cc.Rect', Rect, {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      });
      legacyCC.Rect = Rect;

      /**
       * @en The convenient method to create a new Rect.
       * @zh 构造与指定矩形相等的矩形。等价于 `new Rect(rect)`。
       * @param rect Specified Rect.
       * @returns `new Rect(rect)`
       */

      /**
       * @en The convenient method to create a new Rect.
       * @zh 构造具有指定的最小值和尺寸的矩形，等价于`new Rect(x, y, width, height)`。
       * @param x The minimum X coordinate of the rectangle.
       * @param y The minimum Y coordinate of the rectangle.
       * @param width The width of the rectangle, measured from the X position.
       * @param height The height of the rectangle, measured from the Y position.
       * @returns `new Rect(x, y, width, height)`
       */

      legacyCC.rect = rect;
    }
  };
});