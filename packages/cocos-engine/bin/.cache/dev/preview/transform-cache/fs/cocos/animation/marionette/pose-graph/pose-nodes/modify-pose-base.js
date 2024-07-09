System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/modify-pose-base.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/data/decorators/index.js", "../../../define.js", "../pose-node.js", "../decorator/input.js", "../decorator/node.js", "../../../core/pose.js", "../foundation/type-system.js", "../../../../core/index.js", "../../../core/transform.js"], function (_export, _context) {
  "use strict";

  var DEBUG, ccclass, serializable, CLASS_NAME_PREFIX_ANIM, PoseNode, input, poseGraphNodeHide, PoseTransformSpace, PoseGraphType, assertIsTrue, CachedArray, Pool, Transform, _dec, _dec2, _dec3, _class4, _class5, _descriptor, TransformModification, TransformModificationQueue, PoseTransformSpaceFlagTable, cacheTransform_spaceConversion, cacheParentTransform_spaceConversion, PoseNodeModifyPoseBase;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function applyTransformModificationQueue(context, pose, queue, spaceFlagTable) {
    var nMods = queue.length;
    if (nMods === 0) {
      return;
    }
    if (DEBUG) {
      var debugLastModTransformIndex = -1;
      for (var iMod = 0; iMod < nMods; ++iMod) {
        var transformIndex = queue.array[iMod].transformIndex;
        // Ensure the modifications are queued from parent to child.
        assertIsTrue(transformIndex > debugLastModTransformIndex);
        debugLastModTransformIndex = transformIndex;
      }
    }

    // In case of local space pose, no space conversion needed.
    if (pose._poseTransformSpace === PoseTransformSpace.LOCAL) {
      for (var _iMod = 0; _iMod < nMods; ++_iMod) {
        var _queue$array$_iMod = queue.array[_iMod],
          _transformIndex = _queue$array$_iMod.transformIndex,
          transform = _queue$array$_iMod.transform;
        pose.transforms.setTransform(_transformIndex, transform);
      }
      return;
    }
    assertIsTrue(pose._poseTransformSpace === PoseTransformSpace.COMPONENT);

    // In the following, the flag of a transform is defined as:
    // - False if it's in component space,
    // - True if it's in local space or is component space but need to be converted into local space.

    // At initial, all transforms are in component space.
    spaceFlagTable.clear();

    // From parent to child, collect all transforms needs to be converted into local space.
    var firstTransformToConvert = queue.array[0].transformIndex;
    var lastTransformToConvert = firstTransformToConvert;
    for (var _iMod2 = 0; _iMod2 < nMods; ++_iMod2) {
      var _transformIndex2 = queue.array[_iMod2].transformIndex;
      spaceFlagTable.set(_transformIndex2); // Set as "need to be converted".
      lastTransformToConvert = _transformIndex2;
    }
    for (var _transformIndex3 = firstTransformToConvert; _transformIndex3 < pose.transforms.length; ++_transformIndex3) {
      var parentTransformIndex = context.parentTable[_transformIndex3];
      if (parentTransformIndex < 0) {
        continue;
      }
      // If parent need be converted, then the child need to be converted to.
      if (spaceFlagTable.test(parentTransformIndex)) {
        spaceFlagTable.set(_transformIndex3); // Set as "need to be converted".
        lastTransformToConvert = _transformIndex3;
      }
    }

    // From child to parent, convert transforms in to local space.
    // Now the "need to be converted" flags are turned into "in local space".
    for (var _transformIndex4 = lastTransformToConvert; _transformIndex4 >= firstTransformToConvert; --_transformIndex4) {
      if (spaceFlagTable.test(_transformIndex4)) {
        var _parentTransformIndex = context.parentTable[_transformIndex4];
        if (_parentTransformIndex >= 0) {
          var _transform = pose.transforms.getTransform(_transformIndex4, cacheTransform_spaceConversion);
          var parentTransform = pose.transforms.getTransform(_parentTransformIndex, cacheParentTransform_spaceConversion);
          Transform.calculateRelative(_transform, _transform, parentTransform);
          pose.transforms.setTransform(_transformIndex4, _transform);
        }
      }
    }

    // From parent to child, apply modifications, these modified transforms are now in component space.
    for (var _iMod3 = 0; _iMod3 < nMods; ++_iMod3) {
      var _queue$array$_iMod2 = queue.array[_iMod3],
        _transformIndex5 = _queue$array$_iMod2.transformIndex,
        _transform2 = _queue$array$_iMod2.transform;
      pose.transforms.setTransform(_transformIndex5, _transform2);
      spaceFlagTable.unset(_transformIndex5); // Set as "in component space".
    }

    // Finally, from parent to child, recalculate component space back.
    for (var _transformIndex6 = firstTransformToConvert; _transformIndex6 <= lastTransformToConvert; ++_transformIndex6) {
      if (spaceFlagTable.test(_transformIndex6)) {
        var _parentTransformIndex2 = context.parentTable[_transformIndex6];
        assertIsTrue(_parentTransformIndex2 >= 0); // These changes should all be children of transforms in modification queue.
        var _transform3 = pose.transforms.getTransform(_transformIndex6, cacheTransform_spaceConversion);
        var _parentTransform = pose.transforms.getTransform(_parentTransformIndex2, cacheParentTransform_spaceConversion);
        Transform.multiply(_transform3, _parentTransform, _transform3);
        pose.transforms.setTransform(_transformIndex6, _transform3);
      }
    }
  }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_poseNodeJs) {
      PoseNode = _poseNodeJs.PoseNode;
    }, function (_decoratorInputJs) {
      input = _decoratorInputJs.input;
    }, function (_decoratorNodeJs) {
      poseGraphNodeHide = _decoratorNodeJs.poseGraphNodeHide;
    }, function (_corePoseJs) {
      PoseTransformSpace = _corePoseJs.PoseTransformSpace;
    }, function (_foundationTypeSystemJs) {
      PoseGraphType = _foundationTypeSystemJs.PoseGraphType;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      CachedArray = _coreIndexJs.CachedArray;
      Pool = _coreIndexJs.Pool;
    }, function (_coreTransformJs) {
      Transform = _coreTransformJs.Transform;
    }],
    execute: function () {
      TransformModification = function TransformModification() {
        this.transformIndex = -1;
        this.transform = new Transform();
      };
      TransformModificationQueue = /*#__PURE__*/function () {
        function TransformModificationQueue() {
          this._pool = new Pool(function () {
            return new TransformModification();
          }, 3);
          this._array = new CachedArray(3);
          this._debugLastTransformIndex = -1;
        }
        var _proto = TransformModificationQueue.prototype;
        _proto.push = function push(transformIndex, transform) {
          if (DEBUG) {
            assertIsTrue(transformIndex > this._debugLastTransformIndex, "Unexpected transform modification order");
            this._debugLastTransformIndex = transformIndex;
          }
          var mod = this._pool.alloc();
          mod.transformIndex = transformIndex;
          Transform.copy(mod.transform, transform);
          this._array.push(mod);
        };
        _proto.clear = function clear() {
          var length = this._array.length;
          for (var iMod = 0; iMod < length; ++iMod) {
            var mod = this._array.get(iMod);
            assertIsTrue(mod);
            this._pool.free(mod);
          }
          this._array.clear();
          if (DEBUG) {
            this._debugLastTransformIndex = -1;
          }
        };
        _createClass(TransformModificationQueue, [{
          key: "length",
          get: function get() {
            return this._array.length;
          }
        }, {
          key: "array",
          get: function get() {
            return this._array.array;
          }
        }]);
        return TransformModificationQueue;
      }();
      PoseTransformSpaceFlagTable = /*#__PURE__*/function () {
        function PoseTransformSpaceFlagTable(nTransforms) {
          this._transformFlags = [];
          this._transformFlags = new Array(nTransforms);
        }

        /**
         * Set all transforms' flags to false.
         */
        var _proto2 = PoseTransformSpaceFlagTable.prototype;
        _proto2.clear = function clear() {
          this._transformFlags.fill(false);
        }

        /**
         * Test if the transform's flag is set to true.
         * @param transformIndex Transform index.
         * @returns True if the transform's flag is set to true.
         */;
        _proto2.test = function test(transformIndex) {
          return this._transformFlags[transformIndex];
        }

        /**
         * Sets the transform's flag to true.
         * @param transformIndex Transform index.
         */;
        _proto2.set = function set(transformIndex) {
          this._transformFlags[transformIndex] = true;
        }

        /**
         * Sets the transform's flag to false.
         * @param transformIndex Transform index.
         */;
        _proto2.unset = function unset(transformIndex) {
          this._transformFlags[transformIndex] = false;
        };
        return PoseTransformSpaceFlagTable;
      }();
      cacheTransform_spaceConversion = new Transform();
      cacheParentTransform_spaceConversion = new Transform();
      _export("PoseNodeModifyPoseBase", PoseNodeModifyPoseBase = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodeModifyPoseBase"), _dec2 = poseGraphNodeHide(), _dec3 = input({
        type: PoseGraphType.POSE
      }), _dec(_class4 = _dec2(_class4 = (_class5 = /*#__PURE__*/function (_PoseNode) {
        _inheritsLoose(PoseNodeModifyPoseBase, _PoseNode);
        function PoseNodeModifyPoseBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PoseNode.call.apply(_PoseNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pose", _descriptor, _assertThisInitialized(_this));
          _this._modificationQueue = new TransformModificationQueue();
          _this._spaceFlagTable = new PoseTransformSpaceFlagTable(0);
          return _this;
        }
        var _proto3 = PoseNodeModifyPoseBase.prototype;
        _proto3.settle = function settle(context) {
          var _this$pose;
          (_this$pose = this.pose) === null || _this$pose === void 0 ? void 0 : _this$pose.settle(context);
          this._spaceFlagTable = new PoseTransformSpaceFlagTable(context.transformCount);
        };
        _proto3.reenter = function reenter() {
          var _this$pose2;
          (_this$pose2 = this.pose) === null || _this$pose2 === void 0 ? void 0 : _this$pose2.reenter();
        };
        _proto3.bind = function bind(context) {
          var _this$pose3;
          (_this$pose3 = this.pose) === null || _this$pose3 === void 0 ? void 0 : _this$pose3.bind(context);
        };
        _proto3.doUpdate = function doUpdate(context) {
          var _this$pose4;
          (_this$pose4 = this.pose) === null || _this$pose4 === void 0 ? void 0 : _this$pose4.update(context);
        };
        _proto3.doEvaluate = function doEvaluate(context) {
          var _this$pose$evaluate, _this$pose5;
          var poseTransformSpaceRequirement = this.getPoseTransformSpaceRequirement();
          var inputPose = (_this$pose$evaluate = (_this$pose5 = this.pose) === null || _this$pose5 === void 0 ? void 0 : _this$pose5.evaluate(context, poseTransformSpaceRequirement)) !== null && _this$pose$evaluate !== void 0 ? _this$pose$evaluate : PoseNode.evaluateDefaultPose(context, poseTransformSpaceRequirement);
          var modificationQueue = this._modificationQueue;
          assertIsTrue(modificationQueue.length === 0);
          this.modifyPose(context, inputPose, modificationQueue);
          applyTransformModificationQueue(context, inputPose, modificationQueue, this._spaceFlagTable);
          modificationQueue.clear();
          return inputPose;
        };
        return PoseNodeModifyPoseBase;
      }(PoseNode), (_descriptor = _applyDecoratedDescriptor(_class5.prototype, "pose", [serializable, _dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4) || _class4));
    }
  };
});