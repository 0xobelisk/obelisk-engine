System.register("q-bundled:///fs/cocos/core/curves/keys-shared-curves.js", ["../algorithm/binary-search.js", "../data/decorators/index.js", "../data/utils/asserts.js", "../math/index.js", "./curve.js", "./quat-curve.js", "./real-curve-param.js"], function (_export, _context) {
  "use strict";

  var binarySearchEpsilon, ccclass, serializable, assertIsTrue, approx, lerp, Quat, ExtrapolationMode, QuatInterpolationMode, RealInterpolationMode, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _dec2, _class4, _class5, _initializer4, _dec3, _class7, _class8, _initializer5, DEFAULT_EPSILON, DefaultFloatArray, KeysSharedCurves, globalLocation, KeySharedRealCurves, cacheQuat1, cacheQuat2, KeySharedQuatCurves;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_algorithmBinarySearchJs) {
      binarySearchEpsilon = _algorithmBinarySearchJs.binarySearchEpsilon;
    }, function (_dataDecoratorsIndexJs) {
      ccclass = _dataDecoratorsIndexJs.ccclass;
      serializable = _dataDecoratorsIndexJs.serializable;
    }, function (_dataUtilsAssertsJs) {
      assertIsTrue = _dataUtilsAssertsJs.assertIsTrue;
    }, function (_mathIndexJs) {
      approx = _mathIndexJs.approx;
      lerp = _mathIndexJs.lerp;
      Quat = _mathIndexJs.Quat;
    }, function (_curveJs) {
      ExtrapolationMode = _curveJs.ExtrapolationMode;
    }, function (_quatCurveJs) {
      QuatInterpolationMode = _quatCurveJs.QuatInterpolationMode;
    }, function (_realCurveParamJs) {
      RealInterpolationMode = _realCurveParamJs.RealInterpolationMode;
    }],
    execute: function () {
      DEFAULT_EPSILON = 1e-5;
      DefaultFloatArray = Float32Array;
      /**
       * Considering most of model animations are baked and most of its curves share same times,
       * we do not have to do time searching for many times.
       */
      KeysSharedCurves = (_dec = ccclass('cc.KeySharedCurves'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function KeysSharedCurves(times) {
          this._times = _initializer && _initializer();
          this._optimized = _initializer2 && _initializer2();
          this._keyframesCount = _initializer3 && _initializer3();
          if (!times) {
            this._times = new DefaultFloatArray();
            return;
          }
          var nKeyframes = times.length;
          this._keyframesCount = nKeyframes;
          this._times = DefaultFloatArray.from(times);
          if (nKeyframes > 1) {
            var EPSILON = 1e-6;
            var lastDiff = 0.0;
            var mayBeOptimized = false;
            for (var iFrame = 1; iFrame < nKeyframes; iFrame++) {
              var curDiff = times[iFrame] - times[iFrame - 1];
              if (iFrame === 1) {
                lastDiff = curDiff;
              } else if (Math.abs(curDiff - lastDiff) > EPSILON) {
                mayBeOptimized = false;
                break;
              }
            }
            if (mayBeOptimized) {
              this._optimized = true;
              this._times = new DefaultFloatArray([this._times[0], this._times[1]]);
            }
          }
        }
        var _proto = KeysSharedCurves.prototype;
        _proto.matchTimes = function matchTimes(times, EPSILON) {
          var _this = this;
          if (EPSILON === void 0) {
            EPSILON = DEFAULT_EPSILON;
          }
          if (this._optimized) {
            var firstTime = this._times[0];
            var diff = this._times[1] - firstTime;
            return times.every(function (t, iKeyframe) {
              return approx(t, firstTime + diff * iKeyframe, EPSILON);
            });
          } else {
            return times.every(function (t, iKeyframe) {
              return approx(t, _this._times[iKeyframe], EPSILON);
            });
          }
        };
        _proto.getFirstTime = function getFirstTime() {
          return this._times[0];
        };
        _proto.getLastTime = function getLastTime() {
          if (!this._optimized) {
            return this._times[this._times.length - 1];
          } else {
            var diff = this._times[1] - this._times[0];
            return this._times[0] + diff * this._keyframesCount;
          }
        };
        _proto.calculateLocation = function calculateLocation(time, out) {
          var times = this._times,
            optimized = this._optimized,
            nKeyframes = this.keyframesCount;
          if (optimized) {
            var firstTime = times[0];
            var diff = times[1] - firstTime;
            var div = (time - firstTime) / diff;
            var previous = Math.floor(div);
            out.previous = previous;
            out.ratio = div - previous;
          } else {
            var index = binarySearchEpsilon(times, time);
            if (index >= 0) {
              // Exactly matched
              out.previous = index;
              out.ratio = 0.0;
            } else {
              var iNext = ~index;
              assertIsTrue(iNext >= 1 && iNext < nKeyframes);
              var iPrev = iNext - 1;
              var prevTime = times[iPrev];
              out.ratio = (time - prevTime) / (times[iNext] - prevTime);
              out.previous = iPrev;
            }
          }
          return out;
        };
        _createClass(KeysSharedCurves, [{
          key: "keyframesCount",
          get: function get() {
            return this._keyframesCount;
          }
        }]);
        return KeysSharedCurves;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_times", [serializable], null), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_optimized", [serializable], function () {
        return false;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_keyframesCount", [serializable], function () {
        return 0;
      })), _class2)) || _class);
      globalLocation = {
        previous: 0,
        ratio: 0
      };
      _export("KeySharedRealCurves", KeySharedRealCurves = (_dec2 = ccclass('cc.KeySharedRealCurves'), _dec2(_class4 = (_class5 = /*#__PURE__*/function (_KeysSharedCurves) {
        _inheritsLoose(KeySharedRealCurves, _KeysSharedCurves);
        function KeySharedRealCurves() {
          var _this2;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this2 = _KeysSharedCurves.call.apply(_KeysSharedCurves, [this].concat(args)) || this;
          _this2._curves = _initializer4 && _initializer4();
          return _this2;
        }
        KeySharedRealCurves.allowedForCurve = function allowedForCurve(curve) {
          return curve.postExtrapolation === ExtrapolationMode.CLAMP && curve.preExtrapolation === ExtrapolationMode.CLAMP && Array.from(curve.values()).every(function (value) {
            return value.interpolationMode === RealInterpolationMode.LINEAR;
          });
        };
        var _proto2 = KeySharedRealCurves.prototype;
        _proto2.matchCurve = function matchCurve(curve, EPSILON) {
          if (EPSILON === void 0) {
            EPSILON = DEFAULT_EPSILON;
          }
          if (curve.keyFramesCount !== this.keyframesCount) {
            return false;
          }
          var times = Array.from(curve.times());
          return _KeysSharedCurves.prototype.matchTimes.call(this, times, EPSILON);
        };
        _proto2.addCurve = function addCurve(curve) {
          assertIsTrue(curve.keyFramesCount === this.keyframesCount);
          this._curves.push({
            values: DefaultFloatArray.from(Array.from(curve.values()).map(function (_ref) {
              var value = _ref.value;
              return value;
            }))
          });
        };
        _proto2.evaluate = function evaluate(time, values) {
          var curves = this._curves,
            nKeyframes = this.keyframesCount;
          var nCurves = curves.length;
          assertIsTrue(values.length === nCurves);
          if (nKeyframes === 0) {
            return;
          }
          var firstTime = _KeysSharedCurves.prototype.getFirstTime.call(this);
          if (time <= firstTime) {
            for (var iCurve = 0; iCurve < nCurves; ++iCurve) {
              values[iCurve] = this._curves[iCurve].values[0];
            }
            return;
          }
          var lastTime = _KeysSharedCurves.prototype.getLastTime.call(this);
          if (time >= lastTime) {
            var iLastFrame = nKeyframes - 1;
            for (var _iCurve = 0; _iCurve < nCurves; ++_iCurve) {
              values[_iCurve] = this._curves[_iCurve].values[iLastFrame];
            }
            return;
          }
          var _KeysSharedCurves$pro = _KeysSharedCurves.prototype.calculateLocation.call(this, time, globalLocation),
            previous = _KeysSharedCurves$pro.previous,
            ratio = _KeysSharedCurves$pro.ratio;
          if (ratio !== 0.0) {
            for (var _iCurve2 = 0; _iCurve2 < nCurves; ++_iCurve2) {
              var curveValues = this._curves[_iCurve2].values;
              values[_iCurve2] = lerp(curveValues[previous], curveValues[previous + 1], ratio);
            }
          } else {
            for (var _iCurve3 = 0; _iCurve3 < nCurves; ++_iCurve3) {
              var _curveValues = this._curves[_iCurve3].values;
              values[_iCurve3] = _curveValues[previous];
            }
          }
        };
        _createClass(KeySharedRealCurves, [{
          key: "curveCount",
          get: function get() {
            return this._curves.length;
          }
        }]);
        return KeySharedRealCurves;
      }(KeysSharedCurves), (_initializer4 = _applyDecoratedInitializer(_class5.prototype, "_curves", [serializable], function () {
        return [];
      })), _class5)) || _class4));
      cacheQuat1 = new Quat();
      cacheQuat2 = new Quat();
      _export("KeySharedQuatCurves", KeySharedQuatCurves = (_dec3 = ccclass('cc.KeySharedQuatCurves'), _dec3(_class7 = (_class8 = /*#__PURE__*/function (_KeysSharedCurves2) {
        _inheritsLoose(KeySharedQuatCurves, _KeysSharedCurves2);
        function KeySharedQuatCurves() {
          var _this3;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this3 = _KeysSharedCurves2.call.apply(_KeysSharedCurves2, [this].concat(args)) || this;
          _this3._curves = _initializer5 && _initializer5();
          return _this3;
        }
        KeySharedQuatCurves.allowedForCurve = function allowedForCurve(curve) {
          return curve.postExtrapolation === ExtrapolationMode.CLAMP && curve.preExtrapolation === ExtrapolationMode.CLAMP && Array.from(curve.values()).every(function (value) {
            return value.interpolationMode === QuatInterpolationMode.SLERP;
          });
        };
        var _proto3 = KeySharedQuatCurves.prototype;
        _proto3.matchCurve = function matchCurve(curve, EPSILON) {
          if (EPSILON === void 0) {
            EPSILON = 1e-5;
          }
          if (curve.keyFramesCount !== this.keyframesCount) {
            return false;
          }
          var times = Array.from(curve.times());
          return _KeysSharedCurves2.prototype.matchTimes.call(this, times, EPSILON);
        };
        _proto3.addCurve = function addCurve(curve) {
          assertIsTrue(curve.keyFramesCount === this.keyframesCount);
          var values = new DefaultFloatArray(curve.keyFramesCount * 4);
          var nKeyframes = curve.keyFramesCount;
          for (var iKeyframe = 0; iKeyframe < nKeyframes; ++iKeyframe) {
            Quat.toArray(values, curve.getKeyframeValue(iKeyframe).value, 4 * iKeyframe);
          }
          this._curves.push({
            values: values
          });
        };
        _proto3.evaluate = function evaluate(time, values) {
          var curves = this._curves,
            nKeyframes = this.keyframesCount;
          var nCurves = curves.length;
          assertIsTrue(values.length === nCurves);
          if (nKeyframes === 0) {
            return;
          }
          var firstTime = _KeysSharedCurves2.prototype.getFirstTime.call(this);
          if (time <= firstTime) {
            for (var iCurve = 0; iCurve < nCurves; ++iCurve) {
              Quat.fromArray(values[iCurve], this._curves[iCurve].values, 0);
            }
            return;
          }
          var lastTime = _KeysSharedCurves2.prototype.getLastTime.call(this);
          if (time >= lastTime) {
            var iLastFrame = nKeyframes - 1;
            for (var _iCurve4 = 0; _iCurve4 < nCurves; ++_iCurve4) {
              Quat.fromArray(values[_iCurve4], this._curves[_iCurve4].values, iLastFrame * 4);
            }
            return;
          }
          var _KeysSharedCurves2$pr = _KeysSharedCurves2.prototype.calculateLocation.call(this, time, globalLocation),
            previous = _KeysSharedCurves2$pr.previous,
            ratio = _KeysSharedCurves2$pr.ratio;
          if (ratio !== 0.0) {
            for (var _iCurve5 = 0; _iCurve5 < nCurves; ++_iCurve5) {
              var curveValues = this._curves[_iCurve5].values;
              var q1 = Quat.fromArray(cacheQuat1, curveValues, previous * 4);
              var q2 = Quat.fromArray(cacheQuat2, curveValues, (previous + 1) * 4);
              Quat.slerp(values[_iCurve5], q1, q2, ratio);
            }
          } else {
            for (var _iCurve6 = 0; _iCurve6 < nCurves; ++_iCurve6) {
              Quat.fromArray(values[_iCurve6], this._curves[_iCurve6].values, previous * 4);
            }
          }
        };
        _createClass(KeySharedQuatCurves, [{
          key: "curveCount",
          get: function get() {
            return this._curves.length;
          }
        }]);
        return KeySharedQuatCurves;
      }(KeysSharedCurves), (_initializer5 = _applyDecoratedInitializer(_class8.prototype, "_curves", [serializable], function () {
        return [];
      })), _class8)) || _class7));
    }
  };
});