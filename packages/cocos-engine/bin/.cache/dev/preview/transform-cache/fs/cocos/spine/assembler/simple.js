System.register("q-bundled:///fs/cocos/spine/assembler/simple.js", ["../../2d/renderer/static-vb-accessor.js", "../../2d/renderer/vertex-format.js", "../skeleton.js", "../../gfx/index.js", "../../core/global-exports.js", "../../2d/renderer/render-data.js", "../../game/index.js", "../lib/spine-core.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var StaticVBAccessor, vfmtPosUvColor4B, vfmtPosUvTwoColor4B, getAttributeStride, SpineMaterialType, BlendFactor, legacyCC, RenderData, director, spine, Color, Vec3, _slotColor, _boneColor, _originColor, _meshColor, _nodeR, _nodeG, _nodeB, _nodeA, _accessor, _tintAccessor, _premultipliedAlpha, _useTint, _byteStrideOneColor, _byteStrideTwoColor, DEBUG_TYPE_REGION, DEBUG_TYPE_MESH, tempVecPos, simple;
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
  function _getSlotMaterial(blendMode, comp) {
    var src;
    var dst;
    switch (blendMode) {
      case 1:
        src = _premultipliedAlpha ? BlendFactor.ONE : BlendFactor.SRC_ALPHA;
        dst = BlendFactor.ONE;
        break;
      case 2:
        src = BlendFactor.DST_COLOR;
        dst = BlendFactor.ONE_MINUS_SRC_ALPHA;
        break;
      case 3:
        src = BlendFactor.ONE;
        dst = BlendFactor.ONE_MINUS_SRC_COLOR;
        break;
      case 0:
      default:
        src = _premultipliedAlpha ? BlendFactor.ONE : BlendFactor.SRC_ALPHA;
        dst = BlendFactor.ONE_MINUS_SRC_ALPHA;
        break;
    }
    return comp.getMaterialForBlendAndTint(src, dst, _useTint ? SpineMaterialType.TWO_COLORED : SpineMaterialType.COLORED_TEXTURED);
  }
  function updateComponentRenderData(comp, batcher) {
    comp.drawList.reset();
    if (comp.color.a === 0) return;
    comp._updateColor();
    _premultipliedAlpha = comp.premultipliedAlpha;
    _useTint = comp.useTint || comp.isAnimationCached();
    if (comp.isAnimationCached()) {
      cacheTraverse(comp);
    } else {
      realTimeTraverse(comp);
    }
    var rd = comp.renderData;
    var accessor = _useTint ? _tintAccessor : _accessor;
    comp.syncAttachedNode();
    if (rd.vertexCount > 0 || rd.indexCount > 0) accessor.getMeshBuffer(rd.chunk.bufferId).setDirty();
  }
  function realTimeTraverse(comp) {
    var _comp$_vBuffer, _comp$_iBuffer;
    var floatStride = (comp.useTint ? _byteStrideTwoColor : _byteStrideOneColor) / Float32Array.BYTES_PER_ELEMENT;
    var model = comp.updateRenderData();
    var vc = model.vCount;
    var ic = model.iCount;
    if (vc < 1 || ic < 1) return;
    var rd = comp.renderData;
    if (rd.vertexCount !== vc || rd.indexCount !== ic) {
      rd.resize(vc, ic);
      rd.indices = new Uint16Array(ic);
      comp._vLength = vc * Float32Array.BYTES_PER_ELEMENT * floatStride;
      comp._vBuffer = new Uint8Array(rd.chunk.vb.buffer, rd.chunk.vb.byteOffset, Float32Array.BYTES_PER_ELEMENT * rd.chunk.vb.length);
      comp._iLength = Uint16Array.BYTES_PER_ELEMENT * ic;
      comp._iBuffer = new Uint8Array(rd.indices.buffer);
    }
    var vbuf = rd.chunk.vb;
    var vPtr = model.vPtr;
    var iPtr = model.iPtr;
    var ibuf = rd.indices;
    var HEAPU8 = spine.wasmUtil.wasm.HEAPU8;
    (_comp$_vBuffer = comp._vBuffer) === null || _comp$_vBuffer === void 0 ? void 0 : _comp$_vBuffer.set(HEAPU8.subarray(vPtr, vPtr + comp._vLength), 0);
    (_comp$_iBuffer = comp._iBuffer) === null || _comp$_iBuffer === void 0 ? void 0 : _comp$_iBuffer.set(HEAPU8.subarray(iPtr, iPtr + comp._iLength), 0);
    var chunkOffset = rd.chunk.vertexOffset;
    for (var i = 0; i < ic; i++) ibuf[i] += chunkOffset;
    var data = model.getData();
    var count = data.size();
    var indexOffset = 0;
    var indexCount = 0;
    for (var _i = 0; _i < count; _i += 6) {
      indexCount = data.get(_i + 3);
      var material = _getSlotMaterial(data.get(_i + 4), comp);
      var textureID = data.get(_i + 5);
      comp.requestDrawData(material, textureID, indexOffset, indexCount);
      indexOffset += indexCount;
    }

    // if enableBatch apply worldMatrix
    if (comp.enableBatch) {
      var worldMat = comp.node.worldMatrix;
      var index = 0;
      for (var _i2 = 0; _i2 < vc; _i2++) {
        index = _i2 * floatStride;
        tempVecPos.x = vbuf[index];
        tempVecPos.y = vbuf[index + 1];
        tempVecPos.transformMat4(worldMat);
        vbuf[index] = tempVecPos.x;
        vbuf[index + 1] = tempVecPos.y;
        vbuf[index + 2] = 0;
      }
    }

    // debug renderer
    var graphics = comp._debugRenderer;
    var locSkeleton = comp._skeleton;
    if (graphics && (comp.debugBones || comp.debugSlots || comp.debugMesh)) {
      graphics.clear();
      var debugShapes = comp.getDebugShapes();
      var shapeCount = debugShapes.size();
      for (var _i3 = 0; _i3 < shapeCount; _i3++) {
        var shape = debugShapes.get(_i3);
        if (shape.type === DEBUG_TYPE_REGION && comp.debugSlots) {
          graphics.strokeColor = _slotColor;
          var vertexFloatOffset = shape.vOffset * floatStride;
          var vertexFloatCount = shape.vCount * floatStride;
          graphics.moveTo(vbuf[vertexFloatOffset], vbuf[vertexFloatOffset + 1]);
          for (var ii = vertexFloatOffset + floatStride, nn = vertexFloatOffset + vertexFloatCount; ii < nn; ii += floatStride) {
            graphics.lineTo(vbuf[ii], vbuf[ii + 1]);
          }
          graphics.close();
          graphics.stroke();
        } else if (shape.type === DEBUG_TYPE_MESH && comp.debugMesh) {
          // draw debug mesh if enabled graphics
          graphics.strokeColor = _meshColor;
          var iCount = shape.iCount;
          var iOffset = shape.iOffset;
          for (var _ii = iOffset, _nn = iOffset + iCount; _ii < _nn; _ii += 3) {
            var v1 = ibuf[_ii] * floatStride;
            var v2 = ibuf[_ii + 1] * floatStride;
            var v3 = ibuf[_ii + 2] * floatStride;
            graphics.moveTo(vbuf[v1], vbuf[v1 + 1]);
            graphics.lineTo(vbuf[v2], vbuf[v2 + 1]);
            graphics.lineTo(vbuf[v3], vbuf[v3 + 1]);
            graphics.close();
            graphics.stroke();
          }
        }
      }
      if (comp.debugBones) {
        graphics.strokeColor = _boneColor;
        graphics.fillColor = _slotColor; // Root bone color is same as slot color.

        for (var _i4 = 0, n = locSkeleton.bones.length; _i4 < n; _i4++) {
          var bone = locSkeleton.bones[_i4];
          var x = bone.data.length * bone.a + bone.worldX;
          var y = bone.data.length * bone.c + bone.worldY;

          // Bone lengths.
          graphics.moveTo(bone.worldX, bone.worldY);
          graphics.lineTo(x, y);
          graphics.stroke();

          // Bone origins.
          graphics.circle(bone.worldX, bone.worldY, Math.PI * 1.5);
          graphics.fill();
          if (_i4 === 0) {
            graphics.fillColor = _originColor;
          }
        }
      }
    }
  }
  function cacheTraverse(comp) {
    var model = comp.updateRenderData();
    if (!model) return;
    var vc = model.vCount;
    var ic = model.iCount;
    if (vc < 1 || ic < 1) return;
    var rd = comp.renderData;
    if (rd.vertexCount !== vc || rd.indexCount !== ic) {
      rd.resize(vc, ic);
      rd.indices = new Uint16Array(ic);
    }
    var vbuf = rd.chunk.vb;
    var vUint8Buf = new Uint8Array(vbuf.buffer, vbuf.byteOffset, Float32Array.BYTES_PER_ELEMENT * vbuf.length);
    vUint8Buf.set(model.vData);
    var nodeColor = comp.color;
    if (nodeColor._val !== 0xffffffff || _premultipliedAlpha) {
      _nodeR = nodeColor.r / 255;
      _nodeG = nodeColor.g / 255;
      _nodeB = nodeColor.b / 255;
      _nodeA = nodeColor.a / 255;
      for (var i = 0; i < vc; i++) {
        var index = i * _byteStrideTwoColor + 5 * Float32Array.BYTES_PER_ELEMENT;
        var R = vUint8Buf[index];
        var G = vUint8Buf[index + 1];
        var B = vUint8Buf[index + 2];
        var A = vUint8Buf[index + 3];
        var fA = A * _nodeA;
        var multiplier = _premultipliedAlpha ? fA / 255 : 1;
        vUint8Buf[index] = Math.floor(multiplier * R * _nodeR);
        vUint8Buf[index + 1] = Math.floor(multiplier * G * _nodeG);
        vUint8Buf[index + 2] = Math.floor(multiplier * B * _nodeB);
        vUint8Buf[index + 3] = Math.floor(fA);
        vUint8Buf[index + 4] = Math.floor(vUint8Buf[index + 4] * _nodeR);
        vUint8Buf[index + 5] = Math.floor(vUint8Buf[index + 5] * _nodeG);
        vUint8Buf[index + 6] = Math.floor(vUint8Buf[index + 6] * _nodeB);
        vUint8Buf[index + 7] = _premultipliedAlpha ? 255 : 0;
      }
    }
    var iUint16Buf = rd.indices;
    iUint16Buf.set(model.iData);
    var chunkOffset = rd.chunk.vertexOffset;
    for (var _i5 = 0; _i5 < ic; _i5++) {
      iUint16Buf[_i5] += chunkOffset;
    }
    var meshes = model.meshes;
    var count = meshes.length;
    var indexOffset = 0;
    var indexCount = 0;
    for (var _i6 = 0; _i6 < count; _i6++) {
      var mesh = meshes[_i6];
      var material = _getSlotMaterial(mesh.blendMode, comp);
      var textureID = mesh.textureID;
      indexCount = mesh.iCount;
      comp.requestDrawData(material, textureID, indexOffset, indexCount);
      indexOffset += indexCount;
    }
    var floatStride = _byteStrideTwoColor / Float32Array.BYTES_PER_ELEMENT;
    if (comp.enableBatch) {
      var worldMat = comp.node.worldMatrix;
      var _index = 0;
      for (var _i7 = 0; _i7 < vc; _i7++) {
        _index = _i7 * floatStride;
        tempVecPos.x = vbuf[_index];
        tempVecPos.y = vbuf[_index + 1];
        tempVecPos.z = 0;
        tempVecPos.transformMat4(worldMat);
        vbuf[_index] = tempVecPos.x;
        vbuf[_index + 1] = tempVecPos.y;
        vbuf[_index + 2] = tempVecPos.z;
      }
    }
  }
  return {
    setters: [function (_dRendererStaticVbAccessorJs) {
      StaticVBAccessor = _dRendererStaticVbAccessorJs.StaticVBAccessor;
    }, function (_dRendererVertexFormatJs) {
      vfmtPosUvColor4B = _dRendererVertexFormatJs.vfmtPosUvColor4B;
      vfmtPosUvTwoColor4B = _dRendererVertexFormatJs.vfmtPosUvTwoColor4B;
      getAttributeStride = _dRendererVertexFormatJs.getAttributeStride;
    }, function (_skeletonJs) {
      SpineMaterialType = _skeletonJs.SpineMaterialType;
    }, function (_gfxIndexJs) {
      BlendFactor = _gfxIndexJs.BlendFactor;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_dRendererRenderDataJs) {
      RenderData = _dRendererRenderDataJs.RenderData;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }, function (_libSpineCoreJs) {
      spine = _libSpineCoreJs.default;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Vec3 = _coreIndexJs.Vec3;
    }],
    execute: function () {
      _slotColor = new Color(0, 0, 255, 255);
      _boneColor = new Color(255, 0, 0, 255);
      _originColor = new Color(0, 255, 0, 255);
      _meshColor = new Color(255, 255, 0, 255);
      _accessor = null;
      _tintAccessor = null;
      _premultipliedAlpha = false;
      _useTint = false;
      _byteStrideOneColor = getAttributeStride(vfmtPosUvColor4B);
      _byteStrideTwoColor = getAttributeStride(vfmtPosUvTwoColor4B);
      DEBUG_TYPE_REGION = 0;
      DEBUG_TYPE_MESH = 1;
      tempVecPos = new Vec3(0, 0, 0);
      _export("simple", simple = {
        vCount: 32767,
        ensureAccessor: function ensureAccessor(useTint) {
          var accessor = useTint ? _tintAccessor : _accessor;
          if (!accessor) {
            var device = director.root.device;
            var batcher = director.root.batcher2D;
            var attributes = useTint ? vfmtPosUvTwoColor4B : vfmtPosUvColor4B;
            if (useTint) {
              accessor = _tintAccessor = new StaticVBAccessor(device, attributes, this.vCount);
              // Register to batcher so that batcher can upload buffers after batching process
              batcher.registerBufferAccessor(Number.parseInt('SPINETINT', 36), _tintAccessor);
            } else {
              accessor = _accessor = new StaticVBAccessor(device, attributes, this.vCount);
              // Register to batcher so that batcher can upload buffers after batching process
              batcher.registerBufferAccessor(Number.parseInt('SPINE', 36), _accessor);
            }
          }
          return accessor;
        },
        createData: function createData(comp) {
          var rd = comp.renderData;
          if (!rd) {
            var useTint = comp.useTint || comp.isAnimationCached();
            var accessor = this.ensureAccessor(useTint);
            rd = RenderData.add(useTint ? vfmtPosUvTwoColor4B : vfmtPosUvColor4B, accessor);
          }
          return rd;
        },
        updateRenderData: function updateRenderData(comp, batcher) {
          var skeleton = comp._skeleton;
          if (skeleton) {
            updateComponentRenderData(comp, batcher);
          }
        }
      });
      legacyCC.internal.SpineAssembler = simple;
    }
  };
});