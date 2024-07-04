System.register("q-bundled:///fs/cocos/render-scene/core/memory-pools.js", ["../../../../virtual/internal%253Aconstants.js", "./native-pools.js"], function (_export, _context) {
  "use strict";

  var DEBUG, NativeBufferPool, _Render2dViewDataType, _Render2dViewDataMemb, _NodeViewDataType, _NodeViewDataMembers, _PassViewDataType, _PassViewDataMembers, _AABBViewDataType, _AABBViewDataMembers, contains, BufferDataType, BufferPool, PoolType, NULL_HANDLE, Render2dView, Render2dViewDataType, Render2dViewDataMembers, Render2dPool, NodeView, NodeViewDataType, NodeViewDataMembers, NodePool, PassView, PassViewDataType, PassViewDataMembers, PassPool, AABBView, AABBViewDataType, AABBViewDataMembers, AABBPool;
  _export({
    PoolType: void 0,
    Render2dView: void 0,
    NodeView: void 0,
    PassView: void 0,
    AABBView: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_nativePoolsJs) {
      NativeBufferPool = _nativePoolsJs.NativeBufferPool;
    }],
    execute: function () {
      contains = function contains(a, t) {
        for (var i = 0; i < a.length; ++i) {
          if (a[i] === t) return true;
        }
        return false;
      }; // a little hacky, but works (different specializations should not be assignable to each other)
      (function (BufferDataType) {
        BufferDataType[BufferDataType["UINT32"] = 0] = "UINT32";
        BufferDataType[BufferDataType["FLOAT32"] = 1] = "FLOAT32";
        BufferDataType[BufferDataType["NEVER"] = 2] = "NEVER";
      })(BufferDataType || (BufferDataType = {}));
      BufferPool = /*#__PURE__*/function () {
        function BufferPool(poolType, dataType, dataMembers, enumType, entryBits) {
          if (entryBits === void 0) {
            entryBits = 8;
          }
          // naming convension:
          // this._bufferViews[chunk][entry][element]
          this._dataType = void 0;
          this._dataMembers = void 0;
          this._elementCount = void 0;
          this._entryBits = void 0;
          this._stride = void 0;
          this._entriesPerChunk = void 0;
          this._entryMask = void 0;
          this._chunkMask = void 0;
          this._poolFlag = void 0;
          this._arrayBuffers = [];
          this._freeLists = [];
          this._uint32BufferViews = [];
          this._float32BufferViews = [];
          this._hasUint32 = false;
          this._hasFloat32 = false;
          this._nativePool = void 0;
          this._elementCount = enumType.COUNT;
          this._entryBits = entryBits;
          this._dataType = dataType;
          this._dataMembers = dataMembers;
          var bytesPerElement = 4;
          this._stride = bytesPerElement * this._elementCount;
          this._entriesPerChunk = 1 << entryBits;
          this._entryMask = this._entriesPerChunk - 1;
          this._poolFlag = 1 << 30;
          this._chunkMask = ~(this._entryMask | this._poolFlag);
          this._nativePool = new NativeBufferPool(poolType, entryBits, this._stride);
          var type = BufferDataType.NEVER;
          var hasFloat32 = false;
          var hasUint32 = false;
          for (var e in dataType) {
            hasFloat32 = this._hasFloat32;
            hasUint32 = this._hasUint32;
            if (hasUint32 && hasFloat32) {
              break;
            }
            type = dataType[e];
            if (!hasFloat32 && type === BufferDataType.FLOAT32) {
              this._hasFloat32 = true;
            } else if (!hasUint32 && type === BufferDataType.UINT32) {
              this._hasUint32 = true;
            }
          }
        }
        var _proto = BufferPool.prototype;
        _proto.alloc = function alloc() {
          var i = 0;
          for (; i < this._freeLists.length; i++) {
            var list = this._freeLists[i];
            if (list.length) {
              var j = list[list.length - 1];
              list.length--;
              return (i << this._entryBits) + j + this._poolFlag;
            }
          }
          // add a new chunk
          var buffer = this._nativePool.allocateNewChunk();
          var float32BufferViews = [];
          var uint32BufferViews = [];
          var freeList = [];
          var hasFloat32 = this._hasFloat32;
          var hasUint32 = this._hasUint32;
          for (var _j = 0; _j < this._entriesPerChunk; _j++) {
            if (hasFloat32) {
              float32BufferViews.push(new Float32Array(buffer, this._stride * _j, this._elementCount));
            }
            if (hasUint32) {
              uint32BufferViews.push(new Uint32Array(buffer, this._stride * _j, this._elementCount));
            }
            if (_j) {
              freeList.push(_j);
            }
          }
          if (hasUint32) {
            this._uint32BufferViews.push(uint32BufferViews);
          }
          if (hasFloat32) {
            this._float32BufferViews.push(float32BufferViews);
          }
          this._freeLists.push(freeList);
          this._arrayBuffers.push(buffer);
          var handle = (i << this._entryBits) + this._poolFlag;
          return handle; // guarantees the handle is always not zero
        };
        _proto.getBuffer = function getBuffer(handle) {
          var chunk = (this._chunkMask & handle) >> this._entryBits;
          var entry = this._entryMask & handle;
          var bufferViews = this._hasFloat32 ? this._float32BufferViews : this._uint32BufferViews;
          if (DEBUG && (!handle || chunk < 0 || chunk >= bufferViews.length || entry < 0 || entry >= this._entriesPerChunk || contains(this._freeLists[chunk], entry))) {
            console.warn('invalid buffer pool handle');
            return [];
          }
          return bufferViews[chunk][entry];
        };
        _proto.getTypedArray = function getTypedArray(handle, element) {
          var chunk = (this._chunkMask & handle) >> this._entryBits;
          var entry = this._entryMask & handle;
          var bufferViews = this._dataType[element] === BufferDataType.UINT32 ? this._uint32BufferViews : this._float32BufferViews;
          if (DEBUG && (!handle || chunk < 0 || chunk >= bufferViews.length || entry < 0 || entry >= this._entriesPerChunk || contains(this._freeLists[chunk], entry))) {
            console.warn('invalid buffer pool handle');
            return [];
          }
          var index = element;
          var view = bufferViews[chunk][entry];
          var count = this._dataMembers[element];
          return view.subarray(index, index + count);
        };
        _proto.free = function free(handle) {
          var chunk = (this._chunkMask & handle) >> this._entryBits;
          var entry = this._entryMask & handle;
          if (DEBUG && (!handle || chunk < 0 || chunk >= this._freeLists.length || entry < 0 || entry >= this._entriesPerChunk || contains(this._freeLists[chunk], entry))) {
            console.warn('invalid buffer pool handle');
            return;
          }
          var bufferViews = this._hasUint32 ? this._uint32BufferViews : this._float32BufferViews;
          bufferViews[chunk][entry].fill(0);
          this._freeLists[chunk].push(entry);
        };
        return BufferPool;
      }();
      (function (PoolType) {
        PoolType[PoolType["NODE"] = 0] = "NODE";
        PoolType[PoolType["PASS"] = 1] = "PASS";
        PoolType[PoolType["AABB"] = 2] = "AABB";
        PoolType[PoolType["RENDER2D"] = 3] = "RENDER2D";
      })(PoolType || _export("PoolType", PoolType = {}));
      _export("NULL_HANDLE", NULL_HANDLE = 0);
      (function (Render2dView) {
        Render2dView[Render2dView["POSITION"] = 0] = "POSITION";
        Render2dView[Render2dView["UV"] = 3] = "UV";
        Render2dView[Render2dView["COLOR"] = 5] = "COLOR";
        Render2dView[Render2dView["COUNT"] = 9] = "COUNT";
      })(Render2dView || _export("Render2dView", Render2dView = {}));
      Render2dViewDataType = (_Render2dViewDataType = {}, _Render2dViewDataType[Render2dView.POSITION] = BufferDataType.FLOAT32, _Render2dViewDataType[Render2dView.UV] = BufferDataType.FLOAT32, _Render2dViewDataType[Render2dView.COLOR] = BufferDataType.UINT32, _Render2dViewDataType[Render2dView.COUNT] = BufferDataType.NEVER, _Render2dViewDataType);
      Render2dViewDataMembers = (_Render2dViewDataMemb = {}, _Render2dViewDataMemb[Render2dView.POSITION] = Render2dView.UV - Render2dView.POSITION, _Render2dViewDataMemb[Render2dView.UV] = Render2dView.COLOR - Render2dView.UV, _Render2dViewDataMemb[Render2dView.COLOR] = Render2dView.COUNT - Render2dView.COLOR, _Render2dViewDataMemb[Render2dView.COUNT] = 1, _Render2dViewDataMemb);
      _export("Render2dPool", Render2dPool = new BufferPool(PoolType.RENDER2D, Render2dViewDataType, Render2dViewDataMembers, Render2dView));
      (function (NodeView) {
        NodeView[NodeView["DIRTY_FLAG"] = 0] = "DIRTY_FLAG";
        NodeView[NodeView["LAYER"] = 1] = "LAYER";
        NodeView[NodeView["WORLD_SCALE"] = 2] = "WORLD_SCALE";
        NodeView[NodeView["WORLD_POSITION"] = 5] = "WORLD_POSITION";
        NodeView[NodeView["WORLD_ROTATION"] = 8] = "WORLD_ROTATION";
        NodeView[NodeView["WORLD_MATRIX"] = 12] = "WORLD_MATRIX";
        NodeView[NodeView["LOCAL_SCALE"] = 28] = "LOCAL_SCALE";
        NodeView[NodeView["LOCAL_POSITION"] = 31] = "LOCAL_POSITION";
        NodeView[NodeView["LOCAL_ROTATION"] = 34] = "LOCAL_ROTATION";
        NodeView[NodeView["COUNT"] = 38] = "COUNT";
      })(NodeView || _export("NodeView", NodeView = {}));
      NodeViewDataType = (_NodeViewDataType = {}, _NodeViewDataType[NodeView.DIRTY_FLAG] = BufferDataType.UINT32, _NodeViewDataType[NodeView.LAYER] = BufferDataType.UINT32, _NodeViewDataType[NodeView.WORLD_SCALE] = BufferDataType.FLOAT32, _NodeViewDataType[NodeView.WORLD_POSITION] = BufferDataType.FLOAT32, _NodeViewDataType[NodeView.WORLD_ROTATION] = BufferDataType.FLOAT32, _NodeViewDataType[NodeView.WORLD_MATRIX] = BufferDataType.FLOAT32, _NodeViewDataType[NodeView.LOCAL_SCALE] = BufferDataType.FLOAT32, _NodeViewDataType[NodeView.LOCAL_POSITION] = BufferDataType.FLOAT32, _NodeViewDataType[NodeView.LOCAL_ROTATION] = BufferDataType.FLOAT32, _NodeViewDataType[NodeView.COUNT] = BufferDataType.NEVER, _NodeViewDataType);
      NodeViewDataMembers = (_NodeViewDataMembers = {}, _NodeViewDataMembers[NodeView.DIRTY_FLAG] = NodeView.LAYER - NodeView.DIRTY_FLAG, _NodeViewDataMembers[NodeView.LAYER] = NodeView.WORLD_SCALE - NodeView.LAYER, _NodeViewDataMembers[NodeView.WORLD_SCALE] = NodeView.WORLD_POSITION - NodeView.WORLD_SCALE, _NodeViewDataMembers[NodeView.WORLD_POSITION] = NodeView.WORLD_ROTATION - NodeView.WORLD_POSITION, _NodeViewDataMembers[NodeView.WORLD_ROTATION] = NodeView.WORLD_MATRIX - NodeView.WORLD_ROTATION, _NodeViewDataMembers[NodeView.WORLD_MATRIX] = NodeView.LOCAL_SCALE - NodeView.WORLD_MATRIX, _NodeViewDataMembers[NodeView.LOCAL_SCALE] = NodeView.LOCAL_POSITION - NodeView.LOCAL_SCALE, _NodeViewDataMembers[NodeView.LOCAL_POSITION] = NodeView.LOCAL_ROTATION - NodeView.LOCAL_POSITION, _NodeViewDataMembers[NodeView.LOCAL_ROTATION] = NodeView.COUNT - NodeView.LOCAL_ROTATION, _NodeViewDataMembers[NodeView.COUNT] = 1, _NodeViewDataMembers);
      _export("NodePool", NodePool = new BufferPool(PoolType.NODE, NodeViewDataType, NodeViewDataMembers, NodeView));
      (function (PassView) {
        PassView[PassView["PRIORITY"] = 0] = "PRIORITY";
        PassView[PassView["STAGE"] = 1] = "STAGE";
        PassView[PassView["PHASE"] = 2] = "PHASE";
        PassView[PassView["PRIMITIVE"] = 3] = "PRIMITIVE";
        PassView[PassView["BATCHING_SCHEME"] = 4] = "BATCHING_SCHEME";
        PassView[PassView["DYNAMIC_STATE"] = 5] = "DYNAMIC_STATE";
        PassView[PassView["HASH"] = 6] = "HASH";
        PassView[PassView["COUNT"] = 7] = "COUNT";
      })(PassView || _export("PassView", PassView = {}));
      PassViewDataType = (_PassViewDataType = {}, _PassViewDataType[PassView.PRIORITY] = BufferDataType.UINT32, _PassViewDataType[PassView.STAGE] = BufferDataType.UINT32, _PassViewDataType[PassView.PHASE] = BufferDataType.UINT32, _PassViewDataType[PassView.PRIMITIVE] = BufferDataType.UINT32, _PassViewDataType[PassView.BATCHING_SCHEME] = BufferDataType.UINT32, _PassViewDataType[PassView.DYNAMIC_STATE] = BufferDataType.UINT32, _PassViewDataType[PassView.HASH] = BufferDataType.UINT32, _PassViewDataType[PassView.COUNT] = BufferDataType.NEVER, _PassViewDataType);
      PassViewDataMembers = (_PassViewDataMembers = {}, _PassViewDataMembers[PassView.PRIORITY] = PassView.STAGE - PassView.PRIORITY, _PassViewDataMembers[PassView.STAGE] = PassView.PHASE - PassView.STAGE, _PassViewDataMembers[PassView.PHASE] = PassView.PRIMITIVE - PassView.PHASE, _PassViewDataMembers[PassView.PRIMITIVE] = PassView.BATCHING_SCHEME - PassView.PRIMITIVE, _PassViewDataMembers[PassView.BATCHING_SCHEME] = PassView.DYNAMIC_STATE - PassView.BATCHING_SCHEME, _PassViewDataMembers[PassView.DYNAMIC_STATE] = PassView.HASH - PassView.DYNAMIC_STATE, _PassViewDataMembers[PassView.HASH] = PassView.COUNT - PassView.HASH, _PassViewDataMembers[PassView.COUNT] = 1, _PassViewDataMembers);
      _export("PassPool", PassPool = new BufferPool(PoolType.PASS, PassViewDataType, PassViewDataMembers, PassView));
      (function (AABBView) {
        AABBView[AABBView["CENTER"] = 0] = "CENTER";
        AABBView[AABBView["HALFEXTENTS"] = 3] = "HALFEXTENTS";
        AABBView[AABBView["COUNT"] = 6] = "COUNT";
      })(AABBView || _export("AABBView", AABBView = {}));
      AABBViewDataType = (_AABBViewDataType = {}, _AABBViewDataType[AABBView.CENTER] = BufferDataType.FLOAT32, _AABBViewDataType[AABBView.HALFEXTENTS] = BufferDataType.FLOAT32, _AABBViewDataType[AABBView.COUNT] = BufferDataType.NEVER, _AABBViewDataType);
      AABBViewDataMembers = (_AABBViewDataMembers = {}, _AABBViewDataMembers[AABBView.CENTER] = AABBView.HALFEXTENTS - AABBView.CENTER, _AABBViewDataMembers[AABBView.HALFEXTENTS] = AABBView.COUNT - AABBView.HALFEXTENTS, _AABBViewDataMembers[AABBView.COUNT] = 1, _AABBViewDataMembers);
      _export("AABBPool", AABBPool = new BufferPool(PoolType.AABB, AABBViewDataType, AABBViewDataMembers, AABBView));
    }
  };
});