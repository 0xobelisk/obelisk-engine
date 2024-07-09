System.register("q-bundled:///fs/cocos/ui/progress-bar.js", ["../core/data/decorators/index.js", "../scene-graph/component.js", "../2d/framework/index.js", "../core/math/index.js", "../core/value-types/index.js", "../core/math/utils.js", "../2d/components/sprite.js", "../core/platform/debug.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executionOrder, menu, requireComponent, tooltip, type, range, slide, serializable, Component, UITransform, Size, Vec2, Vec3, Enum, clamp01, Sprite, warn, legacyCC, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _class3, Mode, ProgressBar;
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
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      range = _coreDataDecoratorsIndexJs.range;
      slide = _coreDataDecoratorsIndexJs.slide;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_dFrameworkIndexJs) {
      UITransform = _dFrameworkIndexJs.UITransform;
    }, function (_coreMathIndexJs) {
      Size = _coreMathIndexJs.Size;
      Vec2 = _coreMathIndexJs.Vec2;
      Vec3 = _coreMathIndexJs.Vec3;
    }, function (_coreValueTypesIndexJs) {
      Enum = _coreValueTypesIndexJs.Enum;
    }, function (_coreMathUtilsJs) {
      clamp01 = _coreMathUtilsJs.clamp01;
    }, function (_dComponentsSpriteJs) {
      Sprite = _dComponentsSpriteJs.Sprite;
    }, function (_corePlatformDebugJs) {
      warn = _corePlatformDebugJs.warn;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }],
    execute: function () {
      (function (Mode) {
        Mode[Mode["HORIZONTAL"] = 0] = "HORIZONTAL";
        Mode[Mode["VERTICAL"] = 1] = "VERTICAL";
        Mode[Mode["FILLED"] = 2] = "FILLED";
      })(Mode || (Mode = {}));
      Enum(Mode);

      /**
       * @en
       * Visual indicator of progress in some operation.
       * Displays a bar to the user representing how far the operation has progressed.
       *
       * @zh
       * 进度条组件，可用于显示加载资源时的进度。
       *
       * @example
       * ```ts
       * // update progressBar
       * update(dt) {
       *     var progress = progressBar.progress;
       *     if (progress > 0) {
       *         progress += dt;
       *     }
       *     else {
       *         progress = 1;
       *     }
       *     progressBar.progress = progress;
       * }
       * ```
       */
      _export("ProgressBar", ProgressBar = (_dec = ccclass('cc.ProgressBar'), _dec2 = help('i18n:cc.ProgressBar'), _dec3 = executionOrder(110), _dec4 = menu('UI/ProgressBar'), _dec5 = requireComponent(UITransform), _dec6 = type(Sprite), _dec7 = tooltip('i18n:progress.bar_sprite'), _dec8 = type(Mode), _dec9 = tooltip('i18n:progress.mode'), _dec10 = tooltip('i18n:progress.total_length'), _dec11 = range([0, 1, 0.1]), _dec12 = tooltip('i18n:progress.progress'), _dec13 = tooltip('i18n:progress.reverse'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = (_class3 = class ProgressBar extends Component {
        constructor(...args) {
          super(...args);
          this._barSprite = _initializer && _initializer();
          this._mode = _initializer2 && _initializer2();
          this._totalLength = _initializer3 && _initializer3();
          this._progress = _initializer4 && _initializer4();
          this._reverse = _initializer5 && _initializer5();
        }
        /**
         * @en
         * The targeted Sprite which will be changed progressively.
         *
         * @zh
         * 用来显示进度条比例的 Sprite 对象。
         */
        get barSprite() {
          return this._barSprite;
        }
        set barSprite(value) {
          if (this._barSprite === value) {
            return;
          }
          this._barSprite = value;
          this._initBarSprite();
        }

        /**
         * @en
         * The progress mode, there are two modes supported now: horizontal and vertical.
         *
         * @zh
         * 进度条的模式。
         */
        get mode() {
          return this._mode;
        }
        set mode(value) {
          if (this._mode === value) {
            return;
          }
          this._mode = value;
          if (this._barSprite) {
            const entity = this._barSprite.node;
            if (!entity) {
              return;
            }
            const entitySize = entity._uiProps.uiTransformComp.contentSize;
            if (this._mode === Mode.HORIZONTAL) {
              this.totalLength = entitySize.width;
            } else if (this._mode === Mode.VERTICAL) {
              this.totalLength = entitySize.height;
            } else if (this._mode === Mode.FILLED) {
              this.totalLength = this._barSprite.fillRange;
            }
          }
        }

        /**
         * @en
         * The total width or height of the bar sprite.
         *
         * @zh
         * 进度条实际的总长度。
         */
        get totalLength() {
          return this._totalLength;
        }
        set totalLength(value) {
          if (this._mode === Mode.FILLED) {
            value = clamp01(value);
          }
          if (this._totalLength === value) {
            return;
          }
          this._totalLength = value;
          this._updateBarStatus();
        }

        /**
         * @en
         * The current progress of the bar sprite. The valid value is between 0-1.
         *
         * @zh
         * 当前进度值，该数值的区间是 0-1 之间。
         */
        get progress() {
          return this._progress;
        }
        set progress(value) {
          if (this._progress === value) {
            return;
          }
          this._progress = value;
          this._updateBarStatus();
        }

        /**
         * @en
         * Whether reverse the progress direction of the bar sprite.
         *
         * @zh
         * 进度条是否进行反方向变化。
         */
        get reverse() {
          return this._reverse;
        }
        set reverse(value) {
          if (this._reverse === value) {
            return;
          }
          this._reverse = value;
          if (this._barSprite) {
            this._barSprite.fillStart = 1 - this._barSprite.fillStart;
          }
          this._updateBarStatus();
        }
        onLoad() {
          this._updateBarStatus();
        }
        _initBarSprite() {
          if (this._barSprite) {
            const entity = this._barSprite.node;
            if (!entity) {
              return;
            }
            const trans = this.node._uiProps.uiTransformComp;
            const nodeSize = trans.contentSize;
            const nodeAnchor = trans.anchorPoint;
            const barSpriteSize = entity._uiProps.uiTransformComp.contentSize;

            // if (entity.parent === this.node) {
            //     this.node.setContentSize(barSpriteSize);
            // }

            if (this._barSprite.fillType === Sprite.FillType.RADIAL) {
              this._mode = Mode.FILLED;
            }
            if (this._mode === Mode.HORIZONTAL) {
              this.totalLength = barSpriteSize.width;
            } else if (this._mode === Mode.VERTICAL) {
              this.totalLength = barSpriteSize.height;
            } else {
              this.totalLength = this._barSprite.fillRange;
            }
            if (entity.parent === this.node) {
              const x = -nodeSize.width * nodeAnchor.x;
              entity.setPosition(x, 0, 0);
            }
          }
        }
        _updateBarStatus() {
          if (this._barSprite) {
            const entity = this._barSprite.node;
            if (!entity) {
              return;
            }
            const entTrans = entity._uiProps.uiTransformComp;
            const entityAnchorPoint = entTrans.anchorPoint;
            const entitySize = entTrans.contentSize;
            const entityPosition = entity.getPosition();
            let anchorPoint = new Vec2(0, 0.5);
            const progress = clamp01(this._progress);
            let actualLenth = this._totalLength * progress;
            let finalContentSize = entitySize;
            let totalWidth = 0;
            let totalHeight = 0;
            switch (this._mode) {
              case Mode.HORIZONTAL:
                if (this._reverse) {
                  anchorPoint = new Vec2(1, 0.5);
                }
                finalContentSize = new Size(actualLenth, entitySize.height);
                totalWidth = this._totalLength;
                totalHeight = entitySize.height;
                break;
              case Mode.VERTICAL:
                if (this._reverse) {
                  anchorPoint = new Vec2(0.5, 1);
                } else {
                  anchorPoint = new Vec2(0.5, 0);
                }
                finalContentSize = new Size(entitySize.width, actualLenth);
                totalWidth = entitySize.width;
                totalHeight = this._totalLength;
                break;
              default:
                break;
            }

            // handling filled mode
            if (this._mode === Mode.FILLED) {
              if (this._barSprite.type !== Sprite.Type.FILLED) {
                warn('ProgressBar FILLED mode only works when barSprite\'s Type is FILLED!');
              } else {
                if (this._reverse) {
                  actualLenth *= -1;
                }
                this._barSprite.fillRange = actualLenth;
              }
            } else if (this._barSprite.type !== Sprite.Type.FILLED) {
              const anchorOffsetX = anchorPoint.x - entityAnchorPoint.x;
              const anchorOffsetY = anchorPoint.y - entityAnchorPoint.y;
              const finalPosition = new Vec3(totalWidth * anchorOffsetX, totalHeight * anchorOffsetY, 0);
              entity.setPosition(entityPosition.x + finalPosition.x, entityPosition.y + finalPosition.y, entityPosition.z);
              entTrans.setAnchorPoint(anchorPoint);
              entTrans.setContentSize(finalContentSize);
            } else {
              warn('ProgressBar non-FILLED mode only works when barSprite\'s Type is non-FILLED!');
            }
          }
        }
      }, _class3.Mode = Mode, _class3), (_applyDecoratedDescriptor(_class2.prototype, "barSprite", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "barSprite"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "mode", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "mode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "totalLength", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "totalLength"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec11, slide, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "progress"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "reverse", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "reverse"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_barSprite", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_mode", [serializable], function () {
        return Mode.HORIZONTAL;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_totalLength", [serializable], function () {
        return 1;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_progress", [serializable], function () {
        return 0.1;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_reverse", [serializable], function () {
        return false;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
      legacyCC.ProgressBar = ProgressBar;
    }
  };
});