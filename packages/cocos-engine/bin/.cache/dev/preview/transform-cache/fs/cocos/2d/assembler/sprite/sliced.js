System.register("q-bundled:///fs/cocos/2d/assembler/sprite/sliced.js", ["../../../core/index.js", "../../utils/dynamic-atlas/atlas-manager.js"], function (_export, _context) {
  "use strict";

  var Color, Mat4, dynamicAtlasManager, m, tempRenderData, i, sliced;
  return {
    setters: [function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Mat4 = _coreIndexJs.Mat4;
    }, function (_utilsDynamicAtlasAtlasManagerJs) {
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
      m = new Mat4();
      tempRenderData = [];
      for (i = 0; i < 4; i++) {
        tempRenderData.push({
          x: 0,
          y: 0,
          z: 0,
          u: 0,
          v: 0,
          color: new Color()
        });
      }

      /**
       * sliced 组装器
       * 可通过 `UI.sliced` 获取该组装器。
       */
      _export("sliced", sliced = {
        createData: function createData(sprite) {
          var renderData = sprite.requestRenderData();
          // 0-4 for local vertex
          renderData.dataLength = 16;
          renderData.resize(16, 54);
          this.QUAD_INDICES = new Uint16Array(54);
          this.createQuadIndices(4, 4);
          renderData.chunk.setIndexBuffer(this.QUAD_INDICES);
          return renderData;
        },
        createQuadIndices: function createQuadIndices(vertexRow, vertexCol) {
          var offset = 0;
          for (var curRow = 0; curRow < vertexRow - 1; curRow++) {
            for (var curCol = 0; curCol < vertexCol - 1; curCol++) {
              // vid is the index of the left bottom vertex in each rect.
              var vid = curRow * vertexCol + curCol;

              // left bottom
              this.QUAD_INDICES[offset++] = vid;
              // right bottom
              this.QUAD_INDICES[offset++] = vid + 1;
              // left top
              this.QUAD_INDICES[offset++] = vid + vertexCol;

              // right bottom
              this.QUAD_INDICES[offset++] = vid + 1;
              // right top
              this.QUAD_INDICES[offset++] = vid + 1 + vertexCol;
              // left top
              this.QUAD_INDICES[offset++] = vid + vertexCol;
            }
          }
        },
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame;

          // TODO: Material API design and export from editor could affect the material activation process
          // need to update the logic here
          // if (frame) {
          //     if (!frame._original && dynamicAtlasManager) {
          //         dynamicAtlasManager.insertSpriteFrame(frame);
          //     }
          //     if (sprite._material._texture !== frame._texture) {
          //         sprite._activateMaterial();
          //     }
          // }
          dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
          // TODO update material and uv
          this.updateUVs(sprite); // dirty need
          //this.updateColor(sprite); // dirty need

          var renderData = sprite.renderData;
          if (renderData && frame) {
            var vertDirty = renderData.vertDirty;
            if (vertDirty) {
              this.updateVertexData(sprite);
            }
            renderData.updateRenderData(sprite, frame);
          }
        },
        updateVertexData: function updateVertexData(sprite) {
          var renderData = sprite.renderData;
          var dataList = renderData.data;
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var width = uiTrans.width;
          var height = uiTrans.height;
          var appX = uiTrans.anchorX * width;
          var appY = uiTrans.anchorY * height;
          var frame = sprite.spriteFrame;
          var leftWidth = frame.insetLeft;
          var rightWidth = frame.insetRight;
          var topHeight = frame.insetTop;
          var bottomHeight = frame.insetBottom;
          var sizableWidth = width - leftWidth - rightWidth;
          var sizableHeight = height - topHeight - bottomHeight;
          var xScale = width / (leftWidth + rightWidth);
          var yScale = height / (topHeight + bottomHeight);
          xScale = Number.isNaN(xScale) || xScale > 1 ? 1 : xScale;
          yScale = Number.isNaN(yScale) || yScale > 1 ? 1 : yScale;
          sizableWidth = sizableWidth < 0 ? 0 : sizableWidth;
          sizableHeight = sizableHeight < 0 ? 0 : sizableHeight;
          tempRenderData[0].x = -appX;
          tempRenderData[0].y = -appY;
          tempRenderData[1].x = leftWidth * xScale - appX;
          tempRenderData[1].y = bottomHeight * yScale - appY;
          tempRenderData[2].x = tempRenderData[1].x + sizableWidth;
          tempRenderData[2].y = tempRenderData[1].y + sizableHeight;
          tempRenderData[3].x = width - appX;
          tempRenderData[3].y = height - appY;
          for (var curRow = 0; curRow < 4; curRow++) {
            for (var curCol = 0; curCol < 4; curCol++) {
              var curIndex = curRow * 4 + curCol;
              if (curIndex < renderData.dataLength && curRow < tempRenderData.length && curCol < tempRenderData.length) {
                dataList[curIndex].x = tempRenderData[curCol].x;
                dataList[curIndex].y = tempRenderData[curRow].y;
              }
            }
          }
        },
        fillBuffers: function fillBuffers(sprite, renderer) {
          var renderData = sprite.renderData;
          var chunk = renderData.chunk;
          if (sprite._flagChangedVersion !== sprite.node.flagChangedVersion || renderData.vertDirty) {
            this.updateWorldVertexData(sprite, chunk);
            renderData.vertDirty = false;
            sprite._flagChangedVersion = sprite.node.flagChangedVersion;
          }
          var bid = chunk.bufferId;
          var vid = chunk.vertexOffset;
          var meshBuffer = chunk.meshBuffer;
          var ib = chunk.meshBuffer.iData;
          var indexOffset = meshBuffer.indexOffset;
          for (var r = 0; r < 3; ++r) {
            for (var c = 0; c < 3; ++c) {
              var start = vid + r * 4 + c;
              ib[indexOffset++] = start;
              ib[indexOffset++] = start + 1;
              ib[indexOffset++] = start + 4;
              ib[indexOffset++] = start + 1;
              ib[indexOffset++] = start + 5;
              ib[indexOffset++] = start + 4;
            }
          }
          meshBuffer.indexOffset = indexOffset;
        },
        updateWorldVertexData: function updateWorldVertexData(sprite, chunk) {
          var node = sprite.node;
          node.getWorldMatrix(m);
          var renderData = sprite.renderData;
          var stride = renderData.floatStride;
          var dataList = renderData.data;
          var vData = chunk.vb;
          var offset = 0;
          for (var row = 0; row < 4; ++row) {
            var rowD = dataList[row * 4];
            for (var col = 0; col < 4; ++col) {
              var colD = dataList[col];
              var x = colD.x;
              var y = rowD.y;
              var rhw = m.m03 * x + m.m07 * y + m.m15;
              rhw = rhw ? 1 / rhw : 1;
              offset = (row * 4 + col) * stride;
              vData[offset + 0] = (m.m00 * x + m.m04 * y + m.m12) * rhw;
              vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m13) * rhw;
              vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m14) * rhw;
            }
          }
        },
        updateUVs: function updateUVs(sprite) {
          if (!sprite.spriteFrame) return;
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var stride = renderData.floatStride;
          var uv = sprite.spriteFrame.uvSliced;
          var uvOffset = 3;
          for (var _i = 0; _i < 16; _i++) {
            vData[uvOffset] = uv[_i].u;
            vData[uvOffset + 1] = uv[_i].v;
            uvOffset += stride;
          }
        },
        updateColor: function updateColor(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var stride = renderData.floatStride;
          var colorOffset = 5;
          var color = sprite.color;
          var colorR = color.r / 255;
          var colorG = color.g / 255;
          var colorB = color.b / 255;
          var colorA = sprite.node._uiProps.opacity;
          for (var _i2 = 0; _i2 < 16; _i2++) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
            colorOffset += stride;
          }
        }
      });
    }
  };
});