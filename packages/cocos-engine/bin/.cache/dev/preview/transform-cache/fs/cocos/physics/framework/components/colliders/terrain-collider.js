System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/terrain-collider.js", ["../../../../core/data/decorators/index.js", "./collider.js", "../../../../terrain/terrain-asset.js", "../../physics-enum.js", "../rigid-body.js", "../../../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, type, serializable, tooltip, Collider, TerrainAsset, EColliderType, ERigidBodyType, RigidBody, warnID, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, TerrainCollider;
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
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      menu = _coreDataDecoratorsIndexJs.menu;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_colliderJs) {
      Collider = _colliderJs.Collider;
    }, function (_terrainTerrainAssetJs) {
      TerrainAsset = _terrainTerrainAssetJs.TerrainAsset;
    }, function (_physicsEnumJs) {
      EColliderType = _physicsEnumJs.EColliderType;
      ERigidBodyType = _physicsEnumJs.ERigidBodyType;
    }, function (_rigidBodyJs) {
      RigidBody = _rigidBodyJs.RigidBody;
    }, function (_coreIndexJs) {
      warnID = _coreIndexJs.warnID;
    }],
    execute: function () {
      /**
       * @en
       * Terrain collider component.
       * @zh
       * 地形碰撞器。
       */
      _export("TerrainCollider", TerrainCollider = (_dec = ccclass('cc.TerrainCollider'), _dec2 = help('i18n:cc.TerrainCollider'), _dec3 = menu('Physics/TerrainCollider'), _dec4 = type(TerrainAsset), _dec5 = tooltip('i18n:physics3d.collider.terrain_terrain'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Collider) {
        _inheritsLoose(TerrainCollider, _Collider);
        var _proto = TerrainCollider.prototype;
        _proto.onEnable = function onEnable() {
          _Collider.prototype.onEnable.call(this);
          if (this.node) {
            var body = this.node.getComponent(RigidBody);
            if (body && body.isValid && body.type === ERigidBodyType.DYNAMIC) {
              warnID(9630, this.node.name);
            }
          }
        }

        /// PRIVATE PROPERTY ///
        ;

        function TerrainCollider() {
          var _this;
          _this = _Collider.call(this, EColliderType.TERRAIN) || this;
          _this._terrain = _initializer && _initializer();
          return _this;
        }
        _createClass(TerrainCollider, [{
          key: "terrain",
          get:
          /// PUBLIC PROPERTY GETTER\SETTER ///

          /**
           * @en
           * Gets or sets the terrain assets referenced by this collider.
           * @zh
           * 获取或设置此碰撞体引用的网格资源.
           */
          function get() {
            return this._terrain;
          },
          set: function set(value) {
            this._terrain = value;
            if (this._shape) this.shape.setTerrain(this._terrain);
          }

          /**
           * @en
           * Gets the wrapper object, through which the lowLevel instance can be accessed.
           * @zh
           * 获取封装对象，通过此对象可以访问到底层实例。
           */
        }, {
          key: "shape",
          get: function get() {
            return this._shape;
          }
        }]);
        return TerrainCollider;
      }(Collider), (_applyDecoratedDescriptor(_class2.prototype, "terrain", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "terrain"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_terrain", [serializable], function () {
        return null;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});