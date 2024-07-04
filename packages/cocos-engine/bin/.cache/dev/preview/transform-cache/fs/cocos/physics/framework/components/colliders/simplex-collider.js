System.register("q-bundled:///fs/cocos/physics/framework/components/colliders/simplex-collider.js", ["../../../../core/data/decorators/index.js", "../../../../core/index.js", "./collider.js", "../../physics-enum.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, visible, type, editable, serializable, tooltip, Vec3, Collider, ESimplexType, EColliderType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _initializer, _initializer2, _class3, SimplexCollider;
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
      visible = _coreDataDecoratorsIndexJs.visible;
      type = _coreDataDecoratorsIndexJs.type;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_colliderJs) {
      Collider = _colliderJs.Collider;
    }, function (_physicsEnumJs) {
      ESimplexType = _physicsEnumJs.ESimplexType;
      EColliderType = _physicsEnumJs.EColliderType;
    }],
    execute: function () {
      /**
       * @en
       * Simplex collider, support point, line, triangle, tetrahedron.
       * @zh
       * 单纯形碰撞器，支持点、线、三角形、四面体。
       */
      _export("SimplexCollider", SimplexCollider = (_dec = ccclass('cc.SimplexCollider'), _dec2 = help('i18n:cc.SimplexCollider'), _dec3 = menu('Physics/SimplexCollider'), _dec4 = type(ESimplexType), _dec5 = tooltip('i18n:physics3d.collider.simplex_shapeType'), _dec6 = tooltip('i18n:physics3d.collider.simplex_vertex0'), _dec7 = visible(function () {
        return this._shapeType > 1;
      }), _dec8 = tooltip('i18n:physics3d.collider.simplex_vertex1'), _dec9 = visible(function () {
        return this._shapeType > 2;
      }), _dec10 = tooltip('i18n:physics3d.collider.simplex_vertex2'), _dec11 = visible(function () {
        return this._shapeType > 3;
      }), _dec12 = tooltip('i18n:physics3d.collider.simplex_vertex3'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Collider) {
        _inheritsLoose(SimplexCollider, _Collider);
        function SimplexCollider() {
          var _this;
          _this = _Collider.call(this, EColliderType.SIMPLEX) || this;
          /// PRIVATE PROPERTY ///
          _this._shapeType = _initializer && _initializer();
          _this._vertices = _initializer2 && _initializer2();
          return _this;
        }
        var _proto = SimplexCollider.prototype;
        _proto.updateVertices = function updateVertices() {
          if (this._shape) {
            this.shape.setVertices(this._vertices);
          }
        };
        _createClass(SimplexCollider, [{
          key: "shapeType",
          get:
          /// PUBLIC PROPERTY GETTER\SETTER ///

          function get() {
            return this._shapeType;
          },
          set: function set(v) {
            this._shapeType = v;
            if (this._shape) {
              this.shape.setShapeType(v);
            }
          }
        }, {
          key: "vertex0",
          get: function get() {
            return this._vertices[0];
          },
          set: function set(v) {
            Vec3.copy(this._vertices[0], v);
            this.updateVertices();
          }
        }, {
          key: "vertex1",
          get: function get() {
            return this._vertices[1];
          },
          set: function set(v) {
            Vec3.copy(this._vertices[1], v);
            this.updateVertices();
          }
        }, {
          key: "vertex2",
          get: function get() {
            return this._vertices[2];
          },
          set: function set(v) {
            Vec3.copy(this._vertices[2], v);
            this.updateVertices();
          }
        }, {
          key: "vertex3",
          get: function get() {
            return this._vertices[3];
          },
          set: function set(v) {
            Vec3.copy(this._vertices[3], v);
            this.updateVertices();
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
        }, {
          key: "vertices",
          get: function get() {
            return this._vertices;
          }
        }]);
        return SimplexCollider;
      }(Collider), _class3.ESimplexType = ESimplexType, _class3), (_applyDecoratedDescriptor(_class2.prototype, "shapeType", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "shapeType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "vertex0", [editable, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "vertex0"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "vertex1", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "vertex1"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "vertex2", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "vertex2"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "vertex3", [_dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "vertex3"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_shapeType", [serializable], function () {
        return ESimplexType.TETRAHEDRON;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_vertices", [serializable], function () {
        return [new Vec3(0, 0, 0), new Vec3(0, 0, 1), new Vec3(1, 0, 0), new Vec3(0, 1, 0)];
      })), _class2)) || _class) || _class) || _class) || _class));
      (function (_SimplexCollider) {})(SimplexCollider || _export("SimplexCollider", SimplexCollider = {}));
    }
  };
});