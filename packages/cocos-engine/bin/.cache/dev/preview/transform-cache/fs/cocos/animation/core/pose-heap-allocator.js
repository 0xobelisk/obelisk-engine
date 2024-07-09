System.register("q-bundled:///fs/cocos/animation/core/pose-heap-allocator.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/utils/asserts.js", "./pose.js", "./transform-array.js"], function (_export, _context) {
  "use strict";

  var TEST, assertIsTrue, Pose, TransformArray, MAX_POSE_PER_PAGE, allocationInfoTag, POSE_ALLOCATOR_DEBUG_FULL, PoseHeapAllocator, AllocationInfo, POSE_INDEX_MASK, POSE_INDEX_BITS, PosePage;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function isPagedPose(pose) {
    return allocationInfoTag in pose;
  }
  function findRightmostSetBit(bits) {
    // Math.log(2) === -Infinity
    return bits === 0 ? Infinity : Math.log2(bits & -bits);
  }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreDataUtilsAssertsJs) {
      assertIsTrue = _coreDataUtilsAssertsJs.assertIsTrue;
    }, function (_poseJs) {
      Pose = _poseJs.Pose;
    }, function (_transformArrayJs) {
      TransformArray = _transformArrayJs.TransformArray;
    }],
    execute: function () {
      MAX_POSE_PER_PAGE = 8;
      allocationInfoTag = Symbol('PoseHeapAllocator');
      POSE_ALLOCATOR_DEBUG_FULL = TEST;
      _export("PoseHeapAllocator", PoseHeapAllocator = /*#__PURE__*/function () {
        function PoseHeapAllocator(transformCount, metaValueCount) {
          this._transformCount = 0;
          this._metaValueCount = 0;
          this._pages = [];
          this._allocatedCount = 0;
          /**
           * Index of the page that:
           * - All former pages are busy.
           * - This page and the following pages're possible having free location to allocate.
           */
          this._foremostPossibleFreePage = 0;
          this._transformCount = transformCount;
          this._metaValueCount = metaValueCount;
        }
        var _proto = PoseHeapAllocator.prototype;
        _proto.allocatePose = function allocatePose() {
          ++this._allocatedCount;
          var pages = this._pages;
          var nPages = pages.length;

          // Debug check our promise on `this._foremostPossibleFreePage`.
          if (POSE_ALLOCATOR_DEBUG_FULL) {
            for (var iPage = 0; iPage < this._foremostPossibleFreePage; ++iPage) {
              var page = pages[iPage];
              assertIsTrue(page.freeCount === 0);
            }
          }
          for (var _iPage = this._foremostPossibleFreePage; _iPage < nPages; ++_iPage) {
            var _page = pages[_iPage];
            var _pose = _page.tryAllocate();
            if (_pose) {
              _pose[allocationInfoTag].pageIndex = _iPage;
              if (_page.freeCount === 0) {
                // Only step one, even the next page is not free.
                ++this._foremostPossibleFreePage;
              }
              return _pose;
            }
          }
          var pose = this._allocatePoseInNewPage();
          // Update the flag, no matter if its capacity is 1.
          this._foremostPossibleFreePage = pose[allocationInfoTag].pageIndex;
          return pose;
        };
        _proto.destroyPose = function destroyPose(pose) {
          assertIsTrue(isPagedPose(pose));
          var pages = this._pages;
          var nPages = pages.length;
          var pageIndex = pose[allocationInfoTag].pageIndex;
          assertIsTrue(pageIndex >= 0 && pageIndex < nPages);
          var page = pages[pageIndex];
          page.deallocate(pose);
          --this._allocatedCount;

          // If the destruction performed on former page,
          // update the flag so that next allocation find from this.
          if (pageIndex < this._foremostPossibleFreePage) {
            assertIsTrue(page.freeCount > 0);
            this._foremostPossibleFreePage = pageIndex;
          }
        };
        _proto._allocatePoseInNewPage = function _allocatePoseInNewPage() {
          var page = new PosePage(this._transformCount, this._metaValueCount, 4);
          var pageIndex = this._pages.length;
          this._pages.push(page);
          var pose = page.tryAllocate();
          assertIsTrue(pose); // Shall not fail
          pose[allocationInfoTag].pageIndex = pageIndex;
          return pose;
        };
        _createClass(PoseHeapAllocator, [{
          key: "allocatedCount",
          get: function get() {
            return this._allocatedCount;
          }
        }]);
        return PoseHeapAllocator;
      }());
      AllocationInfo = /*#__PURE__*/function () {
        function AllocationInfo() {
          /**
           * ((page index) << POSE_INDEX_BITS) + (pose index into page)
           */
          this._id = -1;
        }
        _createClass(AllocationInfo, [{
          key: "pageIndex",
          get: function get() {
            return this._id >> POSE_INDEX_BITS;
          },
          set: function set(value) {
            this._id &= POSE_INDEX_MASK;
            this._id |= value << POSE_INDEX_BITS;
          }
        }, {
          key: "poseIndex",
          get: function get() {
            return this._id & POSE_INDEX_MASK;
          },
          set: function set(value) {
            this._id &= ~POSE_INDEX_MASK;
            this._id |= value;
          }
        }]);
        return AllocationInfo;
      }();
      POSE_INDEX_MASK = 7;
      POSE_INDEX_BITS = 3;
      assertIsTrue(POSE_INDEX_MASK + 1 >= MAX_POSE_PER_PAGE);
      PosePage = /*#__PURE__*/function () {
        function PosePage(_transformCount, _metaValueCount, _capacity) {
          this._buffer = void 0;
          this._idleFlags = 0xF;
          this._poses = void 0;
          this._freeCount = 0;
          this._transformCount = _transformCount;
          this._metaValueCount = _metaValueCount;
          this._capacity = _capacity;
          var byteLength = (TransformArray.BYTES_PER_ELEMENT * _transformCount + Float64Array.BYTES_PER_ELEMENT * _metaValueCount) * _capacity;
          this._buffer = new ArrayBuffer(byteLength);
          this._poses = new Array(_capacity).fill(null);
          this._freeCount = _capacity;
        }
        var _proto2 = PosePage.prototype;
        _proto2.tryAllocate = function tryAllocate() {
          var _poses$idlePoseIndex;
          var poses = this._poses,
            idleFlags = this._idleFlags,
            capacity = this._capacity;
          var idlePoseIndex = findRightmostSetBit(idleFlags);
          if (idlePoseIndex >= capacity) {
            return null;
          }
          assertIsTrue(idlePoseIndex >= 0 && idlePoseIndex < poses.length);
          var pose = (_poses$idlePoseIndex = poses[idlePoseIndex]) !== null && _poses$idlePoseIndex !== void 0 ? _poses$idlePoseIndex : poses[idlePoseIndex] = this._createPose(idlePoseIndex);
          pose[allocationInfoTag].poseIndex = idlePoseIndex;
          this._idleFlags &= ~(1 << idlePoseIndex);
          assertIsTrue(this._freeCount > 0);
          --this._freeCount;
          return pose;
        };
        _proto2.deallocate = function deallocate(pose) {
          var poses = this._poses;
          var poseIndex = pose[allocationInfoTag].poseIndex;
          assertIsTrue(poseIndex >= 0 && poseIndex < poses.length);
          assertIsTrue(poses[poseIndex] === pose);
          // Set as idle
          this._idleFlags |= 1 << poseIndex;
          assertIsTrue(this._freeCount < this._capacity);
          ++this._freeCount;
        };
        _proto2._createPose = function _createPose(index) {
          var transformsByteLength = TransformArray.BYTES_PER_ELEMENT * this._transformCount;
          var baseOffset = (transformsByteLength + Float64Array.BYTES_PER_ELEMENT * this._metaValueCount) * index;
          var transforms = new TransformArray(this._buffer, baseOffset, this._transformCount);
          var metaValues = new Float64Array(this._buffer, baseOffset + transformsByteLength, this._metaValueCount);
          var pose = Pose._create(transforms, metaValues);
          pose[allocationInfoTag] = new AllocationInfo();
          return pose;
        };
        _createClass(PosePage, [{
          key: "capacity",
          get: function get() {
            return this._capacity;
          }
        }, {
          key: "freeCount",
          get: function get() {
            return this._freeCount;
          }
        }]);
        return PosePage;
      }();
    }
  };
});