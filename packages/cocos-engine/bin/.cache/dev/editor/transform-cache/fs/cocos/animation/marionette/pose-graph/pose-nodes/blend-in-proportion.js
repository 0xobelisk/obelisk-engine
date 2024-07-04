System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/blend-in-proportion.js", ["../../../../core/data/decorators/index.js", "../../../core/pose.js", "../../../define.js", "../pose-node.js", "../decorator/input.js", "../../animation-graph-context.js", "../decorator/node.js", "./menu-common.js", "../foundation/type-system.js", "../utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, range, serializable, blendPoseInto, CLASS_NAME_PREFIX_ANIM, PoseNode, PoseTransformSpaceRequirement, input, AnimationGraphUpdateContextGenerator, poseGraphNodeAppearance, poseGraphNodeCategory, POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND, PoseGraphType, isIgnorableWeight, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, PoseNodeBlendInProportion;
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
    }, function (_corePoseJs) {
      blendPoseInto = _corePoseJs.blendPoseInto;
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
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_menuCommonJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND = _menuCommonJs.POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }, function (_utilsJs) {
      isIgnorableWeight = _utilsJs.isIgnorableWeight;
    }],
    execute: function () {
      _export("PoseNodeBlendInProportion", PoseNodeBlendInProportion = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}PoseNodeBlendInProportion`), _dec2 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND), _dec3 = poseGraphNodeAppearance({
        themeColor: '#72A869'
      }), _dec4 = input({
        type: PoseGraphType.POSE,
        arraySyncGroup: 'blend-item'
      }), _dec5 = input({
        type: PoseGraphType.FLOAT,
        arraySyncGroup: 'blend-item',
        arraySyncGroupFollower: true
      }), _dec6 = range([0.0, Number.POSITIVE_INFINITY]), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class PoseNodeBlendInProportion extends PoseNode {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "poses", _descriptor, this);
          _initializerDefineProperty(this, "proportions", _descriptor2, this);
          this._updateContextGenerator = new AnimationGraphUpdateContextGenerator();
        }
        bind(context) {
          for (const pose of this.poses) {
            pose === null || pose === void 0 ? void 0 : pose.bind(context);
          }
        }
        settle(context) {
          for (const pose of this.poses) {
            pose === null || pose === void 0 ? void 0 : pose.settle(context);
          }
        }
        reenter() {
          for (const pose of this.poses) {
            pose === null || pose === void 0 ? void 0 : pose.reenter();
          }
        }
        doUpdate(context) {
          const {
            _updateContextGenerator: updateContextGenerator
          } = this;
          const nInputPoses = this.poses.length;
          for (let iInputPose = 0; iInputPose < nInputPoses; ++iInputPose) {
            var _this$poses$iInputPos;
            const inputPoseWeight = this.proportions[iInputPose];
            if (isIgnorableWeight(inputPoseWeight)) {
              continue;
            }
            const inputPoseUpdateContext = updateContextGenerator.generate(context.deltaTime, context.indicativeWeight * inputPoseWeight);
            (_this$poses$iInputPos = this.poses[iInputPose]) === null || _this$poses$iInputPos === void 0 ? void 0 : _this$poses$iInputPos.update(inputPoseUpdateContext);
          }
        }
        doEvaluate(context) {
          const nInputPoses = this.poses.length;
          let sumWeight = 0.0;
          let finalPose = null;
          for (let iInputPose = 0; iInputPose < nInputPoses; ++iInputPose) {
            var _this$poses$iInputPos2;
            const inputPoseWeight = this.proportions[iInputPose];
            if (isIgnorableWeight(inputPoseWeight)) {
              continue;
            }
            const inputPose = (_this$poses$iInputPos2 = this.poses[iInputPose]) === null || _this$poses$iInputPos2 === void 0 ? void 0 : _this$poses$iInputPos2.evaluate(context, PoseTransformSpaceRequirement.LOCAL);
            if (!inputPose) {
              continue;
            }
            sumWeight += inputPoseWeight;
            if (!finalPose) {
              finalPose = inputPose;
            } else {
              if (sumWeight) {
                const t = inputPoseWeight / sumWeight;
                blendPoseInto(finalPose, inputPose, t);
              }
              context.popPose();
            }
          }
          if (finalPose) {
            return finalPose;
          }

          // TODO: cause wired behavior in additive layer.
          return context.pushDefaultedPose();
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "poses", [serializable, _dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "proportions", [serializable, _dec5, _dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class) || _class) || _class));
    }
  };
});