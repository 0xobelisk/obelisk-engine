System.register("q-bundled:///fs/cocos/rendering/post-process/components/hbao.js", ["../../../core/index.js", "../../../core/data/decorators/index.js", "./post-process-setting.js"], function (_export, _context) {
  "use strict";

  var CCBoolean, CCFloat, CCInteger, ccclass, disallowMultiple, editable, executeInEditMode, help, menu, range, serializable, slide, tooltip, type, visible, PostProcessSetting, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, HBAO;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      CCBoolean = _coreIndexJs.CCBoolean;
      CCFloat = _coreIndexJs.CCFloat;
      CCInteger = _coreIndexJs.CCInteger;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      editable = _coreDataDecoratorsIndexJs.editable;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      slide = _coreDataDecoratorsIndexJs.slide;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_postProcessSettingJs) {
      PostProcessSetting = _postProcessSettingJs.PostProcessSetting;
    }],
    execute: function () {
      _export("HBAO", HBAO = (_dec = ccclass('cc.HBAO'), _dec2 = help('cc.HBAO'), _dec3 = menu('PostProcess/HBAO'), _dec4 = tooltip('i18n:hbao.radiusScale'), _dec5 = range([0, 10, 0.01]), _dec6 = type(CCFloat), _dec7 = visible(false), _dec8 = tooltip('i18n:hbao.angleBiasDegree'), _dec9 = range([0, 100, 0.1]), _dec10 = type(CCFloat), _dec11 = visible(false), _dec12 = tooltip('i18n:hbao.blurSharpness'), _dec13 = range([0, 10, 1]), _dec14 = type(CCInteger), _dec15 = tooltip('i18n:hbao.aoSaturation'), _dec16 = range([0, 10, 0.01]), _dec17 = type(CCFloat), _dec18 = tooltip('i18n:hbao.needBlur'), _dec19 = type(CCBoolean), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = class HBAO extends PostProcessSetting {
        constructor(...args) {
          super(...args);
          this._radiusScale = _initializer && _initializer();
          this._angleBiasDegree = _initializer2 && _initializer2();
          this._blurSharpness = _initializer3 && _initializer3();
          this._aoSaturation = _initializer4 && _initializer4();
          this._needBlur = _initializer5 && _initializer5();
        }
        set radiusScale(value) {
          this._radiusScale = value;
        }
        get radiusScale() {
          return this._radiusScale;
        }
        set angleBiasDegree(value) {
          this._angleBiasDegree = value;
        }
        get angleBiasDegree() {
          return this._angleBiasDegree;
        }
        set blurSharpness(value) {
          this._blurSharpness = value;
        }
        get blurSharpness() {
          return this._blurSharpness;
        }
        set aoSaturation(value) {
          this._aoSaturation = value;
        }
        get aoSaturation() {
          return this._aoSaturation;
        }
        set needBlur(value) {
          this._needBlur = value;
        }
        get needBlur() {
          return this._needBlur;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_radiusScale", [serializable], function () {
        return 1.0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_angleBiasDegree", [serializable], function () {
        return 10.0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_blurSharpness", [serializable], function () {
        return 3;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_aoSaturation", [serializable], function () {
        return 1.0;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_needBlur", [serializable], function () {
        return true;
      }), _applyDecoratedDescriptor(_class2.prototype, "radiusScale", [slide, _dec4, _dec5, _dec6, editable], Object.getOwnPropertyDescriptor(_class2.prototype, "radiusScale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "angleBiasDegree", [_dec7, slide, _dec8, _dec9, _dec10, editable], Object.getOwnPropertyDescriptor(_class2.prototype, "angleBiasDegree"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "blurSharpness", [_dec11, slide, _dec12, _dec13, _dec14, editable], Object.getOwnPropertyDescriptor(_class2.prototype, "blurSharpness"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "aoSaturation", [slide, _dec15, _dec16, _dec17, editable], Object.getOwnPropertyDescriptor(_class2.prototype, "aoSaturation"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "needBlur", [_dec18, _dec19, editable], Object.getOwnPropertyDescriptor(_class2.prototype, "needBlur"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});