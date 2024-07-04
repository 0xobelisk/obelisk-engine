System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/state-machine-component.js", ["../../../core/data/decorators/index.js", "../../define.js"], function (_export, _context) {
  "use strict";

  var ccclass, CLASS_NAME_PREFIX_ANIM, _dec, _class, StateMachineComponent;
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      /**
       * @en State machine component.
       * @zh 状态机组件。
       */
      _export("StateMachineComponent", StateMachineComponent = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "StateMachineComponent"), _dec(_class = /*#__PURE__*/function () {
        function StateMachineComponent() {}
        var _proto = StateMachineComponent.prototype;
        /**
         * @en
         * Called when a motion state right after it entered.
         * @zh
         * 在刚刚进入动作状态时调用。
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */
        _proto.onMotionStateEnter = function onMotionStateEnter(controller, motionStateStatus) {
          // Can be overrode
        }

        /**
         * @en
         * Called when a motion state is going to be exited.
         * @zh
         * 在即将退出动作状态时调用。
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */;
        _proto.onMotionStateExit = function onMotionStateExit(controller, motionStateStatus) {
          // Can be overrode
        }

        /**
         * @en
         * Called when a motion state updated except for the first and last frame.
         * @zh
         * 在动作状态更新时调用，但不会在第一次和最后一次时调用。
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */;
        _proto.onMotionStateUpdate = function onMotionStateUpdate(controller, motionStateStatus) {
          // Can be overrode
        }

        /**
         * @en
         * Called when a state machine right after it entered.
         * @zh
         * 在刚刚进入状态机时调用。
         * @param controller The animation controller it within.
         */;
        _proto.onStateMachineEnter = function onStateMachineEnter(controller) {
          // Can be overrode
        }

        /**
         * @en
         * Called when a state machine is going to be exited.
         * @zh
         * 在即将退出状态机时调用。
         * @param controller The animation controller it within.
         */;
        _proto.onStateMachineExit = function onStateMachineExit(controller) {
          // Can be overrode
        };
        return StateMachineComponent;
      }()) || _class));
    }
  };
});