System.register("q-bundled:///fs/cocos/animation/legacy-clip-data.js", ["./target-path.js", "../core/index.js", "./animation-curve.js", "./tracks/track.js", "./tracks/untyped-track.js", "./tracks/real-track.js", "./cubic-spline-value.js", "./tracks/color-track.js", "./tracks/vector-track.js", "./tracks/quat-track.js", "./tracks/object-track.js", "./tracks/size-track.js"], function (_export, _context) {
  "use strict";

  var ComponentPath, HierarchyPath, QuatInterpolationMode, RealInterpolationMode, TangentWeightMode, warnID, Color, Quat, Size, Vec2, Vec3, Vec4, assertIsTrue, EasingMethod, AnimCurve, RatioSampler, TrackPath, UntypedTrack, RealTrack, CubicSplineNumberValue, CubicSplineQuatValue, CubicSplineVec2Value, CubicSplineVec3Value, CubicSplineVec4Value, ColorTrack, VectorTrack, QuatTrack, ObjectTrack, SizeTrack, AnimationClipLegacyData, LegacyEasingMethodConverter, easingMethodNameMap;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
  function everyInstanceOf(array, constructor) {
    return array.every(function (element) {
      return element instanceof constructor;
    });
  }

  // #region Legacy data structures prior to 1.2

  /**
   * @returns Inserted keyframes count.
   */
  function applyLegacyEasingMethodName(easingMethodName, curve, keyframeIndex) {
    assertIsTrue(keyframeIndex !== curve.keyFramesCount - 1);
    assertIsTrue(easingMethodName in easingMethodNameMap);
    var keyframeValue = curve.getKeyframeValue(keyframeIndex);
    var easingMethod = easingMethodNameMap[easingMethodName];
    if (easingMethod === EasingMethod.CONSTANT) {
      keyframeValue.interpolationMode = RealInterpolationMode.CONSTANT;
    } else {
      keyframeValue.interpolationMode = RealInterpolationMode.LINEAR;
      keyframeValue.easingMethod = easingMethod;
    }
  }
  function applyLegacyEasingMethodNameIntoQuatCurve(easingMethodName, curve, keyframeIndex) {
    assertIsTrue(keyframeIndex !== curve.keyFramesCount - 1);
    assertIsTrue(easingMethodName in easingMethodNameMap);
    var keyframeValue = curve.getKeyframeValue(keyframeIndex);
    var easingMethod = easingMethodNameMap[easingMethodName];
    keyframeValue.easingMethod = easingMethod;
  }
  /**
   * Legacy curve uses time based bezier curve interpolation.
   * That's, interpolate time 'x'(time ratio between two frames, eg.[0, 1])
   * and then use the interpolated time to sample curve.
   * Now we need to compute the the end tangent of previous frame and the start tangent of the next frame.
   * @param timeBezierPoints Bezier points used for legacy time interpolation.
   * @param previousTime Time of the previous keyframe.
   * @param previousValue Value of the previous keyframe.
   * @param nextTime Time of the next keyframe.
   * @param nextValue Value of the next keyframe.
   */
  function timeBezierToTangents(timeBezierPoints, previousTime, previousKeyframe, nextTime, nextKeyframe) {
    var p1X = timeBezierPoints[0],
      p1Y = timeBezierPoints[1],
      p2X = timeBezierPoints[2],
      p2Y = timeBezierPoints[3];
    var previousValue = previousKeyframe.value;
    var nextValue = nextKeyframe.value;
    var dValue = nextValue - previousValue;
    var dTime = nextTime - previousTime;
    var fx = 3 * dTime;
    var fy = 3 * dValue;
    var t1x = p1X * fx;
    var t1y = p1Y * fy;
    var t2x = (1.0 - p2X) * fx;
    var t2y = (1.0 - p2Y) * fy;
    var ONE_THIRD = 1.0 / 3.0;
    var previousTangent = t1y / t1x;
    var previousTangentWeight = Math.sqrt(t1x * t1x + t1y * t1y) * ONE_THIRD;
    var nextTangent = t2y / t2x;
    var nextTangentWeight = Math.sqrt(t2x * t2x + t2y * t2y) * ONE_THIRD;
    previousKeyframe.interpolationMode = RealInterpolationMode.CUBIC;
    previousKeyframe.tangentWeightMode = ensureRightTangentWeightMode(previousKeyframe.tangentWeightMode);
    previousKeyframe.rightTangent = previousTangent;
    previousKeyframe.rightTangentWeight = previousTangentWeight;
    nextKeyframe.tangentWeightMode = ensureLeftTangentWeightMode(nextKeyframe.tangentWeightMode);
    nextKeyframe.leftTangent = nextTangent;
    nextKeyframe.leftTangentWeight = nextTangentWeight;
  }
  function ensureLeftTangentWeightMode(tangentWeightMode) {
    if (tangentWeightMode === TangentWeightMode.NONE) {
      return TangentWeightMode.LEFT;
    } else if (tangentWeightMode === TangentWeightMode.RIGHT) {
      return TangentWeightMode.BOTH;
    } else {
      return tangentWeightMode;
    }
  }
  function ensureRightTangentWeightMode(tangentWeightMode) {
    if (tangentWeightMode === TangentWeightMode.NONE) {
      return TangentWeightMode.RIGHT;
    } else if (tangentWeightMode === TangentWeightMode.LEFT) {
      return TangentWeightMode.BOTH;
    } else {
      return tangentWeightMode;
    }
  }

  // #region TODO: convert power easing method

  // type Powers = [number, number, number, number];

  // const POWERS_QUAD_IN: Powers = [0.0, 0.0, 1.0, 0.0]; // k * k
  // const POWERS_QUAD_OUT: Powers = [0.0, 2.0, -1.0, 0.0]; // k * (2 - k)
  // const POWERS_CUBIC_IN: Powers = [0.0, 0.0, 0.0, 1.0]; // k * k * k
  // const POWERS_CUBIC_OUT: Powers = [0.0, 0.0, 0.0, 1.0]; // --k * k * k + 1
  // const BACK_S = 1.70158;
  // const POWERS_BACK_IN: Powers = [1.0, 0.0, -BACK_S, BACK_S + 1.0]; // k * k * ((s + 1) * k - s)
  // const POWERS_BACK_OUT: Powers = [1.0, 0.0, BACK_S, BACK_S + 1.0]; // k * k * ((s + 1) * k - s)
  // const POWERS_SMOOTH: Powers = [0.0, 0.0, 3.0, -2.0]; // k * k * (3 - 2 * k)

  // function convertPowerMethod (curve: RealCurve, keyframeIndex: number, powers: Powers) {
  //     assertIsTrue(keyframeIndex !== curve.keyFramesCount - 1);
  //     const nextKeyframeIndex = keyframeIndex + 1;
  //     powerToTangents(
  //         powers,
  //         curve.getKeyframeTime(keyframeIndex),
  //         curve.getKeyframeValue(keyframeIndex),
  //         curve.getKeyframeTime(nextKeyframeIndex),
  //         curve.getKeyframeValue(nextKeyframeIndex),
  //     );
  //     return 0;
  // };

  // function convertInOutPowersMethod (curve: RealCurve, keyframeIndex: number, inPowers: Powers, outPowers: Powers) {
  //     assertIsTrue(keyframeIndex !== curve.keyFramesCount - 1);
  //     const nextKeyframeIndex = keyframeIndex + 1;
  //     const previousTime = curve.getKeyframeTime(keyframeIndex);
  //     const nextTime = curve.getKeyframeTime(nextKeyframeIndex);
  //     const previousKeyframeValue = curve.getKeyframeValue(keyframeIndex);
  //     const nextKeyframeValue = curve.getKeyframeValue(nextKeyframeIndex);
  //     const middleTime = previousTime + (nextTime - previousTime);
  //     const middleValue = previousKeyframeValue.value + (nextKeyframeValue.value - previousKeyframeValue.value);
  //     const middleKeyframeValue = curve.getKeyframeValue(curve.addKeyFrame(middleTime, middleValue));
  //     powerToTangents(
  //         inPowers,
  //         previousTime,
  //         previousKeyframeValue,
  //         middleTime,
  //         middleKeyframeValue,
  //     );
  //     powerToTangents(
  //         outPowers,
  //         middleTime,
  //         middleKeyframeValue,
  //         nextTime,
  //         nextKeyframeValue,
  //     );
  //     return 1;
  // };

  // function powerToTangents (
  //     [a, b, c, d]: [number, number, number, number],
  //     previousTime: number,
  //     previousKeyframe: RealKeyframeValue,
  //     nextTime: number,
  //     nextKeyframe: RealKeyframeValue,
  // ) {
  //     const bernstein = powerToBernstein([a, b, c, d]);
  //     const { value: previousValue } = previousKeyframe;
  //     const { value: nextValue } = nextKeyframe;
  //     timeBezierToTangents(
  //         [???????],
  //         previousTime,
  //         previousValue,
  //         nextTime,
  //         nextValue,
  //     );
  // }

  // function powerToBernstein ([p0, p1, p2, p3]: [number, number, number, number]) {
  //     // https://stackoverflow.com/questions/33859199/convert-polynomial-curve-to-bezier-curve-control-points
  //     // https://blog.demofox.org/2016/12/08/evaluating-polynomials-with-the-gpu-texture-sampler/
  //     const m00 = p0;
  //     const m01 = p1 / 3.0;
  //     const m02 = p2 / 3.0;
  //     const m03 = p3;
  //     const m10 = m00 + m01;
  //     const m11 = m01 + m02;
  //     const m12 = m02 + m03;
  //     const m20 = m10 + m11;
  //     const m21 = m11 + m12;
  //     const m30 = m20 + m21;
  //     const bernstein = new Float64Array(4);
  //     bernstein[0] = m00;
  //     bernstein[1] = m10;
  //     bernstein[2] = m20;
  //     bernstein[3] = m30;
  //     return bernstein;
  // }

  // #endregion
  _export("timeBezierToTangents", timeBezierToTangents);
  return {
    setters: [function (_targetPathJs) {
      ComponentPath = _targetPathJs.ComponentPath;
      HierarchyPath = _targetPathJs.HierarchyPath;
    }, function (_coreIndexJs) {
      QuatInterpolationMode = _coreIndexJs.QuatInterpolationMode;
      RealInterpolationMode = _coreIndexJs.RealInterpolationMode;
      TangentWeightMode = _coreIndexJs.TangentWeightMode;
      warnID = _coreIndexJs.warnID;
      Color = _coreIndexJs.Color;
      Quat = _coreIndexJs.Quat;
      Size = _coreIndexJs.Size;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      EasingMethod = _coreIndexJs.EasingMethod;
    }, function (_animationCurveJs) {
      AnimCurve = _animationCurveJs.AnimCurve;
      RatioSampler = _animationCurveJs.RatioSampler;
    }, function (_tracksTrackJs) {
      TrackPath = _tracksTrackJs.TrackPath;
    }, function (_tracksUntypedTrackJs) {
      UntypedTrack = _tracksUntypedTrackJs.UntypedTrack;
    }, function (_tracksRealTrackJs) {
      RealTrack = _tracksRealTrackJs.RealTrack;
    }, function (_cubicSplineValueJs) {
      CubicSplineNumberValue = _cubicSplineValueJs.CubicSplineNumberValue;
      CubicSplineQuatValue = _cubicSplineValueJs.CubicSplineQuatValue;
      CubicSplineVec2Value = _cubicSplineValueJs.CubicSplineVec2Value;
      CubicSplineVec3Value = _cubicSplineValueJs.CubicSplineVec3Value;
      CubicSplineVec4Value = _cubicSplineValueJs.CubicSplineVec4Value;
    }, function (_tracksColorTrackJs) {
      ColorTrack = _tracksColorTrackJs.ColorTrack;
    }, function (_tracksVectorTrackJs) {
      VectorTrack = _tracksVectorTrackJs.VectorTrack;
    }, function (_tracksQuatTrackJs) {
      QuatTrack = _tracksQuatTrackJs.QuatTrack;
    }, function (_tracksObjectTrackJs) {
      ObjectTrack = _tracksObjectTrackJs.ObjectTrack;
    }, function (_tracksSizeTrackJs) {
      SizeTrack = _tracksSizeTrackJs.SizeTrack;
    }],
    execute: function () {
      /**
       * 表示曲线值，曲线值可以是任意类型，但必须符合插值方式的要求。
       */
      /**
       * 表示曲线的目标对象。
       */
      /**
       * 内置帧时间渐变方式名称。
       */
      /**
       * 帧时间渐变方式。可能为内置帧时间渐变方式的名称或贝塞尔控制点。
       */
      // interface ConvertMap<TValue, TTrack> {
      //     valueConstructor: Constructor<TValue>;
      //     trackConstructor: Constructor<TTrack>;
      //     properties: [keyof TValue, number][];
      // }
      // const VECTOR_LIKE_CURVE_CONVERT_TABLE = [
      //     {
      //         valueConstructor: Size,
      //         trackConstructor: SizeTrack,
      //         properties: [['width', 0], ['height', 1]],
      //     } as ConvertMap<Size, SizeTrack>,
      //     {
      //         valueConstructor: Color,
      //         trackConstructor: ColorTrack,
      //         properties: [['r', 0], ['g', 1], ['b', 2], ['a', 3]],
      //     } as ConvertMap<Color, ColorTrack>,
      // ];
      _export("AnimationClipLegacyData", AnimationClipLegacyData = /*#__PURE__*/function () {
        function AnimationClipLegacyData(duration) {
          this._keys = [];
          this._curves = [];
          this._commonTargets = [];
          this._ratioSamplers = [];
          this._runtimeCurves = void 0;
          this._data = null;
          this._duration = void 0;
          this._duration = duration;
        }
        var _proto = AnimationClipLegacyData.prototype;
        _proto.getPropertyCurves = function getPropertyCurves() {
          if (!this._runtimeCurves) {
            this._createPropertyCurves();
          }
          return this._runtimeCurves;
        };
        _proto.toTracks = function toTracks() {
          var newTracks = [];
          var legacyKeys = this.keys,
            legacyCurves = this.curves,
            legacyCommonTargets = this.commonTargets;
          var convertTrackPath = function convertTrackPath(track, modifiers, valueAdapter) {
            var trackPath = new TrackPath();
            for (var _iterator = _createForOfIteratorHelperLoose(modifiers), _step; !(_step = _iterator()).done;) {
              var modifier = _step.value;
              if (typeof modifier === 'string') {
                trackPath.toProperty(modifier);
              } else if (typeof modifier === 'number') {
                trackPath.toElement(modifier);
              } else if (modifier instanceof HierarchyPath) {
                trackPath.toHierarchy(modifier.path);
              } else if (modifier instanceof ComponentPath) {
                trackPath.toComponent(modifier.component);
              } else {
                trackPath.toCustomized(modifier);
              }
            }
            track.path = trackPath;
            track.proxy = valueAdapter;
          };
          var untypedTracks = legacyCommonTargets.map(function (legacyCommonTarget) {
            var track = new UntypedTrack();
            convertTrackPath(track, legacyCommonTarget.modifiers, legacyCommonTarget.valueAdapter);
            newTracks.push(track);
            return track;
          });
          var _loop = function _loop() {
              var _legacyCurveData$inte;
              var legacyCurve = _step2.value;
              var legacyCurveData = legacyCurve.data;
              var legacyValues = legacyCurveData.values;
              if (legacyValues.length === 0) {
                // Legacy clip did not record type info.
                return 0; // continue
              }
              var legacyKeysIndex = legacyCurveData.keys;
              // Rule: negative index means single frame.
              var times = legacyKeysIndex < 0 ? [0.0] : legacyKeys[legacyCurveData.keys];
              var firstValue = legacyValues[0];
              // Rule: default to true.
              var interpolate = (_legacyCurveData$inte = legacyCurveData.interpolate) !== null && _legacyCurveData$inte !== void 0 ? _legacyCurveData$inte : true;
              // Rule: _arrayLength only used for morph target, internally.
              assertIsTrue(typeof legacyCurveData._arrayLength !== 'number' || typeof firstValue === 'number');
              var legacyEasingMethodConverter = new LegacyEasingMethodConverter(legacyCurveData, times.length);
              var installPathAndSetter = function installPathAndSetter(track) {
                convertTrackPath(track, legacyCurve.modifiers, legacyCurve.valueAdapter);
              };
              var legacyCommonTargetCurve;
              if (typeof legacyCurve.commonTarget === 'number') {
                // Rule: common targets should only target Vectors/`Size`/`Color`.
                if (!legacyValues.every(function (value) {
                  return typeof value === 'number';
                })) {
                  warnID(3932);
                  return 0; // continue
                }
                // Rule: Each curve that has common target should be numeric curve and targets string property.
                if (legacyCurve.valueAdapter || legacyCurve.modifiers.length !== 1 || typeof legacyCurve.modifiers[0] !== 'string') {
                  warnID(3933);
                  return 0; // continue
                }
                var _propertyName = legacyCurve.modifiers[0];
                var untypedTrack = untypedTracks[legacyCurve.commonTarget];
                var _untypedTrack$addChan = untypedTrack.addChannel(_propertyName),
                  curve = _untypedTrack$addChan.curve;
                legacyCommonTargetCurve = curve;
              }
              var convertCurve = function convertCurve() {
                if (typeof firstValue === 'number') {
                  if (!legacyValues.every(function (value) {
                    return typeof value === 'number';
                  })) {
                    warnID(3934);
                    return;
                  }
                  var realCurve;
                  if (legacyCommonTargetCurve) {
                    realCurve = legacyCommonTargetCurve;
                  } else {
                    var track = new RealTrack();
                    installPathAndSetter(track);
                    newTracks.push(track);
                    realCurve = track.channel.curve;
                  }
                  var interpolationMethod = interpolate ? RealInterpolationMode.LINEAR : RealInterpolationMode.CONSTANT;
                  realCurve.assignSorted(times, legacyValues.map(function (value) {
                    return {
                      value: value,
                      interpolationMode: interpolationMethod
                    };
                  }));
                  legacyEasingMethodConverter.convert(realCurve);
                  return;
                } else if (typeof firstValue === 'object') {
                  switch (true) {
                    default:
                      break;
                    case everyInstanceOf(legacyValues, Vec2):
                    case everyInstanceOf(legacyValues, Vec3):
                    case everyInstanceOf(legacyValues, Vec4):
                      {
                        var components = firstValue instanceof Vec2 ? 2 : firstValue instanceof Vec3 ? 3 : 4;
                        var _track = new VectorTrack();
                        installPathAndSetter(_track);
                        _track.componentsCount = components;
                        var _track$channels = _track.channels(),
                          x = _track$channels[0].curve,
                          y = _track$channels[1].curve,
                          z = _track$channels[2].curve,
                          w = _track$channels[3].curve;
                        var interpolationMode = interpolate ? RealInterpolationMode.LINEAR : RealInterpolationMode.CONSTANT;
                        var valueToFrame = function valueToFrame(value) {
                          return {
                            value: value,
                            interpolationMode: interpolationMode
                          };
                        };
                        switch (components) {
                          case 4:
                            w.assignSorted(times, legacyValues.map(function (value) {
                              return valueToFrame(value.w);
                            }));
                            legacyEasingMethodConverter.convert(w);
                          // falls through
                          case 3:
                            z.assignSorted(times, legacyValues.map(function (value) {
                              return valueToFrame(value.z);
                            }));
                            legacyEasingMethodConverter.convert(z);
                          // falls through
                          default:
                            x.assignSorted(times, legacyValues.map(function (value) {
                              return valueToFrame(value.x);
                            }));
                            legacyEasingMethodConverter.convert(x);
                            y.assignSorted(times, legacyValues.map(function (value) {
                              return valueToFrame(value.y);
                            }));
                            legacyEasingMethodConverter.convert(y);
                            break;
                        }
                        newTracks.push(_track);
                        return;
                      }
                    case everyInstanceOf(legacyValues, Quat):
                      {
                        var _track2 = new QuatTrack();
                        installPathAndSetter(_track2);
                        var _interpolationMode = interpolate ? QuatInterpolationMode.SLERP : QuatInterpolationMode.CONSTANT;
                        _track2.channel.curve.assignSorted(times, legacyValues.map(function (value) {
                          return {
                            value: Quat.clone(value),
                            interpolationMode: _interpolationMode
                          };
                        }));
                        legacyEasingMethodConverter.convertQuatCurve(_track2.channel.curve);
                        newTracks.push(_track2);
                        return;
                      }
                    case everyInstanceOf(legacyValues, Color):
                      {
                        var _track3 = new ColorTrack();
                        installPathAndSetter(_track3);
                        var _track3$channels = _track3.channels(),
                          r = _track3$channels[0].curve,
                          g = _track3$channels[1].curve,
                          b = _track3$channels[2].curve,
                          a = _track3$channels[3].curve;
                        var _interpolationMode2 = interpolate ? RealInterpolationMode.LINEAR : RealInterpolationMode.CONSTANT;
                        var _valueToFrame = function _valueToFrame(value) {
                          return {
                            value: value,
                            interpolationMode: _interpolationMode2
                          };
                        };
                        r.assignSorted(times, legacyValues.map(function (value) {
                          return _valueToFrame(value.r);
                        }));
                        legacyEasingMethodConverter.convert(r);
                        g.assignSorted(times, legacyValues.map(function (value) {
                          return _valueToFrame(value.g);
                        }));
                        legacyEasingMethodConverter.convert(g);
                        b.assignSorted(times, legacyValues.map(function (value) {
                          return _valueToFrame(value.b);
                        }));
                        legacyEasingMethodConverter.convert(b);
                        a.assignSorted(times, legacyValues.map(function (value) {
                          return _valueToFrame(value.a);
                        }));
                        legacyEasingMethodConverter.convert(a);
                        newTracks.push(_track3);
                        return;
                      }
                    case everyInstanceOf(legacyValues, Size):
                      {
                        var _track4 = new SizeTrack();
                        installPathAndSetter(_track4);
                        var _track4$channels = _track4.channels(),
                          width = _track4$channels[0].curve,
                          height = _track4$channels[1].curve;
                        var _interpolationMode3 = interpolate ? RealInterpolationMode.LINEAR : RealInterpolationMode.CONSTANT;
                        var _valueToFrame2 = function _valueToFrame2(value) {
                          return {
                            value: value,
                            interpolationMode: _interpolationMode3
                          };
                        };
                        width.assignSorted(times, legacyValues.map(function (value) {
                          return _valueToFrame2(value.width);
                        }));
                        legacyEasingMethodConverter.convert(width);
                        height.assignSorted(times, legacyValues.map(function (value) {
                          return _valueToFrame2(value.height);
                        }));
                        legacyEasingMethodConverter.convert(height);
                        newTracks.push(_track4);
                        return;
                      }
                    case everyInstanceOf(legacyValues, CubicSplineNumberValue):
                      {
                        assertIsTrue(legacyEasingMethodConverter.nil);
                        var _track5 = new RealTrack();
                        installPathAndSetter(_track5);
                        var _interpolationMode4 = interpolate ? RealInterpolationMode.CUBIC : RealInterpolationMode.CONSTANT;
                        _track5.channel.curve.assignSorted(times, legacyValues.map(function (value) {
                          return {
                            value: value.dataPoint,
                            leftTangent: value.inTangent,
                            rightTangent: value.outTangent,
                            interpolationMode: _interpolationMode4
                          };
                        }));
                        newTracks.push(_track5);
                        return;
                      }
                    case everyInstanceOf(legacyValues, CubicSplineVec2Value):
                    case everyInstanceOf(legacyValues, CubicSplineVec3Value):
                    case everyInstanceOf(legacyValues, CubicSplineVec4Value):
                      {
                        assertIsTrue(legacyEasingMethodConverter.nil);
                        var _components = firstValue instanceof CubicSplineVec2Value ? 2 : firstValue instanceof CubicSplineVec3Value ? 3 : 4;
                        var _track6 = new VectorTrack();
                        installPathAndSetter(_track6);
                        _track6.componentsCount = _components;
                        var _track6$channels = _track6.channels(),
                          _x = _track6$channels[0],
                          _y = _track6$channels[1],
                          _z = _track6$channels[2],
                          _w = _track6$channels[3];
                        var _interpolationMode5 = interpolate ? RealInterpolationMode.LINEAR : RealInterpolationMode.CONSTANT;
                        var _valueToFrame3 = function _valueToFrame3(value, inTangent, outTangent) {
                          return {
                            value: value,
                            leftTangent: inTangent,
                            rightTangent: outTangent,
                            interpolationMode: _interpolationMode5
                          };
                        };
                        switch (_components) {
                          case 4:
                            _w.curve.assignSorted(times, legacyValues.map(function (value) {
                              return _valueToFrame3(value.dataPoint.w, value.inTangent.w, value.outTangent.w);
                            }));
                          // falls through
                          case 3:
                            _z.curve.assignSorted(times, legacyValues.map(function (value) {
                              return _valueToFrame3(value.dataPoint.z, value.inTangent.z, value.outTangent.z);
                            }));
                          // falls through
                          default:
                            _x.curve.assignSorted(times, legacyValues.map(function (value) {
                              return _valueToFrame3(value.dataPoint.y, value.inTangent.y, value.outTangent.y);
                            }));
                            _y.curve.assignSorted(times, legacyValues.map(function (value) {
                              return _valueToFrame3(value.dataPoint.x, value.inTangent.x, value.outTangent.x);
                            }));
                            break;
                        }
                        newTracks.push(_track6);
                        return;
                      }
                    case legacyValues.every(function (value) {
                      return value instanceof CubicSplineQuatValue;
                    }):
                      {
                        warnID(3935);
                        break;
                      }
                  } // End switch
                }

                var objectTrack = new ObjectTrack();
                installPathAndSetter(objectTrack);
                objectTrack.channel.curve.assignSorted(times, legacyValues);
                newTracks.push(objectTrack);
              };
              convertCurve();
            },
            _ret;
          for (var _iterator2 = _createForOfIteratorHelperLoose(legacyCurves), _step2; !(_step2 = _iterator2()).done;) {
            _ret = _loop();
            if (_ret === 0) continue;
          }
          return newTracks;
        };
        _proto._createPropertyCurves = function _createPropertyCurves() {
          var _this = this;
          this._ratioSamplers = this._keys.map(function (keys) {
            return new RatioSampler(keys.map(function (key) {
              return key / _this._duration;
            }));
          });
          this._runtimeCurves = this._curves.map(function (targetCurve) {
            return {
              curve: new AnimCurve(targetCurve.data, _this._duration),
              modifiers: targetCurve.modifiers,
              valueAdapter: targetCurve.valueAdapter,
              sampler: _this._ratioSamplers[targetCurve.data.keys],
              commonTarget: targetCurve.commonTarget
            };
          });
        };
        _createClass(AnimationClipLegacyData, [{
          key: "keys",
          get: function get() {
            return this._keys;
          },
          set: function set(value) {
            this._keys = value;
          }
        }, {
          key: "curves",
          get: function get() {
            return this._curves;
          },
          set: function set(value) {
            this._curves = value;
            delete this._runtimeCurves;
          }
        }, {
          key: "commonTargets",
          get: function get() {
            return this._commonTargets;
          },
          set: function set(value) {
            this._commonTargets = value;
          }

          /**
           * 此动画的数据。
           */
        }, {
          key: "data",
          get: function get() {
            return this._data;
          }
        }]);
        return AnimationClipLegacyData;
      }());
      // #endregion
      LegacyEasingMethodConverter = /*#__PURE__*/function () {
        function LegacyEasingMethodConverter(legacyCurveData, keyframesCount) {
          this._easingMethods = void 0;
          var easingMethods = legacyCurveData.easingMethods;
          if (Array.isArray(easingMethods)) {
            // Different
            if (easingMethods.length === 0 && keyframesCount !== 0) {
              // This shall not happen as specified in doc on legacy easing methods
              // but it does in history project(see cocos-creator/3d-tasks/issues/#8468).
              // This may be a promise breaking BUG between engine & Editor.
              // Let's capture this case.
              this._easingMethods = new Array(keyframesCount).fill(null);
            } else {
              this._easingMethods = easingMethods;
            }
          } else if (easingMethods === undefined) {
            // Same
            this._easingMethods = new Array(keyframesCount).fill(legacyCurveData.easingMethod);
          } else {
            // Compressed as record
            this._easingMethods = Array.from({
              length: keyframesCount
            }, function (_, index) {
              var _easingMethods$index;
              return (_easingMethods$index = easingMethods[index]) !== null && _easingMethods$index !== void 0 ? _easingMethods$index : null;
            });
          }
        }
        var _proto2 = LegacyEasingMethodConverter.prototype;
        _proto2.convert = function convert(curve) {
          var easingMethods = this._easingMethods;
          if (!easingMethods) {
            return;
          }
          var nKeyframes = curve.keyFramesCount;
          if (curve.keyFramesCount < 2) {
            return;
          }
          if (Array.isArray(easingMethods)) {
            assertIsTrue(nKeyframes === easingMethods.length);
          }
          var iLastKeyframe = nKeyframes - 1;
          for (var iKeyframe = 0; iKeyframe < iLastKeyframe; ++iKeyframe) {
            var easingMethod = easingMethods[iKeyframe];
            if (!easingMethod) {
              continue;
            }
            if (Array.isArray(easingMethod)) {
              // Time bezier points
              timeBezierToTangents(easingMethod, curve.getKeyframeTime(iKeyframe), curve.getKeyframeValue(iKeyframe), curve.getKeyframeTime(iKeyframe + 1), curve.getKeyframeValue(iKeyframe + 1));
            } else {
              applyLegacyEasingMethodName(easingMethod, curve, iKeyframe);
            }
          }
        };
        _proto2.convertQuatCurve = function convertQuatCurve(curve) {
          var easingMethods = this._easingMethods;
          if (!easingMethods) {
            return;
          }
          var nKeyframes = curve.keyFramesCount;
          if (curve.keyFramesCount < 2) {
            return;
          }
          if (Array.isArray(easingMethods)) {
            assertIsTrue(nKeyframes === easingMethods.length);
          }
          var iLastKeyframe = nKeyframes - 1;
          for (var iKeyframe = 0; iKeyframe < iLastKeyframe; ++iKeyframe) {
            var easingMethod = easingMethods[iKeyframe];
            if (!easingMethod) {
              continue;
            }
            if (Array.isArray(easingMethod)) {
              curve.getKeyframeValue(iKeyframe).easingMethod = easingMethod.slice();
            } else {
              applyLegacyEasingMethodNameIntoQuatCurve(easingMethod, curve, iKeyframe);
            }
          }
        };
        _createClass(LegacyEasingMethodConverter, [{
          key: "nil",
          get: function get() {
            return !this._easingMethods || this._easingMethods.every(function (easingMethod) {
              return easingMethod === null || easingMethod === undefined;
            });
          }
        }]);
        return LegacyEasingMethodConverter;
      }();
      easingMethodNameMap = {
        constant: EasingMethod.CONSTANT,
        linear: EasingMethod.LINEAR,
        quadIn: EasingMethod.QUAD_IN,
        quadOut: EasingMethod.QUAD_OUT,
        quadInOut: EasingMethod.QUAD_IN_OUT,
        quadOutIn: EasingMethod.QUAD_OUT_IN,
        cubicIn: EasingMethod.CUBIC_IN,
        cubicOut: EasingMethod.CUBIC_OUT,
        cubicInOut: EasingMethod.CUBIC_IN_OUT,
        cubicOutIn: EasingMethod.CUBIC_OUT_IN,
        quartIn: EasingMethod.QUART_IN,
        quartOut: EasingMethod.QUART_OUT,
        quartInOut: EasingMethod.QUART_IN_OUT,
        quartOutIn: EasingMethod.QUART_OUT_IN,
        quintIn: EasingMethod.QUINT_IN,
        quintOut: EasingMethod.QUINT_OUT,
        quintInOut: EasingMethod.QUINT_IN_OUT,
        quintOutIn: EasingMethod.QUINT_OUT_IN,
        sineIn: EasingMethod.SINE_IN,
        sineOut: EasingMethod.SINE_OUT,
        sineInOut: EasingMethod.SINE_IN_OUT,
        sineOutIn: EasingMethod.SINE_OUT_IN,
        expoIn: EasingMethod.EXPO_IN,
        expoOut: EasingMethod.EXPO_OUT,
        expoInOut: EasingMethod.EXPO_IN_OUT,
        expoOutIn: EasingMethod.EXPO_OUT_IN,
        circIn: EasingMethod.CIRC_IN,
        circOut: EasingMethod.CIRC_OUT,
        circInOut: EasingMethod.CIRC_IN_OUT,
        circOutIn: EasingMethod.CIRC_OUT_IN,
        elasticIn: EasingMethod.ELASTIC_IN,
        elasticOut: EasingMethod.ELASTIC_OUT,
        elasticInOut: EasingMethod.ELASTIC_IN_OUT,
        elasticOutIn: EasingMethod.ELASTIC_OUT_IN,
        backIn: EasingMethod.BACK_IN,
        backOut: EasingMethod.BACK_OUT,
        backInOut: EasingMethod.BACK_IN_OUT,
        backOutIn: EasingMethod.BACK_OUT_IN,
        bounceIn: EasingMethod.BOUNCE_IN,
        bounceOut: EasingMethod.BOUNCE_OUT,
        bounceInOut: EasingMethod.BOUNCE_IN_OUT,
        bounceOutIn: EasingMethod.BOUNCE_OUT_IN,
        smooth: EasingMethod.SMOOTH,
        fade: EasingMethod.FADE
      };
    }
  };
});