System.register(['./index-ce98320e.js', './builtin-res-mgr.jsb-c9e8e53a.js', './renderer-3bf7a012.js'], (function (exports) {
    'use strict';
    var ccclass, applyDecoratedInitializer, serializable, Layers, Renderer;
    return {
        setters: [function (module) {
            ccclass = module.by;
            applyDecoratedInitializer = module.bx;
            serializable = module.bf;
        }, function (module) {
            Layers = module.V;
        }, function (module) {
            Renderer = module.R;
        }],
        execute: (function () {

            const getPhaseID = exports('g', (() => {
              const phases = new Map();
              let phaseNum = 0;
              return phaseName => {
                if (typeof phaseName === 'number') {
                  return phaseName;
                }
                if (!phases.has(phaseName)) {
                  phases.set(phaseName, 1 << phaseNum);
                  phaseNum++;
                }
                return phases.get(phaseName);
              };
            })());

            var _dec, _class, _class2, _initializer;
            getPhaseID('specular-pass');
            let ModelRenderer = exports('M', (_dec = ccclass('cc.ModelRenderer'), _dec(_class = (_class2 = class ModelRenderer extends Renderer {
              constructor(...args) {
                super(...args);
                this._visFlags = _initializer && _initializer();
                this._models = [];
                this._priority = 0;
              }
              get visibility() {
                return this._visFlags;
              }
              set visibility(val) {
                this._visFlags = val;
                this._onVisibilityChange(val);
              }
              get priority() {
                return this._priority;
              }
              set priority(val) {
                if (val === this._priority) return;
                this._priority = val;
                this._updatePriority();
              }
              _collectModels() {
                return this._models;
              }
              onEnable() {
                this._updatePriority();
              }
              _attachToScene() {}
              _detachFromScene() {}
              _onVisibilityChange(val) {}
              _updatePriority() {
                if (this._models.length > 0) {
                  for (let i = 0; i < this._models.length; i++) {
                    this._models[i].priority = this._priority;
                  }
                }
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "_visFlags", [serializable], function () {
              return Layers.Enum.NONE;
            })), _class2)) || _class));

        })
    };
}));
