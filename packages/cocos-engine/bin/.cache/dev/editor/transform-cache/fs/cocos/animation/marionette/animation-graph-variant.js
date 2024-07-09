System.register("q-bundled:///fs/cocos/animation/marionette/animation-graph-variant.js", ["../../core/data/decorators/index.js", "../../core/utils/array.js", "../define.js", "./animation-graph.js", "./animation-graph-like.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, serializable, type, removeIf, CLASS_NAME_PREFIX_ANIM, AnimationGraph, AnimationGraphLike, _Symbol$iterator, _dec, _class, _class2, _initializer, _initializer2, _dec2, _dec3, _class4, _class5, _initializer3, _initializer4, _dec4, _class7, _class8, _initializer5, ClipOverrideEntry, AnimationGraphVariant, ClipOverrideMap;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_coreUtilsArrayJs) {
      removeIf = _coreUtilsArrayJs.removeIf;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_animationGraphJs) {
      AnimationGraph = _animationGraphJs.AnimationGraph;
    }, function (_animationGraphLikeJs) {
      AnimationGraphLike = _animationGraphLikeJs.AnimationGraphLike;
    }],
    execute: function () {
      /**
       * @en
       * An opacity type which denotes what the animation graph variant seems like outside the engine.
       * @zh
       * 一个非透明的类型，它是动画图变体在引擎外部的表示。
       */
      ClipOverrideEntry = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}ClipOverrideEntry`), _dec(_class = (_class2 = class ClipOverrideEntry {
        constructor() {
          this.original = _initializer && _initializer();
          this.substitution = _initializer2 && _initializer2();
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "original", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "substitution", [serializable], function () {
        return null;
      })), _class2)) || _class);
      _export("AnimationGraphVariant", AnimationGraphVariant = (_dec2 = ccclass(`${CLASS_NAME_PREFIX_ANIM}AnimationGraphVariant`), _dec3 = type(AnimationGraph), _dec2(_class4 = (_class5 = class AnimationGraphVariant extends AnimationGraphLike {
        constructor(...args) {
          super(...args);
          this._graph = _initializer3 && _initializer3();
          this._clipOverrides = _initializer4 && _initializer4();
        }
        get original() {
          return this._graph;
        }
        set original(value) {
          this._graph = value;
        }
        get clipOverrides() {
          return this._clipOverrides;
        }
      }, (_applyDecoratedDescriptor(_class5.prototype, "original", [_dec3, editable], Object.getOwnPropertyDescriptor(_class5.prototype, "original"), _class5.prototype), _initializer3 = _applyDecoratedInitializer(_class5.prototype, "_graph", [serializable], function () {
        return null;
      }), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "_clipOverrides", [serializable], function () {
        return new ClipOverrideMap();
      })), _class5)) || _class4));
      ClipOverrideMap = (_dec4 = ccclass(`${CLASS_NAME_PREFIX_ANIM}ClipOverrideMap`), _dec4(_class7 = (_class8 = (_Symbol$iterator = Symbol.iterator, class ClipOverrideMap {
        constructor() {
          this._entries = _initializer5 && _initializer5();
        }
        get size() {
          return this._entries.length;
        }
        [_Symbol$iterator]() {
          return this._entries[Symbol.iterator]();
        }
        has(original) {
          return !!this._entries.find(({
            original: o
          }) => o === original);
        }
        get(original) {
          const entry = this._entries.find(({
            original: o
          }) => o === original);
          return entry === null || entry === void 0 ? void 0 : entry.substitution;
        }
        set(original, substitution) {
          const entry = this._entries.find(({
            original: o
          }) => o === original);
          if (entry) {
            entry.substitution = substitution;
          } else {
            const newEntry = new ClipOverrideEntry();
            newEntry.original = original;
            newEntry.substitution = substitution;
            this._entries.push(newEntry);
          }
        }
        delete(original) {
          removeIf(this._entries, ({
            original: o
          }) => o === original);
        }
        clear() {
          this._entries.length = 0;
        }
      }), (_initializer5 = _applyDecoratedInitializer(_class8.prototype, "_entries", [serializable], function () {
        return [];
      })), _class8)) || _class7);
    }
  };
});