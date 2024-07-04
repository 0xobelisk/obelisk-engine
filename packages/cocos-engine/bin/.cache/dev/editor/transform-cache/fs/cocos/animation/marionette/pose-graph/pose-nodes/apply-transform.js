System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/apply-transform.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/data/decorators/index.js", "../../../define.js", "../pose-node.js", "../decorator/input.js", "../../../../core/index.js", "../decorator/node.js", "./menu-common.js", "./intensity-specification.js", "./modify-pose-base.js", "../foundation/type-system.js", "./transform-space.js", "../../../core/transform.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, editable, range, serializable, type, visible, CLASS_NAME_PREFIX_ANIM, PoseTransformSpaceRequirement, input, approx, ccenum, error, Quat, Vec3, poseGraphNodeAppearance, poseGraphNodeCategory, POSE_GRAPH_NODE_MENU_PREFIX_POSE, IntensitySpecification, PoseNodeModifyPoseBase, PoseGraphType, TransformSpace, Transform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _initializer, _initializer2, _descriptor, _initializer3, _descriptor2, _initializer4, _initializer5, TransformOperation, APPLY_INTENSITY_EPSILON, cacheTransform, PoseNodeApplyTransform, replacePosition, addPosition, replaceRotation, addRotation;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export("TransformOperation", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_poseNodeJs) {
      PoseTransformSpaceRequirement = _poseNodeJs.PoseTransformSpaceRequirement;
    }, function (_decoratorInputJs) {
      input = _decoratorInputJs.input;
    }, function (_coreIndexJs) {
      approx = _coreIndexJs.approx;
      ccenum = _coreIndexJs.ccenum;
      error = _coreIndexJs.error;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_decoratorNodeJs) {
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_menuCommonJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_POSE = _menuCommonJs.POSE_GRAPH_NODE_MENU_PREFIX_POSE;
    }, function (_intensitySpecificationJs) {
      IntensitySpecification = _intensitySpecificationJs.IntensitySpecification;
    }, function (_modifyPoseBaseJs) {
      PoseNodeModifyPoseBase = _modifyPoseBaseJs.PoseNodeModifyPoseBase;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }, function (_transformSpaceJs) {
      TransformSpace = _transformSpaceJs.TransformSpace;
    }, function (_coreTransformJs) {
      Transform = _coreTransformJs.Transform;
    }],
    execute: function () {
      (function (TransformOperation) {
        TransformOperation[TransformOperation["LEAVE_UNCHANGED"] = 0] = "LEAVE_UNCHANGED";
        TransformOperation[TransformOperation["REPLACE"] = 1] = "REPLACE";
        TransformOperation[TransformOperation["ADD"] = 2] = "ADD";
      })(TransformOperation || _export("TransformOperation", TransformOperation = {}));
      ccenum(TransformOperation);
      APPLY_INTENSITY_EPSILON = 1e-5;
      cacheTransform = new Transform();
      _export("PoseNodeApplyTransform", PoseNodeApplyTransform = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}PoseNodeApplyTransform`), _dec2 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3 = poseGraphNodeAppearance({
        themeColor: '#72A869'
      }), _dec4 = type(TransformOperation), _dec5 = input({
        type: PoseGraphType.VEC3
      }), _dec6 = visible(function visible() {
        return this.positionOperation !== TransformOperation.LEAVE_UNCHANGED;
      }), _dec7 = type(TransformOperation), _dec8 = input({
        type: PoseGraphType.QUAT
      }), _dec9 = visible(function visible() {
        return this.rotationOperation !== TransformOperation.LEAVE_UNCHANGED;
      }), _dec10 = range([0.0, 1.0, 0.01]), _dec11 = type(TransformSpace), _dec12 = input({
        type: PoseGraphType.FLOAT
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class PoseNodeApplyTransform extends PoseNodeModifyPoseBase {
        constructor(...args) {
          super(...args);
          this.node = _initializer && _initializer();
          this.positionOperation = _initializer2 && _initializer2();
          _initializerDefineProperty(this, "position", _descriptor, this);
          this.rotationOperation = _initializer3 && _initializer3();
          _initializerDefineProperty(this, "rotation", _descriptor2, this);
          this.intensity = _initializer4 && _initializer4();
          this.transformSpace = _initializer5 && _initializer5();
          this._transformHandle = null;
        }
        get intensityValue() {
          return this.intensity.value;
        }
        set intensityValue(value) {
          this.intensity.value = value;
        }
        bind(context) {
          const {
            node: nodeName
          } = this;
          super.bind(context);
          if (!nodeName) {
            return;
          }
          const transformHandle = context.bindTransformByName(nodeName);
          if (!transformHandle) {
            error(`Failed to bind transform ${nodeName}`);
            return;
          }
          this._transformHandle = transformHandle;
          this.intensity.bind(context);
        }
        getPoseTransformSpaceRequirement() {
          return PoseTransformSpaceRequirement.NO;
        }
        modifyPose(context, inputPose, modificationQueue) {
          const {
            _transformHandle: transformHandle
          } = this;
          if (!transformHandle) {
            return inputPose;
          }
          const intensity = this.intensity.evaluate(inputPose);

          // If intensity is too small. Takes no effect.
          if (intensity < APPLY_INTENSITY_EPSILON) {
            return inputPose;
          }
          const fullIntensity = approx(intensity, 1.0, APPLY_INTENSITY_EPSILON);
          const {
            index: transformIndex
          } = transformHandle;
          const nodeTransform = inputPose.transforms.getTransform(transformIndex, cacheTransform);
          const {
            rotationOperation
          } = this;
          if (rotationOperation !== TransformOperation.LEAVE_UNCHANGED) {
            const {
              rotation,
              transformSpace: rotationSpace
            } = this;
            context._convertPoseSpaceTransformToTargetSpace(nodeTransform, rotationSpace, inputPose, transformIndex);
            switch (rotationOperation) {
              default:
              case TransformOperation.REPLACE:
                replaceRotation(nodeTransform, rotation, intensity, fullIntensity);
                break;
              case TransformOperation.ADD:
                addRotation(nodeTransform, rotation, intensity, fullIntensity);
                break;
            }
            context._convertTransformToPoseTransformSpace(nodeTransform, rotationSpace, inputPose, transformIndex);
          }
          const {
            positionOperation
          } = this;
          if (positionOperation !== TransformOperation.LEAVE_UNCHANGED) {
            const {
              position,
              transformSpace: positionSpace
            } = this;
            context._convertPoseSpaceTransformToTargetSpace(nodeTransform, positionSpace, inputPose, transformIndex);
            switch (positionOperation) {
              default:
              case TransformOperation.REPLACE:
                replacePosition(nodeTransform, position, intensity, fullIntensity);
                break;
              case TransformOperation.ADD:
                addPosition(nodeTransform, position, intensity, fullIntensity);
                break;
            }
            context._convertTransformToPoseTransformSpace(nodeTransform, positionSpace, inputPose, transformIndex);
          }
          modificationQueue.push(transformIndex, nodeTransform);
          return inputPose;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "node", [serializable, editable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "positionOperation", [serializable, editable, _dec4], function () {
        return TransformOperation.LEAVE_UNCHANGED;
      }), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "position", [serializable, editable, _dec5, _dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "rotationOperation", [serializable, editable, _dec7], function () {
        return TransformOperation.LEAVE_UNCHANGED;
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rotation", [serializable, editable, _dec8, _dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Quat();
        }
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "intensity", [serializable, editable, _dec10], function () {
        return new IntensitySpecification();
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "transformSpace", [serializable, editable, _dec11], function () {
        return TransformSpace.WORLD;
      }), _applyDecoratedDescriptor(_class2.prototype, "intensityValue", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "intensityValue"), _class2.prototype)), _class2)) || _class) || _class) || _class));
      ({
        replace: replacePosition,
        add: addPosition
      } = (() => {
        const cacheInput = new Vec3();
        const cacheResult = new Vec3();
        return {
          replace,
          add
        };
        function replace(transform, value, intensity, fullIntensity) {
          if (fullIntensity) {
            transform.position = value;
          } else {
            const inputPosition = Vec3.copy(cacheInput, transform.position);
            Vec3.lerp(inputPosition, inputPosition, value, intensity);
            transform.position = inputPosition;
          }
        }
        function add(transform, value, intensity, fullIntensity) {
          const result = cacheResult;
          if (fullIntensity) {
            Vec3.copy(result, value);
          } else {
            Vec3.slerp(result, Vec3.ZERO, value, intensity);
          }
          Vec3.add(result, transform.position, result);
          transform.position = result;
        }
      })());
      ({
        replace: replaceRotation,
        add: addRotation
      } = (() => {
        const cacheInput = new Quat();
        const cacheResult = new Quat();
        return {
          replace,
          add
        };
        function replace(transform, value, intensity, fullIntensity) {
          if (fullIntensity) {
            transform.rotation = value;
          } else {
            const inputRotation = Quat.copy(cacheInput, transform.rotation);
            Quat.slerp(inputRotation, inputRotation, value, intensity);
            transform.rotation = inputRotation;
          }
        }
        function add(transform, value, intensity, fullIntensity) {
          const inputRotation = Quat.copy(cacheInput, transform.rotation);
          const resultRotation = cacheResult;
          if (fullIntensity) {
            Quat.copy(resultRotation, value);
          } else {
            Quat.slerp(resultRotation, Quat.IDENTITY, value, intensity);
          }
          Quat.multiply(resultRotation, resultRotation, inputRotation);
          transform.rotation = resultRotation;
        }
      })());
      if (EDITOR) {
        PoseNodeApplyTransform.prototype.getTitle = function getTitle() {
          if (this.node) {
            return [`ENGINE.classes.${CLASS_NAME_PREFIX_ANIM}PoseNodeApplyTransform.title`, {
              nodeName: this.node
            }];
          }
          return undefined;
        };
      }
    }
  };
});