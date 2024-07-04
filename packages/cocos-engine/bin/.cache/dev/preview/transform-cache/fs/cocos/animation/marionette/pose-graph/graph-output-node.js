System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/graph-output-node.js", ["../../../core/data/decorators/index.js", "../../define.js", "./foundation/type-system.js", "./foundation/pose-graph-node.js", "./decorator/node.js", "./decorator/input.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, CLASS_NAME_PREFIX_ANIM, PoseGraphType, PoseGraphNode, poseGraphNodeAppearance, inputUnchecked, _dec, _dec2, _dec3, _class, _class2, _descriptor, PoseGraphOutputNode;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      _export("PoseGraphOutputNode", PoseGraphOutputNode = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseGraphOutputNode"), _dec2 = poseGraphNodeAppearance({
        themeColor: '#CD3A58',
        inline: true
      }), _dec3 = inputUnchecked({
        type: PoseGraphType.POSE
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_PoseGraphNode) {
        _inheritsLoose(PoseGraphOutputNode, _PoseGraphNode);
        function PoseGraphOutputNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PoseGraphNode.call.apply(_PoseGraphNode, [this].concat(args)) || this;
          // Don't use @input since it requires the owner class being subclass of `PoseNode`.
          _initializerDefineProperty(_this, "pose", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        return PoseGraphOutputNode;
      }(PoseGraphNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pose", [serializable, _dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
    }
  };
});