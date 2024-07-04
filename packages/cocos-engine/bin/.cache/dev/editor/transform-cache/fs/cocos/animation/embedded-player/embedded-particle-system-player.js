System.register("q-bundled:///fs/cocos/animation/embedded-player/embedded-particle-system-player.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../define.js", "./embedded-player.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, warn, js, CLASS_NAME_PREFIX_ANIM, EmbeddedPlayableState, EmbeddedPlayable, EmbeddedParticleSystemPlayableState, _dec, _class, _class2, _initializer, EmbeddedParticleSystemPlayable;
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
      _export("EmbeddedParticleSystemPlayable", EmbeddedParticleSystemPlayable = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}EmbeddedParticleSystemPlayable`), _dec(_class = (_class2 = class EmbeddedParticleSystemPlayable extends EmbeddedPlayable {
        constructor(...args) {
          super(...args);
          /**
           * @en
           * Path to the node where particle system inhabits, relative from animation context root.
           * @zh
           * 粒子系统所在的结点路径，相对于动画上下文的根节点。
           */
          this.path = _initializer && _initializer();
        }
        instantiate(root) {
          const node = root.getChildByPath(this.path);
          if (!node) {
            warn(`Hierarchy path ${this.path} does not exists.`);
            return null;
          }
          // TODO: we shouldn't wanna know the name of `ParticleSystem` indeed.
          const ParticleSystemConstructor = js.getClassByName(`cc.ParticleSystem`);
          if (!ParticleSystemConstructor) {
            warn(`Particle system is required for embedded particle system player.`);
            return null;
          }
          const particleSystem = node.getComponent(ParticleSystemConstructor);
          if (!particleSystem) {
            warn(`${this.path} does not includes a particle system component.`);
            return null;
          }
          return new EmbeddedParticleSystemPlayableState(particleSystem);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "path", [serializable], function () {
        return '';
      })), _class2)) || _class));
      EmbeddedParticleSystemPlayableState = class EmbeddedParticleSystemPlayableState extends EmbeddedPlayableState {
        constructor(particleSystem) {
          super(false);
          this._particleSystem = void 0;
          this._particleSystem = particleSystem;
        }
        destroy() {
          // DO NOTHING
        }

        /**
         * Plays the particle system from the beginning no matter current time.
         */
        play() {
          this._particleSystem.play();
        }

        /**
         * Pause the particle system no matter current time.
         */
        pause() {
          this._particleSystem.stopEmitting();
        }

        /**
         * Stops the particle system.
         */
        stop() {
          this._particleSystem.stopEmitting();
        }

        /**
         * Sets the speed of the particle system.
         * @param speed The speed.
         */
        setSpeed(speed) {
          this._particleSystem.simulationSpeed = speed;
        }
      };
    }
  };
});