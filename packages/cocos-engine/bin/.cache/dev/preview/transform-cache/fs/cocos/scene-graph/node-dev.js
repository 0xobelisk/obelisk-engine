System.register("q-bundled:///fs/cocos/scene-graph/node-dev.js", ["../../../virtual/internal%253Aconstants.js", "../core/data/object.js", "../core/utils/js.js", "../core/global-exports.js", "../core/platform/debug.js"], function (_export, _context) {
  "use strict";

  var EDITOR, DEV, TEST, CCObject, js, legacyCC, error, errorID, getError, Destroying, IS_PREVIEW;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
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
  function nodePolyfill(Node) {
    if (EDITOR && !IS_PREVIEW || TEST) {
      Node.prototype._onPreDestroy = function () {
        var destroyByParent = this._onPreDestroyBase();
        if (!destroyByParent) {
          // ensure this node can reattach to scene by undo system
          // (simulate some destruct logic to make undo system work correctly)
          this._parent = null;
        }
        return destroyByParent;
      };
    }
    if (EDITOR || TEST) {
      Node.prototype._checkMultipleComp = function (ctor) {
        var existing = this.getComponent(ctor._disallowMultiple);
        if (existing) {
          if (existing.constructor === ctor) {
            throw Error(getError(3805, js.getClassName(ctor), this._name));
          } else {
            throw Error(getError(3806, js.getClassName(ctor), this._name, js.getClassName(existing)));
          }
        }
        return true;
      };
      /**
       * @method _getDependComponent
       * @param {Component} depended
       * @return {Component[]}
       */
      Node.prototype._getDependComponent = function (depended) {
        var dependant = [];
        for (var i = 0; i < this._components.length; i++) {
          var comp = this._components[i];
          if (comp !== depended && comp.isValid && !legacyCC.Object._willDestroy(comp)) {
            var reqComps = comp.constructor._requireComponent;
            if (reqComps) {
              if (Array.isArray(reqComps)) {
                for (var _i = 0; _i < reqComps.length; _i++) {
                  if (depended instanceof reqComps[_i]) {
                    dependant.push(comp);
                  }
                }
              } else if (depended instanceof reqComps) {
                dependant.push(comp);
              }
            }
          }
        }
        return dependant;
      };
      /**
       * This api should only used by undo system
       * @method _addComponentAt
       * @param {Component} comp
       * @param {Number} index
       */
      Node.prototype._addComponentAt = function (comp, index) {
        if (this._objFlags & Destroying) {
          return error('isDestroying');
        }
        if (!(comp instanceof legacyCC.Component)) {
          return errorID(3811);
        }
        if (index > this._components.length) {
          return errorID(3812);
        }

        // recheck attributes because script may changed
        var ctor = comp.constructor;
        if (ctor._disallowMultiple) {
          if (!this._checkMultipleComp(ctor)) {
            return undefined;
          }
        }

        // remove dependency and return directly by editor
        // const ReqComp = ctor._requireComponent;
        // if (ReqComp && !this.getComponent(ReqComp)) {
        //     if (index === this._components.length) {
        //         // If comp should be last component, increase the index because required component added
        //         ++index;
        //     }
        //     const depended = this.addComponent(ReqComp);
        //     if (!depended) {
        //         // depend conflicts
        //         return null;
        //     }
        // }

        comp.node = this;
        this._components.splice(index, 0, comp);
        if (EDITOR && !IS_PREVIEW && EditorExtends.Node && EditorExtends.Component) {
          var node = EditorExtends.Node.getNode(this._id);
          if (node) {
            EditorExtends.Component.add(comp._id, comp);
          }
        }
        if (this._activeInHierarchy) {
          legacyCC.director._nodeActivator.activateComp(comp);
        }
        return undefined;
      };
      Node.prototype.onRestore = function () {
        // check activity state
        var shouldActiveNow = this._active && !!(this._parent && this._parent._activeInHierarchy);
        if (this._activeInHierarchy !== shouldActiveNow) {
          legacyCC.director._nodeActivator.activateNode(this, shouldActiveNow);
        }
      };
      Node.prototype._onRestoreBase = Node.prototype.onRestore;
      Node.prototype._registerIfAttached = function (register) {
        if (!this._id) {
          console.warn("Node(" + (this && this.name) + "}) is invalid or its data is corrupted.");
          return;
        }
        if (EditorExtends.Node && EditorExtends.Component) {
          if (register) {
            EditorExtends.Node.add(this._id, this);
            for (var i = 0; i < this._components.length; i++) {
              var comp = this._components[i];
              if (!comp || !comp._id) {
                console.warn("Component attached to node:" + this.name + " is corrupted");
              } else {
                EditorExtends.Component.add(comp._id, comp);
              }
            }
          } else {
            for (var _i2 = 0; _i2 < this._components.length; _i2++) {
              var _comp = this._components[_i2];
              if (!_comp || !_comp._id) {
                console.warn("Component attached to node:" + this.name + " is corrupted");
              } else {
                EditorExtends.Component.remove(_comp._id);
              }
            }
            EditorExtends.Node.remove(this._id);
          }
        }
        var children = this._children;
        for (var _i3 = 0, len = children.length; _i3 < len; ++_i3) {
          var child = children[_i3];
          child._registerIfAttached(register);
        }
      };
    }
    if (DEV) {
      // promote debug info
      js.get(Node.prototype, ' INFO ', function () {
        var path = '';
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var node = this;
        while (node && !(node instanceof legacyCC.Scene)) {
          if (path) {
            path = node.name + "/" + path;
          } else {
            path = node.name;
          }
          node = node._parent;
        }
        return this.name + ", path: " + path;
      });
    }
  }
  _export("nodePolyfill", nodePolyfill);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      DEV = _virtualInternal253AconstantsJs.DEV;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreDataObjectJs) {
      CCObject = _coreDataObjectJs.CCObject;
    }, function (_coreUtilsJsJs) {
      js = _coreUtilsJsJs;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_corePlatformDebugJs) {
      error = _corePlatformDebugJs.error;
      errorID = _corePlatformDebugJs.errorID;
      getError = _corePlatformDebugJs.getError;
    }],
    execute: function () {
      Destroying = CCObject.Flags.Destroying;
      IS_PREVIEW = !!legacyCC.GAME_VIEW;
    }
  };
});