System.register("q-bundled:///fs/cocos/gfx/base/pipeline-state.editor.js", ["../../core/data/decorators/index.js", "./pipeline-state.js", "./define.js", "../../rendering/define.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, type, editable, RasterizerState, DepthStencilState, BlendTarget, PolygonMode, ShadeModel, CullMode, ComparisonFunc, StencilOp, BlendFactor, BlendOp, ColorMask, PrimitiveMode, DynamicStateFlagBit, RenderPassStage, CCString, Enum, Color, _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class4, _class5, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _initializer23, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _initializer30, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class7, _class8, _initializer31, _initializer32, _initializer33, _initializer34, _initializer35, _initializer36, _initializer37, _initializer38, _dec23, _dec24, _class10, _class11, _initializer39, _initializer40, _initializer41, _initializer42, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class13, _class14, _initializer43, _initializer44, _initializer45, _initializer46, _initializer47, _initializer48, _initializer49, _initializer50, _initializer51, toEnum, RasterizerStateEditor, DepthStencilStateEditor, BlendTargetEditor, BlendStateEditor, PassStatesEditor;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function isNumber(obj) {
    return typeof obj === 'number' && !isNaN(obj);
  }
  function getEnumData(enumObj) {
    var enumData = {};
    Object.keys(enumObj).forEach(function (key) {
      if (!isNumber(Number(key))) {
        enumData[key] = enumObj[key];
      }
    });
    return enumData;
  }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_pipelineStateJs) {
      RasterizerState = _pipelineStateJs.RasterizerState;
      DepthStencilState = _pipelineStateJs.DepthStencilState;
      BlendTarget = _pipelineStateJs.BlendTarget;
    }, function (_defineJs) {
      PolygonMode = _defineJs.PolygonMode;
      ShadeModel = _defineJs.ShadeModel;
      CullMode = _defineJs.CullMode;
      ComparisonFunc = _defineJs.ComparisonFunc;
      StencilOp = _defineJs.StencilOp;
      BlendFactor = _defineJs.BlendFactor;
      BlendOp = _defineJs.BlendOp;
      ColorMask = _defineJs.ColorMask;
      PrimitiveMode = _defineJs.PrimitiveMode;
      DynamicStateFlagBit = _defineJs.DynamicStateFlagBit;
    }, function (_renderingDefineJs) {
      RenderPassStage = _renderingDefineJs.RenderPassStage;
    }, function (_coreIndexJs) {
      CCString = _coreIndexJs.CCString;
      Enum = _coreIndexJs.Enum;
      Color = _coreIndexJs.Color;
    }],
    execute: function () {
      toEnum = function () {
        var copyAsCCEnum = function copyAsCCEnum(e) {
          return Enum(getEnumData(e));
        };
        return {
          PolygonMode: copyAsCCEnum(PolygonMode),
          ShadeModel: copyAsCCEnum(ShadeModel),
          CullMode: copyAsCCEnum(CullMode),
          ComparisonFunc: copyAsCCEnum(ComparisonFunc),
          StencilOp: copyAsCCEnum(StencilOp),
          PrimitiveMode: copyAsCCEnum(PrimitiveMode),
          RenderPassStage: copyAsCCEnum(RenderPassStage),
          DynamicStateFlagBit: copyAsCCEnum(DynamicStateFlagBit)
        };
      }();
      _export("RasterizerStateEditor", RasterizerStateEditor = (_dec = ccclass('RasterizerState'), _dec2 = type(toEnum.PolygonMode), _dec3 = type(toEnum.ShadeModel), _dec4 = type(toEnum.CullMode), _dec(_class = (_class2 = /*#__PURE__*/function (_RasterizerState) {
        _inheritsLoose(RasterizerStateEditor, _RasterizerState);
        function RasterizerStateEditor() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _RasterizerState.call.apply(_RasterizerState, [this].concat(args)) || this;
          _this.isDiscard = _initializer && _initializer();
          _this.polygonMode = _initializer2 && _initializer2();
          _this.shadeModel = _initializer3 && _initializer3();
          _this.cullMode = _initializer4 && _initializer4();
          _this.isFrontFaceCCW = _initializer5 && _initializer5();
          _this.depthBias = _initializer6 && _initializer6();
          _this.depthBiasClamp = _initializer7 && _initializer7();
          _this.depthBiasSlop = _initializer8 && _initializer8();
          _this.isDepthClip = _initializer9 && _initializer9();
          _this.isMultisample = _initializer10 && _initializer10();
          _this.lineWidth = _initializer11 && _initializer11();
          return _this;
        }
        return RasterizerStateEditor;
      }(RasterizerState), (_initializer = _applyDecoratedInitializer(_class2.prototype, "isDiscard", [serializable, editable], function () {
        return false;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "polygonMode", [serializable, editable, _dec2], function () {
        return PolygonMode.FILL;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "shadeModel", [_dec3, serializable, editable], function () {
        return ShadeModel.GOURAND;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "cullMode", [_dec4, serializable, editable], function () {
        return CullMode.BACK;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "isFrontFaceCCW", [serializable, editable], function () {
        return true;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "depthBias", [serializable, editable], function () {
        return 0;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "depthBiasClamp", [serializable, editable], function () {
        return 0.0;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "depthBiasSlop", [serializable, editable], function () {
        return 0.0;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "isDepthClip", [serializable, editable], function () {
        return true;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "isMultisample", [serializable, editable], function () {
        return false;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "lineWidth", [serializable, editable], function () {
        return 1.0;
      })), _class2)) || _class));
      _export("DepthStencilStateEditor", DepthStencilStateEditor = (_dec5 = ccclass('DepthStencilState'), _dec6 = type(toEnum.ComparisonFunc), _dec7 = type(toEnum.ComparisonFunc), _dec8 = type(toEnum.StencilOp), _dec9 = type(toEnum.StencilOp), _dec10 = type(toEnum.StencilOp), _dec11 = type(toEnum.ComparisonFunc), _dec12 = type(toEnum.StencilOp), _dec13 = type(toEnum.StencilOp), _dec14 = type(toEnum.StencilOp), _dec5(_class4 = (_class5 = /*#__PURE__*/function (_DepthStencilState) {
        _inheritsLoose(DepthStencilStateEditor, _DepthStencilState);
        function DepthStencilStateEditor() {
          var _this2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this2 = _DepthStencilState.call.apply(_DepthStencilState, [this].concat(args)) || this;
          _this2.depthTest = _initializer12 && _initializer12();
          _this2.depthWrite = _initializer13 && _initializer13();
          _this2.depthFunc = _initializer14 && _initializer14();
          _this2.stencilTestFront = _initializer15 && _initializer15();
          _this2.stencilFuncFront = _initializer16 && _initializer16();
          _this2.stencilReadMaskFront = _initializer17 && _initializer17();
          _this2.stencilWriteMaskFront = _initializer18 && _initializer18();
          _this2.stencilFailOpFront = _initializer19 && _initializer19();
          _this2.stencilZFailOpFront = _initializer20 && _initializer20();
          _this2.stencilPassOpFront = _initializer21 && _initializer21();
          _this2.stencilRefFront = _initializer22 && _initializer22();
          _this2.stencilTestBack = _initializer23 && _initializer23();
          _this2.stencilFuncBack = _initializer24 && _initializer24();
          _this2.stencilReadMaskBack = _initializer25 && _initializer25();
          _this2.stencilWriteMaskBack = _initializer26 && _initializer26();
          _this2.stencilFailOpBack = _initializer27 && _initializer27();
          _this2.stencilZFailOpBack = _initializer28 && _initializer28();
          _this2.stencilPassOpBack = _initializer29 && _initializer29();
          _this2.stencilRefBack = _initializer30 && _initializer30();
          return _this2;
        }
        return DepthStencilStateEditor;
      }(DepthStencilState), (_initializer12 = _applyDecoratedInitializer(_class5.prototype, "depthTest", [serializable, editable], function () {
        return true;
      }), _initializer13 = _applyDecoratedInitializer(_class5.prototype, "depthWrite", [serializable, editable], function () {
        return true;
      }), _initializer14 = _applyDecoratedInitializer(_class5.prototype, "depthFunc", [_dec6, serializable, editable], function () {
        return ComparisonFunc.LESS;
      }), _initializer15 = _applyDecoratedInitializer(_class5.prototype, "stencilTestFront", [serializable, editable], function () {
        return false;
      }), _initializer16 = _applyDecoratedInitializer(_class5.prototype, "stencilFuncFront", [_dec7, serializable, editable], function () {
        return ComparisonFunc.ALWAYS;
      }), _initializer17 = _applyDecoratedInitializer(_class5.prototype, "stencilReadMaskFront", [serializable, editable], function () {
        return 0xffffffff;
      }), _initializer18 = _applyDecoratedInitializer(_class5.prototype, "stencilWriteMaskFront", [serializable, editable], function () {
        return 0xffffffff;
      }), _initializer19 = _applyDecoratedInitializer(_class5.prototype, "stencilFailOpFront", [_dec8, serializable, editable], function () {
        return StencilOp.KEEP;
      }), _initializer20 = _applyDecoratedInitializer(_class5.prototype, "stencilZFailOpFront", [_dec9, serializable, editable], function () {
        return StencilOp.KEEP;
      }), _initializer21 = _applyDecoratedInitializer(_class5.prototype, "stencilPassOpFront", [_dec10, serializable, editable], function () {
        return StencilOp.KEEP;
      }), _initializer22 = _applyDecoratedInitializer(_class5.prototype, "stencilRefFront", [serializable, editable], function () {
        return 1;
      }), _initializer23 = _applyDecoratedInitializer(_class5.prototype, "stencilTestBack", [serializable, editable], function () {
        return false;
      }), _initializer24 = _applyDecoratedInitializer(_class5.prototype, "stencilFuncBack", [_dec11, serializable, editable], function () {
        return ComparisonFunc.ALWAYS;
      }), _initializer25 = _applyDecoratedInitializer(_class5.prototype, "stencilReadMaskBack", [serializable, editable], function () {
        return 0xffffffff;
      }), _initializer26 = _applyDecoratedInitializer(_class5.prototype, "stencilWriteMaskBack", [serializable, editable], function () {
        return 0xffffffff;
      }), _initializer27 = _applyDecoratedInitializer(_class5.prototype, "stencilFailOpBack", [_dec12, serializable, editable], function () {
        return StencilOp.KEEP;
      }), _initializer28 = _applyDecoratedInitializer(_class5.prototype, "stencilZFailOpBack", [_dec13, serializable, editable], function () {
        return StencilOp.KEEP;
      }), _initializer29 = _applyDecoratedInitializer(_class5.prototype, "stencilPassOpBack", [_dec14, serializable, editable], function () {
        return StencilOp.KEEP;
      }), _initializer30 = _applyDecoratedInitializer(_class5.prototype, "stencilRefBack", [serializable, editable], function () {
        return 1;
      })), _class5)) || _class4)); // description of pipeline-state.ts class BlendTarget
      _export("BlendTargetEditor", BlendTargetEditor = (_dec15 = ccclass('BlendTarget'), _dec16 = type(BlendFactor), _dec17 = type(BlendFactor), _dec18 = type(BlendOp), _dec19 = type(BlendFactor), _dec20 = type(BlendFactor), _dec21 = type(BlendOp), _dec22 = type(ColorMask), _dec15(_class7 = (_class8 = /*#__PURE__*/function (_BlendTarget) {
        _inheritsLoose(BlendTargetEditor, _BlendTarget);
        function BlendTargetEditor() {
          var _this3;
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          _this3 = _BlendTarget.call.apply(_BlendTarget, [this].concat(args)) || this;
          _this3.blend = _initializer31 && _initializer31();
          _this3.blendSrc = _initializer32 && _initializer32();
          _this3.blendDst = _initializer33 && _initializer33();
          _this3.blendEq = _initializer34 && _initializer34();
          _this3.blendSrcAlpha = _initializer35 && _initializer35();
          _this3.blendDstAlpha = _initializer36 && _initializer36();
          _this3.blendAlphaEq = _initializer37 && _initializer37();
          _this3.blendColorMask = _initializer38 && _initializer38();
          return _this3;
        }
        return BlendTargetEditor;
      }(BlendTarget), (_initializer31 = _applyDecoratedInitializer(_class8.prototype, "blend", [serializable, editable], function () {
        return false;
      }), _initializer32 = _applyDecoratedInitializer(_class8.prototype, "blendSrc", [_dec16, serializable, editable], function () {
        return BlendFactor.ONE;
      }), _initializer33 = _applyDecoratedInitializer(_class8.prototype, "blendDst", [_dec17, serializable, editable], function () {
        return BlendFactor.ZERO;
      }), _initializer34 = _applyDecoratedInitializer(_class8.prototype, "blendEq", [_dec18, serializable, editable], function () {
        return BlendOp.ADD;
      }), _initializer35 = _applyDecoratedInitializer(_class8.prototype, "blendSrcAlpha", [_dec19, serializable, editable], function () {
        return BlendFactor.ONE;
      }), _initializer36 = _applyDecoratedInitializer(_class8.prototype, "blendDstAlpha", [_dec20, serializable, editable], function () {
        return BlendFactor.ZERO;
      }), _initializer37 = _applyDecoratedInitializer(_class8.prototype, "blendAlphaEq", [_dec21, serializable, editable], function () {
        return BlendOp.ADD;
      }), _initializer38 = _applyDecoratedInitializer(_class8.prototype, "blendColorMask", [_dec22, serializable, editable], function () {
        return ColorMask.ALL;
      })), _class8)) || _class7));
      _export("BlendStateEditor", BlendStateEditor = (_dec23 = ccclass('BlendState'), _dec24 = type([BlendTargetEditor]), _dec23(_class10 = (_class11 = /*#__PURE__*/function () {
        function BlendStateEditor() {
          this.isA2C = _initializer39 && _initializer39();
          this.isIndepend = _initializer40 && _initializer40();
          this.blendColor = _initializer41 && _initializer41();
          this.targets = _initializer42 && _initializer42();
        }
        var _proto = BlendStateEditor.prototype;
        _proto.init = function init(blendState) {
          var length = 1;
          if (blendState && blendState.targets) {
            length = blendState.targets.length;
          }
          for (var i = 0; i < length; i++) {
            this.targets.push(new BlendTargetEditor());
          }
        };
        return BlendStateEditor;
      }(), (_initializer39 = _applyDecoratedInitializer(_class11.prototype, "isA2C", [serializable, editable], function () {
        return false;
      }), _initializer40 = _applyDecoratedInitializer(_class11.prototype, "isIndepend", [serializable, editable], function () {
        return false;
      }), _initializer41 = _applyDecoratedInitializer(_class11.prototype, "blendColor", [serializable, editable], function () {
        return Color.WHITE;
      }), _initializer42 = _applyDecoratedInitializer(_class11.prototype, "targets", [_dec24, serializable, editable], function () {
        return [];
      })), _class11)) || _class10));
      _export("PassStatesEditor", PassStatesEditor = (_dec25 = ccclass('PassStates'), _dec26 = type(toEnum.PrimitiveMode), _dec27 = type(toEnum.RenderPassStage), _dec28 = type(RasterizerStateEditor), _dec29 = type(DepthStencilStateEditor), _dec30 = type(BlendStateEditor), _dec31 = type([toEnum.DynamicStateFlagBit]), _dec32 = type([CCString]), _dec25(_class13 = (_class14 = function PassStatesEditor() {
        this.priority = _initializer43 && _initializer43();
        this.primitive = _initializer44 && _initializer44();
        this.stage = _initializer45 && _initializer45();
        this.rasterizerState = _initializer46 && _initializer46();
        this.depthStencilState = _initializer47 && _initializer47();
        this.blendState = _initializer48 && _initializer48();
        this.dynamics = _initializer49 && _initializer49();
        this.customizations = _initializer50 && _initializer50();
        this.phase = _initializer51 && _initializer51();
      }, (_initializer43 = _applyDecoratedInitializer(_class14.prototype, "priority", [serializable, editable], function () {
        return 128;
      }), _initializer44 = _applyDecoratedInitializer(_class14.prototype, "primitive", [_dec26, serializable, editable], function () {
        return PrimitiveMode.TRIANGLE_LIST;
      }), _initializer45 = _applyDecoratedInitializer(_class14.prototype, "stage", [_dec27, serializable, editable], function () {
        return RenderPassStage.DEFAULT;
      }), _initializer46 = _applyDecoratedInitializer(_class14.prototype, "rasterizerState", [_dec28, serializable, editable], function () {
        return new RasterizerStateEditor();
      }), _initializer47 = _applyDecoratedInitializer(_class14.prototype, "depthStencilState", [_dec29, serializable, editable], function () {
        return new DepthStencilStateEditor();
      }), _initializer48 = _applyDecoratedInitializer(_class14.prototype, "blendState", [_dec30, serializable, editable], function () {
        return new BlendStateEditor();
      }), _initializer49 = _applyDecoratedInitializer(_class14.prototype, "dynamics", [_dec31, serializable, editable], function () {
        return [];
      }), _initializer50 = _applyDecoratedInitializer(_class14.prototype, "customizations", [_dec32, serializable, editable], function () {
        return [];
      }), _initializer51 = _applyDecoratedInitializer(_class14.prototype, "phase", [serializable, editable], function () {
        return '';
      })), _class14)) || _class13));
    }
  };
});