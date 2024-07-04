System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/graph-output-node.js", ["../../../core/data/decorators/index.js", "../../define.js", "./foundation/type-system.js", "./foundation/pose-graph-node.js", "./decorator/node.js", "./decorator/input.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, CLASS_NAME_PREFIX_ANIM, PoseGraphType, PoseGraphNode, poseGraphNodeAppearance, inputUnchecked, _dec, _dec2, _dec3, _class, _class2, _descriptor, PoseGraphOutputNode;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }, function (_foundationPoseGraphNodeJs) {
      PoseGraphNode = _foundationPoseGraphNodeJs.PoseGraphNode;
    }, function (_decoratorNodeJs) {
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
    }, function (_decoratorInputJs) {
      inputUnchecked = _decoratorInputJs.inputUnchecked;
    }],
    execute: function () {
      _export("PoseGraphOutputNode", PoseGraphOutputNode = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}PoseGraphOutputNode`), _dec2 = poseGraphNodeAppearance({
        themeColor: '#CD3A58',
        inline: true
      }), _dec3 = inputUnchecked({
        type: PoseGraphType.POSE
      }), _dec(_class = _dec2(_class = (_class2 = class PoseGraphOutputNode extends PoseGraphNode {
        constructor(...args) {
          super(...args);
          // Don't use @input since it requires the owner class being subclass of `PoseNode`.
          _initializerDefineProperty(this, "pose", _descriptor, this);
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pose", [serializable, _dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));
    }
  };
});