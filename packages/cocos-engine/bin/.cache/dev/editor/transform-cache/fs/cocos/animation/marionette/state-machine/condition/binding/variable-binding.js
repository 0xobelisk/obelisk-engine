System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/binding/variable-binding.js", ["../../../../../core/index.js", "../../../../define.js", "./binding.js", "./editor.js", "../../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var _decorator, CLASS_NAME_PREFIX_ANIM, TCBinding, TCBindingValueType, provide, editorOnly, TCVariableBindingEvaluation, _dec, _dec2, _class, _class2, _initializer, _initializer2, ccclass, serializable, TCVariableBinding;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      _decorator = _coreIndexJs._decorator;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_bindingJs) {
      TCBinding = _bindingJs.TCBinding;
      TCBindingValueType = _bindingJs.TCBindingValueType;
    }, function (_editorJs) {
      provide = _editorJs.provide;
    }, function (_coreDataDecoratorsIndexJs) {
      editorOnly = _coreDataDecoratorsIndexJs.editorOnly;
    }],
    execute: function () {
      ({
        ccclass,
        serializable
      } = _decorator);
      /**
       * @zh 一种过渡条件绑定，该绑定用于获取动画图变量的当前值。该类绑定产生的值类型对应于变量的值类型。
       *
       * @en A kind of transition condition binding,
       * which is used to obtain the current value of a animation graph variable.
       * This type of binding yields the type corresponding to the variable's type.
       */
      _export("TCVariableBinding", TCVariableBinding = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}TCVariableBinding`), _dec2 = provide(TCBindingValueType.FLOAT, TCBindingValueType.INTEGER), _dec(_class = _dec2(_class = (_class2 = class TCVariableBinding extends TCBinding {
        constructor(...args) {
          super(...args);
          this.type = _initializer && _initializer();
          /**
           * @zh
           * 动画图变量的名称。
           * @en
           * The animation graph variable's name.
           */
          this.variableName = _initializer2 && _initializer2();
        }
        getValueType() {
          return this.type;
        }
        bind(context) {
          const varInstance = context.getVar(this.variableName);
          if (!varInstance) {
            return undefined;
          }
          return new TCVariableBindingEvaluation(varInstance);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "type", [serializable, editorOnly], function () {
        return TCBindingValueType.FLOAT;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "variableName", [serializable], function () {
        return '';
      })), _class2)) || _class) || _class));
      TCVariableBindingEvaluation = class TCVariableBindingEvaluation {
        constructor(_varInstance) {
          this._varInstance = _varInstance;
        }
        evaluate() {
          return this._varInstance.value;
        }
      };
    }
  };
});