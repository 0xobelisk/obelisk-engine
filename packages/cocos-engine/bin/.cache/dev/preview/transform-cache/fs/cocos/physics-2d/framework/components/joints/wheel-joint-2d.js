System.register("q-bundled:///fs/cocos/physics-2d/framework/components/joints/wheel-joint-2d.js", ["./joint-2d.js", "../../../../core/index.js", "../../physics-types.js", "../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var Joint2D, CCBoolean, CCFloat, _decorator, EJoint2DType, help, serializable, tooltip, type, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, ccclass, menu, property, WheelJoint2D;
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
    }, function (_coreIndexJs) {
      CCBoolean = _coreIndexJs.CCBoolean;
      CCFloat = _coreIndexJs.CCFloat;
      _decorator = _coreIndexJs._decorator;
    }, function (_physicsTypesJs) {
      EJoint2DType = _physicsTypesJs.EJoint2DType;
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
      _export("WheelJoint2D", WheelJoint2D = (_dec = ccclass('cc.WheelJoint2D'), _dec2 = help('i18n:cc.Joint2D'), _dec3 = menu('Physics2D/Joints/WheelJoint2D'), _dec4 = type(CCFloat), _dec5 = tooltip('i18n:physics2d.joint.angle'), _dec6 = type(CCBoolean), _dec7 = tooltip('i18n:physics2d.joint.enableMotor'), _dec8 = type(CCFloat), _dec9 = tooltip('i18n:physics2d.joint.maxMotorTorque'), _dec10 = type(CCFloat), _dec11 = tooltip('i18n:physics2d.joint.motorSpeed'), _dec12 = type(CCFloat), _dec13 = tooltip('i18n:physics2d.joint.frequency'), _dec14 = type(CCFloat), _dec15 = tooltip('i18n:physics2d.joint.dampingRatio'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Joint2D) {
        _inheritsLoose(WheelJoint2D, _Joint2D);
        function WheelJoint2D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Joint2D.call.apply(_Joint2D, [this].concat(args)) || this;
          _this.TYPE = EJoint2DType.WHEEL;
          /// private properties
          _this._angle = _initializer && _initializer();
          _this._enableMotor = _initializer2 && _initializer2();
          _this._maxMotorTorque = _initializer3 && _initializer3();
          _this._motorSpeed = _initializer4 && _initializer4();
          _this._frequency = _initializer5 && _initializer5();
          _this._dampingRatio = _initializer6 && _initializer6();
          return _this;
        }
        _createClass(WheelJoint2D, [{
          key: "angle",
          get:
          /**
           * @en Wheel susspension direction.
           * @zh 轮子震动方向。
           */
          function get() {
            return this._angle;
          },
          set: function set(v) {
            this._angle = v;
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
            if (this._joint) {
              this._joint.enableMotor(v);
            }
          }

          /**
           * @en
           * The maxium torque can be applied to rigidbody to rearch the target motor speed.
           * @zh
           * 可以施加到刚体的最大扭矩。
           */
        }, {
          key: "maxMotorTorque",
          get: function get() {
            return this._maxMotorTorque;
          },
          set: function set(v) {
            this._maxMotorTorque = v;
            if (this._joint) {
              this._joint.setMaxMotorTorque(v);
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
           * The spring frequency.
           * @zh
           * 弹性系数。
           */
        }, {
          key: "frequency",
          get: function get() {
            return this._frequency;
          },
          set: function set(v) {
            this._frequency = v;
            if (this._joint) {
              this._joint.setFrequency(v);
            }
          }

          /**
           * @en
           * The damping ratio.
           * @zh
           * 阻尼，表示关节变形后，恢复到初始状态受到的阻力。
           */
        }, {
          key: "dampingRatio",
          get: function get() {
            return this._dampingRatio;
          },
          set: function set(v) {
            this._dampingRatio = v;
            if (this._joint) {
              this._joint.setDampingRatio(v);
            }
          }
        }]);
        return WheelJoint2D;
      }(Joint2D), (_applyDecoratedDescriptor(_class2.prototype, "angle", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "angle"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableMotor", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "enableMotor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxMotorTorque", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "maxMotorTorque"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "motorSpeed", [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "motorSpeed"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "frequency", [_dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "frequency"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dampingRatio", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "dampingRatio"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_angle", [serializable], function () {
        return 90;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_enableMotor", [serializable], function () {
        return false;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_maxMotorTorque", [serializable], function () {
        return 1000;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_motorSpeed", [serializable], function () {
        return 0;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_frequency", [serializable], function () {
        return 5;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_dampingRatio", [serializable], function () {
        return 0.7;
      })), _class2)) || _class) || _class) || _class));
    }
  };
});