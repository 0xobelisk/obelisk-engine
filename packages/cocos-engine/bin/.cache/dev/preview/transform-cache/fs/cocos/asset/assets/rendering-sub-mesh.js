System.register("q-bundled:///fs/cocos/asset/assets/rendering-sub-mesh.js", ["../../3d/misc/buffer.js", "../../gfx/index.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var mapBuffer, Attribute, InputAssemblerInfo, BufferInfo, AttributeName, BufferUsageBit, Format, FormatInfos, MemoryUsageBit, Vec3, cclegacy, halfToFloat, RenderingSubMesh;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_dMiscBufferJs) {
      mapBuffer = _dMiscBufferJs.mapBuffer;
    }, function (_gfxIndexJs) {
      Attribute = _gfxIndexJs.Attribute;
      InputAssemblerInfo = _gfxIndexJs.InputAssemblerInfo;
      BufferInfo = _gfxIndexJs.BufferInfo;
      AttributeName = _gfxIndexJs.AttributeName;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      Format = _gfxIndexJs.Format;
      FormatInfos = _gfxIndexJs.FormatInfos;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
      halfToFloat = _coreIndexJs.halfToFloat;
    }],
    execute: function () {
      /**
       * @en Array views for index buffer
       * @zh 允许存储索引的数组视图。
       */
      /**
       * @en The interface of geometric information.
       * @zh 几何信息。
       */
      /**
       * @en Flat vertex buffer.
       * @zh 扁平化顶点缓冲区。
       */
      /**
       * @en Sub mesh for rendering which contains all geometry data, it can be used to create [[gfx.InputAssembler]].
       * @zh 包含所有顶点数据的渲染子网格，可以用来创建 [[gfx.InputAssembler]]。
       */
      _export("RenderingSubMesh", RenderingSubMesh = /*#__PURE__*/function () {
        /**
         * @en
         * sub mesh's constructor.
         * @zh
         * 子网格构造函数。
         * @param vertexBuffers @en vertex buffers. @zh 顶点缓冲区数组。
         * @param attributes @en vertex attributes. @zh 顶点属性数组。
         * @param primitiveMode @en primitive mode. @zh 图元类型。
         * @param indexBuffer @en index buffer. @zh 索引缓冲区。
         * @param indirectBuffer @en indirect buffer. @zh 间接缓冲区。
         */
        function RenderingSubMesh(vertexBuffers, attributes, primitiveMode, indexBuffer, indirectBuffer, isOwnerOfIndexBuffer) {
          if (indexBuffer === void 0) {
            indexBuffer = null;
          }
          if (indirectBuffer === void 0) {
            indirectBuffer = null;
          }
          if (isOwnerOfIndexBuffer === void 0) {
            isOwnerOfIndexBuffer = true;
          }
          /**
           * @en
           * mesh object where this sub mesh locates.
           * @zh
           * 子网格所处的网格模型对象。
           */
          this.mesh = void 0;
          /**
           * @en
           * sub mesh's index in mesh.
           * @zh
           * 子网格在网格模型中的索引。
           */
          this.subMeshIdx = void 0;
          this._flatBuffers = [];
          this._jointMappedBuffers = void 0;
          this._jointMappedBufferIndices = void 0;
          this._vertexIdChannel = void 0;
          this._geometricInfo = void 0;
          this._vertexBuffers = void 0;
          this._attributes = void 0;
          this._indexBuffer = null;
          this._indirectBuffer = null;
          this._primitiveMode = void 0;
          this._iaInfo = void 0;
          this._isOwnerOfIndexBuffer = true;
          this._drawInfo = null;
          this._attributes = attributes;
          this._vertexBuffers = vertexBuffers;
          this._indexBuffer = indexBuffer;
          this._indirectBuffer = indirectBuffer;
          this._primitiveMode = primitiveMode;
          this._iaInfo = new InputAssemblerInfo(attributes, vertexBuffers, indexBuffer, indirectBuffer);
          this._isOwnerOfIndexBuffer = isOwnerOfIndexBuffer;
        }

        /**
         * @en All vertex attributes used by the sub mesh.
         * @zh 所有顶点属性。
         */
        var _proto = RenderingSubMesh.prototype;
        /**
         * @en Invalidate the geometric info of the sub mesh after geometry changed.
         * @zh 网格更新后，设置（用于射线检测的）几何信息为无效，需要重新计算。
         */
        _proto.invalidateGeometricInfo = function invalidateGeometricInfo() {
          this._geometricInfo = undefined;
        }

        /**
         * @en the draw range.
         * @zh 渲染范围。
         */;
        /**
         * @en generate flatted vertex buffers.
         * @zh 生成扁平化的顶点缓冲区。
         */
        _proto.genFlatBuffers = function genFlatBuffers() {
          if (this._flatBuffers.length || !this.mesh || this.subMeshIdx === undefined) {
            return;
          }
          var mesh = this.mesh;
          var idxCount = 0;
          var prim = mesh.struct.primitives[this.subMeshIdx];
          if (prim.indexView) {
            idxCount = prim.indexView.count;
          }
          for (var i = 0; i < prim.vertexBundelIndices.length; i++) {
            var bundleIdx = prim.vertexBundelIndices[i];
            var vertexBundle = mesh.struct.vertexBundles[bundleIdx];
            var vbCount = prim.indexView ? prim.indexView.count : vertexBundle.view.count;
            var vbStride = vertexBundle.view.stride;
            var vbSize = vbStride * vbCount;
            var view = new Uint8Array(mesh.data.buffer, vertexBundle.view.offset, vertexBundle.view.length);
            var sharedView = new Uint8Array(prim.indexView ? vbSize : vertexBundle.view.length);
            if (!prim.indexView) {
              sharedView.set(mesh.data.subarray(vertexBundle.view.offset, vertexBundle.view.offset + vertexBundle.view.length));
              this._flatBuffers.push({
                stride: vbStride,
                count: vbCount,
                buffer: sharedView
              });
              continue;
            }
            var ibView = mesh.readIndices(this.subMeshIdx);
            // transform to flat buffer
            for (var n = 0; n < idxCount; ++n) {
              var idx = ibView[n];
              var offset = n * vbStride;
              var srcOffset = idx * vbStride;
              for (var m = 0; m < vbStride; ++m) {
                sharedView[offset + m] = view[srcOffset + m];
              }
            }
            this._flatBuffers.push({
              stride: vbStride,
              count: vbCount,
              buffer: sharedView
            });
          }
        }

        /**
         * @en The vertex buffer for joint after mapping.
         * @zh 骨骼索引按映射表处理后的顶点缓冲。
         */;
        /**
         * @en Destroys sub mesh.
         * @zh 销毁子网格。
         */
        _proto.destroy = function destroy() {
          for (var i = 0; i < this.vertexBuffers.length; i++) {
            this.vertexBuffers[i].destroy();
          }
          this.vertexBuffers.length = 0;
          if (this._indexBuffer) {
            if (this._isOwnerOfIndexBuffer) {
              this._indexBuffer.destroy();
            }
            this._indexBuffer = null;
          }
          if (this._jointMappedBuffers && this._jointMappedBufferIndices) {
            for (var _i = 0; _i < this._jointMappedBufferIndices.length; _i++) {
              this._jointMappedBuffers[this._jointMappedBufferIndices[_i]].destroy();
            }
            this._jointMappedBuffers = undefined;
            this._jointMappedBufferIndices = undefined;
          }
          if (this._indirectBuffer) {
            this._indirectBuffer.destroy();
            this._indirectBuffer = null;
          }
        }

        /**
         * @en Adds a vertex attribute input called 'a_vertexId' into this sub-mesh.
         * This is useful if you want to simulate `gl_VertexId` in WebGL context prior to 2.0.
         * Once you call this function, the vertex attribute is permanently added.
         * Subsequent calls to this function take no effect.
         * @zh 添加一个 'a_vertexId' 顶点属性， 用于在 WebGL 2.0 之前的平台模拟 `gl_VertexId`，
         * 一旦你调用此函数， 顶点属性永久被添加， 后续调用无效果。
         * @param device @en Device used to create related rendering resources @zh 用于创建相关渲染资源的设备对象
         */;
        _proto.enableVertexIdChannel = function enableVertexIdChannel(device) {
          if (this._vertexIdChannel) {
            return;
          }
          var streamIndex = this.vertexBuffers.length;
          var attributeIndex = this.attributes.length;
          var vertexIdBuffer = this._allocVertexIdBuffer(device);
          this._vertexBuffers.push(vertexIdBuffer);
          this._attributes.push(new Attribute('a_vertexId', Format.R32F, false, streamIndex));
          this._iaInfo.attributes = this._attributes;
          this._iaInfo.vertexBuffers = this._vertexBuffers;
          this._vertexIdChannel = {
            stream: streamIndex,
            index: attributeIndex
          };
        };
        _proto._allocVertexIdBuffer = function _allocVertexIdBuffer(device) {
          var vertexCount = this.vertexBuffers.length === 0 || this.vertexBuffers[0].stride === 0 ? 0
          // TODO: This depends on how stride of a vertex buffer is defined; Consider padding problem.
          : this.vertexBuffers[0].size / this.vertexBuffers[0].stride;
          var vertexIds = new Float32Array(vertexCount);
          for (var iVertex = 0; iVertex < vertexCount; ++iVertex) {
            // `+0.5` because on some platforms, the "fetched integer" may have small error.
            // For example `26` may yield `25.99999`, which is convert to `25` instead of `26` using `int()`.
            vertexIds[iVertex] = iVertex + 0.5;
          }
          var vertexIdBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, vertexIds.byteLength, vertexIds.BYTES_PER_ELEMENT));
          vertexIdBuffer.update(vertexIds);
          return vertexIdBuffer;
        };
        _createClass(RenderingSubMesh, [{
          key: "attributes",
          get: function get() {
            return this._attributes;
          }

          /**
           * @en All vertex buffers used by the sub mesh.
           * @zh 使用的所有顶点缓冲区。
           */
        }, {
          key: "vertexBuffers",
          get: function get() {
            return this._vertexBuffers;
          }

          /**
           * @en Index buffer used by the sub mesh.
           * @zh 使用的索引缓冲区，若未使用则无需指定。
           */
        }, {
          key: "indexBuffer",
          get: function get() {
            return this._indexBuffer;
          }

          /**
           * @en Indirect buffer used by the sub mesh.
           * @zh 间接绘制缓冲区。
           */
        }, {
          key: "indirectBuffer",
          get: function get() {
            return this._indirectBuffer;
          }

          /**
           * @en Primitive mode used by the sub mesh.
           * @zh 图元类型。
           */
        }, {
          key: "primitiveMode",
          get: function get() {
            return this._primitiveMode;
          }

          /**
           * @en The geometric info of the sub mesh, used for raycast.
           * @zh （用于射线检测的）几何信息。
           */
        }, {
          key: "geometricInfo",
          get: function get() {
            if (this._geometricInfo) {
              return this._geometricInfo;
            }
            if (this.mesh === undefined) {
              return RenderingSubMesh.EMPTY_GEOMETRIC_INFO;
            }
            if (this.subMeshIdx === undefined) {
              return RenderingSubMesh.EMPTY_GEOMETRIC_INFO;
            }
            var mesh = this.mesh;
            var index = this.subMeshIdx;
            var pAttri = this.attributes.find(function (element) {
              return element.name === AttributeName.ATTR_POSITION;
            });
            if (!pAttri) {
              return RenderingSubMesh.EMPTY_GEOMETRIC_INFO;
            }
            var positions;
            switch (pAttri.format) {
              case Format.RG32F:
              case Format.RGB32F:
                {
                  positions = mesh.readAttribute(index, AttributeName.ATTR_POSITION);
                  if (!positions) {
                    return RenderingSubMesh.EMPTY_GEOMETRIC_INFO;
                  }
                  break;
                }
              case Format.RGBA32F:
                {
                  var data = mesh.readAttribute(index, AttributeName.ATTR_POSITION);
                  if (!data) {
                    return RenderingSubMesh.EMPTY_GEOMETRIC_INFO;
                  }
                  var count = data.length / 4;
                  positions = new Float32Array(count * 3);
                  for (var i = 0; i < count; ++i) {
                    var dstPtr = i * 3;
                    var srcPtr = i * 4;
                    positions[dstPtr] = data[srcPtr];
                    positions[dstPtr + 1] = data[srcPtr + 1];
                    positions[dstPtr + 2] = data[srcPtr + 2];
                  }
                  break;
                }
              case Format.RG16F:
              case Format.RGB16F:
                {
                  var _data = mesh.readAttribute(index, AttributeName.ATTR_POSITION);
                  if (!_data) {
                    return RenderingSubMesh.EMPTY_GEOMETRIC_INFO;
                  }
                  positions = new Float32Array(_data.length);
                  for (var _i2 = 0; _i2 < _data.length; ++_i2) {
                    positions[_i2] = halfToFloat(_data[_i2]);
                  }
                  break;
                }
              case Format.RGBA16F:
                {
                  var _data2 = mesh.readAttribute(index, AttributeName.ATTR_POSITION);
                  if (!_data2) {
                    return RenderingSubMesh.EMPTY_GEOMETRIC_INFO;
                  }
                  var _count = _data2.length / 4;
                  positions = new Float32Array(_count * 3);
                  for (var _i3 = 0; _i3 < _count; ++_i3) {
                    var _dstPtr = _i3 * 3;
                    var _srcPtr = _i3 * 4;
                    positions[_dstPtr] = halfToFloat(_data2[_srcPtr]);
                    positions[_dstPtr + 1] = halfToFloat(_data2[_srcPtr + 1]);
                    positions[_dstPtr + 2] = halfToFloat(_data2[_srcPtr + 2]);
                  }
                  break;
                }
              default:
                return RenderingSubMesh.EMPTY_GEOMETRIC_INFO;
            }
            var indices = mesh.readIndices(index) || undefined;
            var max = new Vec3();
            var min = new Vec3();
            var conut = FormatInfos[pAttri.format].count;
            if (conut === 2) {
              max.set(positions[0], positions[1], 0);
              min.set(positions[0], positions[1], 0);
            } else {
              max.set(positions[0], positions[1], positions[2]);
              min.set(positions[0], positions[1], positions[2]);
            }
            for (var _i4 = 0; _i4 < positions.length; _i4 += conut) {
              if (conut === 2) {
                max.x = positions[_i4] > max.x ? positions[_i4] : max.x;
                max.y = positions[_i4 + 1] > max.y ? positions[_i4 + 1] : max.y;
                min.x = positions[_i4] < min.x ? positions[_i4] : min.x;
                min.y = positions[_i4 + 1] < min.y ? positions[_i4 + 1] : min.y;
              } else {
                max.x = positions[_i4] > max.x ? positions[_i4] : max.x;
                max.y = positions[_i4 + 1] > max.y ? positions[_i4 + 1] : max.y;
                max.z = positions[_i4 + 2] > max.z ? positions[_i4 + 2] : max.z;
                min.x = positions[_i4] < min.x ? positions[_i4] : min.x;
                min.y = positions[_i4 + 1] < min.y ? positions[_i4 + 1] : min.y;
                min.z = positions[_i4 + 2] < min.z ? positions[_i4 + 2] : min.z;
              }
            }
            this._geometricInfo = {
              positions: positions,
              indices: indices,
              boundingBox: {
                max: max,
                min: min
              }
            };
            return this._geometricInfo;
          }
        }, {
          key: "drawInfo",
          get: function get() {
            return this._drawInfo;
          }

          /**
           * @en Flatted vertex buffers.
           * @zh 扁平化的顶点缓冲区。
           */,
          set: function set(info) {
            this._drawInfo = info;
          }
        }, {
          key: "flatBuffers",
          get: function get() {
            return this._flatBuffers;
          }
        }, {
          key: "jointMappedBuffers",
          get: function get() {
            var _this = this;
            if (this._jointMappedBuffers) {
              return this._jointMappedBuffers;
            }
            var buffers = this._jointMappedBuffers = [];
            var indices = this._jointMappedBufferIndices = [];
            if (!this.mesh || this.subMeshIdx === undefined) {
              return this._jointMappedBuffers = this.vertexBuffers;
            }
            var struct = this.mesh.struct;
            var prim = struct.primitives[this.subMeshIdx];
            if (!struct.jointMaps || prim.jointMapIndex === undefined || !struct.jointMaps[prim.jointMapIndex]) {
              return this._jointMappedBuffers = this.vertexBuffers;
            }
            var jointFormat;
            var jointOffset;
            var _ref = cclegacy.director.root,
              device = _ref.device;
            var _loop = function _loop() {
              var bundle = struct.vertexBundles[prim.vertexBundelIndices[i]];
              jointOffset = 0;
              jointFormat = Format.UNKNOWN;
              for (var j = 0; j < bundle.attributes.length; j++) {
                var attr = bundle.attributes[j];
                if (attr.name === AttributeName.ATTR_JOINTS) {
                  jointFormat = attr.format;
                  break;
                }
                jointOffset += FormatInfos[attr.format].size;
              }
              if (jointFormat) {
                var data = new Uint8Array(_this.mesh.data.buffer, bundle.view.offset, bundle.view.length);
                var dataView = new DataView(data.slice().buffer);
                var idxMap = struct.jointMaps[prim.jointMapIndex];
                mapBuffer(dataView, function (cur) {
                  return idxMap.indexOf(cur);
                }, jointFormat, jointOffset, bundle.view.length, bundle.view.stride, dataView);
                var buffer = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, bundle.view.length, bundle.view.stride));
                buffer.update(dataView.buffer);
                buffers.push(buffer);
                indices.push(i);
              } else {
                buffers.push(_this.vertexBuffers[prim.vertexBundelIndices[i]]);
              }
            };
            for (var i = 0; i < prim.vertexBundelIndices.length; i++) {
              _loop();
            }
            if (this._vertexIdChannel) {
              buffers.push(this._allocVertexIdBuffer(device));
            }
            return buffers;
          }

          /**
           * @en The input assembler info.
           * @zh 输入汇集器信息。
           */
        }, {
          key: "iaInfo",
          get: function get() {
            return this._iaInfo;
          }
        }]);
        return RenderingSubMesh;
      }());
      RenderingSubMesh.EMPTY_GEOMETRIC_INFO = {
        positions: new Float32Array(),
        indices: new Uint8Array(),
        boundingBox: {
          min: Vec3.ZERO,
          max: Vec3.ZERO
        }
      };
    }
  };
});