System.register("q-bundled:///fs/cocos/ui/scroll-bar.js", ["../core/data/decorators/index.js", "../scene-graph/component.js", "../2d/framework/index.js", "../core/math/index.js", "../core/value-types/enum.js", "../core/math/utils.js", "../2d/components/sprite.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executionOrder, menu, requireComponent, tooltip, displayOrder, type, serializable, Component, UITransform, Color, Vec2, Vec3, ccenum, clamp01, Sprite, legacyCC, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _class3, GETTING_SHORTER_FACTOR, _tempPos_1, _tempPos_2, _tempVec3, defaultAnchor, _tempColor, _tempVec2, Direction, ScrollBar;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_dFrameworkIndexJs) {
      UITransform = _dFrameworkIndexJs.UITransform;
    }, function (_coreMathIndexJs) {
      Color = _coreMathIndexJs.Color;
      Vec2 = _coreMathIndexJs.Vec2;
      Vec3 = _coreMathIndexJs.Vec3;
    }, function (_coreValueTypesEnumJs) {
      ccenum = _coreValueTypesEnumJs.ccenum;
    }, function (_coreMathUtilsJs) {
      clamp01 = _coreMathUtilsJs.clamp01;
    }, function (_dComponentsSpriteJs) {
      Sprite = _dComponentsSpriteJs.Sprite;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }],
    execute: function () {
      GETTING_SHORTER_FACTOR = 20;
      _tempPos_1 = new Vec3();
      _tempPos_2 = new Vec3();
      _tempVec3 = new Vec3();
      defaultAnchor = new Vec2();
      _tempColor = new Color();
      _tempVec2 = new Vec2();
      /**
       * @en
       * Enum for ScrollBar direction.
       *
       * @zh
       * 滚动条方向。
       */
      (function (Direction) {
        Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
        Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
      })(Direction || (Direction = {}));
      ccenum(Direction);

      /**
       * @en
       * The ScrollBar control allows the user to scroll an image or other view that is too large to see completely.
       *
       * @zh
       * 滚动条组件。
       */
      _export("ScrollBar", ScrollBar = (_dec = ccclass('cc.ScrollBar'), _dec2 = help('i18n:cc.ScrollBar'), _dec3 = executionOrder(110), _dec4 = menu('UI/ScrollBar'), _dec5 = requireComponent(UITransform), _dec6 = type(Sprite), _dec7 = displayOrder(0), _dec8 = tooltip('i18n:scrollbar.handle'), _dec9 = type(Direction), _dec10 = displayOrder(1), _dec11 = tooltip('i18n:scrollbar.direction'), _dec12 = displayOrder(2), _dec13 = tooltip('i18n:scrollbar.auto_hide'), _dec14 = displayOrder(3), _dec15 = tooltip('i18n:scrollbar.auto_hide_time'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScrollBar, _Component);
        function ScrollBar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._scrollView = _initializer && _initializer();
          _this._handle = _initializer2 && _initializer2();
          _this._direction = _initializer3 && _initializer3();
          _this._enableAutoHide = _initializer4 && _initializer4();
          _this._autoHideTime = _initializer5 && _initializer5();
          _this._touching = false;
          _this._opacity = 255;
          _this._autoHideRemainingTime = 0;
          return _this;
        }
        var _proto = ScrollBar.prototype;
        /**
         * @en
         * Hide ScrollBar.
         *
         * @zh
         * 滚动条隐藏。
         */
        _proto.hide = function hide() {
          this._autoHideRemainingTime = 0;
          this._setOpacity(0);
        }

        /**
         * @en
         * Show ScrollBar.
         *
         * @zh
         * 滚动条显示。
         */;
        _proto.show = function show() {
          this._autoHideRemainingTime = this._autoHideTime;
          // because scrollbar's onEnable is later than scrollView, its _opacity is be modified in onEnable. we should reset it.
          this._opacity = 255;
          this._setOpacity(this._opacity);
        }

        /**
         * @en
         * Reset the position of ScrollBar.
         *
         * @zh
         * 重置滚动条位置。
         *
         * @param outOfBoundary @en Rolling displacement. @zh 滚动位移。
         */;
        _proto.onScroll = function onScroll(outOfBoundary) {
          if (!this._scrollView) {
            return;
          }
          var content = this._scrollView.content;
          if (!content) {
            return;
          }
          var contentSize = content._uiProps.uiTransformComp.contentSize;
          var scrollViewSize = this._scrollView.node._uiProps.uiTransformComp.contentSize;
          var barSize = this.node._uiProps.uiTransformComp.contentSize;
          if (this._conditionalDisableScrollBar(contentSize, scrollViewSize)) {
            return;
          }
          if (this._enableAutoHide) {
            this._autoHideRemainingTime = this._autoHideTime;
            this._setOpacity(this._opacity);
          }
          var contentMeasure = 0;
          var scrollViewMeasure = 0;
          var outOfBoundaryValue = 0;
          var contentPosition = 0;
          var handleNodeMeasure = 0;
          var outOfContentPosition = _tempVec2;
          outOfContentPosition.set(0, 0);
          if (this._direction === Direction.HORIZONTAL) {
            contentMeasure = contentSize.width;
            scrollViewMeasure = scrollViewSize.width;
            handleNodeMeasure = barSize.width;
            outOfBoundaryValue = outOfBoundary.x;
            this._convertToScrollViewSpace(outOfContentPosition, content);
            contentPosition = -outOfContentPosition.x;
          } else if (this._direction === Direction.VERTICAL) {
            contentMeasure = contentSize.height;
            scrollViewMeasure = scrollViewSize.height;
            handleNodeMeasure = barSize.height;
            outOfBoundaryValue = outOfBoundary.y;
            this._convertToScrollViewSpace(outOfContentPosition, content);
            contentPosition = -outOfContentPosition.y;
          }
          var length = this._calculateLength(contentMeasure, scrollViewMeasure, handleNodeMeasure, outOfBoundaryValue);
          var position = _tempVec2;
          this._calculatePosition(position, contentMeasure, scrollViewMeasure, handleNodeMeasure, contentPosition, outOfBoundaryValue, length);
          this._updateLength(length);
          this._updateHandlerPosition(position);
        }

        /**
         * @en
         * Sets the scroll view.
         *
         * @zh
         * 滚动视窗设置。
         *
         * @param scrollView @en The scroll view which is attached with this scroll bar. @zh 当前滚动条附着的滚动视窗。
         */;
        _proto.setScrollView = function setScrollView(scrollView) {
          this._scrollView = scrollView;
        };
        _proto.onTouchBegan = function onTouchBegan() {
          if (!this._enableAutoHide) {
            return;
          }
          this._touching = true;
        };
        _proto.onTouchEnded = function onTouchEnded() {
          if (!this._enableAutoHide) {
            return;
          }
          this._touching = false;
          if (this._autoHideTime <= 0) {
            return;
          }
          if (this._scrollView) {
            var content = this._scrollView.content;
            if (content) {
              var contentSize = content._uiProps.uiTransformComp.contentSize;
              var scrollViewSize = this._scrollView.node._uiProps.uiTransformComp.contentSize;
              if (this._conditionalDisableScrollBar(contentSize, scrollViewSize)) {
                return;
              }
            }
          }
          this._autoHideRemainingTime = this._autoHideTime;
        };
        _proto.onEnable = function onEnable() {
          var renderComp = this.node.getComponent(Sprite);
          if (renderComp) {
            this._opacity = renderComp.color.a;
          }
        };
        _proto.start = function start() {
          if (this._enableAutoHide) {
            this._setOpacity(0);
          }
        };
        _proto.update = function update(dt) {
          this._processAutoHide(dt);
        };
        _proto._convertToScrollViewSpace = function _convertToScrollViewSpace(out, content) {
          var scrollTrans = this._scrollView && this._scrollView.node._uiProps.uiTransformComp;
          var contentTrans = content._uiProps.uiTransformComp;
          if (!scrollTrans || !contentTrans) {
            out.set(Vec2.ZERO);
          } else {
            _tempPos_1.set(-contentTrans.anchorX * contentTrans.width, -contentTrans.anchorY * contentTrans.height, 0);
            contentTrans.convertToWorldSpaceAR(_tempPos_1, _tempPos_2);
            var scrollViewSpacePos = scrollTrans.convertToNodeSpaceAR(_tempPos_2);
            scrollViewSpacePos.x += scrollTrans.anchorX * scrollTrans.width;
            scrollViewSpacePos.y += scrollTrans.anchorY * scrollTrans.height;
            out.set(scrollViewSpacePos.x, scrollViewSpacePos.y);
          }
        };
        _proto._setOpacity = function _setOpacity(opacity) {
          if (this._handle) {
            var renderComp = this.node.getComponent(Sprite);
            if (renderComp) {
              _tempColor.set(renderComp.color);
              _tempColor.a = opacity;
              renderComp.color = _tempColor;
            }
            renderComp = this._handle.getComponent(Sprite);
            if (renderComp) {
              _tempColor.set(renderComp.color);
              _tempColor.a = opacity;
              renderComp.color = _tempColor;
            }
          }
        };
        _proto._updateHandlerPosition = function _updateHandlerPosition(position) {
          if (this._handle) {
            var oldPosition = _tempVec3;
            this._fixupHandlerPosition(oldPosition);
            this._handle.node.setPosition(position.x + oldPosition.x, position.y + oldPosition.y, oldPosition.z);
          }
        };
        _proto._fixupHandlerPosition = function _fixupHandlerPosition(out) {
          var uiTrans = this.node._uiProps.uiTransformComp;
          var barSize = uiTrans.contentSize;
          var barAnchor = uiTrans.anchorPoint;
          var handleSize = this.handle.node._uiProps.uiTransformComp.contentSize;
          var handleParent = this.handle.node.parent;
          Vec3.set(_tempPos_1, -barSize.width * barAnchor.x, -barSize.height * barAnchor.y, 0);
          var leftBottomWorldPosition = this.node._uiProps.uiTransformComp.convertToWorldSpaceAR(_tempPos_1, _tempPos_2);
          var fixupPosition = out;
          fixupPosition.set(0, 0, 0);
          handleParent._uiProps.uiTransformComp.convertToNodeSpaceAR(leftBottomWorldPosition, fixupPosition);
          if (this.direction === Direction.HORIZONTAL) {
            fixupPosition.set(fixupPosition.x, fixupPosition.y + (barSize.height - handleSize.height) / 2, fixupPosition.z);
          } else if (this.direction === Direction.VERTICAL) {
            fixupPosition.set(fixupPosition.x + (barSize.width - handleSize.width) / 2, fixupPosition.y, fixupPosition.z);
          }
          this.handle.node.setPosition(fixupPosition);
        };
        _proto._conditionalDisableScrollBar = function _conditionalDisableScrollBar(contentSize, scrollViewSize) {
          if (contentSize.width <= scrollViewSize.width && this._direction === Direction.HORIZONTAL) {
            return true;
          }
          if (contentSize.height <= scrollViewSize.height && this._direction === Direction.VERTICAL) {
            return true;
          }
          return false;
        };
        _proto._calculateLength = function _calculateLength(contentMeasure, scrollViewMeasure, handleNodeMeasure, outOfBoundary) {
          var denominatorValue = contentMeasure;
          if (outOfBoundary) {
            denominatorValue += (outOfBoundary > 0 ? outOfBoundary : -outOfBoundary) * GETTING_SHORTER_FACTOR;
          }
          var lengthRation = scrollViewMeasure / denominatorValue;
          return handleNodeMeasure * lengthRation;
        };
        _proto._calculatePosition = function _calculatePosition(out, contentMeasure, scrollViewMeasure, handleNodeMeasure, contentPosition, outOfBoundary, actualLenth) {
          var denominatorValue = contentMeasure - scrollViewMeasure;
          if (outOfBoundary) {
            denominatorValue += Math.abs(outOfBoundary);
          }
          var positionRatio = 0;
          if (denominatorValue) {
            positionRatio = contentPosition / denominatorValue;
            positionRatio = clamp01(positionRatio);
          }
          var position = (handleNodeMeasure - actualLenth) * positionRatio;
          if (this._direction === Direction.VERTICAL) {
            out.set(0, position);
          } else {
            out.set(position, 0);
          }
        };
        _proto._updateLength = function _updateLength(length) {
          if (this._handle) {
            var handleNode = this._handle.node;
            var handleTrans = handleNode._uiProps.uiTransformComp;
            var handleNodeSize = handleTrans.contentSize;
            var anchor = handleTrans.anchorPoint;
            if (anchor.x !== defaultAnchor.x || anchor.y !== defaultAnchor.y) {
              handleTrans.setAnchorPoint(defaultAnchor);
            }
            if (this._direction === Direction.HORIZONTAL) {
              handleTrans.setContentSize(length, handleNodeSize.height);
            } else {
              handleTrans.setContentSize(handleNodeSize.width, length);
            }
          }
        };
        _proto._processAutoHide = function _processAutoHide(deltaTime) {
          if (!this._enableAutoHide || this._autoHideRemainingTime <= 0) {
            return;
          } else if (this._touching) {
            return;
          }
          this._autoHideRemainingTime -= deltaTime;
          if (this._autoHideRemainingTime <= this._autoHideTime) {
            this._autoHideRemainingTime = Math.max(0, this._autoHideRemainingTime);
            var opacity = this._opacity * (this._autoHideRemainingTime / this._autoHideTime);
            this._setOpacity(opacity);
          }
        };
        _createClass(ScrollBar, [{
          key: "handle",
          get:
          /**
           * @en
           * The "handle" part of the ScrollBar.
           *
           * @zh
           * 作为当前滚动区域位置显示的滑块 Sprite。
           */
          function get() {
            return this._handle;
          },
          set: function set(value) {
            if (this._handle === value) {
              return;
            }
            this._handle = value;
            this.onScroll(Vec2.ZERO);
          }

          /**
           * @en
           * The direction of scrolling.
           *
           * @zh
           * ScrollBar 的滚动方向。
           */
        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(value) {
            if (this._direction === value) {
              return;
            }
            this._direction = value;
            this.onScroll(Vec2.ZERO);
          }

          /**
           * @en
           * Whether enable auto hide or not.
           *
           * @zh
           * 是否在没有滚动动作时自动隐藏 ScrollBar。
           */
        }, {
          key: "enableAutoHide",
          get: function get() {
            return this._enableAutoHide;
          },
          set: function set(value) {
            if (this._enableAutoHide === value) {
              return;
            }
            this._enableAutoHide = value;
            if (this._enableAutoHide) {
              this._setOpacity(0);
            }
          }

          /**
           * @en
           * The time to hide ScrollBar when scroll finished.
           * Note: This value is only useful when enableAutoHide is true.
           *
           * @zh
           * 没有滚动动作后经过多久会自动隐藏。<br/>
           * 注意：只要当 “enableAutoHide” 为 true 时，才有效。
           */
        }, {
          key: "autoHideTime",
          get: function get() {
            return this._autoHideTime;
          },
          set: function set(value) {
            if (this._autoHideTime === value) {
              return;
            }
            this._autoHideTime = value;
          }
        }]);
        return ScrollBar;
      }(Component), _class3.Direction = Direction, _class3), (_applyDecoratedDescriptor(_class2.prototype, "handle", [_dec6, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "handle"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "direction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableAutoHide", [_dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "enableAutoHide"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "autoHideTime", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "autoHideTime"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_scrollView", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_handle", [serializable], function () {
        return null;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_direction", [serializable], function () {
        return Direction.HORIZONTAL;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_enableAutoHide", [serializable], function () {
        return false;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_autoHideTime", [serializable], function () {
        return 1.0;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
      legacyCC.ScrollBar = ScrollBar;
    }
  };
});