System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/choose-pose/choose-pose-base.js", ["../../../../../../../virtual/internal%253Aconstants.js", "../../../../../core/data/decorators/index.js", "../../../../core/pose.js", "../../../../define.js", "../../pose-node.js", "../../../animation-graph-context.js", "../../decorator/node.js", "../../../../../core/index.js", "../../utils.js"], function (_export, _context) {
  "use strict";

  var DEBUG, ccclass, serializable, blendPoseInto, CLASS_NAME_PREFIX_ANIM, PoseNode, PoseTransformSpaceRequirement, AnimationGraphUpdateContextGenerator, poseGraphNodeHide, assertIsTrue, lerp, isIgnorableWeight, _dec, _dec2, _class, _class2, _initializer, _initializer2, ZERO_ALTERING_DURATION_THRESHOLD, PoseNodeChoosePoseBase, EvaluationRecord, ItemEvaluationRecord;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_corePoseJs) {
      blendPoseInto = _corePoseJs.blendPoseInto;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_poseNodeJs) {
      PoseNode = _poseNodeJs.PoseNode;
      PoseTransformSpaceRequirement = _poseNodeJs.PoseTransformSpaceRequirement;
    }, function (_animationGraphContextJs) {
      AnimationGraphUpdateContextGenerator = _animationGraphContextJs.AnimationGraphUpdateContextGenerator;
    }, function (_decoratorNodeJs) {
      poseGraphNodeHide = _decoratorNodeJs.poseGraphNodeHide;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      lerp = _coreIndexJs.lerp;
    }, function (_utilsJs) {
      isIgnorableWeight = _utilsJs.isIgnorableWeight;
    }],
    execute: function () {
      ZERO_ALTERING_DURATION_THRESHOLD = 1e-5;
      _export("PoseNodeChoosePoseBase", PoseNodeChoosePoseBase = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseNodeChoosePoseBase"), _dec2 = poseGraphNodeHide(), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_PoseNode) {
        _inheritsLoose(PoseNodeChoosePoseBase, _PoseNode);
        function PoseNodeChoosePoseBase(initialChoiceCount) {
          var _this;
          if (initialChoiceCount === void 0) {
            initialChoiceCount = 0;
          }
          _this = _PoseNode.call(this) || this;
          _this._poses = _initializer && _initializer();
          _this._fadeInDurations = _initializer2 && _initializer2();
          _this._updateContextGenerator = new AnimationGraphUpdateContextGenerator();
          _this._evaluationRecord = undefined;
          _this._poses.length = initialChoiceCount;
          _this._poses.fill(null);
          _this._fadeInDurations.length = initialChoiceCount;
          _this._fadeInDurations.fill(0.0);
          return _this;
        }
        var _proto = PoseNodeChoosePoseBase.prototype;
        _proto.bind = function bind(context) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._poses), _step; !(_step = _iterator()).done;) {
            var pose = _step.value;
            pose === null || pose === void 0 ? void 0 : pose.bind(context);
          }
          var evaluationRecord = new EvaluationRecord(this._poses.length, this.getChosenIndex());
          this._evaluationRecord = evaluationRecord;
        };
        _proto.settle = function settle(context) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._poses), _step2; !(_step2 = _iterator2()).done;) {
            var pose = _step2.value;
            pose === null || pose === void 0 ? void 0 : pose.settle(context);
          }
        };
        _proto.reenter = function reenter() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._poses), _step3; !(_step3 = _iterator3()).done;) {
            var pose = _step3.value;
            pose === null || pose === void 0 ? void 0 : pose.reenter();
          }
        };
        _proto.doUpdate = function doUpdate(context) {
          var poses = this._poses,
            evaluationRecord = this._evaluationRecord;
          assertIsTrue(evaluationRecord);

          // Update the record for weights.
          evaluationRecord.update(context.deltaTime, this.getChosenIndex(), this._fadeInDurations);

          // Don't have to update if all weights are zero.
          if (evaluationRecord.allWeightsAreZero()) {
            return;
          }
          var nPoses = poses.length;
          var items = evaluationRecord.items;
          assertIsTrue(items.length === nPoses);

          // Dispatch update requests to non-zero weighted items.
          for (var iPose = 0; iPose < nPoses; ++iPose) {
            var weight = items[iPose].weight;
            if (isIgnorableWeight(weight)) {
              continue;
            }
            var pose = poses[iPose];
            var itemUpdateContext = this._updateContextGenerator.generate(context.deltaTime, context.indicativeWeight * weight);
            pose === null || pose === void 0 ? void 0 : pose.update(itemUpdateContext);
          }
        };
        _proto.doEvaluate = function doEvaluate(context) {
          var poses = this._poses,
            evaluationRecord = this._evaluationRecord;
          assertIsTrue(evaluationRecord);
          var spaceRequirement = PoseTransformSpaceRequirement.LOCAL;
          var nPoses = poses.length;
          var items = evaluationRecord.items;
          assertIsTrue(items.length === poses.length);
          var finalPose = null;
          if (!evaluationRecord.allWeightsAreZero()) {
            var sumWeight = 0.0;
            for (var iInputPose = 0; iInputPose < nPoses; ++iInputPose) {
              var _poses$iInputPose;
              var inputPoseWeight = evaluationRecord.items[iInputPose].weight;
              if (isIgnorableWeight(inputPoseWeight)) {
                continue;
              }
              var inputPose = (_poses$iInputPose = poses[iInputPose]) === null || _poses$iInputPose === void 0 ? void 0 : _poses$iInputPose.evaluate(context, PoseTransformSpaceRequirement.LOCAL);
              if (!inputPose) {
                continue;
              }
              sumWeight += inputPoseWeight;
              if (!finalPose) {
                finalPose = inputPose;
              } else {
                if (sumWeight) {
                  var t = inputPoseWeight / sumWeight;
                  blendPoseInto(finalPose, inputPose, t);
                }
                context.popPose();
              }
            }
          }
          if (finalPose) {
            return finalPose;
          }
          return PoseNodeChoosePoseBase.evaluateDefaultPose(context, spaceRequirement);
        };
        _proto.getChosenIndex = function getChosenIndex() {
          return 0;
        };
        return PoseNodeChoosePoseBase;
      }(PoseNode), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_poses", [serializable], function () {
        return [];
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_fadeInDurations", [serializable], function () {
        return [];
      })), _class2)) || _class) || _class));
      EvaluationRecord = /*#__PURE__*/function () {
        function EvaluationRecord(itemCount, initialChosenIndex) {
          this._items = void 0;
          this._chosenPoseIndex = -1;
          this._elapsedTransitionTime = 0.0;
          this._blendingDuration = 0.0;
          var items = Array.from({
            length: itemCount
          }, function () {
            return new ItemEvaluationRecord();
          });
          if (initialChosenIndex >= 0 && initialChosenIndex < itemCount) {
            items[initialChosenIndex].selfSourceWeight = 1.0;
            items[initialChosenIndex].selfTargetWeight = 1.0;
            items[initialChosenIndex].weight = 1.0;
          }
          this._items = items;
        }
        var _proto2 = EvaluationRecord.prototype;
        _proto2.allWeightsAreZero = function allWeightsAreZero() {
          return this._chosenPoseIndex < 0;
        };
        _proto2.update = function update(deltaTime, newChoseIndex, fadeInDurations) {
          assertIsTrue(deltaTime >= 0.0);
          this._checkAlternation(newChoseIndex, fadeInDurations);
          if (this._chosenPoseIndex < 0) {
            return;
          }
          var elapsedTransitionTime = this._elapsedTransitionTime,
            blendingDuration = this._blendingDuration,
            items = this._items;

          // There's no blending task.
          // #no-weights-update-if-done
          if (elapsedTransitionTime >= blendingDuration) {
            return;
          }
          var nPoses = items.length;
          var sumWeight = 0.0;
          var newUniformTransformRatio = 0.0;
          var remain = blendingDuration - elapsedTransitionTime;
          if (deltaTime > remain) {
            this._elapsedTransitionTime = blendingDuration;
            newUniformTransformRatio = 1.0;
          } else {
            this._elapsedTransitionTime += deltaTime;
            newUniformTransformRatio = this._elapsedTransitionTime / blendingDuration;
          }
          assertIsTrue(newUniformTransformRatio >= 0.0 && newUniformTransformRatio <= 1.0);
          for (var iPose = 0; iPose < nPoses; ++iPose) {
            var item = items[iPose];
            var selfWeight = lerp(item.selfSourceWeight, item.selfTargetWeight, newUniformTransformRatio);
            sumWeight += selfWeight;
            item.weight = selfWeight;
          }
          if (!isIgnorableWeight(sumWeight)) {
            for (var _iPose = 0; _iPose < nPoses; ++_iPose) {
              var _item = items[_iPose];
              _item.weight /= sumWeight;
            }
          } else if (DEBUG) {
            assertIsTrue(items.every(function (item) {
              return item.weight === 0.0;
            }));
          }
        };
        _proto2._checkAlternation = function _checkAlternation(newChoseIndex, fadeInDurations) {
          var items = this._items,
            oldChoseIndex = this._chosenPoseIndex;
          var nPoses = items.length;
          if (!nPoses) {
            return;
          }

          // If no alternation happened, do nothing.
          if (newChoseIndex === oldChoseIndex) {
            return;
          }

          // If the new chose is invalid, do nothing. That means:
          // - if there's a valid chose before, that chose keeps not changed.
          // - otherwise, keep no chose state.
          if (newChoseIndex < 0 || newChoseIndex >= nPoses) {
            return;
          }

          // Otherwise, plan so that in new chosen pose's fade-in duration:
          // - new chosen pose starts transitioning to weight 1,
          // - other poses start transitioning to weight 0.

          var newFadeInDuration = Math.max(fadeInDurations[newChoseIndex], 0.0);
          // If the new altering duration is zero, directly fill the weights.
          // We do this since we treat `this._elapsedTransitionTime <= this._blendingDuration` as "done",
          // and then weights would not get not further update.
          // See line #no-weights-update-if-done .
          if (newFadeInDuration < ZERO_ALTERING_DURATION_THRESHOLD) {
            for (var iPose = 0; iPose < nPoses; ++iPose) {
              var item = items[iPose];
              if (iPose === newChoseIndex) {
                item.selfSourceWeight = 1.0;
                item.selfTargetWeight = 1.0;
                item.weight = 1.0;
              } else {
                item.selfSourceWeight = 0.0;
                item.selfTargetWeight = 0.0;
                item.weight = 0.0;
              }
            }
          } else {
            var oldUniformTransitionRatio = this._blendingDuration < ZERO_ALTERING_DURATION_THRESHOLD ? 1.0 : this._elapsedTransitionTime / this._blendingDuration;
            for (var _iPose2 = 0; _iPose2 < nPoses; ++_iPose2) {
              var _item2 = items[_iPose2];
              // Reset starting weight as current weight.
              // Don't use `item.weight` since it's absolute weight.
              _item2.selfSourceWeight = lerp(_item2.selfSourceWeight, _item2.selfTargetWeight, oldUniformTransitionRatio);
              if (_iPose2 === newChoseIndex) {
                _item2.selfTargetWeight = 1.0;
              } else {
                _item2.selfTargetWeight = 0.0;
              }
            }
          }
          this._chosenPoseIndex = newChoseIndex;
          this._elapsedTransitionTime = 0.0;
          this._blendingDuration = newFadeInDuration;
        };
        _createClass(EvaluationRecord, [{
          key: "items",
          get: function get() {
            return this._items;
          }
        }]);
        return EvaluationRecord;
      }();
      ItemEvaluationRecord = function ItemEvaluationRecord() {
        this.selfSourceWeight = 0.0;
        this.selfTargetWeight = 0.0;
        /** Absolute weight in node. Used by node. */
        this.weight = 0.0;
      };
    }
  };
});