System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/state-machine-eval.js", ["../../../../../virtual/internal%253Aconstants.js", "../animation-graph.js", "../create-eval.js", "../parametric.js", "./condition/index.js", "./motion-state.js", "../../../core/index.js", "./state-machine-component.js", "../animation-graph-context.js", "../../core/pose.js", "../pose-graph/instantiation.js"], function (_export, _context) {
  "use strict";

  var DEBUG, isAnimationTransition, SubStateMachine, EmptyState, EmptyStateTransition, ProceduralPoseState, ProceduralPoseTransition, createEval, validateVariableExistence, validateVariableType, VariableType, TriggerCondition, MotionState, warnID, assertIsTrue, assertIsNonNullable, Pool, approx, clamp01, StateMachineComponent, AnimationGraphUpdateContextGenerator, blendPoseInto, instantiatePoseGraph, _emptyClipStatusesIte, MAX_TRANSITIONS_PER_FRAME, TopLevelStateMachineEvaluation, emptyClipStatusesIterator, emptyClipStatusesIterable, NodeKind, StateEval, EventifiedStateEval, StateTickFlag, InstantiatedComponents, VMSMEval, VMSMInternalState, SpecialStateEval, EmptyStateEval, ProceduralPoseStateEval, ConditionEvaluationContextImpl, ActivatedTransition;
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function isRealState(stateEval) {
    return stateEval.kind === NodeKind.animation || stateEval.kind === NodeKind.empty || stateEval.kind === NodeKind.procedural;
  }
  function createStateStatusCache() {
    return {
      progress: 0.0
    };
  }
  function calcProgressUpdate(currentProgress, duration, deltaTime) {
    if (duration === 0.0) {
      // TODO?
      return 0.0;
    }
    var progress = currentProgress + deltaTime / duration;
    return progress;
  }
  function normalizeProgress(progress) {
    var signedFrac = progress - Math.trunc(progress);
    return signedFrac >= 0.0 ? signedFrac : 1.0 + signedFrac;
  }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_animationGraphJs) {
      isAnimationTransition = _animationGraphJs.isAnimationTransition;
      SubStateMachine = _animationGraphJs.SubStateMachine;
      EmptyState = _animationGraphJs.EmptyState;
      EmptyStateTransition = _animationGraphJs.EmptyStateTransition;
      ProceduralPoseState = _animationGraphJs.ProceduralPoseState;
      ProceduralPoseTransition = _animationGraphJs.ProceduralPoseTransition;
    }, function (_createEvalJs) {
      createEval = _createEvalJs.createEval;
    }, function (_parametricJs) {
      validateVariableExistence = _parametricJs.validateVariableExistence;
      validateVariableType = _parametricJs.validateVariableType;
      VariableType = _parametricJs.VariableType;
    }, function (_conditionIndexJs) {
      TriggerCondition = _conditionIndexJs.TriggerCondition;
    }, function (_motionStateJs) {
      MotionState = _motionStateJs.MotionState;
    }, function (_coreIndexJs) {
      warnID = _coreIndexJs.warnID;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      assertIsNonNullable = _coreIndexJs.assertIsNonNullable;
      Pool = _coreIndexJs.Pool;
      approx = _coreIndexJs.approx;
      clamp01 = _coreIndexJs.clamp01;
    }, function (_stateMachineComponentJs) {
      StateMachineComponent = _stateMachineComponentJs.StateMachineComponent;
    }, function (_animationGraphContextJs) {
      AnimationGraphUpdateContextGenerator = _animationGraphContextJs.AnimationGraphUpdateContextGenerator;
    }, function (_corePoseJs) {
      blendPoseInto = _corePoseJs.blendPoseInto;
    }, function (_poseGraphInstantiationJs) {
      instantiatePoseGraph = _poseGraphInstantiationJs.instantiatePoseGraph;
    }],
    execute: function () {
      /**
       * The max transitions can be matched in single frame.
       *
       * @internal Only exported for test usage.
       */
      _export("MAX_TRANSITIONS_PER_FRAME", MAX_TRANSITIONS_PER_FRAME = 16);
      /**
       * @en
       * Runtime status of a transition.
       * @zh
       * 过渡的运行状态。
       */
      /**
       * @en
       * Runtime clip status of a motion state.
       * @zh
       * 动作状态中包含的剪辑的运行状态。
       */
      /**
       * @en
       * Runtime status of a motion state.
       * @zh
       * 动作状态的运行状态。
       */
      _export("TopLevelStateMachineEvaluation", TopLevelStateMachineEvaluation = /*#__PURE__*/function () {
        function TopLevelStateMachineEvaluation(stateMachine, name, context) {
          this.passthroughWeight = 1.0;
          /**
           * Preserved here for clip overriding.
           */
          this._motionStates = [];
          /**
           * Preserved here for settle stage.
           */
          this._proceduralPoseStates = [];
          this._topLevelEntry = void 0;
          this._topLevelExit = void 0;
          this._currentNode = void 0;
          this._pendingTransitionPath = [];
          this._activatedTransitions = [];
          this._activatedTransitionPool = ActivatedTransition.createPool(4);
          this._updateContextGenerator = new AnimationGraphUpdateContextGenerator();
          this._conditionEvaluationContext = new ConditionEvaluationContextImpl();
          this._additive = false;
          this._additive = context.additive;
          this.name = name;
          this._controller = context.controller;
          var _this$_addStateMachin = this._addStateMachine(stateMachine, null, context, name),
            entry = _this$_addStateMachin.entry,
            exit = _this$_addStateMachin.exit;
          this._topLevelEntry = entry;
          this._topLevelExit = exit;
          this._currentNode = entry;
          entry.increaseActiveReference();
          this._resetTrigger = context.triggerResetter;
        }

        /**
         * Indicates if this layer's top level graph reached its exit.
         */
        var _proto = TopLevelStateMachineEvaluation.prototype;
        _proto.settle = function settle(context) {
          var proceduralPoseStates = this._proceduralPoseStates;
          var nProceduralPoseStates = proceduralPoseStates.length;
          for (var iState = 0; iState < nProceduralPoseStates; ++iState) {
            var state = proceduralPoseStates[iState];
            state.settle(context);
          }
        };
        _proto.reenter = function reenter() {
          // Known problem: no callbacks are triggered.

          for (var _iterator = _createForOfIteratorHelperLoose(this._activatedTransitions), _step; !(_step = _iterator()).done;) {
            var transition = _step.value;
            transition.destination.decreaseActiveReference();
            this._activatedTransitionPool.free(transition);
          }
          this._activatedTransitions.length = 0;
          this._topLevelEntry.increaseActiveReference();
          this._currentNode.decreaseActiveReference();
          this._currentNode = this._topLevelEntry;
        };
        _proto.update = function update(context) {
          assertIsTrue(!this.exited);
          this._loopMatchTransitions();
          this._resetStateTickFlagsAndWeights();
          this._updateActivatedTransitions(context.deltaTime);
          this._commitStateUpdates(context);
        };
        _proto.evaluate = function evaluate(context) {
          var sampled = this._sample(context);
          if (sampled) {
            return sampled;
          }
          return this._pushNullishPose(context);
        };
        _proto.getCurrentStateStatus = function getCurrentStateStatus() {
          var currentNode = this._currentNode;
          if (currentNode.kind === NodeKind.animation) {
            return currentNode.getStatus();
          } else if (currentNode.kind === NodeKind.procedural) {
            return currentNode.getStatus();
          } else {
            return null;
          }
        };
        _proto.getCurrentClipStatuses = function getCurrentClipStatuses() {
          var currentNode = this._currentNode;
          if (currentNode.kind === NodeKind.animation) {
            return currentNode.getClipStatuses(currentNode.absoluteWeight);
          } else {
            return emptyClipStatusesIterable;
          }
        };
        _proto.getCurrentTransition = function getCurrentTransition(transitionStatus) {
          var activatedTransitions = this._activatedTransitions;
          if (activatedTransitions.length === 0) {
            return false;
          }
          var lastActivatedTransition = activatedTransitions[activatedTransitions.length - 1];
          var baseDurationState = activatedTransitions.length === 1 ? this._currentNode : activatedTransitions[activatedTransitions.length - 2].destination; // Else, the previous transition's destination state.
          var absoluteDuration = lastActivatedTransition.getAbsoluteDuration(baseDurationState);
          transitionStatus.duration = absoluteDuration;
          transitionStatus.time = lastActivatedTransition.normalizedElapsedTime * absoluteDuration;
          return true;
        };
        _proto.getNextStateStatus = function getNextStateStatus() {
          var activatedTransitions = this._activatedTransitions;
          if (activatedTransitions.length === 0) {
            return null;
          }
          var lastState = activatedTransitions[activatedTransitions.length - 1].destination;
          switch (lastState.kind) {
            default:
              break;
            case NodeKind.procedural:
              return lastState.getStatus();
            case NodeKind.animation:
              return lastState.getStatus();
          }
          return null;
        };
        _proto.getNextClipStatuses = function getNextClipStatuses() {
          var _lastState$getClipSta;
          var activatedTransitions = this._activatedTransitions;
          if (activatedTransitions.length === 0) {
            return emptyClipStatusesIterable;
          }
          var lastActivatedTransition = activatedTransitions[activatedTransitions.length - 1];
          var lastState = lastActivatedTransition.destination;
          switch (lastState.kind) {
            default:
              return emptyClipStatusesIterable;
            case NodeKind.animation:
              return (_lastState$getClipSta = lastState.getClipStatuses(lastActivatedTransition.destination.absoluteWeight)) !== null && _lastState$getClipSta !== void 0 ? _lastState$getClipSta : emptyClipStatusesIterable;
          }
        };
        _proto.overrideClips = function overrideClips(context) {
          var motionStates = this._motionStates;
          var nMotionStates = motionStates.length;
          for (var iMotionState = 0; iMotionState < nMotionStates; ++iMotionState) {
            var node = motionStates[iMotionState];
            node.overrideClips(context);
          }
        };
        _proto._addStateMachine = function _addStateMachine(graph, parentStateMachineInfo, context, __DEBUG_ID__) {
          var _this = this;
          var nodes = Array.from(graph.states());
          var entryEval;
          var anyNode;
          var exitEval;
          var nodeEvaluations = nodes.map(function (node) {
            if (node instanceof MotionState) {
              var motionStateEval = new VMSMEval(node, context);
              _this._motionStates.push(motionStateEval);
              return motionStateEval;
            } else if (node === graph.entryState) {
              return entryEval = new SpecialStateEval(node, NodeKind.entry, node.name);
            } else if (node === graph.exitState) {
              return exitEval = new SpecialStateEval(node, NodeKind.exit, node.name);
            } else if (node === graph.anyState) {
              return anyNode = new SpecialStateEval(node, NodeKind.any, node.name);
            } else if (node instanceof EmptyState) {
              return new EmptyStateEval(node);
            } else if (node instanceof ProceduralPoseState) {
              var stateEval = new ProceduralPoseStateEval(node, context);
              _this._proceduralPoseStates.push(stateEval);
              return stateEval;
            } else {
              assertIsTrue(node instanceof SubStateMachine);
              return null;
            }
          });
          assertIsNonNullable(entryEval, 'Entry node is missing');
          assertIsNonNullable(exitEval, 'Exit node is missing');
          assertIsNonNullable(anyNode, 'Any node is missing');
          var stateMachineInfo = {
            components: null,
            parent: parentStateMachineInfo,
            entry: entryEval,
            exit: exitEval,
            any: anyNode
          };
          for (var iNode = 0; iNode < nodes.length; ++iNode) {
            var nodeEval = nodeEvaluations[iNode];
            if (nodeEval) {
              nodeEval.stateMachine = stateMachineInfo;
            }
          }
          var subStateMachineInfos = nodes.map(function (node) {
            if (node instanceof SubStateMachine) {
              var subStateMachineInfo = _this._addStateMachine(node.stateMachine, stateMachineInfo, context, __DEBUG_ID__ + "/" + node.name);
              subStateMachineInfo.components = new InstantiatedComponents(node);
              return subStateMachineInfo;
            } else {
              return null;
            }
          });
          if (DEBUG) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(nodeEvaluations), _step2; !(_step2 = _iterator2()).done;) {
              var _nodeEval = _step2.value;
              if (_nodeEval) {
                _nodeEval.setPrefix_debug(__DEBUG_ID__ + "/");
              }
            }
          }
          for (var _iNode = 0; _iNode < nodes.length; ++_iNode) {
            var node = nodes[_iNode];
            var outgoingTemplates = graph.getOutgoings(node);
            var fromNode = void 0;
            if (node instanceof SubStateMachine) {
              var subStateMachineInfo = subStateMachineInfos[_iNode];
              assertIsNonNullable(subStateMachineInfo);
              fromNode = subStateMachineInfo.exit;
            } else {
              var _nodeEval2 = nodeEvaluations[_iNode];
              assertIsNonNullable(_nodeEval2);
              fromNode = _nodeEval2;
            }
            var _loop = function _loop() {
              var outgoing = _step3.value;
              var outgoingNode = outgoing.to;
              var iOutgoingNode = nodes.findIndex(function (nodeTemplate) {
                return nodeTemplate === outgoing.to;
              });
              if (iOutgoingNode < 0) {
                assertIsTrue(false, 'Bad animation data');
              }
              var toNode;
              if (outgoingNode instanceof SubStateMachine) {
                var _subStateMachineInfo = subStateMachineInfos[iOutgoingNode];
                assertIsNonNullable(_subStateMachineInfo);
                toNode = _subStateMachineInfo.entry;
              } else {
                var _nodeEval3 = nodeEvaluations[iOutgoingNode];
                assertIsNonNullable(_nodeEval3);
                if (_nodeEval3 instanceof VMSMEval) {
                  toNode = _nodeEval3.entry;
                } else {
                  toNode = _nodeEval3;
                }
              }
              var conditions = outgoing.conditions.map(function (condition) {
                return condition[createEval](context);
              });
              var transitionEval = {
                conditions: conditions,
                to: toNode,
                triggers: undefined,
                duration: 0.0,
                normalizedDuration: false,
                destinationStart: 0.0,
                relativeDestinationStart: false,
                exitCondition: 0.0,
                exitConditionEnabled: false,
                activated: false,
                startEventBinding: undefined,
                endEventBinding: undefined
              };
              if (isAnimationTransition(outgoing) || outgoing instanceof EmptyStateTransition || outgoing instanceof ProceduralPoseTransition) {
                transitionEval.duration = outgoing.duration;
                transitionEval.destinationStart = outgoing.destinationStart;
                transitionEval.relativeDestinationStart = outgoing.relativeDestinationStart;
                if (outgoing.startEventBinding.isBound) {
                  transitionEval.startEventBinding = outgoing.startEventBinding;
                }
                if (outgoing.endEventBinding.isBound) {
                  transitionEval.endEventBinding = outgoing.endEventBinding;
                }
                if (isAnimationTransition(outgoing)) {
                  transitionEval.normalizedDuration = outgoing.relativeDuration;
                  transitionEval.exitConditionEnabled = outgoing.exitConditionEnabled;
                  transitionEval.exitCondition = outgoing.exitCondition;
                }
              }
              transitionEval.conditions.forEach(function (conditionEval, iCondition) {
                var condition = outgoing.conditions[iCondition];
                if (condition instanceof TriggerCondition && condition.trigger) {
                  var _transitionEval$trigg;
                  // TODO: validates the existence of trigger?
                  ((_transitionEval$trigg = transitionEval.triggers) !== null && _transitionEval$trigg !== void 0 ? _transitionEval$trigg : transitionEval.triggers = []).push(condition.trigger);
                }
              });
              fromNode.addTransition(transitionEval);
            };
            for (var _iterator3 = _createForOfIteratorHelperLoose(outgoingTemplates), _step3; !(_step3 = _iterator3()).done;) {
              _loop();
            }
          }
          return stateMachineInfo;
        }

        /**
         * Loop match transitions util no match,
         * or util `MAX_TRANSITIONS_PER_FRAME` is reached(in case of circular transition formed or too long transition path).
         */;
        _proto._loopMatchTransitions = function _loopMatchTransitions() {
          var pendingTransitionPath = this._pendingTransitionPath,
            activatedTransitions = this._activatedTransitions;
          assertIsTrue(pendingTransitionPath.length === 0);
          var matchingSource = activatedTransitions.length === 0 ? this._currentNode : activatedTransitions[activatedTransitions.length - 1].destination;
          for
            /* The terminal condition is handled in loop body */
          (var iterations = 0;; ++iterations) {
            if (iterations >= MAX_TRANSITIONS_PER_FRAME) {
              var prettyPath = '';
              if (DEBUG) {
                var lastDestination = activatedTransitions[activatedTransitions.length - 1].destination;
                var loopFormPosition = -1;
                for (var i = activatedTransitions.length - 2; i >= 0; --i) {
                  if (activatedTransitions[i].destination === lastDestination) {
                    loopFormPosition = i;
                    break;
                  }
                }
                prettyPath = this._currentNode.name + " --> ... --> ";
                var pathToPrint = loopFormPosition < 0 ? activatedTransitions.slice(-MAX_TRANSITIONS_PER_FRAME) // We didn't find a loop.
                : activatedTransitions.slice(loopFormPosition); // Find a loop, print from last loop position.
                prettyPath += "" + pathToPrint.map(function (t) {
                  return t.destination.name;
                }).join(' --> ');
              }
              warnID(14000, MAX_TRANSITIONS_PER_FRAME, prettyPath);
              break;
            }
            var transition = this._matchNextTransition(matchingSource);
            if (!transition) {
              break;
            }
            var destinationState = transition.to;
            var currentMatchingSource = matchingSource;
            matchingSource = destinationState;
            if (!isRealState(destinationState)) {
              pendingTransitionPath.push(transition);
              continue;
            }

            // We found a self transition A->A, the transition is meaningless and not allowed.
            if (destinationState === currentMatchingSource) {
              break;
            }
            this._activateTransition(pendingTransitionPath, transition);
            pendingTransitionPath.length = 0;
          }
          pendingTransitionPath.length = 0;
        };
        _proto._resetStateTickFlagsAndWeights = function _resetStateTickFlagsAndWeights() {
          var currentNode = this._currentNode,
            activatedTransitions = this._activatedTransitions;
          currentNode.resetTickFlagsAndWeight();
          for (var iTransition = 0; iTransition < activatedTransitions.length; ++iTransition) {
            var destination = activatedTransitions[iTransition].destination;
            destination.resetTickFlagsAndWeight();
          }
        };
        _proto._commitStateUpdates = function _commitStateUpdates(parentContext) {
          var currentNode = this._currentNode,
            activatedTransitions = this._activatedTransitions,
            updateContextGenerator = this._updateContextGenerator;

          // Update head state.
          this._commitStateUpdate(currentNode, parentContext);

          // Update states in transitions.
          for (var iTransition = 0; iTransition < activatedTransitions.length; ++iTransition) {
            var transition = activatedTransitions[iTransition];
            var destination = transition.destination;
            this._commitStateUpdate(destination, parentContext);
          }
        };
        _proto._commitStateUpdate = function _commitStateUpdate(state, parentContext) {
          var updateContextGenerator = this._updateContextGenerator;
          if (state.testTickFlag(StateTickFlag.UPDATED)) {
            // Don't evaluate a pose more than once.
            return;
          }
          state.setTickFlag(StateTickFlag.UPDATED);
          if (state.kind === NodeKind.animation) {
            state.update(parentContext.deltaTime, this._controller);
          } else if (state.kind === NodeKind.procedural) {
            var updateContext = updateContextGenerator.generate(parentContext.deltaTime, parentContext.indicativeWeight * state.absoluteWeight);
            state.update(updateContext);
          }
        };
        _proto._sample = function _sample(context) {
          var currentNode = this._currentNode,
            activatedTransitions = this._activatedTransitions;
          var passthroughWeight = 1.0;

          // Evaluate head state.
          var finalPose = null;
          var sumActualBlendedWeight = 0.0;
          if (currentNode.kind === NodeKind.animation) {
            var _currentNode$evaluate;
            finalPose = (_currentNode$evaluate = currentNode.evaluate(context)) !== null && _currentNode$evaluate !== void 0 ? _currentNode$evaluate : this._pushNullishPose(context);
          } else if (currentNode.kind === NodeKind.procedural) {
            var _currentNode$evaluate2;
            finalPose = (_currentNode$evaluate2 = currentNode.evaluate(context)) !== null && _currentNode$evaluate2 !== void 0 ? _currentNode$evaluate2 : this._pushNullishPose(context);
          } else {
            passthroughWeight -= currentNode.absoluteWeight;
            finalPose = null;
          }
          if (finalPose) {
            sumActualBlendedWeight = currentNode.absoluteWeight;
          }
          currentNode.setTickFlag(StateTickFlag.EVALUATED);
          for (var iTransition = 0; iTransition < activatedTransitions.length; ++iTransition) {
            var transition = activatedTransitions[iTransition];
            var destination = transition.destination;
            if (destination.testTickFlag(StateTickFlag.EVALUATED)) {
              // Don't evaluate a pose more than once.
              continue;
            }
            destination.setTickFlag(StateTickFlag.EVALUATED);
            var destAbsoluteWeight = destination.absoluteWeight;
            var destPose = void 0;
            if (destination.kind === NodeKind.empty) {
              passthroughWeight -= destAbsoluteWeight;
              destPose = null;
            } else {
              var _destination$evaluate;
              destPose = (_destination$evaluate = destination.evaluate(context)) !== null && _destination$evaluate !== void 0 ? _destination$evaluate : this._pushNullishPose(context);
            }
            if (!destPose) {
              // We can't get a pose from transition destination.
              continue;
            }
            if (!finalPose) {
              // All previous states can't get a pose.
              finalPose = destPose;
            } else {
              sumActualBlendedWeight += destAbsoluteWeight;
              if (sumActualBlendedWeight) {
                var t = destAbsoluteWeight / sumActualBlendedWeight;
                blendPoseInto(finalPose, destPose, t);
                context.popPose();
              } else {
                finalPose = destPose;
              }
            }
          }
          this.passthroughWeight = passthroughWeight;
          return finalPose;
        };
        _proto._pushNullishPose = function _pushNullishPose(context) {
          return this._additive ? context.pushZeroDeltaPose() : context.pushDefaultedPose();
        }

        /**
         * Searches for a transition which should be performed.
         * @param sourceState The transition source state.
         * @returns
         */;
        _proto._matchNextTransition = function _matchNextTransition(sourceState) {
          var transition = this._matchTransition(sourceState, sourceState);
          if (transition) {
            return transition;
          }
          if (sourceState.kind === NodeKind.animation || sourceState.kind === NodeKind.procedural) {
            var _transition = this._matchAnyScoped(sourceState);
            if (_transition) {
              return _transition;
            }
          }
          return null;
        }

        /**
         * @param realNode Is used:
         * - to determinate the starting state machine from where the any states are matched;
         * - so we can solve transitions' relative durations.
         */;
        _proto._matchAnyScoped = function _matchAnyScoped(realNode) {
          for (var ancestor = realNode.stateMachine; ancestor !== null; ancestor = ancestor.parent) {
            var transition = this._matchTransition(ancestor.any, realNode);
            if (transition) {
              return transition;
            }
          }
          return null;
        }

        /**
         * Searches for a transition which should be performed
         * if specified node updates for no more than `deltaTime` and less than `result.requires`.
         * We solve the relative durations of transitions based on duration of `realNode`.
         *
         * @returns The transition matched, or null if there's no matched transition.
         */;
        _proto._matchTransition = function _matchTransition(node, realNode) {
          assertIsTrue(node === realNode || node.kind === NodeKind.any);
          var conditionEvaluationContext = this._conditionEvaluationContext;
          conditionEvaluationContext.set(realNode);
          var outgoingTransitions = node.outgoingTransitions;
          var nTransitions = outgoingTransitions.length;
          for (var iTransition = 0; iTransition < nTransitions; ++iTransition) {
            var transition = outgoingTransitions[iTransition];
            if (transition.activated) {
              continue;
            }
            var conditions = transition.conditions;
            var nConditions = conditions.length;

            // Handle empty condition case.
            if (nConditions === 0) {
              if (node.kind === NodeKind.entry || node.kind === NodeKind.exit) {
                // These kinds of transition is definitely chosen.
                if (DEBUG) {
                  conditionEvaluationContext.unset();
                }
                return transition;
              }
              if (!transition.exitConditionEnabled) {
                // Invalid transition, ignored.
                continue;
              }
            }
            if (realNode.kind === NodeKind.animation && transition.exitConditionEnabled) {
              var exitTime = realNode.duration * transition.exitCondition;
              var currentStateTime = realNode.time;
              if (currentStateTime < exitTime) {
                break;
              }
            }
            var satisfied = true;
            for (var iCondition = 0; iCondition < nConditions; ++iCondition) {
              var condition = conditions[iCondition];
              if (!condition.eval(this._conditionEvaluationContext)) {
                satisfied = false;
                break;
              }
            }
            if (!satisfied) {
              continue;
            }

            // Arrive here means all conditions are satisfied,
            // and either the exit condition is disabled or the exit condition is just 0.0.
            if (DEBUG) {
              conditionEvaluationContext.unset();
            }
            return transition;
          }
          if (DEBUG) {
            conditionEvaluationContext.unset();
          }
          return null;
        };
        _proto._activateTransition = function _activateTransition(prefix, lastTransition) {
          var destinationState = lastTransition.to;
          assertIsTrue(isRealState(destinationState));
          var activatedTransition = this._activatedTransitionPool.alloc();
          activatedTransition.reset(prefix, lastTransition);
          this._activatedTransitions.push(activatedTransition);

          // Reset triggers along the path.
          var nTransitions = activatedTransition.path.length;
          for (var iTransition = 0; iTransition < nTransitions; ++iTransition) {
            var transition = activatedTransition.path[iTransition];
            this._resetTriggersOnTransition(transition);
          }

          // Call enter hooks on detailed transitions.
          for (var iDetailedTransition = 0; iDetailedTransition < activatedTransition.path.length; ++iDetailedTransition) {
            var detailedTransition = activatedTransition.path[iDetailedTransition];
            // We're entering a state machine
            this._callEnterMethods(detailedTransition.to);
          }

          // Fire transition out event on source real state.
          assertIsTrue(this._activatedTransitions.length > 0);
          var previousState = this._activatedTransitions.length === 1 // this activating transition
          ? this._currentNode : this._activatedTransitions[this._activatedTransitions.length - 2].destination;
          if (previousState instanceof EventifiedStateEval) {
            if (previousState.transitionOutEventBinding) {
              this._emit(previousState.transitionOutEventBinding);
            }
          }

          // Fire start event on the transition.
          if (lastTransition.startEventBinding) {
            this._emit(lastTransition.startEventBinding);
          }

          // Fire transition in event on destination real target.
          if (destinationState instanceof EventifiedStateEval) {
            if (destinationState.transitionInEventBinding) {
              this._emit(destinationState.transitionInEventBinding);
            }
          }
        }

        /**
         * Update transitions, also update states within(includes the case of no transition).
         * @param deltaTime Time piece.
         * @returns
         */;
        _proto._updateActivatedTransitions = function _updateActivatedTransitions(deltaTime) {
          var activatedTransitions = this._activatedTransitions;
          var iTransition = activatedTransitions.length - 1;

          // Asserts: while updating transition sequences,
          // the "update consume time" of the last transition, let's say _t_,
          // always not less than those of preceding transitions.
          // The reason is, if it's less than, means the last transition does not consume all the `deltaTime`,
          // which further means the last transition was done and
          // once the last transition was done, all preceding transitions are dropped.
          //
          // All states involved after updating shall also update _t_ times.

          var remainingWeight = 1.0;
          var lastTransitionIndex = iTransition;
          for (; iTransition >= 0; --iTransition) {
            var transition = activatedTransitions[iTransition];
            var sourceState = iTransition === 0 ? this._currentNode : activatedTransitions[iTransition - 1].destination;
            transition.update(deltaTime, sourceState);

            // Once the transition is done, all previous transitions should be dropped
            // and we could break loop directly.
            if (transition.done) {
              this._dropActivatedTransitions(lastTransitionIndex);
              break;
            }

            // Allocate weight for the destination state.
            var destinationWeight = transition.normalizedElapsedTime * remainingWeight;
            transition.destination.increaseAbsoluteWeight(destinationWeight);
            remainingWeight *= 1.0 - transition.normalizedElapsedTime;
            lastTransitionIndex = iTransition - 1;
          }

          // Allocate remain weight to the latest current state.
          this._currentNode.increaseAbsoluteWeight(remainingWeight);
        }

        /**
         * Drops the transitions from `0` to `lastTransitionIndex` in `this._activatedTransitions`.
         * @note This methods may modifies the length of `this._activatedTransitions`.
         */;
        _proto._dropActivatedTransitions = function _dropActivatedTransitions(lastTransitionIndex) {
          var activatedTransition = this._activatedTransitions,
            activatedTransitionPool = this._activatedTransitionPool;
          assertIsTrue(lastTransitionIndex >= 0 && lastTransitionIndex < activatedTransition.length);
          var lenSubpath = lastTransitionIndex + 1;
          var lastTransition = activatedTransition[lastTransitionIndex];
          var newCurrentState = lastTransition.destination;

          // Call exist hooks, then destroy the transition instance.
          // Call end event binding on last transition.
          {
            assertIsTrue(lastTransition.path.length !== 0);
            var lastRealTransition = lastTransition.path[lastTransition.path.length - 1];
            if (lastRealTransition.endEventBinding) {
              this._emit(lastRealTransition.endEventBinding);
            }
          }
          this._callExitMethods(this._currentNode);
          for (var iTransition = 0; iTransition <= lastTransitionIndex; ++iTransition) {
            var transition = activatedTransition[iTransition];

            // Except last transition,
            // all transitions' should have their destination state decreasing active reference.
            // The last transition don't need to decrease
            // since it will become current node.
            if (iTransition !== lastTransitionIndex) {
              transition.destination.decreaseActiveReference();
            }

            // Call exit hooks on detailed transitions.
            // If this is NOT the last transition, all detailed transitions would be exit.
            // Otherwise, the last detailed transition is not included.
            var iLastExitingDetailedTransition = iTransition === lastTransitionIndex ? transition.path.length - 1 : transition.path.length;
            for (var iDetailedTransition = 0; iDetailedTransition < iLastExitingDetailedTransition; ++iDetailedTransition) {
              var detailedTransition = transition.path[iDetailedTransition];
              this._callExitMethods(detailedTransition.to);
            }
            activatedTransitionPool.free(transition);
          }

          // Splice the subpath.
          if (lastTransitionIndex === activatedTransition.length - 1) {
            // Optimize for the usual case: there's only one transition.
            activatedTransition.length = 0;
          } else {
            // General case: this should be same with `activatedTransition.splice(firstTransitionIndex, lenSubpath)`.
            for (var _iTransition = lastTransitionIndex + 1; _iTransition < activatedTransition.length; ++_iTransition) {
              activatedTransition[_iTransition - lenSubpath] = activatedTransition[_iTransition];
            }
            activatedTransition.length -= lenSubpath;
          }

          // Redefine the very first state.
          this._currentNode.decreaseActiveReference();
          this._currentNode = newCurrentState;
        };
        _proto._resetTriggersOnTransition = function _resetTriggersOnTransition(transition) {
          var triggers = transition.triggers;
          if (triggers) {
            var nTriggers = triggers.length;
            for (var iTrigger = 0; iTrigger < nTriggers; ++iTrigger) {
              var trigger = triggers[iTrigger];
              this._resetTrigger(trigger);
            }
          }
        };
        _proto._resetTrigger = function _resetTrigger(name) {
          var triggerResetFn = this._triggerReset;
          triggerResetFn(name);
        };
        _proto._callEnterMethods = function _callEnterMethods(node) {
          var _node$stateMachine$co;
          var controller = this._controller;
          switch (node.kind) {
            default:
              break;
            case NodeKind.animation:
              {
                node.components.callMotionStateEnterMethods(controller, node.getStatus());
                break;
              }
            case NodeKind.entry:
              (_node$stateMachine$co = node.stateMachine.components) === null || _node$stateMachine$co === void 0 ? void 0 : _node$stateMachine$co.callStateMachineEnterMethods(controller);
              break;
          }
        };
        _proto._callExitMethods = function _callExitMethods(node) {
          var _node$stateMachine$co2;
          var controller = this._controller;
          switch (node.kind) {
            default:
              break;
            case NodeKind.animation:
              {
                node.components.callMotionStateExitMethods(controller, node.getStatus());
                break;
              }
            case NodeKind.exit:
              (_node$stateMachine$co2 = node.stateMachine.components) === null || _node$stateMachine$co2 === void 0 ? void 0 : _node$stateMachine$co2.callStateMachineExitMethods(controller);
              break;
          }
        };
        _proto._emit = function _emit(eventBinding) {
          eventBinding.emit(this._controller.node);
        };
        _createClass(TopLevelStateMachineEvaluation, [{
          key: "exited",
          get: function get() {
            return this._currentNode === this._topLevelExit;
          }
        }]);
        return TopLevelStateMachineEvaluation;
      }());
      emptyClipStatusesIterator = {
        next: function next() {
          return {
            done: true,
            value: undefined
          };
        }
      };
      emptyClipStatusesIterable = (_emptyClipStatusesIte = {}, _emptyClipStatusesIte[Symbol.iterator] = function () {
        return emptyClipStatusesIterator;
      }, _emptyClipStatusesIte);
      (function (NodeKind) {
        NodeKind[NodeKind["entry"] = 0] = "entry";
        NodeKind[NodeKind["exit"] = 1] = "exit";
        NodeKind[NodeKind["any"] = 2] = "any";
        NodeKind[NodeKind["animation"] = 3] = "animation";
        NodeKind[NodeKind["empty"] = 4] = "empty";
        NodeKind[NodeKind["procedural"] = 5] = "procedural";
      })(NodeKind || (NodeKind = {}));
      _export("StateEval", StateEval = /*#__PURE__*/function () {
        /**
         * @internal
         */

        function StateEval(node) {
          this.name = void 0;
          this.outgoingTransitions = [];
          this._activeReferenceCount = 0;
          this._tickFlags = 0;
          this._absoluteWeight = 0.0;
          this.name = node.name;
        }
        var _proto2 = StateEval.prototype;
        _proto2.setPrefix_debug = function setPrefix_debug(prefix) {
          this.__DEBUG_ID__ = "" + prefix + this.name;
        };
        _proto2.addTransition = function addTransition(transition) {
          this.outgoingTransitions.push(transition);
        }

        /**
         * Increases an active reference.
         */;
        _proto2.increaseActiveReference = function increaseActiveReference() {
          if (this._activeReferenceCount === 0) {
            this._absoluteWeight = 0.0;
            this._tickFlags = 0;
          }
          ++this._activeReferenceCount;
        }

        /**
         * Decrease an active reference.
         */;
        _proto2.decreaseActiveReference = function decreaseActiveReference() {
          if (DEBUG) {
            this._checkActivated();
          }
          --this._activeReferenceCount;
        };
        _proto2.resetTickFlagsAndWeight = function resetTickFlagsAndWeight() {
          this._checkActivated();
          this._absoluteWeight = 0.0;
          this._tickFlags = 0;
        };
        _proto2.increaseAbsoluteWeight = function increaseAbsoluteWeight(weight) {
          this._absoluteWeight += weight;
        };
        _proto2.testTickFlag = function testTickFlag(flag) {
          if (DEBUG) {
            this._checkActivated();
          }
          return !!(this._tickFlags & flag);
        };
        _proto2.setTickFlag = function setTickFlag(flag) {
          if (DEBUG) {
            this._checkActivated();
          }
          assertIsTrue(!this.testTickFlag(flag), "Can not set " + StateTickFlag[flag] + " since it has been set!");
          this._tickFlags |= flag;
        };
        _proto2._checkActivated = function _checkActivated() {
          assertIsTrue(this._activeReferenceCount > 0, "The state has not been activated");
        };
        _createClass(StateEval, [{
          key: "absoluteWeight",
          get:
          /**
           * The absolute weight of this state.
           */
          function get() {
            return this._absoluteWeight;
          }

          /**
           * The count which counts how many places referencing this state:
           * - If the state is activated as current state, the count increased.
           * - If the state is activated as a transition destination, the count increased.
           */
        }, {
          key: "activeReferenceCount",
          get: function get() {
            return this._activeReferenceCount;
          }
        }]);
        return StateEval;
      }());
      EventifiedStateEval = /*#__PURE__*/function (_StateEval) {
        _inheritsLoose(EventifiedStateEval, _StateEval);
        function EventifiedStateEval(state) {
          var _this2;
          _this2 = _StateEval.call(this, state) || this;
          _this2.transitionInEventBinding = undefined;
          _this2.transitionOutEventBinding = undefined;
          if (state.transitionInEventBinding.isBound) {
            _this2.transitionInEventBinding = state.transitionInEventBinding;
          }
          if (state.transitionOutEventBinding.isBound) {
            _this2.transitionOutEventBinding = state.transitionOutEventBinding;
          }
          return _this2;
        }
        return EventifiedStateEval;
      }(StateEval);
      (function (StateTickFlag) {
        StateTickFlag[StateTickFlag["UPDATED"] = 1] = "UPDATED";
        StateTickFlag[StateTickFlag["EVALUATED"] = 2] = "EVALUATED";
      })(StateTickFlag || (StateTickFlag = {}));
      InstantiatedComponents = /*#__PURE__*/function () {
        function InstantiatedComponents(node) {
          this._components = node.instantiateComponents();
        }
        var _proto3 = InstantiatedComponents.prototype;
        _proto3.callMotionStateEnterMethods = function callMotionStateEnterMethods(controller, status) {
          this._callMotionStateCallbackIfNonDefault('onMotionStateEnter', controller, status);
        };
        _proto3.callMotionStateUpdateMethods = function callMotionStateUpdateMethods(controller, status) {
          this._callMotionStateCallbackIfNonDefault('onMotionStateUpdate', controller, status);
        };
        _proto3.callMotionStateExitMethods = function callMotionStateExitMethods(controller, status) {
          this._callMotionStateCallbackIfNonDefault('onMotionStateExit', controller, status);
        };
        _proto3.callStateMachineEnterMethods = function callStateMachineEnterMethods(controller) {
          this._callStateMachineCallbackIfNonDefault('onStateMachineEnter', controller);
        };
        _proto3.callStateMachineExitMethods = function callStateMachineExitMethods(controller) {
          this._callStateMachineCallbackIfNonDefault('onStateMachineExit', controller);
        };
        _proto3._callMotionStateCallbackIfNonDefault = function _callMotionStateCallbackIfNonDefault(methodName, controller, status) {
          var components = this._components;
          var nComponents = components.length;
          for (var iComponent = 0; iComponent < nComponents; ++iComponent) {
            var component = components[iComponent];
            if (component[methodName] !== StateMachineComponent.prototype[methodName]) {
              component[methodName](controller, status);
            }
          }
        };
        _proto3._callStateMachineCallbackIfNonDefault = function _callStateMachineCallbackIfNonDefault(methodName, controller) {
          var components = this._components;
          var nComponents = components.length;
          for (var iComponent = 0; iComponent < nComponents; ++iComponent) {
            var component = components[iComponent];
            if (component[methodName] !== StateMachineComponent.prototype[methodName]) {
              component[methodName](controller);
            }
          }
        };
        return InstantiatedComponents;
      }();
      /**
       * Track the evaluation of a virtual motion state-machine.
       */
      VMSMEval = /*#__PURE__*/function () {
        function VMSMEval(state, context) {
          var _state$motion$createE, _state$motion;
          this._source = null;
          this._baseSpeed = 1.0;
          this._speed = 1.0;
          this._publicState = void 0;
          this._privateState = void 0;
          var name = state.name;
          this._baseSpeed = state.speed;
          this._setSpeedMultiplier(1.0);
          if (state.speedMultiplierEnabled && state.speedMultiplier) {
            var speedMultiplierVarName = state.speedMultiplier;
            var varInstance = context.getVar(speedMultiplierVarName);
            if (validateVariableExistence(varInstance, speedMultiplierVarName)) {
              validateVariableType(varInstance.type, VariableType.FLOAT, speedMultiplierVarName);
              varInstance.bind(this._setSpeedMultiplier, this);
              var initialSpeedMultiplier = varInstance.value;
              this._setSpeedMultiplier(initialSpeedMultiplier);
            }
          }
          var sourceEval = (_state$motion$createE = (_state$motion = state.motion) === null || _state$motion === void 0 ? void 0 : _state$motion[createEval](context, false)) !== null && _state$motion$createE !== void 0 ? _state$motion$createE : null;
          if (sourceEval) {
            Object.defineProperty(sourceEval, '__DEBUG_ID__', {
              value: name
            });
          }
          this._source = sourceEval;
          this._publicState = new VMSMInternalState(this, state, sourceEval === null || sourceEval === void 0 ? void 0 : sourceEval.createPort());
          this._privateState = new VMSMInternalState(this, state, sourceEval === null || sourceEval === void 0 ? void 0 : sourceEval.createPort());
          this.components = new InstantiatedComponents(state);
        }
        var _proto4 = VMSMEval.prototype;
        _proto4.setPrefix_debug = function setPrefix_debug(prefix) {
          this._publicState.setPrefix_debug(prefix);
          this._privateState.setPrefix_debug(prefix);
        };
        _proto4.addTransition = function addTransition(transition) {
          // If the transition is a self transition,
          // copy the transition but modify it so that it point to the private state.
          if (transition.to === this._publicState) {
            this._publicState.addTransition(_extends({}, transition, {
              to: this._privateState
            }));
          } else {
            this._publicState.addTransition(transition);
          }
          this._privateState.addTransition(transition);
        };
        _proto4.getClipStatuses = function getClipStatuses(baseWeight) {
          var source = this._source;
          if (!source) {
            return emptyClipStatusesIterable;
          } else {
            var _ref;
            return _ref = {}, _ref[Symbol.iterator] = function () {
              return source.getClipStatuses(baseWeight);
            }, _ref;
          }
        };
        _proto4.overrideClips = function overrideClips(context) {
          var _this$_source;
          (_this$_source = this._source) === null || _this$_source === void 0 ? void 0 : _this$_source.overrideClips(context);
        };
        _proto4._setSpeedMultiplier = function _setSpeedMultiplier(value) {
          this._speed = this._baseSpeed * value;
        };
        _createClass(VMSMEval, [{
          key: "duration",
          get: function get() {
            var _this$_source$duratio, _this$_source2;
            return (_this$_source$duratio = (_this$_source2 = this._source) === null || _this$_source2 === void 0 ? void 0 : _this$_source2.duration) !== null && _this$_source$duratio !== void 0 ? _this$_source$duratio : 0.0;
          }
        }, {
          key: "speed",
          get: function get() {
            return this._speed;
          }
        }, {
          key: "entry",
          get: function get() {
            return this._publicState;
          }
        }, {
          key: "stateMachine",
          get: function get() {
            return this._stateMachine;
          },
          set: function set(value) {
            this._stateMachine = value;
            this._publicState.stateMachine = value;
            this._privateState.stateMachine = value;
          }
        }]);
        return VMSMEval;
      }();
      VMSMInternalState = /*#__PURE__*/function (_EventifiedStateEval) {
        _inheritsLoose(VMSMInternalState, _EventifiedStateEval);
        function VMSMInternalState(container, containerState, port) {
          var _this3;
          _this3 = _EventifiedStateEval.call(this, containerState) || this;
          _this3.kind = NodeKind.animation;
          _this3._container = void 0;
          _this3._progress = 0.0;
          _this3._port = void 0;
          _this3._statusCache = createStateStatusCache();
          _this3._container = container;
          _this3._port = port;
          return _this3;
        }
        var _proto5 = VMSMInternalState.prototype;
        _proto5.reenter = function reenter(initialTimeNormalized) {
          var _this$_port;
          this._progress = initialTimeNormalized;
          (_this$_port = this._port) === null || _this$_port === void 0 ? void 0 : _this$_port.reenter();
        };
        _proto5.getStatus = function getStatus() {
          var stateStatus = this._statusCache;
          if (DEBUG) {
            stateStatus.__DEBUG_ID__ = this.name;
          }
          stateStatus.progress = normalizeProgress(this._progress);
          return stateStatus;
        };
        _proto5.getClipStatuses = function getClipStatuses(baseWeight) {
          return this._container.getClipStatuses(baseWeight);
        };
        _proto5.update = function update(deltaTime, controller) {
          this._progress = calcProgressUpdate(this._progress, this.duration, deltaTime * this._container.speed);
          this._container.components.callMotionStateUpdateMethods(controller, this.getStatus());
        };
        _proto5.evaluate = function evaluate(context) {
          var _this$_port$evaluate, _this$_port2;
          return (_this$_port$evaluate = (_this$_port2 = this._port) === null || _this$_port2 === void 0 ? void 0 : _this$_port2.evaluate(this._progress, context)) !== null && _this$_port$evaluate !== void 0 ? _this$_port$evaluate : null;
        };
        _createClass(VMSMInternalState, [{
          key: "duration",
          get: function get() {
            return this._container.duration;
          }
        }, {
          key: "components",
          get: function get() {
            return this._container.components;
          }
        }, {
          key: "normalizedTime",
          get: function get() {
            return this._progress;
          }
        }, {
          key: "time",
          get: function get() {
            return this._progress * this._container.duration;
          }
        }]);
        return VMSMInternalState;
      }(EventifiedStateEval);
      _export("SpecialStateEval", SpecialStateEval = /*#__PURE__*/function (_StateEval2) {
        _inheritsLoose(SpecialStateEval, _StateEval2);
        function SpecialStateEval(node, kind, name) {
          var _this4;
          _this4 = _StateEval2.call(this, node) || this;
          _this4.kind = void 0;
          _this4.kind = kind;
          return _this4;
        }
        return SpecialStateEval;
      }(StateEval));
      _export("EmptyStateEval", EmptyStateEval = /*#__PURE__*/function (_StateEval3) {
        _inheritsLoose(EmptyStateEval, _StateEval3);
        function EmptyStateEval(node) {
          var _this5;
          _this5 = _StateEval3.call(this, node) || this;
          _this5.kind = NodeKind.empty;
          return _this5;
        }
        return EmptyStateEval;
      }(StateEval));
      ProceduralPoseStateEval = /*#__PURE__*/function (_EventifiedStateEval2) {
        _inheritsLoose(ProceduralPoseStateEval, _EventifiedStateEval2);
        function ProceduralPoseStateEval(state, context) {
          var _this6;
          _this6 = _EventifiedStateEval2.call(this, state) || this;
          _this6.kind = NodeKind.procedural;
          _this6.elapsedTime = 0.0;
          _this6.statusCache = createStateStatusCache();
          _this6._instantiatedPoseGraph = void 0;
          _this6._statusCache = createStateStatusCache();
          _this6._elapsedTime = 0.0;
          var instantiatedPoseGraph = instantiatePoseGraph(state.graph, context, true);
          instantiatedPoseGraph.bind(context);
          _this6._instantiatedPoseGraph = instantiatedPoseGraph;
          if (DEBUG) {
            _this6._statusCache.__DEBUG_ID__ = state.name;
          }
          _this6._statusCache.progress = 0.0;
          return _this6;
        }
        var _proto6 = ProceduralPoseStateEval.prototype;
        _proto6.settle = function settle(context) {
          this._instantiatedPoseGraph.settle(context);
        };
        _proto6.reenter = function reenter() {
          this._statusCache.progress = 0.0;
          this._instantiatedPoseGraph.reenter();
        };
        _proto6.update = function update(context) {
          this._elapsedTime += context.deltaTime;
          this._instantiatedPoseGraph.update(context);
        };
        _proto6.evaluate = function evaluate(context) {
          var _this$_instantiatedPo;
          return (_this$_instantiatedPo = this._instantiatedPoseGraph.evaluate(context)) !== null && _this$_instantiatedPo !== void 0 ? _this$_instantiatedPo : null;
        };
        _proto6.getStatus = function getStatus() {
          this._statusCache.progress = normalizeProgress(this._elapsedTime);
          return this._statusCache;
        };
        _proto6.countMotionTime = function countMotionTime() {
          return this._instantiatedPoseGraph.countMotionTime();
        };
        return ProceduralPoseStateEval;
      }(EventifiedStateEval);
      ConditionEvaluationContextImpl = /*#__PURE__*/function () {
        function ConditionEvaluationContextImpl() {
          this.sourceStateWeight = 0.0;
          this._sourceState = undefined;
        }
        var _proto7 = ConditionEvaluationContextImpl.prototype;
        _proto7.set = function set(sourceState) {
          this._sourceState = sourceState;
          if (isRealState(sourceState)) {
            assertIsTrue(sourceState.activeReferenceCount);
            // Cache the weight since it's cheap.
            this.sourceStateWeight = sourceState.absoluteWeight;
          } else {
            this.sourceStateWeight = 0.0;
          }
        };
        _proto7.unset = function unset() {
          this._sourceState = undefined;
          this.sourceStateWeight = 0.0;
        };
        _createClass(ConditionEvaluationContextImpl, [{
          key: "sourceStateMotionTimeNormalized",
          get: function get() {
            var sourceState = this._sourceState;
            assertIsTrue(sourceState && (sourceState.kind === NodeKind.animation || sourceState.kind === NodeKind.procedural) && sourceState.activeReferenceCount, "State motion time is only defined on activated motion states and procedural pose states.");
            switch (sourceState.kind) {
              case NodeKind.animation:
                return sourceState.normalizedTime;
              case NodeKind.procedural:
                return sourceState.countMotionTime();
              default:
                return 0.0;
            }
          }
        }]);
        return ConditionEvaluationContextImpl;
      }();
      /**
       * Describes an activated transition to a **real state**.
       */
      ActivatedTransition = /*#__PURE__*/function () {
        function ActivatedTransition() {
          /**
           * The normalized time elapsed.
           */
          this.normalizedElapsedTime = 0.0;
          /**
           * The detailed transitions along which the transition is activated.
           * At least has one.
           */
          this.path = [];
          this._durationMultiplier = 1.0;
        }
        var _proto8 = ActivatedTransition.prototype;
        _proto8.getAbsoluteDuration = function getAbsoluteDuration(baseDurationState) {
          return this._getAbsoluteDurationUnscaled(baseDurationState) * this._durationMultiplier;
        };
        _proto8.update = function update(deltaTime, fromState) {
          // If the transitions is not starting with a concrete state.
          // We can directly finish the transition.
          if (!isRealState(fromState)) {
            this.normalizedElapsedTime = 1.0;
            return;
          }
          var transitionDurationAbsolute = this.getAbsoluteDuration(fromState);
          var contrib = 0.0;
          if (transitionDurationAbsolute <= 0.0) {
            contrib = 0.0;
            this.normalizedElapsedTime = 1.0;
          } else {
            var elapsedTransitionTime = this.normalizedElapsedTime * transitionDurationAbsolute;
            var remainTransitionTime = transitionDurationAbsolute - elapsedTransitionTime;
            assertIsTrue(remainTransitionTime >= 0.0);
            contrib = Math.min(remainTransitionTime, deltaTime);
            var newTransitionProgress = clamp01((elapsedTransitionTime + contrib) / transitionDurationAbsolute);
            this.normalizedElapsedTime = newTransitionProgress;
            assertIsTrue(newTransitionProgress >= 0.0 && newTransitionProgress <= 1.0);
          }
        };
        ActivatedTransition.createPool = function createPool(initialCapacity) {
          var destructor = !DEBUG ? undefined : function (transitionInstance) {
            transitionInstance.normalizedElapsedTime = Number.NaN;
          };
          var pool = new Pool(function () {
            return new ActivatedTransition();
          }, initialCapacity, destructor);
          return pool;
        };
        _proto8.reset = function reset(prefix, lastTransition) {
          var destinationState = lastTransition.to;
          assertIsTrue(isRealState(destinationState));
          this.normalizedElapsedTime = 0.0;
          this.destination = destinationState;
          this.path = [].concat(prefix, [lastTransition]);

          // Increase active reference on the state.
          var previousActiveReferenceCount = destinationState.activeReferenceCount;
          destinationState.increaseActiveReference();

          // If this is the initial activation, reenter the state.
          if (previousActiveReferenceCount === 0) {
            if (destinationState.kind === NodeKind.animation) {
              var _this$path$ = this.path[0],
                destinationStart = _this$path$.destinationStart,
                isRelativeDestinationStart = _this$path$.relativeDestinationStart;
              var destinationStartRatio = isRelativeDestinationStart ? destinationStart : destinationState.duration === 0 ? 0.0 : destinationStart / destinationState.duration;
              destinationState.reenter(destinationStartRatio);
            } else if (destinationState.kind === NodeKind.procedural) {
              destinationState.reenter();
            }
          }

          // More the existing destination weight, less the transition duration.
          assertIsTrue(destinationState.activeReferenceCount > 0);
          this._durationMultiplier = 1.0 - destinationState.absoluteWeight;
        };
        _proto8._getAbsoluteDurationUnscaled = function _getAbsoluteDurationUnscaled(baseDurationState) {
          assertIsTrue(this.path.length !== 0);
          var _this$path$2 = this.path[0],
            duration = _this$path$2.duration,
            normalizedDuration = _this$path$2.normalizedDuration;
          if (!normalizedDuration) {
            return duration;
          }
          var baseDuration = baseDurationState.kind === NodeKind.animation ? baseDurationState.duration : 1.0;
          return baseDuration * duration;
        };
        _createClass(ActivatedTransition, [{
          key: "done",
          get: function get() {
            return approx(this.normalizedElapsedTime, 1.0, 1e-6);
          }
        }]);
        return ActivatedTransition;
      }();
    }
  };
});