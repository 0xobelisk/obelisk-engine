System.register("q-bundled:///fs/cocos/animation/marionette/animation-graph-variant.js", ["../../core/data/decorators/index.js", "../../core/utils/array.js", "../define.js", "./animation-graph.js", "./animation-graph-like.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, serializable, type, removeIf, CLASS_NAME_PREFIX_ANIM, AnimationGraph, AnimationGraphLike, _Symbol$iterator, _dec, _class, _class2, _initializer, _initializer2, _dec2, _dec3, _class4, _class5, _initializer3, _initializer4, _dec4, _class7, _class8, _initializer5, ClipOverrideEntry, AnimationGraphVariant, ClipOverrideMap;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      ClipOverrideEntry = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "ClipOverrideEntry"), _dec(_class = (_class2 = function ClipOverrideEntry() {
        this.original = _initializer && _initializer();
        this.substitution = _initializer2 && _initializer2();
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "original", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "substitution", [serializable], function () {
        return null;
      })), _class2)) || _class);
      _export("AnimationGraphVariant", AnimationGraphVariant = (_dec2 = ccclass(CLASS_NAME_PREFIX_ANIM + "AnimationGraphVariant"), _dec3 = type(AnimationGraph), _dec2(_class4 = (_class5 = /*#__PURE__*/function (_AnimationGraphLike) {
        _inheritsLoose(AnimationGraphVariant, _AnimationGraphLike);
        function AnimationGraphVariant() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AnimationGraphLike.call.apply(_AnimationGraphLike, [this].concat(args)) || this;
          _this._graph = _initializer3 && _initializer3();
          _this._clipOverrides = _initializer4 && _initializer4();
          return _this;
        }
        _createClass(AnimationGraphVariant, [{
          key: "original",
          get: function get() {
            return this._graph;
          },
          set: function set(value) {
            this._graph = value;
          }
        }, {
          key: "clipOverrides",
          get: function get() {
            return this._clipOverrides;
          }
        }]);
        return AnimationGraphVariant;
      }(AnimationGraphLike), (_applyDecoratedDescriptor(_class5.prototype, "original", [_dec3, editable], Object.getOwnPropertyDescriptor(_class5.prototype, "original"), _class5.prototype), _initializer3 = _applyDecoratedInitializer(_class5.prototype, "_graph", [serializable], function () {
        return null;
      }), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "_clipOverrides", [serializable], function () {
        return new ClipOverrideMap();
      })), _class5)) || _class4));
      ClipOverrideMap = (_dec4 = ccclass(CLASS_NAME_PREFIX_ANIM + "ClipOverrideMap"), _dec4(_class7 = (_class8 = (_Symbol$iterator = Symbol.iterator, /*#__PURE__*/function () {
        function ClipOverrideMap() {
          this._entries = _initializer5 && _initializer5();
        }
        var _proto = ClipOverrideMap.prototype;
        _proto[_Symbol$iterator] = function () {
          return this._entries[Symbol.iterator]();
        };
        _proto.has = function has(original) {
          return !!this._entries.find(function (_ref) {
            var o = _ref.original;
            return o === original;
          });
        };
        _proto.get = function get(original) {
          var entry = this._entries.find(function (_ref2) {
            var o = _ref2.original;
            return o === original;
          });
          return entry === null || entry === void 0 ? void 0 : entry.substitution;
        };
        _proto.set = function set(original, substitution) {
          var entry = this._entries.find(function (_ref3) {
            var o = _ref3.original;
            return o === original;
          });
          if (entry) {
            entry.substitution = substitution;
          } else {
            var newEntry = new ClipOverrideEntry();
            newEntry.original = original;
            newEntry.substitution = substitution;
            this._entries.push(newEntry);
          }
        };
        _proto["delete"] = function _delete(original) {
          removeIf(this._entries, function (_ref4) {
            var o = _ref4.original;
            return o === original;
          });
        };
        _proto.clear = function clear() {
          this._entries.length = 0;
        };
        _createClass(ClipOverrideMap, [{
          key: "size",
          get: function get() {
            return this._entries.length;
          }
        }]);
        return ClipOverrideMap;
      }()), (_initializer5 = _applyDecoratedInitializer(_class8.prototype, "_entries", [serializable], function () {
        return [];
      })), _class8)) || _class7);
    }
  };
});