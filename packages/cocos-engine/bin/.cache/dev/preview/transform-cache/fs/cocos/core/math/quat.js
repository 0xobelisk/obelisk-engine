System.register("q-bundled:///fs/cocos/core/math/quat.js", ["../data/class.js", "../value-types/value-type.js", "./mat3.js", "./utils.js", "./vec3.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var CCClass, ValueType, Mat3, EPSILON, toDegree, Vec3, legacyCC, _class, Quat, qt_1, qt_2, v3_1, m3_1, halfToRad;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function quat(x, y, z, w) {
    if (x === void 0) {
      x = 0;
    }
    if (y === void 0) {
      y = 0;
    }
    if (z === void 0) {
      z = 0;
    }
    if (w === void 0) {
      w = 1;
    }
    return new Quat(x, y, z, w);
  }
  _export("quat", quat);
  return {
    setters: [function (_dataClassJs) {
      CCClass = _dataClassJs.CCClass;
    }, function (_valueTypesValueTypeJs) {
      ValueType = _valueTypesValueTypeJs.ValueType;
    }, function (_mat3Js) {
      Mat3 = _mat3Js.Mat3;
    }, function (_utilsJs) {
      EPSILON = _utilsJs.EPSILON;
      toDegree = _utilsJs.toDegree;
    }, function (_vec3Js) {
      Vec3 = _vec3Js.Vec3;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      /**
       * @en quaternion
       * @zh 四元数
       */
      _export("Quat", Quat = /*#__PURE__*/function (_ValueType) {
        _inheritsLoose(Quat, _ValueType);
        /**
         * @en Obtain a copy of the given quaternion
         * @zh 获得指定四元数的拷贝
         */
        Quat.clone = function clone(a) {
          return new Quat(a.x, a.y, a.z, a.w);
        }

        /**
         * @en Copy the given quaternion to the out quaternion
         * @zh 复制目标四元数
         */;
        Quat.copy = function copy(out, a) {
          out.x = a.x;
          out.y = a.y;
          out.z = a.z;
          out.w = a.w;
          return out;
        }

        /**
         * @en Sets the out quaternion with values of each component
         * @zh 设置四元数值
         */;
        Quat.set = function set(out, x, y, z, w) {
          out.x = x;
          out.y = y;
          out.z = z;
          out.w = w;
          return out;
        }

        /**
         * @en Sets the out quaternion to an identity quaternion
         * @zh 将目标赋值为单位四元数
         */;
        Quat.identity = function identity(out) {
          out.x = 0;
          out.y = 0;
          out.z = 0;
          out.w = 1;
          return out;
        }

        /**
         * @en Sets the out quaternion with the shortest path orientation between two vectors, considering both vectors normalized
         * @zh 设置四元数为两向量间的最短路径旋转，默认两向量都已归一化
         */;
        Quat.rotationTo = function rotationTo(out, a, b) {
          var dot = Vec3.dot(a, b);
          if (dot < -0.999999) {
            Vec3.cross(v3_1, Vec3.UNIT_X, a);
            if (v3_1.length() < 0.000001) {
              Vec3.cross(v3_1, Vec3.UNIT_Y, a);
            }
            Vec3.normalize(v3_1, v3_1);
            Quat.fromAxisAngle(out, v3_1, Math.PI);
            return out;
          } else if (dot > 0.999999) {
            out.x = 0;
            out.y = 0;
            out.z = 0;
            out.w = 1;
            return out;
          } else {
            Vec3.cross(v3_1, a, b);
            out.x = v3_1.x;
            out.y = v3_1.y;
            out.z = v3_1.z;
            out.w = 1 + dot;
            return Quat.normalize(out, out);
          }
        }

        /**
         * @en Gets the rotation axis and the arc of rotation from the quaternion
         * @zh 获取四元数的旋转轴和旋转弧度
         * @param outAxis output axis
         * @param q input quaternion
         * @return radian of rotation
         */;
        Quat.getAxisAngle = function getAxisAngle(outAxis, q) {
          var rad = Math.acos(q.w) * 2.0;
          var s = Math.sin(rad / 2.0);
          if (s !== 0.0) {
            outAxis.x = q.x / s;
            outAxis.y = q.y / s;
            outAxis.z = q.z / s;
          } else {
            // If s is zero, return any axis (no rotation - axis does not matter)
            outAxis.x = 1;
            outAxis.y = 0;
            outAxis.z = 0;
          }
          return rad;
        }

        /**
         * @en Quaternion multiplication and save the results to out quaternion, that is a * b.
         * @zh 四元数乘法，即a * b。
         */;
        Quat.multiply = function multiply(out, a, b) {
          var x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;
          var y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;
          var z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;
          var w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;
          out.x = x;
          out.y = y;
          out.z = z;
          out.w = w;
          return out;
        }

        /**
         * @en Quaternion scalar multiplication and save the results to out quaternion
         * @zh 四元数标量乘法
         */;
        Quat.multiplyScalar = function multiplyScalar(out, a, b) {
          out.x = a.x * b;
          out.y = a.y * b;
          out.z = a.z * b;
          out.w = a.w * b;
          return out;
        }

        /**
         * @en Quaternion multiplication and addition: A + B * scale
         * @zh 四元数乘加：A + B * scale
         */;
        Quat.scaleAndAdd = function scaleAndAdd(out, a, b, scale) {
          out.x = a.x + b.x * scale;
          out.y = a.y + b.y * scale;
          out.z = a.z + b.z * scale;
          out.w = a.w + b.w * scale;
          return out;
        }

        /**
         * @en Sets the out quaternion to represent a radian rotation around x axis
         * @zh 绕 X 轴旋转指定四元数
         * @param rad radian of rotation
         */;
        Quat.rotateX = function rotateX(out, a, rad) {
          rad *= 0.5;
          var bx = Math.sin(rad);
          var bw = Math.cos(rad);
          var x = a.x,
            y = a.y,
            z = a.z,
            w = a.w;
          out.x = x * bw + w * bx;
          out.y = y * bw + z * bx;
          out.z = z * bw - y * bx;
          out.w = w * bw - x * bx;
          return out;
        }

        /**
         * @en Sets the out quaternion to represent a radian rotation around y axis
         * @zh 绕 Y 轴旋转指定四元数
         * @param rad radian of rotation
         */;
        Quat.rotateY = function rotateY(out, a, rad) {
          rad *= 0.5;
          var by = Math.sin(rad);
          var bw = Math.cos(rad);
          var x = a.x,
            y = a.y,
            z = a.z,
            w = a.w;
          out.x = x * bw - z * by;
          out.y = y * bw + w * by;
          out.z = z * bw + x * by;
          out.w = w * bw - y * by;
          return out;
        }

        /**
         * @en Sets the out quaternion to represent a radian rotation around z axis
         * @zh 绕 Z 轴旋转指定四元数
         * @param rad radian of rotation
         */;
        Quat.rotateZ = function rotateZ(out, a, rad) {
          rad *= 0.5;
          var bz = Math.sin(rad);
          var bw = Math.cos(rad);
          var x = a.x,
            y = a.y,
            z = a.z,
            w = a.w;
          out.x = x * bw + y * bz;
          out.y = y * bw - x * bz;
          out.z = z * bw + w * bz;
          out.w = w * bw - z * bz;
          return out;
        }

        /**
         * @en Sets the out quaternion to represent a radian rotation around a given rotation axis in world space
         * @zh 绕世界空间下指定轴旋转四元数
         * @param axis axis of rotation, normalized by default
         * @param rad radian of rotation
         */;
        Quat.rotateAround = function rotateAround(out, rot, axis, rad) {
          // get inv-axis (local to rot)
          Quat.invert(qt_1, rot);
          Vec3.transformQuat(v3_1, axis, qt_1);
          // rotate by inv-axis
          Quat.fromAxisAngle(qt_1, v3_1, rad);
          Quat.multiply(out, rot, qt_1);
          return out;
        }

        /**
         * @en Sets the out quaternion to represent a radian rotation around a given rotation axis in local space
         * @zh 绕本地空间下指定轴旋转四元数
         * @param axis axis of rotation
         * @param rad radian of rotation
         */;
        Quat.rotateAroundLocal = function rotateAroundLocal(out, rot, axis, rad) {
          Quat.fromAxisAngle(qt_1, axis, rad);
          Quat.multiply(out, rot, qt_1);
          return out;
        }

        /**
         * @en Calculates the w component with xyz components, considering the given quaternion normalized
         * @zh 根据 xyz 分量计算 w 分量，默认已归一化
         */;
        Quat.calculateW = function calculateW(out, a) {
          out.x = a.x;
          out.y = a.y;
          out.z = a.z;
          out.w = Math.sqrt(Math.abs(1.0 - a.x * a.x - a.y * a.y - a.z * a.z));
          return out;
        }

        /**
         * @en Quaternion dot product (scalar product)
         * @zh 四元数点积（数量积）
         */;
        Quat.dot = function dot(a, b) {
          return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
        }

        /**
         * @en Element by element linear interpolation: A + t * (B - A)
         * @zh 逐元素线性插值： A + t * (B - A)
         */;
        Quat.lerp = function lerp(out, a, b, t) {
          out.x = a.x + t * (b.x - a.x);
          out.y = a.y + t * (b.y - a.y);
          out.z = a.z + t * (b.z - a.z);
          out.w = a.w + t * (b.w - a.w);
          return out;
        }

        /**
         * @en Spherical quaternion interpolation
         * @zh 四元数球面插值
         */;
        Quat.slerp = function slerp(out, a, b, t) {
          // benchmarks:
          //    http://jsperf.com/quaternion-slerp-implementations

          var scale0 = 0;
          var scale1 = 0;
          var bx = b.x;
          var by = b.y;
          var bz = b.z;
          var bw = b.w;

          // calc cosine
          var cosom = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
          // adjust signs (if necessary)
          if (cosom < 0.0) {
            cosom = -cosom;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
          }
          // calculate coefficients
          if (1.0 - cosom > 0.000001) {
            // standard case (slerp)
            var omega = Math.acos(cosom);
            var sinom = Math.sin(omega);
            scale0 = Math.sin((1.0 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
          } else {
            // "from" and "to" quaternions are very close
            //  ... so we can do a linear interpolation
            scale0 = 1.0 - t;
            scale1 = t;
          }
          // calculate final values
          out.x = scale0 * a.x + scale1 * bx;
          out.y = scale0 * a.y + scale1 * by;
          out.z = scale0 * a.z + scale1 * bz;
          out.w = scale0 * a.w + scale1 * bw;
          return out;
        }

        /**
         * @en Spherical quaternion interpolation with two control points
         * @zh 带两个控制点的四元数球面插值
         * @param out the receiving quaternion
         * @param a the first operand
         * @param b the second operand
         * @param c the third operand
         * @param d the fourth operand
         * @param t interpolation amount, in the range [0-1], between the two inputs
         * @returns out
         */;
        Quat.sqlerp = function sqlerp(out, a, b, c, d, t) {
          Quat.slerp(qt_1, a, d, t);
          Quat.slerp(qt_2, b, c, t);
          Quat.slerp(out, qt_1, qt_2, 2 * t * (1 - t));
          return out;
        }

        /**
         * @en Sets the inverse of the given quaternion to out quaternion
         * @zh 四元数求逆
         */;
        Quat.invert = function invert(out, a) {
          var dot = a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
          var invDot = dot ? 1.0 / dot : 0;

          // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

          out.x = -a.x * invDot;
          out.y = -a.y * invDot;
          out.z = -a.z * invDot;
          out.w = a.w * invDot;
          return out;
        }

        /**
         * @en Conjugating a quaternion, it's equivalent to the inverse of the unit quaternion, but more efficient
         * @zh 求共轭四元数，对单位四元数与求逆等价，但更高效
         */;
        Quat.conjugate = function conjugate(out, a) {
          out.x = -a.x;
          out.y = -a.y;
          out.z = -a.z;
          out.w = a.w;
          return out;
        }

        /**
         * @en Calculates the length of the quaternion
         * @zh 求四元数长度
         */;
        Quat.len = function len(a) {
          return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w);
        }

        /**
         * @en Calculates the squared length of the quaternion
         * @zh 求四元数长度平方
         */;
        Quat.lengthSqr = function lengthSqr(a) {
          return a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
        }

        /**
         * @en Normalize the given quaternion, returns a zero quaternion if input is a zero quaternion.
         * @zh 归一化四元数，输入零四元数将会返回零四元数。
         */;
        Quat.normalize = function normalize(out, a) {
          var len = a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
          if (len > 0) {
            len = 1 / Math.sqrt(len);
            out.x = a.x * len;
            out.y = a.y * len;
            out.z = a.z * len;
            out.w = a.w * len;
          } else {
            out.x = 0;
            out.y = 0;
            out.z = 0;
            out.w = 0;
          }
          return out;
        }

        /**
         * @en Calculated the quaternion represents the given coordinates, considering all given vectors are normalized and mutually perpendicular
         * @zh 根据本地坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直
         */;
        Quat.fromAxes = function fromAxes(out, xAxis, yAxis, zAxis) {
          Mat3.set(m3_1, xAxis.x, xAxis.y, xAxis.z, yAxis.x, yAxis.y, yAxis.z, zAxis.x, zAxis.y, zAxis.z);
          return Quat.normalize(out, Quat.fromMat3(out, m3_1));
        }

        /**
         * @en Calculates the quaternion with the up direction and the direction of the viewport
         * @zh 根据视口的前方向和上方向计算四元数
         * @param view The view direction, it`s must be normalized.
         * @param up The view up direction, it`s must be normalized, default value is (0, 1, 0).
         */;
        Quat.fromViewUp = function fromViewUp(out, view, up) {
          Mat3.fromViewUp(m3_1, view, up);
          return Quat.normalize(out, Quat.fromMat3(out, m3_1));
        }

        /**
         * @en Calculates the quaternion from a given rotary shaft and a radian rotation around it.
         * @zh 根据旋转轴和旋转弧度计算四元数
         */;
        Quat.fromAxisAngle = function fromAxisAngle(out, axis, rad) {
          rad *= 0.5;
          var s = Math.sin(rad);
          out.x = s * axis.x;
          out.y = s * axis.y;
          out.z = s * axis.z;
          out.w = Math.cos(rad);
          return out;
        }

        /**
         * @en Calculates the quaternion with the three-dimensional transform matrix, considering no scale included in the matrix
         * @zh 根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息
         */;
        Quat.fromMat3 = function fromMat3(out, m) {
          var m00 = m.m00,
            m01 = m.m01,
            m02 = m.m02,
            m10 = m.m03,
            m11 = m.m04,
            m12 = m.m05,
            m20 = m.m06,
            m21 = m.m07,
            m22 = m.m08;
          var fourXSquaredMinus1 = m00 - m11 - m22;
          var fourYSquaredMinus1 = m11 - m00 - m22;
          var fourZSquaredMinus1 = m22 - m00 - m11;
          var fourWSquaredMinus1 = m00 + m11 + m22;
          var biggestIndex = 0;
          var fourBiggestSquaredMinus1 = fourWSquaredMinus1;
          if (fourXSquaredMinus1 > fourBiggestSquaredMinus1) {
            fourBiggestSquaredMinus1 = fourXSquaredMinus1;
            biggestIndex = 1;
          }
          if (fourYSquaredMinus1 > fourBiggestSquaredMinus1) {
            fourBiggestSquaredMinus1 = fourYSquaredMinus1;
            biggestIndex = 2;
          }
          if (fourZSquaredMinus1 > fourBiggestSquaredMinus1) {
            fourBiggestSquaredMinus1 = fourZSquaredMinus1;
            biggestIndex = 3;
          }
          var biggestVal = Math.sqrt(fourBiggestSquaredMinus1 + 1) * 0.5;
          var mult = 0.25 / biggestVal;
          switch (biggestIndex) {
            case 0:
              out.w = biggestVal;
              out.x = (m12 - m21) * mult;
              out.y = (m20 - m02) * mult;
              out.z = (m01 - m10) * mult;
              break;
            case 1:
              out.w = (m12 - m21) * mult;
              out.x = biggestVal;
              out.y = (m01 + m10) * mult;
              out.z = (m20 + m02) * mult;
              break;
            case 2:
              out.w = (m20 - m02) * mult;
              out.x = (m01 + m10) * mult;
              out.y = biggestVal;
              out.z = (m12 + m21) * mult;
              break;
            case 3:
              out.w = (m01 - m10) * mult;
              out.x = (m20 + m02) * mult;
              out.y = (m12 + m21) * mult;
              out.z = biggestVal;
              break;
            default:
              out.w = 1;
              out.x = 0;
              out.y = 0;
              out.z = 0;
              break;
          }
          return out;
        }

        /**
         * @en Calculates the quaternion with Euler angles, the rotation order is YZX, first rotate around Y, then around Z, and finally around X.
         * @zh 根据欧拉角信息计算四元数，旋转顺序为 YZX，即先绕Y旋转，再绕Z，最后绕X旋转。
         */;
        Quat.fromEuler = function fromEuler(out, x, y, z) {
          x *= halfToRad;
          y *= halfToRad;
          z *= halfToRad;
          var sx = Math.sin(x);
          var cx = Math.cos(x);
          var sy = Math.sin(y);
          var cy = Math.cos(y);
          var sz = Math.sin(z);
          var cz = Math.cos(z);
          out.x = sx * cy * cz + cx * sy * sz;
          out.y = cx * sy * cz + sx * cy * sz;
          out.z = cx * cy * sz - sx * sy * cz;
          out.w = cx * cy * cz - sx * sy * sz;
          return out;
        }

        /**
         * @en Calculates the quaternion with given 2D angle (0, 0, z).
         * @zh 根据 2D 角度（0, 0, z）计算四元数
         *
         * @param out Output quaternion
         * @param z Angle to rotate around Z axis in degrees.
         */;
        Quat.fromAngleZ = function fromAngleZ(out, z) {
          z *= halfToRad;
          out.x = out.y = 0;
          out.z = Math.sin(z);
          out.w = Math.cos(z);
          return out;
        }

        /**
         * @en This returns the X-axis vector of the quaternion
         * @zh 返回定义此四元数的坐标系 X 轴向量
         */;
        Quat.toAxisX = function toAxisX(out, q) {
          var fy = 2.0 * q.y;
          var fz = 2.0 * q.z;
          out.x = 1.0 - fy * q.y - fz * q.z;
          out.y = fy * q.x + fz * q.w;
          out.z = fz * q.x - fy * q.w;
          return out;
        }

        /**
         * @en This returns the Y-axis vector of the quaternion
         * @zh 返回定义此四元数的坐标系 Y 轴向量
         */;
        Quat.toAxisY = function toAxisY(out, q) {
          var fx = 2.0 * q.x;
          var fy = 2.0 * q.y;
          var fz = 2.0 * q.z;
          out.x = fy * q.x - fz * q.w;
          out.y = 1.0 - fx * q.x - fz * q.z;
          out.z = fz * q.y + fx * q.w;
          return out;
        }

        /**
         * @en This returns the Z-axis vector of the quaternion
         * @zh 返回定义此四元数的坐标系 Z 轴向量
         */;
        Quat.toAxisZ = function toAxisZ(out, q) {
          var fx = 2.0 * q.x;
          var fy = 2.0 * q.y;
          var fz = 2.0 * q.z;
          out.x = fz * q.x + fy * q.w;
          out.y = fz * q.y - fx * q.w;
          out.z = 1.0 - fx * q.x - fy * q.y;
          return out;
        }

        /**
         * @en Converts the quaternion to angles, result angle x, y in the range of [-180, 180], z in the range of [-90, 90] interval,
         * the rotation order is YZX, first rotate around Y, then around Z, and finally around X
         * @zh 根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX，即先绕Y旋转，再绕Z，最后绕X旋转。
         * @param outerZ change z value range to [-180, -90] U [90, 180]
         */;
        Quat.toEuler = function toEuler(out, q, outerZ) {
          var x = q.x,
            y = q.y,
            z = q.z,
            w = q.w;
          var bank = 0;
          var heading = 0;
          var attitude = 0;
          var test = x * y + z * w;
          if (test > 0.499999) {
            bank = 0; // default to zero
            heading = toDegree(2 * Math.atan2(x, w));
            attitude = 90;
          } else if (test < -0.499999) {
            bank = 0; // default to zero
            heading = -toDegree(2 * Math.atan2(x, w));
            attitude = -90;
          } else {
            var sqx = x * x;
            var sqy = y * y;
            var sqz = z * z;
            bank = toDegree(Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz));
            heading = toDegree(Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz));
            attitude = toDegree(Math.asin(2 * test));
            if (outerZ) {
              bank = -180 * Math.sign(bank + 1e-6) + bank;
              heading = -180 * Math.sign(heading + 1e-6) + heading;
              attitude = 180 * Math.sign(attitude + 1e-6) - attitude;
            }
          }
          out.x = bank;
          out.y = heading;
          out.z = attitude;
          return out;
        }

        /**
         * @en Converts the quaternion to euler angles, result angle y, z in the range of [-180, 180], x in the range of [-90, 90],
         * the rotation order is YXZ, first rotate around Y, then around X, and finally around Z.
         * @zh 根据四元数计算欧拉角，返回角度 yz 在 [-180, 180], x 在 [-90, 90]，旋转顺序为 YXZ，即先绕Y旋转，再绕X，最后绕Z旋转。
         */;
        Quat.toEulerInYXZOrder = function toEulerInYXZOrder(out, q) {
          Mat3.fromQuat(m3_1, q);
          Mat3.toEuler(m3_1, out);
          out.x = toDegree(out.x);
          out.y = toDegree(out.y);
          out.z = toDegree(out.z);
        }

        /**
         * @en Converts quaternion to an array
         * @zh 四元数转数组
         * @param ofs Array Start Offset
         */;
        Quat.toArray = function toArray(out, q, ofs) {
          if (ofs === void 0) {
            ofs = 0;
          }
          out[ofs + 0] = q.x;
          out[ofs + 1] = q.y;
          out[ofs + 2] = q.z;
          out[ofs + 3] = q.w;
          return out;
        }

        /**
         * @en Array to a quaternion
         * @zh 数组转四元数
         * @param ofs Array Start Offset
         */;
        Quat.fromArray = function fromArray(out, arr, ofs) {
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
         * @en Check whether two quaternions are equal
         * @zh 四元数等价判断
         */;
        Quat.strictEquals = function strictEquals(a, b) {
          return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
        }

        /**
         * @en Check whether two quaternions are approximately equal
         * @zh 排除浮点数误差的四元数近似等价判断
         */;
        Quat.equals = function equals(a, b, epsilon) {
          if (epsilon === void 0) {
            epsilon = EPSILON;
          }
          return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y)) && Math.abs(a.z - b.z) <= epsilon * Math.max(1.0, Math.abs(a.z), Math.abs(b.z)) && Math.abs(a.w - b.w) <= epsilon * Math.max(1.0, Math.abs(a.w), Math.abs(b.w));
        }

        /**
         * @en Gets the angular distance between two unit quaternions
         * @zh 获取两个单位四元数的夹角
         * @param a The first unit quaternion
         * @param b The second unit quaternion
         * @returns Angle between the two quaternions in radians
         */;
        Quat.angle = function angle(a, b) {
          var dot = Math.min(Math.abs(Quat.dot(a, b)), 1.0);
          return Math.acos(dot) * 2.0;
        }

        /**
         * @en Rotate a `from` unit quaternion towards `to` unit quaternion
         * @zh 将一个起始单位四元数旋转到一个目标单位四元数
         * @param from The first unit quaternion
         * @param to The second unit quaternion
         * @param maxStep The maximum angle of rotation in degrees
         * @returns new unit quaternion generated during rotation
         */;
        Quat.rotateTowards = function rotateTowards(out, from, to, maxStep) {
          var angle = Quat.angle(from, to);
          if (angle === 0) {
            out.x = to.x;
            out.y = to.y;
            out.z = to.z;
            out.w = to.w;
            return out;
          }
          var t = Math.min(maxStep / toDegree(angle), 1.0);
          return Quat.slerp(out, from, to, t);
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

        function Quat(x, y, z, w) {
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
            _this.w = w !== null && w !== void 0 ? w : 1;
          }
          return _this;
        }

        /**
         * @en clone the current Quat
         * @zh 克隆当前四元数。
         */
        var _proto = Quat.prototype;
        _proto.clone = function clone() {
          return new Quat(this.x, this.y, this.z, this.w);
        }

        /**
         * @en Set values with another quaternion
         * @zh 设置当前四元数使其与指定四元数相等。
         * @param other Specified quaternion
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
            this.w = w !== null && w !== void 0 ? w : 1;
          }
          return this;
        }

        /**
         * @en Check whether the quaternion approximately equals another one
         * @zh 判断当前四元数是否在误差范围内与指定向量相等。
         * @param other Comparative quaternion
         * @param epsilon The error allowed. It`s should be a non-negative number.
         * @returns Returns `true' when the components of the two quaternions are equal within the specified error range; otherwise, returns `false'.
         */;
        _proto.equals = function equals(other, epsilon) {
          if (epsilon === void 0) {
            epsilon = EPSILON;
          }
          return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z)) && Math.abs(this.w - other.w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(other.w));
        }

        /**
         * @en Check whether the current quaternion strictly equals other quaternion
         * @zh 判断当前四元数是否与指定四元数相等。
         * @param other Comparative quaternion
         * @returns Returns `true' when the components of the two quaternions are equal within the specified error range; otherwise, returns `false'.
         */;
        _proto.strictEquals = function strictEquals(other) {
          return other && this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
        }

        /**
         * @en Convert quaternion to Euler angles
         * @zh 将当前四元数转化为欧拉角（x-y-z）并赋值给输出向量。
         * @param out the output vector
         */;
        _proto.getEulerAngles = function getEulerAngles(out) {
          return Quat.toEuler(out, this);
        }

        /**
         * @en Calculate the linear interpolation result between this quaternion and another one with given ratio
         * @zh 根据指定的插值比率，从当前四元数到目标四元数之间做线性插值。
         * @param to The target quaternion
         * @param ratio The interpolation coefficient. The range is [0,1].
         */;
        _proto.lerp = function lerp(to, ratio) {
          this.x += ratio * (to.x - this.x);
          this.y += ratio * (to.y - this.y);
          this.z += ratio * (to.z - this.z);
          this.w += ratio * (to.w - this.w);
          return this;
        }

        /**
         * @en Calculates the spherical interpolation result between this quaternion and another one with the given ratio
         * @zh 根据指定的插值比率，从当前四元数到目标四元数之间做球面插值。
         * @param to The target quaternion
         * @param ratio The interpolation coefficient. The range is [0,1].
         */;
        _proto.slerp = function slerp(to, ratio) {
          return Quat.slerp(this, this, to, ratio);
        }

        /**
         * @en Calculates the length of the quaternion
         * @zh 求四元数长度
         */;
        _proto.length = function length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }

        /**
         * @en Calculates the squared length of the quaternion
         * @zh 求四元数长度平方
         */;
        _proto.lengthSqr = function lengthSqr() {
          return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        };
        return Quat;
      }(ValueType));
      _class = Quat;
      Quat.IDENTITY = Object.freeze(new _class());
      qt_1 = new Quat();
      qt_2 = new Quat();
      v3_1 = new Vec3();
      m3_1 = new Mat3();
      halfToRad = 0.5 * Math.PI / 180.0;
      CCClass.fastDefine('cc.Quat', Quat, {
        x: 0,
        y: 0,
        z: 0,
        w: 1
      });
      legacyCC.Quat = Quat;
      legacyCC.quat = quat;
    }
  };
});