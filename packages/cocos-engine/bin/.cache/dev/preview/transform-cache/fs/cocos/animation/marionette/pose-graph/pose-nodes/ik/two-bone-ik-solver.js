System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/ik/two-bone-ik-solver.js", ["../../../../../../../virtual/internal%253Aconstants.js", "../../../../../core/data/decorators/index.js", "../../../../define.js", "../../pose-node.js", "../../../../../core/index.js", "../../decorator/input.js", "../../decorator/node.js", "../modify-pose-base.js", "./solve-two-bone-ik.js", "../../../../core/transform.js", "../../foundation/type-system.js", "../transform-space.js", "./menu.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, editable, serializable, type, visible, CLASS_NAME_PREFIX_ANIM, PoseTransformSpaceRequirement, assertIsTrue, ccenum, Vec3, input, poseGraphNodeCategory, PoseNodeModifyPoseBase, solveTwoBoneIK, Transform, PoseGraphType, TransformSpace, POSE_GRAPH_NODE_MENU_PREFIX_IK, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class4, _class5, _initializer5, _initializer6, _initializer7, _initializer8, cacheRootTransform, cacheMiddleTransform, cacheEndEffectorTransform, cacheEndEffectorTargetPosition, cachePoleTargetPosition, cacheTransform_evaluateTarget, TargetSpecificationType, TargetSpecification, PoseNodeTwoBoneIKSolver, Workspace;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      TargetSpecification = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodeTwoBoneIKSolver.TargetSpecification"), _dec2 = type(TargetSpecificationType), _dec3 = visible(function visible() {
        return this.type === TargetSpecificationType.VALUE;
      }), _dec4 = type(TransformSpace), _dec5 = visible(function visible() {
        return this.type === TargetSpecificationType.VALUE;
      }), _dec6 = visible(function visible() {
        return this.type === TargetSpecificationType.BONE;
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function TargetSpecification(type) {
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
        var _proto = TargetSpecification.prototype;
        _proto.bind = function bind(context, sourceBoneHandle) {
          this._sourceBoneHandle = sourceBoneHandle;
          if (this.type === TargetSpecificationType.BONE && this.targetBone) {
            var _context$bindTransfor;
            this._targetBoneHandle = (_context$bindTransfor = context.bindTransformByName(this.targetBone)) !== null && _context$bindTransfor !== void 0 ? _context$bindTransfor : undefined;
          }
        };
        _proto.evaluate = function evaluate(outTargetPosition, pose, context) {
          assertIsTrue(this._sourceBoneHandle);
          if (this._targetBoneHandle) {
            pose.transforms.getPosition(this._targetBoneHandle.index, outTargetPosition);
          } else if (this.type === TargetSpecificationType.NONE) {
            pose.transforms.getPosition(this._sourceBoneHandle.index, outTargetPosition);
          } else {
            var targetTransform = Transform.setIdentity(cacheTransform_evaluateTarget);
            targetTransform.position = this.targetPosition;
            context._convertTransformToPoseTransformSpace(targetTransform, this.targetPositionSpace, pose, this._sourceBoneHandle.index);
            Vec3.copy(outTargetPosition, targetTransform.position);
          }
          return outTargetPosition;
        };
        return TargetSpecification;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "type", [serializable, editable, _dec2], function () {
        return TargetSpecificationType.VALUE;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "targetPosition", [serializable, editable, _dec3], function () {
        return new Vec3();
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "targetPositionSpace", [serializable, editable, _dec4, _dec5], function () {
        return TransformSpace.WORLD;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "targetBone", [serializable, editable, _dec6], function () {
        return '';
      })), _class2)) || _class);
      _export("PoseNodeTwoBoneIKSolver", PoseNodeTwoBoneIKSolver = (_dec7 = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodeTwoBoneIKSolver"), _dec8 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_IK), _dec9 = input({
        type: PoseGraphType.VEC3
      }), _dec10 = visible(function visible() {
        return this.endEffectorTarget.type === TargetSpecificationType.VALUE;
      }), _dec11 = input({
        type: PoseGraphType.VEC3
      }), _dec12 = visible(function visible() {
        return this.poleTarget.type === TargetSpecificationType.VALUE;
      }), _dec7(_class4 = _dec8(_class4 = (_class5 = /*#__PURE__*/function (_PoseNodeModifyPoseBa) {
        _inheritsLoose(PoseNodeTwoBoneIKSolver, _PoseNodeModifyPoseBa);
        function PoseNodeTwoBoneIKSolver() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PoseNodeModifyPoseBa.call.apply(_PoseNodeModifyPoseBa, [this].concat(args)) || this;
          _this.debug = _initializer5 && _initializer5();
          _this.endEffectorBoneName = _initializer6 && _initializer6();
          _this.endEffectorTarget = _initializer7 && _initializer7();
          _this.poleTarget = _initializer8 && _initializer8();
          _this._workspace = undefined;
          return _this;
        }
        var _proto2 = PoseNodeTwoBoneIKSolver.prototype;
        _proto2.bind = function bind(context) {
          _PoseNodeModifyPoseBa.prototype.bind.call(this, context);
          if (this.endEffectorBoneName) {
            var parentBoneName = context.getParentBoneNameByName(this.endEffectorBoneName);
            var ikRootBoneName = parentBoneName ? context.getParentBoneNameByName(parentBoneName) : '';
            if (parentBoneName && ikRootBoneName) {
              var _hEndEffector = context.bindTransformByName(this.endEffectorBoneName);
              var _hMiddle = context.bindTransformByName(parentBoneName);
              var hIKRoot = context.bindTransformByName(ikRootBoneName);
              if (!_hEndEffector || !_hMiddle || !hIKRoot) {
                _hEndEffector === null || _hEndEffector === void 0 ? void 0 : _hEndEffector.destroy();
                _hMiddle === null || _hMiddle === void 0 ? void 0 : _hMiddle.destroy();
                hIKRoot === null || hIKRoot === void 0 ? void 0 : hIKRoot.destroy();
              } else {
                this.endEffectorTarget.bind(context, _hEndEffector);
                this.poleTarget.bind(context, _hMiddle);
                this._workspace = new Workspace(_hEndEffector, _hMiddle, hIKRoot);
              }
            }
          }
        };
        _proto2.getPoseTransformSpaceRequirement = function getPoseTransformSpaceRequirement() {
          return PoseTransformSpaceRequirement.COMPONENT;
        };
        _proto2.modifyPose = function modifyPose(context, inputPose, modificationQueue) {
          var workspace = this._workspace;
          if (!workspace) {
            return;
          }
          var iRootTransform = workspace.hRoot.index,
            iMiddleTransform = workspace.hMiddle.index,
            iEndEffectorTransform = workspace.hEndEffector.index;

          // Fetch transforms.
          var rootTransform = inputPose.transforms.getTransform(iRootTransform, cacheRootTransform);
          var middleTransform = inputPose.transforms.getTransform(iMiddleTransform, cacheMiddleTransform);
          var endEffectorTransform = inputPose.transforms.getTransform(iEndEffectorTransform, cacheEndEffectorTransform);
          var endEffectorTargetPosition = this.endEffectorTarget.evaluate(cacheEndEffectorTargetPosition, inputPose, context);
          var poleTargetPosition = this.poleTarget.evaluate(cachePoleTargetPosition, inputPose, context);

          // Solve.
          solveTwoBoneIK(rootTransform, middleTransform, endEffectorTransform, endEffectorTargetPosition, poleTargetPosition, this.debug ? this : undefined);
          modificationQueue.push(iRootTransform, rootTransform);
          modificationQueue.push(iMiddleTransform, middleTransform);
          modificationQueue.push(iEndEffectorTransform, endEffectorTransform);
        };
        _createClass(PoseNodeTwoBoneIKSolver, [{
          key: "endEffectorTargetPosition",
          get: function get() {
            return this.endEffectorTarget.targetPosition;
          },
          set: function set(value) {
            Vec3.copy(this.endEffectorTarget.targetPosition, value);
          }
        }, {
          key: "poleTargetPosition",
          get: function get() {
            return this.poleTarget.targetPosition;
          },
          set: function set(value) {
            Vec3.copy(this.poleTarget.targetPosition, value);
          }
        }]);
        return PoseNodeTwoBoneIKSolver;
      }(PoseNodeModifyPoseBase), (_initializer5 = _applyDecoratedInitializer(_class5.prototype, "debug", [serializable, editable], function () {
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
            return ["ENGINE.classes." + CLASS_NAME_PREFIX_ANIM + "PoseNodeTwoBoneIKSolver.title", {
              endEffectorBoneName: this.endEffectorBoneName
            }];
          }
          return undefined;
        };
      }
      Workspace = function Workspace(hEndEffector, hMiddle, hRoot) {
        this.hEndEffector = hEndEffector;
        this.hMiddle = hMiddle;
        this.hRoot = hRoot;
      };
    }
  };
});