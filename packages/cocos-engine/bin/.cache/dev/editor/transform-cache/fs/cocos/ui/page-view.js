System.register("q-bundled:///fs/cocos/ui/page-view.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../scene-graph/index.js", "../core/math/index.js", "../core/value-types/enum.js", "./layout.js", "./page-view-indicator.js", "./scroll-view.js", "./scroll-bar.js", "../core/platform/debug.js", "../core/data/utils/extends-enum.js", "../core/global-exports.js", "../scene-graph/node-event.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executionOrder, menu, tooltip, type, slide, range, visible, override, serializable, editable, EDITOR_NOT_IN_PREVIEW, ComponentEventHandler, Vec2, Vec3, ccenum, Layout, PageViewIndicator, ScrollView, ScrollEventType, ScrollBar, warnID, logID, extendsEnum, legacyCC, NodeEventType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _class3, _tempVec2, SizeMode, Direction, EventType, PageView;
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
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      slide = _coreDataDecoratorsIndexJs.slide;
      range = _coreDataDecoratorsIndexJs.range;
      visible = _coreDataDecoratorsIndexJs.visible;
      override = _coreDataDecoratorsIndexJs.override;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_sceneGraphIndexJs) {
      ComponentEventHandler = _sceneGraphIndexJs.EventHandler;
    }, function (_coreMathIndexJs) {
      Vec2 = _coreMathIndexJs.Vec2;
      Vec3 = _coreMathIndexJs.Vec3;
    }, function (_coreValueTypesEnumJs) {
      ccenum = _coreValueTypesEnumJs.ccenum;
    }, function (_layoutJs) {
      Layout = _layoutJs.Layout;
    }, function (_pageViewIndicatorJs) {
      PageViewIndicator = _pageViewIndicatorJs.PageViewIndicator;
    }, function (_scrollViewJs) {
      ScrollView = _scrollViewJs.ScrollView;
      ScrollEventType = _scrollViewJs.EventType;
    }, function (_scrollBarJs) {
      ScrollBar = _scrollBarJs.ScrollBar;
    }, function (_corePlatformDebugJs) {
      warnID = _corePlatformDebugJs.warnID;
      logID = _corePlatformDebugJs.logID;
    }, function (_coreDataUtilsExtendsEnumJs) {
      extendsEnum = _coreDataUtilsExtendsEnumJs.extendsEnum;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }],
    execute: function () {
      _tempVec2 = new Vec2();
      /**
       * @en Enum for Page View Size Mode.
       *
       * @zh 页面视图每个页面统一的大小类型。
       */
      (function (SizeMode) {
        SizeMode[SizeMode["Unified"] = 0] = "Unified";
        SizeMode[SizeMode["Free"] = 1] = "Free";
      })(SizeMode || (SizeMode = {}));
      ccenum(SizeMode);

      /**
       * @en Enum for Page View Direction.
       *
       * @zh 页面视图滚动类型。
       */
      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction || (Direction = {}));
      ccenum(Direction);

      /**
       * @en Enum for ScrollView event type.
       *
       * @zh 滚动视图事件类型。
       */
      (function (EventType) {
        EventType["PAGE_TURNING"] = "page-turning";
      })(EventType || (EventType = {}));
      /**
       * @en
       * The PageView control.
       *
       * @zh
       * 页面视图组件。
       */
      _export("PageView", PageView = (_dec = ccclass('cc.PageView'), _dec2 = help('i18n:cc.PageView'), _dec3 = executionOrder(110), _dec4 = menu('UI/PageView'), _dec5 = type(SizeMode), _dec6 = tooltip('i18n:pageview.sizeMode'), _dec7 = type(Direction), _dec8 = tooltip('i18n:pageview.direction'), _dec9 = range([0, 1, 0.01]), _dec10 = tooltip('i18n:pageview.scrollThreshold'), _dec11 = range([0, 1, 0.01]), _dec12 = tooltip('i18n:pageview.pageTurningEventTiming'), _dec13 = type(PageViewIndicator), _dec14 = tooltip('i18n:pageview.indicator'), _dec15 = tooltip('i18n:pageview.autoPageTurningThreshold'), _dec16 = type(ScrollBar), _dec17 = visible(false), _dec18 = type(ScrollBar), _dec19 = visible(false), _dec20 = visible(false), _dec21 = visible(false), _dec22 = visible(false), _dec23 = type([ComponentEventHandler]), _dec24 = visible(false), _dec25 = tooltip('i18n:pageview.pageTurningSpeed'), _dec26 = type([ComponentEventHandler]), _dec27 = tooltip('i18n:pageview.pageEvents'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = (_class3 = class PageView extends ScrollView {
        constructor(...args) {
          super(...args);
          /**
           * @en
           * Auto page turning velocity threshold. When users swipe the PageView quickly,
           * it will calculate a velocity based on the scroll distance and time,
           * if the calculated velocity is larger than the threshold, then it will trigger page turning.
           *
           * @zh
           * 快速滑动翻页临界值。
           * 当用户快速滑动时，会根据滑动开始和结束的距离与时间计算出一个速度值，
           * 该值与此临界值相比较，如果大于临界值，则进行自动翻页。
           */
          this.autoPageTurningThreshold = _initializer && _initializer();
          /**
           * @en
           * Enable horizontal scroll.
           * @zh
           * 是否开启水平滚动。
           */
          this.horizontal = _initializer2 && _initializer2();
          /**
           * @en
           * Enable vertical scroll.
           * @zh
           * 是否开启垂直滚动。
           */
          this.vertical = _initializer3 && _initializer3();
          /**
           * @en
           * If cancelInnerEvents is set to true, the scroll behavior will cancel touch events on inner content nodes
           * It's set to true by default.
           * @zh
           * 如果这个属性被设置为 true，那么滚动行为会取消子节点上注册的触摸事件，默认被设置为 true。<br/>
           * 注意，子节点上的 touchstart 事件仍然会触发，触点移动距离非常短的情况下 touchmove 和 touchend 也不会受影响。
           */
          this.cancelInnerEvents = _initializer4 && _initializer4();
          /**
           * @en
           * ScrollView events callback.
           * @zh
           * 滚动视图的事件回调函数。
           */
          this.scrollEvents = _initializer5 && _initializer5();
          /**
           * @en The time required to turn over a page, unit: second.
           * @zh 每个页面翻页时所需时间，单位：秒。
           */
          this.pageTurningSpeed = _initializer6 && _initializer6();
          /**
           * @en PageView events callback.
           * @zh 滚动视图的事件回调函数。
           */
          this.pageEvents = _initializer7 && _initializer7();
          this._sizeMode = _initializer8 && _initializer8();
          this._direction = _initializer9 && _initializer9();
          this._scrollThreshold = _initializer10 && _initializer10();
          this._pageTurningEventTiming = _initializer11 && _initializer11();
          this._indicator = _initializer12 && _initializer12();
          this._curPageIdx = 0;
          this._lastPageIdx = 0;
          this._pages = [];
          this._initContentPos = new Vec3();
          this._scrollCenterOffsetX = [];
          // 每一个页面居中时需要的偏移量（X）
          this._scrollCenterOffsetY = [];
          // 每一个页面居中时需要的偏移量（Y）
          this._touchBeganPosition = new Vec2();
          this._touchEndPosition = new Vec2();
        }
        /**
         * @en
         * Specify the size type of each page in PageView.
         *
         * @zh
         * 页面视图中每个页面大小类型。
         */
        get sizeMode() {
          return this._sizeMode;
        }
        set sizeMode(value) {
          if (this._sizeMode === value) {
            return;
          }
          this._sizeMode = value;
          this._syncSizeMode();
        }

        /**
         * @en
         * The page view direction.
         *
         * @zh
         * 页面视图滚动类型。
         */
        get direction() {
          return this._direction;
        }
        set direction(value) {
          if (this._direction === value) {
            return;
          }
          this._direction = value;
          this._syncScrollDirection();
        }

        /**
         * @en
         * The scroll threshold value, when drag exceeds this value,
         * release the next page will automatically scroll, less than the restore.
         *
         * @zh
         * 滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原。
         */
        get scrollThreshold() {
          return this._scrollThreshold;
        }
        set scrollThreshold(value) {
          if (this._scrollThreshold === value) {
            return;
          }
          this._scrollThreshold = value;
        }

        /**
         * @en
         * Change the PageTurning event timing of PageView.
         *
         * @zh
         * 设置 PageView PageTurning 事件的发送时机。
         */
        get pageTurningEventTiming() {
          return this._pageTurningEventTiming;
        }
        set pageTurningEventTiming(value) {
          if (this._pageTurningEventTiming === value) {
            return;
          }
          this._pageTurningEventTiming = value;
        }

        /**
         * @en
         * The Page View Indicator.
         *
         * @zh
         * 页面视图指示器组件。
         */
        get indicator() {
          return this._indicator;
        }
        set indicator(value) {
          if (this._indicator === value) {
            return;
          }
          this._indicator = value;
          if (this.indicator) {
            this.indicator.setPageView(this);
          }
        }
        get curPageIdx() {
          return this._curPageIdx;
        }

        /**
         * @en Enum for Page View Size Mode.
         * @zh 页面视图每个页面统一的大小类型。
         */

        /**
         * @en
         * The vertical scrollbar reference.
         * @zh
         * 垂直滚动的 ScrollBar。
         */
        get verticalScrollBar() {
          return super.verticalScrollBar;
        }
        set verticalScrollBar(value) {
          super.verticalScrollBar = value;
        }

        /**
         * @en
         * The horizontal scrollbar reference.
         * @zh
         * 水平滚动的 ScrollBar。
         */
        get horizontalScrollBar() {
          return super.horizontalScrollBar;
        }
        set horizontalScrollBar(value) {
          super.horizontalScrollBar = value;
        }
        onEnable() {
          super.onEnable();
          this.node.on(NodeEventType.SIZE_CHANGED, this._updateAllPagesSize, this);
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.node.on(PageView.EventType.SCROLL_ENG_WITH_THRESHOLD, this._dispatchPageTurningEvent, this);
          }
        }
        onDisable() {
          super.onDisable();
          this.node.off(NodeEventType.SIZE_CHANGED, this._updateAllPagesSize, this);
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.node.off(PageView.EventType.SCROLL_ENG_WITH_THRESHOLD, this._dispatchPageTurningEvent, this);
          }
        }
        onLoad() {
          this._initPages();
          if (this.indicator) {
            this.indicator.setPageView(this);
          }
        }

        /**
         * @en
         * Returns current page index.
         *
         * @zh
         * 返回当前页面索引。
         *
         * @returns @en Current page index of this page view. @zh 当前页面索引。
         */
        getCurrentPageIndex() {
          return this._curPageIdx;
        }

        /**
         * @en
         * Set current page index.
         *
         * @zh
         * 设置当前页面索引。
         * @param index @en The page index to scroll to. @zh 需要滚动到的页面索引。
         */
        setCurrentPageIndex(index) {
          this.scrollToPage(index, 1);
        }

        /**
         * @en
         * Returns all pages of pageview.
         *
         * @zh
         * 返回视图中的所有页面。
         *
         * @returns @en return all pages of this page view. @zh 返回当前视图所有页面。
         */
        getPages() {
          return this._pages;
        }

        /**
         * @en
         * At the end of the current page view to insert a new view.
         *
         * @zh
         * 在当前页面视图的尾部插入一个新视图。
         *
         * @param page @en New page to add to this page view. @zh 新加入的视图。
         */
        addPage(page) {
          if (!page || this._pages.indexOf(page) !== -1 || !this.content) {
            return;
          }
          if (!page._uiProps.uiTransformComp) {
            logID(4301);
            return;
          }
          this.content.addChild(page);
          this._pages.push(page);
          this._updatePageView();
        }

        /**
         * @en
         * Inserts a page in the specified location.
         *
         * @zh
         * 将页面插入指定位置中。
         *
         * @param page @en New page to insert to this page view. @zh 新插入的视图。
         * @param index @en The index of new page to be inserted. @zh 新插入视图的索引。
         */
        insertPage(page, index) {
          if (index < 0 || !page || this._pages.indexOf(page) !== -1 || !this.content) {
            return;
          }
          const pageCount = this._pages.length;
          if (index >= pageCount) {
            this.addPage(page);
          } else {
            if (!page._uiProps.uiTransformComp) {
              logID(4301);
              return;
            }
            this._pages.splice(index, 0, page);
            this.content.insertChild(page, index);
            this._updatePageView();
          }
        }

        /**
         * @en
         * Removes a page from PageView.
         *
         * @zh
         * 移除指定页面。
         *
         * @param page @en The page to be removed. @zh 将被移除的页面。
         */
        removePage(page) {
          if (!page || !this.content) {
            return;
          }
          const index = this._pages.indexOf(page);
          if (index === -1) {
            warnID(4300, page.name);
            return;
          }
          this.removePageAtIndex(index);
        }

        /**
         * @en
         * Removes a page at index of PageView.
         *
         * @zh
         * 移除指定下标的页面。
         *
         * @param index @en The index of the page to be removed. @zh 将被移除界面的页面下标。
         */
        removePageAtIndex(index) {
          const pageList = this._pages;
          if (index < 0 || index >= pageList.length) {
            return;
          }
          const page = pageList[index];
          if (!page || !this.content) {
            return;
          }
          this.content.removeChild(page);
          pageList.splice(index, 1);
          this._updatePageView();
        }

        /**
         * @en
         * Removes all pages from PageView.
         *
         * @zh
         * 移除所有页面。
         */
        removeAllPages() {
          if (!this.content) {
            return;
          }
          const locPages = this._pages;
          for (let i = 0, len = locPages.length; i < len; i++) {
            this.content.removeChild(locPages[i]);
          }
          this._pages.length = 0;
          this._updatePageView();
        }

        /**
         * @en
         * Scroll PageView to index.
         *
         * @zh
         * 滚动到指定页面
         *
         * @param idx @en The index of page to be scroll to. @zh 希望滚动到的页面下标。
         * @param timeInSecond @en How long time to scroll to the page, in seconds. @zh 滚动到指定页面所需时间，单位：秒。
         */
        scrollToPage(idx, timeInSecond = 0.3) {
          if (idx < 0 || idx >= this._pages.length) {
            return;
          }
          this._curPageIdx = idx;
          this.scrollToOffset(this._moveOffsetValue(idx), timeInSecond, true);
          if (this.indicator) {
            this.indicator._changedState();
          }
        }

        // override the method of ScrollView
        getScrollEndedEventTiming() {
          return this.pageTurningEventTiming;
        }

        // 刷新页面视图
        _updatePageView() {
          // 当页面数组变化时修改 content 大小
          if (!this.content) {
            return;
          }
          const layout = this.content.getComponent(Layout);
          if (layout && layout.enabled) {
            layout.updateLayout();
          }
          const pageCount = this._pages.length;
          if (this._curPageIdx >= pageCount) {
            this._curPageIdx = pageCount === 0 ? 0 : pageCount - 1;
            this._lastPageIdx = this._curPageIdx;
          }
          // 进行排序
          const contentPos = this._initContentPos;
          for (let i = 0; i < pageCount; ++i) {
            const page = this._pages[i];
            // page.setSiblingIndex(i);
            const pos = page.position;
            if (this.direction === Direction.Horizontal) {
              this._scrollCenterOffsetX[i] = Math.abs(contentPos.x + pos.x);
            } else {
              this._scrollCenterOffsetY[i] = Math.abs(contentPos.y + pos.y);
            }
          }

          // 刷新 indicator 信息与状态
          if (this.indicator) {
            this.indicator._refresh();
          }
        }

        // 刷新所有页面的大小
        _updateAllPagesSize() {
          const viewTrans = this.view;
          if (!this.content || !viewTrans) {
            return;
          }
          if (this._sizeMode !== SizeMode.Unified) {
            return;
          }
          const locPages = EDITOR_NOT_IN_PREVIEW ? this.content.children : this._pages;
          const selfSize = viewTrans.contentSize;
          for (let i = 0, len = locPages.length; i < len; i++) {
            locPages[i]._uiProps.uiTransformComp.setContentSize(selfSize);
          }
        }
        _handleReleaseLogic() {
          this._autoScrollToPage();
          if (this._scrolling) {
            this._scrolling = false;
            if (!this._autoScrolling) {
              this._dispatchEvent(PageView.EventType.SCROLL_ENDED);
            }
          }
        }
        _onTouchBegan(event, captureListeners) {
          event.touch.getUILocation(_tempVec2);
          Vec2.set(this._touchBeganPosition, _tempVec2.x, _tempVec2.y);
          super._onTouchBegan(event, captureListeners);
        }
        _onTouchMoved(event, captureListeners) {
          super._onTouchMoved(event, captureListeners);
        }
        _onTouchEnded(event, captureListeners) {
          event.touch.getUILocation(_tempVec2);
          Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y);
          super._onTouchEnded(event, captureListeners);
        }
        _onTouchCancelled(event, captureListeners) {
          event.touch.getUILocation(_tempVec2);
          Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y);
          super._onTouchCancelled(event, captureListeners);
        }
        _onMouseWheel() {}
        _syncScrollDirection() {
          this.horizontal = this.direction === Direction.Horizontal;
          this.vertical = this.direction === Direction.Vertical;
        }
        _syncSizeMode() {
          const viewTrans = this.view;
          if (!this.content || !viewTrans) {
            return;
          }
          const layout = this.content.getComponent(Layout);
          if (layout) {
            if (this._sizeMode === SizeMode.Free && this._pages.length > 0) {
              const firstPageTrans = this._pages[0]._uiProps.uiTransformComp;
              const lastPageTrans = this._pages[this._pages.length - 1]._uiProps.uiTransformComp;
              if (this.direction === Direction.Horizontal) {
                layout.paddingLeft = (viewTrans.width - firstPageTrans.width) / 2;
                layout.paddingRight = (viewTrans.width - lastPageTrans.width) / 2;
              } else if (this.direction === Direction.Vertical) {
                layout.paddingTop = (viewTrans.height - firstPageTrans.height) / 2;
                layout.paddingBottom = (viewTrans.height - lastPageTrans.height) / 2;
              }
            }
            layout.updateLayout();
          }
        }

        // 初始化页面
        _initPages() {
          if (!this.content) {
            return;
          }
          this._initContentPos = this.content.position;
          const children = this.content.children;
          for (let i = 0; i < children.length; ++i) {
            const page = children[i];
            if (this._pages.indexOf(page) >= 0) {
              continue;
            }
            this._pages.push(page);
          }
          this._syncScrollDirection();
          this._syncSizeMode();
          this._updatePageView();
        }
        _dispatchPageTurningEvent() {
          if (this._lastPageIdx === this._curPageIdx) {
            return;
          }
          this._lastPageIdx = this._curPageIdx;
          ComponentEventHandler.emitEvents(this.pageEvents, this, EventType.PAGE_TURNING);
          this.node.emit(EventType.PAGE_TURNING, this);
        }

        // 快速滑动
        _isQuicklyScrollable(touchMoveVelocity) {
          if (this.direction === Direction.Horizontal) {
            if (Math.abs(touchMoveVelocity.x) > this.autoPageTurningThreshold) {
              return true;
            }
          } else if (this.direction === Direction.Vertical) {
            if (Math.abs(touchMoveVelocity.y) > this.autoPageTurningThreshold) {
              return true;
            }
          }
          return false;
        }

        // 通过 idx 获取偏移值数值
        _moveOffsetValue(idx) {
          const offset = new Vec2();
          if (this._sizeMode === SizeMode.Free) {
            if (this.direction === Direction.Horizontal) {
              offset.x = this._scrollCenterOffsetX[idx];
            } else if (this.direction === Direction.Vertical) {
              offset.y = this._scrollCenterOffsetY[idx];
            }
          } else {
            const viewTrans = this.view;
            if (!viewTrans) {
              return offset;
            }
            if (this.direction === Direction.Horizontal) {
              offset.x = idx * viewTrans.width;
            } else if (this.direction === Direction.Vertical) {
              offset.y = idx * viewTrans.height;
            }
          }
          return offset;
        }
        _getDragDirection(moveOffset) {
          if (this._direction === Direction.Horizontal) {
            if (moveOffset.x === 0) {
              return 0;
            }
            return moveOffset.x > 0 ? 1 : -1;
          } else {
            // 由于滚动 Y 轴的原点在在右上角所以应该是小于 0
            if (moveOffset.y === 0) {
              return 0;
            }
            return moveOffset.y < 0 ? 1 : -1;
          }
        }

        // 是否超过自动滚动临界值
        _isScrollable(offset, index, nextIndex) {
          if (this._sizeMode === SizeMode.Free) {
            let curPageCenter = 0;
            let nextPageCenter = 0;
            if (this.direction === Direction.Horizontal) {
              curPageCenter = this._scrollCenterOffsetX[index];
              nextPageCenter = this._scrollCenterOffsetX[nextIndex];
              return Math.abs(offset.x) >= Math.abs(curPageCenter - nextPageCenter) * this.scrollThreshold;
            } else if (this.direction === Direction.Vertical) {
              curPageCenter = this._scrollCenterOffsetY[index];
              nextPageCenter = this._scrollCenterOffsetY[nextIndex];
              return Math.abs(offset.y) >= Math.abs(curPageCenter - nextPageCenter) * this.scrollThreshold;
            }
          } else {
            const viewTrans = this.view;
            if (!viewTrans) {
              return false;
            }
            if (this.direction === Direction.Horizontal) {
              return Math.abs(offset.x) >= viewTrans.width * this.scrollThreshold;
            } else if (this.direction === Direction.Vertical) {
              return Math.abs(offset.y) >= viewTrans.height * this.scrollThreshold;
            }
          }
          return false;
        }
        _autoScrollToPage() {
          const bounceBackStarted = this._startBounceBackIfNeeded();
          if (bounceBackStarted) {
            const bounceBackAmount = this._getHowMuchOutOfBoundary();
            this._clampDelta(bounceBackAmount);
            if (bounceBackAmount.x > 0 || bounceBackAmount.y < 0) {
              this._curPageIdx = this._pages.length === 0 ? 0 : this._pages.length - 1;
            }
            if (bounceBackAmount.x < 0 || bounceBackAmount.y > 0) {
              this._curPageIdx = 0;
            }
            if (this.indicator) {
              this.indicator._changedState();
            }
          } else {
            const moveOffset = new Vec2();
            Vec2.subtract(moveOffset, this._touchBeganPosition, this._touchEndPosition);
            const index = this._curPageIdx;
            const nextIndex = index + this._getDragDirection(moveOffset);
            const timeInSecond = this.pageTurningSpeed * Math.abs(index - nextIndex);
            if (nextIndex < this._pages.length) {
              if (this._isScrollable(moveOffset, index, nextIndex)) {
                this.scrollToPage(nextIndex, timeInSecond);
                return;
              } else {
                const touchMoveVelocity = this._calculateTouchMoveVelocity();
                if (this._isQuicklyScrollable(touchMoveVelocity)) {
                  this.scrollToPage(nextIndex, timeInSecond);
                  return;
                }
              }
            }
            this.scrollToPage(index, timeInSecond);
          }
        }
      }, _class3.SizeMode = SizeMode, _class3.Direction = Direction, _class3.EventType = extendsEnum(EventType, ScrollEventType), _class3), (_applyDecoratedDescriptor(_class2.prototype, "sizeMode", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "sizeMode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "direction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "scrollThreshold", [slide, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "scrollThreshold"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "pageTurningEventTiming", [slide, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "pageTurningEventTiming"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "indicator", [_dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "indicator"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "autoPageTurningThreshold", [serializable, _dec15], function () {
        return 100;
      }), _applyDecoratedDescriptor(_class2.prototype, "verticalScrollBar", [_dec16, override, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "verticalScrollBar"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "horizontalScrollBar", [_dec18, override, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "horizontalScrollBar"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "horizontal", [override, serializable, _dec20], function () {
        return true;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "vertical", [override, serializable, _dec21], function () {
        return true;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "cancelInnerEvents", [override, serializable, _dec22], function () {
        return true;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "scrollEvents", [_dec23, serializable, override, _dec24], function () {
        return [];
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "pageTurningSpeed", [serializable, editable, _dec25], function () {
        return 0.3;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "pageEvents", [_dec26, serializable, _dec27], function () {
        return [];
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_sizeMode", [serializable], function () {
        return SizeMode.Unified;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_direction", [serializable], function () {
        return Direction.Horizontal;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_scrollThreshold", [serializable], function () {
        return 0.5;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "_pageTurningEventTiming", [serializable], function () {
        return 0.1;
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "_indicator", [serializable], function () {
        return null;
      })), _class2)) || _class) || _class) || _class) || _class));
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event page-turning
       * @param event
       * @param pageView - The PageView component.
       */
      legacyCC.PageView = PageView;
    }
  };
});