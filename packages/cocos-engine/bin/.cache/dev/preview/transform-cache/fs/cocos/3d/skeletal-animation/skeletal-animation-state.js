System.register("q-bundled:///fs/cocos/3d/skeletal-animation/skeletal-animation-state.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../animation/animation-state.js", "./skeletal-animation-data-hub.js"], function (_export, _context) {
  "use strict";

  var JSB, Mat4, Quat, Vec3, cclegacy, AnimationState, SkelAnimDataHub, m4_1, m4_2, SkeletalAnimationState;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            http://www.cocos.com
                                                                                                                                                                                                           
                                                                                                                                                                                                            Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                            of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                            in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                            use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                            of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                            subject to the following conditions:
                                                                                                                                                                                                           
                                                                                                                                                                                                            The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                            all copies or substantial portions of the Software.
                                                                                                                                                                                                           
                                                                                                                                                                                                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                            THE SOFTWARE.
                                                                                                                                                                                                           */
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_animationAnimationStateJs) {
      AnimationState = _animationAnimationStateJs.AnimationState;
    }, function (_skeletalAnimationDataHubJs) {
      SkelAnimDataHub = _skeletalAnimationDataHubJs.SkelAnimDataHub;
    }],
    execute: function () {
      m4_1 = new Mat4();
      m4_2 = new Mat4();
      /**
       * @en The animation state for skeletal animations.
       * @zh 骨骼动画的动画状态控制对象。
       */
      _export("SkeletalAnimationState", SkeletalAnimationState = /*#__PURE__*/function (_AnimationState) {
        _inheritsLoose(SkeletalAnimationState, _AnimationState);
        function SkeletalAnimationState(clip, name) {
          var _this;
          if (name === void 0) {
            name = '';
          }
          _this = _AnimationState.call(this, clip, name) || this;
          _this._frames = 1;
          _this._bakedDuration = 0;
          _this._animInfo = null;
          _this._sockets = [];
          _this._animInfoMgr = void 0;
          _this._parent = null;
          _this._curvesInited = false;
          _this._animInfoMgr = cclegacy.director.root.dataPoolManager.jointAnimationInfo;
          return _this;
        }
        var _proto = SkeletalAnimationState.prototype;
        _proto.initialize = function initialize(root) {
          if (this._curveLoaded) {
            return;
          }
          this._parent = root.getComponent('cc.SkeletalAnimation');
          var baked = this._parent.useBakedAnimation;
          this._doNotCreateEval = baked;
          _AnimationState.prototype.initialize.call(this, root);
          this._curvesInited = !baked;
          var _SkelAnimDataHub$getO = SkelAnimDataHub.getOrExtract(this.clip),
            frames = _SkelAnimDataHub$getO.frames,
            samples = _SkelAnimDataHub$getO.samples;
          this._frames = frames - 1;
          this._animInfo = this._animInfoMgr.getData(root.uuid);
          this._bakedDuration = this._frames / samples; // last key
          this.setUseBaked(baked);
        };
        _proto.onPlay = function onPlay() {
          var _this2 = this;
          _AnimationState.prototype.onPlay.call(this);
          var baked = this._parent.useBakedAnimation;
          if (baked) {
            this._animInfoMgr.switchClip(this._animInfo, this.clip);
            var users = this._parent.getUsers();
            users.forEach(function (user) {
              user.uploadAnimation(_this2.clip);
            });
          }
        }

        /**
         * @internal This method only friends to `SkeletalAnimation`.
         */;
        _proto.setUseBaked = function setUseBaked(useBaked) {
          if (useBaked) {
            this._sampleCurves = this._sampleCurvesBaked;
            this.duration = this._bakedDuration;
          } else {
            this._sampleCurves = _AnimationState.prototype._sampleCurves;
            this.duration = this.clip.duration;
            if (!this._curvesInited) {
              this._curveLoaded = false;
              _AnimationState.prototype.initialize.call(this, this._targetNode);
              this._curvesInited = true;
            }
          }
        }

        /**
         * @en Rebuild animation curves and register the socket transforms per frame to the sockets. It will replace the internal sockets list.
         * @zh 为所有指定挂点更新动画曲线运算结果，并存储所有挂点的逐帧变换矩阵。这个方法会用传入的挂点更新取代内部挂点列表。
         * @param sockets @en The sockets need update @zh 需要重建的挂点列表
         * @returns void
         */;
        _proto.rebuildSocketCurves = function rebuildSocketCurves(sockets) {
          this._sockets.length = 0;
          if (!this._targetNode) {
            return;
          }
          var root = this._targetNode;
          for (var i = 0; i < sockets.length; ++i) {
            var socket = sockets[i];
            var targetNode = root.getChildByPath(socket.path);
            if (!socket.target) {
              continue;
            }
            var clipData = SkelAnimDataHub.getOrExtract(this.clip);
            var animPath = socket.path;
            var source = clipData.joints[animPath];
            var animNode = targetNode;
            var downstream = void 0;
            while (!source) {
              var idx = animPath.lastIndexOf('/');
              animPath = animPath.substring(0, idx);
              source = clipData.joints[animPath];
              if (animNode) {
                if (!downstream) {
                  downstream = Mat4.identity(m4_2);
                }
                Mat4.fromRTS(m4_1, animNode.rotation, animNode.position, animNode.scale);
                Mat4.multiply(downstream, m4_1, downstream);
                animNode = animNode.parent;
              }
              if (idx < 0) {
                break;
              }
            }
            var curveData = source && source.transforms;
            var frames = clipData.frames;
            var transforms = [];
            for (var f = 0; f < frames; f++) {
              var mat = void 0;
              if (curveData && downstream) {
                // curve & static two-way combination
                mat = Mat4.multiply(m4_1, curveData[f], downstream);
              } else if (curveData) {
                // there is a curve directly controlling the joint
                mat = curveData[f];
              } else if (downstream) {
                // fallback to default pose if no animation curve can be found upstream
                mat = downstream;
              } else {
                // bottom line: render the original mesh as-is
                mat = new Mat4();
              }
              var tfm = {
                pos: new Vec3(),
                rot: new Quat(),
                scale: new Vec3()
              };
              Mat4.toRTS(mat, tfm.rot, tfm.pos, tfm.scale);
              transforms.push(tfm);
            }
            this._sockets.push({
              target: socket.target,
              frames: transforms
            });
          }
        };
        _proto._sampleCurvesBaked = function _sampleCurvesBaked(time) {
          var ratio = time / this.duration;
          var info = this._animInfo;
          var clip = this.clip;

          // Ensure I'm the one on which the anim info is sampling.
          if (info.currentClip !== clip) {
            // If not, switch to me.
            this._animInfoMgr.switchClip(this._animInfo, clip);
            var users = this._parent.getUsers();
            users.forEach(function (user) {
              user.uploadAnimation(clip);
            });
            info.data[0] = -1; // reset frame index to -1. sampleCurves will calculate frame to 0.
          }

          var curFrame = ratio * this._frames + 0.5 | 0;
          if (curFrame === info.data[0]) {
            return;
          }
          info.data[0] = curFrame;
          info.dirty = true;
          if (JSB) {
            info.dirtyForJSB[0] = 1;
          }
          for (var i = 0; i < this._sockets.length; ++i) {
            var _this$_sockets$i = this._sockets[i],
              target = _this$_sockets$i.target,
              frames = _this$_sockets$i.frames;
            var _frames$curFrame = frames[curFrame],
              pos = _frames$curFrame.pos,
              rot = _frames$curFrame.rot,
              scale = _frames$curFrame.scale; // ratio guaranteed to be in [0, 1]
            target.setRTS(rot, pos, scale);
          }
        };
        return SkeletalAnimationState;
      }(AnimationState));
    }
  };
});