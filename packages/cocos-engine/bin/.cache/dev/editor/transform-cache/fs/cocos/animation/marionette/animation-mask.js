System.register("q-bundled:///fs/cocos/animation/marionette/animation-mask.js", ["../../core/data/decorators/index.js", "../../asset/assets/asset.js", "../../core/index.js", "../define.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, type, Asset, js, CLASS_NAME_PREFIX_ANIM, _dec, _class, _class2, _initializer, _initializer2, _dec2, _dec3, _class4, _class5, _initializer3, JointMask, AnimationMask;
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
      JointMask = (_dec = ccclass('cc.JointMask'), _dec(_class = (_class2 = class JointMask {
        constructor() {
          this.path = _initializer && _initializer();
          this.enabled = _initializer2 && _initializer2();
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "path", [serializable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "enabled", [serializable], function () {
        return true;
      })), _class2)) || _class);
      _export("AnimationMask", AnimationMask = (_dec2 = ccclass(`${CLASS_NAME_PREFIX_ANIM}AnimationMask`), _dec3 = type(JointMask), _dec2(_class4 = (_class5 = class AnimationMask extends Asset {
        constructor(...args) {
          super(...args);
          this._jointMasks = _initializer3 && _initializer3();
        }
        get joints() {
          // TODO: editor currently treats this property as (and expects it to be) an array.
          // If later refactoring is needed, changes should also be made to editor.

          return this._jointMasks;
        }
        set joints(value) {
          this.clear();
          for (const joint of value) {
            this.addJoint(joint.path, joint.enabled);
          }
        }

        /**
         * @zh 添加一个关节遮罩项。
         * 已存在的相同路径的关节遮罩项会被替换为新的。
         * @en Add a joint mask item.
         * Already existing joint mask with same path item will be replaced.
         * @param path @zh 关节的路径。 @en The joint's path.
         * @param enabled @zh 是否启用该关节。 @en Whether to enable the joint.
         */
        addJoint(path, enabled) {
          this.removeJoint(path);
          const info = new JointMask();
          info.path = path;
          info.enabled = enabled;
          this._jointMasks.push(info);
        }
        removeJoint(removal) {
          js.array.removeIf(this._jointMasks, ({
            path
          }) => path === removal);
        }
        clear() {
          this._jointMasks.length = 0;
        }
        filterDisabledNodes(root) {
          const {
            _jointMasks: jointMasks
          } = this;
          const nJointMasks = jointMasks.length;
          const disabledNodes = new Set();
          for (let iJointMask = 0; iJointMask < nJointMasks; ++iJointMask) {
            const {
              path,
              enabled
            } = jointMasks[iJointMask];
            if (enabled) {
              continue;
            }
            const node = root.getChildByPath(path);
            if (node) {
              disabledNodes.add(node);
            }
          }
          return disabledNodes;
        }
        isExcluded(path) {
          var _this$_jointMasks$fin, _this$_jointMasks$fin2;
          return !((_this$_jointMasks$fin = (_this$_jointMasks$fin2 = this._jointMasks.find(({
            path: p
          }) => p === path)) === null || _this$_jointMasks$fin2 === void 0 ? void 0 : _this$_jointMasks$fin2.enabled) !== null && _this$_jointMasks$fin !== void 0 ? _this$_jointMasks$fin : true);
        }
      }, (_initializer3 = _applyDecoratedInitializer(_class5.prototype, "_jointMasks", [serializable], function () {
        return [];
      }), _applyDecoratedDescriptor(_class5.prototype, "joints", [editable, _dec3], Object.getOwnPropertyDescriptor(_class5.prototype, "joints"), _class5.prototype)), _class5)) || _class4));
    }
  };
});