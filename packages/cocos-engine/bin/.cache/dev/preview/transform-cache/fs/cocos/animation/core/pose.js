System.register("q-bundled:///fs/cocos/animation/core/pose.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../core/data/utils/asserts.js", "./transform.js"], function (_export, _context) {
  "use strict";

  var DEBUG, lerp, assertIsTrue, Transform, __applyDeltaTransform, __calculateDeltaTransform, Pose, PoseTransformSpace, TransformFilter, blendIntoTransformArrayAt, calculateDeltaTransformArrayAt, applyDeltaTransformArrayAt;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function blendPoseInto(target, source, alpha, transformFilter) {
    if (transformFilter === void 0) {
      transformFilter = undefined;
    }
    blendTransformsInto(target.transforms, source.transforms, alpha, transformFilter);
    blendAuxiliaryCurvesInto(target.auxiliaryCurves, source.auxiliaryCurves, alpha);
  }
  function blendTransformsInto(target, source, alpha, transformFilter) {
    if (transformFilter === void 0) {
      transformFilter = undefined;
    }
    var nTransforms = target.length;
    assertIsTrue(nTransforms === target.length);
    if (alpha === 0) {
      return;
    } else if (alpha === 1) {
      if (!transformFilter) {
        target.set(source);
      } else {
        copyTransformsWithFilter(target, source, transformFilter);
      }
      return;
    }
    if (!transformFilter) {
      // Fast path.
      for (var iTransform = 0; iTransform < nTransforms; ++iTransform) {
        blendIntoTransformArrayAt(target, source, alpha, iTransform);
      }
    } else {
      // TODO: cannot use for-of statement for Readonly ArrayBuffer on TS 4.2 for OH platform, wait for they upgrade TS version.
      // issue: https://github.com/cocos/cocos-engine/issues/14715
      for (var index = 0; index < transformFilter.involvedTransforms.length; ++index) {
        var involvedTransformIndex = transformFilter.involvedTransforms[index];
        blendIntoTransformArrayAt(target, source, alpha, involvedTransformIndex);
      }
    }
  }
  function copyTransformsWithFilter(target, source, filter) {
    var nTransforms = target.length;
    assertIsTrue(nTransforms === target.length);
    // TODO: cannot use for-of statement for Readonly ArrayBuffer on TS 4.2 for OH platform, wait for they upgrade TS version.
    // issue: https://github.com/cocos/cocos-engine/issues/14715
    for (var index = 0; index < filter.involvedTransforms.length; ++index) {
      var involvedTransformIndex = filter.involvedTransforms[index];
      target.copyRange(involvedTransformIndex, source, involvedTransformIndex, 1);
    }
  }
  function blendAuxiliaryCurvesInto(target, source, alpha) {
    var nValues = source.length;
    assertIsTrue(nValues === target.length);
    for (var iValue = 0; iValue < nValues; ++iValue) {
      target[iValue] = lerp(target[iValue], source[iValue], alpha);
    }
  }
  function calculateDeltaPose(target, base) {
    calculateDeltaTransforms(target.transforms, base.transforms);
    calculateDeltaAuxiliaryCurves(target.auxiliaryCurves, base.auxiliaryCurves);
  }
  function calculateDeltaTransforms(target, base) {
    var nTransforms = target.length;
    assertIsTrue(nTransforms === base.length);
    for (var iTransform = 0; iTransform < nTransforms; ++iTransform) {
      calculateDeltaTransformArrayAt(target, base, iTransform);
    }
  }
  function calculateDeltaAuxiliaryCurves(target, base) {
    var nAuxiliaryCurves = target.length;
    assertIsTrue(nAuxiliaryCurves === base.length);
    for (var i = 0; i < target.length; ++i) {
      target[i] -= base[i];
    }
  }
  function applyDeltaPose(target, base, alpha, transformFilter) {
    if (transformFilter === void 0) {
      transformFilter = undefined;
    }
    applyDeltaTransforms(target.transforms, base.transforms, alpha, transformFilter);
    applyDeltaAuxiliaryCurves(target.auxiliaryCurves, base.auxiliaryCurves, alpha);
  }
  function applyDeltaTransforms(target, delta, alpha, transformFilter) {
    if (transformFilter === void 0) {
      transformFilter = undefined;
    }
    var nTransforms = target.length;
    assertIsTrue(nTransforms === delta.length);
    if (!transformFilter) {
      for (var iTransform = 0; iTransform < nTransforms; ++iTransform) {
        applyDeltaTransformArrayAt(target, delta, alpha, iTransform);
      }
    } else {
      // TODO: cannot use for-of statement for Readonly ArrayBuffer on TS 4.2 for OH platform, wait for they upgrade TS version.
      // issue: https://github.com/cocos/cocos-engine/issues/14715
      for (var index = 0; index < transformFilter.involvedTransforms.length; ++index) {
        var _transformIndex = transformFilter.involvedTransforms[index];
        applyDeltaTransformArrayAt(target, delta, alpha, _transformIndex);
      }
    }
  }
  function applyDeltaAuxiliaryCurves(target, delta, alpha) {
    var nAuxiliaryCurves = target.length;
    assertIsTrue(nAuxiliaryCurves === delta.length);
    for (var i = 0; i < target.length; ++i) {
      target[i] += delta[i] * alpha;
    }
  }
  _export({
    blendPoseInto: blendPoseInto,
    blendTransformsInto: blendTransformsInto,
    blendAuxiliaryCurvesInto: blendAuxiliaryCurvesInto,
    calculateDeltaPose: calculateDeltaPose,
    calculateDeltaTransforms: calculateDeltaTransforms,
    calculateDeltaAuxiliaryCurves: calculateDeltaAuxiliaryCurves,
    applyDeltaPose: applyDeltaPose,
    applyDeltaTransforms: applyDeltaTransforms,
    applyDeltaAuxiliaryCurves: applyDeltaAuxiliaryCurves,
    PoseTransformSpace: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      lerp = _coreIndexJs.lerp;
    }, function (_coreDataUtilsAssertsJs) {
      assertIsTrue = _coreDataUtilsAssertsJs.assertIsTrue;
    }, function (_transformJs) {
      Transform = _transformJs.Transform;
      __applyDeltaTransform = _transformJs.__applyDeltaTransform;
      __calculateDeltaTransform = _transformJs.__calculateDeltaTransform;
    }],
    execute: function () {
      _export("Pose", Pose = /*#__PURE__*/function () {
        function Pose(transforms, auxiliaryCurves) {
          this.transforms = void 0;
          this.auxiliaryCurves = void 0;
          /**
           * @internal
           */
          this._poseTransformSpace = PoseTransformSpace.LOCAL;
          this.transforms = transforms;
          this.auxiliaryCurves = auxiliaryCurves;
        }
        /**
         * @internal
         */
        Pose._create = function _create(transforms, auxiliaryCurves) {
          return new Pose(transforms, auxiliaryCurves);
        };
        return Pose;
      }());
      (function (PoseTransformSpace) {
        PoseTransformSpace[PoseTransformSpace["LOCAL"] = 0] = "LOCAL";
        PoseTransformSpace[PoseTransformSpace["COMPONENT"] = 1] = "COMPONENT";
      })(PoseTransformSpace || _export("PoseTransformSpace", PoseTransformSpace = {}));
      _export("TransformFilter", TransformFilter = /*#__PURE__*/function () {
        function TransformFilter(involvedTransforms) {
          if (DEBUG) {
            assertIsTrue(involvedTransforms.every(function (transformIndex) {
              return transformIndex < Math.pow(2, 16);
            }), 'The number of transforms exceeds the max allowed(2 ** 16)');
          }
          this._involvedTransforms = new Uint16Array(involvedTransforms);
        }
        _createClass(TransformFilter, [{
          key: "involvedTransforms",
          get: function get() {
            return this._involvedTransforms;
          }

          /**
           * ANOTHER IDEA: if we partition the indices into intervals,
           * can we achieve a better performance when do transform copy?
           *
           * For example: let every two elements of this array represents
           * an involved transform range: first index and end index.
           * For example, [1, 3, 4, 5, 5, 10] denotes the transform indices:
           * - [1, 3)  i.e indices 1, 2
           * - [4, 5)  i.e indices 4
           * - [5, 10) i.e indices 5, 6, 7, 8, 9
           * Its length always be multiple of 2.
           *
           * Obviously, the actual optimization effect is decided by the sparsity of the indices.
           *
           * ```ts
           * // Partition the ordered array in intervals.
           * let nIntervals = 0;
           * const intervals = new Uint32Array(involvedTransforms.length * 2); // Capacity, not size
           * for (let iBegin = 0; iBegin < involvedTransforms.length;) {
           *      const begin = involvedTransforms[iBegin];
           *      let iEnd = iBegin + 1;
           *      let end = begin + 1;
           *      for (; iEnd < involvedTransforms.length; ++iEnd, ++end) {
           *          if (intervals[iEnd] !== (end + 1)) {
           *              break;
           *          }
           *      }
           *      intervals[2 * nIntervals + 0] = begin;
           *      intervals[2 * nIntervals + 1] = end;
           *      ++nIntervals;
           *  }
           *
           * this._involvedTransformIntervals = intervals.slice(0, nIntervals * 2);
           * ```
           */
        }]);
        return TransformFilter;
      }());
      blendIntoTransformArrayAt = function () {
        var cacheTransformSource = new Transform();
        var cacheTransformTarget = new Transform();
        return function (target, source, alpha, transformIndex) {
          var transformTarget = target.getTransform(transformIndex, cacheTransformTarget);
          var transformSource = source.getTransform(transformIndex, cacheTransformSource);
          Transform.lerp(transformTarget, transformTarget, transformSource, alpha);
          target.setTransform(transformIndex, transformTarget);
        };
      }();
      calculateDeltaTransformArrayAt = function () {
        var cacheTransformBase = new Transform();
        var cacheTransformTarget = new Transform();
        return function (target, base, transformIndex) {
          var baseTransform = base.getTransform(transformIndex, cacheTransformBase);
          var targetTransform = target.getTransform(transformIndex, cacheTransformTarget);
          __calculateDeltaTransform(targetTransform, targetTransform, baseTransform);
          target.setTransform(transformIndex, targetTransform);
        };
      }();
      applyDeltaTransformArrayAt = function () {
        var cacheTransformDelta = new Transform();
        var cacheTransformTarget = new Transform();
        return function (target, delta, alpha, transformIndex) {
          var deltaTransform = delta.getTransform(transformIndex, cacheTransformDelta);
          var targetTransform = target.getTransform(transformIndex, cacheTransformTarget);
          __applyDeltaTransform(targetTransform, targetTransform, deltaTransform, alpha);
          target.setTransform(transformIndex, targetTransform);
        };
      }();
    }
  };
});