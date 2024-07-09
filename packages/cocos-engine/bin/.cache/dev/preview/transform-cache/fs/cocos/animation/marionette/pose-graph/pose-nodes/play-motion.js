System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/play-motion.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/data/decorators/index.js", "../../../define.js", "../../motion/clip-motion.js", "../../create-eval.js", "../pose-node.js", "../decorator/input.js", "../foundation/type-system.js", "../motion-sync/motion-sync-info.js", "../decorator/node.js", "./menu-common.js", "./play-or-sample-motion-pose-node-shared.js", "../../../../core/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, editable, serializable, unit, CLASS_NAME_PREFIX_ANIM, ClipMotion, createEval, PoseNode, input, PoseGraphType, MotionSyncInfo, poseGraphCreateNodeFactory, poseGraphNodeAppearance, poseGraphNodeCategory, POSE_GRAPH_NODE_MENU_PREFIX_POSE, getEnterInfo, getTileBase, makeCreateNodeFactory, clamp01, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, _descriptor, _descriptor2, ZERO_DURATION_THRESHOLD, PoseNodePlayMotion, Workspace;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
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
      unit = _coreDataDecoratorsIndexJs.unit;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_motionClipMotionJs) {
      ClipMotion = _motionClipMotionJs.ClipMotion;
    }, function (_createEvalJs) {
      createEval = _createEvalJs.createEval;
    }, function (_poseNodeJs) {
      PoseNode = _poseNodeJs.PoseNode;
    }, function (_decoratorInputJs) {
      input = _decoratorInputJs.input;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }, function (_motionSyncMotionSyncInfoJs) {
      MotionSyncInfo = _motionSyncMotionSyncInfoJs.MotionSyncInfo;
    }, function (_decoratorNodeJs) {
      poseGraphCreateNodeFactory = _decoratorNodeJs.poseGraphCreateNodeFactory;
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_menuCommonJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_POSE = _menuCommonJs.POSE_GRAPH_NODE_MENU_PREFIX_POSE;
    }, function (_playOrSampleMotionPoseNodeSharedJs) {
      getEnterInfo = _playOrSampleMotionPoseNodeSharedJs.getEnterInfo;
      getTileBase = _playOrSampleMotionPoseNodeSharedJs.getTileBase;
      makeCreateNodeFactory = _playOrSampleMotionPoseNodeSharedJs.makeCreateNodeFactory;
    }, function (_coreIndexJs) {
      clamp01 = _coreIndexJs.clamp01;
    }],
    execute: function () {
      ZERO_DURATION_THRESHOLD = 1e-5;
      _export("PoseNodePlayMotion", PoseNodePlayMotion = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodePlayMotion"), _dec2 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE), _dec3 = poseGraphCreateNodeFactory(makeCreateNodeFactory(function (motion) {
        var node = new PoseNodePlayMotion();
        node.motion = motion;
        return node;
      })), _dec4 = poseGraphNodeAppearance({
        themeColor: '#227F9B'
      }), _dec5 = input({
        type: PoseGraphType.FLOAT
      }), _dec6 = unit('s'), _dec7 = input({
        type: PoseGraphType.FLOAT
      }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_PoseNode) {
        _inheritsLoose(PoseNodePlayMotion, _PoseNode);
        function PoseNodePlayMotion() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PoseNode.call.apply(_PoseNode, [this].concat(args)) || this;
          _this.motion = _initializer && _initializer();
          _this.syncInfo = _initializer2 && _initializer2();
          _initializerDefineProperty(_this, "startTime", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speedMultiplier", _descriptor2, _assertThisInitialized(_this));
          _this._workspace = null;
          _this._runtimeSyncRecord = undefined;
          return _this;
        }
        var _proto = PoseNodePlayMotion.prototype;
        _proto.bind = function bind(context) {
          var motion = this.motion;
          if (!motion) {
            return;
          }
          var motionEval = motion[createEval](context, false);
          if (!motionEval) {
            return;
          }
          this._workspace = new Workspace(motionEval, motionEval.createPort());
          if (this.syncInfo.group) {
            this._runtimeSyncRecord = context.motionSyncManager.register(this.syncInfo);
          }
        };
        _proto.settle = function settle(context) {
          // override
        };
        _proto.reenter = function reenter() {
          if (this._workspace) {
            var runtimeSyncRecord = this._runtimeSyncRecord,
              duration = this._workspace.motionEval.duration;

            // TODO: cocos/cocos-engine#15305
            this._forceEvaluateEvaluation();
            var startTimeNormalized = duration < ZERO_DURATION_THRESHOLD ? 0.0 : clamp01(this.startTime / duration);
            if (runtimeSyncRecord) {
              runtimeSyncRecord.notifyRenter(startTimeNormalized);
            } else {
              this._workspace.normalizedTime = startTimeNormalized;
            }
            this._workspace.lastIndicativeWeight = 0.0;
          }
        };
        _proto.doUpdate = function doUpdate(context) {
          if (this._workspace) {
            var deltaTime = context.deltaTime;
            var runtimeSyncRecord = this._runtimeSyncRecord;
            var duration = this._workspace.motionEval.duration;
            var normalizedDeltaTime = 0.0;
            if (duration > ZERO_DURATION_THRESHOLD) {
              normalizedDeltaTime = deltaTime * this.speedMultiplier / duration;
            }
            if (runtimeSyncRecord) {
              runtimeSyncRecord.notifyUpdate(normalizedDeltaTime, context.indicativeWeight);
            } else {
              this._workspace.normalizedTime += normalizedDeltaTime;
            }
            this._workspace.lastIndicativeWeight = context.indicativeWeight;
          }
        };
        _proto.doEvaluate = function doEvaluate(context) {
          if (!this._workspace) {
            return context.pushDefaultedPose();
          } else {
            var normalizedTime = this._runtimeSyncRecord ? this._runtimeSyncRecord.getSyncedEnterTime() : this._workspace.normalizedTime;
            return this._workspace.motionEvalPort.evaluate(normalizedTime, context);
          }
        };
        _createClass(PoseNodePlayMotion, [{
          key: "lastIndicativeWeight",
          get:
          /**
           * The weight of this node indicated in last update.
           */
          function get() {
            var _this$_workspace$last, _this$_workspace;
            return (_this$_workspace$last = (_this$_workspace = this._workspace) === null || _this$_workspace === void 0 ? void 0 : _this$_workspace.lastIndicativeWeight) !== null && _this$_workspace$last !== void 0 ? _this$_workspace$last : 0.0;
          }

          /**
           * Normalized time elapsed on specified motion.
           */
        }, {
          key: "elapsedMotionTime",
          get: function get() {
            var _this$_workspace$norm, _this$_workspace2;
            return (_this$_workspace$norm = (_this$_workspace2 = this._workspace) === null || _this$_workspace2 === void 0 ? void 0 : _this$_workspace2.normalizedTime) !== null && _this$_workspace$norm !== void 0 ? _this$_workspace$norm : 0.0;
          }
        }]);
        return PoseNodePlayMotion;
      }(PoseNode), (_initializer = _applyDecoratedInitializer(_class2.prototype, "motion", [serializable, editable], function () {
        return new ClipMotion();
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "syncInfo", [serializable, editable], function () {
        return new MotionSyncInfo();
      }), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "startTime", [serializable, _dec5, _dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speedMultiplier", [serializable, _dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class2)) || _class) || _class) || _class) || _class));
      Workspace = function Workspace(motionEval, motionEvalPort) {
        this.normalizedTime = 0.0;
        this.lastIndicativeWeight = 0.0;
        this.motionEval = motionEval;
        this.motionEvalPort = motionEvalPort;
      };
      if (EDITOR) {
        PoseNodePlayMotion.prototype.getTitle = function getTitle() {
          return getTileBase("ENGINE.classes." + CLASS_NAME_PREFIX_ANIM + "PoseNodePlayMotion.title", this.motion);
        };
        PoseNodePlayMotion.prototype.getEnterInfo = getEnterInfo;
      }
    }
  };
});