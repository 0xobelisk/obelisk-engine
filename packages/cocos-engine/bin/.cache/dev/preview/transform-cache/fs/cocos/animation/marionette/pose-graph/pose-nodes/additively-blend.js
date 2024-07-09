System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/additively-blend.js", ["../../../../core/data/decorators/index.js", "../../../core/pose.js", "../../../define.js", "../decorator/node.js", "./menu-common.js", "../pose-node.js", "../decorator/input.js", "../foundation/type-system.js"], function (_export, _context) {
  "use strict";

  var ccclass, range, serializable, applyDeltaPose, CLASS_NAME_PREFIX_ANIM, poseGraphNodeAppearance, poseGraphNodeCategory, POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND, PoseNode, PoseTransformSpaceRequirement, input, PoseGraphType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, PoseNodeAdditivelyBlend;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_corePoseJs) {
      applyDeltaPose = _corePoseJs.applyDeltaPose;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_decoratorNodeJs) {
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_menuCommonJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND = _menuCommonJs.POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND;
    }, function (_poseNodeJs) {
      PoseNode = _poseNodeJs.PoseNode;
      PoseTransformSpaceRequirement = _poseNodeJs.PoseTransformSpaceRequirement;
    }, function (_decoratorInputJs) {
      input = _decoratorInputJs.input;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }],
    execute: function () {
      /**
       * Add an additional pose onto a base pose.
       *
       * @note When evaluating addition pose, the context is switched to "additive" mode.
       */
      _export("PoseNodeAdditivelyBlend", PoseNodeAdditivelyBlend = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodeAdditivelyBlend"), _dec2 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND), _dec3 = poseGraphNodeAppearance({
        themeColor: '#72A869'
      }), _dec4 = input({
        type: PoseGraphType.POSE
      }), _dec5 = input({
        type: PoseGraphType.POSE
      }), _dec6 = input({
        type: PoseGraphType.FLOAT
      }), _dec7 = range([0.0, 1.0, 0.01]), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_PoseNode) {
        _inheritsLoose(PoseNodeAdditivelyBlend, _PoseNode);
        function PoseNodeAdditivelyBlend() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PoseNode.call.apply(_PoseNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "basePose", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "additivePose", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ratio", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PoseNodeAdditivelyBlend.prototype;
        _proto.bind = function bind(context) {
          var _this$basePose, _this$additivePose;
          (_this$basePose = this.basePose) === null || _this$basePose === void 0 ? void 0 : _this$basePose.bind(context);
          context._pushAdditiveFlag(true);
          (_this$additivePose = this.additivePose) === null || _this$additivePose === void 0 ? void 0 : _this$additivePose.bind(context);
          context._popAdditiveFlag();
        };
        _proto.settle = function settle(context) {
          var _this$basePose2, _this$additivePose2;
          (_this$basePose2 = this.basePose) === null || _this$basePose2 === void 0 ? void 0 : _this$basePose2.settle(context);
          (_this$additivePose2 = this.additivePose) === null || _this$additivePose2 === void 0 ? void 0 : _this$additivePose2.settle(context);
        };
        _proto.reenter = function reenter() {
          var _this$basePose3, _this$additivePose3;
          (_this$basePose3 = this.basePose) === null || _this$basePose3 === void 0 ? void 0 : _this$basePose3.reenter();
          (_this$additivePose3 = this.additivePose) === null || _this$additivePose3 === void 0 ? void 0 : _this$additivePose3.reenter();
        };
        _proto.doUpdate = function doUpdate(context) {
          var _this$basePose4, _this$additivePose4;
          (_this$basePose4 = this.basePose) === null || _this$basePose4 === void 0 ? void 0 : _this$basePose4.update(context);
          (_this$additivePose4 = this.additivePose) === null || _this$additivePose4 === void 0 ? void 0 : _this$additivePose4.update(context);
        };
        _proto.doEvaluate = function doEvaluate(context) {
          var _this$basePose$evalua, _this$basePose5;
          var basePose = (_this$basePose$evalua = (_this$basePose5 = this.basePose) === null || _this$basePose5 === void 0 ? void 0 : _this$basePose5.evaluate(context, PoseTransformSpaceRequirement.LOCAL)) !== null && _this$basePose$evalua !== void 0 ? _this$basePose$evalua : context.pushDefaultedPose();
          if (!this.additivePose) {
            return basePose;
          }
          var additionalPose = this.additivePose.evaluate(context, PoseTransformSpaceRequirement.LOCAL);
          applyDeltaPose(basePose, additionalPose, this.ratio);
          context.popPose();
          return basePose;
        };
        return PoseNodeAdditivelyBlend;
      }(PoseNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "basePose", [serializable, _dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "additivePose", [serializable, _dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ratio", [serializable, _dec6, _dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class2)) || _class) || _class) || _class));
    }
  };
});