System.register("q-bundled:///fs/cocos/core/math/vec4.js", ["../data/class.js", "../value-types/value-type.js", "./utils.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var CCClass, ValueType, clamp, EPSILON, _random, legacyCC, _class, Vec4;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function v4(x, y, z, w) {
    return new Vec4(x, y, z, w);
  }
  _export("v4", v4);
  return {
    setters: [function (_dataClassJs) {
      CCClass = _dataClassJs.CCClass;
    }, function (_valueTypesValueTypeJs) {
      ValueType = _valueTypesValueTypeJs.ValueType;
    }, function (_utilsJs) {
      clamp = _utilsJs.clamp;
      EPSILON = _utilsJs.EPSILON;
      _random = _utilsJs.random;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      /**
       * @en Representation of four-dimensional vectors.
       * @zh 四维向量。
       */
      _export("Vec4", Vec4 = /*#__PURE__*/function (_ValueType) {
        _inheritsLoose(Vec4, _ValueType);
        /**
         * @en Obtains a clone of the given vector object
         * @zh 获得指定向量的拷贝
         */
        Vec4.clone = function clone(a) {
          return new Vec4(a.x, a.y, a.z, a.w);
        }

        /**
         * @en Copy the target vector and save the results to out vector object
         * @zh 复制目标向量
         */;
        Vec4.copy = function copy(out, a) {
          out.x = a.x;
          out.y = a.y;
          out.z = a.z;
          out.w = a.w;
          return out;
        }

        /**
         * @en Sets the out vector with the given x, y, z and w values
         * @zh 设置向量值
         */;
        Vec4.set = function set(out, x, y, z, w) {
          out.x = x;
          out.y = y;
          out.z = z;
          out.w = w;
          return out;
        }

        /**
         * @en set value from color
         * @zh 从颜色值设置向量
         * @param out
         * @param color
         */;
        Vec4.fromColor = function fromColor(out, color) {
          out.x = color.r;
          out.y = color.g;
          out.z = color.b;
          out.w = color.a;
          return out;
        }

        /**
         * @en The angle between two vectors
         * @zh 两个向量之间的夹角
         */;
        Vec4.angle = function angle(a, b) {
          // use atan2 to get the sign of the angle correctly
          var dx = a.y * b.z - a.z * b.y;
          var dy = a.z * b.x - a.x * b.z;
          var dz = a.x * b.y - a.y * b.x;
          var dotVal = a.x * b.x + a.y * b.y + a.z * b.z;
          return Math.atan2(Math.sqrt(dx * dx + dy * dy + dz * dz), dotVal);
        }

        /**
         * @en Element-wise vector addition and save the results to out vector object
         * @zh 逐元素向量加法
         */;
        Vec4.add = function add(out, a, b) {
          out.x = a.x + b.x;
          out.y = a.y + b.y;
          out.z = a.z + b.z;
          out.w = a.w + b.w;
          return out;
        }

        /**
         * @en Element-wise vector subtraction and save the results to out vector object
         * @zh 逐元素向量减法
         */;
        Vec4.subtract = function subtract(out, a, b) {
          out.x = a.x - b.x;
          out.y = a.y - b.y;
          out.z = a.z - b.z;
          out.w = a.w - b.w;
          return out;
        }

        /**
         * @en Element-wise vector multiplication and save the results to out vector object
         * @zh 逐元素向量乘法
         */;
        Vec4.multiply = function multiply(out, a, b) {
          out.x = a.x * b.x;
          out.y = a.y * b.y;
          out.z = a.z * b.z;
          out.w = a.w * b.w;
          return out;
        }

        /**
         * @en Element-wise vector division and save the results to out vector object
         * @zh 逐元素向量除法
         */;
        Vec4.divide = function divide(out, a, b) {
          out.x = a.x / b.x;
          out.y = a.y / b.y;
          out.z = a.z / b.z;
          out.w = a.w / b.w;
          return out;
        }

        /**
         * @en Rounds up by elements of the vector and save the results to out vector object
         * @zh 逐元素向量向上取整
         */;
        Vec4.ceil = function ceil(out, a) {
          out.x = Math.ceil(a.x);
          out.y = Math.ceil(a.y);
          out.z = Math.ceil(a.z);
          out.w = Math.ceil(a.w);
          return out;
        }

        /**
         * @en Element-wise rounds down of the current vector and save the results to the out vector
         * @zh 逐元素向量向下取整
         */;
        Vec4.floor = function floor(out, a) {
          out.x = Math.floor(a.x);
          out.y = Math.floor(a.y);
          out.z = Math.floor(a.z);
          out.w = Math.floor(a.w);
          return out;
        }

        /**
         * @en Calculates the minimum values by elements of the vector and save the results to the out vector
         * @zh 逐元素向量最小值
         */;
        Vec4.min = function min(out, a, b) {
          out.x = Math.min(a.x, b.x);
          out.y = Math.min(a.y, b.y);
          out.z = Math.min(a.z, b.z);
          out.w = Math.min(a.w, b.w);
          return out;
        }

        /**
         * @en Calculates the maximum values by elements of the vector and save the results to the out vector
         * @zh 逐元素向量最大值
         */;
        Vec4.max = function max(out, a, b) {
          out.x = Math.max(a.x, b.x);
          out.y = Math.max(a.y, b.y);
          out.z = Math.max(a.z, b.z);
          out.w = Math.max(a.w, b.w);
          return out;
        }

        /**
         * @en Calculates element-wise round results and save to the out vector
         * @zh 逐元素向量四舍五入取整
         */;
        Vec4.round = function round(out, a) {
          out.x = Math.round(a.x);
          out.y = Math.round(a.y);
          out.z = Math.round(a.z);
          out.w = Math.round(a.w);
          return out;
        }

        /**
         * @en Vector scalar multiplication and save the results to out vector object
         * @zh 向量标量乘法
         */;
        Vec4.multiplyScalar = function multiplyScalar(out, a, b) {
          out.x = a.x * b;
          out.y = a.y * b;
          out.z = a.z * b;
          out.w = a.w * b;
          return out;
        }

        /**
         * @en Element-wise multiplication and addition with the equation: a + b * scale
         * @zh 逐元素向量乘加: A + B * scale
         */;
        Vec4.scaleAndAdd = function scaleAndAdd(out, a, b, scale) {
          out.x = a.x + b.x * scale;
          out.y = a.y + b.y * scale;
          out.z = a.z + b.z * scale;
          out.w = a.w + b.w * scale;
          return out;
        }

        /**
         * @en Calculates the euclidean distance of two vectors
         * @zh 求两向量的欧氏距离
         */;
        Vec4.distance = function distance(a, b) {
          var x = b.x - a.x;
          var y = b.y - a.y;
          var z = b.z - a.z;
          var w = b.w - a.w;
          return Math.sqrt(x * x + y * y + z * z + w * w);
        }

        /**
         * @en Calculates the squared euclidean distance of two vectors
         * @zh 求两向量的欧氏距离平方
         */;
        Vec4.squaredDistance = function squaredDistance(a, b) {
          var x = b.x - a.x;
          var y = b.y - a.y;
          var z = b.z - a.z;
          var w = b.w - a.w;
          return x * x + y * y + z * z + w * w;
        }

        /**
         * @en Calculates the length of the vector
         * @zh 求向量长度
         */;
        Vec4.len = function len(a) {
          var x = a.x;
          var y = a.y;
          var z = a.z;
          var w = a.w;
          return Math.sqrt(x * x + y * y + z * z + w * w);
        }

        /**
         * @en Calculates the squared length of the vector
         * @zh 求向量长度平方
         */;
        Vec4.lengthSqr = function lengthSqr(a) {
          var x = a.x;
          var y = a.y;
          var z = a.z;
          var w = a.w;
          return x * x + y * y + z * z + w * w;
        }

        /**
         * @en Sets each element to its negative value
         * @zh 逐元素向量取负
         */;
        Vec4.negate = function negate(out, a) {
          out.x = -a.x;
          out.y = -a.y;
          out.z = -a.z;
          out.w = -a.w;
          return out;
        }

        /**
         * @en Sets each element to its inverse value, zero value will become Infinity
         * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
         */;
        Vec4.inverse = function inverse(out, a) {
          out.x = 1.0 / a.x;
          out.y = 1.0 / a.y;
          out.z = 1.0 / a.z;
          out.w = 1.0 / a.w;
          return out;
        }

        /**
         * @en Sets each element to its inverse value, zero value will remain zero
         * @zh 逐元素向量取倒数，接近 0 时返回 0
         */;
        Vec4.inverseSafe = function inverseSafe(out, a) {
          var x = a.x;
          var y = a.y;
          var z = a.z;
          var w = a.w;
          if (Math.abs(x) < EPSILON) {
            out.x = 0;
          } else {
            out.x = 1.0 / x;
          }
          if (Math.abs(y) < EPSILON) {
            out.y = 0;
          } else {
            out.y = 1.0 / y;
          }
          if (Math.abs(z) < EPSILON) {
            out.z = 0;
          } else {
            out.z = 1.0 / z;
          }
          if (Math.abs(w) < EPSILON) {
            out.w = 0;
          } else {
            out.w = 1.0 / w;
          }
          return out;
        }

        /**
         * @en Sets the normalized vector to the out vector, returns a zero vector if input is a zero vector.
         * @zh 归一化向量，输入零向量将会返回零向量。
         */;
        Vec4.normalize = function normalize(out, a) {
          var x = a.x;
          var y = a.y;
          var z = a.z;
          var w = a.w;
          var len = x * x + y * y + z * z + w * w;
          if (len > 0) {
            len = 1 / Math.sqrt(len);
            out.x = x * len;
            out.y = y * len;
            out.z = z * len;
            out.w = w * len;
          } else {
            out.x = 0;
            out.y = 0;
            out.z = 0;
            out.w = 0;
          }
          return out;
        }

        /**
         * @en Calculates the dot product of the vector
         * @zh 向量点积（数量积）
         */;
        Vec4.dot = function dot(a, b) {
          return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
        }

        /**
         * @en Calculates the linear interpolation between two vectors with a given ratio
         * @zh 逐元素向量线性插值： A + t * (B - A)
         */;
        Vec4.lerp = function lerp(out, a, b, t) {
          out.x = a.x + t * (b.x - a.x);
          out.y = a.y + t * (b.y - a.y);
          out.z = a.z + t * (b.z - a.z);
          out.w = a.w + t * (b.w - a.w);
          return out;
        }

        /**
         * @en Scales all ell elements of this vector by the specified scalar value
         * @zh 逐元素向量缩放
         */;
        Vec4.scale = function scale(out, a, b) {
          out.x = a.x * b;
          out.y = a.y * b;
          out.z = a.z * b;
          out.w = a.w * b;
          return out;
        }

        /**
         * @en Generates a uniformly distributed random vector points from center to the surface of the unit sphere
         * @zh 生成一个在单位球体上均匀分布的随机向量
         * @param scale vector length
         */;
        Vec4.random = function random(out, scale) {
          scale = scale || 1.0;
          var phi = _random() * 2.0 * Math.PI;
          var cosTheta = _random() * 2 - 1;
          var sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
          out.x = sinTheta * Math.cos(phi) * scale;
          out.y = sinTheta * Math.sin(phi) * scale;
          out.z = cosTheta * scale;
          out.w = 0;
          return out;
        }

        /**
         * @en Vector and fourth order matrix multiplication
         * @zh 向量与四维矩阵乘法
         */;
        Vec4.transformMat4 = function transformMat4(out, a, m) {
          var x = a.x;
          var y = a.y;
          var z = a.z;
          var w = a.w;
          out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12 * w;
          out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13 * w;
          out.z = m.m02 * x + m.m06 * y + m.m10 * z + m.m14 * w;
          out.w = m.m03 * x + m.m07 * y + m.m11 * z + m.m15 * w;
          return out;
        }

        /**
         * @en Transform the vector with the given affine transformation
         * @zh 向量仿射变换
         */;
        Vec4.transformAffine = function transformAffine(out, v, m) {
          var x = v.x;
          var y = v.y;
          var z = v.z;
          var w = v.w;
          out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12 * w;
          out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13 * w;
          out.z = m.m02 * x + m.m06 * y + m.m10 * z + m.m14 * w;
          out.w = v.w;
          return out;
        }

        /**
         * @en Vector quaternion multiplication
         * @zh 向量四元数乘法
         */;
        Vec4.transformQuat = function transformQuat(out, a, q) {
          // qpq^{-1} https://en.wikipedia.org/wiki/Quaternion#Hamilton_product
          var x = a.x,
            y = a.y,
            z = a.z;
          var _x = q.x;
          var _y = q.y;
          var _z = q.z;
          var _w = q.w;

          // calculate quat * vec
          var ix = _w * x + _y * z - _z * y;
          var iy = _w * y + _z * x - _x * z;
          var iz = _w * z + _x * y - _y * x;
          var iw = -_x * x - _y * y - _z * z;

          // calculate result * inverse quat
          out.x = ix * _w + iw * -_x + iy * -_z - iz * -_y;
          out.y = iy * _w + iw * -_y + iz * -_x - ix * -_z;
          out.z = iz * _w + iw * -_z + ix * -_y - iy * -_x;
          out.w = a.w;
          return out;
        }

        /**
         * @en Converts the given vector to an array
         * @zh 向量转数组
         * @param ofs Array Start Offset
         */;
        Vec4.toArray = function toArray(out, v, ofs) {
          if (ofs === void 0) {
            ofs = 0;
          }
          out[ofs + 0] = v.x;
          out[ofs + 1] = v.y;
          out[ofs + 2] = v.z;
          out[ofs + 3] = v.w;
          return out;
        }

        /**
         * @en Converts the given array to a vector
         * @zh 数组转向量
         * @param ofs Array Start Offset
         */;
        Vec4.fromArray = function fromArray(out, arr, ofs) {
          if (ofs === void 0) {
            ofs = 0;
          }
          out.x = arr[ofs + 0];
          out.y = arr[ofs + 1];
          out.z = arr[ofs + 2];
          out.w = arr[ofs + 3];
          return out;
        }

        /**
         * @en Check the equality of the two given vectors
         * @zh 向量等价判断
         */;
        Vec4.strictEquals = function strictEquals(a, b) {
          return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
        }

        /**
         * @en Check whether the two given vectors are approximately equivalent
         * @zh 排除浮点数误差的向量近似等价判断
         */;
        Vec4.equals = function equals(a, b, epsilon) {
          if (epsilon === void 0) {
            epsilon = EPSILON;
          }
          // relative epsilon comparison with small number guard:
          // https://randomascii.wordpress.com/2012/02/25/comparing-floating-point-numbers-2012-edition/
          var hasInf = Math.abs(a.x) === Infinity || Math.abs(a.y) === Infinity || Math.abs(a.z) === Infinity || Math.abs(a.w) === Infinity || Math.abs(b.x) === Infinity || Math.abs(b.y) === Infinity || Math.abs(b.z) === Infinity || Math.abs(b.w) === Infinity;
          return !hasInf && Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y)) && Math.abs(a.z - b.z) <= epsilon * Math.max(1.0, Math.abs(a.z), Math.abs(b.z)) && Math.abs(a.w - b.w) <= epsilon * Math.max(1.0, Math.abs(a.w), Math.abs(b.w));
        }

        /**
         * @en x component.
         * @zh x 分量。
         */

        /**
         * @en y component.
         * @zh y 分量。
         */

        /**
         * @en z component.
         * @zh z 分量。
         */

        /**
         * @en w component.
         * @zh w 分量。
         */;

        function Vec4(x, y, z, w) {
          var _this;
          _this = _ValueType.call(this) || this;
          if (typeof x === 'object') {
            _this.x = x.x;
            _this.y = x.y;
            _this.z = x.z;
            _this.w = x.w;
          } else {
            _this.x = x || 0;
            _this.y = y || 0;
            _this.z = z || 0;
            _this.w = w || 0;
          }
          return _this;
        }

        /**
         * @en clone the current Vec4 value.
         * @zh 克隆当前向量。
         */
        var _proto = Vec4.prototype;
        _proto.clone = function clone() {
          return new Vec4(this.x, this.y, this.z, this.w);
        }

        /**
         * @en Set the current vector value with the given vector.
         * @zh 设置当前向量使其与指定向量相等。
         * @param other Specified vector
         * @returns `this`
         */;
        _proto.set = function set(x, y, z, w) {
          if (typeof x === 'object') {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
            this.w = x.w;
          } else {
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
            this.w = w || 0;
          }
          return this;
        }

        /**
         * @en Check whether the vector approximately equals another one.
         * @zh 判断当前向量是否在误差范围内与指定向量相等。
         * @param other Specified vector
         * @param epsilon The error allowed. It`s should be a non-negative number.
         * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
         */;
        _proto.equals = function equals(other, epsilon) {
          if (epsilon === void 0) {
            epsilon = EPSILON;
          }
          return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z)) && Math.abs(this.w - other.w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(other.w));
        }

        /**
         * @en Check whether the vector approximately equals another one.
         * @zh 判断当前向量是否在误差范围内与指定分量的向量相等。
         * @param x The x value of specified vector
         * @param y The y value of specified vector
         * @param z The z value of specified vector
         * @param w The w value of specified vector
         * @param epsilon The error allowed. It`s should be a non-negative number.
         * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
         */;
        _proto.equals4f = function equals4f(x, y, z, w, epsilon) {
          if (epsilon === void 0) {
            epsilon = EPSILON;
          }
          return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y)) && Math.abs(this.z - z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(z)) && Math.abs(this.w - w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(w));
        }

        /**
         * @en Check whether the current vector strictly equals another Vec4.
         * @zh 判断当前向量是否与指定向量相等。
         * @param other specified vector
         * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
         */;
        _proto.strictEquals = function strictEquals(other) {
          return this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
        }

        /**
         * @en Check whether the current vector strictly equals another Vec4.
         * @zh 判断当前向量是否与指定分量的向量相等。
         * @param x The x value of specified vector
         * @param y The y value of specified vector
         * @param z The z value of specified vector
         * @param w The w value of specified vector
         * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
         */;
        _proto.strictEquals4f = function strictEquals4f(x, y, z, w) {
          return this.x === x && this.y === y && this.z === z && this.w === w;
        }

        /**
         * @en Calculate linear interpolation result between this vector and another one with given ratio.
         * @zh 根据指定的插值比率，从当前向量到目标向量之间做插值。
         * @param to Target vector
         * @param ratio The interpolation coefficient.The range is [0,1].
         */;
        _proto.lerp = function lerp(to, ratio) {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          this.x = x + ratio * (to.x - x);
          this.y = y + ratio * (to.y - y);
          this.z = z + ratio * (to.z - z);
          this.w = w + ratio * (to.w - w);
          return this;
        }

        /**
         * @en Return the information of the vector in string
         * @zh 返回当前向量的字符串表示。
         * @returns The string with vector information
         */;
        _proto.toString = function toString() {
          return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.z.toFixed(2) + ", " + this.w.toFixed(2) + ")";
        }

        /**
         * @en Clamp the vector between minInclusive and maxInclusive.
         * @zh 设置当前向量的值，使其各个分量都处于指定的范围内。
         * @param minInclusive Minimum value allowed
         * @param maxInclusive Maximum value allowed
         * @returns `this`
         */;
        _proto.clampf = function clampf(minInclusive, maxInclusive) {
          this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
          this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
          this.z = clamp(this.z, minInclusive.z, maxInclusive.z);
          this.w = clamp(this.w, minInclusive.w, maxInclusive.w);
          return this;
        }

        /**
         * @en Adds the current vector with another one and return this
         * @zh 向量加法。将当前向量与指定向量的相加
         * @param other specified vector
         */;
        _proto.add = function add(other) {
          this.x += other.x;
          this.y += other.y;
          this.z += other.z;
          this.w += other.w;
          return this;
        }

        /**
         * @en Adds the current vector with another one and return this
         * @zh 向量加法。将当前向量与指定分量的向量相加
         * @param x The x value of specified vector
         * @param y The y value of specified vector
         * @param z The z value of specified vector
         * @param w The w value of specified vector
         */;
        _proto.add4f = function add4f(x, y, z, w) {
          this.x += x;
          this.y += y;
          this.z += z;
          this.w += w;
          return this;
        }

        /**
         * @en Subtracts one vector from this, and returns this.
         * @zh 向量减法。将当前向量减去指定向量
         * @param other specified vector
         */;
        _proto.subtract = function subtract(other) {
          this.x -= other.x;
          this.y -= other.y;
          this.z -= other.z;
          this.w -= other.w;
          return this;
        }

        /**
         * @en Subtracts one vector from this, and returns this.
         * @zh 向量减法。将当前向量减去指定分量的向量
         * @param x The x value of specified vector
         * @param y The y value of specified vector
         * @param z The z value of specified vector
         * @param w The w value of specified vector
         */;
        _proto.subtract4f = function subtract4f(x, y, z, w) {
          this.x -= x;
          this.y -= y;
          this.z -= z;
          this.w -= w;
          return this;
        }

        /**
         * @en Multiplies the current vector with a number, and returns this.
         * @zh 向量数乘。将当前向量数乘指定标量
         * @param scalar scalar number
         */;
        _proto.multiplyScalar = function multiplyScalar(scalar) {
          if (typeof scalar === 'object') {
            console.warn('should use Vec4.multiply for vector * vector operation');
          }
          this.x *= scalar;
          this.y *= scalar;
          this.z *= scalar;
          this.w *= scalar;
          return this;
        }

        /**
         * @en Multiplies the current vector with another one and return this
         * @zh 向量乘法。将当前向量乘以指定向量
         * @param other specified vector
         */;
        _proto.multiply = function multiply(other) {
          if (typeof other !== 'object') {
            console.warn('should use Vec4.scale for vector * scalar operation');
          }
          this.x *= other.x;
          this.y *= other.y;
          this.z *= other.z;
          this.w *= other.w;
          return this;
        }

        /**
         * @en Multiplies the current vector with another one and return this
         * @zh 向量乘法。将当前向量与指定分量的向量相乘的结果赋值给当前向量。
         * @param x The x value of specified vector
         * @param y The y value of specified vector
         * @param z The z value of specified vector
         * @param w The w value of specified vector
         */;
        _proto.multiply4f = function multiply4f(x, y, z, w) {
          this.x *= x;
          this.y *= y;
          this.z *= z;
          this.w *= w;
          return this;
        }

        /**
         * @en Element-wisely divides this vector with another one, and return this.
         * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
         * @param other specified vector
         */;
        _proto.divide = function divide(other) {
          this.x /= other.x;
          this.y /= other.y;
          this.z /= other.z;
          this.w /= other.w;
          return this;
        }

        /**
         * @en Element-wisely divides this vector with another one, and return this.
         * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
         * @param x The x value of specified vector
         * @param y The y value of specified vector
         * @param z The z value of specified vector
         * @param w The w value of specified vector
         */;
        _proto.divide4f = function divide4f(x, y, z, w) {
          this.x /= x;
          this.y /= y;
          this.z /= z;
          this.w /= w;
          return this;
        }

        /**
         * @en Sets each component of this vector with its negative value
         * @zh 将当前向量的各个分量取反
         */;
        _proto.negative = function negative() {
          this.x = -this.x;
          this.y = -this.y;
          this.z = -this.z;
          this.w = -this.w;
          return this;
        }

        /**
         * @en Calculates the dot product with another vector
         * @zh 向量点乘。
         * @param other specified vector
         * @returns 当前向量与指定向量点乘的结果。
         */;
        _proto.dot = function dot(vector) {
          return this.x * vector.x + this.y * vector.y + this.z * vector.z + this.w * vector.w;
        }

        /**
         * @en Calculates the cross product with another vector.
         * @zh 向量叉乘。视当前向量和指定向量为三维向量（舍弃 w 分量），将当前向量左叉乘指定向量
         * @param other specified vector
         *
         * @deprecated since v3.8 cross product only defined in 3D space, use [[Vec3.cross]] instead.
         */;
        _proto.cross = function cross(vector) {
          var ax = this.x,
            ay = this.y,
            az = this.z;
          var bx = vector.x,
            by = vector.y,
            bz = vector.z;
          this.x = ay * bz - az * by;
          this.y = az * bx - ax * bz;
          this.z = ax * by - ay * bx;
          return this;
        }

        /**
         * @en Returns the length of this vector.
         * @zh 计算向量的长度（模）。
         * @returns Length of vector
         */;
        _proto.length = function length() {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          return Math.sqrt(x * x + y * y + z * z + w * w);
        }

        /**
         * @en Returns the squared length of this vector.
         * @zh 计算向量长度（模）的平方。
         * @returns the squared length of this vector
         */;
        _proto.lengthSqr = function lengthSqr() {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          return x * x + y * y + z * z + w * w;
        }

        /**
         * @en Normalize the current vector.
         * @zh 将当前向量归一化
         */;
        _proto.normalize = function normalize() {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          var len = x * x + y * y + z * z + w * w;
          if (len > 0) {
            len = 1 / Math.sqrt(len);
            this.x = x * len;
            this.y = y * len;
            this.z = z * len;
            this.w = w * len;
          }
          return this;
        }

        /**
         * @en Scales the current vector by a scalar number.
         * @zh 向量数乘。
         */;
        _proto.scale = function scale(scalar) {
          this.x *= scalar;
          this.y *= scalar;
          this.z *= scalar;
          this.w *= scalar;
          return this;
        }

        /**
         * @en Transforms the vec4 with a mat4
         * @zh 应用四维矩阵变换到当前矩阵
         * @param matrix matrix to transform with
         */;
        _proto.transformMat4 = function transformMat4(matrix) {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var w = this.w;
          this.x = matrix.m00 * x + matrix.m04 * y + matrix.m08 * z + matrix.m12 * w;
          this.y = matrix.m01 * x + matrix.m05 * y + matrix.m09 * z + matrix.m13 * w;
          this.z = matrix.m02 * x + matrix.m06 * y + matrix.m10 * z + matrix.m14 * w;
          this.w = matrix.m03 * x + matrix.m07 * y + matrix.m11 * z + matrix.m15 * w;
          return this;
        };
        return Vec4;
      }(ValueType));
      _class = Vec4;
      Vec4.ZERO = Object.freeze(new _class(0, 0, 0, 0));
      Vec4.ONE = Object.freeze(new _class(1, 1, 1, 1));
      Vec4.NEG_ONE = Object.freeze(new _class(-1, -1, -1, -1));
      Vec4.UNIT_X = Object.freeze(new _class(1, 0, 0, 0));
      Vec4.UNIT_Y = Object.freeze(new _class(0, 1, 0, 0));
      Vec4.UNIT_Z = Object.freeze(new _class(0, 0, 1, 0));
      Vec4.UNIT_W = Object.freeze(new _class(0, 0, 0, 1));
      CCClass.fastDefine('cc.Vec4', Vec4, {
        x: 0,
        y: 0,
        z: 0,
        w: 0
      });
      legacyCC.Vec4 = Vec4;
      legacyCC.v4 = v4;
    }
  };
});