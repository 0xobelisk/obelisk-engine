System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-node.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js", "../../../core/data/decorators/index.js", "../../core/pose.js", "../../define.js", "./foundation/pose-graph-node.js"], function (_export, _context) {
  "use strict";

  var TEST, assertIsTrue, ccenum, ccclass, PoseTransformSpace, CLASS_NAME_PREFIX_ANIM, PoseGraphNode, _dec, _class, PoseTransformSpaceRequirement, POSE_NODE_EVALUATION_STACK_ORDER_DEBUG_ENABLED, PoseNode;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  _export("PoseTransformSpaceRequirement", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      ccenum = _coreIndexJs.ccenum;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_corePoseJs) {
      PoseTransformSpace = _corePoseJs.PoseTransformSpace;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_foundationPoseGraphNodeJs) {
      PoseGraphNode = _foundationPoseGraphNodeJs.PoseGraphNode;
    }],
    execute: function () {
      (function (PoseTransformSpaceRequirement) {
        PoseTransformSpaceRequirement[PoseTransformSpaceRequirement["NO"] = 0] = "NO";
        PoseTransformSpaceRequirement[PoseTransformSpaceRequirement["LOCAL"] = 1] = "LOCAL";
        PoseTransformSpaceRequirement[PoseTransformSpaceRequirement["COMPONENT"] = 2] = "COMPONENT";
      })(PoseTransformSpaceRequirement || _export("PoseTransformSpaceRequirement", PoseTransformSpaceRequirement = {}));
      ccenum(PoseTransformSpaceRequirement);
      POSE_NODE_EVALUATION_STACK_ORDER_DEBUG_ENABLED = !!TEST;
      /**
       * Base class of all pose nodes.
       *
       * Pose nodes are nodes in pose graph that yields pose objects.
       */
      _export("PoseNode", PoseNode = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNode"), _dec(_class = /*#__PURE__*/function (_PoseGraphNode) {
        _inheritsLoose(PoseNode, _PoseGraphNode);
        function PoseNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PoseGraphNode.call.apply(_PoseGraphNode, [this].concat(args)) || this;
          _this._dependencyEvaluation = undefined;
          return _this;
        }
        var _proto = PoseNode.prototype;
        /**
         * Perform the update stage on this pose node.
         * This method will directly forward to call `this.doUpdate`.
         *
         * @param context The update context.
         *
         * @note Subclasses shall not override this method and should override `doUpdate` instead.
         */
        _proto.update = function update(context) {
          var _this$_dependencyEval;
          (_this$_dependencyEval = this._dependencyEvaluation) === null || _this$_dependencyEval === void 0 ? void 0 : _this$_dependencyEval.evaluate();
          this.doUpdate(context);
        }

        /**
         * Evaluates this pose node.
         * This method will directly forward to call `this.doEvaluate`.
         *
         * @param context The evaluation context.
         *
         * @note Subclasses shall not override this method and should override `doEvaluate` instead.
         */;
        _proto.evaluate = function evaluate(context, poseTransformSpaceRequirement) {
          var stackSizeBefore;
          if (POSE_NODE_EVALUATION_STACK_ORDER_DEBUG_ENABLED) {
            stackSizeBefore = context._stackSize_debugging;
          }
          var pose = this.doEvaluate(context);
          if (POSE_NODE_EVALUATION_STACK_ORDER_DEBUG_ENABLED) {
            // The stack should certainly increase 1.
            assertIsTrue(context._stackSize_debugging === stackSizeBefore + 1, "PoseNode.doEvaluate() should certainly push a pose node onto the stack and return it.");
            // The returned pose should be the increased pose, that's,
            // can not return a already-popped pose.
            assertIsTrue(context._isStackTopPose_debugging(pose), "PoseNode.doEvaluate() should certainly push a pose node onto the stack and return it.");
          }
          var currentSpace = pose._poseTransformSpace;
          switch (poseTransformSpaceRequirement) {
            default:
              assertIsTrue(false);
            // fallthrough
            case PoseTransformSpaceRequirement.NO:
              break;
            case PoseTransformSpaceRequirement.LOCAL:
              {
                if (currentSpace === PoseTransformSpace.COMPONENT) {
                  context._poseTransformsSpaceComponentToLocal(pose);
                }
                assertIsTrue(pose._poseTransformSpace === PoseTransformSpace.LOCAL);
                break;
              }
            case PoseTransformSpaceRequirement.COMPONENT:
              {
                if (currentSpace === PoseTransformSpace.LOCAL) {
                  context._poseTransformsSpaceLocalToComponent(pose);
                }
                assertIsTrue(pose._poseTransformSpace === PoseTransformSpace.COMPONENT);
                break;
              }
          }
          return pose;
        };
        PoseNode.evaluateDefaultPose = function evaluateDefaultPose(context, poseTransformSpaceRequirement) {
          switch (poseTransformSpaceRequirement) {
            default:
              assertIsTrue(false);
            // fallthrough
            case PoseTransformSpaceRequirement.NO:
            case PoseTransformSpaceRequirement.LOCAL:
              return context.pushDefaultedPose();
            case PoseTransformSpaceRequirement.COMPONENT:
              return context.pushDefaultedPoseInComponentSpace();
          }
        }

        /** @internal */;
        _proto._setDependencyEvaluation = function _setDependencyEvaluation(dependency) {
          this._dependencyEvaluation = dependency;
        }

        /**
         * Implement this method to performs the update stage on this pose node.
         *
         * @param context The update context.
         *
         * @note Subclasses shall implement this method to perform some updating works.
         * and invoke `this.update` on dependant pose nodes.
         */;
        /**
         * TODO: some nodes access dependencies in reenter(). See: cocos/cocos-engine#15305
         */
        _proto._forceEvaluateEvaluation = function _forceEvaluateEvaluation() {
          var _this$_dependencyEval2;
          (_this$_dependencyEval2 = this._dependencyEvaluation) === null || _this$_dependencyEval2 === void 0 ? void 0 : _this$_dependencyEval2.evaluate();
        };
        return PoseNode;
      }(PoseGraphNode)) || _class));
    }
  };
});