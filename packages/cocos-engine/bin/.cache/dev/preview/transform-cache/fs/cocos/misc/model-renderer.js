System.register("q-bundled:///fs/cocos/misc/model-renderer.js", ["../core/data/decorators/index.js", "../scene-graph/layers.js", "./renderer.js", "../core/index.js", "../rendering/define.js", "../rendering/pass-phase.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, Layers, Renderer, cclegacy, isEnableEffect, getPhaseID, _dec, _class, _class2, _initializer, _phaseID, ModelRenderer;
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
  function getSkinPassIndex(subModel) {
    var passes = subModel.passes;
    var r = cclegacy.rendering;
    if (isEnableEffect()) _phaseID = r.getPhaseID(r.getPassID('specular-pass'), 'default');
    for (var k = 0; k < passes.length; k++) {
      if ((!r || !r.enableEffectImport) && passes[k].phase === _phaseID || isEnableEffect() && passes[k].phaseID === _phaseID) {
        return k;
      }
    }
    return -1;
  }

  /**
   * @en Base class for all rendering components containing model.
   * @zh 所有包含 model 的渲染组件基类。
   */
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_sceneGraphLayersJs) {
      Layers = _sceneGraphLayersJs.Layers;
    }, function (_rendererJs) {
      Renderer = _rendererJs.Renderer;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_renderingDefineJs) {
      isEnableEffect = _renderingDefineJs.isEnableEffect;
    }, function (_renderingPassPhaseJs) {
      getPhaseID = _renderingPassPhaseJs.getPhaseID;
    }],
    execute: function () {
      _phaseID = getPhaseID('specular-pass');
      _export("ModelRenderer", ModelRenderer = (_dec = ccclass('cc.ModelRenderer'), _dec(_class = (_class2 = /*#__PURE__*/function (_Renderer) {
        _inheritsLoose(ModelRenderer, _Renderer);
        function ModelRenderer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Renderer.call.apply(_Renderer, [this].concat(args)) || this;
          _this._visFlags = _initializer && _initializer();
          _this._models = [];
          _this._priority = 0;
          return _this;
        }
        var _proto = ModelRenderer.prototype;
        /**
         * @zh 收集组件中的 models
         * @en Collect the models in this component.
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _proto._collectModels = function _collectModels() {
          return this._models;
        };
        _proto.onEnable = function onEnable() {
          this._updatePriority();
        };
        _proto._attachToScene = function _attachToScene() {}

        /**
         * @engineInternal
         */;
        _proto._detachFromScene = function _detachFromScene() {};
        _proto._onVisibilityChange = function _onVisibilityChange(val) {};
        _proto._updatePriority = function _updatePriority() {
          if (this._models.length > 0) {
            for (var i = 0; i < this._models.length; i++) {
              this._models[i].priority = this._priority;
            }
          }
        };
        _createClass(ModelRenderer, [{
          key: "visibility",
          get:
          /**
           * @en The visibility which will be applied to the committed models.
           * @zh 应用于所有提交渲染的 Model 的可见性
           */
          function get() {
            return this._visFlags;
          },
          set: function set(val) {
            this._visFlags = val;
            this._onVisibilityChange(val);
          }

          /**
           * @en The priority which will be applied to the committed models.(Valid only in transparent queues)
           * @zh 应用于所有提交渲染的 Model 的排序优先级（只在半透明渲染队列中起效）
           */
        }, {
          key: "priority",
          get: function get() {
            return this._priority;
          },
          set: function set(val) {
            if (val === this._priority) return;
            this._priority = val;
            this._updatePriority();
          }
        }]);
        return ModelRenderer;
      }(Renderer), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_visFlags", [serializable], function () {
        return Layers.Enum.NONE;
      })), _class2)) || _class));
    }
  };
});