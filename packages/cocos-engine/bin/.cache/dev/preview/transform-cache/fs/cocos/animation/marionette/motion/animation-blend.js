System.register("q-bundled:///fs/cocos/animation/marionette/motion/animation-blend.js", ["../../../core/index.js", "./motion.js", "../create-eval.js", "../errors.js", "../../define.js", "../graph-debug.js", "../animation-graph-editor-extras-clone-helper.js", "../../core/pose.js"], function (_export, _context) {
  "use strict";

  var _decorator, editorExtrasTag, Motion, createEval, VariableTypeMismatchedError, CLASS_NAME_PREFIX_ANIM, getMotionRuntimeID, RUNTIME_ID_ENABLED, cloneAnimationGraphEditorExtrasFrom, blendPoseInto, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, ccclass, serializable, AnimationBlendItem, AnimationBlend, AnimationBlendEval, AnimationBlendPort;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
  _export("validateBlendParam", validateBlendParam);
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
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      _export("AnimationBlendItem", AnimationBlendItem = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "AnimationBlendItem"), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function AnimationBlendItem() {
          this.motion = _initializer && _initializer();
        }
        var _proto = AnimationBlendItem.prototype;
        _proto.clone = function clone() {
          var that = new AnimationBlendItem();
          this._copyTo(that);
          return that;
        };
        _proto._copyTo = function _copyTo(that) {
          var _this$motion$clone, _this$motion;
          that.motion = (_this$motion$clone = (_this$motion = this.motion) === null || _this$motion === void 0 ? void 0 : _this$motion.clone()) !== null && _this$motion$clone !== void 0 ? _this$motion$clone : null;
          return that;
        };
        return AnimationBlendItem;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "motion", [serializable], function () {
        return null;
      })), _class2)) || _class));
      _export("AnimationBlend", AnimationBlend = (_dec2 = ccclass(CLASS_NAME_PREFIX_ANIM + "AnimationBlend"), _dec2(_class4 = (_class5 = /*#__PURE__*/function (_Motion) {
        _inheritsLoose(AnimationBlend, _Motion);
        function AnimationBlend() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Motion.call.apply(_Motion, [this].concat(args)) || this;
          _this.name = _initializer2 && _initializer2();
          return _this;
        }
        var _proto2 = AnimationBlend.prototype;
        _proto2.copyTo = function copyTo(that) {
          that.name = this.name;
          that[editorExtrasTag] = cloneAnimationGraphEditorExtrasFrom(this);
        };
        return AnimationBlend;
      }(Motion), (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "name", [serializable], function () {
        return '';
      })), _class5)) || _class4));
      _export("AnimationBlendEval", AnimationBlendEval = /*#__PURE__*/function () {
        function AnimationBlendEval(context, ignoreEmbeddedPlayers, base, children, inputs) {
          this._childEvaluators = children.map(function (child) {
            var _child$motion$createE, _child$motion;
            return (_child$motion$createE = (_child$motion = child.motion) === null || _child$motion === void 0 ? void 0 : _child$motion[createEval](context, ignoreEmbeddedPlayers)) !== null && _child$motion$createE !== void 0 ? _child$motion$createE : null;
          });
          this._weights = new Array(this._childEvaluators.length).fill(0);
          this._inputs = [].concat(inputs);
          if (RUNTIME_ID_ENABLED) {
            this.runtimeId = getMotionRuntimeID(base);
          }
        }
        var _proto3 = AnimationBlendEval.prototype;
        _proto3.createPort = function createPort() {
          return new AnimationBlendPort(this, this._childEvaluators.map(function (childEval) {
            var _childEval$createPort;
            return (_childEval$createPort = childEval === null || childEval === void 0 ? void 0 : childEval.createPort()) !== null && _childEval$createPort !== void 0 ? _childEval$createPort : null;
          }));
        };
        _proto3.getChildWeight = function getChildWeight(childIndex) {
          return this._weights[childIndex];
        };
        _proto3.getChildMotionEval = function getChildMotionEval(childIndex) {
          return this._childEvaluators[childIndex];
        };
        _proto3.getClipStatuses = function getClipStatuses(baseWeight) {
          var children = this._childEvaluators,
            weights = this._weights;
          var nChildren = children.length;
          var iChild = 0;
          var currentChildIterator;
          return {
            next: function next() {
              // eslint-disable-next-line no-constant-condition
              while (true) {
                if (currentChildIterator) {
                  var result = currentChildIterator.next();
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
                  var child = children[iChild];
                  currentChildIterator = child === null || child === void 0 ? void 0 : child.getClipStatuses(baseWeight * weights[iChild]);
                  ++iChild;
                }
              }
            }
          };
        };
        _proto3.__evaluatePort = function __evaluatePort(port, progress, context) {
          var nChild = this._childEvaluators.length;
          var sumWeight = 0.0;
          var finalPose = null;
          for (var iChild = 0; iChild < nChild; ++iChild) {
            var _port$childPorts$iChi;
            var childWeight = this._weights[iChild];
            if (!childWeight) {
              continue;
            }
            var childOutput = (_port$childPorts$iChi = port.childPorts[iChild]) === null || _port$childPorts$iChi === void 0 ? void 0 : _port$childPorts$iChi.evaluate(progress, context);
            if (!childOutput) {
              continue;
            }
            sumWeight += childWeight;
            if (!finalPose) {
              finalPose = childOutput;
            } else {
              if (sumWeight) {
                var t = childWeight / sumWeight;
                blendPoseInto(finalPose, childOutput, t);
              }
              context.popPose();
            }
          }
          if (finalPose) {
            return finalPose;
          }
          return context.pushDefaultedPose();
        };
        _proto3.overrideClips = function overrideClips(context) {
          for (var iChild = 0; iChild < this._childEvaluators.length; ++iChild) {
            var _this$_childEvaluator;
            (_this$_childEvaluator = this._childEvaluators[iChild]) === null || _this$_childEvaluator === void 0 ? void 0 : _this$_childEvaluator.overrideClips(context);
          }
        };
        _proto3.setInput = function setInput(value, index) {
          this._inputs[index] = value;
          this.doEval();
        };
        _proto3.doEval = function doEval() {
          this.eval(this._weights, this._inputs);
        };
        _createClass(AnimationBlendEval, [{
          key: "childCount",
          get: function get() {
            return this._weights.length;
          }
        }, {
          key: "duration",
          get: function get() {
            var uniformDuration = 0.0;
            for (var iChild = 0; iChild < this._childEvaluators.length; ++iChild) {
              var _this$_childEvaluator2, _this$_childEvaluator3;
              uniformDuration += ((_this$_childEvaluator2 = (_this$_childEvaluator3 = this._childEvaluators[iChild]) === null || _this$_childEvaluator3 === void 0 ? void 0 : _this$_childEvaluator3.duration) !== null && _this$_childEvaluator2 !== void 0 ? _this$_childEvaluator2 : 0.0) * this._weights[iChild];
            }
            return uniformDuration;
          }
        }]);
        return AnimationBlendEval;
      }());
      AnimationBlendPort = /*#__PURE__*/function () {
        function AnimationBlendPort(host, childPorts) {
          this.childPorts = [];
          this._host = void 0;
          this._host = host;
          this.childPorts = childPorts;
        }
        var _proto4 = AnimationBlendPort.prototype;
        _proto4.evaluate = function evaluate(progress, context) {
          return this._host.__evaluatePort(this, progress, context);
        };
        _proto4.reenter = function reenter() {
          var childPorts = this.childPorts;
          var nChildPorts = childPorts.length;
          for (var iChild = 0; iChild < nChildPorts; ++iChild) {
            var _childPorts$iChild;
            (_childPorts$iChild = childPorts[iChild]) === null || _childPorts$iChild === void 0 ? void 0 : _childPorts$iChild.reenter();
          }
        };
        return AnimationBlendPort;
      }();
    }
  };
});