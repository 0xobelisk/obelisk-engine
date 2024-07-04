System.register("q-bundled:///fs/cocos/animation/marionette/motion/animation-blend.js", ["../../../core/index.js", "./motion.js", "../create-eval.js", "../errors.js", "../../define.js", "../graph-debug.js", "../animation-graph-editor-extras-clone-helper.js", "../../core/pose.js"], function (_export, _context) {
  "use strict";

  var _decorator, editorExtrasTag, Motion, createEval, VariableTypeMismatchedError, CLASS_NAME_PREFIX_ANIM, getMotionRuntimeID, RUNTIME_ID_ENABLED, cloneAnimationGraphEditorExtrasFrom, blendPoseInto, AnimationBlendEval, AnimationBlendPort, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, ccclass, serializable, AnimationBlendItem, AnimationBlend;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function validateBlendParam(val, name) {
    if (typeof val !== 'number') {
      // TODO var name?
      throw new VariableTypeMismatchedError(name, 'number');
    }
  }
  _export({
    AnimationBlendEval: void 0,
    validateBlendParam: validateBlendParam
  });
  return {
    setters: [function (_coreIndexJs) {
      _decorator = _coreIndexJs._decorator;
      editorExtrasTag = _coreIndexJs.editorExtrasTag;
    }, function (_motionJs) {
      Motion = _motionJs.Motion;
    }, function (_createEvalJs) {
      createEval = _createEvalJs.createEval;
    }, function (_errorsJs) {
      VariableTypeMismatchedError = _errorsJs.VariableTypeMismatchedError;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_graphDebugJs) {
      getMotionRuntimeID = _graphDebugJs.getMotionRuntimeID;
      RUNTIME_ID_ENABLED = _graphDebugJs.RUNTIME_ID_ENABLED;
    }, function (_animationGraphEditorExtrasCloneHelperJs) {
      cloneAnimationGraphEditorExtrasFrom = _animationGraphEditorExtrasCloneHelperJs.cloneAnimationGraphEditorExtrasFrom;
    }, function (_corePoseJs) {
      blendPoseInto = _corePoseJs.blendPoseInto;
    }],
    execute: function () {
      ({
        ccclass,
        serializable
      } = _decorator);
      _export("AnimationBlendItem", AnimationBlendItem = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}AnimationBlendItem`), _dec(_class = (_class2 = class AnimationBlendItem {
        constructor() {
          this.motion = _initializer && _initializer();
        }
        clone() {
          const that = new AnimationBlendItem();
          this._copyTo(that);
          return that;
        }
        _copyTo(that) {
          var _this$motion$clone, _this$motion;
          that.motion = (_this$motion$clone = (_this$motion = this.motion) === null || _this$motion === void 0 ? void 0 : _this$motion.clone()) !== null && _this$motion$clone !== void 0 ? _this$motion$clone : null;
          return that;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "motion", [serializable], function () {
        return null;
      })), _class2)) || _class));
      _export("AnimationBlend", AnimationBlend = (_dec2 = ccclass(`${CLASS_NAME_PREFIX_ANIM}AnimationBlend`), _dec2(_class4 = (_class5 = class AnimationBlend extends Motion {
        constructor(...args) {
          super(...args);
          this.name = _initializer2 && _initializer2();
        }
        copyTo(that) {
          that.name = this.name;
          that[editorExtrasTag] = cloneAnimationGraphEditorExtrasFrom(this);
        }
      }, (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "name", [serializable], function () {
        return '';
      })), _class5)) || _class4));
      _export("AnimationBlendEval", AnimationBlendEval = class AnimationBlendEval {
        constructor(context, ignoreEmbeddedPlayers, base, children, inputs) {
          this._childEvaluators = children.map(child => {
            var _child$motion$createE, _child$motion;
            return (_child$motion$createE = (_child$motion = child.motion) === null || _child$motion === void 0 ? void 0 : _child$motion[createEval](context, ignoreEmbeddedPlayers)) !== null && _child$motion$createE !== void 0 ? _child$motion$createE : null;
          });
          this._weights = new Array(this._childEvaluators.length).fill(0);
          this._inputs = [...inputs];
          if (RUNTIME_ID_ENABLED) {
            this.runtimeId = getMotionRuntimeID(base);
          }
        }
        createPort() {
          return new AnimationBlendPort(this, this._childEvaluators.map(childEval => {
            var _childEval$createPort;
            return (_childEval$createPort = childEval === null || childEval === void 0 ? void 0 : childEval.createPort()) !== null && _childEval$createPort !== void 0 ? _childEval$createPort : null;
          }));
        }
        get childCount() {
          return this._weights.length;
        }
        getChildWeight(childIndex) {
          return this._weights[childIndex];
        }
        getChildMotionEval(childIndex) {
          return this._childEvaluators[childIndex];
        }
        get duration() {
          let uniformDuration = 0.0;
          for (let iChild = 0; iChild < this._childEvaluators.length; ++iChild) {
            var _this$_childEvaluator, _this$_childEvaluator2;
            uniformDuration += ((_this$_childEvaluator = (_this$_childEvaluator2 = this._childEvaluators[iChild]) === null || _this$_childEvaluator2 === void 0 ? void 0 : _this$_childEvaluator2.duration) !== null && _this$_childEvaluator !== void 0 ? _this$_childEvaluator : 0.0) * this._weights[iChild];
          }
          return uniformDuration;
        }
        getClipStatuses(baseWeight) {
          const {
            _childEvaluators: children,
            _weights: weights
          } = this;
          const nChildren = children.length;
          let iChild = 0;
          let currentChildIterator;
          return {
            next() {
              // eslint-disable-next-line no-constant-condition
              while (true) {
                if (currentChildIterator) {
                  const result = currentChildIterator.next();
                  if (!result.done) {
                    return result;
                  }
                }
                if (iChild >= nChildren) {
                  return {
                    done: true,
                    value: undefined
                  };
                } else {
                  const child = children[iChild];
                  currentChildIterator = child === null || child === void 0 ? void 0 : child.getClipStatuses(baseWeight * weights[iChild]);
                  ++iChild;
                }
              }
            }
          };
        }
        __evaluatePort(port, progress, context) {
          const nChild = this._childEvaluators.length;
          let sumWeight = 0.0;
          let finalPose = null;
          for (let iChild = 0; iChild < nChild; ++iChild) {
            var _port$childPorts$iChi;
            const childWeight = this._weights[iChild];
            if (!childWeight) {
              continue;
            }
            const childOutput = (_port$childPorts$iChi = port.childPorts[iChild]) === null || _port$childPorts$iChi === void 0 ? void 0 : _port$childPorts$iChi.evaluate(progress, context);
            if (!childOutput) {
              continue;
            }
            sumWeight += childWeight;
            if (!finalPose) {
              finalPose = childOutput;
            } else {
              if (sumWeight) {
                const t = childWeight / sumWeight;
                blendPoseInto(finalPose, childOutput, t);
              }
              context.popPose();
            }
          }
          if (finalPose) {
            return finalPose;
          }
          return context.pushDefaultedPose();
        }
        overrideClips(context) {
          for (let iChild = 0; iChild < this._childEvaluators.length; ++iChild) {
            var _this$_childEvaluator3;
            (_this$_childEvaluator3 = this._childEvaluators[iChild]) === null || _this$_childEvaluator3 === void 0 ? void 0 : _this$_childEvaluator3.overrideClips(context);
          }
        }
        setInput(value, index) {
          this._inputs[index] = value;
          this.doEval();
        }
        doEval() {
          this.eval(this._weights, this._inputs);
        }
      });
      AnimationBlendPort = class AnimationBlendPort {
        constructor(host, childPorts) {
          this.childPorts = [];
          this._host = void 0;
          this._host = host;
          this.childPorts = childPorts;
        }
        evaluate(progress, context) {
          return this._host.__evaluatePort(this, progress, context);
        }
        reenter() {
          const {
            childPorts
          } = this;
          const nChildPorts = childPorts.length;
          for (let iChild = 0; iChild < nChildPorts; ++iChild) {
            var _childPorts$iChild;
            (_childPorts$iChild = childPorts[iChild]) === null || _childPorts$iChild === void 0 ? void 0 : _childPorts$iChild.reenter();
          }
        }
      };
    }
  };
});