System.register("q-bundled:///fs/cocos/dragon-bones/CCFactory.js", ["../../../virtual/internal%253Aconstants.js", "@cocos/dragonbones-js", "../core/index.js", "./CCTextureData.js", "./CCSlot.js", "./CCArmatureDisplay.js", "../scene-graph/index.js", "../game/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, Armature, BaseObject, Animation, BaseFactory, DragonBones, Scheduler, System, _decorator, CCTextureAtlasData, CCSlot, CCArmatureDisplay, Node, director, Game, game, _dec, _class, _class2, ccclass, CCFactory;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_cocosDragonbonesJs) {
      Armature = _cocosDragonbonesJs.Armature;
      BaseObject = _cocosDragonbonesJs.BaseObject;
      Animation = _cocosDragonbonesJs.Animation;
      BaseFactory = _cocosDragonbonesJs.BaseFactory;
      DragonBones = _cocosDragonbonesJs.DragonBones;
    }, function (_coreIndexJs) {
      Scheduler = _coreIndexJs.Scheduler;
      System = _coreIndexJs.System;
      _decorator = _coreIndexJs._decorator;
    }, function (_CCTextureDataJs) {
      CCTextureAtlasData = _CCTextureDataJs.CCTextureAtlasData;
    }, function (_CCSlotJs) {
      CCSlot = _CCSlotJs.CCSlot;
    }, function (_CCArmatureDisplayJs) {
      CCArmatureDisplay = _CCArmatureDisplayJs.CCArmatureDisplay;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
      Game = _gameIndexJs.Game;
      game = _gameIndexJs.game;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      /**
       * DragonBones factory
       * @class CCFactory
       * @extends BaseFactory
       * @en Usually only one global factory instance is needed. The factory creates
       * Armature object by parsing DragonBonesData and TextureAtlasData instances,
       * and is responsible for global updating the Dragonbones component animation
       * and rendering data.
       * @zh 通常只需要一个全局工厂实例，工厂通过解析 DragonBonesData 和 TextureAtlasData
       * 实例来创建骨架，并负责全局的龙骨组件动画和渲染数据的更新。
      */
      _export("CCFactory", CCFactory = (_dec = ccclass('CCFactory'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseFactory) {
        _inheritsLoose(CCFactory, _BaseFactory);
        /**
         * @en
         * Get an CCFactory instance.
         * @zh
         * 获取一个 CCFactory 实例。
         * @method getInstance
         * @returns @en The global CCFactory instance object.
         *          @zh 返回全局的 CCFactory 实例对象。
         * @static
         * @example
         * let factory = CCFactory.getInstance();
        */
        CCFactory.getInstance = function getInstance() {
          if (!CCFactory._factory) {
            CCFactory._factory = new CCFactory();
          }
          return CCFactory._factory;
        }
        /**
         * @en The id value always 'CCFactory'.
         * @zh 拥有固定值 'CCFactory'。
         */;

        function CCFactory() {
          var _this;
          _this = _BaseFactory.call(this) || this;
          _this.id = void 0;
          /**
           * @en The uuid value always 'CCFactory'.
           * @zh 拥有固定值 'CCFactory'。
           */
          _this.uuid = void 0;
          /**
           * @en Restores the sorted CCSlot objects.
           * @zh 存储已排序好的插槽。
           */
          _this._slots = void 0;
          var eventManager = new CCArmatureDisplay();
          _this._dragonBones = new DragonBones(eventManager);
          if (director.getScheduler()) {
            game.on(Game.EVENT_RESTART, _this.onRestart, _assertThisInitialized(_this));
            _this.initUpdate();
          }
          _this.id = _this.uuid = 'CCFactory';
          return _this;
        }
        /**
         * @en Sets CCFactory object null when Restart game.
         * @zh 重启时需将工厂实例置空。
         */
        var _proto = CCFactory.prototype;
        _proto.onRestart = function onRestart() {
          CCFactory._factory = null;
        }

        /**
         * @en Initialize update schedule.
         * @zh 初始化更新计划。
         */;
        _proto.initUpdate = function initUpdate(dt) {
          // director.getScheduler().enableForTarget(this);
          Scheduler.enableForTarget(this);
          director.getScheduler().scheduleUpdate(this, System.Priority.HIGH, false);
        }
        /**
         * @en Trigger ArmatureDisplay components to update animation and render data.
         * @zh 触发 ArmatureDisplay 组件更新动画和渲染数据。
         */;
        _proto.update = function update(dt) {
          if (EDITOR_NOT_IN_PREVIEW) return;
          this._dragonBones.advanceTime(dt);
        }
        /**
         * @en Parser raw data to DragonBonesData.
         * @zh 从 raw data 解析出 DragonBonesData 数据。
         */;
        _proto.getDragonBonesDataByRawData = function getDragonBonesDataByRawData(rawData) {
          var dataParser = rawData instanceof ArrayBuffer ? BaseFactory._binaryParser : this._dataParser;
          return dataParser.parseDragonBonesData(rawData, 1.0);
        }
        /**
         * @en Build new armature with a new display.
         * @zh 创建骨架的显示数据。
         */
        // Build new armature with a new display.
        ;
        _proto.buildArmatureDisplay = function buildArmatureDisplay(armatureName, dragonBonesName, skinName, textureAtlasName) {
          var armature = this.buildArmature(armatureName, dragonBonesName, skinName, textureAtlasName);
          return armature ? armature._display : null;
        }

        // Build sub armature from an exist armature component.
        // It will share dragonAsset and dragonAtlasAsset.
        // But node can not share,or will cause render error.
        /**
         * @en Create a new node with Dragonbones component.
         * @zh 创建一个附带龙骨组件的 node 节点。
         */;
        _proto.createArmatureNode = function createArmatureNode(comp, armatureName, node) {
          node = node || new Node();
          var display = node.getComponent('dragonBones.ArmatureDisplay');
          if (!display) {
            display = node.addComponent('dragonBones.ArmatureDisplay');
          }
          node.name = armatureName;
          display._armatureName = armatureName;
          display._dragonAsset = comp.dragonAsset;
          display._dragonAtlasAsset = comp.dragonAtlasAsset;
          display._init();
          return display;
        };
        _proto._buildTextureAtlasData = function _buildTextureAtlasData(textureAtlasData, textureAtlas) {
          if (textureAtlasData) {
            textureAtlasData.renderTexture = textureAtlas;
          } else {
            textureAtlasData = BaseObject.borrowObject(CCTextureAtlasData);
          }
          return textureAtlasData;
        };
        _proto._sortSlots = function _sortSlots() {
          var slots = this._slots;
          var sortedSlots = [];
          for (var i = 0, l = slots.length; i < l; i++) {
            var slot = slots[i];
            var zOrder = slot._zOrder;
            var inserted = false;
            for (var j = sortedSlots.length - 1; j >= 0; j--) {
              if (zOrder >= sortedSlots[j]._zOrder) {
                sortedSlots.splice(j + 1, 0, slot);
                inserted = true;
                break;
              }
            }
            if (!inserted) {
              sortedSlots.unshift(slot);
            }
          }
          this._slots = sortedSlots;
        };
        _proto._buildArmature = function _buildArmature(dataPackage) {
          var armature = BaseObject.borrowObject(Armature);
          armature._skinData = dataPackage.skin;
          armature._animation = BaseObject.borrowObject(Animation);
          armature._animation._armature = armature;
          armature._animation.animations = dataPackage.armature.animations;
          armature._isChildArmature = false;

          // fixed dragonbones sort issue
          // armature._sortSlots = this._sortSlots;

          var display = new CCArmatureDisplay();
          armature.init(dataPackage.armature, display, display, this._dragonBones);
          return armature;
        };
        _proto._buildSlot = function _buildSlot(dataPackage, slotData, displays) {
          var slot = BaseObject.borrowObject(CCSlot);
          var display = slot;
          slot.init(slotData, displays, display, display);
          return slot;
        }
        /**
         * @en Gets DragonBonesData object by UUID.
         * @zh 通过 UUID 获取 DragonBonesData object。
         */;
        _proto.getDragonBonesDataByUUID = function getDragonBonesDataByUUID(uuid) {
          for (var name in this._dragonBonesDataMap) {
            if (name.indexOf(uuid) !== -1) {
              return this._dragonBonesDataMap[name];
            }
          }
          return null;
        }
        /**
         * @en Remove DragonBonesData object from cache by UUID.
         * @zh 通过 UUID 从缓存移除 DragonBonesData object。
         */;
        _proto.removeDragonBonesDataByUUID = function removeDragonBonesDataByUUID(uuid, disposeData) {
          if (disposeData === undefined) {
            disposeData = true;
          }
          for (var name in this._dragonBonesDataMap) {
            if (name.indexOf(uuid) === -1) continue;
            if (disposeData) {
              this._dragonBones.bufferObject(this._dragonBonesDataMap[name]);
            }
            delete this._dragonBonesDataMap[name];
          }
        };
        return CCFactory;
      }(BaseFactory), _class2._factory = null, _class2)) || _class));
    }
  };
});