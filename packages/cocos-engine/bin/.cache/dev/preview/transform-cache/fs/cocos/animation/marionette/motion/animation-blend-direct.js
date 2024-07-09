System.register("q-bundled:///fs/cocos/animation/marionette/motion/animation-blend-direct.js", ["../../../core/index.js", "../create-eval.js", "./animation-blend.js", "../../define.js", "../parametric.js"], function (_export, _context) {
  "use strict";

  var _decorator, createEval, AnimationBlend, AnimationBlendEval, AnimationBlendItem, CLASS_NAME_PREFIX_ANIM, BindableNumber, bindOr, VariableType, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, _class6, ccclass, serializable, AnimationBlendDirectItem, AnimationBlendDirect, AnimationBlendDirectEval;
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
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      AnimationBlendDirectItem = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "AnimationBlendDirectItem"), _dec(_class = (_class2 = /*#__PURE__*/function (_AnimationBlendItem) {
        _inheritsLoose(AnimationBlendDirectItem, _AnimationBlendItem);
        function AnimationBlendDirectItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AnimationBlendItem.call.apply(_AnimationBlendItem, [this].concat(args)) || this;
          _this.weight = _initializer && _initializer();
          return _this;
        }
        var _proto = AnimationBlendDirectItem.prototype;
        _proto.clone = function clone() {
          var that = new AnimationBlendDirectItem();
          this._copyTo(that);
          return that;
        };
        _proto._copyTo = function _copyTo(that) {
          _AnimationBlendItem.prototype._copyTo.call(this, that);
          that.weight = this.weight;
          return that;
        };
        return AnimationBlendDirectItem;
      }(AnimationBlendItem), (_initializer = _applyDecoratedInitializer(_class2.prototype, "weight", [serializable], function () {
        return new BindableNumber(0.0);
      })), _class2)) || _class);
      _export("AnimationBlendDirect", AnimationBlendDirect = (_dec2 = ccclass('cc.animation.AnimationBlendDirect'), _dec2(_class4 = (_class5 = (_class6 = /*#__PURE__*/function (_AnimationBlend) {
        _inheritsLoose(AnimationBlendDirect, _AnimationBlend);
        function AnimationBlendDirect() {
          var _this2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this2 = _AnimationBlend.call.apply(_AnimationBlend, [this].concat(args)) || this;
          _this2._items = _initializer2 && _initializer2();
          return _this2;
        }
        var _proto2 = AnimationBlendDirect.prototype;
        _proto2.clone = function clone() {
          var that = new AnimationBlendDirect();
          this.copyTo(that);
          that._items = this._items.map(function (item) {
            var _item$clone;
            return (_item$clone = item === null || item === void 0 ? void 0 : item.clone()) !== null && _item$clone !== void 0 ? _item$clone : null;
          });
          return that;
        };
        _proto2[createEval] = function (context, ignoreEmbeddedPlayers) {
          var myEval = new AnimationBlendDirectEval(context, ignoreEmbeddedPlayers, this, this._items, new Array(this._items.length).fill(0.0));
          for (var iItem = 0; iItem < this._items.length; ++iItem) {
            var item = this._items[iItem];
            var initialValue = bindOr(context, item.weight, VariableType.FLOAT, myEval.setInput, myEval, iItem);
            myEval.setInput(initialValue, iItem);
          }
          return myEval;
        };
        _createClass(AnimationBlendDirect, [{
          key: "items",
          get: function get() {
            return this._items;
          },
          set: function set(value) {
            this._items = Array.from(value);
          }
        }]);
        return AnimationBlendDirect;
      }(AnimationBlend), _class6.Item = AnimationBlendDirectItem, _class6), (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "_items", [serializable], function () {
        return [];
      })), _class5)) || _class4));
      AnimationBlendDirectEval = /*#__PURE__*/function (_AnimationBlendEval) {
        _inheritsLoose(AnimationBlendDirectEval, _AnimationBlendEval);
        function AnimationBlendDirectEval() {
          var _this3;
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          _this3 = _AnimationBlendEval.call.apply(_AnimationBlendEval, [this].concat(args)) || this;
          _this3.doEval();
          return _this3;
        }
        var _proto3 = AnimationBlendDirectEval.prototype;
        _proto3.eval = function _eval(weights, inputs) {
          var nChildren = weights.length;
          for (var iChild = 0; iChild < nChildren; ++iChild) {
            weights[iChild] = inputs[iChild];
          }
        };
        return AnimationBlendDirectEval;
      }(AnimationBlendEval);
    }
  };
});