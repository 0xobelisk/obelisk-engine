System.register("q-bundled:///fs/cocos/sorting/sorting.js", ["../core/data/decorators/index.js", "../core/math/index.js", "./sorting-layers.js", "../scene-graph/component.js", "../core/platform/debug.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, editable, executeInEditMode, help, menu, range, serializable, type, clamp, SortingLayers, Component, warnID, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, _initializer2, MAX_INT16, MIN_INT16, Sorting;
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
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_coreMathIndexJs) {
      clamp = _coreMathIndexJs.clamp;
    }, function (_sortingLayersJs) {
      SortingLayers = _sortingLayersJs.SortingLayers;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_corePlatformDebugJs) {
      warnID = _corePlatformDebugJs.warnID;
    }],
    execute: function () {
      MAX_INT16 = (1 << 15) - 1;
      MIN_INT16 = -1 << 15;
      /**
       * @en
       * Render sort component. This component must be placed on a node with a [[MeshRenderer]] or [[SpriteRenderer]] component.
       *
       * @zh
       * 渲染排序组件。该组件必须放置在带有 [[MeshRenderer]] 或者 [[SpriteRenderer]] 组件的节点上。
       */
      _export("Sorting", Sorting = (_dec = ccclass('cc.Sorting'), _dec2 = menu('Sorting/Sorting'), _dec3 = help('i18n:cc.Sorting'), _dec4 = type(SortingLayers.Enum), _dec5 = range([MIN_INT16, MAX_INT16, 1]), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Sorting, _Component);
        function Sorting() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._sortingLayer = _initializer && _initializer();
          // Actually saved id
          _this._sortingOrder = _initializer2 && _initializer2();
          _this._modelRenderer = null;
          return _this;
        }
        var _proto = Sorting.prototype;
        _proto.__preload = function __preload() {
          this._modelRenderer = this.getComponent('cc.ModelRenderer');
          if (!this._modelRenderer) {
            warnID(16301, this.node.name);
          }
          this._updateSortingPriority();
        };
        _proto._updateSortingPriority = function _updateSortingPriority() {
          var sortingLayerValue = SortingLayers.getLayerIndex(this._sortingLayer);
          var sortingPriority = SortingLayers.getSortingPriority(sortingLayerValue, this._sortingOrder);
          if (this._modelRenderer && this._modelRenderer.isValid) {
            this._modelRenderer.priority = sortingPriority;
          }
        };
        _createClass(Sorting, [{
          key: "sortingLayer",
          get:
          /**
           * @zh 组件所属排序层 id，影响组件的渲染排序。
           * @en The sorting layer id of the component, which affects the rendering order of the component.
           */
          function get() {
            return this._sortingLayer;
          },
          set: function set(val) {
            if (val === this._sortingLayer || !SortingLayers.isLayerValid(val)) return;
            this._sortingLayer = val;
            this._updateSortingPriority();
          }

          /**
           * @zh 组件在当前排序层中的顺序，在默认排序规则中，越小越先渲染。
           * @en Model Renderer's order within a sorting layer. In the default sorting rule, smaller values are rendered first.
           */
        }, {
          key: "sortingOrder",
          get: function get() {
            return this._sortingOrder;
          },
          set: function set(val) {
            if (val === this._sortingOrder) return;
            this._sortingOrder = clamp(val, MIN_INT16, MAX_INT16);
            this._updateSortingPriority();
          }
        }]);
        return Sorting;
      }(Component), (_applyDecoratedDescriptor(_class2.prototype, "sortingLayer", [editable, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "sortingLayer"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sortingOrder", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "sortingOrder"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_sortingLayer", [serializable], function () {
        return SortingLayers.Enum["default"];
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_sortingOrder", [serializable], function () {
        return 0;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});