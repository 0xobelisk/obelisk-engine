System.register("q-bundled:///fs/cocos/animation/core/shared-stack-based-allocator.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var DEBUG, assertIsTrue, binarySearchEpsilon, allocatorPageCountTag, onStackPurgedTag, SharedMemoryPage, PagedStack, SharedMemorySlice, SharedStackBasedAllocator, SharedStackBasedAllocatorManager;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      binarySearchEpsilon = _coreIndexJs.binarySearchEpsilon;
    }],
    execute: function () {
      allocatorPageCountTag = Symbol(DEBUG ? '[[The count of pages used by this allocator.]]' : '');
      onStackPurgedTag = Symbol(DEBUG ? "[[Notify that theres is no allocator on the stack anymore.]]" : '');
      SharedMemoryPage = function SharedMemoryPage(byteLength) {
        this.buffer = void 0;
        this.useCount = 0;
        this.buffer = new ArrayBuffer(byteLength);
      };
      PagedStack = /*#__PURE__*/function () {
        function PagedStack(_manager, _pageSize) {
          this._locking = false;
          this._pages = [];
          this._allocatorCount = 0;
          this._manager = _manager;
          this._pageSize = _pageSize;
        }
        var _proto = PagedStack.prototype;
        _proto.debugLock = function debugLock() {
          assertIsTrue(!this._locking, "The memory is locking.");
          this._locking = true;
        };
        _proto.debugUnlock = function debugUnlock() {
          assertIsTrue(this._locking, "Wrong execution logic: the memory is not locking.");
          this._locking = false;
        };
        _proto.getPageMemory = function getPageMemory(index) {
          assertIsTrue(index >= 0 && index < this._pages.length, "Page index out of range");
          return this._pages[index].buffer;
        };
        _proto.pushPage = function pushPage(allocator) {
          var oldAllocatorPageCount = allocator[allocatorPageCountTag];
          assertIsTrue(oldAllocatorPageCount <= this._pages.length);
          if (oldAllocatorPageCount === this._pages.length) {
            this._pushNewPage();
          }
          assertIsTrue(oldAllocatorPageCount < this._pages.length);
          var page = this._pages[oldAllocatorPageCount];
          ++page.useCount;
          ++allocator[allocatorPageCountTag];
          return page;
        };
        _proto.popPage = function popPage(allocator) {
          var allocatorPageCount = allocator[allocatorPageCountTag];
          assertIsTrue(allocatorPageCount > 0);
          var allocatorLastPageIndex = allocatorPageCount - 1;
          var lastPage = this._pages[allocatorLastPageIndex];
          assertIsTrue(lastPage.useCount > 0);
          --lastPage.useCount;
          --allocator[allocatorPageCountTag];

          // If the page has no users, remove it.
          if (lastPage.useCount === 0) {
            // "The page has no users" also means that it's the last page in our list.
            assertIsTrue(allocatorLastPageIndex === this._pages.length - 1);
            this._pages.pop();
          }
        };
        _proto.createAllocator = function createAllocator(sliceSize) {
          var allocator = new SharedStackBasedAllocator(this, sliceSize);
          ++this._allocatorCount;
          return allocator;
        };
        _proto.destroyAllocator = function destroyAllocator(allocator) {
          // Decrease use count of all pages used by the allocator.
          var allocatorPageCount = allocator[allocatorPageCountTag];
          for (var iPage = 0; iPage < allocatorPageCount; ++iPage) {
            var page = this._pages[iPage];
            assertIsTrue(page.useCount > 0);
            --page.useCount;
          }
          assertIsTrue(this._allocatorCount > 0);
          --this._allocatorCount;

          // If we no longer have allocator, notify manager for possible further cleanup.
          if (this._allocatorCount === 0) {
            this._manager[onStackPurgedTag](this);
          }
        };
        _proto._pushNewPage = function _pushNewPage() {
          var newPage = new SharedMemoryPage(this._pageSize);
          this._pages.push(newPage);
        };
        _createClass(PagedStack, [{
          key: "pageSize",
          get: function get() {
            return this._pageSize;
          }
        }, {
          key: "debugLocking",
          get: function get() {
            return this._locking;
          }
        }, {
          key: "allocatorCount",
          get: function get() {
            return this._allocatorCount;
          }
        }]);
        return PagedStack;
      }();
      SharedMemorySlice = function SharedMemorySlice(buffer, byteOffset) {
        this.buffer = buffer;
        this.byteOffset = byteOffset;
      };
      /**
       * Dev note:
       * - `push()` do create new object(SharedMemorySlice) and do array push-back, no caching.
       * - `pop()` do array pop-back.
       */
      SharedStackBasedAllocator = /*#__PURE__*/function () {
        function SharedStackBasedAllocator(_resource, _sliceSize) {
          this[allocatorPageCountTag] = 0;
          this._slicesPerPage = 0;
          this._slices = [];
          this._resource = _resource;
          this._sliceSize = _sliceSize;
          var slicesPerPage = Math.floor(this._resource.pageSize / _sliceSize);
          assertIsTrue(slicesPerPage > 0);
          this._slicesPerPage = slicesPerPage;
        }
        var _proto2 = SharedStackBasedAllocator.prototype;
        _proto2.destroy = function destroy() {
          assertIsTrue(this._slices.length === 0, "Can not destroy the allocator since it's not empty.");
          assertIsTrue(!this._resource.debugLocking, "Can not destroy the allocator since it's locking.");
          this._resource.destroyAllocator(this);
        };
        _proto2.debugLock = function debugLock() {
          this._resource.debugLock();
        };
        _proto2.debugUnlock = function debugUnlock() {
          this._resource.debugUnlock();
        };
        _proto2.push = function push() {
          var sliceLength = this._sliceSize,
            slices = this._slices,
            slicesPerPage = this._slicesPerPage;
          var desiredSliceIndex = slices.length;
          var newSliceIndexInPage = 0;
          var newSlicePageIndex = 0;

          // Specially handle 0 slice length.
          if (sliceLength === 0) {
            // If the slice length is 0, we ensure this allocator has and has only one page.
            // All slices use this page then.
            if (this[allocatorPageCountTag] === 0) {
              this._resource.pushPage(this);
            }
            assertIsTrue(this[allocatorPageCountTag] === 1);
          } else {
            var capacity = slicesPerPage * this[allocatorPageCountTag];
            assertIsTrue(desiredSliceIndex <= capacity);
            if (desiredSliceIndex === capacity) {
              // We need more pages.
              this._resource.pushPage(this);
              assertIsTrue(desiredSliceIndex < slicesPerPage * this[allocatorPageCountTag]);
            }
            newSliceIndexInPage = desiredSliceIndex % slicesPerPage;
            newSlicePageIndex = (desiredSliceIndex - newSliceIndexInPage) / slicesPerPage;
            assertIsTrue(this[allocatorPageCountTag] * slicesPerPage >= desiredSliceIndex);
          }
          var pageMemory = this._resource.getPageMemory(newSlicePageIndex);
          var newSlice = new SharedMemorySlice(pageMemory, sliceLength * newSliceIndexInPage);
          this._slices.push(newSlice);
          return newSlice;
        };
        _proto2.pop = function pop() {
          var slices = this._slices,
            slicesPerPage = this._slicesPerPage;
          var allocatedCount = slices.length;
          assertIsTrue(allocatedCount > 0);
          var removingSliceIndex = allocatedCount - 1;
          if (this._sliceSize === 0) {
            // If the slice length is 0, we should pop page if we're popping the last slice,
            // it's the only page in this allocator.
            assertIsTrue(this[allocatorPageCountTag] === 1);
            if (removingSliceIndex === 0) {
              this._resource.popPage(this);
            }
          } else {
            var removingSliceIndexInPage = removingSliceIndex % slicesPerPage;
            if (removingSliceIndexInPage === 0) {
              // Now that the last(beginning) slice of last page is pop-ed,
              // we pop the last page.
              this._resource.popPage(this);
            }
          }
          this._slices.pop();
        };
        _createClass(SharedStackBasedAllocator, [{
          key: "isEmpty",
          get: function get() {
            return this._slices.length === 0;
          }
        }]);
        return SharedStackBasedAllocator;
      }();
      _export("SharedStackBasedAllocatorManager", SharedStackBasedAllocatorManager = /*#__PURE__*/function () {
        function SharedStackBasedAllocatorManager(_thresholds) {
          this._stacks = new Map();
          this._thresholds = _thresholds;
          assertIsTrue(_thresholds.every(function (v, i, arr) {
            return i === 0 || v > arr[i - 1];
          }));
        }
        var _proto3 = SharedStackBasedAllocatorManager.prototype;
        _proto3.createAllocator = function createAllocator(pageSize) {
          var allocationPageSize = pageSize;

          // Select stack page size according to allocation page size and threshold.
          var stackPageSize = this._selectStackPageSize(allocationPageSize);

          // Get or create stack.
          var stack = this._stacks.get(stackPageSize);
          if (!stack) {
            stack = new PagedStack(this, stackPageSize);
            this._stacks.set(stackPageSize, stack);
          }

          // Create the allocator.
          return stack.createAllocator(allocationPageSize);
        };
        _proto3[onStackPurgedTag] = function (stack) {
          var stackFound = false;
          for (var _iterator = _createForOfIteratorHelperLoose(this._stacks), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              k = _step$value[0],
              v = _step$value[1];
            if (v === stack) {
              this._stacks["delete"](k);
              stackFound = true;
              break;
            }
          }
          if (!stackFound) {
            assertIsTrue(false, "Given allocator is not of mime.");
          }
        };
        _proto3._selectStackPageSize = function _selectStackPageSize(allocationPageSize) {
          var thresholdIndex = binarySearchEpsilon(this._thresholds, allocationPageSize);
          var stackPageSize = allocationPageSize;
          if (thresholdIndex >= 0) {
            stackPageSize = this._thresholds[thresholdIndex];
          } else {
            thresholdIndex = ~thresholdIndex;
            if (thresholdIndex === this._thresholds.length) {
              // If stack beyonds the max threshold, no shared.
            } else {
              assertIsTrue(thresholdIndex >= 0 && thresholdIndex < this._thresholds.length);
              stackPageSize = this._thresholds[thresholdIndex];
            }
          }
          return stackPageSize;
        };
        _createClass(SharedStackBasedAllocatorManager, [{
          key: "isEmpty",
          get: function get() {
            return this._stacks.size === 0;
          }
        }]);
        return SharedStackBasedAllocatorManager;
      }());
    }
  };
});