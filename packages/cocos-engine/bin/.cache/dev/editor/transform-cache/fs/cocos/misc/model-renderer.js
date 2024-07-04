System.register("q-bundled:///fs/cocos/misc/model-renderer.js", ["../core/data/decorators/index.js", "../scene-graph/layers.js", "./renderer.js", "../core/index.js", "../rendering/define.js", "../rendering/pass-phase.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, Layers, Renderer, cclegacy, isEnableEffect, getPhaseID, _dec, _class, _class2, _initializer, _phaseID, ModelRenderer;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function getSkinPassIndex(subModel) {
    const passes = subModel.passes;
    const r = cclegacy.rendering;
    if (isEnableEffect()) _phaseID = r.getPhaseID(r.getPassID('specular-pass'), 'default');
    for (let k = 0; k < passes.length; k++) {
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
      _export("ModelRenderer", ModelRenderer = (_dec = ccclass('cc.ModelRenderer'), _dec(_class = (_class2 = class ModelRenderer extends Renderer {
        constructor(...args) {
          super(...args);
          this._visFlags = _initializer && _initializer();
          this._models = [];
          this._priority = 0;
        }
        /**
         * @en The visibility which will be applied to the committed models.
         * @zh 应用于所有提交渲染的 Model 的可见性
         */
        get visibility() {
          return this._visFlags;
        }
        set visibility(val) {
          this._visFlags = val;
          this._onVisibilityChange(val);
        }

        /**
         * @en The priority which will be applied to the committed models.(Valid only in transparent queues)
         * @zh 应用于所有提交渲染的 Model 的排序优先级（只在半透明渲染队列中起效）
         */
        get priority() {
          return this._priority;
        }
        set priority(val) {
          if (val === this._priority) return;
          this._priority = val;
          this._updatePriority();
        }
        /**
         * @zh 收集组件中的 models
         * @en Collect the models in this component.
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _collectModels() {
          return this._models;
        }
        onEnable() {
          this._updatePriority();
        }
        _attachToScene() {}

        /**
         * @engineInternal
         */
        _detachFromScene() {}
        _onVisibilityChange(val) {}
        _updatePriority() {
          if (this._models.length > 0) {
            for (let i = 0; i < this._models.length; i++) {
              this._models[i].priority = this._priority;
            }
          }
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_visFlags", [serializable], function () {
        return Layers.Enum.NONE;
      })), _class2)) || _class));
    }
  };
});