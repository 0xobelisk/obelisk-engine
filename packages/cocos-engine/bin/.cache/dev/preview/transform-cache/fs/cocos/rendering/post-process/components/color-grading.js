System.register("q-bundled:///fs/cocos/rendering/post-process/components/color-grading.js", ["../../../asset/assets/index.js", "../../../core/index.js", "../../../core/data/decorators/index.js", "./post-process-setting.js"], function (_export, _context) {
  "use strict";

  var Texture2D, CCFloat, ccclass, disallowMultiple, executeInEditMode, help, menu, range, serializable, slide, tooltip, type, PostProcessSetting, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _initializer, _initializer2, ColorGrading;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_assetAssetsIndexJs) {
      Texture2D = _assetAssetsIndexJs.Texture2D;
    }, function (_coreIndexJs) {
      CCFloat = _coreIndexJs.CCFloat;
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
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_postProcessSettingJs) {
      PostProcessSetting = _postProcessSettingJs.PostProcessSetting;
    }],
    execute: function () {
      _export("ColorGrading", ColorGrading = (_dec = ccclass('cc.ColorGrading'), _dec2 = help('cc.ColorGrading'), _dec3 = menu('PostProcess/ColorGrading'), _dec4 = tooltip('i18n:color_grading.contribute'), _dec5 = range([0, 1, 0.01]), _dec6 = type(CCFloat), _dec7 = tooltip('i18n:color_grading.originalMap'), _dec8 = type(Texture2D), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_PostProcessSetting) {
        _inheritsLoose(ColorGrading, _PostProcessSetting);
        function ColorGrading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PostProcessSetting.call.apply(_PostProcessSetting, [this].concat(args)) || this;
          _this._contribute = _initializer && _initializer();
          _this._colorGradingMap = _initializer2 && _initializer2();
          return _this;
        }
        _createClass(ColorGrading, [{
          key: "contribute",
          get: function get() {
            return this._contribute;
          },
          set: function set(value) {
            this._contribute = value;
          }
        }, {
          key: "colorGradingMap",
          get: function get() {
            return this._colorGradingMap;
          },
          set: function set(val) {
            this._colorGradingMap = val;
          }
        }]);
        return ColorGrading;
      }(PostProcessSetting), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_contribute", [serializable], function () {
        return 0.0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_colorGradingMap", [serializable], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "contribute", [_dec4, slide, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "contribute"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingMap", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingMap"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});