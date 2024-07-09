System.register("q-bundled:///fs/cocos/animation/cubic-spline-value.js", ["../core/data/decorators/index.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, Quat, Vec2, Vec3, Vec4, _dec2, _class4, _class5, _initializer4, _initializer5, _initializer6, CubicSplineVec2Value, CubicSplineVec3Value, CubicSplineVec4Value, CubicSplineQuatValue, CubicSplineNumberValue;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); } /*
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
  function makeCubicSplineValueConstructor(name, ConstructorX, scaleFx, scaleAndAdd) {
    var _dec, _class, _class2, _initializer, _initializer2, _initializer3;
    var tempValue = new ConstructorX();
    var m0 = new ConstructorX();
    var m1 = new ConstructorX();
    var CubicSplineValueClass = (_dec = ccclass(name), _dec(_class = (_class2 = /*#__PURE__*/function () {
      function CubicSplineValueClass(dataPoint, inTangent, outTangent) {
        this.dataPoint = _initializer && _initializer();
        this.inTangent = _initializer2 && _initializer2();
        this.outTangent = _initializer3 && _initializer3();
        this.dataPoint = dataPoint || new ConstructorX();
        this.inTangent = inTangent || new ConstructorX();
        this.outTangent = outTangent || new ConstructorX();
      }
      var _proto = CubicSplineValueClass.prototype;
      _proto.lerp = function lerp(to, t, dt) {
        var p0 = this.dataPoint;
        var p1 = to.dataPoint;
        // dt => t_k+1 - t_k
        m0 = scaleFx(m0, this.inTangent, dt);
        m1 = scaleFx(m1, to.outTangent, dt);
        var t_3 = t * t * t;
        var t_2 = t * t;
        var f_0 = 2 * t_3 - 3 * t_2 + 1;
        var f_1 = t_3 - 2 * t_2 + t;
        var f_2 = -2 * t_3 + 3 * t_2;
        var f_3 = t_3 - t_2;
        tempValue = scaleFx(tempValue, p0, f_0);
        tempValue = scaleAndAdd(tempValue, tempValue, m0, f_1);
        tempValue = scaleAndAdd(tempValue, tempValue, p1, f_2);
        tempValue = scaleAndAdd(tempValue, tempValue, m1, f_3);
        return tempValue;
      };
      _proto.getNoLerp = function getNoLerp() {
        return this.dataPoint;
      };
      return CubicSplineValueClass;
    }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "dataPoint", [serializable], function () {
      return new ConstructorX();
    }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "inTangent", [serializable], function () {
      return new ConstructorX();
    }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "outTangent", [serializable], function () {
      return new ConstructorX();
    })), _class2)) || _class); // TODO: This comparison appears to be unintentional because the types 'new () => T' and 'typeof Quat' have no overlap. @Lelie Leight
    // Tracking issue: https://github.com/cocos/cocos-engine/issues/14640
    if (ConstructorX === Quat) {
      var _lerp = CubicSplineValueClass.prototype.lerp;
      CubicSplineValueClass.prototype.lerp = function (to, t, dt) {
        var result = _lerp.call(this, to, t, dt);
        Quat.normalize(result, result);
        return result;
      };
    }
    return CubicSplineValueClass;
  }

  /**
   * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
   */
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      Quat = _coreIndexJs.Quat;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
    }],
    execute: function () {
      _export("CubicSplineVec2Value", CubicSplineVec2Value = makeCubicSplineValueConstructor('cc.CubicSplineVec2Value', Vec2, Vec2.multiplyScalar, Vec2.scaleAndAdd));
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      _export("CubicSplineVec3Value", CubicSplineVec3Value = makeCubicSplineValueConstructor('cc.CubicSplineVec3Value', Vec3, Vec3.multiplyScalar, Vec3.scaleAndAdd));
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      _export("CubicSplineVec4Value", CubicSplineVec4Value = makeCubicSplineValueConstructor('cc.CubicSplineVec4Value', Vec4, Vec4.multiplyScalar, Vec4.scaleAndAdd));
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      _export("CubicSplineQuatValue", CubicSplineQuatValue = makeCubicSplineValueConstructor('cc.CubicSplineQuatValue', Quat, Quat.multiplyScalar, Quat.scaleAndAdd));
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      _export("CubicSplineNumberValue", CubicSplineNumberValue = (_dec2 = ccclass('cc.CubicSplineNumberValue'), _dec2(_class4 = (_class5 = /*#__PURE__*/function () {
        function CubicSplineNumberValue(dataPoint, inTangent, outTangent) {
          this.dataPoint = _initializer4 && _initializer4();
          this.inTangent = _initializer5 && _initializer5();
          this.outTangent = _initializer6 && _initializer6();
          this.dataPoint = dataPoint;
          this.inTangent = inTangent;
          this.outTangent = outTangent;
        }
        var _proto2 = CubicSplineNumberValue.prototype;
        _proto2.lerp = function lerp(to, t, dt) {
          var p0 = this.dataPoint;
          var p1 = to.dataPoint;
          // dt => t_k+1 - t_k
          var m0 = this.outTangent * dt;
          var m1 = to.inTangent * dt;
          var t_3 = t * t * t;
          var t_2 = t * t;
          var f_0 = 2 * t_3 - 3 * t_2 + 1;
          var f_1 = t_3 - 2 * t_2 + t;
          var f_2 = -2 * t_3 + 3 * t_2;
          var f_3 = t_3 - t_2;
          return p0 * f_0 + m0 * f_1 + p1 * f_2 + m1 * f_3;
        };
        _proto2.getNoLerp = function getNoLerp() {
          return this.dataPoint;
        };
        return CubicSplineNumberValue;
      }(), (_initializer4 = _applyDecoratedInitializer(_class5.prototype, "dataPoint", [serializable], function () {
        return 0;
      }), _initializer5 = _applyDecoratedInitializer(_class5.prototype, "inTangent", [serializable], function () {
        return 0;
      }), _initializer6 = _applyDecoratedInitializer(_class5.prototype, "outTangent", [serializable], function () {
        return 0;
      })), _class5)) || _class4));
    }
  };
});