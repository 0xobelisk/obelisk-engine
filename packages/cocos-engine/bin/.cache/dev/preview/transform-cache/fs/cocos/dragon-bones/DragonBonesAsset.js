System.register("q-bundled:///fs/cocos/dragon-bones/DragonBonesAsset.js", ["../../../virtual/internal%253Aconstants.js", "../asset/assets/index.js", "./ArmatureCache.js", "../core/index.js", "./CCFactory.js", "../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, Asset, ArmatureCache, Enum, cclegacy, _decorator, CCFactory, Node, _dec, _class, _class2, _initializer, ccclass, serializable, DragonBonesAsset;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      /**
       * @en The skeleton data of dragonBones.
       * @zh dragonBones 的骨骼数据。
       * @class DragonBonesAsset
       * @extends Asset
       */
      _export("DragonBonesAsset", DragonBonesAsset = (_dec = ccclass('dragonBones.DragonBonesAsset'), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(DragonBonesAsset, _Asset);
        function DragonBonesAsset() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          /**
           * @en The string parsed from the DragonBonesAsset data in json format.
           * See http://developer.egret.com/cn/github/egret-docs/DB/dbLibs/dataFormat/index.html
           * @zh Json 格式的 DragonBones 骨骼数据被解析后的字符串。
           * 可查看 DragonBones 官方文档 http://developer.egret.com/cn/github/egret-docs/DB/dbLibs/dataFormat/index.html
           * @property {string} dragonBonesJson
           */
          _this._dragonBonesJson = _initializer && _initializer();
          _this._factory = null;
          _this._dragonBonesJsonData = void 0;
          _this._armaturesEnum = null;
          return _this;
        }
        var _proto = DragonBonesAsset.prototype;
        _proto.constructctor = function constructctor() {
          this.reset();
        }
        /**
         * @en Create a new node with Dragonbones component.
         * @zh 创建一个附带龙骨组件的 node 节点。
         */;
        _proto.createNode = function createNode(callback) {
          var node = new Node(this.name);
          var armatureDisplay = node.addComponent('dragonBones.ArmatureDisplay');
          armatureDisplay.dragonAsset = this;
          return callback(null, node);
        }
        /**
         * @en Reset DragonBonesAsset data and state.
         * @zh 重置 DragonBonesAsset 数据和状态。
         */;
        _proto.reset = function reset() {
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
         */;
        _proto.init = function init(factory, atlasUUID) {
          this._factory = factory || CCFactory.getInstance();
          if (!this._dragonBonesJsonData && this.dragonBonesJson) {
            this._dragonBonesJsonData = JSON.parse(this.dragonBonesJson);
          }
          var rawData = null;
          if (this._dragonBonesJsonData) {
            rawData = this._dragonBonesJsonData;
          } else {
            rawData = this._nativeAsset;
          }

          // If create by manual, uuid is empty.
          if (!this._uuid) {
            var dbData = this._factory.getDragonBonesDataByRawData(rawData);
            if (dbData) {
              this._uuid = dbData.name;
            } else {
              console.warn('dragonbones name is empty');
            }
          }
          var armatureKey = this._uuid + "#" + atlasUUID;
          var dragonBonesData = this._factory.getDragonBonesData(armatureKey);
          if (dragonBonesData) return armatureKey;

          // eslint-disable-next-line max-len
          this._factory.parseDragonBonesData(rawData instanceof ArrayBuffer ? rawData : rawData.buffer instanceof ArrayBuffer ? rawData.buffer : rawData, armatureKey);
          return armatureKey;
        }

        // EDITOR
        /**
         * @engineInternal Since v3.7.2, this is an engine private function.
         */;
        _proto.getArmatureEnum = function getArmatureEnum() {
          if (this._armaturesEnum) {
            return this._armaturesEnum;
          }
          this.init();
          var dragonBonesData = this._factory.getDragonBonesDataByUUID(this._uuid);
          if (dragonBonesData) {
            var armatureNames = dragonBonesData.armatureNames;
            var enumDef = {};
            for (var i = 0; i < armatureNames.length; i++) {
              var name = armatureNames[i];
              enumDef[name] = i;
            }
            return this._armaturesEnum = Enum(enumDef);
          }
          return null;
        }
        /**
         * @engineInternal Since v3.7.2, this is an engine private function.
         */;
        _proto.getAnimsEnum = function getAnimsEnum(armatureName) {
          this.init();
          var dragonBonesData = this._factory.getDragonBonesDataByUUID(this._uuid);
          if (dragonBonesData) {
            var armature = dragonBonesData.getArmature(armatureName);
            if (!armature) {
              return null;
            }
            var enumDef = {
              '<None>': 0
            };
            var anims = armature.animations;
            var i = 0;
            for (var animName in anims) {
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
         */;
        _proto.destroy = function destroy() {
          this._clear();
          return _Asset.prototype.destroy.call(this);
        };
        _proto._clear = function _clear() {
          if (this._factory) {
            ArmatureCache.sharedCache.resetArmature(this._uuid);
            this._factory.removeDragonBonesDataByUUID(this._uuid, true);
          }
        };
        _createClass(DragonBonesAsset, [{
          key: "dragonBonesJson",
          get: function get() {
            return this._dragonBonesJson;
          },
          set: function set(value) {
            this._dragonBonesJson = value;
            this._dragonBonesJsonData = JSON.parse(value);
            this.reset();
          }
        }]);
        return DragonBonesAsset;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_dragonBonesJson", [serializable], function () {
        return '';
      })), _class2)) || _class));
      cclegacy.internal.DragonBonesAsset = DragonBonesAsset;
    }
  };
});