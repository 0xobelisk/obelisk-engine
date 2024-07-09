System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/filtering-blend.js", ["../../../../core/data/decorators/index.js", "../../../core/pose.js", "../../../define.js", "../decorator/node.js", "./menu-common.js", "../../animation-mask.js", "./blend-two-pose-base.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, serializable, type, blendPoseInto, CLASS_NAME_PREFIX_ANIM, poseGraphNodeAppearance, poseGraphNodeCategory, POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND, AnimationMask, PoseNodeBlendTwoPoseBase, _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, PoseNodeFilteringBlend;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_corePoseJs) {
      blendPoseInto = _corePoseJs.blendPoseInto;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_decoratorNodeJs) {
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_menuCommonJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND = _menuCommonJs.POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND;
    }, function (_animationMaskJs) {
      AnimationMask = _animationMaskJs.AnimationMask;
    }, function (_blendTwoPoseBaseJs) {
      PoseNodeBlendTwoPoseBase = _blendTwoPoseBaseJs.PoseNodeBlendTwoPoseBase;
    }],
    execute: function () {
      _export("PoseNodeFilteringBlend", PoseNodeFilteringBlend = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodeFilteringBlend"), _dec2 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND), _dec3 = poseGraphNodeAppearance({
        themeColor: '#72A869'
      }), _dec4 = type(AnimationMask), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_PoseNodeBlendTwoPose) {
        _inheritsLoose(PoseNodeFilteringBlend, _PoseNodeBlendTwoPose);
        function PoseNodeFilteringBlend() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PoseNodeBlendTwoPose.call.apply(_PoseNodeBlendTwoPose, [this].concat(args)) || this;
          _this.mask = _initializer && _initializer();
          _this._transformFilter = undefined;
          return _this;
        }
        var _proto = PoseNodeFilteringBlend.prototype;
        _proto.settle = function settle(context) {
          _PoseNodeBlendTwoPose.prototype.settle.call(this, context);
          if (this.mask) {
            var transformFilter = context.createTransformFilter(this.mask);
            this._transformFilter = transformFilter;
          }
        };
        _proto.doBlend = function doBlend(pose0, pose1, ratio) {
          blendPoseInto(pose0, pose1, ratio, this._transformFilter);
        };
        return PoseNodeFilteringBlend;
      }(PoseNodeBlendTwoPoseBase), (_initializer = _applyDecoratedInitializer(_class2.prototype, "mask", [serializable, editable, _dec4], function () {
        return null;
      })), _class2)) || _class) || _class) || _class));
    }
  };
});