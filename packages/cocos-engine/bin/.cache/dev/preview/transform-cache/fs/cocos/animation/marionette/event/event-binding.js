System.register("q-bundled:///fs/cocos/animation/marionette/event/event-binding.js", ["../../../core/index.js", "../../../core/data/decorators/index.js", "../../define.js", "../../event/event-emitter.js"], function (_export, _context) {
  "use strict";

  var editable, ccclass, serializable, CLASS_NAME_PREFIX_ANIM, invokeComponentMethodsEngagedInAnimationEvent, _dec, _class, _class2, _initializer, AnimationGraphEventBinding;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      editable = _coreIndexJs.editable;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_eventEventEmitterJs) {
      invokeComponentMethodsEngagedInAnimationEvent = _eventEventEmitterJs.invokeComponentMethodsEngagedInAnimationEvent;
    }],
    execute: function () {
      /**
       * @zh 描述动画图中的事件绑定。
       * @en Describes the event bindings in animation graph.
       */
      _export("AnimationGraphEventBinding", AnimationGraphEventBinding = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "AnimationGraphEventBinding"), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function AnimationGraphEventBinding() {
          /**
           * @zh 绑定的方法名。
           * @en The event name bound.
           */
          this.methodName = _initializer && _initializer();
        }
        var _proto = AnimationGraphEventBinding.prototype;
        _proto.emit = function emit(origin) {
          if (!this.methodName) {
            return;
          }
          invokeComponentMethodsEngagedInAnimationEvent(origin, this.methodName, []);
        };
        _proto.copyTo = function copyTo(that) {
          that.methodName = this.methodName;
          return this;
        };
        _createClass(AnimationGraphEventBinding, [{
          key: "isBound",
          get:
          /**
           * @zh 获取该绑定是否绑定了任何事件。
           * @en Tells if there's any event bound to this binding.
           */
          function get() {
            return !!this.methodName;
          }
        }]);
        return AnimationGraphEventBinding;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "methodName", [editable, serializable], function () {
        return '';
      })), _class2)) || _class));
    }
  };
});