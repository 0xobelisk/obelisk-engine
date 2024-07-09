System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/choose-pose/choose-pose-by-boolean.js", ["../../../../../core/data/decorators/index.js", "../../../../define.js", "../../decorator/input.js", "../../decorator/node.js", "./menu.js", "./choose-pose-base.js", "../../foundation/type-system.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, CLASS_NAME_PREFIX_ANIM, input, poseGraphNodeAppearance, poseGraphNodeCategory, POSE_GRAPH_NODE_MENU_PREFIX_CHOOSE, PoseNodeChoosePoseBase, PoseGraphType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, PoseNodeChoosePoseByBoolean;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_decoratorInputJs) {
      input = _decoratorInputJs.input;
    }, function (_decoratorNodeJs) {
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
      poseGraphNodeCategory = _decoratorNodeJs.poseGraphNodeCategory;
    }, function (_menuJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_CHOOSE = _menuJs.POSE_GRAPH_NODE_MENU_PREFIX_CHOOSE;
    }, function (_choosePoseBaseJs) {
      PoseNodeChoosePoseBase = _choosePoseBaseJs.PoseNodeChoosePoseBase;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }],
    execute: function () {
      _export("PoseNodeChoosePoseByBoolean", PoseNodeChoosePoseByBoolean = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodeChoosePoseByBoolean"), _dec2 = poseGraphNodeCategory(POSE_GRAPH_NODE_MENU_PREFIX_CHOOSE), _dec3 = poseGraphNodeAppearance({
        themeColor: '#D07979'
      }), _dec4 = input({
        type: PoseGraphType.POSE
      }), _dec5 = input({
        type: PoseGraphType.POSE
      }), _dec6 = input({
        type: PoseGraphType.FLOAT
      }), _dec7 = input({
        type: PoseGraphType.FLOAT
      }), _dec8 = input({
        type: PoseGraphType.BOOLEAN
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_PoseNodeChoosePoseBa) {
        _inheritsLoose(PoseNodeChoosePoseByBoolean, _PoseNodeChoosePoseBa);
        function PoseNodeChoosePoseByBoolean() {
          var _this;
          _this = _PoseNodeChoosePoseBa.call(this, 2) || this;
          _initializerDefineProperty(_this, "choice", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PoseNodeChoosePoseByBoolean.prototype;
        _proto.getChosenIndex = function getChosenIndex() {
          return this.choice ? 0 : 1;
        };
        _createClass(PoseNodeChoosePoseByBoolean, [{
          key: "truePose",
          get: function get() {
            return this._poses[0];
          },
          set: function set(value) {
            this._poses[0] = value;
          }
        }, {
          key: "falsePose",
          get: function get() {
            return this._poses[1];
          },
          set: function set(value) {
            this._poses[1] = value;
          }
        }, {
          key: "trueFadeInDuration",
          get: function get() {
            return this._fadeInDurations[0];
          },
          set: function set(value) {
            this._fadeInDurations[0] = value;
          }
        }, {
          key: "falseFadeInDuration",
          get: function get() {
            return this._fadeInDurations[1];
          },
          set: function set(value) {
            this._fadeInDurations[1] = value;
          }
        }]);
        return PoseNodeChoosePoseByBoolean;
      }(PoseNodeChoosePoseBase), (_applyDecoratedDescriptor(_class2.prototype, "truePose", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "truePose"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "falsePose", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "falsePose"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "trueFadeInDuration", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "trueFadeInDuration"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "falseFadeInDuration", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "falseFadeInDuration"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "choice", [serializable, _dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class) || _class));
    }
  };
});