System.register("q-bundled:///fs/cocos/dragon-bones/assembler/simple.js", ["../../core/index.js", "../../gfx/index.js", "../../2d/renderer/vertex-format.js", "../../2d/renderer/static-vb-accessor.js", "../../2d/renderer/render-data.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var Color, Mat4, Vec3, cclegacy, BlendFactor, vfmtPosUvColor, StaticVBAccessor, RenderData, director, NEED_COLOR, NEED_BATCH, _boneColor, _slotColor, _originColor, _nodeR, _nodeG, _nodeB, _nodeA, _premultipliedAlpha, _multiply, _mustFlush, _renderData, _ibuf, _vbuf, _node, _comp, _vertexFloatCount, _vertexCount, _vertexOffset, _vertexFloatOffset, _indexCount, _indexOffset, _actualVCount, _actualICount, _prevDrawIndexOffset, LOCAL_FLOAT_PER_VERTEX, PER_VERTEX_SIZE, _c, _handleVal, _tempVecPos, _slotMat, _currentMaterial, _currentTexture, _accessor, simple;
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
  function _getSlotMaterial(tex, blendMode) {
    if (!tex) return null;
    var src;
    var dst;
    switch (blendMode) {
      case 1:
        // additive
        src = _premultipliedAlpha ? BlendFactor.ONE : BlendFactor.SRC_ALPHA;
        dst = BlendFactor.ONE;
        break;
      case 10:
        // multiply
        src = BlendFactor.DST_COLOR;
        dst = BlendFactor.ONE_MINUS_SRC_ALPHA;
        break;
      case 12:
        // screen
        src = BlendFactor.ONE;
        dst = BlendFactor.ONE_MINUS_SRC_COLOR;
        break;
      case 0: // normal
      default:
        src = _premultipliedAlpha ? BlendFactor.ONE : BlendFactor.SRC_ALPHA;
        dst = BlendFactor.ONE_MINUS_SRC_ALPHA;
        break;
    }
    return _comp.getMaterialForBlend(src, dst);
  }
  function _handleColor(color, parentOpacity) {
    var _a = color.a * parentOpacity * _nodeA;
    var _multiply = _premultipliedAlpha ? _a / 255.0 : 1.0;
    var _r = color.r * _nodeR * _multiply / 255.0;
    var _g = color.g * _nodeG * _multiply / 255.0;
    var _b = color.b * _nodeB * _multiply / 255.0;
    _c[0] = _r;
    _c[1] = _g;
    _c[2] = _b;
    _c[3] = _premultipliedAlpha ? 1.0 : _a / 255.0;
  }
  function realTimeTraverse(armature, parentOpacity, worldMat) {
    var rd = _renderData;
    _vbuf = rd.chunk.vb;
    _ibuf = rd.indices;
    var slots = armature._slots;
    var material;
    var vertices;
    var indices;
    var slotColor;
    var slot;
    var cumulatedCount = 0;
    for (var i = 0, l = slots.length; i < l; i++) {
      slot = slots[i];
      slotColor = slot._color;
      if (!slot._visible || !slot._displayData) continue;
      if (worldMat) {
        /* enable batch or recursive armature */
        Mat4.multiply(slot._worldMatrix, worldMat, slot._matrix);
      } else {
        Mat4.copy(slot._worldMatrix, slot._matrix);
      }
      if (slot.childArmature) {
        realTimeTraverse(slot.childArmature, slotColor.a / 255, slot._worldMatrix);
        continue;
      }
      material = _getSlotMaterial(slot.getTexture(), slot._blendMode);
      if (!material) {
        continue;
      }
      if (!_currentMaterial) _currentMaterial = material;
      var texture = slot.getTexture();
      if (_mustFlush || material.hash !== _currentMaterial.hash || texture && _currentTexture !== texture) {
        _mustFlush = false;
        var _cumulatedCount = _indexOffset - _prevDrawIndexOffset;
        // Submit draw data
        if (_cumulatedCount > 0) {
          _comp._requestDrawData(_currentMaterial, _currentTexture, _prevDrawIndexOffset, _cumulatedCount);
          _prevDrawIndexOffset = _indexOffset;
        }
        _currentTexture = texture;
        _currentMaterial = material;
      }
      _handleColor(slotColor, parentOpacity);
      _slotMat.set(slot._worldMatrix);
      vertices = slot._localVertices;
      _vertexCount = vertices.length / LOCAL_FLOAT_PER_VERTEX;
      _vertexFloatCount = _vertexCount * PER_VERTEX_SIZE;
      indices = slot._indices;
      _indexCount = indices.length;

      // Slot and vertices in armature may be replaced in some cases
      // (for example caused by CCFactory.replaceSlotDisplay)
      var isResize = false;
      if (_vertexOffset + _vertexCount > _actualVCount) {
        _actualVCount = _vertexOffset + _vertexCount;
        isResize = true;
      }
      if (_indexOffset + _indexCount > _actualICount) {
        _actualICount = _indexOffset + _indexCount;
        isResize = true;
      }
      if (isResize) {
        var oldIndices = _ibuf;
        var oldChunkOffset = rd.chunk.vertexOffset;
        rd.resizeAndCopy(_actualVCount, _actualICount > rd.indexCount ? _actualICount : rd.indexCount);
        _vbuf = rd.chunk.vb;
        if (_actualICount > _ibuf.length) {
          _ibuf = rd.indices = new Uint16Array(_actualICount);
        }
        var correction = rd.chunk.vertexOffset - oldChunkOffset;
        for (var _i = 0; _i < _indexOffset; ++_i) {
          _ibuf[_i] = oldIndices[_i] + correction;
        }
      }

      // vertext format:
      //       x y z u v r g b a
      for (var vi = 0, vl = vertices.length, v = _vertexFloatOffset; vi < vl; v += PER_VERTEX_SIZE) {
        _tempVecPos.x = vertices[vi++];
        _tempVecPos.y = vertices[vi++];
        _tempVecPos.z = 0;
        _tempVecPos.transformMat4(_slotMat);
        _vbuf[v] = _tempVecPos.x;
        _vbuf[v + 1] = _tempVecPos.y;
        _vbuf[v + 2] = _tempVecPos.z;
        _vbuf[v + 3] = vertices[vi++]; // u
        _vbuf[v + 4] = vertices[vi++]; // v

        _vbuf.set(_c, v + 5); // color
      }

      var chunkOffset = rd.chunk.vertexOffset;
      for (var _i2 = 0, il = indices.length, ii = _indexOffset; _i2 < il; _i2++, ii++) {
        _ibuf[ii] = _vertexOffset + indices[_i2] + chunkOffset;
      }
      _vertexFloatOffset += _vertexFloatCount;
      _vertexOffset += _vertexCount;
      _indexOffset += _indexCount;
      _vertexCount = 0;
      _indexCount = 0;
    }
    cumulatedCount = _indexOffset - _prevDrawIndexOffset;
    if (_currentTexture && cumulatedCount > 0) {
      _comp._requestDrawData(_currentMaterial, _currentTexture, _prevDrawIndexOffset, cumulatedCount);
      _prevDrawIndexOffset = _indexOffset;
    }
    if (_comp.maxIndexCount < _actualICount) {
      _comp.maxIndexCount = _actualICount;
    }
    if (_comp.maxVertexCount < _actualVCount) {
      _comp.maxVertexCount = _actualVCount;
    }
  }
  function cacheTraverse(frame, parentMat) {
    if (!frame) return;
    var segments = frame.segments;
    if (segments.length === 0) return;
    var material = null;
    // let offsetInfo;
    var vertices = frame.vertices;
    var indices = frame.indices;
    var chunkOffset = 0;
    var frameVFOffset = 0;
    var frameIndexOffset = 0;
    var segVFCount = 0;
    var colorOffset = 0;
    var colors = frame.colors;
    var nowColor = colors[colorOffset++];
    var maxVFOffset = nowColor.vfOffset;
    _handleColor(nowColor, 1.0);
    var rd = _renderData;
    var vbuf = rd.chunk.vb;
    var ibuf = rd.indices;
    for (var i = 0, n = segments.length; i < n; i++) {
      var segInfo = segments[i];
      material = _getSlotMaterial(segInfo.tex, segInfo.blendMode);
      if (!material) continue;
      if (!_currentMaterial) _currentMaterial = material;
      if (_mustFlush || material.hash !== _currentMaterial.hash || segInfo.tex && segInfo.tex !== _currentTexture) {
        _mustFlush = false;
        var _cumulatedCount2 = _indexOffset - _prevDrawIndexOffset;
        // Submit draw data
        if (_cumulatedCount2 > 0) {
          _comp._requestDrawData(_currentMaterial, _currentTexture, _prevDrawIndexOffset, _cumulatedCount2);
          _prevDrawIndexOffset = _indexOffset;
        }
        _currentMaterial = material;
        _currentTexture = segInfo.tex;
      }
      _vertexCount = segInfo.vertexCount;
      _indexCount = segInfo.indexCount;

      // Fill indices
      chunkOffset = rd.chunk.vertexOffset;
      for (var ii = _indexOffset, il = _indexOffset + _indexCount; ii < il; ii++) {
        ibuf[ii] = chunkOffset + _vertexOffset + indices[frameIndexOffset++];
      }

      // Fill vertices
      segVFCount = segInfo.vfCount;
      var subArray = vertices.subarray(frameVFOffset, segVFCount);
      vbuf.set(subArray, frameVFOffset);
      var offset = 0;
      if (parentMat) {
        for (var _ii = 0, _il = _vertexCount; _ii < _il; _ii++) {
          _tempVecPos.x = vbuf[offset];
          _tempVecPos.y = vbuf[offset + 1];
          _tempVecPos.z = 0;
          _tempVecPos.transformMat4(parentMat);
          vbuf[offset] = _tempVecPos.x;
          vbuf[offset + 1] = _tempVecPos.y;
          vbuf[offset + 2] = _tempVecPos.z;
          offset += PER_VERTEX_SIZE;
        }
      }
      if (_handleVal & NEED_COLOR) {
        // handle color
        // tip: step of frameColorOffset should fix with vertex attributes, (xyzuvrgba--xyuvc)
        var frameColorOffset = frameVFOffset / 9 * 5;
        for (var _ii2 = frameVFOffset, iEnd = frameVFOffset + segVFCount; _ii2 < iEnd; _ii2 += PER_VERTEX_SIZE, frameColorOffset += 5) {
          if (frameColorOffset >= maxVFOffset) {
            nowColor = colors[colorOffset++];
            _handleColor(nowColor, 1.0);
            maxVFOffset = nowColor.vfOffset;
          }
          vbuf.set(_c, _ii2 + 5);
        }
      }
      // Segment increment
      frameVFOffset += segVFCount;
      _vertexOffset += _vertexCount;
      _indexOffset += _indexCount;
      _vertexCount = 0;
      _indexCount = 0;
    }
    var cumulatedCount = _indexOffset - _prevDrawIndexOffset;
    if (_currentTexture && cumulatedCount > 0) {
      _comp._requestDrawData(_currentMaterial, _currentTexture, _prevDrawIndexOffset, cumulatedCount);
    }
  }
  function updateComponentRenderData(comp, batcher) {
    // comp.node._renderFlag |= RenderFlow.FLAG_UPDATE_RENDER_DATA;

    var armature = comp._armature;
    if (!armature || comp.renderData === null) return;

    // Init temp var.
    _mustFlush = true;
    _premultipliedAlpha = comp.premultipliedAlpha;
    // Reuse draw list
    comp.drawList.reset();
    _comp = comp;
    _node = comp.node;
    _renderData = comp.renderData;
    _comp = comp;
    _handleVal = 0;
    _currentMaterial = null;
    var nodeColor = comp.color;
    _nodeR = nodeColor.r / 255;
    _nodeG = nodeColor.g / 255;
    _nodeB = nodeColor.b / 255;
    _nodeA = comp.node._uiProps.opacity;
    if (nodeColor._val !== 0xffffffff) {
      _handleVal |= NEED_COLOR;
    }
    var worldMat = comp.node.getWorldMatrix();
    _vertexFloatCount = 0;
    _vertexOffset = 0;
    _vertexFloatOffset = 0;
    _indexCount = 0;
    _indexOffset = 0;
    _prevDrawIndexOffset = 0;
    _actualVCount = _comp.maxVertexCount;
    _actualICount = _comp.maxIndexCount;
    if (comp.isAnimationCached()) {
      // Traverse input assembler.
      cacheTraverse(comp._curFrame, worldMat);
    } else {
      // Traverse all armature.
      realTimeTraverse(armature, 1.0, worldMat);
      var graphics = comp._debugDraw;
      if (comp.debugBones && graphics) {
        graphics.clear();
        graphics.lineWidth = 5;
        graphics.strokeColor = _boneColor;
        graphics.fillColor = _slotColor; // Root bone color is same as slot color.

        var bones = armature.getBones();
        for (var i = 0, l = bones.length; i < l; i++) {
          var bone = bones[i];
          var boneLength = Math.max(bone.boneData.length, 5);
          var startX = bone.globalTransformMatrix.tx;
          var startY = bone.globalTransformMatrix.ty;
          var endX = startX + bone.globalTransformMatrix.a * boneLength;
          var endY = startY + bone.globalTransformMatrix.b * boneLength;
          graphics.moveTo(startX, startY);
          graphics.lineTo(endX, endY);
          graphics.stroke();

          // Bone origins.
          graphics.circle(startX, startY, Math.PI * 2);
          graphics.fill();
          if (i === 0) {
            graphics.fillColor = _originColor;
          }
        }
      }
    }
    // Ensure mesh buffer update
    _accessor.getMeshBuffer(_renderData.chunk.bufferId).setDirty();

    // Clear temp var.
    _node = undefined;
    _comp = undefined;
  }
  return {
    setters: [function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Mat4 = _coreIndexJs.Mat4;
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_gfxIndexJs) {
      BlendFactor = _gfxIndexJs.BlendFactor;
    }, function (_dRendererVertexFormatJs) {
      vfmtPosUvColor = _dRendererVertexFormatJs.vfmtPosUvColor;
    }, function (_dRendererStaticVbAccessorJs) {
      StaticVBAccessor = _dRendererStaticVbAccessorJs.StaticVBAccessor;
    }, function (_dRendererRenderDataJs) {
      RenderData = _dRendererRenderDataJs.RenderData;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }],
    execute: function () {
      NEED_COLOR = 0x01;
      NEED_BATCH = 0x10;
      _boneColor = new Color(255, 0, 0, 255);
      _slotColor = new Color(0, 0, 255, 255);
      _originColor = new Color(0, 255, 0, 255);
      /** node R [0,1] */
      _vertexFloatCount = 0;
      _vertexCount = 0;
      _vertexOffset = 0;
      _vertexFloatOffset = 0;
      _indexCount = 0;
      _indexOffset = 0;
      _actualVCount = 0;
      _actualICount = 0;
      _prevDrawIndexOffset = 0;
      LOCAL_FLOAT_PER_VERTEX = 4; //xyuv
      PER_VERTEX_SIZE = 3 + 2 + 4; //xyz-uv-rgba;
      _c = new Float32Array(4);
      _tempVecPos = new Vec3(0, 0, 0);
      _slotMat = new Mat4();
      _currentMaterial = null;
      _currentTexture = null;
      _accessor = null;
      /**
       * @engineInternal Since v3.7.2 this is an engine private object.
       * simple 组装器
       * 可通过 `UI.simple` 获取该组装器。
       */
      _export("simple", simple = {
        accessor: _accessor,
        vCount: 32767,
        ensureAccessor: function ensureAccessor() {
          if (!_accessor) {
            var device = director.root.device;
            var batcher = director.root.batcher2D;
            var attributes = vfmtPosUvColor;
            this.accessor = _accessor = new StaticVBAccessor(device, attributes, this.vCount);
            // Register to batcher so that batcher can upload buffers after batching process
            batcher.registerBufferAccessor(Number.parseInt('DRAGONBONES', 36), _accessor);
          }
          return this.accessor;
        },
        createData: function createData(comp) {
          var rd = comp.renderData;
          if (!rd) {
            this.ensureAccessor();
            var slots = comp._armature._slots;
            var vCount = 0;
            var iCount = 0;
            for (var i = 0; i < slots.length; ++i) {
              var slot = slots[i];
              var remainder = slot._localVertices.length % 4;
              if (remainder === 0) {
                vCount += slot._localVertices.length / LOCAL_FLOAT_PER_VERTEX;
              } else {
                vCount += (slot._localVertices.length - remainder) / LOCAL_FLOAT_PER_VERTEX + 1;
              }
              iCount += slot._indices.length;
            }
            rd = RenderData.add(vfmtPosUvColor, this.accessor);
            rd.resize(vCount, iCount);
            if (!rd.indices || iCount !== rd.indices.length) {
              rd.indices = new Uint16Array(iCount);
            }
          }
          return rd;
        },
        updateRenderData: function updateRenderData(comp, batcher) {
          _comp = comp;
          var armature = comp._armature;
          if (armature) {
            updateComponentRenderData(comp, batcher);
          }
        },
        updateColor: function updateColor(comp) {
          if (!comp) return;
          _comp = comp;
          _comp.markForUpdateRenderData();
        }
      });
      cclegacy.internal.DragonBonesAssembler = simple;
    }
  };
});