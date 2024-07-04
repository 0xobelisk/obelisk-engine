System.register("q-bundled:///fs/cocos/scene-graph/prefab/prefab-info.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../core/data/index.js", "../component.js", "../node.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, type, EDITOR, cclegacy, CCObject, CCString, Component, Node, _dec, _dec2, _class, _class2, _initializer, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class4, _class5, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _dec9, _class7, _class8, _initializer7, _dec10, _dec11, _dec12, _class10, _class11, _initializer8, _initializer9, _initializer10, _dec13, _dec14, _dec15, _class13, _class14, _initializer11, _initializer12, _dec16, _dec17, _dec18, _class16, _class17, _initializer13, _initializer14, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class19, _class20, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _dec25, _dec26, _dec27, _dec28, _class22, _class23, _initializer21, _initializer22, _initializer23, _initializer24, _initializer25, _initializer26, TargetInfo, TargetOverrideInfo, CompPrefabInfo, PropertyOverrideInfo, MountedChildrenInfo, MountedComponentsInfo, PrefabInstance, PrefabInfo;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function compareStringArray(array1, array2) {
    if (!array1 || !array2) {
      return false;
    }
    if (array1.length !== array2.length) {
      return false;
    }
    return array1.every((value, index) => value === array2[index]);
  }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_coreDataIndexJs) {
      CCObject = _coreDataIndexJs.CCObject;
      CCString = _coreDataIndexJs.CCString;
    }, function (_componentJs) {
      Component = _componentJs.Component;
    }, function (_nodeJs) {
      Node = _nodeJs.Node;
    }],
    execute: function () {
      _export("TargetInfo", TargetInfo = (_dec = ccclass('cc.TargetInfo'), _dec2 = type([CCString]), _dec(_class = (_class2 = class TargetInfo {
        constructor() {
          // as the target's fileId in prefab asset,used to find the target when prefab expanded.
          this.localID = _initializer && _initializer();
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "localID", [serializable, _dec2], function () {
        return [];
      })), _class2)) || _class));
      _export("TargetOverrideInfo", TargetOverrideInfo = (_dec3 = ccclass('cc.TargetOverrideInfo'), _dec4 = type(CCObject), _dec5 = type(TargetInfo), _dec6 = type([CCString]), _dec7 = type(Node), _dec8 = type(TargetInfo), _dec3(_class4 = (_class5 = class TargetOverrideInfo {
        constructor() {
          this.source = _initializer2 && _initializer2();
          // if owner is in a prefab, use TargetInfo to index it
          this.sourceInfo = _initializer3 && _initializer3();
          this.propertyPath = _initializer4 && _initializer4();
          this.target = _initializer5 && _initializer5();
          // if target is in a prefab, use TargetInfo to index it
          this.targetInfo = _initializer6 && _initializer6();
        }
      }, (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "source", [serializable, _dec4], function () {
        return null;
      }), _initializer3 = _applyDecoratedInitializer(_class5.prototype, "sourceInfo", [serializable, _dec5], function () {
        return null;
      }), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "propertyPath", [serializable, _dec6], function () {
        return [];
      }), _initializer5 = _applyDecoratedInitializer(_class5.prototype, "target", [serializable, _dec7], function () {
        return null;
      }), _initializer6 = _applyDecoratedInitializer(_class5.prototype, "targetInfo", [serializable, _dec8], function () {
        return null;
      })), _class5)) || _class4));
      _export("CompPrefabInfo", CompPrefabInfo = (_dec9 = ccclass('cc.CompPrefabInfo'), _dec9(_class7 = (_class8 = class CompPrefabInfo {
        constructor() {
          // To identify current component in a prefab asset, so only needs to be unique.
          this.fileId = _initializer7 && _initializer7();
        }
      }, (_initializer7 = _applyDecoratedInitializer(_class8.prototype, "fileId", [serializable, editable], function () {
        return '';
      })), _class8)) || _class7));
      _export("PropertyOverrideInfo", PropertyOverrideInfo = (_dec10 = ccclass('CCPropertyOverrideInfo'), _dec11 = type(TargetInfo), _dec12 = type([CCString]), _dec10(_class10 = (_class11 = class PropertyOverrideInfo {
        constructor() {
          this.targetInfo = _initializer8 && _initializer8();
          this.propertyPath = _initializer9 && _initializer9();
          this.value = _initializer10 && _initializer10();
        }
        // eslint-disable-next-line consistent-return
        isTarget(localID, propPath) {
          if (EDITOR) {
            var _this$targetInfo;
            return compareStringArray((_this$targetInfo = this.targetInfo) === null || _this$targetInfo === void 0 ? void 0 : _this$targetInfo.localID, localID) && compareStringArray(this.propertyPath, propPath);
          }
        }
      }, (_initializer8 = _applyDecoratedInitializer(_class11.prototype, "targetInfo", [serializable, _dec11], function () {
        return null;
      }), _initializer9 = _applyDecoratedInitializer(_class11.prototype, "propertyPath", [serializable, _dec12], function () {
        return [];
      }), _initializer10 = _applyDecoratedInitializer(_class11.prototype, "value", [serializable], null)), _class11)) || _class10));
      _export("MountedChildrenInfo", MountedChildrenInfo = (_dec13 = ccclass('cc.MountedChildrenInfo'), _dec14 = type(TargetInfo), _dec15 = type([Node]), _dec13(_class13 = (_class14 = class MountedChildrenInfo {
        constructor() {
          this.targetInfo = _initializer11 && _initializer11();
          this.nodes = _initializer12 && _initializer12();
        }
        // eslint-disable-next-line consistent-return
        isTarget(localID) {
          if (EDITOR) {
            var _this$targetInfo2;
            return compareStringArray((_this$targetInfo2 = this.targetInfo) === null || _this$targetInfo2 === void 0 ? void 0 : _this$targetInfo2.localID, localID);
          }
        }
      }, (_initializer11 = _applyDecoratedInitializer(_class14.prototype, "targetInfo", [serializable, _dec14], function () {
        return null;
      }), _initializer12 = _applyDecoratedInitializer(_class14.prototype, "nodes", [serializable, _dec15], function () {
        return [];
      })), _class14)) || _class13));
      _export("MountedComponentsInfo", MountedComponentsInfo = (_dec16 = ccclass('cc.MountedComponentsInfo'), _dec17 = type(TargetInfo), _dec18 = type([Component]), _dec16(_class16 = (_class17 = class MountedComponentsInfo {
        constructor() {
          this.targetInfo = _initializer13 && _initializer13();
          this.components = _initializer14 && _initializer14();
        }
        // eslint-disable-next-line consistent-return
        isTarget(localID) {
          if (EDITOR) {
            var _this$targetInfo3;
            return compareStringArray((_this$targetInfo3 = this.targetInfo) === null || _this$targetInfo3 === void 0 ? void 0 : _this$targetInfo3.localID, localID);
          }
        }
      }, (_initializer13 = _applyDecoratedInitializer(_class17.prototype, "targetInfo", [serializable, _dec17], function () {
        return null;
      }), _initializer14 = _applyDecoratedInitializer(_class17.prototype, "components", [serializable, _dec18], function () {
        return [];
      })), _class17)) || _class16));
      /**
       * Prefab实例类
       * @internal
       */
      _export("PrefabInstance", PrefabInstance = (_dec19 = ccclass('cc.PrefabInstance'), _dec20 = type(Node), _dec21 = type([MountedChildrenInfo]), _dec22 = type([MountedComponentsInfo]), _dec23 = type([PropertyOverrideInfo]), _dec24 = type([TargetInfo]), _dec19(_class19 = (_class20 = class PrefabInstance {
        constructor() {
          // Identify current prefabInstance;
          this.fileId = _initializer15 && _initializer15();
          // record the node with the Prefab that this prefabInstance belongs to.
          this.prefabRootNode = _initializer16 && _initializer16();
          // record children nodes that exist in this prefabInstance but not in prefab asset.
          this.mountedChildren = _initializer17 && _initializer17();
          // record components that exist in this prefabInstance but not in prefab asset.
          this.mountedComponents = _initializer18 && _initializer18();
          // override properties info in this prefabInstance.
          this.propertyOverrides = _initializer19 && _initializer19();
          // record components that exist in ths prefab asset but not in prefabInstance.
          this.removedComponents = _initializer20 && _initializer20();
          this.targetMap = {};
          /**
           * make sure prefab instance expand only once
           * @internal
           */
          this.expanded = false;
        }
        // eslint-disable-next-line consistent-return
        findPropertyOverride(localID, propPath) {
          if (EDITOR) {
            for (let i = 0; i < this.propertyOverrides.length; i++) {
              const propertyOverride = this.propertyOverrides[i];
              if (propertyOverride.isTarget(localID, propPath)) {
                return propertyOverride;
              }
            }
            return null;
          }
        }
        removePropertyOverride(localID, propPath) {
          if (EDITOR) {
            for (let i = 0; i < this.propertyOverrides.length; i++) {
              const propertyOverride = this.propertyOverrides[i];
              if (propertyOverride.isTarget(localID, propPath)) {
                this.propertyOverrides.splice(i, 1);
                break;
              }
            }
          }
        }
      }, (_initializer15 = _applyDecoratedInitializer(_class20.prototype, "fileId", [serializable], function () {
        return '';
      }), _initializer16 = _applyDecoratedInitializer(_class20.prototype, "prefabRootNode", [serializable, _dec20], null), _initializer17 = _applyDecoratedInitializer(_class20.prototype, "mountedChildren", [serializable, _dec21], function () {
        return [];
      }), _initializer18 = _applyDecoratedInitializer(_class20.prototype, "mountedComponents", [serializable, _dec22], function () {
        return [];
      }), _initializer19 = _applyDecoratedInitializer(_class20.prototype, "propertyOverrides", [serializable, _dec23], function () {
        return [];
      }), _initializer20 = _applyDecoratedInitializer(_class20.prototype, "removedComponents", [serializable, _dec24], function () {
        return [];
      })), _class20)) || _class19));
      _export("PrefabInfo", PrefabInfo = (_dec25 = ccclass('cc.PrefabInfo'), _dec26 = type(Node), _dec27 = type(PrefabInstance), _dec28 = type([TargetOverrideInfo]), _dec25(_class22 = (_class23 = class PrefabInfo {
        constructor() {
          // the most top node of this prefab in the scene
          this.root = _initializer21 && _initializer21();
          // reference to the prefab asset file.
          // In Editor, only asset._uuid is usable because asset will be changed.
          this.asset = _initializer22 && _initializer22();
          // prefabInfo's id,unique in the asset.
          this.fileId = _initializer23 && _initializer23();
          // Instance of a prefabAsset
          this.instance = _initializer24 && _initializer24();
          this.targetOverrides = _initializer25 && _initializer25();
          // record outMost prefabInstance nodes in descendants
          // collected when saving sceneAsset or prefabAsset
          this.nestedPrefabInstanceRoots = _initializer26 && _initializer26();
        }
      }, (_initializer21 = _applyDecoratedInitializer(_class23.prototype, "root", [serializable, _dec26], null), _initializer22 = _applyDecoratedInitializer(_class23.prototype, "asset", [serializable], null), _initializer23 = _applyDecoratedInitializer(_class23.prototype, "fileId", [serializable, editable], function () {
        return '';
      }), _initializer24 = _applyDecoratedInitializer(_class23.prototype, "instance", [serializable, _dec27], null), _initializer25 = _applyDecoratedInitializer(_class23.prototype, "targetOverrides", [serializable, _dec28], null), _initializer26 = _applyDecoratedInitializer(_class23.prototype, "nestedPrefabInstanceRoots", [serializable], null)), _class23)) || _class22));
      cclegacy._PrefabInfo = PrefabInfo;
    }
  };
});