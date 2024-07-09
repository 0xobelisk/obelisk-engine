System.register("q-bundled:///fs/cocos/physics-2d/framework/components/joints/fixed-joint-2d.js", ["./joint-2d.js", "../../../../core/index.js", "../../physics-types.js", "../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var Joint2D, CCFloat, _decorator, EJoint2DType, help, serializable, tooltip, type, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, ccclass, menu, property, FixedJoint2D;
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
      _export("FixedJoint2D", FixedJoint2D = (_dec = ccclass('cc.FixedJoint2D'), _dec2 = help('i18n:cc.Joint2D'), _dec3 = menu('Physics2D/Joints/FixedJoint2D'), _dec4 = type(CCFloat), _dec5 = tooltip('i18n:physics2d.joint.frequency'), _dec6 = type(CCFloat), _dec7 = tooltip('i18n:physics2d.joint.dampingRatio'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Joint2D) {
        _inheritsLoose(FixedJoint2D, _Joint2D);
        function FixedJoint2D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Joint2D.call.apply(_Joint2D, [this].concat(args)) || this;
          _this.TYPE = EJoint2DType.FIXED;
          /// private properties
          _this._frequency = _initializer && _initializer();
          _this._dampingRatio = _initializer2 && _initializer2();
          return _this;
        }
        _createClass(FixedJoint2D, [{
          key: "frequency",
          get:
          /**
           * @en
           * The frequency.
           * @zh
           * 弹性系数。
           */
          function get() {
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
        return FixedJoint2D;
      }(Joint2D), (_applyDecoratedDescriptor(_class2.prototype, "frequency", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "frequency"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dampingRatio", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "dampingRatio"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_frequency", [serializable], function () {
        return 0.7;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_dampingRatio", [serializable], function () {
        return 0.5;
      })), _class2)) || _class) || _class) || _class));
    }
  };
});