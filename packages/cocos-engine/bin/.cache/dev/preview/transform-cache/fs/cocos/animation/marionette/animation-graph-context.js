System.register("q-bundled:///fs/cocos/animation/marionette/animation-graph-context.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/utils/asserts.js", "../core/pose.js", "../core/pose-allocator.js", "../core/transform-array.js", "../core/transform.js", "../../core/index.js", "../../core/algorithm/partition.js", "./pose-graph/pose-nodes/transform-space.js", "../core/pose-heap-allocator.js"], function (_export, _context) {
  "use strict";

  var DEBUG, assertIsTrue, PoseTransformSpace, TransformFilter, PoseStackAllocator, TransformArray, Transform, ZERO_DELTA_TRANSFORM, error, partition, TransformSpace, PoseHeapAllocator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class3, AnimationGraphBindingContext, cacheTransform, AuxiliaryCurveRegistry, LayoutChangeFlag, checkBindStatus, AnimationGraphPoseLayoutMaintainer, TransformRecord, AuxiliaryCurveRecord, defaultTransformsTag, AnimationGraphSettleContext, cacheTransform_spaceConversion, cacheParentTransform_spaceConversion, AnimationGraphEvaluationContext, TransformHandleInternal, AuxiliaryCurveHandleInternal, AnimationGraphUpdateContextGenerator, DeferredPoseStashAllocator;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  /**
   * This module contains stuffs related to animation graph's evaluation.
   *
   * The typical workflow to setup a animation graph evaluation is:
   *
   * At binding phase:
   * - Creates a `PoseLayoutMaintainer`.
   * - Creates a `AnimationGraphBindingContext`, which collects animation bindings and report them to the `PoseLayoutMaintainer`.
   * - Binding all portion of the animation graph under such a context.
   *
   * At each evaluation phase:
   * - Creates a (or reuse a) `AnimationGraphEvaluationContext`.
   * - Do the evaluation, generate a pose.
   * - Call `PoseLayoutMaintainer.apply()` to apply the pose into scene graph.
   *
   * When an override-clip request is fired, the binding phase is performed again.
   */

  function findBoneByNameRecursively(from, name) {
    if (from.name === name) {
      return from;
    }
    var nChildren = from.children.length;
    for (var iChild = 0; iChild < nChildren; ++iChild) {
      var found = findBoneByNameRecursively(from.children[iChild], name);
      if (found) {
        return found;
      }
    }
    return null;
  }
  function trimRecords(records) {
    var nUsedRecords = partition(records, function (record) {
      assertIsTrue(record.refCount >= 0);
      return record.refCount > 0;
    });
    assertIsTrue(nUsedRecords <= records.length);
    if (nUsedRecords === records.length) {
      return;
    }
    // Reassign indices.
    for (var iRecord = 0; iRecord < nUsedRecords; ++iRecord) {
      records[iRecord].handle.index = iRecord;
    }
    // Trim the array.
    if (DEBUG) {
      records.slice(nUsedRecords).forEach(function (record) {
        return record.refCount = -1;
      });
    }
    records.splice(nUsedRecords, records.length - nUsedRecords);
  }
  _export("LayoutChangeFlag", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreDataUtilsAssertsJs) {
      assertIsTrue = _coreDataUtilsAssertsJs.assertIsTrue;
    }, function (_corePoseJs) {
      PoseTransformSpace = _corePoseJs.PoseTransformSpace;
      TransformFilter = _corePoseJs.TransformFilter;
    }, function (_corePoseAllocatorJs) {
      PoseStackAllocator = _corePoseAllocatorJs.PoseStackAllocator;
    }, function (_coreTransformArrayJs) {
      TransformArray = _coreTransformArrayJs.TransformArray;
    }, function (_coreTransformJs) {
      Transform = _coreTransformJs.Transform;
      ZERO_DELTA_TRANSFORM = _coreTransformJs.ZERO_DELTA_TRANSFORM;
    }, function (_coreIndexJs) {
      error = _coreIndexJs.error;
    }, function (_coreAlgorithmPartitionJs) {
      partition = _coreAlgorithmPartitionJs.partition;
    }, function (_poseGraphPoseNodesTransformSpaceJs) {
      TransformSpace = _poseGraphPoseNodesTransformSpaceJs.TransformSpace;
    }, function (_corePoseHeapAllocatorJs) {
      PoseHeapAllocator = _corePoseHeapAllocatorJs.PoseHeapAllocator;
    }],
    execute: function () {
      /**
       * The binding context of an animation graph.
       */
      _export("AnimationGraphBindingContext", AnimationGraphBindingContext = /*#__PURE__*/function () {
        function AnimationGraphBindingContext(origin, poseLayoutMaintainer, varRegistry, _controller) {
          var _this = this;
          this._origin = void 0;
          this._layoutMaintainer = void 0;
          this._varRegistry = void 0;
          /** At least has one. */
          this._additiveFlagStack = [];
          this._triggerResetter = function (name) {
            return _this._resetTrigger(name);
          };
          this._isLayerWideContextPropertiesSet = false;
          this._stashView = void 0;
          this._motionSyncManager = void 0;
          this._clipOverrides = undefined;
          this._controller = _controller;
          this._origin = origin;
          this._layoutMaintainer = poseLayoutMaintainer;
          this._varRegistry = varRegistry;
          this._additiveFlagStack = [false]; // By default, non-additive.
        }

        /**
         * The origin node.
         *
         * The origin node is the origin from where the animation target start to resolve.
         * It's now definitely the node hosting the running animation controller component.
         */
        var _proto = AnimationGraphBindingContext.prototype;
        _proto.bindTransform = function bindTransform(bone) {
          var boneNode = this._origin.getChildByPath(bone);
          if (!boneNode) {
            return null;
          }
          return this._layoutMaintainer.getOrCreateTransformBinding(boneNode);
        };
        _proto.bindTransformByName = function bindTransformByName(bone) {
          var boneNode = findBoneByNameRecursively(this._origin, bone);
          if (!boneNode) {
            return null;
          }
          return this._layoutMaintainer.getOrCreateTransformBinding(boneNode);
        };
        _proto.getBoneChildren = function getBoneChildren(bone) {
          var boneNode = findBoneByNameRecursively(this._origin, bone);
          if (!boneNode) {
            return [];
          }
          return boneNode.children.map(function (childNode) {
            return childNode.name;
          });
        };
        _proto.getParentBoneNameByName = function getParentBoneNameByName(bone) {
          var _boneNode$parent;
          var boneNode = findBoneByNameRecursively(this._origin, bone);
          if (!boneNode) {
            return null;
          }
          return boneNode === this._origin ? '' : (_boneNode$parent = boneNode.parent) === null || _boneNode$parent === void 0 ? void 0 : _boneNode$parent.name;
        };
        _proto.bindAuxiliaryCurve = function bindAuxiliaryCurve(name) {
          return this._layoutMaintainer.getOrCreateAuxiliaryCurveBinding(name);
        };
        _proto.getEvaluationTimeAuxiliaryCurveView = function getEvaluationTimeAuxiliaryCurveView() {
          return this._layoutMaintainer.auxiliaryCurveRegistry;
        };
        _proto.getVar = function getVar(id) {
          return this._varRegistry[id];
        }

        /**
         * Pushes the `additive` flag. A later `_popAdditiveFlag` is required to pop the change.
         * @internal
         */;
        _proto._pushAdditiveFlag = function _pushAdditiveFlag(additive) {
          this._additiveFlagStack.push(additive);
        }

        /**
         * Undo last `_pushAdditiveFlag`.
         * @internal
         */;
        _proto._popAdditiveFlag = function _popAdditiveFlag() {
          assertIsTrue(this._additiveFlagStack.length > 1);
          this._additiveFlagStack.pop();
        }

        /** @internal */;
        _proto._integrityCheck = function _integrityCheck() {
          return this._additiveFlagStack.length === 1;
        };
        /**
         * @internal
         */
        _proto._setLayerWideContextProperties = function _setLayerWideContextProperties(stashView, motionSyncManager) {
          assertIsTrue(!this._isLayerWideContextPropertiesSet);
          this._isLayerWideContextPropertiesSet = true;
          this._stashView = stashView;
          this._motionSyncManager = motionSyncManager;
        }

        /**
         * @internal
         */;
        _proto._unsetLayerWideContextProperties = function _unsetLayerWideContextProperties() {
          assertIsTrue(this._isLayerWideContextPropertiesSet);
          this._isLayerWideContextPropertiesSet = false;
          this._stashView = undefined;
          this._motionSyncManager = undefined;
        }

        /**
         * @internal
         */;
        _proto._setClipOverrides = function _setClipOverrides(clipOverrides) {
          this._clipOverrides = clipOverrides;
        };
        _proto._resetTrigger = function _resetTrigger(triggerName) {
          var varInstance = this._varRegistry[triggerName];
          if (!varInstance) {
            return;
          }
          varInstance.value = false;
        };
        _createClass(AnimationGraphBindingContext, [{
          key: "origin",
          get: function get() {
            return this._origin;
          }

          /**
           * The animation controller component currently running the animation graph.
           */
        }, {
          key: "controller",
          get: function get() {
            return this._controller;
          }

          /**
           * A free function to reset specified trigger.
           * @internal This function should only be accessed by the builtin state machine.
           */
        }, {
          key: "triggerResetter",
          get: function get() {
            return this._triggerResetter;
          }
        }, {
          key: "clipOverrides",
          get: function get() {
            return this._clipOverrides;
          }

          /**
           * Returns if current context expects to have an additive pose.
           */
        }, {
          key: "additive",
          get: function get() {
            var additiveFlagStack = this._additiveFlagStack;
            return additiveFlagStack[additiveFlagStack.length - 1];
          }
        }, {
          key: "stashView",
          get: function get() {
            assertIsTrue(this._stashView);
            return this._stashView;
          }
        }, {
          key: "motionSyncManager",
          get: function get() {
            assertIsTrue(this._motionSyncManager);
            return this._motionSyncManager;
          }
        }]);
        return AnimationGraphBindingContext;
      }());
      cacheTransform = new Transform();
      _export("AuxiliaryCurveRegistry", AuxiliaryCurveRegistry = /*#__PURE__*/function () {
        function AuxiliaryCurveRegistry() {
          this._namedCurves = new Map();
        }
        var _proto2 = AuxiliaryCurveRegistry.prototype;
        _proto2.names = function names() {
          return this._namedCurves.keys();
        };
        _proto2.has = function has(name) {
          return this._namedCurves.has(name);
        };
        _proto2.get = function get(name) {
          var _this$_namedCurves$ge;
          return (_this$_namedCurves$ge = this._namedCurves.get(name)) !== null && _this$_namedCurves$ge !== void 0 ? _this$_namedCurves$ge : 0.0;
        };
        _proto2.set = function set(name, value) {
          this._namedCurves.set(name, value);
        };
        return AuxiliaryCurveRegistry;
      }());
      (function (LayoutChangeFlag) {
        LayoutChangeFlag[LayoutChangeFlag["TRANSFORM_COUNT"] = 1] = "TRANSFORM_COUNT";
        LayoutChangeFlag[LayoutChangeFlag["TRANSFORM_ORDER"] = 2] = "TRANSFORM_ORDER";
        LayoutChangeFlag[LayoutChangeFlag["AUXILIARY_CURVE_COUNT"] = 4] = "AUXILIARY_CURVE_COUNT";
      })(LayoutChangeFlag || _export("LayoutChangeFlag", LayoutChangeFlag = {}));
      checkBindStatus = function checkBindStatus(bindStarted) {
        if (bindStarted === void 0) {
          bindStarted = false;
        }
        return function (_, _propertyKey, descriptor) {
          if (!DEBUG) {
            return;
          }
          var vendor = descriptor.value;
          if (vendor) {
            // eslint-disable-next-line func-names
            descriptor.value = function () {
              assertIsTrue(this._bindStarted === bindStarted, bindStarted ? "The operation is invalid since bind has not been started." : "The operation is invalid since bind has already been started.");
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return vendor.call.apply(vendor, [this].concat(args));
            };
          }
        };
      };
      _export("AnimationGraphPoseLayoutMaintainer", AnimationGraphPoseLayoutMaintainer = (_dec = checkBindStatus(true), _dec2 = checkBindStatus(true), _dec3 = checkBindStatus(true), _dec4 = checkBindStatus(true), _dec5 = checkBindStatus(true), _dec6 = checkBindStatus(false), _dec7 = checkBindStatus(true), (_class3 = /*#__PURE__*/function () {
        /**
         * @param origin This node and all nodes under this node can be bound.
         */
        function AnimationGraphPoseLayoutMaintainer(origin, auxiliaryCurveRegistry) {
          this._origin = void 0;
          this._auxiliaryCurveRegistry = void 0;
          this._auxiliaryCurveRecords = [];
          this._transformRecords = [];
          this._parentTable = [];
          this._bindStarted = false;
          this._transformCountBeforeBind = -1;
          this._auxiliaryCurveCountBeforeBind = -1;
          this._origin = origin;
          this._auxiliaryCurveRegistry = auxiliaryCurveRegistry;
        }
        var _proto3 = AnimationGraphPoseLayoutMaintainer.prototype;
        _proto3.getOrCreateTransformBinding = function getOrCreateTransformBinding(node) {
          var origin = this._origin;

          // Ensure the node is origin or under origin.
          var debugIntegrityCheckLengthOfPathToOrigin = 0;
          var isValidNode = false;
          for (var current = node; current; current = current.parent) {
            if (current === origin) {
              isValidNode = true;
              break;
            }
            if (DEBUG) {
              ++debugIntegrityCheckLengthOfPathToOrigin;
            }
          }
          if (!isValidNode) {
            return null;
          }

          // Get or create the handle for the node.
          var handle = this._getOrCreateTransformBinding(node);

          // Also try to create handles for ancestors if we're not bounding origin.
          // In other words, origin is not bound by default
          // except that you explicitly bind to it.
          if (node !== origin) {
            if (DEBUG) {
              --debugIntegrityCheckLengthOfPathToOrigin;
              assertIsTrue(debugIntegrityCheckLengthOfPathToOrigin >= 0);
            }
            for (var parent = node.parent; parent !== origin; parent = parent.parent) {
              assertIsTrue(parent);
              // But discard the result.
              // eslint-disable-next-line no-void
              void this._getOrCreateTransformBinding(parent);
              if (DEBUG) {
                --debugIntegrityCheckLengthOfPathToOrigin;
                assertIsTrue(debugIntegrityCheckLengthOfPathToOrigin >= 0);
              }
            }
          }
          if (DEBUG) {
            assertIsTrue(debugIntegrityCheckLengthOfPathToOrigin === 0);
          }
          return handle;
        };
        _proto3._getOrCreateTransformBinding = function _getOrCreateTransformBinding(node) {
          var transformRecords = this._transformRecords;
          var transformIndex = transformRecords.findIndex(function (transformRecord) {
            return transformRecord.node === node;
          });
          if (transformIndex >= 0) {
            var _transformRecord = transformRecords[transformIndex];
            ++_transformRecord.refCount;
            return _transformRecord.handle;
          }

          // Ensure parent is preceding to children.
          var newNodeIndex = 0;
          var _loop = function _loop(parent) {
            var parentIndex = transformRecords.findIndex(function (transformRecord) {
              return transformRecord.node === parent;
            });
            if (parentIndex >= 0) {
              newNodeIndex = parentIndex + 1;
              return 1; // break
            }
          };
          for (var parent = node.parent; parent; parent = parent.parent) {
            if (_loop(parent)) break;
          }

          // Update necessary bone handle.
          for (var _transformIndex = newNodeIndex; _transformIndex < transformRecords.length; ++_transformIndex) {
            ++transformRecords[_transformIndex].handle.index;
          }

          // Insert new transform record.
          var transformRecord = new TransformRecord(new TransformHandleInternal(this, newNodeIndex), node);
          transformRecords.splice(newNodeIndex, 0, transformRecord);
          return transformRecord.handle;
        };
        _proto3.getOrCreateAuxiliaryCurveBinding = function getOrCreateAuxiliaryCurveBinding(name) {
          var auxiliaryCurveRecords = this._auxiliaryCurveRecords;
          var auxiliaryCurveIndex = auxiliaryCurveRecords.findIndex(function (record) {
            return record.name === name;
          });
          if (auxiliaryCurveIndex >= 0) {
            var auxiliaryCurveRecord = auxiliaryCurveRecords[auxiliaryCurveIndex];
            ++auxiliaryCurveRecord.refCount;
            return auxiliaryCurveRecord.handle;
          } else {
            var newAuxiliaryCurveIndex = auxiliaryCurveRecords.length;
            var _auxiliaryCurveRecord = new AuxiliaryCurveRecord(new AuxiliaryCurveHandleInternal(this, newAuxiliaryCurveIndex), name);
            auxiliaryCurveRecords.push(_auxiliaryCurveRecord);
            return _auxiliaryCurveRecord.handle;
          }
        };
        _proto3.createEvaluationContext = function createEvaluationContext() {
          assertIsTrue(!this._bindStarted);
          return new AnimationGraphEvaluationContext(this.transformCount, this.auxiliaryCurveCount, this._parentTable.slice(), this._origin);
        };
        _proto3.resetPoseStashAllocator = function resetPoseStashAllocator(allocator) {
          assertIsTrue(!this._bindStarted);
          allocator._reset(this.transformCount, this.auxiliaryCurveCount);
        };
        _proto3.createTransformFilter = function createTransformFilter(mask) {
          var origin = this._origin;
          var involvedTransformIndices = [];
          for (var _iterator = _createForOfIteratorHelperLoose(this._transformRecords), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              node = _step$value.node,
              handle = _step$value.handle;
            var path = countPath(origin, node);
            if (typeof path === 'undefined') {
              error(node.getPathInHierarchy() + " is not a child of " + origin.getPathInHierarchy());
              // fallthrough
            } else if (mask.isExcluded(path)) {
              continue;
            }
            involvedTransformIndices.push(handle.index);
          }
          involvedTransformIndices.sort();
          var poseFilter = new TransformFilter(involvedTransformIndices);
          return poseFilter;
          function countPath(from, to) {
            var path = [];
            for (var node = to; node; node = node.parent) {
              if (node === from) {
                return path.join('/');
              } else {
                path.unshift(node.name);
              }
            }
            return undefined; // Non-closed.
          }
        };
        _proto3.fetchDefaultTransforms = function fetchDefaultTransforms(transforms) {
          var nTransforms = this._transformRecords.length;
          assertIsTrue(transforms.length === nTransforms);
          for (var iTransform = 0; iTransform < nTransforms; ++iTransform) {
            var defaultTransform = this._transformRecords[iTransform].defaultTransform;
            transforms.setTransform(iTransform, defaultTransform);
          }
        };
        _proto3.apply = function apply(pose) {
          var transforms = pose.transforms,
            auxiliaryCurves = pose.auxiliaryCurves;
          var nTransforms = this._transformRecords.length;
          assertIsTrue(transforms.length === nTransforms);
          for (var iTransform = 0; iTransform < nTransforms; ++iTransform) {
            var transform = transforms.getTransform(iTransform, cacheTransform);
            var node = this._transformRecords[iTransform].node;
            node.setRTS(transform.rotation, transform.position, transform.scale);
          }
          var nAuxiliaryCurves = this._auxiliaryCurveRecords.length;
          for (var iAuxiliaryCurve = 0; iAuxiliaryCurve < nAuxiliaryCurves; ++iAuxiliaryCurve) {
            var _curveName = this._auxiliaryCurveRecords[iAuxiliaryCurve].name;
            var curveValue = auxiliaryCurves[iAuxiliaryCurve];
            this._auxiliaryCurveRegistry.set(_curveName, curveValue);
          }
        }

        /**
         * @engineInternal
         */;
        _proto3._destroyTransformHandle = function _destroyTransformHandle(index) {
          assertIsTrue(index >= 0 && index < this._transformRecords.length, "Invalid transform handle.");
          var record = this._transformRecords[index];
          assertIsTrue(record.refCount > 0, "Something work wrong: refCount mismatch.");
          --record.refCount;
        }

        /**
         * @engineInternal
         */;
        _proto3._destroyAuxiliaryCurveHandle = function _destroyAuxiliaryCurveHandle(index) {
          assertIsTrue(index >= 0 && index < this._auxiliaryCurveRecords.length, "Invalid auxiliary value handle.");
          var record = this._auxiliaryCurveRecords[index];
          assertIsTrue(record.refCount > 0, "Something work wrong: refCount mismatch.");
          --record.refCount;
        };
        _proto3.startBind = function startBind() {
          this._bindStarted = true;
          this._transformCountBeforeBind = this._transformRecords.length;
          this._auxiliaryCurveCountBeforeBind = this._auxiliaryCurveRecords.length;
        };
        _proto3.endBind = function endBind() {
          var transformRecords = this._transformRecords,
            auxiliaryCurveRecords = this._auxiliaryCurveRecords;
          var changeFlags = 0;

          // Detect changes in transforms.
          trimRecords(transformRecords);
          if (transformRecords.length !== this._transformCountBeforeBind) {
            changeFlags |= LayoutChangeFlag.TRANSFORM_COUNT;
            // If the transform's count is changed, we only sync orders.
            var nRecords = transformRecords.length;
            for (var iRecord = 0; iRecord < nRecords; ++iRecord) {
              var record = transformRecords[iRecord];
              record.order = iRecord;
            }
          } else {
            // Sync order and detect change.
            var _nRecords = transformRecords.length;
            var orderChanged = false;
            for (var _iRecord = 0; _iRecord < _nRecords; ++_iRecord) {
              var _record = transformRecords[_iRecord];
              if (_record.order !== _iRecord) {
                orderChanged = true;
                _record.order = _iRecord;
              }
            }
            if (orderChanged) {
              changeFlags |= LayoutChangeFlag.TRANSFORM_ORDER;
            }
          }

          // Detect changes in auxiliary values.
          trimRecords(auxiliaryCurveRecords);
          if (auxiliaryCurveRecords.length !== this._auxiliaryCurveCountBeforeBind) {
            changeFlags |= LayoutChangeFlag.AUXILIARY_CURVE_COUNT;
          }

          // Reconstruct the parent table.
          var parentTable = this._parentTable,
            origin = this._origin;
          parentTable.length = transformRecords.length;
          var _loop2 = function _loop2() {
            var node = transformRecords[iTransform].node;
            if (node === origin) {
              parentTable[iTransform] = -1;
              return 1; // continue
            }
            var parent = node.parent;
            if (parent === origin) {
              // If the parent is the origin, the origin can be bound or not.
              var parentIndex = transformRecords.findIndex(function (record) {
                return record.node === parent;
              });
              parentTable[iTransform] = parentIndex >= 0 ? parentIndex : -1;
            } else {
              // In other case we have the promise: parent of a node should have also been bound.
              var _parentIndex = transformRecords.findIndex(function (record) {
                return record.node === parent;
              });
              assertIsTrue(_parentIndex >= 0, "Parent node is not bound!");
              // This is what we promised and what the evaluation context required.
              assertIsTrue(_parentIndex < iTransform);
              parentTable[iTransform] = _parentIndex;
            }
          };
          for (var iTransform = 0; iTransform < transformRecords.length; ++iTransform) {
            if (_loop2()) continue;
          }
          this._bindStarted = false;

          // Do some checks in debug mode.
          if (DEBUG) {
            transformRecords.forEach(function (transformRecord, index, transformRecords) {
              assertIsTrue(transformRecord.handle.index === index, "Bad transform handle.");
              assertIsTrue(transformRecord.order === index, "Bad transform order field.");

              // Ensure that transforms are sorted so that parent is in front of child.
              var _loop3 = function _loop3(parent) {
                var parentIndex = transformRecords.findIndex(function (r) {
                  return r.node === parent;
                });
                if (parentIndex >= 0) {
                  assertIsTrue(parentIndex < index, "Bad transform order.");
                }
              };
              for (var parent = transformRecord.node.parent; parent; parent = parent.parent) {
                _loop3(parent);
              }
            });
            this._transformCountBeforeBind = -1;
            this._auxiliaryCurveCountBeforeBind = -1;
          }
          return changeFlags;
        };
        _createClass(AnimationGraphPoseLayoutMaintainer, [{
          key: "transformCount",
          get: function get() {
            return this._transformRecords.length;
          }
        }, {
          key: "auxiliaryCurveCount",
          get: function get() {
            return this._auxiliaryCurveRecords.length;
          }
        }, {
          key: "auxiliaryCurveRegistry",
          get: function (_get) {
            function get() {
              return _get.apply(this, arguments);
            }
            get.toString = function () {
              return _get.toString();
            };
            return get;
          }(function () {
            return this._auxiliaryCurveRegistry;
          })
        }]);
        return AnimationGraphPoseLayoutMaintainer;
      }(), (_applyDecoratedDescriptor(_class3.prototype, "getOrCreateTransformBinding", [_dec], Object.getOwnPropertyDescriptor(_class3.prototype, "getOrCreateTransformBinding"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "_getOrCreateTransformBinding", [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, "_getOrCreateTransformBinding"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "getOrCreateAuxiliaryCurveBinding", [_dec3], Object.getOwnPropertyDescriptor(_class3.prototype, "getOrCreateAuxiliaryCurveBinding"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "_destroyTransformHandle", [_dec4], Object.getOwnPropertyDescriptor(_class3.prototype, "_destroyTransformHandle"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "_destroyAuxiliaryCurveHandle", [_dec5], Object.getOwnPropertyDescriptor(_class3.prototype, "_destroyAuxiliaryCurveHandle"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "startBind", [_dec6], Object.getOwnPropertyDescriptor(_class3.prototype, "startBind"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "endBind", [_dec7], Object.getOwnPropertyDescriptor(_class3.prototype, "endBind"), _class3.prototype)), _class3)));
      TransformRecord = function TransformRecord(handle, node) {
        /** The order of the transform. */
        this.order = -1;
        this.refCount = 1;
        this.handle = void 0;
        this.node = void 0;
        this.defaultTransform = void 0;
        this.handle = handle;
        this.node = node;
        var defaultTransform = new Transform();
        defaultTransform.position = node.position;
        defaultTransform.rotation = node.rotation;
        defaultTransform.scale = node.scale;
        this.defaultTransform = defaultTransform;
      };
      AuxiliaryCurveRecord = function AuxiliaryCurveRecord(handle, name) {
        this.refCount = 1;
        this.handle = void 0;
        this.name = void 0;
        this.handle = handle;
        this.name = name;
      };
      _export("defaultTransformsTag", defaultTransformsTag = Symbol('[[DefaultTransforms]]'));
      /**
       * The settle context for animation graph building blocks(state machine/pose node/motion...etc).
       */
      _export("AnimationGraphSettleContext", AnimationGraphSettleContext = /*#__PURE__*/function () {
        function AnimationGraphSettleContext(_layoutMaintainer) {
          this._layoutMaintainer = _layoutMaintainer;
        }

        /**
         * Gets the number of transforms in pose.
         */
        var _proto4 = AnimationGraphSettleContext.prototype;
        /**
         * Creates a transform filter expressing specified animation mask effect.
         * @param mask Animation mask.
         * @returns Result transform filter.
         */
        _proto4.createTransformFilter = function createTransformFilter(mask) {
          return this._layoutMaintainer.createTransformFilter(mask);
        };
        _createClass(AnimationGraphSettleContext, [{
          key: "transformCount",
          get: function get() {
            return this._layoutMaintainer.transformCount;
          }
        }]);
        return AnimationGraphSettleContext;
      }());
      cacheTransform_spaceConversion = new Transform();
      cacheParentTransform_spaceConversion = new Transform();
      AnimationGraphEvaluationContext = /*#__PURE__*/function () {
        function AnimationGraphEvaluationContext(transformCount, metaValueCount, parentTable, componentNode) {
          /**
           * @engineInternal
           */
          this[defaultTransformsTag] = void 0;
          this._poseAllocator = void 0;
          this._parentTable = void 0;
          this._componentNode = void 0;
          this._cacheComponentToWorldTransform = new Transform();
          if (DEBUG) {
            assertIsTrue(transformCount === parentTable.length);
            // We requires all parents are in front of children in `parentTable`.
            assertIsTrue(parentTable.every(function (parentIndex, currentIndex) {
              if (parentIndex < 0) {
                // Root node
                return true;
              }
              return parentIndex < currentIndex;
            }));
          }
          this._poseAllocator = new PoseStackAllocator(transformCount, metaValueCount);
          this._parentTable = parentTable;
          this._componentNode = componentNode;
          this[defaultTransformsTag] = new TransformArray(transformCount);
        }
        var _proto5 = AnimationGraphEvaluationContext.prototype;
        _proto5.destroy = function destroy() {
          this._poseAllocator.destroy();
        };
        _proto5.pushDefaultedPose = function pushDefaultedPose() {
          var pose = this._poseAllocator.push();
          pose.transforms.set(this[defaultTransformsTag]);
          pose._poseTransformSpace = PoseTransformSpace.LOCAL;
          pose.auxiliaryCurves.fill(0.0);
          return pose;
        };
        _proto5.pushDefaultedPoseInComponentSpace = function pushDefaultedPoseInComponentSpace() {
          var pose = this.pushDefaultedPose();
          this._poseTransformsSpaceLocalToComponent(pose);
          return pose;
        };
        _proto5.pushZeroDeltaPose = function pushZeroDeltaPose() {
          var pose = this._poseAllocator.push();
          pose.transforms.fill(ZERO_DELTA_TRANSFORM);
          pose._poseTransformSpace = PoseTransformSpace.LOCAL;
          pose.auxiliaryCurves.fill(0.0);
          return pose;
        };
        _proto5.pushDuplicatedPose = function pushDuplicatedPose(src) {
          var pose = this._poseAllocator.push();
          pose.transforms.set(src.transforms);
          pose._poseTransformSpace = src._poseTransformSpace;
          pose.auxiliaryCurves.set(src.auxiliaryCurves);
          return pose;
        };
        _proto5.popPose = function popPose() {
          this._poseAllocator.pop();
        }

        /**
         * @internal
         */;
        /**
         * @internal
         */
        _proto5._isStackTopPose_debugging = function _isStackTopPose_debugging(pose) {
          return pose === this._poseAllocator.top;
        }

        /** @internal */;
        _proto5._poseTransformsSpaceLocalToComponent = function _poseTransformsSpaceLocalToComponent(pose) {
          var transforms = pose.transforms;
          var nTransforms = transforms.length;
          for (var iTransform = 0; iTransform < nTransforms; ++iTransform) {
            var parentTransformIndex = this._parentTable[iTransform];
            if (parentTransformIndex < 0) {
              // Root node
              continue;
            }
            var transform = transforms.getTransform(iTransform, cacheTransform_spaceConversion);
            var parentTransform = transforms.getTransform(parentTransformIndex, cacheParentTransform_spaceConversion);
            Transform.multiply(transform, parentTransform, transform);
            transforms.setTransform(iTransform, transform);
          }
          pose._poseTransformSpace = PoseTransformSpace.COMPONENT;
        }

        /** @internal */;
        _proto5._poseTransformsSpaceComponentToLocal = function _poseTransformsSpaceComponentToLocal(pose) {
          var transforms = pose.transforms;
          var nTransforms = transforms.length;
          for (var iTransform = nTransforms - 1; iTransform >= 0; --iTransform) {
            var parentTransformIndex = this._parentTable[iTransform];
            if (parentTransformIndex < 0) {
              // Root node
              continue;
            }
            var transform = transforms.getTransform(iTransform, cacheTransform_spaceConversion);
            var parentTransform = transforms.getTransform(parentTransformIndex, cacheParentTransform_spaceConversion);
            Transform.calculateRelative(transform, transform, parentTransform);
            transforms.setTransform(iTransform, transform);
          }
          pose._poseTransformSpace = PoseTransformSpace.LOCAL;
        };
        _proto5._convertPoseSpaceTransformToTargetSpace = function _convertPoseSpaceTransformToTargetSpace(transform, outTransformSpace, pose, poseTransformIndex) {
          var poseSpace = pose._poseTransformSpace;
          switch (outTransformSpace) {
            default:
              if (DEBUG) {
                assertIsTrue(false);
              }
              break;
            case TransformSpace.WORLD:
              if (poseSpace === PoseTransformSpace.COMPONENT) {
                // Component -> World.
                Transform.multiply(transform, this._getComponentToWorldTransform(), transform);
              } else {
                assertIsTrue(poseSpace === PoseTransformSpace.LOCAL);
                // Local -> World.
                Transform.multiply(transform, this._getLocalToWorldTransform(cacheParentTransform_spaceConversion, pose, poseTransformIndex), transform);
              }
              break;
            case TransformSpace.COMPONENT:
              if (poseSpace === PoseTransformSpace.COMPONENT) {
                // The transform is already in component.
              } else {
                assertIsTrue(poseSpace === PoseTransformSpace.LOCAL);
                // Local -> Component.
                Transform.multiply(transform, this._getLocalToComponentTransform(cacheParentTransform_spaceConversion, pose, poseTransformIndex), transform);
              }
              break;
            case TransformSpace.PARENT:
              {
                if (poseSpace === PoseTransformSpace.COMPONENT) {
                  // Component -> Parent.
                  // Parent_Component_Transform * result = Component
                  // result = inv(Component_Transform_of_Parent) * component
                  var parentTransformIndex = this._parentTable[poseTransformIndex];
                  if (parentTransformIndex >= 0) {
                    var parentComponentTransform = pose.transforms.getTransform(parentTransformIndex, cacheParentTransform_spaceConversion);
                    var invParentComponentTransform = Transform.invert(parentComponentTransform, parentComponentTransform);
                    Transform.multiply(transform, invParentComponentTransform, transform);
                  }
                } else {
                  assertIsTrue(poseSpace === PoseTransformSpace.LOCAL);
                  // Local -> Parent.
                  // The transform is already under parent.
                }

                break;
              }
            case TransformSpace.LOCAL:
              {
                // Local -> *
                // Bone_Local_Transform * result = input
                // result = inv(Bone_Local_Transform) * input
                assertIsTrue(poseSpace === PoseTransformSpace.COMPONENT || poseSpace === PoseTransformSpace.LOCAL);
                var boneTransform = pose.transforms.getTransform(poseTransformIndex, cacheParentTransform_spaceConversion);
                var invBoneTransform = Transform.invert(boneTransform, boneTransform);
                Transform.multiply(transform, invBoneTransform, transform);
                break;
              }
          }
          return transform;
        };
        _proto5._convertTransformToPoseTransformSpace = function _convertTransformToPoseTransformSpace(transform, transformSpace, pose, poseTransformIndex) {
          var poseSpace = pose._poseTransformSpace;
          switch (transformSpace) {
            default:
              if (DEBUG) {
                assertIsTrue(false);
              }
              break;
            case TransformSpace.WORLD:
              if (poseSpace === PoseTransformSpace.COMPONENT) {
                // World -> Component.
                var worldToComponent = Transform.invert(cacheParentTransform_spaceConversion, this._getComponentToWorldTransform());
                Transform.multiply(transform, worldToComponent, transform);
              } else {
                assertIsTrue(poseSpace === PoseTransformSpace.LOCAL);
                // World -> Local.
                var localToWorld = this._getLocalToWorldTransform(cacheParentTransform_spaceConversion, pose, poseTransformIndex);
                var worldToLocal = Transform.invert(localToWorld, localToWorld);
                Transform.multiply(transform, worldToLocal, transform);
              }
              break;
            case TransformSpace.COMPONENT:
              if (poseSpace === PoseTransformSpace.COMPONENT) {
                // Identity.
              } else {
                assertIsTrue(poseSpace === PoseTransformSpace.LOCAL);
                // Component -> Local.
                var localToComponent = this._getLocalToComponentTransform(cacheParentTransform_spaceConversion, pose, poseTransformIndex);
                var componentToLocal = Transform.invert(localToComponent, localToComponent);
                Transform.multiply(transform, componentToLocal, transform);
              }
              break;
            case TransformSpace.PARENT:
              {
                if (poseSpace === PoseTransformSpace.COMPONENT) {
                  // Parent -> Component.
                  var parentTransformIndex = this._parentTable[poseTransformIndex];
                  if (parentTransformIndex >= 0) {
                    var parentTransform = pose.transforms.getTransform(parentTransformIndex, cacheParentTransform_spaceConversion);
                    Transform.multiply(transform, parentTransform, transform);
                  }
                } else {
                  // Parent -> Local.
                  // The transform is already in local space.
                }
                break;
              }
            case TransformSpace.LOCAL:
              {
                assertIsTrue(poseSpace === PoseTransformSpace.COMPONENT || poseSpace === PoseTransformSpace.LOCAL);
                // Bone_Local_Transform * result = input
                // result = inv(Bone_Local_Transform) * input
                var currentTransform = pose.transforms.getTransform(poseTransformIndex, cacheParentTransform_spaceConversion);
                Transform.multiply(transform, currentTransform, transform);
                break;
              }
          }
          return transform;
        };
        _proto5._getComponentToWorldTransform = function _getComponentToWorldTransform() {
          var result = this._cacheComponentToWorldTransform;
          var componentNode = this._componentNode;
          result.position = componentNode.worldPosition;
          result.rotation = componentNode.worldRotation;
          result.scale = componentNode.worldScale;
          return result;
        };
        _proto5._getLocalToComponentTransform = function _getLocalToComponentTransform(out, pose, transformIndex) {
          var parentTable = this._parentTable;
          Transform.setIdentity(out);
          for (var iTransform = parentTable[transformIndex]; iTransform >= 0; iTransform = parentTable[iTransform]) {
            var localTransform = pose.transforms.getTransform(iTransform, cacheTransform_spaceConversion);
            Transform.multiply(out, localTransform, out);
          }
          return out;
        };
        _proto5._getLocalToWorldTransform = function _getLocalToWorldTransform(out, pose, transformIndex) {
          this._getLocalToComponentTransform(out, pose, transformIndex);
          Transform.multiply(out, this._getComponentToWorldTransform(), out);
          return out;
        };
        _createClass(AnimationGraphEvaluationContext, [{
          key: "allocatedPoseCount",
          get: function get() {
            return this._poseAllocator.allocatedCount;
          }
        }, {
          key: "parentTable",
          get: function get() {
            return this._parentTable;
          }
        }, {
          key: "_stackSize_debugging",
          get: function get() {
            return this._poseAllocator.allocatedCount;
          }
        }]);
        return AnimationGraphEvaluationContext;
      }();
      TransformHandleInternal = /*#__PURE__*/function () {
        function TransformHandleInternal(host, index) {
          this.index = -1;
          this._host = void 0;
          this._host = host;
          this.index = index;
        }
        var _proto6 = TransformHandleInternal.prototype;
        _proto6.destroy = function destroy() {
          this._host._destroyTransformHandle(this.index);
        };
        return TransformHandleInternal;
      }();
      AuxiliaryCurveHandleInternal = /*#__PURE__*/function () {
        function AuxiliaryCurveHandleInternal(host, index) {
          this.index = -1;
          this._host = void 0;
          this._host = host;
          this.index = index;
        }
        var _proto7 = AuxiliaryCurveHandleInternal.prototype;
        _proto7.destroy = function destroy() {
          this._host._destroyAuxiliaryCurveHandle(this.index);
        };
        return AuxiliaryCurveHandleInternal;
      }();
      /**
       * The update context for animation graph building blocks(state machine/pose node/motion...etc).
       */
      /**
       * Utility class to generate animation graph context.
       *
       * The result of each method of this class is kept available until next call on any of these methods.
       */
      _export("AnimationGraphUpdateContextGenerator", AnimationGraphUpdateContextGenerator = /*#__PURE__*/function () {
        function AnimationGraphUpdateContextGenerator() {
          this._context = {
            deltaTime: 0.0,
            indicativeWeight: 0.0
          };
        }
        var _proto8 = AnimationGraphUpdateContextGenerator.prototype;
        /**
         * Generates a context which has specified attributes.
         * @param deltaTime The result context's `.deltaTime`.
         * @param indicativeWeight The result context's `.indicativeWeight`.
         * @returns The result context.
         */
        _proto8.generate = function generate(deltaTime, indicativeWeight) {
          this._context.deltaTime = deltaTime;
          this._context.indicativeWeight = indicativeWeight;
          return this._context;
        }

        /**
         * Forks specified `base` context so that the result context is same with the base
         * except that the result indicative weight is taken from base and multiplied by `subWeight`.
         * @param base The base context.
         * @param subWeight The sub weight.
         * @returns The result context.
         */;
        _proto8.forkSubWeight = function forkSubWeight(base, subWeight) {
          this._context.deltaTime = base.deltaTime;
          this._context.indicativeWeight = base.indicativeWeight * subWeight;
        };
        return AnimationGraphUpdateContextGenerator;
      }());
      _export("DeferredPoseStashAllocator", DeferredPoseStashAllocator = /*#__PURE__*/function () {
        function DeferredPoseStashAllocator() {
          this._allocator = null;
        }
        var _proto9 = DeferredPoseStashAllocator.prototype;
        /** @internal */
        _proto9._reset = function _reset(transformCount, auxiliaryCurveCount) {
          this._allocator = new PoseHeapAllocator(transformCount, auxiliaryCurveCount);
        };
        _proto9.allocatePose = function allocatePose() {
          assertIsTrue(this._allocator);
          var pose = this._allocator.allocatePose();
          return pose;
        };
        _proto9.destroyPose = function destroyPose(pose) {
          assertIsTrue(this._allocator);
          return this._allocator.destroyPose(pose);
        };
        _createClass(DeferredPoseStashAllocator, [{
          key: "allocatedPoseCount",
          get: function get() {
            assertIsTrue(this._allocator);
            return this._allocator.allocatedCount;
          }
        }]);
        return DeferredPoseStashAllocator;
      }());
    }
  };
});