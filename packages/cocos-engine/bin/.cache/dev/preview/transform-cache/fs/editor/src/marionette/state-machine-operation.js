System.register("q-bundled:///fs/editor/src/marionette/state-machine-operation.js", ["../../../cocos/animation/marionette/animation-graph.js", "../../../cocos/animation/marionette/animation-graph-editor-extras-clone-helper.js", "../../../cocos/animation/marionette/state-machine/motion-state.js", "../../../cocos/core/data/utils/asserts.js", "../../../exports/base.js", "../../exports/new-gen-anim.js"], function (_export, _context) {
  "use strict";

  var EmptyStateTransition, isAnimationTransition, EmptyState, ProceduralPoseState, cloneAnimationGraphEditorExtrasFrom, MotionState, assertIsTrue, editorExtrasTag, copyPoseGraphNodes, pastePoseGraphNodes;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function copyTransitionConditions(lhs, rhs) {
    lhs.conditions = rhs.conditions.map(function (condition) {
      return condition.clone();
    });
  }
  function copyTransition(lhs, rhs) {
    if (isAnimationTransition(lhs)) {
      assertIsTrue(isAnimationTransition(rhs));
      rhs.copyTo(lhs);
    } else if (lhs instanceof EmptyStateTransition) {
      assertIsTrue(rhs instanceof EmptyStateTransition);
      rhs.copyTo(lhs);
    } else {
      rhs.copyTo(lhs);
    }
  }

  /**
   * Clones a state into same state machine.
   * @param stateMachine The state machine within which the motion state locates.
   * @param state The state.
   * @param includeTransitions If true, transitions are also cloned.
   * @returns The newly created state.
   * 
   * For each editor extras object attached on animation-graph-specific objects,
   * if the editor extras object has a method called `clone`,
   * that method would be called to perform a clone operation on that editor extras object.
   * The return value would be used as the clone result.
   * The method `clone` has the signature: `(host: EditorExtendableObject) => unknown`.
   * Otherwise, if no `clone` method provide, the new editor extras would be set to undefined.
   */

  /**
   * Clones a state into maybe another state machine.
   * @param stateMachine The state machine within which the motion state locates.
   * @param state The state.
   * @param targetStateMachine Target state machine
   * @returns The newly created state.
   * 
   * For each editor extras object attached on animation-graph-specific objects,
   * if the editor extras object has a method called `clone`,
   * that method would be called to perform a clone operation on that editor extras object.
   * The return value would be used as the clone result.
   * The method `clone` has the signature: `(host: EditorExtendableObject) => unknown`.
   * Otherwise, if no `clone` method provide, the new editor extras would be set to undefined.
   */

  function cloneState(stateMachine, state, includeTransitions) {
    var newStateOwner = typeof includeTransitions === 'boolean' ? stateMachine : includeTransitions;
    var newState;
    if (state instanceof MotionState) {
      var newMotionState = newState = newStateOwner.addMotion();
      state.copyTo(newMotionState);
    } else if (state instanceof EmptyState) {
      var newEmptyState = newState = newStateOwner.addEmpty();
      state.copyTo(newEmptyState);
    } else if (state instanceof ProceduralPoseState) {
      var newProceduralPoseState = newState = newStateOwner.addProceduralPoseState();
      newProceduralPoseState[editorExtrasTag] = cloneAnimationGraphEditorExtrasFrom(state);
      var copyInfo = copyPoseGraphNodes(state.graph, [].concat(state.graph.nodes()));
      pastePoseGraphNodes(newProceduralPoseState.graph, copyInfo);
    } else /* if (state instanceof SubStateMachine) */{
        var newSubStateMachine = newState = newStateOwner.addSubStateMachine();
        state.copyTo(newSubStateMachine);
      }
    if (includeTransitions && stateMachine === newStateOwner) {
      var incomings = stateMachine.getIncomings(state);
      for (var _iterator = _createForOfIteratorHelperLoose(incomings), _step; !(_step = _iterator()).done;) {
        var incoming = _step.value;
        var newIncoming = stateMachine.connect(incoming.from, newState);
        copyTransition(newIncoming, incoming);
      }
      var outgoings = stateMachine.getOutgoings(state);
      for (var _iterator2 = _createForOfIteratorHelperLoose(outgoings), _step2; !(_step2 = _iterator2()).done;) {
        var outgoing = _step2.value;
        var newOutgoing = stateMachine.connect(newState, outgoing.to);
        copyTransition(newOutgoing, outgoing);
      }
    }
    return newState;
  }

  /**
   * Turns a motion state into a new sub state machine.
   * @param stateMachine The state machine within which the motion state locates.
   * @param state The motion state.
   * @returns The newly created sub state machine.
   */
  function turnMotionStateIntoSubStateMachine(stateMachine, state) {
    // Create new state.
    var subStateMachine = stateMachine.addSubStateMachine();
    subStateMachine.name = state.name;
    var newMotionState = subStateMachine.stateMachine.addMotion();
    state.copyTo(newMotionState);
    subStateMachine.stateMachine.connect(subStateMachine.stateMachine.entryState, newMotionState);

    // Connect.
    var incomings = stateMachine.getIncomings(state);
    for (var _iterator3 = _createForOfIteratorHelperLoose(incomings), _step3; !(_step3 = _iterator3()).done;) {
      var incoming = _step3.value;
      var newIncoming = stateMachine.connect(incoming.from, subStateMachine);
      copyTransition(newIncoming, incoming);
    }
    var outgoings = stateMachine.getOutgoings(state);
    for (var _iterator4 = _createForOfIteratorHelperLoose(outgoings), _step4; !(_step4 = _iterator4()).done;) {
      var outgoing = _step4.value;
      var newOutgoingInternal = subStateMachine.stateMachine.connect(newMotionState, subStateMachine.stateMachine.exitState);
      copyTransition(newOutgoingInternal, outgoing);
      var newOutgoingExternal = stateMachine.connect(subStateMachine, outgoing.to);
      copyTransitionConditions(newOutgoingExternal, outgoing);
    }

    // Remove old one.
    stateMachine.remove(state);
    return subStateMachine;
  }
  _export({
    cloneState: cloneState,
    turnMotionStateIntoSubStateMachine: turnMotionStateIntoSubStateMachine
  });
  return {
    setters: [function (_cocosAnimationMarionetteAnimationGraphJs) {
      EmptyStateTransition = _cocosAnimationMarionetteAnimationGraphJs.EmptyStateTransition;
      isAnimationTransition = _cocosAnimationMarionetteAnimationGraphJs.isAnimationTransition;
      EmptyState = _cocosAnimationMarionetteAnimationGraphJs.EmptyState;
      ProceduralPoseState = _cocosAnimationMarionetteAnimationGraphJs.ProceduralPoseState;
    }, function (_cocosAnimationMarionetteAnimationGraphEditorExtrasCloneHelperJs) {
      cloneAnimationGraphEditorExtrasFrom = _cocosAnimationMarionetteAnimationGraphEditorExtrasCloneHelperJs.cloneAnimationGraphEditorExtrasFrom;
    }, function (_cocosAnimationMarionetteStateMachineMotionStateJs) {
      MotionState = _cocosAnimationMarionetteStateMachineMotionStateJs.MotionState;
    }, function (_cocosCoreDataUtilsAssertsJs) {
      assertIsTrue = _cocosCoreDataUtilsAssertsJs.assertIsTrue;
    }, function (_exportsBaseJs) {
      editorExtrasTag = _exportsBaseJs.editorExtrasTag;
    }, function (_exportsNewGenAnimJs) {
      copyPoseGraphNodes = _exportsNewGenAnimJs.copyPoseGraphNodes;
      pastePoseGraphNodes = _exportsNewGenAnimJs.pastePoseGraphNodes;
    }],
    execute: function () {}
  };
});