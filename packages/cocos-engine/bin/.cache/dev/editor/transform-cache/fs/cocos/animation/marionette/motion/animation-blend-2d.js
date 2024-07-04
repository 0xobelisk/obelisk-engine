System.register("q-bundled:///fs/cocos/animation/marionette/motion/animation-blend-2d.js", ["../../../core/index.js", "../create-eval.js", "./animation-blend.js", "../parametric.js", "./blend-2d.js", "../../define.js"], function (_export, _context) {
  "use strict";

  var Vec2, _decorator, ccenum, assertIsTrue, editable, createEval, AnimationBlend, AnimationBlendEval, AnimationBlendItem, BindableNumber, bindOr, VariableType, sampleFreeformCartesian, blendSimpleDirectional, PolarSpaceGradientBandInterpolator2D, CLASS_NAME_PREFIX_ANIM, AnimationBlend2DEval, PolarSpaceGradientBandBlend2DEval, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, _initializer3, _initializer4, _initializer5, _class6, ccclass, serializable, Algorithm, AnimationBlend2DItem, AnimationBlend2D;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      _decorator = _coreIndexJs._decorator;
      ccenum = _coreIndexJs.ccenum;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      editable = _coreIndexJs.editable;
    }, function (_createEvalJs) {
      createEval = _createEvalJs.createEval;
    }, function (_animationBlendJs) {
      AnimationBlend = _animationBlendJs.AnimationBlend;
      AnimationBlendEval = _animationBlendJs.AnimationBlendEval;
      AnimationBlendItem = _animationBlendJs.AnimationBlendItem;
    }, function (_parametricJs) {
      BindableNumber = _parametricJs.BindableNumber;
      bindOr = _parametricJs.bindOr;
      VariableType = _parametricJs.VariableType;
    }, function (_blend2dJs) {
      sampleFreeformCartesian = _blend2dJs.sampleFreeformCartesian;
      blendSimpleDirectional = _blend2dJs.blendSimpleDirectional;
      PolarSpaceGradientBandInterpolator2D = _blend2dJs.PolarSpaceGradientBandInterpolator2D;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      ({
        ccclass,
        serializable
      } = _decorator);
      (function (Algorithm) {
        Algorithm[Algorithm["SIMPLE_DIRECTIONAL"] = 0] = "SIMPLE_DIRECTIONAL";
        Algorithm[Algorithm["FREEFORM_CARTESIAN"] = 1] = "FREEFORM_CARTESIAN";
        Algorithm[Algorithm["FREEFORM_DIRECTIONAL"] = 2] = "FREEFORM_DIRECTIONAL";
      })(Algorithm || (Algorithm = {}));
      ccenum(Algorithm);
      AnimationBlend2DItem = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}AnimationBlend2DItem`), _dec(_class = (_class2 = class AnimationBlend2DItem extends AnimationBlendItem {
        constructor(...args) {
          super(...args);
          this.threshold = _initializer && _initializer();
        }
        clone() {
          const that = new AnimationBlend2DItem();
          this._copyTo(that);
          return that;
        }
        _copyTo(that) {
          super._copyTo(that);
          Vec2.copy(that.threshold, this.threshold);
          return that;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "threshold", [serializable], function () {
        return new Vec2();
      })), _class2)) || _class);
      _export("AnimationBlend2D", AnimationBlend2D = (_dec2 = ccclass('cc.animation.AnimationBlend2D'), _dec2(_class4 = (_class5 = (_class6 = class AnimationBlend2D extends AnimationBlend {
        constructor(...args) {
          super(...args);
          this._items = _initializer2 && _initializer2();
          this.paramX = _initializer3 && _initializer3();
          this.paramY = _initializer4 && _initializer4();
          this._algorithm = _initializer5 && _initializer5();
          this._polarSpaceGBI = undefined;
        }
        get algorithm() {
          return this._algorithm;
        }
        set algorithm(value) {
          if (value === this._algorithm) {
            return;
          }
          this._algorithm = value;
          this._tryReconstructPolarSpaceInterpolator();
        }
        get items() {
          return this._items;
        }
        set items(items) {
          this._items = Array.from(items);
          this._tryReconstructPolarSpaceInterpolator();
        }

        /**
         * // TODO: HACK
         * @internal
         */
        __callOnAfterDeserializeRecursive() {
          this._tryReconstructPolarSpaceInterpolator();
        }
        clone() {
          const that = new AnimationBlend2D();
          this.copyTo(that);
          that._items = this._items.map(item => {
            var _item$clone;
            return (_item$clone = item === null || item === void 0 ? void 0 : item.clone()) !== null && _item$clone !== void 0 ? _item$clone : null;
          });
          that.paramX = this.paramX.clone();
          that.paramY = this.paramY.clone();
          that.algorithm = this._algorithm;
          return that;
        }
        [createEval](context, ignoreEmbeddedPlayers) {
          const {
            algorithm
          } = this;
          let evaluation;
          switch (algorithm) {
            case Algorithm.FREEFORM_DIRECTIONAL:
              assertIsTrue(this._polarSpaceGBI, `The polar space interpolator is not setup correctly!`);
              evaluation = new PolarSpaceGradientBandBlend2DEval(context, ignoreEmbeddedPlayers, this, this._items, this._polarSpaceGBI, [0.0, 0.0]);
              break;
            default:
              assertIsTrue(false);
            // fallthrough
            case Algorithm.SIMPLE_DIRECTIONAL:
            case Algorithm.FREEFORM_CARTESIAN:
              evaluation = new AnimationBlend2DEval(context, ignoreEmbeddedPlayers, this, this._items, this._items.map(({
                threshold
              }) => threshold), algorithm, [0.0, 0.0]);
              break;
          }
          const initialValueX = bindOr(context, this.paramX, VariableType.FLOAT, evaluation.setInput, evaluation, 0);
          const initialValueY = bindOr(context, this.paramY, VariableType.FLOAT, evaluation.setInput, evaluation, 1);
          evaluation.setInput(initialValueX, 0);
          evaluation.setInput(initialValueY, 1);
          return evaluation;
        }
        _tryReconstructPolarSpaceInterpolator() {
          if (this._algorithm === Algorithm.FREEFORM_DIRECTIONAL) {
            this._polarSpaceGBI = new PolarSpaceGradientBandInterpolator2D(this._items.map(item => item.threshold));
          } else {
            this._polarSpaceGBI = undefined;
          }
        }
      }, _class6.Algorithm = Algorithm, _class6.Item = AnimationBlend2DItem, _class6), (_applyDecoratedDescriptor(_class5.prototype, "algorithm", [editable], Object.getOwnPropertyDescriptor(_class5.prototype, "algorithm"), _class5.prototype), _initializer2 = _applyDecoratedInitializer(_class5.prototype, "_items", [serializable], function () {
        return [];
      }), _initializer3 = _applyDecoratedInitializer(_class5.prototype, "paramX", [serializable], function () {
        return new BindableNumber();
      }), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "paramY", [serializable], function () {
        return new BindableNumber();
      }), _initializer5 = _applyDecoratedInitializer(_class5.prototype, "_algorithm", [serializable], function () {
        return Algorithm.SIMPLE_DIRECTIONAL;
      })), _class5)) || _class4));
      AnimationBlend2DEval = class AnimationBlend2DEval extends AnimationBlendEval {
        constructor(context, ignoreEmbeddedPlayers, base, items, thresholds, algorithm, inputs) {
          super(context, ignoreEmbeddedPlayers, base, items, inputs);
          this._thresholds = void 0;
          this._algorithm = void 0;
          this._value = new Vec2();
          this._thresholds = thresholds;
          this._algorithm = algorithm;
          this.doEval();
        }
        eval(weights, [x, y]) {
          Vec2.set(this._value, x, y);
          weights.fill(0);
          switch (this._algorithm) {
            case Algorithm.SIMPLE_DIRECTIONAL:
              blendSimpleDirectional(weights, this._thresholds, this._value);
              break;
            case Algorithm.FREEFORM_CARTESIAN:
              sampleFreeformCartesian(weights, this._thresholds, this._value);
              break;
            default:
              break;
          }
        }
      };
      PolarSpaceGradientBandBlend2DEval = class PolarSpaceGradientBandBlend2DEval extends AnimationBlendEval {
        constructor(context, ignoreEmbeddedPlayers, base, items, interpolator, inputs) {
          super(context, ignoreEmbeddedPlayers, base, items, inputs);
          this._interpolator = void 0;
          this._value = new Vec2();
          this._interpolator = interpolator;
          this.doEval();
        }
        eval(weights, [x, y]) {
          Vec2.set(this._value, x, y);
          weights.fill(0);
          this._interpolator.interpolate(weights, this._value);
        }
      };
    }
  };
});