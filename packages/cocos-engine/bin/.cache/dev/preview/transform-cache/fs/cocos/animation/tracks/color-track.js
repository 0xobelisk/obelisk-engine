System.register("q-bundled:///fs/cocos/animation/tracks/color-track.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./track.js", "./utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, RealCurve, Color, CLASS_NAME_PREFIX_ANIM, createEvalSymbol, Channel, Track, maskIfEmpty, _dec, _class, _class2, _initializer, CHANNEL_NAMES, ColorTrack, ColorTrackEval;
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
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreIndexJs) {
      RealCurve = _coreIndexJs.RealCurve;
      Color = _coreIndexJs.Color;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
      createEvalSymbol = _defineJs.createEvalSymbol;
    }, function (_trackJs) {
      Channel = _trackJs.Channel;
      Track = _trackJs.Track;
    }, function (_utilsJs) {
      maskIfEmpty = _utilsJs.maskIfEmpty;
    }],
    execute: function () {
      CHANNEL_NAMES = ['Red', 'Green', 'Blue', 'Alpha'];
      /**
       * @en
       * A color track animates a color attribute of target.
       * @zh
       * 颜色轨道描述目标上某个颜色属性的动画。
       */
      _export("ColorTrack", ColorTrack = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "ColorTrack"), _dec(_class = (_class2 = /*#__PURE__*/function (_Track) {
        _inheritsLoose(ColorTrack, _Track);
        function ColorTrack() {
          var _this;
          _this = _Track.call(this) || this;
          _this._channels = _initializer && _initializer();
          _this._channels = new Array(4);
          for (var i = 0; i < _this._channels.length; ++i) {
            var channel = new Channel(new RealCurve());
            channel.name = CHANNEL_NAMES[i];
            _this._channels[i] = channel;
          }
          return _this;
        }

        /**
         * @en The four channel of the track.
         * @zh 返回此轨道的四条通道。
         * @returns An readonly four length array in which
         * the element at n denotes the channel of n-th(in order of RGBA) color component(in form of integer within 0-255).
         */
        var _proto = ColorTrack.prototype;
        _proto.channels = function channels() {
          return this._channels;
        }

        /**
         * @internal
         */;
        _proto[createEvalSymbol] = function () {
          return new ColorTrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve), maskIfEmpty(this._channels[2].curve), maskIfEmpty(this._channels[3].curve));
        };
        return ColorTrack;
      }(Track), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_channels", [serializable], null)), _class2)) || _class));
      _export("ColorTrackEval", ColorTrackEval = /*#__PURE__*/function () {
        function ColorTrackEval(_x, _y, _z, _w) {
          this._result = new Color();
          this._x = _x;
          this._y = _y;
          this._z = _z;
          this._w = _w;
        }
        var _proto2 = ColorTrackEval.prototype;
        _proto2.evaluate = function evaluate(time, defaultValue) {
          if (defaultValue) {
            Color.copy(this._result, defaultValue);
          }
          if (this._x) {
            this._result.r = this._x.evaluate(time);
          }
          if (this._y) {
            this._result.g = this._y.evaluate(time);
          }
          if (this._z) {
            this._result.b = this._z.evaluate(time);
          }
          if (this._w) {
            this._result.a = this._w.evaluate(time);
          }
          return this._result;
        };
        _createClass(ColorTrackEval, [{
          key: "requiresDefault",
          get: function get() {
            return !this._x || !this._y || !this._z || !this._w;
          }
        }]);
        return ColorTrackEval;
      }());
    }
  };
});