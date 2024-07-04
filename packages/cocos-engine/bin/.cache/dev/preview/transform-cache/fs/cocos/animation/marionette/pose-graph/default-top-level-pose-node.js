System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/default-top-level-pose-node.js", ["../../../core/index.js", "../../core/pose.js", "../state-machine/state-machine-eval.js", "./pose-node.js", "./motion-sync/runtime-motion-sync.js", "./stash/runtime-stash.js"], function (_export, _context2) {
  "use strict";

  var assertIsTrue, applyDeltaPose, blendPoseInto, TopLevelStateMachineEvaluation, PoseNode, RuntimeMotionSyncManager, RuntimeStashManager, DefaultTopLevelPoseNode, LayerEvaluationRecord;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_corePoseJs) {
      applyDeltaPose = _corePoseJs.applyDeltaPose;
      blendPoseInto = _corePoseJs.blendPoseInto;
    }, function (_stateMachineStateMachineEvalJs) {
      TopLevelStateMachineEvaluation = _stateMachineStateMachineEvalJs.TopLevelStateMachineEvaluation;
    }, function (_poseNodeJs) {
      PoseNode = _poseNodeJs.PoseNode;
    }, function (_motionSyncRuntimeMotionSyncJs) {
      RuntimeMotionSyncManager = _motionSyncRuntimeMotionSyncJs.RuntimeMotionSyncManager;
    }, function (_stashRuntimeStashJs) {
      RuntimeStashManager = _stashRuntimeStashJs.RuntimeStashManager;
    }],
    execute: function () {
      _export("DefaultTopLevelPoseNode", DefaultTopLevelPoseNode = /*#__PURE__*/function (_PoseNode) {
        _inheritsLoose(DefaultTopLevelPoseNode, _PoseNode);
        function DefaultTopLevelPoseNode(graph, bindingContext, poseStashAllocator) {
          var _this;
          _this = _PoseNode.call(this) || this;
          _this._layerRecords = void 0;
          var layerEvaluationRecords = graph.layers.map(function (layer) {
            var record = new LayerEvaluationRecord(layer, bindingContext, poseStashAllocator);
            return record;
          });
          _this._layerRecords = layerEvaluationRecords;
          return _this;
        }
        var _proto = DefaultTopLevelPoseNode.prototype;
        _proto.reenter = function reenter() {
          // Default top level pose is meant to be non-reenter-able.
          // Do nothing here.
        };
        _proto.bind = function bind(_context) {
          // `LayerEvaluationRecord` should have already been bound.
          // Do nothing here.
        };
        _proto.settle = function settle(context) {
          var layerRecords = this._layerRecords;
          var nLayers = layerRecords.length;
          for (var iLayer = 0; iLayer < nLayers; ++iLayer) {
            layerRecords[iLayer].settle(context);
          }
        };
        _proto.getLayerWeight = function getLayerWeight(layerIndex) {
          assertIsTrue(layerIndex >= 0 && layerIndex < this._layerRecords.length, "Invalid layer index");
          return this._layerRecords[layerIndex].weight;
        };
        _proto.setLayerWeight = function setLayerWeight(layerIndex, weight) {
          assertIsTrue(layerIndex >= 0 && layerIndex < this._layerRecords.length, "Invalid layer index");
          this._layerRecords[layerIndex].weight = weight;
        };
        _proto.getLayerTopLevelStateMachineEvaluation = function getLayerTopLevelStateMachineEvaluation(layerIndex) {
          return this._layerRecords[layerIndex].stateMachineEvaluation;
        };
        _proto.overrideClips = function overrideClips(context) {
          var layerRecords = this._layerRecords;
          var nLayers = layerRecords.length;
          for (var iLayer = 0; iLayer < nLayers; ++iLayer) {
            var layerRecord = layerRecords[iLayer];
            context._pushAdditiveFlag(layerRecord.additive);
            layerRecord.stateMachineEvaluation.overrideClips(context);
            context._popAdditiveFlag();
          }
        };
        _proto.doUpdate = function doUpdate(context) {
          var layerRecords = this._layerRecords;
          var nLayers = layerRecords.length;
          for (var iLayer = 0; iLayer < nLayers; ++iLayer) {
            layerRecords[iLayer].update(context);
          }
        };
        _proto.doEvaluate = function doEvaluate(context) {
          var finalPose = context.pushDefaultedPose();
          var layerRecords = this._layerRecords;
          var nLayers = layerRecords.length;
          for (var iLayer = 0; iLayer < nLayers; ++iLayer) {
            var layer = layerRecords[iLayer];
            var layerPose = layer.stateMachineEvaluation.evaluate(context);
            var layerActualWeight = layer.weight * layer.stateMachineEvaluation.passthroughWeight;
            var transformFilter = layer.transformFilter;
            if (layer.additive) {
              applyDeltaPose(finalPose, layerPose, layerActualWeight, transformFilter);
            } else {
              blendPoseInto(finalPose, layerPose, layerActualWeight, transformFilter);
            }
            context.popPose();
            layer.postEvaluate();
          }
          return finalPose;
        };
        _createClass(DefaultTopLevelPoseNode, [{
          key: "layerCount",
          get: function get() {
            return this._layerRecords.length;
          }
        }]);
        return DefaultTopLevelPoseNode;
      }(PoseNode));
      LayerEvaluationRecord = /*#__PURE__*/function () {
        function LayerEvaluationRecord(layer, bindingContext, poseStashAllocator) {
          var _layer$mask;
          this.additive = false;
          this.weight = 0.0;
          this._topLevelStateMachineEval = void 0;
          this._stashManager = void 0;
          this._motionSyncManager = void 0;
          this._mask = undefined;
          this.transformFilter = undefined;
          var stashManager = new RuntimeStashManager(poseStashAllocator);
          for (var _iterator = _createForOfIteratorHelperLoose(layer.stashes()), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              stashId = _step$value[0],
              _ = _step$value[1];
            stashManager.addStash(stashId);
          }
          this._stashManager = stashManager;
          var motionSyncManager = new RuntimeMotionSyncManager();
          this._motionSyncManager = motionSyncManager;
          bindingContext._setLayerWideContextProperties(stashManager, motionSyncManager);
          for (var _iterator2 = _createForOfIteratorHelperLoose(layer.stashes()), _step2; !(_step2 = _iterator2()).done;) {
            var _step2$value = _step2.value,
              _stashId = _step2$value[0],
              stash = _step2$value[1];
            stashManager.setStash(_stashId, stash, bindingContext);
          }
          this.weight = layer.weight;
          var additive = this.additive = layer.additive;
          this._mask = (_layer$mask = layer.mask) !== null && _layer$mask !== void 0 ? _layer$mask : undefined;
          bindingContext._pushAdditiveFlag(additive);
          this._topLevelStateMachineEval = new TopLevelStateMachineEvaluation(layer.stateMachine, layer.name, bindingContext);
          bindingContext._popAdditiveFlag();
          bindingContext._unsetLayerWideContextProperties();
        }
        var _proto2 = LayerEvaluationRecord.prototype;
        _proto2.settle = function settle(context) {
          if (this._mask) {
            this.transformFilter = context.createTransformFilter(this._mask);
          }

          // Settle layer stashes.
          this._stashManager.settle(context);

          // Settle the top level state machine.
          this._topLevelStateMachineEval.settle(context);
        };
        _proto2.update = function update(context) {
          this.stateMachineEvaluation.update(context);
          this._motionSyncManager.sync();
        };
        _proto2.postEvaluate = function postEvaluate() {
          // Reset stash resources.
          this._stashManager.reset();
        };
        _createClass(LayerEvaluationRecord, [{
          key: "stateMachineEvaluation",
          get: function get() {
            return this._topLevelStateMachineEval;
          }
        }]);
        return LayerEvaluationRecord;
      }();
    }
  };
});