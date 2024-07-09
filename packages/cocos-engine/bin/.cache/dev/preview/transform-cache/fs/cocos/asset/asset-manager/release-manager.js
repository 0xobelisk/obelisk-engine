System.register("q-bundled:///fs/cocos/asset/asset-manager/release-manager.js", ["../../../../virtual/internal%253Aconstants.js", "../assets/asset.js", "../../core/index.js", "./cache.js", "./depend-util.js", "./shared.js"], function (_export, _context) {
  "use strict";

  var EDITOR, TEST, Asset, isValid, js, misc, Cache, dependUtil, assets, references, _temp, ReleaseManager, releaseManager;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
                                                                                                                                                                                       Copyright (c) 2019-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                      
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
  function visitAsset(asset, deps) {
    // Skip assets generated programmatically or by user (e.g. label texture)
    if (!asset._uuid) {
      return;
    }
    deps.push(asset._uuid);
  }
  function visitComponent(comp, deps) {
    var props = Object.getOwnPropertyNames(comp);
    for (var i = 0; i < props.length; i++) {
      var propName = props[i];
      if (propName === 'node' || propName === '__eventTargets') {
        continue;
      }
      var value = comp[propName];
      if (typeof value === 'object' && value) {
        if (Array.isArray(value)) {
          for (var j = 0; j < value.length; j++) {
            var val = value[j];
            if (val instanceof Asset) {
              visitAsset(val, deps);
            }
          }
        } else if (!value.constructor || value.constructor === Object) {
          var keys = Object.getOwnPropertyNames(value);
          for (var _j = 0; _j < keys.length; _j++) {
            var _val = value[keys[_j]];
            if (_val instanceof Asset) {
              visitAsset(_val, deps);
            }
          }
        } else if (value instanceof Asset) {
          visitAsset(value, deps);
        }
      }
    }
  }
  function visitNode(node, deps) {
    for (var i = 0; i < node._components.length; i++) {
      visitComponent(node._components[i], deps);
    }
    for (var _i = 0; _i < node._children.length; _i++) {
      visitNode(node._children[_i], deps);
    }
  }
  function descendOpRef(asset, refs, exclude, op) {
    exclude.push(asset._uuid);
    var depends = dependUtil.getDeps(asset._uuid);
    for (var i = 0, l = depends.length; i < l; i++) {
      var dependAsset = assets.get(depends[i]);
      if (!dependAsset) {
        continue;
      }
      var uuid = dependAsset._uuid;
      if (!(uuid in refs)) {
        refs[uuid] = dependAsset.refCount + op;
      } else {
        refs[uuid] += op;
      }
      if (exclude.includes(uuid)) {
        continue;
      }
      descendOpRef(dependAsset, refs, exclude, op);
    }
  }
  function checkCircularReference(asset) {
    // check circular reference
    var refs = Object.create(null);
    refs[asset._uuid] = asset.refCount;
    descendOpRef(asset, refs, _temp, -1);
    _temp.length = 0;
    if (refs[asset._uuid] !== 0) {
      return refs[asset._uuid];
    }
    for (var uuid in refs) {
      if (refs[uuid] !== 0) {
        descendOpRef(assets.get(uuid), refs, _temp, 1);
      }
    }
    _temp.length = 0;
    return refs[asset._uuid];
  }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_assetsAssetJs) {
      Asset = _assetsAssetJs.Asset;
    }, function (_coreIndexJs) {
      isValid = _coreIndexJs.isValid;
      js = _coreIndexJs.js;
      misc = _coreIndexJs.misc;
    }, function (_cacheJs) {
      Cache = _cacheJs.default;
    }, function (_dependUtilJs) {
      dependUtil = _dependUtilJs.default;
    }, function (_sharedJs) {
      assets = _sharedJs.assets;
      references = _sharedJs.references;
    }],
    execute: function () {
      _temp = [];
      ReleaseManager = /*#__PURE__*/function () {
        function ReleaseManager() {
          this._persistNodeDeps = new Cache();
          this._toDelete = new Cache();
          this._eventListener = false;
          this._dontDestroyAssets = [];
        }
        var _proto = ReleaseManager.prototype;
        _proto.addIgnoredAsset = function addIgnoredAsset(asset) {
          this._dontDestroyAssets.push(asset._uuid);
        };
        _proto.init = function init() {
          this._persistNodeDeps.clear();
          this._toDelete.clear();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._addPersistNodeRef = function _addPersistNodeRef(node) {
          var deps = [];
          visitNode(node, deps);
          for (var i = 0, l = deps.length; i < l; i++) {
            var dependAsset = assets.get(deps[i]);
            if (dependAsset) {
              dependAsset.addRef();
            }
          }
          this._persistNodeDeps.add(node.uuid, deps);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._removePersistNodeRef = function _removePersistNodeRef(node) {
          if (!this._persistNodeDeps.has(node.uuid)) {
            return;
          }
          var deps = this._persistNodeDeps.get(node.uuid);
          for (var i = 0, l = deps.length; i < l; i++) {
            var dependAsset = assets.get(deps[i]);
            if (dependAsset) {
              dependAsset.decRef();
            }
          }
          this._persistNodeDeps.remove(node.uuid);
        }

        // do auto release
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._autoRelease = function _autoRelease(oldScene, newScene, persistNodes) {
          if (oldScene) {
            var childs = dependUtil.getDeps(oldScene.uuid);
            for (var i = 0, l = childs.length; i < l; i++) {
              var asset = assets.get(childs[i]);
              if (asset) {
                asset.decRef(TEST || oldScene.autoReleaseAssets);
              }
            }
            var dependencies = dependUtil._depends.get(oldScene.uuid);
            if (dependencies && dependencies.persistDeps) {
              var persistDeps = dependencies.persistDeps;
              for (var _i2 = 0, _l = persistDeps.length; _i2 < _l; _i2++) {
                var _asset = assets.get(persistDeps[_i2]);
                if (_asset) {
                  _asset.decRef(TEST || oldScene.autoReleaseAssets);
                }
              }
            }
            if (oldScene.uuid !== newScene.uuid) {
              dependUtil.remove(oldScene.uuid);
            }
          }

          // transfer refs from persist nodes to new scene
          var sceneDeps = dependUtil._depends.get(newScene.uuid);
          if (sceneDeps) {
            sceneDeps.persistDeps = [];
          }
          for (var key in persistNodes) {
            var _ref;
            var node = persistNodes[key];
            var deps = this._persistNodeDeps.get(node.uuid);
            for (var _iterator = _createForOfIteratorHelperLoose(deps), _step; !(_step = _iterator()).done;) {
              var dep = _step.value;
              var dependAsset = assets.get(dep);
              if (dependAsset) {
                dependAsset.addRef();
              }
            }
            if (!sceneDeps) {
              continue;
            }
            (_ref = sceneDeps.persistDeps).push.apply(_ref, deps);
          }
        };
        _proto.tryRelease = function tryRelease(asset, force) {
          if (force === void 0) {
            force = false;
          }
          if (!(asset instanceof Asset)) {
            return;
          }
          if (force) {
            this._free(asset, force);
            return;
          }
          this._toDelete.add(asset._uuid, asset);
          if (TEST) return;
          if (!this._eventListener) {
            this._eventListener = true;
            misc.callInNextTick(this._freeAssets.bind(this));
          }
        };
        _proto._freeAssets = function _freeAssets() {
          var _this = this;
          this._eventListener = false;
          this._toDelete.forEach(function (asset) {
            _this._free(asset);
          });
          this._toDelete.clear();
        };
        _proto._free = function _free(asset, force) {
          if (force === void 0) {
            force = false;
          }
          var uuid = asset._uuid;
          this._toDelete.remove(uuid);
          if (!isValid(asset, true) || this._dontDestroyAssets.indexOf(uuid) !== -1) {
            return;
          }
          if (!force) {
            if (asset.refCount > 0) {
              if (checkCircularReference(asset) > 0) {
                return;
              }
            }
          }

          // remove from cache
          assets.remove(uuid);
          var depends = dependUtil.getDeps(uuid);
          for (var i = 0, l = depends.length; i < l; i++) {
            var dependAsset = assets.get(depends[i]);
            if (dependAsset) {
              dependAsset.decRef(false);
              // no need to release dependencies recursively in editor
              if (!EDITOR) {
                this._free(dependAsset, false);
              }
            }
          }
          // only release non-gc asset in editor
          if (!EDITOR) {
            asset.destroy();
          }
          dependUtil.remove(uuid);
          if (EDITOR) {
            var dependant = references.get(uuid);
            if (dependant && dependant.length === 0) {
              references.remove(uuid);
            }
            references.forEach(function (dependance, key) {
              for (var _i3 = dependance.length - 1; _i3 >= 0; _i3--) {
                if (dependance[_i3][0].deref() === asset) {
                  js.array.fastRemoveAt(dependance, _i3);
                }
              }
              if (dependance.length === 0) {
                references.remove(key);
              }
            });
          }
        };
        return ReleaseManager;
      }();
      _export("releaseManager", releaseManager = new ReleaseManager());
    }
  };
});