System.register("q-bundled:///fs/cocos/2d/assembler/label/text-processing.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../asset/assets/asset-enum.js", "../../../core/index.js", "../../../core/platform/index.js", "../../assets/index.js", "../../components/label.js", "./font-utils.js", "../../utils/text-utils.js"], function (_export, _context) {
  "use strict";

  var ANDROID, JSB, WrapMode, cclegacy, Color, Rect, Vec2, log, logID, warn, SpriteFrame, HorizontalTextAlignment, Overflow, VerticalTextAlignment, CanvasPool, shareLabelInfo, BASELINE_RATIO, fragmentText, getBaselineOffset, getSymbolAt, getSymbolCodeAt, getSymbolLength, isUnicodeCJK, isUnicodeSpace, safeMeasureText, Alignment, MAX_SIZE, _BASELINE_OFFSET, _invisibleAlpha, MAX_CALCULATION_NUM, LetterInfo, TextProcessing;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
      ANDROID = _virtualInternal253AconstantsJs.ANDROID;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_assetAssetsAssetEnumJs) {
      WrapMode = _assetAssetsAssetEnumJs.WrapMode;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      Color = _coreIndexJs.Color;
      Rect = _coreIndexJs.Rect;
      Vec2 = _coreIndexJs.Vec2;
    }, function (_corePlatformIndexJs) {
      log = _corePlatformIndexJs.log;
      logID = _corePlatformIndexJs.logID;
      warn = _corePlatformIndexJs.warn;
    }, function (_assetsIndexJs) {
      SpriteFrame = _assetsIndexJs.SpriteFrame;
    }, function (_componentsLabelJs) {
      HorizontalTextAlignment = _componentsLabelJs.HorizontalTextAlignment;
      Overflow = _componentsLabelJs.Overflow;
      VerticalTextAlignment = _componentsLabelJs.VerticalTextAlignment;
    }, function (_fontUtilsJs) {
      CanvasPool = _fontUtilsJs.CanvasPool;
      shareLabelInfo = _fontUtilsJs.shareLabelInfo;
    }, function (_utilsTextUtilsJs) {
      BASELINE_RATIO = _utilsTextUtilsJs.BASELINE_RATIO;
      fragmentText = _utilsTextUtilsJs.fragmentText;
      getBaselineOffset = _utilsTextUtilsJs.getBaselineOffset;
      getSymbolAt = _utilsTextUtilsJs.getSymbolAt;
      getSymbolCodeAt = _utilsTextUtilsJs.getSymbolCodeAt;
      getSymbolLength = _utilsTextUtilsJs.getSymbolLength;
      isUnicodeCJK = _utilsTextUtilsJs.isUnicodeCJK;
      isUnicodeSpace = _utilsTextUtilsJs.isUnicodeSpace;
      safeMeasureText = _utilsTextUtilsJs.safeMeasureText;
    }],
    execute: function () {
      Alignment = ['left',
      // macro.TextAlignment.LEFT
      'center',
      // macro.TextAlignment.CENTER
      'right' // macro.TextAlignment.RIGHT
      ];
      MAX_SIZE = 2048;
      _BASELINE_OFFSET = getBaselineOffset();
      _invisibleAlpha = (1 / 255).toFixed(3);
      MAX_CALCULATION_NUM = 3;
      LetterInfo = function LetterInfo() {
        this["char"] = '';
        this.valid = true;
        this.x = 0;
        this.y = 0;
        this.line = 0;
        this.hash = '';
      };
      _export("TextProcessing", TextProcessing = /*#__PURE__*/function () {
        function TextProcessing() {
          // -------------------- Common Part --------------------------
          // -------------------- Canvas Mode Part --------------------------
          // -------------------- String Processing Part --------------------------
          this._context = null;
          this._canvas = null;
          this._canvasData = null;
          this._lettersInfo = [];
          this._tmpRect = new Rect();
          this._maxFontSize = 100;
          this._fontScale = 1;
          this._canvasData = CanvasPool.getInstance().get();
          this._canvas = this._canvasData.canvas;
          this._context = this._canvasData.context;
        }
        var _proto = TextProcessing.prototype;
        _proto.destroy = function destroy() {
          CanvasPool.getInstance().put(this._canvasData);
          this._lettersInfo.length = 0;
        };
        _proto.processingString = function processingString(isBmFont, style, layout, outputLayoutData, inputString, out) {
          if (!isBmFont) {
            var loopTime = 0;
            this._fontScale = this._getStyleFontScale(style.fontSize, style.fontScale);
            this._updatePaddingRect(style, outputLayoutData);
            this._calculateLabelFont(style, layout, outputLayoutData, inputString);
            // check & limit canvas size
            while ((outputLayoutData.canvasSize.width > MAX_SIZE || outputLayoutData.canvasSize.height > MAX_SIZE) && loopTime <= MAX_CALCULATION_NUM) {
              loopTime++;
              if (loopTime > MAX_CALCULATION_NUM) {
                this._fontScale = 1;
              } else {
                // Current Canvas Size max dimension
                var maxValue = Math.max(outputLayoutData.canvasSize.width, outputLayoutData.canvasSize.height);
                var canvasScaleToMaxSizeRatio = MAX_SIZE / maxValue;
                this._fontScale *= canvasScaleToMaxSizeRatio;
                this._fontScale = Math.max(1, this._fontScale);
              }
              this._updatePaddingRect(style, outputLayoutData);
              this._calculateLabelFont(style, layout, outputLayoutData, inputString);
            }
          } else {
            if (!style.fntConfig) {
              // for char
              this._fontScale = this._getStyleFontScale(style.originFontSize, style.fontScale);
            } else {
              this._fontScale = 1;
            }
            shareLabelInfo.fontScale = this._fontScale;
            this._setupBMFontOverflowMetrics(layout, outputLayoutData);
            this._updateFontScale(style);
            this._computeHorizontalKerningForText(style, layout, inputString);
            this._alignText(style, layout, outputLayoutData, inputString);
          }
          if (out) {
            out = outputLayoutData.parsedString;
          }
        };
        _proto.generateRenderInfo = function generateRenderInfo(isBmFont, style, layout, outputLayoutData, outputRenderData, inputString, callback) {
          if (!isBmFont) {
            this._updateLabelDimensions(style, layout, outputLayoutData);
            this._updateTexture(style, layout, outputLayoutData, outputRenderData);
            this.generateVertexData(isBmFont, style, layout, outputLayoutData, outputRenderData, inputString, callback);
          } else {
            this._computeAlignmentOffset(style, layout, outputLayoutData);
            this.generateVertexData(isBmFont, style, layout, outputLayoutData, outputRenderData, inputString, callback);
          }
        };
        _proto.setCanvasUsed = function setCanvasUsed(canvas, content) {
          this._canvas = canvas;
          this._context = content;
        };
        _proto._getStyleFontScale = function _getStyleFontScale(fontSize, fontScale) {
          var scale = fontScale;
          if (scale * fontSize > this._maxFontSize && fontSize < this._maxFontSize) {
            // Font size limit
            scale = this._maxFontSize / fontSize;
          }
          if (scale < 1) {
            scale = 1;
          }
          return scale;
        };
        _proto._calculateLabelFont = function _calculateLabelFont(style, layout, outputLayoutData, inputString) {
          if (!this._context) {
            return;
          }
          style.actualFontSize = style.fontSize * this._fontScale;
          if (ANDROID) {
            // Android restriction only accepts integer font sizes
            style.actualFontSize = Math.floor(style.actualFontSize);
            this._fontScale = style.actualFontSize / style.fontSize;
          }
          var paragraphedStrings = inputString.split('\n');
          var _splitStrings = outputLayoutData.parsedString = paragraphedStrings;
          var _fontDesc = this._getFontDesc(style.actualFontSize, style.fontFamily, style.isBold, style.isItalic);
          this._context.font = style.fontDesc = _fontDesc;
          switch (layout.overFlow) {
            case Overflow.NONE:
              {
                var canvasSizeX = 0;
                var canvasSizeY = 0;
                for (var i = 0; i < paragraphedStrings.length; ++i) {
                  var paraLength = safeMeasureText(this._context, paragraphedStrings[i], _fontDesc);
                  canvasSizeX = canvasSizeX > paraLength ? canvasSizeX : paraLength;
                }
                canvasSizeY = (_splitStrings.length + BASELINE_RATIO) * this._getLineHeight(layout.lineHeight, style.actualFontSize, style.fontSize);
                var rawWidth = canvasSizeX;
                var rawHeight = canvasSizeY;
                outputLayoutData.canvasSize.width = rawWidth + outputLayoutData.canvasPadding.width * this._fontScale;
                outputLayoutData.canvasSize.height = rawHeight + outputLayoutData.canvasPadding.height * this._fontScale;
                outputLayoutData.nodeContentSize.width = (rawWidth + outputLayoutData.contentSizeExtend.width * this._fontScale) / this._fontScale;
                outputLayoutData.nodeContentSize.height = (rawHeight + outputLayoutData.contentSizeExtend.height * this._fontScale) / this._fontScale;
                break;
              }
            case Overflow.SHRINK:
              {
                this._calculateShrinkFont(paragraphedStrings, style, layout, outputLayoutData);
                this._calculateWrapText(paragraphedStrings, style, layout, outputLayoutData);
                outputLayoutData.canvasSize.width = outputLayoutData.nodeContentSize.width * this._fontScale;
                outputLayoutData.canvasSize.height = outputLayoutData.nodeContentSize.height * this._fontScale;
                break;
              }
            case Overflow.CLAMP:
              {
                this._calculateWrapText(paragraphedStrings, style, layout, outputLayoutData);
                outputLayoutData.canvasSize.width = outputLayoutData.nodeContentSize.width * this._fontScale;
                outputLayoutData.canvasSize.height = outputLayoutData.nodeContentSize.height * this._fontScale;
                break;
              }
            case Overflow.RESIZE_HEIGHT:
              {
                this._calculateWrapText(paragraphedStrings, style, layout, outputLayoutData);
                var _rawHeight = (outputLayoutData.parsedString.length + BASELINE_RATIO) * this._getLineHeight(layout.lineHeight, style.actualFontSize, style.fontSize);
                outputLayoutData.canvasSize.width = outputLayoutData.nodeContentSize.width * this._fontScale;
                outputLayoutData.canvasSize.height = _rawHeight + outputLayoutData.canvasPadding.height * this._fontScale;
                // set node height
                outputLayoutData.nodeContentSize.height = (_rawHeight + outputLayoutData.contentSizeExtend.height * this._fontScale) / this._fontScale;
                break;
              }
            default:
              {
                // nop
              }
          }
        }

        // can cache
        ;
        _proto._getFontDesc = function _getFontDesc(fontSize, fontFamily, isBold, isItalic) {
          var fontDesc = fontSize.toString() + "px ";
          fontDesc += fontFamily;
          if (isBold) {
            fontDesc = "bold " + fontDesc;
          }
          if (isItalic) {
            fontDesc = "italic " + fontDesc;
          }
          return fontDesc;
        }

        // can cache
        ;
        _proto._getLineHeight = function _getLineHeight(lineHeight, fontSize, drawFontsize) {
          var nodeSpacingY = lineHeight;
          if (nodeSpacingY === 0) {
            nodeSpacingY = fontSize;
          } else {
            nodeSpacingY = nodeSpacingY * fontSize / drawFontsize;
          }
          return nodeSpacingY;
        };
        _proto._calculateShrinkFont = function _calculateShrinkFont(paragraphedStrings, style, layout, outputLayoutData) {
          if (!this._context) return;
          var _fontDesc = this._getFontDesc(style.actualFontSize, style.fontFamily, style.isBold, style.isItalic);
          this._context.font = _fontDesc;
          var paragraphLength = this._calculateParagraphLength(paragraphedStrings, this._context, _fontDesc);
          var i = 0;
          var totalHeight = 0;
          var maxLength = 0;
          var _fontSize = style.actualFontSize;
          if (layout.wrapping) {
            var canvasWidthNoMargin = outputLayoutData.nodeContentSize.width * this._fontScale;
            var canvasHeightNoMargin = outputLayoutData.nodeContentSize.height * this._fontScale;
            if (canvasWidthNoMargin < 0 || canvasHeightNoMargin < 0) {
              return;
            }
            totalHeight = canvasHeightNoMargin + 1;
            var actualFontSize = style.actualFontSize + 1;
            var textFragment = [];
            var left = 0;
            var right = actualFontSize | 0;
            var mid = 0;
            while (left < right) {
              mid = left + right + 1 >> 1;
              if (mid <= 0) {
                logID(4003);
                break;
              }
              _fontSize = mid;
              _fontDesc = this._getFontDesc(_fontSize, style.fontFamily, style.isBold, style.isItalic);
              this._context.font = _fontDesc;
              var lineHeight = this._getLineHeight(layout.lineHeight, _fontSize, style.fontSize);
              totalHeight = 0;
              for (i = 0; i < paragraphedStrings.length; ++i) {
                var allWidth = safeMeasureText(this._context, paragraphedStrings[i], _fontDesc);
                textFragment = fragmentText(paragraphedStrings[i], allWidth, canvasWidthNoMargin, this._measureText(this._context, _fontDesc));
                totalHeight += textFragment.length * lineHeight;
              }
              if (totalHeight > canvasHeightNoMargin) {
                right = mid - 1;
              } else {
                left = mid;
              }
            }
            if (left === 0) {
              logID(4003);
            } else {
              _fontSize = left;
              _fontDesc = this._getFontDesc(_fontSize, style.fontFamily, style.isBold, style.isItalic);
              this._context.font = _fontDesc;
            }
          } else {
            totalHeight = paragraphedStrings.length * this._getLineHeight(layout.lineHeight, _fontSize, style.fontSize);
            for (i = 0; i < paragraphedStrings.length; ++i) {
              if (maxLength < paragraphLength[i]) {
                maxLength = paragraphLength[i];
              }
            }
            var scaleX = (outputLayoutData.canvasSize.width - outputLayoutData.canvasPadding.width) * this._fontScale / maxLength;
            var scaleY = outputLayoutData.canvasSize.height * this._fontScale / totalHeight;
            _fontSize = style.actualFontSize * Math.min(1, scaleX, scaleY) | 0;
            _fontDesc = this._getFontDesc(_fontSize, style.fontFamily, style.isBold, style.isItalic);
            this._context.font = _fontDesc;
          }
          style.actualFontSize = _fontSize;
          style.fontDesc = _fontDesc;
        };
        _proto._calculateWrapText = function _calculateWrapText(paragraphedStrings, style, layout, outputLayoutData) {
          if (!layout.wrapping || !this._context) return;
          var _splitStrings = [];
          var canvasWidthNoMargin = outputLayoutData.nodeContentSize.width * this._fontScale;
          var _fontDesc = this._getFontDesc(style.actualFontSize, style.fontFamily, style.isBold, style.isItalic);
          this._context.font = _fontDesc;
          for (var i = 0; i < paragraphedStrings.length; ++i) {
            var allWidth = safeMeasureText(this._context, paragraphedStrings[i], _fontDesc);
            var textFragment = fragmentText(paragraphedStrings[i], allWidth, canvasWidthNoMargin, this._measureText(this._context, _fontDesc));
            _splitStrings = _splitStrings.concat(textFragment);
          }
          outputLayoutData.parsedString = _splitStrings;
          style.fontDesc = _fontDesc;
        };
        _proto._measureText = function _measureText(ctx, fontDesc) {
          return function (str) {
            return safeMeasureText(ctx, str, fontDesc);
          };
        };
        _proto._calculateParagraphLength = function _calculateParagraphLength(paragraphedStrings, ctx, fontDesc) {
          var paragraphLength = [];
          for (var _iterator = _createForOfIteratorHelperLoose(paragraphedStrings), _step; !(_step = _iterator()).done;) {
            var para = _step.value;
            var width = safeMeasureText(ctx, para, fontDesc);
            paragraphLength.push(width);
          }
          return paragraphLength;
        };
        _proto._updatePaddingRect = function _updatePaddingRect(style, outputLayoutData) {
          var top = 0;
          var bottom = 0;
          var left = 0;
          var right = 0;
          var outlineWidth = 0;
          outputLayoutData.contentSizeExtend.width = outputLayoutData.contentSizeExtend.height = 0;
          if (style.isOutlined) {
            outlineWidth = style.outlineWidth;
            top = bottom = left = right = outlineWidth;
            outputLayoutData.contentSizeExtend.width = outputLayoutData.contentSizeExtend.height = outlineWidth * 2;
          }
          if (style.hasShadow) {
            var shadowWidth = style.shadowBlur + outlineWidth;
            var offsetX = style.shadowOffsetX;
            var offsetY = style.shadowOffsetY;
            left = Math.max(left, -offsetX + shadowWidth);
            right = Math.max(right, offsetX + shadowWidth);
            top = Math.max(top, offsetY + shadowWidth);
            bottom = Math.max(bottom, -offsetY + shadowWidth);
          }
          if (style.isItalic) {
            // 0.0174532925 = 3.141592653 / 180
            var offset = style.fontSize * Math.tan(12 * 0.0174532925);
            right += offset;
            outputLayoutData.contentSizeExtend.width += offset;
          }
          outputLayoutData.canvasPadding.x = left;
          outputLayoutData.canvasPadding.y = top;
          outputLayoutData.canvasPadding.width = left + right;
          outputLayoutData.canvasPadding.height = top + bottom;
        }

        // -------------------- String Processing Part --------------------------

        // -------------------- Render Processing Part --------------------------
        ;
        _proto._updateLabelDimensions = function _updateLabelDimensions(style, layout, outputLayoutData) {
          outputLayoutData.canvasSize.width = Math.min(outputLayoutData.canvasSize.width, MAX_SIZE);
          outputLayoutData.canvasSize.height = Math.min(outputLayoutData.canvasSize.height, MAX_SIZE);
          this._canvas.width = outputLayoutData.canvasSize.width;
          this._canvas.height = outputLayoutData.canvasSize.height;
          this._context.font = style.fontDesc;
          // align
          this._context.textAlign = Alignment[layout.horizontalAlign];
          this._context.textBaseline = 'alphabetic';
        };
        _proto._calculateFillTextStartPosition = function _calculateFillTextStartPosition(style, layout, outputLayoutData) {
          var labelX = 0;
          if (layout.horizontalAlign === HorizontalTextAlignment.RIGHT) {
            labelX = outputLayoutData.canvasSize.width - outputLayoutData.canvasPadding.width;
          } else if (layout.horizontalAlign === HorizontalTextAlignment.CENTER) {
            labelX = (outputLayoutData.canvasSize.width - outputLayoutData.canvasPadding.width) / 2;
          }
          var lineHeight = this._getLineHeight(layout.lineHeight, style.actualFontSize, style.fontSize);
          var drawStartY = lineHeight * (outputLayoutData.parsedString.length - 1);
          // TOP
          var firstLinelabelY = style.actualFontSize * (1 - BASELINE_RATIO / 2);
          if (layout.verticalAlign !== VerticalTextAlignment.TOP) {
            // free space in vertical direction
            var blank = drawStartY + outputLayoutData.canvasPadding.height + style.actualFontSize - outputLayoutData.canvasSize.height;
            if (layout.verticalAlign === VerticalTextAlignment.BOTTOM) {
              // Unlike BMFont, needs to reserve space below.
              blank += BASELINE_RATIO / 2 * style.actualFontSize;
              // BOTTOM
              firstLinelabelY -= blank;
            } else {
              // CENTER
              firstLinelabelY -= blank / 2;
            }
          }
          firstLinelabelY += _BASELINE_OFFSET * style.actualFontSize;
          outputLayoutData.startPosition.set(labelX + outputLayoutData.canvasPadding.x, firstLinelabelY + outputLayoutData.canvasPadding.y);
        };
        _proto._updateTexture = function _updateTexture(style, layout, outputLayoutData, outputRenderData) {
          if (!this._context || !this._canvas) {
            return;
          }
          this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
          this._context.font = style.fontDesc;
          this._calculateFillTextStartPosition(style, layout, outputLayoutData);
          var lineHeight = this._getLineHeight(layout.lineHeight, style.actualFontSize, style.fontSize);
          // use round for line join to avoid sharp intersect point
          this._context.lineJoin = 'round';
          if (style.isOutlined) {
            this._context.fillStyle = "rgba(" + style.outlineColor.r + ", " + style.outlineColor.g + ", " + style.outlineColor.b + ", " + _invisibleAlpha + ")";
            // Notice: fillRect twice will not effect
            this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
          } else {
            this._context.fillStyle = "rgba(" + style.color.r + ", " + style.color.g + ", " + style.color.b + ", " + _invisibleAlpha + ")";
            this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
          }
          this._context.fillStyle = "rgb(" + style.color.r + ", " + style.color.g + ", " + style.color.b + ")";
          // Use the value that has been amplified by fontScale
          var tempPos = new Vec2(outputLayoutData.startPosition.x, outputLayoutData.startPosition.y);
          var drawTextPosX = tempPos.x;
          var drawTextPosY = 0;
          // draw shadow and underline
          this._drawTextEffect(tempPos, lineHeight, style, layout, outputLayoutData);
          // draw text and outline
          for (var i = 0; i < outputLayoutData.parsedString.length; ++i) {
            drawTextPosY = tempPos.y + i * lineHeight;
            //draw shadow
            if (style.hasShadow) {
              this._setupShadow(style);
              this._context.fillText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
            }
            //draw outline
            if (style.isOutlined) {
              this._setupOutline(style);
              this._context.strokeText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
            }
            //draw text
            if (!style.hasShadow || style.isOutlined) {
              this._context.fillText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
            }
          }
          if (style.hasShadow) {
            this._context.shadowColor = 'transparent';
          }
          this._uploadTexture(outputRenderData);
        };
        _proto._uploadTexture = function _uploadTexture(outputRenderData) {
          if (outputRenderData.texture && this._canvas) {
            var tex;
            if (outputRenderData.texture instanceof SpriteFrame) {
              tex = outputRenderData.texture.texture;
            } else {
              tex = outputRenderData.texture;
            }
            var uploadAgain = this._canvas.width !== 0 && this._canvas.height !== 0;
            if (uploadAgain) {
              tex.reset({
                width: this._canvas.width,
                height: this._canvas.height,
                mipmapLevel: 1
              });
              tex.uploadData(this._canvas);
              tex.setWrapMode(WrapMode.CLAMP_TO_EDGE, WrapMode.CLAMP_TO_EDGE);
              if (outputRenderData.texture instanceof SpriteFrame) {
                outputRenderData.texture.rect = new Rect(0, 0, this._canvas.width, this._canvas.height);
                outputRenderData.texture._calculateUV();
              }
              if (cclegacy.director.root && cclegacy.director.root.batcher2D) {
                if (JSB) {
                  cclegacy.director.root.batcher2D._releaseDescriptorSetCache(tex.getGFXTexture(), tex.getGFXSampler());
                } else {
                  cclegacy.director.root.batcher2D._releaseDescriptorSetCache(tex.getHash());
                }
              }
            }
          }
        };
        _proto._drawTextEffect = function _drawTextEffect(startPosition, lineHeight, style, layout, outputLayoutData) {
          if (!style.hasShadow && !style.isOutlined && !style.isUnderline) return;
          var isMultiple = outputLayoutData.parsedString.length > 1 && style.hasShadow;
          var measureText = this._measureText(this._context, style.fontDesc);
          var drawTextPosX = 0;
          var drawTextPosY = 0;

          // draw shadow and (outline or text)
          for (var i = 0; i < outputLayoutData.parsedString.length; ++i) {
            drawTextPosX = startPosition.x;
            drawTextPosY = startPosition.y + i * lineHeight;
            // multiple lines need to be drawn outline and fill text
            if (isMultiple) {
              //draw shadow
              if (style.hasShadow) {
                this._setupShadow(style);
                this._context.fillText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
              }
              // draw outline
              if (style.isOutlined) {
                this._setupOutline(style);
                this._context.strokeText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
              }

              //draw text
              if (!style.hasShadow || style.isOutlined) {
                this._context.fillText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
              }
            }

            // draw underline
            if (style.isUnderline) {
              var _drawUnderlineWidth = measureText(outputLayoutData.parsedString[i]);
              var _drawUnderlinePos = new Vec2();
              if (layout.horizontalAlign === HorizontalTextAlignment.RIGHT) {
                _drawUnderlinePos.x = startPosition.x - _drawUnderlineWidth;
              } else if (layout.horizontalAlign === HorizontalTextAlignment.CENTER) {
                _drawUnderlinePos.x = startPosition.x - _drawUnderlineWidth / 2;
              } else {
                _drawUnderlinePos.x = startPosition.x;
              }
              _drawUnderlinePos.y = drawTextPosY + style.actualFontSize / 8;
              this._context.fillRect(_drawUnderlinePos.x, _drawUnderlinePos.y, _drawUnderlineWidth, style.underlineHeight * this._fontScale);
            }
          }
          if (isMultiple) {
            this._context.shadowColor = 'transparent';
          }
        };
        _proto._setupOutline = function _setupOutline(style) {
          // draw outline need clear shadow
          this._context.shadowBlur = 0;
          this._context.shadowOffsetX = 0;
          this._context.shadowOffsetY = 0;
          this._context.strokeStyle = "rgba(" + style.outlineColor.r + ", " + style.outlineColor.g + ", " + style.outlineColor.b + ", " + style.outlineColor.a / 255 + ")";
          this._context.lineWidth = style.outlineWidth * 2 * this._fontScale;
        };
        _proto._setupShadow = function _setupShadow(style) {
          var fontScale = this._fontScale;
          this._context.shadowColor = "rgba(" + style.shadowColor.r + ", " + style.shadowColor.g + ", " + style.shadowColor.b + ", " + style.shadowColor.a / 255 + ")";
          this._context.shadowBlur = style.shadowBlur * fontScale;
          this._context.shadowOffsetX = style.shadowOffsetX * fontScale;
          this._context.shadowOffsetY = -style.shadowOffsetY * fontScale;
        }

        // -------------------- Render Processing Part --------------------------
        ;
        _proto.generateVertexData = function generateVertexData(isBmFont, style, layout, outputLayoutData, outputRenderData, inputString, callback) {
          if (!isBmFont) {
            this.updateQuatCount(outputRenderData); // update vbBuffer count
            callback(style, outputLayoutData, outputRenderData);
          } else {
            this._updateQuads(style, layout, outputLayoutData, outputRenderData, inputString, callback);
          }
        };
        _proto.updateQuatCount = function updateQuatCount(outputRenderData) {
          var data = outputRenderData.vertexBuffer;
          var count = outputRenderData.quadCount;
          if (data.length !== count) {
            for (var i = data.length; i < count; i++) {
              data.push({
                x: 0,
                y: 0,
                z: 0,
                u: 0,
                v: 0,
                color: Color.WHITE.clone()
              });
            }
            data.length = count;
          }
        }

        // -------------------- Canvas Mode Part ---------------------------
        // -------------------- Multiple Quad Mode Part --------------------
        ;
        _proto._setupBMFontOverflowMetrics = function _setupBMFontOverflowMetrics(layout, outputLayoutData) {
          var newWidth = outputLayoutData.nodeContentSize.width;
          var newHeight = outputLayoutData.nodeContentSize.height;
          if (layout.overFlow === Overflow.RESIZE_HEIGHT) {
            newHeight = 0;
          }
          if (layout.overFlow === Overflow.NONE) {
            newWidth = 0;
            newHeight = 0;
          }
          layout.textWidthTemp = newWidth;
          layout.textHeightTemp = newHeight;
          layout.textDimensions.width = newWidth;
          layout.textDimensions.height = newHeight;
          layout.maxLineWidth = newWidth;
        };
        _proto._updateFontScale = function _updateFontScale(style) {
          style.bmfontScale = style.actualFontSize / (style.originFontSize * this._fontScale);
        };
        _proto._computeHorizontalKerningForText = function _computeHorizontalKerningForText(style, layout, inputString) {
          var string = inputString;
          var stringLen = string.length;
          if (!style.fntConfig) return; // for char

          var kerningDict = style.fntConfig.kerningDict;
          var horizontalKerning = layout.horizontalKerning;
          if (!kerningDict || kerningDict.length === 0) {
            return;
          }
          var prev = -1;
          for (var i = 0; i < stringLen; ++i) {
            var key = string.charCodeAt(i);
            var kerningAmount = kerningDict[prev << 16 | key & 0xffff] || 0;
            if (i < stringLen - 1) {
              horizontalKerning[i] = kerningAmount;
            } else {
              horizontalKerning[i] = 0;
            }
            prev = key;
          }
        };
        _proto._alignText = function _alignText(style, layout, outputLayoutData, inputString) {
          this._multilineTextWrap(style, layout, outputLayoutData, inputString, this._getFirstWordLen);

          // shrink
          if (layout.overFlow === Overflow.SHRINK) {
            if (style.fontSize > 0 && this._isVerticalClamp(style, layout, outputLayoutData, inputString, this)) {
              this._shrinkLabelToContentSize(style, layout, outputLayoutData, inputString, this._isVerticalClamp);
            }
            if (style.fontSize > 0 && this._isHorizontalNeedShrink(layout, outputLayoutData)) {
              this._shrinkLabelToContentSize(style, layout, outputLayoutData, inputString, this._isHorizontalClamp);
            }
          }
          this._parsedString(outputLayoutData, inputString);
        };
        _proto._parsedString = function _parsedString(outputLayoutData, inputString) {
          var _splitStrings = [];
          var textFragment = '';
          var length = getSymbolLength(inputString);
          for (var i = 0, line = 0, l = length; i < l; ++i) {
            var letterInfo = this._lettersInfo[i];
            if (!letterInfo.valid) {
              continue;
            }
            if (line === letterInfo.line) {
              textFragment += letterInfo["char"];
            } else {
              _splitStrings = _splitStrings.concat(textFragment);
              line = letterInfo.line;
              textFragment = '';
            }
          }
          _splitStrings = _splitStrings.concat(textFragment);
          outputLayoutData.parsedString = _splitStrings;
        };
        _proto._multilineTextWrap = function _multilineTextWrap(style, layout, outputLayoutData, inputString, nextTokenFunc) {
          layout.linesWidth.length = 0;
          var _string = inputString;
          var textLen = _string.length;
          var lineIndex = 0;
          var nextTokenX = 0;
          var nextTokenY = 0;
          var longestLine = 0;
          var letterRight = 0;
          var highestY = 0;
          var lowestY = 0;
          var letterDef = null;
          var _lineSpacing = 0; // use less?

          for (var index = 0; index < textLen;) {
            var character = getSymbolAt(_string, index);
            if (character === '\n') {
              layout.linesWidth.push(letterRight);
              letterRight = 0;
              lineIndex++;
              nextTokenX = 0;
              nextTokenY -= layout.lineHeight * this._getFontScale(style, layout) + _lineSpacing;
              this._recordPlaceholderInfo(index, character);
              index++;
              continue;
            }
            var tokenLen = nextTokenFunc(style, layout, _string, index, textLen);
            var tokenHighestY = highestY;
            var tokenLowestY = lowestY;
            var tokenRight = letterRight;
            var nextLetterX = nextTokenX;
            var newLine = false;
            var letterPosition = new Vec2();
            for (var tmp = 0; tmp < tokenLen; ++tmp) {
              var letterIndex = index + tmp;
              character = getSymbolAt(_string, letterIndex);
              if (character === '\r') {
                this._recordPlaceholderInfo(letterIndex, character);
                continue;
              }
              letterDef = shareLabelInfo.fontAtlas.getLetterDefinitionForChar(character, shareLabelInfo);
              if (!letterDef) {
                this._recordPlaceholderInfo(letterIndex, character);
                if (style.fntConfig != null) {
                  log("Can't find letter definition in texture atlas " + style.fntConfig.atlasName + " for letter:" + character);
                } else {
                  log("Can't find letter definition in font family " + style.fontFamily + " for letter:" + character);
                }
                continue;
              }
              var letterX = nextLetterX + letterDef.offsetX * style.bmfontScale - shareLabelInfo.margin;
              if (layout.wrapping && layout.maxLineWidth > 0 && nextTokenX > 0 && letterX + letterDef.w * style.bmfontScale > layout.maxLineWidth && !isUnicodeSpace(character)) {
                layout.linesWidth.push(letterRight);
                letterRight = 0;
                lineIndex++;
                nextTokenX = 0;
                nextTokenY -= layout.lineHeight * this._getFontScale(style, layout) + _lineSpacing;
                newLine = true;
                break;
              } else {
                letterPosition.x = letterX;
              }
              letterPosition.y = nextTokenY - letterDef.offsetY * style.bmfontScale;
              this._recordLetterInfo(letterPosition, character, letterIndex, lineIndex);
              if (letterIndex + 1 < layout.horizontalKerning.length && letterIndex < textLen - 1) {
                nextLetterX += layout.horizontalKerning[letterIndex + 1] * style.bmfontScale;
              }
              nextLetterX += letterDef.xAdvance * style.bmfontScale + layout.spacingX;
              tokenRight = letterPosition.x + letterDef.w * style.bmfontScale;
              if (tokenHighestY < letterPosition.y) {
                tokenHighestY = letterPosition.y;
              }
              if (tokenLowestY > letterPosition.y - letterDef.h * style.bmfontScale) {
                tokenLowestY = letterPosition.y - letterDef.h * style.bmfontScale;
              }
            } // end of for loop

            if (newLine) {
              continue;
            }
            nextTokenX = nextLetterX;
            letterRight = tokenRight;
            if (highestY < tokenHighestY) {
              highestY = tokenHighestY;
            }
            if (lowestY > tokenLowestY) {
              lowestY = tokenLowestY;
            }
            if (longestLine < letterRight) {
              longestLine = letterRight;
            }
            index += tokenLen;
          } // end of for loop

          layout.linesWidth.push(letterRight);
          layout.numberOfLines = lineIndex + 1;
          layout.textDesiredHeight = layout.numberOfLines * layout.lineHeight * this._getFontScale(style, layout);
          if (layout.numberOfLines > 1) {
            layout.textDesiredHeight += (layout.numberOfLines - 1) * _lineSpacing;
          }
          outputLayoutData.nodeContentSize.width = layout.textWidthTemp;
          outputLayoutData.nodeContentSize.height = layout.textHeightTemp;
          if (layout.textWidthTemp <= 0) {
            outputLayoutData.nodeContentSize.width = parseFloat(longestLine.toFixed(2)) + shareLabelInfo.margin * 2;
          }
          if (layout.textHeightTemp <= 0) {
            outputLayoutData.nodeContentSize.height = parseFloat(layout.textDesiredHeight.toFixed(2)) + shareLabelInfo.margin * 2;
          }
          layout.tailoredTopY = outputLayoutData.nodeContentSize.height;
          layout.tailoredBottomY = 0;
          if (highestY > 0) {
            layout.tailoredTopY = outputLayoutData.nodeContentSize.height + highestY;
          }
          if (lowestY < -layout.textDesiredHeight) {
            layout.tailoredBottomY = layout.textDesiredHeight + lowestY;
          }
          return true;
        };
        _proto._recordPlaceholderInfo = function _recordPlaceholderInfo(letterIndex, _char) {
          if (letterIndex >= this._lettersInfo.length) {
            var tmpInfo = new LetterInfo();
            this._lettersInfo.push(tmpInfo);
          }
          this._lettersInfo[letterIndex]["char"] = _char;
          this._lettersInfo[letterIndex].hash = "" + getSymbolCodeAt(_char, 0) + shareLabelInfo.hash;
          this._lettersInfo[letterIndex].valid = false;
        };
        _proto._recordLetterInfo = function _recordLetterInfo(letterPosition, character, letterIndex, lineIndex) {
          if (letterIndex >= this._lettersInfo.length) {
            var tmpInfo = new LetterInfo();
            this._lettersInfo.push(tmpInfo);
          }
          var _char2 = getSymbolCodeAt(character, 0);
          var key = "" + _char2 + shareLabelInfo.hash;
          this._lettersInfo[letterIndex].line = lineIndex;
          this._lettersInfo[letterIndex]["char"] = character;
          this._lettersInfo[letterIndex].hash = key;
          this._lettersInfo[letterIndex].valid = shareLabelInfo.fontAtlas.getLetter(key).valid;
          this._lettersInfo[letterIndex].x = letterPosition.x;
          this._lettersInfo[letterIndex].y = letterPosition.y;
        };
        _proto._getFirstWordLen = function _getFirstWordLen(style, layout, text, startIndex, textLen) {
          var character = getSymbolAt(text, startIndex);
          if (isUnicodeCJK(character) || character === '\n' || isUnicodeSpace(character)) {
            return 1;
          }
          var len = 1;
          var letterDef = shareLabelInfo.fontAtlas.getLetterDefinitionForChar(character, shareLabelInfo);
          if (!letterDef) {
            return len;
          }
          var nextLetterX = letterDef.xAdvance * style.bmfontScale + layout.spacingX;
          var letterX = 0;
          for (var index = startIndex + 1; index < textLen; ++index) {
            character = getSymbolAt(text, index);
            letterDef = shareLabelInfo.fontAtlas.getLetterDefinitionForChar(character, shareLabelInfo);
            if (!letterDef) {
              break;
            }
            letterX = nextLetterX + letterDef.offsetX * style.bmfontScale;
            if (letterX + letterDef.w * style.bmfontScale > layout.maxLineWidth && !isUnicodeSpace(character) && layout.maxLineWidth > 0) {
              return len;
            }
            nextLetterX += letterDef.xAdvance * style.bmfontScale + layout.spacingX;
            if (character === '\n' || isUnicodeSpace(character) || isUnicodeCJK(character)) {
              break;
            }
            len++;
          }
          return len;
        };
        _proto._computeAlignmentOffset = function _computeAlignmentOffset(style, layout, outputLayoutData) {
          layout.linesOffsetX.length = 0;
          layout.letterOffsetY = 0;
          switch (layout.horizontalAlign) {
            case HorizontalTextAlignment.LEFT:
              for (var i = 0; i < layout.numberOfLines; ++i) {
                layout.linesOffsetX.push(0);
              }
              break;
            case HorizontalTextAlignment.CENTER:
              for (var _i = 0, l = layout.linesWidth.length; _i < l; _i++) {
                layout.linesOffsetX.push((outputLayoutData.nodeContentSize.width - layout.linesWidth[_i]) / 2);
              }
              break;
            case HorizontalTextAlignment.RIGHT:
              for (var _i2 = 0, _l = layout.linesWidth.length; _i2 < _l; _i2++) {
                layout.linesOffsetX.push(outputLayoutData.nodeContentSize.width - layout.linesWidth[_i2]);
              }
              break;
            default:
              break;
          }

          // TOP
          layout.letterOffsetY = outputLayoutData.nodeContentSize.height;
          if (layout.verticalAlign !== VerticalTextAlignment.TOP) {
            var blank = outputLayoutData.nodeContentSize.height - layout.textDesiredHeight + layout.lineHeight * this._getFontScale(style, layout) - style.originFontSize * this._fontScale * style.bmfontScale;
            if (layout.verticalAlign === VerticalTextAlignment.BOTTOM) {
              // BOTTOM
              layout.letterOffsetY -= blank;
            } else {
              // CENTER:
              layout.letterOffsetY -= blank / 2;
            }
          }
        };
        _proto._getFontScale = function _getFontScale(style, layout) {
          return layout.overFlow === Overflow.SHRINK ? style.bmfontScale : 1;
        };
        _proto._isVerticalClamp = function _isVerticalClamp(style, layout, outputLayoutData, inputString, process) {
          if (layout.textDesiredHeight > outputLayoutData.nodeContentSize.height) {
            return true;
          } else {
            return false;
          }
        };
        _proto._isHorizontalClamp = function _isHorizontalClamp(style, layout, outputLayoutData, inputString, process) {
          var letterClamp = false;
          var _string = inputString;
          var _length = getSymbolLength(_string);
          for (var ctr = 0, l = _length; ctr < l; ++ctr) {
            var letterInfo = process._lettersInfo[ctr];
            if (letterInfo.valid) {
              var letterDef = shareLabelInfo.fontAtlas.getLetterDefinitionForChar(letterInfo["char"], shareLabelInfo);
              if (!letterDef) {
                continue;
              }
              var px = letterInfo.x + letterDef.w * style.bmfontScale;
              var lineIndex = letterInfo.line;
              if (layout.textWidthTemp > 0) {
                if (!layout.wrapping) {
                  if (px > outputLayoutData.nodeContentSize.width) {
                    letterClamp = true;
                    break;
                  }
                } else {
                  var wordWidth = layout.linesWidth[lineIndex];
                  if (wordWidth > outputLayoutData.nodeContentSize.width && (px > outputLayoutData.nodeContentSize.width || px < 0)) {
                    letterClamp = true;
                    break;
                  }
                }
              }
            }
          }
          return letterClamp;
        };
        _proto._isHorizontalNeedShrink = function _isHorizontalNeedShrink(layout, outputLayoutData) {
          var wordWidth = 0;
          for (var ctr = 0, l = layout.linesWidth.length; ctr < l; ++ctr) {
            wordWidth = layout.linesWidth[ctr];
            if (wordWidth > outputLayoutData.nodeContentSize.width) return true;
          }
          return false;
        };
        _proto._shrinkLabelToContentSize = function _shrinkLabelToContentSize(style, layout, outputLayoutData, inputString, lambda) {
          var fontSize = style.actualFontSize;
          var left = 0;
          var right = fontSize | 0;
          var mid = 0;
          while (left < right) {
            mid = left + right + 1 >> 1;
            var newFontSize = mid;
            if (newFontSize <= 0) {
              break;
            }
            style.bmfontScale = newFontSize / (style.originFontSize * this._fontScale);
            this._multilineTextWrap(style, layout, outputLayoutData, inputString, this._getFirstWordLen);
            this._computeAlignmentOffset(style, layout, outputLayoutData);
            if (lambda(style, layout, outputLayoutData, inputString, this)) {
              right = mid - 1;
            } else {
              left = mid;
            }
          }
          if (left >= 0) {
            this._scaleFontSizeDown(style, layout, outputLayoutData, inputString, left);
          }
        };
        _proto._scaleFontSizeDown = function _scaleFontSizeDown(style, layout, outputLayoutData, inputString, fontSize) {
          var shouldUpdateContent = true;
          if (!fontSize) {
            fontSize = 0.1;
            shouldUpdateContent = false;
          }
          style.actualFontSize = fontSize;
          if (shouldUpdateContent) {
            this._updateFontScale(style);
            this._multilineTextWrap(style, layout, outputLayoutData, inputString, this._getFirstWordLen);
          }
        };
        _proto._updateQuads = function _updateQuads(style, layout, outputLayoutData, outputRenderData, inputString, callback) {
          var texture = style.spriteFrame ? style.spriteFrame.texture : shareLabelInfo.fontAtlas.getTexture();
          var appX = outputRenderData.uiTransAnchorX * outputLayoutData.nodeContentSize.width;
          var appY = outputRenderData.uiTransAnchorY * outputLayoutData.nodeContentSize.height;
          var ret = true;
          var _length = getSymbolLength(inputString);
          for (var ctr = 0, l = _length; ctr < l; ++ctr) {
            var letterInfo = this._lettersInfo[ctr];
            if (!letterInfo.valid) {
              continue;
            }
            var letterDef = shareLabelInfo.fontAtlas.getLetter(letterInfo.hash);
            if (!letterDef) {
              warn('Can\'t find letter in this bitmap-font');
              continue;
            }
            this._tmpRect.height = letterDef.h;
            this._tmpRect.width = letterDef.w;
            this._tmpRect.x = letterDef.u;
            this._tmpRect.y = letterDef.v;
            var py = letterInfo.y + layout.letterOffsetY;
            if (layout.textHeightTemp > 0) {
              if (py > layout.tailoredTopY) {
                var clipTop = py - layout.tailoredTopY;
                this._tmpRect.y += clipTop;
                this._tmpRect.height -= clipTop;
                py -= clipTop;
              }
              if (py - this._tmpRect.height * style.bmfontScale < layout.tailoredBottomY && layout.overFlow === Overflow.CLAMP) {
                this._tmpRect.height = py < layout.tailoredBottomY ? 0 : (py - layout.tailoredBottomY) / style.bmfontScale;
              }
            }
            var lineIndex = letterInfo.line;
            var px = letterInfo.x + letterDef.w / 2 * style.bmfontScale + layout.linesOffsetX[lineIndex];
            if (layout.textWidthTemp > 0) {
              if (this._isHorizontalClamped(layout, outputLayoutData, px, lineIndex)) {
                if (layout.overFlow === Overflow.CLAMP) {
                  this._tmpRect.width = 0;
                }
              }
            }
            if (this._tmpRect.height > 0 && this._tmpRect.width > 0) {
              var isRotated = this._determineRect(style);
              var letterPositionX = letterInfo.x + layout.linesOffsetX[letterInfo.line];
              var offset = outputRenderData.quadCount;
              outputRenderData.quadCount += 4; // Hard Code
              this.updateQuatCount(outputRenderData);
              callback(style, outputLayoutData, outputRenderData, offset, texture, this._tmpRect, isRotated, letterPositionX - appX, py - appY);
            }
          }
          return ret;
        };
        _proto._isHorizontalClamped = function _isHorizontalClamped(layout, outputLayoutData, px, lineIndex) {
          var wordWidth = layout.linesWidth[lineIndex];
          var letterOverClamp = px > outputLayoutData.nodeContentSize.width || px < 0;
          if (!layout.wrapping) {
            return letterOverClamp;
          } else {
            return wordWidth > outputLayoutData.nodeContentSize.width && letterOverClamp;
          }
        };
        _proto._determineRect = function _determineRect(style) {
          var _spriteFrame = style.spriteFrame;
          if (!_spriteFrame) return false; // for char mode
          var isRotated = _spriteFrame.isRotated();
          var originalSize = _spriteFrame.getOriginalSize();
          var rect = _spriteFrame.getRect();
          var offset = _spriteFrame.getOffset();
          var trimmedLeft = offset.x + (originalSize.width - rect.width) / 2;
          var trimmedTop = offset.y - (originalSize.height - rect.height) / 2;
          if (!isRotated) {
            this._tmpRect.x += rect.x - trimmedLeft;
            this._tmpRect.y += rect.y + trimmedTop;
          } else {
            var originalX = this._tmpRect.x;
            this._tmpRect.x = rect.x + rect.height - this._tmpRect.y - this._tmpRect.height - trimmedTop;
            this._tmpRect.y = originalX + rect.y - trimmedLeft;
            if (this._tmpRect.y < 0) {
              this._tmpRect.height += trimmedTop;
            }
          }
          return isRotated;
        }

        // -------------------- Multiple Quad Mode Part --------------------
        ;
        return TextProcessing;
      }());
      // -------------------- Common Part --------------------------
      TextProcessing.instance = void 0;
      TextProcessing.instance = new TextProcessing();
    }
  };
});