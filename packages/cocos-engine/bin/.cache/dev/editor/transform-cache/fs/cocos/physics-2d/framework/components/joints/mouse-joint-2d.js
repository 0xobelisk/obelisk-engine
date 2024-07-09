System.register("q-bundled:///fs/cocos/physics-2d/framework/components/joints/mouse-joint-2d.js", ["./joint-2d.js", "../../physics-types.js", "../../../../core/index.js", "../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var Joint2D, EJoint2DType, CCFloat, Vec2, _decorator, help, serializable, tooltip, type, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _initializer, _initializer2, _initializer3, ccclass, menu, property, MouseJoint2D;
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
      CCFloat = _coreIndexJs.CCFloat;
      Vec2 = _coreIndexJs.Vec2;
      _decorator = _coreIndexJs._decorator;
    }, function (_coreDataDecoratorsIndexJs) {
      help = _coreDataDecoratorsIndexJs.help;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
    }],
    execute: function () {
      ({
        ccclass,
        menu,
        property
      } = _decorator);
      _export("MouseJoint2D", MouseJoint2D = (_dec = ccclass('cc.MouseJoint2D'), _dec2 = help('i18n:cc.Joint2D'), _dec3 = menu('Physics2D/Joints/MouseJoint2D'), _dec4 = type(CCFloat), _dec5 = tooltip('i18n:physics2d.joint.frequency'), _dec6 = type(CCFloat), _dec7 = tooltip('i18n:physics2d.joint.dampingRatio'), _dec8 = type(CCFloat), _dec9 = tooltip('i18n:physics2d.joint.maxForce'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class MouseJoint2D extends Joint2D {
        constructor(...args) {
          super(...args);
          this.TYPE = EJoint2DType.MOUSE;
          this._maxForce = _initializer && _initializer();
          this._dampingRatio = _initializer2 && _initializer2();
          this._frequency = _initializer3 && _initializer3();
          this._target = new Vec2();
        }
        get target() {
          return this._target;
        }
        set target(v) {
          this._target = v;
          if (this._joint) {
            this._joint.setTarget(v);
          }
        }

        /**
         * @en
         * The spring frequency.
         * @zh
         * 弹簧系数。
         */
        get frequency() {
          return this._frequency;
        }
        set frequency(v) {
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
        get dampingRatio() {
          return this._dampingRatio;
        }
        set dampingRatio(v) {
          this._dampingRatio = v;
          if (this._joint) {
            this._joint.setDampingRatio(v);
          }
        }

        /**
         * @en
         * The maximum force.
         * @zh
         * 最大阻力值。
         */
        get maxForce() {
          return this._maxForce;
        }
        set maxForce(v) {
          this._maxForce = v;
          if (this._joint) {
            this._joint.setMaxForce(v);
          }
        }
        update(dt) {
          this._joint.update(dt);
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "frequency", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "frequency"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dampingRatio", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "dampingRatio"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxForce", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "maxForce"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_maxForce", [serializable], function () {
        return 1000;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_dampingRatio", [serializable], function () {
        return 0.7;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_frequency", [serializable], function () {
        return 5;
      })), _class2)) || _class) || _class) || _class));
    }
  };
});