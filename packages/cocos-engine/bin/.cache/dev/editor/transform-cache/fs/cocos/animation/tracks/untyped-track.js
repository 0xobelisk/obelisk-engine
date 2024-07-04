System.register("q-bundled:///fs/cocos/animation/tracks/untyped-track.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./color-track.js", "./size-track.js", "./track.js", "./vector-track.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, RealCurve, Color, Size, Vec2, Vec3, Vec4, getError, CLASS_NAME_PREFIX_ANIM, createEvalSymbol, ColorTrack, ColorTrackEval, SizeTrackEval, Channel, Track, Vec2TrackEval, Vec3TrackEval, Vec4TrackEval, VectorTrack, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, UntypedTrackChannel, UntypedTrack;
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
      Size = _coreIndexJs.Size;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
      getError = _coreIndexJs.getError;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
      createEvalSymbol = _defineJs.createEvalSymbol;
    }, function (_colorTrackJs) {
      ColorTrack = _colorTrackJs.ColorTrack;
      ColorTrackEval = _colorTrackJs.ColorTrackEval;
    }, function (_sizeTrackJs) {
      SizeTrackEval = _sizeTrackJs.SizeTrackEval;
    }, function (_trackJs) {
      Channel = _trackJs.Channel;
      Track = _trackJs.Track;
    }, function (_vectorTrackJs) {
      Vec2TrackEval = _vectorTrackJs.Vec2TrackEval;
      Vec3TrackEval = _vectorTrackJs.Vec3TrackEval;
      Vec4TrackEval = _vectorTrackJs.Vec4TrackEval;
      VectorTrack = _vectorTrackJs.VectorTrack;
    }],
    execute: function () {
      UntypedTrackChannel = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}UntypedTrackChannel`), _dec(_class = (_class2 = class UntypedTrackChannel extends Channel {
        constructor() {
          super(new RealCurve());
          this.property = _initializer && _initializer();
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "property", [serializable], function () {
        return '';
      })), _class2)) || _class);
      _export("UntypedTrack", UntypedTrack = (_dec2 = ccclass(`${CLASS_NAME_PREFIX_ANIM}UntypedTrack`), _dec2(_class4 = (_class5 = class UntypedTrack extends Track {
        constructor(...args) {
          super(...args);
          this._channels = _initializer2 && _initializer2();
        }
        channels() {
          return this._channels;
        }
        [createEvalSymbol]() {
          throw new Error(`UntypedTrack should be handled specially. Please file an issue.`);
        }

        /**
         * @internal
         */
        createLegacyEval(hintValue) {
          const trySearchCurve = property => {
            var _this$_channels$find;
            return (_this$_channels$find = this._channels.find(channel => channel.property === property)) === null || _this$_channels$find === void 0 ? void 0 : _this$_channels$find.curve;
          };
          switch (true) {
            default:
              throw new Error(getError(3931));
            case hintValue instanceof Vec2:
              return new Vec2TrackEval(trySearchCurve('x'), trySearchCurve('y'));
            case hintValue instanceof Vec3:
              return new Vec3TrackEval(trySearchCurve('x'), trySearchCurve('y'), trySearchCurve('z'));
            case hintValue instanceof Vec4:
              return new Vec4TrackEval(trySearchCurve('x'), trySearchCurve('y'), trySearchCurve('z'), trySearchCurve('w'));
            case hintValue instanceof Color:
              // TODO: what if x, y, z, w?
              return new ColorTrackEval(trySearchCurve('r'), trySearchCurve('g'), trySearchCurve('b'), trySearchCurve('a'));
            case hintValue instanceof Size:
              return new SizeTrackEval(trySearchCurve('width'), trySearchCurve('height'));
          }
        }
        addChannel(property) {
          const channel = new UntypedTrackChannel();
          channel.property = property;
          this._channels.push(channel);
          return channel;
        }
        upgrade(refine) {
          const trySearchChannel = (property, outChannel) => {
            const untypedChannel = this.channels().find(channel => channel.property === property);
            if (untypedChannel) {
              outChannel.name = untypedChannel.name;
              outChannel.curve.assignSorted(Array.from(untypedChannel.curve.times()), Array.from(untypedChannel.curve.values()));
            }
          };
          const kind = refine(this.path, this.proxy);
          switch (kind) {
            default:
              break;
            case 'vec2':
            case 'vec3':
            case 'vec4':
              {
                const track = new VectorTrack();
                track.path = this.path;
                track.proxy = this.proxy;
                track.componentsCount = kind === 'vec2' ? 2 : kind === 'vec3' ? 3 : 4;
                const [x, y, z, w] = track.channels();
                switch (kind) {
                  case 'vec4':
                    trySearchChannel('w', w);
                  // fall through
                  case 'vec3':
                    trySearchChannel('z', z);
                  // fall through
                  default:
                  case 'vec2':
                    trySearchChannel('x', x);
                    trySearchChannel('y', y);
                }
                return track;
              }
            case 'color':
              {
                const track = new ColorTrack();
                const [r, g, b, a] = track.channels();
                trySearchChannel('r', r);
                trySearchChannel('g', g);
                trySearchChannel('b', b);
                trySearchChannel('a', a);
                // TODO: we need float-int conversion if xyzw
                trySearchChannel('x', r);
                trySearchChannel('y', g);
                trySearchChannel('z', b);
                trySearchChannel('w', a);
                return track;
              }
            case 'size':
              break;
          }
          return null;
        }
      }, (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "_channels", [serializable], function () {
        return [];
      })), _class5)) || _class4));
    }
  };
});