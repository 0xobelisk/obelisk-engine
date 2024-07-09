System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/copy-transform.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/data/decorators/index.js", "../../../define.js", "../pose-node.js", "../../../../core/index.js", "../decorator/node.js", "./menu-common.js", "./modify-pose-base.js", "../../../core/transform.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, editable, serializable, type, CLASS_NAME_PREFIX_ANIM, PoseTransformSpaceRequirement, ccenum, poseGraphNodeAppearance, poseGraphNodeCategory, POSE_GRAPH_NODE_MENU_PREFIX_POSE, PoseNodeModifyPoseBase, Transform, _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, _initializer2, _initializer3, cacheTransform, CopySpace, PoseNodeCopyTransform, Workspace;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export("CopySpace", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_poseNodeJs) {
      PoseTransformSpaceRequirement = _poseNodeJs.PoseTransformSpaceRequirement;
    }, function (_coreIndexJs) {
      ccenum = _coreIndexJs.ccenum;
    }, function (_decoratorNodeJs) {
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_menuCommonJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_POSE = _menuCommonJs.POSE_GRAPH_NODE_MENU_PREFIX_POSE;
    }, function (_modifyPoseBaseJs) {
      PoseNodeModifyPoseBase = _modifyPoseBaseJs.PoseNodeModifyPoseBase;
    }, function (_coreTransformJs) {
      Transform = _coreTransformJs.Transform;
    }],
    execute: function () {
      cacheTransform = new Transform();
      (function (CopySpace) {
        CopySpace[CopySpace["LOCAL"] = 0] = "LOCAL";
        CopySpace[CopySpace["COMPONENT"] = 1] = "COMPONENT";
      })(CopySpace || _export("CopySpace", CopySpace = {}));
      ccenum(CopySpace);
      _export("PoseNodeCopyTransform", PoseNodeCopyTransform = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodeCopyTransform"), _dec2 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3 = poseGraphNodeAppearance({
        themeColor: '#72A869'
      }), _dec4 = type(CopySpace), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_PoseNodeModifyPoseBa) {
        _inheritsLoose(PoseNodeCopyTransform, _PoseNodeModifyPoseBa);
        function PoseNodeCopyTransform() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PoseNodeModifyPoseBa.call.apply(_PoseNodeModifyPoseBa, [this].concat(args)) || this;
          _this.sourceNodeName = _initializer && _initializer();
          _this.targetNodeName = _initializer2 && _initializer2();
          _this.space = _initializer3 && _initializer3();
          _this._workspace = undefined;
          return _this;
        }
        var _proto = PoseNodeCopyTransform.prototype;
        _proto.bind = function bind(context) {
          _PoseNodeModifyPoseBa.prototype.bind.call(this, context);
          var sourceTransformHandle = context.bindTransformByName(this.sourceNodeName);
          var targetTransformHandle = context.bindTransformByName(this.targetNodeName);
          if (!sourceTransformHandle || !targetTransformHandle) {
            sourceTransformHandle === null || sourceTransformHandle === void 0 ? void 0 : sourceTransformHandle.destroy();
            targetTransformHandle === null || targetTransformHandle === void 0 ? void 0 : targetTransformHandle.destroy();
            return;
          }
          this._workspace = new Workspace(sourceTransformHandle, targetTransformHandle);
        };
        _proto.modifyPose = function modifyPose(context, inputPose) {
          var workspace = this._workspace;
          if (!workspace) {
            return;
          }
          var sourceTransformIndex = workspace.hSource.index,
            targetTransformIndex = workspace.hTarget.index;
          var transform = inputPose.transforms.getTransform(sourceTransformIndex, cacheTransform);
          inputPose.transforms.setTransform(targetTransformIndex, transform);
        };
        _proto.getPoseTransformSpaceRequirement = function getPoseTransformSpaceRequirement() {
          return this.space === CopySpace.COMPONENT ? PoseTransformSpaceRequirement.COMPONENT : PoseTransformSpaceRequirement.LOCAL;
        };
        return PoseNodeCopyTransform;
      }(PoseNodeModifyPoseBase), (_initializer = _applyDecoratedInitializer(_class2.prototype, "sourceNodeName", [serializable, editable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "targetNodeName", [serializable, editable], function () {
        return '';
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "space", [serializable, editable, _dec4], function () {
        return CopySpace.COMPONENT;
      })), _class2)) || _class) || _class) || _class));
      Workspace = function Workspace(hSource, hTarget) {
        this.hSource = hSource;
        this.hTarget = hTarget;
      };
      if (EDITOR) {
        PoseNodeCopyTransform.prototype.getTitle = function getTitle() {
          if (this.sourceNodeName && this.targetNodeName) {
            return ["ENGINE.classes." + CLASS_NAME_PREFIX_ANIM + "PoseNodeCopyTransform.title", {
              sourceNodeName: this.sourceNodeName,
              targetNodeName: this.targetNodeName
            }];
          }
          return undefined;
        };
      }
    }
  };
});