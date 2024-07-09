System.register("q-bundled:///fs/cocos/2d/components/ui-opacity.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../scene-graph/component.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, editable, executeInEditMode, executionOrder, help, menu, serializable, tooltip, EDITOR_NOT_IN_PREVIEW, JSB, Component, misc, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, UIOpacity;
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
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      editable = _coreDataDecoratorsIndexJs.editable;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_coreIndexJs) {
      misc = _coreIndexJs.misc;
    }],
    execute: function () {
      /**
       * @en
       * Set the UI transparency component.
       * This component can be used to influence subsequent render nodes.
       * Nodes that already have a rendering component can modify the alpha channel of color directly.
       *
       * @zh
       * UI 透明度设置组件。可以通过该组件设置透明度来影响后续的渲染节点。已经带有渲染组件的节点可以直接修改 color 的 alpha 通道。
       */
      _export("UIOpacity", UIOpacity = (_dec = ccclass('cc.UIOpacity'), _dec2 = help('i18n:cc.UIOpacity'), _dec3 = executionOrder(110), _dec4 = menu('UI/UIOpacity'), _dec5 = tooltip('i18n:UIOpacity.opacity'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = executeInEditMode(_class = disallowMultiple(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIOpacity, _Component);
        function UIOpacity() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * @en
           * Identification set by the parent node.
           *
           * @zh
           * 被父节点设置的标识。
           */
          _this._setByParent = false;
          _this._opacity = _initializer && _initializer();
          return _this;
        }
        var _proto = UIOpacity.prototype;
        _proto.setEntityLocalOpacityDirtyRecursively = function setEntityLocalOpacityDirtyRecursively(dirty) {
          if (JSB) {
            // const render = this.node._uiProps.uiComp as UIRenderer;
            // if (render) {
            //     render.setEntityOpacity(this.node._uiProps.localOpacity);
            // }
            // UIRenderer.setEntityColorDirtyRecursively(this.node, dirty);

            UIOpacity.setEntityLocalOpacityDirtyRecursively(this.node, dirty, 1, false);
          }
        }

        // for UIOpacity
        ;
        UIOpacity.setEntityLocalOpacityDirtyRecursively = function setEntityLocalOpacityDirtyRecursively(node, dirty, interruptParentOpacity, setByParent) {
          if (!node.isValid) {
            // Since children might be destroyed before the parent,
            // we should add protecting condition when executing recursion downwards.
            return;
          }
          var render = node._uiProps.uiComp;
          var uiOp = node.getComponent(UIOpacity);
          var interruptOpacity = interruptParentOpacity; // if there is no UIOpacity component, it should always equal to 1.

          if (render && render.color) {
            // exclude UIMeshRenderer which has not color
            render.renderEntity.colorDirty = dirty;
            if (uiOp) {
              render.renderEntity.localOpacity = interruptOpacity * uiOp.opacity / 255;
              uiOp._setByParent = setByParent;
            } else {
              // there is a just UIRenderer but no UIOpacity on the node, we should just transport the parentOpacity to the node.
              render.renderEntity.localOpacity = interruptOpacity;
            }
            render.node._uiProps.localOpacity = render.renderEntity.localOpacity;
            interruptOpacity = 1;
          } else if (uiOp) {
            // there is a just UIOpacity but no UIRenderer on the node.
            // we should transport the interrupt opacity downward
            interruptOpacity = interruptOpacity * uiOp.opacity / 255;
            uiOp._setByParent = setByParent;
          }
          for (var i = 0; i < node.children.length; i++) {
            UIOpacity.setEntityLocalOpacityDirtyRecursively(node.children[i], dirty || interruptOpacity < 1, interruptOpacity, true);
          }
        };
        _proto.onEnable = function onEnable() {
          // If the ancestor node has a uiopacity component, it will be initialized when initializing 
          // the uiopacity component of the ancestor node, and there is no need to initialize it again.
          if (this._setByParent) {
            return;
          }
          this.node._uiProps.localOpacity = this._opacity / 255;
          this.setEntityLocalOpacityDirtyRecursively(true);
        };
        _proto.onDisable = function onDisable() {
          // If the ancestor node has a uiopacity component, it will be uninitialized when uninitializing 
          // the uiopacity component of the ancestor node, and there is no need to uninitialize it again.
          if (this._setByParent) {
            return;
          }
          this.node._uiProps.localOpacity = 1;
          this.setEntityLocalOpacityDirtyRecursively(true);
        };
        _createClass(UIOpacity, [{
          key: "opacity",
          get:
          /**
           * @en
           * The transparency value of the impact.
           *
           * @zh
           * 透明度。
           */
          function get() {
            return this._opacity;
          },
          set: function set(value) {
            var _this2 = this;
            if (this._opacity === value) {
              return;
            }
            value = misc.clampf(value, 0, 255);
            this._opacity = value;
            this.node._uiProps.localOpacity = value / 255;
            this.setEntityLocalOpacityDirtyRecursively(true);
            if (EDITOR_NOT_IN_PREVIEW) {
              setTimeout(function () {
                EditorExtends.Node.emit('change', _this2.node.uuid, _this2.node);
              }, 200);
            }
          }
        }]);
        return UIOpacity;
      }(Component), (_applyDecoratedDescriptor(_class2.prototype, "opacity", [editable, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "opacity"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_opacity", [serializable], function () {
        return 255;
      })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class));
    }
  };
});