System.register("q-bundled:///fs/cocos/rendering/post-process/components/taa.js", ["../../../core/data/class-decorator.js", "../../../core/data/decorators/index.js", "./post-process-setting.js"], function (_export, _context) {
  "use strict";

  var property, serializable, ccclass, disallowMultiple, executeInEditMode, help, menu, range, slide, tooltip, PostProcessSetting, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, TAA;
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
      _export("TAA", TAA = (_dec = ccclass('cc.TAA'), _dec2 = help('cc.TAA'), _dec3 = menu('PostProcess/TAA'), _dec4 = tooltip('i18n:taa.sampleScale'), _dec5 = range([0.01, 5, 0.01]), _dec6 = tooltip('i18n:taa.feedback'), _dec7 = range([0.0, 1, 0.01]), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_PostProcessSetting) {
        _inheritsLoose(TAA, _PostProcessSetting);
        function TAA() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PostProcessSetting.call.apply(_PostProcessSetting, [this].concat(args)) || this;
          _this._sampleScale = _initializer && _initializer();
          _this._feedback = _initializer2 && _initializer2();
          return _this;
        }
        _createClass(TAA, [{
          key: "sampleScale",
          get: function get() {
            return this._sampleScale;
          },
          set: function set(v) {
            this._sampleScale = v;
          }
        }, {
          key: "feedback",
          get: function get() {
            return this._feedback;
          },
          set: function set(v) {
            this._feedback = v;
          }
        }]);
        return TAA;
      }(PostProcessSetting), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_sampleScale", [serializable], function () {
        return 1;
      }), _applyDecoratedDescriptor(_class2.prototype, "sampleScale", [_dec4, slide, _dec5, property], Object.getOwnPropertyDescriptor(_class2.prototype, "sampleScale"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_feedback", [serializable], function () {
        return 0.95;
      }), _applyDecoratedDescriptor(_class2.prototype, "feedback", [_dec6, slide, _dec7, property], Object.getOwnPropertyDescriptor(_class2.prototype, "feedback"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});