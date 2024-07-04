System.register("q-bundled:///fs/cocos/rendering/post-process/components/bloom.js", ["../../../core/index.js", "../../../core/data/decorators/index.js", "../../../core/data/utils/attribute.js", "./post-process-setting.js"], function (_export, _context) {
  "use strict";

  var cclegacy, ccclass, disallowMultiple, executeInEditMode, help, menu, range, rangeMin, serializable, slide, tooltip, type, visible, CCBoolean, CCFloat, CCInteger, PostProcessSetting, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, Bloom;
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
    setters: [function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      range = _coreDataDecoratorsIndexJs.range;
      rangeMin = _coreDataDecoratorsIndexJs.rangeMin;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      slide = _coreDataDecoratorsIndexJs.slide;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_coreDataUtilsAttributeJs) {
      CCBoolean = _coreDataUtilsAttributeJs.CCBoolean;
      CCFloat = _coreDataUtilsAttributeJs.CCFloat;
      CCInteger = _coreDataUtilsAttributeJs.CCInteger;
    }, function (_postProcessSettingJs) {
      PostProcessSetting = _postProcessSettingJs.PostProcessSetting;
    }],
    execute: function () {
      _export("Bloom", Bloom = (_dec = ccclass('cc.Bloom'), _dec2 = help('cc.Bloom'), _dec3 = menu('PostProcess/Bloom'), _dec4 = tooltip('i18n:bloom.enableAlphaMask'), _dec5 = type(CCBoolean), _dec6 = tooltip('i18n:bloom.useHdrIlluminance'), _dec7 = visible(function () {
        return cclegacy.director.root.pipeline.getMacroBool('CC_USE_FLOAT_OUTPUT');
      }), _dec8 = type(CCBoolean), _dec9 = tooltip('i18n:bloom.threshold'), _dec10 = rangeMin(0), _dec11 = type(CCFloat), _dec12 = tooltip('i18n:bloom.iterations'), _dec13 = range([1, 6, 1]), _dec14 = type(CCInteger), _dec15 = tooltip('i18n:bloom.intensity'), _dec16 = rangeMin(0), _dec17 = type(CCFloat), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_PostProcessSetting) {
        _inheritsLoose(Bloom, _PostProcessSetting);
        function Bloom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PostProcessSetting.call.apply(_PostProcessSetting, [this].concat(args)) || this;
          _this._enableAlphaMask = _initializer && _initializer();
          _this._useHdrIlluminance = _initializer2 && _initializer2();
          _this._threshold = _initializer3 && _initializer3();
          _this._iterations = _initializer4 && _initializer4();
          _this._intensity = _initializer5 && _initializer5();
          return _this;
        }
        _createClass(Bloom, [{
          key: "enableAlphaMask",
          get: function get() {
            return this._enableAlphaMask;
          },
          set: function set(value) {
            this._enableAlphaMask = value;
          }
        }, {
          key: "useHdrIlluminance",
          get: function get() {
            return this._useHdrIlluminance;
          },
          set: function set(value) {
            this._useHdrIlluminance = value;
          }
        }, {
          key: "threshold",
          get: function get() {
            return this._threshold;
          },
          set: function set(value) {
            this._threshold = value;
          }
        }, {
          key: "iterations",
          get: function get() {
            return this._iterations;
          },
          set: function set(value) {
            this._iterations = value;
          }
        }, {
          key: "intensity",
          get: function get() {
            return this._intensity;
          },
          set: function set(value) {
            this._intensity = value;
          }
        }]);
        return Bloom;
      }(PostProcessSetting), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_enableAlphaMask", [serializable], function () {
        return false;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_useHdrIlluminance", [serializable], function () {
        return false;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_threshold", [serializable], function () {
        return 0.8;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_iterations", [serializable], function () {
        return 3;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_intensity", [serializable], function () {
        return 2.3;
      }), _applyDecoratedDescriptor(_class2.prototype, "enableAlphaMask", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "enableAlphaMask"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "useHdrIlluminance", [_dec6, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "useHdrIlluminance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "threshold", [_dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "threshold"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "iterations", [_dec12, slide, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "iterations"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "intensity", [_dec15, _dec16, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "intensity"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});