System.register("q-bundled:///fs/cocos/2d/renderer/static-vb-accessor.js", ["../../../../virtual/internal%253Aconstants.js", "./mesh-buffer.js", "./buffer-accessor.js", "../../core/index.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var JSB, MeshBuffer, BufferAccessor, assertID, errorID, Pool, macro, assertIsTrue, director, _entryPool, StaticVBChunk, StaticVBAccessor;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_meshBufferJs) {
      MeshBuffer = _meshBufferJs.MeshBuffer;
    }, function (_bufferAccessorJs) {
      BufferAccessor = _bufferAccessorJs.BufferAccessor;
    }, function (_coreIndexJs) {
      assertID = _coreIndexJs.assertID;
      errorID = _coreIndexJs.errorID;
      Pool = _coreIndexJs.Pool;
      macro = _coreIndexJs.macro;
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }],
    execute: function () {
      _entryPool = new Pool(function () {
        return {
          offset: 0,
          length: 0
        };
      }, 32);
      /**
       * @internal
       */
      _export("StaticVBChunk", StaticVBChunk = /*#__PURE__*/function () {
        function StaticVBChunk(vertexAccessor, bufferId, meshBuffer, vertexOffset, vb, indexCount) {
          this._ib = void 0;
          this.vertexAccessor = vertexAccessor;
          this.bufferId = bufferId;
          this.meshBuffer = meshBuffer;
          this.vertexOffset = vertexOffset;
          this.vb = vb;
          this.indexCount = indexCount;
          this._ib = new Uint16Array(indexCount); // JSB
          assertIsTrue(meshBuffer === vertexAccessor.getMeshBuffer(bufferId));
        }
        var _proto = StaticVBChunk.prototype;
        _proto.setIndexBuffer = function setIndexBuffer(indices) {
          if (JSB) {
            // 放到原生
            assertIsTrue(indices.length === this.ib.length);
            for (var i = 0; i < indices.length; ++i) {
              var vid = indices[i];
              this._ib[i] = this.vertexOffset + vid;
            }
          }
        };
        _createClass(StaticVBChunk, [{
          key: "ib",
          get:
          // JSB
          function get() {
            return this._ib;
          }
        }]);
        return StaticVBChunk;
      }());
      _export("StaticVBAccessor", StaticVBAccessor = /*#__PURE__*/function (_BufferAccessor) {
        _inheritsLoose(StaticVBAccessor, _BufferAccessor);
        function StaticVBAccessor(device, attributes, vCount, iCount) {
          var _this;
          _this = _BufferAccessor.call(this, device, attributes) || this;
          _this._freeLists = [];
          _this._vCount = 0;
          _this._iCount = 0;
          _this._id = 0;
          _this._vCount = vCount || Math.floor(macro.BATCHER2D_MEM_INCREMENT * 1024 / _this._vertexFormatBytes);
          _this._iCount = iCount || _this._vCount * StaticVBAccessor.IB_SCALE;
          _this._id = StaticVBAccessor.generateID();
          // Initialize first mesh buffer
          _this._allocateBuffer();
          return _this;
        }
        var _proto2 = StaticVBAccessor.prototype;
        _proto2.destroy = function destroy() {
          // Destroy mesh buffers and reuse free entries
          for (var i = 0; i < this._buffers.length; ++i) {
            this._buffers[i].destroy();
            var freeList = this._freeLists[i];
            for (var j = 0; j < freeList.length; ++j) {
              _entryPool.free(freeList[j]);
            }
          }
          this._buffers.length = 0;
          this._freeLists.length = 0;
          _BufferAccessor.prototype.destroy.call(this);
        };
        _proto2.reset = function reset() {
          for (var i = 0; i < this._buffers.length; ++i) {
            var buffer = this._buffers[i];
            // Reset index buffer
            buffer.indexOffset = 0;
            buffer.reset();
          }
        };
        _proto2.getVertexBuffer = function getVertexBuffer(bid) {
          return this._buffers[bid].vData;
        };
        _proto2.getIndexBuffer = function getIndexBuffer(bid) {
          return this._buffers[bid].iData;
        };
        _proto2.getMeshBuffer = function getMeshBuffer(bid) {
          return this._buffers[bid];
        };
        _proto2.uploadBuffers = function uploadBuffers() {
          for (var i = 0; i < this._buffers.length; ++i) {
            var firstEntry = this._freeLists[i][0];
            var buffer = this._buffers[i];
            // Recognize active buffers
            if (!firstEntry || firstEntry.length < buffer.vData.byteLength) {
              buffer.uploadBuffers();
            }
            // Need destroy empty buffer
          }
        };
        _proto2.appendIndices = function appendIndices(bufferId, indices) {
          var buf = this._buffers[bufferId];
          var iCount = indices.length;
          if (iCount) {
            //make sure iData length enough
            var needLength = buf.indexOffset + indices.length;
            if (buf.iData.length < needLength) {
              var expansionLength = Math.floor(1.25 * needLength);
              var newIData = new Uint16Array(expansionLength);
              newIData.set(buf.iData);
              buf.iData = newIData;
            }
            // Append index buffer
            buf.iData.set(indices, buf.indexOffset);
            buf.indexOffset += indices.length;
          }
        };
        _proto2.allocateChunk = function allocateChunk(vertexCount, indexCount) {
          var byteLength = vertexCount * this.vertexFormatBytes;
          if (vertexCount > this._vCount || indexCount > this._iCount) {
            errorID(9004, byteLength);
            return null;
          }
          var buf = null;
          var freeList;
          var bid = 0;
          var eid = -1;
          var entry = null;
          // Loop buffers
          for (var i = 0; i < this._buffers.length; ++i) {
            buf = this._buffers[i];
            freeList = this._freeLists[i];
            // Loop entries
            for (var e = 0; e < freeList.length; ++e) {
              // Found suitable free entry
              if (freeList[e].length >= byteLength) {
                entry = freeList[e];
                bid = i;
                eid = e;
                break;
              }
            }
            if (entry) break;
          }
          // Allocation fail
          if (!entry) {
            bid = this._allocateBuffer();
            buf = this._buffers[bid];
            if (buf) {
              eid = 0;
              entry = this._freeLists[bid][eid];
            }
          }
          // Allocation succeed
          if (entry) {
            var _vertexOffset = entry.offset / this.vertexFormatBytes;
            assertIsTrue(Number.isInteger(_vertexOffset));
            var _vb = new Float32Array(buf.vData.buffer, entry.offset, byteLength >> 2).fill(0);
            this._allocateChunkFromEntry(bid, eid, entry, byteLength);
            return new StaticVBChunk(this, bid, buf, _vertexOffset, _vb, indexCount);
          } else {
            return null;
          }
        };
        _proto2.recycleChunk = function recycleChunk(chunk) {
          var freeList = this._freeLists[chunk.bufferId];
          var buf = this._buffers[chunk.bufferId];
          var offset = chunk.vertexOffset * this.vertexFormatBytes;
          var bytes = chunk.vb.byteLength;
          if (bytes === 0) return;
          var recycled = false;
          var i = 0;
          var prevEntry = null;
          var nextEntry = freeList[i];
          // Loop entries
          while (nextEntry && nextEntry.offset < offset) {
            prevEntry = nextEntry;
            nextEntry = freeList[++i];
          }
          // Found previous entry
          if (prevEntry) {
            var distance = offset - (prevEntry.offset + prevEntry.length);
            // Ensure no overlap with previous chunk
            assertIsTrue(distance >= 0);
            // Can be merged
            if (distance === 0) {
              prevEntry.length += bytes;
              offset = prevEntry.offset;
              bytes = prevEntry.length;

              // Can also merge with next entry
              if (nextEntry && nextEntry.offset - (offset + bytes) === 0) {
                prevEntry.length += nextEntry.length;
                // Free next entry
                freeList.splice(i, 1);
                _entryPool.free(nextEntry);
                nextEntry = null;
              }
              recycled = true;
            }
          }
          // Found next entry
          if (!recycled && nextEntry) {
            var _distance = nextEntry.offset - (offset + bytes);
            // Ensure no overlap with next chunk
            assertIsTrue(_distance >= 0);
            // Can be merged
            if (_distance === 0) {
              nextEntry.offset = offset;
              nextEntry.length += bytes;
            } else {
              // Can not be merged
              var newEntry = _entryPool.alloc();
              newEntry.offset = offset;
              newEntry.length = bytes;
              freeList.splice(i, 0, newEntry);
            }
            recycled = true;
          }
          if (recycled) {
            // If the last chunk is recycled, ensure correct mesh buffer byte offset
            if (offset + bytes === buf.byteOffset) {
              buf.byteOffset = offset;
            }
          } else {
            // Haven't found any entry or any entry after the buffer chunk
            var _newEntry = _entryPool.alloc();
            _newEntry.offset = offset;
            _newEntry.length = bytes;
            freeList.push(_newEntry);
          }
        };
        _proto2._allocateChunkFromEntry = function _allocateChunkFromEntry(bid, eid, entry, bytes) {
          var remaining = entry.length - bytes;
          var offset = entry.offset + bytes;
          var buf = this._buffers[bid];
          if (buf.byteOffset < offset) {
            // Ensure buffer length covers all buffer chunks
            buf.byteOffset = offset;
          }
          assertID(remaining >= 0, 9004, bid, entry.offset, entry.length);
          if (remaining === 0) {
            this._freeLists[bid].splice(eid, 1);
            _entryPool.free(entry);
          } else {
            entry.offset += bytes;
            entry.length = remaining;
          }
        };
        _proto2._allocateBuffer = function _allocateBuffer() {
          // Validate length of buffer array
          assertID(this._buffers.length === this._freeLists.length, 9003);
          var buffer = new MeshBuffer();
          var vFloatCount = this._vCount * this._floatsPerVertex;
          buffer.initialize(this._device, this._attributes, vFloatCount, this._iCount);
          this._buffers.push(buffer);
          var entry = _entryPool.alloc();
          entry.offset = 0;
          entry.length = buffer.vData.byteLength;
          var freeList = [entry];
          this._freeLists.push(freeList);

          //sync to native
          // temporarily batcher transports buffers
          // It is better to put accessor to native
          var batcher = director.root.batcher2D;
          batcher.syncMeshBuffersToNative(this.id, this._buffers);
          return this._buffers.length - 1;
        };
        StaticVBAccessor.generateID = function generateID() {
          return StaticVBAccessor.ID_COUNT++;
        };
        _createClass(StaticVBAccessor, [{
          key: "id",
          get: function get() {
            return this._id;
          }
        }]);
        return StaticVBAccessor;
      }(BufferAccessor));
      StaticVBAccessor.IB_SCALE = 4;
      // ib size scale based on vertex count
      StaticVBAccessor.ID_COUNT = 0;
    }
  };
});