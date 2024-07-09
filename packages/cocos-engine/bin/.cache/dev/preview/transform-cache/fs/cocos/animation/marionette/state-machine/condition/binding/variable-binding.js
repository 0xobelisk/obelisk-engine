System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/binding/variable-binding.js", ["../../../../../core/index.js", "../../../../define.js", "./binding.js", "./editor.js", "../../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var _decorator, CLASS_NAME_PREFIX_ANIM, TCBinding, TCBindingValueType, provide, editorOnly, _dec, _dec2, _class, _class2, _initializer, _initializer2, ccclass, serializable, TCVariableBinding, TCVariableBindingEvaluation;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      /**
       * @zh 一种过渡条件绑定，该绑定用于获取动画图变量的当前值。该类绑定产生的值类型对应于变量的值类型。
       *
       * @en A kind of transition condition binding,
       * which is used to obtain the current value of a animation graph variable.
       * This type of binding yields the type corresponding to the variable's type.
       */
      _export("TCVariableBinding", TCVariableBinding = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "TCVariableBinding"), _dec2 = provide(TCBindingValueType.FLOAT, TCBindingValueType.INTEGER), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_TCBinding) {
        _inheritsLoose(TCVariableBinding, _TCBinding);
        function TCVariableBinding() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _TCBinding.call.apply(_TCBinding, [this].concat(args)) || this;
          _this.type = _initializer && _initializer();
          /**
           * @zh
           * 动画图变量的名称。
           * @en
           * The animation graph variable's name.
           */
          _this.variableName = _initializer2 && _initializer2();
          return _this;
        }
        var _proto = TCVariableBinding.prototype;
        _proto.getValueType = function getValueType() {
          return this.type;
        };
        _proto.bind = function bind(context) {
          var varInstance = context.getVar(this.variableName);
          if (!varInstance) {
            return undefined;
          }
          return new TCVariableBindingEvaluation(varInstance);
        };
        return TCVariableBinding;
      }(TCBinding), (_initializer = _applyDecoratedInitializer(_class2.prototype, "type", [serializable, editorOnly], function () {
        return TCBindingValueType.FLOAT;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "variableName", [serializable], function () {
        return '';
      })), _class2)) || _class) || _class));
      TCVariableBindingEvaluation = /*#__PURE__*/function () {
        function TCVariableBindingEvaluation(_varInstance) {
          this._varInstance = _varInstance;
        }
        var _proto2 = TCVariableBindingEvaluation.prototype;
        _proto2.evaluate = function evaluate() {
          return this._varInstance.value;
        };
        return TCVariableBindingEvaluation;
      }();
    }
  };
});