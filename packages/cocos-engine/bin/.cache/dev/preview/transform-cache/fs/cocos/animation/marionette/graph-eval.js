System.register("q-bundled:///fs/cocos/animation/marionette/graph-eval.js", ["../../../../virtual/internal%253Aconstants.js", "./variable/index.js", "../../core/index.js", "../../3d/skeletal-animation/limits.js", "./animation-graph-context.js", "./pose-graph/pose-node.js", "./pose-graph/default-top-level-pose-node.js"], function (_export, _context) {
  "use strict";

  var DEBUG, TriggerResetMode, createInstanceTag, VarInstanceTrigger, assertIsTrue, MAX_ANIMATION_LAYER, AnimationGraphBindingContext, AnimationGraphPoseLayoutMaintainer, defaultTransformsTag, LayoutChangeFlag, AuxiliaryCurveRegistry, AnimationGraphUpdateContextGenerator, AnimationGraphSettleContext, DeferredPoseStashAllocator, PoseTransformSpaceRequirement, DefaultTopLevelPoseNode, AnimationGraphEval;
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_variableIndexJs) {
      TriggerResetMode = _variableIndexJs.TriggerResetMode;
      createInstanceTag = _variableIndexJs.createInstanceTag;
      VarInstanceTrigger = _variableIndexJs.VarInstanceTrigger;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_dSkeletalAnimationLimitsJs) {
      MAX_ANIMATION_LAYER = _dSkeletalAnimationLimitsJs.MAX_ANIMATION_LAYER;
    }, function (_animationGraphContextJs) {
      AnimationGraphBindingContext = _animationGraphContextJs.AnimationGraphBindingContext;
      AnimationGraphPoseLayoutMaintainer = _animationGraphContextJs.AnimationGraphPoseLayoutMaintainer;
      defaultTransformsTag = _animationGraphContextJs.defaultTransformsTag;
      LayoutChangeFlag = _animationGraphContextJs.LayoutChangeFlag;
      AuxiliaryCurveRegistry = _animationGraphContextJs.AuxiliaryCurveRegistry;
      AnimationGraphUpdateContextGenerator = _animationGraphContextJs.AnimationGraphUpdateContextGenerator;
      AnimationGraphSettleContext = _animationGraphContextJs.AnimationGraphSettleContext;
      DeferredPoseStashAllocator = _animationGraphContextJs.DeferredPoseStashAllocator;
    }, function (_poseGraphPoseNodeJs) {
      PoseTransformSpaceRequirement = _poseGraphPoseNodeJs.PoseTransformSpaceRequirement;
    }, function (_poseGraphDefaultTopLevelPoseNodeJs) {
      DefaultTopLevelPoseNode = _poseGraphDefaultTopLevelPoseNodeJs.DefaultTopLevelPoseNode;
    }],
    execute: function () {
      _export("AnimationGraphEval", AnimationGraphEval = /*#__PURE__*/function () {
        function AnimationGraphEval(graph, root, controller, clipOverrides) {
          this._currentTransitionCache = {
            duration: 0.0,
            time: 0.0
          };
          this._rootPoseNode = void 0;
          this._varInstances = {};
          this._hasAutoTrigger = false;
          this._auxiliaryCurveRegistry = new AuxiliaryCurveRegistry();
          this._poseLayoutMaintainer = void 0;
          this._bindingContext = void 0;
          this._settleContext = void 0;
          this._rootUpdateContextGenerator = new AnimationGraphUpdateContextGenerator();
          if (DEBUG) {
            if (graph.layers.length >= MAX_ANIMATION_LAYER) {
              throw new Error("Max layer count exceeds. " + ("Allowed: " + MAX_ANIMATION_LAYER + ", actual: " + graph.layers.length));
            }
          }
          for (var _iterator = _createForOfIteratorHelperLoose(graph.variables), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              name = _step$value[0],
              variable = _step$value[1];
            var varInstance = variable[createInstanceTag]();
            this._varInstances[name] = varInstance;
            if (varInstance instanceof VarInstanceTrigger) {
              if (varInstance.resetMode === TriggerResetMode.NEXT_FRAME_OR_AFTER_CONSUMED) {
                this._hasAutoTrigger = true;
              }
            }
          }
          var poseLayoutMaintainer = new AnimationGraphPoseLayoutMaintainer(root, this._auxiliaryCurveRegistry);
          this._poseLayoutMaintainer = poseLayoutMaintainer;
          var bindingContext = new AnimationGraphBindingContext(root, poseLayoutMaintainer, this._varInstances, controller);
          bindingContext._setClipOverrides(clipOverrides !== null && clipOverrides !== void 0 ? clipOverrides : undefined);
          this._bindingContext = bindingContext;
          var settleContext = new AnimationGraphSettleContext(poseLayoutMaintainer);
          this._settleContext = settleContext;
          poseLayoutMaintainer.startBind();
          var poseStashAllocator = new DeferredPoseStashAllocator();
          this._poseStashAllocator = poseStashAllocator;
          this._rootPoseNode = new DefaultTopLevelPoseNode(graph, bindingContext, poseStashAllocator);
          this._root = root;
          this._initializeContexts();
        }
        var _proto = AnimationGraphEval.prototype;
        _proto.destroy = function destroy() {
          this._evaluationContext.destroy();
        };
        _proto._destroyAfterException_debugging = function _destroyAfterException_debugging() {
          var stackSize = this._evaluationContext._stackSize_debugging;
          if (stackSize !== 0) {
            // Should only caused by exception.
            for (var i = 0; i < stackSize; ++i) {
              this._evaluationContext.popPose();
            }
          }
          this._evaluationContext.destroy();
        };
        _proto.update = function update(deltaTime) {
          var evaluationContext = this._evaluationContext,
            poseLayoutMaintainer = this._poseLayoutMaintainer,
            rootUpdateContextGenerator = this._rootUpdateContextGenerator,
            rootPoseNode = this._rootPoseNode;
          var updateContext = rootUpdateContextGenerator.generate(deltaTime, 1.0);
          rootPoseNode.update(updateContext);
          var finalPose = rootPoseNode.evaluate(evaluationContext, PoseTransformSpaceRequirement.LOCAL);
          if (this._hasAutoTrigger) {
            var varInstances = this._varInstances;
            for (var varName in varInstances) {
              var varInstance = varInstances[varName];
              if (varInstance instanceof VarInstanceTrigger && varInstance.resetMode === TriggerResetMode.NEXT_FRAME_OR_AFTER_CONSUMED) {
                varInstance.value = false;
              }
            }
          }
          poseLayoutMaintainer.apply(finalPose);
          evaluationContext.popPose();
          if (DEBUG) {
            assertIsTrue(evaluationContext.allocatedPoseCount === 0, "Pose leaked.");
            assertIsTrue(this._poseStashAllocator.allocatedPoseCount === 0, "Pose leaked.");
          }
        };
        _proto.getVariables = function getVariables() {
          return Object.entries(this._varInstances);
        };
        _proto.getCurrentStateStatus = function getCurrentStateStatus(layer) {
          return this._rootPoseNode.getLayerTopLevelStateMachineEvaluation(layer).getCurrentStateStatus();
        };
        _proto.getCurrentClipStatuses = function getCurrentClipStatuses(layer) {
          return this._rootPoseNode.getLayerTopLevelStateMachineEvaluation(layer).getCurrentClipStatuses();
        };
        _proto.getCurrentTransition = function getCurrentTransition(layer) {
          var currentTransition = this._currentTransitionCache;
          var isInTransition = this._rootPoseNode.getLayerTopLevelStateMachineEvaluation(layer).getCurrentTransition(currentTransition);
          return isInTransition ? currentTransition : null;
        };
        _proto.getNextStateStatus = function getNextStateStatus(layer) {
          return this._rootPoseNode.getLayerTopLevelStateMachineEvaluation(layer).getNextStateStatus();
        };
        _proto.getNextClipStatuses = function getNextClipStatuses(layer) {
          return this._rootPoseNode.getLayerTopLevelStateMachineEvaluation(layer).getNextClipStatuses();
        };
        _proto.getValue = function getValue(name) {
          var varInstance = this._varInstances[name];
          if (!varInstance) {
            return undefined;
          } else {
            return varInstance.value;
          }
        };
        _proto.setValue = function setValue(name, value) {
          var varInstance = this._varInstances[name];
          if (!varInstance) {
            return;
          }
          varInstance.value = value;
        };
        _proto.getLayerWeight = function getLayerWeight(layerIndex) {
          return this._rootPoseNode.getLayerWeight(layerIndex);
        };
        _proto.setLayerWeight = function setLayerWeight(layerIndex, weight) {
          this._rootPoseNode.setLayerWeight(layerIndex, weight);
        };
        _proto.overrideClips = function overrideClips(overrides) {
          var poseLayoutMaintainer = this._poseLayoutMaintainer;
          poseLayoutMaintainer.startBind();
          this._bindingContext._setClipOverrides(overrides);
          this._rootPoseNode.overrideClips(this._bindingContext);
          this._updateAfterPossiblePoseLayoutChange();
        };
        _proto.getAuxiliaryCurveValue = function getAuxiliaryCurveValue(curveName) {
          return this._auxiliaryCurveRegistry.get(curveName);
        };
        _proto._initializeContexts = function _initializeContexts() {
          var poseLayoutMaintainer = this._poseLayoutMaintainer;

          // Ignore in initialization.
          // eslint-disable-next-line no-void
          void poseLayoutMaintainer.endBind();
          this._createOrUpdateTransformFilters();
          var evaluationContext = poseLayoutMaintainer.createEvaluationContext();
          this._evaluationContext = evaluationContext;

          // Capture the default transforms.
          poseLayoutMaintainer.fetchDefaultTransforms(evaluationContext[defaultTransformsTag]);
          poseLayoutMaintainer.resetPoseStashAllocator(this._poseStashAllocator);
        };
        _proto._updateAfterPossiblePoseLayoutChange = function _updateAfterPossiblePoseLayoutChange() {
          var poseLayoutMaintainer = this._poseLayoutMaintainer;
          var layoutChangeFlags = poseLayoutMaintainer.endBind();

          // Nothing changed, this should be the commonest case in real world.
          if (layoutChangeFlags === 0) {
            return;
          }

          // No matter count or order changed, we should update the transform filters.
          if (layoutChangeFlags & LayoutChangeFlag.TRANSFORM_COUNT || layoutChangeFlags & LayoutChangeFlag.TRANSFORM_ORDER) {
            this._createOrUpdateTransformFilters();
          }

          // Either transform count or auxiliary curve count changed, we should recreate the eval context.
          var evaluationContextRecreated = false;
          if (layoutChangeFlags & LayoutChangeFlag.TRANSFORM_COUNT || layoutChangeFlags & LayoutChangeFlag.AUXILIARY_CURVE_COUNT) {
            var evaluationContext = poseLayoutMaintainer.createEvaluationContext();
            this._evaluationContext.destroy();
            this._evaluationContext = evaluationContext;
            evaluationContextRecreated = true;
            poseLayoutMaintainer.resetPoseStashAllocator(this._poseStashAllocator);
          }

          // If the eval context was recreated or the layout has changed, we should update the default transforms.
          if (evaluationContextRecreated || layoutChangeFlags & LayoutChangeFlag.TRANSFORM_COUNT || layoutChangeFlags & LayoutChangeFlag.TRANSFORM_ORDER) {
            poseLayoutMaintainer.fetchDefaultTransforms(this._evaluationContext[defaultTransformsTag]);
          }
        };
        _proto._createOrUpdateTransformFilters = function _createOrUpdateTransformFilters() {
          this._rootPoseNode.settle(this._settleContext);
        };
        _createClass(AnimationGraphEval, [{
          key: "layerCount",
          get: function get() {
            return this._rootPoseNode.layerCount;
          }
        }]);
        return AnimationGraphEval;
      }());
    }
  };
});