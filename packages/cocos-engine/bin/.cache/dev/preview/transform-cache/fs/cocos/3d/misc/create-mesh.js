System.register("q-bundled:///fs/cocos/3d/misc/create-mesh.js", ["../assets/mesh.js", "../../gfx/index.js", "../../core/index.js", "./buffer.js", "./buffer-blob.js"], function (_export, _context) {
  "use strict";

  var Mesh, _decodeMesh, _inflateMesh, AttributeName, Format, FormatInfos, PrimitiveMode, Attribute, Vec3, writeBuffer, BufferBlob, _defAttrs, v3_1, MeshUtils;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
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
  /**
   * @deprecated
   */
  function _createMesh(geometry, out, options) {
    options = options || {};
    // Collect attributes and calculate length of result vertex buffer.
    var attributes = [];
    var stride = 0;
    var channels = [];
    var vertCount = 0;
    var attr;
    var positions = geometry.positions.slice();
    if (positions.length > 0) {
      attr = null;
      if (geometry.attributes) {
        for (var _iterator = _createForOfIteratorHelperLoose(geometry.attributes), _step; !(_step = _iterator()).done;) {
          var att = _step.value;
          if (att.name === AttributeName.ATTR_POSITION) {
            attr = att;
            break;
          }
        }
      }
      if (!attr) {
        attr = _defAttrs[0];
      }
      attributes.push(attr);
      var info = FormatInfos[attr.format];
      vertCount = Math.max(vertCount, Math.floor(positions.length / info.count));
      channels.push({
        offset: stride,
        data: positions,
        attribute: attr
      });
      stride += info.size;
    }
    if (geometry.normals && geometry.normals.length > 0) {
      attr = null;
      if (geometry.attributes) {
        for (var _iterator2 = _createForOfIteratorHelperLoose(geometry.attributes), _step2; !(_step2 = _iterator2()).done;) {
          var _att = _step2.value;
          if (_att.name === AttributeName.ATTR_NORMAL) {
            attr = _att;
            break;
          }
        }
      }
      if (!attr) {
        attr = _defAttrs[1];
      }
      var _info = FormatInfos[attr.format];
      attributes.push(attr);
      vertCount = Math.max(vertCount, Math.floor(geometry.normals.length / _info.count));
      channels.push({
        offset: stride,
        data: geometry.normals,
        attribute: attr
      });
      stride += _info.size;
    }
    if (geometry.uvs && geometry.uvs.length > 0) {
      attr = null;
      if (geometry.attributes) {
        for (var _iterator3 = _createForOfIteratorHelperLoose(geometry.attributes), _step3; !(_step3 = _iterator3()).done;) {
          var _att2 = _step3.value;
          if (_att2.name === AttributeName.ATTR_TEX_COORD) {
            attr = _att2;
            break;
          }
        }
      }
      if (!attr) {
        attr = _defAttrs[2];
      }
      var _info2 = FormatInfos[attr.format];
      attributes.push(attr);
      vertCount = Math.max(vertCount, Math.floor(geometry.uvs.length / _info2.count));
      channels.push({
        offset: stride,
        data: geometry.uvs,
        attribute: attr
      });
      stride += _info2.size;
    }
    if (geometry.tangents && geometry.tangents.length > 0) {
      attr = null;
      if (geometry.attributes) {
        for (var _iterator4 = _createForOfIteratorHelperLoose(geometry.attributes), _step4; !(_step4 = _iterator4()).done;) {
          var _att3 = _step4.value;
          if (_att3.name === AttributeName.ATTR_TANGENT) {
            attr = _att3;
            break;
          }
        }
      }
      if (!attr) {
        attr = _defAttrs[3];
      }
      var _info3 = FormatInfos[attr.format];
      attributes.push(attr);
      vertCount = Math.max(vertCount, Math.floor(geometry.tangents.length / _info3.count));
      channels.push({
        offset: stride,
        data: geometry.tangents,
        attribute: attr
      });
      stride += _info3.size;
    }
    if (geometry.colors && geometry.colors.length > 0) {
      attr = null;
      if (geometry.attributes) {
        for (var _iterator5 = _createForOfIteratorHelperLoose(geometry.attributes), _step5; !(_step5 = _iterator5()).done;) {
          var _att4 = _step5.value;
          if (_att4.name === AttributeName.ATTR_COLOR) {
            attr = _att4;
            break;
          }
        }
      }
      if (!attr) {
        attr = _defAttrs[4];
      }
      var _info4 = FormatInfos[attr.format];
      attributes.push(attr);
      vertCount = Math.max(vertCount, Math.floor(geometry.colors.length / _info4.count));
      channels.push({
        offset: stride,
        data: geometry.colors,
        attribute: attr
      });
      stride += _info4.size;
    }
    if (geometry.customAttributes) {
      for (var k = 0; k < geometry.customAttributes.length; k++) {
        var ca = geometry.customAttributes[k];
        var _info5 = FormatInfos[ca.attr.format];
        attributes.push(ca.attr);
        vertCount = Math.max(vertCount, Math.floor(ca.values.length / _info5.count));
        channels.push({
          offset: stride,
          data: ca.values,
          attribute: ca.attr
        });
        stride += _info5.size;
      }
    }

    // Use this to generate final merged buffer.
    var bufferBlob = new BufferBlob();

    // Fill vertex buffer.
    var vertexBuffer = new ArrayBuffer(vertCount * stride);
    var vertexBufferView = new DataView(vertexBuffer);
    for (var _i = 0, _channels = channels; _i < _channels.length; _i++) {
      var channel = _channels[_i];
      writeBuffer(vertexBufferView, channel.data, channel.attribute.format, channel.offset, stride);
    }
    bufferBlob.setNextAlignment(0);
    var vertexBundle = {
      attributes: attributes,
      view: {
        offset: bufferBlob.getLength(),
        length: vertexBuffer.byteLength,
        count: vertCount,
        stride: stride
      }
    };
    bufferBlob.addBuffer(vertexBuffer);

    // Fill index buffer.
    var indexBuffer = null;
    var idxCount = 0;
    var idxStride = 2;
    if (geometry.indices) {
      var indices = geometry.indices;
      idxCount = indices.length;
      indexBuffer = new ArrayBuffer(idxStride * idxCount);
      var indexBufferView = new DataView(indexBuffer);
      writeBuffer(indexBufferView, indices, Format.R16UI);
    }

    // Create primitive.
    var primitive = {
      primitiveMode: geometry.primitiveMode || PrimitiveMode.TRIANGLE_LIST,
      vertexBundelIndices: [0]
    };
    if (indexBuffer) {
      bufferBlob.setNextAlignment(idxStride);
      primitive.indexView = {
        offset: bufferBlob.getLength(),
        length: indexBuffer.byteLength,
        count: idxCount,
        stride: idxStride
      };
      bufferBlob.addBuffer(indexBuffer);
    }
    var minPosition = geometry.minPos;
    if (!minPosition && options.calculateBounds) {
      minPosition = Vec3.set(new Vec3(), Infinity, Infinity, Infinity);
      for (var iVertex = 0; iVertex < vertCount; ++iVertex) {
        Vec3.set(v3_1, positions[iVertex * 3 + 0], positions[iVertex * 3 + 1], positions[iVertex * 3 + 2]);
        Vec3.min(minPosition, minPosition, v3_1);
      }
    }
    var maxPosition = geometry.maxPos;
    if (!maxPosition && options.calculateBounds) {
      maxPosition = Vec3.set(new Vec3(), -Infinity, -Infinity, -Infinity);
      for (var _iVertex = 0; _iVertex < vertCount; ++_iVertex) {
        Vec3.set(v3_1, positions[_iVertex * 3 + 0], positions[_iVertex * 3 + 1], positions[_iVertex * 3 + 2]);
        Vec3.max(maxPosition, maxPosition, v3_1);
      }
    }

    // Create mesh struct.
    var meshStruct = {
      vertexBundles: [vertexBundle],
      primitives: [primitive]
    };
    if (minPosition) {
      meshStruct.minPosition = new Vec3(minPosition.x, minPosition.y, minPosition.z);
    }
    if (maxPosition) {
      meshStruct.maxPosition = new Vec3(maxPosition.x, maxPosition.y, maxPosition.z);
    }

    // Create mesh.
    if (!out) {
      out = new Mesh();
    }
    out.reset({
      struct: meshStruct,
      data: new Uint8Array(bufferBlob.getCombined())
    });
    return out;
  }
  function getPadding(length, align) {
    if (align > 0) {
      var remainder = length % align;
      if (remainder !== 0) {
        var padding = align - remainder;
        return padding;
      }
    }
    return 0;
  }
  function _createDynamicMesh(primitiveIndex, geometry, out, options) {
    options = options || {
      maxSubMeshes: 1,
      maxSubMeshVertices: 1024,
      maxSubMeshIndices: 1024
    };
    var attributes = [];
    var stream = 0;
    if (geometry.positions.length > 0) {
      attributes.push(new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F, false, stream++, false, 0));
    }
    if (geometry.normals && geometry.normals.length > 0) {
      attributes.push(new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F, false, stream++, false, 0));
    }
    if (geometry.uvs && geometry.uvs.length > 0) {
      attributes.push(new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F, false, stream++, false, 0));
    }
    if (geometry.tangents && geometry.tangents.length > 0) {
      attributes.push(new Attribute(AttributeName.ATTR_TANGENT, Format.RGBA32F, false, stream++, false, 0));
    }
    if (geometry.colors && geometry.colors.length > 0) {
      attributes.push(new Attribute(AttributeName.ATTR_COLOR, Format.RGBA32F, false, stream++, false, 0));
    }
    if (geometry.customAttributes) {
      for (var k = 0; k < geometry.customAttributes.length; k++) {
        var ca = geometry.customAttributes[k];
        var attr = new Attribute();
        attr.copy(ca.attr);
        attr.stream = stream++;
        attributes.push(attr);
      }
    }
    var vertexBundles = [];
    var primitives = [];
    var dataSize = 0;
    for (var i = 0; i < options.maxSubMeshes; i++) {
      var primitive = {
        vertexBundelIndices: [],
        primitiveMode: geometry.primitiveMode || PrimitiveMode.TRIANGLE_LIST
      };

      // add vertex buffers
      for (var _iterator6 = _createForOfIteratorHelperLoose(attributes), _step6; !(_step6 = _iterator6()).done;) {
        var _attr = _step6.value;
        var formatInfo = FormatInfos[_attr.format];
        var vertexBufferSize = options.maxSubMeshVertices * formatInfo.size;
        var vertexView = {
          offset: dataSize,
          length: vertexBufferSize,
          count: 0,
          stride: formatInfo.size
        };
        var vertexBundle = {
          view: vertexView,
          attributes: [_attr]
        };
        var vertexBundleIndex = vertexBundles.length;
        primitive.vertexBundelIndices.push(vertexBundleIndex);
        vertexBundles.push(vertexBundle);
        dataSize += vertexBufferSize;
      }

      // add index buffer
      var stride = 0;
      if (geometry.indices16 && geometry.indices16.length > 0) {
        stride = 2;
      } else if (geometry.indices32 && geometry.indices32.length > 0) {
        stride = 4;
      }
      if (stride > 0) {
        dataSize += getPadding(dataSize, stride);
        var indexBufferSize = options.maxSubMeshIndices * stride;
        var indexView = {
          offset: dataSize,
          length: indexBufferSize,
          count: 0,
          stride: stride
        };
        primitive.indexView = indexView;
        dataSize += indexBufferSize;
      }
      primitives.push(primitive);
    }
    var dynamicInfo = {
      maxSubMeshes: options.maxSubMeshes,
      maxSubMeshVertices: options.maxSubMeshVertices,
      maxSubMeshIndices: options.maxSubMeshIndices
    };
    var dynamicStruct = {
      info: dynamicInfo,
      bounds: []
    };
    dynamicStruct.bounds.length = options.maxSubMeshes;
    var meshStruct = {
      vertexBundles: vertexBundles,
      primitives: primitives,
      dynamic: dynamicStruct
    };
    var createInfo = {
      struct: meshStruct,
      data: new Uint8Array(dataSize)
    };
    if (!out) {
      out = new Mesh();
    }
    out.reset(createInfo);
    out.initialize();
    out.updateSubMesh(primitiveIndex, geometry);
    return out;
  }

  /**
   * @en mesh utility class, use to create mesh.
   * @zh 网格工具类，用于创建网格。
   */
  _export("createMesh", _createMesh);
  return {
    setters: [function (_assetsMeshJs) {
      Mesh = _assetsMeshJs.Mesh;
      _decodeMesh = _assetsMeshJs.decodeMesh;
      _inflateMesh = _assetsMeshJs.inflateMesh;
    }, function (_gfxIndexJs) {
      AttributeName = _gfxIndexJs.AttributeName;
      Format = _gfxIndexJs.Format;
      FormatInfos = _gfxIndexJs.FormatInfos;
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
      Attribute = _gfxIndexJs.Attribute;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_bufferJs) {
      writeBuffer = _bufferJs.writeBuffer;
    }, function (_bufferBlobJs) {
      BufferBlob = _bufferBlobJs.BufferBlob;
    }],
    execute: function () {
      _defAttrs = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F), new Attribute(AttributeName.ATTR_TANGENT, Format.RGBA32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA32F)];
      v3_1 = new Vec3();
      _export("MeshUtils", MeshUtils = /*#__PURE__*/function () {
        function MeshUtils() {}
        /**
         * @en create a static mesh.
         * @zh 创建一个静态网格。
         * @param geometry @en geometry data use for creating @zh 用于创建的几何数据
         * @param out @en output static mesh @zh 输出的静态网格
         * @param options @en options of creating @zh 创建选项
         * @return @en The created static mesh, which is same as out @zh 新创建的静态网格，同 out 参数
         */
        MeshUtils.createMesh = function createMesh(geometry, out, options) {
          return _createMesh(geometry, out, options);
        }

        /**
         * @en create a dynamic mesh.
         * @zh 创建一个动态网格。
         * @param primitiveIndex @en sub mesh index @zh 子网格索引
         * @param geometry @en geometry data use for creating @zh 用于创建的几何数据
         * @param out @en output dynamic mesh @zh 输出的动态网格
         * @param options @en options of creating @zh 创建选项
         * @return @en The created dynamic mesh, which is same as out @zh 新创建的动态网格，同 out 参数
         */;
        MeshUtils.createDynamicMesh = function createDynamicMesh(primitiveIndex, geometry, out, options) {
          return _createDynamicMesh(primitiveIndex, geometry, out, options);
        }

        /**
         * @en decode a mesh.
         *
         * @engineInternal
         */;
        MeshUtils.decodeMesh = function decodeMesh(mesh) {
          return _decodeMesh(mesh);
        }

        /**
         * @en inflate a mesh.
         *
         * @engineInternal
         */;
        MeshUtils.inflateMesh = function inflateMesh(mesh) {
          return _inflateMesh(mesh);
        };
        return MeshUtils;
      }());
    }
  };
});