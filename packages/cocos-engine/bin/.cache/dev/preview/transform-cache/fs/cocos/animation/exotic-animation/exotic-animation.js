System.register("q-bundled:///fs/cocos/animation/exotic-animation/exotic-animation.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../core/data/utils/asserts.js", "../define.js", "../tracks/track.js"], function (_export, _context) {
  "use strict";

  var EDITOR, TEST, binarySearchEpsilon, lerp, Quat, Vec3, _decorator, assertIsTrue, CLASS_NAME_PREFIX_ANIM, TrackBinding, TrackPath, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, _initializer3, _initializer4, _initializer5, _dec3, _class7, _class8, _initializer6, _initializer7, _dec4, _class10, _dec5, _class11, _dec6, _class12, _class13, _initializer8, _initializer9, _dec7, _class20, _class21, _initializer10, _initializer11, _initializer12, _initializer13, SPLIT_METHOD_ENABLED, ccclass, serializable, ExoticAnimation, ExoticNodeAnimation, ExoticVectorLikeTrackValues, ExoticVec3TrackValues, ExoticQuatTrackValues, ExoticTrack, SplitInfo, ExoticTrsAnimationEvaluator, ExoticNodeAnimationEvaluator, ExoticTrackEvaluator, ExoticTrsAGEvaluation, ExoticNodeAnimationAGEvaluation, QUANTIZATION_TYPE_TO_ARRAY_VIEW_CONSTRUCTOR_MAP, FloatPrecision, QuantizedFloatArray;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function throwIfSplitMethodIsNotValid() {
    // TODO: better handling
    throw new Error("split() only valid in Editor.");
  }

  /**
   * Animation that:
   * - does not exposed by users;
   * - does not compatible with regular animation;
   * - non-editable;
   * - currently only generated imported from model file.
   */

  function floatToHashString(value) {
    // Note: referenced to `Skeleton.prototype.hash`
    return value.toPrecision(2);
  }
  function floatArrayToHashString(values) {
    return values.map(function (v) {
      return Number.parseFloat(floatToHashString(v));
    }).join(' ');
  }
  function splitVec3Track(track, from, to, splitInfoCache) {
    var _split = split(track.times, track.values, from, to, 3, Vec3, splitInfoCache),
      times = _split.times,
      values = _split.values;
    var vec3Values = ExoticVec3TrackValues.imitate(values, track.values);
    return new ExoticTrack(times, vec3Values);
  }
  function splitQuatTrack(track, from, to, splitInfoCache) {
    var _split2 = split(track.times, track.values, from, to, 4, Quat, splitInfoCache),
      times = _split2.times,
      values = _split2.values;
    var quatValues = ExoticQuatTrackValues.imitate(values, track.values);
    return new ExoticTrack(times, quatValues);
  }
  function split(times, values, from, to, components, ValueConstructor, splitInfoCache) {
    var TimeArrayConstructor = getFloatArrayConstructorWithPrecision(getFloatArrayPrecision(times));
    var ValueArrayConstructor = getFloatArrayConstructorWithPrecision(values.precision);
    var splitInfo = splitInfoCache;
    splitInfo.calculate(times, from, to);
    var preLerpIndex = splitInfo.preLerpIndex,
      preLerpRatio = splitInfo.preLerpRatio,
      directKeyframesBegin = splitInfo.directKeyframesBegin,
      directKeyframesEnd = splitInfo.directKeyframesEnd,
      postLerpIndex = splitInfo.postLerpIndex,
      postLerpRatio = splitInfo.postLerpRatio;
    var nNewKeyframes = splitInfo.keyframesCount;
    if (nNewKeyframes === 0) {
      return {
        times: new TimeArrayConstructor(0),
        values: new ValueArrayConstructor(0)
      };
    }
    var prevValue = new ValueConstructor();
    var nextValue = new ValueConstructor();
    var resultValue = new ValueConstructor();
    var newTimes = new TimeArrayConstructor(nNewKeyframes);
    var newValues = new ValueArrayConstructor(components * nNewKeyframes);
    var doLerp = function doLerp(index, ratio, outputIndex) {
      assertIsTrue(index < times.length - 1);
      var iPrevious = index;
      var iNext = index + 1;
      values.lerp(iPrevious, iNext, ratio, prevValue, nextValue, resultValue);
      newTimes[outputIndex] = lerp(times[iPrevious], times[iNext], ratio) - from;
      ValueConstructor.toArray(newValues, resultValue, components * outputIndex);
    };
    var iKeyframe = 0;
    if (preLerpIndex >= 0) {
      doLerp(preLerpIndex, preLerpRatio, iKeyframe);
      ++iKeyframe;
    }
    for (var _index = directKeyframesBegin; _index < directKeyframesEnd; ++_index, ++iKeyframe) {
      values.get(_index, resultValue);
      newTimes[iKeyframe] = times[_index] - from;
      ValueConstructor.toArray(newValues, resultValue, components * iKeyframe);
    }
    if (postLerpIndex >= 0) {
      doLerp(postLerpIndex, postLerpRatio, iKeyframe);
      ++iKeyframe;
    }
    assertIsTrue(iKeyframe === nNewKeyframes);
    return {
      times: newTimes,
      values: newValues
    };
  }
  function binarySearchRatio(values, value) {
    var nValues = values.length;
    assertIsTrue(values.length !== 0);
    var resultIndex = 0;
    var resultRatio = 0.0;
    var index0 = binarySearchEpsilon(values, value);
    if (index0 >= 0) {
      resultIndex = index0;
    } else {
      var iNext = ~index0;
      assertIsTrue(iNext !== 0 && iNext !== nValues && nValues > 1);
      var iPrev = iNext - 1;
      resultIndex = iPrev;
      var next = values[iNext];
      var prev = values[iPrev];
      resultRatio = (value - prev) / (next - prev);
    }
    return {
      index: resultIndex,
      ratio: resultRatio
    };
  }
  function sampleInput(values, time, result) {
    var nFrames = values.length;
    assertIsTrue(nFrames !== 0);
    var firstTime = values[0];
    var lastTime = values[nFrames - 1];
    if (time < firstTime) {
      result.just = true;
      result.index = 0;
    } else if (time > lastTime) {
      result.just = true;
      result.index = nFrames - 1;
    } else {
      var _index2 = binarySearchEpsilon(values, time);
      if (_index2 >= 0) {
        result.just = true;
        result.index = _index2;
      } else {
        var _nextIndex = ~_index2;
        assertIsTrue(_nextIndex !== 0 && _nextIndex !== nFrames && nFrames > 1);
        var _prevIndex = _nextIndex - 1;
        var prevTime = values[_prevIndex];
        var nextTime = values[_nextIndex];
        var _ratio = (time - values[_prevIndex]) / (nextTime - prevTime);
        result.just = false;
        result.index = _prevIndex;
        result.nextIndex = _nextIndex;
        result.ratio = _ratio;
      }
    }
    return result;
  }
  function getFloatArrayPrecision(array) {
    switch (array.BYTES_PER_ELEMENT) {
      default:
        assertIsTrue(false);
      // fallthrough
      case 4:
        return FloatPrecision.FLOAT_32;
      case 8:
        return FloatPrecision.FLOAT_64;
    }
  }
  function getFloatArrayConstructorWithPrecision(precision) {
    switch (precision) {
      default:
        assertIsTrue(false);
      // fallthrough
      case FloatPrecision.FLOAT_32:
        return Float32Array;
      case FloatPrecision.FLOAT_64:
        return Float64Array;
    }
  }
  function _quantize(values, type) {
    var TypedArrayViewConstructor = QUANTIZATION_TYPE_TO_ARRAY_VIEW_CONSTRUCTOR_MAP[type];
    var MAX = 1 << TypedArrayViewConstructor.BYTES_PER_ELEMENT;
    var min = Number.POSITIVE_INFINITY;
    var max = Number.NEGATIVE_INFINITY;
    values.forEach(function (value) {
      min = Math.min(value, min);
      max = Math.max(value, max);
    });
    var extent = max - min;
    // Should consider `extent === 0.0`.
    var normalized = TypedArrayViewConstructor.from(values, function (value) {
      return (value - min) / extent * MAX;
    });
    return new QuantizedFloatArray(getFloatArrayPrecision(values), normalized, extent, min);
  }
  function indexQuantized(quantized, index) {
    var quantizedValue = quantized.values[index];
    var MAX_VALUE = 1 << quantized.values.BYTES_PER_ELEMENT;
    return quantizedValue / MAX_VALUE * quantized.extent + quantized.min;
  }
  function createExoticTrackEvaluationRecord(times, values, ValueConstructor, path, property, binder) {
    var trackBinding = new TrackBinding();
    trackBinding.path = new TrackPath().toHierarchy(path).toProperty(property);
    var runtimeBinding = binder(trackBinding);
    if (!runtimeBinding) {
      return null;
    }
    var evaluator = new ExoticTrackEvaluator(times, values, ValueConstructor);
    return {
      runtimeBinding: runtimeBinding,
      evaluator: evaluator
    };
  }
  function loadVec3FromQuantized(values, index, out) {
    Vec3.set(out, indexQuantized(values, 3 * index + 0), indexQuantized(values, 3 * index + 1), indexQuantized(values, 3 * index + 2));
  }
  function loadQuatFromQuantized(values, index, out) {
    Quat.set(out, indexQuantized(values, 4 * index + 0), indexQuantized(values, 4 * index + 1), indexQuantized(values, 4 * index + 2), indexQuantized(values, 4 * index + 3));
  }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreIndexJs) {
      binarySearchEpsilon = _coreIndexJs.binarySearchEpsilon;
      lerp = _coreIndexJs.lerp;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      _decorator = _coreIndexJs._decorator;
    }, function (_coreDataUtilsAssertsJs) {
      assertIsTrue = _coreDataUtilsAssertsJs.assertIsTrue;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_tracksTrackJs) {
      TrackBinding = _tracksTrackJs.TrackBinding;
      TrackPath = _tracksTrackJs.TrackPath;
    }],
    execute: function () {
      SPLIT_METHOD_ENABLED = TEST || EDITOR;
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      _export("ExoticAnimation", ExoticAnimation = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "ExoticAnimation"), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function ExoticAnimation() {
          this._nodeAnimations = _initializer && _initializer();
        }
        var _proto = ExoticAnimation.prototype;
        _proto.createEvaluator = function createEvaluator(binder) {
          return new ExoticTrsAnimationEvaluator(this._nodeAnimations, binder);
        };
        _proto.createEvaluatorForAnimationGraph = function createEvaluatorForAnimationGraph(context) {
          return new ExoticTrsAGEvaluation(this._nodeAnimations, context);
        };
        _proto.addNodeAnimation = function addNodeAnimation(path) {
          var nodeAnimation = new ExoticNodeAnimation(path);
          this._nodeAnimations.push(nodeAnimation);
          return nodeAnimation;
        };
        _proto.collectAnimatedJoints = function collectAnimatedJoints() {
          return Array.from(new Set(this._nodeAnimations.map(function (_ref) {
            var path = _ref.path;
            return path;
          })));
        };
        _proto.split = function split(from, to) {
          if (!SPLIT_METHOD_ENABLED) {
            return throwIfSplitMethodIsNotValid();
          }
          var splitInfoCache = new SplitInfo();
          var newAnimation = new ExoticAnimation();
          newAnimation._nodeAnimations = this._nodeAnimations.map(function (nodeAnimation) {
            return nodeAnimation.split(from, to, splitInfoCache);
          });
          return newAnimation;
        }

        /**
         * @internal
         */;
        _proto.toHashString = function toHashString() {
          return this._nodeAnimations.map(function (nodeAnimation) {
            return nodeAnimation.toHashString();
          }).join('\n');
        };
        return ExoticAnimation;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_nodeAnimations", [serializable], function () {
        return [];
      })), _class2)) || _class));
      ExoticNodeAnimation = (_dec2 = ccclass(CLASS_NAME_PREFIX_ANIM + "ExoticNodeAnimation"), _dec2(_class4 = (_class5 = /*#__PURE__*/function () {
        function ExoticNodeAnimation(path) {
          this._path = _initializer2 && _initializer2();
          this._position = _initializer3 && _initializer3();
          this._rotation = _initializer4 && _initializer4();
          this._scale = _initializer5 && _initializer5();
          this._path = path;
        }
        var _proto2 = ExoticNodeAnimation.prototype;
        _proto2.createPosition = function createPosition(times, values) {
          this._position = new ExoticTrack(times, new ExoticVec3TrackValues(values));
        };
        _proto2.createRotation = function createRotation(times, values) {
          this._rotation = new ExoticTrack(times, new ExoticQuatTrackValues(values));
        };
        _proto2.createScale = function createScale(times, values) {
          this._scale = new ExoticTrack(times, new ExoticVec3TrackValues(values));
        };
        _proto2.createEvaluator = function createEvaluator(binder) {
          return new ExoticNodeAnimationEvaluator(this._path, this._position, this._rotation, this._scale, binder);
        };
        _proto2.createEvaluatorForAnimationGraph = function createEvaluatorForAnimationGraph(context) {
          var transformHandle = context.bindTransform(this._path);
          if (!transformHandle) {
            return null;
          }
          return new ExoticNodeAnimationAGEvaluation(transformHandle, this._position, this._rotation, this._scale);
        };
        _proto2.split = function split(from, to, splitInfoCache) {
          if (!SPLIT_METHOD_ENABLED) {
            return throwIfSplitMethodIsNotValid();
          }
          var newAnimation = new ExoticNodeAnimation(this._path);
          var position = this._position,
            rotation = this._rotation,
            scale = this._scale;
          if (position) {
            newAnimation._position = splitVec3Track(position, from, to, splitInfoCache);
          }
          if (rotation) {
            newAnimation._rotation = splitQuatTrack(rotation, from, to, splitInfoCache);
          }
          if (scale) {
            newAnimation._scale = splitVec3Track(scale, from, to, splitInfoCache);
          }
          return newAnimation;
        };
        /**
         * @internal
         */
        _proto2.toHashString = function toHashString() {
          var _this$_position$toHas, _this$_position, _this$_scale$toHashSt, _this$_scale, _this$_rotation$toHas, _this$_rotation;
          return this._path + "\n" + ((_this$_position$toHas = (_this$_position = this._position) === null || _this$_position === void 0 ? void 0 : _this$_position.toHashString()) !== null && _this$_position$toHas !== void 0 ? _this$_position$toHas : '') + ((_this$_scale$toHashSt = (_this$_scale = this._scale) === null || _this$_scale === void 0 ? void 0 : _this$_scale.toHashString()) !== null && _this$_scale$toHashSt !== void 0 ? _this$_scale$toHashSt : '') + ((_this$_rotation$toHas = (_this$_rotation = this._rotation) === null || _this$_rotation === void 0 ? void 0 : _this$_rotation.toHashString()) !== null && _this$_rotation$toHas !== void 0 ? _this$_rotation$toHas : '');
        };
        _createClass(ExoticNodeAnimation, [{
          key: "path",
          get: function get() {
            return this._path;
          }
        }]);
        return ExoticNodeAnimation;
      }(), (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "_path", [serializable], function () {
        return '';
      }), _initializer3 = _applyDecoratedInitializer(_class5.prototype, "_position", [serializable], function () {
        return null;
      }), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "_rotation", [serializable], function () {
        return null;
      }), _initializer5 = _applyDecoratedInitializer(_class5.prototype, "_scale", [serializable], function () {
        return null;
      })), _class5)) || _class4);
      ExoticVectorLikeTrackValues = (_dec3 = ccclass(CLASS_NAME_PREFIX_ANIM + "ExoticVectorLikeTrackValues"), _dec3(_class7 = (_class8 = /*#__PURE__*/function () {
        function ExoticVectorLikeTrackValues(values) {
          this._values = _initializer6 && _initializer6();
          this._isQuantized = _initializer7 && _initializer7();
          this._values = values;
        }
        var _proto3 = ExoticVectorLikeTrackValues.prototype;
        _proto3.quantize = function quantize(type) {
          assertIsTrue(!this._isQuantized);
          this._values = _quantize(this._values, type);
          this._isQuantized = true;
        }

        /**
         * @internal
         */;
        _proto3.toHashString = function toHashString() {
          var isQuantized = this._isQuantized,
            values = this._values;
          return isQuantized + " " + (isQuantized ? values.toHashString() : floatArrayToHashString(values));
        };
        _createClass(ExoticVectorLikeTrackValues, [{
          key: "precision",
          get: function get() {
            return this._isQuantized ? this._values.originalPrecision : getFloatArrayPrecision(this._values);
          }
        }]);
        return ExoticVectorLikeTrackValues;
      }(), (_initializer6 = _applyDecoratedInitializer(_class8.prototype, "_values", [serializable], null), _initializer7 = _applyDecoratedInitializer(_class8.prototype, "_isQuantized", [serializable], function () {
        return false;
      })), _class8)) || _class7);
      ExoticVec3TrackValues = (_dec4 = ccclass(CLASS_NAME_PREFIX_ANIM + "ExoticVec3TrackValues"), _dec4(_class10 = /*#__PURE__*/function (_ExoticVectorLikeTrac) {
        _inheritsLoose(ExoticVec3TrackValues, _ExoticVectorLikeTrac);
        function ExoticVec3TrackValues() {
          return _ExoticVectorLikeTrac.apply(this, arguments) || this;
        }
        ExoticVec3TrackValues.imitate = function imitate(values, model) {
          var trackValues = new ExoticVec3TrackValues(values);
          if (model._isQuantized) {
            trackValues.quantize(model._values.quantizationType);
          }
          return trackValues;
        };
        var _proto4 = ExoticVec3TrackValues.prototype;
        _proto4.get = function get(index, resultValue) {
          var values = this._values,
            isQuantized = this._isQuantized;
          if (isQuantized) {
            loadVec3FromQuantized(values, index, resultValue);
          } else {
            Vec3.fromArray(resultValue, values, index * 3);
          }
        };
        _proto4.lerp = function lerp(prevIndex, nextIndex, ratio, prevValue, nextValue, resultValue) {
          var values = this._values,
            isQuantized = this._isQuantized;
          if (isQuantized) {
            loadVec3FromQuantized(values, prevIndex, prevValue);
            loadVec3FromQuantized(values, nextIndex, nextValue);
          } else {
            Vec3.fromArray(prevValue, values, prevIndex * 3);
            Vec3.fromArray(nextValue, values, nextIndex * 3);
          }
          Vec3.lerp(resultValue, prevValue, nextValue, ratio);
        };
        return ExoticVec3TrackValues;
      }(ExoticVectorLikeTrackValues)) || _class10);
      ExoticQuatTrackValues = (_dec5 = ccclass(CLASS_NAME_PREFIX_ANIM + "ExoticQuatTrackValues"), _dec5(_class11 = /*#__PURE__*/function (_ExoticVectorLikeTrac2) {
        _inheritsLoose(ExoticQuatTrackValues, _ExoticVectorLikeTrac2);
        function ExoticQuatTrackValues() {
          return _ExoticVectorLikeTrac2.apply(this, arguments) || this;
        }
        ExoticQuatTrackValues.imitate = function imitate(values, model) {
          var trackValues = new ExoticQuatTrackValues(values);
          if (model._isQuantized) {
            trackValues.quantize(model._values.quantizationType);
          }
          return trackValues;
        };
        var _proto5 = ExoticQuatTrackValues.prototype;
        _proto5.get = function get(index, resultValue) {
          var values = this._values,
            isQuantized = this._isQuantized;
          if (isQuantized) {
            loadQuatFromQuantized(values, index, resultValue);
          } else {
            Quat.fromArray(resultValue, values, index * 4);
          }
        };
        _proto5.lerp = function lerp(prevIndex, nextIndex, ratio, prevValue, nextValue, resultValue) {
          var values = this._values,
            isQuantized = this._isQuantized;
          if (isQuantized) {
            loadQuatFromQuantized(values, prevIndex, prevValue);
            loadQuatFromQuantized(values, nextIndex, nextValue);
          } else {
            Quat.fromArray(prevValue, values, prevIndex * 4);
            Quat.fromArray(nextValue, values, nextIndex * 4);
          }
          Quat.slerp(resultValue, prevValue, nextValue, ratio);
        };
        return ExoticQuatTrackValues;
      }(ExoticVectorLikeTrackValues)) || _class11);
      ExoticTrack = (_dec6 = ccclass(CLASS_NAME_PREFIX_ANIM + "ExoticTrack"), _dec6(_class12 = (_class13 = /*#__PURE__*/function () {
        function ExoticTrack(times, values) {
          this.times = _initializer8 && _initializer8();
          this.values = _initializer9 && _initializer9();
          this.times = times;
          this.values = values;
        }
        var _proto6 = ExoticTrack.prototype;
        /**
         * @internal
         */
        _proto6.toHashString = function toHashString() {
          var times = this.times,
            values = this.values;
          return "times: " + floatArrayToHashString(times) + "; values: " + values.toHashString();
        };
        return ExoticTrack;
      }(), (_initializer8 = _applyDecoratedInitializer(_class13.prototype, "times", [serializable], null), _initializer9 = _applyDecoratedInitializer(_class13.prototype, "values", [serializable], null)), _class13)) || _class12);
      SplitInfo = /*#__PURE__*/function () {
        function SplitInfo() {
          this._reset();
        }
        var _proto7 = SplitInfo.prototype;
        _proto7.calculate = function calculate(times, from, to) {
          this._reset();
          if (from > to) {
            return;
          }
          var nKeyframes = times.length;
          if (!nKeyframes) {
            return;
          }
          var firstTime = times[0];
          var lastTime = times[nKeyframes - 1];
          var fromIndex = 0;
          var fromRatio = 0.0;
          if (from < firstTime) {
            // Leave as-is.
          } else if (from >= lastTime) {
            fromIndex = nKeyframes - 1;
            fromRatio = 0.0;
          } else {
            var _binarySearchRatio = binarySearchRatio(times, from);
            fromIndex = _binarySearchRatio.index;
            fromRatio = _binarySearchRatio.ratio;
          }
          var toIndex = 0;
          var toRatio = 0.0;
          if (to < firstTime) {
            // Leave as-is.
          } else if (to >= lastTime) {
            toIndex = nKeyframes - 1;
            toRatio = 0.0;
          } else {
            var _binarySearchRatio2 = binarySearchRatio(times, to);
            toIndex = _binarySearchRatio2.index;
            toRatio = _binarySearchRatio2.ratio;
          }
          assertIsTrue(toIndex >= fromIndex);
          var fromJust = !fromRatio;
          var toJust = !toRatio;

          // Handles that from and to are same
          if (fromIndex === toIndex && fromRatio === toRatio) {
            if (!fromJust) {
              this.preLerpIndex = fromIndex;
              this.preLerpRatio = fromRatio;
            } else {
              this.directKeyframesBegin = fromIndex;
              this.directKeyframesEnd = fromIndex + 1;
            }
            return;
          }
          if (!fromJust) {
            this.preLerpIndex = fromIndex;
            this.preLerpRatio = fromRatio;
          }
          this.directKeyframesBegin = fromJust ? fromIndex : fromIndex + 1;
          this.directKeyframesEnd = toIndex + 1;
          if (!toJust) {
            this.postLerpIndex = toIndex;
            this.postLerpRatio = toRatio;
          }
        };
        _proto7._reset = function _reset() {
          this.preLerpIndex = -1;
          this.preLerpRatio = 0.0;
          this.directKeyframesBegin = 0;
          this.directKeyframesEnd = 0;
          this.postLerpIndex = -1;
          this.postLerpRatio = 0.0;
        };
        _createClass(SplitInfo, [{
          key: "keyframesCount",
          get: function get() {
            var preLerpIndex = this.preLerpIndex,
              directKeyframesBegin = this.directKeyframesBegin,
              directKeyframesEnd = this.directKeyframesEnd,
              postLerpIndex = this.postLerpIndex;
            return 0 + (preLerpIndex < 0 ? 0 : 1) + (directKeyframesEnd - directKeyframesBegin) + (postLerpIndex < 0 ? 0 : 1);
          }
        }]);
        return SplitInfo;
      }();
      ExoticTrsAnimationEvaluator = /*#__PURE__*/function () {
        function ExoticTrsAnimationEvaluator(nodeAnimations, binder) {
          this._nodeEvaluations = void 0;
          this._nodeEvaluations = nodeAnimations.map(function (nodeAnimation) {
            return nodeAnimation.createEvaluator(binder);
          });
        }
        var _proto8 = ExoticTrsAnimationEvaluator.prototype;
        _proto8.evaluate = function evaluate(time) {
          this._nodeEvaluations.forEach(function (nodeEvaluator) {
            nodeEvaluator.evaluate(time);
          });
        };
        return ExoticTrsAnimationEvaluator;
      }();
      ExoticNodeAnimationEvaluator = /*#__PURE__*/function () {
        function ExoticNodeAnimationEvaluator(path, position, rotation, scale, binder) {
          this._position = null;
          this._rotation = null;
          this._scale = null;
          if (position) {
            this._position = createExoticTrackEvaluationRecord(position.times, position.values, Vec3, path, 'position', binder);
          }
          if (rotation) {
            this._rotation = createExoticTrackEvaluationRecord(rotation.times, rotation.values, Quat, path, 'rotation', binder);
          }
          if (scale) {
            this._scale = createExoticTrackEvaluationRecord(scale.times, scale.values, Vec3, path, 'scale', binder);
          }
        }
        var _proto9 = ExoticNodeAnimationEvaluator.prototype;
        _proto9.evaluate = function evaluate(time) {
          if (this._position) {
            var _value = this._position.evaluator.evaluate(time);
            this._position.runtimeBinding.setValue(_value);
          }
          if (this._rotation) {
            var _value2 = this._rotation.evaluator.evaluate(time);
            this._rotation.runtimeBinding.setValue(_value2);
          }
          if (this._scale) {
            var _value3 = this._scale.evaluator.evaluate(time);
            this._scale.runtimeBinding.setValue(_value3);
          }
        };
        return ExoticNodeAnimationEvaluator;
      }();
      ExoticTrackEvaluator = /*#__PURE__*/function () {
        function ExoticTrackEvaluator(times, values, ValueConstructor) {
          this._times = void 0;
          this._inputSampleResultCache = {
            just: false,
            index: -1,
            nextIndex: -1,
            ratio: 0.0
          };
          this._values = void 0;
          this._prevValue = void 0;
          this._nextValue = void 0;
          this._resultValue = void 0;
          this._times = times;
          this._values = values;
          this._prevValue = new ValueConstructor();
          this._nextValue = new ValueConstructor();
          this._resultValue = new ValueConstructor();
        }
        var _proto10 = ExoticTrackEvaluator.prototype;
        _proto10.evaluate = function evaluate(time) {
          var times = this._times,
            values = this._values,
            resultValue = this._resultValue;
          var nFrames = times.length;
          if (nFrames === 0) {
            return resultValue;
          }
          var inputSampleResult = sampleInput(times, time, this._inputSampleResultCache);
          if (inputSampleResult.just) {
            values.get(inputSampleResult.index, resultValue);
          } else {
            values.lerp(inputSampleResult.index, inputSampleResult.nextIndex, inputSampleResult.ratio, this._prevValue, this._nextValue, resultValue);
          }
          return resultValue;
        };
        return ExoticTrackEvaluator;
      }();
      /**
       * Exotic TRS animation graph evaluator.
       */
      _export("ExoticTrsAGEvaluation", ExoticTrsAGEvaluation = /*#__PURE__*/function () {
        function ExoticTrsAGEvaluation(nodeAnimations, context) {
          this._nodeEvaluations = void 0;
          this._nodeEvaluations = nodeAnimations.map(function (nodeAnimation) {
            return nodeAnimation.createEvaluatorForAnimationGraph(context);
          }).filter(function (x) {
            return !!x;
          });
        }
        var _proto11 = ExoticTrsAGEvaluation.prototype;
        _proto11.destroy = function destroy() {
          var nodeEvaluations = this._nodeEvaluations;
          var nNodeEvaluations = nodeEvaluations.length;
          for (var iNodeEvaluation = 0; iNodeEvaluation < nNodeEvaluations; ++iNodeEvaluation) {
            nodeEvaluations[iNodeEvaluation].destroy();
          }
        };
        _proto11.evaluate = function evaluate(time, pose) {
          var nodeEvaluations = this._nodeEvaluations;
          var nNodeEvaluations = nodeEvaluations.length;
          for (var iNodeEvaluation = 0; iNodeEvaluation < nNodeEvaluations; ++iNodeEvaluation) {
            nodeEvaluations[iNodeEvaluation].evaluate(time, pose);
          }
        };
        return ExoticTrsAGEvaluation;
      }());
      ExoticNodeAnimationAGEvaluation = /*#__PURE__*/function () {
        function ExoticNodeAnimationAGEvaluation(transformHandle, position, rotation, scale) {
          this._position = null;
          this._rotation = null;
          this._scale = null;
          this._transformHandle = void 0;
          this._transformHandle = transformHandle;
          if (position) {
            this._position = new ExoticTrackEvaluator(position.times, position.values, Vec3);
          }
          if (rotation) {
            this._rotation = new ExoticTrackEvaluator(rotation.times, rotation.values, Quat);
          }
          if (scale) {
            this._scale = new ExoticTrackEvaluator(scale.times, scale.values, Vec3);
          }
        }
        var _proto12 = ExoticNodeAnimationAGEvaluation.prototype;
        _proto12.destroy = function destroy() {
          this._transformHandle.destroy();
        };
        _proto12.evaluate = function evaluate(time, pose) {
          var transformIndex = this._transformHandle.index,
            position = this._position,
            rotation = this._rotation,
            scale = this._scale;
          var poseTransforms = pose.transforms;
          if (position) {
            var _value4 = position.evaluate(time);
            poseTransforms.setPosition(transformIndex, _value4);
          }
          if (rotation) {
            var rotationAbs = rotation.evaluate(time);
            poseTransforms.setRotation(transformIndex, rotationAbs);
          }
          if (scale) {
            var _value5 = scale.evaluate(time);
            poseTransforms.setScale(transformIndex, _value5);
          }
        };
        return ExoticNodeAnimationAGEvaluation;
      }();
      QUANTIZATION_TYPE_TO_ARRAY_VIEW_CONSTRUCTOR_MAP = {
        uint8: Uint8Array,
        uint16: Uint16Array
      };
      (function (FloatPrecision) {
        FloatPrecision[FloatPrecision["FLOAT_32"] = 0] = "FLOAT_32";
        FloatPrecision[FloatPrecision["FLOAT_64"] = 1] = "FLOAT_64";
      })(FloatPrecision || (FloatPrecision = {}));
      QuantizedFloatArray = (_dec7 = ccclass(CLASS_NAME_PREFIX_ANIM + "QuantizedFloatArray"), _dec7(_class20 = (_class21 = /*#__PURE__*/function () {
        function QuantizedFloatArray(originalPrecision, values, extent, min) {
          if (min === void 0) {
            min = 0.0;
          }
          this.originalPrecision = _initializer10 && _initializer10();
          this.min = _initializer11 && _initializer11();
          this.extent = _initializer12 && _initializer12();
          this.values = _initializer13 && _initializer13();
          this.originalPrecision = originalPrecision;
          this.values = values;
          this.extent = extent;
          this.min = min;
        }

        /**
         * @internal
         */
        var _proto13 = QuantizedFloatArray.prototype;
        _proto13.toHashString = function toHashString() {
          var originalPrecision = this.originalPrecision,
            min = this.min,
            extent = this.extent,
            values = this.values;
          return originalPrecision + " " + floatToHashString(min) + " " + floatToHashString(extent) + " " + values.join(' ');
        };
        _createClass(QuantizedFloatArray, [{
          key: "quantizationType",
          get: function get() {
            switch (this.values.BYTES_PER_ELEMENT) {
              default:
              // fallthrough
              case 1:
                return 'uint8';
              case 2:
                return 'uint16';
            }
          }
        }]);
        return QuantizedFloatArray;
      }(), (_initializer10 = _applyDecoratedInitializer(_class21.prototype, "originalPrecision", [serializable], null), _initializer11 = _applyDecoratedInitializer(_class21.prototype, "min", [serializable], null), _initializer12 = _applyDecoratedInitializer(_class21.prototype, "extent", [serializable], null), _initializer13 = _applyDecoratedInitializer(_class21.prototype, "values", [serializable], null)), _class21)) || _class20);
    }
  };
});