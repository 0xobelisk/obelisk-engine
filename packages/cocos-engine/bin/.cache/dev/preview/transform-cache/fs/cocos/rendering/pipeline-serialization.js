System.register("q-bundled:///fs/cocos/rendering/pipeline-serialization.js", ["../core/data/decorators/index.js", "../core/index.js", "../gfx/index.js", "../asset/assets/render-texture.js", "../asset/assets/material.js"], function (_export, _context) {
  "use strict";

  var ccclass, type, serializable, editable, CCString, ccenum, AccessFlagBit, Format, LoadOp, StoreOp, TextureType, TextureUsageBit, RenderTexture, Material, _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _dec5, _dec6, _class4, _class5, _initializer7, _initializer8, _dec7, _dec8, _class7, _class8, _initializer9, _initializer10, _dec9, _dec10, _dec11, _class10, _class11, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class13, _class14, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class16, _class17, _initializer22, _initializer23, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _dec26, _dec27, _dec28, _class19, _class20, _initializer30, _initializer31, _initializer32, _dec29, _dec30, _dec31, _class22, _class23, _initializer33, _initializer34, _initializer35, RenderFlowTag, RenderTextureDesc, RenderTextureConfig, MaterialConfig, FrameBufferDesc, ColorDesc, DepthStencilDesc, RenderPassDesc, RenderQueueSortMode, RenderQueueDesc;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export({
    RenderFlowTag: void 0,
    RenderQueueSortMode: void 0
  });
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_coreIndexJs) {
      CCString = _coreIndexJs.CCString;
      ccenum = _coreIndexJs.ccenum;
    }, function (_gfxIndexJs) {
      AccessFlagBit = _gfxIndexJs.AccessFlagBit;
      Format = _gfxIndexJs.Format;
      LoadOp = _gfxIndexJs.LoadOp;
      StoreOp = _gfxIndexJs.StoreOp;
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
    }, function (_assetAssetsRenderTextureJs) {
      RenderTexture = _assetAssetsRenderTextureJs.RenderTexture;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }],
    execute: function () {
      ccenum(TextureType);
      ccenum(TextureUsageBit);
      ccenum(StoreOp);
      ccenum(LoadOp);
      ccenum(AccessFlagBit);
      ccenum(Format);

      /**
       * @en The tag of the render flow, including SCENE, POSTPROCESS and UI.
       * @zh 渲染流程的标签，包含：常规场景（SCENE），后处理（POSTPROCESS），UI 界面（UI）
       */
      (function (RenderFlowTag) {
        RenderFlowTag[RenderFlowTag["SCENE"] = 0] = "SCENE";
        RenderFlowTag[RenderFlowTag["POSTPROCESS"] = 1] = "POSTPROCESS";
        RenderFlowTag[RenderFlowTag["UI"] = 2] = "UI";
      })(RenderFlowTag || _export("RenderFlowTag", RenderFlowTag = {}));
      ccenum(RenderFlowTag);
      _export("RenderTextureDesc", RenderTextureDesc = (_dec = ccclass('RenderTextureDesc'), _dec2 = type(TextureType), _dec3 = type(TextureUsageBit), _dec4 = type(Format), _dec(_class = (_class2 = function RenderTextureDesc() {
        this.name = _initializer && _initializer();
        this.type = _initializer2 && _initializer2();
        this.usage = _initializer3 && _initializer3();
        this.format = _initializer4 && _initializer4();
        this.width = _initializer5 && _initializer5();
        this.height = _initializer6 && _initializer6();
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "name", [serializable, editable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "type", [_dec2], function () {
        return TextureType.TEX2D;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "usage", [_dec3], function () {
        return TextureUsageBit.COLOR_ATTACHMENT;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "format", [_dec4], function () {
        return Format.UNKNOWN;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "width", [serializable, editable], function () {
        return -1;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "height", [serializable, editable], function () {
        return -1;
      })), _class2)) || _class));
      _export("RenderTextureConfig", RenderTextureConfig = (_dec5 = ccclass('RenderTextureConfig'), _dec6 = type(RenderTexture), _dec5(_class4 = (_class5 = function RenderTextureConfig() {
        this.name = _initializer7 && _initializer7();
        this.texture = _initializer8 && _initializer8();
      }, (_initializer7 = _applyDecoratedInitializer(_class5.prototype, "name", [serializable, editable], function () {
        return '';
      }), _initializer8 = _applyDecoratedInitializer(_class5.prototype, "texture", [_dec6], function () {
        return null;
      })), _class5)) || _class4));
      _export("MaterialConfig", MaterialConfig = (_dec7 = ccclass('MaterialConfig'), _dec8 = type(Material), _dec7(_class7 = (_class8 = function MaterialConfig() {
        this.name = _initializer9 && _initializer9();
        this.material = _initializer10 && _initializer10();
      }, (_initializer9 = _applyDecoratedInitializer(_class8.prototype, "name", [serializable, editable], function () {
        return '';
      }), _initializer10 = _applyDecoratedInitializer(_class8.prototype, "material", [_dec8], function () {
        return null;
      })), _class8)) || _class7));
      _export("FrameBufferDesc", FrameBufferDesc = (_dec9 = ccclass('FrameBufferDesc'), _dec10 = type([CCString]), _dec11 = type(RenderTexture), _dec9(_class10 = (_class11 = function FrameBufferDesc() {
        this.name = _initializer11 && _initializer11();
        this.renderPass = _initializer12 && _initializer12();
        this.colorTextures = _initializer13 && _initializer13();
        this.depthStencilTexture = _initializer14 && _initializer14();
        this.texture = _initializer15 && _initializer15();
      }, (_initializer11 = _applyDecoratedInitializer(_class11.prototype, "name", [serializable, editable], function () {
        return '';
      }), _initializer12 = _applyDecoratedInitializer(_class11.prototype, "renderPass", [serializable, editable], function () {
        return 0;
      }), _initializer13 = _applyDecoratedInitializer(_class11.prototype, "colorTextures", [_dec10], function () {
        return [];
      }), _initializer14 = _applyDecoratedInitializer(_class11.prototype, "depthStencilTexture", [serializable, editable], function () {
        return '';
      }), _initializer15 = _applyDecoratedInitializer(_class11.prototype, "texture", [_dec11], function () {
        return null;
      })), _class11)) || _class10));
      _export("ColorDesc", ColorDesc = (_dec12 = ccclass('ColorDesc'), _dec13 = type(Format), _dec14 = type(LoadOp), _dec15 = type(StoreOp), _dec16 = type(AccessFlagBit), _dec17 = type(AccessFlagBit), _dec12(_class13 = (_class14 = function ColorDesc() {
        this.format = _initializer16 && _initializer16();
        this.loadOp = _initializer17 && _initializer17();
        this.storeOp = _initializer18 && _initializer18();
        this.sampleCount = _initializer19 && _initializer19();
        this.beginAccesses = _initializer20 && _initializer20();
        this.endAccesses = _initializer21 && _initializer21();
      }, (_initializer16 = _applyDecoratedInitializer(_class14.prototype, "format", [_dec13], function () {
        return Format.UNKNOWN;
      }), _initializer17 = _applyDecoratedInitializer(_class14.prototype, "loadOp", [_dec14], function () {
        return LoadOp.CLEAR;
      }), _initializer18 = _applyDecoratedInitializer(_class14.prototype, "storeOp", [_dec15], function () {
        return StoreOp.STORE;
      }), _initializer19 = _applyDecoratedInitializer(_class14.prototype, "sampleCount", [serializable, editable], function () {
        return 1;
      }), _initializer20 = _applyDecoratedInitializer(_class14.prototype, "beginAccesses", [_dec16], function () {
        return AccessFlagBit.NONE;
      }), _initializer21 = _applyDecoratedInitializer(_class14.prototype, "endAccesses", [_dec17], function () {
        return AccessFlagBit.COLOR_ATTACHMENT_WRITE;
      })), _class14)) || _class13));
      _export("DepthStencilDesc", DepthStencilDesc = (_dec18 = ccclass('DepthStencilDesc'), _dec19 = type(Format), _dec20 = type(LoadOp), _dec21 = type(StoreOp), _dec22 = type(LoadOp), _dec23 = type(StoreOp), _dec24 = type(AccessFlagBit), _dec25 = type(AccessFlagBit), _dec18(_class16 = (_class17 = function DepthStencilDesc() {
        this.format = _initializer22 && _initializer22();
        this.depthLoadOp = _initializer23 && _initializer23();
        this.depthStoreOp = _initializer24 && _initializer24();
        this.stencilLoadOp = _initializer25 && _initializer25();
        this.stencilStoreOp = _initializer26 && _initializer26();
        this.sampleCount = _initializer27 && _initializer27();
        this.beginAccesses = _initializer28 && _initializer28();
        this.endAccesses = _initializer29 && _initializer29();
      }, (_initializer22 = _applyDecoratedInitializer(_class17.prototype, "format", [_dec19], function () {
        return Format.UNKNOWN;
      }), _initializer23 = _applyDecoratedInitializer(_class17.prototype, "depthLoadOp", [_dec20], function () {
        return LoadOp.CLEAR;
      }), _initializer24 = _applyDecoratedInitializer(_class17.prototype, "depthStoreOp", [_dec21], function () {
        return StoreOp.STORE;
      }), _initializer25 = _applyDecoratedInitializer(_class17.prototype, "stencilLoadOp", [_dec22], function () {
        return LoadOp.CLEAR;
      }), _initializer26 = _applyDecoratedInitializer(_class17.prototype, "stencilStoreOp", [_dec23], function () {
        return StoreOp.STORE;
      }), _initializer27 = _applyDecoratedInitializer(_class17.prototype, "sampleCount", [serializable, editable], function () {
        return 1;
      }), _initializer28 = _applyDecoratedInitializer(_class17.prototype, "beginAccesses", [_dec24], function () {
        return AccessFlagBit.NONE;
      }), _initializer29 = _applyDecoratedInitializer(_class17.prototype, "endAccesses", [_dec25], function () {
        return AccessFlagBit.DEPTH_STENCIL_ATTACHMENT_WRITE;
      })), _class17)) || _class16));
      _export("RenderPassDesc", RenderPassDesc = (_dec26 = ccclass('RenderPassDesc'), _dec27 = type([ColorDesc]), _dec28 = type(DepthStencilDesc), _dec26(_class19 = (_class20 = function RenderPassDesc() {
        this.index = _initializer30 && _initializer30();
        this.colorAttachments = _initializer31 && _initializer31();
        this.depthStencilAttachment = _initializer32 && _initializer32();
      }, (_initializer30 = _applyDecoratedInitializer(_class20.prototype, "index", [serializable, editable], function () {
        return -1;
      }), _initializer31 = _applyDecoratedInitializer(_class20.prototype, "colorAttachments", [_dec27], function () {
        return [];
      }), _initializer32 = _applyDecoratedInitializer(_class20.prototype, "depthStencilAttachment", [_dec28], function () {
        return new DepthStencilDesc();
      })), _class20)) || _class19));
      (function (RenderQueueSortMode) {
        RenderQueueSortMode[RenderQueueSortMode["FRONT_TO_BACK"] = 0] = "FRONT_TO_BACK";
        RenderQueueSortMode[RenderQueueSortMode["BACK_TO_FRONT"] = 1] = "BACK_TO_FRONT";
      })(RenderQueueSortMode || _export("RenderQueueSortMode", RenderQueueSortMode = {}));
      ccenum(RenderQueueSortMode);

      /**
       * @en The render queue descriptor
       * @zh 渲染队列描述信息
       */
      _export("RenderQueueDesc", RenderQueueDesc = (_dec29 = ccclass('RenderQueueDesc'), _dec30 = type(RenderQueueSortMode), _dec31 = type([CCString]), _dec29(_class22 = (_class23 = function RenderQueueDesc() {
        /**
         * @en Whether the render queue is a transparent queue
         * @zh 当前队列是否是半透明队列
         */
        this.isTransparent = _initializer33 && _initializer33();
        /**
         * @en The sort mode of the render queue
         * @zh 渲染队列的排序模式
         */
        this.sortMode = _initializer34 && _initializer34();
        /**
         * @en The stages using this queue
         * @zh 使用当前渲染队列的阶段列表
         */
        this.stages = _initializer35 && _initializer35();
      }, (_initializer33 = _applyDecoratedInitializer(_class23.prototype, "isTransparent", [serializable, editable], function () {
        return false;
      }), _initializer34 = _applyDecoratedInitializer(_class23.prototype, "sortMode", [_dec30], function () {
        return RenderQueueSortMode.FRONT_TO_BACK;
      }), _initializer35 = _applyDecoratedInitializer(_class23.prototype, "stages", [_dec31], function () {
        return [];
      })), _class23)) || _class22));
    }
  };
});