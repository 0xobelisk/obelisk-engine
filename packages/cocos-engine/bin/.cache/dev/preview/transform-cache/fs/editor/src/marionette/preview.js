System.register("q-bundled:///fs/editor/src/marionette/preview.js", ["../../../cocos/scene-graph/index.js", "../../../cocos/animation/marionette/create-eval.js", "../../../cocos/animation/marionette/variable/index.js", "../../../cocos/core/data/utils/asserts.js", "../../../cocos/animation/marionette/motion/animation-blend.js", "../../../cocos/animation/marionette/animation-graph-context.js", "../../../cocos/animation/core/pose.js", "../../../cocos/animation/marionette/animation-controller.js"], function (_export, _context) {
  "use strict";

  var Node, createEval, createInstanceTag, assertIsNonNullable, AnimationBlendEval, AnimationGraphBindingContext, AnimationGraphPoseLayoutMaintainer, defaultTransformsTag, AuxiliaryCurveRegistry, blendPoseInto, AnimationController, AnimationGraphPartialPreviewer, MotionPreviewer, TransitionPreviewer, MotionEvalRecord;
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function () { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function (t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function (t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function () { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function (e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function (t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function (t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function (e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  return {
    setters: [function (_cocosSceneGraphIndexJs) {
      Node = _cocosSceneGraphIndexJs.Node;
    }, function (_cocosAnimationMarionetteCreateEvalJs) {
      createEval = _cocosAnimationMarionetteCreateEvalJs.createEval;
    }, function (_cocosAnimationMarionetteVariableIndexJs) {
      createInstanceTag = _cocosAnimationMarionetteVariableIndexJs.createInstanceTag;
    }, function (_cocosCoreDataUtilsAssertsJs) {
      assertIsNonNullable = _cocosCoreDataUtilsAssertsJs.assertIsNonNullable;
    }, function (_cocosAnimationMarionetteMotionAnimationBlendJs) {
      AnimationBlendEval = _cocosAnimationMarionetteMotionAnimationBlendJs.AnimationBlendEval;
    }, function (_cocosAnimationMarionetteAnimationGraphContextJs) {
      AnimationGraphBindingContext = _cocosAnimationMarionetteAnimationGraphContextJs.AnimationGraphBindingContext;
      AnimationGraphPoseLayoutMaintainer = _cocosAnimationMarionetteAnimationGraphContextJs.AnimationGraphPoseLayoutMaintainer;
      defaultTransformsTag = _cocosAnimationMarionetteAnimationGraphContextJs.defaultTransformsTag;
      AuxiliaryCurveRegistry = _cocosAnimationMarionetteAnimationGraphContextJs.AuxiliaryCurveRegistry;
    }, function (_cocosAnimationCorePoseJs) {
      blendPoseInto = _cocosAnimationCorePoseJs.blendPoseInto;
    }, function (_cocosAnimationMarionetteAnimationControllerJs) {
      AnimationController = _cocosAnimationMarionetteAnimationControllerJs.AnimationController;
    }],
    execute: function () {
      AnimationGraphPartialPreviewer = /*#__PURE__*/function () {
        function AnimationGraphPartialPreviewer(root) {
          // NOTE: these two properties rely on lazy initialization.
          this._poseLayoutMaintainer = void 0;
          this._evaluationContext = void 0;
          this._varInstances = {};
          this._root = void 0;
          this._motionRecords = [];
          this._dummyAnimationController = void 0;
          this._root = root;
          var dummyAnimationControllerNode = new Node();
          this._dummyAnimationController = dummyAnimationControllerNode.addComponent(AnimationController);
        }
        var _proto = AnimationGraphPartialPreviewer.prototype;
        _proto.destroy = function destroy() {
          this._dummyAnimationController.node.destroy();
        };
        _proto.clear = function clear() {
          this._varInstances = {};
          this._motionRecords = [];
        };
        _proto.evaluate = function evaluate() {
          var evaluationContext = this._evaluationContext;
          var pose = this.doEvaluate(evaluationContext);
          this._poseLayoutMaintainer.apply(pose !== null && pose !== void 0 ? pose : evaluationContext.pushDefaultedPose());
          evaluationContext.popPose();
        };
        _proto.addVariable = function addVariable(id, description) {
          var varInstances = this._varInstances;
          if (id in varInstances) {
            return;
          }
          varInstances[id] = description[createInstanceTag]();
        };
        _proto.removeVariable = function removeVariable(id) {
          delete this._varInstances[id];
        };
        _proto.updateVariable = function updateVariable(id, value) {
          var varInstance = this._varInstances[id];
          if (!varInstance) {
            return;
          }
          varInstance.value = value;
        };
        _proto.createMotionEval = function createMotionEval(motion) {
          var record = new MotionEvalRecord(motion);
          this._motionRecords.push(record);
          this._updateAllRecords();
          return record;
        };
        _proto.doEvaluate = function doEvaluate(_evaluationContext) {
          return null;
        };
        _proto._updateAllRecords = function _updateAllRecords() {
          var poseLayoutMaintainer = new AnimationGraphPoseLayoutMaintainer(this._root, new AuxiliaryCurveRegistry());
          this._poseLayoutMaintainer = poseLayoutMaintainer;
          var bindingContext = new AnimationGraphBindingContext(this._root, this._poseLayoutMaintainer, this._varInstances, this._dummyAnimationController);
          poseLayoutMaintainer.startBind();
          for (var _iterator = _createForOfIteratorHelperLoose(this._motionRecords), _step; !(_step = _iterator()).done;) {
            var record = _step.value;
            record.rebind(bindingContext);
          }
          poseLayoutMaintainer.endBind();
          var evaluationContext = poseLayoutMaintainer.createEvaluationContext();
          poseLayoutMaintainer.fetchDefaultTransforms(evaluationContext[defaultTransformsTag]);
          if (this._evaluationContext) {
            this._evaluationContext.destroy();
          }
          this._evaluationContext = evaluationContext;
        };
        return AnimationGraphPartialPreviewer;
      }();
      _export("MotionPreviewer", MotionPreviewer = /*#__PURE__*/function (_AnimationGraphPartia) {
        _inheritsLoose(MotionPreviewer, _AnimationGraphPartia);
        function MotionPreviewer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AnimationGraphPartia.call.apply(_AnimationGraphPartia, [this].concat(args)) || this;
          _this._time = 0.0;
          _this._motionEval = null;
          _this._timelineStatsDirty = true;
          _this._timelineStats = {
            timeLineLength: 0.0
          };
          return _this;
        }
        var _proto2 = MotionPreviewer.prototype;
        /**
         * Gets an iterable to the weights of each motion(that has runtime ID).
         */
        _proto2.queryWeights = function queryWeights() {
          if (this._motionEval) {
            return this._motionEval.getWeightsRecursive(1.0);
          }
          return [];
        };
        _proto2.setMotion = function setMotion(motion) {
          this._motionEval = _AnimationGraphPartia.prototype.createMotionEval.call(this, motion);
          this._timelineStatsDirty = true;
        };
        _proto2.setTime = function setTime(time) {
          this._time = time;
        };
        _proto2.updateVariable = function updateVariable(id, value) {
          _AnimationGraphPartia.prototype.updateVariable.call(this, id, value);
          this._timelineStatsDirty = true;
        };
        _proto2.doEvaluate = function doEvaluate(context) {
          var motionEval = this._motionEval;
          if (!motionEval) {
            return context.pushDefaultedPose();
          }
          return motionEval.sample(this._time / motionEval.duration, context);
        };
        _proto2._updateTimelineStats = function _updateTimelineStats() {
          var _this$_motionEval$dur, _this$_motionEval;
          this._timelineStats.timeLineLength = (_this$_motionEval$dur = (_this$_motionEval = this._motionEval) === null || _this$_motionEval === void 0 ? void 0 : _this$_motionEval.duration) !== null && _this$_motionEval$dur !== void 0 ? _this$_motionEval$dur : 0.0;
        };
        _createClass(MotionPreviewer, [{
          key: "timelineStats",
          get: function get() {
            if (this._timelineStatsDirty) {
              this._updateTimelineStats();
              this._timelineStatsDirty = false;
            }
            return this._timelineStats;
          }
        }]);
        return MotionPreviewer;
      }(AnimationGraphPartialPreviewer));
      _export("TransitionPreviewer", TransitionPreviewer = /*#__PURE__*/function (_AnimationGraphPartia2) {
        _inheritsLoose(TransitionPreviewer, _AnimationGraphPartia2);
        function TransitionPreviewer(root) {
          var _this2;
          _this2 = _AnimationGraphPartia2.call(this, root) || this;
          _this2._time = 0.0;
          _this2._transitionDuration = 0.0;
          _this2._relativeDuration = false;
          _this2._exitConditionEnabled = false;
          _this2._exitCondition = 0.0;
          _this2._destinationStart = 0.0;
          _this2._relativeDestinationStart = false;
          _this2._source = null;
          _this2._target = null;
          _this2._timelineStatsDirty = true;
          _this2._timeLineStats = {
            timeLineLength: 0.0,
            sourceMotionStart: 0.0,
            sourceMotionRepeatCount: 0.0,
            sourceMotionDuration: 0.0,
            targetMotionStart: 0.0,
            targetMotionRepeatCount: 0.0,
            targetMotionDuration: 0.0,
            exitTimesStart: 0.0,
            exitTimesLength: 0.0,
            transitionDurationStart: 0.0,
            transitionDurationLength: 0.0
          };
          return _this2;
        }
        var _proto3 = TransitionPreviewer.prototype;
        _proto3.destroy = function destroy() {};
        _proto3.setSourceMotion = function setSourceMotion(motion) {
          this._source = _AnimationGraphPartia2.prototype.createMotionEval.call(this, motion);
          this._timelineStatsDirty = true;
        };
        _proto3.setTargetMotion = function setTargetMotion(motion) {
          this._target = _AnimationGraphPartia2.prototype.createMotionEval.call(this, motion);
          this._timelineStatsDirty = true;
        };
        _proto3.setTransitionDuration = function setTransitionDuration(value) {
          this._transitionDuration = value;
          this._timelineStatsDirty = true;
        };
        _proto3.setRelativeTransitionDuration = function setRelativeTransitionDuration(value) {
          this._relativeDuration = value;
          this._timelineStatsDirty = true;
        };
        _proto3.calculateTransitionDurationFromTimelineLength = function calculateTransitionDurationFromTimelineLength(value) {
          assertIsNonNullable(this._source);
          return this._relativeDuration ? value / this._source.duration : value;
        };
        _proto3.setExitTimes = function setExitTimes(value) {
          this._exitCondition = value;
          this._timelineStatsDirty = true;
        };
        _proto3.setExitTimeEnabled = function setExitTimeEnabled(value) {
          this._exitConditionEnabled = value;
          this._timelineStatsDirty = true;
        };
        _proto3.setDestinationStart = function setDestinationStart(value) {
          this._destinationStart = value;
          this._timelineStatsDirty = true;
        };
        _proto3.setRelativeDestinationStart = function setRelativeDestinationStart(value) {
          this._relativeDestinationStart = value;
          this._timelineStatsDirty = true;
        };
        _proto3.calculateExitTimesFromTimelineLength = function calculateExitTimesFromTimelineLength(value) {
          assertIsNonNullable(this._source);
          return value / this._source.duration;
        };
        _proto3.updateVariable = function updateVariable(id, value) {
          _AnimationGraphPartia2.prototype.updateVariable.call(this, id, value);
          this._timelineStatsDirty = true;
        }

        /**
         * 
         * @param time Player time, in seconds.
         */;
        _proto3.setTime = function setTime(time) {
          this._time = time;
        };
        _proto3.doEvaluate = function doEvaluate(context) {
          var source = this._source,
            target = this._target,
            time = this._time,
            exitCondition = this._exitCondition,
            exitConditionEnabled = this._exitConditionEnabled,
            transitionDuration = this._transitionDuration,
            relativeDuration = this._relativeDuration,
            destinationStart = this._destinationStart,
            relativeDestinationStart = this._relativeDestinationStart;
          if (!source || !target) {
            return context.pushDefaultedPose();
          }
          var sourceDuration = source.duration;
          var targetDuration = target.duration;
          var exitTimeAbsolute = exitConditionEnabled ? sourceDuration * exitCondition : 0.0;
          var transitionDurationAbsolute = relativeDuration ? sourceDuration * transitionDuration : transitionDuration;
          var destinationStartAbsolute = relativeDestinationStart ? destinationStart * targetDuration : destinationStart;
          if (time < exitTimeAbsolute) {
            return source.sample(time / sourceDuration, context);
          } else {
            var transitionTime = time - exitTimeAbsolute;
            if (transitionTime > transitionDurationAbsolute) {
              return target.sample((destinationStartAbsolute + transitionTime) / targetDuration, context);
            } else {
              var transitionRatio = transitionTime / transitionDurationAbsolute;
              var sourcePose = source.sample(time / sourceDuration, context);
              var targetPose = target.sample(transitionTime / targetDuration, context);
              blendPoseInto(sourcePose, targetPose, transitionRatio);
              context.popPose();
              return sourcePose;
            }
          }
        };
        _proto3._updateTimelineStats = function _updateTimelineStats() {
          var source = this._source,
            target = this._target,
            exitCondition = this._exitCondition,
            exitConditionEnabled = this._exitConditionEnabled,
            transitionDuration = this._transitionDuration,
            relativeDuration = this._relativeDuration,
            destinationStart = this._destinationStart,
            relativeDestinationStart = this._relativeDestinationStart;
          assertIsNonNullable(source);
          assertIsNonNullable(target);
          var sourceMotionDuration = source.duration;
          var exitTimeRelative = exitConditionEnabled ? exitCondition : 0.0;
          var exitTimeAbsolute = sourceMotionDuration * exitTimeRelative;
          var transitionDurationAbsolute = relativeDuration ? sourceMotionDuration * transitionDuration : transitionDuration;
          var sourceMotionStart = 0.0;
          var sourceMotionLiveTime = exitTimeAbsolute + transitionDurationAbsolute;
          var sourceMotionRepeatCount = sourceMotionLiveTime / sourceMotionDuration;
          var targetMotionDuration = target.duration;
          var destinationStartAbsolute = relativeDestinationStart ? targetMotionDuration * destinationStart : destinationStart;
          var targetMotionStart = exitTimeAbsolute - destinationStartAbsolute;
          var targetMotionLiveTime = Math.max(transitionDurationAbsolute, targetMotionDuration);
          var targetMotionRepeatCount = targetMotionLiveTime / targetMotionDuration;
          var timeLineLength = exitTimeAbsolute + targetMotionLiveTime;
          var timeLineStats = this._timeLineStats;
          timeLineStats.timeLineLength = timeLineLength;
          timeLineStats.sourceMotionStart = sourceMotionStart;
          timeLineStats.sourceMotionRepeatCount = sourceMotionRepeatCount;
          timeLineStats.sourceMotionDuration = sourceMotionDuration;
          timeLineStats.targetMotionStart = targetMotionStart;
          timeLineStats.targetMotionRepeatCount = targetMotionRepeatCount;
          timeLineStats.targetMotionDuration = targetMotionDuration;
          timeLineStats.exitTimesStart = 0.0;
          timeLineStats.exitTimesLength = exitTimeAbsolute;
          timeLineStats.transitionDurationStart = exitTimeAbsolute;
          timeLineStats.transitionDurationLength = transitionDurationAbsolute;
        };
        _createClass(TransitionPreviewer, [{
          key: "timelineStats",
          get: function get() {
            if (this._timelineStatsDirty) {
              this._updateTimelineStats();
              this._timelineStatsDirty = false;
            }
            return this._timeLineStats;
          }
        }]);
        return TransitionPreviewer;
      }(AnimationGraphPartialPreviewer));
      MotionEvalRecord = /*#__PURE__*/function () {
        function MotionEvalRecord(motion) {
          this._motion = void 0;
          this._eval = null;
          this._port = null;
          this._motion = motion;
        }
        var _proto4 = MotionEvalRecord.prototype;
        _proto4.sample = function sample(progress, context) {
          var _this$_port$evaluate, _this$_port;
          return (_this$_port$evaluate = (_this$_port = this._port) === null || _this$_port === void 0 ? void 0 : _this$_port.evaluate(progress, context)) !== null && _this$_port$evaluate !== void 0 ? _this$_port$evaluate : context.pushDefaultedPose();
        };
        _proto4.getWeightsRecursive = function getWeightsRecursive(weight) {
          if (!this._eval) {
            return [];
          }
          var getWeightsRecursive = /*#__PURE__*/_regeneratorRuntime().mark(function getWeightsRecursive(motionEval, weight) {
            var nChild, iChild, childMotionEval, childWeight, _iterator2, _step2, child;
            return _regeneratorRuntime().wrap(function getWeightsRecursive$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(typeof motionEval.runtimeId !== 'undefined')) {
                    _context2.next = 3;
                    break;
                  }
                  _context2.next = 3;
                  return [motionEval.runtimeId, weight];
                case 3:
                  if (!(motionEval instanceof AnimationBlendEval)) {
                    _context2.next = 20;
                    break;
                  }
                  nChild = motionEval.childCount;
                  iChild = 0;
                case 6:
                  if (!(iChild < nChild)) {
                    _context2.next = 20;
                    break;
                  }
                  childMotionEval = motionEval.getChildMotionEval(iChild);
                  childWeight = motionEval.getChildWeight(iChild);
                  if (!childMotionEval) {
                    _context2.next = 17;
                    break;
                  }
                  _iterator2 = _createForOfIteratorHelperLoose(getWeightsRecursive(childMotionEval, childWeight));
                case 11:
                  if ((_step2 = _iterator2()).done) {
                    _context2.next = 17;
                    break;
                  }
                  child = _step2.value;
                  _context2.next = 15;
                  return child;
                case 15:
                  _context2.next = 11;
                  break;
                case 17:
                  ++iChild;
                  _context2.next = 6;
                  break;
                case 20:
                  return _context2.abrupt("return");
                case 21:
                case "end":
                  return _context2.stop();
              }
            }, getWeightsRecursive);
          });
          return getWeightsRecursive(this._eval, weight);
        };
        _proto4.rebind = function rebind(bindContext) {
          var motionEval = this._motion[createEval](bindContext, true);
          if (!motionEval) {
            return;
          }
          this._eval = motionEval;
          this._port = motionEval.createPort();
        };
        _createClass(MotionEvalRecord, [{
          key: "motion",
          get: function get() {
            return this._motion;
          }
        }, {
          key: "duration",
          get: function get() {
            var _this$_eval$duration, _this$_eval;
            return (_this$_eval$duration = (_this$_eval = this._eval) === null || _this$_eval === void 0 ? void 0 : _this$_eval.duration) !== null && _this$_eval$duration !== void 0 ? _this$_eval$duration : 0.0;
          }
        }]);
        return MotionEvalRecord;
      }();
    }
  };
});