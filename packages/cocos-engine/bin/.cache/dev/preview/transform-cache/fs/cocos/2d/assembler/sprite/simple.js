System.register("q-bundled:///fs/cocos/2d/assembler/sprite/simple.js", ["../../utils/dynamic-atlas/atlas-manager.js"], function (_export, _context) {
  "use strict";

  var dynamicAtlasManager, QUAD_INDICES, simple;
  return {
    setters: [function (_utilsDynamicAtlasAtlasManagerJs) {
      dynamicAtlasManager = _utilsDynamicAtlasAtlasManagerJs.dynamicAtlasManager;
    }],
    execute: function () {
      /*
       Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
      
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
       * @packageDocumentation
       * @module ui-assembler
       */
      QUAD_INDICES = Uint16Array.from([0, 1, 2, 1, 3, 2]);
      /**
       * simple 组装器
       * 可通过 `UI.simple` 获取该组装器。
       */
      _export("simple", simple = {
        createData: function createData(sprite) {
          var renderData = sprite.requestRenderData();
          renderData.dataLength = 4;
          renderData.resize(4, 6);
          renderData.chunk.setIndexBuffer(QUAD_INDICES);
          return renderData;
        },
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame;
          dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
          this.updateUVs(sprite); // dirty need
          //this.updateColor(sprite);// dirty need

          var renderData = sprite.renderData;
          if (renderData && frame) {
            if (renderData.vertDirty) {
              this.updateVertexData(sprite);
            }
            renderData.updateRenderData(sprite, frame);
          }
        },
        updateWorldVerts: function updateWorldVerts(sprite, chunk) {
          var renderData = sprite.renderData;
          var vData = chunk.vb;
          var dataList = renderData.data;
          var node = sprite.node;
          var m = node.worldMatrix;
          var stride = renderData.floatStride;
          var offset = 0;
          var length = dataList.length;
          for (var i = 0; i < length; i++) {
            var curData = dataList[i];
            var x = curData.x;
            var y = curData.y;
            var rhw = m.m03 * x + m.m07 * y + m.m15;
            rhw = rhw ? 1 / rhw : 1;
            offset = i * stride;
            vData[offset + 0] = (m.m00 * x + m.m04 * y + m.m12) * rhw;
            vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m13) * rhw;
            vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m14) * rhw;
          }
        },
        fillBuffers: function fillBuffers(sprite, renderer) {
          if (sprite === null) {
            return;
          }
          var renderData = sprite.renderData;
          var chunk = renderData.chunk;
          if (sprite._flagChangedVersion !== sprite.node.flagChangedVersion || renderData.vertDirty) {
            // const vb = chunk.vertexAccessor.getVertexBuffer(chunk.bufferId);
            this.updateWorldVerts(sprite, chunk);
            renderData.vertDirty = false;
            sprite._flagChangedVersion = sprite.node.flagChangedVersion;
          }

          // quick version
          var vidOrigin = chunk.vertexOffset;
          var meshBuffer = chunk.meshBuffer;
          var ib = chunk.meshBuffer.iData;
          var indexOffset = meshBuffer.indexOffset;
          var vid = vidOrigin;

          // left bottom
          ib[indexOffset++] = vid;
          // right bottom
          ib[indexOffset++] = vid + 1;
          // left top
          ib[indexOffset++] = vid + 2;

          // right bottom
          ib[indexOffset++] = vid + 1;
          // right top
          ib[indexOffset++] = vid + 3;
          // left top
          ib[indexOffset++] = vid + 2;

          // IndexOffset should add 6 when vertices of a rect are visited.
          meshBuffer.indexOffset += 6;
          // slow version
          // renderer.switchBufferAccessor().appendIndices(chunk);
        },
        updateVertexData: function updateVertexData(sprite) {
          var renderData = sprite.renderData;
          if (!renderData) {
            return;
          }
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var dataList = renderData.data;
          var cw = uiTrans.width;
          var ch = uiTrans.height;
          var appX = uiTrans.anchorX * cw;
          var appY = uiTrans.anchorY * ch;
          var l = 0;
          var b = 0;
          var r = 0;
          var t = 0;
          if (sprite.trim) {
            l = -appX;
            b = -appY;
            r = cw - appX;
            t = ch - appY;
          } else {
            var frame = sprite.spriteFrame;
            var originSize = frame.originalSize;
            var ow = originSize.width;
            var oh = originSize.height;
            var scaleX = cw / ow;
            var scaleY = ch / oh;
            var trimmedBorder = frame.trimmedBorder;
            l = trimmedBorder.x * scaleX - appX;
            b = trimmedBorder.z * scaleY - appY;
            r = cw + trimmedBorder.y * scaleX - appX;
            t = ch + trimmedBorder.w * scaleY - appY;
          }
          dataList[0].x = l;
          dataList[0].y = b;
          dataList[1].x = r;
          dataList[1].y = b;
          dataList[2].x = l;
          dataList[2].y = t;
          dataList[3].x = r;
          dataList[3].y = t;
          renderData.vertDirty = true;
        },
        updateUVs: function updateUVs(sprite) {
          if (!sprite.spriteFrame) return;
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var uv = sprite.spriteFrame.uv;
          vData[3] = uv[0];
          vData[4] = uv[1];
          vData[12] = uv[2];
          vData[13] = uv[3];
          vData[21] = uv[4];
          vData[22] = uv[5];
          vData[30] = uv[6];
          vData[31] = uv[7];
        },
        updateColor: function updateColor(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var colorOffset = 5;
          var color = sprite.color;
          var colorR = color.r / 255;
          var colorG = color.g / 255;
          var colorB = color.b / 255;
          var colorA = color.a / 255;
          for (var i = 0; i < 4; i++, colorOffset += renderData.floatStride) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
          }
        }
      });
    }
  };
});