System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/set-auxiliary-curve.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/data/decorators/index.js", "../../../define.js", "../../../../core/index.js", "../decorator/input.js", "../decorator/node.js", "./menu-common.js", "./modify-pose-base.js", "../foundation/type-system.js", "../pose-node.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, editable, serializable, type, CLASS_NAME_PREFIX_ANIM, ccenum, input, poseGraphNodeCategory, POSE_GRAPH_NODE_MENU_PREFIX_POSE, PoseNodeModifyPoseBase, PoseGraphType, PoseTransformSpaceRequirement, _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, _descriptor, _initializer2, SetAuxiliaryCurveFlag, PoseNodeSetAuxiliaryCurve;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
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
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_coreIndexJs) {
      ccenum = _coreIndexJs.ccenum;
    }, function (_decoratorInputJs) {
      input = _decoratorInputJs.input;
    }, function (_decoratorNodeJs) {
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_menuCommonJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_POSE = _menuCommonJs.POSE_GRAPH_NODE_MENU_PREFIX_POSE;
    }, function (_modifyPoseBaseJs) {
      PoseNodeModifyPoseBase = _modifyPoseBaseJs.PoseNodeModifyPoseBase;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }, function (_poseNodeJs) {
      PoseTransformSpaceRequirement = _poseNodeJs.PoseTransformSpaceRequirement;
    }],
    execute: function () {
      (function (SetAuxiliaryCurveFlag) {
        SetAuxiliaryCurveFlag[SetAuxiliaryCurveFlag["LEAVE_UNCHANGED"] = 0] = "LEAVE_UNCHANGED";
        SetAuxiliaryCurveFlag[SetAuxiliaryCurveFlag["REPLACE"] = 1] = "REPLACE";
        SetAuxiliaryCurveFlag[SetAuxiliaryCurveFlag["ADD"] = 2] = "ADD";
      })(SetAuxiliaryCurveFlag || (SetAuxiliaryCurveFlag = {}));
      ccenum(SetAuxiliaryCurveFlag);
      _export("PoseNodeSetAuxiliaryCurve", PoseNodeSetAuxiliaryCurve = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodeSetAuxiliaryCurve"), _dec2 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3 = input({
        type: PoseGraphType.FLOAT
      }), _dec4 = type(SetAuxiliaryCurveFlag), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_PoseNodeModifyPoseBa) {
        _inheritsLoose(PoseNodeSetAuxiliaryCurve, _PoseNodeModifyPoseBa);
        function PoseNodeSetAuxiliaryCurve() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PoseNodeModifyPoseBa.call.apply(_PoseNodeModifyPoseBa, [this].concat(args)) || this;
          _this.curveName = _initializer && _initializer();
          _initializerDefineProperty(_this, "curveValue", _descriptor, _assertThisInitialized(_this));
          _this.flag = _initializer2 && _initializer2();
          _this._handle = undefined;
          return _this;
        }
        var _proto = PoseNodeSetAuxiliaryCurve.prototype;
        _proto.bind = function bind(context) {
          _PoseNodeModifyPoseBa.prototype.bind.call(this, context);
          if (this.curveName) {
            this._handle = context.bindAuxiliaryCurve(this.curveName);
          }
        };
        _proto.getPoseTransformSpaceRequirement = function getPoseTransformSpaceRequirement() {
          return PoseTransformSpaceRequirement.NO;
        };
        _proto.modifyPose = function modifyPose(context, inputPose) {
          var handle = this._handle;
          if (!handle) {
            return;
          }
          switch (this.flag) {
            case SetAuxiliaryCurveFlag.REPLACE:
              inputPose.auxiliaryCurves[handle.index] = this.curveValue;
              break;
            case SetAuxiliaryCurveFlag.ADD:
              inputPose.auxiliaryCurves[handle.index] += this.curveValue;
              break;
            case SetAuxiliaryCurveFlag.LEAVE_UNCHANGED:
            default:
              break;
          }
        };
        return PoseNodeSetAuxiliaryCurve;
      }(PoseNodeModifyPoseBase), (_initializer = _applyDecoratedInitializer(_class2.prototype, "curveName", [serializable, editable], function () {
        return '';
      }), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "curveValue", [serializable, editable, _dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "flag", [serializable, editable, _dec4], function () {
        return SetAuxiliaryCurveFlag.REPLACE;
      })), _class2)) || _class) || _class));
      if (EDITOR) {
        PoseNodeSetAuxiliaryCurve.prototype.getTitle = function getTitle() {
          if (!this.curveName) {
            return undefined;
          }
          return ["ENGINE.classes." + CLASS_NAME_PREFIX_ANIM + "PoseNodeSetAuxiliaryCurve.title", {
            curveName: this.curveName
          }];
        };
      }
    }
  };
});