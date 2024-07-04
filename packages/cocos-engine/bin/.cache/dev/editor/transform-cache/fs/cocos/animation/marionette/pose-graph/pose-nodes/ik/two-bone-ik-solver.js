System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/ik/two-bone-ik-solver.js", ["../../../../../../../virtual/internal%253Aconstants.js", "../../../../../core/data/decorators/index.js", "../../../../define.js", "../../pose-node.js", "../../../../../core/index.js", "../../decorator/input.js", "../../decorator/node.js", "../modify-pose-base.js", "./solve-two-bone-ik.js", "../../../../core/transform.js", "../../foundation/type-system.js", "../transform-space.js", "./menu.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, editable, serializable, type, visible, CLASS_NAME_PREFIX_ANIM, PoseTransformSpaceRequirement, assertIsTrue, ccenum, Vec3, input, poseGraphNodeCategory, PoseNodeModifyPoseBase, solveTwoBoneIK, Transform, PoseGraphType, TransformSpace, POSE_GRAPH_NODE_MENU_PREFIX_IK, Workspace, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class4, _class5, _initializer5, _initializer6, _initializer7, _initializer8, cacheRootTransform, cacheMiddleTransform, cacheEndEffectorTransform, cacheEndEffectorTargetPosition, cachePoleTargetPosition, cacheTransform_evaluateTarget, TargetSpecificationType, TargetSpecification, PoseNodeTwoBoneIKSolver;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_poseNodeJs) {
      PoseTransformSpaceRequirement = _poseNodeJs.PoseTransformSpaceRequirement;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      ccenum = _coreIndexJs.ccenum;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_decoratorInputJs) {
      input = _decoratorInputJs.input;
    }, function (_decoratorNodeJs) {
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_modifyPoseBaseJs) {
      PoseNodeModifyPoseBase = _modifyPoseBaseJs.PoseNodeModifyPoseBase;
    }, function (_solveTwoBoneIkJs) {
      solveTwoBoneIK = _solveTwoBoneIkJs.solveTwoBoneIK;
    }, function (_coreTransformJs) {
      Transform = _coreTransformJs.Transform;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }, function (_transformSpaceJs) {
      TransformSpace = _transformSpaceJs.TransformSpace;
    }, function (_menuJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_IK = _menuJs.POSE_GRAPH_NODE_MENU_PREFIX_IK;
    }],
    execute: function () {
      cacheRootTransform = new Transform();
      cacheMiddleTransform = new Transform();
      cacheEndEffectorTransform = new Transform();
      cacheEndEffectorTargetPosition = new Vec3();
      cachePoleTargetPosition = new Vec3();
      cacheTransform_evaluateTarget = new Transform();
      (function (TargetSpecificationType) {
        TargetSpecificationType[TargetSpecificationType["NONE"] = 0] = "NONE";
        TargetSpecificationType[TargetSpecificationType["VALUE"] = 1] = "VALUE";
        TargetSpecificationType[TargetSpecificationType["BONE"] = 2] = "BONE";
      })(TargetSpecificationType || (TargetSpecificationType = {}));
      ccenum(TargetSpecificationType);
      TargetSpecification = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}PoseNodeTwoBoneIKSolver.TargetSpecification`), _dec2 = type(TargetSpecificationType), _dec3 = visible(function visible() {
        return this.type === TargetSpecificationType.VALUE;
      }), _dec4 = type(TransformSpace), _dec5 = visible(function visible() {
        return this.type === TargetSpecificationType.VALUE;
      }), _dec6 = visible(function visible() {
        return this.type === TargetSpecificationType.BONE;
      }), _dec(_class = (_class2 = class TargetSpecification {
        constructor(type) {
          this.type = _initializer && _initializer();
          this.targetPosition = _initializer2 && _initializer2();
          this.targetPositionSpace = _initializer3 && _initializer3();
          this.targetBone = _initializer4 && _initializer4();
          this._sourceBoneHandle = undefined;
          this._targetBoneHandle = undefined;
          if (typeof type !== 'undefined') {
            this.type = type;
          }
        }
        bind(context, sourceBoneHandle) {
          this._sourceBoneHandle = sourceBoneHandle;
          if (this.type === TargetSpecificationType.BONE && this.targetBone) {
            var _context$bindTransfor;
            this._targetBoneHandle = (_context$bindTransfor = context.bindTransformByName(this.targetBone)) !== null && _context$bindTransfor !== void 0 ? _context$bindTransfor : undefined;
          }
        }
        evaluate(outTargetPosition, pose, context) {
          assertIsTrue(this._sourceBoneHandle);
          if (this._targetBoneHandle) {
            pose.transforms.getPosition(this._targetBoneHandle.index, outTargetPosition);
          } else if (this.type === TargetSpecificationType.NONE) {
            pose.transforms.getPosition(this._sourceBoneHandle.index, outTargetPosition);
          } else {
            const targetTransform = Transform.setIdentity(cacheTransform_evaluateTarget);
            targetTransform.position = this.targetPosition;
            context._convertTransformToPoseTransformSpace(targetTransform, this.targetPositionSpace, pose, this._sourceBoneHandle.index);
            Vec3.copy(outTargetPosition, targetTransform.position);
          }
          return outTargetPosition;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "type", [serializable, editable, _dec2], function () {
        return TargetSpecificationType.VALUE;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "targetPosition", [serializable, editable, _dec3], function () {
        return new Vec3();
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "targetPositionSpace", [serializable, editable, _dec4, _dec5], function () {
        return TransformSpace.WORLD;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "targetBone", [serializable, editable, _dec6], function () {
        return '';
      })), _class2)) || _class);
      _export("PoseNodeTwoBoneIKSolver", PoseNodeTwoBoneIKSolver = (_dec7 = ccclass(`${CLASS_NAME_PREFIX_ANIM}PoseNodeTwoBoneIKSolver`), _dec8 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_IK), _dec9 = input({
        type: PoseGraphType.VEC3
      }), _dec10 = visible(function visible() {
        return this.endEffectorTarget.type === TargetSpecificationType.VALUE;
      }), _dec11 = input({
        type: PoseGraphType.VEC3
      }), _dec12 = visible(function visible() {
        return this.poleTarget.type === TargetSpecificationType.VALUE;
      }), _dec7(_class4 = _dec8(_class4 = (_class5 = class PoseNodeTwoBoneIKSolver extends PoseNodeModifyPoseBase {
        constructor(...args) {
          super(...args);
          this.debug = _initializer5 && _initializer5();
          this.endEffectorBoneName = _initializer6 && _initializer6();
          this.endEffectorTarget = _initializer7 && _initializer7();
          this.poleTarget = _initializer8 && _initializer8();
          this._workspace = undefined;
        }
        get endEffectorTargetPosition() {
          return this.endEffectorTarget.targetPosition;
        }
        set endEffectorTargetPosition(value) {
          Vec3.copy(this.endEffectorTarget.targetPosition, value);
        }
        get poleTargetPosition() {
          return this.poleTarget.targetPosition;
        }
        set poleTargetPosition(value) {
          Vec3.copy(this.poleTarget.targetPosition, value);
        }
        bind(context) {
          super.bind(context);
          if (this.endEffectorBoneName) {
            const parentBoneName = context.getParentBoneNameByName(this.endEffectorBoneName);
            const ikRootBoneName = parentBoneName ? context.getParentBoneNameByName(parentBoneName) : '';
            if (parentBoneName && ikRootBoneName) {
              const hEndEffector = context.bindTransformByName(this.endEffectorBoneName);
              const hMiddle = context.bindTransformByName(parentBoneName);
              const hIKRoot = context.bindTransformByName(ikRootBoneName);
              if (!hEndEffector || !hMiddle || !hIKRoot) {
                hEndEffector === null || hEndEffector === void 0 ? void 0 : hEndEffector.destroy();
                hMiddle === null || hMiddle === void 0 ? void 0 : hMiddle.destroy();
                hIKRoot === null || hIKRoot === void 0 ? void 0 : hIKRoot.destroy();
              } else {
                this.endEffectorTarget.bind(context, hEndEffector);
                this.poleTarget.bind(context, hMiddle);
                this._workspace = new Workspace(hEndEffector, hMiddle, hIKRoot);
              }
            }
          }
        }
        getPoseTransformSpaceRequirement() {
          return PoseTransformSpaceRequirement.COMPONENT;
        }
        modifyPose(context, inputPose, modificationQueue) {
          const {
            _workspace: workspace
          } = this;
          if (!workspace) {
            return;
          }
          const {
            hRoot: {
              index: iRootTransform
            },
            hMiddle: {
              index: iMiddleTransform
            },
            hEndEffector: {
              index: iEndEffectorTransform
            }
          } = workspace;

          // Fetch transforms.
          const rootTransform = inputPose.transforms.getTransform(iRootTransform, cacheRootTransform);
          const middleTransform = inputPose.transforms.getTransform(iMiddleTransform, cacheMiddleTransform);
          const endEffectorTransform = inputPose.transforms.getTransform(iEndEffectorTransform, cacheEndEffectorTransform);
          const endEffectorTargetPosition = this.endEffectorTarget.evaluate(cacheEndEffectorTargetPosition, inputPose, context);
          const poleTargetPosition = this.poleTarget.evaluate(cachePoleTargetPosition, inputPose, context);

          // Solve.
          solveTwoBoneIK(rootTransform, middleTransform, endEffectorTransform, endEffectorTargetPosition, poleTargetPosition, this.debug ? this : undefined);
          modificationQueue.push(iRootTransform, rootTransform);
          modificationQueue.push(iMiddleTransform, middleTransform);
          modificationQueue.push(iEndEffectorTransform, endEffectorTransform);
        }
      }, (_initializer5 = _applyDecoratedInitializer(_class5.prototype, "debug", [serializable, editable], function () {
        return false;
      }), _initializer6 = _applyDecoratedInitializer(_class5.prototype, "endEffectorBoneName", [serializable, editable], function () {
        return '';
      }), _initializer7 = _applyDecoratedInitializer(_class5.prototype, "endEffectorTarget", [serializable, editable], function () {
        return new TargetSpecification(TargetSpecificationType.VALUE);
      }), _applyDecoratedDescriptor(_class5.prototype, "endEffectorTargetPosition", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class5.prototype, "endEffectorTargetPosition"), _class5.prototype), _initializer8 = _applyDecoratedInitializer(_class5.prototype, "poleTarget", [serializable, editable], function () {
        return new TargetSpecification(TargetSpecificationType.NONE);
      }), _applyDecoratedDescriptor(_class5.prototype, "poleTargetPosition", [_dec11, _dec12], Object.getOwnPropertyDescriptor(_class5.prototype, "poleTargetPosition"), _class5.prototype)), _class5)) || _class4) || _class4));
      if (EDITOR) {
        PoseNodeTwoBoneIKSolver.prototype.getTitle = function getTitle() {
          if (this.endEffectorBoneName) {
            return [`ENGINE.classes.${CLASS_NAME_PREFIX_ANIM}PoseNodeTwoBoneIKSolver.title`, {
              endEffectorBoneName: this.endEffectorBoneName
            }];
          }
          return undefined;
        };
      }
      Workspace = class Workspace {
        constructor(hEndEffector, hMiddle, hRoot) {
          this.hEndEffector = hEndEffector;
          this.hMiddle = hMiddle;
          this.hRoot = hRoot;
        }
      };
    }
  };
});