System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/mesh-collider.js", ["../../../../core/data/decorators/index.js", "./collider.js", "../../../../3d/assets/index.js", "../../physics-enum.js", "../../../../core/index.js", "../rigid-body.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, type, editable, serializable, tooltip, Collider, Mesh, EColliderType, ERigidBodyType, warnID, RigidBody, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, MeshCollider;
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
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_colliderJs) {
      Collider = _colliderJs.Collider;
    }, function (_dAssetsIndexJs) {
      Mesh = _dAssetsIndexJs.Mesh;
    }, function (_physicsEnumJs) {
      EColliderType = _physicsEnumJs.EColliderType;
      ERigidBodyType = _physicsEnumJs.ERigidBodyType;
    }, function (_coreIndexJs) {
      warnID = _coreIndexJs.warnID;
    }, function (_rigidBodyJs) {
      RigidBody = _rigidBodyJs.RigidBody;
    }],
    execute: function () {
      /**
       * @en
       * Triangle mesh collider component.
       * @zh
       * 三角网格碰撞器。
       */
      _export("MeshCollider", MeshCollider = (_dec = ccclass('cc.MeshCollider'), _dec2 = help('i18n:cc.MeshCollider'), _dec3 = menu('Physics/MeshCollider'), _dec4 = type(Mesh), _dec5 = tooltip('i18n:physics3d.collider.mesh_mesh'), _dec6 = tooltip('i18n:physics3d.collider.mesh_convex'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Collider) {
        _inheritsLoose(MeshCollider, _Collider);
        var _proto = MeshCollider.prototype;
        _proto.onEnable = function onEnable() {
          _Collider.prototype.onEnable.call(this);
          if (this.node) {
            var body = this.node.getComponent(RigidBody);
            if (body && body.isValid && body.type === ERigidBodyType.DYNAMIC && !this.convex) {
              warnID(9630, this.node.name);
            }
          }
        };
        function MeshCollider() {
          var _this;
          _this = _Collider.call(this, EColliderType.MESH) || this;
          _this._mesh = _initializer && _initializer();
          _this._convex = _initializer2 && _initializer2();
          return _this;
        }
        _createClass(MeshCollider, [{
          key: "mesh",
          get:
          /// PUBLIC PROPERTY GETTER\SETTER ///

          /**
           * @en
           * Gets or sets the mesh assets referenced by this collider.
           * @zh
           * 获取或设置此碰撞体引用的网格资源.
           */
          function get() {
            return this._mesh;
          },
          set: function set(value) {
            if (this._mesh === value) return;
            this._mesh = value;
            if (this._shape) this.shape.setMesh(this._mesh);
          }

          /**
           * @en
           * Gets or sets whether the collider replaces the mesh with a convex shape.
           * @zh
           * 获取或设置此碰撞体是否用凸形状代替网格.
           */
        }, {
          key: "convex",
          get: function get() {
            return this._convex;
          },
          set: function set(value) {
            if (this._convex === value) return;
            this._convex = value;
            if (this._shape && this._mesh) this.shape.setMesh(this._mesh);
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
        return MeshCollider;
      }(Collider), (_applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "mesh"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "convex", [editable, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "convex"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_mesh", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_convex", [serializable], function () {
        return false;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});