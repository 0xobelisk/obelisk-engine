System.register("q-bundled:///fs/cocos/rendering/post-process/components/fsr.js", ["../../../core/index.js", "../../../core/data/class-decorator.js", "../../../core/data/decorators/index.js", "./post-process-setting.js"], function (_export, _context) {
  "use strict";

  var CCFloat, type, ccclass, disallowMultiple, executeInEditMode, help, menu, range, serializable, slide, tooltip, PostProcessSetting, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, FSR;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      CCFloat = _coreIndexJs.CCFloat;
    }, function (_coreDataClassDecoratorJs) {
      type = _coreDataClassDecoratorJs.type;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      slide = _coreDataDecoratorsIndexJs.slide;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_postProcessSettingJs) {
      PostProcessSetting = _postProcessSettingJs.PostProcessSetting;
    }],
    execute: function () {
      _export("FSR", FSR = (_dec = ccclass('cc.FSR'), _dec2 = help('cc.FSR'), _dec3 = menu('PostProcess/FSR'), _dec4 = tooltip('i18n:fsr.sharpness'), _dec5 = range([0.0, 1, 0.01]), _dec6 = type(CCFloat), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = class FSR extends PostProcessSetting {
        constructor(...args) {
          super(...args);
          this._sharpness = _initializer && _initializer();
        }
        get sharpness() {
          return this._sharpness;
        }
        set sharpness(v) {
          this._sharpness = v;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_sharpness", [serializable], function () {
        return 0.8;
      }), _applyDecoratedDescriptor(_class2.prototype, "sharpness", [_dec4, slide, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "sharpness"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});