System.register("q-bundled:///fs/cocos/2d/assembler/label/ttfUtils.js", ["../../components/index.js", "../../utils/dynamic-atlas/atlas-manager.js", "./text-processing.js", "../../../ui/view.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var Label, dynamicAtlasManager, TextProcessing, view, approx, Overflow, ttfUtils;
  return {
    setters: [function (_componentsIndexJs) {
      Label = _componentsIndexJs.Label;
    }, function (_utilsDynamicAtlasAtlasManagerJs) {
      dynamicAtlasManager = _utilsDynamicAtlasAtlasManagerJs.dynamicAtlasManager;
    }, function (_textProcessingJs) {
      TextProcessing = _textProcessingJs.TextProcessing;
    }, function (_uiViewJs) {
      view = _uiViewJs.view;
    }, function (_coreIndexJs) {
      approx = _coreIndexJs.approx;
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
      Overflow = Label.Overflow;
      _export("ttfUtils", ttfUtils = {
        updateProcessingData: function updateProcessingData(style, layout, outputLayoutData, outputRenderData, comp, trans) {
          // font info // both
          style.isSystemFontUsed = comp.useSystemFont;
          style.fontSize = comp.fontSize;

          // node info // both
          outputLayoutData.nodeContentSize.width = outputLayoutData.canvasSize.width = trans.width;
          outputLayoutData.nodeContentSize.height = outputLayoutData.canvasSize.height = trans.height;
          // layout info
          layout.lineHeight = comp.lineHeight; // both
          layout.overFlow = comp.overflow; // layout only // but change render
          if (comp.overflow === Overflow.NONE) {
            layout.wrapping = false;
          } else if (comp.overflow === Overflow.RESIZE_HEIGHT) {
            layout.wrapping = true;
          } else {
            layout.wrapping = comp.enableWrapText; // layout only // but change render
          }

          // effect info // both
          style.isBold = comp.isBold;
          style.isItalic = comp.isItalic;
          style.isUnderline = comp.isUnderline;
          style.underlineHeight = comp.underlineHeight;

          // outline// both
          var isOutlined = comp.enableOutline && comp.outlineWidth > 0;
          if (isOutlined) {
            style.isOutlined = true;
            style.outlineColor.set(comp.outlineColor);
            style.outlineWidth = comp.outlineWidth;
          } else {
            style.isOutlined = false;
          }

          // shadow// both
          var isShadow = comp.enableShadow && (comp.shadowBlur > 0 || !approx(comp.shadowOffset.x, 0) || !approx(comp.shadowOffset.y, 0));
          if (isShadow) {
            style.hasShadow = true;
            style.shadowColor.set(comp.shadowColor);
            style.shadowBlur = comp.shadowBlur;
            style.shadowOffsetX = comp.shadowOffset.x;
            style.shadowOffsetY = comp.shadowOffset.y;
          } else {
            style.hasShadow = false;
          }

          // render info
          style.color.set(comp.color); // may opacity bug // render Only
          outputRenderData.texture = comp.spriteFrame; // render Only
          outputRenderData.uiTransAnchorX = trans.anchorX; // render Only
          outputRenderData.uiTransAnchorY = trans.anchorY; // render Only

          layout.horizontalAlign = comp.horizontalAlign; // render Only
          layout.verticalAlign = comp.verticalAlign; // render Only
        },
        getAssemblerData: function getAssemblerData() {
          var sharedLabelData = Label._canvasPool.get();
          sharedLabelData.canvas.width = sharedLabelData.canvas.height = 1;
          return sharedLabelData;
        },
        resetAssemblerData: function resetAssemblerData(assemblerData) {
          if (assemblerData) {
            Label._canvasPool.put(assemblerData);
          }
        },
        updateRenderData: function updateRenderData(comp) {
          if (!comp.renderData) {
            return;
          }
          if (comp.renderData.vertDirty) {
            var trans = comp.node._uiProps.uiTransformComp;
            var processing = TextProcessing.instance;
            var style = comp.textStyle;
            var layout = comp.textLayout;
            var outputLayoutData = comp.textLayoutData;
            var outputRenderData = comp.textRenderData;
            style.fontScale = view.getScaleX();
            this.updateProcessingData(style, layout, outputLayoutData, outputRenderData, comp, trans);
            // use canvas in assemblerData // to do to optimize
            processing.setCanvasUsed(comp.assemblerData.canvas, comp.assemblerData.context);
            style.fontFamily = this._updateFontFamily(comp);
            this._resetDynamicAtlas(comp);

            // TextProcessing
            processing.processingString(false, style, layout, outputLayoutData, comp.string);
            processing.generateRenderInfo(false, style, layout, outputLayoutData, outputRenderData, comp.string, this.generateVertexData);
            var renderData = comp.renderData;
            renderData.textureDirty = true;
            this._calDynamicAtlas(comp, outputLayoutData);
            comp.actualFontSize = style.actualFontSize;
            trans.setContentSize(outputLayoutData.nodeContentSize);
            var datalist = renderData.data;
            datalist[0] = outputRenderData.vertexBuffer[0];
            datalist[1] = outputRenderData.vertexBuffer[1];
            datalist[2] = outputRenderData.vertexBuffer[2];
            datalist[3] = outputRenderData.vertexBuffer[3];
            this.updateUVs(comp);
            comp.renderData.vertDirty = false;
            comp.contentWidth = outputLayoutData.nodeContentSize.width;
          }
          if (comp.spriteFrame) {
            var _renderData = comp.renderData;
            _renderData.updateRenderData(comp, comp.spriteFrame);
          }
        },
        // callBack function
        generateVertexData: function generateVertexData(style, outputLayoutData, outputRenderData) {
          var data = outputRenderData.vertexBuffer;
          var width = outputLayoutData.nodeContentSize.width;
          var height = outputLayoutData.nodeContentSize.height;
          var appX = outputRenderData.uiTransAnchorX * width;
          var appY = outputRenderData.uiTransAnchorY * height;
          data[0].x = -appX; // l
          data[0].y = -appY; // b
          data[1].x = width - appX; // r
          data[1].y = -appY; // b
          data[2].x = -appX; // l
          data[2].y = height - appY; // t
          data[3].x = width - appX; // r
          data[3].y = height - appY; // t
        },
        updateVertexData: function updateVertexData(comp) {
          // no needs to update vertex data
        },
        updateUVs: function updateUVs(comp) {
          // no needs to update uv data
        },
        _updateFontFamily: function _updateFontFamily(comp) {
          var _fontFamily = '';
          if (!comp.useSystemFont) {
            if (comp.font) {
              _fontFamily = comp.font._nativeAsset || 'Arial';
            } else {
              _fontFamily = 'Arial';
            }
          } else {
            _fontFamily = comp.fontFamily || 'Arial';
          }
          return _fontFamily;
        },
        _calDynamicAtlas: function _calDynamicAtlas(comp, outputLayoutData) {
          if (comp.cacheMode !== Label.CacheMode.BITMAP || outputLayoutData.canvasSize.width <= 0 || outputLayoutData.canvasSize.height <= 0) return;
          var frame = comp.ttfSpriteFrame;
          dynamicAtlasManager.packToDynamicAtlas(comp, frame);
          // TODO update material and uv
        },
        _resetDynamicAtlas: function _resetDynamicAtlas(comp) {
          if (comp.cacheMode !== Label.CacheMode.BITMAP) return;
          var frame = comp.ttfSpriteFrame;
          dynamicAtlasManager.deleteAtlasSpriteFrame(frame);
          frame._resetDynamicAtlasFrame();
        }
      });
    }
  };
});