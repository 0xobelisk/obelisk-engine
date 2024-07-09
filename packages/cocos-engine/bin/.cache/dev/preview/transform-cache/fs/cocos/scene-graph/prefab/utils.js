System.register("q-bundled:///fs/cocos/scene-graph/prefab/utils.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../core/value-types/index.js", "./prefab-info.js"], function (_export, _context) {
  "use strict";

  var EDITOR, SUPPORT_JIT, cclegacy, errorID, warn, editorExtrasTag, ValueType;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2013-2016 Chukong Technologies Inc.
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
  function createNodeWithPrefab(node) {
    var prefabInfo = node === null || node === void 0 ? void 0 : node.prefab;
    if (!prefabInfo) {
      return;
    }
    var prefabInstance = prefabInfo.instance;
    if (!prefabInstance) {
      return;
    }
    if (!prefabInfo.asset) {
      if (EDITOR) {
        // TODO show message in editor
      } else {
        errorID(3701, node.name);
      }
      prefabInfo.instance = undefined;
      return;
    }

    // save root's preserved props to avoid overwritten by prefab
    var _objFlags = node._objFlags;
    var _parent = node.getParent();
    var _id = node.uuid;
    // TODO(PP_Pro): after we support editorOnly tag, we could remove this any type assertion.
    // Tracking issue: https://github.com/cocos/cocos-engine/issues/14613
    var editorExtras = node[editorExtrasTag];

    // instantiate prefab
    cclegacy.game._isCloning = true;
    if (SUPPORT_JIT) {
      prefabInfo.asset._doInstantiate(node);
    } else {
      // root in prefab asset is always synced
      var prefabRoot = prefabInfo.asset.data;

      // use node as the instantiated prefabRoot to make references to prefabRoot in prefab redirect to node
      prefabRoot._iN$t = node;

      // instantiate prefab and apply to node
      cclegacy.instantiate._clone(prefabRoot, prefabRoot);
    }
    cclegacy.game._isCloning = false;

    // restore preserved props
    node._objFlags = _objFlags;
    node.modifyParent(_parent);
    node.id = _id;
    if (EDITOR) {
      node[editorExtrasTag] = editorExtras;
    }
    if (node.prefab) {
      // just keep the instance
      node.prefab.instance = prefabInfo.instance;
    }
  }

  // TODO: more efficient id->Node/Component map
  function generateTargetMap(node, targetMap, isRoot) {
    var _node$prefab;
    if (!targetMap) {
      return;
    }
    if (!node) {
      return;
    }
    var curTargetMap = targetMap;
    var prefabInstance = (_node$prefab = node.prefab) === null || _node$prefab === void 0 ? void 0 : _node$prefab.instance;
    if (!isRoot && prefabInstance) {
      targetMap[prefabInstance.fileId] = {};
      curTargetMap = targetMap[prefabInstance.fileId];
    }
    var prefabInfo = node.prefab;
    if (prefabInfo) {
      curTargetMap[prefabInfo.fileId] = node;
    }
    var components = node.components;
    for (var i = 0; i < components.length; i++) {
      var comp = components[i];
      if (comp.__prefab) {
        curTargetMap[comp.__prefab.fileId] = comp;
      }
    }
    for (var _i = 0; _i < node.children.length; _i++) {
      var childNode = node.children[_i];
      generateTargetMap(childNode, curTargetMap, false);
    }
  }
  function getTarget(localID, targetMap) {
    if (!localID) {
      return null;
    }
    var target = null;
    var targetIter = targetMap;
    for (var i = 0; i < localID.length; i++) {
      if (!targetIter) {
        return null;
      }
      targetIter = targetIter[localID[i]];
    }
    target = targetIter;
    return target;
  }
  function applyMountedChildren(node, mountedChildren, targetMap) {
    if (!mountedChildren) {
      return;
    }
    for (var i = 0; i < mountedChildren.length; i++) {
      var childInfo = mountedChildren[i];
      if (childInfo && childInfo.targetInfo) {
        var target = getTarget(childInfo.targetInfo.localID, targetMap);
        if (!target) {
          continue;
        }
        var curTargetMap = targetMap;
        var localID = childInfo.targetInfo.localID;
        if (localID.length > 0) {
          for (var _i2 = 0; _i2 < localID.length - 1; _i2++) {
            curTargetMap = curTargetMap[localID[_i2]];
          }
        }
        if (childInfo.nodes) {
          for (var _i3 = 0; _i3 < childInfo.nodes.length; _i3++) {
            var childNode = childInfo.nodes[_i3];
            if (!childNode || target.children.includes(childNode)) {
              continue;
            }
            target.children.push(childNode);
            childNode.modifyParent(target);
            if (EDITOR) {
              if (!childNode[editorExtrasTag]) {
                childNode[editorExtrasTag] = {};
              }
              // NOTE: editor polyfill
              childNode[editorExtrasTag].mountedRoot = node;
            }
            // mounted node need to add to the target map
            generateTargetMap(childNode, curTargetMap, false);
            childNode.siblingIndex = target.children.length - 1;
            expandPrefabInstanceNode(childNode, true);
          }
        }
      }
    }
  }
  function applyMountedComponents(node, mountedComponents, targetMap) {
    if (!mountedComponents) {
      return;
    }
    for (var i = 0; i < mountedComponents.length; i++) {
      var componentsInfo = mountedComponents[i];
      if (componentsInfo && componentsInfo.targetInfo) {
        var target = getTarget(componentsInfo.targetInfo.localID, targetMap);
        if (!target) {
          continue;
        }
        if (componentsInfo.components) {
          for (var _i4 = 0; _i4 < componentsInfo.components.length; _i4++) {
            var comp = componentsInfo.components[_i4];
            if (!comp) {
              continue;
            }
            comp.node = target;
            if (EDITOR) {
              if (!comp[editorExtrasTag]) {
                comp[editorExtrasTag] = {};
              }
              // TODO: editor polyfill
              comp[editorExtrasTag].mountedRoot = node;
            }
            target.getWritableComponents().push(comp);
          }
        }
      }
    }
  }
  function applyRemovedComponents(node, removedComponents, targetMap) {
    if (!removedComponents) {
      return;
    }
    for (var i = 0; i < removedComponents.length; i++) {
      var targetInfo = removedComponents[i];
      if (targetInfo) {
        var target = getTarget(targetInfo.localID, targetMap);
        if (!target || !target.node) {
          continue;
        }
        var index = target.node.components.indexOf(target);
        if (index >= 0) {
          target.node.getWritableComponents().splice(index, 1);
        }
      }
    }
  }
  function applyPropertyOverrides(node, propertyOverrides, targetMap) {
    if (propertyOverrides.length <= 0) {
      return;
    }
    var target = null;
    for (var i = 0; i < propertyOverrides.length; i++) {
      var propOverride = propertyOverrides[i];
      if (propOverride && propOverride.targetInfo) {
        var targetInfo = propOverride.targetInfo;
        target = getTarget(targetInfo.localID, targetMap);
        if (!target) {
          // Can't find target
          continue;
        }
        var targetPropOwner = target;
        var propertyPath = propOverride.propertyPath.slice();
        if (propertyPath.length > 0) {
          var targetPropName = propertyPath.pop();
          if (!targetPropName) {
            continue;
          }
          for (var _i5 = 0; _i5 < propertyPath.length; _i5++) {
            var propName = propertyPath[_i5];
            targetPropOwner = targetPropOwner[propName];
            if (!targetPropOwner) {
              break;
            }
          }
          if (!targetPropOwner) {
            continue;
          }
          if (Array.isArray(targetPropOwner)) {
            // if set element of a array, the length of a array must has been defined.
            if (targetPropName === 'length') {
              targetPropOwner[targetPropName] = propOverride.value;
            } else {
              var index = Number.parseInt(targetPropName);
              if (Number.isInteger(index) && index < targetPropOwner.length) {
                targetPropOwner[targetPropName] = propOverride.value;
              }
            }
          } else if (targetPropOwner[targetPropName] instanceof ValueType) {
            targetPropOwner[targetPropName].set(propOverride.value);
          } else {
            targetPropOwner[targetPropName] = propOverride.value;
          }
        } else if (EDITOR) {
          warn('property path is empty');
        }
      }
    }
  }
  function applyTargetOverrides(node) {
    var _node$prefab2;
    var targetOverrides = (_node$prefab2 = node.prefab) === null || _node$prefab2 === void 0 ? void 0 : _node$prefab2.targetOverrides;
    if (targetOverrides) {
      for (var i = 0; i < targetOverrides.length; i++) {
        var _targetAsNode$prefab;
        var targetOverride = targetOverrides[i];
        var source = targetOverride.source;
        var sourceInfo = targetOverride.sourceInfo;
        if (sourceInfo) {
          var _src$prefab;
          var src = targetOverride.source;
          var sourceInstance = src === null || src === void 0 ? void 0 : (_src$prefab = src.prefab) === null || _src$prefab === void 0 ? void 0 : _src$prefab.instance;
          if (sourceInstance && sourceInstance.targetMap) {
            source = getTarget(sourceInfo.localID, sourceInstance.targetMap);
          }
        }
        if (!source) {
          // Can't find source
          continue;
        }
        var target = null;
        var targetInfo = targetOverride.targetInfo;
        if (!targetInfo) {
          continue;
        }
        var targetAsNode = targetOverride.target;
        var targetInstance = targetAsNode === null || targetAsNode === void 0 ? void 0 : (_targetAsNode$prefab = targetAsNode.prefab) === null || _targetAsNode$prefab === void 0 ? void 0 : _targetAsNode$prefab.instance;
        if (!targetInstance || !targetInstance.targetMap) {
          continue;
        }
        target = getTarget(targetInfo.localID, targetInstance.targetMap);
        if (!target) {
          // Can't find target
          continue;
        }
        var propertyPath = targetOverride.propertyPath.slice();
        var targetPropOwner = source;
        if (propertyPath.length > 0) {
          var targetPropName = propertyPath.pop();
          if (!targetPropName) {
            return;
          }
          for (var _i6 = 0; _i6 < propertyPath.length; _i6++) {
            var propName = propertyPath[_i6];
            targetPropOwner = targetPropOwner[propName];
            if (!targetPropOwner) {
              break;
            }
          }
          if (!targetPropOwner) {
            continue;
          }
          targetPropOwner[targetPropName] = target;
        }
      }
    }
  }
  function expandPrefabInstanceNode(node, recursively) {
    var _node$prefab3;
    if (recursively === void 0) {
      recursively = false;
    }
    var prefabInstance = node === null || node === void 0 ? void 0 : (_node$prefab3 = node.prefab) === null || _node$prefab3 === void 0 ? void 0 : _node$prefab3.instance;
    if (prefabInstance && !prefabInstance.expanded) {
      createNodeWithPrefab(node);
      // nested prefab should expand before parent(property override order)
      if (recursively) {
        if (node && node.children) {
          node.children.forEach(function (child) {
            expandPrefabInstanceNode(child, true);
          });
        }
      }
      var targetMap = {};
      prefabInstance.targetMap = targetMap;
      generateTargetMap(node, targetMap, true);
      applyMountedChildren(node, prefabInstance.mountedChildren, targetMap);
      applyRemovedComponents(node, prefabInstance.removedComponents, targetMap);
      applyMountedComponents(node, prefabInstance.mountedComponents, targetMap);
      applyPropertyOverrides(node, prefabInstance.propertyOverrides, targetMap);
      prefabInstance.expanded = true;
    } else if (recursively) {
      if (node && node.children) {
        node.children.forEach(function (child) {
          expandPrefabInstanceNode(child, true);
        });
      }
    }
  }
  function expandNestedPrefabInstanceNode(node) {
    var prefabInfo = node.prefab;
    if (prefabInfo && prefabInfo.nestedPrefabInstanceRoots) {
      prefabInfo.nestedPrefabInstanceRoots.forEach(function (instanceNode) {
        expandPrefabInstanceNode(instanceNode);
        // when expanding the prefab,it's children will be change,so need to apply after expanded
        // if (!EDITOR) {
        //     applyNodeAndComponentId(instanceNode, (instanceNode as any)._prefab?.instance?.fileId ?? '');
        // }
      });
    }
  }

  // make sure prefab instance's children id is fixed
  function applyNodeAndComponentId(prefabInstanceNode, rootId) {
    var components = prefabInstanceNode.components,
      children = prefabInstanceNode.children;
    for (var i = 0; i < components.length; i++) {
      var _comp$__prefab$fileId, _comp$__prefab;
      var comp = components[i];
      var fileID = (_comp$__prefab$fileId = (_comp$__prefab = comp.__prefab) === null || _comp$__prefab === void 0 ? void 0 : _comp$__prefab.fileId) !== null && _comp$__prefab$fileId !== void 0 ? _comp$__prefab$fileId : '';
      comp._id = "" + rootId + fileID;
    }
    for (var _i7 = 0; _i7 < children.length; _i7++) {
      var child = children[_i7];
      // TODO(PP_Pro): after we support editorOnly tag, we could remove this any type assertion.
      // Tracking issue: https://github.com/cocos/cocos-engine/issues/14613
      var prefabInfo = child.prefab;
      var fileId = prefabInfo !== null && prefabInfo !== void 0 && prefabInfo.instance ? prefabInfo.instance.fileId : prefabInfo === null || prefabInfo === void 0 ? void 0 : prefabInfo.fileId;
      if (!fileId) continue;
      child.id = "" + rootId + fileId;

      // ignore prefab instance,because it will be apply in 'nestedPrefabInstanceRoots' for loop;
      if (!(prefabInfo !== null && prefabInfo !== void 0 && prefabInfo.instance)) {
        applyNodeAndComponentId(child, rootId);
      }
    }
  }
  _export({
    createNodeWithPrefab: createNodeWithPrefab,
    generateTargetMap: generateTargetMap,
    getTarget: getTarget,
    applyMountedChildren: applyMountedChildren,
    applyMountedComponents: applyMountedComponents,
    applyRemovedComponents: applyRemovedComponents,
    applyPropertyOverrides: applyPropertyOverrides,
    applyTargetOverrides: applyTargetOverrides,
    expandPrefabInstanceNode: expandPrefabInstanceNode,
    expandNestedPrefabInstanceNode: expandNestedPrefabInstanceNode,
    applyNodeAndComponentId: applyNodeAndComponentId
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      SUPPORT_JIT = _virtualInternal253AconstantsJs.SUPPORT_JIT;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      errorID = _coreIndexJs.errorID;
      warn = _coreIndexJs.warn;
      editorExtrasTag = _coreIndexJs.editorExtrasTag;
    }, function (_coreValueTypesIndexJs) {
      ValueType = _coreValueTypesIndexJs.ValueType;
    }, function (_prefabInfoJs) {
      var _exportObj = {};
      for (var _key in _prefabInfoJs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _prefabInfoJs[_key];
      }
      _export(_exportObj);
    }],
    execute: function () {}
  };
});