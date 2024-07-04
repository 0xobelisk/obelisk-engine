System.register("q-bundled:///fs/cocos/animation/marionette/animation-graph.js", ["../../core/data/decorators/index.js", "../../core/index.js", "./ownership.js", "./variable/index.js", "./errors.js", "./state-machine/motion-state.js", "./state-machine/state.js", "../../serialization/deserialize-symbols.js", "../define.js", "./animation-graph-like.js", "../../core/utils/internal.js", "./pose-graph/pose-graph.js", "./event/event-binding.js", "../../serialization/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, serializable, js, clamp, assertIsNonNullable, assertIsTrue, EditorExtendable, shift, assertsOwnedBy, own, markAsDangling, ownerSymbol, createVariable, InvalidTransitionError, MotionState, State, outgoingsSymbol, incomingsSymbol, InteractiveState, onAfterDeserializedTag, CLASS_NAME_PREFIX_ANIM, AnimationGraphLike, createInstanceofProxy, renameObjectProperty, PoseGraph, AnimationGraphEventBinding, instantiate, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _dec2, _class4, _class5, _initializer4, _initializer5, _initializer6, _initializer7, _dec3, _class7, _class8, _initializer8, _initializer9, _initializer10, _initializer11, _dec4, _class10, _dec5, _class11, _class12, _initializer12, _dec6, _class14, _class15, _initializer13, _initializer14, _initializer15, _dec7, _class17, _class18, _initializer16, _dec8, _class20, _class21, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _dec9, _class23, _class24, _initializer22, _dec10, _class26, _class27, _initializer23, _dec11, _class29, _class30, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _dec12, _class32, _class33, _initializer30, _initializer31, Transition, DurationalTransition, AnimationTransition, EmptyState, EmptyStateTransition, ProceduralPoseState, ProceduralPoseState_, ProceduralPoseTransition, ProceduralPoseTransition_, StateMachine, SubStateMachine, PoseGraphStash, Layer, LayerBlending, AnimationGraph;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  function isAnimationTransition(transition) {
    return transition instanceof AnimationTransition;
  }
  _export({
    isAnimationTransition: isAnimationTransition,
    LayerBlending: void 0
  });
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      js = _coreIndexJs.js;
      clamp = _coreIndexJs.clamp;
      assertIsNonNullable = _coreIndexJs.assertIsNonNullable;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      EditorExtendable = _coreIndexJs.EditorExtendable;
      shift = _coreIndexJs.shift;
    }, function (_ownershipJs) {
      assertsOwnedBy = _ownershipJs.assertsOwnedBy;
      own = _ownershipJs.own;
      markAsDangling = _ownershipJs.markAsDangling;
      ownerSymbol = _ownershipJs.ownerSymbol;
    }, function (_variableIndexJs) {
      createVariable = _variableIndexJs.createVariable;
    }, function (_errorsJs) {
      InvalidTransitionError = _errorsJs.InvalidTransitionError;
    }, function (_stateMachineMotionStateJs) {
      MotionState = _stateMachineMotionStateJs.MotionState;
    }, function (_stateMachineStateJs) {
      State = _stateMachineStateJs.State;
      outgoingsSymbol = _stateMachineStateJs.outgoingsSymbol;
      incomingsSymbol = _stateMachineStateJs.incomingsSymbol;
      InteractiveState = _stateMachineStateJs.InteractiveState;
    }, function (_serializationDeserializeSymbolsJs) {
      onAfterDeserializedTag = _serializationDeserializeSymbolsJs.onAfterDeserializedTag;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_animationGraphLikeJs) {
      AnimationGraphLike = _animationGraphLikeJs.AnimationGraphLike;
    }, function (_coreUtilsInternalJs) {
      createInstanceofProxy = _coreUtilsInternalJs.createInstanceofProxy;
      renameObjectProperty = _coreUtilsInternalJs.renameObjectProperty;
    }, function (_poseGraphPoseGraphJs) {
      PoseGraph = _poseGraphPoseGraphJs.PoseGraph;
    }, function (_eventEventBindingJs) {
      AnimationGraphEventBinding = _eventEventBindingJs.AnimationGraphEventBinding;
    }, function (_serializationIndexJs) {
      instantiate = _serializationIndexJs.instantiate;
    }],
    execute: function () {
      _export("State", State);
      Transition = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "Transition"), _dec(_class = (_class2 = /*#__PURE__*/function (_EditorExtendable) {
        _inheritsLoose(Transition, _EditorExtendable);
        function Transition(from, to, conditions) {
          var _this;
          _this = _EditorExtendable.call(this) || this;
          /**
           * The transition source.
           */
          _this.from = _initializer && _initializer();
          /**
           * The transition target.
           */
          _this.to = _initializer2 && _initializer2();
          /**
           * The transition condition.
           */
          _this.conditions = _initializer3 && _initializer3();
          _this[ownerSymbol] = void 0;
          _this.from = from;
          _this.to = to;
          if (conditions) {
            _this.conditions = conditions;
          }
          return _this;
        }
        var _proto = Transition.prototype;
        _proto.copyTo = function copyTo(that) {
          that.conditions = this.conditions.map(function (condition) {
            return condition.clone();
          });
        };
        return Transition;
      }(EditorExtendable), (_initializer = _applyDecoratedInitializer(_class2.prototype, "from", [serializable], null), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "to", [serializable], null), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "conditions", [serializable], function () {
        return [];
      })), _class2)) || _class);
      DurationalTransition = (_dec2 = ccclass(CLASS_NAME_PREFIX_ANIM + "DurationalTransition"), _dec2(_class4 = (_class5 = /*#__PURE__*/function (_Transition) {
        _inheritsLoose(DurationalTransition, _Transition);
        function DurationalTransition() {
          var _this2;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this2 = _Transition.call.apply(_Transition, [this].concat(args)) || this;
          /**
           * @en The start time of (final) destination motion state when this transition starts.
           * Its unit is seconds if `relativeDestinationStart` is `false`,
           * Otherwise, its unit is the duration of destination motion state.
           * @zh 此过渡开始时，（最终）目标动作状态的起始时间。
           * 如果 `relativeDestinationStart`为 `false`，其单位是秒，否则其单位是目标动作状态的周期。
           */
          _this2.destinationStart = _initializer4 && _initializer4();
          /**
           * @en Determines the unit of destination start time. See `destinationStart`.
           * @zh 决定了目标起始时间的单位。见 `destinationStart`。
           */
          _this2.relativeDestinationStart = _initializer5 && _initializer5();
          /**
           * @zh 过渡开始事件绑定，此处绑定的事件会在过渡开始时触发。
           * @en Transition start event binding. The event bound here will be triggered on the transition starts.
           */
          _this2.startEventBinding = _initializer6 && _initializer6();
          /**
           * @zh 过渡结束事件绑定，此处绑定的事件会在过渡结束时触发。
           * @en Transition end event binding. The event bound here will be triggered on the transition ends.
           */
          _this2.endEventBinding = _initializer7 && _initializer7();
          _this2[ownerSymbol] = void 0;
          return _this2;
        }
        var _proto2 = DurationalTransition.prototype;
        _proto2.copyTo = function copyTo(that) {
          _Transition.prototype.copyTo.call(this, that);
          that.destinationStart = this.destinationStart;
          that.relativeDestinationStart = this.relativeDestinationStart;
          this.startEventBinding.copyTo(that.startEventBinding);
          this.endEventBinding.copyTo(that.endEventBinding);
        };
        return DurationalTransition;
      }(Transition), (_initializer4 = _applyDecoratedInitializer(_class5.prototype, "destinationStart", [serializable], function () {
        return 0.0;
      }), _initializer5 = _applyDecoratedInitializer(_class5.prototype, "relativeDestinationStart", [serializable], function () {
        return false;
      }), _initializer6 = _applyDecoratedInitializer(_class5.prototype, "startEventBinding", [serializable, editable], function () {
        return new AnimationGraphEventBinding();
      }), _initializer7 = _applyDecoratedInitializer(_class5.prototype, "endEventBinding", [serializable, editable], function () {
        return new AnimationGraphEventBinding();
      })), _class5)) || _class4);
      AnimationTransition = (_dec3 = ccclass(CLASS_NAME_PREFIX_ANIM + "AnimationTransition"), _dec3(_class7 = (_class8 = /*#__PURE__*/function (_DurationalTransition) {
        _inheritsLoose(AnimationTransition, _DurationalTransition);
        function AnimationTransition() {
          var _this3;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this3 = _DurationalTransition.call.apply(_DurationalTransition, [this].concat(args)) || this;
          /**
           * The transition duration.
           * The unit of the duration is the real duration of transition source
           * if `relativeDuration` is `true` or seconds otherwise.
           */
          _this3.duration = _initializer8 && _initializer8();
          /**
           * Determines the unit of transition duration. See `duration`.
           */
          _this3.relativeDuration = _initializer9 && _initializer9();
          _this3.exitConditionEnabled = _initializer10 && _initializer10();
          _this3._exitCondition = _initializer11 && _initializer11();
          return _this3;
        }
        var _proto3 = AnimationTransition.prototype;
        _proto3.copyTo = function copyTo(that) {
          _DurationalTransition.prototype.copyTo.call(this, that);
          that.duration = this.duration;
          that.relativeDuration = this.relativeDuration;
          that.exitConditionEnabled = this.exitConditionEnabled;
          that.exitCondition = this.exitCondition;
        };
        _createClass(AnimationTransition, [{
          key: "exitCondition",
          get: function get() {
            return this._exitCondition;
          },
          set: function set(value) {
            assertIsTrue(value >= 0.0);
            this._exitCondition = value;
          }
        }]);
        return AnimationTransition;
      }(DurationalTransition), (_initializer8 = _applyDecoratedInitializer(_class8.prototype, "duration", [serializable], function () {
        return 0.3;
      }), _initializer9 = _applyDecoratedInitializer(_class8.prototype, "relativeDuration", [serializable], function () {
        return false;
      }), _initializer10 = _applyDecoratedInitializer(_class8.prototype, "exitConditionEnabled", [serializable], function () {
        return true;
      }), _initializer11 = _applyDecoratedInitializer(_class8.prototype, "_exitCondition", [serializable], function () {
        return 1.0;
      })), _class8)) || _class7);
      _export("EmptyState", EmptyState = (_dec4 = ccclass(CLASS_NAME_PREFIX_ANIM + "EmptyState"), _dec4(_class10 = /*#__PURE__*/function (_State) {
        _inheritsLoose(EmptyState, _State);
        function EmptyState() {
          return _State.apply(this, arguments) || this;
        }
        return EmptyState;
      }(State)) || _class10));
      _export("EmptyStateTransition", EmptyStateTransition = (_dec5 = ccclass(CLASS_NAME_PREFIX_ANIM + "EmptyStateTransition"), _dec5(_class11 = (_class12 = /*#__PURE__*/function (_DurationalTransition2) {
        _inheritsLoose(EmptyStateTransition, _DurationalTransition2);
        function EmptyStateTransition() {
          var _this4;
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          _this4 = _DurationalTransition2.call.apply(_DurationalTransition2, [this].concat(args)) || this;
          /**
           * The transition duration, in seconds.
           */
          _this4.duration = _initializer12 && _initializer12();
          return _this4;
        }
        var _proto4 = EmptyStateTransition.prototype;
        _proto4.copyTo = function copyTo(that) {
          _DurationalTransition2.prototype.copyTo.call(this, that);
          that.duration = this.duration;
        };
        return EmptyStateTransition;
      }(DurationalTransition), (_initializer12 = _applyDecoratedInitializer(_class12.prototype, "duration", [serializable], function () {
        return 0.3;
      })), _class12)) || _class11));
      ProceduralPoseState = (_dec6 = ccclass(CLASS_NAME_PREFIX_ANIM + "ProceduralPoseState"), _dec6(_class14 = (_class15 = /*#__PURE__*/function (_State2) {
        _inheritsLoose(ProceduralPoseState, _State2);
        function ProceduralPoseState() {
          var _this5;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          _this5 = _State2.call.apply(_State2, [this].concat(args)) || this;
          _this5.graph = _initializer13 && _initializer13();
          /**
           * @zh 状态进入事件绑定，此处绑定的事件会在状态机向该状态过渡时触发。
           * @en State entered event binding. The event bound here will be triggered
           * when the state machine starts to transition into this state.
           */
          _this5.transitionInEventBinding = _initializer14 && _initializer14();
          /**
           * @zh 状态离开事件绑定，此处绑定的事件会在状态机从该状态离开时触发。
           * @en State left event binding. The event bound here will be triggered
           * when the state machine starts to transition out from this state.
           */
          _this5.transitionOutEventBinding = _initializer15 && _initializer15();
          return _this5;
        }
        var _proto5 = ProceduralPoseState.prototype;
        /**
         * // TODO: HACK
         * @internal
         */
        _proto5.__callOnAfterDeserializeRecursive = function __callOnAfterDeserializeRecursive() {
          this.graph.__callOnAfterDeserializeRecursive();
        };
        _proto5.copyTo = function copyTo(that) {
          _State2.prototype.copyTo.call(this, that);
          this.transitionInEventBinding.copyTo(that.transitionInEventBinding);
          this.transitionOutEventBinding.copyTo(that.transitionOutEventBinding);
          return this;
        };
        return ProceduralPoseState;
      }(State), (_initializer13 = _applyDecoratedInitializer(_class15.prototype, "graph", [serializable], function () {
        return new PoseGraph();
      }), _initializer14 = _applyDecoratedInitializer(_class15.prototype, "transitionInEventBinding", [serializable, editable], function () {
        return new AnimationGraphEventBinding();
      }), _initializer15 = _applyDecoratedInitializer(_class15.prototype, "transitionOutEventBinding", [serializable, editable], function () {
        return new AnimationGraphEventBinding();
      })), _class15)) || _class14);
      _export("ProceduralPoseState", ProceduralPoseState_ = createInstanceofProxy(ProceduralPoseState));
      ProceduralPoseTransition = (_dec7 = ccclass(CLASS_NAME_PREFIX_ANIM + "ProceduralPoseTransition"), _dec7(_class17 = (_class18 = /*#__PURE__*/function (_DurationalTransition3) {
        _inheritsLoose(ProceduralPoseTransition, _DurationalTransition3);
        function ProceduralPoseTransition() {
          var _this6;
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          _this6 = _DurationalTransition3.call.apply(_DurationalTransition3, [this].concat(args)) || this;
          /**
           * The transition duration, in seconds.
           */
          _this6.duration = _initializer16 && _initializer16();
          return _this6;
        }
        var _proto6 = ProceduralPoseTransition.prototype;
        _proto6.copyTo = function copyTo(that) {
          _DurationalTransition3.prototype.copyTo.call(this, that);
          that.duration = this.duration;
        };
        return ProceduralPoseTransition;
      }(DurationalTransition), (_initializer16 = _applyDecoratedInitializer(_class18.prototype, "duration", [serializable], function () {
        return 0.3;
      })), _class18)) || _class17);
      _export("ProceduralPoseTransition", ProceduralPoseTransition_ = createInstanceofProxy(ProceduralPoseTransition));
      _export("StateMachine", StateMachine = (_dec8 = ccclass('cc.animation.StateMachine'), _dec8(_class20 = (_class21 = /*#__PURE__*/function (_EditorExtendable2) {
        _inheritsLoose(StateMachine, _EditorExtendable2);
        var _proto7 = StateMachine.prototype;
        /**
         * // TODO: HACK
         * @internal
         */
        _proto7.__callOnAfterDeserializeRecursive = function __callOnAfterDeserializeRecursive() {
          this[onAfterDeserializedTag]();
          var nStates = this._states.length;
          for (var iState = 0; iState < nStates; ++iState) {
            var state = this._states[iState];
            if (state instanceof SubStateMachine) {
              state.stateMachine.__callOnAfterDeserializeRecursive();
            } else if (state instanceof ProceduralPoseState) {
              state.__callOnAfterDeserializeRecursive();
            } else if (state instanceof MotionState) {
              state.__callOnAfterDeserializeRecursive();
            }
          }
        };
        function StateMachine(allowEmptyStates) {
          var _this7;
          _this7 = _EditorExtendable2.call(this) || this;
          _this7._states = _initializer17 && _initializer17();
          _this7._transitions = _initializer18 && _initializer18();
          _this7._entryState = _initializer19 && _initializer19();
          _this7._exitState = _initializer20 && _initializer20();
          _this7._anyState = _initializer21 && _initializer21();
          /**
           * @internal
           */
          _this7._allowEmptyStates = true;
          _this7._allowEmptyStates = allowEmptyStates !== null && allowEmptyStates !== void 0 ? allowEmptyStates : false;
          _this7._entryState = _this7._addState(new State());
          _this7._entryState.name = 'Entry';
          _this7._exitState = _this7._addState(new State());
          _this7._exitState.name = 'Exit';
          _this7._anyState = _this7._addState(new State());
          _this7._anyState.name = 'Any';
          return _this7;
        }
        _proto7[onAfterDeserializedTag] = function () {
          var _this8 = this;
          this._states.forEach(function (state) {
            return own(state, _this8);
          });
          this._transitions.forEach(function (transition) {
            transition.from[outgoingsSymbol].push(transition);
            transition.to[incomingsSymbol].push(transition);
          });
        };
        /**
         * Gets an iterator to all states within this graph.
         * @returns The iterator.
         */
        _proto7.states = function states() {
          return this._states;
        }

        /**
         * Gets an iterator to all transitions within this graph.
         * @returns The iterator.
         */;
        _proto7.transitions = function transitions() {
          return this._transitions;
        }

        /**
         * Gets the transitions between specified states.
         * @param from Transition source.
         * @param to Transition target.
         * @returns Iterator to the transitions
         */;
        _proto7.getTransitionsBetween = function getTransitionsBetween(from, to) {
          assertsOwnedBy(from, this);
          assertsOwnedBy(to, this);
          return from[outgoingsSymbol].filter(function (transition) {
            return transition.to === to;
          });
        }

        /**
         * @en
         * Gets all transitions outgoing from specified state.
         * @zh
         * 获取从指定状态引出的所有过渡。
         * @param from @en The state. @zh 指定状态。
         * @returns @en Iterable to result transitions, in priority order. @zh 到结果过渡的迭代器，按优先级顺序。
         */;
        _proto7.getOutgoings = function getOutgoings(from) {
          assertsOwnedBy(from, this);
          return from[outgoingsSymbol];
        }

        /**
         * Gets all incoming transitions of specified state.
         * @param to The state.
         * @returns Result transitions.
         */;
        _proto7.getIncomings = function getIncomings(to) {
          assertsOwnedBy(to, this);
          return to[incomingsSymbol];
        }

        /**
         * Adds a motion state into this state machine.
         * @returns The newly created motion.
         */;
        _proto7.addMotion = function addMotion() {
          return this._addState(new MotionState());
        }

        /**
         * Adds a sub state machine into this state machine.
         * @returns The newly created state machine.
         */;
        _proto7.addSubStateMachine = function addSubStateMachine() {
          return this._addState(new SubStateMachine(this._allowEmptyStates));
        }

        /**
         * Adds an empty state into this state machine.
         * @returns The newly created empty state.
         */;
        _proto7.addEmpty = function addEmpty() {
          if (!this._allowEmptyStates) {
            throw new Error("Empty states are now allowed in this state machine.");
          }
          return this._addState(new EmptyState());
        }

        /**
         * @zh 向此状态机中添加一项姿势状态。
         * @en Adds an pose state into this state machine.
         * @returns @zh 新创建的姿势状态。 @en The newly created pose state.
         */;
        _proto7.addProceduralPoseState = function addProceduralPoseState() {
          return this._addState(new ProceduralPoseState());
        }

        /**
         * Removes specified state from this state machine.
         * @param state The state to remove.
         */;
        _proto7.remove = function remove(state) {
          assertsOwnedBy(state, this);
          if (state === this.entryState || state === this.exitState || state === this.anyState) {
            return;
          }
          this.eraseTransitionsIncludes(state);
          js.array.remove(this._states, state);
          markAsDangling(state);
        }

        /**
         * Connect two states.
         * @param from Source state.
         * @param to Target state.
         * @param condition The transition condition.
         */;
        _proto7.connect = function connect(from, to, conditions) {
          assertsOwnedBy(from, this);
          assertsOwnedBy(to, this);
          if (to === this.entryState) {
            throw new InvalidTransitionError('to-entry');
          }
          if (to === this.anyState) {
            throw new InvalidTransitionError('to-any');
          }
          if (from === this.exitState) {
            throw new InvalidTransitionError('from-exit');
          }
          var transition = from instanceof MotionState || from === this._anyState ? new AnimationTransition(from, to, conditions) : from instanceof EmptyState ? new EmptyStateTransition(from, to, conditions) : from instanceof ProceduralPoseState ? new ProceduralPoseTransition(from, to, conditions) : new Transition(from, to, conditions);
          own(transition, this);
          this._transitions.push(transition);
          from[outgoingsSymbol].push(transition);
          to[incomingsSymbol].push(transition);
          return transition;
        };
        _proto7.disconnect = function disconnect(from, to) {
          assertsOwnedBy(from, this);
          assertsOwnedBy(to, this);
          var oTransitions = from[outgoingsSymbol];
          var iTransitions = to[incomingsSymbol];
          var transitions = this._transitions;
          var oTransitionsToRemove = oTransitions.filter(function (oTransition) {
            return oTransition.to === to;
          });
          var nOTransitionToRemove = oTransitionsToRemove.length;
          var _loop = function _loop() {
            var oTransition = oTransitionsToRemove[iOTransitionToRemove];
            js.array.remove(oTransitions, oTransition);
            assertIsTrue(js.array.remove(transitions, oTransition));
            assertIsNonNullable(js.array.removeIf(iTransitions, function (transition) {
              return transition === oTransition;
            }));
            markAsDangling(oTransition);
          };
          for (var iOTransitionToRemove = 0; iOTransitionToRemove < nOTransitionToRemove; ++iOTransitionToRemove) {
            _loop();
          }
        };
        _proto7.removeTransition = function removeTransition(removal) {
          assertIsTrue(js.array.remove(this._transitions, removal));
          assertIsNonNullable(js.array.removeIf(removal.from[outgoingsSymbol], function (transition) {
            return transition === removal;
          }));
          assertIsNonNullable(js.array.removeIf(removal.to[incomingsSymbol], function (transition) {
            return transition === removal;
          }));
          markAsDangling(removal);
        };
        _proto7.eraseOutgoings = function eraseOutgoings(from) {
          var _this9 = this;
          assertsOwnedBy(from, this);
          var oTransitions = from[outgoingsSymbol];
          var _loop2 = function _loop2() {
            var oTransition = oTransitions[iOTransition];
            var to = oTransition.to;
            assertIsTrue(js.array.remove(_this9._transitions, oTransition));
            assertIsNonNullable(js.array.removeIf(to[incomingsSymbol], function (transition) {
              return transition === oTransition;
            }));
            markAsDangling(oTransition);
          };
          for (var iOTransition = 0; iOTransition < oTransitions.length; ++iOTransition) {
            _loop2();
          }
          oTransitions.length = 0;
        };
        _proto7.eraseIncomings = function eraseIncomings(to) {
          var _this10 = this;
          assertsOwnedBy(to, this);
          var iTransitions = to[incomingsSymbol];
          var _loop3 = function _loop3() {
            var iTransition = iTransitions[iITransition];
            var from = iTransition.from;
            assertIsTrue(js.array.remove(_this10._transitions, iTransition));
            assertIsNonNullable(js.array.removeIf(from[outgoingsSymbol], function (transition) {
              return transition === iTransition;
            }));
            markAsDangling(iTransition);
          };
          for (var iITransition = 0; iITransition < iTransitions.length; ++iITransition) {
            _loop3();
          }
          iTransitions.length = 0;
        };
        _proto7.eraseTransitionsIncludes = function eraseTransitionsIncludes(state) {
          this.eraseIncomings(state);
          this.eraseOutgoings(state);
        }

        /**
         * @en
         * Adjusts the priority of a transition.
         *
         * To demonstrate, one can imagine a transition array sorted by their priority.
         * - If `diff` is zero, nothing's gonna happen.
         * - Negative `diff` raises the priority:
         *   `diff` number of transitions originally having higher priority than `adjusting`
         *   will then have lower priority than `adjusting`.
         * - Positive `diff` reduce the priority:
         *   `|diff|` number of transitions originally having lower priority than `adjusting`
         *   will then have higher priority than `adjusting`.
         *
         * If the number of transitions indicated by `diff`
         * is more than the actual one, the actual number would be taken.
         * @zh
         * 调整过渡的优先级。
         *
         * 为了说明，可以想象一个由优先级排序的过渡数组。
         * - 如果 `diff` 是 0，无事发生。
         * - 负的 `diff` 会提升该过渡的优先级：原本优先于 `adjusting` 的 `diff` 条过渡的优先级会设置为低于 `adjusting`。
         * - 正的 `diff` 会降低该过渡的优先级：原本优先级低于 `adjusting` 的 `|diff|` 条过渡会设置为优先于 `adjusting`。
         *
         * 如果 `diff` 指示的过渡数量比实际多，则会使用实际数量。
         *
         * @param adjusting @en The transition to adjust the priority. @zh 需要调整优先级的过渡。
         * @param diff @en Indicates how to adjust the priority. @zh 指示如何调整优先级。
         */;
        _proto7.adjustTransitionPriority = function adjustTransitionPriority(adjusting, diff) {
          var from = adjusting.from;
          if (diff === 0) {
            return;
          }
          var outgoings = from[outgoingsSymbol];
          var iAdjusting = outgoings.indexOf(adjusting);
          assertIsTrue(iAdjusting >= 0);
          var iNew = clamp(iAdjusting + diff, 0, outgoings.length - 1);
          {
            // 1. Adjust the order in entire transition array, which is used for serialization.
            // We're doing a discrete movement: move without bother other outgoings from other motion
            var globalTransitions = this._transitions;
            var adjustingIndexInGlobal = globalTransitions.indexOf(adjusting);
            assertIsTrue(adjustingIndexInGlobal >= 0);
            var lastPlaceholder = adjustingIndexInGlobal;
            if (iNew > iAdjusting) {
              // Shift right
              for (var iOutgoing = iAdjusting + 1; iOutgoing <= iNew; ++iOutgoing) {
                var outgoing = outgoings[iOutgoing];
                var indexInGlobal = globalTransitions.indexOf(outgoing);
                assertIsTrue(indexInGlobal >= 0);
                globalTransitions[lastPlaceholder] = outgoing;
                lastPlaceholder = indexInGlobal;
              }
            } else if (iAdjusting > iNew) {
              // Shift left
              for (var _iOutgoing = iAdjusting - 1; _iOutgoing >= iNew; --_iOutgoing) {
                var _outgoing = outgoings[_iOutgoing];
                var _indexInGlobal = globalTransitions.indexOf(_outgoing);
                assertIsTrue(_indexInGlobal >= 0);
                globalTransitions[lastPlaceholder] = _outgoing;
                lastPlaceholder = _indexInGlobal;
              }
            }
            globalTransitions[lastPlaceholder] = adjusting;
          }
          // eslint-disable-next-line no-lone-blocks
          {
            // 2. Adjust the order in outgoing array.
            shift(outgoings, iAdjusting, iNew);
          }
        };
        _proto7.copyTo = function copyTo(that) {
          // Clear that first
          var thatStatesOld = that._states.filter(function (state) {
            switch (state) {
              case that._entryState:
              case that._exitState:
              case that._anyState:
                return true;
              default:
                return false;
            }
          });
          for (var _iterator = _createForOfIteratorHelperLoose(thatStatesOld), _step; !(_step = _iterator()).done;) {
            var thatStateOld = _step.value;
            that.remove(thatStateOld);
          }
          var stateMap = new Map();
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._states), _step2; !(_step2 = _iterator2()).done;) {
            var state = _step2.value;
            switch (state) {
              case this._entryState:
                stateMap.set(state, that._entryState);
                break;
              case this._exitState:
                stateMap.set(state, that._exitState);
                break;
              case this._anyState:
                stateMap.set(state, that._anyState);
                break;
              default:
                if (state instanceof MotionState || state instanceof SubStateMachine || state instanceof EmptyState || state instanceof ProceduralPoseState) {
                  if (state instanceof EmptyState && !that._allowEmptyStates) {
                    continue;
                  }
                  var thatState = instantiate(state);
                  that._addState(thatState);
                  stateMap.set(state, thatState);
                } else {
                  assertIsTrue(false);
                }
                break;
            }
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._transitions), _step3; !(_step3 = _iterator3()).done;) {
            var transition = _step3.value;
            if (!that._allowEmptyStates) {
              if (transition.from instanceof EmptyState || transition.to instanceof EmptyState) {
                continue;
              }
            }
            var thatFrom = stateMap.get(transition.from);
            var thatTo = stateMap.get(transition.to);
            assertIsTrue(thatFrom && thatTo);
            var thatTransition = that.connect(thatFrom, thatTo);
            thatTransition.conditions = transition.conditions.map(function (condition) {
              return condition.clone();
            });
            if (thatTransition instanceof AnimationTransition) {
              assertIsTrue(transition instanceof AnimationTransition);
              transition.copyTo(thatTransition);
            } else if (thatTransition instanceof EmptyStateTransition) {
              assertIsTrue(transition instanceof EmptyStateTransition);
              transition.copyTo(thatTransition);
            } else if (thatTransition instanceof ProceduralPoseState) {
              assertIsTrue(transition instanceof ProceduralPoseState);
              transition.copyTo(thatTransition);
            } else {
              transition.copyTo(thatTransition);
            }
          }
        };
        _proto7.clone = function clone() {
          var that = new StateMachine(this._allowEmptyStates);
          this.copyTo(that);
          return that;
        };
        _proto7._addState = function _addState(state) {
          own(state, this);
          this._states.push(state);
          return state;
        };
        _createClass(StateMachine, [{
          key: "allowEmptyStates",
          get: function get() {
            return this._allowEmptyStates;
          }

          /**
           * The entry state.
           */
        }, {
          key: "entryState",
          get: function get() {
            return this._entryState;
          }

          /**
           * The exit state.
           */
        }, {
          key: "exitState",
          get: function get() {
            return this._exitState;
          }

          /**
           * The any state.
           */
        }, {
          key: "anyState",
          get: function get() {
            return this._anyState;
          }
        }]);
        return StateMachine;
      }(EditorExtendable), (_initializer17 = _applyDecoratedInitializer(_class21.prototype, "_states", [serializable], function () {
        return [];
      }), _initializer18 = _applyDecoratedInitializer(_class21.prototype, "_transitions", [serializable], function () {
        return [];
      }), _initializer19 = _applyDecoratedInitializer(_class21.prototype, "_entryState", [serializable], null), _initializer20 = _applyDecoratedInitializer(_class21.prototype, "_exitState", [serializable], null), _initializer21 = _applyDecoratedInitializer(_class21.prototype, "_anyState", [serializable], null)), _class21)) || _class20));
      _export("SubStateMachine", SubStateMachine = (_dec9 = ccclass('cc.animation.SubStateMachine'), _dec9(_class23 = (_class24 = /*#__PURE__*/function (_InteractiveState) {
        _inheritsLoose(SubStateMachine, _InteractiveState);
        function SubStateMachine(allowEmptyStates) {
          var _this11;
          _this11 = _InteractiveState.call(this) || this;
          _this11._stateMachine = _initializer22 && _initializer22();
          _this11._stateMachine = new StateMachine(allowEmptyStates);
          return _this11;
        }
        var _proto8 = SubStateMachine.prototype;
        _proto8.copyTo = function copyTo(that) {
          _InteractiveState.prototype.copyTo.call(this, that);
          this._stateMachine.copyTo(that._stateMachine);
        };
        _createClass(SubStateMachine, [{
          key: "stateMachine",
          get: function get() {
            return this._stateMachine;
          }
        }]);
        return SubStateMachine;
      }(InteractiveState), (_initializer22 = _applyDecoratedInitializer(_class24.prototype, "_stateMachine", [serializable], null)), _class24)) || _class23));
      _export("PoseGraphStash", PoseGraphStash = (_dec10 = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseGraphStash"), _dec10(_class26 = (_class27 = /*#__PURE__*/function (_EditorExtendable3) {
        _inheritsLoose(PoseGraphStash, _EditorExtendable3);
        function PoseGraphStash() {
          var _this12;
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          _this12 = _EditorExtendable3.call.apply(_EditorExtendable3, [this].concat(args)) || this;
          _this12.graph = _initializer23 && _initializer23();
          return _this12;
        }
        return PoseGraphStash;
      }(EditorExtendable), (_initializer23 = _applyDecoratedInitializer(_class27.prototype, "graph", [serializable], function () {
        return new PoseGraph();
      })), _class27)) || _class26));
      _export("Layer", Layer = (_dec11 = ccclass('cc.animation.Layer'), _dec11(_class29 = (_class30 = /*#__PURE__*/function () {
        var _proto9 = Layer.prototype;
        /**
         * // TODO: HACK
         * @internal
         */
        _proto9.__callOnAfterDeserializeRecursive = function __callOnAfterDeserializeRecursive() {
          this.stateMachine._allowEmptyStates = true;
          this.stateMachine.__callOnAfterDeserializeRecursive();
          for (var stashId in this._stashes) {
            var stash = this._stashes[stashId];
            stash.graph.__callOnAfterDeserializeRecursive();
          }
        };
        _proto9.stashes = function stashes() {
          return Object.entries(this._stashes);
        };
        _proto9.getStash = function getStash(id) {
          return this._stashes[id];
        };
        _proto9.addStash = function addStash(id) {
          return this._stashes[id] = new PoseGraphStash();
        };
        _proto9.removeStash = function removeStash(id) {
          delete this._stashes[id];
        };
        _proto9.renameStash = function renameStash(id, newId) {
          this._stashes = renameObjectProperty(this._stashes, id, newId);
        }

        /**
         * @marked_as_engine_private
         */;
        function Layer() {
          this[ownerSymbol] = void 0;
          this._stateMachine = _initializer24 && _initializer24();
          this.name = _initializer25 && _initializer25();
          this.weight = _initializer26 && _initializer26();
          this.mask = _initializer27 && _initializer27();
          this.additive = _initializer28 && _initializer28();
          this._stashes = _initializer29 && _initializer29();
          this._stateMachine = new StateMachine(true);
        }
        _createClass(Layer, [{
          key: "stateMachine",
          get: function get() {
            return this._stateMachine;
          }
        }]);
        return Layer;
      }(), (_initializer24 = _applyDecoratedInitializer(_class30.prototype, "_stateMachine", [serializable], null), _initializer25 = _applyDecoratedInitializer(_class30.prototype, "name", [serializable], function () {
        return '';
      }), _initializer26 = _applyDecoratedInitializer(_class30.prototype, "weight", [serializable], function () {
        return 1.0;
      }), _initializer27 = _applyDecoratedInitializer(_class30.prototype, "mask", [serializable], function () {
        return null;
      }), _initializer28 = _applyDecoratedInitializer(_class30.prototype, "additive", [serializable], function () {
        return false;
      }), _initializer29 = _applyDecoratedInitializer(_class30.prototype, "_stashes", [serializable], function () {
        return {};
      })), _class30)) || _class29));
      (function (LayerBlending) {
        LayerBlending[LayerBlending["override"] = 0] = "override";
        LayerBlending[LayerBlending["additive"] = 1] = "additive";
      })(LayerBlending || _export("LayerBlending", LayerBlending = {}));
      /**
       * @en
       * An opacity type which denotes what the animation graph seems like outside the engine.
       * @zh
       * 一个非透明的类型，它是动画图在引擎外部的表示。
       */
      _export("AnimationGraph", AnimationGraph = (_dec12 = ccclass('cc.animation.AnimationGraph'), _dec12(_class32 = (_class33 = /*#__PURE__*/function (_AnimationGraphLike) {
        _inheritsLoose(AnimationGraph, _AnimationGraphLike);
        function AnimationGraph() {
          var _this13;
          _this13 = _AnimationGraphLike.call(this) || this;
          _this13._layers = _initializer30 && _initializer30();
          _this13._variables = _initializer31 && _initializer31();
          return _this13;
        }
        var _proto10 = AnimationGraph.prototype;
        _proto10.onLoaded = function onLoaded() {
          var layers = this._layers;
          var nLayers = layers.length;
          for (var iLayer = 0; iLayer < nLayers; ++iLayer) {
            layers[iLayer].__callOnAfterDeserializeRecursive();
          }
        };
        /**
         * Adds a layer.
         * @returns The new layer.
         */
        _proto10.addLayer = function addLayer() {
          var layer = new Layer();
          this._layers.push(layer);
          return layer;
        }

        /**
         * Removes a layer.
         * @param index Index to the layer to remove.
         */;
        _proto10.removeLayer = function removeLayer(index) {
          js.array.removeAt(this._layers, index);
        }

        /**
         * Adjusts the layer's order.
         * @param index
         * @param newIndex
         */;
        _proto10.moveLayer = function moveLayer(index, newIndex) {
          shift(this._layers, index, newIndex);
        }

        /**
         * Adds a variable into this graph.
         * @param name The variable's name.
         * @param type The variable's type.
         * @param initialValue Initial value.
         */;
        _proto10.addVariable = function addVariable(name, type, initialValue) {
          var variable = createVariable(type, initialValue);
          this._variables[name] = variable;
          return variable;
        };
        _proto10.removeVariable = function removeVariable(name) {
          delete this._variables[name];
        };
        _proto10.getVariable = function getVariable(name) {
          return this._variables[name];
        }

        /**
         * @zh 重命名一个变量。注意，所有对该变量的引用都不会修改。
         * 如果变量的原始名称不存在或者新的名称已存在，此方法不会做任何事。
         * 变量在图中的顺序会保持不变。
         * @en Renames an variable. Note, this won't changes any reference to the variable.
         * If the original name of the variable doesn't exists or
         * the new name has already existed, this method won't do anything.
         * The variable's order in the graph is also retained.
         * @param name @zh 要重命名的变量的名字。 @en The name of the variable to be renamed.
         * @param newName @zh 新的名字。 @en New name.
         */;
        _proto10.renameVariable = function renameVariable(name, newName) {
          this._variables = renameObjectProperty(this._variables, name, newName);
        };
        _createClass(AnimationGraph, [{
          key: "layers",
          get: function get() {
            return this._layers;
          }
        }, {
          key: "variables",
          get: function get() {
            return Object.entries(this._variables);
          }
        }]);
        return AnimationGraph;
      }(AnimationGraphLike), (_initializer30 = _applyDecoratedInitializer(_class33.prototype, "_layers", [serializable], function () {
        return [];
      }), _initializer31 = _applyDecoratedInitializer(_class33.prototype, "_variables", [serializable], function () {
        return {};
      })), _class33)) || _class32));
    }
  };
});