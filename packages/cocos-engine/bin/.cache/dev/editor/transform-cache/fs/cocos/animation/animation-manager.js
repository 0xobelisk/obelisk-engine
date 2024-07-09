System.register("q-bundled:///fs/cocos/animation/animation-manager.js", ["../core/data/decorators/index.js", "../core/index.js", "../game/director.js", "../3d/skeletal-animation/skeletal-animation-blending.js", "./skeletal-animation-utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, System, errorID, cclegacy, js, director, Director, LegacyBlendStateBuffer, deleteTransform, getTransform, getWorldMatrix, _class, _class2, AnimationManager;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_coreIndexJs) {
      System = _coreIndexJs.System;
      errorID = _coreIndexJs.errorID;
      cclegacy = _coreIndexJs.cclegacy;
      js = _coreIndexJs.js;
    }, function (_gameDirectorJs) {
      director = _gameDirectorJs.director;
      Director = _gameDirectorJs.Director;
    }, function (_dSkeletalAnimationSkeletalAnimationBlendingJs) {
      LegacyBlendStateBuffer = _dSkeletalAnimationSkeletalAnimationBlendingJs.LegacyBlendStateBuffer;
    }, function (_skeletalAnimationUtilsJs) {
      deleteTransform = _skeletalAnimationUtilsJs.deleteTransform;
      getTransform = _skeletalAnimationUtilsJs.getTransform;
      getWorldMatrix = _skeletalAnimationUtilsJs.getWorldMatrix;
    }],
    execute: function () {
      _export("AnimationManager", AnimationManager = ccclass(_class = (_class2 = class AnimationManager extends System {
        constructor(...args) {
          super(...args);
          this._anims = new js.array.MutableForwardIterator([]);
          this._crossFades = new js.array.MutableForwardIterator([]);
          this._delayEvents = [];
          this._blendStateBuffer = new LegacyBlendStateBuffer();
          this._sockets = [];
        }
        get blendState() {
          return this._blendStateBuffer;
        }
        addCrossFade(crossFade) {
          const index = this._crossFades.array.indexOf(crossFade);
          if (index === -1) {
            this._crossFades.push(crossFade);
          }
        }
        removeCrossFade(crossFade) {
          const index = this._crossFades.array.indexOf(crossFade);
          if (index >= 0) {
            this._crossFades.fastRemoveAt(index);
          } else {
            errorID(3907);
          }
        }
        update(dt) {
          const {
            _delayEvents,
            _crossFades: crossFadesIter,
            _sockets
          } = this;
          {
            // Update cross fades
            const crossFades = crossFadesIter.array;
            for (crossFadesIter.i = 0; crossFadesIter.i < crossFades.length; ++crossFadesIter.i) {
              const crossFade = crossFades[crossFadesIter.i];
              crossFade.update(dt);
            }
          }
          const iterator = this._anims;
          const array = iterator.array;
          for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
            const anim = array[iterator.i];
            if (!anim.isMotionless) {
              anim.update(dt);
            }
          }
          this._blendStateBuffer.apply();
          const stamp = director.getTotalFrames();
          for (let i = 0, l = _sockets.length; i < l; i++) {
            const {
              target,
              transform
            } = _sockets[i];
            target.matrix = getWorldMatrix(transform, stamp);
          }
          for (let i = 0, l = _delayEvents.length; i < l; i++) {
            const event = _delayEvents[i];
            event.fn.apply(event.thisArg, event.args);
          }
          _delayEvents.length = 0;
        }
        destruct() {}
        addAnimation(anim) {
          const index = this._anims.array.indexOf(anim);
          if (index === -1) {
            this._anims.push(anim);
          }
        }
        removeAnimation(anim) {
          const index = this._anims.array.indexOf(anim);
          if (index >= 0) {
            this._anims.fastRemoveAt(index);
          } else {
            errorID(3907);
          }
        }
        pushDelayEvent(fn, thisArg, args) {
          this._delayEvents.push({
            fn,
            thisArg,
            args
          });
        }
        addSockets(root, sockets) {
          for (let i = 0; i < sockets.length; ++i) {
            const socket = sockets[i];
            if (this._sockets.find(s => s.target === socket.target)) {
              continue;
            }
            const targetNode = root.getChildByPath(socket.path);
            const transform = socket.target && targetNode && getTransform(targetNode, root);
            if (transform) {
              this._sockets.push({
                target: socket.target,
                transform
              });
            }
          }
        }
        removeSockets(root, sockets) {
          for (let i = 0; i < sockets.length; ++i) {
            const socketToRemove = sockets[i];
            for (let j = 0; j < this._sockets.length; ++j) {
              const socket = this._sockets[j];
              if (socket.target === socketToRemove.target) {
                deleteTransform(socket.transform.node);
                this._sockets[j] = this._sockets[this._sockets.length - 1];
                this._sockets.length--;
                break;
              }
            }
          }
        }
      }, _class2.ID = 'animation', _class2)) || _class);
      director.on(Director.EVENT_INIT, () => {
        const animationManager = new AnimationManager();
        director.registerSystem(AnimationManager.ID, animationManager, System.Priority.HIGH);
      });
      cclegacy.AnimationManager = AnimationManager;
    }
  };
});