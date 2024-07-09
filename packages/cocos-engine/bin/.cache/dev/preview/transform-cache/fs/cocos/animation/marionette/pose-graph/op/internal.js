System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/op/internal.js", ["../pose-node.js", "../foundation/authoring/input-authoring.js", "../pure-value-node.js", "../../../../core/index.js", "../foundation/type-system.js", "../foundation/pose-graph-node.js"], function (_export, _context) {
  "use strict";

  var PoseNode, globalPoseGraphNodeInputManager, PureValueNode, assertIsTrue, error, PoseGraphType, PoseGraphNode, POSE_NODE_OUTPUT_BINDING_KEY, getOutputKeys;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function getInputKeys(node) {
    return globalPoseGraphNodeInputManager.getInputKeys(node);
  }
  function isValidInputKey(node, key) {
    return globalPoseGraphNodeInputManager.hasInput(node, key);
  }
  function getInputMetadata(node, key) {
    return globalPoseGraphNodeInputManager.getInputMetadata(node, key);
  }
  function getInputConstantValue(node, key) {
    if (!globalPoseGraphNodeInputManager.hasInput(node, key)) {
      return undefined;
    }
    if (globalPoseGraphNodeInputManager.isPoseInput(node, key)) {
      // Pose input's "constant value" is defined as `null`.
      return null;
    }
    return getPureValueInputConstantValue(node, key);
  }
  function getInputBinding(graph, node, key) {
    var _graph$getShell;
    return (_graph$getShell = graph.getShell(node)) === null || _graph$getShell === void 0 ? void 0 : _graph$getShell.findBinding(key);
  }
  function getInputInsertInfos(node) {
    return globalPoseGraphNodeInputManager.getInputInsertInfos(node);
  }
  function insertInput(graph, node, insertId) {
    return globalPoseGraphNodeInputManager.insertInput(graph, node, insertId);
  }
  function deleteInput(graph, node, key) {
    globalPoseGraphNodeInputManager.deleteInput(graph, node, key);
  }
  function getOutputType(node, outputId) {
    if (node instanceof PoseNode) {
      return PoseGraphType.POSE;
    } else if (node instanceof PureValueNode) {
      var outputIndex = Number(outputId);
      if (outputIndex < 0 || outputIndex >= node.outputCount) {
        throw new Error(node + " does not have specified output key " + outputId);
      } else {
        return node.getOutputType(outputIndex);
      }
    } else {
      throw new Error(node + " does not have specified output key.");
    }
  }
  function connectNode(graph, node, key, producer, outputKey) {
    var consumerNode = node;
    var consumerShell = graph.getShell(node);
    if (!consumerShell) {
      error("Consumer node is not with in graph!");
      return;
    }
    var inputMetadata = getInputMetadata(consumerNode, key);
    if (!inputMetadata) {
      error("Consumer node does not have such specified input key " + key);
      return;
    }
    var outputIndex = 0;
    var outputType;
    if (producer instanceof PureValueNode) {
      if (typeof outputKey !== 'number') {
        error("Output key is not specified.");
        return;
      }
      var _outputIndex = Number(outputKey);
      if (_outputIndex < 0 || _outputIndex >= producer.outputCount) {
        error("Producer node does not have such specified output key " + key);
        return;
      }
      outputType = producer.getOutputType(_outputIndex);
    } else {
      if ((outputKey !== null && outputKey !== void 0 ? outputKey : POSE_NODE_OUTPUT_BINDING_KEY) !== POSE_NODE_OUTPUT_BINDING_KEY) {
        error("Pose nodes have and only have single output.");
        return;
      }
      outputType = PoseGraphType.POSE;
    }
    var inputType = inputMetadata.type;
    if (inputType !== outputType) {
      error("Type mismatch: input has type " + PoseGraphType[inputType] + ", output has type " + PoseGraphType[outputType] + ".");
      return;
    }

    // We currently do not allow a pose producer to be connected to multiple consumers.
    if (outputType === PoseGraphType.POSE) {
      for (var _iterator = _createForOfIteratorHelperLoose(graph.nodes()), _step; !(_step = _iterator()).done;) {
        var _node = _step.value;
        var shell = graph.getShell(_node);
        assertIsTrue(shell);
        shell.deleteBindingTo(producer);
      }
    }
    var propertyKey = key[0],
      _key$ = key[1],
      elementIndex = _key$ === void 0 ? -1 : _key$;
    var property = consumerNode[propertyKey];
    if (elementIndex >= 0) {
      if (!Array.isArray(property)) {
        return;
      }
      if (elementIndex >= property.length) {
        return;
      }
      consumerShell.addBinding([propertyKey, elementIndex], producer, outputIndex);
    } else {
      consumerShell.addBinding([propertyKey], producer, outputIndex);
    }
  }
  function disconnectNode(graph, node, key) {
    var _graph$getShell2;
    (_graph$getShell2 = graph.getShell(node)) === null || _graph$getShell2 === void 0 ? void 0 : _graph$getShell2.deleteBinding(key);
  }
  function connectOutputNode(graph, producer) {
    var outputNode = graph.outputNode;
    var outputNodeInputKeys = getInputKeys(outputNode);
    assertIsTrue(outputNodeInputKeys.length === 1);
    connectNode(graph, outputNode, outputNodeInputKeys[0], producer);
  }
  function hasInputBinding(graph, node, key, producerNode, producerOutputKey) {
    var binding = getInputBinding(graph, node, key);
    if (!binding) {
      return false;
    }
    return binding.producer === producerNode && binding.outputIndex === producerOutputKey;
  }
  function getPureValueInputConstantValue(node, inputKey) {
    var propertyKey = inputKey[0],
      _inputKey$ = inputKey[1],
      elementIndex = _inputKey$ === void 0 ? -1 : _inputKey$;
    var property = node[propertyKey];
    if (!Array.isArray(property)) {
      return property;
    }
    if (elementIndex < 0 || elementIndex >= property.length) {
      return undefined;
    }
    return property[elementIndex];
  }
  function isWellFormedInputKey(test) {
    if (!Array.isArray(test)) {
      return false;
    }
    if (test.length > 2) {
      return false;
    }
    if (typeof test[0] !== 'string') {
      return false;
    }
    if (test.length > 1) {
      var e1 = test[1];
      if (typeof e1 !== 'number' || e1 < 0 || !Number.isFinite(e1)) {
        return false;
      }
    }
    return true;
  }
  _export({
    getInputKeys: getInputKeys,
    isValidInputKey: isValidInputKey,
    getInputMetadata: getInputMetadata,
    getInputConstantValue: getInputConstantValue,
    getInputBinding: getInputBinding,
    getInputInsertInfos: getInputInsertInfos,
    insertInput: insertInput,
    deleteInput: deleteInput,
    getOutputType: getOutputType,
    connectNode: connectNode,
    disconnectNode: disconnectNode,
    connectOutputNode: connectOutputNode,
    hasInputBinding: hasInputBinding,
    isWellFormedInputKey: isWellFormedInputKey
  });
  return {
    setters: [function (_poseNodeJs) {
      PoseNode = _poseNodeJs.PoseNode;
    }, function (_foundationAuthoringInputAuthoringJs) {
      globalPoseGraphNodeInputManager = _foundationAuthoringInputAuthoringJs.globalPoseGraphNodeInputManager;
    }, function (_pureValueNodeJs) {
      PureValueNode = _pureValueNodeJs.PureValueNode;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      error = _coreIndexJs.error;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }, function (_foundationPoseGraphNodeJs) {
      PoseGraphNode = _foundationPoseGraphNodeJs.PoseGraphNode;
    }],
    execute: function () {
      _export("Node", PoseGraphNode);
      _export("PoseGraphType", PoseGraphType);
      POSE_NODE_OUTPUT_BINDING_KEY = 0;
      _export("getOutputKeys", getOutputKeys = function () {
        var poseNodeOutputKeys = Object.freeze([POSE_NODE_OUTPUT_BINDING_KEY]);
        return function (node) {
          if (node instanceof PoseNode) {
            return poseNodeOutputKeys;
          } else if (node instanceof PureValueNode) {
            // TODO: optimize me
            var outputCount = node.outputCount;
            return Array.from({
              length: outputCount
            }, function (_, i) {
              return i;
            });
          } else {
            return [];
          }
        };
      }());
    }
  };
});