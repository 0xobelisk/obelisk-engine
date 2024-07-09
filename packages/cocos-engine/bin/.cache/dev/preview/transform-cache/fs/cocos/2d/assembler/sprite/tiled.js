System.register("q-bundled:///fs/cocos/2d/assembler/sprite/tiled.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var JSB, Mat4, Color, error, m, origin, leftInner, rightInner, rightOuter, bottomInner, topInner, topOuter, tempRenderDataLength, tempRenderData, QUAD_INDICES, tiled;
  function has9SlicedOffsetVertexCount(spriteFrame) {
    if (spriteFrame) {
      if (spriteFrame.insetTop > 0 || spriteFrame.insetBottom > 0 || spriteFrame.insetLeft > 0 || spriteFrame.insetRight > 0) {
        return 2; // left + right
      }
    }

    return 0;
  }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Color = _coreIndexJs.Color;
      error = _coreIndexJs.error;
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
      tempRenderDataLength = 0;
      tempRenderData = [];
      QUAD_INDICES = null;
      _export("tiled", tiled = {
        createData: function createData(sprite) {
          return sprite.requestRenderData();
        },
        updateRenderData: function updateRenderData(sprite) {
          var renderData = sprite.renderData;
          var frame = sprite.spriteFrame;
          if (!frame || !renderData) {
            return;
          }
          if (!renderData.vertDirty) {
            return;
          }
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var contentWidth = Math.abs(uiTrans.width);
          var contentHeight = Math.abs(uiTrans.height);
          var rect = frame.getRect();
          var leftWidth = frame.insetLeft;
          var rightWidth = frame.insetRight;
          var centerWidth = rect.width - leftWidth - rightWidth;
          var topHeight = frame.insetTop;
          var bottomHeight = frame.insetBottom;
          var centerHeight = rect.height - topHeight - bottomHeight;
          var sizableWidth = contentWidth - leftWidth - rightWidth;
          var sizableHeight = contentHeight - topHeight - bottomHeight;
          sizableWidth = sizableWidth > 0 ? sizableWidth : 0;
          sizableHeight = sizableHeight > 0 ? sizableHeight : 0;
          var hRepeat = centerWidth === 0 ? sizableWidth : sizableWidth / centerWidth;
          var vRepeat = centerHeight === 0 ? sizableHeight : sizableHeight / centerHeight;
          var offsetVertexCount = has9SlicedOffsetVertexCount(frame);
          var row = Math.ceil(vRepeat + offsetVertexCount);
          var col = Math.ceil(hRepeat + offsetVertexCount);
          renderData.dataLength = row * 2 * (col * 2);
          this.updateVerts(sprite, sizableWidth, sizableHeight, row, col);
          if (renderData.vertexCount !== row * col * 4) {
            sprite.renderEntity.colorDirty = true;
          }
          // update data property
          renderData.resize(row * col * 4, row * col * 6);
          // update index here
          if (JSB) {
            var indexCount = renderData.indexCount;
            this.createQuadIndices(indexCount);
            renderData.chunk.setIndexBuffer(QUAD_INDICES);
            // may can update color & uv here
            // need dirty
            this.updateWorldUVData(sprite);
            //this.updateColorLate(sprite);
          }

          renderData.updateRenderData(sprite, frame);
        },
        createQuadIndices: function createQuadIndices(indexCount) {
          if (indexCount % 6 !== 0) {
            error('illegal index count!');
            return;
          }
          var quadCount = indexCount / 6;
          QUAD_INDICES = null;
          QUAD_INDICES = new Uint16Array(indexCount);
          var offset = 0;
          for (var i = 0; i < quadCount; i++) {
            QUAD_INDICES[offset++] = 0 + i * 4;
            QUAD_INDICES[offset++] = 1 + i * 4;
            QUAD_INDICES[offset++] = 2 + i * 4;
            QUAD_INDICES[offset++] = 1 + i * 4;
            QUAD_INDICES[offset++] = 3 + i * 4;
            QUAD_INDICES[offset++] = 2 + i * 4;
          }
        },
        // dirty Mark
        // the real update uv is on updateWorldUVData
        updateUVs: function updateUVs(sprite) {
          var renderData = sprite.renderData;
          renderData.vertDirty = true;
          sprite.markForUpdateRenderData();
        },
        fillBuffers: function fillBuffers(sprite, renderer) {
          var node = sprite.node;
          var renderData = sprite.renderData;
          var chunk = renderData.chunk;
          if (chunk === null) {
            // If too many vertices are requested, this will result in a chunk of null.
            return;
          }
          if (sprite._flagChangedVersion !== node.flagChangedVersion || renderData.vertDirty) {
            this.updateWorldVertexAndUVData(sprite, chunk);
            renderData.vertDirty = false;
            sprite._flagChangedVersion = node.flagChangedVersion;
          }

          // forColor
          this.updateColorLate(sprite);

          // update indices
          var bid = chunk.bufferId;
          var vid = chunk.vertexOffset;
          var meshBuffer = chunk.meshBuffer;
          var ib = chunk.meshBuffer.iData;
          var indexOffset = meshBuffer.indexOffset;
          for (var i = 0; i < renderData.indexCount; i += 6) {
            ib[indexOffset++] = vid;
            ib[indexOffset++] = vid + 1;
            ib[indexOffset++] = vid + 2;
            ib[indexOffset++] = vid + 1;
            ib[indexOffset++] = vid + 3;
            ib[indexOffset++] = vid + 2;
            vid += 4;
            meshBuffer.indexOffset += 6;
          }
          meshBuffer.setDirty();
        },
        updateWorldUVData: function updateWorldUVData(sprite) {
          var renderData = sprite.renderData;
          var stride = renderData.floatStride;
          var dataList = renderData.data;
          var vData = renderData.chunk.vb;
          for (var i = 0; i < dataList.length; i++) {
            var offset = i * stride;
            vData[offset + 3] = dataList[i].u;
            vData[offset + 4] = dataList[i].v;
          }
        },
        // only for TS
        updateWorldVertexAndUVData: function updateWorldVertexAndUVData(sprite, chunk) {
          var node = sprite.node;
          node.getWorldMatrix(m);
          var renderData = sprite.renderData;
          var stride = renderData.floatStride;
          var dataList = renderData.data;
          var vData = chunk.vb;
          var length = dataList.length;
          for (var i = 0; i < length; i++) {
            var x = dataList[i].x;
            var y = dataList[i].y;
            var z = dataList[i].z;
            var rhw = m.m03 * x + m.m07 * y + m.m11 * z + m.m15;
            rhw = rhw ? 1 / rhw : 1;
            var offset = i * stride;
            vData[offset] = (m.m00 * x + m.m04 * y + m.m08 * z + m.m12) * rhw;
            vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m09 * z + m.m13) * rhw;
            vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m10 * z + m.m14) * rhw;
          }
          this.updateWorldUVData(sprite);
        },
        updateVerts: function updateVerts(sprite, sizableWidth, sizableHeight, row, col) {
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var renderData = sprite.renderData;
          var dataList = renderData.data;
          var frame = sprite.spriteFrame;
          var rect = frame.rect;
          var contentWidth = Math.abs(uiTrans.width);
          var contentHeight = Math.abs(uiTrans.height);
          var appx = uiTrans.anchorX * contentWidth;
          var appy = uiTrans.anchorY * contentHeight;
          var leftWidth = frame.insetLeft;
          var rightWidth = frame.insetRight;
          var centerWidth = rect.width - leftWidth - rightWidth;
          var topHeight = frame.insetTop;
          var bottomHeight = frame.insetBottom;
          var centerHeight = rect.height - topHeight - bottomHeight;
          var xScale = uiTrans.width / (leftWidth + rightWidth) > 1 ? 1 : uiTrans.width / (leftWidth + rightWidth);
          var yScale = uiTrans.height / (topHeight + bottomHeight) > 1 ? 1 : uiTrans.height / (topHeight + bottomHeight);
          var offsetWidth = 0;
          var offsetHeight = 0;
          if (centerWidth > 0) {
            /*
             * Because the float numerical calculation in javascript is not accurate enough,
             * there is an expected result of 1.0, but the actual result is 1.000001.
             */
            offsetWidth = Math.floor(sizableWidth * 1000) / 1000 % centerWidth === 0 ? centerWidth : sizableWidth % centerWidth;
          } else {
            offsetWidth = sizableWidth;
          }
          if (centerHeight > 0) {
            offsetHeight = Math.floor(sizableHeight * 1000) / 1000 % centerHeight === 0 ? centerHeight : sizableHeight % centerHeight;
          } else {
            offsetHeight = sizableHeight;
          }

          // 临时变量存前置数据
          tempRenderData.length = 0;
          tempRenderDataLength = Math.max(row + 1, col + 1);
          for (var i = 0; i < tempRenderDataLength; i++) {
            tempRenderData.push({
              x: 0,
              y: 0,
              z: 0,
              u: 0,
              v: 0,
              color: new Color()
            });
          }
          var offsetVertexCount = has9SlicedOffsetVertexCount(frame);
          if (offsetVertexCount === 0) {
            for (var _i = 0; _i < tempRenderDataLength; _i++) {
              // for x
              if (_i >= col) {
                tempRenderData[_i].x = contentWidth - appx;
              } else {
                tempRenderData[_i].x = -appx + _i * centerWidth;
              }

              // for y
              if (_i >= row) {
                tempRenderData[_i].y = contentHeight - appy;
              } else {
                tempRenderData[_i].y = -appy + _i * centerHeight;
              }
            }
          } else {
            for (var _i2 = 0; _i2 < tempRenderDataLength; _i2++) {
              // for x
              if (_i2 === 0) {
                tempRenderData[_i2].x = -appx;
              } else if (_i2 === 1) {
                tempRenderData[_i2].x = -appx + leftWidth * xScale;
              } else if (_i2 > 1 && _i2 < col - 1) {
                if (centerWidth > 0) {
                  tempRenderData[_i2].x = -appx + leftWidth * xScale + centerWidth * (_i2 - 1);
                } else {
                  tempRenderData[_i2].x = leftWidth + sizableWidth - appx;
                }
              } else if (_i2 === col - 1) {
                tempRenderData[_i2].x = -appx + leftWidth * xScale + offsetWidth + centerWidth * (_i2 - 2);
              } else if (_i2 >= col) {
                tempRenderData[_i2].x = Math.min(leftWidth + sizableWidth + rightWidth, contentWidth) - appx;
              }

              // for y
              if (_i2 === 0) {
                tempRenderData[_i2].y = -appy;
              } else if (_i2 === 1) {
                tempRenderData[_i2].y = -appy + bottomHeight * yScale;
              } else if (_i2 > 1 && _i2 < row - 1) {
                if (centerHeight > 0) {
                  tempRenderData[_i2].y = -appy + bottomHeight * yScale + centerHeight * (_i2 - 1);
                } else {
                  tempRenderData[_i2].y = bottomHeight + sizableHeight - appy;
                }
              } else if (_i2 === row - 1) {
                tempRenderData[_i2].y = -appy + bottomHeight * yScale + offsetHeight + centerHeight * (_i2 - 2);
              } else if (_i2 >= row) {
                tempRenderData[_i2].y = Math.min(bottomHeight + sizableHeight + topHeight, contentHeight) - appy;
              }
            }
          }

          // 填datalist
          var x = 0;
          var x1 = 0;
          var y = 0;
          var y1 = 0;
          for (var yIndex = 0; yIndex < row; ++yIndex) {
            y = tempRenderData[yIndex].y;
            y1 = tempRenderData[yIndex + 1].y;
            for (var xIndex = 0; xIndex < col; ++xIndex) {
              x = tempRenderData[xIndex].x;
              x1 = tempRenderData[xIndex + 1].x;

              // 4 vertices in a rect
              var curIndex = 4 * (yIndex * col + xIndex);
              //left bottom
              dataList[curIndex].x = x;
              dataList[curIndex].y = y;
              //right bottom
              dataList[curIndex + 1].x = x1;
              dataList[curIndex + 1].y = y;
              //left top
              dataList[curIndex + 2].x = x;
              dataList[curIndex + 2].y = y1;
              //right top
              dataList[curIndex + 3].x = x1;
              dataList[curIndex + 3].y = y1;
            }
          }
          var rotated = frame.rotated;
          var uv = frame.uv;
          var uvSliced = frame.uvSliced;
          // origin at left bottom
          origin = uvSliced[0];
          // on bottom edge
          leftInner = uvSliced[1];
          rightInner = uvSliced[2];
          rightOuter = uvSliced[3];
          // on left edge
          bottomInner = uvSliced[4];
          topInner = uvSliced[8];
          topOuter = uvSliced[12];
          var coefU = 0;
          var coefV = 0;
          var hRepeat = centerWidth === 0 ? sizableWidth : sizableWidth / centerWidth;
          var vRepeat = centerHeight === 0 ? sizableHeight : sizableHeight / centerHeight;
          var tempXVerts = [];
          var tempYVerts = [];
          for (var yIndexUV = 0; yIndexUV < row; ++yIndexUV) {
            if (sizableHeight > centerHeight) {
              //if 9 sliced, we should exclude bottom border vertex (yIndex-1)
              var curYRectCount = offsetVertexCount > 0 ? yIndexUV : yIndexUV + 1;
              // The height of the rect which contains the left bottom vertex in current loop should be calculated in total height.
              if (sizableHeight >= curYRectCount * centerHeight) {
                coefV = 1;
              } else {
                coefV = vRepeat % 1;
              }
            } else {
              coefV = vRepeat;
            }
            for (var xIndexUV = 0; xIndexUV < col; ++xIndexUV) {
              if (sizableWidth > centerWidth) {
                //if 9 sliced, we should exclude left border vertex (xIndex-1)
                var curXRectCount = offsetVertexCount > 0 ? xIndexUV : xIndexUV + 1;
                // The width of the rect which contains the left bottom vertex in current loop should be calculated in total width.
                // Example: xIndex = 2 means that these is the third vertex, we should take the rect whose left bottom vertex is this
                // vertex into account, so the following condition should be comparing the values of content size and (2+1)*centerWidth.
                if (sizableWidth >= curXRectCount * centerWidth) {
                  coefU = 1;
                } else {
                  coefU = hRepeat % 1;
                }
              } else {
                coefU = hRepeat;
              }
              if (rotated) {
                if (offsetVertexCount === 0) {
                  //无九宫
                  tempXVerts[0] = bottomInner.u;
                  tempXVerts[1] = bottomInner.u;
                  tempXVerts[2] = bottomInner.u + (topInner.u - bottomInner.u) * coefV;
                  tempYVerts[0] = leftInner.v;
                  tempYVerts[1] = leftInner.v + (rightInner.v - leftInner.v) * coefU;
                  tempYVerts[2] = leftInner.v;
                } else {
                  //有九宫
                  if (yIndexUV === 0) {
                    tempXVerts[0] = origin.u;
                    tempXVerts[1] = origin.u;
                    tempXVerts[2] = bottomInner.u;
                  } else if (yIndexUV < row - 1) {
                    tempXVerts[0] = bottomInner.u;
                    tempXVerts[1] = bottomInner.u;
                    tempXVerts[2] = bottomInner.u + (topInner.u - bottomInner.u) * coefV;
                  } else if (yIndexUV === row - 1) {
                    tempXVerts[0] = topInner.u;
                    tempXVerts[1] = topInner.u;
                    tempXVerts[2] = topOuter.u;
                  }
                  if (xIndexUV === 0) {
                    tempYVerts[0] = origin.v;
                    tempYVerts[1] = leftInner.v;
                    tempYVerts[2] = origin.v;
                  } else if (xIndexUV < col - 1) {
                    tempYVerts[0] = leftInner.v;
                    tempYVerts[1] = leftInner.v + (rightInner.v - leftInner.v) * coefU;
                    tempYVerts[2] = leftInner.v;
                  } else if (xIndexUV === col - 1) {
                    tempYVerts[0] = rightInner.v;
                    tempYVerts[1] = rightOuter.v;
                    tempYVerts[2] = rightInner.v;
                  }
                }
                tempXVerts[3] = tempXVerts[2];
                tempYVerts[3] = tempYVerts[1];
              } else {
                if (offsetVertexCount === 0) {
                  //无九宫
                  tempXVerts[0] = leftInner.u;
                  tempXVerts[1] = leftInner.u + (rightInner.u - leftInner.u) * coefU;
                  tempXVerts[2] = leftInner.u;
                  tempYVerts[0] = bottomInner.v;
                  tempYVerts[1] = bottomInner.v;
                  tempYVerts[2] = bottomInner.v + (topInner.v - bottomInner.v) * coefV;
                } else {
                  //有九宫
                  if (xIndexUV === 0) {
                    tempXVerts[0] = origin.u;
                    tempXVerts[1] = leftInner.u;
                    tempXVerts[2] = origin.u;
                  } else if (xIndexUV < col - 1) {
                    tempXVerts[0] = leftInner.u;
                    tempXVerts[1] = leftInner.u + (rightInner.u - leftInner.u) * coefU;
                    tempXVerts[2] = leftInner.u;
                  } else if (xIndexUV === col - 1) {
                    tempXVerts[0] = rightInner.u;
                    tempXVerts[1] = rightOuter.u;
                    tempXVerts[2] = rightInner.u;
                  }
                  if (yIndexUV === 0) {
                    tempYVerts[0] = origin.v;
                    tempYVerts[1] = origin.v;
                    tempYVerts[2] = bottomInner.v;
                  } else if (yIndexUV < row - 1) {
                    tempYVerts[0] = bottomInner.v;
                    tempYVerts[1] = bottomInner.v;
                    tempYVerts[2] = bottomInner.v + (topInner.v - bottomInner.v) * coefV;
                  } else if (yIndexUV === row - 1) {
                    tempYVerts[0] = topInner.v;
                    tempYVerts[1] = topInner.v;
                    tempYVerts[2] = topOuter.v;
                  }
                }
                tempXVerts[3] = tempXVerts[1];
                tempYVerts[3] = tempYVerts[2];
              }

              // it represents the left bottom corner vertex of a rect
              var _curIndex = 4 * (yIndexUV * col + xIndexUV);
              // lb
              dataList[_curIndex].u = tempXVerts[0];
              dataList[_curIndex].v = tempYVerts[0];
              // rb
              dataList[_curIndex + 1].u = tempXVerts[1];
              dataList[_curIndex + 1].v = tempYVerts[1];
              // lt
              dataList[_curIndex + 2].u = tempXVerts[2];
              dataList[_curIndex + 2].v = tempYVerts[2];
              // rt
              dataList[_curIndex + 3].u = tempXVerts[3];
              dataList[_curIndex + 3].v = tempYVerts[3];
            }
          }
        },
        // fill color here
        updateColorLate: function updateColorLate(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var stride = renderData.floatStride;
          var vertexCount = renderData.vertexCount;
          var colorOffset = 5;
          var color = sprite.color;
          var colorR = color.r / 255;
          var colorG = color.g / 255;
          var colorB = color.b / 255;
          var colorA = sprite.node._uiProps.opacity;
          for (var i = 0; i < vertexCount; i++) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
            colorOffset += stride;
          }
        },
        // Too early
        updateColor: function updateColor(sprite) {
          // Update color by updateColorLate
        }
      });
    }
  };
});