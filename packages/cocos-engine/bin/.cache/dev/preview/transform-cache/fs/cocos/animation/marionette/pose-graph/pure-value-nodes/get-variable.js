System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pure-value-nodes/get-variable.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/index.js", "../../../../core/data/class-decorator.js", "../../variable/index.js", "../../../define.js", "../pure-value-node.js", "../decorator/node.js", "../foundation/type-system.js"], function (_export, _context) {
  "use strict";

  var EDITOR, editable, serializable, ccclass, VariableType, CLASS_NAME_PREFIX_ANIM, SingleOutputPVNode, poseGraphCreateNodeFactory, poseGraphNodeAppearance, poseGraphNodeHide, PoseGraphType, _dec, _dec2, _class, _class2, _initializer, _dec3, _dec4, _dec5, _class4, _dec6, _dec7, _dec8, _class5, _dec9, _dec10, _dec11, _class6, _dec12, _dec13, _dec14, _class7, _dec15, _dec16, _dec17, _class8, createNodeFactory, PVNodeGetVariableBase, PVNodeGetVariableFloat, PVNodeGetVariableInteger, PVNodeGetVariableBoolean, PVNodeGetVariableVec3, PVNodeGetVariableQuat;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreIndexJs) {
      editable = _coreIndexJs.editable;
      serializable = _coreIndexJs.serializable;
    }, function (_coreDataClassDecoratorJs) {
      ccclass = _coreDataClassDecoratorJs.ccclass;
    }, function (_variableIndexJs) {
      VariableType = _variableIndexJs.VariableType;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_pureValueNodeJs) {
      SingleOutputPVNode = _pureValueNodeJs.SingleOutputPVNode;
    }, function (_decoratorNodeJs) {
      poseGraphCreateNodeFactory = _decoratorNodeJs.poseGraphCreateNodeFactory;
      poseGraphNodeAppearance = _decoratorNodeJs.poseGraphNodeAppearance;
      poseGraphNodeHide = _decoratorNodeJs.poseGraphNodeHide;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }],
    execute: function () {
      createNodeFactory = {
        // eslint-disable-next-line arrow-body-style
        listEntries: function listEntries(context) {
          // eslint-disable-next-line arrow-body-style
          var entries = [];
          for (var _iterator = _createForOfIteratorHelperLoose(context.animationGraph.variables), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              variableName = _step$value[0],
              type = _step$value[1].type;
            if (type === VariableType.TRIGGER) {
              continue;
            }
            var poseGraphType = void 0;
            switch (type) {
              default:
                break;
              case VariableType.FLOAT:
                poseGraphType = PoseGraphType.FLOAT;
                break;
              case VariableType.INTEGER:
                poseGraphType = PoseGraphType.INTEGER;
                break;
              case VariableType.BOOLEAN:
                poseGraphType = PoseGraphType.BOOLEAN;
                break;
              case VariableType.VEC3_experimental:
                poseGraphType = PoseGraphType.VEC3;
                break;
              case VariableType.QUAT_experimental:
                poseGraphType = PoseGraphType.QUAT;
                break;
            }
            if (typeof poseGraphType === 'undefined') {
              continue;
            }
            entries.push({
              arg: {
                name: variableName,
                type: poseGraphType
              },
              menu: variableName
            });
          }
          return entries;
        },
        create: function create(arg) {
          var node;
          switch (arg.type) {
            default:
              throw new Error("Bad create node arg: " + PoseGraphType[arg.type]);
            case PoseGraphType.FLOAT:
              node = new PVNodeGetVariableFloat();
              break;
            case PoseGraphType.INTEGER:
              node = new PVNodeGetVariableInteger();
              break;
            case PoseGraphType.BOOLEAN:
              node = new PVNodeGetVariableBoolean();
              break;
            case PoseGraphType.VEC3:
              node = new PVNodeGetVariableVec3();
              break;
            case PoseGraphType.QUAT:
              node = new PVNodeGetVariableQuat();
              break;
          }
          node.variableName = arg.name;
          return node;
        }
      };
      _export("PVNodeGetVariableBase", PVNodeGetVariableBase = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PVNodeGetVariableBase"), _dec2 = poseGraphCreateNodeFactory(createNodeFactory), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_SingleOutputPVNode) {
        _inheritsLoose(PVNodeGetVariableBase, _SingleOutputPVNode);
        function PVNodeGetVariableBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SingleOutputPVNode.call.apply(_SingleOutputPVNode, [this].concat(args)) || this;
          _this.variableName = _initializer && _initializer();
          _this._varInstance = undefined;
          return _this;
        }
        var _proto = PVNodeGetVariableBase.prototype;
        _proto.link = function link(context) {
          this._varInstance = context.getVar(this.variableName);
        };
        return PVNodeGetVariableBase;
      }(SingleOutputPVNode), (_initializer = _applyDecoratedInitializer(_class2.prototype, "variableName", [editable, serializable], function () {
        return '';
      })), _class2)) || _class) || _class));
      if (EDITOR) {
        PVNodeGetVariableBase.prototype.getTitle = function getTitle() {
          if (!this.variableName) {
            return undefined;
          }
          return ["ENGINE.classes." + CLASS_NAME_PREFIX_ANIM + "PVNodeGetVariableBase.title", {
            variableName: this.variableName
          }];
        };
      }
      _export("PVNodeGetVariableFloat", PVNodeGetVariableFloat = (_dec3 = ccclass(CLASS_NAME_PREFIX_ANIM + "PVNodeGetVariableFloat"), _dec4 = poseGraphNodeHide(), _dec5 = poseGraphNodeAppearance({
        inline: true,
        themeColor: '#8471CF'
      }), _dec3(_class4 = _dec4(_class4 = _dec5(_class4 = /*#__PURE__*/function (_PVNodeGetVariableBas) {
        _inheritsLoose(PVNodeGetVariableFloat, _PVNodeGetVariableBas);
        function PVNodeGetVariableFloat() {
          return _PVNodeGetVariableBas.call(this, PoseGraphType.FLOAT) || this;
        }
        var _proto2 = PVNodeGetVariableFloat.prototype;
        _proto2.selfEvaluateDefaultOutput = function selfEvaluateDefaultOutput() {
          var _this$_varInstance;
          return (_this$_varInstance = this._varInstance) === null || _this$_varInstance === void 0 ? void 0 : _this$_varInstance.value; // TODO
        };
        return PVNodeGetVariableFloat;
      }(PVNodeGetVariableBase)) || _class4) || _class4) || _class4));
      _export("PVNodeGetVariableInteger", PVNodeGetVariableInteger = (_dec6 = ccclass(CLASS_NAME_PREFIX_ANIM + "PVNodeGetVariableInteger"), _dec7 = poseGraphNodeHide(), _dec8 = poseGraphNodeAppearance({
        inline: true,
        themeColor: '#2A90DC'
      }), _dec6(_class5 = _dec7(_class5 = _dec8(_class5 = /*#__PURE__*/function (_PVNodeGetVariableBas2) {
        _inheritsLoose(PVNodeGetVariableInteger, _PVNodeGetVariableBas2);
        function PVNodeGetVariableInteger() {
          return _PVNodeGetVariableBas2.call(this, PoseGraphType.INTEGER) || this;
        }
        var _proto3 = PVNodeGetVariableInteger.prototype;
        _proto3.selfEvaluateDefaultOutput = function selfEvaluateDefaultOutput() {
          var _this$_varInstance2;
          return (_this$_varInstance2 = this._varInstance) === null || _this$_varInstance2 === void 0 ? void 0 : _this$_varInstance2.value; // TODO
        };
        return PVNodeGetVariableInteger;
      }(PVNodeGetVariableBase)) || _class5) || _class5) || _class5));
      _export("PVNodeGetVariableBoolean", PVNodeGetVariableBoolean = (_dec9 = ccclass(CLASS_NAME_PREFIX_ANIM + "PVNodeGetVariableBoolean"), _dec10 = poseGraphNodeHide(), _dec11 = poseGraphNodeAppearance({
        inline: true,
        themeColor: '#D07979'
      }), _dec9(_class6 = _dec10(_class6 = _dec11(_class6 = /*#__PURE__*/function (_PVNodeGetVariableBas3) {
        _inheritsLoose(PVNodeGetVariableBoolean, _PVNodeGetVariableBas3);
        function PVNodeGetVariableBoolean() {
          return _PVNodeGetVariableBas3.call(this, PoseGraphType.BOOLEAN) || this;
        }
        var _proto4 = PVNodeGetVariableBoolean.prototype;
        _proto4.selfEvaluateDefaultOutput = function selfEvaluateDefaultOutput() {
          var _this$_varInstance3;
          return (_this$_varInstance3 = this._varInstance) === null || _this$_varInstance3 === void 0 ? void 0 : _this$_varInstance3.value; // TODO
        };
        return PVNodeGetVariableBoolean;
      }(PVNodeGetVariableBase)) || _class6) || _class6) || _class6));
      _export("PVNodeGetVariableVec3", PVNodeGetVariableVec3 = (_dec12 = ccclass(CLASS_NAME_PREFIX_ANIM + "PVNodeGetVariableVec3"), _dec13 = poseGraphNodeHide(), _dec14 = poseGraphNodeAppearance({
        inline: true,
        themeColor: '#D97721'
      }), _dec12(_class7 = _dec13(_class7 = _dec14(_class7 = /*#__PURE__*/function (_PVNodeGetVariableBas4) {
        _inheritsLoose(PVNodeGetVariableVec3, _PVNodeGetVariableBas4);
        function PVNodeGetVariableVec3() {
          return _PVNodeGetVariableBas4.call(this, PoseGraphType.VEC3) || this;
        }
        var _proto5 = PVNodeGetVariableVec3.prototype;
        _proto5.selfEvaluateDefaultOutput = function selfEvaluateDefaultOutput() {
          var _this$_varInstance4;
          return (_this$_varInstance4 = this._varInstance) === null || _this$_varInstance4 === void 0 ? void 0 : _this$_varInstance4.value; // TODO
        };
        return PVNodeGetVariableVec3;
      }(PVNodeGetVariableBase)) || _class7) || _class7) || _class7));
      _export("PVNodeGetVariableQuat", PVNodeGetVariableQuat = (_dec15 = ccclass(CLASS_NAME_PREFIX_ANIM + "PVNodeGetVariableQuat"), _dec16 = poseGraphNodeHide(), _dec17 = poseGraphNodeAppearance({
        inline: true,
        themeColor: '#B169C4'
      }), _dec15(_class8 = _dec16(_class8 = _dec17(_class8 = /*#__PURE__*/function (_PVNodeGetVariableBas5) {
        _inheritsLoose(PVNodeGetVariableQuat, _PVNodeGetVariableBas5);
        function PVNodeGetVariableQuat() {
          return _PVNodeGetVariableBas5.call(this, PoseGraphType.QUAT) || this;
        }
        var _proto6 = PVNodeGetVariableQuat.prototype;
        _proto6.selfEvaluateDefaultOutput = function selfEvaluateDefaultOutput() {
          var _this$_varInstance5;
          return (_this$_varInstance5 = this._varInstance) === null || _this$_varInstance5 === void 0 ? void 0 : _this$_varInstance5.value; // TODO
        };
        return PVNodeGetVariableQuat;
      }(PVNodeGetVariableBase)) || _class8) || _class8) || _class8));
    }
  };
});