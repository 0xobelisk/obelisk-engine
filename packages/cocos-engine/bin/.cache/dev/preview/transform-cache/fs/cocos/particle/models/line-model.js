System.register("q-bundled:///fs/cocos/particle/models/line-model.js", ["../../../../virtual/internal%253Aconstants.js", "../../asset/assets/rendering-sub-mesh.js", "../../gfx/index.js", "../../core/index.js", "../../render-scene/index.js"], function (_export, _context) {
  "use strict";

  var JSB, RenderingSubMesh, Attribute, BufferInfo, AttributeName, BufferUsageBit, Format, FormatInfos, MemoryUsageBit, PrimitiveMode, Vec3, scene, _vertex_attrs, _temp_v1, _temp_v2, LineModel;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_assetAssetsRenderingSubMeshJs) {
      RenderingSubMesh = _assetAssetsRenderingSubMeshJs.RenderingSubMesh;
    }, function (_gfxIndexJs) {
      Attribute = _gfxIndexJs.Attribute;
      BufferInfo = _gfxIndexJs.BufferInfo;
      AttributeName = _gfxIndexJs.AttributeName;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      Format = _gfxIndexJs.Format;
      FormatInfos = _gfxIndexJs.FormatInfos;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }],
    execute: function () {
      _vertex_attrs = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F),
      // xyz:position
      new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGBA32F),
      // x:index y:size zw:texcoord
      new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F),
      // xyz:velocity
      new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true)];
      _temp_v1 = new Vec3();
      _temp_v2 = new Vec3();
      _export("LineModel", LineModel = /*#__PURE__*/function (_scene$Model) {
        _inheritsLoose(LineModel, _scene$Model);
        function LineModel() {
          var _this;
          _this = _scene$Model.call(this) || this;
          _this._capacity = void 0;
          _this._vertSize = 0;
          _this._vBuffer = null;
          _this._vertAttrsFloatCount = 0;
          _this._vdataF32 = null;
          _this._vdataUint32 = null;
          _this._subMeshData = null;
          _this._vertCount = 0;
          _this._indexCount = 0;
          _this._material = null;
          _this._iaVertCount = 0;
          _this._iaIndexCount = 0;
          if (JSB) {
            _assertThisInitialized(_this)._registerListeners();
          }
          _this.type = scene.ModelType.LINE;
          _this._capacity = 100;
          return _this;
        }
        var _proto = LineModel.prototype;
        _proto.setCapacity = function setCapacity(capacity) {
          this._capacity = capacity;
          this.createBuffer();
        };
        _proto.createBuffer = function createBuffer() {
          this._vertSize = 0;
          for (var _i = 0, _vertex_attrs2 = _vertex_attrs; _i < _vertex_attrs2.length; _i++) {
            var a = _vertex_attrs2[_i];
            a.offset = this._vertSize;
            this._vertSize += FormatInfos[a.format].size;
          }
          this._vertAttrsFloatCount = this._vertSize / 4; // number of float
          this._vBuffer = this.createSubMeshData();
          this._vdataF32 = new Float32Array(this._vBuffer);
          this._vdataUint32 = new Uint32Array(this._vBuffer);
        };
        _proto.updateMaterial = function updateMaterial(mat) {
          this._material = mat;
          _scene$Model.prototype.setSubModelMaterial.call(this, 0, mat);
        };
        _proto.createSubMeshData = function createSubMeshData() {
          if (this._subMeshData) {
            this.destroySubMeshData();
          }
          this._vertCount = 2;
          this._indexCount = 6;
          var vertexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, this._vertSize * this._capacity * this._vertCount, this._vertSize));
          var vBuffer = new ArrayBuffer(this._vertSize * this._capacity * this._vertCount);
          vertexBuffer.update(vBuffer);
          var indices = new Uint16Array((this._capacity - 1) * this._indexCount);
          var dst = 0;
          for (var i = 0; i < this._capacity - 1; ++i) {
            var baseIdx = 2 * i;
            indices[dst++] = baseIdx;
            indices[dst++] = baseIdx + 1;
            indices[dst++] = baseIdx + 2;
            indices[dst++] = baseIdx + 3;
            indices[dst++] = baseIdx + 2;
            indices[dst++] = baseIdx + 1;
          }
          var indexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, (this._capacity - 1) * this._indexCount * Uint16Array.BYTES_PER_ELEMENT, Uint16Array.BYTES_PER_ELEMENT));
          indexBuffer.update(indices);
          this._iaVertCount = this._capacity * this._vertCount;
          this._iaIndexCount = (this._capacity - 1) * this._indexCount;
          this._subMeshData = new RenderingSubMesh([vertexBuffer], _vertex_attrs, PrimitiveMode.TRIANGLE_LIST, indexBuffer);
          this.initSubModel(0, this._subMeshData, this._material);
          return vBuffer;
        };
        _proto.addLineVertexData = function addLineVertexData(positions, width, color) {
          if (positions.length > 1) {
            var offset = 0;
            Vec3.subtract(_temp_v1, positions[1], positions[0]);
            this._vdataF32[offset++] = positions[0].x;
            this._vdataF32[offset++] = positions[0].y;
            this._vdataF32[offset++] = positions[0].z;
            this._vdataF32[offset++] = 0;
            this._vdataF32[offset++] = width.evaluate(0, 1);
            this._vdataF32[offset++] = 0;
            this._vdataF32[offset++] = 0;
            this._vdataF32[offset++] = _temp_v1.x;
            this._vdataF32[offset++] = _temp_v1.y;
            this._vdataF32[offset++] = _temp_v1.z;
            this._vdataUint32[offset++] = color.evaluate(0, 1)._val;
            this._vdataF32[offset++] = positions[0].x;
            this._vdataF32[offset++] = positions[0].y;
            this._vdataF32[offset++] = positions[0].z;
            this._vdataF32[offset++] = 1;
            this._vdataF32[offset++] = width.evaluate(0, 1);
            this._vdataF32[offset++] = 0;
            this._vdataF32[offset++] = 1;
            this._vdataF32[offset++] = _temp_v1.x;
            this._vdataF32[offset++] = _temp_v1.y;
            this._vdataF32[offset++] = _temp_v1.z;
            this._vdataUint32[offset++] = color.evaluate(0, 1)._val;
            for (var i = 1; i < positions.length - 1; i++) {
              Vec3.subtract(_temp_v1, positions[i - 1], positions[i]);
              Vec3.subtract(_temp_v2, positions[i + 1], positions[i]);
              Vec3.subtract(_temp_v2, _temp_v2, _temp_v1);
              var seg = i / positions.length;
              this._vdataF32[offset++] = positions[i].x;
              this._vdataF32[offset++] = positions[i].y;
              this._vdataF32[offset++] = positions[i].z;
              this._vdataF32[offset++] = 0;
              this._vdataF32[offset++] = width.evaluate(seg, 1);
              this._vdataF32[offset++] = seg;
              this._vdataF32[offset++] = 0;
              this._vdataF32[offset++] = _temp_v2.x;
              this._vdataF32[offset++] = _temp_v2.y;
              this._vdataF32[offset++] = _temp_v2.z;
              this._vdataUint32[offset++] = color.evaluate(seg, 1)._val;
              this._vdataF32[offset++] = positions[i].x;
              this._vdataF32[offset++] = positions[i].y;
              this._vdataF32[offset++] = positions[i].z;
              this._vdataF32[offset++] = 1;
              this._vdataF32[offset++] = width.evaluate(seg, 1);
              this._vdataF32[offset++] = seg;
              this._vdataF32[offset++] = 1;
              this._vdataF32[offset++] = _temp_v2.x;
              this._vdataF32[offset++] = _temp_v2.y;
              this._vdataF32[offset++] = _temp_v2.z;
              this._vdataUint32[offset++] = color.evaluate(seg, 1)._val;
            }
            Vec3.subtract(_temp_v1, positions[positions.length - 1], positions[positions.length - 2]);
            this._vdataF32[offset++] = positions[positions.length - 1].x;
            this._vdataF32[offset++] = positions[positions.length - 1].y;
            this._vdataF32[offset++] = positions[positions.length - 1].z;
            this._vdataF32[offset++] = 0;
            this._vdataF32[offset++] = width.evaluate(1, 1);
            this._vdataF32[offset++] = 1;
            this._vdataF32[offset++] = 0;
            this._vdataF32[offset++] = _temp_v1.x;
            this._vdataF32[offset++] = _temp_v1.y;
            this._vdataF32[offset++] = _temp_v1.z;
            this._vdataUint32[offset++] = color.evaluate(1, 1)._val;
            this._vdataF32[offset++] = positions[positions.length - 1].x;
            this._vdataF32[offset++] = positions[positions.length - 1].y;
            this._vdataF32[offset++] = positions[positions.length - 1].z;
            this._vdataF32[offset++] = 1;
            this._vdataF32[offset++] = width.evaluate(1, 1);
            this._vdataF32[offset++] = 1;
            this._vdataF32[offset++] = 1;
            this._vdataF32[offset++] = _temp_v1.x;
            this._vdataF32[offset++] = _temp_v1.y;
            this._vdataF32[offset++] = _temp_v1.z;
            this._vdataUint32[offset++] = color.evaluate(1, 1)._val;
          }
          this.updateIA(Math.max(0, positions.length - 1));
        };
        _proto.updateIA = function updateIA(count) {
          var ia = this._subModels[0].inputAssembler;
          ia.vertexBuffers[0].update(this._vdataF32);
          ia.firstIndex = 0;
          ia.indexCount = this._indexCount * count;
          ia.vertexCount = this._iaVertCount;
        };
        _proto.destroySubMeshData = function destroySubMeshData() {
          if (this._subMeshData) {
            this._subMeshData.destroy();
            this._subMeshData = null;
          }
        };
        return LineModel;
      }(scene.Model));
    }
  };
});