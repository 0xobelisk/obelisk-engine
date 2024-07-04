System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/blend-two-pose.js", ["../../../../core/data/decorators/index.js", "../../../core/pose.js", "../../../define.js", "../decorator/node.js", "./menu-common.js", "./blend-two-pose-base.js"], function (_export, _context) {
  "use strict";

  var ccclass, blendPoseInto, CLASS_NAME_PREFIX_ANIM, poseGraphNodeAppearance, poseGraphNodeCategory, POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND, PoseNodeBlendTwoPoseBase, _dec, _dec2, _dec3, _class, PoseNodeBlendTwoPose;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_corePoseJs) {
      blendPoseInto = _corePoseJs.blendPoseInto;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_decoratorNodeJs) {
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_menuCommonJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND = _menuCommonJs.POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND;
    }, function (_blendTwoPoseBaseJs) {
      PoseNodeBlendTwoPoseBase = _blendTwoPoseBaseJs.PoseNodeBlendTwoPoseBase;
    }],
    execute: function () {
      _export("PoseNodeBlendTwoPose", PoseNodeBlendTwoPose = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodeBlendTwoPose"), _dec2 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_POSE_BLEND), _dec3 = poseGraphNodeAppearance({
        themeColor: '#72A869'
      }), _dec(_class = _dec2(_class = _dec3(_class = /*#__PURE__*/function (_PoseNodeBlendTwoPose) {
        _inheritsLoose(PoseNodeBlendTwoPose, _PoseNodeBlendTwoPose);
        function PoseNodeBlendTwoPose() {
          return _PoseNodeBlendTwoPose.apply(this, arguments) || this;
        }
        var _proto = PoseNodeBlendTwoPose.prototype;
        _proto.doBlend = function doBlend(pose0, pose1, ratio) {
          return blendPoseInto(pose0, pose1, ratio);
        };
        return PoseNodeBlendTwoPose;
      }(PoseNodeBlendTwoPoseBase)) || _class) || _class) || _class));
    }
  };
});