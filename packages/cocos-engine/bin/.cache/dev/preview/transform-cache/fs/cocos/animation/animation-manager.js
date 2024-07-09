System.register("q-bundled:///fs/cocos/animation/animation-manager.js", ["../core/data/decorators/index.js", "../core/index.js", "../game/director.js", "../3d/skeletal-animation/skeletal-animation-blending.js", "./skeletal-animation-utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, System, errorID, cclegacy, js, director, Director, LegacyBlendStateBuffer, deleteTransform, getTransform, getWorldMatrix, _class, _class2, AnimationManager;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      _export("AnimationManager", AnimationManager = ccclass(_class = (_class2 = /*#__PURE__*/function (_System) {
        _inheritsLoose(AnimationManager, _System);
        function AnimationManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _System.call.apply(_System, [this].concat(args)) || this;
          _this._anims = new js.array.MutableForwardIterator([]);
          _this._crossFades = new js.array.MutableForwardIterator([]);
          _this._delayEvents = [];
          _this._blendStateBuffer = new LegacyBlendStateBuffer();
          _this._sockets = [];
          return _this;
        }
        var _proto = AnimationManager.prototype;
        _proto.addCrossFade = function addCrossFade(crossFade) {
          var index = this._crossFades.array.indexOf(crossFade);
          if (index === -1) {
            this._crossFades.push(crossFade);
          }
        };
        _proto.removeCrossFade = function removeCrossFade(crossFade) {
          var index = this._crossFades.array.indexOf(crossFade);
          if (index >= 0) {
            this._crossFades.fastRemoveAt(index);
          } else {
            errorID(3907);
          }
        };
        _proto.update = function update(dt) {
          var _delayEvents = this._delayEvents,
            crossFadesIter = this._crossFades,
            _sockets = this._sockets;
          {
            // Update cross fades
            var crossFades = crossFadesIter.array;
            for (crossFadesIter.i = 0; crossFadesIter.i < crossFades.length; ++crossFadesIter.i) {
              var crossFade = crossFades[crossFadesIter.i];
              crossFade.update(dt);
            }
          }
          var iterator = this._anims;
          var array = iterator.array;
          for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
            var anim = array[iterator.i];
            if (!anim.isMotionless) {
              anim.update(dt);
            }
          }
          this._blendStateBuffer.apply();
          var stamp = director.getTotalFrames();
          for (var i = 0, l = _sockets.length; i < l; i++) {
            var _sockets$i = _sockets[i],
              target = _sockets$i.target,
              transform = _sockets$i.transform;
            target.matrix = getWorldMatrix(transform, stamp);
          }
          for (var _i = 0, _l = _delayEvents.length; _i < _l; _i++) {
            var event = _delayEvents[_i];
            event.fn.apply(event.thisArg, event.args);
          }
          _delayEvents.length = 0;
        };
        _proto.destruct = function destruct() {};
        _proto.addAnimation = function addAnimation(anim) {
          var index = this._anims.array.indexOf(anim);
          if (index === -1) {
            this._anims.push(anim);
          }
        };
        _proto.removeAnimation = function removeAnimation(anim) {
          var index = this._anims.array.indexOf(anim);
          if (index >= 0) {
            this._anims.fastRemoveAt(index);
          } else {
            errorID(3907);
          }
        };
        _proto.pushDelayEvent = function pushDelayEvent(fn, thisArg, args) {
          this._delayEvents.push({
            fn: fn,
            thisArg: thisArg,
            args: args
          });
        };
        _proto.addSockets = function addSockets(root, sockets) {
          var _this2 = this;
          var _loop = function _loop() {
            var socket = sockets[i];
            if (_this2._sockets.find(function (s) {
              return s.target === socket.target;
            })) {
              return 1; // continue
            }
            var targetNode = root.getChildByPath(socket.path);
            var transform = socket.target && targetNode && getTransform(targetNode, root);
            if (transform) {
              _this2._sockets.push({
                target: socket.target,
                transform: transform
              });
            }
          };
          for (var i = 0; i < sockets.length; ++i) {
            if (_loop()) continue;
          }
        };
        _proto.removeSockets = function removeSockets(root, sockets) {
          for (var i = 0; i < sockets.length; ++i) {
            var socketToRemove = sockets[i];
            for (var j = 0; j < this._sockets.length; ++j) {
              var socket = this._sockets[j];
              if (socket.target === socketToRemove.target) {
                deleteTransform(socket.transform.node);
                this._sockets[j] = this._sockets[this._sockets.length - 1];
                this._sockets.length--;
                break;
              }
            }
          }
        };
        _createClass(AnimationManager, [{
          key: "blendState",
          get: function get() {
            return this._blendStateBuffer;
          }
        }]);
        return AnimationManager;
      }(System), _class2.ID = 'animation', _class2)) || _class);
      director.on(Director.EVENT_INIT, function () {
        var animationManager = new AnimationManager();
        director.registerSystem(AnimationManager.ID, animationManager, System.Priority.HIGH);
      });
      cclegacy.AnimationManager = AnimationManager;
    }
  };
});