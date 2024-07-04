System.register("q-bundled:///fs/cocos/animation/animation-clip.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../asset/assets/asset.js", "../core/index.js", "../3d/skeletal-animation/skeletal-animation-data-hub.js", "./types.js", "../scene-graph/node.js", "./legacy-clip-data.js", "./internal-symbols.js", "./tracks/track.js", "./define.js", "./tracks/untyped-track.js", "./tracks/object-track.js", "./exotic-animation/exotic-animation.js", "./global-animation-manager.js", "./auxiliary-curve-entry.js", "../core/utils/array.js", "./event/event-emitter.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, DEBUG, Asset, errorID, warnID, cclegacy, js, geometry, approx, clamp, Mat4, Quat, Vec3, murmurhash2_32_gc, binarySearchEpsilon, assertIsTrue, SkelAnimDataHub, AnimationWrapMode, WrapMode, Node, legacy, BAKE_SKELETON_CURVE_SYMBOL, trackBindingTag, TrackPath, createEvalSymbol, UntypedTrack, ObjectTrack, getGlobalAnimationManager, AuxiliaryCurveEntry, removeIf, invokeComponentMethodsEngagedInAnimationEvent, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _class3, _dec2, _class4, _class5, _initializer13, _initializer14, searchForRootBonePathSymbol, exoticAnimationTag, embeddedPlayerCountTag, getEmbeddedPlayersTag, addEmbeddedPlayerTag, removeEmbeddedPlayerTag, clearEmbeddedPlayersTag, additiveSettingsTag, AnimationClip, AdditiveSettings, TrackEvalStatus, EmbeddedPlayerEvaluation, AnimationClipEvaluation, BoneTransform, BoneGlobalTransform, motionTransformCache, RootMotionEvaluation, InvalidIndex, EventEvaluator;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  function relativeTransform(out, from, to) {
    Mat4.invert(out, from);
    Mat4.multiply(out, to, out);
  }
  function createBoneTransformBinding(boneTransform, property) {
    switch (property) {
      default:
        return undefined;
      case 'position':
        return {
          setValue: function setValue(value) {
            Vec3.copy(boneTransform.position, value);
          }
        };
      case 'rotation':
        return {
          setValue: function setValue(value) {
            Quat.copy(boneTransform.rotation, value);
          }
        };
      case 'scale':
        return {
          setValue: function setValue(value) {
            Vec3.copy(boneTransform.scale, value);
          }
        };
      case 'eulerAngles':
        return {
          setValue: function setValue(value) {
            Vec3.copy(boneTransform.eulerAngles, value);
          }
        };
    }
  }

  // #region Events

  function wrapIterations(iterations) {
    if (iterations - (iterations | 0) === 0) {
      iterations -= 1;
    }
    return iterations | 0;
  }
  function getEventGroupIndexAtRatio(ratio, ratios) {
    var result = binarySearchEpsilon(ratios, ratio);
    return result;
  }

  // #endregion
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_coreIndexJs) {
      errorID = _coreIndexJs.errorID;
      warnID = _coreIndexJs.warnID;
      cclegacy = _coreIndexJs.cclegacy;
      js = _coreIndexJs.js;
      geometry = _coreIndexJs.geometry;
      approx = _coreIndexJs.approx;
      clamp = _coreIndexJs.clamp;
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      murmurhash2_32_gc = _coreIndexJs.murmurhash2_32_gc;
      binarySearchEpsilon = _coreIndexJs.binarySearchEpsilon;
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_dSkeletalAnimationSkeletalAnimationDataHubJs) {
      SkelAnimDataHub = _dSkeletalAnimationSkeletalAnimationDataHubJs.SkelAnimDataHub;
    }, function (_typesJs) {
      AnimationWrapMode = _typesJs.WrapMode;
      WrapMode = _typesJs.WrapMode;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_legacyClipDataJs) {
      legacy = _legacyClipDataJs;
    }, function (_internalSymbolsJs) {
      BAKE_SKELETON_CURVE_SYMBOL = _internalSymbolsJs.BAKE_SKELETON_CURVE_SYMBOL;
    }, function (_tracksTrackJs) {
      trackBindingTag = _tracksTrackJs.trackBindingTag;
      TrackPath = _tracksTrackJs.TrackPath;
    }, function (_defineJs) {
      createEvalSymbol = _defineJs.createEvalSymbol;
    }, function (_tracksUntypedTrackJs) {
      UntypedTrack = _tracksUntypedTrackJs.UntypedTrack;
    }, function (_tracksObjectTrackJs) {
      ObjectTrack = _tracksObjectTrackJs.ObjectTrack;
    }, function (_exoticAnimationExoticAnimationJs) {}, function (_globalAnimationManagerJs) {
      getGlobalAnimationManager = _globalAnimationManagerJs.getGlobalAnimationManager;
    }, function (_auxiliaryCurveEntryJs) {
      AuxiliaryCurveEntry = _auxiliaryCurveEntryJs.AuxiliaryCurveEntry;
    }, function (_coreUtilsArrayJs) {
      removeIf = _coreUtilsArrayJs.removeIf;
    }, function (_eventEventEmitterJs) {
      invokeComponentMethodsEngagedInAnimationEvent = _eventEventEmitterJs.invokeComponentMethodsEngagedInAnimationEvent;
    }],
    execute: function () {
      // #region Tracks
      // Export for test
      _export("searchForRootBonePathSymbol", searchForRootBonePathSymbol = Symbol('SearchForRootBonePath')); // #endregion
      _export("exoticAnimationTag", exoticAnimationTag = Symbol('ExoticAnimation'));
      _export("embeddedPlayerCountTag", embeddedPlayerCountTag = Symbol('[[EmbeddedPlayerCount]]'));
      _export("getEmbeddedPlayersTag", getEmbeddedPlayersTag = Symbol('[[GetEmbeddedPlayers]]'));
      _export("addEmbeddedPlayerTag", addEmbeddedPlayerTag = Symbol('[[AddEmbeddedPlayer]]'));
      _export("removeEmbeddedPlayerTag", removeEmbeddedPlayerTag = Symbol('[[RemoveEmbeddedPlayer]]'));
      _export("clearEmbeddedPlayersTag", clearEmbeddedPlayersTag = Symbol('[[ClearEmbeddedPlayers]]'));
      /**
       * Tag to access the additive settings associated on animation clip.
       */
      _export("additiveSettingsTag", additiveSettingsTag = Symbol('[[Additive Settings]]'));
      /**
       * @zh 动画剪辑表示一段使用动画编辑器编辑的关键帧动画或是外部美术工具生产的骨骼动画。
       * 它的数据主要被分为几层：轨道、关键帧和曲线。
       * @en The animation clip represents a sequence of key frame animation created with the animation editor or skeletal animation other DCC tools.
       * The data is divided in different levels: tracks, key frames, curves.
       */
      _export("AnimationClip", AnimationClip = (_dec = ccclass('cc.AnimationClip'), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(AnimationClip, _Asset);
        function AnimationClip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          /**
           * @zh 动画帧率，单位为帧/秒。注意此属性仅用于编辑器动画编辑。
           * @en Animation frame rate: frames per second.
           * Note this property is only used for animation editing in Editor.
           */
          _this.sample = _initializer && _initializer();
          /**
           * @zh 动画的播放速度。
           * @en Animation playback speed.
           */
          _this.speed = _initializer2 && _initializer2();
          /**
           * @zh 动画的循环模式。
           * @en Animation loop mode.
           */
          _this.wrapMode = _initializer3 && _initializer3();
          /**
           * Sets if node TRS curves in this animation can be blended.
           * Normally this flag is enabled for model animation and disabled for other case.
           * @internal This is an internal slot. Never use it in your code.
           */
          _this.enableTrsBlending = _initializer4 && _initializer4();
          _this._duration = _initializer5 && _initializer5();
          _this._hash = _initializer6 && _initializer6();
          _this.frameRate = 0;
          _this._tracks = _initializer7 && _initializer7();
          _this._exoticAnimation = _initializer8 && _initializer8();
          _this._legacyData = undefined;
          _this._legacyDataDirty = false;
          _this._events = _initializer9 && _initializer9();
          _this._embeddedPlayers = _initializer10 && _initializer10();
          _this._additiveSettings = _initializer11 && _initializer11();
          _this._auxiliaryCurveEntries = _initializer12 && _initializer12();
          _this._runtimeEvents = {
            ratios: [],
            eventGroups: []
          };
          return _this;
        }
        /**
         * @en Crate clip with a set of sprite frames
         * @zh 使用一组序列帧图片来创建动画剪辑
         * @example
         * ```
         * import { AnimationClip } from 'cc';
         * const clip = AnimationClip.createWithSpriteFrames(spriteFrames, 10);
         * ```
         */
        AnimationClip.createWithSpriteFrames = function createWithSpriteFrames(spriteFrames, sample) {
          var clip = new AnimationClip();
          clip.sample = sample || clip.sample;
          clip.duration = spriteFrames.length / clip.sample;
          var step = 1 / clip.sample;
          var track = new ObjectTrack();
          track.path = new TrackPath().toComponent('cc.Sprite').toProperty('spriteFrame');
          var curve = track.channels()[0].curve;
          curve.assignSorted(spriteFrames.map(function (spriteFrame, index) {
            return [step * index, spriteFrame];
          }));
          clip.addTrack(track);
          return clip;
        };
        var _proto = AnimationClip.prototype;
        _proto.onLoaded = function onLoaded() {
          this.frameRate = this.sample;
          this.events = this._events;
        }

        /**
         * @en
         * Counts the time range that the tracks within this animation span.
         * @zh
         * 获取此动画所有轨道占据的时间范围。
         * @returns The time range.
         */;
        _proto.range = function range() {
          var range = {
            min: Infinity,
            max: -Infinity
          };
          var tracks = this._tracks;
          var nTracks = tracks.length;
          for (var iTrack = 0; iTrack < nTracks; ++iTrack) {
            var track = tracks[iTrack];
            var trackRange = track.range();
            range.min = Math.min(range.min, trackRange.min);
            range.max = Math.max(range.max, trackRange.max);
          }
          return range;
        }

        /**
         * @en
         * Gets the specified track.
         * @zh
         * 获取指定的轨道。
         * @param index Index to the track.
         * @returns The track.
         */;
        _proto.getTrack = function getTrack(index) {
          return this._tracks[index];
        }

        /**
         * @en
         * Adds a track into this animation.
         * @zh
         * 添加一个轨道到此动画中。
         * @param track The track.
         * @returns Index to the track.
         */;
        _proto.addTrack = function addTrack(track) {
          var index = this._tracks.length;
          this._tracks.push(track);
          return index;
        }

        /**
         * @en
         * Removes a track from this animation.
         * @zh
         * 移除此动画中的指定轨道。
         * @param index Index to the track.
         */;
        _proto.removeTrack = function removeTrack(index) {
          this._tracks.splice(index, 1);
        }

        /**
         * @en
         * Removes all tracks from this animation.
         * @zh
         * 移除此动画的所有轨道。
         */;
        _proto.clearTracks = function clearTracks() {
          this._tracks.length = 0;
        }

        /**
         * Returns if this clip has any event.
         * @internal Do not use this in your code.
         */;
        _proto.containsAnyEvent = function containsAnyEvent() {
          return this._events.length !== 0;
        }

        /**
         * Creates an event evaluator for this animation.
         * @param targetNode Target node used to fire events.
         * @internal Do not use this in your code.
         */;
        _proto.createEventEvaluator = function createEventEvaluator(targetNode) {
          return new EventEvaluator(targetNode, this._runtimeEvents.ratios, this._runtimeEvents.eventGroups, this.wrapMode);
        }

        /**
         * Returns if this clip has any embedded player.
         * @internal Do not use this in your code.
         */;
        _proto.containsAnyEmbeddedPlayer = function containsAnyEmbeddedPlayer() {
          return this._embeddedPlayers.length !== 0;
        }

        /**
         * Creates an embedded player evaluator for this animation.
         * @param targetNode Target node.
         * @internal Do not use this in your code.
         */;
        _proto.createEmbeddedPlayerEvaluator = function createEmbeddedPlayerEvaluator(targetNode) {
          return new EmbeddedPlayerEvaluation(this._embeddedPlayers, targetNode);
        }

        /**
         * Creates an evaluator for this animation.
         * @param context The context.
         * @returns The evaluator.
         * @internal Do not use this in your code.
         */;
        _proto.createEvaluator = function createEvaluator(context) {
          var _this2 = this;
          var target = context.target;
          var binder = function binder(binding) {
            if (context.mask && binding.isMaskedOff(context.mask)) {
              return undefined;
            }
            var trackTarget = binding.createRuntimeBinding(target, _this2.enableTrsBlending ? context.pose : undefined, false);
            if (DEBUG && !trackTarget) {
              // If we got a null track target here, we should already have warn logged,
              // To elaborate on error details, we warn here as well.
              // Note: if in the future this log appears alone,
              // it must be a BUG which break promise by above statement.
              warnID(3937, _this2.name, context.target instanceof Node ? context.target.name : context.target);
            }
            return trackTarget !== null && trackTarget !== void 0 ? trackTarget : undefined;
          };
          return this._createEvalWithBinder(target, binder, context.rootMotion);
        };
        _proto.destroy = function destroy() {
          var _cclegacy$director$ro;
          if ((_cclegacy$director$ro = cclegacy.director.root) !== null && _cclegacy$director$ro !== void 0 && _cclegacy$director$ro.dataPoolManager) {
            cclegacy.director.root.dataPoolManager.releaseAnimationClip(this);
          }
          SkelAnimDataHub.destroy(this);
          return _Asset.prototype.destroy.call(this);
        };
        _proto[BAKE_SKELETON_CURVE_SYMBOL] = function (start, samples, frames) {
          var step = 1.0 / samples;
          var animatedJoints = this._collectAnimatedJoints();
          var nAnimatedJoints = animatedJoints.length;
          var jointsBakeInfo = {};
          for (var iAnimatedJoint = 0; iAnimatedJoint < nAnimatedJoints; ++iAnimatedJoint) {
            var joint = animatedJoints[iAnimatedJoint];
            jointsBakeInfo[joint] = {
              transforms: Array.from({
                length: frames
              }, function () {
                return new Mat4();
              })
            };
          }
          var skeletonFrames = animatedJoints.reduce(function (result, joint) {
            result[joint] = new BoneGlobalTransform();
            return result;
          }, {});
          for (var _joint in skeletonFrames) {
            var skeletonFrame = skeletonFrames[_joint];
            var parentJoint = _joint.lastIndexOf('/');
            if (parentJoint >= 0) {
              var parentJointName = _joint.substring(0, parentJoint);
              var parentJointFrame = skeletonFrames[parentJointName];
              // Parent joint can be nil since some of joints' parents
              // are not in animation list. For example, joints under socket nodes.
              if (parentJointFrame) {
                skeletonFrame.parent = parentJointFrame;
              }
            }
          }
          var binder = function binder(binding) {
            var trsPath = binding.parseTrsPath();
            if (!trsPath) {
              return undefined;
            }
            var jointFrame = skeletonFrames[trsPath.node];
            if (!jointFrame) {
              return undefined;
            }
            return createBoneTransformBinding(jointFrame, trsPath.property);
          };
          var evaluator = this._createEvalWithBinder(undefined, binder, undefined);
          for (var iFrame = 0; iFrame < frames; ++iFrame) {
            var time = start + step * iFrame;
            evaluator.evaluate(time);
            for (var _iAnimatedJoint = 0; _iAnimatedJoint < nAnimatedJoints; ++_iAnimatedJoint) {
              var _joint2 = animatedJoints[_iAnimatedJoint];
              Mat4.copy(jointsBakeInfo[_joint2].transforms[iFrame], skeletonFrames[_joint2].globalTransform);
            }
            for (var _iAnimatedJoint2 = 0; _iAnimatedJoint2 < nAnimatedJoints; ++_iAnimatedJoint2) {
              var _joint3 = animatedJoints[_iAnimatedJoint2];
              skeletonFrames[_joint3].invalidate();
            }
          }
          return {
            samples: samples,
            frames: frames,
            joints: jointsBakeInfo
          };
        }

        /**
         * Convert all untyped tracks into typed ones and delete the original.
         * @param refine How to decide the type on specified path.
         * @internal DO NOT USE THIS IN YOUR CODE.
         */;
        _proto.upgradeUntypedTracks = function upgradeUntypedTracks(refine) {
          var newTracks = [];
          var removals = [];
          var tracks = this._tracks;
          var nTracks = tracks.length;
          for (var iTrack = 0; iTrack < nTracks; ++iTrack) {
            var track = tracks[iTrack];
            if (!(track instanceof UntypedTrack)) {
              continue;
            }
            var newTrack = track.upgrade(refine);
            if (newTrack) {
              newTracks.push(newTrack);
              removals.push(track);
            }
          }
          var nRemovalTracks = removals.length;
          for (var iRemovalTrack = 0; iRemovalTrack < nRemovalTracks; ++iRemovalTrack) {
            js.array.remove(tracks, removals[iRemovalTrack]);
          }
          tracks.push.apply(tracks, newTracks);
        }

        /**
         * @internal Export for test.
         */;
        _proto[searchForRootBonePathSymbol] = function () {
          return this._searchForRootBonePath();
        }

        // #region Legacy area
        // The following are significantly refactored and deprecated since 3.3.
        // We deprecates the direct exposure of keys, values, events.
        // Instead, we use track to organize them together.

        /**
         * @zh 曲线可引用的所有时间轴。
         * @en Frame keys referenced by curves.
         * @deprecated Since V3.3. Please reference to the track/channel/curve mechanism introduced in V3.3.
         */;
        /**
         * @deprecated Since V3.3. Please reference to the track/channel/curve mechanism introduced in V3.3.
         */
        _proto.getPropertyCurves = function getPropertyCurves() {
          return this._getLegacyData().getPropertyCurves();
        }

        /**
         * @deprecated Since V3.3. Please reference to the track/channel/curve mechanism introduced in V3.3.
         */;
        /**
         * @zh 提交事件数据的修改。
         * 当你修改了 `this.events` 时，必须调用 `this.updateEventDatas()` 使修改生效。
         * @en
         * Commit event data update.
         * You should call this function after you changed the `events` data to take effect.
         * @deprecated Since V3.3. Please Assign to `this.events`.
         */
        _proto.updateEventDatas = function updateEventDatas() {
          this.events = this._events;
        }

        /**
         * @zh 返回本动画是否包含事件数据。
         * @en Returns if this animation contains event data.
         * @protected
         */;
        _proto.hasEvents = function hasEvents() {
          return this.events.length !== 0;
        }

        /**
         * Migrates legacy data into tracks.
         * NOTE: This method tend to be used as internal purpose or patch.
         * DO NOT use it in your code since it might be removed for the future at any time.
         * @internal Since V3.3. Please reference to the track/channel/curve mechanism introduced in V3.3.
         */;
        _proto.syncLegacyData = function syncLegacyData() {
          if (this._legacyData) {
            this._fromLegacy(this._legacyData);
            this._legacyData = undefined;
          }
        }

        // #endregion

        /**
         * @internal
         */;
        /**
         * @internal
         */
        _proto[getEmbeddedPlayersTag] = function () {
          return this._embeddedPlayers;
        }

        /**
         * @internal
         */;
        _proto[addEmbeddedPlayerTag] = function (embeddedPlayer) {
          this._embeddedPlayers.push(embeddedPlayer);
        }

        /**
         * @internal
         */;
        _proto[removeEmbeddedPlayerTag] = function (embeddedPlayer) {
          var iEmbeddedPlayer = this._embeddedPlayers.indexOf(embeddedPlayer);
          if (iEmbeddedPlayer >= 0) {
            this._embeddedPlayers.splice(iEmbeddedPlayer, 1);
          }
        }

        /**
         * @internal
         */;
        _proto[clearEmbeddedPlayersTag] = function () {
          this._embeddedPlayers.length = 0;
        }

        /**
         * @zh 获取此动画剪辑中的辅助曲线数量。
         * @en Gets the count of auxiliary curves within this animation clip.
         */;
        /**
         * @zh 返回此动画剪辑中所有辅助曲线的名称。
         * @en Returns names of all auxiliary curves within this animation clip.
         */
        _proto.getAuxiliaryCurveNames_experimental = function getAuxiliaryCurveNames_experimental() {
          return this._auxiliaryCurveEntries.map(function (entry) {
            return entry.name;
          });
        }

        /**
         * @zh 返回此动画剪辑中是否存在指定的辅助曲线。
         * @en Returns if the specified auxiliary curve exists in this animation clip.
         */;
        _proto.hasAuxiliaryCurve_experimental = function hasAuxiliaryCurve_experimental(name) {
          return !!this._findAuxiliaryCurveEntry(name);
        }

        /**
         * @zh 添加一条辅助曲线。如果已存在同名的辅助曲线，则直接返回。
         * @en Adds an auxiliary curve. Directly return if there is already such named auxiliary curve.
         * @param name @zh 辅助曲线的名称。@en The auxiliary curve's name.
         * @returns @zh 新增或已存在的辅助曲线。 @en The newly created or existing auxiliary curve.
         * @experimental
         */;
        _proto.addAuxiliaryCurve_experimental = function addAuxiliaryCurve_experimental(name) {
          var entry = this._findAuxiliaryCurveEntry(name);
          if (!entry) {
            entry = new AuxiliaryCurveEntry();
            entry.name = name;
            this._auxiliaryCurveEntries.push(entry);
          }
          return entry.curve;
        }

        /**
         * @zh 获取指定的辅助曲线。
         * @en Gets the specified auxiliary curve.
         * @param name @zh 辅助曲线的名称。@en The auxiliary curve's name.
         * @returns @zh 指定的辅助曲线。@en The specified auxiliary curve.
         * @experimental
         */;
        _proto.getAuxiliaryCurve_experimental = function getAuxiliaryCurve_experimental(name) {
          var entry = this._findAuxiliaryCurveEntry(name);
          assertIsTrue(entry);
          return entry.curve;
        }

        /**
         * @zh 重命名指定的辅助曲线。
         * @en Renames the specified auxiliary curve.
         * @param name @zh 要重命名的辅助曲线的名称。@en Name of the auxiliary curve to rename.
         * @param newName @zh 新名称。@en New name.
         */;
        _proto.renameAuxiliaryCurve_experimental = function renameAuxiliaryCurve_experimental(name, newName) {
          var entry = this._findAuxiliaryCurveEntry(name);
          if (entry) {
            entry.name = newName;
          }
        }

        /**
         * @zh 移除指定的辅助曲线。
         * @en Removes the specified auxiliary curve.
         * @param name @zh 辅助曲线的名称。@en The auxiliary curve's name.
         * @experimental
         */;
        _proto.removeAuxiliaryCurve_experimental = function removeAuxiliaryCurve_experimental(name) {
          removeIf(this._auxiliaryCurveEntries, function (entry) {
            return entry.name === name;
          });
        }

        /**
         * @internal
         */;
        _proto._trySyncLegacyData = function _trySyncLegacyData() {
          if (this._legacyDataDirty) {
            this._legacyDataDirty = false;
            this.syncLegacyData();
          }
        };
        _proto._createEvalWithBinder = function _createEvalWithBinder(target, binder, rootMotionOptions) {
          if (this._legacyDataDirty) {
            this._legacyDataDirty = false;
            this.syncLegacyData();
          }
          var rootMotionTrackExcludes = [];
          var rootMotionEvaluation;
          if (rootMotionOptions) {
            rootMotionEvaluation = this._createRootMotionEvaluation(target, rootMotionOptions, rootMotionTrackExcludes);
          }
          var trackEvalStatues = [];
          var exoticAnimationEvaluator;
          var tracks = this._tracks;
          var nTracks = tracks.length;
          for (var iTrack = 0; iTrack < nTracks; ++iTrack) {
            var track = tracks[iTrack];
            if (rootMotionTrackExcludes.includes(track)) {
              continue;
            }
            if (Array.from(track.channels()).every(function (_ref) {
              var curve = _ref.curve;
              return curve.keyFramesCount === 0;
            })) {
              continue;
            }
            var runtimeBinding = binder(track[trackBindingTag]);
            if (!runtimeBinding) {
              continue;
            }
            var trackEval = void 0;
            if (!(track instanceof UntypedTrack)) {
              trackEval = track[createEvalSymbol]();
            } else {
              // Handle untyped track specially.
              if (!runtimeBinding.getValue) {
                // If we can not get a value from binding,
                // we're not able to instantiate the untyped track.
                // This matches the behavior prior to V3.3.
                errorID(3930);
                continue;
              }
              var hintValue = runtimeBinding.getValue();
              trackEval = track.createLegacyEval(hintValue);
            }
            trackEvalStatues.push(new TrackEvalStatus(runtimeBinding, trackEval));
          }
          if (this._exoticAnimation) {
            exoticAnimationEvaluator = this._exoticAnimation.createEvaluator(binder);
          }
          var evaluation = new AnimationClipEvaluation(trackEvalStatues, exoticAnimationEvaluator, rootMotionEvaluation);
          return evaluation;
        };
        _proto._createRootMotionEvaluation = function _createRootMotionEvaluation(target, rootMotionOptions, rootMotionTrackExcludes) {
          if (!(target instanceof Node)) {
            errorID(3920);
            return undefined;
          }
          var rootBonePath = this._searchForRootBonePath();
          if (!rootBonePath) {
            warnID(3923);
            return undefined;
          }
          var rootBone = target.getChildByPath(rootBonePath);
          if (!rootBone) {
            warnID(3924);
            return undefined;
          }

          // const { } = rootMotionOptions;

          var boneTransform = new BoneTransform();
          var rootMotionsTrackEvaluations = [];
          var tracks = this._tracks;
          var nTracks = tracks.length;
          for (var iTrack = 0; iTrack < nTracks; ++iTrack) {
            var track = tracks[iTrack];
            var trackBinding = track[trackBindingTag];
            var trsPath = trackBinding.parseTrsPath();
            if (!trsPath) {
              continue;
            }
            var bonePath = trsPath.node;
            if (bonePath !== rootBonePath) {
              continue;
            }
            rootMotionTrackExcludes.push(track);
            var property = trsPath.property;
            var runtimeBinding = createBoneTransformBinding(boneTransform, property);
            if (!runtimeBinding) {
              continue;
            }
            var trackEval = track[createEvalSymbol]();
            rootMotionsTrackEvaluations.push(new TrackEvalStatus(runtimeBinding, trackEval));
          }
          var rootMotionEvaluation = new RootMotionEvaluation(rootBone, this._duration, boneTransform, rootMotionsTrackEvaluations);
          return rootMotionEvaluation;
        };
        _proto._searchForRootBonePath = function _searchForRootBonePath() {
          var paths = this._tracks.map(function (track) {
            var trsPath = track[trackBindingTag].parseTrsPath();
            if (trsPath) {
              var nodePath = trsPath.node;
              return {
                path: nodePath,
                rank: nodePath.split('/').length
              };
            } else {
              return {
                path: '',
                rank: 0
              };
            }
          });
          paths.sort(function (a, b) {
            return a.rank - b.rank;
          });
          var iNonEmptyPath = paths.findIndex(function (p) {
            return p.rank !== 0;
          });
          if (iNonEmptyPath < 0) {
            return '';
          }
          var nPaths = paths.length;
          var firstPath = paths[iNonEmptyPath];
          var highestPathsAreSame = true;
          for (var iPath = iNonEmptyPath + 1; iPath < nPaths; ++iPath) {
            var path = paths[iPath];
            if (path.rank !== firstPath.rank) {
              break;
            }
            if (path.path !== firstPath.path) {
              highestPathsAreSame = false;
              break;
            }
          }
          return highestPathsAreSame ? firstPath.path : '';
        };
        _proto._getLegacyData = function _getLegacyData() {
          if (!this._legacyData) {
            this._legacyData = this._toLegacy();
          }
          return this._legacyData;
        };
        _proto._toLegacy = function _toLegacy() {
          var keys = [];
          var legacyCurves = [];
          var commonTargets = [];
          var legacyClipData = new legacy.AnimationClipLegacyData(this._duration);
          legacyClipData.keys = keys;
          legacyClipData.curves = legacyCurves;
          legacyClipData.commonTargets = commonTargets;
          return legacyClipData;
        };
        _proto._fromLegacy = function _fromLegacy(legacyData) {
          var newTracks = legacyData.toTracks();
          var nNewTracks = newTracks.length;
          for (var iNewTrack = 0; iNewTrack < nNewTracks; ++iNewTrack) {
            this.addTrack(newTracks[iNewTrack]);
          }
        };
        _proto._collectAnimatedJoints = function _collectAnimatedJoints() {
          var joints = new Set();
          var tracks = this._tracks;
          var nTracks = tracks.length;
          for (var iTrack = 0; iTrack < nTracks; ++iTrack) {
            var track = tracks[iTrack];
            var trsPath = track[trackBindingTag].parseTrsPath();
            if (trsPath) {
              joints.add(trsPath.node);
            }
          }
          if (this._exoticAnimation) {
            var animatedJoints = this._exoticAnimation.collectAnimatedJoints();
            var nAnimatedJoints = animatedJoints.length;
            for (var iAnimatedJoint = 0; iAnimatedJoint < nAnimatedJoints; ++iAnimatedJoint) {
              joints.add(animatedJoints[iAnimatedJoint]);
            }
          }
          return Array.from(joints);
        };
        _proto._findAuxiliaryCurveEntry = function _findAuxiliaryCurveEntry(name) {
          return this._auxiliaryCurveEntries.find(function (entry) {
            return entry.name === name;
          });
        };
        _createClass(AnimationClip, [{
          key: "duration",
          get:
          /**
           * @zh 动画的周期。
           * @en Animation duration.
           */
          function get() {
            return this._duration;
          },
          set: function set(value) {
            this._duration = value;
          }

          /**
           * @en
           * Gets the count of tracks this animation owns.
           * @zh
           * 获取此动画中的轨道数量。
           */
        }, {
          key: "tracksCount",
          get: function get() {
            return this._tracks.length;
          }

          /**
           * @en
           * Gets an iterable to tracks.
           * @zh
           * 获取可用于迭代轨道的对象。
           */
        }, {
          key: "tracks",
          get: function get() {
            return this._tracks;
          }
        }, {
          key: "hash",
          get: function get() {
            var _this$_exoticAnimatio, _this$_exoticAnimatio2;
            // hashes should already be computed offline, but if not, make one
            if (this._hash) {
              return this._hash;
            }
            // Only hash exotic animations(including skeletal animations imported from model file).
            // The behavior is consistent with how `.hash` implemented prior to 3.3.
            var hashString = "Exotic:" + ((_this$_exoticAnimatio = (_this$_exoticAnimatio2 = this._exoticAnimation) === null || _this$_exoticAnimatio2 === void 0 ? void 0 : _this$_exoticAnimatio2.toHashString()) !== null && _this$_exoticAnimatio !== void 0 ? _this$_exoticAnimatio : '');
            return this._hash = murmurhash2_32_gc(hashString, 666);
          }

          /**
           * @zh 动画包含的事件数据。
           * @en Associated event data.
           */
        }, {
          key: "events",
          get: function get() {
            return this._events;
          },
          set: function set(value) {
            var _this3 = this;
            this._events = value;
            var ratios = [];
            var eventGroups = [];
            var events = this.events.sort(function (a, b) {
              return a.frame - b.frame;
            });
            var nEvents = events.length;
            var _loop = function _loop() {
              var eventData = events[iEvent];
              var ratio = eventData.frame / _this3._duration;
              var i = ratios.findIndex(function (r) {
                return r === ratio;
              });
              if (i < 0) {
                i = ratios.length;
                ratios.push(ratio);
                eventGroups.push({
                  events: []
                });
              }
              eventGroups[i].events.push({
                functionName: eventData.func,
                parameters: eventData.params
              });
            };
            for (var iEvent = 0; iEvent < nEvents; ++iEvent) {
              _loop();
            }
            this._runtimeEvents = {
              ratios: ratios,
              eventGroups: eventGroups
            };
          }
        }, {
          key: exoticAnimationTag,
          get: function get() {
            return this._exoticAnimation;
          }
        }, {
          key: exoticAnimationTag,
          set: function set(value) {
            this._exoticAnimation = value;
          }

          /**
           * Gets if this animation clip contains additive animation.
           * @experimental
           */
        }, {
          key: "isAdditive_experimental",
          get: function get() {
            return this._additiveSettings.enabled;
          }

          /**
           * Accesses the additive animation settings.
           * @internal
           */
        }, {
          key: additiveSettingsTag,
          get: function get() {
            return this._additiveSettings;
          }
        }, {
          key: "keys",
          get: function get() {
            return this._getLegacyData().keys;
          }
        }, {
          key: "keys",
          set: function set(value) {
            this._legacyDataDirty = true;
            this._getLegacyData().keys = value;
          }

          /**
           * @zh 此动画包含的所有曲线。
           * @en Curves this animation contains.
           * @deprecated Since V3.3. Please reference to the track/channel/curve mechanism introduced in V3.3.
           */
        }, {
          key: "curves",
          get: function get() {
            this._legacyDataDirty = true;
            return this._getLegacyData().curves;
          }
        }, {
          key: "curves",
          set: function set(value) {
            this._getLegacyData().curves = value;
          }

          /**
           * @deprecated Since V3.3. Please reference to the track/channel/curve mechanism introduced in V3.3.
           */
        }, {
          key: "commonTargets",
          get: function get() {
            return this._getLegacyData().commonTargets;
          }
        }, {
          key: "commonTargets",
          set: function set(value) {
            this._legacyDataDirty = true;
            this._getLegacyData().commonTargets = value;
          }

          /**
           * @en
           * The animation's data.
           * @zh
           * 此动画的数据。
           * @deprecated Since V3.3. Please reference to the track/channel/curve mechanism introduced in V3.3.
           */
        }, {
          key: "data",
          get: function get() {
            return this._getLegacyData().data;
          }
        }, {
          key: "eventGroups",
          get: function get() {
            return this._runtimeEvents.eventGroups;
          }
        }, {
          key: embeddedPlayerCountTag,
          get: function get() {
            return this._embeddedPlayers.length;
          }
        }, {
          key: "auxiliaryCurveCount_experimental",
          get: function get() {
            return this._auxiliaryCurveEntries.length;
          }
        }]);
        return AnimationClip;
      }(Asset), _class3.WrapMode = AnimationWrapMode, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "sample", [serializable], function () {
        return 60;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "speed", [serializable], function () {
        return 1;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "wrapMode", [serializable], function () {
        return AnimationWrapMode.Normal;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "enableTrsBlending", [serializable], function () {
        return false;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_duration", [serializable], function () {
        return 0;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_hash", [serializable], function () {
        return 0;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_tracks", [serializable], function () {
        return [];
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_exoticAnimation", [serializable], function () {
        return null;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_events", [serializable], function () {
        return [];
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_embeddedPlayers", [serializable], function () {
        return [];
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "_additiveSettings", [serializable], function () {
        return new AdditiveSettings();
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "_auxiliaryCurveEntries", [serializable], function () {
        return [];
      })), _class2)) || _class));
      _export("AnimationClipAdditiveSettings", AdditiveSettings = (_dec2 = ccclass('cc.AnimationClipAdditiveSettings'), _dec2(_class4 = (_class5 = function AdditiveSettings() {
        this.enabled = _initializer13 && _initializer13();
        this.refClip = _initializer14 && _initializer14();
      }, (_initializer13 = _applyDecoratedInitializer(_class5.prototype, "enabled", [serializable], function () {
        return false;
      }), _initializer14 = _applyDecoratedInitializer(_class5.prototype, "refClip", [serializable], function () {
        return null;
      })), _class5)) || _class4));
      cclegacy.AnimationClip = AnimationClip;
      TrackEvalStatus = /*#__PURE__*/function () {
        function TrackEvalStatus(binding, trackEval) {
          this._binding = void 0;
          this._trackEval = void 0;
          this._shouldEvaluateDefault = true;
          this._binding = binding;
          this._trackEval = trackEval;
          this._shouldEvaluateDefault = !!binding.getValue && trackEval.requiresDefault;
        }
        var _proto2 = TrackEvalStatus.prototype;
        _proto2.evaluate = function evaluate(time) {
          var binding = this._binding,
            trackEval = this._trackEval;
          var defaultValue = this._shouldEvaluateDefault
          // See `this._shouldEvaluateDefault` for the assertion.
          ? binding.getValue() : undefined;
          var value = trackEval.evaluate(time, defaultValue);
          binding.setValue(value);
        };
        return TrackEvalStatus;
      }(); // eslint-disable-next-line @typescript-eslint/no-empty-interface
      EmbeddedPlayerEvaluation = /*#__PURE__*/function () {
        function EmbeddedPlayerEvaluation(embeddedPlayers, rootNode) {
          this._embeddedPlayers = embeddedPlayers;
          this._embeddedPlayerEvaluationInfos = embeddedPlayers.map(function (embeddedPlayer) {
            var player = embeddedPlayer.playable;
            if (!player) {
              return null;
            }
            var instantiatedPlayer = player.instantiate(rootNode);
            if (!instantiatedPlayer) {
              return null;
            }
            return {
              instantiatedPlayer: instantiatedPlayer,
              entered: false,
              hostPauseTime: 0.0,
              lastIterations: 0
            };
          });
        }
        var _proto3 = EmbeddedPlayerEvaluation.prototype;
        _proto3.destroy = function destroy() {
          var embeddedPlayerEvaluationInfos = this._embeddedPlayerEvaluationInfos;
          var nEmbeddedPlayers = embeddedPlayerEvaluationInfos.length;
          for (var iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
            var _embeddedPlayerEvalua;
            (_embeddedPlayerEvalua = embeddedPlayerEvaluationInfos[iEmbeddedPlayer]) === null || _embeddedPlayerEvalua === void 0 ? void 0 : _embeddedPlayerEvalua.instantiatedPlayer.destroy();
          }
          this._embeddedPlayerEvaluationInfos.length = 0;
        }

        /**
         * Evaluates the embedded players.
         * @param time The time([0, clipDuration]).
         * @param iterations The iterations the evaluation occurred. Should be integral.
         */;
        _proto3.evaluate = function evaluate(time, iterations) {
          assertIsTrue(Number.isInteger(iterations));
          var embeddedPlayers = this._embeddedPlayers,
            embeddedPlayerEvaluationInfos = this._embeddedPlayerEvaluationInfos;
          var nEmbeddedPlayers = embeddedPlayers.length;
          for (var iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
            var embeddedPlayerEvaluationInfo = embeddedPlayerEvaluationInfos[iEmbeddedPlayer];
            if (!embeddedPlayerEvaluationInfo) {
              continue;
            }
            var entered = embeddedPlayerEvaluationInfo.entered,
              instantiatedPlayer = embeddedPlayerEvaluationInfo.instantiatedPlayer,
              lastIterations = embeddedPlayerEvaluationInfo.lastIterations;
            var _embeddedPlayers$iEmb = embeddedPlayers[iEmbeddedPlayer],
              begin = _embeddedPlayers$iEmb.begin,
              end = _embeddedPlayers$iEmb.end;
            var withinEmbeddedPlayer = time >= begin && time <= end;
            if (withinEmbeddedPlayer) {
              if (!entered) {
                instantiatedPlayer.play();
                embeddedPlayerEvaluationInfo.entered = true;
              } else if (iterations !== lastIterations) {
                instantiatedPlayer.stop();
                instantiatedPlayer.play();
                embeddedPlayerEvaluationInfo.entered = true;
              }
            } else if (entered) {
              instantiatedPlayer.stop();
              embeddedPlayerEvaluationInfo.entered = false;
            }
            embeddedPlayerEvaluationInfo.lastIterations = iterations;
            if (embeddedPlayerEvaluationInfo.entered) {
              var playerTime = time - begin;
              embeddedPlayerEvaluationInfo.instantiatedPlayer.setTime(playerTime);
            }
          }
        };
        _proto3.notifyHostSpeedChanged = function notifyHostSpeedChanged(speed) {
          // Transmit the speed to embedded players that want a reconciled speed.
          var embeddedPlayers = this._embeddedPlayers,
            embeddedPlayerEvaluationInfos = this._embeddedPlayerEvaluationInfos;
          var nEmbeddedPlayers = embeddedPlayers.length;
          for (var iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
            var embeddedPlayerEvaluationInfo = embeddedPlayerEvaluationInfos[iEmbeddedPlayer];
            if (!embeddedPlayerEvaluationInfo) {
              continue;
            }
            var instantiatedPlayer = embeddedPlayerEvaluationInfo.instantiatedPlayer;
            var reconciledSpeed = embeddedPlayers[iEmbeddedPlayer].reconciledSpeed;
            if (reconciledSpeed) {
              instantiatedPlayer.setSpeed(speed);
            }
          }
        }

        /**
         * Notifies that the host has ran into **playing** state.
         * @param time The time where host ran into playing state.
         */;
        _proto3.notifyHostPlay = function notifyHostPlay(time) {
          // Host has switched to "playing", this can be happened when:
          // - Previous state is "stopped": we must have stopped all embedded players.
          // - Is pausing: we need to resume all embedded players.
          var embeddedPlayers = this._embeddedPlayers,
            embeddedPlayerEvaluationInfos = this._embeddedPlayerEvaluationInfos;
          var nEmbeddedPlayers = embeddedPlayers.length;
          for (var iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
            var embeddedPlayerEvaluationInfo = embeddedPlayerEvaluationInfos[iEmbeddedPlayer];
            if (!embeddedPlayerEvaluationInfo) {
              continue;
            }
            var _embeddedPlayers$iEmb2 = embeddedPlayers[iEmbeddedPlayer],
              begin = _embeddedPlayers$iEmb2.begin,
              end = _embeddedPlayers$iEmb2.end;
            var instantiatedPlayer = embeddedPlayerEvaluationInfo.instantiatedPlayer,
              entered = embeddedPlayerEvaluationInfo.entered;
            if (entered) {
              var hostPauseTime = embeddedPlayerEvaluationInfo.hostPauseTime;
              // We can resume the embedded player
              // only if the pause/play happened at the same time
              // or the embedded player supports random access.
              // Otherwise we have to say goodbye to that embedded player.
              if (instantiatedPlayer.randomAccess || approx(hostPauseTime, time, 1e-5)) {
                var startTime = clamp(time, begin, end);
                instantiatedPlayer.play();
                instantiatedPlayer.setTime(startTime - begin);
              } else {
                instantiatedPlayer.stop();
              }
            }
          }
        }

        /**
         * Notifies that the host has ran into **pause** state.
         */;
        _proto3.notifyHostPause = function notifyHostPause(time) {
          // Host is paused, simply transmit this to embedded players.
          var embeddedPlayers = this._embeddedPlayers,
            embeddedPlayerEvaluationInfos = this._embeddedPlayerEvaluationInfos;
          var nEmbeddedPlayers = embeddedPlayers.length;
          for (var iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
            var embeddedPlayerEvaluationInfo = embeddedPlayerEvaluationInfos[iEmbeddedPlayer];
            if (!embeddedPlayerEvaluationInfo) {
              continue;
            }
            var instantiatedPlayer = embeddedPlayerEvaluationInfo.instantiatedPlayer,
              entered = embeddedPlayerEvaluationInfo.entered;
            if (entered) {
              instantiatedPlayer.pause();
              embeddedPlayerEvaluationInfo.hostPauseTime = time;
            }
          }
        }

        /**
         * Notifies that the host has ran into **stopped** state.
         */;
        _proto3.notifyHostStop = function notifyHostStop() {
          // Now that host is stopped, we stop all embedded players' playing
          // regardless of their progresses.
          var embeddedPlayers = this._embeddedPlayers,
            embeddedPlayerEvaluationInfos = this._embeddedPlayerEvaluationInfos;
          var nEmbeddedPlayers = embeddedPlayers.length;
          for (var iEmbeddedPlayer = 0; iEmbeddedPlayer < nEmbeddedPlayers; ++iEmbeddedPlayer) {
            var embeddedPlayerEvaluationInfo = embeddedPlayerEvaluationInfos[iEmbeddedPlayer];
            if (!embeddedPlayerEvaluationInfo) {
              continue;
            }
            var instantiatedPlayer = embeddedPlayerEvaluationInfo.instantiatedPlayer,
              entered = embeddedPlayerEvaluationInfo.entered;
            if (entered) {
              embeddedPlayerEvaluationInfo.entered = false;
              instantiatedPlayer.stop();
            }
          }
        };
        return EmbeddedPlayerEvaluation;
      }();
      AnimationClipEvaluation = /*#__PURE__*/function () {
        function AnimationClipEvaluation(trackEvalStatuses, exoticAnimationEvaluator, rootMotionEvaluation) {
          this._exoticAnimationEvaluator = void 0;
          this._trackEvalStatues = [];
          this._rootMotionEvaluation = undefined;
          this._trackEvalStatues = trackEvalStatuses;
          this._exoticAnimationEvaluator = exoticAnimationEvaluator;
          this._rootMotionEvaluation = rootMotionEvaluation;
        }

        /**
         * Evaluates this animation.
         * @param time The time.
         */
        var _proto4 = AnimationClipEvaluation.prototype;
        _proto4.evaluate = function evaluate(time) {
          var trackEvalStatuses = this._trackEvalStatues,
            exoticAnimationEvaluator = this._exoticAnimationEvaluator;
          var nTrackEvalStatuses = trackEvalStatuses.length;
          for (var iTrackEvalStatus = 0; iTrackEvalStatus < nTrackEvalStatuses; ++iTrackEvalStatus) {
            trackEvalStatuses[iTrackEvalStatus].evaluate(time);
          }
          if (exoticAnimationEvaluator) {
            exoticAnimationEvaluator.evaluate(time);
          }
        }

        /**
         * Gets the root bone motion.
         * @param startTime Start time.
         * @param endTime End time.
         */;
        _proto4.evaluateRootMotion = function evaluateRootMotion(time, motionLength) {
          var rootMotionEvaluation = this._rootMotionEvaluation;
          if (rootMotionEvaluation) {
            rootMotionEvaluation.evaluate(time, motionLength);
          }
        };
        return AnimationClipEvaluation;
      }();
      BoneTransform = /*#__PURE__*/function () {
        function BoneTransform() {
          this.position = new Vec3();
          this.scale = new Vec3(1.0, 1.0, 1.0);
          this.rotation = new Quat();
          this.eulerAngles = new Vec3();
        }
        var _proto5 = BoneTransform.prototype;
        _proto5.getTransform = function getTransform(out) {
          Mat4.fromRTS(out, this.rotation, this.position, this.scale);
        };
        return BoneTransform;
      }();
      BoneGlobalTransform = /*#__PURE__*/function (_BoneTransform) {
        _inheritsLoose(BoneGlobalTransform, _BoneTransform);
        function BoneGlobalTransform() {
          var _this4;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this4 = _BoneTransform.call.apply(_BoneTransform, [this].concat(args)) || this;
          _this4.parent = null;
          _this4._dirty = true;
          _this4._transform = new Mat4();
          return _this4;
        }
        var _proto6 = BoneGlobalTransform.prototype;
        _proto6.invalidate = function invalidate() {
          this._dirty = true;
        };
        _createClass(BoneGlobalTransform, [{
          key: "globalTransform",
          get: function get() {
            var transform = this._transform;
            if (this._dirty) {
              this._dirty = false;
              Mat4.fromRTS(transform, this.rotation, this.position, this.scale);
              if (this.parent) {
                Mat4.multiply(transform, this.parent.globalTransform, transform);
              }
            }
            return this._transform;
          }
        }]);
        return BoneGlobalTransform;
      }(BoneTransform);
      motionTransformCache = new Mat4();
      RootMotionEvaluation = /*#__PURE__*/function () {
        function RootMotionEvaluation(_rootBone, _duration, _boneTransform, _trackEvalStatuses) {
          this._initialTransformCache = new Mat4();
          this._clipEndTransformCache = new Mat4();
          this._startTransformCache = new Mat4();
          this._endTransformCache = new Mat4();
          this._motionTransformCache = new Mat4();
          this._translationMotionCache = new Vec3();
          this._rotationMotionCache = new Quat();
          this._scaleMotionCache = new Vec3();
          this._rootBone = _rootBone;
          this._duration = _duration;
          this._boneTransform = _boneTransform;
          this._trackEvalStatuses = _trackEvalStatuses;
        }
        var _proto7 = RootMotionEvaluation.prototype;
        _proto7.evaluate = function evaluate(time, motionLength) {
          var motionTransform = this._calcMotionTransform(time, motionLength, this._motionTransformCache);
          var translationMotion = this._translationMotionCache,
            rotationMotion = this._rotationMotionCache,
            scaleMotion = this._scaleMotionCache,
            rootBone = this._rootBone;
          Mat4.toRTS(motionTransform, rotationMotion, translationMotion, scaleMotion);
          Vec3.add(translationMotion, translationMotion, rootBone.position);
          rootBone.setPosition(translationMotion);
          Quat.multiply(rotationMotion, rotationMotion, rootBone.rotation);
          rootBone.setRotation(rotationMotion);
          Vec3.multiply(scaleMotion, scaleMotion, rootBone.scale);
          rootBone.setScale(scaleMotion);
        };
        _proto7._calcMotionTransform = function _calcMotionTransform(time, motionLength, outTransform) {
          var duration = this._duration;
          var remainLength = duration - time;
          assertIsTrue(remainLength >= 0);
          var startTransform = this._evaluateAt(time, this._startTransformCache);
          if (motionLength < remainLength) {
            var endTransform = this._evaluateAt(time + motionLength, this._endTransformCache);
            relativeTransform(outTransform, startTransform, endTransform);
          } else {
            Mat4.identity(outTransform);
            var accumulateMotionTransform = function accumulateMotionTransform(from, to) {
              relativeTransform(motionTransformCache, from, to);
              Mat4.multiply(outTransform, outTransform, motionTransformCache);
            };
            var diff = motionLength - remainLength;
            var repeatCount = Math.floor(diff / duration);
            var lastRemainTime = diff - repeatCount * duration;
            var clipStartTransform = this._evaluateAt(0, this._initialTransformCache);
            var clipEndTransform = this._evaluateAt(duration, this._clipEndTransformCache);
            var _endTransform = this._evaluateAt(lastRemainTime, this._endTransformCache);

            // Start -> Clip End
            accumulateMotionTransform(startTransform, clipEndTransform);

            // Whole clip x Repeat Count
            relativeTransform(motionTransformCache, clipStartTransform, clipEndTransform);
            for (var i = 0; i < repeatCount; ++i) {
              Mat4.multiply(outTransform, outTransform, motionTransformCache);
            }

            // Clip Start -> End
            accumulateMotionTransform(clipStartTransform, _endTransform);
          }
          return outTransform;
        };
        _proto7._evaluateAt = function _evaluateAt(time, outTransform) {
          var trackEvalStatuses = this._trackEvalStatuses;
          var nTrackEvalStatuses = trackEvalStatuses.length;
          for (var iTrackEvalStatus = 0; iTrackEvalStatus < nTrackEvalStatuses; ++iTrackEvalStatus) {
            trackEvalStatuses[iTrackEvalStatus].evaluate(time);
          }
          this._boneTransform.getTransform(outTransform);
          return outTransform;
        };
        return RootMotionEvaluation;
      }();
      InvalidIndex = -1;
      EventEvaluator = /*#__PURE__*/function () {
        function EventEvaluator(_targetNode, _ratios, _eventGroups, _wrapMode) {
          this._lastFrameIndex = -1;
          this._lastIterations = 0.0;
          this._lastDirection = 0;
          this._ignoreIndex = InvalidIndex;
          this._sampled = false;
          this._targetNode = _targetNode;
          this._ratios = _ratios;
          this._eventGroups = _eventGroups;
          this._wrapMode = _wrapMode;
        }
        var _proto8 = EventEvaluator.prototype;
        _proto8.setWrapMode = function setWrapMode(wrapMode) {
          this._wrapMode = wrapMode;
        };
        _proto8.ignore = function ignore(ratio, direction) {
          this._ignoreIndex = InvalidIndex;
          this._sampled = false;
          var frameIndex = getEventGroupIndexAtRatio(ratio, this._ratios);

          // only ignore when time not on a frame index
          if (frameIndex < 0) {
            frameIndex = ~frameIndex - 1;

            // if direction is inverse, then increase index
            if (direction < 0) {
              frameIndex += 1;
            }
            this._ignoreIndex = frameIndex;
          }
        };
        _proto8.reset = function reset() {
          this._lastFrameIndex = -1;
          this._lastIterations = 0.0;
          this._lastDirection = 0;
          this._ignoreIndex = InvalidIndex;
          this._sampled = false;
        };
        _proto8.sample = function sample(ratio, direction, iterations) {
          if (this._eventGroups.length === 0) {
            return;
          }
          var length = this._eventGroups.length;
          var eventIndex = getEventGroupIndexAtRatio(ratio, this._ratios);
          if (eventIndex < 0) {
            eventIndex = ~eventIndex - 1;
            // If direction is inverse, increase index.
            if (direction < 0) {
              eventIndex += 1;
            }
          }
          if (this._ignoreIndex !== eventIndex) {
            this._ignoreIndex = InvalidIndex;
          }
          if (!this._sampled) {
            this._sampled = true;
            this._doFire(eventIndex, false);
            this._lastFrameIndex = eventIndex;
            this._lastIterations = iterations;
            this._lastDirection = direction;
            return;
          }
          var wrapMode = this._wrapMode;
          var currentIterations = wrapIterations(iterations);
          var lastIterations = wrapIterations(this._lastIterations);
          var lastIndex = this._lastFrameIndex;
          var lastDirection = this._lastDirection;
          var iterationsChanged = lastIterations !== -1 && currentIterations !== lastIterations;
          if (lastIndex === eventIndex && iterationsChanged && length === 1) {
            this._doFire(0, false);
          } else if (lastIndex !== eventIndex || iterationsChanged) {
            direction = lastDirection;
            do {
              if (lastIndex !== eventIndex) {
                if (direction === -1 && lastIndex === 0 && eventIndex > 0) {
                  if ((wrapMode & geometry.WrapModeMask.PingPong) === geometry.WrapModeMask.PingPong) {
                    direction *= -1;
                  } else {
                    lastIndex = length;
                  }
                  lastIterations++;
                } else if (direction === 1 && lastIndex === length - 1 && eventIndex < length - 1) {
                  if ((wrapMode & geometry.WrapModeMask.PingPong) === geometry.WrapModeMask.PingPong) {
                    direction *= -1;
                  } else {
                    lastIndex = -1;
                  }
                  lastIterations++;
                }
                if (lastIndex === eventIndex) {
                  break;
                }
                if (lastIterations > currentIterations) {
                  break;
                }
              }
              lastIndex += direction;
              this._doFire(lastIndex, true);
            } while (lastIndex !== eventIndex && lastIndex > -1 && lastIndex < length);
          }
          this._lastFrameIndex = eventIndex;
          this._lastIterations = iterations;
          this._lastDirection = direction;
        };
        _proto8._doFire = function _doFire(eventIndex, delay) {
          if (delay) {
            getGlobalAnimationManager().pushDelayEvent(this._checkAndFire, this, [eventIndex]);
          } else {
            this._checkAndFire(eventIndex);
          }
        };
        _proto8._checkAndFire = function _checkAndFire(eventIndex) {
          if (!this._targetNode || !this._targetNode.isValid) {
            return;
          }
          var eventGroups = this._eventGroups;
          if (eventIndex < 0 || eventIndex >= eventGroups.length || this._ignoreIndex === eventIndex) {
            return;
          }
          var eventGroup = eventGroups[eventIndex];
          var nEvents = eventGroup.events.length;
          for (var iEvent = 0; iEvent < nEvents; ++iEvent) {
            var event = eventGroup.events[iEvent];
            invokeComponentMethodsEngagedInAnimationEvent(this._targetNode, event.functionName, event.parameters);
          }
        };
        return EventEvaluator;
      }();
    }
  };
});