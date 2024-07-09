System.register("q-bundled:///fs/cocos/physics-2d/framework/components/joints/slider-joint-2d.js", ["./joint-2d.js", "../../physics-types.js", "../../../../core/index.js", "../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var Joint2D, EJoint2DType, Vec2, toDegree, _decorator, CCFloat, CCBoolean, help, serializable, tooltip, type, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, tempVec2, ccclass, menu, property, SliderJoint2D;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
      Vec2 = _coreIndexJs.Vec2;
      toDegree = _coreIndexJs.toDegree;
      _decorator = _coreIndexJs._decorator;
      CCFloat = _coreIndexJs.CCFloat;
      CCBoolean = _coreIndexJs.CCBoolean;
    }, function (_coreDataDecoratorsIndexJs) {
      help = _coreDataDecoratorsIndexJs.help;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
    }],
    execute: function () {
      tempVec2 = new Vec2();
      ccclass = _decorator.ccclass;
      menu = _decorator.menu;
      property = _decorator.property;
      _export("SliderJoint2D", SliderJoint2D = (_dec = ccclass('cc.SliderJoint2D'), _dec2 = help('i18n:cc.Joint2D'), _dec3 = menu('Physics2D/Joints/SliderJoint2D'), _dec4 = type(CCFloat), _dec5 = tooltip('i18n:physics2d.joint.angle'), _dec6 = type(CCBoolean), _dec7 = tooltip('i18n:physics2d.joint.autoCalcAngle'), _dec8 = type(CCBoolean), _dec9 = tooltip('i18n:physics2d.joint.enableMotor'), _dec10 = type(CCFloat), _dec11 = tooltip('i18n:physics2d.joint.maxMotorForce'), _dec12 = type(CCFloat), _dec13 = tooltip('i18n:physics2d.joint.motorSpeed'), _dec14 = type(CCBoolean), _dec15 = tooltip('i18n:physics2d.joint.enableLimit'), _dec16 = type(CCFloat), _dec17 = tooltip('i18n:physics2d.joint.lowerLimit'), _dec18 = type(CCFloat), _dec19 = tooltip('i18n:physics2d.joint.upperLimit'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Joint2D) {
        _inheritsLoose(SliderJoint2D, _Joint2D);
        function SliderJoint2D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Joint2D.call.apply(_Joint2D, [this].concat(args)) || this;
          _this.TYPE = EJoint2DType.SLIDER;
          /// private properties
          _this._angle = _initializer && _initializer();
          _this._autoCalcAngle = _initializer2 && _initializer2();
          _this._enableMotor = _initializer3 && _initializer3();
          _this._maxMotorForce = _initializer4 && _initializer4();
          _this._motorSpeed = _initializer5 && _initializer5();
          _this._enableLimit = _initializer6 && _initializer6();
          _this._lowerLimit = _initializer7 && _initializer7();
          _this._upperLimit = _initializer8 && _initializer8();
          return _this;
        }
        _createClass(SliderJoint2D, [{
          key: "angle",
          get:
          /**
           * @en Slide direction.
           * @zh 滑动的方向。
           */
          function get() {
            if (this._autoCalcAngle) {
              if (this.connectedBody) {
                Vec2.subtract(tempVec2, this.connectedBody.node.worldPosition, this.node.worldPosition);
              } else {
                Vec2.subtract(tempVec2, new Vec2(0, 0), this.node.worldPosition);
              }
              this._angle = toDegree(Math.atan2(tempVec2.y, tempVec2.x));
            }
            return this._angle;
          },
          set: function set(v) {
            this._angle = v;
          }

          /**
           * @en Auto calculate slide direction according to the slide direction.
           * @zh 根据连接的两个刚体自动计算滑动方向。
           */
        }, {
          key: "autoCalcAngle",
          get: function get() {
            return this._autoCalcAngle;
          },
          set: function set(v) {
            this._autoCalcAngle = v;
          }

          /**
           * @en
           * Enable joint motor?
           * @zh
           * 是否开启关节马达？
           */
        }, {
          key: "enableMotor",
          get: function get() {
            return this._enableMotor;
          },
          set: function set(v) {
            this._enableMotor = v;
          }

          /**
           * @en
           * The maxium force can be applied to rigidbody to rearch the target motor speed.
           * @zh
           * 可以施加到刚体的最大力。
           */
        }, {
          key: "maxMotorForce",
          get: function get() {
            return this._maxMotorForce;
          },
          set: function set(v) {
            this._maxMotorForce = v;
            if (this._joint) {
              this._joint.setMaxMotorForce(v);
            }
          }

          /**
           * @en
           * The expected motor speed.
           * @zh
           * 期望的马达速度。
           */
        }, {
          key: "motorSpeed",
          get: function get() {
            return this._motorSpeed;
          },
          set: function set(v) {
            this._motorSpeed = v;
            if (this._joint) {
              this._joint.setMotorSpeed(v);
            }
          }

          /**
           * @en
           * Enable joint distance limit?
           * @zh
           * 是否开启关节的距离限制？
           */
        }, {
          key: "enableLimit",
          get: function get() {
            return this._enableLimit;
          },
          set: function set(v) {
            this._enableLimit = v;
          }

          /**
           * @en
           * The lower joint limit.
           * @zh
           * 刚体能够移动的最小值。
           */
        }, {
          key: "lowerLimit",
          get: function get() {
            return this._lowerLimit;
          },
          set: function set(v) {
            this._lowerLimit = v;
            if (this._joint) {
              this._joint.setLowerLimit(v);
            }
          }

          /**
           * @en
           * The lower joint limit.
           * @zh
           * 刚体能够移动的最大值。
           */
        }, {
          key: "upperLimit",
          get: function get() {
            return this._upperLimit;
          },
          set: function set(v) {
            this._upperLimit = v;
            if (this._joint) {
              this._joint.setUpperLimit(v);
            }
          }
        }]);
        return SliderJoint2D;
      }(Joint2D), (_applyDecoratedDescriptor(_class2.prototype, "angle", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "angle"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "autoCalcAngle", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "autoCalcAngle"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableMotor", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "enableMotor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxMotorForce", [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "maxMotorForce"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "motorSpeed", [_dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "motorSpeed"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableLimit", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "enableLimit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lowerLimit", [_dec16, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "lowerLimit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "upperLimit", [_dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "upperLimit"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_angle", [serializable], function () {
        return 0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_autoCalcAngle", [serializable], function () {
        return true;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_enableMotor", [serializable], function () {
        return false;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_maxMotorForce", [serializable], function () {
        return 1000;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_motorSpeed", [serializable], function () {
        return 1000;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_enableLimit", [serializable], function () {
        return false;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_lowerLimit", [serializable], function () {
        return 0;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_upperLimit", [serializable], function () {
        return 0;
      })), _class2)) || _class) || _class) || _class));
    }
  };
});