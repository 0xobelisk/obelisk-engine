System.register("q-bundled:///fs/cocos/animation/marionette/motion/animation-blend-1d.js", ["../../../core/index.js", "../create-eval.js", "../parametric.js", "./animation-blend.js", "./blend-1d.js", "../../define.js"], function (_export, _context) {
  "use strict";

  var _decorator, createEval, BindableNumber, bindOr, VariableType, AnimationBlend, AnimationBlendEval, AnimationBlendItem, blend1D, CLASS_NAME_PREFIX_ANIM, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, _initializer3, _class6, ccclass, serializable, AnimationBlend1DItem, AnimationBlend1D, AnimationBlend1DEval;
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
  return {
    setters: [function (_coreIndexJs) {
      _decorator = _coreIndexJs._decorator;
    }, function (_createEvalJs) {
      createEval = _createEvalJs.createEval;
    }, function (_parametricJs) {
      BindableNumber = _parametricJs.BindableNumber;
      bindOr = _parametricJs.bindOr;
      VariableType = _parametricJs.VariableType;
    }, function (_animationBlendJs) {
      AnimationBlend = _animationBlendJs.AnimationBlend;
      AnimationBlendEval = _animationBlendJs.AnimationBlendEval;
      AnimationBlendItem = _animationBlendJs.AnimationBlendItem;
    }, function (_blend1dJs) {
      blend1D = _blend1dJs.blend1D;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      AnimationBlend1DItem = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "AnimationBlend1DItem"), _dec(_class = (_class2 = /*#__PURE__*/function (_AnimationBlendItem) {
        _inheritsLoose(AnimationBlend1DItem, _AnimationBlendItem);
        function AnimationBlend1DItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AnimationBlendItem.call.apply(_AnimationBlendItem, [this].concat(args)) || this;
          _this.threshold = _initializer && _initializer();
          return _this;
        }
        var _proto = AnimationBlend1DItem.prototype;
        _proto.clone = function clone() {
          var that = new AnimationBlend1DItem();
          this._copyTo(that);
          return that;
        };
        _proto._copyTo = function _copyTo(that) {
          _AnimationBlendItem.prototype._copyTo.call(this, that);
          that.threshold = this.threshold;
          return that;
        };
        return AnimationBlend1DItem;
      }(AnimationBlendItem), (_initializer = _applyDecoratedInitializer(_class2.prototype, "threshold", [serializable], function () {
        return 0.0;
      })), _class2)) || _class);
      _export("AnimationBlend1D", AnimationBlend1D = (_dec2 = ccclass('cc.animation.AnimationBlend1D'), _dec2(_class4 = (_class5 = (_class6 = /*#__PURE__*/function (_AnimationBlend) {
        _inheritsLoose(AnimationBlend1D, _AnimationBlend);
        function AnimationBlend1D() {
          var _this2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this2 = _AnimationBlend.call.apply(_AnimationBlend, [this].concat(args)) || this;
          _this2._items = _initializer2 && _initializer2();
          _this2.param = _initializer3 && _initializer3();
          return _this2;
        }
        var _proto2 = AnimationBlend1D.prototype;
        _proto2.clone = function clone() {
          var that = new AnimationBlend1D();
          this.copyTo(that);
          that._items = this._items.map(function (item) {
            return item.clone();
          });
          that.param = this.param.clone();
          return that;
        };
        _proto2[createEval] = function (context, ignoreEmbeddedPlayers) {
          var evaluation = new AnimationBlend1DEval(context, ignoreEmbeddedPlayers, this, this._items, this._items.map(function (_ref) {
            var threshold = _ref.threshold;
            return threshold;
          }), 0.0);
          var initialValue = bindOr(context, this.param, VariableType.FLOAT, evaluation.setInput, evaluation, 0);
          evaluation.setInput(initialValue, 0);
          return evaluation;
        };
        _createClass(AnimationBlend1D, [{
          key: "items",
          get: function get() {
            return this._items;
          },
          set: function set(value) {
            this._items = Array.from(value).sort(function (_ref2, _ref3) {
              var lhs = _ref2.threshold;
              var rhs = _ref3.threshold;
              return lhs - rhs;
            });
          }
        }]);
        return AnimationBlend1D;
      }(AnimationBlend), _class6.Item = AnimationBlend1DItem, _class6), (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "_items", [serializable], function () {
        return [];
      }), _initializer3 = _applyDecoratedInitializer(_class5.prototype, "param", [serializable], function () {
        return new BindableNumber();
      })), _class5)) || _class4));
      AnimationBlend1DEval = /*#__PURE__*/function (_AnimationBlendEval) {
        _inheritsLoose(AnimationBlend1DEval, _AnimationBlendEval);
        function AnimationBlend1DEval(context, ignoreEmbeddedPlayers, base, items, thresholds, input) {
          var _this3;
          _this3 = _AnimationBlendEval.call(this, context, ignoreEmbeddedPlayers, base, items, [input]) || this;
          _this3._thresholds = thresholds;
          _this3.doEval();
          return _this3;
        }
        var _proto3 = AnimationBlend1DEval.prototype;
        _proto3.eval = function _eval(weights, _ref4) {
          var value = _ref4[0];
          blend1D(weights, this._thresholds, value);
        };
        return AnimationBlend1DEval;
      }(AnimationBlendEval);
    }
  };
});