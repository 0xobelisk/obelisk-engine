System.register("q-bundled:///fs/cocos/dragon-bones/DragonBonesAsset.js", ["../../../virtual/internal%253Aconstants.js", "../asset/assets/index.js", "./ArmatureCache.js", "../core/index.js", "./CCFactory.js", "../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, Asset, ArmatureCache, Enum, cclegacy, _decorator, CCFactory, Node, _dec, _class, _class2, _initializer, ccclass, serializable, DragonBonesAsset;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_assetAssetsIndexJs) {
      Asset = _assetAssetsIndexJs.Asset;
    }, function (_ArmatureCacheJs) {
      ArmatureCache = _ArmatureCacheJs.ArmatureCache;
    }, function (_coreIndexJs) {
      Enum = _coreIndexJs.Enum;
      cclegacy = _coreIndexJs.cclegacy;
      _decorator = _coreIndexJs._decorator;
    }, function (_CCFactoryJs) {
      CCFactory = _CCFactoryJs.CCFactory;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
    }],
    execute: function () {
      ({
        ccclass,
        serializable
      } = _decorator);
      /**
       * @en The skeleton data of dragonBones.
       * @zh dragonBones 的骨骼数据。
       * @class DragonBonesAsset
       * @extends Asset
       */
      _export("DragonBonesAsset", DragonBonesAsset = (_dec = ccclass('dragonBones.DragonBonesAsset'), _dec(_class = (_class2 = class DragonBonesAsset extends Asset {
        constructor(...args) {
          super(...args);
          /**
           * @en The string parsed from the DragonBonesAsset data in json format.
           * See http://developer.egret.com/cn/github/egret-docs/DB/dbLibs/dataFormat/index.html
           * @zh Json 格式的 DragonBones 骨骼数据被解析后的字符串。
           * 可查看 DragonBones 官方文档 http://developer.egret.com/cn/github/egret-docs/DB/dbLibs/dataFormat/index.html
           * @property {string} dragonBonesJson
           */
          this._dragonBonesJson = _initializer && _initializer();
          this._factory = null;
          this._dragonBonesJsonData = void 0;
          this._armaturesEnum = null;
        }
        get dragonBonesJson() {
          return this._dragonBonesJson;
        }
        set dragonBonesJson(value) {
          this._dragonBonesJson = value;
          this._dragonBonesJsonData = JSON.parse(value);
          this.reset();
        }
        constructctor() {
          this.reset();
        }
        /**
         * @en Create a new node with Dragonbones component.
         * @zh 创建一个附带龙骨组件的 node 节点。
         */
        createNode(callback) {
          const node = new Node(this.name);
          const armatureDisplay = node.addComponent('dragonBones.ArmatureDisplay');
          armatureDisplay.dragonAsset = this;
          return callback(null, node);
        }
        /**
         * @en Reset DragonBonesAsset data and state.
         * @zh 重置 DragonBonesAsset 数据和状态。
         */
        reset() {
          this._clear();
          if (EDITOR_NOT_IN_PREVIEW) {
            this._armaturesEnum = null;
          }
        }
        /**
         * @en Initialize with altas uuid.
         * @zh 使用 uuid 初始化 DragonBonesAsset 资产数据。
         * @param factory   @en The global CCFactory instance object.
         *                  @zh 全局的 CCFactory 对象。
         * @param atlasUUID @en Atlas uuid. @zh Atlas uuid。
         */
        init(factory, atlasUUID) {
          this._factory = factory || CCFactory.getInstance();
          if (!this._dragonBonesJsonData && this.dragonBonesJson) {
            this._dragonBonesJsonData = JSON.parse(this.dragonBonesJson);
          }
          let rawData = null;
          if (this._dragonBonesJsonData) {
            rawData = this._dragonBonesJsonData;
          } else {
            rawData = this._nativeAsset;
          }

          // If create by manual, uuid is empty.
          if (!this._uuid) {
            const dbData = this._factory.getDragonBonesDataByRawData(rawData);
            if (dbData) {
              this._uuid = dbData.name;
            } else {
              console.warn('dragonbones name is empty');
            }
          }
          const armatureKey = `${this._uuid}#${atlasUUID}`;
          const dragonBonesData = this._factory.getDragonBonesData(armatureKey);
          if (dragonBonesData) return armatureKey;

          // eslint-disable-next-line max-len
          this._factory.parseDragonBonesData(rawData instanceof ArrayBuffer ? rawData : rawData.buffer instanceof ArrayBuffer ? rawData.buffer : rawData, armatureKey);
          return armatureKey;
        }

        // EDITOR
        /**
         * @engineInternal Since v3.7.2, this is an engine private function.
         */
        getArmatureEnum() {
          if (this._armaturesEnum) {
            return this._armaturesEnum;
          }
          this.init();
          const dragonBonesData = this._factory.getDragonBonesDataByUUID(this._uuid);
          if (dragonBonesData) {
            const armatureNames = dragonBonesData.armatureNames;
            const enumDef = {};
            for (let i = 0; i < armatureNames.length; i++) {
              const name = armatureNames[i];
              enumDef[name] = i;
            }
            return this._armaturesEnum = Enum(enumDef);
          }
          return null;
        }
        /**
         * @engineInternal Since v3.7.2, this is an engine private function.
         */
        getAnimsEnum(armatureName) {
          this.init();
          const dragonBonesData = this._factory.getDragonBonesDataByUUID(this._uuid);
          if (dragonBonesData) {
            const armature = dragonBonesData.getArmature(armatureName);
            if (!armature) {
              return null;
            }
            const enumDef = {
              '<None>': 0
            };
            const anims = armature.animations;
            let i = 0;
            for (const animName in anims) {
              // eslint-disable-next-line no-prototype-builtins
              if (anims.hasOwnProperty(animName)) {
                enumDef[animName] = i + 1;
                i++;
              }
            }
            return Enum(enumDef);
          }
          return null;
        }
        /**
         * @en Destroy DragonBonesAsset data.
         * @zh 销毁 DragonBonesAsset 资产数据。
         */
        destroy() {
          this._clear();
          return super.destroy();
        }
        _clear() {
          if (this._factory) {
            ArmatureCache.sharedCache.resetArmature(this._uuid);
            this._factory.removeDragonBonesDataByUUID(this._uuid, true);
          }
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_dragonBonesJson", [serializable], function () {
        return '';
      })), _class2)) || _class));
      cclegacy.internal.DragonBonesAsset = DragonBonesAsset;
    }
  };
});