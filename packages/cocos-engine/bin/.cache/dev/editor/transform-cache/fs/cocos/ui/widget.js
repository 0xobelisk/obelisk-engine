System.register("q-bundled:///fs/cocos/ui/widget.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../scene-graph/component.js", "../2d/framework/ui-transform.js", "../core/index.js", "./view.js", "../scene-graph/index.js", "../scene-graph/node.js", "../scene-graph/node-event.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, executionOrder, menu, requireComponent, tooltip, type, editorOnly, editable, serializable, visible, EDITOR, DEV, EDITOR_NOT_IN_PREVIEW, Component, UITransform, Size, Vec2, Vec3, visibleRect, ccenum, errorID, cclegacy, View, Scene, Node, NodeEventType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _class3, _tempScale, AlignMode, AlignFlags, TOP_BOT, LEFT_RIGHT, Widget;
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
  // returns a readonly size of the node
  function getReadonlyNodeSize(parent) {
    if (parent instanceof Scene) {
      if (EDITOR) {
        // const canvasComp = parent.getComponentInChildren(Canvas);
        if (!View.instance) {
          throw new Error('cc.view uninitiated');
        }
        return View.instance.getDesignResolutionSize();
      }
      return visibleRect;
    } else if (parent._uiProps.uiTransformComp) {
      return parent._uiProps.uiTransformComp.contentSize;
    } else {
      return Size.ZERO;
    }
  }
  function computeInverseTransForTarget(widgetNode, target, out_inverseTranslate, out_inverseScale) {
    if (widgetNode.parent) {
      _tempScale.set(widgetNode.parent.getScale().x, widgetNode.parent.getScale().y);
    } else {
      _tempScale.set(0, 0);
    }
    let scaleX = _tempScale.x;
    let scaleY = _tempScale.y;
    let translateX = 0;
    let translateY = 0;
    for (let node = widgetNode.parent;;) {
      if (!node) {
        // ERROR: widgetNode should be child of target
        out_inverseTranslate.x = out_inverseTranslate.y = 0;
        out_inverseScale.x = out_inverseScale.y = 1;
        return;
      }
      const pos = node.getPosition();
      translateX += pos.x;
      translateY += pos.y;
      node = node.parent; // loop increment

      if (node !== target) {
        if (node) {
          _tempScale.set(node.getScale().x, node.getScale().y);
        } else {
          _tempScale.set(0, 0);
        }
        const sx = _tempScale.x;
        const sy = _tempScale.y;
        translateX *= sx;
        translateY *= sy;
        scaleX *= sx;
        scaleY *= sy;
      } else {
        break;
      }
    }
    out_inverseScale.x = scaleX !== 0 ? 1 / scaleX : 1;
    out_inverseScale.y = scaleY !== 0 ? 1 / scaleY : 1;
    out_inverseTranslate.x = -translateX;
    out_inverseTranslate.y = -translateY;
  }

  /**
   * @en Enum for Widget's alignment mode, indicating when the widget should refresh.
   *
   * @zh Widget 的对齐模式，表示 Widget 应该何时刷新。
   */
  _export({
    getReadonlyNodeSize: getReadonlyNodeSize,
    computeInverseTransForTarget: computeInverseTransForTarget,
    AlignMode: void 0,
    AlignFlags: void 0
  });
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      editorOnly = _coreDataDecoratorsIndexJs.editorOnly;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      DEV = _virtualInternal253AconstantsJs.DEV;
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_dFrameworkUiTransformJs) {
      UITransform = _dFrameworkUiTransformJs.UITransform;
    }, function (_coreIndexJs) {
      Size = _coreIndexJs.Size;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      visibleRect = _coreIndexJs.visibleRect;
      ccenum = _coreIndexJs.ccenum;
      errorID = _coreIndexJs.errorID;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_viewJs) {
      View = _viewJs.View;
    }, function (_sceneGraphIndexJs) {
      Scene = _sceneGraphIndexJs.Scene;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }],
    execute: function () {
      _tempScale = new Vec2();
      (function (AlignMode) {
        AlignMode[AlignMode["ONCE"] = 0] = "ONCE";
        AlignMode[AlignMode["ALWAYS"] = 1] = "ALWAYS";
        AlignMode[AlignMode["ON_WINDOW_RESIZE"] = 2] = "ON_WINDOW_RESIZE";
      })(AlignMode || _export("AlignMode", AlignMode = {}));
      ccenum(AlignMode);

      /**
       * @en Enum for Widget's alignment flag, indicating when the widget select alignment.
       *
       * @zh Widget 的对齐标志，表示 Widget 选择对齐状态。
       */
      (function (AlignFlags) {
        AlignFlags[AlignFlags["TOP"] = 1] = "TOP";
        AlignFlags[AlignFlags["MID"] = 2] = "MID";
        AlignFlags[AlignFlags["BOT"] = 4] = "BOT";
        AlignFlags[AlignFlags["LEFT"] = 8] = "LEFT";
        AlignFlags[AlignFlags["CENTER"] = 16] = "CENTER";
        AlignFlags[AlignFlags["RIGHT"] = 32] = "RIGHT";
        AlignFlags[AlignFlags["HORIZONTAL"] = 56] = "HORIZONTAL";
        AlignFlags[AlignFlags["VERTICAL"] = 7] = "VERTICAL";
      })(AlignFlags || _export("AlignFlags", AlignFlags = {}));
      TOP_BOT = AlignFlags.TOP | AlignFlags.BOT;
      LEFT_RIGHT = AlignFlags.LEFT | AlignFlags.RIGHT;
      /**
       * @en
       * Stores and manipulate the anchoring based on its parent.
       * Widget are used for GUI but can also be used for other things.
       * Widget will adjust current node's position and size automatically,
       * but the results after adjustment can not be obtained until the next frame unless you call [[updateAlignment]] manually.
       *
       * @zh Widget 组件，用于设置和适配其相对于父节点的边距，Widget 通常被用于 UI 界面，也可以用于其他地方。<br/>
       * Widget 会自动调整当前节点的坐标和宽高，不过目前调整后的结果要到下一帧才能在脚本里获取到，除非你先手动调用 [[updateAlignment]]。
       */
      _export("Widget", Widget = (_dec = ccclass('cc.Widget'), _dec2 = help('i18n:cc.Widget'), _dec3 = executionOrder(110), _dec4 = menu('UI/Widget'), _dec5 = requireComponent(UITransform), _dec6 = type(Node), _dec7 = tooltip('i18n:widget.target'), _dec8 = tooltip('i18n:widget.align_top'), _dec9 = tooltip('i18n:widget.align_bottom'), _dec10 = tooltip('i18n:widget.align_left'), _dec11 = tooltip('i18n:widget.align_right'), _dec12 = tooltip('i18n:widget.align_h_center'), _dec13 = tooltip('i18n:widget.align_v_center'), _dec14 = visible(false), _dec15 = visible(false), _dec16 = tooltip('i18n:widget.top'), _dec17 = tooltip('i18n:widget.bottom'), _dec18 = tooltip('i18n:widget.left'), _dec19 = tooltip('i18n:widget.right'), _dec20 = tooltip('i18n:widget.horizontal_center'), _dec21 = tooltip('i18n:widget.vertical_center'), _dec22 = type(AlignMode), _dec23 = tooltip('i18n:widget.align_mode'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = executeInEditMode(_class = (_class2 = (_class3 = class Widget extends Component {
        constructor(...args) {
          super(...args);
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._lastPos = new Vec3();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._lastSize = new Size();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._dirty = true;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._hadAlignOnce = false;
          this._alignFlags = _initializer && _initializer();
          this._target = _initializer2 && _initializer2();
          this._left = _initializer3 && _initializer3();
          this._right = _initializer4 && _initializer4();
          this._top = _initializer5 && _initializer5();
          this._bottom = _initializer6 && _initializer6();
          this._horizontalCenter = _initializer7 && _initializer7();
          this._verticalCenter = _initializer8 && _initializer8();
          this._isAbsLeft = _initializer9 && _initializer9();
          this._isAbsRight = _initializer10 && _initializer10();
          this._isAbsTop = _initializer11 && _initializer11();
          this._isAbsBottom = _initializer12 && _initializer12();
          this._isAbsHorizontalCenter = _initializer13 && _initializer13();
          this._isAbsVerticalCenter = _initializer14 && _initializer14();
          // original size before align
          this._originalWidth = _initializer15 && _initializer15();
          this._originalHeight = _initializer16 && _initializer16();
          this._alignMode = _initializer17 && _initializer17();
          this._lockFlags = _initializer18 && _initializer18();
        }
        /**
         * @en
         * Specifies an alignment target that can only be one of the parent nodes of the current node.
         * The default value is null, and when null, indicates the current parent.
         *
         * @zh
         * 指定一个对齐目标，只能是当前节点的其中一个父节点，默认为空，为空时表示当前父节点。
         */
        get target() {
          return this._target;
        }
        set target(value) {
          if (this._target === value) {
            return;
          }
          this._unregisterTargetEvents();
          this._target = value;
          this._registerTargetEvents();
          if (EDITOR /* && !cc.engine._isPlaying */ && this.node.parent) {
            // adjust the offsets to keep the size and position unchanged after target changed
            cclegacy._widgetManager.updateOffsetsToStayPut(this);
          }
          this._validateTargetInDEV();
          this._recursiveDirty();
        }

        /**
         * @en
         * Whether to align to the top.
         *
         * @zh
         * 是否对齐上边。
         */
        get isAlignTop() {
          return (this._alignFlags & AlignFlags.TOP) > 0;
        }
        set isAlignTop(value) {
          this._setAlign(AlignFlags.TOP, value);
          this._recursiveDirty();
        }

        /**
         * @en
         * Whether to align to the bottom.
         *
         * @zh
         * 是否对齐下边。
         */
        get isAlignBottom() {
          return (this._alignFlags & AlignFlags.BOT) > 0;
        }
        set isAlignBottom(value) {
          this._setAlign(AlignFlags.BOT, value);
          this._recursiveDirty();
        }

        /**
         * @en
         * Whether to align to the left.
         *
         * @zh
         * 是否对齐左边。
         */
        get isAlignLeft() {
          return (this._alignFlags & AlignFlags.LEFT) > 0;
        }
        set isAlignLeft(value) {
          this._setAlign(AlignFlags.LEFT, value);
          this._recursiveDirty();
        }

        /**
         * @en
         * Whether to align to the right.
         *
         * @zh
         * 是否对齐右边。
         */
        get isAlignRight() {
          return (this._alignFlags & AlignFlags.RIGHT) > 0;
        }
        set isAlignRight(value) {
          this._setAlign(AlignFlags.RIGHT, value);
          this._recursiveDirty();
        }

        /**
         * @en
         * Whether to align vertically.
         *
         * @zh
         * 是否垂直方向对齐中点，开启此项会将垂直方向其他对齐选项取消。
         */
        get isAlignVerticalCenter() {
          return (this._alignFlags & AlignFlags.MID) > 0;
        }
        set isAlignVerticalCenter(value) {
          if (value) {
            this.isAlignTop = false;
            this.isAlignBottom = false;
            this._alignFlags |= AlignFlags.MID;
          } else {
            this._alignFlags &= ~AlignFlags.MID;
          }
          this._recursiveDirty();
        }

        /**
         * @en
         * Whether to align horizontally.
         *
         * @zh
         * 是否水平方向对齐中点，开启此选项会将水平方向其他对齐选项取消。
         */
        get isAlignHorizontalCenter() {
          return (this._alignFlags & AlignFlags.CENTER) > 0;
        }
        set isAlignHorizontalCenter(value) {
          if (value) {
            this.isAlignLeft = false;
            this.isAlignRight = false;
            this._alignFlags |= AlignFlags.CENTER;
          } else {
            this._alignFlags &= ~AlignFlags.CENTER;
          }
          this._recursiveDirty();
        }

        /**
         * @en
         * Whether to stretch horizontally, when enable the left and right alignment will be stretched horizontally,
         * the width setting is invalid (read only).
         *
         * @zh
         * 当前是否水平拉伸。当同时启用左右对齐时，节点将会被水平拉伸。此时节点的宽度（只读）。
         */
        get isStretchWidth() {
          return (this._alignFlags & LEFT_RIGHT) === LEFT_RIGHT;
        }

        /**
         * @en
         * Whether to stretch vertically, when enable the left and right alignment will be stretched vertically,
         * then height setting is invalid (read only).
         *
         * @zh
         * 当前是否垂直拉伸。当同时启用上下对齐时，节点将会被垂直拉伸，此时节点的高度（只读）。
         */
        get isStretchHeight() {
          return (this._alignFlags & TOP_BOT) === TOP_BOT;
        }

        // ALIGN MARGINS

        /**
         * @en
         * The margins between the top of this node and the top of parent node,
         * the value can be negative, Only available in 'isAlignTop' open.
         *
         * @zh
         * 本节点顶边和父节点顶边的距离，可填写负值，只有在 isAlignTop 开启时才有作用。
         */
        get top() {
          return this._top;
        }
        set top(value) {
          this._top = value;
          this._recursiveDirty();
        }

        /**
         * @EditorOnly Not for user
         */
        get editorTop() {
          return this._isAbsTop ? this._top : this._top * 100;
        }
        set editorTop(value) {
          this._top = this._isAbsTop ? value : value / 100;
          this._recursiveDirty();
        }

        /**
         * @en
         * The margins between the bottom of this node and the bottom of parent node,
         * the value can be negative, Only available in 'isAlignBottom' open.
         *
         * @zh
         * 本节点底边和父节点底边的距离，可填写负值，只有在 isAlignBottom 开启时才有作用。
         */
        get bottom() {
          return this._bottom;
        }
        set bottom(value) {
          this._bottom = value;
          this._recursiveDirty();
        }

        /**
         * @EditorOnly Not for user
         */
        get editorBottom() {
          return this._isAbsBottom ? this._bottom : this._bottom * 100;
        }
        set editorBottom(value) {
          this._bottom = this._isAbsBottom ? value : value / 100;
          this._recursiveDirty();
        }

        /**
         * @en
         * The margins between the left of this node and the left of parent node,
         * the value can be negative, Only available in 'isAlignLeft' open.
         *
         * @zh
         * 本节点左边和父节点左边的距离，可填写负值，只有在 isAlignLeft 开启时才有作用。
         */
        get left() {
          return this._left;
        }
        set left(value) {
          this._left = value;
          this._recursiveDirty();
        }

        /**
         * @EditorOnly Not for user
         */
        get editorLeft() {
          return this._isAbsLeft ? this._left : this._left * 100;
        }
        set editorLeft(value) {
          this._left = this._isAbsLeft ? value : value / 100;
          this._recursiveDirty();
        }

        /**
         * @en
         * The margins between the right of this node and the right of parent node,
         * the value can be negative, Only available in 'isAlignRight' open.
         *
         * @zh
         * 本节点右边和父节点右边的距离，可填写负值，只有在 isAlignRight 开启时才有作用。
         */
        get right() {
          return this._right;
        }
        set right(value) {
          this._right = value;
          this._recursiveDirty();
        }

        /**
         * @EditorOnly Not for user
         */
        get editorRight() {
          return this._isAbsRight ? this._right : this._right * 100;
        }
        set editorRight(value) {
          this._right = this._isAbsRight ? value : value / 100;
          this._recursiveDirty();
        }

        /**
         * @en
         * Horizontally aligns the midpoint offset value,
         * the value can be negative, Only available in 'isAlignHorizontalCenter' open.
         *
         * @zh
         * 水平居中的偏移值，可填写负值，只有在 isAlignHorizontalCenter 开启时才有作用。
         */
        get horizontalCenter() {
          return this._horizontalCenter;
        }
        set horizontalCenter(value) {
          this._horizontalCenter = value;
          this._recursiveDirty();
        }

        /**
         * @EditorOnly Not for user
         */
        get editorHorizontalCenter() {
          return this._isAbsHorizontalCenter ? this._horizontalCenter : this._horizontalCenter * 100;
        }
        set editorHorizontalCenter(value) {
          this._horizontalCenter = this._isAbsHorizontalCenter ? value : value / 100;
          this._recursiveDirty();
        }

        /**
         * @en
         * Vertically aligns the midpoint offset value,
         * the value can be negative, Only available in 'isAlignVerticalCenter' open.
         *
         * @zh
         * 垂直居中的偏移值，可填写负值，只有在 isAlignVerticalCenter 开启时才有作用。
         */
        get verticalCenter() {
          return this._verticalCenter;
        }
        set verticalCenter(value) {
          this._verticalCenter = value;
          this._recursiveDirty();
        }

        /**
         * @EditorOnly Not for user
         */
        get editorVerticalCenter() {
          return this._isAbsVerticalCenter ? this._verticalCenter : this._verticalCenter * 100;
        }
        set editorVerticalCenter(value) {
          this._verticalCenter = this._isAbsVerticalCenter ? value : value / 100;
          this._recursiveDirty();
        }

        /**
         * @en
         * If true, top is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height.
         *
         * @zh
         * 如果为 true，"top" 将会以像素作为边距，否则将会以相对父物体高度的比例（0 到 1）作为边距。
         */
        get isAbsoluteTop() {
          return this._isAbsTop;
        }
        set isAbsoluteTop(value) {
          if (this._isAbsTop === value) {
            return;
          }
          this._isAbsTop = value;
          this._autoChangedValue(AlignFlags.TOP, this._isAbsTop);
        }

        /**
         * @en
         * If true, bottom is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height.
         *
         * @zh
         * 如果为 true，"bottom" 将会以像素作为边距，否则将会以相对父物体高度的比例（0 到 1）作为边距。
         */
        get isAbsoluteBottom() {
          return this._isAbsBottom;
        }
        set isAbsoluteBottom(value) {
          if (this._isAbsBottom === value) {
            return;
          }
          this._isAbsBottom = value;
          this._autoChangedValue(AlignFlags.BOT, this._isAbsBottom);
        }

        /**
         * @en
         * If true, left is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width.
         *
         * @zh
         * 如果为 true，"left" 将会以像素作为边距，否则将会以相对父物体宽度的比例（0 到 1）作为边距。
         */
        get isAbsoluteLeft() {
          return this._isAbsLeft;
        }
        set isAbsoluteLeft(value) {
          if (this._isAbsLeft === value) {
            return;
          }
          this._isAbsLeft = value;
          this._autoChangedValue(AlignFlags.LEFT, this._isAbsLeft);
        }

        /**
         * @en
         * If true, right is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width.
         *
         * @zh
         * 如果为 true，"right" 将会以像素作为边距，否则将会以相对父物体宽度的比例（0 到 1）作为边距。
         */
        get isAbsoluteRight() {
          return this._isAbsRight;
        }
        set isAbsoluteRight(value) {
          if (this._isAbsRight === value) {
            return;
          }
          this._isAbsRight = value;
          this._autoChangedValue(AlignFlags.RIGHT, this._isAbsRight);
        }

        /**
         * @en
         * If true, horizontalCenter is pixel margin, otherwise is percentage (0 - 1) margin.
         *
         * @zh
         * 如果为 true，"horizontalCenter" 将会以像素作为偏移值，反之为比例（0 到 1）。
         */
        get isAbsoluteHorizontalCenter() {
          return this._isAbsHorizontalCenter;
        }
        set isAbsoluteHorizontalCenter(value) {
          if (this._isAbsHorizontalCenter === value) {
            return;
          }
          this._isAbsHorizontalCenter = value;
          this._autoChangedValue(AlignFlags.CENTER, this._isAbsHorizontalCenter);
        }

        /**
         * @en
         * If true, verticalCenter is pixel margin, otherwise is percentage (0 - 1) margin.
         *
         * @zh
         * 如果为 true，"verticalCenter" 将会以像素作为偏移值，反之为比例（0 到 1）。
         */
        get isAbsoluteVerticalCenter() {
          return this._isAbsVerticalCenter;
        }
        set isAbsoluteVerticalCenter(value) {
          if (this._isAbsVerticalCenter === value) {
            return;
          }
          this._isAbsVerticalCenter = value;
          this._autoChangedValue(AlignFlags.MID, this._isAbsVerticalCenter);
        }

        /**
         * @en
         * Specifies the alignment mode of the Widget, which determines when the widget should refresh.
         *
         * @zh
         * 指定 Widget 的对齐模式，用于决定 Widget 应该何时刷新。
         *
         * @example
         * ```
         * import { Widget } from 'cc';
         * widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
         * ```
         */
        get alignMode() {
          return this._alignMode;
        }
        set alignMode(value) {
          this._alignMode = value;
          this._recursiveDirty();
        }

        /**
         * @zh
         * 对齐标志位。
         * @en
         * Align flags.
         */
        get alignFlags() {
          return this._alignFlags;
        }
        set alignFlags(value) {
          if (this._alignFlags === value) {
            return;
          }
          this._alignFlags = value;
          this._recursiveDirty();
        }
        /**
         * @en
         * Immediately perform the widget alignment. You need to manually call this method only if
         * you need to get the latest results after the alignment before the end of current frame.
         *
         * @zh
         * 立刻执行 widget 对齐操作。这个接口一般不需要手工调用。
         * 只有当你需要在当前帧结束前获得 widget 对齐后的最新结果时才需要手动调用这个方法。
         *
         * @example
         * ```ts
         * import { log } from 'cc';
         * widget.top = 10;       // change top margin
         * log(widget.node.y); // not yet changed
         * widget.updateAlignment();
         * log(widget.node.y); // changed
         * ```
         */
        updateAlignment() {
          cclegacy._widgetManager.updateAlignment(this.node);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _validateTargetInDEV() {
          if (!DEV) {
            return;
          }
          const target = this._target;
          if (target) {
            const isParent = this.node !== target && this.node.isChildOf(target);
            if (!isParent) {
              errorID(6500);
              this.target = null;
            }
          }
        }
        setDirty() {
          this._recursiveDirty();
        }
        onEnable() {
          this.node.getPosition(this._lastPos);
          this._lastSize.set(this.node._uiProps.uiTransformComp.contentSize);
          cclegacy._widgetManager.add(this);
          this._hadAlignOnce = false;
          this._registerEvent();
          this._registerTargetEvents();
        }
        onDisable() {
          cclegacy._widgetManager.remove(this);
          this._unregisterEvent();
          this._unregisterTargetEvents();
        }
        onDestroy() {
          this._removeParentEvent();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _adjustWidgetToAllowMovingInEditor(eventType) {}
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _adjustWidgetToAllowResizingInEditor() {}

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _adjustWidgetToAnchorChanged() {
          this.setDirty();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _adjustTargetToParentChanged(oldParent) {
          if (oldParent) {
            this._unregisterOldParentEvents(oldParent);
          }
          if (this.node.getParent()) {
            this._registerTargetEvents();
          }
          this._setDirtyByMode();
        }
        _registerEvent() {
          if (EDITOR_NOT_IN_PREVIEW) {
            this.node.on(NodeEventType.TRANSFORM_CHANGED, this._adjustWidgetToAllowMovingInEditor, this);
            this.node.on(NodeEventType.SIZE_CHANGED, this._adjustWidgetToAllowResizingInEditor, this);
          } else {
            this.node.on(NodeEventType.TRANSFORM_CHANGED, this._setDirtyByMode, this);
            this.node.on(NodeEventType.SIZE_CHANGED, this._setDirtyByMode, this);
          }
          this.node.on(NodeEventType.ANCHOR_CHANGED, this._adjustWidgetToAnchorChanged, this);
          this.node.on(NodeEventType.PARENT_CHANGED, this._adjustTargetToParentChanged, this);
        }
        _unregisterEvent() {
          if (EDITOR_NOT_IN_PREVIEW) {
            this.node.off(NodeEventType.TRANSFORM_CHANGED, this._adjustWidgetToAllowMovingInEditor, this);
            this.node.off(NodeEventType.SIZE_CHANGED, this._adjustWidgetToAllowResizingInEditor, this);
          } else {
            this.node.off(NodeEventType.TRANSFORM_CHANGED, this._setDirtyByMode, this);
            this.node.off(NodeEventType.SIZE_CHANGED, this._setDirtyByMode, this);
          }
          this.node.off(NodeEventType.ANCHOR_CHANGED, this._adjustWidgetToAnchorChanged, this);
        }
        _removeParentEvent() {
          this.node.off(NodeEventType.PARENT_CHANGED, this._adjustTargetToParentChanged, this);
        }
        _autoChangedValue(flag, isAbs) {
          const current = (this._alignFlags & flag) > 0;
          if (!current) {
            return;
          }
          const parentUiProps = this.node.parent && this.node.parent._uiProps;
          const parentTrans = parentUiProps && parentUiProps.uiTransformComp;
          const size = parentTrans ? parentTrans.contentSize : visibleRect;
          if (this.isAlignLeft && flag === AlignFlags.LEFT) {
            this._left = isAbs ? this._left * size.width : this._left / size.width;
          } else if (this.isAlignRight && flag === AlignFlags.RIGHT) {
            this._right = isAbs ? this._right * size.width : this._right / size.width;
          } else if (this.isAlignHorizontalCenter && flag === AlignFlags.CENTER) {
            this._horizontalCenter = isAbs ? this._horizontalCenter * size.width : this._horizontalCenter / size.width;
          } else if (this.isAlignTop && flag === AlignFlags.TOP) {
            this._top = isAbs ? this._top * size.height : this._top / size.height;
          } else if (this.isAlignBottom && flag === AlignFlags.BOT) {
            this._bottom = isAbs ? this._bottom * size.height : this._bottom / size.height;
          } else if (this.isAbsoluteVerticalCenter && flag === AlignFlags.MID) {
            this._verticalCenter = isAbs ? this._verticalCenter / size.height : this._verticalCenter / size.height;
          }
          this._recursiveDirty();
        }
        _registerTargetEvents() {
          const target = this._target || this.node.parent;
          if (target) {
            if (target.getComponent(UITransform)) {
              target.on(NodeEventType.TRANSFORM_CHANGED, this._setDirtyByMode, this);
              target.on(NodeEventType.SIZE_CHANGED, this._setDirtyByMode, this);
              target.on(NodeEventType.ANCHOR_CHANGED, this._setDirtyByMode, this);
            }
          }
        }
        _unregisterTargetEvents() {
          const target = this._target || this.node.parent;
          if (target) {
            target.off(NodeEventType.TRANSFORM_CHANGED, this._setDirtyByMode, this);
            target.off(NodeEventType.SIZE_CHANGED, this._setDirtyByMode, this);
            target.off(NodeEventType.ANCHOR_CHANGED, this._setDirtyByMode, this);
          }
        }
        _unregisterOldParentEvents(oldParent) {
          const target = this._target || oldParent;
          if (target) {
            target.off(NodeEventType.TRANSFORM_CHANGED, this._setDirtyByMode, this);
            target.off(NodeEventType.SIZE_CHANGED, this._setDirtyByMode, this);
          }
        }
        _setDirtyByMode() {
          if (this.alignMode === AlignMode.ALWAYS || EDITOR_NOT_IN_PREVIEW) {
            this._recursiveDirty();
          }
        }
        _setAlign(flag, isAlign) {
          const current = (this._alignFlags & flag) > 0;
          if (isAlign === current) {
            return;
          }
          const isHorizontal = (flag & LEFT_RIGHT) > 0;
          const trans = this.node._uiProps.uiTransformComp;
          if (isAlign) {
            this._alignFlags |= flag;
            if (isHorizontal) {
              this.isAlignHorizontalCenter = false;
              if (this.isStretchWidth) {
                // become stretch
                this._originalWidth = trans.width;
                // test check conflict
                if (EDITOR /* && !cc.engine.isPlaying */) {
                  // TODO:
                  // _Scene.DetectConflict.checkConflict_Widget(this);
                }
              }
            } else {
              this.isAlignVerticalCenter = false;
              if (this.isStretchHeight) {
                // become stretch
                this._originalHeight = trans.height;
                // test check conflict
                if (EDITOR /* && !cc.engine.isPlaying */) {
                  // TODO:
                  // _Scene.DetectConflict.checkConflict_Widget(this);
                }
              }
            }
            if (EDITOR && this.node.parent) {
              // adjust the offsets to keep the size and position unchanged after alignment changed
              cclegacy._widgetManager.updateOffsetsToStayPut(this, flag);
            }
          } else {
            if (isHorizontal) {
              if (this.isStretchWidth) {
                // will cancel stretch
                trans.width = this._originalWidth;
              }
            } else if (this.isStretchHeight) {
              // will cancel stretch
              trans.height = this._originalHeight;
            }
            this._alignFlags &= ~flag;
          }
        }
        _recursiveDirty() {
          if (this._dirty) {
            return;
          }
          this._dirty = true;
        }
      }, _class3.AlignMode = AlignMode, _class3), (_applyDecoratedDescriptor(_class2.prototype, "target", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "target"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAlignTop", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "isAlignTop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAlignBottom", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "isAlignBottom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAlignLeft", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "isAlignLeft"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAlignRight", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "isAlignRight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAlignVerticalCenter", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "isAlignVerticalCenter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAlignHorizontalCenter", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "isAlignHorizontalCenter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isStretchWidth", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "isStretchWidth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isStretchHeight", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "isStretchHeight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "top", [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "top"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "editorTop", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "editorTop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bottom", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "bottom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "editorBottom", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "editorBottom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "left", [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "left"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "editorLeft", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "editorLeft"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "right", [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "right"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "editorRight", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "editorRight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "horizontalCenter", [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "horizontalCenter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "editorHorizontalCenter", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "editorHorizontalCenter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "verticalCenter", [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "verticalCenter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "editorVerticalCenter", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "editorVerticalCenter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAbsoluteTop", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "isAbsoluteTop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAbsoluteBottom", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "isAbsoluteBottom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAbsoluteLeft", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "isAbsoluteLeft"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAbsoluteRight", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "isAbsoluteRight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAbsoluteHorizontalCenter", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "isAbsoluteHorizontalCenter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAbsoluteVerticalCenter", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "isAbsoluteVerticalCenter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "alignMode", [_dec22, _dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "alignMode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "alignFlags", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "alignFlags"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_alignFlags", [serializable], function () {
        return 0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_target", [serializable], function () {
        return null;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_left", [serializable], function () {
        return 0;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_right", [serializable], function () {
        return 0;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_top", [serializable], function () {
        return 0;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_bottom", [serializable], function () {
        return 0;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_horizontalCenter", [serializable], function () {
        return 0;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_verticalCenter", [serializable], function () {
        return 0;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_isAbsLeft", [serializable], function () {
        return true;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_isAbsRight", [serializable], function () {
        return true;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "_isAbsTop", [serializable], function () {
        return true;
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "_isAbsBottom", [serializable], function () {
        return true;
      }), _initializer13 = _applyDecoratedInitializer(_class2.prototype, "_isAbsHorizontalCenter", [serializable], function () {
        return true;
      }), _initializer14 = _applyDecoratedInitializer(_class2.prototype, "_isAbsVerticalCenter", [serializable], function () {
        return true;
      }), _initializer15 = _applyDecoratedInitializer(_class2.prototype, "_originalWidth", [serializable], function () {
        return 0;
      }), _initializer16 = _applyDecoratedInitializer(_class2.prototype, "_originalHeight", [serializable], function () {
        return 0;
      }), _initializer17 = _applyDecoratedInitializer(_class2.prototype, "_alignMode", [serializable], function () {
        return AlignMode.ON_WINDOW_RESIZE;
      }), _initializer18 = _applyDecoratedInitializer(_class2.prototype, "_lockFlags", [serializable, editorOnly], function () {
        return 0;
      })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class));
      /**
       * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
       */
      // cc.Widget = module.exports = Widget;
      cclegacy.internal.computeInverseTransForTarget = computeInverseTransForTarget;
      cclegacy.internal.getReadonlyNodeSize = getReadonlyNodeSize;
      cclegacy.Widget = Widget;
    }
  };
});