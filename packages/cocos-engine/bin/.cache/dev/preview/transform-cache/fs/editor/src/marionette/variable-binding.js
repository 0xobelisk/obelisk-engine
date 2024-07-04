System.register("q-bundled:///fs/editor/src/marionette/variable-binding.js", ["../../../cocos/animation/marionette/asset-creation.js", "../../../cocos/animation/marionette/pose-graph/pose-nodes/state-machine.js", "../../../cocos/animation/marionette/state-machine/condition/binding/variable-binding.js", "../../../cocos/animation/marionette/pose-graph/pure-value-nodes/get-variable.js", "../../../cocos/animation/marionette/pose-graph/foundation/type-system.js", "../../../exports/base.js"], function (_export, _context) {
  "use strict";

  var AnimationBlend1D, AnimationBlend2D, AnimationBlendDirect, UnaryCondition, BinaryCondition, TriggerCondition, MotionState, SubStateMachine, VariableType, ProceduralPoseState, PoseNodeStateMachine, TCVariableBinding, PVNodeGetVariableBase, PoseGraphType, assertIsTrue, _marked2;
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function () { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function (t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function (t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function () { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function (e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function (t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function (t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function (e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function viewVariableBindings(animationGraph) {
    var _marked, _iterator, _step, layer, createVariableBindingView, createTCVariableBindingView, visitStateMachine;
    return _regeneratorRuntime().wrap(function viewVariableBindings$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          visitStateMachine = function _visitStateMachine(stateMachine) {
            var _iterator2, _step2, transition, _iterator4, _step4, condition, _iterator3, _step3, state, motion, _iterator5, _step5, node, outputType;
            return _regeneratorRuntime().wrap(function visitStateMachine$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _iterator2 = _createForOfIteratorHelperLoose(stateMachine.transitions());
                case 1:
                  if ((_step2 = _iterator2()).done) {
                    _context2.next = 24;
                    break;
                  }
                  transition = _step2.value;
                  _iterator4 = _createForOfIteratorHelperLoose(transition.conditions);
                case 4:
                  if ((_step4 = _iterator4()).done) {
                    _context2.next = 22;
                    break;
                  }
                  condition = _step4.value;
                  if (!(condition instanceof UnaryCondition)) {
                    _context2.next = 11;
                    break;
                  }
                  _context2.next = 9;
                  return createVariableBindingView(condition.operand, 'variable', VariableType.BOOLEAN);
                case 9:
                  _context2.next = 20;
                  break;
                case 11:
                  if (!(condition instanceof BinaryCondition)) {
                    _context2.next = 17;
                    break;
                  }
                  if (!(condition.lhsBinding instanceof TCVariableBinding)) {
                    _context2.next = 15;
                    break;
                  }
                  _context2.next = 15;
                  return createTCVariableBindingView(condition.lhsBinding, [VariableType.FLOAT, VariableType.INTEGER]);
                case 15:
                  _context2.next = 20;
                  break;
                case 17:
                  if (!(condition instanceof TriggerCondition)) {
                    _context2.next = 20;
                    break;
                  }
                  _context2.next = 20;
                  return createVariableBindingView(condition, 'trigger', VariableType.TRIGGER);
                case 20:
                  _context2.next = 4;
                  break;
                case 22:
                  _context2.next = 1;
                  break;
                case 24:
                  _iterator3 = _createForOfIteratorHelperLoose(stateMachine.states());
                case 25:
                  if ((_step3 = _iterator3()).done) {
                    _context2.next = 65;
                    break;
                  }
                  state = _step3.value;
                  if (!(state instanceof MotionState)) {
                    _context2.next = 44;
                    break;
                  }
                  motion = state.motion;
                  if (!(motion instanceof AnimationBlend1D)) {
                    _context2.next = 34;
                    break;
                  }
                  _context2.next = 32;
                  return createVariableBindingView(motion.param, 'variable', [VariableType.FLOAT]);
                case 32:
                  _context2.next = 42;
                  break;
                case 34:
                  if (!(motion instanceof AnimationBlend2D)) {
                    _context2.next = 41;
                    break;
                  }
                  _context2.next = 37;
                  return createVariableBindingView(motion.paramX, 'variable', [VariableType.FLOAT]);
                case 37:
                  _context2.next = 39;
                  return createVariableBindingView(motion.paramY, 'variable', [VariableType.FLOAT]);
                case 39:
                  _context2.next = 42;
                  break;
                case 41:
                  if (motion instanceof AnimationBlendDirect) {
                    // TODO?
                  }
                case 42:
                  _context2.next = 63;
                  break;
                case 44:
                  if (!(state instanceof SubStateMachine)) {
                    _context2.next = 48;
                    break;
                  }
                  return _context2.delegateYield(visitStateMachine(state.stateMachine), "t0", 46);
                case 46:
                  _context2.next = 63;
                  break;
                case 48:
                  if (!(state instanceof ProceduralPoseState)) {
                    _context2.next = 63;
                    break;
                  }
                  _iterator5 = _createForOfIteratorHelperLoose(state.graph.nodes());
                case 50:
                  if ((_step5 = _iterator5()).done) {
                    _context2.next = 63;
                    break;
                  }
                  node = _step5.value;
                  if (!(node instanceof PoseNodeStateMachine)) {
                    _context2.next = 56;
                    break;
                  }
                  return _context2.delegateYield(visitStateMachine(node.stateMachine), "t1", 54);
                case 54:
                  _context2.next = 61;
                  break;
                case 56:
                  if (!(node instanceof PVNodeGetVariableBase)) {
                    _context2.next = 61;
                    break;
                  }
                  outputType = node.getOutputType(0);
                  assertIsTrue(outputType !== PoseGraphType.POSE);
                  _context2.next = 61;
                  return createVariableBindingView(node, 'variableName', poseGraphTypeToAcceptableVariableType(outputType));
                case 61:
                  _context2.next = 50;
                  break;
                case 63:
                  _context2.next = 25;
                  break;
                case 65:
                case "end":
                  return _context2.stop();
              }
            }, _marked);
          };
          createTCVariableBindingView = function _createTCVariableBind(binding, acceptableTypes) {
            return {
              get name() {
                return binding.variableName;
              },
              get acceptableTypes() {
                return acceptableTypes;
              },
              rebind: function rebind(newVariableName) {
                binding.variableName = newVariableName;
              },
              unbind: function unbind() {
                binding.variableName = '';
              }
            };
          };
          createVariableBindingView = function _createVariableBindin(object, key, acceptableTypes) {
            return {
              get name() {
                return object[key];
              },
              get acceptableTypes() {
                return Array.isArray(acceptableTypes) ? acceptableTypes : [acceptableTypes];
              },
              rebind: function rebind(newName) {
                object[key] = newName;
              },
              unbind: function unbind() {
                object[key] = '';
              }
            };
          };
          _marked = /*#__PURE__*/_regeneratorRuntime().mark(visitStateMachine);
          _iterator = _createForOfIteratorHelperLoose(animationGraph.layers);
        case 5:
          if ((_step = _iterator()).done) {
            _context3.next = 10;
            break;
          }
          layer = _step.value;
          return _context3.delegateYield(visitStateMachine(layer.stateMachine), "t0", 8);
        case 8:
          _context3.next = 5;
          break;
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _marked2);
  }
  function poseGraphTypeToAcceptableVariableType(poseGraphType) {
    switch (poseGraphType) {
      default:
        throw new Error("Unhandled pose graph type " + PoseGraphType[poseGraphType]);
      case PoseGraphType.FLOAT:
        return VariableType.FLOAT;
      case PoseGraphType.INTEGER:
        return VariableType.INTEGER;
      case PoseGraphType.BOOLEAN:
        return VariableType.BOOLEAN;
      case PoseGraphType.VEC3:
        return VariableType.VEC3_experimental;
      case PoseGraphType.QUAT:
        return VariableType.QUAT_experimental;
    }
  }
  _export("viewVariableBindings", viewVariableBindings);
  return {
    setters: [function (_cocosAnimationMarionetteAssetCreationJs) {
      AnimationBlend1D = _cocosAnimationMarionetteAssetCreationJs.AnimationBlend1D;
      AnimationBlend2D = _cocosAnimationMarionetteAssetCreationJs.AnimationBlend2D;
      AnimationBlendDirect = _cocosAnimationMarionetteAssetCreationJs.AnimationBlendDirect;
      UnaryCondition = _cocosAnimationMarionetteAssetCreationJs.UnaryCondition;
      BinaryCondition = _cocosAnimationMarionetteAssetCreationJs.BinaryCondition;
      TriggerCondition = _cocosAnimationMarionetteAssetCreationJs.TriggerCondition;
      MotionState = _cocosAnimationMarionetteAssetCreationJs.MotionState;
      SubStateMachine = _cocosAnimationMarionetteAssetCreationJs.SubStateMachine;
      VariableType = _cocosAnimationMarionetteAssetCreationJs.VariableType;
      ProceduralPoseState = _cocosAnimationMarionetteAssetCreationJs.ProceduralPoseState;
    }, function (_cocosAnimationMarionettePoseGraphPoseNodesStateMachineJs) {
      PoseNodeStateMachine = _cocosAnimationMarionettePoseGraphPoseNodesStateMachineJs.PoseNodeStateMachine;
    }, function (_cocosAnimationMarionetteStateMachineConditionBindingVariableBindingJs) {
      TCVariableBinding = _cocosAnimationMarionetteStateMachineConditionBindingVariableBindingJs.TCVariableBinding;
    }, function (_cocosAnimationMarionettePoseGraphPureValueNodesGetVariableJs) {
      PVNodeGetVariableBase = _cocosAnimationMarionettePoseGraphPureValueNodesGetVariableJs.PVNodeGetVariableBase;
    }, function (_cocosAnimationMarionettePoseGraphFoundationTypeSystemJs) {
      PoseGraphType = _cocosAnimationMarionettePoseGraphFoundationTypeSystemJs.PoseGraphType;
    }, function (_exportsBaseJs) {
      assertIsTrue = _exportsBaseJs.assertIsTrue;
    }],
    execute: function () {
      _marked2 = /*#__PURE__*/regeneratorRuntime.mark(viewVariableBindings);
    }
  };
});