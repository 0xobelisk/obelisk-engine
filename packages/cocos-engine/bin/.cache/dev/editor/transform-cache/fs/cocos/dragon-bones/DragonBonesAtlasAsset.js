System.register("q-bundled:///fs/cocos/dragon-bones/DragonBonesAtlasAsset.js", ["../../../virtual/internal%253Aconstants.js", "./ArmatureCache.js", "../core/index.js", "../asset/assets/index.js", "../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var JSB, ArmatureCache, cclegacy, _decorator, Asset, Texture2D, Node, _dec, _dec2, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, ccclass, serializable, type, DragonBonesAtlasAsset;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_ArmatureCacheJs) {
      ArmatureCache = _ArmatureCacheJs.ArmatureCache;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      _decorator = _coreIndexJs._decorator;
    }, function (_assetAssetsIndexJs) {
      Asset = _assetAssetsIndexJs.Asset;
      Texture2D = _assetAssetsIndexJs.Texture2D;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
    }],
    execute: function () {
      ({
        ccclass,
        serializable,
        type
      } = _decorator);
      /**
       * @en The skeleton atlas data of dragonBones.
       * @zh DragonBones 的骨骼纹理数据。
       * @class DragonBonesAtlasAsset
       * @extends Asset
       */
      _export("DragonBonesAtlasAsset", DragonBonesAtlasAsset = (_dec = ccclass('dragonBones.DragonBonesAtlasAsset'), _dec2 = type(Texture2D), _dec(_class = (_class2 = class DragonBonesAtlasAsset extends Asset {
        constructor() {
          super();
          /**
           * @en atlas of json file.
           * @zh 纹理图集的 json 文件。
           */
          this._atlasJson = _initializer && _initializer();
          /**
           * @en 2D Texture.
           * @zh 2D 纹理。
           */
          this._texture = _initializer2 && _initializer2();
          /**
           * @en Data with json format for Describing the atlas information.
           * @zh 描述图集信息的 json 数据。
           */
          this._atlasJsonData = _initializer3 && _initializer3();
          /**
           * @en Dragonbones instance of CCFactory.
           * @zh Dragonbones 工厂实例。
           */
          this._factory = null;
          /**
           * @en The texture atlas data.
           * @zh 贴图集数据。
           */
          this._textureAtlasData = _initializer4 && _initializer4();
          this._clear();
        }
        get atlasJson() {
          return this._atlasJson;
        }
        set atlasJson(value) {
          this._atlasJson = value;
          this._atlasJsonData = JSON.parse(this.atlasJson);
          this._clear();
        }
        /**
         * @en 2D texture.
         * @zh 2D 纹理。
         * @property {Texture2D} texture
         */
        get texture() {
          return this._texture;
        }
        set texture(value) {
          this._texture = value;
          this._clear();
        }
        /**
         * @en Create a new node with Dragonbones component.
         * @zh 创建一个附带龙骨组件的 node 节点。
         */
        createNode(callback) {
          const node = new Node(this.name);
          const armatureDisplay = node.addComponent('dragonBones.ArmatureDisplay');
          armatureDisplay.dragonAtlasAsset = this;
          return callback(null, node);
        }

        /**
         * @en Atlas resource initialization. Parse the original atlas data and atlas object into a
         * TextureAtlasData instance, and cache it to the factory.
         * @zh 图集资源初始化。将原始贴图集数据和贴图集对象解析为 TextureAtlasData 实例，并缓存到工厂中。
         */
        init(factory) {
          this._factory = factory;
          if (!this._atlasJsonData) {
            this._atlasJsonData = JSON.parse(this.atlasJson);
          }
          const atlasJsonObj = this._atlasJsonData;

          // If create by manual, uuid is empty.
          this._uuid = this._uuid || atlasJsonObj.name;
          if (this._textureAtlasData) {
            factory.addTextureAtlasData(this._textureAtlasData, this._uuid);
          } else {
            this._textureAtlasData = factory.parseTextureAtlasData(atlasJsonObj, this.texture, this._uuid);
          }
        }
        /**
         * @en Destroy altas assets.
         * @zh 销毁图集资源。
         */
        destroy() {
          this._clear();
          return super.destroy();
        }
        _clear() {
          if (JSB) return;
          if (this._factory) {
            ArmatureCache.sharedCache.resetArmature(this._uuid);
            this._factory.removeTextureAtlasData(this._uuid, true);
            this._factory.removeDragonBonesDataByUUID(this._uuid, true);
          }
          this._textureAtlasData = null;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_atlasJson", [serializable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_texture", [serializable, _dec2], function () {
        return null;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_atlasJsonData", [serializable], function () {
        return {};
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_textureAtlasData", [serializable], function () {
        return null;
      })), _class2)) || _class));
      cclegacy.internal.DragonBonesAtlasAsset = DragonBonesAtlasAsset;
    }
  };
});