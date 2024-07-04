System.register("q-bundled:///fs/cocos/rendering/post-process/components/dof.js", ["../../../core/data/decorators/index.js", "./post-process-setting.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, executeInEditMode, help, menu, range, rangeMin, serializable, slide, type, PostProcessSetting, CCFloat, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _initializer, _initializer2, _initializer3, DOF;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      range = _coreDataDecoratorsIndexJs.range;
      rangeMin = _coreDataDecoratorsIndexJs.rangeMin;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      slide = _coreDataDecoratorsIndexJs.slide;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_postProcessSettingJs) {
      PostProcessSetting = _postProcessSettingJs.PostProcessSetting;
    }, function (_coreIndexJs) {
      CCFloat = _coreIndexJs.CCFloat;
    }],
    execute: function () {
      _export("DOF", DOF = (_dec = ccclass('cc.DOF'), _dec2 = help('cc.DOF'), _dec3 = menu('PostProcess/DOF'), _dec4 = rangeMin(0), _dec5 = type(CCFloat), _dec6 = rangeMin(0), _dec7 = type(CCFloat), _dec8 = range([1, 10, 0.01]), _dec9 = rangeMin(1.0), _dec10 = type(CCFloat), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = class DOF extends PostProcessSetting {
        constructor(...args) {
          super(...args);
          this._focusDistance = _initializer && _initializer();
          this._focusRange = _initializer2 && _initializer2();
          this._bokehRadius = _initializer3 && _initializer3();
        }
        set focusDistance(value) {
          this._focusDistance = value;
        }
        get focusDistance() {
          return this._focusDistance;
        }
        set focusRange(value) {
          this._focusRange = value;
        }
        get focusRange() {
          return this._focusRange;
        }
        set bokehRadius(value) {
          this._bokehRadius = value;
        }
        get bokehRadius() {
          return this._bokehRadius;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_focusDistance", [serializable], function () {
        return 0.0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_focusRange", [serializable], function () {
        return 0.0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_bokehRadius", [serializable], function () {
        return 1.0;
      }), _applyDecoratedDescriptor(_class2.prototype, "focusDistance", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "focusDistance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "focusRange", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "focusRange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bokehRadius", [slide, _dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "bokehRadius"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});