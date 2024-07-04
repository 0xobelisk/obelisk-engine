System.register("q-bundled:///fs/cocos/tiledmap/tiled-map-asset.js", ["../core/data/decorators/index.js", "../asset/assets/asset.js", "../core/index.js", "../2d/assets/index.js", "../asset/assets/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, type, serializable, Asset, CCString, Size, SpriteFrame, TextAsset, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, TiledMapAsset;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_coreIndexJs) {
      CCString = _coreIndexJs.CCString;
      Size = _coreIndexJs.Size;
    }, function (_dAssetsIndexJs) {
      SpriteFrame = _dAssetsIndexJs.SpriteFrame;
    }, function (_assetAssetsIndexJs) {
      TextAsset = _assetAssetsIndexJs.TextAsset;
    }],
    execute: function () {
      /**
       * @en
       * Class for tiled map asset handling.
       * @zh
       * 用于获取 tiled map 资源类
       * @class TiledMapAsset
       * @extends Asset
       *
       */
      _export("TiledMapAsset", TiledMapAsset = (_dec = ccclass('cc.TiledMapAsset'), _dec2 = type([TextAsset]), _dec3 = type([CCString]), _dec4 = type([SpriteFrame]), _dec5 = type([SpriteFrame]), _dec6 = type([CCString]), _dec7 = type([CCString]), _dec8 = type([Size]), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(TiledMapAsset, _Asset);
        function TiledMapAsset() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          _this.tmxXmlStr = _initializer && _initializer();
          _this.tsxFiles = _initializer2 && _initializer2();
          _this.tsxFileNames = _initializer3 && _initializer3();
          /**
           * @en
           * SpriteFrame array
           * @zh
           * SpriteFrame 数组
           */
          _this.spriteFrames = _initializer4 && _initializer4();
          /**
           * @en
           * ImageLayerSpriteFrame array
           * @zh
           * ImageLayerSpriteFrame 数组
           * @property {SpriteFrame[]} imageLayerSpriteFrame
           */
          _this.imageLayerSpriteFrame = _initializer5 && _initializer5();
          /**
           * @en
           * Name of each object in imageLayerSpriteFrame
           * @zh
           * 每个 imageLayerSpriteFrame 名称
           * @property {String[]} imageLayerTextureNames
           */
          _this.imageLayerSpriteFrameNames = _initializer6 && _initializer6();
          /**
           * @en
           * Name of each object in spriteFrames
           * @zh
           * 每个 SpriteFrame 名称
           * @property {String[]} spriteFrameNames
           */
          _this.spriteFrameNames = _initializer7 && _initializer7();
          /**
           * @en
           * Size of each object in spriteFrames
           * @zh
           * 每个 SpriteFrame 的大小
           * @property {Size[]} spriteFrameSizes
           */
          _this.spriteFrameSizes = _initializer8 && _initializer8();
          return _this;
        }
        return TiledMapAsset;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class2.prototype, "tmxXmlStr", [serializable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "tsxFiles", [serializable, _dec2], function () {
        return [];
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "tsxFileNames", [serializable, _dec3], function () {
        return [];
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "spriteFrames", [serializable, _dec4], function () {
        return [];
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "imageLayerSpriteFrame", [serializable, _dec5], function () {
        return [];
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "imageLayerSpriteFrameNames", [serializable, _dec6], function () {
        return [];
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "spriteFrameNames", [serializable, _dec7], function () {
        return [];
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "spriteFrameSizes", [serializable, _dec8], function () {
        return [];
      })), _class2)) || _class));
    }
  };
});