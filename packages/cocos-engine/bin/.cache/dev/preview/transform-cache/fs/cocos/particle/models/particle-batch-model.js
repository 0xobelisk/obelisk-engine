System.register("q-bundled:///fs/cocos/particle/models/particle-batch-model.js", ["../../../../virtual/internal%253Aconstants.js", "../../gfx/index.js", "../../core/index.js", "../../render-scene/index.js", "../../asset/assets/index.js"], function (_export, _context) {
  "use strict";

  var JSB, AttributeName, BufferUsageBit, FormatInfos, MemoryUsageBit, PrimitiveMode, BufferInfo, Feature, deviceManager, Color, scene, RenderingSubMesh, _uvs, _uvs_ins, ParticleBatchModel;
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
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /* eslint-disable max-len */ /*
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
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_gfxIndexJs) {
      AttributeName = _gfxIndexJs.AttributeName;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      FormatInfos = _gfxIndexJs.FormatInfos;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
      BufferInfo = _gfxIndexJs.BufferInfo;
      Feature = _gfxIndexJs.Feature;
      deviceManager = _gfxIndexJs.deviceManager;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }, function (_assetAssetsIndexJs) {
      RenderingSubMesh = _assetAssetsIndexJs.RenderingSubMesh;
    }],
    execute: function () {
      _uvs = [0, 0,
      // bottom-left
      1, 0,
      // bottom-right
      0, 1,
      // top-left
      1, 1 // top-right
      ];
      _uvs_ins = [0, 0, 0,
      // bottom-left
      1, 0, 0,
      // bottom-right
      0, 1, 0,
      // top-left
      1, 1, 0 // top-right
      ];
      _export("default", ParticleBatchModel = /*#__PURE__*/function (_scene$Model) {
        _inheritsLoose(ParticleBatchModel, _scene$Model);
        function ParticleBatchModel() {
          var _this;
          _this = _scene$Model.call(this) || this;
          _this._capacity = void 0;
          _this._bufferSize = void 0;
          _this._vertAttrs = void 0;
          _this._vertAttribSize = void 0;
          _this._vBuffer = void 0;
          _this._vertAttrsFloatCount = void 0;
          _this._vdataF32 = void 0;
          _this._vdataUint32 = void 0;
          _this._subMeshData = void 0;
          _this._mesh = void 0;
          _this._vertCount = 0;
          _this._indexCount = 0;
          _this._startTimeOffset = 0;
          _this._lifeTimeOffset = 0;
          _this._material = null;
          _this._vertAttribSizeStatic = void 0;
          _this._vertStaticAttrsFloatCount = void 0;
          _this._insBuffers = void 0;
          _this._insIndices = void 0;
          _this._useInstance = void 0;
          _this._iaVertCount = 0;
          _this._iaIndexCount = 0;
          if (JSB) {
            _assertThisInitialized(_this)._registerListeners();
          }
          _this.type = scene.ModelType.PARTICLE_BATCH;
          _this._capacity = 0;
          _this._bufferSize = 16;
          _this._vertAttrs = null;
          _this._vertAttribSize = 0;
          _this._vBuffer = null;
          _this._vertAttrsFloatCount = 0;
          _this._vdataF32 = null;
          _this._vdataUint32 = null;
          _this._vertAttribSizeStatic = 0;
          _this._vertStaticAttrsFloatCount = 0;
          _this._insBuffers = [];
          _this._insIndices = null;
          if (!deviceManager.gfxDevice.hasFeature(Feature.INSTANCED_ARRAYS)) {
            _this._useInstance = false;
          } else {
            _this._useInstance = true;
          }
          _this._subMeshData = null;
          _this._mesh = null;
          return _this;
        }
        var _proto = ParticleBatchModel.prototype;
        _proto.setCapacity = function setCapacity(capacity) {
          var capChanged = this._capacity !== capacity;
          this._capacity = capacity;
          this._bufferSize = Math.max(this._capacity, 16);
          if (this._subMeshData && capChanged) {
            this.rebuild();
          }
        };
        _proto.setVertexAttributes = function setVertexAttributes(mesh, attrs) {
          if (!this._useInstance) {
            if (this._mesh === mesh && this._vertAttrs === attrs) {
              return;
            }
            this._mesh = mesh;
            this._vertAttrs = attrs;
            this._vertAttribSize = 0;
            for (var _iterator = _createForOfIteratorHelperLoose(this._vertAttrs), _step; !(_step = _iterator()).done;) {
              var a = _step.value;
              a.offset = this._vertAttribSize;
              this._vertAttribSize += FormatInfos[a.format].size;
            }
            this._vertAttrsFloatCount = this._vertAttribSize / 4; // number of float
            // rebuid
            this.rebuild();
          } else {
            this.setVertexAttributesIns(mesh, attrs);
          }
        };
        _proto.setVertexAttributesIns = function setVertexAttributesIns(mesh, attrs) {
          if (this._mesh === mesh && this._vertAttrs === attrs) {
            return;
          }
          this._mesh = mesh;
          this._vertAttrs = attrs;
          this._vertAttribSize = 0;
          this._vertAttribSizeStatic = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._vertAttrs), _step2; !(_step2 = _iterator2()).done;) {
            var a = _step2.value;
            if (a.stream === 0) {
              a.offset = this._vertAttribSize;
              this._vertAttribSize += FormatInfos[a.format].size;
            } else if (a.stream === 1) {
              a.offset = this._vertAttribSizeStatic;
              this._vertAttribSizeStatic += FormatInfos[a.format].size;
            }
          }
          this._vertAttrsFloatCount = this._vertAttribSize / 4; // number of float
          this._vertStaticAttrsFloatCount = this._vertAttribSizeStatic / 4;
          // rebuid
          this.rebuild();
        };
        _proto.createSubMeshData = function createSubMeshData() {
          this.destroySubMeshData();
          this._vertCount = 4;
          this._indexCount = 6;
          if (this._mesh) {
            this._vertCount = this._mesh.struct.vertexBundles[this._mesh.struct.primitives[0].vertexBundelIndices[0]].view.count;
            this._indexCount = this._mesh.struct.primitives[0].indexView.count;
          }
          var vertexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, this._vertAttribSize * this._bufferSize * this._vertCount, this._vertAttribSize));
          var vBuffer = new ArrayBuffer(this._vertAttribSize * this._bufferSize * this._vertCount);
          if (this._mesh && this._capacity > 0) {
            var vOffset = this._vertAttrs[this._vertAttrs.findIndex(function (val) {
              return val.name === AttributeName.ATTR_TEX_COORD;
            })].offset;
            this._mesh.copyAttribute(0, AttributeName.ATTR_TEX_COORD, vBuffer, this._vertAttribSize, vOffset); // copy mesh uv to ATTR_TEX_COORD
            var vIdx = this._vertAttrs.findIndex(function (val) {
              return val.name === AttributeName.ATTR_TEX_COORD3;
            });
            vOffset = this._vertAttrs[vIdx++].offset;
            this._mesh.copyAttribute(0, AttributeName.ATTR_POSITION, vBuffer, this._vertAttribSize, vOffset); // copy mesh position to ATTR_TEX_COORD3
            vOffset = this._vertAttrs[vIdx++].offset;
            this._mesh.copyAttribute(0, AttributeName.ATTR_NORMAL, vBuffer, this._vertAttribSize, vOffset); // copy mesh normal to ATTR_NORMAL
            vOffset = this._vertAttrs[vIdx++].offset;
            if (!this._mesh.copyAttribute(0, AttributeName.ATTR_COLOR, vBuffer, this._vertAttribSize, vOffset)) {
              // copy mesh color to ATTR_COLOR1
              var vb = new Uint32Array(vBuffer);
              for (var iVertex = 0; iVertex < this._vertCount; ++iVertex) {
                vb[iVertex * this._vertAttrsFloatCount + vOffset / 4] = Color.WHITE._val;
              }
            }
            var vbFloatArray = new Float32Array(vBuffer);
            for (var i = 1; i < this._capacity; i++) {
              vbFloatArray.copyWithin(i * this._vertAttribSize * this._vertCount / 4, 0, this._vertAttribSize * this._vertCount / 4);
            }
          }
          vertexBuffer.update(vBuffer);
          var indices = new Uint16Array(this._bufferSize * this._indexCount);
          if (this._mesh && this._capacity > 0) {
            this._mesh.copyIndices(0, indices);
            for (var _i = 1; _i < this._capacity; _i++) {
              for (var j = 0; j < this._indexCount; j++) {
                indices[_i * this._indexCount + j] = indices[j] + _i * this._vertCount;
              }
            }
          } else {
            var dst = 0;
            for (var _i2 = 0; _i2 < this._capacity; ++_i2) {
              var baseIdx = 4 * _i2;
              indices[dst++] = baseIdx;
              indices[dst++] = baseIdx + 1;
              indices[dst++] = baseIdx + 2;
              indices[dst++] = baseIdx + 3;
              indices[dst++] = baseIdx + 2;
              indices[dst++] = baseIdx + 1;
            }
          }
          var indexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, this._bufferSize * this._indexCount * Uint16Array.BYTES_PER_ELEMENT, Uint16Array.BYTES_PER_ELEMENT));
          indexBuffer.update(indices);
          this._iaVertCount = this._capacity * this._vertCount;
          this._iaIndexCount = this._capacity * this._indexCount;
          this._subMeshData = new RenderingSubMesh([vertexBuffer], this._vertAttrs, PrimitiveMode.TRIANGLE_LIST, indexBuffer);
          this.initSubModel(0, this._subMeshData, this._material);
          return vBuffer;
        };
        _proto.createSubMeshDataInsDynamic = function createSubMeshDataInsDynamic() {
          this._insBuffers.length = 0;
          this.destroySubMeshData();
          var vertexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, this._vertAttribSize * this._bufferSize, this._vertAttribSize));
          var vBuffer = new ArrayBuffer(this._vertAttribSize * this._bufferSize);
          vertexBuffer.update(vBuffer);
          this._insBuffers.push(vertexBuffer);
          return vBuffer;
        };
        _proto.createSubMeshDataInsStatic = function createSubMeshDataInsStatic() {
          this._vertCount = 4;
          this._indexCount = 6;
          if (this._mesh) {
            this._vertCount = this._mesh.struct.vertexBundles[this._mesh.struct.primitives[0].vertexBundelIndices[0]].view.count;
            this._indexCount = this._mesh.struct.primitives[0].indexView.count;
          }
          var vertexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, this._vertAttribSizeStatic * this._vertCount, this._vertAttribSizeStatic));
          var vBuffer = new ArrayBuffer(this._vertAttribSizeStatic * this._vertCount);
          if (this._mesh) {
            var vIdx = this._vertAttrs.findIndex(function (val) {
              return val.name === AttributeName.ATTR_TEX_COORD;
            }); // find ATTR_TEX_COORD index
            var vOffset = this._vertAttrs[vIdx].offset; // find ATTR_TEX_COORD offset
            this._mesh.copyAttribute(0, AttributeName.ATTR_TEX_COORD, vBuffer, this._vertAttribSizeStatic, vOffset); // copy mesh uv to ATTR_TEX_COORD
            vIdx = this._vertAttrs.findIndex(function (val) {
              return val.name === AttributeName.ATTR_TEX_COORD3;
            }); // find ATTR_TEX_COORD3 index
            vOffset = this._vertAttrs[vIdx++].offset; // find ATTR_TEX_COORD3 offset
            this._mesh.copyAttribute(0, AttributeName.ATTR_POSITION, vBuffer, this._vertAttribSizeStatic, vOffset); // copy mesh position to ATTR_TEX_COORD3
            vOffset = this._vertAttrs[vIdx++].offset;
            this._mesh.copyAttribute(0, AttributeName.ATTR_NORMAL, vBuffer, this._vertAttribSizeStatic, vOffset); // copy mesh normal to ATTR_NORMAL
            vOffset = this._vertAttrs[vIdx++].offset;
            if (!this._mesh.copyAttribute(0, AttributeName.ATTR_COLOR, vBuffer, this._vertAttribSizeStatic, vOffset)) {
              // copy mesh color to ATTR_COLOR1
              var vb = new Uint32Array(vBuffer);
              for (var iVertex = 0; iVertex < this._vertCount; ++iVertex) {
                vb[iVertex * this._vertStaticAttrsFloatCount + vOffset / 4] = Color.WHITE._val;
              }
            }
          } else {
            var vbFloatArray = new Float32Array(vBuffer);
            for (var i = 0; i < _uvs_ins.length; ++i) {
              vbFloatArray[i] = _uvs_ins[i];
            }
          }
          vertexBuffer.update(vBuffer);
          var indices = new Uint16Array(this._indexCount);
          if (this._mesh) {
            this._mesh.copyIndices(0, indices);
          } else {
            indices[0] = 0;
            indices[1] = 1;
            indices[2] = 2;
            indices[3] = 3;
            indices[4] = 2;
            indices[5] = 1;
          }
          var indexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, this._indexCount * Uint16Array.BYTES_PER_ELEMENT, Uint16Array.BYTES_PER_ELEMENT));
          indexBuffer.update(indices);
          this._insIndices = indexBuffer;
          this._iaVertCount = this._vertCount;
          this._iaIndexCount = this._indexCount;
          this._insBuffers.push(vertexBuffer);
        };
        _proto.createInsSubmesh = function createInsSubmesh() {
          this._subMeshData = new RenderingSubMesh(this._insBuffers, this._vertAttrs, PrimitiveMode.TRIANGLE_LIST, this._insIndices);
          this.initSubModel(0, this._subMeshData, this._material);
        };
        _proto.updateMaterial = function updateMaterial(mat) {
          this._material = mat;
          this.setSubModelMaterial(0, mat);
        };
        _proto.addParticleVertexData = function addParticleVertexData(index, pvdata) {
          if (!this._useInstance) {
            if (!this._mesh) {
              var offset = index * this._vertAttrsFloatCount;
              this._vdataF32[offset++] = pvdata.position.x; // position
              this._vdataF32[offset++] = pvdata.position.y;
              this._vdataF32[offset++] = pvdata.position.z;
              this._vdataF32[offset++] = pvdata.texcoord.x; // uv
              this._vdataF32[offset++] = pvdata.texcoord.y;
              this._vdataF32[offset++] = pvdata.texcoord.z; // frame idx
              this._vdataF32[offset++] = pvdata.size.x; // size
              this._vdataF32[offset++] = pvdata.size.y;
              this._vdataF32[offset++] = pvdata.size.z;
              this._vdataF32[offset++] = pvdata.rotation.x; // rotation
              this._vdataF32[offset++] = pvdata.rotation.y;
              this._vdataF32[offset++] = pvdata.rotation.z;
              this._vdataUint32[offset++] = pvdata.color; // color
              if (pvdata.velocity) {
                this._vdataF32[offset++] = pvdata.velocity.x; // velocity
                this._vdataF32[offset++] = pvdata.velocity.y;
                this._vdataF32[offset++] = pvdata.velocity.z;
              }
            } else {
              for (var i = 0; i < this._vertCount; i++) {
                var _offset = (index * this._vertCount + i) * this._vertAttrsFloatCount;
                this._vdataF32[_offset++] = pvdata.position.x; // position
                this._vdataF32[_offset++] = pvdata.position.y;
                this._vdataF32[_offset++] = pvdata.position.z;
                _offset += 2;
                // this._vdataF32![offset++] = index;
                // this._vdataF32![offset++] = pvdata.texcoord.y;
                this._vdataF32[_offset++] = pvdata.texcoord.z; // frame idx
                this._vdataF32[_offset++] = pvdata.size.x; // size
                this._vdataF32[_offset++] = pvdata.size.y;
                this._vdataF32[_offset++] = pvdata.size.z;
                this._vdataF32[_offset++] = pvdata.rotation.x; // rotation
                this._vdataF32[_offset++] = pvdata.rotation.y;
                this._vdataF32[_offset++] = pvdata.rotation.z;
                this._vdataUint32[_offset++] = pvdata.color; // color
              }
            }
          } else {
            this.addParticleVertexDataIns(index, pvdata);
          }
        };
        _proto.addParticleVertexDataIns = function addParticleVertexDataIns(index, pvdata) {
          var offset = index * this._vertAttrsFloatCount;
          if (!this._mesh) {
            this._vdataF32[offset++] = pvdata.position.x; // position
            this._vdataF32[offset++] = pvdata.position.y;
            this._vdataF32[offset++] = pvdata.position.z;
            this._vdataF32[offset++] = pvdata.texcoord.z; // frame idx

            this._vdataF32[offset++] = pvdata.size.x; // size
            this._vdataF32[offset++] = pvdata.size.y;
            this._vdataF32[offset++] = pvdata.size.z;
            this._vdataF32[offset++] = pvdata.rotation.x; // rotation
            this._vdataF32[offset++] = pvdata.rotation.y;
            this._vdataF32[offset++] = pvdata.rotation.z;
            this._vdataUint32[offset++] = pvdata.color; // color
            if (pvdata.velocity) {
              this._vdataF32[offset++] = pvdata.velocity.x; // velocity
              this._vdataF32[offset++] = pvdata.velocity.y;
              this._vdataF32[offset++] = pvdata.velocity.z;
            }
          } else {
            this._vdataF32[offset++] = pvdata.position.x; // position
            this._vdataF32[offset++] = pvdata.position.y;
            this._vdataF32[offset++] = pvdata.position.z;
            this._vdataF32[offset++] = pvdata.texcoord.z; // frame idx

            this._vdataF32[offset++] = pvdata.size.x; // size
            this._vdataF32[offset++] = pvdata.size.y;
            this._vdataF32[offset++] = pvdata.size.z;
            this._vdataF32[offset++] = pvdata.rotation.x; // rotation
            this._vdataF32[offset++] = pvdata.rotation.y;
            this._vdataF32[offset++] = pvdata.rotation.z;
            this._vdataUint32[offset++] = pvdata.color; // color
          }
        };
        _proto.addGPUParticleVertexData = function addGPUParticleVertexData(p, num, time) {
          if (!this._useInstance) {
            var offset = num * this._vertAttrsFloatCount * this._vertCount;
            for (var i = 0; i < this._vertCount; i++) {
              var idx = offset;
              this._vdataF32[idx++] = p.position.x;
              this._vdataF32[idx++] = p.position.y;
              this._vdataF32[idx++] = p.position.z;
              this._vdataF32[idx++] = time;
              this._vdataF32[idx++] = p.startSize.x;
              this._vdataF32[idx++] = p.startSize.y;
              this._vdataF32[idx++] = p.startSize.z;
              this._vdataF32[idx++] = _uvs[2 * i];
              this._vdataF32[idx++] = p.rotation.x;
              this._vdataF32[idx++] = p.rotation.y;
              this._vdataF32[idx++] = p.rotation.z;
              this._vdataF32[idx++] = _uvs[2 * i + 1];
              this._vdataF32[idx++] = p.startColor.r / 255.0;
              this._vdataF32[idx++] = p.startColor.g / 255.0;
              this._vdataF32[idx++] = p.startColor.b / 255.0;
              this._vdataF32[idx++] = p.startColor.a / 255.0;
              this._vdataF32[idx++] = p.velocity.x;
              this._vdataF32[idx++] = p.velocity.y;
              this._vdataF32[idx++] = p.velocity.z;
              this._vdataF32[idx++] = p.startLifetime;
              this._vdataF32[idx++] = p.randomSeed;
              offset += this._vertAttrsFloatCount;
            }
          } else {
            this.addGPUParticleVertexDataIns(p, num, time);
          }
        };
        _proto.addGPUParticleVertexDataIns = function addGPUParticleVertexDataIns(p, num, time) {
          var offset = num * this._vertAttrsFloatCount;
          var idx = offset;
          this._vdataF32[idx++] = p.position.x;
          this._vdataF32[idx++] = p.position.y;
          this._vdataF32[idx++] = p.position.z;
          this._vdataF32[idx++] = time;
          this._vdataF32[idx++] = p.startSize.x;
          this._vdataF32[idx++] = p.startSize.y;
          this._vdataF32[idx++] = p.startSize.z;
          this._vdataF32[idx++] = p.frameIndex;
          this._vdataF32[idx++] = p.rotation.x;
          this._vdataF32[idx++] = p.rotation.y;
          this._vdataF32[idx++] = p.rotation.z;
          this._vdataF32[idx++] = p.startColor.r / 255.0;
          this._vdataF32[idx++] = p.startColor.g / 255.0;
          this._vdataF32[idx++] = p.startColor.b / 255.0;
          this._vdataF32[idx++] = p.startColor.a / 255.0;
          this._vdataF32[idx++] = p.velocity.x;
          this._vdataF32[idx++] = p.velocity.y;
          this._vdataF32[idx++] = p.velocity.z;
          this._vdataF32[idx++] = p.startLifetime;
          this._vdataF32[idx++] = p.randomSeed;
          offset += this._vertAttrsFloatCount;
        };
        _proto.updateGPUParticles = function updateGPUParticles(num, time, dt) {
          if (!this._useInstance) {
            var pSize = this._vertAttrsFloatCount * this._vertCount;
            var pBaseIndex = 0;
            var startTime = 0;
            var lifeTime = 0;
            var lastBaseIndex = 0;
            var interval = 0;
            for (var i = 0; i < num; ++i) {
              pBaseIndex = i * pSize;
              startTime = this._vdataF32[pBaseIndex + this._startTimeOffset];
              lifeTime = this._vdataF32[pBaseIndex + this._lifeTimeOffset];
              interval = time - startTime;
              if (lifeTime - interval < dt) {
                lastBaseIndex = --num * pSize;
                this._vdataF32.copyWithin(pBaseIndex, lastBaseIndex, lastBaseIndex + pSize);
                i--;
              }
            }
            return num;
          } else {
            return this.updateGPUParticlesIns(num, time, dt);
          }
        };
        _proto.updateGPUParticlesIns = function updateGPUParticlesIns(num, time, dt) {
          var pSize = this._vertAttrsFloatCount;
          var pBaseIndex = 0;
          var startTime = 0;
          var lifeTime = 0;
          var lastBaseIndex = 0;
          var interval = 0;
          for (var i = 0; i < num; ++i) {
            pBaseIndex = i * pSize;
            startTime = this._vdataF32[pBaseIndex + this._startTimeOffset];
            lifeTime = this._vdataF32[pBaseIndex + this._lifeTimeOffset];
            interval = time - startTime;
            if (lifeTime - interval < dt) {
              lastBaseIndex = --num * pSize;
              this._vdataF32.copyWithin(pBaseIndex, lastBaseIndex, lastBaseIndex + pSize);
              i--;
            }
          }
          return num;
        };
        _proto.constructAttributeIndex = function constructAttributeIndex() {
          if (!this._vertAttrs) {
            return;
          }
          var vIdx = this._vertAttrs.findIndex(function (val) {
            return val.name === 'a_position_starttime';
          });
          var vOffset = this._vertAttrs[vIdx].offset;
          this._startTimeOffset = vOffset / 4 + 3;
          vIdx = this._vertAttrs.findIndex(function (val) {
            return val.name === 'a_dir_life';
          });
          vOffset = this._vertAttrs[vIdx].offset;
          this._lifeTimeOffset = vOffset / 4 + 3;
        };
        _proto.updateIA = function updateIA(count) {
          if (!this._useInstance) {
            if (count <= 0) {
              return;
            }
            var ia = this._subModels[0].inputAssembler;
            ia.vertexBuffers[0].update(this._vdataF32);
            ia.firstIndex = 0;
            ia.indexCount = this._indexCount * count;
            ia.vertexCount = this._iaVertCount;
          } else {
            this.updateIAIns(count);
          }
        };
        _proto.updateIAIns = function updateIAIns(count) {
          if (count <= 0) {
            return;
          }
          var ia = this._subModels[0].inputAssembler;
          ia.vertexBuffers[0].update(this._vdataF32); // update dynamic buffer
          ia.instanceCount = count;
          ia.firstIndex = 0;
          ia.indexCount = this._indexCount;
          ia.instanceCount = count;
          ia.vertexCount = this._iaVertCount;
        };
        _proto.clear = function clear() {
          if (!this._useInstance) {
            this._subModels[0].inputAssembler.indexCount = 0;
          } else {
            this.clearIns();
          }
        };
        _proto.clearIns = function clearIns() {
          this._subModels[0].inputAssembler.instanceCount = 0;
        };
        _proto.destroy = function destroy() {
          _scene$Model.prototype.destroy.call(this);
          this.doDestroy();
        };
        _proto.doDestroy = function doDestroy() {
          this._vBuffer = null;
          this._vdataF32 = null;
          this._vdataUint32 = null;
          this._insBuffers = [];
          this._insIndices = null;
          this._vertAttrs = null;
          this._material = null;
          this._mesh = null;
          this.destroySubMeshData();
        };
        _proto.rebuild = function rebuild() {
          if (!this._useInstance) {
            this._vBuffer = this.createSubMeshData();
            this._vdataF32 = new Float32Array(this._vBuffer);
            this._vdataUint32 = new Uint32Array(this._vBuffer);
          } else {
            this.rebuildIns();
          }
        };
        _proto.rebuildIns = function rebuildIns() {
          this._vBuffer = this.createSubMeshDataInsDynamic();
          this._vdataF32 = new Float32Array(this._vBuffer);
          this._vdataUint32 = new Uint32Array(this._vBuffer);
          this.createSubMeshDataInsStatic();
          this.createInsSubmesh();
        };
        _proto.destroySubMeshData = function destroySubMeshData() {
          if (this._subMeshData) {
            this._subMeshData.destroy();
            this._subMeshData = null;
          }
        };
        _createClass(ParticleBatchModel, [{
          key: "useInstance",
          get: function get() {
            return this._useInstance;
          },
          set: function set(value) {
            if (this._useInstance !== value) {
              this._useInstance = value;
            }
          }
        }]);
        return ParticleBatchModel;
      }(scene.Model));
    }
  };
});