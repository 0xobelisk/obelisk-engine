System.register(['./index-ce98320e.js', './director-dc238483.js', './deprecated-f8df8d32.js', './node-event-18d96a1b.js', './scene-asset.jsb-0d4c6201.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './device-90bc7390.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './touch-af62e326.js', './decorators-b63b63a2.js'], (function (exports) {
    'use strict';
    var errorID, settings, Settings, Enum, ccclass, type, disallowMultiple, applyDecoratedInitializer, clamp, warnID, serializable, game, Game, _applyDecoratedDescriptor, Component;
    return {
        setters: [function (module) {
            errorID = module.f;
            settings = module.a_;
            Settings = module.aZ;
            Enum = module.aa;
            ccclass = module.by;
            type = module.bw;
            disallowMultiple = module.ck;
            applyDecoratedInitializer = module.bx;
            clamp = module.F;
            warnID = module.d;
            serializable = module.bf;
        }, function () {}, function (module) {
            game = module.g;
            Game = module.G;
        }, function (module) {
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            const SortingLayer = {
              default: 0
            };
            game.on(Game.EVENT_POST_SUBSYSTEM_INIT, () => {
              SortingLayers.init();
            });
            class SortingLayers {
              static getSortingPriority(layer = 0, order = 0) {
                return (layer + (1 << 15) << 16 | order + (1 << 15)) >>> 0;
              }
              static getLayerIndex(layer = 0) {
                let index = 0;
                if (this.indexMap.has(layer)) {
                  index = this.indexMap.get(layer);
                } else {
                  errorID(2105);
                }
                return index;
              }
              static getLayerIndexByName(name) {
                const id = this.getLayerByName(name);
                return this.getLayerIndex(id);
              }
              static getLayerName(layer = 0) {
                let name = '';
                if (this.nameMap.has(layer)) {
                  name = this.nameMap.get(layer);
                } else {
                  errorID(2105);
                }
                return name;
              }
              static getLayerByName(name) {
                const count = this.nameMap.size;
                const keyIterator = this.nameMap.keys();
                let key = 0;
                for (let i = 0; i < count; i++) {
                  key = keyIterator.next().value;
                  if (this.nameMap.get(key) === name) return key;
                }
                errorID(2106);
                return 0;
              }
              static isLayerValid(id) {
                if (this.indexMap.has(id)) {
                  return true;
                } else {
                  errorID(2105);
                  return false;
                }
              }
              static getBuiltinLayers() {
                return [{
                  id: 0,
                  name: 'default',
                  value: 0
                }];
              }
              static init() {
                let sortingLayers = settings.querySettings(Settings.Category.ENGINE, 'sortingLayers');
                if (!sortingLayers || sortingLayers.length === 0) {
                  sortingLayers = this.getBuiltinLayers();
                }
                SortingLayers.resetState();
                for (let i = 0; i < sortingLayers.length; i++) {
                  const layer = sortingLayers[i];
                  SortingLayers.setLayer(layer.id, layer.name, layer.value);
                  SortingLayers.Enum[layer.name] = layer.id;
                }
                Enum.update(SortingLayers.Enum);
                Enum.sortList(SortingLayers.Enum, (a, b) => SortingLayers.getLayerIndex(a.value) - SortingLayers.getLayerIndex(b.value));
              }
              static setLayer(layer, layerName, layerIndex) {
                this.nameMap.set(layer, layerName);
                this.indexMap.set(layer, layerIndex);
              }
              static resetState() {
                const oldItem = Object.keys(SortingLayers.Enum);
                for (let i = 0; i < oldItem.length; i++) {
                  delete SortingLayers.Enum[SortingLayers.Enum[oldItem[i]]];
                  delete SortingLayers.Enum[oldItem[i]];
                }
                SortingLayers.indexMap.clear();
                SortingLayers.nameMap.clear();
              }
            } exports('SortingLayers', SortingLayers);
            SortingLayers.nameMap = new Map();
            SortingLayers.indexMap = new Map();
            SortingLayers.Enum = Enum(SortingLayer);

            var _dec, _dec2, _class, _class2, _initializer, _initializer2;
            const MAX_INT16 = (1 << 15) - 1;
            const MIN_INT16 = -1 << 15;
            let Sorting = exports('Sorting', (_dec = ccclass('cc.Sorting'), _dec2 = type(SortingLayers.Enum), _dec(_class = disallowMultiple(_class = (_class2 = class Sorting extends Component {
              constructor(...args) {
                super(...args);
                this._sortingLayer = _initializer && _initializer();
                this._sortingOrder = _initializer2 && _initializer2();
                this._modelRenderer = null;
              }
              get sortingLayer() {
                return this._sortingLayer;
              }
              set sortingLayer(val) {
                if (val === this._sortingLayer || !SortingLayers.isLayerValid(val)) return;
                this._sortingLayer = val;
                this._updateSortingPriority();
              }
              get sortingOrder() {
                return this._sortingOrder;
              }
              set sortingOrder(val) {
                if (val === this._sortingOrder) return;
                this._sortingOrder = clamp(val, MIN_INT16, MAX_INT16);
                this._updateSortingPriority();
              }
              __preload() {
                this._modelRenderer = this.getComponent('cc.ModelRenderer');
                if (!this._modelRenderer) {
                  warnID(16301, this.node.name);
                }
                this._updateSortingPriority();
              }
              _updateSortingPriority() {
                const sortingLayerValue = SortingLayers.getLayerIndex(this._sortingLayer);
                const sortingPriority = SortingLayers.getSortingPriority(sortingLayerValue, this._sortingOrder);
                if (this._modelRenderer && this._modelRenderer.isValid) {
                  this._modelRenderer.priority = sortingPriority;
                }
              }
            }, (_applyDecoratedDescriptor(_class2.prototype, "sortingLayer", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "sortingLayer"), _class2.prototype), _initializer = applyDecoratedInitializer(_class2.prototype, "_sortingLayer", [serializable], function () {
              return SortingLayers.Enum.default;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_sortingOrder", [serializable], function () {
              return 0;
            })), _class2)) || _class) || _class));

        })
    };
}));
