System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/state-machine.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/index.js", "../../../../core/data/decorators/index.js", "../../../define.js", "../pose-node.js", "../../animation-graph.js", "../../state-machine/state-machine-eval.js", "../decorator/node.js", "./menu-common.js"], function (_export, _context) {
  "use strict";

  var EDITOR, assertIsTrue, ccclass, serializable, CLASS_NAME_PREFIX_ANIM, PoseNode, StateMachine, TopLevelStateMachineEvaluation, poseGraphNodeAppearance, poseGraphNodeCategory, POSE_GRAPH_NODE_MENU_PREFIX_POSE, _dec, _dec2, _dec3, _class, _class2, _initializer, _initializer2, PoseNodeStateMachine;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_poseNodeJs) {
      PoseNode = _poseNodeJs.PoseNode;
    }, function (_animationGraphJs) {
      StateMachine = _animationGraphJs.StateMachine;
    }, function (_stateMachineStateMachineEvalJs) {
      TopLevelStateMachineEvaluation = _stateMachineStateMachineEvalJs.TopLevelStateMachineEvaluation;
    }, function (_decoratorNodeJs) {
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_menuCommonJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_POSE = _menuCommonJs.POSE_GRAPH_NODE_MENU_PREFIX_POSE;
    }],
    execute: function () {
      _export("PoseNodeStateMachine", PoseNodeStateMachine = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}PoseNodeStateMachine`), _dec2 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3 = poseGraphNodeAppearance({
        themeColor: '#CCCCCC',
        inline: true
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class PoseNodeStateMachine extends PoseNode {
        constructor(...args) {
          super(...args);
          this.name = _initializer && _initializer();
          this.stateMachine = _initializer2 && _initializer2();
          this._stateMachineEval = void 0;
        }
        /**
         * // TODO: HACK
         * @internal
         */
        __callOnAfterDeserializeRecursive() {
          this.stateMachine._allowEmptyStates = false;
          this.stateMachine.__callOnAfterDeserializeRecursive();
        }
        bind(context) {
          assertIsTrue(!this._stateMachineEval);
          this._stateMachineEval = new TopLevelStateMachineEvaluation(this.stateMachine, '', context);
        }
        settle(context) {
          var _this$_stateMachineEv;
          (_this$_stateMachineEv = this._stateMachineEval) === null || _this$_stateMachineEv === void 0 ? void 0 : _this$_stateMachineEv.settle(context);
        }
        reenter() {
          var _this$_stateMachineEv2;
          (_this$_stateMachineEv2 = this._stateMachineEval) === null || _this$_stateMachineEv2 === void 0 ? void 0 : _this$_stateMachineEv2.reenter();
        }
        doUpdate(context) {
          const {
            _stateMachineEval: stateMachineEval
          } = this;
          assertIsTrue(stateMachineEval);
          stateMachineEval.update(context);
          assertIsTrue(stateMachineEval.passthroughWeight > 1.0 - 1e-5);
        }
        doEvaluate(context) {
          const {
            _stateMachineEval: stateMachineEval
          } = this;
          assertIsTrue(stateMachineEval);
          const stateMachinePose = stateMachineEval.evaluate(context);
          assertIsTrue(stateMachineEval.passthroughWeight > 1.0 - 1e-5);
          return stateMachinePose;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "name", [serializable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "stateMachine", [serializable], function () {
        return new StateMachine(false);
      })), _class2)) || _class) || _class) || _class));
      if (EDITOR) {
        PoseNodeStateMachine.prototype.getTitle = function getTitle() {
          if (this.name) {
            return this.name;
          }
          return undefined;
        };
        PoseNodeStateMachine.prototype.getEnterInfo = function getEnterInfo() {
          return {
            type: 'state-machine',
            target: this.stateMachine
          };
        };
      }
    }
  };
});