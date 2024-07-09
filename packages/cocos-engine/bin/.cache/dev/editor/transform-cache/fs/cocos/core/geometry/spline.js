System.register("q-bundled:///fs/cocos/core/geometry/spline.js", ["../data/utils/asserts.js", "../math/index.js", "../platform/debug.js", "./enums.js"], function (_export, _context) {
  "use strict";

  var assertIsTrue, clamp, Vec3, warnID, enums, Spline, SplineMode, SPLINE_WHOLE_INDEX, _v0, _v1, _v2, _v3;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  _export({
    Spline: void 0,
    SplineMode: void 0
  });
  return {
    setters: [function (_dataUtilsAssertsJs) {
      assertIsTrue = _dataUtilsAssertsJs.assertIsTrue;
    }, function (_mathIndexJs) {
      clamp = _mathIndexJs.clamp;
      Vec3 = _mathIndexJs.Vec3;
    }, function (_platformDebugJs) {
      warnID = _platformDebugJs.warnID;
    }, function (_enumsJs) {
      enums = _enumsJs.default;
    }],
    execute: function () {
      (function (SplineMode) {
        SplineMode[SplineMode["LINEAR"] = 0] = "LINEAR";
        SplineMode[SplineMode["BEZIER"] = 1] = "BEZIER";
        SplineMode[SplineMode["CATMULL_ROM"] = 2] = "CATMULL_ROM";
      })(SplineMode || _export("SplineMode", SplineMode = {}));
      SPLINE_WHOLE_INDEX = 0xffffffff;
      _v0 = new Vec3();
      _v1 = new Vec3();
      _v2 = new Vec3();
      _v3 = new Vec3();
      /**
       * @en
       * Basic Geometry: Spline.
       * @zh
       * 基础几何：Spline。
       */
      _export("Spline", Spline = class Spline {
        constructor(mode = SplineMode.CATMULL_ROM, knots = []) {
          this._type = void 0;
          this._mode = SplineMode.CATMULL_ROM;
          this._knots = [];
          this._type = enums.SHAPE_SPLINE;
          this._mode = mode;
          for (let i = 0; i < knots.length; i++) {
            this._knots[i] = new Vec3(knots[i]);
          }
        }

        /**
         * @en
         * Creates a spline instance.
         * @zh
         * 创建一个 Spline 实例。
         * @param mode @en The mode to create the Spline instance. @zh 用于创建 Spline 实例的模式。
         * @param knots @en The knots to create the Spline instance. @zh 用于创建 Spline 实例的结点列表。
         * @returns @en The created Spline instance. @zh 创建出的 Spline 实例。
         */
        static create(mode, knots = []) {
          return new Spline(mode, knots);
        }

        /**
         * @en
         * Clones a Spline instance.
         * @zh
         * 克隆一个 Spline 实例。
         * @param s @en The Spline instance to be cloned. @zh 用于克隆的 Spline 实例。
         * @returns @en The cloned Spline instance. @zh 克隆出的 Spline 实例。
         */
        static clone(s) {
          return new Spline(s.mode, s.knots);
        }

        /**
         * @en
         * Copies the values of a Spline instance to another.
         * @zh
         * 拷贝一个 Spline 实例的值到另一个中。
         * @param out @en The target Spline instance to copy to. @zh 拷贝目标 Spline 实例。
         * @param s @en The source Spline instance to copy from. @zh 拷贝源 Spline 实例。
         * @returns @en The target Spline instance to copy to, same as the `out` parameter. @zh 拷贝目标 Spline 实例，值与 `out` 参数相同。
         */
        static copy(out, s) {
          out._mode = s.mode;
          out._knots.length = 0;
          const knots = s.knots;
          const length = knots.length;
          for (let i = 0; i < length; i++) {
            out._knots[i] = new Vec3(knots[i]);
          }
          return out;
        }

        /**
         * @en
         * Gets the type of this Spline instance, always returns `enums.SHAPE_SPLINE`.
         * @zh
         * 获取此 Spline 的类型，固定返回 `enums.SHAPE_SPLINE`
         */
        get type() {
          return this._type;
        }

        /**
         * @en
         * Gets the mode of this Spline instance.
         * @zh
         * 获取当前 Spline 实例的模式。
         */
        get mode() {
          return this._mode;
        }

        /**
         * @en
         * Gets all knots of this Spline instance.
         * @zh
         * 获取当前 Spline 实例的所有结点。
         */
        get knots() {
          return this._knots;
        }

        /**
         * @en
         * Sets the mode and knots to this Spline instance.
         * @zh
         * 给当前 Spline 实例设置模式和结点。
         * @param mode @en The mode to be set to this Spline instance. @zh 要设置到当前 Spline 实例的模式。
         * @param knots @en The knots to be set to this spline instance. @zh 要设置到当前 Spline 实例的结点列表。
         */
        setModeAndKnots(mode, knots) {
          this._mode = mode;
          this._knots.length = 0;
          for (let i = 0; i < knots.length; i++) {
            this._knots[i] = new Vec3(knots[i]);
          }
        }

        /**
         * @en
         * Clears all knots of this Spline instance.
         * @zh
         * 清空当前 Spline 实例的所有结点。
         */
        clearKnots() {
          this._knots.length = 0;
        }

        /**
         * @en
         * Gets the knot count of this Spline instance.
         * @zh
         * 获取当前 Spline 实例的结点数量。
         * @returns @en The knot count of this Spline instance. @zh 当前 Spline 实例的结点数量。
         */
        getKnotCount() {
          return this._knots.length;
        }

        /**
         * @en
         * Adds a knot to this Spline instance.
         * @zh
         * 给当前 Spline 实例添加一个结点。
         * @param knot @en The knot to add to this Spline instance. @zh 要添加到当前 Spline 实例的结点。
         */
        addKnot(knot) {
          this._knots.push(new Vec3(knot));
        }

        /**
         * @en
         * Inserts a knot to the specified position of this Spline instance.
         * @zh
         * 插入一个结点到当前 Spline 实例的指定位置。
         * @param index @en The position of this Spline instance to be inserted. @zh 要插入到此 Spline 实例的位置。
         * @param knot @en The knot to be inserted. @zh 要插入的结点。
         */
        insertKnot(index, knot) {
          const item = new Vec3(knot);
          if (index >= this._knots.length) {
            this._knots.push(item);
            return;
          }
          this._knots.splice(index, 0, item);
        }

        /**
         * @en
         * Removes a knot at the specified position of this Spline instance.
         * @zh
         * 移除当前 Spline 实例的指定位置的一个结点。
         * @param index
         */
        removeKnot(index) {
          assertIsTrue(index >= 0 && index < this._knots.length, 'Spline: invalid index');
          this._knots.splice(index, 1);
        }

        /**
         * @en
         * Sets a knot to the specified position of this Spline instance.
         * @zh
         * 为当前 Spline 实例的指定位置设置结点信息。
         * @param index @en The specified position of this Spline instance. @zh 要设置结点的指定位置。
         * @param knot @en The knot to be set to the specified position. @zh 要设置的结点。
         */
        setKnot(index, knot) {
          assertIsTrue(index >= 0 && index < this._knots.length, 'Spline: invalid index');
          this._knots[index].set(knot);
        }

        /**
         * @en
         * Gets the knot of the specified position of this Spline instance.
         * @zh
         * 获取当前 Spline 实例指定位置的结点。
         * @param index @en The specified position of this Spline instance. @zh 要设置结点的指定位置。
         * @returns @en The knot of the specified position of this Spline instance. @zh 当前 Spline 实例指定位置的结点。
         */
        getKnot(index) {
          assertIsTrue(index >= 0 && index < this._knots.length, 'Spline: invalid index');
          return this._knots[index];
        }

        /**
         * @en
         * Gets a point at t with repect to the `index` segment of curve or the whole curve.
         * @zh
         * 获取 t 处相对于某段或整条曲线的点。
         * @param t @en The factor with a range of [0.0, 1.0]. @zh 0.0 到 1.0 的因子。
         * @param index @en The knot index of this Spline instance, default value is the whole curve. @zh 当前 Spline 实例的某个结点索引，默认值为整条曲线。
         * @returns @en The point matches the input `t` factor and `index`. @zh 满足输入 `t` 参数和 `index` 参数的点。
         */
        getPoint(t, index = SPLINE_WHOLE_INDEX) {
          t = clamp(t, 0.0, 1.0);
          const segments = this.getSegments();
          if (segments === 0) {
            return new Vec3(0.0, 0.0, 0.0);
          }
          if (index === SPLINE_WHOLE_INDEX) {
            const deltaT = 1.0 / segments;
            index = Math.floor(t / deltaT);
            t = t % deltaT / deltaT;
          }
          if (index >= segments) {
            return new Vec3(this._knots[this._knots.length - 1]);
          }
          switch (this._mode) {
            case SplineMode.LINEAR:
              return Spline.calcLinear(this._knots[index], this._knots[index + 1], t);
            case SplineMode.BEZIER:
              return Spline.calcBezier(this._knots[index * 4], this._knots[index * 4 + 1], this._knots[index * 4 + 2], this._knots[index * 4 + 3], t);
            case SplineMode.CATMULL_ROM:
              {
                const v0 = index > 0 ? this._knots[index - 1] : this._knots[index];
                const v3 = index + 2 < this._knots.length ? this._knots[index + 2] : this._knots[index + 1];
                return Spline.calcCatmullRom(v0, this._knots[index], this._knots[index + 1], v3, t);
              }
            default:
              return new Vec3(0.0, 0.0, 0.0);
          }
        }

        /**
         * @en
         * Gets points from 0 to 1 uniformly with repect to the `index` segment of curve or the whole curve.
         * @zh
         * 获取相对与某段或整条曲线上的 n 个数量的点信息。
         * @param num @en The count of points needed. @zh 需要的点的数量。
         * @param index @en The knot index of this Spline instance, default value is the whole curve. @zh 当前 Spline 实例的某个结点索引，默认值为整条曲线。
         * @returns @en The points with `num` size at the `index` segment or the whole curve. @zh 曲线某段或者整条曲线上的 `num` 个点。
         */
        getPoints(num, index = SPLINE_WHOLE_INDEX) {
          if (num === 0) {
            return [];
          }
          if (num === 1) {
            const point = this.getPoint(0.0, index);
            return [point];
          }
          const points = [];
          const deltaT = 1.0 / (num - 1.0);
          for (let i = 0; i < num; i++) {
            const t = i * deltaT;
            const point = this.getPoint(t, index);
            points.push(point);
          }
          return points;
        }
        getSegments() {
          const count = this._knots.length;
          switch (this._mode) {
            case SplineMode.LINEAR:
            case SplineMode.CATMULL_ROM:
              if (count < 2) {
                warnID(14300);
                return 0;
              }
              return count - 1;
            case SplineMode.BEZIER:
              if (count < 4 || count % 4 != 0) {
                warnID(14301);
                return 0;
              }
              return count / 4;
            default:
              assertIsTrue(false, 'Spline error: invalid mode');
          }
        }
        static calcLinear(v0, v1, t) {
          const result = new Vec3();
          Vec3.multiplyScalar(_v0, v0, 1.0 - t);
          Vec3.multiplyScalar(_v1, v1, t);
          Vec3.add(result, _v0, _v1);
          return result;
        }
        static calcBezier(v0, v1, v2, v3, t) {
          const result = new Vec3();
          const s = 1.0 - t;
          Vec3.multiplyScalar(_v0, v0, s * s * s);
          Vec3.multiplyScalar(_v1, v1, 3.0 * t * s * s);
          Vec3.multiplyScalar(_v2, v2, 3.0 * t * t * s);
          Vec3.multiplyScalar(_v3, v3, t * t * t);
          Vec3.add(_v0, _v0, _v1);
          Vec3.add(_v2, _v2, _v3);
          Vec3.add(result, _v0, _v2);
          return result;
        }
        static calcCatmullRom(v0, v1, v2, v3, t) {
          const result = new Vec3();
          const t2 = t * t;
          const t3 = t2 * t;
          Vec3.multiplyScalar(_v0, v0, -0.5 * t3 + t2 - 0.5 * t);
          Vec3.multiplyScalar(_v1, v1, 1.5 * t3 - 2.5 * t2 + 1.0);
          Vec3.multiplyScalar(_v2, v2, -1.5 * t3 + 2.0 * t2 + 0.5 * t);
          Vec3.multiplyScalar(_v3, v3, 0.5 * t3 - 0.5 * t2);
          Vec3.add(_v0, _v0, _v1);
          Vec3.add(_v2, _v2, _v3);
          Vec3.add(result, _v0, _v2);
          return result;
        }
      });
    }
  };
});