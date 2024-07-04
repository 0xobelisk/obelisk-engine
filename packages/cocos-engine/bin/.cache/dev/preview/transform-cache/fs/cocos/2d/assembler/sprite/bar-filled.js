System.register("q-bundled:///fs/cocos/2d/assembler/sprite/bar-filled.js", ["../../../core/index.js", "../../components/index.js", "../../utils/dynamic-atlas/atlas-manager.js"], function (_export, _context) {
  "use strict";

  var Mat4, errorID, Sprite, dynamicAtlasManager, FillType, m, QUAD_INDICES, barFilled;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  return {
    setters: [function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      errorID = _coreIndexJs.errorID;
    }, function (_componentsIndexJs) {
      Sprite = _componentsIndexJs.Sprite;
    }, function (_utilsDynamicAtlasAtlasManagerJs) {
      dynamicAtlasManager = _utilsDynamicAtlasAtlasManagerJs.dynamicAtlasManager;
    }],
    execute: function () {
      FillType = Sprite.FillType;
      m = new Mat4();
      QUAD_INDICES = Uint16Array.from([0, 1, 2, 1, 3, 2]);
      /**
       * barFilled 组装器
       * 可通过 `UI.barFilled` 获取该组装器。
       */
      _export("barFilled", barFilled = {
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame;
          dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
          // TODO update material and uv

          var renderData = sprite.renderData;
          if (renderData && frame) {
            var vertDirty = renderData.vertDirty;
            if (!vertDirty) {
              return;
            }
            var fillStart = sprite.fillStart;
            var fillRange = sprite.fillRange;
            if (fillRange < 0) {
              fillStart += fillRange;
              fillRange = -fillRange;
            }
            fillRange = fillStart + fillRange;
            fillStart = fillStart > 1.0 ? 1.0 : fillStart;
            fillStart = fillStart < 0.0 ? 0.0 : fillStart;
            fillRange = fillRange > 1.0 ? 1.0 : fillRange;
            fillRange = fillRange < 0.0 ? 0.0 : fillRange;
            fillRange -= fillStart;
            fillRange = fillRange < 0 ? 0 : fillRange;
            var fillEnd = fillStart + fillRange;
            fillEnd = fillEnd > 1 ? 1 : fillEnd;
            this.updateUVs(sprite, fillStart, fillEnd); // need Dirty
            this.updateVertexData(sprite, fillStart, fillEnd);
            renderData.updateRenderData(sprite, frame);
          }
        },
        updateUVs: function updateUVs(sprite, fillStart, fillEnd) {
          var spriteFrame = sprite.spriteFrame;
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;

          // build uvs
          var atlasWidth = spriteFrame.width;
          var atlasHeight = spriteFrame.height;
          var textureRect = spriteFrame.rect;
          // uv computation should take spriteSheet into account.
          var ul = 0;
          var vb = 0;
          var ur = 0;
          var vt = 0;
          var quadUV0 = 0;
          var quadUV1 = 0;
          var quadUV2 = 0;
          var quadUV3 = 0;
          var quadUV4 = 0;
          var quadUV5 = 0;
          var quadUV6 = 0;
          var quadUV7 = 0;
          if (spriteFrame.isRotated()) {
            ul = textureRect.x / atlasWidth;
            vb = (textureRect.y + textureRect.width) / atlasHeight;
            ur = (textureRect.x + textureRect.height) / atlasWidth;
            vt = textureRect.y / atlasHeight;
            quadUV0 = quadUV2 = ul;
            quadUV4 = quadUV6 = ur;
            quadUV3 = quadUV7 = vb;
            quadUV1 = quadUV5 = vt;
          } else {
            ul = textureRect.x / atlasWidth;
            vb = (textureRect.y + textureRect.height) / atlasHeight;
            ur = (textureRect.x + textureRect.width) / atlasWidth;
            vt = textureRect.y / atlasHeight;
            quadUV0 = quadUV4 = ul;
            quadUV2 = quadUV6 = ur;
            quadUV1 = quadUV3 = vb;
            quadUV5 = quadUV7 = vt;
          }
          switch (sprite.fillType) {
            case FillType.HORIZONTAL:
              vData[3] = quadUV0 + (quadUV2 - quadUV0) * fillStart;
              vData[4] = quadUV1 + (quadUV3 - quadUV1) * fillStart;
              vData[12] = quadUV0 + (quadUV2 - quadUV0) * fillEnd;
              vData[13] = quadUV1 + (quadUV3 - quadUV1) * fillEnd;
              vData[21] = quadUV4 + (quadUV6 - quadUV4) * fillStart;
              vData[22] = quadUV5 + (quadUV7 - quadUV5) * fillStart;
              vData[30] = quadUV4 + (quadUV6 - quadUV4) * fillEnd;
              vData[31] = quadUV5 + (quadUV7 - quadUV5) * fillEnd;
              break;
            case FillType.VERTICAL:
              vData[3] = quadUV0 + (quadUV4 - quadUV0) * fillStart;
              vData[4] = quadUV1 + (quadUV5 - quadUV1) * fillStart;
              vData[12] = quadUV2 + (quadUV6 - quadUV2) * fillStart;
              vData[13] = quadUV3 + (quadUV7 - quadUV3) * fillStart;
              vData[21] = quadUV0 + (quadUV4 - quadUV0) * fillEnd;
              vData[22] = quadUV1 + (quadUV5 - quadUV1) * fillEnd;
              vData[30] = quadUV2 + (quadUV6 - quadUV2) * fillEnd;
              vData[31] = quadUV3 + (quadUV7 - quadUV3) * fillEnd;
              break;
            default:
              errorID(2626);
              break;
          }
        },
        updateVertexData: function updateVertexData(sprite, fillStart, fillEnd) {
          var renderData = sprite.renderData;
          var dataList = renderData.data;
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var width = uiTrans.width;
          var height = uiTrans.height;
          var appX = uiTrans.anchorX * width;
          var appY = uiTrans.anchorY * height;
          var l = -appX;
          var b = -appY;
          var r = width - appX;
          var t = height - appY;
          var progressStart = 0;
          var progressEnd = 0;
          switch (sprite.fillType) {
            case FillType.HORIZONTAL:
              progressStart = l + (r - l) * fillStart;
              progressEnd = l + (r - l) * fillEnd;
              l = progressStart;
              r = progressEnd;
              break;
            case FillType.VERTICAL:
              progressStart = b + (t - b) * fillStart;
              progressEnd = b + (t - b) * fillEnd;
              b = progressStart;
              t = progressEnd;
              break;
            default:
              errorID(2626);
              break;
          }
          dataList[0].x = l;
          dataList[0].y = b;
          dataList[1].x = r;
          dataList[1].y = b;
          dataList[2].x = l;
          dataList[2].y = t;
          dataList[3].x = r;
          dataList[3].y = t;
        },
        createData: function createData(sprite) {
          var renderData = sprite.requestRenderData();
          // 0-4 for local vertex
          renderData.dataLength = 4;
          renderData.resize(4, 6);
          renderData.chunk.setIndexBuffer(QUAD_INDICES);

          // not need
          var dataList = renderData.data;
          for (var _iterator = _createForOfIteratorHelperLoose(dataList), _step; !(_step = _iterator()).done;) {
            var data = _step.value;
            data.z = 0;
          }
          return renderData;
        },
        updateWorldVertexData: function updateWorldVertexData(sprite, chunk) {
          var node = sprite.node;
          node.getWorldMatrix(m);
          var renderData = sprite.renderData;
          var stride = renderData.floatStride;
          var dataList = sprite.renderData.data;
          var vData = chunk.vb;
          var offset = 0;
          for (var i = 0; i < 4; i++) {
            var local = dataList[i];
            var x = local.x;
            var y = local.y;
            var rhw = m.m03 * x + m.m07 * y + m.m15;
            rhw = rhw ? 1 / rhw : 1;
            offset = i * stride;
            vData[offset] = (m.m00 * x + m.m04 * y + m.m12) * rhw;
            vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m13) * rhw;
            vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m14) * rhw;
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
          ib[indexOffset++] = vid;
          ib[indexOffset++] = vid + 1;
          ib[indexOffset++] = vid + 2;
          ib[indexOffset++] = vid + 2;
          ib[indexOffset++] = vid + 1;
          ib[indexOffset++] = vid + 3;
          meshBuffer.indexOffset += 6;
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
          for (var i = 0; i < 4; i++) {
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