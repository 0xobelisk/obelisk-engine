System.register("q-bundled:///fs/editor/src/marionette/visit.js", ["../../../cocos/animation/marionette/motion/index.js", "../../../cocos/animation/marionette/animation-graph.js", "../../../cocos/animation/marionette/state-machine/motion-state.js", "../../../cocos/animation/marionette/pose-graph/pose-nodes/state-machine.js", "../../../cocos/animation/marionette/pose-graph/pose-nodes/play-motion.js", "../../../cocos/animation/marionette/pose-graph/pose-nodes/sample-motion.js", "../../../cocos/animation/marionette/animation-graph-variant.js"], function (_export, _context) {
  "use strict";

  var ClipMotion, AnimationBlend1D, AnimationBlend2D, AnimationBlendDirect, SubStateMachine, AnimationGraph, ProceduralPoseState, MotionState, PoseNodeStateMachine, PoseNodePlayMotion, PoseNodeSampleMotion, AnimationGraphVariant, _marked3, _marked8, _marked9;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function () { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function (t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function (t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function () { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function (e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function (t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function (t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function (e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function visitAnimationGraphEditorExtras(animationGraph) {
    var _marked, _marked2, _iterator, _step, layer, visitStateMachine, visitMotion;
    return _regeneratorRuntime().wrap(function visitAnimationGraphEditorExtras$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          visitMotion = function _visitMotion(motion) {
            var _iterator4, _step4, childMotion;
            return _regeneratorRuntime().wrap(function visitMotion$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return motion;
                case 2:
                  if (!(motion instanceof AnimationBlend1D || motion instanceof AnimationBlend2D || motion instanceof AnimationBlendDirect)) {
                    _context3.next = 10;
                    break;
                  }
                  _iterator4 = _createForOfIteratorHelperLoose(motion.items);
                case 4:
                  if ((_step4 = _iterator4()).done) {
                    _context3.next = 10;
                    break;
                  }
                  childMotion = _step4.value.motion;
                  if (!childMotion) {
                    _context3.next = 8;
                    break;
                  }
                  return _context3.delegateYield(visitMotion(childMotion), "t0", 8);
                case 8:
                  _context3.next = 4;
                  break;
                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _marked2);
          };
          visitStateMachine = function _visitStateMachine(stateMachine) {
            var _iterator2, _step2, state, motion, _iterator3, _step3, transition;
            return _regeneratorRuntime().wrap(function visitStateMachine$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return stateMachine;
                case 2:
                  _iterator2 = _createForOfIteratorHelperLoose(stateMachine.states());
                case 3:
                  if ((_step2 = _iterator2()).done) {
                    _context2.next = 18;
                    break;
                  }
                  state = _step2.value;
                  _context2.next = 7;
                  return state;
                case 7:
                  if (!(state instanceof MotionState)) {
                    _context2.next = 14;
                    break;
                  }
                  motion = state.motion;
                  if (motion) {
                    _context2.next = 11;
                    break;
                  }
                  return _context2.abrupt("continue", 16);
                case 11:
                  return _context2.delegateYield(visitMotion(motion), "t0", 12);
                case 12:
                  _context2.next = 16;
                  break;
                case 14:
                  if (!(state instanceof SubStateMachine)) {
                    _context2.next = 16;
                    break;
                  }
                  return _context2.delegateYield(visitStateMachine(state.stateMachine), "t1", 16);
                case 16:
                  _context2.next = 3;
                  break;
                case 18:
                  _iterator3 = _createForOfIteratorHelperLoose(stateMachine.transitions());
                case 19:
                  if ((_step3 = _iterator3()).done) {
                    _context2.next = 25;
                    break;
                  }
                  transition = _step3.value;
                  _context2.next = 23;
                  return transition;
                case 23:
                  _context2.next = 19;
                  break;
                case 25:
                case "end":
                  return _context2.stop();
              }
            }, _marked);
          };
          _marked = /*#__PURE__*/_regeneratorRuntime().mark(visitStateMachine), _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(visitMotion);
          _iterator = _createForOfIteratorHelperLoose(animationGraph.layers);
        case 4:
          if ((_step = _iterator()).done) {
            _context4.next = 9;
            break;
          }
          layer = _step.value;
          return _context4.delegateYield(visitStateMachine(layer.stateMachine), "t0", 7);
        case 7:
          _context4.next = 4;
          break;
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _marked3);
  }
  function visitAnimationClips(animationGraph) {
    var _marked4, _marked5, _marked6, _marked7, _iterator5, _step5, layer, _iterator9, _step9, _step9$value, _stashId, stash, visitStateMachine, visitMotion, visitPoseGraph, visitPoseNode;
    return _regeneratorRuntime().wrap(function visitAnimationClips$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          visitPoseNode = function _visitPoseNode(node) {
            return _regeneratorRuntime().wrap(function visitPoseNode$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (!(node instanceof PoseNodePlayMotion || node instanceof PoseNodeSampleMotion)) {
                    _context8.next = 5;
                    break;
                  }
                  if (!node.motion) {
                    _context8.next = 3;
                    break;
                  }
                  return _context8.delegateYield(visitMotion(node.motion), "t0", 3);
                case 3:
                  _context8.next = 7;
                  break;
                case 5:
                  if (!(node instanceof PoseNodeStateMachine)) {
                    _context8.next = 7;
                    break;
                  }
                  return _context8.delegateYield(visitStateMachine(node.stateMachine), "t1", 7);
                case 7:
                case "end":
                  return _context8.stop();
              }
            }, _marked7);
          };
          visitPoseGraph = function _visitPoseGraph(poseGraph) {
            var _iterator8, _step8, shell;
            return _regeneratorRuntime().wrap(function visitPoseGraph$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _iterator8 = _createForOfIteratorHelperLoose(poseGraph.nodes());
                case 1:
                  if ((_step8 = _iterator8()).done) {
                    _context7.next = 6;
                    break;
                  }
                  shell = _step8.value;
                  return _context7.delegateYield(visitPoseNode(shell), "t0", 4);
                case 4:
                  _context7.next = 1;
                  break;
                case 6:
                case "end":
                  return _context7.stop();
              }
            }, _marked6);
          };
          visitMotion = function _visitMotion2(motion) {
            var _iterator7, _step7, childMotion;
            return _regeneratorRuntime().wrap(function visitMotion$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (!(motion instanceof ClipMotion)) {
                    _context6.next = 6;
                    break;
                  }
                  if (!motion.clip) {
                    _context6.next = 4;
                    break;
                  }
                  _context6.next = 4;
                  return motion.clip;
                case 4:
                  _context6.next = 14;
                  break;
                case 6:
                  if (!(motion instanceof AnimationBlend1D || motion instanceof AnimationBlend2D || motion instanceof AnimationBlendDirect)) {
                    _context6.next = 14;
                    break;
                  }
                  _iterator7 = _createForOfIteratorHelperLoose(motion.items);
                case 8:
                  if ((_step7 = _iterator7()).done) {
                    _context6.next = 14;
                    break;
                  }
                  childMotion = _step7.value.motion;
                  if (!childMotion) {
                    _context6.next = 12;
                    break;
                  }
                  return _context6.delegateYield(visitMotion(childMotion), "t0", 12);
                case 12:
                  _context6.next = 8;
                  break;
                case 14:
                case "end":
                  return _context6.stop();
              }
            }, _marked5);
          };
          visitStateMachine = function _visitStateMachine2(stateMachine) {
            var _iterator6, _step6, state, motion;
            return _regeneratorRuntime().wrap(function visitStateMachine$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _iterator6 = _createForOfIteratorHelperLoose(stateMachine.states());
                case 1:
                  if ((_step6 = _iterator6()).done) {
                    _context5.next = 17;
                    break;
                  }
                  state = _step6.value;
                  if (!(state instanceof MotionState)) {
                    _context5.next = 9;
                    break;
                  }
                  motion = state.motion;
                  if (!motion) {
                    _context5.next = 7;
                    break;
                  }
                  return _context5.delegateYield(visitMotion(motion), "t0", 7);
                case 7:
                  _context5.next = 15;
                  break;
                case 9:
                  if (!(state instanceof ProceduralPoseState)) {
                    _context5.next = 13;
                    break;
                  }
                  return _context5.delegateYield(visitPoseGraph(state.graph), "t1", 11);
                case 11:
                  _context5.next = 15;
                  break;
                case 13:
                  if (!(state instanceof SubStateMachine)) {
                    _context5.next = 15;
                    break;
                  }
                  return _context5.delegateYield(visitStateMachine(state.stateMachine), "t2", 15);
                case 15:
                  _context5.next = 1;
                  break;
                case 17:
                case "end":
                  return _context5.stop();
              }
            }, _marked4);
          };
          _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(visitStateMachine), _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(visitMotion), _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(visitPoseGraph), _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(visitPoseNode);
          _iterator5 = _createForOfIteratorHelperLoose(animationGraph.layers);
        case 6:
          if ((_step5 = _iterator5()).done) {
            _context9.next = 17;
            break;
          }
          layer = _step5.value;
          return _context9.delegateYield(visitStateMachine(layer.stateMachine), "t0", 9);
        case 9:
          _iterator9 = _createForOfIteratorHelperLoose(layer.stashes());
        case 10:
          if ((_step9 = _iterator9()).done) {
            _context9.next = 15;
            break;
          }
          _step9$value = _step9.value, _stashId = _step9$value[0], stash = _step9$value[1];
          return _context9.delegateYield(visitPoseGraph(stash.graph), "t1", 13);
        case 13:
          _context9.next = 10;
          break;
        case 15:
          _context9.next = 6;
          break;
        case 17:
        case "end":
          return _context9.stop();
      }
    }, _marked8);
  }
  function visitAnimationClipsInController(animationController) {
    var graph, original, clipOverrides, _iterator10, _step10, _clipOverrides$get, clip;
    return _regeneratorRuntime().wrap(function visitAnimationClipsInController$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          graph = animationController.graph;
          if (!(graph instanceof AnimationGraph)) {
            _context10.next = 5;
            break;
          }
          return _context10.delegateYield(visitAnimationClips(graph), "t0", 3);
        case 3:
          _context10.next = 15;
          break;
        case 5:
          if (!(graph instanceof AnimationGraphVariant)) {
            _context10.next = 15;
            break;
          }
          original = graph.original, clipOverrides = graph.clipOverrides;
          if (!original) {
            _context10.next = 15;
            break;
          }
          _iterator10 = _createForOfIteratorHelperLoose(visitAnimationClips(original));
        case 9:
          if ((_step10 = _iterator10()).done) {
            _context10.next = 15;
            break;
          }
          clip = _step10.value;
          _context10.next = 13;
          return (_clipOverrides$get = clipOverrides.get(clip)) !== null && _clipOverrides$get !== void 0 ? _clipOverrides$get : clip;
        case 13:
          _context10.next = 9;
          break;
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _marked9);
  }
  _export({
    visitAnimationGraphEditorExtras: visitAnimationGraphEditorExtras,
    visitAnimationClips: visitAnimationClips,
    visitAnimationClipsInController: visitAnimationClipsInController
  });
  return {
    setters: [function (_cocosAnimationMarionetteMotionIndexJs) {
      ClipMotion = _cocosAnimationMarionetteMotionIndexJs.ClipMotion;
      AnimationBlend1D = _cocosAnimationMarionetteMotionIndexJs.AnimationBlend1D;
      AnimationBlend2D = _cocosAnimationMarionetteMotionIndexJs.AnimationBlend2D;
      AnimationBlendDirect = _cocosAnimationMarionetteMotionIndexJs.AnimationBlendDirect;
    }, function (_cocosAnimationMarionetteAnimationGraphJs) {
      SubStateMachine = _cocosAnimationMarionetteAnimationGraphJs.SubStateMachine;
      AnimationGraph = _cocosAnimationMarionetteAnimationGraphJs.AnimationGraph;
      ProceduralPoseState = _cocosAnimationMarionetteAnimationGraphJs.ProceduralPoseState;
    }, function (_cocosAnimationMarionetteStateMachineMotionStateJs) {
      MotionState = _cocosAnimationMarionetteStateMachineMotionStateJs.MotionState;
    }, function (_cocosAnimationMarionettePoseGraphPoseNodesStateMachineJs) {
      PoseNodeStateMachine = _cocosAnimationMarionettePoseGraphPoseNodesStateMachineJs.PoseNodeStateMachine;
    }, function (_cocosAnimationMarionettePoseGraphPoseNodesPlayMotionJs) {
      PoseNodePlayMotion = _cocosAnimationMarionettePoseGraphPoseNodesPlayMotionJs.PoseNodePlayMotion;
    }, function (_cocosAnimationMarionettePoseGraphPoseNodesSampleMotionJs) {
      PoseNodeSampleMotion = _cocosAnimationMarionettePoseGraphPoseNodesSampleMotionJs.PoseNodeSampleMotion;
    }, function (_cocosAnimationMarionetteAnimationGraphVariantJs) {
      AnimationGraphVariant = _cocosAnimationMarionetteAnimationGraphVariantJs.AnimationGraphVariant;
    }],
    execute: function () {
      _marked3 = /*#__PURE__*/regeneratorRuntime.mark(visitAnimationGraphEditorExtras);
      _marked8 = /*#__PURE__*/regeneratorRuntime.mark(visitAnimationClips);
      _marked9 = /*#__PURE__*/regeneratorRuntime.mark(visitAnimationClipsInController);
    }
  };
});