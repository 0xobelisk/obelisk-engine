System.register("q-bundled:///fs/cocos/scene-graph/scene.jsb.js", ["../../../virtual/internal%253Aconstants.js", "../core/global-exports.js", "./node.js", "./prefab/utils.js", "../core/platform/debug.js", "../core/utils/jsb-utils.js", "./scene-globals.js", "../native-binding/decorators.js"], function (_export, _context) {
  "use strict";

  var EDITOR, TEST, legacyCC, Node, applyTargetOverrides, expandNestedPrefabInstanceNode, assert, updateChildrenForDeserialize, SceneGlobals, patch_cc_Scene, Scene, sceneProto, oldLoad;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                             Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                             of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                             in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                                                                                                                                                                                                             use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                                                                                                                                                                                                             of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                                                                                                                                                                                                             subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                             all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                            */
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_nodeJs) {
      Node = _nodeJs.Node;
    }, function (_prefabUtilsJs) {
      applyTargetOverrides = _prefabUtilsJs.applyTargetOverrides;
      expandNestedPrefabInstanceNode = _prefabUtilsJs.expandNestedPrefabInstanceNode;
    }, function (_corePlatformDebugJs) {
      assert = _corePlatformDebugJs.assert;
    }, function (_coreUtilsJsbUtilsJs) {
      updateChildrenForDeserialize = _coreUtilsJsbUtilsJs.updateChildrenForDeserialize;
    }, function (_sceneGlobalsJs) {
      SceneGlobals = _sceneGlobalsJs.SceneGlobals;
    }, function (_nativeBindingDecoratorsJs) {
      patch_cc_Scene = _nativeBindingDecoratorsJs.patch_cc_Scene;
    }],
    execute: function () {
      _export("Scene", Scene = jsb.Scene);
      legacyCC.Scene = Scene;
      sceneProto = Scene.prototype;
      Object.defineProperty(sceneProto, '_globals', {
        enumerable: true,
        configurable: true,
        get: function get() {
          return this.getSceneGlobals();
        },
        set: function set(v) {
          this._globalRef = v;
          this.setSceneGlobals(v);
        }
      });
      Object.defineProperty(sceneProto, 'globals', {
        enumerable: true,
        configurable: true,
        get: function get() {
          return this.getSceneGlobals();
        }
      });
      Object.defineProperty(sceneProto, '_renderScene', {
        enumerable: true,
        configurable: true,
        get: function get() {
          if (!this._renderSceneInternal) {
            this._renderSceneInternal = this.getRenderScene();
          }
          return this._renderSceneInternal;
        }
      });
      Object.defineProperty(sceneProto, 'renderScene', {
        enumerable: true,
        configurable: true,
        get: function get() {
          if (!this._renderSceneInternal) {
            this._renderSceneInternal = this.getRenderScene();
          }
          return this._renderSceneInternal;
        }
      });
      sceneProto._ctor = function () {
        // TODO: Property '_ctor' does not exist on type 'Node'.
        // issue: https://github.com/cocos/cocos-engine/issues/14644
        Node.prototype._ctor.apply(this, arguments);
        this._inited = false;
        this._renderSceneInternal = null;
        this._globalRef = null;
        this._prefabSyncedInLiveReload = false;
      };
      sceneProto._onBatchCreated = function (dontSyncChildPrefab) {
        if (this._parent) {
          this._siblingIndex = this._parent.children.indexOf(this);
        }
        //
        var children = this._children;
        var len = children.length;
        var child;
        for (var i = 0; i < len; ++i) {
          child = children[i];
          child._siblingIndex = i;
          child._onBatchCreated(dontSyncChildPrefab);
        }
      };
      oldLoad = sceneProto._load;
      sceneProto._load = function () {
        this._scene = this;
        if (!this._inited) {
          if (TEST) {
            assert(!this._activeInHierarchy, 'Should deactivate ActionManager and EventManager by default');
          }
          expandNestedPrefabInstanceNode(this);
          applyTargetOverrides(this);
          this._onBatchCreated(EDITOR && this._prefabSyncedInLiveReload);
          this._inited = true;
        }
        updateChildrenForDeserialize(this);
        oldLoad.call(this);
      };
      sceneProto._activate = function (active) {
        active = active !== false;
        if (EDITOR) {
          // register all nodes to editor
          this._registerIfAttached(active);
        }
        legacyCC.director._nodeActivator.activateNode(this, active);
        // The test environment does not currently support the renderer
        if (!TEST || EDITOR) {
          this._globals.activate(this);
          if (this._renderScene) {
            this._renderScene.activate();
          }
        }
      };
      sceneProto._instantiate = function () {};

      // handle meta data, it is generated automatically
      patch_cc_Scene({
        Scene: Scene,
        SceneGlobals: SceneGlobals
      });
    }
  };
});