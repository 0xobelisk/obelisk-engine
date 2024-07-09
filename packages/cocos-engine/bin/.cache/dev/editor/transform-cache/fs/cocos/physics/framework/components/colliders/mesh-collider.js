System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/mesh-collider.js", ["../../../../core/data/decorators/index.js", "./collider.js", "../../../../3d/assets/index.js", "../../physics-enum.js", "../../../../core/index.js", "../rigid-body.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, type, editable, serializable, tooltip, Collider, Mesh, EColliderType, ERigidBodyType, warnID, RigidBody, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, MeshCollider;
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
      _export("MeshCollider", MeshCollider = (_dec = ccclass('cc.MeshCollider'), _dec2 = help('i18n:cc.MeshCollider'), _dec3 = menu('Physics/MeshCollider'), _dec4 = type(Mesh), _dec5 = tooltip('i18n:physics3d.collider.mesh_mesh'), _dec6 = tooltip('i18n:physics3d.collider.mesh_convex'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = class MeshCollider extends Collider {
        /// PUBLIC PROPERTY GETTER\SETTER ///

        /**
         * @en
         * Gets or sets the mesh assets referenced by this collider.
         * @zh
         * 获取或设置此碰撞体引用的网格资源.
         */
        get mesh() {
          return this._mesh;
        }
        set mesh(value) {
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
        get convex() {
          return this._convex;
        }
        set convex(value) {
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
        get shape() {
          return this._shape;
        }
        onEnable() {
          super.onEnable();
          if (this.node) {
            const body = this.node.getComponent(RigidBody);
            if (body && body.isValid && body.type === ERigidBodyType.DYNAMIC && !this.convex) {
              warnID(9630, this.node.name);
            }
          }
        }
        constructor() {
          super(EColliderType.MESH);
          this._mesh = _initializer && _initializer();
          this._convex = _initializer2 && _initializer2();
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "mesh"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "convex", [editable, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "convex"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_mesh", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_convex", [serializable], function () {
        return false;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});