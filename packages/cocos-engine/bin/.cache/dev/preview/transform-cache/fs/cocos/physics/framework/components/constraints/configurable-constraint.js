System.register("q-bundled:///fs/cocos/physics/framework/components/constraints/configurable-constraint.js", ["../../../../core/data/decorators/index.js", "../../../../../../virtual/internal%253Aconstants.js", "./constraint.js", "../../../../core/index.js", "../../physics-enum.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, menu, serializable, formerlySerializedAs, type, tooltip, group, EDITOR_NOT_IN_PREVIEW, Constraint, Vec3, CCFloat, CCBoolean, EConstraintType, EConstraintMode, EDriverMode, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _class4, _class5, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _initializer23, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _class7, _class8, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _class10, _class11, _initializer30, _initializer31, _initializer32, _initializer33, _initializer34, _initializer35, _dec84, _dec85, _dec86, _dec87, _dec88, _dec89, _dec90, _dec91, _dec92, _dec93, _dec94, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _dec101, _dec102, _dec103, _dec104, _dec105, _dec106, _dec107, _dec108, _dec109, _dec110, _dec111, _dec112, _class13, _class14, _initializer36, _initializer37, _initializer38, _initializer39, _initializer40, _initializer41, _initializer42, _initializer43, _initializer44, _initializer45, _initializer46, LinearLimitSettings, AngularLimitSettings, LinearDriverSettings, AngularDriverSettings, ConfigurableConstraint;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      menu = _coreDataDecoratorsIndexJs.menu;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      formerlySerializedAs = _coreDataDecoratorsIndexJs.formerlySerializedAs;
      type = _coreDataDecoratorsIndexJs.type;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      group = _coreDataDecoratorsIndexJs.group;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_constraintJs) {
      Constraint = _constraintJs.Constraint;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      CCFloat = _coreIndexJs.CCFloat;
      CCBoolean = _coreIndexJs.CCBoolean;
    }, function (_physicsEnumJs) {
      EConstraintType = _physicsEnumJs.EConstraintType;
      EConstraintMode = _physicsEnumJs.EConstraintMode;
      EDriverMode = _physicsEnumJs.EDriverMode;
    }],
    execute: function () {
      /**
       * @en The linear limit settings of the configurable constraint.
       * @zh 可配置约束的线性限制设置。
       */
      _export("LinearLimitSettings", LinearLimitSettings = (_dec = ccclass('cc.LinearLimitSettings'), _dec2 = type(EConstraintMode), _dec3 = tooltip('i18n:physics3d.constraint.linearLimit.xMotion'), _dec4 = type(EConstraintMode), _dec5 = tooltip('i18n:physics3d.constraint.linearLimit.yMotion'), _dec6 = type(EConstraintMode), _dec7 = tooltip('i18n:physics3d.constraint.linearLimit.zMotion'), _dec8 = type(Vec3), _dec9 = tooltip('i18n:physics3d.constraint.linearLimit.upper'), _dec10 = type(Vec3), _dec11 = tooltip('i18n:physics3d.constraint.linearLimit.lower'), _dec12 = type(CCFloat), _dec13 = tooltip('i18n:physics3d.constraint.linearLimit.restitution'), _dec14 = type(CCBoolean), _dec15 = tooltip('i18n:physics3d.constraint.linearLimit.enableSoftConstraint'), _dec16 = group({
        id: 'SoftConstraint',
        name: 'SoftConstraintSettings',
        style: 'section'
      }), _dec17 = type(CCFloat), _dec18 = group({
        id: 'SoftConstraint',
        name: 'SoftConstraintSettings'
      }), _dec19 = tooltip('i18n:physics3d.constraint.linearLimit.stiffness'), _dec20 = type(CCFloat), _dec21 = tooltip('i18n:physics3d.constraint.linearLimit.damping'), _dec22 = group({
        id: 'SoftConstraint',
        name: 'SoftConstraintSettings'
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function LinearLimitSettings(configurableConstraint) {
          this._xMotion = _initializer && _initializer();
          this._yMotion = _initializer2 && _initializer2();
          this._zMotion = _initializer3 && _initializer3();
          this._upper = _initializer4 && _initializer4();
          this._lower = _initializer5 && _initializer5();
          this._enableSoftConstraint = _initializer6 && _initializer6();
          this._bounciness = _initializer7 && _initializer7();
          // restitution [0,1]
          this._stiffness = _initializer8 && _initializer8();
          this._damping = _initializer9 && _initializer9();
          this._impl = void 0;
          this._impl = configurableConstraint;
        }
        _createClass(LinearLimitSettings, [{
          key: "xMotion",
          get: function get() {
            return this._xMotion;
          },
          set: function set(v) {
            this._xMotion = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setConstraintMode(0, v);
            }
          }
        }, {
          key: "yMotion",
          get: function get() {
            return this._yMotion;
          },
          set: function set(v) {
            this._yMotion = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setConstraintMode(1, v);
            }
          }
        }, {
          key: "zMotion",
          get: function get() {
            return this._zMotion;
          },
          set: function set(v) {
            this._zMotion = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setConstraintMode(2, v);
            }
          }
        }, {
          key: "upper",
          get: function get() {
            return this._upper;
          },
          set: function set(v) {
            Vec3.copy(this._upper, v);
            if (!EDITOR_NOT_IN_PREVIEW) {
              var lower = this.lower;
              this._impl.setLinearLimit(0, lower.x, v.x);
              this._impl.setLinearLimit(1, lower.y, v.y);
              this._impl.setLinearLimit(2, lower.z, v.z);
            }
          }
        }, {
          key: "lower",
          get: function get() {
            return this._lower;
          },
          set: function set(v) {
            Vec3.copy(this._lower, v);
            if (!EDITOR_NOT_IN_PREVIEW) {
              var upper = this.upper;
              this._impl.setLinearLimit(0, v.x, upper.x);
              this._impl.setLinearLimit(1, v.y, upper.y);
              this._impl.setLinearLimit(2, v.z, upper.z);
            }
          }
        }, {
          key: "restitution",
          get: function get() {
            return this._bounciness;
          },
          set: function set(v) {
            this._bounciness = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setLinearRestitution(v);
            }
          }
        }, {
          key: "enableSoftConstraint",
          get: function get() {
            return this._enableSoftConstraint;
          },
          set: function set(v) {
            this._enableSoftConstraint = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setLinearSoftConstraint(v);
            }
          }
        }, {
          key: "stiffness",
          get: function get() {
            return this._stiffness;
          },
          set: function set(v) {
            this._stiffness = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setLinearStiffness(v);
            }
          }
        }, {
          key: "damping",
          get: function get() {
            return this._damping;
          },
          set: function set(v) {
            this._damping = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setLinearDamping(v);
            }
          }
        }, {
          key: "impl",
          set:
          /**
           * @engineInternal
           */
          function set(v) {
            this._impl = v;
          }
        }]);
        return LinearLimitSettings;
      }(), (_applyDecoratedDescriptor(_class2.prototype, "xMotion", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "xMotion"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "yMotion", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "yMotion"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "zMotion", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "zMotion"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "upper", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "upper"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lower", [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "lower"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "restitution", [_dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "restitution"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableSoftConstraint", [_dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "enableSoftConstraint"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "stiffness", [_dec17, _dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "stiffness"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "damping", [_dec20, _dec21, _dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "damping"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_xMotion", [serializable], function () {
        return EConstraintMode.FREE;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_yMotion", [serializable], function () {
        return EConstraintMode.FREE;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_zMotion", [serializable], function () {
        return EConstraintMode.FREE;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_upper", [serializable], function () {
        return new Vec3();
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_lower", [serializable], function () {
        return new Vec3();
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_enableSoftConstraint", [serializable], function () {
        return false;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_bounciness", [serializable], function () {
        return 0;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_stiffness", [serializable], function () {
        return 0;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_damping", [serializable], function () {
        return 0;
      })), _class2)) || _class));
      /**
       * @en The angular limit settings of the configurable constraint.
       * @zh 可配置约束的角度限制设置。
       */
      _export("AngularLimitSettings", AngularLimitSettings = (_dec23 = ccclass('cc.AngularLimitSettings'), _dec24 = type(EConstraintMode), _dec25 = tooltip('i18n:physics3d.constraint.angularLimit.twistMotion'), _dec26 = type(EConstraintMode), _dec27 = tooltip('i18n:physics3d.constraint.angularLimit.swingMotion1'), _dec28 = type(EConstraintMode), _dec29 = tooltip('i18n:physics3d.constraint.angularLimit.swingMotion2'), _dec30 = type(CCFloat), _dec31 = tooltip('i18n:physics3d.constraint.angularLimit.twistExtent'), _dec32 = type(CCFloat), _dec33 = tooltip('i18n:physics3d.constraint.angularLimit.swingExtent1'), _dec34 = type(CCFloat), _dec35 = tooltip('i18n:physics3d.constraint.angularLimit.swingExtent2'), _dec36 = type(CCFloat), _dec37 = tooltip('i18n:physics3d.constraint.angularLimit.twistRestitution'), _dec38 = type(CCFloat), _dec39 = tooltip('i18n:physics3d.constraint.angularLimit.swingRestitution'), _dec40 = type(CCBoolean), _dec41 = group({
        id: 'SoftConstraint',
        name: 'SoftConstraintSettings'
      }), _dec42 = tooltip('i18n:physics3d.constraint.angularLimit.enableSoftConstraintTwist'), _dec43 = type(CCFloat), _dec44 = group({
        id: 'SoftConstraint',
        name: 'SoftConstraintSettings'
      }), _dec45 = tooltip('i18n:physics3d.constraint.angularLimit.twistStiffness'), _dec46 = type(CCFloat), _dec47 = group({
        id: 'SoftConstraint',
        name: 'SoftConstraintSettings'
      }), _dec48 = tooltip('i18n:physics3d.constraint.angularLimit.twistDamping'), _dec49 = type(CCBoolean), _dec50 = group({
        id: 'SoftConstraint',
        name: 'SoftConstraintSettings'
      }), _dec51 = tooltip('i18n:physics3d.constraint.angularLimit.enableSoftConstraintSwing'), _dec52 = type(CCFloat), _dec53 = group({
        id: 'SoftConstraint',
        name: 'SoftConstraintSettings'
      }), _dec54 = tooltip('i18n:physics3d.constraint.angularLimit.swingStiffness'), _dec55 = type(CCFloat), _dec56 = group({
        id: 'SoftConstraint',
        name: 'SoftConstraintSettings'
      }), _dec57 = tooltip('i18n:physics3d.constraint.angularLimit.swingDamping'), _dec23(_class4 = (_class5 = /*#__PURE__*/function () {
        function AngularLimitSettings(configurableConstraint) {
          this._swing1Motion = _initializer10 && _initializer10();
          this._swing2Motion = _initializer11 && _initializer11();
          this._twistMotion = _initializer12 && _initializer12();
          this._twistExtent = _initializer13 && _initializer13();
          this._swingExtent1 = _initializer14 && _initializer14();
          this._swingExtent2 = _initializer15 && _initializer15();
          this._enableSoftConstraintSwing = _initializer16 && _initializer16();
          this._swingBounciness = _initializer17 && _initializer17();
          this._swingStiffness = _initializer18 && _initializer18();
          this._swingDamping = _initializer19 && _initializer19();
          this._enableSoftConstraintTwist = _initializer20 && _initializer20();
          this._twistBounciness = _initializer21 && _initializer21();
          this._twistStiffness = _initializer22 && _initializer22();
          this._twistDamping = _initializer23 && _initializer23();
          this._impl = void 0;
          this._impl = configurableConstraint;
        }
        _createClass(AngularLimitSettings, [{
          key: "twistMotion",
          get: function get() {
            return this._twistMotion;
          },
          set: function set(v) {
            this._twistMotion = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setConstraintMode(3, v);
            }
          }
        }, {
          key: "swingMotion1",
          get: function get() {
            return this._swing1Motion;
          },
          set: function set(v) {
            this._swing1Motion = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setConstraintMode(4, v);
            }
          }
        }, {
          key: "swingMotion2",
          get: function get() {
            return this._swing2Motion;
          },
          set: function set(v) {
            this._swing2Motion = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setConstraintMode(5, v);
            }
          }
        }, {
          key: "twistExtent",
          get: function get() {
            return this._twistExtent;
          },
          set: function set(v) {
            this._twistExtent = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setAngularExtent(v, this.swingExtent1, this.swingExtent2);
            }
          }
        }, {
          key: "swingExtent1",
          get: function get() {
            return this._swingExtent1;
          },
          set: function set(v) {
            this._swingExtent1 = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setAngularExtent(this.twistExtent, v, this.swingExtent2);
            }
          }
        }, {
          key: "swingExtent2",
          get: function get() {
            return this._swingExtent2;
          },
          set: function set(v) {
            this._swingExtent2 = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setAngularExtent(this.twistExtent, this.swingExtent1, v);
            }
          }
        }, {
          key: "twistRestitution",
          get: function get() {
            return this._twistBounciness;
          },
          set: function set(v) {
            this._twistBounciness = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setTwistRestitution(v);
            }
          }
        }, {
          key: "swingRestitution",
          get: function get() {
            return this._swingBounciness;
          },
          set: function set(v) {
            this._swingBounciness = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setSwingRestitution(v);
            }
          }
        }, {
          key: "enableSoftConstraintTwist",
          get: function get() {
            return this._enableSoftConstraintTwist;
          },
          set: function set(v) {
            this._enableSoftConstraintTwist = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setTwistSoftConstraint(v);
            }
          }
        }, {
          key: "twistStiffness",
          get: function get() {
            return this._twistStiffness;
          },
          set: function set(v) {
            this._twistStiffness = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setTwistStiffness(v);
            }
          }
        }, {
          key: "twistDamping",
          get: function get() {
            return this._twistDamping;
          },
          set: function set(v) {
            this._twistDamping = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setTwistDamping(v);
            }
          }
        }, {
          key: "enableSoftConstraintSwing",
          get: function get() {
            return this._enableSoftConstraintSwing;
          },
          set: function set(v) {
            this._enableSoftConstraintSwing = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setSwingSoftConstraint(v);
            }
          }
        }, {
          key: "swingStiffness",
          get: function get() {
            return this._swingStiffness;
          },
          set: function set(v) {
            this._swingStiffness = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setSwingStiffness(v);
            }
          }
        }, {
          key: "swingDamping",
          get: function get() {
            return this._swingDamping;
          },
          set: function set(v) {
            this._swingDamping = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setSwingDamping(v);
            }
          }
        }, {
          key: "impl",
          set:
          /**
           * @engineInternal
           */
          function set(v) {
            this._impl = v;
          }
        }]);
        return AngularLimitSettings;
      }(), (_applyDecoratedDescriptor(_class5.prototype, "twistMotion", [_dec24, _dec25], Object.getOwnPropertyDescriptor(_class5.prototype, "twistMotion"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingMotion1", [_dec26, _dec27], Object.getOwnPropertyDescriptor(_class5.prototype, "swingMotion1"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingMotion2", [_dec28, _dec29], Object.getOwnPropertyDescriptor(_class5.prototype, "swingMotion2"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "twistExtent", [_dec30, _dec31], Object.getOwnPropertyDescriptor(_class5.prototype, "twistExtent"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingExtent1", [_dec32, _dec33], Object.getOwnPropertyDescriptor(_class5.prototype, "swingExtent1"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingExtent2", [_dec34, _dec35], Object.getOwnPropertyDescriptor(_class5.prototype, "swingExtent2"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "twistRestitution", [_dec36, _dec37], Object.getOwnPropertyDescriptor(_class5.prototype, "twistRestitution"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingRestitution", [_dec38, _dec39], Object.getOwnPropertyDescriptor(_class5.prototype, "swingRestitution"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "enableSoftConstraintTwist", [_dec40, _dec41, _dec42], Object.getOwnPropertyDescriptor(_class5.prototype, "enableSoftConstraintTwist"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "twistStiffness", [_dec43, _dec44, _dec45], Object.getOwnPropertyDescriptor(_class5.prototype, "twistStiffness"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "twistDamping", [_dec46, _dec47, _dec48], Object.getOwnPropertyDescriptor(_class5.prototype, "twistDamping"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "enableSoftConstraintSwing", [_dec49, _dec50, _dec51], Object.getOwnPropertyDescriptor(_class5.prototype, "enableSoftConstraintSwing"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingStiffness", [_dec52, _dec53, _dec54], Object.getOwnPropertyDescriptor(_class5.prototype, "swingStiffness"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "swingDamping", [_dec55, _dec56, _dec57], Object.getOwnPropertyDescriptor(_class5.prototype, "swingDamping"), _class5.prototype), _initializer10 = _applyDecoratedInitializer(_class5.prototype, "_swing1Motion", [serializable], function () {
        return EConstraintMode.FREE;
      }), _initializer11 = _applyDecoratedInitializer(_class5.prototype, "_swing2Motion", [serializable], function () {
        return EConstraintMode.FREE;
      }), _initializer12 = _applyDecoratedInitializer(_class5.prototype, "_twistMotion", [serializable], function () {
        return EConstraintMode.FREE;
      }), _initializer13 = _applyDecoratedInitializer(_class5.prototype, "_twistExtent", [serializable], function () {
        return 0;
      }), _initializer14 = _applyDecoratedInitializer(_class5.prototype, "_swingExtent1", [serializable], function () {
        return 0;
      }), _initializer15 = _applyDecoratedInitializer(_class5.prototype, "_swingExtent2", [serializable], function () {
        return 0;
      }), _initializer16 = _applyDecoratedInitializer(_class5.prototype, "_enableSoftConstraintSwing", [serializable], function () {
        return false;
      }), _initializer17 = _applyDecoratedInitializer(_class5.prototype, "_swingBounciness", [serializable], function () {
        return 0;
      }), _initializer18 = _applyDecoratedInitializer(_class5.prototype, "_swingStiffness", [serializable], function () {
        return 0;
      }), _initializer19 = _applyDecoratedInitializer(_class5.prototype, "_swingDamping", [serializable], function () {
        return 0;
      }), _initializer20 = _applyDecoratedInitializer(_class5.prototype, "_enableSoftConstraintTwist", [serializable], function () {
        return false;
      }), _initializer21 = _applyDecoratedInitializer(_class5.prototype, "_twistBounciness", [serializable], function () {
        return 0;
      }), _initializer22 = _applyDecoratedInitializer(_class5.prototype, "_twistStiffness", [serializable], function () {
        return 0;
      }), _initializer23 = _applyDecoratedInitializer(_class5.prototype, "_twistDamping", [serializable], function () {
        return 0;
      })), _class5)) || _class4));
      /**
       * @en The linear driver settings of the configurable constraint.
       * @zh 可配置约束的线性驱动器设置。
       */
      _export("LinearDriverSettings", LinearDriverSettings = (_dec58 = ccclass('cc.LinearDriverSettings'), _dec59 = type(EDriverMode), _dec60 = tooltip('i18n:physics3d.constraint.linearDriver.xMode'), _dec61 = type(EDriverMode), _dec62 = tooltip('i18n:physics3d.constraint.linearDriver.yMode'), _dec63 = type(EDriverMode), _dec64 = tooltip('i18n:physics3d.constraint.linearDriver.zMode'), _dec65 = type(Vec3), _dec66 = tooltip('i18n:physics3d.constraint.linearDriver.targetPosition'), _dec67 = type(Vec3), _dec68 = tooltip('i18n:physics3d.constraint.linearDriver.targetVelocity'), _dec69 = type(CCFloat), _dec70 = tooltip('i18n:physics3d.constraint.linearDriver.strength'), _dec58(_class7 = (_class8 = /*#__PURE__*/function () {
        function LinearDriverSettings(configurableConstraint) {
          this._target = _initializer24 && _initializer24();
          this._velocity = _initializer25 && _initializer25();
          this._xDrive = _initializer26 && _initializer26();
          this._yDrive = _initializer27 && _initializer27();
          this._zDrive = _initializer28 && _initializer28();
          this._strength = _initializer29 && _initializer29();
          this._impl = void 0;
          this._impl = configurableConstraint;
        }
        _createClass(LinearDriverSettings, [{
          key: "xDrive",
          get: function get() {
            return this._xDrive;
          },
          set: function set(v) {
            this._xDrive = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setDriverMode(0, v);
            }
          }
        }, {
          key: "yDrive",
          get: function get() {
            return this._yDrive;
          },
          set: function set(v) {
            this._yDrive = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setDriverMode(1, v);
            }
          }
        }, {
          key: "zDrive",
          get: function get() {
            return this._zDrive;
          },
          set: function set(v) {
            this._zDrive = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setDriverMode(2, v);
            }
          }
        }, {
          key: "targetPosition",
          get: function get() {
            return this._target;
          },
          set: function set(v) {
            Vec3.copy(this._target, v);
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setLinearMotorTarget(v);
            }
          }
        }, {
          key: "targetVelocity",
          get: function get() {
            return this._velocity;
          },
          set: function set(v) {
            Vec3.copy(this._velocity, v);
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setLinearMotorVelocity(v);
            }
          }
        }, {
          key: "strength",
          get: function get() {
            return this._strength;
          },
          set: function set(v) {
            this._strength = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setLinearMotorForceLimit(v);
            }
          }
        }, {
          key: "impl",
          set:
          /**
           * @engineInternal
           */
          function set(v) {
            this._impl = v;
          }
        }]);
        return LinearDriverSettings;
      }(), (_applyDecoratedDescriptor(_class8.prototype, "xDrive", [_dec59, _dec60], Object.getOwnPropertyDescriptor(_class8.prototype, "xDrive"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "yDrive", [_dec61, _dec62], Object.getOwnPropertyDescriptor(_class8.prototype, "yDrive"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "zDrive", [_dec63, _dec64], Object.getOwnPropertyDescriptor(_class8.prototype, "zDrive"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "targetPosition", [_dec65, _dec66], Object.getOwnPropertyDescriptor(_class8.prototype, "targetPosition"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "targetVelocity", [_dec67, _dec68], Object.getOwnPropertyDescriptor(_class8.prototype, "targetVelocity"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "strength", [_dec69, _dec70], Object.getOwnPropertyDescriptor(_class8.prototype, "strength"), _class8.prototype), _initializer24 = _applyDecoratedInitializer(_class8.prototype, "_target", [serializable], function () {
        return new Vec3();
      }), _initializer25 = _applyDecoratedInitializer(_class8.prototype, "_velocity", [serializable], function () {
        return new Vec3();
      }), _initializer26 = _applyDecoratedInitializer(_class8.prototype, "_xDrive", [serializable], function () {
        return EDriverMode.DISABLED;
      }), _initializer27 = _applyDecoratedInitializer(_class8.prototype, "_yDrive", [serializable], function () {
        return EDriverMode.DISABLED;
      }), _initializer28 = _applyDecoratedInitializer(_class8.prototype, "_zDrive", [serializable], function () {
        return EDriverMode.DISABLED;
      }), _initializer29 = _applyDecoratedInitializer(_class8.prototype, "_strength", [serializable], function () {
        return 0;
      })), _class8)) || _class7));
      /**
       * @en The angular driver settings of the configurable constraint.
       * @zh 可配置约束的角度驱动器设置。
       */
      _export("AngularDriverSettings", AngularDriverSettings = (_dec71 = ccclass('cc.AngularDriverSettings'), _dec72 = type(EDriverMode), _dec73 = tooltip('i18n:physics3d.constraint.angularDriver.twistMode'), _dec74 = type(EDriverMode), _dec75 = tooltip('i18n:physics3d.constraint.angularDriver.swingMode1'), _dec76 = type(EDriverMode), _dec77 = tooltip('i18n:physics3d.constraint.angularDriver.swingMode2'), _dec78 = type(Vec3), _dec79 = tooltip('i18n:physics3d.constraint.angularDriver.targetOrientation'), _dec80 = type(Vec3), _dec81 = tooltip('i18n:physics3d.constraint.angularDriver.targetAngularVelocity'), _dec82 = type(CCFloat), _dec83 = tooltip('i18n:physics3d.constraint.angularDriver.strength'), _dec71(_class10 = (_class11 = /*#__PURE__*/function () {
        function AngularDriverSettings(configurableConstraint) {
          this._swingDrive1 = _initializer30 && _initializer30();
          this._swingDrive2 = _initializer31 && _initializer31();
          this._twistDrive = _initializer32 && _initializer32();
          this._targetOrientation = _initializer33 && _initializer33();
          this._targetVelocity = _initializer34 && _initializer34();
          this._strength = _initializer35 && _initializer35();
          this._impl = void 0;
          this._impl = configurableConstraint;
        }
        _createClass(AngularDriverSettings, [{
          key: "twistDrive",
          get: function get() {
            return this._twistDrive;
          },
          set: function set(v) {
            this._twistDrive = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setDriverMode(3, v);
            }
          }
        }, {
          key: "swingDrive1",
          get: function get() {
            return this._swingDrive1;
          },
          set: function set(v) {
            this._swingDrive1 = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setDriverMode(4, v);
            }
          }
        }, {
          key: "swingDrive2",
          get: function get() {
            return this._swingDrive2;
          },
          set: function set(v) {
            this._swingDrive2 = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setDriverMode(5, v);
            }
          }
        }, {
          key: "targetOrientation",
          get: function get() {
            return this._targetOrientation;
          },
          set: function set(v) {
            Vec3.copy(this._targetOrientation, v);
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setAngularMotorTarget(v);
            }
          }
        }, {
          key: "targetVelocity",
          get: function get() {
            return this._targetVelocity;
          },
          set: function set(v) {
            Vec3.copy(this._targetVelocity, v);
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setAngularMotorVelocity(v);
            }
          }
        }, {
          key: "strength",
          get: function get() {
            return this._strength;
          },
          set: function set(v) {
            this._strength = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this._impl.setAngularMotorForceLimit(v);
            }
          }
        }, {
          key: "impl",
          set:
          /**
           * @engineInternal
           */
          function set(v) {
            this._impl = v;
          }
        }]);
        return AngularDriverSettings;
      }(), (_applyDecoratedDescriptor(_class11.prototype, "twistDrive", [_dec72, _dec73], Object.getOwnPropertyDescriptor(_class11.prototype, "twistDrive"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "swingDrive1", [_dec74, _dec75], Object.getOwnPropertyDescriptor(_class11.prototype, "swingDrive1"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "swingDrive2", [_dec76, _dec77], Object.getOwnPropertyDescriptor(_class11.prototype, "swingDrive2"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "targetOrientation", [_dec78, _dec79], Object.getOwnPropertyDescriptor(_class11.prototype, "targetOrientation"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "targetVelocity", [_dec80, _dec81], Object.getOwnPropertyDescriptor(_class11.prototype, "targetVelocity"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "strength", [_dec82, _dec83], Object.getOwnPropertyDescriptor(_class11.prototype, "strength"), _class11.prototype), _initializer30 = _applyDecoratedInitializer(_class11.prototype, "_swingDrive1", [serializable], function () {
        return EDriverMode.DISABLED;
      }), _initializer31 = _applyDecoratedInitializer(_class11.prototype, "_swingDrive2", [serializable], function () {
        return EDriverMode.DISABLED;
      }), _initializer32 = _applyDecoratedInitializer(_class11.prototype, "_twistDrive", [serializable], function () {
        return EDriverMode.DISABLED;
      }), _initializer33 = _applyDecoratedInitializer(_class11.prototype, "_targetOrientation", [serializable], function () {
        return new Vec3();
      }), _initializer34 = _applyDecoratedInitializer(_class11.prototype, "_targetVelocity", [serializable], function () {
        return new Vec3();
      }), _initializer35 = _applyDecoratedInitializer(_class11.prototype, "_strength", [serializable], function () {
        return 0;
      })), _class11)) || _class10));
      /**
       * @en The configurable constraint component.
       * The configurable constraint provides all the functionality of other constraints, and provides comprehensive configurable options.
       * @zh 可配置约束组件。
       * 可配置约束提供了其他约束的所有功能支持，提供了全面的可配置选项。
       */
      _export("ConfigurableConstraint", ConfigurableConstraint = (_dec84 = ccclass('cc.ConfigurableConstraint'), _dec85 = help('i18n:cc.ConfigurableConstraint'), _dec86 = menu('Physics/ConfigurableConstraint(beta)'), _dec87 = type(Vec3), _dec88 = tooltip('i18n:physics3d.constraint.axis'), _dec89 = type(Vec3), _dec90 = tooltip('i18n:physics3d.constraint.secondaryAxis'), _dec91 = type(Vec3), _dec92 = tooltip('i18n:physics3d.constraint.pivotA'), _dec93 = type(Vec3), _dec94 = tooltip('i18n:physics3d.constraint.pivotB'), _dec95 = type(CCBoolean), _dec96 = tooltip('i18n:physics3d.constraint.autoCalculatePivotB'), _dec97 = type(CCFloat), _dec98 = tooltip('i18n:physics3d.constraint.breakForce'), _dec99 = type(CCFloat), _dec100 = tooltip('i18n:physics3d.constraint.breakTorque'), _dec101 = type(LinearLimitSettings), _dec102 = tooltip('i18n:physics3d.constraint.linearLimit'), _dec103 = type(AngularLimitSettings), _dec104 = tooltip('i18n:physics3d.constraint.angularLimit'), _dec105 = type(LinearDriverSettings), _dec106 = tooltip('i18n:physics3d.constraint.linearDrive'), _dec107 = type(AngularDriverSettings), _dec108 = tooltip('i18n:physics3d.constraint.angularDrive'), _dec109 = formerlySerializedAs('linearLimitSettings'), _dec110 = formerlySerializedAs('angularLimitSettings'), _dec111 = formerlySerializedAs('linearDriverSettings'), _dec112 = formerlySerializedAs('angularDriverSettings'), _dec84(_class13 = _dec85(_class13 = _dec86(_class13 = (_class14 = /*#__PURE__*/function (_Constraint) {
        _inheritsLoose(ConfigurableConstraint, _Constraint);
        function ConfigurableConstraint() {
          var _this;
          _this = _Constraint.call(this, EConstraintType.CONFIGURABLE) || this;
          _this._breakForce = _initializer36 && _initializer36();
          _this._breakTorque = _initializer37 && _initializer37();
          _this._linearLimitSettings = _initializer38 && _initializer38();
          _this._angularLimitSettings = _initializer39 && _initializer39();
          _this._linearDriverSettings = _initializer40 && _initializer40();
          _this._angularDriverSettings = _initializer41 && _initializer41();
          _this._pivotA = _initializer42 && _initializer42();
          _this._pivotB = _initializer43 && _initializer43();
          _this._autoPivotB = _initializer44 && _initializer44();
          _this._axis = _initializer45 && _initializer45();
          _this._secondaryAxis = _initializer46 && _initializer46();
          _this._linearLimitSettings = new LinearLimitSettings(_this.constraint);
          _this._angularLimitSettings = new AngularLimitSettings(_this.constraint);
          _this._linearDriverSettings = new LinearDriverSettings(_this.constraint);
          _this._angularDriverSettings = new AngularDriverSettings(_this.constraint);
          return _this;
        }
        var _proto = ConfigurableConstraint.prototype;
        _proto.onLoad = function onLoad() {
          _Constraint.prototype.onLoad.call(this);
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.linearLimitSettings.impl = this.constraint;
            this.angularLimitSettings.impl = this.constraint;
            this.linearDriverSettings.impl = this.constraint;
            this.angularDriverSettings.impl = this.constraint;
          }
        };
        _createClass(ConfigurableConstraint, [{
          key: "axis",
          get:
          /**
           * @en
           * The axis of the constraint in the local coordinate system of the attached rigid body.
           * @zh
           * 约束关节在连接刚体的本地坐标系中的轴。
           */
          function get() {
            return this._axis;
          },
          set: function set(v) {
            Vec3.copy(this._axis, v);
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.constraint.setAxis(this._axis);
            }
          }

          /**
           * @en The secondary axis of the constraint in the local coordinate system of the attached rigid body.
           * @zh 约束关节在连接刚体的本地坐标系中的第二轴。
           */
        }, {
          key: "secondaryAxis",
          get: function get() {
            return this._secondaryAxis;
          },
          set: function set(v) {
            Vec3.copy(this._secondaryAxis, v);
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.constraint.setSecondaryAxis(this._secondaryAxis);
            }
          }

          /**
           * @en
           * The pivot point of the constraint in the local coordinate system of the attached rigid body.
           * @zh
           * 约束关节在连接刚体的本地坐标系中的锚点。
           */
        }, {
          key: "pivotA",
          get: function get() {
            return this._pivotA;
          },
          set: function set(v) {
            Vec3.copy(this._pivotA, v);
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.constraint.setPivotA(this._pivotA);
            }
          }

          /**
           * @en
           * The pivot point of the constraint in the local coordinate system of the connected rigid body.
           * @zh
           * 约束关节在连接刚体的本地坐标系中的锚点。
           */
        }, {
          key: "pivotB",
          get: function get() {
            return this._pivotB;
          },
          set: function set(v) {
            Vec3.copy(this._pivotB, v);
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.constraint.setPivotB(this._pivotB);
            }
          }

          /**
           * @en
           * The pivotB is derived automatically.
           * @zh
           * pivotB 会自动计算。
           */
        }, {
          key: "autoPivotB",
          get: function get() {
            return this._autoPivotB;
          },
          set: function set(v) {
            this._autoPivotB = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.constraint.setAutoPivotB(this._autoPivotB);
            }
          }

          /**
           * @en
           * The break force threshold of the constraint.
           * @zh
           * 约束的断裂力阈值。
           */
        }, {
          key: "breakForce",
          get: function get() {
            return this._breakForce;
          },
          set: function set(v) {
            this._breakForce = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.constraint.setBreakForce(v);
            }
          }

          /**
           * @en
           * The break torque threshold of the constraint.
           * @zh
           * 约束的断裂扭矩阈值。
           */
        }, {
          key: "breakTorque",
          get: function get() {
            return this._breakTorque;
          },
          set: function set(v) {
            this._breakTorque = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              this.constraint.setBreakTorque(v);
            }
          }

          /**
           * @en
           * The linear limit settings of the constraint.
           * @zh
           * 线性限制设置。
           */
        }, {
          key: "linearLimitSettings",
          get: function get() {
            return this._linearLimitSettings;
          },
          set: function set(v) {
            this._linearLimitSettings = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              var constraint = this.constraint;
              constraint.setConstraintMode(0, v.xMotion);
              constraint.setConstraintMode(1, v.yMotion);
              constraint.setConstraintMode(2, v.zMotion);
              var upper = v.upper;
              var lower = v.lower;
              constraint.setLinearLimit(0, lower.x, upper.x);
              constraint.setLinearLimit(1, lower.y, upper.y);
              constraint.setLinearLimit(2, lower.z, upper.z);
              constraint.setLinearSoftConstraint(v.enableSoftConstraint);
              constraint.setLinearDamping(v.damping);
              constraint.setLinearStiffness(v.stiffness);
              constraint.setLinearRestitution(v.restitution);
            }
          }

          /**
           * @en
           * The angular limit settings of the constraint.
           * @zh
           * 角度限制设置。
           */
        }, {
          key: "angularLimitSettings",
          get: function get() {
            return this._angularLimitSettings;
          },
          set: function set(v) {
            this._angularLimitSettings = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              var constraint = this.constraint;
              constraint.setConstraintMode(3, v.twistMotion);
              constraint.setConstraintMode(4, v.swingMotion1);
              constraint.setConstraintMode(5, v.swingMotion2);
              constraint.setAngularExtent(v.twistExtent, v.swingExtent1, v.swingExtent2);
              constraint.setTwistRestitution(v.twistRestitution);
              constraint.setSwingRestitution(v.swingRestitution);
              constraint.setTwistSoftConstraint(v.enableSoftConstraintTwist);
              constraint.setSwingSoftConstraint(v.enableSoftConstraintSwing);
              constraint.setTwistDamping(v.twistDamping);
              constraint.setSwingDamping(v.swingDamping);
              constraint.setTwistStiffness(v.twistStiffness);
              constraint.setSwingStiffness(v.swingStiffness);
            }
          }

          /**
           * @en
           * The linear drive settings of the constraint.
           * @zh
           * 线性驱动设置。
           */
        }, {
          key: "linearDriverSettings",
          get: function get() {
            return this._linearDriverSettings;
          },
          set: function set(v) {
            this._linearDriverSettings = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              var constraint = this.constraint;
              constraint.setDriverMode(0, v.xDrive);
              constraint.setDriverMode(1, v.yDrive);
              constraint.setDriverMode(2, v.zDrive);
              constraint.setLinearMotorTarget(v.targetPosition);
              constraint.setLinearMotorVelocity(v.targetVelocity);
              constraint.setLinearMotorForceLimit(v.strength);
            }
          }

          /**
           * @en
           * The angular drive settings of the constraint.
           * @zh
           * 角度驱动设置。
           */
        }, {
          key: "angularDriverSettings",
          get: function get() {
            return this._angularDriverSettings;
          },
          set: function set(v) {
            this._angularDriverSettings = v;
            if (!EDITOR_NOT_IN_PREVIEW) {
              var constraint = this.constraint;
              constraint.setDriverMode(3, v.twistDrive);
              constraint.setDriverMode(4, v.swingDrive1);
              constraint.setDriverMode(5, v.swingDrive2);
              constraint.setAngularMotorTarget(v.targetOrientation);
              constraint.setAngularMotorVelocity(v.targetVelocity);
              constraint.setAngularMotorForceLimit(v.strength);
            }
          }
        }, {
          key: "constraint",
          get: function get() {
            return this._constraint;
          }
        }]);
        return ConfigurableConstraint;
      }(Constraint), (_applyDecoratedDescriptor(_class14.prototype, "axis", [_dec87, _dec88], Object.getOwnPropertyDescriptor(_class14.prototype, "axis"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "secondaryAxis", [_dec89, _dec90], Object.getOwnPropertyDescriptor(_class14.prototype, "secondaryAxis"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "pivotA", [_dec91, _dec92], Object.getOwnPropertyDescriptor(_class14.prototype, "pivotA"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "pivotB", [_dec93, _dec94], Object.getOwnPropertyDescriptor(_class14.prototype, "pivotB"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "autoPivotB", [_dec95, _dec96], Object.getOwnPropertyDescriptor(_class14.prototype, "autoPivotB"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "breakForce", [_dec97, _dec98], Object.getOwnPropertyDescriptor(_class14.prototype, "breakForce"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "breakTorque", [_dec99, _dec100], Object.getOwnPropertyDescriptor(_class14.prototype, "breakTorque"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "linearLimitSettings", [_dec101, _dec102], Object.getOwnPropertyDescriptor(_class14.prototype, "linearLimitSettings"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "angularLimitSettings", [_dec103, _dec104], Object.getOwnPropertyDescriptor(_class14.prototype, "angularLimitSettings"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "linearDriverSettings", [_dec105, _dec106], Object.getOwnPropertyDescriptor(_class14.prototype, "linearDriverSettings"), _class14.prototype), _applyDecoratedDescriptor(_class14.prototype, "angularDriverSettings", [_dec107, _dec108], Object.getOwnPropertyDescriptor(_class14.prototype, "angularDriverSettings"), _class14.prototype), _initializer36 = _applyDecoratedInitializer(_class14.prototype, "_breakForce", [serializable], function () {
        return 1e8;
      }), _initializer37 = _applyDecoratedInitializer(_class14.prototype, "_breakTorque", [serializable], function () {
        return 1e8;
      }), _initializer38 = _applyDecoratedInitializer(_class14.prototype, "_linearLimitSettings", [serializable, _dec109], null), _initializer39 = _applyDecoratedInitializer(_class14.prototype, "_angularLimitSettings", [serializable, _dec110], null), _initializer40 = _applyDecoratedInitializer(_class14.prototype, "_linearDriverSettings", [serializable, _dec111], null), _initializer41 = _applyDecoratedInitializer(_class14.prototype, "_angularDriverSettings", [serializable, _dec112], null), _initializer42 = _applyDecoratedInitializer(_class14.prototype, "_pivotA", [serializable], function () {
        return new Vec3();
      }), _initializer43 = _applyDecoratedInitializer(_class14.prototype, "_pivotB", [serializable], function () {
        return new Vec3();
      }), _initializer44 = _applyDecoratedInitializer(_class14.prototype, "_autoPivotB", [serializable], function () {
        return false;
      }), _initializer45 = _applyDecoratedInitializer(_class14.prototype, "_axis", [serializable], function () {
        return new Vec3(0, 1, 0);
      }), _initializer46 = _applyDecoratedInitializer(_class14.prototype, "_secondaryAxis", [serializable], function () {
        return new Vec3(1, 0, 0);
      })), _class14)) || _class13) || _class13) || _class13));
    }
  };
});