System.register("q-bundled:///fs/cocos/animation/marionette/animation-mask.js", ["../../core/data/decorators/index.js", "../../asset/assets/asset.js", "../../core/index.js", "../define.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, type, Asset, js, CLASS_NAME_PREFIX_ANIM, _dec, _class, _class2, _initializer, _initializer2, _dec2, _dec3, _class4, _class5, _initializer3, JointMask, AnimationMask;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_coreIndexJs) {
      js = _coreIndexJs.js;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      JointMask = (_dec = ccclass('cc.JointMask'), _dec(_class = (_class2 = function JointMask() {
        this.path = _initializer && _initializer();
        this.enabled = _initializer2 && _initializer2();
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "path", [serializable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "enabled", [serializable], function () {
        return true;
      })), _class2)) || _class);
      _export("AnimationMask", AnimationMask = (_dec2 = ccclass(CLASS_NAME_PREFIX_ANIM + "AnimationMask"), _dec3 = type(JointMask), _dec2(_class4 = (_class5 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(AnimationMask, _Asset);
        function AnimationMask() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          _this._jointMasks = _initializer3 && _initializer3();
          return _this;
        }
        var _proto = AnimationMask.prototype;
        /**
         * @zh 添加一个关节遮罩项。
         * 已存在的相同路径的关节遮罩项会被替换为新的。
         * @en Add a joint mask item.
         * Already existing joint mask with same path item will be replaced.
         * @param path @zh 关节的路径。 @en The joint's path.
         * @param enabled @zh 是否启用该关节。 @en Whether to enable the joint.
         */
        _proto.addJoint = function addJoint(path, enabled) {
          this.removeJoint(path);
          var info = new JointMask();
          info.path = path;
          info.enabled = enabled;
          this._jointMasks.push(info);
        };
        _proto.removeJoint = function removeJoint(removal) {
          js.array.removeIf(this._jointMasks, function (_ref) {
            var path = _ref.path;
            return path === removal;
          });
        };
        _proto.clear = function clear() {
          this._jointMasks.length = 0;
        };
        _proto.filterDisabledNodes = function filterDisabledNodes(root) {
          var jointMasks = this._jointMasks;
          var nJointMasks = jointMasks.length;
          var disabledNodes = new Set();
          for (var iJointMask = 0; iJointMask < nJointMasks; ++iJointMask) {
            var _jointMasks$iJointMas = jointMasks[iJointMask],
              path = _jointMasks$iJointMas.path,
              enabled = _jointMasks$iJointMas.enabled;
            if (enabled) {
              continue;
            }
            var node = root.getChildByPath(path);
            if (node) {
              disabledNodes.add(node);
            }
          }
          return disabledNodes;
        };
        _proto.isExcluded = function isExcluded(path) {
          var _this$_jointMasks$fin, _this$_jointMasks$fin2;
          return !((_this$_jointMasks$fin = (_this$_jointMasks$fin2 = this._jointMasks.find(function (_ref2) {
            var p = _ref2.path;
            return p === path;
          })) === null || _this$_jointMasks$fin2 === void 0 ? void 0 : _this$_jointMasks$fin2.enabled) !== null && _this$_jointMasks$fin !== void 0 ? _this$_jointMasks$fin : true);
        };
        _createClass(AnimationMask, [{
          key: "joints",
          get: function get() {
            // TODO: editor currently treats this property as (and expects it to be) an array.
            // If later refactoring is needed, changes should also be made to editor.

            return this._jointMasks;
          },
          set: function set(value) {
            this.clear();
            for (var _iterator = _createForOfIteratorHelperLoose(value), _step; !(_step = _iterator()).done;) {
              var joint = _step.value;
              this.addJoint(joint.path, joint.enabled);
            }
          }
        }]);
        return AnimationMask;
      }(Asset), (_initializer3 = _applyDecoratedInitializer(_class5.prototype, "_jointMasks", [serializable], function () {
        return [];
      }), _applyDecoratedDescriptor(_class5.prototype, "joints", [editable, _dec3], Object.getOwnPropertyDescriptor(_class5.prototype, "joints"), _class5.prototype)), _class5)) || _class4));
    }
  };
});