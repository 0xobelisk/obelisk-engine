System.register("q-bundled:///fs/cocos/animation/marionette/animation-graph.js", ["../../core/data/decorators/index.js", "../../core/index.js", "./ownership.js", "./variable/index.js", "./errors.js", "./state-machine/motion-state.js", "./state-machine/state.js", "../../serialization/deserialize-symbols.js", "../define.js", "./animation-graph-like.js", "../../core/utils/internal.js", "./pose-graph/pose-graph.js", "./event/event-binding.js", "../../serialization/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, serializable, js, clamp, assertIsNonNullable, assertIsTrue, EditorExtendable, shift, assertsOwnedBy, own, markAsDangling, ownerSymbol, createVariable, InvalidTransitionError, MotionState, State, outgoingsSymbol, incomingsSymbol, InteractiveState, onAfterDeserializedTag, CLASS_NAME_PREFIX_ANIM, AnimationGraphLike, createInstanceofProxy, renameObjectProperty, PoseGraph, AnimationGraphEventBinding, instantiate, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _dec2, _class4, _class5, _initializer4, _initializer5, _initializer6, _initializer7, _dec3, _class7, _class8, _initializer8, _initializer9, _initializer10, _initializer11, _dec4, _class10, _dec5, _class11, _class12, _initializer12, _dec6, _class14, _class15, _initializer13, _initializer14, _initializer15, _dec7, _class17, _class18, _initializer16, _dec8, _class20, _class21, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _dec9, _class23, _class24, _initializer22, _dec10, _class26, _class27, _initializer23, _dec11, _class29, _class30, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _dec12, _class32, _class33, _initializer30, _initializer31, Transition, DurationalTransition, AnimationTransition, EmptyState, EmptyStateTransition, ProceduralPoseState, ProceduralPoseState_, ProceduralPoseTransition, ProceduralPoseTransition_, StateMachine, SubStateMachine, PoseGraphStash, Layer, LayerBlending, AnimationGraph;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      Transition = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}Transition`), _dec(_class = (_class2 = class Transition extends EditorExtendable {
        constructor(from, to, conditions) {
          super();
          /**
           * The transition source.
           */
          this.from = _initializer && _initializer();
          /**
           * The transition target.
           */
          this.to = _initializer2 && _initializer2();
          /**
           * The transition condition.
           */
          this.conditions = _initializer3 && _initializer3();
          this[ownerSymbol] = void 0;
          this.from = from;
          this.to = to;
          if (conditions) {
            this.conditions = conditions;
          }
        }
        copyTo(that) {
          that.conditions = this.conditions.map(condition => condition.clone());
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "from", [serializable], null), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "to", [serializable], null), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "conditions", [serializable], function () {
        return [];
      })), _class2)) || _class);
      DurationalTransition = (_dec2 = ccclass(`${CLASS_NAME_PREFIX_ANIM}DurationalTransition`), _dec2(_class4 = (_class5 = class DurationalTransition extends Transition {
        constructor(...args) {
          super(...args);
          /**
           * @en The start time of (final) destination motion state when this transition starts.
           * Its unit is seconds if `relativeDestinationStart` is `false`,
           * Otherwise, its unit is the duration of destination motion state.
           * @zh 此过渡开始时，（最终）目标动作状态的起始时间。
           * 如果 `relativeDestinationStart`为 `false`，其单位是秒，否则其单位是目标动作状态的周期。
           */
          this.destinationStart = _initializer4 && _initializer4();
          /**
           * @en Determines the unit of destination start time. See `destinationStart`.
           * @zh 决定了目标起始时间的单位。见 `destinationStart`。
           */
          this.relativeDestinationStart = _initializer5 && _initializer5();
          /**
           * @zh 过渡开始事件绑定，此处绑定的事件会在过渡开始时触发。
           * @en Transition start event binding. The event bound here will be triggered on the transition starts.
           */
          this.startEventBinding = _initializer6 && _initializer6();
          /**
           * @zh 过渡结束事件绑定，此处绑定的事件会在过渡结束时触发。
           * @en Transition end event binding. The event bound here will be triggered on the transition ends.
           */
          this.endEventBinding = _initializer7 && _initializer7();
          this[ownerSymbol] = void 0;
        }
        copyTo(that) {
          super.copyTo(that);
          that.destinationStart = this.destinationStart;
          that.relativeDestinationStart = this.relativeDestinationStart;
          this.startEventBinding.copyTo(that.startEventBinding);
          this.endEventBinding.copyTo(that.endEventBinding);
        }
      }, (_initializer4 = _applyDecoratedInitializer(_class5.prototype, "destinationStart", [serializable], function () {
        return 0.0;
      }), _initializer5 = _applyDecoratedInitializer(_class5.prototype, "relativeDestinationStart", [serializable], function () {
        return false;
      }), _initializer6 = _applyDecoratedInitializer(_class5.prototype, "startEventBinding", [serializable, editable], function () {
        return new AnimationGraphEventBinding();
      }), _initializer7 = _applyDecoratedInitializer(_class5.prototype, "endEventBinding", [serializable, editable], function () {
        return new AnimationGraphEventBinding();
      })), _class5)) || _class4);
      AnimationTransition = (_dec3 = ccclass(`${CLASS_NAME_PREFIX_ANIM}AnimationTransition`), _dec3(_class7 = (_class8 = class AnimationTransition extends DurationalTransition {
        constructor(...args) {
          super(...args);
          /**
           * The transition duration.
           * The unit of the duration is the real duration of transition source
           * if `relativeDuration` is `true` or seconds otherwise.
           */
          this.duration = _initializer8 && _initializer8();
          /**
           * Determines the unit of transition duration. See `duration`.
           */
          this.relativeDuration = _initializer9 && _initializer9();
          this.exitConditionEnabled = _initializer10 && _initializer10();
          this._exitCondition = _initializer11 && _initializer11();
        }
        get exitCondition() {
          return this._exitCondition;
        }
        set exitCondition(value) {
          assertIsTrue(value >= 0.0);
          this._exitCondition = value;
        }
        copyTo(that) {
          super.copyTo(that);
          that.duration = this.duration;
          that.relativeDuration = this.relativeDuration;
          that.exitConditionEnabled = this.exitConditionEnabled;
          that.exitCondition = this.exitCondition;
        }
      }, (_initializer8 = _applyDecoratedInitializer(_class8.prototype, "duration", [serializable], function () {
        return 0.3;
      }), _initializer9 = _applyDecoratedInitializer(_class8.prototype, "relativeDuration", [serializable], function () {
        return false;
      }), _initializer10 = _applyDecoratedInitializer(_class8.prototype, "exitConditionEnabled", [serializable], function () {
        return true;
      }), _initializer11 = _applyDecoratedInitializer(_class8.prototype, "_exitCondition", [serializable], function () {
        return 1.0;
      })), _class8)) || _class7);
      _export("EmptyState", EmptyState = (_dec4 = ccclass(`${CLASS_NAME_PREFIX_ANIM}EmptyState`), _dec4(_class10 = class EmptyState extends State {}) || _class10));
      _export("EmptyStateTransition", EmptyStateTransition = (_dec5 = ccclass(`${CLASS_NAME_PREFIX_ANIM}EmptyStateTransition`), _dec5(_class11 = (_class12 = class EmptyStateTransition extends DurationalTransition {
        constructor(...args) {
          super(...args);
          /**
           * The transition duration, in seconds.
           */
          this.duration = _initializer12 && _initializer12();
        }
        copyTo(that) {
          super.copyTo(that);
          that.duration = this.duration;
        }
      }, (_initializer12 = _applyDecoratedInitializer(_class12.prototype, "duration", [serializable], function () {
        return 0.3;
      })), _class12)) || _class11));
      ProceduralPoseState = (_dec6 = ccclass(`${CLASS_NAME_PREFIX_ANIM}ProceduralPoseState`), _dec6(_class14 = (_class15 = class ProceduralPoseState extends State {
        constructor(...args) {
          super(...args);
          this.graph = _initializer13 && _initializer13();
          /**
           * @zh 状态进入事件绑定，此处绑定的事件会在状态机向该状态过渡时触发。
           * @en State entered event binding. The event bound here will be triggered
           * when the state machine starts to transition into this state.
           */
          this.transitionInEventBinding = _initializer14 && _initializer14();
          /**
           * @zh 状态离开事件绑定，此处绑定的事件会在状态机从该状态离开时触发。
           * @en State left event binding. The event bound here will be triggered
           * when the state machine starts to transition out from this state.
           */
          this.transitionOutEventBinding = _initializer15 && _initializer15();
        }
        /**
         * // TODO: HACK
         * @internal
         */
        __callOnAfterDeserializeRecursive() {
          this.graph.__callOnAfterDeserializeRecursive();
        }
        copyTo(that) {
          super.copyTo(that);
          this.transitionInEventBinding.copyTo(that.transitionInEventBinding);
          this.transitionOutEventBinding.copyTo(that.transitionOutEventBinding);
          return this;
        }
      }, (_initializer13 = _applyDecoratedInitializer(_class15.prototype, "graph", [serializable], function () {
        return new PoseGraph();
      }), _initializer14 = _applyDecoratedInitializer(_class15.prototype, "transitionInEventBinding", [serializable, editable], function () {
        return new AnimationGraphEventBinding();
      }), _initializer15 = _applyDecoratedInitializer(_class15.prototype, "transitionOutEventBinding", [serializable, editable], function () {
        return new AnimationGraphEventBinding();
      })), _class15)) || _class14);
      _export("ProceduralPoseState", ProceduralPoseState_ = createInstanceofProxy(ProceduralPoseState));
      ProceduralPoseTransition = (_dec7 = ccclass(`${CLASS_NAME_PREFIX_ANIM}ProceduralPoseTransition`), _dec7(_class17 = (_class18 = class ProceduralPoseTransition extends DurationalTransition {
        constructor(...args) {
          super(...args);
          /**
           * The transition duration, in seconds.
           */
          this.duration = _initializer16 && _initializer16();
        }
        copyTo(that) {
          super.copyTo(that);
          that.duration = this.duration;
        }
      }, (_initializer16 = _applyDecoratedInitializer(_class18.prototype, "duration", [serializable], function () {
        return 0.3;
      })), _class18)) || _class17);
      _export("ProceduralPoseTransition", ProceduralPoseTransition_ = createInstanceofProxy(ProceduralPoseTransition));
      _export("StateMachine", StateMachine = (_dec8 = ccclass('cc.animation.StateMachine'), _dec8(_class20 = (_class21 = class StateMachine extends EditorExtendable {
        /**
         * // TODO: HACK
         * @internal
         */
        __callOnAfterDeserializeRecursive() {
          this[onAfterDeserializedTag]();
          const nStates = this._states.length;
          for (let iState = 0; iState < nStates; ++iState) {
            const state = this._states[iState];
            if (state instanceof SubStateMachine) {
              state.stateMachine.__callOnAfterDeserializeRecursive();
            } else if (state instanceof ProceduralPoseState) {
              state.__callOnAfterDeserializeRecursive();
            } else if (state instanceof MotionState) {
              state.__callOnAfterDeserializeRecursive();
            }
          }
        }
        constructor(allowEmptyStates) {
          super();
          this._states = _initializer17 && _initializer17();
          this._transitions = _initializer18 && _initializer18();
          this._entryState = _initializer19 && _initializer19();
          this._exitState = _initializer20 && _initializer20();
          this._anyState = _initializer21 && _initializer21();
          /**
           * @internal
           */
          this._allowEmptyStates = true;
          this._allowEmptyStates = allowEmptyStates !== null && allowEmptyStates !== void 0 ? allowEmptyStates : false;
          this._entryState = this._addState(new State());
          this._entryState.name = 'Entry';
          this._exitState = this._addState(new State());
          this._exitState.name = 'Exit';
          this._anyState = this._addState(new State());
          this._anyState.name = 'Any';
        }
        [onAfterDeserializedTag]() {
          this._states.forEach(state => own(state, this));
          this._transitions.forEach(transition => {
            transition.from[outgoingsSymbol].push(transition);
            transition.to[incomingsSymbol].push(transition);
          });
        }
        get allowEmptyStates() {
          return this._allowEmptyStates;
        }

        /**
         * The entry state.
         */
        get entryState() {
          return this._entryState;
        }

        /**
         * The exit state.
         */
        get exitState() {
          return this._exitState;
        }

        /**
         * The any state.
         */
        get anyState() {
          return this._anyState;
        }

        /**
         * Gets an iterator to all states within this graph.
         * @returns The iterator.
         */
        states() {
          return this._states;
        }

        /**
         * Gets an iterator to all transitions within this graph.
         * @returns The iterator.
         */
        transitions() {
          return this._transitions;
        }

        /**
         * Gets the transitions between specified states.
         * @param from Transition source.
         * @param to Transition target.
         * @returns Iterator to the transitions
         */
        getTransitionsBetween(from, to) {
          assertsOwnedBy(from, this);
          assertsOwnedBy(to, this);
          return from[outgoingsSymbol].filter(transition => transition.to === to);
        }

        /**
         * @en
         * Gets all transitions outgoing from specified state.
         * @zh
         * 获取从指定状态引出的所有过渡。
         * @param from @en The state. @zh 指定状态。
         * @returns @en Iterable to result transitions, in priority order. @zh 到结果过渡的迭代器，按优先级顺序。
         */
        getOutgoings(from) {
          assertsOwnedBy(from, this);
          return from[outgoingsSymbol];
        }

        /**
         * Gets all incoming transitions of specified state.
         * @param to The state.
         * @returns Result transitions.
         */
        getIncomings(to) {
          assertsOwnedBy(to, this);
          return to[incomingsSymbol];
        }

        /**
         * Adds a motion state into this state machine.
         * @returns The newly created motion.
         */
        addMotion() {
          return this._addState(new MotionState());
        }

        /**
         * Adds a sub state machine into this state machine.
         * @returns The newly created state machine.
         */
        addSubStateMachine() {
          return this._addState(new SubStateMachine(this._allowEmptyStates));
        }

        /**
         * Adds an empty state into this state machine.
         * @returns The newly created empty state.
         */
        addEmpty() {
          if (!this._allowEmptyStates) {
            throw new Error(`Empty states are now allowed in this state machine.`);
          }
          return this._addState(new EmptyState());
        }

        /**
         * @zh 向此状态机中添加一项姿势状态。
         * @en Adds an pose state into this state machine.
         * @returns @zh 新创建的姿势状态。 @en The newly created pose state.
         */
        addProceduralPoseState() {
          return this._addState(new ProceduralPoseState());
        }

        /**
         * Removes specified state from this state machine.
         * @param state The state to remove.
         */
        remove(state) {
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
         */

        /**
         * Connect two states.
         * @param from Source state.
         * @param to Target state.
         * @param condition The transition condition.
         */

        /**
         * Connect two states.
         * @param from Source state.
         * @param to Target state.
         * @param condition The transition condition.
         */

        /**
         * Connect two states.
         * @param from Source state.
         * @param to Target state.
         * @param condition The transition condition.
         * @throws `InvalidTransitionError` if:
         * - the target state is entry or any, or
         * - the source state is exit.
         */

        connect(from, to, conditions) {
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
          const transition = from instanceof MotionState || from === this._anyState ? new AnimationTransition(from, to, conditions) : from instanceof EmptyState ? new EmptyStateTransition(from, to, conditions) : from instanceof ProceduralPoseState ? new ProceduralPoseTransition(from, to, conditions) : new Transition(from, to, conditions);
          own(transition, this);
          this._transitions.push(transition);
          from[outgoingsSymbol].push(transition);
          to[incomingsSymbol].push(transition);
          return transition;
        }
        disconnect(from, to) {
          assertsOwnedBy(from, this);
          assertsOwnedBy(to, this);
          const oTransitions = from[outgoingsSymbol];
          const iTransitions = to[incomingsSymbol];
          const transitions = this._transitions;
          const oTransitionsToRemove = oTransitions.filter(oTransition => oTransition.to === to);
          const nOTransitionToRemove = oTransitionsToRemove.length;
          for (let iOTransitionToRemove = 0; iOTransitionToRemove < nOTransitionToRemove; ++iOTransitionToRemove) {
            const oTransition = oTransitionsToRemove[iOTransitionToRemove];
            js.array.remove(oTransitions, oTransition);
            assertIsTrue(js.array.remove(transitions, oTransition));
            assertIsNonNullable(js.array.removeIf(iTransitions, transition => transition === oTransition));
            markAsDangling(oTransition);
          }
        }
        removeTransition(removal) {
          assertIsTrue(js.array.remove(this._transitions, removal));
          assertIsNonNullable(js.array.removeIf(removal.from[outgoingsSymbol], transition => transition === removal));
          assertIsNonNullable(js.array.removeIf(removal.to[incomingsSymbol], transition => transition === removal));
          markAsDangling(removal);
        }
        eraseOutgoings(from) {
          assertsOwnedBy(from, this);
          const oTransitions = from[outgoingsSymbol];
          for (let iOTransition = 0; iOTransition < oTransitions.length; ++iOTransition) {
            const oTransition = oTransitions[iOTransition];
            const to = oTransition.to;
            assertIsTrue(js.array.remove(this._transitions, oTransition));
            assertIsNonNullable(js.array.removeIf(to[incomingsSymbol], transition => transition === oTransition));
            markAsDangling(oTransition);
          }
          oTransitions.length = 0;
        }
        eraseIncomings(to) {
          assertsOwnedBy(to, this);
          const iTransitions = to[incomingsSymbol];
          for (let iITransition = 0; iITransition < iTransitions.length; ++iITransition) {
            const iTransition = iTransitions[iITransition];
            const from = iTransition.from;
            assertIsTrue(js.array.remove(this._transitions, iTransition));
            assertIsNonNullable(js.array.removeIf(from[outgoingsSymbol], transition => transition === iTransition));
            markAsDangling(iTransition);
          }
          iTransitions.length = 0;
        }
        eraseTransitionsIncludes(state) {
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
         */
        adjustTransitionPriority(adjusting, diff) {
          const {
            from
          } = adjusting;
          if (diff === 0) {
            return;
          }
          const outgoings = from[outgoingsSymbol];
          const iAdjusting = outgoings.indexOf(adjusting);
          assertIsTrue(iAdjusting >= 0);
          const iNew = clamp(iAdjusting + diff, 0, outgoings.length - 1);
          {
            // 1. Adjust the order in entire transition array, which is used for serialization.
            // We're doing a discrete movement: move without bother other outgoings from other motion
            const {
              _transitions: globalTransitions
            } = this;
            const adjustingIndexInGlobal = globalTransitions.indexOf(adjusting);
            assertIsTrue(adjustingIndexInGlobal >= 0);
            let lastPlaceholder = adjustingIndexInGlobal;
            if (iNew > iAdjusting) {
              // Shift right
              for (let iOutgoing = iAdjusting + 1; iOutgoing <= iNew; ++iOutgoing) {
                const outgoing = outgoings[iOutgoing];
                const indexInGlobal = globalTransitions.indexOf(outgoing);
                assertIsTrue(indexInGlobal >= 0);
                globalTransitions[lastPlaceholder] = outgoing;
                lastPlaceholder = indexInGlobal;
              }
            } else if (iAdjusting > iNew) {
              // Shift left
              for (let iOutgoing = iAdjusting - 1; iOutgoing >= iNew; --iOutgoing) {
                const outgoing = outgoings[iOutgoing];
                const indexInGlobal = globalTransitions.indexOf(outgoing);
                assertIsTrue(indexInGlobal >= 0);
                globalTransitions[lastPlaceholder] = outgoing;
                lastPlaceholder = indexInGlobal;
              }
            }
            globalTransitions[lastPlaceholder] = adjusting;
          }
          // eslint-disable-next-line no-lone-blocks
          {
            // 2. Adjust the order in outgoing array.
            shift(outgoings, iAdjusting, iNew);
          }
        }
        copyTo(that) {
          // Clear that first
          const thatStatesOld = that._states.filter(state => {
            switch (state) {
              case that._entryState:
              case that._exitState:
              case that._anyState:
                return true;
              default:
                return false;
            }
          });
          for (const thatStateOld of thatStatesOld) {
            that.remove(thatStateOld);
          }
          const stateMap = new Map();
          for (const state of this._states) {
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
                  const thatState = instantiate(state);
                  that._addState(thatState);
                  stateMap.set(state, thatState);
                } else {
                  assertIsTrue(false);
                }
                break;
            }
          }
          for (const transition of this._transitions) {
            if (!that._allowEmptyStates) {
              if (transition.from instanceof EmptyState || transition.to instanceof EmptyState) {
                continue;
              }
            }
            const thatFrom = stateMap.get(transition.from);
            const thatTo = stateMap.get(transition.to);
            assertIsTrue(thatFrom && thatTo);
            const thatTransition = that.connect(thatFrom, thatTo);
            thatTransition.conditions = transition.conditions.map(condition => condition.clone());
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
        }
        clone() {
          const that = new StateMachine(this._allowEmptyStates);
          this.copyTo(that);
          return that;
        }
        _addState(state) {
          own(state, this);
          this._states.push(state);
          return state;
        }
      }, (_initializer17 = _applyDecoratedInitializer(_class21.prototype, "_states", [serializable], function () {
        return [];
      }), _initializer18 = _applyDecoratedInitializer(_class21.prototype, "_transitions", [serializable], function () {
        return [];
      }), _initializer19 = _applyDecoratedInitializer(_class21.prototype, "_entryState", [serializable], null), _initializer20 = _applyDecoratedInitializer(_class21.prototype, "_exitState", [serializable], null), _initializer21 = _applyDecoratedInitializer(_class21.prototype, "_anyState", [serializable], null)), _class21)) || _class20));
      _export("SubStateMachine", SubStateMachine = (_dec9 = ccclass('cc.animation.SubStateMachine'), _dec9(_class23 = (_class24 = class SubStateMachine extends InteractiveState {
        constructor(allowEmptyStates) {
          super();
          this._stateMachine = _initializer22 && _initializer22();
          this._stateMachine = new StateMachine(allowEmptyStates);
        }
        get stateMachine() {
          return this._stateMachine;
        }
        copyTo(that) {
          super.copyTo(that);
          this._stateMachine.copyTo(that._stateMachine);
        }
      }, (_initializer22 = _applyDecoratedInitializer(_class24.prototype, "_stateMachine", [serializable], null)), _class24)) || _class23));
      _export("PoseGraphStash", PoseGraphStash = (_dec10 = ccclass(`${CLASS_NAME_PREFIX_ANIM}PoseGraphStash`), _dec10(_class26 = (_class27 = class PoseGraphStash extends EditorExtendable {
        constructor(...args) {
          super(...args);
          this.graph = _initializer23 && _initializer23();
        }
      }, (_initializer23 = _applyDecoratedInitializer(_class27.prototype, "graph", [serializable], function () {
        return new PoseGraph();
      })), _class27)) || _class26));
      _export("Layer", Layer = (_dec11 = ccclass('cc.animation.Layer'), _dec11(_class29 = (_class30 = class Layer {
        /**
         * // TODO: HACK
         * @internal
         */
        __callOnAfterDeserializeRecursive() {
          this.stateMachine._allowEmptyStates = true;
          this.stateMachine.__callOnAfterDeserializeRecursive();
          for (const stashId in this._stashes) {
            const stash = this._stashes[stashId];
            stash.graph.__callOnAfterDeserializeRecursive();
          }
        }
        stashes() {
          return Object.entries(this._stashes);
        }
        getStash(id) {
          return this._stashes[id];
        }
        addStash(id) {
          return this._stashes[id] = new PoseGraphStash();
        }
        removeStash(id) {
          delete this._stashes[id];
        }
        renameStash(id, newId) {
          this._stashes = renameObjectProperty(this._stashes, id, newId);
        }

        /**
         * @marked_as_engine_private
         */
        constructor() {
          this[ownerSymbol] = void 0;
          this._stateMachine = _initializer24 && _initializer24();
          this.name = _initializer25 && _initializer25();
          this.weight = _initializer26 && _initializer26();
          this.mask = _initializer27 && _initializer27();
          this.additive = _initializer28 && _initializer28();
          this._stashes = _initializer29 && _initializer29();
          this._stateMachine = new StateMachine(true);
        }
        get stateMachine() {
          return this._stateMachine;
        }
      }, (_initializer24 = _applyDecoratedInitializer(_class30.prototype, "_stateMachine", [serializable], null), _initializer25 = _applyDecoratedInitializer(_class30.prototype, "name", [serializable], function () {
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
      _export("AnimationGraph", AnimationGraph = (_dec12 = ccclass('cc.animation.AnimationGraph'), _dec12(_class32 = (_class33 = class AnimationGraph extends AnimationGraphLike {
        constructor() {
          super();
          this._layers = _initializer30 && _initializer30();
          this._variables = _initializer31 && _initializer31();
        }
        onLoaded() {
          const {
            _layers: layers
          } = this;
          const nLayers = layers.length;
          for (let iLayer = 0; iLayer < nLayers; ++iLayer) {
            layers[iLayer].__callOnAfterDeserializeRecursive();
          }
        }
        get layers() {
          return this._layers;
        }
        get variables() {
          return Object.entries(this._variables);
        }

        /**
         * Adds a layer.
         * @returns The new layer.
         */
        addLayer() {
          const layer = new Layer();
          this._layers.push(layer);
          return layer;
        }

        /**
         * Removes a layer.
         * @param index Index to the layer to remove.
         */
        removeLayer(index) {
          js.array.removeAt(this._layers, index);
        }

        /**
         * Adjusts the layer's order.
         * @param index
         * @param newIndex
         */
        moveLayer(index, newIndex) {
          shift(this._layers, index, newIndex);
        }

        /**
         * Adds a variable into this graph.
         * @param name The variable's name.
         * @param type The variable's type.
         * @param initialValue Initial value.
         */
        addVariable(name, type, initialValue) {
          const variable = createVariable(type, initialValue);
          this._variables[name] = variable;
          return variable;
        }
        removeVariable(name) {
          delete this._variables[name];
        }
        getVariable(name) {
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
         */
        renameVariable(name, newName) {
          this._variables = renameObjectProperty(this._variables, name, newName);
        }
      }, (_initializer30 = _applyDecoratedInitializer(_class33.prototype, "_layers", [serializable], function () {
        return [];
      }), _initializer31 = _applyDecoratedInitializer(_class33.prototype, "_variables", [serializable], function () {
        return {};
      })), _class33)) || _class32));
    }
  };
});