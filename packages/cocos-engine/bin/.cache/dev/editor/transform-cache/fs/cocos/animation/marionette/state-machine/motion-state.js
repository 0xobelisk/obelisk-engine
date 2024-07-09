System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/motion-state.js", ["../../../core/data/decorators/index.js", "./state.js", "../event/event-binding.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, serializable, InteractiveState, AnimationGraphEventBinding, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, MotionState;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_stateJs) {
      InteractiveState = _stateJs.InteractiveState;
    }, function (_eventEventBindingJs) {
      AnimationGraphEventBinding = _eventEventBindingJs.AnimationGraphEventBinding;
    }],
    execute: function () {
      _export("MotionState", MotionState = (_dec = ccclass('cc.animation.Motion'), _dec(_class = (_class2 = class MotionState extends InteractiveState {
        constructor(...args) {
          super(...args);
          this.motion = _initializer && _initializer();
          this.speed = _initializer2 && _initializer2();
          /**
           * Should be float.
           */
          this.speedMultiplier = _initializer3 && _initializer3();
          this.speedMultiplierEnabled = _initializer4 && _initializer4();
          /**
           * @zh 状态进入事件绑定，此处绑定的事件会在状态机向该状态过渡时触发。
           * @en State entered event binding. The event bound here will be triggered
           * when the state machine starts to transition into this state.
           */
          this.transitionInEventBinding = _initializer5 && _initializer5();
          /**
           * @zh 状态离开事件绑定，此处绑定的事件会在状态机从该状态离开时触发。
           * @en State left event binding. The event bound here will be triggered
           * when the state machine starts to transition out from this state.
           */
          this.transitionOutEventBinding = _initializer6 && _initializer6();
        }
        /**
         * // TODO: HACK
         * @internal
         */
        __callOnAfterDeserializeRecursive() {
          var _this$motion;
          (_this$motion = this.motion) === null || _this$motion === void 0 ? void 0 : _this$motion.__callOnAfterDeserializeRecursive();
        }
        copyTo(that) {
          var _this$motion$clone, _this$motion2;
          super.copyTo(that);
          that.motion = (_this$motion$clone = (_this$motion2 = this.motion) === null || _this$motion2 === void 0 ? void 0 : _this$motion2.clone()) !== null && _this$motion$clone !== void 0 ? _this$motion$clone : null;
          that.speed = this.speed;
          that.speedMultiplier = this.speedMultiplier;
          that.speedMultiplierEnabled = this.speedMultiplierEnabled;
          this.transitionInEventBinding.copyTo(that.transitionInEventBinding);
          this.transitionOutEventBinding.copyTo(that.transitionOutEventBinding);
          return this;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "motion", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "speed", [serializable], function () {
        return 1.0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "speedMultiplier", [serializable], function () {
        return '';
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "speedMultiplierEnabled", [serializable], function () {
        return false;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "transitionInEventBinding", [serializable, editable], function () {
        return new AnimationGraphEventBinding();
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "transitionOutEventBinding", [serializable, editable], function () {
        return new AnimationGraphEventBinding();
      })), _class2)) || _class));
    }
  };
});