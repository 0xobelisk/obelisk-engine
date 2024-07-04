System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/instantiation.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js", "../../../serialization/index.js", "./pose-node.js", "./pure-value-node.js", "./pose-nodes/play-motion.js"], function (_export, _context) {
  "use strict";

  var DEBUG, assertIsTrue, warn, instantiate, PoseNode, PoseTransformSpaceRequirement, PureValueNode, PoseNodePlayMotion, InstantiatedPoseGraph, DependencyEvaluation, RuntimePVNodeEvaluation, RuntimePVNodePlainPropertyBinding, RuntimePVNodeArrayElementPropertyBinding;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // cSpell:words Evaluatable
  function isEvaluatableNode(node) {
    return node instanceof PoseNode || node instanceof PureValueNode;
  }
  function instantiatePoseGraph(graph, linkContext, mayCountMotionTime) {
    if (mayCountMotionTime === void 0) {
      mayCountMotionTime = false;
    }
    var outputNode = graph.outputNode;
    var outputNodeShell = graph.getShell(outputNode);
    assertIsTrue(outputNodeShell);
    var bindings = outputNodeShell.getBindings();
    // Output node can only has 1 or has no binding.
    assertIsTrue(bindings.length < 2);
    if (bindings.length === 0) {
      return new InstantiatedPoseGraph(undefined, mayCountMotionTime ? [] : undefined);
    }
    // If the output node has a binding, it must be pose node.
    var binding = bindings[0];
    assertIsTrue(binding.outputIndex === 0);
    assertIsTrue(binding.producer instanceof PoseNode);
    var instantiationMap = new Map();
    var mainRecord = instantiateNode(graph, binding.producer, instantiationMap, linkContext);
    assertIsTrue(mainRecord instanceof PoseNode);
    return new InstantiatedPoseGraph(mainRecord, mayCountMotionTime ? Array.from(instantiationMap.values()).filter(function (node) {
      return node instanceof PoseNodePlayMotion;
    }) : undefined);
  }
  function instantiateNode(graph, node, instantiationMap, linkContext) {
    var shell = graph.getShell(node);
    assertIsTrue(shell, "Want to instantiate an unbound graph?");
    var existing = instantiationMap.get(node);
    if (existing) {
      return existing;
    }
    var instantiated = instantiate(node);

    // Invoke serialization callback.
    if ('__callOnAfterDeserializeRecursive' in instantiated) {
      instantiated.__callOnAfterDeserializeRecursive();
    }

    /** Link. */
    if (instantiated instanceof PureValueNode) {
      instantiated.link(linkContext);
    }

    /** Alias. */
    var consumerNode = instantiated;

    /**
     * Create the pv-node property binding records.
     */
    var runtimePVNodePropertyBindings = [];
    for (var _iterator = _createForOfIteratorHelperLoose(shell.getBindings()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
        producerNode = _step$value.producer,
        producerOutputIndex = _step$value.outputIndex,
        consumerInputPath = _step$value.inputPath;
      if (!isEvaluatableNode(producerNode)) {
        warn("There's a input bound to a node with unrecognized type.");
        continue;
      }
      var producer = instantiateNode(graph, producerNode, instantiationMap, linkContext);
      if (producer instanceof PoseNode) {
        // Rule: pose nodes can only be used to feed pose nodes.
        assertIsTrue(consumerNode instanceof PoseNode);
        // Core code: link pose nodes.
        linkPoseNode(consumerNode, consumerInputPath, producer, producerOutputIndex);
      } else {
        var runtimePVNodePropertyBinding = linkPVNode(consumerNode, consumerInputPath, producer, producerOutputIndex);
        if (runtimePVNodePropertyBinding) {
          runtimePVNodePropertyBindings.push(runtimePVNodePropertyBinding);
        }
      }
    }

    // Create the dependency evaluation.
    var dependencyEvaluation = new DependencyEvaluation(runtimePVNodePropertyBindings);

    // Create the evaluation record.
    var evaluation;
    if (consumerNode instanceof PoseNode) {
      // If this is pose node. Injects the dependency.
      consumerNode._setDependencyEvaluation(dependencyEvaluation);
      evaluation = consumerNode;
    } else {
      // Otherwise, create the evaluation record.
      var pureValueNodeEvaluation = new RuntimePVNodeEvaluation(consumerNode, dependencyEvaluation);
      evaluation = pureValueNodeEvaluation;
    }
    instantiationMap.set(node, evaluation);
    return evaluation;
  }
  function linkPoseNode(consumerNode, consumerInputPath, producerNode, producerOutputIndex) {
    var consumerPropertyKey = consumerInputPath[0],
      _consumerInputPath$ = consumerInputPath[1],
      consumerElementIndex = _consumerInputPath$ === void 0 ? -1 : _consumerInputPath$;
    if (!(consumerPropertyKey in consumerNode)) {
      // Invalid binding.
      warn("Invalid binding: consumer node has no property " + consumerPropertyKey);
      return;
    }
    if (producerOutputIndex !== 0) {
      // Rule: pose nodes have and only have one output.
      warn("Node " + producerNode.toString() + " does not have specified output " + producerOutputIndex + ".");
      return;
    }
    var consumerProperty = consumerNode[consumerPropertyKey];

    // Plain property binding.

    if (consumerElementIndex < 0) {
      if (consumerProperty !== null) {
        // Invalid binding.
        warn("Invalid binding: consumer node's input " + consumerPropertyKey + " should be leaved as evaluation before evaluation.");
        return;
      }
      consumerNode[consumerPropertyKey] = producerNode;
      return;
    }

    // The following is dedicated to array element bindings.

    if (!Array.isArray(consumerProperty)) {
      // Invalid binding.
      warn("Invalid binding: consumer node's input " + consumerPropertyKey + " should be an array.");
      return;
    }
    if (consumerElementIndex >= consumerProperty.length) {
      // Invalid binding.
      warn("Invalid binding: consumer node's input " + consumerPropertyKey + " " + ("have length " + consumerProperty.length + " but the binding specified " + consumerElementIndex));
      return;
    }
    if (consumerProperty[consumerElementIndex] !== null) {
      // Invalid binding.
      warn("Invalid binding: consumer node's input " + consumerPropertyKey + "[" + consumerElementIndex + "] should be leaved as null before evaluation");
      return;
    }
    consumerProperty[consumerElementIndex] = producerNode;
  }
  function linkPVNode(consumerNode, consumerInputPath, producerRecord, producerOutputIndex) {
    var consumerPropertyKey = consumerInputPath[0],
      _consumerInputPath$2 = consumerInputPath[1],
      consumerElementIndex = _consumerInputPath$2 === void 0 ? -1 : _consumerInputPath$2;
    if (!(consumerPropertyKey in consumerNode)) {
      // Invalid binding.
      warn("Invalid binding: consumer node has no property " + consumerPropertyKey);
      return undefined;
    }
    var consumerProperty = consumerNode[consumerPropertyKey];

    // Plain property binding.

    if (consumerElementIndex < 0) {
      return new RuntimePVNodePlainPropertyBinding(consumerNode, consumerPropertyKey, producerRecord, producerOutputIndex);
    }

    // The following is dedicated to array element bindings.

    if (!Array.isArray(consumerProperty)) {
      // Invalid binding.
      warn("Invalid binding: consumer node's input " + consumerPropertyKey + " should be an array.");
      return undefined;
    }
    if (consumerElementIndex >= consumerProperty.length) {
      // Invalid binding.
      warn("Invalid binding: consumer node's input " + consumerPropertyKey + " " + ("have length " + consumerProperty.length + " but the binding specified " + consumerElementIndex));
      return undefined;
    }
    return new RuntimePVNodeArrayElementPropertyBinding(consumerNode, consumerPropertyKey, consumerElementIndex, producerRecord, producerOutputIndex);
  }
  _export("instantiatePoseGraph", instantiatePoseGraph);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      warn = _coreIndexJs.warn;
    }, function (_serializationIndexJs) {
      instantiate = _serializationIndexJs.instantiate;
    }, function (_poseNodeJs) {
      PoseNode = _poseNodeJs.PoseNode;
      PoseTransformSpaceRequirement = _poseNodeJs.PoseTransformSpaceRequirement;
    }, function (_pureValueNodeJs) {
      PureValueNode = _pureValueNodeJs.PureValueNode;
    }, function (_poseNodesPlayMotionJs) {
      PoseNodePlayMotion = _poseNodesPlayMotionJs.PoseNodePlayMotion;
    }],
    execute: function () {
      InstantiatedPoseGraph = /*#__PURE__*/function () {
        function InstantiatedPoseGraph(_rootPoseNode, _countingPlayMotionNodes) {
          this._rootPoseNode = _rootPoseNode;
          this._countingPlayMotionNodes = _countingPlayMotionNodes;
        }
        var _proto = InstantiatedPoseGraph.prototype;
        _proto.bind = function bind(context) {
          var _this$_rootPoseNode;
          (_this$_rootPoseNode = this._rootPoseNode) === null || _this$_rootPoseNode === void 0 ? void 0 : _this$_rootPoseNode.bind(context);
        };
        _proto.settle = function settle(context) {
          var _this$_rootPoseNode2;
          (_this$_rootPoseNode2 = this._rootPoseNode) === null || _this$_rootPoseNode2 === void 0 ? void 0 : _this$_rootPoseNode2.settle(context);
        };
        _proto.reenter = function reenter() {
          var _this$_rootPoseNode3;
          (_this$_rootPoseNode3 = this._rootPoseNode) === null || _this$_rootPoseNode3 === void 0 ? void 0 : _this$_rootPoseNode3.reenter();
        };
        _proto.update = function update(context) {
          var _this$_rootPoseNode4;
          (_this$_rootPoseNode4 = this._rootPoseNode) === null || _this$_rootPoseNode4 === void 0 ? void 0 : _this$_rootPoseNode4.update(context);
        };
        _proto.evaluate = function evaluate(context) {
          var _this$_rootPoseNode$e, _this$_rootPoseNode5;
          return (_this$_rootPoseNode$e = (_this$_rootPoseNode5 = this._rootPoseNode) === null || _this$_rootPoseNode5 === void 0 ? void 0 : _this$_rootPoseNode5.evaluate(context, PoseTransformSpaceRequirement.LOCAL)) !== null && _this$_rootPoseNode$e !== void 0 ? _this$_rootPoseNode$e : null;
        };
        _proto.countMotionTime = function countMotionTime() {
          var playMotionNodes = this._countingPlayMotionNodes;
          if (!playMotionNodes) {
            if (DEBUG) {
              assertIsTrue(false, "Should not call countMotionTime() on this pose graph " + "since \"mayCountMotionTime\" was not passed to instantiatePoseGraph()");
            }
            return 0.0;
          }
          var maxWeightedTime = 0.0;
          var maxWeight = Number.NEGATIVE_INFINITY;
          for (var iPlayMotionNode = 0; iPlayMotionNode < playMotionNodes.length; ++iPlayMotionNode) {
            var _playMotionNodes$iPla = playMotionNodes[iPlayMotionNode],
              elapsedMotionTime = _playMotionNodes$iPla.elapsedMotionTime,
              lastIndicativeWeight = _playMotionNodes$iPla.lastIndicativeWeight;
            if (lastIndicativeWeight > maxWeight) {
              maxWeight = lastIndicativeWeight;
              maxWeightedTime = elapsedMotionTime;
            }
          }
          return maxWeightedTime;
        };
        return InstantiatedPoseGraph;
      }();
      DependencyEvaluation = /*#__PURE__*/function () {
        function DependencyEvaluation(bindingEvaluations) {
          this._bindingEvaluations = void 0;
          this._bindingEvaluations = bindingEvaluations;
        }
        var _proto2 = DependencyEvaluation.prototype;
        _proto2.evaluate = function evaluate() {
          var bindingEvaluations = this._bindingEvaluations;
          for (var _iterator2 = _createForOfIteratorHelperLoose(bindingEvaluations), _step2; !(_step2 = _iterator2()).done;) {
            var binding = _step2.value;
            binding.evaluate();
          }
        };
        return DependencyEvaluation;
      }();
      RuntimePVNodeEvaluation = /*#__PURE__*/function () {
        function RuntimePVNodeEvaluation(_node, _dependency) {
          this._outputs = void 0;
          this._node = _node;
          this._dependency = _dependency;
          this._outputs = new Array(_node.outputCount);
        }
        var _proto3 = RuntimePVNodeEvaluation.prototype;
        _proto3.getDefaultOutput = function getDefaultOutput() {
          return this.getOutput(0);
        };
        _proto3.getOutput = function getOutput(outputIndex) {
          return this._outputs[outputIndex];
        };
        _proto3.evaluate = function evaluate() {
          var node = this._node,
            dependency = this._dependency;
          // Evaluate the dependency.
          dependency.evaluate();
          // Evaluate the node.
          node.selfEvaluate(this._outputs);
        };
        _createClass(RuntimePVNodeEvaluation, [{
          key: "node",
          get: function get() {
            return this._node;
          }
        }, {
          key: "outputCount",
          get: function get() {
            return this._outputs.length;
          }
        }]);
        return RuntimePVNodeEvaluation;
      }();
      RuntimePVNodePlainPropertyBinding = /*#__PURE__*/function () {
        function RuntimePVNodePlainPropertyBinding(_consumerNode, _consumerPropertyKey, _producerRecord, _producerOutputIndex) {
          this._consumerNode = _consumerNode;
          this._consumerPropertyKey = _consumerPropertyKey;
          this._producerRecord = _producerRecord;
          this._producerOutputIndex = _producerOutputIndex;
        }
        var _proto4 = RuntimePVNodePlainPropertyBinding.prototype;
        _proto4.evaluate = function evaluate() {
          this._producerRecord.evaluate();
          this._consumerNode[this._consumerPropertyKey] = this._producerRecord.getOutput(this._producerOutputIndex);
        };
        return RuntimePVNodePlainPropertyBinding;
      }();
      RuntimePVNodeArrayElementPropertyBinding = /*#__PURE__*/function () {
        function RuntimePVNodeArrayElementPropertyBinding(_consumerNode, _consumerPropertyKey, _consumerElementIndex, _producerRecord, _producerOutputIndex) {
          this._consumerNode = _consumerNode;
          this._consumerPropertyKey = _consumerPropertyKey;
          this._consumerElementIndex = _consumerElementIndex;
          this._producerRecord = _producerRecord;
          this._producerOutputIndex = _producerOutputIndex;
        }
        var _proto5 = RuntimePVNodeArrayElementPropertyBinding.prototype;
        _proto5.evaluate = function evaluate() {
          this._producerRecord.evaluate();
          this._consumerNode[this._consumerPropertyKey][this._consumerElementIndex] = this._producerRecord.getOutput(this._producerOutputIndex);
        };
        return RuntimePVNodeArrayElementPropertyBinding;
      }();
    }
  };
});