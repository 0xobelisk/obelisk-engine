System.register("q-bundled:///fs/cocos/animation/tracks/vector-track.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./track.js", "./utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, RealCurve, Vec2, Vec3, Vec4, CLASS_NAME_PREFIX_ANIM, createEvalSymbol, Channel, Track, maskIfEmpty, _dec, _class, _class2, _initializer, _initializer2, CHANNEL_NAMES, VectorTrack, Vec2TrackEval, Vec3TrackEval, Vec4TrackEval;
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
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
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
      CHANNEL_NAMES = ['X', 'Y', 'Z', 'W'];
      /**
       * @en
       * A vector track animates a vector(in 2, 3, 4 dimension) attribute of target.
       * @zh
       * 向量轨道描述目标上某个（二、三、四维）向量属性的动画。
       */
      _export("VectorTrack", VectorTrack = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "VectorTrack"), _dec(_class = (_class2 = /*#__PURE__*/function (_Track) {
        _inheritsLoose(VectorTrack, _Track);
        function VectorTrack() {
          var _this;
          _this = _Track.call(this) || this;
          _this._channels = _initializer && _initializer();
          _this._nComponents = _initializer2 && _initializer2();
          _this._channels = new Array(4);
          for (var i = 0; i < _this._channels.length; ++i) {
            var channel = new Channel(new RealCurve());
            channel.name = CHANNEL_NAMES[i];
            _this._channels[i] = channel;
          }
          return _this;
        }

        /**
         * @en Gets or sets the count of components(dimension) available while evaluating of this track.
         * @zh 获取或设置此轨道在求值时有效的分量数（维度）。
         */
        var _proto = VectorTrack.prototype;
        /**
         * @en The four channel of the track.
         * @zh 返回此轨道的四条通道。
         * @returns An readonly four length array in which
         * the element at n denotes the channel of n-th vector component.
         */
        _proto.channels = function channels() {
          return this._channels;
        }

        /**
         * @internal
         */;
        _proto[createEvalSymbol] = function () {
          switch (this._nComponents) {
            default:
            case 2:
              return new Vec2TrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve));
            case 3:
              return new Vec3TrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve), maskIfEmpty(this._channels[2].curve));
            case 4:
              return new Vec4TrackEval(maskIfEmpty(this._channels[0].curve), maskIfEmpty(this._channels[1].curve), maskIfEmpty(this._channels[2].curve), maskIfEmpty(this._channels[3].curve));
          }
        };
        _createClass(VectorTrack, [{
          key: "componentsCount",
          get: function get() {
            return this._nComponents;
          },
          set: function set(value) {
            this._nComponents = value;
          }
        }]);
        return VectorTrack;
      }(Track), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_channels", [serializable], null), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_nComponents", [serializable], function () {
        return 4;
      })), _class2)) || _class));
      _export("Vec2TrackEval", Vec2TrackEval = /*#__PURE__*/function () {
        function Vec2TrackEval(_x, _y) {
          this._result = new Vec2();
          this._x = _x;
          this._y = _y;
        }
        var _proto2 = Vec2TrackEval.prototype;
        _proto2.evaluate = function evaluate(time, defaultValue) {
          if (defaultValue) {
            Vec2.copy(this._result, defaultValue);
          }
          if (this._x) {
            this._result.x = this._x.evaluate(time);
          }
          if (this._y) {
            this._result.y = this._y.evaluate(time);
          }
          return this._result;
        };
        _createClass(Vec2TrackEval, [{
          key: "requiresDefault",
          get: function get() {
            return !this._x || !this._y;
          }
        }]);
        return Vec2TrackEval;
      }());
      _export("Vec3TrackEval", Vec3TrackEval = /*#__PURE__*/function () {
        function Vec3TrackEval(_x, _y, _z) {
          this._result = new Vec3();
          this._x = _x;
          this._y = _y;
          this._z = _z;
        }
        var _proto3 = Vec3TrackEval.prototype;
        _proto3.evaluate = function evaluate(time, defaultValue) {
          var _x = this._x,
            _y = this._y,
            _z = this._z,
            _result = this._result;
          if (defaultValue) {
            Vec3.copy(_result, defaultValue);
          }
          if (_x) {
            _result.x = _x.evaluate(time);
          }
          if (_y) {
            _result.y = _y.evaluate(time);
          }
          if (_z) {
            _result.z = _z.evaluate(time);
          }
          return _result;
        };
        _createClass(Vec3TrackEval, [{
          key: "requiresDefault",
          get: function get() {
            return !this._x || !this._y || !this._z;
          }
        }]);
        return Vec3TrackEval;
      }());
      _export("Vec4TrackEval", Vec4TrackEval = /*#__PURE__*/function () {
        function Vec4TrackEval(_x, _y, _z, _w) {
          this._result = new Vec4();
          this._x = _x;
          this._y = _y;
          this._z = _z;
          this._w = _w;
        }
        var _proto4 = Vec4TrackEval.prototype;
        _proto4.evaluate = function evaluate(time, defaultValue) {
          if (defaultValue) {
            Vec4.copy(this._result, defaultValue);
          }
          if (this._x) {
            this._result.x = this._x.evaluate(time);
          }
          if (this._y) {
            this._result.y = this._y.evaluate(time);
          }
          if (this._z) {
            this._result.z = this._z.evaluate(time);
          }
          if (this._w) {
            this._result.w = this._w.evaluate(time);
          }
          return this._result;
        };
        _createClass(Vec4TrackEval, [{
          key: "requiresDefault",
          get: function get() {
            return !this._x || !this._y || !this._z || !this._w;
          }
        }]);
        return Vec4TrackEval;
      }());
    }
  };
});