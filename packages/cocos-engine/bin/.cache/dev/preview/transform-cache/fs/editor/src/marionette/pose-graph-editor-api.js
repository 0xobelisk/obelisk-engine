System.register("q-bundled:///fs/editor/src/marionette/pose-graph-editor-api.js", ["../../../cocos/animation/marionette/pose-graph/foundation/pose-graph-node.js", "../../../cocos/animation/marionette/pose-graph/foundation/authoring/node-authoring.js", "../../exports/new-gen-anim.js", "../../../cocos/serialization/index.js", "../../../cocos/animation/marionette/pose-graph/graph-output-node.js", "../../../cocos/animation/marionette/pose-graph/pose-node.js", "../../../cocos/animation/marionette/pose-graph/pure-value-node.js", "../../../exports/base.js", "../../../cocos/animation/marionette/pose-graph/pose-nodes/use-stashed-pose.js", "./visit/visit-pose-node.js", "../../../cocos/animation/marionette/pose-graph/pose-graph.js", "../../../cocos/animation/marionette/pose-graph/pose-nodes/state-machine.js", "../../../cocos/core/data/utils/attribute.js", "./pose-graph/drag/index.js"], function (_export, _context) {
  "use strict";

  var PoseGraphNode, getPoseGraphNodeEditorMetadata, poseGraphOp, instantiate, PoseGraphOutputNode, PoseNode, PureValueNode, assertIsTrue, editorExtrasTag, PoseNodeUseStashedPose, visitPoseNodeInLayer, PoseGraph, PoseNodeStateMachine, attr, _marked, _marked2;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function () { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function (t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function (t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function () { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function (e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function (t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function (t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function (e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function getCreatePoseGraphNodeEntries(classConstructor, createNodeContext) {
    var nodeClassMetadata, _iterator, _step, entry;
    return _regeneratorRuntime().wrap(function getCreatePoseGraphNodeEntries$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(classConstructor === PoseNode || classConstructor === PureValueNode || classConstructor === PoseGraphOutputNode)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return");
        case 2:
          nodeClassMetadata = getPoseGraphNodeEditorMetadata(classConstructor);
          if (nodeClassMetadata) {
            _context2.next = 7;
            break;
          }
          _context2.next = 6;
          return {
            arg: undefined
          };
        case 6:
          return _context2.abrupt("return");
        case 7:
          if (!nodeClassMetadata.hide) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return");
        case 9:
          if (!nodeClassMetadata.factory) {
            _context2.next = 19;
            break;
          }
          _iterator = _createForOfIteratorHelperLoose(nodeClassMetadata.factory.listEntries(createNodeContext));
        case 11:
          if ((_step = _iterator()).done) {
            _context2.next = 17;
            break;
          }
          entry = _step.value;
          _context2.next = 15;
          return {
            category: nodeClassMetadata.category,
            subMenu: entry.menu,
            arg: entry.arg
          };
        case 15:
          _context2.next = 11;
          break;
        case 17:
          _context2.next = 21;
          break;
        case 19:
          _context2.next = 21;
          return {
            arg: undefined,
            category: nodeClassMetadata.category
          };
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _marked);
  }
  function createPoseGraphNode(classConstructor, arg) {
    var nodeClassMetadata = getPoseGraphNodeEditorMetadata(classConstructor);
    if (nodeClassMetadata !== null && nodeClassMetadata !== void 0 && nodeClassMetadata.factory) {
      return nodeClassMetadata.factory.create(arg);
    }
    return new classConstructor();
  }
  function getNodeAppearanceOptions(node) {
    var classConstructor = node.constructor;
    var metadata = getPoseGraphNodeEditorMetadata(classConstructor);
    return metadata === null || metadata === void 0 ? void 0 : metadata.appearance;
  }
  function getInputConventionalI18nInfo(inputKey) {
    if (inputKey.length !== 1) {
      return ["inputs." + inputKey[0], {
        elementIndex: inputKey[1]
      }];
    } else {
      return ["inputs." + inputKey];
    }
  }
  function getInputDefaultDisplayName(inputKey) {
    if (inputKey.length === 1) {
      return inputKey[0];
    } else {
      return inputKey[0] + "[" + inputKey[1] + "]";
    }
  }
  function getPoseGraphNodeInputAttrs(node, inputKey) {
    var propertyName = inputKey[0];
    var attrs = attr(node.constructor, propertyName);
    delete attrs.type;
    delete attrs.ctor;
    if (Array.isArray(node[propertyName])) {
      delete attrs['default'];
    }
    return attrs;
  }
  function clonePoseGraphNode(node) {
    return instantiate(node);
  }
  function copyPoseGraphOutputNode(node) {
    return {
      editorExtras: instantiate(node[editorExtrasTag])
    };
  }
  function pastPoseGraphOutputNode(node, copyInfo) {
    node[editorExtrasTag] = copyInfo.editorExtras;
  }
  function cloneInputKey(inputKey) {
    assertIsTrue(Array.isArray(inputKey) && inputKey.every(function (v) {
      return typeof v === 'number' || typeof v === 'string';
    }));
    return inputKey.slice();
  }
  function copyPoseGraphNodes(poseGraph, nodes, options) {
    if (options === void 0) {
      options = {
        copyOutputNodeEditorExtras: true
      };
    }
    var nodesDeduplicated = [].concat(new Set(nodes));

    // Copy nodes.
    var nodeCopyInfos = nodesDeduplicated.map(function (node) {
      if (node === poseGraph.outputNode) {
        return options.copyOutputNodeEditorExtras ? copyPoseGraphOutputNode(poseGraph.outputNode) : {};
      } else {
        return clonePoseGraphNode(node);
      }
    });

    // Copy bindings.
    var bindingCopyInfos = [];
    nodesDeduplicated.forEach(function (node, consumerNodeIndex) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(poseGraphOp.getInputKeys(node)), _step2; !(_step2 = _iterator2()).done;) {
        var inputKey = _step2.value;
        var binding = poseGraphOp.getInputBinding(poseGraph, node, inputKey);
        if (!binding) {
          continue;
        }
        var producerNode = binding.producer;
        var producerNodeIndex = nodesDeduplicated.indexOf(producerNode);
        if (producerNodeIndex < 0) {
          continue;
        }
        bindingCopyInfos.push({
          consumer: consumerNodeIndex,
          inputKey: cloneInputKey(inputKey),
          producer: producerNodeIndex,
          outputKey: binding.outputIndex
        });
      }
    });
    return {
      nodes: nodeCopyInfos,
      bindings: bindingCopyInfos
    };
  }
  function copyStateMachineAsPoseGraphNode(stateMachine) {
    var poseGraph = new PoseGraph();
    var stateMachineNode = poseGraph.addNode(new PoseNodeStateMachine());
    stateMachine.copyTo(stateMachineNode.stateMachine);
    return copyPoseGraphNodes(poseGraph, [stateMachineNode]);
  }
  function pastePoseGraphNodes(poseGraph, copyInfo, options) {
    if (options === void 0) {
      options = {};
    }
    var nodeCopyInfos = copyInfo.nodes,
      bindingCopyInfos = copyInfo.bindings;
    var addedNodes = [];

    // Past nodes.
    for (var _iterator3 = _createForOfIteratorHelperLoose(nodeCopyInfos), _step3; !(_step3 = _iterator3()).done;) {
      var nodeCopyInfo = _step3.value;
      if (nodeCopyInfo instanceof PoseGraphNode) {
        var _nodeCopyInfo$__callO;
        (_nodeCopyInfo$__callO = nodeCopyInfo.__callOnAfterDeserializeRecursive) === null || _nodeCopyInfo$__callO === void 0 ? void 0 : _nodeCopyInfo$__callO.call(nodeCopyInfo);
        poseGraph.addNode(nodeCopyInfo);
        addedNodes.push(nodeCopyInfo);
      } else {
        pastPoseGraphOutputNode(poseGraph.outputNode, nodeCopyInfo);
      }
    }

    // Paste bindings.
    for (var _iterator4 = _createForOfIteratorHelperLoose(bindingCopyInfos), _step4; !(_step4 = _iterator4()).done;) {
      var _step4$value = _step4.value,
        consumer = _step4$value.consumer,
        inputKey = _step4$value.inputKey,
        producer = _step4$value.producer,
        outputKey = _step4$value.outputKey;
      assertIsTrue(consumer >= 0 && consumer < nodeCopyInfos.length);
      assertIsTrue(producer >= 0 && producer < nodeCopyInfos.length);
      var consumerCopyInfo = nodeCopyInfos[consumer];
      var producerNode = nodeCopyInfos[producer];
      assertIsTrue(producerNode instanceof PoseGraphNode);
      if (!(consumerCopyInfo instanceof PoseGraphNode) && options.outputNodeBindingRedirect) {
        poseGraphOp.connectNode(poseGraph, options.outputNodeBindingRedirect.consumerNode, options.outputNodeBindingRedirect.inputKey, producerNode, outputKey);
        continue;
      }
      var consumerNode = consumerCopyInfo instanceof PoseGraphNode ? consumerCopyInfo : poseGraph.outputNode;
      poseGraphOp.connectNode(poseGraph, consumerNode, inputKey, producerNode, outputKey);
    }

    // We're doing a cut.
    nodeCopyInfos.length = 0;
    bindingCopyInfos.length = 0;
    return {
      addedNodes: addedNodes
    };
  }
  /**
   * Stash specified pose graph.
   * 
   * Creates a stash, then move all contents in the pose graph into the stash.
   * Then, create a "PoseNodeUseStashedPose" node to reference the newly created stash.
   * 
   * @param layer The layer that the pose graph belongs to.
   * @param poseGraph The pose graph to stash.
   * @param newStashId Id of the newStash.
   * @returns The stash operation result, or undefined if error occurred.
   */
  function stashPoseGraph(layer, poseGraph, newStashId) {
    // Stash already exists.
    if (layer.getStash(newStashId)) {
      return undefined;
    }
    var stash = layer.addStash(newStashId);

    // Copy nodes into stash graph.
    var copyInfo = copyPoseGraphNodes(poseGraph, [].concat(poseGraph.nodes()));
    pastePoseGraphNodes(stash.graph, copyInfo);

    // Clear original graph.
    for (var _i = 0, _arr = [].concat(poseGraph.nodes()); _i < _arr.length; _i++) {
      var node = _arr[_i];
      if (node !== poseGraph.outputNode) {
        poseGraph.removeNode(node);
      }
    }

    // Add a `Use stash node into original graph.`
    var useStashNode = new PoseNodeUseStashedPose();
    useStashNode.stashName = newStashId;
    poseGraph.addNode(useStashNode);
    return {
      stash: stash,
      useStashNode: useStashNode // Don't expose the node type.
    };
  }

  function visitStashReferences(layer, stashId) {
    var _loop, _iterator5, _step5;
    return _regeneratorRuntime().wrap(function visitStashReferences$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var poseNodeLocation, poseNode;
            return _regeneratorRuntime().wrap(function _loop$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  poseNodeLocation = _step5.value;
                  poseNode = poseNodeLocation[0];
                  if (!(poseNode instanceof PoseNodeUseStashedPose && poseNode.stashName === stashId)) {
                    _context3.next = 5;
                    break;
                  }
                  _context3.next = 5;
                  return {
                    location: poseNodeLocation,
                    alterReference: function alterReference(newStashName) {
                      poseNode.stashName = newStashName;
                    }
                  };
                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _loop);
          });
          _iterator5 = _createForOfIteratorHelperLoose(visitPoseNodeInLayer(layer));
        case 2:
          if ((_step5 = _iterator5()).done) {
            _context4.next = 6;
            break;
          }
          return _context4.delegateYield(_loop(), "t0", 4);
        case 4:
          _context4.next = 2;
          break;
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _marked2);
  }
  _export({
    getCreatePoseGraphNodeEntries: getCreatePoseGraphNodeEntries,
    createPoseGraphNode: createPoseGraphNode,
    getNodeAppearanceOptions: getNodeAppearanceOptions,
    getInputConventionalI18nInfo: getInputConventionalI18nInfo,
    getInputDefaultDisplayName: getInputDefaultDisplayName,
    getPoseGraphNodeInputAttrs: getPoseGraphNodeInputAttrs,
    copyPoseGraphNodes: copyPoseGraphNodes,
    copyStateMachineAsPoseGraphNode: copyStateMachineAsPoseGraphNode,
    pastePoseGraphNodes: pastePoseGraphNodes,
    stashPoseGraph: stashPoseGraph,
    visitStashReferences: visitStashReferences
  });
  return {
    setters: [function (_cocosAnimationMarionettePoseGraphFoundationPoseGraphNodeJs) {
      PoseGraphNode = _cocosAnimationMarionettePoseGraphFoundationPoseGraphNodeJs.PoseGraphNode;
    }, function (_cocosAnimationMarionettePoseGraphFoundationAuthoringNodeAuthoringJs) {
      getPoseGraphNodeEditorMetadata = _cocosAnimationMarionettePoseGraphFoundationAuthoringNodeAuthoringJs.getPoseGraphNodeEditorMetadata;
    }, function (_exportsNewGenAnimJs) {
      poseGraphOp = _exportsNewGenAnimJs.poseGraphOp;
    }, function (_cocosSerializationIndexJs) {
      instantiate = _cocosSerializationIndexJs.instantiate;
    }, function (_cocosAnimationMarionettePoseGraphGraphOutputNodeJs) {
      PoseGraphOutputNode = _cocosAnimationMarionettePoseGraphGraphOutputNodeJs.PoseGraphOutputNode;
    }, function (_cocosAnimationMarionettePoseGraphPoseNodeJs) {
      PoseNode = _cocosAnimationMarionettePoseGraphPoseNodeJs.PoseNode;
    }, function (_cocosAnimationMarionettePoseGraphPureValueNodeJs) {
      PureValueNode = _cocosAnimationMarionettePoseGraphPureValueNodeJs.PureValueNode;
    }, function (_exportsBaseJs) {
      assertIsTrue = _exportsBaseJs.assertIsTrue;
      editorExtrasTag = _exportsBaseJs.editorExtrasTag;
    }, function (_cocosAnimationMarionettePoseGraphPoseNodesUseStashedPoseJs) {
      PoseNodeUseStashedPose = _cocosAnimationMarionettePoseGraphPoseNodesUseStashedPoseJs.PoseNodeUseStashedPose;
    }, function (_visitVisitPoseNodeJs) {
      visitPoseNodeInLayer = _visitVisitPoseNodeJs.visitPoseNodeInLayer;
    }, function (_cocosAnimationMarionettePoseGraphPoseGraphJs) {
      PoseGraph = _cocosAnimationMarionettePoseGraphPoseGraphJs.PoseGraph;
    }, function (_cocosAnimationMarionettePoseGraphPoseNodesStateMachineJs) {
      PoseNodeStateMachine = _cocosAnimationMarionettePoseGraphPoseNodesStateMachineJs.PoseNodeStateMachine;
    }, function (_cocosCoreDataUtilsAttributeJs) {
      attr = _cocosCoreDataUtilsAttributeJs.attr;
    }, function (_poseGraphDragIndexJs) {
      var _exportObj = {};
      for (var _key in _poseGraphDragIndexJs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _poseGraphDragIndexJs[_key];
      }
      _export(_exportObj);
    }],
    execute: function () {
      _marked = /*#__PURE__*/regeneratorRuntime.mark(getCreatePoseGraphNodeEntries);
      _marked2 = /*#__PURE__*/regeneratorRuntime.mark(visitStashReferences);
    }
  };
});