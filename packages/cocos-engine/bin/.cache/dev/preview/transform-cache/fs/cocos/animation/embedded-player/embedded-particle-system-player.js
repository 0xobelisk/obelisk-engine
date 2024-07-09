System.register("q-bundled:///fs/cocos/animation/embedded-player/embedded-particle-system-player.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./embedded-player.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, warn, js, CLASS_NAME_PREFIX_ANIM, EmbeddedPlayableState, EmbeddedPlayable, _dec, _class, _class2, _initializer, EmbeddedParticleSystemPlayable, EmbeddedParticleSystemPlayableState;
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
      warn = _coreIndexJs.warn;
      js = _coreIndexJs.js;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_embeddedPlayerJs) {
      EmbeddedPlayableState = _embeddedPlayerJs.EmbeddedPlayableState;
      EmbeddedPlayable = _embeddedPlayerJs.EmbeddedPlayable;
    }],
    execute: function () {
      /**
       * @en
       * The embedded particle system playable. The players play particle system on a embedded player.
       * @zh
       * 粒子系统子区域播放器。此播放器在子区域上播放粒子系统。
       */
      _export("EmbeddedParticleSystemPlayable", EmbeddedParticleSystemPlayable = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "EmbeddedParticleSystemPlayable"), _dec(_class = (_class2 = /*#__PURE__*/function (_EmbeddedPlayable) {
        _inheritsLoose(EmbeddedParticleSystemPlayable, _EmbeddedPlayable);
        function EmbeddedParticleSystemPlayable() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EmbeddedPlayable.call.apply(_EmbeddedPlayable, [this].concat(args)) || this;
          /**
           * @en
           * Path to the node where particle system inhabits, relative from animation context root.
           * @zh
           * 粒子系统所在的结点路径，相对于动画上下文的根节点。
           */
          _this.path = _initializer && _initializer();
          return _this;
        }
        var _proto = EmbeddedParticleSystemPlayable.prototype;
        _proto.instantiate = function instantiate(root) {
          var node = root.getChildByPath(this.path);
          if (!node) {
            warn("Hierarchy path " + this.path + " does not exists.");
            return null;
          }
          // TODO: we shouldn't wanna know the name of `ParticleSystem` indeed.
          var ParticleSystemConstructor = js.getClassByName("cc.ParticleSystem");
          if (!ParticleSystemConstructor) {
            warn("Particle system is required for embedded particle system player.");
            return null;
          }
          var particleSystem = node.getComponent(ParticleSystemConstructor);
          if (!particleSystem) {
            warn(this.path + " does not includes a particle system component.");
            return null;
          }
          return new EmbeddedParticleSystemPlayableState(particleSystem);
        };
        return EmbeddedParticleSystemPlayable;
      }(EmbeddedPlayable), (_initializer = _applyDecoratedInitializer(_class2.prototype, "path", [serializable], function () {
        return '';
      })), _class2)) || _class));
      EmbeddedParticleSystemPlayableState = /*#__PURE__*/function (_EmbeddedPlayableStat) {
        _inheritsLoose(EmbeddedParticleSystemPlayableState, _EmbeddedPlayableStat);
        function EmbeddedParticleSystemPlayableState(particleSystem) {
          var _this2;
          _this2 = _EmbeddedPlayableStat.call(this, false) || this;
          _this2._particleSystem = void 0;
          _this2._particleSystem = particleSystem;
          return _this2;
        }
        var _proto2 = EmbeddedParticleSystemPlayableState.prototype;
        _proto2.destroy = function destroy() {
          // DO NOTHING
        }

        /**
         * Plays the particle system from the beginning no matter current time.
         */;
        _proto2.play = function play() {
          this._particleSystem.play();
        }

        /**
         * Pause the particle system no matter current time.
         */;
        _proto2.pause = function pause() {
          this._particleSystem.stopEmitting();
        }

        /**
         * Stops the particle system.
         */;
        _proto2.stop = function stop() {
          this._particleSystem.stopEmitting();
        }

        /**
         * Sets the speed of the particle system.
         * @param speed The speed.
         */;
        _proto2.setSpeed = function setSpeed(speed) {
          this._particleSystem.simulationSpeed = speed;
        };
        return EmbeddedParticleSystemPlayableState;
      }(EmbeddedPlayableState);
    }
  };
});