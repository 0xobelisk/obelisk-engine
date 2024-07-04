System.register("q-bundled:///fs/cocos/ui/editbox/edit-box.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../2d/framework/index.js", "../../2d/assets/sprite-frame.js", "../../scene-graph/component.js", "../../scene-graph/component-event-handler.js", "../../scene-graph/node.js", "../../2d/components/label.js", "../../2d/components/sprite.js", "./edit-box-impl.js", "./edit-box-impl-base.js", "./types.js", "../../core/global-exports.js", "../../scene-graph/node-event.js", "../../xr/event/xr-event-handle.js", "../../game/director.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, executionOrder, menu, requireComponent, tooltip, displayOrder, type, serializable, EDITOR_NOT_IN_PREVIEW, JSB, MINIGAME, RUNTIME_BASED, UITransform, SpriteFrame, Component, ComponentEventHandler, Node, Label, VerticalTextAlignment, Sprite, EditBoxImpl, EditBoxImplBase, InputFlag, InputMode, KeyboardReturnType, legacyCC, NodeEventType, XrKeyboardEventType, XrUIPressEventType, director, Director, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _class3, LEFT_PADDING, EventType, EditBox;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function capitalize(str) {
    return str.replace(/(?:^|\s)\S/g, a => a.toUpperCase());
  }
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
      JSB = _virtualInternal253AconstantsJs.JSB;
      MINIGAME = _virtualInternal253AconstantsJs.MINIGAME;
      RUNTIME_BASED = _virtualInternal253AconstantsJs.RUNTIME_BASED;
    }, function (_dFrameworkIndexJs) {
      UITransform = _dFrameworkIndexJs.UITransform;
    }, function (_dAssetsSpriteFrameJs) {
      SpriteFrame = _dAssetsSpriteFrameJs.SpriteFrame;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_sceneGraphComponentEventHandlerJs) {
      ComponentEventHandler = _sceneGraphComponentEventHandlerJs.EventHandler;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_dComponentsLabelJs) {
      Label = _dComponentsLabelJs.Label;
      VerticalTextAlignment = _dComponentsLabelJs.VerticalTextAlignment;
    }, function (_dComponentsSpriteJs) {
      Sprite = _dComponentsSpriteJs.Sprite;
    }, function (_editBoxImplJs) {
      EditBoxImpl = _editBoxImplJs.EditBoxImpl;
    }, function (_editBoxImplBaseJs) {
      EditBoxImplBase = _editBoxImplBaseJs.EditBoxImplBase;
    }, function (_typesJs) {
      InputFlag = _typesJs.InputFlag;
      InputMode = _typesJs.InputMode;
      KeyboardReturnType = _typesJs.KeyboardReturnType;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }, function (_xrEventXrEventHandleJs) {
      XrKeyboardEventType = _xrEventXrEventHandleJs.XrKeyboardEventType;
      XrUIPressEventType = _xrEventXrEventHandleJs.XrUIPressEventType;
    }, function (_gameDirectorJs) {
      director = _gameDirectorJs.director;
      Director = _gameDirectorJs.Director;
    }],
    execute: function () {
      LEFT_PADDING = 2;
      (function (EventType) {
        EventType["EDITING_DID_BEGAN"] = "editing-did-began";
        EventType["EDITING_DID_ENDED"] = "editing-did-ended";
        EventType["TEXT_CHANGED"] = "text-changed";
        EventType["EDITING_RETURN"] = "editing-return";
        EventType["XR_EDITING_DID_BEGAN"] = "xr-editing-did-began";
        EventType["XR_EDITING_DID_ENDED"] = "xr-editing-did-ended";
      })(EventType || (EventType = {}));
      /**
       * @en
       * `EditBox` is a component for inputing text, you can use it to gather small amounts of text from users.
       *
       * @zh
       * `EditBox` 组件，用于获取用户的输入文本。
       */
      _export("EditBox", EditBox = (_dec = ccclass('cc.EditBox'), _dec2 = help('i18n:cc.EditBox'), _dec3 = executionOrder(110), _dec4 = menu('UI/EditBox'), _dec5 = requireComponent(UITransform), _dec6 = displayOrder(1), _dec7 = tooltip('i18n:editbox.string'), _dec8 = displayOrder(2), _dec9 = tooltip('i18n:editbox.placeholder'), _dec10 = type(Label), _dec11 = displayOrder(3), _dec12 = tooltip('i18n:editbox.text_lable'), _dec13 = type(Label), _dec14 = displayOrder(4), _dec15 = tooltip('i18n:editbox.placeholder_label'), _dec16 = type(SpriteFrame), _dec17 = displayOrder(5), _dec18 = tooltip('i18n:editbox.backgroundImage'), _dec19 = type(InputFlag), _dec20 = displayOrder(6), _dec21 = tooltip('i18n:editbox.input_flag'), _dec22 = type(InputMode), _dec23 = displayOrder(7), _dec24 = tooltip('i18n:editbox.input_mode'), _dec25 = type(KeyboardReturnType), _dec26 = displayOrder(8), _dec27 = tooltip('i18n:editbox.returnType'), _dec28 = displayOrder(9), _dec29 = tooltip('i18n:editbox.max_length'), _dec30 = displayOrder(10), _dec31 = tooltip('i18n:editbox.tab_index'), _dec32 = type([ComponentEventHandler]), _dec33 = displayOrder(11), _dec34 = tooltip('i18n:editbox.editing_began'), _dec35 = type([ComponentEventHandler]), _dec36 = displayOrder(12), _dec37 = tooltip('i18n:editbox.text_changed'), _dec38 = type([ComponentEventHandler]), _dec39 = displayOrder(13), _dec40 = tooltip('i18n:editbox.editing_ended'), _dec41 = type([ComponentEventHandler]), _dec42 = displayOrder(14), _dec43 = tooltip('i18n:editbox.editing_return'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = executeInEditMode(_class = (_class2 = (_class3 = class EditBox extends Component {
        constructor(...args) {
          super(...args);
          /**
           * @en
           * The event handler to be called when EditBox began to edit text.
           *
           * @zh
           * 开始编辑文本输入框触发的事件回调。
           */
          this.editingDidBegan = _initializer && _initializer();
          /**
           * @en
           * The event handler to be called when EditBox text changes.
           *
           * @zh
           * 编辑文本输入框时触发的事件回调。
           */
          this.textChanged = _initializer2 && _initializer2();
          /**
           * @en
           * The event handler to be called when EditBox edit ends.
           *
           * @zh
           * 结束编辑文本输入框时触发的事件回调。
           */
          this.editingDidEnded = _initializer3 && _initializer3();
          /**
           * @en
           * The event handler to be called when return key is pressed. Windows is not supported.
           *
           * @zh
           * 当用户按下回车按键时的事件回调，目前不支持 windows 平台。
           */
          this.editingReturn = _initializer4 && _initializer4();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._impl = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._background = null;
          this._textLabel = _initializer5 && _initializer5();
          this._placeholderLabel = _initializer6 && _initializer6();
          this._returnType = _initializer7 && _initializer7();
          this._string = _initializer8 && _initializer8();
          this._tabIndex = _initializer9 && _initializer9();
          this._backgroundImage = _initializer10 && _initializer10();
          this._inputFlag = _initializer11 && _initializer11();
          this._inputMode = _initializer12 && _initializer12();
          this._maxLength = _initializer13 && _initializer13();
          this._isLabelVisible = false;
        }
        /**
         * @en
         * Input string of EditBox.
         *
         * @zh
         * 输入框的初始输入内容，如果为空则会显示占位符的文本。
         */
        get string() {
          return this._string;
        }
        set string(value) {
          if (this._maxLength >= 0 && value.length >= this._maxLength) {
            value = value.slice(0, this._maxLength);
          }
          if (this._string === value) {
            return;
          }
          this._string = value;
          this._updateString(value);
        }

        /**
         * @en
         * The display text of placeholder.
         *
         * @zh
         * 输入框占位符的文本内容。
         */
        get placeholder() {
          if (!this._placeholderLabel) {
            return '';
          }
          return this._placeholderLabel.string;
        }
        set placeholder(value) {
          if (this._placeholderLabel) {
            this._placeholderLabel.string = value;
          }
        }

        /**
         * @en
         * The Label component attached to the node for EditBox's input text label.
         *
         * @zh
         * 输入框输入文本节点上挂载的 Label 组件对象。
         */
        get textLabel() {
          return this._textLabel;
        }
        set textLabel(oldValue) {
          if (this._textLabel !== oldValue) {
            this._textLabel = oldValue;
            if (this._textLabel) {
              this._updateTextLabel();
              this._updateLabels();
            }
          }
        }

        /**
         * @en
         * The Label component attached to the node for EditBox's placeholder text label.
         *
         * @zh
         * 输入框占位符节点上挂载的 Label 组件对象。
         */
        get placeholderLabel() {
          return this._placeholderLabel;
        }
        set placeholderLabel(oldValue) {
          if (this._placeholderLabel !== oldValue) {
            this._placeholderLabel = oldValue;
            if (this._placeholderLabel) {
              this._updatePlaceholderLabel();
              this._updateLabels();
            }
          }
        }

        /**
         * @en
         * The background image of EditBox.
         *
         * @zh
         * 输入框的背景图片。
         */
        get backgroundImage() {
          return this._backgroundImage;
        }
        set backgroundImage(value) {
          if (this._backgroundImage === value) {
            return;
          }
          this._backgroundImage = value;
          this._ensureBackgroundSprite();
          this._background.spriteFrame = value;
        }

        /**
         * @en
         * Set the input flags that are to be applied to the EditBox.
         *
         * @zh
         * 指定输入标志位，可以指定输入方式为密码或者单词首字母大写。
         */
        get inputFlag() {
          return this._inputFlag;
        }
        set inputFlag(value) {
          if (this._inputFlag === value) {
            return;
          }
          this._inputFlag = value;
          this._updateString(this._string);
        }

        /**
         * @en
         * Set the input mode of the edit box.
         * If you pass ANY, it will create a multiline EditBox.
         *
         * @zh
         * 指定输入模式: ANY表示多行输入，其它都是单行输入，移动平台上还可以指定键盘样式。
         */
        get inputMode() {
          return this._inputMode;
        }
        set inputMode(oldValue) {
          if (this._inputMode !== oldValue) {
            this._inputMode = oldValue;
            this._updateTextLabel();
            this._updatePlaceholderLabel();
          }
        }

        /**
         * @en
         * The return key type of EditBox.
         * Note: it is meaningless for web platforms and desktop platforms.
         *
         * @zh
         * 指定移动设备上面回车按钮的样式。
         * 注意：这个选项对 web 平台与 desktop 平台无效。
         */
        get returnType() {
          return this._returnType;
        }
        set returnType(value) {
          this._returnType = value;
        }

        /**
         * @en
         * The maximize input length of EditBox.
         * - If pass a value less than 0, it won't limit the input number of characters.
         * - If pass 0, it doesn't allow input any characters.
         *
         * @zh
         * 输入框最大允许输入的字符个数。
         * - 如果值为小于 0 的值，则不会限制输入字符个数。
         * - 如果值为 0，则不允许用户进行任何输入。
         */
        get maxLength() {
          return this._maxLength;
        }
        set maxLength(value) {
          this._maxLength = value;
        }

        /**
         * @en
         * Set the tabIndex of the DOM input element (only useful on Web).
         *
         * @zh
         * 修改 DOM 输入元素的 tabIndex（这个属性只有在 Web 上面修改有意义）。
         */
        get tabIndex() {
          return this._tabIndex;
        }
        set tabIndex(value) {
          if (this._tabIndex !== value) {
            this._tabIndex = value;
            if (this._impl) {
              this._impl.setTabIndex(value);
            }
          }
        }

        /**
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */

        __preload() {
          this._init();
        }
        onEnable() {
          if (!EDITOR_NOT_IN_PREVIEW) {
            this._registerEvent();
          }
          this._ensureBackgroundSprite();
          if (this._impl) {
            this._impl.onEnable();
          }
        }
        _beforeDraw() {
          if (this._impl) {
            this._impl.beforeDraw();
          }
        }
        onDisable() {
          if (!EDITOR_NOT_IN_PREVIEW) {
            this._unregisterEvent();
          }
          this._unregisterBackgroundEvent();
          if (this._impl) {
            this._impl.onDisable();
          }
        }
        onDestroy() {
          director.off(Director.EVENT_BEFORE_DRAW, this._beforeDraw, this);
          if (this._impl) {
            this._impl.clear();
          }
        }

        /**
         * @en Let the EditBox get focus.
         * @zh 让当前 EditBox 获得焦点。
         */
        setFocus() {
          if (this._impl) {
            this._impl.setFocus(true);
          }
        }

        /**
         * @en Let the EditBox get focus.
         * @zh 让当前 EditBox 获得焦点。
         */
        focus() {
          if (this._impl) {
            this._impl.setFocus(true);
          }
        }

        /**
         * @en Let the EditBox lose focus.
         * @zh 让当前 EditBox 失去焦点。
         */
        blur() {
          if (this._impl) {
            this._impl.setFocus(false);
          }
        }

        /**
         * @en Determine whether EditBox is getting focus or not.
         * @zh 判断 EditBox 是否获得了焦点。
         * Note: only available on Web at the moment.
         */
        isFocused() {
          if (this._impl) {
            return this._impl.isFocused();
          }
          return false;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _editBoxEditingDidBegan() {
          ComponentEventHandler.emitEvents(this.editingDidBegan, this);
          this.node.emit(EventType.EDITING_DID_BEGAN, this);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         * @param text content filtered by sensitive words.This parameter may be undefined.
         * If relevant platform returns desensitized content, it will be passed to developer by EventType.EDITING_DID_ENDED.
         * Now only ByteDance minigame platform
         */
        _editBoxEditingDidEnded(text) {
          ComponentEventHandler.emitEvents(this.editingDidEnded, this);
          this.node.emit(EventType.EDITING_DID_ENDED, this, text);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _editBoxTextChanged(text) {
          text = this._updateLabelStringStyle(text, true);
          this.string = text;
          ComponentEventHandler.emitEvents(this.textChanged, text, this);
          this.node.emit(EventType.TEXT_CHANGED, this);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         * @param text content filtered by sensitive words.This parameter may be undefined.
         * If relevant platform returns desensitized content, it will be passed to developer by EventType.EDITING_RETURN.
         * Now only ByteDance minigame platform
         */
        _editBoxEditingReturn(text) {
          ComponentEventHandler.emitEvents(this.editingReturn, this);
          this.node.emit(EventType.EDITING_RETURN, this, text);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _showLabels() {
          this._isLabelVisible = true;
          this._updateLabels();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _hideLabels() {
          this._isLabelVisible = false;
          if (this._textLabel) {
            this._textLabel.node.active = false;
          }
          if (this._placeholderLabel) {
            this._placeholderLabel.node.active = false;
          }
        }
        _onTouchBegan(event) {
          event.propagationStopped = true;
        }
        _onTouchCancel(event) {
          event.propagationStopped = true;
        }
        _onTouchEnded(event) {
          if (this._impl) {
            this._impl.beginEditing();
          }
          event.propagationStopped = true;
        }
        _init() {
          this._updatePlaceholderLabel();
          this._updateTextLabel();
          this._isLabelVisible = true;
          this.node.on(NodeEventType.SIZE_CHANGED, this._resizeChildNodes, this);
          director.on(Director.EVENT_BEFORE_DRAW, this._beforeDraw, this);
          const impl = this._impl = new EditBox._EditBoxImpl();
          impl.init(this);
          this._updateString(this._string);
          this._syncSize();
        }
        _ensureBackgroundSprite() {
          if (!this._background) {
            let background = this.node.getComponent(Sprite);
            if (!background) {
              background = this.node.addComponent(Sprite);
            }
            if (background !== this._background) {
              // init background
              background.type = Sprite.Type.SLICED;
              background.spriteFrame = this._backgroundImage;
              this._background = background;
              this._registerBackgroundEvent();
            }
          }
        }
        _updateTextLabel() {
          let textLabel = this._textLabel;

          // If textLabel doesn't exist, create one.
          if (!textLabel) {
            let node = this.node.getChildByName('TEXT_LABEL');
            if (!node) {
              node = new Node('TEXT_LABEL');
              node.layer = this.node.layer;
            }
            textLabel = node.getComponent(Label);
            if (!textLabel) {
              textLabel = node.addComponent(Label);
            }
            node.parent = this.node;
            this._textLabel = textLabel;
          }
          if (this._inputMode === InputMode.ANY) {
            textLabel.verticalAlign = VerticalTextAlignment.TOP;
            textLabel.enableWrapText = true;
          } else {
            textLabel.enableWrapText = false;
          }
          textLabel.string = this._updateLabelStringStyle(this._string);
        }
        _updatePlaceholderLabel() {
          let placeholderLabel = this._placeholderLabel;

          // If placeholderLabel doesn't exist, create one.
          if (!placeholderLabel) {
            let node = this.node.getChildByName('PLACEHOLDER_LABEL');
            if (!node) {
              node = new Node('PLACEHOLDER_LABEL');
              node.layer = this.node.layer;
            }
            placeholderLabel = node.getComponent(Label);
            if (!placeholderLabel) {
              placeholderLabel = node.addComponent(Label);
            }
            node.parent = this.node;
            this._placeholderLabel = placeholderLabel;
          }
          if (this._inputMode === InputMode.ANY) {
            placeholderLabel.enableWrapText = true;
          } else {
            placeholderLabel.enableWrapText = false;
          }
          placeholderLabel.string = this.placeholder;
        }
        _syncSize() {
          const trans = this.node._uiProps.uiTransformComp;
          const size = trans.contentSize;
          if (this._background) {
            const bgTrans = this._background.node._uiProps.uiTransformComp;
            bgTrans.anchorPoint = trans.anchorPoint;
            bgTrans.setContentSize(size);
          }
          this._updateLabelPosition(size);
          if (this._impl) {
            this._impl.setSize(size.width, size.height);
          }
        }
        _updateLabels() {
          if (this._isLabelVisible) {
            const content = this._string;
            if (this._textLabel) {
              this._textLabel.node.active = content !== '';
            }
            if (this._placeholderLabel) {
              this._placeholderLabel.node.active = content === '';
            }
          }
        }
        _updateString(text) {
          const textLabel = this._textLabel;
          // Not inited yet
          if (!textLabel) {
            return;
          }
          let displayText = text;
          if (displayText) {
            displayText = this._updateLabelStringStyle(displayText);
          }
          textLabel.string = displayText;
          this._updateLabels();
        }
        _updateLabelStringStyle(text, ignorePassword = false) {
          const inputFlag = this._inputFlag;
          if (!ignorePassword && inputFlag === InputFlag.PASSWORD) {
            let passwordString = '';
            const len = text.length;
            for (let i = 0; i < len; ++i) {
              passwordString += '\u25CF';
            }
            text = passwordString;
          } else if (inputFlag === InputFlag.INITIAL_CAPS_ALL_CHARACTERS) {
            text = text.toUpperCase();
          } else if (inputFlag === InputFlag.INITIAL_CAPS_WORD) {
            text = capitalize(text);
          } else if (inputFlag === InputFlag.INITIAL_CAPS_SENTENCE) {
            text = capitalizeFirstLetter(text);
          }
          return text;
        }
        _registerEvent() {
          this.node.on(NodeEventType.TOUCH_START, this._onTouchBegan, this);
          this.node.on(NodeEventType.TOUCH_END, this._onTouchEnded, this);
          this.node.on(XrUIPressEventType.XRUI_UNCLICK, this._xrUnClick, this);
          this.node.on(XrKeyboardEventType.XR_KEYBOARD_INPUT, this._xrKeyBoardInput, this);
        }
        _unregisterEvent() {
          this.node.off(NodeEventType.TOUCH_START, this._onTouchBegan, this);
          this.node.off(NodeEventType.TOUCH_END, this._onTouchEnded, this);
          this.node.off(XrUIPressEventType.XRUI_UNCLICK, this._xrUnClick, this);
          this.node.off(XrKeyboardEventType.XR_KEYBOARD_INPUT, this._xrKeyBoardInput, this);
        }
        _onBackgroundSpriteFrameChanged() {
          if (!this._background) {
            return;
          }
          this.backgroundImage = this._background.spriteFrame;
        }
        _registerBackgroundEvent() {
          const node = this._background && this._background.node;
          node === null || node === void 0 ? void 0 : node.on(Sprite.EventType.SPRITE_FRAME_CHANGED, this._onBackgroundSpriteFrameChanged, this);
        }
        _unregisterBackgroundEvent() {
          const node = this._background && this._background.node;
          node === null || node === void 0 ? void 0 : node.off(Sprite.EventType.SPRITE_FRAME_CHANGED, this._onBackgroundSpriteFrameChanged, this);
        }
        _updateLabelPosition(size) {
          const trans = this.node._uiProps.uiTransformComp;
          const offX = -trans.anchorX * trans.width;
          const offY = -trans.anchorY * trans.height;
          const placeholderLabel = this._placeholderLabel;
          const textLabel = this._textLabel;
          if (textLabel) {
            textLabel.node._uiProps.uiTransformComp.setContentSize(size.width - LEFT_PADDING, size.height);
            textLabel.node.setPosition(offX + LEFT_PADDING, offY + size.height, textLabel.node.position.z);
            if (this._inputMode === InputMode.ANY) {
              textLabel.verticalAlign = VerticalTextAlignment.TOP;
            }
            textLabel.enableWrapText = this._inputMode === InputMode.ANY;
          }
          if (placeholderLabel) {
            placeholderLabel.node._uiProps.uiTransformComp.setContentSize(size.width - LEFT_PADDING, size.height);
            placeholderLabel.node.setPosition(offX + LEFT_PADDING, offY + size.height, placeholderLabel.node.position.z);
            placeholderLabel.enableWrapText = this._inputMode === InputMode.ANY;
          }
        }
        _resizeChildNodes() {
          const trans = this.node._uiProps.uiTransformComp;
          const textLabelNode = this._textLabel && this._textLabel.node;
          if (textLabelNode) {
            textLabelNode.setPosition(-trans.width / 2, trans.height / 2, textLabelNode.position.z);
            textLabelNode._uiProps.uiTransformComp.setContentSize(trans.contentSize);
          }
          const placeholderLabelNode = this._placeholderLabel && this._placeholderLabel.node;
          if (placeholderLabelNode) {
            placeholderLabelNode.setPosition(-trans.width / 2, trans.height / 2, placeholderLabelNode.position.z);
            placeholderLabelNode._uiProps.uiTransformComp.setContentSize(trans.contentSize);
          }
          const backgroundNode = this._background && this._background.node;
          if (backgroundNode) {
            backgroundNode._uiProps.uiTransformComp.setContentSize(trans.contentSize);
          }
          this._syncSize();
        }
        _xrUnClick() {
          this.node.emit(EventType.XR_EDITING_DID_BEGAN, this._maxLength, this.string);
        }
        _xrKeyBoardInput(str) {
          this.string = str;
        }
      }, _class3._EditBoxImpl = EditBoxImplBase, _class3.KeyboardReturnType = KeyboardReturnType, _class3.InputFlag = InputFlag, _class3.InputMode = InputMode, _class3.EventType = EventType, _class3), (_applyDecoratedDescriptor(_class2.prototype, "string", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "string"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "placeholder", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "placeholder"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "textLabel", [_dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "textLabel"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "placeholderLabel", [_dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "placeholderLabel"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "backgroundImage", [_dec16, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "backgroundImage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "inputFlag", [_dec19, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "inputFlag"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "inputMode", [_dec22, _dec23, _dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "inputMode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "returnType", [_dec25, _dec26, _dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "returnType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxLength", [_dec28, _dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "maxLength"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "tabIndex", [_dec30, _dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "tabIndex"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "editingDidBegan", [_dec32, serializable, _dec33, _dec34], function () {
        return [];
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "textChanged", [_dec35, serializable, _dec36, _dec37], function () {
        return [];
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "editingDidEnded", [_dec38, serializable, _dec39, _dec40], function () {
        return [];
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "editingReturn", [_dec41, serializable, _dec42, _dec43], function () {
        return [];
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_textLabel", [serializable], function () {
        return null;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_placeholderLabel", [serializable], function () {
        return null;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_returnType", [serializable], function () {
        return KeyboardReturnType.DEFAULT;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_string", [serializable], function () {
        return '';
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_tabIndex", [serializable], function () {
        return 0;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_backgroundImage", [serializable], function () {
        return null;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "_inputFlag", [serializable], function () {
        return InputFlag.DEFAULT;
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "_inputMode", [serializable], function () {
        return InputMode.ANY;
      }), _initializer13 = _applyDecoratedInitializer(_class2.prototype, "_maxLength", [serializable], function () {
        return 20;
      })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class)); // this equals to sys.isBrowser
      // now we have no web-adapter yet
      if (typeof window === 'object' && typeof document === 'object' && !MINIGAME && !JSB && !RUNTIME_BASED) {
        EditBox._EditBoxImpl = EditBoxImpl;
      }

      /**
       * @en if you don't need the EditBox and it isn't in any running Scene, you should
       * call the destroy method on this component or the associated node explicitly.
       * Otherwise, the created DOM element won't be removed from web page.
       * @zh
       * 如果你不再使用 EditBox，并且组件未添加到场景中，那么你必须手动对组件或所在节点调用 destroy。
       * 这样才能移除网页上的 DOM 节点，避免 Web 平台内存泄露。
       * @example
       * ```
       * editbox.node.parent = null;  // or  editbox.node.removeFromParent(false);
       * // when you don't need editbox anymore
       * editbox.node.destroy();
       * ```
       * @return {Boolean} whether it is the first time the destroy being called
       */

      legacyCC.internal.EditBox = EditBox;
    }
  };
});