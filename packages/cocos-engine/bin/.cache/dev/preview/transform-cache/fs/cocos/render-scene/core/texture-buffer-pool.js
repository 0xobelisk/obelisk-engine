System.register("q-bundled:///fs/cocos/render-scene/core/texture-buffer-pool.js", ["../../gfx/index.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var getTypedArrayConstructor, Format, FormatInfos, TextureType, TextureUsageBit, TextureInfo, BufferTextureCopy, debug, TextureBufferPool;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  function nearestPOT(num) {
    --num;
    num |= num >> 16;
    num |= num >> 8;
    num |= num >> 4;
    num |= num >> 2;
    num |= num >> 1;
    ++num;
    return num;
  }
  function roundUp(n, alignment) {
    return Math.ceil(n / alignment) * alignment;
  }
  _export("nearestPOT", nearestPOT);
  return {
    setters: [function (_gfxIndexJs) {
      getTypedArrayConstructor = _gfxIndexJs.getTypedArrayConstructor;
      Format = _gfxIndexJs.Format;
      FormatInfos = _gfxIndexJs.FormatInfos;
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      TextureInfo = _gfxIndexJs.TextureInfo;
      BufferTextureCopy = _gfxIndexJs.BufferTextureCopy;
    }, function (_coreIndexJs) {
      debug = _coreIndexJs.debug;
    }],
    execute: function () {
      _export("TextureBufferPool", TextureBufferPool = /*#__PURE__*/function () {
        function TextureBufferPool(device) {
          this._device = void 0;
          this._format = Format.UNKNOWN;
          this._formatSize = 0;
          this._chunks = [];
          this._chunkCount = 0;
          this._handles = [];
          this._region0 = new BufferTextureCopy();
          this._region1 = new BufferTextureCopy();
          this._region2 = new BufferTextureCopy();
          this._roundUpFn = null;
          this._bufferViewCtor = Uint8Array;
          this._channels = 4;
          this._alignment = 1;
          this._device = device;
        }
        var _proto = TextureBufferPool.prototype;
        _proto.initialize = function initialize(info) {
          var formatInfo = FormatInfos[info.format];
          this._format = info.format;
          this._formatSize = formatInfo.size;
          this._channels = formatInfo.count;
          this._bufferViewCtor = getTypedArrayConstructor(formatInfo);
          this._roundUpFn = info.roundUpFn || null;
          this._alignment = info.alignment || 1;
          if (info.inOrderFree) {
            this.alloc = this._McDonaldAlloc;
          }
        };
        _proto.destroy = function destroy() {
          for (var i = 0; i < this._chunkCount; ++i) {
            var chunk = this._chunks[i];
            chunk.texture.destroy();
          }
          this._chunks.length = 0;
          this._handles.length = 0;
        };
        _proto.alloc = function alloc(size, chunkIdx) {
          size = roundUp(size, this._alignment);
          var index = -1;
          var start = -1;
          if (chunkIdx !== undefined) {
            index = chunkIdx;
            start = this._findAvailableSpace(size, index);
          }
          if (start < 0) {
            for (var i = 0; i < this._chunkCount; ++i) {
              index = i;
              start = this._findAvailableSpace(size, index);
              if (start >= 0) {
                break;
              }
            }
          }
          if (start >= 0) {
            var chunk = this._chunks[index];
            chunk.start += size;
            var handle = {
              chunkIdx: index,
              start: start,
              end: start + size,
              texture: chunk.texture
            };
            this._handles.push(handle);
            return handle;
          }

          // create a new one
          var targetSize = Math.sqrt(size / this._formatSize);
          var texLength = this._roundUpFn && this._roundUpFn(targetSize, this._formatSize) || Math.max(1024, nearestPOT(targetSize));
          var newChunk = this._chunks[this.createChunk(texLength)];
          newChunk.start += size;
          var texHandle = {
            chunkIdx: this._chunkCount - 1,
            start: 0,
            end: size,
            texture: newChunk.texture
          };
          this._handles.push(texHandle);
          return texHandle;
        };
        _proto.free = function free(handle) {
          for (var i = 0; i < this._handles.length; ++i) {
            if (this._handles[i] === handle) {
              this._chunks[handle.chunkIdx].end = handle.end;
              this._handles.splice(i, 1);
              return;
            }
          }
        };
        _proto.createChunk = function createChunk(length) {
          var texSize = length * length * this._formatSize;
          debug("TextureBufferPool: Allocate chunk " + this._chunkCount + ", size: " + texSize + ", format: " + this._format);
          var texture = this._device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_DST, this._format, length, length));
          var chunk = {
            texture: texture,
            size: texSize,
            start: 0,
            end: texSize
          };
          this._chunks[this._chunkCount] = chunk;
          return this._chunkCount++;
        };
        _proto.update = function update(handle, buffer) {
          var buffers = [];
          var regions = [];
          var start = handle.start / this._formatSize;
          var remainSize = buffer.byteLength / this._formatSize;
          var offsetX = start % handle.texture.width;
          var offsetY = Math.floor(start / handle.texture.width);
          var copySize = Math.min(handle.texture.width - offsetX, remainSize);
          var begin = 0;
          if (offsetX > 0) {
            this._region0.texOffset.x = offsetX;
            this._region0.texOffset.y = offsetY;
            this._region0.texExtent.width = copySize;
            this._region0.texExtent.height = 1;
            buffers.push(new this._bufferViewCtor(buffer, begin * this._formatSize, copySize * this._channels));
            regions.push(this._region0);
            offsetX = 0;
            offsetY += 1;
            remainSize -= copySize;
            begin += copySize;
          }
          if (remainSize > 0) {
            this._region1.texOffset.x = offsetX;
            this._region1.texOffset.y = offsetY;
            if (remainSize > handle.texture.width) {
              this._region1.texExtent.width = handle.texture.width;
              this._region1.texExtent.height = Math.floor(remainSize / handle.texture.width);
              copySize = this._region1.texExtent.width * this._region1.texExtent.height;
            } else {
              copySize = remainSize;
              this._region1.texExtent.width = copySize;
              this._region1.texExtent.height = 1;
            }
            buffers.push(new this._bufferViewCtor(buffer, begin * this._formatSize, copySize * this._channels));
            regions.push(this._region1);
            offsetX = 0;
            offsetY += this._region1.texExtent.height;
            remainSize -= copySize;
            begin += copySize;
          }
          if (remainSize > 0) {
            this._region2.texOffset.x = offsetX;
            this._region2.texOffset.y = offsetY;
            this._region2.texExtent.width = remainSize;
            this._region2.texExtent.height = 1;
            buffers.push(new this._bufferViewCtor(buffer, begin * this._formatSize, remainSize * this._channels));
            regions.push(this._region2);
          }
          this._device.copyBuffersToTexture(buffers, handle.texture, regions);
        };
        _proto._findAvailableSpace = function _findAvailableSpace(size, chunkIdx) {
          var chunk = this._chunks[chunkIdx];
          var isFound = false;
          var start = chunk.start;
          if (start + size <= chunk.size) {
            isFound = true;
          } else {
            start = 0; // try to find from head again
            var handles = this._handles.filter(function (h) {
              return h.chunkIdx === chunkIdx;
            }).sort(function (a, b) {
              return a.start - b.start;
            });
            for (var i = 0; i < handles.length; i++) {
              var handle = handles[i];
              if (start + size <= handle.start) {
                isFound = true;
                break;
              }
              start = handle.end;
            }
            if (!isFound && start + size <= chunk.size) {
              isFound = true;
            }
          }
          return isFound ? start : -1;
        }

        // [McDonald 12] Efficient Buffer Management
        ;
        _proto._McDonaldAlloc = function _McDonaldAlloc(size) {
          size = roundUp(size, this._alignment);
          for (var i = 0; i < this._chunkCount; ++i) {
            var chunk = this._chunks[i];
            var isFound = false;
            var start = chunk.start;
            if (start + size <= chunk.end) {
              isFound = true;
            } else if (start > chunk.end) {
              if (start + size <= chunk.size) {
                isFound = true;
              } else if (size <= chunk.end) {
                // Try to find from head again.
                chunk.start = start = 0;
                isFound = true;
              }
            } else if (start === chunk.end) {
              chunk.start = start = 0;
              chunk.end = chunk.size;
              if (size <= chunk.end) {
                isFound = true;
              }
            }
            if (isFound) {
              chunk.start += size;
              var handle = {
                chunkIdx: i,
                start: start,
                end: start + size,
                texture: chunk.texture
              };
              this._handles.push(handle);
              return handle;
            }
          }

          // create a new one
          var targetSize = Math.sqrt(size / this._formatSize);
          var texLength = this._roundUpFn && this._roundUpFn(targetSize, this._formatSize) || Math.max(1024, nearestPOT(targetSize));
          var newChunk = this._chunks[this.createChunk(texLength)];
          newChunk.start += size;
          var texHandle = {
            chunkIdx: this._chunkCount,
            start: 0,
            end: size,
            texture: newChunk.texture
          };
          this._handles.push(texHandle);
          return texHandle;
        };
        return TextureBufferPool;
      }());
    }
  };
});