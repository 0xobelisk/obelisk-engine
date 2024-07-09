System.register("q-bundled:///fs/cocos/animation/tracks/array-track.js", ["../../core/index.js", "../define.js", "./track.js"], function (_export, _context) {
  "use strict";

  var _decorator, RealCurve, CLASS_NAME_PREFIX_ANIM, createEvalSymbol, Channel, Track, _dec, _class, _class2, _initializer, ccclass, serializable, RealArrayTrack, RealArrayTrackEval;
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
      RealCurve = _coreIndexJs.RealCurve;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
      createEvalSymbol = _defineJs.createEvalSymbol;
    }, function (_trackJs) {
      Channel = _trackJs.Channel;
      Track = _trackJs.Track;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      /**
       * @en
       * A real array track animates a real array attribute of target(such as morph weights of mesh renderer).
       * Every element in the array is corresponding to a real channel.
       * @zh
       * 实数数组轨道描述目标上某个实数数组属性（例如网格渲染器的形变权重）的动画。
       * 数组中的每个元素都对应一条实数通道。
       */
      _export("RealArrayTrack", RealArrayTrack = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "RealArrayTrack"), _dec(_class = (_class2 = /*#__PURE__*/function (_Track) {
        _inheritsLoose(RealArrayTrack, _Track);
        function RealArrayTrack() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Track.call.apply(_Track, [this].concat(args)) || this;
          _this._channels = _initializer && _initializer();
          return _this;
        }
        var _proto = RealArrayTrack.prototype;
        /**
         * @en The channels of the track.
         * @zh 返回此轨道的所有通道的数组。
         */
        _proto.channels = function channels() {
          return this._channels;
        }

        /**
         * @internal
         */;
        _proto[createEvalSymbol] = function () {
          return new RealArrayTrackEval(this._channels.map(function (_ref) {
            var curve = _ref.curve;
            return curve;
          }));
        };
        _createClass(RealArrayTrack, [{
          key: "elementCount",
          get:
          /**
           * @en The number of elements in the array which this track produces.
           * If you increased the count, there will be new empty real channels appended.
           * Otherwise if you decreased the count, the last specified number channels would be removed.
           * @zh 此轨道产生的数组元素的数量。
           * 当你增加数量时，会增加新的空实数通道；当你减少数量时，最后几个指定数量的通道会被移除。
           */
          function get() {
            return this._channels.length;
          },
          set: function set(value) {
            var channels = this._channels;
            var nChannels = channels.length;
            if (value < nChannels) {
              this._channels.splice(value);
            } else if (value > nChannels) {
              var _this$_channels;
              (_this$_channels = this._channels).push.apply(_this$_channels, Array.from({
                length: value - nChannels
              }, function () {
                return new Channel(new RealCurve());
              }));
            }
          }
        }]);
        return RealArrayTrack;
      }(Track), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_channels", [serializable], function () {
        return [];
      })), _class2)) || _class));
      _export("RealArrayTrackEval", RealArrayTrackEval = /*#__PURE__*/function () {
        function RealArrayTrackEval(_curves) {
          this._curves = _curves;
          this._result = new Array(_curves.length).fill(0.0);
        }
        var _proto2 = RealArrayTrackEval.prototype;
        _proto2.evaluate = function evaluate(time) {
          var result = this._result;
          var nElements = result.length;
          for (var iElement = 0; iElement < nElements; ++iElement) {
            result[iElement] = this._curves[iElement].evaluate(time);
          }
          return this._result;
        };
        _createClass(RealArrayTrackEval, [{
          key: "requiresDefault",
          get: function get() {
            return false;
          }
        }]);
        return RealArrayTrackEval;
      }());
    }
  };
});