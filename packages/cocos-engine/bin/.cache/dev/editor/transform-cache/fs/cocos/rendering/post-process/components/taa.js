System.register("q-bundled:///fs/cocos/rendering/post-process/components/taa.js", ["../../../core/data/class-decorator.js", "../../../core/data/decorators/index.js", "./post-process-setting.js"], function (_export, _context) {
  "use strict";

  var property, serializable, ccclass, disallowMultiple, executeInEditMode, help, menu, range, slide, tooltip, PostProcessSetting, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, TAA;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataClassDecoratorJs) {
      property = _coreDataClassDecoratorJs.property;
      serializable = _coreDataClassDecoratorJs.serializable;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      range = _coreDataDecoratorsIndexJs.range;
      slide = _coreDataDecoratorsIndexJs.slide;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_postProcessSettingJs) {
      PostProcessSetting = _postProcessSettingJs.PostProcessSetting;
    }],
    execute: function () {
      _export("TAA", TAA = (_dec = ccclass('cc.TAA'), _dec2 = help('cc.TAA'), _dec3 = menu('PostProcess/TAA'), _dec4 = tooltip('i18n:taa.sampleScale'), _dec5 = range([0.01, 5, 0.01]), _dec6 = tooltip('i18n:taa.feedback'), _dec7 = range([0.0, 1, 0.01]), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = class TAA extends PostProcessSetting {
        constructor(...args) {
          super(...args);
          this._sampleScale = _initializer && _initializer();
          this._feedback = _initializer2 && _initializer2();
        }
        get sampleScale() {
          return this._sampleScale;
        }
        set sampleScale(v) {
          this._sampleScale = v;
        }
        get feedback() {
          return this._feedback;
        }
        set feedback(v) {
          this._feedback = v;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_sampleScale", [serializable], function () {
        return 1;
      }), _applyDecoratedDescriptor(_class2.prototype, "sampleScale", [_dec4, slide, _dec5, property], Object.getOwnPropertyDescriptor(_class2.prototype, "sampleScale"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_feedback", [serializable], function () {
        return 0.95;
      }), _applyDecoratedDescriptor(_class2.prototype, "feedback", [_dec6, slide, _dec7, property], Object.getOwnPropertyDescriptor(_class2.prototype, "feedback"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});