System.register("q-bundled:///fs/cocos/3d/assets/mesh.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../asset/assets/asset.js", "../misc/buffer-blob.js", "../../core/index.js", "../../asset/assets/index.js", "../../gfx/index.js", "./morph-rendering.js", "../misc/mesh-codec.js", "../../../external/compression/zlib.min.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, EDITOR, Asset, BufferBlob, geometry, cclegacy, sys, warnID, Quat, Vec3, assertIsTrue, murmurhash2_32_gc, errorID, halfToFloat, RenderingSubMesh, Attribute, BufferInfo, AttributeName, BufferUsageBit, Feature, Format, FormatInfos, FormatType, MemoryUsageBit, getTypedArrayConstructor, DrawInfo, deviceManager, FormatFeatureBit, createMorphRendering, MeshoptDecoder, zlib, _dec, _class, _class2, _initializer, _initializer2, _initializer3, v3_1, v3_2, globalEmptyMeshBuffer, Mesh, isLittleEndian;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function getIndexStrideCtor(stride) {
    switch (stride) {
      case 1:
        return Uint8Array;
      case 2:
        return Uint16Array;
      case 4:
        return Uint32Array;
      default:
        return Uint8Array;
    }
  }
  function getOffset(attributes, attributeIndex) {
    var result = 0;
    for (var i = 0; i < attributeIndex; ++i) {
      var attribute = attributes[i];
      result += FormatInfos[attribute.format].size;
    }
    return result;
  }
  function getComponentByteLength(format) {
    var info = FormatInfos[format];
    return info.size / info.count;
  }
  function getReader(dataView, format) {
    var info = FormatInfos[format];
    var stride = info.size / info.count;
    switch (info.type) {
      case FormatType.UNORM:
        {
          switch (stride) {
            case 1:
              return function (offset) {
                return dataView.getUint8(offset);
              };
            case 2:
              return function (offset) {
                return dataView.getUint16(offset, isLittleEndian);
              };
            case 4:
              return function (offset) {
                return dataView.getUint32(offset, isLittleEndian);
              };
            default:
          }
          break;
        }
      case FormatType.SNORM:
        {
          switch (stride) {
            case 1:
              return function (offset) {
                return dataView.getInt8(offset);
              };
            case 2:
              return function (offset) {
                return dataView.getInt16(offset, isLittleEndian);
              };
            case 4:
              return function (offset) {
                return dataView.getInt32(offset, isLittleEndian);
              };
            default:
          }
          break;
        }
      case FormatType.INT:
        {
          switch (stride) {
            case 1:
              return function (offset) {
                return dataView.getInt8(offset);
              };
            case 2:
              return function (offset) {
                return dataView.getInt16(offset, isLittleEndian);
              };
            case 4:
              return function (offset) {
                return dataView.getInt32(offset, isLittleEndian);
              };
            default:
          }
          break;
        }
      case FormatType.UINT:
        {
          switch (stride) {
            case 1:
              return function (offset) {
                return dataView.getUint8(offset);
              };
            case 2:
              return function (offset) {
                return dataView.getUint16(offset, isLittleEndian);
              };
            case 4:
              return function (offset) {
                return dataView.getUint32(offset, isLittleEndian);
              };
            default:
          }
          break;
        }
      case FormatType.FLOAT:
        {
          switch (stride) {
            case 2:
              return function (offset) {
                return dataView.getUint16(offset, isLittleEndian);
              };
            case 4:
              return function (offset) {
                return dataView.getFloat32(offset, isLittleEndian);
              };
            default:
          }
          break;
        }
      default:
    }
    return null;
  }
  function getWriter(dataView, format) {
    var info = FormatInfos[format];
    var stride = info.size / info.count;
    switch (info.type) {
      case FormatType.UNORM:
        {
          switch (stride) {
            case 1:
              return function (offset, value) {
                return dataView.setUint8(offset, value);
              };
            case 2:
              return function (offset, value) {
                return dataView.setUint16(offset, value, isLittleEndian);
              };
            case 4:
              return function (offset, value) {
                return dataView.setUint32(offset, value, isLittleEndian);
              };
            default:
          }
          break;
        }
      case FormatType.SNORM:
        {
          switch (stride) {
            case 1:
              return function (offset, value) {
                return dataView.setInt8(offset, value);
              };
            case 2:
              return function (offset, value) {
                return dataView.setInt16(offset, value, isLittleEndian);
              };
            case 4:
              return function (offset, value) {
                return dataView.setInt32(offset, value, isLittleEndian);
              };
            default:
          }
          break;
        }
      case FormatType.INT:
        {
          switch (stride) {
            case 1:
              return function (offset, value) {
                return dataView.setInt8(offset, value);
              };
            case 2:
              return function (offset, value) {
                return dataView.setInt16(offset, value, isLittleEndian);
              };
            case 4:
              return function (offset, value) {
                return dataView.setInt32(offset, value, isLittleEndian);
              };
            default:
          }
          break;
        }
      case FormatType.UINT:
        {
          switch (stride) {
            case 1:
              return function (offset, value) {
                return dataView.setUint8(offset, value);
              };
            case 2:
              return function (offset, value) {
                return dataView.setUint16(offset, value, isLittleEndian);
              };
            case 4:
              return function (offset, value) {
                return dataView.setUint32(offset, value, isLittleEndian);
              };
            default:
          }
          break;
        }
      case FormatType.FLOAT:
        {
          switch (stride) {
            case 2:
              return function (offset, value) {
                return dataView.setUint16(offset, value, isLittleEndian);
              };
            case 4:
              return function (offset, value) {
                return dataView.setFloat32(offset, value, isLittleEndian);
              };
            default:
          }
          break;
        }
      default:
    }
    return null;
  }
  function decodeMesh(mesh) {
    if (!mesh.struct.encoded) {
      // the mesh is not encoded, so no need to decode
      return mesh;
    }
    var res_checker = function res_checker(res) {
      if (res < 0) {
        errorID(14204, res);
      }
    };
    var struct = JSON.parse(JSON.stringify(mesh.struct));
    var bufferBlob = new BufferBlob();
    bufferBlob.setNextAlignment(0);
    for (var _iterator7 = _createForOfIteratorHelperLoose(struct.vertexBundles), _step7; !(_step7 = _iterator7()).done;) {
      var bundle = _step7.value;
      var view = bundle.view;
      var bound = view.count * view.stride;
      var buffer = new Uint8Array(bound);
      var vertex = new Uint8Array(mesh.data.buffer, view.offset, view.length);
      var res = MeshoptDecoder.decodeVertexBuffer(buffer, view.count, view.stride, vertex);
      res_checker(res);
      bufferBlob.setNextAlignment(view.stride);
      var newView = {
        offset: bufferBlob.getLength(),
        length: buffer.byteLength,
        count: view.count,
        stride: view.stride
      };
      bundle.view = newView;
      bufferBlob.addBuffer(buffer);
    }
    for (var _iterator8 = _createForOfIteratorHelperLoose(struct.primitives), _step8; !(_step8 = _iterator8()).done;) {
      var primitive = _step8.value;
      if (primitive.indexView === undefined) {
        continue;
      }
      var _view = primitive.indexView;
      var _bound = _view.count * _view.stride;
      var _buffer = new Uint8Array(_bound);
      var index = new Uint8Array(mesh.data.buffer, _view.offset, _view.length);
      var _res = MeshoptDecoder.decodeIndexBuffer(_buffer, _view.count, _view.stride, index);
      res_checker(_res);
      bufferBlob.setNextAlignment(_view.stride);
      var _newView = {
        offset: bufferBlob.getLength(),
        length: _buffer.byteLength,
        count: _view.count,
        stride: _view.stride
      };
      primitive.indexView = _newView;
      bufferBlob.addBuffer(_buffer);
    }
    var data = new Uint8Array(bufferBlob.getCombined());
    return {
      struct: struct,
      data: data
    };
  }
  function inflateMesh(mesh) {
    var inflator = new zlib.Inflate(mesh.data);
    var decompressed = inflator.decompress();
    mesh.data = decompressed;
    mesh.struct.compressed = false;
    return mesh;
  }
  function dequantizeMesh(mesh) {
    var struct = JSON.parse(JSON.stringify(mesh.struct));
    var bufferBlob = new BufferBlob();
    bufferBlob.setNextAlignment(0);
    function transformVertex(reader, writer, count, components, componentSize, readerStride, writerStride) {
      for (var i = 0; i < count; i++) {
        for (var j = 0; j < components; j++) {
          var inputOffset = readerStride * i + componentSize * j;
          var outputOffset = writerStride * i + componentSize * j;
          writer(outputOffset, reader(inputOffset));
        }
      }
    }
    function dequantizeHalf(reader, writer, count, components, readerStride, writerStride) {
      for (var i = 0; i < count; i++) {
        for (var j = 0; j < components; j++) {
          var inputOffset = readerStride * i + 2 * j;
          var outputOffset = writerStride * i + 4 * j;
          var _value = halfToFloat(reader(inputOffset));
          writer(outputOffset, _value);
        }
      }
    }
    for (var i = 0; i < struct.vertexBundles.length; ++i) {
      var bundle = struct.vertexBundles[i];
      var view = bundle.view;
      var attributes = bundle.attributes;
      var oldAttributes = mesh.struct.vertexBundles[i].attributes;
      var strides = [];
      var dequantizes = [];
      var readers = [];
      for (var j = 0; j < attributes.length; ++j) {
        var attr = attributes[j];
        var inputView = new DataView(mesh.data.buffer, view.offset + getOffset(oldAttributes, j));
        var reader = getReader(inputView, attr.format);
        var dequantize = true;
        switch (attr.format) {
          case Format.R16F:
            attr.format = Format.R32F;
            break;
          case Format.RG16F:
            attr.format = Format.RG32F;
            break;
          case Format.RGB16F:
            attr.format = Format.RGB32F;
            break;
          case Format.RGBA16F:
            attr.format = Format.RGBA32F;
            break;
          default:
            dequantize = false;
            break;
        }
        strides.push(FormatInfos[attr.format].size);
        dequantizes.push(dequantize);
        readers.push(reader);
      }
      var netStride = strides.reduce(function (acc, cur) {
        return acc + cur;
      }, 0);
      var newBuffer = new Uint8Array(netStride * view.count);
      for (var _j2 = 0; _j2 < attributes.length; ++_j2) {
        var attribute = attributes[_j2];
        var _reader = readers[_j2];
        var outputView = new DataView(newBuffer.buffer, getOffset(attributes, _j2));
        var writer = getWriter(outputView, attribute.format);
        var _dequantize = dequantizes[_j2];
        var formatInfo = FormatInfos[attribute.format];
        if (_dequantize) {
          dequantizeHalf(_reader, writer, view.count, formatInfo.count, view.stride, netStride);
        } else {
          transformVertex(_reader, writer, view.count, formatInfo.count, formatInfo.size / formatInfo.count, view.stride, netStride);
        }
      }
      bufferBlob.setNextAlignment(netStride);
      var newView = {
        offset: bufferBlob.getLength(),
        length: newBuffer.byteLength,
        count: view.count,
        stride: netStride
      };
      bundle.view = newView;
      bufferBlob.addBuffer(newBuffer);
    }

    // dump index buffer
    for (var _iterator9 = _createForOfIteratorHelperLoose(struct.primitives), _step9; !(_step9 = _iterator9()).done;) {
      var primitive = _step9.value;
      if (primitive.indexView === undefined) {
        continue;
      }
      var _view2 = primitive.indexView;
      var buffer = new Uint8Array(mesh.data.buffer, _view2.offset, _view2.length);
      bufferBlob.setNextAlignment(_view2.stride);
      var _newView2 = {
        offset: bufferBlob.getLength(),
        length: buffer.byteLength,
        count: _view2.count,
        stride: _view2.stride
      };
      primitive.indexView = _newView2;
      bufferBlob.addBuffer(buffer);
    }
    var data = new Uint8Array(bufferBlob.getCombined());
    struct.quantized = false;
    return {
      struct: struct,
      data: data
    };
  }

  // function get
  _export({
    decodeMesh: decodeMesh,
    inflateMesh: inflateMesh,
    dequantizeMesh: dequantizeMesh
  });
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_miscBufferBlobJs) {
      BufferBlob = _miscBufferBlobJs.BufferBlob;
    }, function (_coreIndexJs) {
      geometry = _coreIndexJs.geometry;
      cclegacy = _coreIndexJs.cclegacy;
      sys = _coreIndexJs.sys;
      warnID = _coreIndexJs.warnID;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      murmurhash2_32_gc = _coreIndexJs.murmurhash2_32_gc;
      errorID = _coreIndexJs.errorID;
      halfToFloat = _coreIndexJs.halfToFloat;
    }, function (_assetAssetsIndexJs) {
      RenderingSubMesh = _assetAssetsIndexJs.RenderingSubMesh;
    }, function (_gfxIndexJs) {
      Attribute = _gfxIndexJs.Attribute;
      BufferInfo = _gfxIndexJs.BufferInfo;
      AttributeName = _gfxIndexJs.AttributeName;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      Feature = _gfxIndexJs.Feature;
      Format = _gfxIndexJs.Format;
      FormatInfos = _gfxIndexJs.FormatInfos;
      FormatType = _gfxIndexJs.FormatType;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      getTypedArrayConstructor = _gfxIndexJs.getTypedArrayConstructor;
      DrawInfo = _gfxIndexJs.DrawInfo;
      deviceManager = _gfxIndexJs.deviceManager;
      FormatFeatureBit = _gfxIndexJs.FormatFeatureBit;
    }, function (_morphRenderingJs) {
      createMorphRendering = _morphRenderingJs.createMorphRendering;
    }, function (_miscMeshCodecJs) {
      MeshoptDecoder = _miscMeshCodecJs.MeshoptDecoder;
    }, function (_externalCompressionZlibMinJs) {
      zlib = _externalCompressionZlibMinJs.default;
    }],
    execute: function () {
      v3_1 = new Vec3();
      v3_2 = new Vec3();
      globalEmptyMeshBuffer = new Uint8Array();
      /**
       * @en A representation of a mesh asset
       * A mesh can contain multiple sub-mesh resources. The mesh mainly provides data such as vertices and indices for model instances.
       * @zh 代表一个网格资源
       * 一个网格可包含多个子网格资源，网格主要为模型实例提供顶点，索引等数据
       */
      _export("Mesh", Mesh = (_dec = ccclass('cc.Mesh'), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(Mesh, _Asset);
        function Mesh() {
          var _this;
          _this = _Asset.call(this) || this;
          /**
           * @en morph rendering data
           * @zh 变形渲染数据
           */
          _this.morphRendering = null;
          _this._struct = _initializer && _initializer();
          _this._hash = _initializer2 && _initializer2();
          _this._data = globalEmptyMeshBuffer;
          _this._initialized = false;
          _this._allowDataAccess = _initializer3 && _initializer3();
          _this._isMeshDataUploaded = false;
          _this._renderingSubMeshes = null;
          _this._boneSpaceBounds = new Map();
          _this._jointBufferIndices = null;
          return _this;
        }

        /**
         * @en complete loading callback
         * @zh 加载完成回调
         */
        var _proto = Mesh.prototype;
        _proto.onLoaded = function onLoaded() {
          this.initialize();
        }

        /**
         * @en mesh init
         * @zh 网格初始化函数
         */;
        _proto.initialize = function initialize() {
          if (this._initialized) {
            return;
          }
          this._initialized = true;
          var info = {
            struct: this.struct,
            data: this.data
          };
          if (info.struct.compressed) {
            // decompress mesh data
            info = inflateMesh(info);
          }
          if (this.struct.encoded) {
            // decode mesh data
            info = decodeMesh(info);
          }
          if (this.struct.quantized && !(deviceManager.gfxDevice.getFormatFeatures(Format.RGB16F) & FormatFeatureBit.VERTEX_ATTRIBUTE)) {
            // dequantize mesh data
            info = dequantizeMesh(info);
          }
          this._struct = info.struct;
          this._data = info.data;
          if (this._struct.dynamic) {
            var device = deviceManager.gfxDevice;
            var vertexBuffers = [];
            var subMeshes = [];
            for (var i = 0; i < this._struct.vertexBundles.length; i++) {
              var _vertexBundle = this._struct.vertexBundles[i];
              var vertexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, _vertexBundle.view.length, _vertexBundle.view.stride));
              vertexBuffers.push(vertexBuffer);
            }
            for (var _i = 0; _i < this._struct.primitives.length; _i++) {
              var primitive = this._struct.primitives[_i];
              var indexView = primitive.indexView;
              var indexBuffer = null;
              if (indexView) {
                indexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, indexView.length, indexView.stride));
              }
              var subVBs = [];
              for (var k = 0; k < primitive.vertexBundelIndices.length; k++) {
                var idx = primitive.vertexBundelIndices[k];
                subVBs.push(vertexBuffers[idx]);
              }
              var attributes = [];
              for (var _k = 0; _k < primitive.vertexBundelIndices.length; _k++) {
                var _idx = primitive.vertexBundelIndices[_k];
                var _vertexBundle2 = this._struct.vertexBundles[_idx];
                for (var _iterator = _createForOfIteratorHelperLoose(_vertexBundle2.attributes), _step; !(_step = _iterator()).done;) {
                  var attr = _step.value;
                  var attribute = new Attribute();
                  attribute.copy(attr);
                  attributes.push(attribute);
                }
              }
              var subMesh = new RenderingSubMesh(subVBs, attributes, primitive.primitiveMode, indexBuffer);
              subMesh.drawInfo = new DrawInfo();
              subMesh.mesh = this;
              subMesh.subMeshIdx = _i;
              subMeshes.push(subMesh);
            }
            this._renderingSubMeshes = subMeshes;
          } else {
            var buffer = this._data.buffer;
            var gfxDevice = deviceManager.gfxDevice;
            var _vertexBuffers = this._createVertexBuffers(gfxDevice, buffer);
            var indexBuffers = [];
            var _subMeshes = [];
            for (var _i2 = 0; _i2 < this._struct.primitives.length; _i2++) {
              var prim = this._struct.primitives[_i2];
              if (prim.vertexBundelIndices.length === 0) {
                continue;
              }
              var _indexBuffer = null;
              var ib = void 0;
              if (prim.indexView) {
                var idxView = prim.indexView;
                var dstStride = idxView.stride;
                var dstSize = idxView.length;
                if (dstStride === 4 && !gfxDevice.hasFeature(Feature.ELEMENT_INDEX_UINT)) {
                  var vertexCount = this._struct.vertexBundles[prim.vertexBundelIndices[0]].view.count;
                  if (vertexCount >= 65536) {
                    warnID(10001, vertexCount, 65536);
                    continue; // Ignore this primitive
                  } else {
                    dstStride >>= 1; // Reduce to short.
                    dstSize >>= 1;
                  }
                }
                _indexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.INDEX, MemoryUsageBit.DEVICE, dstSize, dstStride));
                indexBuffers.push(_indexBuffer);
                ib = new (getIndexStrideCtor(idxView.stride))(buffer, idxView.offset, idxView.count);
                if (idxView.stride !== dstStride) {
                  ib = getIndexStrideCtor(dstStride).from(ib);
                }
                _indexBuffer.update(ib);
              }
              var vbReference = prim.vertexBundelIndices.map(function (idx) {
                return _vertexBuffers[idx];
              });
              var gfxAttributes = [];
              if (prim.vertexBundelIndices.length > 0) {
                var _idx2 = prim.vertexBundelIndices[0];
                var _vertexBundle3 = this._struct.vertexBundles[_idx2];
                var attrs = _vertexBundle3.attributes;
                for (var j = 0; j < attrs.length; ++j) {
                  var _attr = attrs[j];
                  gfxAttributes[j] = new Attribute(_attr.name, _attr.format, _attr.isNormalized, _attr.stream, _attr.isInstanced, _attr.location);
                }
              }
              var _subMesh = new RenderingSubMesh(vbReference, gfxAttributes, prim.primitiveMode, _indexBuffer);
              _subMesh.mesh = this;
              _subMesh.subMeshIdx = _i2;
              _subMeshes.push(_subMesh);
            }
            this._renderingSubMeshes = _subMeshes;
            if (this._struct.morph) {
              this.morphRendering = createMorphRendering(this, gfxDevice);
            }
            this._isMeshDataUploaded = true;
            if (!this._allowDataAccess && !EDITOR) {
              this.releaseData();
            }
          }
        }

        /**
         * @en update dynamic sub mesh geometry
         * @zh 更新动态子网格的几何数据
         * @param primitiveIndex @en sub mesh index @zh 子网格索引
         * @param dynamicGeometry @en sub mesh geometry data @zh 子网格几何数据
         */;
        _proto.updateSubMesh = function updateSubMesh(primitiveIndex, dynamicGeometry) {
          if (!this._struct.dynamic) {
            warnID(14200);
            return;
          }
          if (primitiveIndex >= this._struct.primitives.length) {
            warnID(14201);
            return;
          }
          var buffers = [];
          if (dynamicGeometry.positions.length > 0) {
            buffers.push(dynamicGeometry.positions);
          }
          if (dynamicGeometry.normals && dynamicGeometry.normals.length > 0) {
            buffers.push(dynamicGeometry.normals);
          }
          if (dynamicGeometry.uvs && dynamicGeometry.uvs.length > 0) {
            buffers.push(dynamicGeometry.uvs);
          }
          if (dynamicGeometry.tangents && dynamicGeometry.tangents.length > 0) {
            buffers.push(dynamicGeometry.tangents);
          }
          if (dynamicGeometry.colors && dynamicGeometry.colors.length > 0) {
            buffers.push(dynamicGeometry.colors);
          }
          if (dynamicGeometry.customAttributes) {
            for (var k = 0; k < dynamicGeometry.customAttributes.length; k++) {
              buffers.push(dynamicGeometry.customAttributes[k].values);
            }
          }
          var dynamic = this._struct.dynamic;
          var info = dynamic.info;
          var primitive = this._struct.primitives[primitiveIndex];
          var subMesh = this._renderingSubMeshes[primitiveIndex];
          var drawInfo = subMesh.drawInfo;

          // update _data & buffer
          for (var index = 0; index < buffers.length; index++) {
            var vertices = buffers[index];
            var bundle = this._struct.vertexBundles[primitive.vertexBundelIndices[index]];
            var stride = bundle.view.stride;
            var vertexCount = vertices.byteLength / stride;
            var updateSize = vertices.byteLength;
            var dstBuffer = new Uint8Array(this._data.buffer, bundle.view.offset, updateSize);
            var srcBuffer = new Uint8Array(vertices.buffer, vertices.byteOffset, updateSize);
            var vertexBuffer = subMesh.vertexBuffers[index];
            assertIsTrue(vertexCount <= info.maxSubMeshVertices, 'Too many vertices.');
            if (updateSize > 0) {
              dstBuffer.set(srcBuffer);
              vertexBuffer.update(srcBuffer, updateSize);
            }
            bundle.view.count = vertexCount;
            drawInfo.vertexCount = vertexCount;
          }
          if (primitive.indexView) {
            var indexView = primitive.indexView;
            var _stride = indexView.stride;
            var indexCount = _stride === 2 ? dynamicGeometry.indices16.length : dynamicGeometry.indices32.length;
            var _updateSize = indexCount * _stride;
            var _dstBuffer = new Uint8Array(this._data.buffer, indexView.offset, _updateSize);
            var _srcBuffer = _stride === 2 ? new Uint8Array(dynamicGeometry.indices16.buffer, dynamicGeometry.indices16.byteOffset, _updateSize) : new Uint8Array(dynamicGeometry.indices32.buffer, dynamicGeometry.indices32.byteOffset, _updateSize);
            var indexBuffer = subMesh.indexBuffer;
            assertIsTrue(indexCount <= info.maxSubMeshIndices, 'Too many indices.');
            if (_updateSize > 0) {
              _dstBuffer.set(_srcBuffer);
              indexBuffer.update(_srcBuffer, _updateSize);
            }
            indexView.count = indexCount;
            drawInfo.indexCount = indexCount;
          }

          // update bound
          if (dynamicGeometry.minPos && dynamicGeometry.maxPos) {
            var minPos = new Vec3(dynamicGeometry.minPos.x, dynamicGeometry.minPos.y, dynamicGeometry.minPos.z);
            var maxPos = new Vec3(dynamicGeometry.maxPos.x, dynamicGeometry.maxPos.y, dynamicGeometry.maxPos.z);
            if (!dynamic.bounds[primitiveIndex]) {
              dynamic.bounds[primitiveIndex] = new geometry.AABB();
            }
            geometry.AABB.fromPoints(dynamic.bounds[primitiveIndex], minPos, maxPos);
            var subMin = new Vec3();
            var subMax = new Vec3();
            for (var _iterator2 = _createForOfIteratorHelperLoose(dynamic.bounds), _step2; !(_step2 = _iterator2()).done;) {
              var bound = _step2.value;
              if (bound) {
                bound.getBoundary(subMin, subMax);
                Vec3.min(minPos, subMin, minPos);
                Vec3.max(maxPos, subMax, maxPos);
              }
            }
            this._struct.minPosition = new Vec3(minPos.x, minPos.y, minPos.z);
            this._struct.maxPosition = new Vec3(maxPos.x, maxPos.y, maxPos.z);
          }
          subMesh.invalidateGeometricInfo();
        }

        /**
         * @en Destroy the mesh and release all related GPU resources
         * @zh 销毁此网格，并释放它占有的所有 GPU 资源。
         */;
        _proto.destroy = function destroy() {
          this.destroyRenderingMesh();
          return _Asset.prototype.destroy.call(this);
        }

        /**
         * @en Release all related GPU resources
         * @zh 释放此网格占有的所有 GPU 资源。
         */;
        _proto.destroyRenderingMesh = function destroyRenderingMesh() {
          if (this._renderingSubMeshes) {
            for (var i = 0; i < this._renderingSubMeshes.length; i++) {
              this._renderingSubMeshes[i].destroy();
            }
            this._renderingSubMeshes = null;
            this._initialized = false;
            this._isMeshDataUploaded = false;
          }
        }

        /**
         * @en Reset the struct and data of the mesh
         * @zh 重置此网格的结构和数据。
         * @param struct @en The new struct @zh 新结构
         * @param data @en The new data @zh 新数据
         * @deprecated Will be removed in v3.0.0, please use [[reset]] instead
         */;
        _proto.assign = function assign(struct, data) {
          this.reset({
            struct: struct,
            data: data
          });
        }

        /**
         * @en Reset the mesh with mesh creation information
         * @zh 重置此网格。
         * @param info @en Mesh creation information including struct and data @zh 网格创建信息，包含结构及数据
         */;
        _proto.reset = function reset(info) {
          this.destroyRenderingMesh();
          this._struct = info.struct;
          this._data = info.data;
          this._hash = 0;
        }

        /**
         * @en Get [[geometry.AABB]] bounds in the skeleton's bone space
         * @zh 获取骨骼变换空间内下的 [[geometry.AABB]] 包围盒
         * @param skeleton @en skeleton data @zh 骨骼信息
         * @param skeleton @en skeleton data @zh 骨骼信息
         */;
        _proto.getBoneSpaceBounds = function getBoneSpaceBounds(skeleton) {
          if (this._boneSpaceBounds.has(skeleton.hash)) {
            return this._boneSpaceBounds.get(skeleton.hash);
          }
          var bounds = [];
          this._boneSpaceBounds.set(skeleton.hash, bounds);
          var valid = [];
          var bindposes = skeleton.bindposes;
          for (var i = 0; i < bindposes.length; i++) {
            bounds.push(new geometry.AABB(Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity));
            valid.push(false);
          }
          var primitives = this._struct.primitives;
          for (var p = 0; p < primitives.length; p++) {
            var joints = this.readAttribute(p, AttributeName.ATTR_JOINTS);
            var weights = this.readAttribute(p, AttributeName.ATTR_WEIGHTS);
            var positions = this.readAttribute(p, AttributeName.ATTR_POSITION);
            if (!joints || !weights || !positions) {
              continue;
            }
            var vertCount = Math.min(joints.length / 4, weights.length / 4, positions.length / 3);
            for (var _i3 = 0; _i3 < vertCount; _i3++) {
              Vec3.set(v3_1, positions[3 * _i3 + 0], positions[3 * _i3 + 1], positions[3 * _i3 + 2]);
              for (var j = 0; j < 4; ++j) {
                var idx = 4 * _i3 + j;
                var joint = joints[idx];
                if (weights[idx] === 0 || joint >= bindposes.length) {
                  continue;
                }
                Vec3.transformMat4(v3_2, v3_1, bindposes[joint]);
                valid[joint] = true;
                var b = bounds[joint];
                Vec3.min(b.center, b.center, v3_2);
                Vec3.max(b.halfExtents, b.halfExtents, v3_2);
              }
            }
          }
          for (var _i4 = 0; _i4 < bindposes.length; _i4++) {
            var _b = bounds[_i4];
            if (!valid[_i4]) {
              bounds[_i4] = null;
            } else {
              geometry.AABB.fromPoints(_b, _b.center, _b.halfExtents);
            }
          }
          return bounds;
        }

        /**
         * @en Merge the given mesh into the current mesh
         * @zh 合并指定的网格到此网格中。
         * @param mesh @en The mesh to be merged @zh 要合并的网格
         * @param worldMatrix @en The world matrix of the given mesh @zh 给定网格的模型变换矩阵
         * @param validate @en Whether to validate the mesh @zh 是否验证网格顶点布局
         * @returns @en whether the merging was successful or not @zh 返回合并成功与否
         */;
        _proto.merge = function merge(mesh, worldMatrix, validate) {
          if (validate) {
            if (!this.validateMergingMesh(mesh)) {
              return false;
            }
          }
          var vec3_temp = new Vec3();
          var rotate = worldMatrix && new Quat();
          var boundingBox = worldMatrix && new geometry.AABB();
          if (rotate) {
            worldMatrix.getRotation(rotate);
          }
          if (!this._initialized) {
            var struct = JSON.parse(JSON.stringify(mesh._struct));
            var data = mesh._data.slice();
            if (worldMatrix) {
              if (struct.maxPosition && struct.minPosition) {
                Vec3.add(boundingBox.center, struct.maxPosition, struct.minPosition);
                Vec3.multiplyScalar(boundingBox.center, boundingBox.center, 0.5);
                Vec3.subtract(boundingBox.halfExtents, struct.maxPosition, struct.minPosition);
                Vec3.multiplyScalar(boundingBox.halfExtents, boundingBox.halfExtents, 0.5);
                geometry.AABB.transform(boundingBox, boundingBox, worldMatrix);
                Vec3.add(struct.maxPosition, boundingBox.center, boundingBox.halfExtents);
                Vec3.subtract(struct.minPosition, boundingBox.center, boundingBox.halfExtents);
              }
              for (var i = 0; i < struct.vertexBundles.length; i++) {
                var vtxBdl = struct.vertexBundles[i];
                for (var j = 0; j < vtxBdl.attributes.length; j++) {
                  if (vtxBdl.attributes[j].name === AttributeName.ATTR_POSITION || vtxBdl.attributes[j].name === AttributeName.ATTR_NORMAL) {
                    var format = vtxBdl.attributes[j].format;
                    var inputView = new DataView(data.buffer, vtxBdl.view.offset + getOffset(vtxBdl.attributes, j));
                    var reader = getReader(inputView, format);
                    var writer = getWriter(inputView, format);
                    if (!reader || !writer) {
                      continue;
                    }
                    var vertexCount = vtxBdl.view.count;
                    var vertexStride = vtxBdl.view.stride;
                    var attrComponentByteLength = getComponentByteLength(format);
                    for (var vtxIdx = 0; vtxIdx < vertexCount; vtxIdx++) {
                      var xOffset = vtxIdx * vertexStride;
                      var yOffset = xOffset + attrComponentByteLength;
                      var zOffset = yOffset + attrComponentByteLength;
                      vec3_temp.set(reader(xOffset), reader(yOffset), reader(zOffset));
                      switch (vtxBdl.attributes[j].name) {
                        case AttributeName.ATTR_POSITION:
                          vec3_temp.transformMat4(worldMatrix);
                          break;
                        case AttributeName.ATTR_NORMAL:
                          Vec3.transformQuat(vec3_temp, vec3_temp, rotate);
                          break;
                        default:
                      }
                      writer(xOffset, vec3_temp.x);
                      writer(yOffset, vec3_temp.y);
                      writer(zOffset, vec3_temp.z);
                    }
                  }
                }
              }
            }
            this.reset({
              struct: struct,
              data: data
            });
            this.initialize();
            return true;
          }

          // merge buffer
          var bufferBlob = new BufferBlob();

          // merge vertex buffer
          var vertCount = 0;
          var vertStride = 0;
          var srcOffset = 0;
          var dstOffset = 0;
          var vb;
          var vbView;
          var srcVBView;
          var dstVBView;
          var srcAttrOffset = 0;
          var srcVBOffset = 0;
          var dstVBOffset = 0;
          var attrSize = 0;
          var dstAttrView;
          var hasAttr = false;
          var vertexBundles = new Array(this._struct.vertexBundles.length);
          for (var _i5 = 0; _i5 < this._struct.vertexBundles.length; ++_i5) {
            var bundle = this._struct.vertexBundles[_i5];
            var dstBundle = mesh._struct.vertexBundles[_i5];
            srcOffset = bundle.view.offset;
            dstOffset = dstBundle.view.offset;
            vertStride = bundle.view.stride;
            vertCount = bundle.view.count + dstBundle.view.count;
            vb = new ArrayBuffer(vertCount * vertStride);
            vbView = new Uint8Array(vb);
            srcVBView = this._data.subarray(srcOffset, srcOffset + bundle.view.length);
            srcOffset += srcVBView.length;
            dstVBView = mesh._data.subarray(dstOffset, dstOffset + dstBundle.view.length);
            dstOffset += dstVBView.length;
            vbView.set(srcVBView);
            srcAttrOffset = 0;
            for (var _iterator3 = _createForOfIteratorHelperLoose(bundle.attributes), _step3; !(_step3 = _iterator3()).done;) {
              var attr = _step3.value;
              dstVBOffset = 0;
              hasAttr = false;
              for (var _iterator4 = _createForOfIteratorHelperLoose(dstBundle.attributes), _step4; !(_step4 = _iterator4()).done;) {
                var dstAttr = _step4.value;
                if (attr.name === dstAttr.name && attr.format === dstAttr.format) {
                  hasAttr = true;
                  break;
                }
                dstVBOffset += FormatInfos[dstAttr.format].size;
              }
              if (hasAttr) {
                attrSize = FormatInfos[attr.format].size;
                srcVBOffset = bundle.view.length + srcAttrOffset;
                for (var v = 0; v < dstBundle.view.count; ++v) {
                  dstAttrView = dstVBView.subarray(dstVBOffset, dstVBOffset + attrSize);
                  vbView.set(dstAttrView, srcVBOffset);
                  if ((attr.name === AttributeName.ATTR_POSITION || attr.name === AttributeName.ATTR_NORMAL) && worldMatrix) {
                    var f32_temp = new Float32Array(vbView.buffer, srcVBOffset, 3);
                    vec3_temp.set(f32_temp[0], f32_temp[1], f32_temp[2]);
                    switch (attr.name) {
                      case AttributeName.ATTR_POSITION:
                        vec3_temp.transformMat4(worldMatrix);
                        break;
                      case AttributeName.ATTR_NORMAL:
                        Vec3.transformQuat(vec3_temp, vec3_temp, rotate);
                        break;
                      default:
                    }
                    f32_temp[0] = vec3_temp.x;
                    f32_temp[1] = vec3_temp.y;
                    f32_temp[2] = vec3_temp.z;
                  }
                  srcVBOffset += bundle.view.stride;
                  dstVBOffset += dstBundle.view.stride;
                }
              }
              srcAttrOffset += FormatInfos[attr.format].size;
            }
            vertexBundles[_i5] = {
              attributes: bundle.attributes,
              view: {
                offset: bufferBlob.getLength(),
                length: vb.byteLength,
                count: vertCount,
                stride: vertStride
              }
            };
            bufferBlob.addBuffer(vb);
          }

          // merge index buffer
          var idxCount = 0;
          var idxStride = 2;
          var ibView;
          var srcIBView;
          var dstIBView;
          var primitives = new Array(this._struct.primitives.length);
          for (var _i6 = 0; _i6 < this._struct.primitives.length; ++_i6) {
            var prim = this._struct.primitives[_i6];
            var dstPrim = mesh._struct.primitives[_i6];
            primitives[_i6] = {
              primitiveMode: prim.primitiveMode,
              vertexBundelIndices: prim.vertexBundelIndices
            };
            var vertBatchCount = 0;
            for (var _iterator5 = _createForOfIteratorHelperLoose(prim.vertexBundelIndices), _step5; !(_step5 = _iterator5()).done;) {
              var bundleIdx = _step5.value;
              vertBatchCount = Math.max(vertBatchCount, this._struct.vertexBundles[bundleIdx].view.count);
            }
            if (prim.indexView && dstPrim.indexView) {
              idxCount = prim.indexView.count;
              idxCount += dstPrim.indexView.count;
              srcOffset = prim.indexView.offset;
              dstOffset = dstPrim.indexView.offset;
              if (idxCount < 256) {
                idxStride = 1;
              } else if (idxCount < 65536) {
                idxStride = 2;
              } else {
                idxStride = 4;
              }
              var ib = new ArrayBuffer(idxCount * idxStride);
              if (idxStride === 2) {
                ibView = new Uint16Array(ib);
              } else if (idxStride === 1) {
                ibView = new Uint8Array(ib);
              } else {
                // Uint32
                ibView = new Uint32Array(ib);
              }

              // merge src indices
              if (prim.indexView.stride === 2) {
                srcIBView = new Uint16Array(this._data.buffer, srcOffset, prim.indexView.count);
              } else if (prim.indexView.stride === 1) {
                srcIBView = new Uint8Array(this._data.buffer, srcOffset, prim.indexView.count);
              } else {
                // Uint32
                srcIBView = new Uint32Array(this._data.buffer, srcOffset, prim.indexView.count);
              }
              if (idxStride === prim.indexView.stride) {
                ibView.set(srcIBView);
              } else {
                for (var n = 0; n < prim.indexView.count; ++n) {
                  ibView[n] = srcIBView[n];
                }
              }
              srcOffset += prim.indexView.length;

              // merge dst indices
              if (dstPrim.indexView.stride === 2) {
                dstIBView = new Uint16Array(mesh._data.buffer, dstOffset, dstPrim.indexView.count);
              } else if (dstPrim.indexView.stride === 1) {
                dstIBView = new Uint8Array(mesh._data.buffer, dstOffset, dstPrim.indexView.count);
              } else {
                // Uint32
                dstIBView = new Uint32Array(mesh._data.buffer, dstOffset, dstPrim.indexView.count);
              }
              for (var _n = 0; _n < dstPrim.indexView.count; ++_n) {
                ibView[prim.indexView.count + _n] = vertBatchCount + dstIBView[_n];
              }
              dstOffset += dstPrim.indexView.length;
              primitives[_i6].indexView = {
                offset: bufferBlob.getLength(),
                length: ib.byteLength,
                count: idxCount,
                stride: idxStride
              };
              bufferBlob.setNextAlignment(idxStride);
              bufferBlob.addBuffer(ib);
            }
          }

          // Create mesh struct.
          var meshStruct = {
            vertexBundles: vertexBundles,
            primitives: primitives,
            minPosition: this._struct.minPosition,
            maxPosition: this._struct.maxPosition
          };
          if (meshStruct.minPosition && mesh._struct.minPosition && meshStruct.maxPosition && mesh._struct.maxPosition) {
            if (worldMatrix) {
              Vec3.add(boundingBox.center, mesh._struct.maxPosition, mesh._struct.minPosition);
              Vec3.multiplyScalar(boundingBox.center, boundingBox.center, 0.5);
              Vec3.subtract(boundingBox.halfExtents, mesh._struct.maxPosition, mesh._struct.minPosition);
              Vec3.multiplyScalar(boundingBox.halfExtents, boundingBox.halfExtents, 0.5);
              geometry.AABB.transform(boundingBox, boundingBox, worldMatrix);
              Vec3.add(vec3_temp, boundingBox.center, boundingBox.halfExtents);
              Vec3.max(meshStruct.maxPosition, meshStruct.maxPosition, vec3_temp);
              Vec3.subtract(vec3_temp, boundingBox.center, boundingBox.halfExtents);
              Vec3.min(meshStruct.minPosition, meshStruct.minPosition, vec3_temp);
            } else {
              Vec3.min(meshStruct.minPosition, meshStruct.minPosition, mesh._struct.minPosition);
              Vec3.max(meshStruct.maxPosition, meshStruct.maxPosition, mesh._struct.maxPosition);
            }
          }

          // Create mesh.
          this.reset({
            struct: meshStruct,
            data: new Uint8Array(bufferBlob.getCombined())
          });
          this.initialize();
          return true;
        }

        /**
         * @en Validation for whether the given mesh can be merged into the current mesh.
         * To pass the validation, it must satisfy either of these two requirements:
         * - When the current mesh have no data
         * - When the two mesh have the same vertex bundle count, the same sub meshes count, and the same sub mesh layout.
         *
         * Same mesh layout means:
         * - They have the same primitive type and reference to the same amount vertex bundle with the same indices.
         * - And they all have or don't have index view
         * @zh 验证指定网格是否可以合并至当前网格。
         *
         * 当满足以下条件之一时，指定网格可以合并至当前网格：
         *  - 当前网格无数据而待合并网格有数据；
         *  - 它们的顶点块数目相同且对应顶点块的布局一致，并且它们的子网格数目相同且对应子网格的布局一致。
         *
         * 两个顶点块布局一致当且仅当：
         *  - 它们具有相同数量的顶点属性且对应的顶点属性具有相同的属性格式。
         *
         * 两个子网格布局一致，当且仅当：
         *  - 它们具有相同的图元类型并且引用相同数量、相同索引的顶点块；并且，
         *  - 要么都需要索引绘制，要么都不需要索引绘制。
         * @param mesh @en The other mesh to be validated @zh 待验证的网格
         */;
        _proto.validateMergingMesh = function validateMergingMesh(mesh) {
          // dynamic mesh is not allowed to merge.
          if (this._struct.dynamic || mesh._struct.dynamic) {
            return false;
          }

          // validate vertex bundles
          if (this._struct.vertexBundles.length !== mesh._struct.vertexBundles.length) {
            return false;
          }
          for (var i = 0; i < this._struct.vertexBundles.length; ++i) {
            var bundle = this._struct.vertexBundles[i];
            var dstBundle = mesh._struct.vertexBundles[i];
            if (bundle.attributes.length !== dstBundle.attributes.length) {
              return false;
            }
            for (var j = 0; j < bundle.attributes.length; ++j) {
              if (bundle.attributes[j].format !== dstBundle.attributes[j].format) {
                return false;
              }
            }
          }

          // validate primitives
          if (this._struct.primitives.length !== mesh._struct.primitives.length) {
            return false;
          }
          for (var _i7 = 0; _i7 < this._struct.primitives.length; ++_i7) {
            var prim = this._struct.primitives[_i7];
            var dstPrim = mesh._struct.primitives[_i7];
            if (prim.vertexBundelIndices.length !== dstPrim.vertexBundelIndices.length) {
              return false;
            }
            for (var _j = 0; _j < prim.vertexBundelIndices.length; ++_j) {
              if (prim.vertexBundelIndices[_j] !== dstPrim.vertexBundelIndices[_j]) {
                return false;
              }
            }
            if (prim.primitiveMode !== dstPrim.primitiveMode) {
              return false;
            }
            if (prim.indexView) {
              if (dstPrim.indexView === undefined) {
                return false;
              }
            } else if (dstPrim.indexView) {
              return false;
            }
          }
          return true;
        }

        /**
         * @en Read the requested attribute of the given sub mesh
         * @zh 读取子网格的指定属性。
         * @param primitiveIndex @en Sub mesh index @zh 子网格索引
         * @param attributeName @en Attribute name @zh 属性名称
         * @returns @en Return null if not found or can't read, otherwise, will create a large enough typed array to contain all data of the attribute,
         * the array type will match the data type of the attribute. @zh 读取失败返回 null， 否则返回对应的类型数组
         */;
        _proto.readAttribute = function readAttribute(primitiveIndex, attributeName) {
          var _this2 = this;
          var result = null;
          this._accessAttribute(primitiveIndex, attributeName, function (vertexBundle, iAttribute) {
            var vertexCount = vertexBundle.view.count;
            var format = vertexBundle.attributes[iAttribute].format;
            var StorageConstructor = getTypedArrayConstructor(FormatInfos[format]);
            if (vertexCount === 0) {
              return;
            }
            var inputView = new DataView(_this2._data.buffer, vertexBundle.view.offset + getOffset(vertexBundle.attributes, iAttribute));
            var formatInfo = FormatInfos[format];
            var reader = getReader(inputView, format);
            if (!StorageConstructor || !reader) {
              return;
            }
            var componentCount = formatInfo.count;
            var storage = new StorageConstructor(vertexCount * componentCount);
            var inputStride = vertexBundle.view.stride;
            for (var iVertex = 0; iVertex < vertexCount; ++iVertex) {
              for (var iComponent = 0; iComponent < componentCount; ++iComponent) {
                storage[componentCount * iVertex + iComponent] = reader(inputStride * iVertex + storage.BYTES_PER_ELEMENT * iComponent);
              }
            }
            result = storage;
          });
          return result;
        }

        /**
         * @en Read the requested attribute of the given sub mesh and fill into the given buffer.
         * @zh 读取子网格的指定属性到目标缓冲区中。
         * @param primitiveIndex @en Sub mesh index @zh 子网格索引
         * @param attributeName @en Attribute name @zh 属性名称
         * @param buffer @en The target array buffer @zh 目标缓冲区
         * @param stride @en attribute stride @zh 属性跨距
         * @param offset @en The offset of the first attribute in the target buffer @zh 第一个属性在目标缓冲区的偏移
         * @returns @en false if failed to access attribute, true otherwise @zh 是否成功拷贝
         */;
        _proto.copyAttribute = function copyAttribute(primitiveIndex, attributeName, buffer, stride, offset) {
          var _this3 = this;
          var written = false;
          this._accessAttribute(primitiveIndex, attributeName, function (vertexBundle, iAttribute) {
            var vertexCount = vertexBundle.view.count;
            if (vertexCount === 0) {
              written = true;
              return;
            }
            var format = vertexBundle.attributes[iAttribute].format;
            var inputView = new DataView(_this3._data.buffer, vertexBundle.view.offset + getOffset(vertexBundle.attributes, iAttribute));
            var outputView = new DataView(buffer, offset);
            var formatInfo = FormatInfos[format];
            var reader = getReader(inputView, format);
            var writer = getWriter(outputView, format);
            if (!reader || !writer) {
              return;
            }
            var componentCount = formatInfo.count;
            var inputStride = vertexBundle.view.stride;
            var inputComponentByteLength = getComponentByteLength(format);
            var outputStride = stride;
            var outputComponentByteLength = inputComponentByteLength;
            for (var iVertex = 0; iVertex < vertexCount; ++iVertex) {
              for (var iComponent = 0; iComponent < componentCount; ++iComponent) {
                var inputOffset = inputStride * iVertex + inputComponentByteLength * iComponent;
                var outputOffset = outputStride * iVertex + outputComponentByteLength * iComponent;
                writer(outputOffset, reader(inputOffset));
              }
            }
            written = true;
          });
          return written;
        }

        /**
         * @en Read the indices data of the given sub mesh
         * @zh 读取子网格的索引数据。
         * @param primitiveIndex @en Sub mesh index @zh 子网格索引
         * @returns @en Return null if not found or can't read, otherwise, will create a large enough typed array to contain all indices data,
         * the array type will use the corresponding stride size. @zh 读取失败返回 null，否则返回索引数据
         */;
        _proto.readIndices = function readIndices(primitiveIndex) {
          if (primitiveIndex >= this._struct.primitives.length) {
            return null;
          }
          var primitive = this._struct.primitives[primitiveIndex];
          if (!primitive.indexView) {
            return null;
          }
          var stride = primitive.indexView.stride;
          var Ctor = stride === 1 ? Uint8Array : stride === 2 ? Uint16Array : Uint32Array;
          return new Ctor(this._data.buffer, primitive.indexView.offset, primitive.indexView.count);
        }

        /**
         * @en Read the indices data of the given sub mesh and fill into the given array
         * @zh 读取子网格的索引数据到目标数组中。
         * @param primitiveIndex @en Sub mesh index @zh 子网格索引
         * @param outputArray @en The target output array @zh 目标索引数组
         * @returns @en Return false if failed to access the indices data, return true otherwise. @zh 拷贝失败返回 false， 否则返回 true
         */;
        _proto.copyIndices = function copyIndices(primitiveIndex, outputArray) {
          if (primitiveIndex >= this._struct.primitives.length) {
            return false;
          }
          var primitive = this._struct.primitives[primitiveIndex];
          if (!primitive.indexView) {
            return false;
          }
          var indexCount = primitive.indexView.count;
          var indexFormat = primitive.indexView.stride === 1 ? Format.R8UI : primitive.indexView.stride === 2 ? Format.R16UI : Format.R32UI;
          var reader = getReader(new DataView(this._data.buffer), indexFormat);
          for (var i = 0; i < indexCount; ++i) {
            outputArray[i] = reader(primitive.indexView.offset + FormatInfos[indexFormat].size * i);
          }
          return true;
        }

        /**
         * @en Read the format by attributeName of submesh
         * @zh 根据属性名读取子网格的属性信息。
         * @param primitiveIndex @en Sub mesh index @zh 子网格索引
         * @param attributeName @en Attribute name @zh 属性名称
         * @returns @en Return null if failed to read format, return the format otherwise. @zh 读取失败返回 null， 否则返回 format
         */;
        _proto.readAttributeFormat = function readAttributeFormat(primitiveIndex, attributeName) {
          var result = null;
          this._accessAttribute(primitiveIndex, attributeName, function (vertexBundle, iAttribute) {
            var format = vertexBundle.attributes[iAttribute].format;
            result = FormatInfos[format];
          });
          return result;
        };
        _proto._accessAttribute = function _accessAttribute(primitiveIndex, attributeName, accessor) {
          if (primitiveIndex >= this._struct.primitives.length) {
            return;
          }
          var primitive = this._struct.primitives[primitiveIndex];
          for (var _iterator6 = _createForOfIteratorHelperLoose(primitive.vertexBundelIndices), _step6; !(_step6 = _iterator6()).done;) {
            var vertexBundleIndex = _step6.value;
            var _vertexBundle4 = this._struct.vertexBundles[vertexBundleIndex];
            var _iAttribute = _vertexBundle4.attributes.findIndex(function (a) {
              return a.name === attributeName;
            });
            if (_iAttribute < 0) {
              continue;
            }
            accessor(_vertexBundle4, _iAttribute);
            break;
          }
        };
        _proto._createVertexBuffers = function _createVertexBuffers(gfxDevice, data) {
          return this._struct.vertexBundles.map(function (vertexBundle) {
            var vertexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.VERTEX, MemoryUsageBit.DEVICE, vertexBundle.view.length, vertexBundle.view.stride));
            var view = new Uint8Array(data, vertexBundle.view.offset, vertexBundle.view.length);
            vertexBuffer.update(view);
            return vertexBuffer;
          });
        }

        /**
         * @en default init
         * @zh 默认初始化
         * @param uuid @en asset uuid @zh 资源 uuid
         */;
        _proto.initDefault = function initDefault(uuid) {
          _Asset.prototype.initDefault.call(this, uuid);
          this.reset({
            struct: {
              vertexBundles: [],
              primitives: []
            },
            data: globalEmptyMeshBuffer
          });
        }

        /**
         * @en Set whether the data of this mesh could be accessed (read or wrote), it could be used only for static mesh
         * @zh 设置此网格的数据是否可被存取，此接口只针对静态网格资源生效
         * @param allowDataAccess @en Indicate whether the data of this mesh could be accessed (read or wrote) @zh 是否允许存取网格数据
         */;
        _proto.releaseData = function releaseData() {
          this._data = globalEmptyMeshBuffer;
        };
        _createClass(Mesh, [{
          key: "_nativeAsset",
          get:
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._data.buffer;
          },
          set: function set(value) {
            this._data = new Uint8Array(value);
          }

          /**
           * @en The sub meshes count of the mesh.
           * @zh 此网格的子网格数量。
           * @deprecated Please use [[renderingSubMeshes.length]] instead
           */
        }, {
          key: "subMeshCount",
          get: function get() {
            var renderingMesh = this.renderingSubMeshes;
            return renderingMesh ? renderingMesh.length : 0;
          }

          /**
           * @en The minimum position of all vertices in the mesh
           * @zh （各分量都）小于等于此网格任何顶点位置的最大位置。
           * @deprecated Please use [[struct.minPosition]] instead
           */
        }, {
          key: "minPosition",
          get: function get() {
            return this.struct.minPosition;
          }

          /**
           * @en The maximum position of all vertices in the mesh
           * @zh （各分量都）大于等于此网格任何顶点位置的最大位置。
           * @deprecated Please use [[struct.maxPosition]] instead
           */
        }, {
          key: "maxPosition",
          get: function get() {
            return this.struct.maxPosition;
          }

          /**
           * @en The struct of the mesh
           * @zh 此网格的结构。
           */
        }, {
          key: "struct",
          get: function get() {
            return this._struct;
          }

          /**
           * @en The actual data of the mesh
           * @zh 此网格的数据。
           */
        }, {
          key: "data",
          get: function get() {
            return this._data;
          }

          /**
           * @en The hash of the mesh
           * @zh 此网格的哈希值。
           */
        }, {
          key: "hash",
          get: function get() {
            // hashes should already be computed offline, but if not, make one
            if (!this._hash) {
              this._hash = murmurhash2_32_gc(this._data, 666);
            }
            return this._hash;
          }

          /**
           * @en The index of the joint buffer of all sub meshes in the joint map buffers
           * @zh 所有子网格的关节索引集合
           */
        }, {
          key: "jointBufferIndices",
          get: function get() {
            if (this._jointBufferIndices) {
              return this._jointBufferIndices;
            }
            return this._jointBufferIndices = this._struct.primitives.map(function (p) {
              return p.jointMapIndex || 0;
            });
          }

          /**
           * @en The sub meshes for rendering. Mesh could be split into different sub meshes for rendering.
           * @zh 此网格创建的渲染网格。
           */
        }, {
          key: "renderingSubMeshes",
          get: function get() {
            this.initialize();
            return this._renderingSubMeshes;
          }
        }, {
          key: "allowDataAccess",
          get:
          /**
           * @en Get whether the data of this mesh could be read or wrote
           * @zh 获取此网格的数据是否可被存取
           * @return @en whether the data of this mesh could be accessed (read or wrote) @zh 此网格的数据是否可被存取
           */
          function get() {
            return this._allowDataAccess;
          },
          set: function set(allowDataAccess) {
            this._allowDataAccess = allowDataAccess;
            if (this._isMeshDataUploaded && !this._allowDataAccess && !EDITOR) {
              this.releaseData();
            }
          }
        }]);
        return Mesh;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_struct", [serializable], function () {
        return {
          vertexBundles: [],
          primitives: []
        };
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_hash", [serializable], function () {
        return 0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_allowDataAccess", [serializable], function () {
        return true;
      })), _class2)) || _class));
      cclegacy.Mesh = Mesh;
      isLittleEndian = sys.isLittleEndian;
    }
  };
});