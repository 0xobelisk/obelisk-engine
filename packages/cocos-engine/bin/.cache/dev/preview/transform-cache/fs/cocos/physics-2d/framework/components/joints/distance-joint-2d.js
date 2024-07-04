System.register("q-bundled:///fs/cocos/physics-2d/framework/components/joints/distance-joint-2d.js", ["./joint-2d.js", "../../physics-types.js", "../../../../core/index.js", "../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var Joint2D, EJoint2DType, CCBoolean, CCFloat, Vec3, _decorator, help, serializable, tooltip, type, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, ccclass, menu, property, DistanceJoint2D;
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
    setters: [function (_joint2dJs) {
      Joint2D = _joint2dJs.Joint2D;
    }, function (_physicsTypesJs) {
      EJoint2DType = _physicsTypesJs.EJoint2DType;
    }, function (_coreIndexJs) {
      CCBoolean = _coreIndexJs.CCBoolean;
      CCFloat = _coreIndexJs.CCFloat;
      Vec3 = _coreIndexJs.Vec3;
      _decorator = _coreIndexJs._decorator;
    }, function (_coreDataDecoratorsIndexJs) {
      help = _coreDataDecoratorsIndexJs.help;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      menu = _decorator.menu;
      property = _decorator.property;
      _export("DistanceJoint2D", DistanceJoint2D = (_dec = ccclass('cc.DistanceJoint2D'), _dec2 = help('i18n:cc.Joint2D'), _dec3 = menu('Physics2D/Joints/DistanceJoint2D'), _dec4 = type(CCFloat), _dec5 = tooltip('i18n:physics2d.joint.maxLength'), _dec6 = type(CCBoolean), _dec7 = tooltip('i18n:physics2d.joint.autoCalcDistance'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Joint2D) {
        _inheritsLoose(DistanceJoint2D, _Joint2D);
        function DistanceJoint2D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Joint2D.call.apply(_Joint2D, [this].concat(args)) || this;
          _this.TYPE = EJoint2DType.DISTANCE;
          /// private properties
          _this._maxLength = _initializer && _initializer();
          _this._autoCalcDistance = _initializer2 && _initializer2();
          return _this;
        }
        _createClass(DistanceJoint2D, [{
          key: "maxLength",
          get:
          /**
           * @en
           * The max length.
           * @zh
           * 最大长度。
           */
          function get() {
            if (this._autoCalcDistance) {
              if (this.connectedBody) {
                return Vec3.distance(this.node.worldPosition, this.connectedBody.node.worldPosition);
              } else {
                //if connected body is not set, use scene origin as connected body
                return Vec3.len(this.node.worldPosition);
              }
            }
            return this._maxLength;
          },
          set: function set(v) {
            this._maxLength = v;
            if (this._joint) {
              this._joint.setMaxLength(v);
            }
          }

          /**
           * @en
           * Auto calculate the distance between the connected two rigid bodies.
           * @zh
           * 自动计算关节连接的两个刚体间的距离。
           */
        }, {
          key: "autoCalcDistance",
          get: function get() {
            return this._autoCalcDistance;
          },
          set: function set(v) {
            this._autoCalcDistance = v;
          }
        }]);
        return DistanceJoint2D;
      }(Joint2D), (_applyDecoratedDescriptor(_class2.prototype, "maxLength", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "maxLength"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "autoCalcDistance", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "autoCalcDistance"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_maxLength", [serializable], function () {
        return 5;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_autoCalcDistance", [serializable], function () {
        return true;
      })), _class2)) || _class) || _class) || _class));
    }
  };
});