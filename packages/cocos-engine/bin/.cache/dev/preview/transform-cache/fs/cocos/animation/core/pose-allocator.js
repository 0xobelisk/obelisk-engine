System.register("q-bundled:///fs/cocos/animation/core/pose-allocator.js", ["../../core/data/utils/asserts.js", "./pose.js", "./transform-array.js", "./shared-stack-based-allocator.js"], function (_export, _context) {
  "use strict";

  var assertIsTrue, Pose, TransformArray, SharedStackBasedAllocatorManager, PoseStackAllocator, PAGE_SIZE, globalPosePageMemoryAllocatorManager;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function calculateRequiredBytes(transformCount, auxiliaryCurveCount, capacity) {
    return (TransformArray.BYTES_PER_ELEMENT * transformCount + Float64Array.BYTES_PER_ELEMENT * auxiliaryCurveCount) * capacity;
  }
  return {
    setters: [function (_coreDataUtilsAssertsJs) {
      assertIsTrue = _coreDataUtilsAssertsJs.assertIsTrue;
    }, function (_poseJs) {
      Pose = _poseJs.Pose;
    }, function (_transformArrayJs) {
      TransformArray = _transformArrayJs.TransformArray;
    }, function (_sharedStackBasedAllocatorJs) {
      SharedStackBasedAllocatorManager = _sharedStackBasedAllocatorJs.SharedStackBasedAllocatorManager;
    }],
    execute: function () {
      _export("PoseStackAllocator", PoseStackAllocator = /*#__PURE__*/function () {
        function PoseStackAllocator(transformCount, auxiliaryCurveCount) {
          this._poses = [];
          this._allocatedCount = 0;
          this._memoryAllocator = void 0;
          this._transformCount = transformCount;
          this._auxiliaryCurveCount = auxiliaryCurveCount;
          var poseBytes = calculateRequiredBytes(transformCount, auxiliaryCurveCount, 1);
          this._memoryAllocator = globalPosePageMemoryAllocatorManager.createAllocator(poseBytes);
        }
        var _proto = PoseStackAllocator.prototype;
        _proto.destroy = function destroy() {
          assertIsTrue(this._allocatedCount === 0, "Can not destroy the allocator since it's not empty.");
          for (var iPose = 0; iPose < this._poses.length; ++iPose) {
            this._memoryAllocator.pop();
          }
          this._poses.length = 0;
          return this._memoryAllocator.destroy();
        };
        _proto.push = function push() {
          // Lock the allocator when pushing first pose.
          if (this._allocatedCount === 0) {
            this._memoryAllocator.debugLock();
          }
          if (this._allocatedCount === this._poses.length) {
            this._allocateNewPose();
            assertIsTrue(this._allocatedCount < this._poses.length);
          }
          var pose = this._poses[this._allocatedCount];
          ++this._allocatedCount;
          return pose;
        };
        _proto.pop = function pop() {
          assertIsTrue(this._allocatedCount > 0, "PoseStackAllocator: push/pop does not match.");
          --this._allocatedCount;

          // Unlock the allocator while popping last pose.
          if (this._allocatedCount === 0) {
            this._memoryAllocator.debugUnlock();
          }

          // Note: we don't actually free the pose -- only destroy() will free the pose.
          // This does not cause big problem since all pose allocators share the same stack memory.
        };
        _proto._allocateNewPose = function _allocateNewPose() {
          var slice = this._memoryAllocator.push();
          var transformsByteLength = TransformArray.BYTES_PER_ELEMENT * this._transformCount;
          var baseOffset = slice.byteOffset;
          var transforms = new TransformArray(slice.buffer, baseOffset, this._transformCount);
          var auxiliaryCurves = new Float64Array(slice.buffer, baseOffset + transformsByteLength, this._auxiliaryCurveCount);
          var pose = Pose._create(transforms, auxiliaryCurves);
          this._poses.push(pose);
        };
        _createClass(PoseStackAllocator, [{
          key: "allocatedCount",
          get: function get() {
            return this._allocatedCount;
          }
        }, {
          key: "top",
          get: function get() {
            assertIsTrue(this._allocatedCount > 0);
            return this._poses[this._allocatedCount - 1];
          }
        }]);
        return PoseStackAllocator;
      }());
      PAGE_SIZE = calculateRequiredBytes(128, 10, 4);
      globalPosePageMemoryAllocatorManager = new SharedStackBasedAllocatorManager([PAGE_SIZE]);
    }
  };
});