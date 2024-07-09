System.register("q-bundled:///fs/cocos/animation/marionette/motion/animation-blend-direct.js", ["../../../core/index.js", "../create-eval.js", "./animation-blend.js", "../../define.js", "../parametric.js"], function (_export, _context) {
  "use strict";

  var _decorator, createEval, AnimationBlend, AnimationBlendEval, AnimationBlendItem, CLASS_NAME_PREFIX_ANIM, BindableNumber, bindOr, VariableType, AnimationBlendDirectEval, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, _class6, ccclass, serializable, AnimationBlendDirectItem, AnimationBlendDirect;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      _decorator = _coreIndexJs._decorator;
    }, function (_createEvalJs) {
      createEval = _createEvalJs.createEval;
    }, function (_animationBlendJs) {
      AnimationBlend = _animationBlendJs.AnimationBlend;
      AnimationBlendEval = _animationBlendJs.AnimationBlendEval;
      AnimationBlendItem = _animationBlendJs.AnimationBlendItem;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_parametricJs) {
      BindableNumber = _parametricJs.BindableNumber;
      bindOr = _parametricJs.bindOr;
      VariableType = _parametricJs.VariableType;
    }],
    execute: function () {
      ({
        ccclass,
        serializable
      } = _decorator);
      AnimationBlendDirectItem = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}AnimationBlendDirectItem`), _dec(_class = (_class2 = class AnimationBlendDirectItem extends AnimationBlendItem {
        constructor(...args) {
          super(...args);
          this.weight = _initializer && _initializer();
        }
        clone() {
          const that = new AnimationBlendDirectItem();
          this._copyTo(that);
          return that;
        }
        _copyTo(that) {
          super._copyTo(that);
          that.weight = this.weight;
          return that;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "weight", [serializable], function () {
        return new BindableNumber(0.0);
      })), _class2)) || _class);
      _export("AnimationBlendDirect", AnimationBlendDirect = (_dec2 = ccclass('cc.animation.AnimationBlendDirect'), _dec2(_class4 = (_class5 = (_class6 = class AnimationBlendDirect extends AnimationBlend {
        constructor(...args) {
          super(...args);
          this._items = _initializer2 && _initializer2();
        }
        get items() {
          return this._items;
        }
        set items(value) {
          this._items = Array.from(value);
        }
        clone() {
          const that = new AnimationBlendDirect();
          this.copyTo(that);
          that._items = this._items.map(item => {
            var _item$clone;
            return (_item$clone = item === null || item === void 0 ? void 0 : item.clone()) !== null && _item$clone !== void 0 ? _item$clone : null;
          });
          return that;
        }
        [createEval](context, ignoreEmbeddedPlayers) {
          const myEval = new AnimationBlendDirectEval(context, ignoreEmbeddedPlayers, this, this._items, new Array(this._items.length).fill(0.0));
          for (let iItem = 0; iItem < this._items.length; ++iItem) {
            const item = this._items[iItem];
            const initialValue = bindOr(context, item.weight, VariableType.FLOAT, myEval.setInput, myEval, iItem);
            myEval.setInput(initialValue, iItem);
          }
          return myEval;
        }
      }, _class6.Item = AnimationBlendDirectItem, _class6), (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "_items", [serializable], function () {
        return [];
      })), _class5)) || _class4));
      AnimationBlendDirectEval = class AnimationBlendDirectEval extends AnimationBlendEval {
        constructor(...args) {
          super(...args);
          this.doEval();
        }
        eval(weights, inputs) {
          const nChildren = weights.length;
          for (let iChild = 0; iChild < nChildren; ++iChild) {
            weights[iChild] = inputs[iChild];
          }
        }
      };
    }
  };
});