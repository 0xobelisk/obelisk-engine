System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/stash/runtime-stash.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/index.js", "../../animation-graph-context.js", "../instantiation.js"], function (_export, _context) {
  "use strict";

  var DEBUG, approx, assertIsTrue, error, AnimationGraphUpdateContextGenerator, instantiatePoseGraph, RuntimeStashRecord, RuntimeStashManager, StashRecordState;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  _export("RuntimeStashManager", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      approx = _coreIndexJs.approx;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      error = _coreIndexJs.error;
    }, function (_animationGraphContextJs) {
      AnimationGraphUpdateContextGenerator = _animationGraphContextJs.AnimationGraphUpdateContextGenerator;
    }, function (_instantiationJs) {
      instantiatePoseGraph = _instantiationJs.instantiatePoseGraph;
    }],
    execute: function () {
      (function (StashRecordState) {
        StashRecordState[StashRecordState["UNINITIALIZED"] = 0] = "UNINITIALIZED";
        StashRecordState[StashRecordState["UNSETTLED"] = 1] = "UNSETTLED";
        StashRecordState[StashRecordState["SETTLED"] = 2] = "SETTLED";
        StashRecordState[StashRecordState["UP_TO_DATE"] = 3] = "UP_TO_DATE";
        StashRecordState[StashRecordState["OUTDATED"] = 4] = "OUTDATED";
        StashRecordState[StashRecordState["UPDATING"] = 5] = "UPDATING";
        StashRecordState[StashRecordState["UPDATED"] = 6] = "UPDATED";
        StashRecordState[StashRecordState["EVALUATING"] = 7] = "EVALUATING";
        StashRecordState[StashRecordState["EVALUATED"] = 8] = "EVALUATED";
      })(StashRecordState || (StashRecordState = {}));
      RuntimeStashRecord = class RuntimeStashRecord {
        constructor(_allocator) {
          this._state = StashRecordState.UNINITIALIZED;
          this._instantiatedPoseGraph = undefined;
          this._maxRequestedUpdateTime = 0.0;
          this._evaluationCache = null;
          this._updateContextGenerator = new AnimationGraphUpdateContextGenerator();
          this._allocator = _allocator;
        }
        set(stash, context) {
          assertIsTrue(this._state === StashRecordState.UNINITIALIZED, `The stash has already been set.`);
          const instantiatedPoseGraph = instantiatePoseGraph(stash.graph, context);
          instantiatedPoseGraph.bind(context);
          this._instantiatedPoseGraph = instantiatedPoseGraph;
          this._state = StashRecordState.UNSETTLED;
        }
        settle(context) {
          assertIsTrue(this._state === StashRecordState.UNSETTLED // First time settle
          || this._state === StashRecordState.SETTLED // Resettle
          );

          assertIsTrue(this._instantiatedPoseGraph);
          this._instantiatedPoseGraph.settle(context);
          this._state = StashRecordState.SETTLED;
        }
        reset() {
          switch (this._state) {
            case StashRecordState.SETTLED: // Happen when the stash was not reentered till now.
            case StashRecordState.OUTDATED:
              // Happen when the stash keeps outdated.
              break;
            case StashRecordState.UP_TO_DATE:
              // Happen when the stash was not updated in this frame.
              this._state = StashRecordState.OUTDATED; // It's then outdated.
              break;
            case StashRecordState.UPDATED:
            // Note: shall this means the stash is updated but not evaluated.
            // fallthrough
            case StashRecordState.EVALUATED:
              if (this._evaluationCache) {
                this._allocator.destroyPose(this._evaluationCache);
                this._evaluationCache = null;
              }
              this._maxRequestedUpdateTime = 0.0;
              this._state = StashRecordState.UP_TO_DATE;
              break;
            case StashRecordState.UNINITIALIZED:
            default:
              assertIsTrue(false, `Unexpected stash state`);
          }
        }
        reenter() {
          switch (this._state) {
            default:
              assertIsTrue(false, `Unexpected stash state ${this._state} when reenter().`);
              break;
            case StashRecordState.UP_TO_DATE: // Happen when the state was updated in last frame but received a reenter() request this frame.
            case StashRecordState.UPDATED:
              // Happen when the state has been update() in this frame at one place but request reenter() at another place.
              break;
            case StashRecordState.SETTLED: // Happen when the state is first reenter().
            case StashRecordState.OUTDATED:
              {
                // Happen when the state has been outdated.
                this._state = StashRecordState.UP_TO_DATE;
                assertIsTrue(this._instantiatedPoseGraph);
                this._instantiatedPoseGraph.reenter();
                break;
              }
          }
        }
        requestUpdate(context) {
          const {
            deltaTime
          } = context;
          assertIsTrue(this._state === StashRecordState.OUTDATED || this._state === StashRecordState.UP_TO_DATE || this._state === StashRecordState.UPDATING || this._state === StashRecordState.UPDATED);
          assertIsTrue(this._instantiatedPoseGraph);

          // We entered a loop, stop.
          if (this._state === StashRecordState.UPDATING) {
            return;
          }

          // Note: even `deltaTime < this._maxRequestedUpdateTime`(the `diffDeltaTime` becomes 0.0),
          // the `context.directiveAbsoluteWeight` might not be 0.0.
          // We still need to trigger an update since some nodes(such as PlayMotion) needs to accumulate weight.
          const diffDeltaTime = Math.max(0.0, deltaTime - this._maxRequestedUpdateTime);
          // We accepted two same time-length update, don't do redundant updates.
          // After PR #14990, this should always true.
          if (this._state === StashRecordState.UPDATED) {
            if (approx(diffDeltaTime, 0.0, 1e-8)) {
              return;
            } else {
              // eslint-disable-next-line no-lonely-if
              if (DEBUG) {
                error(`Arrived here indicates a violent of PR #14990. Please report the BUG.`);
                return;
              }
            }
          }
          this._state = StashRecordState.UPDATING;
          this._maxRequestedUpdateTime = Math.max(deltaTime, this._maxRequestedUpdateTime);
          const updateContext = this._updateContextGenerator.generate(diffDeltaTime, context.indicativeWeight);
          this._instantiatedPoseGraph.update(updateContext);
          this._state = StashRecordState.UPDATED;
        }
        evaluate(context) {
          switch (this._state) {
            default:
              assertIsTrue(false, `Unexpected stash state ${this._state} when evaluate().`);
              break;
            case StashRecordState.EVALUATING:
              // Circular reference occurred.
              this._state = StashRecordState.EVALUATED;
              break;
            case StashRecordState.EVALUATED:
              // Already evaluated.
              break;
            case StashRecordState.UPDATED:
              {
                var _this$_instantiatedPo;
                assertIsTrue(!this._evaluationCache);
                this._state = StashRecordState.EVALUATING;
                const pose = (_this$_instantiatedPo = this._instantiatedPoseGraph) === null || _this$_instantiatedPo === void 0 ? void 0 : _this$_instantiatedPo.evaluate(context);
                this._state = StashRecordState.EVALUATED;
                if (pose) {
                  const heapPose = this._allocator.allocatePose();
                  heapPose.transforms.set(pose.transforms);
                  heapPose.auxiliaryCurves.set(pose.auxiliaryCurves);
                  this._evaluationCache = heapPose;
                  context.popPose();
                }
                this._state = StashRecordState.EVALUATED;
                break;
              }
          }
          assertIsTrue(this._state === StashRecordState.EVALUATED);
          assertIsTrue(this._instantiatedPoseGraph);
          return this._evaluationCache ? context.pushDuplicatedPose(this._evaluationCache) : null;
        }
      };
      _export("RuntimeStashManager", RuntimeStashManager = class RuntimeStashManager {
        constructor(allocator) {
          this._allocator = void 0;
          this._stashEvaluations = {};
          this._allocator = allocator;
        }
        bindStash(id) {
          return this._stashEvaluations[id];
        }
        getStash(id) {
          return this._stashEvaluations[id];
        }
        addStash(id) {
          this._stashEvaluations[id] = new RuntimeStashRecord(this._allocator);
        }
        setStash(id, stash, context) {
          assertIsTrue(id in this._stashEvaluations);
          this._stashEvaluations[id].set(stash, context);
        }
        reset() {
          for (const stashId in this._stashEvaluations) {
            const record = this._stashEvaluations[stashId];
            record.reset();
          }
        }
        settle(context) {
          for (const stashId in this._stashEvaluations) {
            const record = this._stashEvaluations[stashId];
            record.settle(context);
          }
        }
      });
    }
  };
});