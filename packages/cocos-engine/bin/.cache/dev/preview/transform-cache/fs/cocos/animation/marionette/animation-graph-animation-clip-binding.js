System.register("q-bundled:///fs/cocos/animation/marionette/animation-graph-animation-clip-binding.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../core/data/utils/asserts.js", "../../scene-graph/node.js", "../animation-clip.js", "../core/pose.js", "../define.js", "../tracks/track.js", "../tracks/untyped-track.js"], function (_export, _context) {
  "use strict";

  var DEBUG, Quat, Vec3, warnID, assertIsTrue, Node, additiveSettingsTag, exoticAnimationTag, calculateDeltaPose, createEvalSymbol, isTrsPropertyName, normalizedFollowTag, trackBindingTag, UntypedTrack, CACHE_VEC3_GET_VALUE, CACHE_QUAT_GET_VALUE, PoseBindingBase, PosePositionBinding, PoseRotationBinding, PoseEulerAnglesBinding, PoseScaleBinding, AuxiliaryCurveBinding, NonTransformPoseBinding, AGTrackEvaluation, AuxiliaryCurveEvaluation, AnimationClipAGEvaluationRegular, AnimationClipAGEvaluationAdditive;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  /**
   * Creates a corresponding pose binding.
   * @param transformHandle Handle to the transform.
   * @param propertyKey Indicates the binding type.
   * @returns The pose binding.
   */
  // eslint-disable-next-line consistent-return
  function bindPoseTransform(transformHandle, propertyKey) {
    switch (propertyKey) {
      case 'position':
        return new PosePositionBinding(transformHandle);
      case 'rotation':
        return new PoseRotationBinding(transformHandle);
      case 'eulerAngles':
        return new PoseEulerAnglesBinding(transformHandle);
      case 'scale':
        return new PoseScaleBinding(transformHandle);
      default:
        assertIsTrue(false);
    }
  }
  function bindTrackAG(animationClip, track, bindContext) {
    var trackBinding = track[trackBindingTag];
    var trackTarget = createRuntimeBindingAG(trackBinding, bindContext);
    if (DEBUG && !trackTarget) {
      // If we got a null track target here, we should already have warn logged,
      // To elaborate on error details, we warn here as well.
      // Note: if in the future this log appears alone,
      // it must be a BUG which break promise by above statement.
      warnID(3937, animationClip.name, bindContext.origin.name);
    }
    return trackTarget !== null && trackTarget !== void 0 ? trackTarget : undefined;
  }
  function createRuntimeBindingAG(track, bindContext) {
    var origin = bindContext.origin;
    var path = track.path,
      proxy = track.proxy;
    var nPaths = path.length;
    var iLastPath = nPaths - 1;
    if (nPaths !== 0 && (path.isPropertyAt(iLastPath) || path.isElementAt(iLastPath)) && !proxy) {
      var lastPropertyKey = path.isPropertyAt(iLastPath) ? path.parsePropertyAt(iLastPath) : path.parseElementAt(iLastPath);
      var resultTarget = path[normalizedFollowTag](origin, 0, nPaths - 1);
      if (resultTarget === null) {
        return null;
      }
      if (resultTarget instanceof Node && isTrsPropertyName(lastPropertyKey)) {
        var transformPath = function () {
          var segments = [];
          var node = resultTarget;
          for (; node && node !== origin; node = node.parent) {
            segments.unshift(node.name);
          }
          if (node === origin) {
            return segments.join('/');
          } else {
            return undefined;
          }
        }();
        if (typeof transformPath === 'string') {
          var transformHandle = bindContext.bindTransform(transformPath);
          if (!transformHandle) {
            return undefined;
          }
          return bindPoseTransform(transformHandle, lastPropertyKey);
        }
      }
    }

    // If this path does not aim a transform target,
    // we create `NonTransformPoseBinding` using default binding.
    {
      var nonTransformBinding = track.createRuntimeBinding(bindContext.origin, undefined, false);
      if (!nonTransformBinding) {
        return null;
      }
      return new NonTransformPoseBinding(nonTransformBinding);
    }
  }
  function createAnimationAGEvaluation(clip, context) {
    if (clip.isAdditive_experimental) {
      return new AnimationClipAGEvaluationAdditive(clip, context);
    } else {
      return new AnimationClipAGEvaluationRegular(clip, context);
    }
  }
  _export("createAnimationAGEvaluation", createAnimationAGEvaluation);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      warnID = _coreIndexJs.warnID;
    }, function (_coreDataUtilsAssertsJs) {
      assertIsTrue = _coreDataUtilsAssertsJs.assertIsTrue;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_animationClipJs) {
      additiveSettingsTag = _animationClipJs.additiveSettingsTag;
      exoticAnimationTag = _animationClipJs.exoticAnimationTag;
    }, function (_corePoseJs) {
      calculateDeltaPose = _corePoseJs.calculateDeltaPose;
    }, function (_defineJs) {
      createEvalSymbol = _defineJs.createEvalSymbol;
    }, function (_tracksTrackJs) {
      isTrsPropertyName = _tracksTrackJs.isTrsPropertyName;
      normalizedFollowTag = _tracksTrackJs.normalizedFollowTag;
      trackBindingTag = _tracksTrackJs.trackBindingTag;
    }, function (_tracksUntypedTrackJs) {
      UntypedTrack = _tracksUntypedTrackJs.UntypedTrack;
    }],
    execute: function () {
      /**
       * This module contains utilities to marry animation clip with animation graph.
       *
       * A typical workflow is:
       *
       * At initial, an animation clip is bound to animation graph in `AnimationClipGraphBindingContext`,
       * an `AnimationClipAGEvaluation` is created after this phase to track the evaluation.
       *
       * Then at each frame, `AnimationClipAGEvaluation.evaluate()` is called,
       * passed with the current `AnimationClipGraphEvaluationContext`.
       * The evaluation context gives the pose that need to be filled,
       * then animation clip emplaces sampled animation data into the pose.
       */
      /**
       * The context in which animation clips can be bound in an animation graph.
       */
      /**
       * The context in which animation clips can evaluate during animation graph evaluation.
       * Currently, the context is just the output pose.
       */
      /**
       * A pose binding describes how to get/set part of a bound transform in animation graph.
       * The `T` can be `Vec3`, `Quat` for now.
       */
      CACHE_VEC3_GET_VALUE = new Vec3();
      CACHE_QUAT_GET_VALUE = new Quat();
      /**
       * The pose binding base is base class of all pose binding classes.
       * It holds a transform handle.
       */
      PoseBindingBase = /*#__PURE__*/function () {
        function PoseBindingBase(transformHandle) {
          this._transformHandle = transformHandle;
        }

        /**
         * Releases the held transform handle.
         */
        var _proto = PoseBindingBase.prototype;
        _proto.destroy = function destroy() {
          this._transformHandle.destroy();
        }

        /**
         * The held transform handle.
         */;
        return PoseBindingBase;
      }();
      /**
       * The pose position binding describes how to get/set the position of a bound transform in animation graph.
       */
      PosePositionBinding = /*#__PURE__*/function (_PoseBindingBase) {
        _inheritsLoose(PosePositionBinding, _PoseBindingBase);
        function PosePositionBinding() {
          return _PoseBindingBase.apply(this, arguments) || this;
        }
        var _proto2 = PosePositionBinding.prototype;
        _proto2.setValue = function setValue(value, pose) {
          pose.transforms.setPosition(this._transformHandle.index, value);
        };
        _proto2.getValue = function getValue(pose) {
          return pose.transforms.getPosition(this._transformHandle.index, CACHE_VEC3_GET_VALUE);
        };
        return PosePositionBinding;
      }(PoseBindingBase);
      /**
       * The pose rotation binding describes how to get/set the rotation(in quaternion) of a bound transform in animation graph.
       */
      PoseRotationBinding = /*#__PURE__*/function (_PoseBindingBase2) {
        _inheritsLoose(PoseRotationBinding, _PoseBindingBase2);
        function PoseRotationBinding() {
          return _PoseBindingBase2.apply(this, arguments) || this;
        }
        var _proto3 = PoseRotationBinding.prototype;
        _proto3.setValue = function setValue(value, pose) {
          pose.transforms.setRotation(this._transformHandle.index, value);
        };
        _proto3.getValue = function getValue(pose) {
          return pose.transforms.getRotation(this._transformHandle.index, CACHE_QUAT_GET_VALUE);
        };
        return PoseRotationBinding;
      }(PoseBindingBase);
      /**
       * The pose euler angles binding describes how to get/set the rotation(in euler angles) of a bound transform in animation graph.
       */
      PoseEulerAnglesBinding = /*#__PURE__*/function (_PoseBindingBase3) {
        _inheritsLoose(PoseEulerAnglesBinding, _PoseBindingBase3);
        function PoseEulerAnglesBinding() {
          return _PoseBindingBase3.apply(this, arguments) || this;
        }
        var _proto4 = PoseEulerAnglesBinding.prototype;
        _proto4.setValue = function setValue(value, pose) {
          var quat = Quat.fromEuler(PoseEulerAnglesBinding._EULER_TO_QUAT_CACHE, value.x, value.y, value.z);
          pose.transforms.setRotation(this._transformHandle.index, quat);
        };
        _proto4.getValue = function getValue(pose) {
          var q = pose.transforms.getRotation(this._transformHandle.index, CACHE_QUAT_GET_VALUE);
          return Quat.toEuler(CACHE_VEC3_GET_VALUE, q);
        };
        return PoseEulerAnglesBinding;
      }(PoseBindingBase);
      /**
       * The pose euler scale binding describes how to get/set the scale of a bound transform in animation graph.
       */
      PoseEulerAnglesBinding._EULER_TO_QUAT_CACHE = new Quat();
      PoseScaleBinding = /*#__PURE__*/function (_PoseBindingBase4) {
        _inheritsLoose(PoseScaleBinding, _PoseBindingBase4);
        function PoseScaleBinding() {
          return _PoseBindingBase4.apply(this, arguments) || this;
        }
        var _proto5 = PoseScaleBinding.prototype;
        _proto5.setValue = function setValue(value, pose) {
          pose.transforms.setScale(this._transformHandle.index, value);
        };
        _proto5.getValue = function getValue(pose) {
          return pose.transforms.getScale(this._transformHandle.index, CACHE_VEC3_GET_VALUE);
        };
        return PoseScaleBinding;
      }(PoseBindingBase);
      AuxiliaryCurveBinding = /*#__PURE__*/function () {
        function AuxiliaryCurveBinding(_handle) {
          this._handle = _handle;
        }
        var _proto6 = AuxiliaryCurveBinding.prototype;
        _proto6.destroy = function destroy() {
          this._handle.destroy();
        };
        _proto6.setValue = function setValue(value, pose) {
          pose.auxiliaryCurves[this._handle.index] = value;
        };
        _proto6.getValue = function getValue(pose) {
          return pose.auxiliaryCurves[this._handle.index];
        };
        return AuxiliaryCurveBinding;
      }();
      NonTransformPoseBinding = /*#__PURE__*/function () {
        function NonTransformPoseBinding(binding) {
          this.binding = binding;
        }
        var _proto7 = NonTransformPoseBinding.prototype;
        _proto7.destroy = function destroy() {
          // Needs no destroy.
        };
        _proto7.setValue = function setValue(value, _pose) {
          this.binding.setValue(value);
        };
        _proto7.getValue = function getValue(pose) {
          var _this$binding$getValu, _this$binding$getValu2, _this$binding;
          return (_this$binding$getValu = (_this$binding$getValu2 = (_this$binding = this.binding).getValue) === null || _this$binding$getValu2 === void 0 ? void 0 : _this$binding$getValu2.call(_this$binding)) !== null && _this$binding$getValu !== void 0 ? _this$binding$getValu : undefined;
        };
        return NonTransformPoseBinding;
      }();
      /**
       * Describes the evaluation of a animation clip track in sense of animation graph.
       */
      AGTrackEvaluation = /*#__PURE__*/function () {
        function AGTrackEvaluation(binding, trackEvaluation) {
          this._binding = void 0;
          this._trackSampler = void 0;
          this._binding = binding;
          this._trackSampler = trackEvaluation;
        }
        var _proto8 = AGTrackEvaluation.prototype;
        _proto8.destroy = function destroy() {
          this._binding.destroy();
        };
        _proto8.evaluate = function evaluate(time, pose) {
          var trackSampler = this._trackSampler,
            binding = this._binding;
          var defaultValue = /* binding.getValue && */trackSampler.requiresDefault ? binding.getValue(pose) : undefined;
          var value = trackSampler.evaluate(time, defaultValue);
          binding.setValue(value, pose);
        };
        return AGTrackEvaluation;
      }();
      AuxiliaryCurveEvaluation = /*#__PURE__*/function () {
        function AuxiliaryCurveEvaluation(_binding, _curve) {
          this._binding = _binding;
          this._curve = _curve;
        }

        /**
         * Evaluates.
         * @param time The time.
         * @param context The evaluation context.
         */
        var _proto9 = AuxiliaryCurveEvaluation.prototype;
        _proto9.evaluate = function evaluate(time, context) {
          var curve = this._curve,
            binding = this._binding;
          var pose = context;
          var value = curve.evaluate(time);
          binding.setValue(value, pose);
        };
        return AuxiliaryCurveEvaluation;
      }();
      /**
       * Describes the evaluation of a animation clip in sense of animation graph.
       */
      AnimationClipAGEvaluationRegular = /*#__PURE__*/function () {
        function AnimationClipAGEvaluationRegular(clip, context) {
          this._trackEvaluations = [];
          this._exoticAnimationEvaluation = void 0;
          this._auxiliaryCurveEvaluations = [];
          clip._trySyncLegacyData();
          var trackEvaluations = [];
          var exoticAnimationEvaluation;
          var auxiliaryCurveEvaluations = [];
          var tracks = clip.tracks;
          var exoticAnimation = clip[exoticAnimationTag];
          for (var _iterator = _createForOfIteratorHelperLoose(tracks), _step; !(_step = _iterator()).done;) {
            var track = _step.value;
            if (track instanceof UntypedTrack) {
              // Untyped track is not supported in AG.
              continue;
            }
            if (Array.from(track.channels()).every(function (_ref) {
              var curve = _ref.curve;
              return curve.keyFramesCount === 0;
            })) {
              continue;
            }
            var trackRuntimeBinding = bindTrackAG(clip, track, context);
            if (!trackRuntimeBinding) {
              continue;
            }
            var trackSampler = track[createEvalSymbol]();
            var trackEvaluation = new AGTrackEvaluation(trackRuntimeBinding, trackSampler);
            trackEvaluations.push(trackEvaluation);
          }
          if (exoticAnimation) {
            exoticAnimationEvaluation = exoticAnimation.createEvaluatorForAnimationGraph(context);
          }
          var auxiliaryCurveNames = clip.getAuxiliaryCurveNames_experimental();
          var nAuxiliaryCurves = auxiliaryCurveNames.length;
          for (var iAuxiliaryCurve = 0; iAuxiliaryCurve < nAuxiliaryCurves; ++iAuxiliaryCurve) {
            var _curveName = auxiliaryCurveNames[iAuxiliaryCurve];
            var curve = clip.getAuxiliaryCurve_experimental(_curveName);
            var handle = context.bindAuxiliaryCurve(_curveName);
            var _binding2 = new AuxiliaryCurveBinding(handle);
            auxiliaryCurveEvaluations.push(new AuxiliaryCurveEvaluation(_binding2, curve));
          }
          this._trackEvaluations = trackEvaluations;
          this._exoticAnimationEvaluation = exoticAnimationEvaluation;
          this._auxiliaryCurveEvaluations = auxiliaryCurveEvaluations;
        }
        var _proto10 = AnimationClipAGEvaluationRegular.prototype;
        _proto10.destroy = function destroy() {
          var _this$_exoticAnimatio;
          (_this$_exoticAnimatio = this._exoticAnimationEvaluation) === null || _this$_exoticAnimatio === void 0 ? void 0 : _this$_exoticAnimatio.destroy();
          var trackEvaluations = this._trackEvaluations;
          var nTrackEvaluations = trackEvaluations.length;
          for (var iNodeEvaluation = 0; iNodeEvaluation < nTrackEvaluations; ++iNodeEvaluation) {
            trackEvaluations[iNodeEvaluation].destroy();
          }
        };
        _proto10.evaluate = function evaluate(time, context) {
          var trackEvaluations = this._trackEvaluations,
            exoticAnimationEvaluation = this._exoticAnimationEvaluation,
            auxiliaryCurveEvaluations = this._auxiliaryCurveEvaluations;
          var pose = context.pushDefaultedPose();
          var nTrackEvaluations = trackEvaluations.length;
          for (var iNodeEvaluation = 0; iNodeEvaluation < nTrackEvaluations; ++iNodeEvaluation) {
            trackEvaluations[iNodeEvaluation].evaluate(time, pose);
          }
          if (exoticAnimationEvaluation) {
            exoticAnimationEvaluation.evaluate(time, pose);
          }
          var nAuxiliaryCurveEvaluations = auxiliaryCurveEvaluations.length;
          for (var iAuxiliaryCurveEvaluation = 0; iAuxiliaryCurveEvaluation < nAuxiliaryCurveEvaluations; ++iAuxiliaryCurveEvaluation) {
            auxiliaryCurveEvaluations[iAuxiliaryCurveEvaluation].evaluate(time, pose);
          }
          return pose;
        };
        return AnimationClipAGEvaluationRegular;
      }();
      AnimationClipAGEvaluationAdditive = /*#__PURE__*/function () {
        function AnimationClipAGEvaluationAdditive(clip, context) {
          this._clipEval = void 0;
          this._refClipEval = void 0;
          this._clipEval = new AnimationClipAGEvaluationRegular(clip, context);
          var refClip = clip[additiveSettingsTag].refClip;
          if (refClip && refClip !== clip) {
            this._refClipEval = new AnimationClipAGEvaluationRegular(refClip, context);
          }
        }
        var _proto11 = AnimationClipAGEvaluationAdditive.prototype;
        _proto11.destroy = function destroy() {
          var _this$_refClipEval;
          this._clipEval.destroy();
          (_this$_refClipEval = this._refClipEval) === null || _this$_refClipEval === void 0 ? void 0 : _this$_refClipEval.destroy();
        }

        /**
         * Evaluates.
         * @param time The time.
         * @param context The evaluation context.
         */;
        _proto11.evaluate = function evaluate(time, context) {
          // Evaluate this clip.
          var pose = this._clipEval.evaluate(time, context);
          var refPose;
          if (this._refClipEval) {
            var refClipTime = 0.0; // TODO: ref clip may specify a time?
            refPose = this._refClipEval.evaluate(refClipTime, context);
          } else {
            // If the ref clip is not specified,
            // The effect is as if the ref pose is the 0 time of original clip.
            refPose = this._clipEval.evaluate(0.0, context);
          }
          calculateDeltaPose(pose, refPose);
          context.popPose();
          return pose;
        };
        return AnimationClipAGEvaluationAdditive;
      }();
    }
  };
});