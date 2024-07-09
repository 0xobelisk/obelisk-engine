System.register("q-bundled:///fs/cocos/animation/marionette/motion/clip-motion.js", ["../../../core/index.js", "../../animation-clip.js", "../animation-graph-editor-extras-clone-helper.js", "../create-eval.js", "../graph-debug.js", "./motion.js", "../../wrap.js", "../../types.js", "../../../core/geometry/index.js", "../animation-graph-animation-clip-binding.js"], function (_export, _context) {
  "use strict";

  var editorExtrasTag, _decorator, editable, serializable, AnimationClip, cloneAnimationGraphEditorExtrasFrom, createEval, getMotionRuntimeID, RUNTIME_ID_ENABLED, Motion, wrap, WrappedInfo, WrapModeMask, createAnimationAGEvaluation, ClipMotionEval, ClipMotionPort, _dec, _dec2, _class, _class2, _initializer, ccclass, type, ClipMotion, evaluatePortTag;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      editorExtrasTag = _coreIndexJs.editorExtrasTag;
      _decorator = _coreIndexJs._decorator;
      editable = _coreIndexJs.editable;
      serializable = _coreIndexJs.serializable;
    }, function (_animationClipJs) {
      AnimationClip = _animationClipJs.AnimationClip;
    }, function (_animationGraphEditorExtrasCloneHelperJs) {
      cloneAnimationGraphEditorExtrasFrom = _animationGraphEditorExtrasCloneHelperJs.cloneAnimationGraphEditorExtrasFrom;
    }, function (_createEvalJs) {
      createEval = _createEvalJs.createEval;
    }, function (_graphDebugJs) {
      getMotionRuntimeID = _graphDebugJs.getMotionRuntimeID;
      RUNTIME_ID_ENABLED = _graphDebugJs.RUNTIME_ID_ENABLED;
    }, function (_motionJs) {
      Motion = _motionJs.Motion;
    }, function (_wrapJs) {
      wrap = _wrapJs.wrap;
    }, function (_typesJs) {
      WrappedInfo = _typesJs.WrappedInfo;
    }, function (_coreGeometryIndexJs) {
      WrapModeMask = _coreGeometryIndexJs.WrapModeMask;
    }, function (_animationGraphAnimationClipBindingJs) {
      createAnimationAGEvaluation = _animationGraphAnimationClipBindingJs.createAnimationAGEvaluation;
    }],
    execute: function () {
      ({
        ccclass,
        type
      } = _decorator);
      _export("ClipMotion", ClipMotion = (_dec = ccclass('cc.animation.ClipMotion'), _dec2 = type(AnimationClip), _dec(_class = (_class2 = class ClipMotion extends Motion {
        constructor(...args) {
          super(...args);
          this.clip = _initializer && _initializer();
        }
        [createEval](context, ignoreEmbeddedPlayers) {
          if (!this.clip) {
            return null;
          }
          const clipMotionEval = new ClipMotionEval(context, this.clip, ignoreEmbeddedPlayers);
          if (RUNTIME_ID_ENABLED) {
            clipMotionEval.runtimeId = getMotionRuntimeID(this);
          }
          return clipMotionEval;
        }
        clone() {
          const that = new ClipMotion();
          that.clip = this.clip;
          that[editorExtrasTag] = cloneAnimationGraphEditorExtrasFrom(this);
          return that;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "clip", [_dec2, editable, serializable], function () {
        return null;
      })), _class2)) || _class));
      evaluatePortTag = Symbol('EvaluatePort');
      ClipMotionEval = class ClipMotionEval {
        /**
         * @internal
         */

        constructor(context, clip, ignoreEmbeddedPlayers) {
          var _context$clipOverride, _context$clipOverride2;
          this._clipEmbeddedPlayerEval = null;
          this._frameEventEval = null;
          this._wrapInfo = new WrappedInfo();
          this._duration = 0.0;
          this._ignoreEmbeddedPlayers = void 0;
          this._originalClip = clip;
          this._ignoreEmbeddedPlayers = ignoreEmbeddedPlayers;
          const overriding = (_context$clipOverride = (_context$clipOverride2 = context.clipOverrides) === null || _context$clipOverride2 === void 0 ? void 0 : _context$clipOverride2.get(clip)) !== null && _context$clipOverride !== void 0 ? _context$clipOverride : clip;
          this._setClip(overriding, context);
        }
        get duration() {
          return this._duration;
        }
        createPort() {
          return new ClipMotionPort(this);
        }
        getClipStatuses(baseWeight) {
          let got = false;
          return {
            next: () => {
              if (got) {
                return {
                  done: true,
                  value: undefined
                };
              } else {
                got = true;
                return {
                  done: false,
                  // TODO: `__DEBUG_ID__` does not exist on ClipStatus, please fix it @Leslie Leigh
                  // tracking issue: https://github.com/cocos/cocos-engine/issues/15307
                  value: {
                    __DEBUG_ID__: this.__DEBUG__ID__,
                    clip: this._clip,
                    weight: baseWeight
                  }
                };
              }
            }
          };
        }
        [evaluatePortTag](progress, context) {
          var _this$_frameEventEval, _this$_clipEmbeddedPl;
          const {
            _duration: duration,
            _clip: {
              duration: clipDuration
            },
            _clipEval: clipEval
          } = this;
          const elapsedTime = duration * progress;
          const {
            wrapMode
          } = this._clip;
          const repeatCount = (wrapMode & WrapModeMask.Loop) === WrapModeMask.Loop ? Infinity : 1;
          const wrapInfo = wrap(elapsedTime, duration, wrapMode, repeatCount, false, this._wrapInfo);

          // Transform the motion space time(scaled by clip speed) into clip space time.
          const clipTime = wrapInfo.ratio * clipDuration;
          const pose = clipEval.evaluate(clipTime, context);

          // Sample frame events.
          (_this$_frameEventEval = this._frameEventEval) === null || _this$_frameEventEval === void 0 ? void 0 : _this$_frameEventEval.sample(wrapInfo.ratio, wrapInfo.direction, wrapInfo.iterations);

          // Evaluate embedded players.
          (_this$_clipEmbeddedPl = this._clipEmbeddedPlayerEval) === null || _this$_clipEmbeddedPl === void 0 ? void 0 : _this$_clipEmbeddedPl.evaluate(clipTime, Math.trunc(wrapInfo.iterations));
          return pose;
        }
        overrideClips(context) {
          var _context$clipOverride3;
          const {
            _originalClip: originalClip
          } = this;
          const overriding = (_context$clipOverride3 = context.clipOverrides) === null || _context$clipOverride3 === void 0 ? void 0 : _context$clipOverride3.get(originalClip);
          if (overriding) {
            this._setClip(overriding, context);
          }
        }
        reenter() {
          var _this$_frameEventEval2;
          (_this$_frameEventEval2 = this._frameEventEval) === null || _this$_frameEventEval2 === void 0 ? void 0 : _this$_frameEventEval2.reset();
        }

        /**
         * Preserved here for clip overriding.
         */

        /**
         * Actual clip used. Will be equal to `this._originalClip` if not being override.
         */

        _setClip(clip, context) {
          var _this$_clipEval;
          (_this$_clipEval = this._clipEval) === null || _this$_clipEval === void 0 ? void 0 : _this$_clipEval.destroy();
          this._frameEventEval = null;
          if (this._clipEmbeddedPlayerEval) {
            this._clipEmbeddedPlayerEval.destroy();
            this._clipEmbeddedPlayerEval = null;
          }
          this._clip = clip;
          this._duration = clip.speed === 0.0 ? 0.0 : clip.duration / clip.speed; // TODO, a test for `clip.speed === 0` is required!
          this._clipEval = createAnimationAGEvaluation(clip, context);
          this._frameEventEval = clip.createEventEvaluator(context.origin);
          if (!this._ignoreEmbeddedPlayers && clip.containsAnyEmbeddedPlayer()) {
            this._clipEmbeddedPlayerEval = clip.createEmbeddedPlayerEvaluator(context.origin);
          }
        }
      };
      ClipMotionPort = class ClipMotionPort {
        constructor(host) {
          this._eval = void 0;
          this._eval = host;
        }
        evaluate(progress, context) {
          return this._eval[evaluatePortTag](progress, context);
        }
        reenter() {
          this._eval.reenter();
        }
      };
    }
  };
});