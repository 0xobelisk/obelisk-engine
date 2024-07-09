System.register("q-bundled:///fs/cocos/ui/editbox/edit-box-impl.js", ["pal/screen-adapter", "../../2d/assets/index.js", "../../game/director.js", "../../game/index.js", "../../core/index.js", "../view.js", "../../input/types/index.js", "../../core/utils/misc.js", "../../2d/components/label.js", "./tabIndexUtil.js", "./types.js", "./edit-box-impl-base.js", "../../../pal/system-info/enum-type/index.js", "../../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var screenAdapter, BitmapFont, director, game, Mat4, Vec3, visibleRect, sys, view, View, KeyCode, contains, Label, tabIndexUtil, InputFlag, InputMode, KeyboardReturnType, EditBoxImplBase, BrowserType, OS, ccwindow, ccdocument, SCROLLY, LEFT_PADDING, DELAY_TIME, _matrix, _matrix_temp, _vec3, _currentEditBoxImpl, _domCount, EditBoxImpl;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2011-2012 cocos2d-x.org
                                                                                                                                                                                                            Copyright (c) 2012 James Chen
                                                                                                                                                                                                            Copyright (c) 2013-2016 Chukong Technologies Inc.
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
  return {
    setters: [function (_palScreenAdapter) {
      screenAdapter = _palScreenAdapter.screenAdapter;
    }, function (_dAssetsIndexJs) {
      BitmapFont = _dAssetsIndexJs.BitmapFont;
    }, function (_gameDirectorJs) {
      director = _gameDirectorJs.director;
    }, function (_gameIndexJs) {
      game = _gameIndexJs.game;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Vec3 = _coreIndexJs.Vec3;
      visibleRect = _coreIndexJs.visibleRect;
      sys = _coreIndexJs.sys;
    }, function (_viewJs) {
      view = _viewJs.view;
      View = _viewJs.View;
    }, function (_inputTypesIndexJs) {
      KeyCode = _inputTypesIndexJs.KeyCode;
    }, function (_coreUtilsMiscJs) {
      contains = _coreUtilsMiscJs.contains;
    }, function (_dComponentsLabelJs) {
      Label = _dComponentsLabelJs.Label;
    }, function (_tabIndexUtilJs) {
      tabIndexUtil = _tabIndexUtilJs.tabIndexUtil;
    }, function (_typesJs) {
      InputFlag = _typesJs.InputFlag;
      InputMode = _typesJs.InputMode;
      KeyboardReturnType = _typesJs.KeyboardReturnType;
    }, function (_editBoxImplBaseJs) {
      EditBoxImplBase = _editBoxImplBaseJs.EditBoxImplBase;
    }, function (_palSystemInfoEnumTypeIndexJs) {
      BrowserType = _palSystemInfoEnumTypeIndexJs.BrowserType;
      OS = _palSystemInfoEnumTypeIndexJs.OS;
    }, function (_coreGlobalExportsJs) {
      ccwindow = _coreGlobalExportsJs.ccwindow;
    }],
    execute: function () {
      ccdocument = ccwindow.document; // https://segmentfault.com/q/1010000002914610
      SCROLLY = 40;
      LEFT_PADDING = 2;
      DELAY_TIME = 400;
      _matrix = new Mat4();
      _matrix_temp = new Mat4();
      _vec3 = new Vec3();
      _currentEditBoxImpl = null;
      _domCount = 0;
      _export("EditBoxImpl", EditBoxImpl = /*#__PURE__*/function (_EditBoxImplBase) {
        _inheritsLoose(EditBoxImpl, _EditBoxImplBase);
        function EditBoxImpl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EditBoxImplBase.call.apply(_EditBoxImplBase, [this].concat(args)) || this;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._delegate = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._inputMode = -1;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._inputFlag = -1;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._returnType = -1;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this.__eventListeners = {};
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this.__autoResize = false;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this.__orientationChanged = void 0;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._edTxt = null;
          _this._isTextArea = false;
          _this._textLabelFont = null;
          _this._textLabelFontSize = null;
          _this._textLabelFontColor = null;
          _this._textLabelAlign = null;
          _this._placeholderLabelFont = null;
          _this._placeholderLabelFontSize = null;
          _this._placeholderLabelFontColor = null;
          _this._placeholderLabelAlign = null;
          _this._placeholderLineHeight = null;
          _this._placeholderStyleSheet = null;
          _this._domId = "EditBoxId_" + ++_domCount;
          _this._forceUpdate = false;
          return _this;
        }
        var _proto = EditBoxImpl.prototype;
        _proto.init = function init(delegate) {
          if (!delegate) {
            return;
          }
          this._delegate = delegate;
          if (delegate.inputMode === InputMode.ANY) {
            this._createTextArea();
          } else {
            this._createInput();
          }
          tabIndexUtil.add(this);
          this.setTabIndex(delegate.tabIndex);
          this._initStyleSheet();
          this._registerEventListeners();
          this._addDomToGameContainer();
          View.instance.on('canvas-resize', this._resize, this);
          screenAdapter.on('window-resize', this._resize, this);
        };
        _proto.clear = function clear() {
          View.instance.off('canvas-resize', this._resize, this);
          screenAdapter.off('window-resize', this._resize, this);
          this._removeEventListeners();
          this._removeDomFromGameContainer();
          tabIndexUtil.remove(this);

          // clear while editing
          if (_currentEditBoxImpl === this) {
            _currentEditBoxImpl = null;
          }
          this._delegate = null;
        };
        _proto._resize = function _resize() {
          this._forceUpdate = true;
        }

        // The beforeDraw function should be used here.
        // Because many attributes are modified after the update is executed,
        // this can lead to problems with incorrect coordinates.
        ;
        _proto.beforeDraw = function beforeDraw() {
          var node = this._delegate.node;
          if (!node.hasChangedFlags && !this._forceUpdate) {
            return;
          }
          this._forceUpdate = false;
          this._updateMatrix();
        };
        _proto.setTabIndex = function setTabIndex(index) {
          this._edTxt.tabIndex = index;
          tabIndexUtil.resort();
        };
        _proto.setSize = function setSize(width, height) {
          var elem = this._edTxt;
          if (elem) {
            elem.style.width = width + "px";
            elem.style.height = height + "px";
          }
        };
        _proto.beginEditing = function beginEditing() {
          if (_currentEditBoxImpl && _currentEditBoxImpl !== this) {
            _currentEditBoxImpl.setFocus(false);
          }
          this._editing = true;
          _currentEditBoxImpl = this;
          this._delegate._editBoxEditingDidBegan();
          this._showDom();
          this._edTxt.focus();
        };
        _proto.endEditing = function endEditing() {
          this._edTxt.blur();
        };
        _proto._createInput = function _createInput() {
          this._isTextArea = false;
          this._edTxt = ccdocument.createElement('input');
        };
        _proto._createTextArea = function _createTextArea() {
          this._isTextArea = true;
          this._edTxt = ccdocument.createElement('textarea');
        };
        _proto._addDomToGameContainer = function _addDomToGameContainer() {
          if (game.container && this._edTxt) {
            game.container.appendChild(this._edTxt);
            ccdocument.head.appendChild(this._placeholderStyleSheet);
          }
        };
        _proto._removeDomFromGameContainer = function _removeDomFromGameContainer() {
          var hasElem = contains(game.container, this._edTxt);
          if (hasElem && this._edTxt) {
            game.container.removeChild(this._edTxt);
          }
          var hasStyleSheet = contains(ccdocument.head, this._placeholderStyleSheet);
          if (hasStyleSheet) {
            ccdocument.head.removeChild(this._placeholderStyleSheet);
          }
          this._edTxt = null;
          this._placeholderStyleSheet = null;
        };
        _proto._showDom = function _showDom() {
          this._updateMaxLength();
          this._updateInputType();
          this._updateStyleSheet();
          if (this._edTxt && this._delegate) {
            this._edTxt.style.display = '';
            this._delegate._hideLabels();
          }
          if (sys.isMobile) {
            this._showDomOnMobile();
          }
        };
        _proto._hideDom = function _hideDom() {
          var elem = this._edTxt;
          if (elem && this._delegate) {
            elem.style.display = 'none';
            this._delegate._showLabels();
          }
          if (sys.isMobile) {
            this._hideDomOnMobile();
          }
        };
        _proto._showDomOnMobile = function _showDomOnMobile() {
          if (sys.os !== OS.ANDROID && sys.os !== OS.OHOS) {
            return;
          }
          screenAdapter.handleResizeEvent = false;
          this._adjustWindowScroll();
        };
        _proto._hideDomOnMobile = function _hideDomOnMobile() {
          if (sys.os === OS.ANDROID || sys.os === OS.OHOS) {
            screenAdapter.handleResizeEvent = true;
          }
          this._scrollBackWindow();
        };
        _proto._isElementInViewport = function _isElementInViewport() {
          if (this._edTxt) {
            var rect = this._edTxt.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (ccwindow.innerHeight || ccdocument.documentElement.clientHeight) && rect.right <= (ccwindow.innerWidth || ccdocument.documentElement.clientWidth);
          }
          return false;
        };
        _proto._adjustWindowScroll = function _adjustWindowScroll() {
          var _this2 = this;
          setTimeout(function () {
            if (ccwindow.scrollY < SCROLLY && !_this2._isElementInViewport()) {
              _this2._edTxt.scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth'
              });
            }
          }, DELAY_TIME);
        };
        _proto._scrollBackWindow = function _scrollBackWindow() {
          setTimeout(function () {
            if (sys.browserType === BrowserType.WECHAT && sys.os === OS.IOS) {
              if (ccwindow.top) {
                ccwindow.top.scrollTo(0, 0);
              }
              return;
            }
            ccwindow.scrollTo(0, 0);
          }, DELAY_TIME);
        };
        _proto._updateMatrix = function _updateMatrix() {
          if (!this._edTxt) {
            return;
          }
          var node = this._delegate.node;
          var scaleX = view.getScaleX();
          var scaleY = view.getScaleY();
          var viewport = view.getViewportRect();
          // TODO: implement editBox in PAL
          var dpr = screenAdapter.devicePixelRatio;
          node.getWorldMatrix(_matrix);
          var transform = node._uiProps.uiTransformComp;
          if (transform) {
            Vec3.set(_vec3, -transform.anchorX * transform.width, -transform.anchorY * transform.height, _vec3.z);
            Mat4.transform(_matrix, _matrix, _vec3);
          }
          if (!node._uiProps.uiTransformComp) {
            return;
          }
          var camera = director.root.batcher2D.getFirstRenderCamera(node);
          if (!camera) return;
          camera.node.getWorldRT(_matrix_temp);
          var m12 = _matrix_temp.m12;
          var m13 = _matrix_temp.m13;
          var center = visibleRect.center;
          _matrix_temp.m12 = center.x - (_matrix_temp.m00 * m12 + _matrix_temp.m04 * m13);
          _matrix_temp.m13 = center.y - (_matrix_temp.m01 * m12 + _matrix_temp.m05 * m13);
          scaleX /= dpr;
          scaleY /= dpr;
          Vec3.set(_vec3, scaleX, scaleY, 1);
          Mat4.scale(_matrix_temp, _matrix_temp, _vec3);
          var container = game.container;
          var offsetX = parseInt(container && container.style.paddingLeft || '0');
          offsetX += viewport.x / dpr;
          var offsetY = parseInt(container && container.style.paddingBottom || '0');
          offsetY += viewport.y / dpr;
          _matrix_temp.m12 += offsetX;
          _matrix_temp.m13 += offsetY;
          Mat4.multiply(_matrix_temp, _matrix_temp, _matrix);
          var a = _matrix_temp.m00;
          var b = _matrix_temp.m01;
          var c = _matrix_temp.m04;
          var d = _matrix_temp.m05;
          var tx = _matrix_temp.m12;
          var ty = _matrix_temp.m13;
          var matrix = "matrix(" + a + "," + -b + "," + -c + "," + d + "," + tx + "," + -ty + ")";
          this._edTxt.style.transform = matrix;
          this._edTxt.style['-webkit-transform'] = matrix;
          this._edTxt.style['transform-origin'] = '0px 100% 0px';
          this._edTxt.style['-webkit-transform-origin'] = '0px 100% 0px';
        };
        _proto._updateInputType = function _updateInputType() {
          var delegate = this._delegate;
          var inputMode = delegate.inputMode;
          var inputFlag = delegate.inputFlag;
          var returnType = delegate.returnType;
          var elem = this._edTxt;
          if (this._inputMode === inputMode && this._inputFlag === inputFlag && this._returnType === returnType) {
            return;
          }

          // update cache
          this._inputMode = inputMode;
          this._inputFlag = inputFlag;
          this._returnType = returnType;

          // FIX ME: TextArea actually dose not support password type.
          if (this._isTextArea) {
            // input flag
            var transform = 'none';
            if (inputFlag === InputFlag.INITIAL_CAPS_ALL_CHARACTERS) {
              transform = 'uppercase';
            } else if (inputFlag === InputFlag.INITIAL_CAPS_WORD) {
              transform = 'capitalize';
            }
            elem.style.textTransform = transform;
            return;
          }
          elem = elem;
          // begin to updateInputType
          if (inputFlag === InputFlag.PASSWORD) {
            elem.type = 'password';
            elem.style.textTransform = 'none';
            return;
          }

          // input mode
          var type = elem.type;
          if (inputMode === InputMode.EMAIL_ADDR) {
            type = 'email';
          } else if (inputMode === InputMode.NUMERIC) {
            type = 'number';
          } else if (inputMode === InputMode.DECIMAL) {
            type = 'digit';
          } else if (inputMode === InputMode.PHONE_NUMBER) {
            type = 'tel';
            elem.addEventListener('wheel', function () {
              return false;
            });
          } else if (inputMode === InputMode.URL) {
            type = 'url';
          } else {
            type = 'text';
            if (returnType === KeyboardReturnType.SEARCH) {
              type = 'search';
            }
          }
          elem.type = type;

          // input flag
          var textTransform = 'none';
          if (inputFlag === InputFlag.INITIAL_CAPS_ALL_CHARACTERS) {
            textTransform = 'uppercase';
          } else if (inputFlag === InputFlag.INITIAL_CAPS_WORD) {
            textTransform = 'capitalize';
          }
          elem.style.textTransform = textTransform;
        };
        _proto._updateMaxLength = function _updateMaxLength() {
          var maxLength = this._delegate.maxLength;
          if (maxLength < 0) {
            maxLength = 65535;
          }
          this._edTxt.maxLength = maxLength;
        };
        _proto._initStyleSheet = function _initStyleSheet() {
          if (!this._edTxt) {
            return;
          }
          var elem = this._edTxt;
          elem.style.color = '#000000';
          elem.style.border = '0px';
          elem.style.background = 'transparent';
          elem.style.width = '100%';
          elem.style.height = '100%';
          elem.style.outline = 'medium';
          elem.style.padding = '0';
          elem.style.textTransform = 'none';
          elem.style.display = 'none';
          elem.style.position = 'absolute';
          elem.style.bottom = '0px';
          elem.style.left = LEFT_PADDING + "px";
          elem.className = 'cocosEditBox';
          elem.style.fontFamily = 'Arial';
          elem.id = this._domId;
          if (!this._isTextArea) {
            elem = elem;
            elem.type = 'text';
            elem.style['-moz-appearance'] = 'textfield';
          } else {
            elem.style.resize = 'none';
            elem.style.overflowY = 'scroll';
          }
          this._placeholderStyleSheet = ccdocument.createElement('style');
        };
        _proto._updateStyleSheet = function _updateStyleSheet() {
          var delegate = this._delegate;
          var elem = this._edTxt;
          if (elem && delegate) {
            elem.value = delegate.string;
            this._updateTextLabel(delegate.textLabel);

            // NOTE: we don't show placeholder any more when editBox is editing
            // elem.placeholder = delegate.placeholder;
            // this._updatePlaceholderLabel(delegate.placeholderLabel);
          }
        };
        _proto._updateTextLabel = function _updateTextLabel(textLabel) {
          if (!textLabel) {
            return;
          }
          var font = textLabel.font;
          if (font && !(font instanceof BitmapFont)) {
            font = font._fontFamily;
          } else {
            font = textLabel.fontFamily;
          }
          var fontSize = textLabel.fontSize * textLabel.node.scale.y;
          if (this._textLabelFont === font && this._textLabelFontSize === fontSize && this._textLabelFontColor === textLabel.fontColor && this._textLabelAlign === textLabel.horizontalAlign) {
            return;
          }
          this._textLabelFont = font;
          this._textLabelFontSize = fontSize;
          this._textLabelFontColor = textLabel.fontColor;
          this._textLabelAlign = textLabel.horizontalAlign;
          if (!this._edTxt) {
            return;
          }
          var elem = this._edTxt;
          elem.style.fontSize = fontSize + "px";
          elem.style.color = textLabel.color.toCSS();
          elem.style.fontFamily = font;
          switch (textLabel.horizontalAlign) {
            case Label.HorizontalAlign.LEFT:
              elem.style.textAlign = 'left';
              break;
            case Label.HorizontalAlign.CENTER:
              elem.style.textAlign = 'center';
              break;
            case Label.HorizontalAlign.RIGHT:
              elem.style.textAlign = 'right';
              break;
            default:
              break;
          }
        };
        _proto._updatePlaceholderLabel = function _updatePlaceholderLabel(placeholderLabel) {
          if (!placeholderLabel) {
            return;
          }
          var font = placeholderLabel.font;
          if (font && !(font instanceof BitmapFont)) {
            font = placeholderLabel.font._fontFamily;
          } else {
            font = placeholderLabel.fontFamily;
          }
          var fontSize = placeholderLabel.fontSize * placeholderLabel.node.scale.y;
          if (this._placeholderLabelFont === font && this._placeholderLabelFontSize === fontSize && this._placeholderLabelFontColor === placeholderLabel.fontColor && this._placeholderLabelAlign === placeholderLabel.horizontalAlign && this._placeholderLineHeight === placeholderLabel.fontSize) {
            return;
          }
          this._placeholderLabelFont = font;
          this._placeholderLabelFontSize = fontSize;
          this._placeholderLabelFontColor = placeholderLabel.fontColor;
          this._placeholderLabelAlign = placeholderLabel.horizontalAlign;
          this._placeholderLineHeight = placeholderLabel.fontSize;
          var styleEl = this._placeholderStyleSheet;
          var fontColor = placeholderLabel.color.toCSS();
          var lineHeight = placeholderLabel.fontSize;
          var horizontalAlign = '';
          switch (placeholderLabel.horizontalAlign) {
            case Label.HorizontalAlign.LEFT:
              horizontalAlign = 'left';
              break;
            case Label.HorizontalAlign.CENTER:
              horizontalAlign = 'center';
              break;
            case Label.HorizontalAlign.RIGHT:
              horizontalAlign = 'right';
              break;
            default:
              break;
          }
          styleEl.innerHTML = "#" + this._domId + "::-webkit-input-placeholder{text-transform: initial;-family: " + font + ";font-size: " + fontSize + "px;color: " + fontColor + ";line-height: " + lineHeight + "px;text-align: " + horizontalAlign + ";}" + ("#" + this._domId + "::-moz-placeholder{text-transform: initial;-family: " + font + ";font-size: " + fontSize + "px;color: " + fontColor + ";line-height: " + lineHeight + "px;text-align: " + horizontalAlign + ";}") + ("#" + this._domId + "::-ms-input-placeholder{text-transform: initial;-family: " + font + ";font-size: " + fontSize + "px;color: " + fontColor + ";line-height: " + lineHeight + "px;text-align: " + horizontalAlign + ";}");
          // EDGE_BUG_FIX: hide clear button, because clearing input box in Edge does not emit input event
          // issue refference: https://github.com/angular/angular/issues/26307
          if (sys.browserType === BrowserType.EDGE) {
            styleEl.innerHTML += "#" + this._domId + "::-ms-clear{display: none;}";
          }
        };
        _proto._registerEventListeners = function _registerEventListeners() {
          var _this3 = this;
          if (!this._edTxt) {
            return;
          }
          var elem = this._edTxt;
          var inputLock = false;
          var cbs = this.__eventListeners;
          cbs.compositionStart = function () {
            inputLock = true;
          };
          cbs.compositionEnd = function () {
            inputLock = false;
            _this3._delegate._editBoxTextChanged(elem.value);
          };
          cbs.onInput = function () {
            if (inputLock) {
              return;
            }
            var delegate = _this3._delegate;
            // input of number type doesn't support maxLength attribute
            var maxLength = delegate.maxLength;
            if (maxLength >= 0) {
              elem.value = elem.value.slice(0, maxLength);
            }
            delegate._editBoxTextChanged(elem.value);
          };
          cbs.onClick = function () {
            if (_this3._editing) {
              if (sys.isMobile) {
                _this3._adjustWindowScroll();
              }
            }
          };
          cbs.onKeydown = function (e) {
            if (e.keyCode === KeyCode.ENTER) {
              e.propagationStopped = true;
              _this3._delegate._editBoxEditingReturn();
              if (!_this3._isTextArea) {
                elem.blur();
              }
            } else if (e.keyCode === KeyCode.TAB) {
              e.propagationStopped = true;
              e.preventDefault();
              tabIndexUtil.next(_this3);
            }
          };
          cbs.onBlur = function () {
            // on mobile, sometimes input element doesn't fire compositionend event
            if (sys.isMobile && inputLock) {
              cbs.compositionEnd();
            }
            _this3._editing = false;
            _currentEditBoxImpl = null;
            _this3._hideDom();
            _this3._delegate._editBoxEditingDidEnded();
          };
          elem.addEventListener('compositionstart', cbs.compositionStart);
          elem.addEventListener('compositionend', cbs.compositionEnd);
          elem.addEventListener('input', cbs.onInput);
          elem.addEventListener('keydown', cbs.onKeydown);
          elem.addEventListener('blur', cbs.onBlur);
          elem.addEventListener('touchstart', cbs.onClick);
        };
        _proto._removeEventListeners = function _removeEventListeners() {
          if (!this._edTxt) {
            return;
          }
          var elem = this._edTxt;
          var cbs = this.__eventListeners;
          elem.removeEventListener('compositionstart', cbs.compositionStart);
          elem.removeEventListener('compositionend', cbs.compositionEnd);
          elem.removeEventListener('input', cbs.onInput);
          elem.removeEventListener('keydown', cbs.onKeydown);
          elem.removeEventListener('blur', cbs.onBlur);
          elem.removeEventListener('touchstart', cbs.onClick);
          cbs.compositionStart = null;
          cbs.compositionEnd = null;
          cbs.onInput = null;
          cbs.onKeydown = null;
          cbs.onBlur = null;
          cbs.onClick = null;
        };
        return EditBoxImpl;
      }(EditBoxImplBase));
    }
  };
});