System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/blend-two-pose-base.js", ["../../../../core/data/decorators/index.js", "../../../define.js", "../pose-node.js", "../decorator/input.js", "../../animation-graph-context.js", "../decorator/node.js", "../foundation/type-system.js"], function (_export, _context) {
  "use strict";

  var ccclass, range, serializable, CLASS_NAME_PREFIX_ANIM, PoseNode, PoseTransformSpaceRequirement, input, AnimationGraphUpdateContextGenerator, poseGraphNodeHide, PoseGraphType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, PoseNodeBlendTwoPoseBase;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_poseNodeJs) {
      PoseNode = _poseNodeJs.PoseNode;
      PoseTransformSpaceRequirement = _poseNodeJs.PoseTransformSpaceRequirement;
    }, function (_decoratorInputJs) {
      input = _decoratorInputJs.input;
    }, function (_animationGraphContextJs) {
      AnimationGraphUpdateContextGenerator = _animationGraphContextJs.AnimationGraphUpdateContextGenerator;
    }, function (_decoratorNodeJs) {
      poseGraphNodeHide = _decoratorNodeJs.poseGraphNodeHide;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }],
    execute: function () {
      _export("PoseNodeBlendTwoPoseBase", PoseNodeBlendTwoPoseBase = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}PoseNodeBlendTwoPoseBase`), _dec2 = poseGraphNodeHide(true), _dec3 = input({
        type: PoseGraphType.POSE
      }), _dec4 = input({
        type: PoseGraphType.POSE
      }), _dec5 = input({
        type: PoseGraphType.FLOAT
      }), _dec6 = range([0.0, 1.0, 0.01]), _dec(_class = _dec2(_class = (_class2 = class PoseNodeBlendTwoPoseBase extends PoseNode {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "pose0", _descriptor, this);
          _initializerDefineProperty(this, "pose1", _descriptor2, this);
          _initializerDefineProperty(this, "ratio", _descriptor3, this);
          this._updateContextGenerator = new AnimationGraphUpdateContextGenerator();
        }
        bind(context) {
          var _this$pose, _this$pose2;
          (_this$pose = this.pose0) === null || _this$pose === void 0 ? void 0 : _this$pose.bind(context);
          (_this$pose2 = this.pose1) === null || _this$pose2 === void 0 ? void 0 : _this$pose2.bind(context);
        }
        settle(context) {
          var _this$pose3, _this$pose4;
          (_this$pose3 = this.pose0) === null || _this$pose3 === void 0 ? void 0 : _this$pose3.settle(context);
          (_this$pose4 = this.pose1) === null || _this$pose4 === void 0 ? void 0 : _this$pose4.settle(context);
        }
        reenter() {
          var _this$pose5, _this$pose6;
          (_this$pose5 = this.pose0) === null || _this$pose5 === void 0 ? void 0 : _this$pose5.reenter();
          (_this$pose6 = this.pose1) === null || _this$pose6 === void 0 ? void 0 : _this$pose6.reenter();
        }
        doUpdate(context) {
          const {
            pose0,
            pose1,
            _updateContextGenerator: updateContextGenerator,
            ratio
          } = this;
          {
            const updateContext = updateContextGenerator.generate(context.deltaTime, context.indicativeWeight * (1.0 - ratio));
            pose0 === null || pose0 === void 0 ? void 0 : pose0.update(updateContext);
          }
          {
            const updateContext = updateContextGenerator.generate(context.deltaTime, context.indicativeWeight * ratio);
            pose1 === null || pose1 === void 0 ? void 0 : pose1.update(updateContext);
          }
        }
        doEvaluate(context) {
          var _this$pose0$evaluate, _this$pose7, _this$pose1$evaluate, _this$pose8;
          const spaceRequirement = PoseTransformSpaceRequirement.LOCAL;
          if (!this.pose0 || !this.pose1) {
            return PoseNodeBlendTwoPoseBase.evaluateDefaultPose(context, spaceRequirement);
          }
          const pose0 = (_this$pose0$evaluate = (_this$pose7 = this.pose0) === null || _this$pose7 === void 0 ? void 0 : _this$pose7.evaluate(context, spaceRequirement)) !== null && _this$pose0$evaluate !== void 0 ? _this$pose0$evaluate : PoseNodeBlendTwoPoseBase.evaluateDefaultPose(context, spaceRequirement);
          const pose1 = (_this$pose1$evaluate = (_this$pose8 = this.pose1) === null || _this$pose8 === void 0 ? void 0 : _this$pose8.evaluate(context, spaceRequirement)) !== null && _this$pose1$evaluate !== void 0 ? _this$pose1$evaluate : PoseNodeBlendTwoPoseBase.evaluateDefaultPose(context, spaceRequirement);
          this.doBlend(pose0, pose1, this.ratio);
          context.popPose();
          return pose0;
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pose0", [serializable, _dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pose1", [serializable, _dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ratio", [serializable, _dec5, _dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      })), _class2)) || _class) || _class));
    }
  };
});