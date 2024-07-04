System.register("q-bundled:///fs/editor/src/marionette/get-variable-value-attributes.js", ["../../../cocos/animation/define.js", "../../../cocos/core/data/class-decorator.js", "../../../exports/base.js", "../../exports/new-gen-anim.js"], function (_export, _context) {
  "use strict";

  var CLASS_NAME_PREFIX_ANIM, ccclass, property, CCClass, CCInteger, js, VariableType, _dec, _dec2, _dec3, _class, _class2, _initializer, _initializer2, VariableValueAttributeRegistry, FLOAT_VALUE_ATTRS, INT_VALUE_ATTRS, OTHER_ATTRS;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function getVariableValueAttributes(variableDescription) {
    switch (variableDescription.type) {
      case VariableType.FLOAT:
        return FLOAT_VALUE_ATTRS;
      case VariableType.INTEGER:
        return INT_VALUE_ATTRS;
      default:
        return OTHER_ATTRS;
    }
  }
  _export("getVariableValueAttributes", getVariableValueAttributes);
  return {
    setters: [function (_cocosAnimationDefineJs) {
      CLASS_NAME_PREFIX_ANIM = _cocosAnimationDefineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_cocosCoreDataClassDecoratorJs) {
      ccclass = _cocosCoreDataClassDecoratorJs.ccclass;
      property = _cocosCoreDataClassDecoratorJs.property;
    }, function (_exportsBaseJs) {
      CCClass = _exportsBaseJs.CCClass;
      CCInteger = _exportsBaseJs.CCInteger;
      js = _exportsBaseJs.js;
    }, function (_exportsNewGenAnimJs) {
      VariableType = _exportsNewGenAnimJs.VariableType;
    }],
    execute: function () {
      VariableValueAttributeRegistry = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "internal/VariableValueAttributeRegistry"), _dec2 = property({
        step: 0.1
      }), _dec3 = property({
        type: CCInteger,
        step: 1
      }), _dec(_class = (_class2 = function VariableValueAttributeRegistry() {
        this.floatValue = _initializer && _initializer();
        this.intValue = _initializer2 && _initializer2();
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "floatValue", [_dec2], function () {
        return 0.0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "intValue", [_dec3], function () {
        return 0;
      })), _class2)) || _class);
      FLOAT_VALUE_ATTRS = Object.freeze(CCClass.Attr.attr(VariableValueAttributeRegistry, 'floatValue'));
      INT_VALUE_ATTRS = Object.freeze(CCClass.Attr.attr(VariableValueAttributeRegistry, 'intValue'));
      js.unregisterClass(VariableValueAttributeRegistry);
      OTHER_ATTRS = Object.freeze({});
    }
  };
});