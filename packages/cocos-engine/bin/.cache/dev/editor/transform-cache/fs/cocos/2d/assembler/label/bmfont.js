System.register("q-bundled:///fs/cocos/2d/assembler/label/bmfont.js", ["../../../core/index.js", "../utils.js", "./bmfontUtils.js"], function (_export, _context) {
  "use strict";

  var Color, js, fillMeshVertices3D, bmfontUtils, tempColor, bmfont;
  return {
    setters: [function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      js = _coreIndexJs.js;
    }, function (_utilsJs) {
      fillMeshVertices3D = _utilsJs.fillMeshVertices3D;
    }, function (_bmfontUtilsJs) {
      bmfontUtils = _bmfontUtilsJs.bmfontUtils;
    }],
    execute: function () {
      /*
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
      tempColor = new Color(255, 255, 255, 255);
      /**
       * bmfont 组装器
       * 可通过 `UI.bmfont` 获取该组装器。
       */
      _export("bmfont", bmfont = {
        createData(comp) {
          const renderData = comp.requestRenderData();
          renderData.resize(0, 0);
          return renderData;
        },
        fillBuffers(comp, renderer) {
          const node = comp.node;
          tempColor.set(comp.color);
          tempColor.a = node._uiProps.opacity * 255;
          // Fill All
          fillMeshVertices3D(node, renderer, comp.renderData, tempColor);
        },
        appendQuad(comp, spriteFrame, rect, rotated, x, y, scale) {
          const renderData = comp.renderData;
          if (!renderData) {
            return;
          }
          const dataOffset = renderData.dataLength;
          renderData.dataLength += 4;
          renderData.resize(renderData.dataLength, renderData.dataLength / 2 * 3);
          const dataList = renderData.data;
          const texW = spriteFrame.width;
          const texH = spriteFrame.height;
          const rectWidth = rect.width;
          const rectHeight = rect.height;
          let l = 0;
          let b = 0;
          let t = 0;
          let r = 0;
          if (!rotated) {
            l = rect.x / texW;
            r = (rect.x + rectWidth) / texW;
            b = (rect.y + rectHeight) / texH;
            t = rect.y / texH;
            dataList[dataOffset].u = l;
            dataList[dataOffset].v = b;
            dataList[dataOffset + 1].u = r;
            dataList[dataOffset + 1].v = b;
            dataList[dataOffset + 2].u = l;
            dataList[dataOffset + 2].v = t;
            dataList[dataOffset + 3].u = r;
            dataList[dataOffset + 3].v = t;
          } else {
            l = rect.x / texW;
            r = (rect.x + rectHeight) / texW;
            b = (rect.y + rectWidth) / texH;
            t = rect.y / texH;
            dataList[dataOffset].u = l;
            dataList[dataOffset].v = t;
            dataList[dataOffset + 1].u = l;
            dataList[dataOffset + 1].v = b;
            dataList[dataOffset + 2].u = r;
            dataList[dataOffset + 2].v = t;
            dataList[dataOffset + 3].u = r;
            dataList[dataOffset + 3].v = b;
          }
          dataList[dataOffset].x = x;
          dataList[dataOffset].y = y - rectHeight * scale;
          dataList[dataOffset + 1].x = x + rectWidth * scale;
          dataList[dataOffset + 1].y = y - rectHeight * scale;
          dataList[dataOffset + 2].x = x;
          dataList[dataOffset + 2].y = y;
          dataList[dataOffset + 3].x = x + rectWidth * scale;
          dataList[dataOffset + 3].y = y;
        }
      });
      js.addon(bmfont, bmfontUtils);
    }
  };
});