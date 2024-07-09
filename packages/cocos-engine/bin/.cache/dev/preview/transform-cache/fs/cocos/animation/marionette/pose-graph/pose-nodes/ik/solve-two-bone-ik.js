System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/ik/solve-two-bone-ik.js", ["../../../../../../../virtual/internal%253Aconstants.js", "../../../../../core/index.js", "./two-bone-ik-debugger.js"], function (_export, _context) {
  "use strict";

  var DEBUG, approx, clamp, Quat, Vec3, debugTwoBoneIKDraw, SANITY_CHECK_ENABLED, TwoBoneIKPositionSanityChecker, solveTwoBoneIK, solveTwoBoneIKPositions;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      approx = _coreIndexJs.approx;
      clamp = _coreIndexJs.clamp;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_twoBoneIkDebuggerJs) {
      debugTwoBoneIKDraw = _twoBoneIkDebuggerJs.debugTwoBoneIKDraw;
    }],
    execute: function () {
      SANITY_CHECK_ENABLED = DEBUG;
      TwoBoneIKPositionSanityChecker = /*#__PURE__*/function () {
        function TwoBoneIKPositionSanityChecker() {
          this._a = new Vec3();
        }
        var _proto = TwoBoneIKPositionSanityChecker.prototype;
        _proto.reset = function reset(a, b, c) {
          Vec3.copy(this._a, a);
          this._dAB = Vec3.distance(a, b);
          this._dBC = Vec3.distance(b, c);
        };
        _proto.check = function check(_a, _b, _c) {
          var CHECK_EPSILON = 1e-3;
          var dAB = Vec3.distance(_a, _b);
          var dBC = Vec3.distance(_b, _c);
          if (!approx(Vec3.distance(_a, this._a), 0.0, CHECK_EPSILON)) {
            // eslint-disable-next-line no-debugger
            debugger;
            return false;
          }
          if (!approx(dAB, this._dAB, CHECK_EPSILON)) {
            // eslint-disable-next-line no-debugger
            debugger;
            return false;
          }
          if (!approx(dBC, this._dBC, CHECK_EPSILON)) {
            // eslint-disable-next-line no-debugger
            debugger;
            return false;
          }
          return true;
        };
        return TwoBoneIKPositionSanityChecker;
      }();
      /**
       * 解算双骨骼（三关节）的 IK 问题。
       * 三关节分别称为根关节、中间关节和末端关节。例如，分别对应于大腿、膝盖和脚关节。
       * @param root 根关节转换（世界空间）。
       * @param middle 中间关节转换（世界空间）。
       * @param end 末端关节转换（世界空间）。
       * @param target 末端关节要抵达的目标位置（世界空间）。
       * @param hint 中间关节的提示位置（世界空间），用于决定中间关节的朝向。
       */
      _export("solveTwoBoneIK", solveTwoBoneIK = function () {
        var cacheQuat = new Quat();
        var cacheHint = new Vec3();
        var cacheBSolved = new Vec3();
        var cacheCSolved = new Vec3();
        var calculateRotationBetweenRays = function () {
          var cacheVec3_1 = new Vec3();
          var cacheVec3_2 = new Vec3();
          return function (out, sourceOrigin, sourceDestination, targetOrigin, targetDestination
          // eslint-disable-next-line arrow-body-style
          ) {
            return Quat.rotationTo(out, Vec3.subtract(cacheVec3_1, sourceDestination, sourceOrigin).normalize(), Vec3.subtract(cacheVec3_2, targetDestination, targetOrigin).normalize());
          };
        }();
        return function (root, middle, end, target, middlePositionHint, debugKey) {
          var hint = Vec3.copy(cacheHint, middlePositionHint !== null && middlePositionHint !== void 0 ? middlePositionHint : middle.position);
          var pA = root.position;
          var pB = middle.position;
          var pC = end.position;
          var qC = end.rotation;
          if (DEBUG) {
            if (typeof debugKey !== undefined) {
              debugTwoBoneIKDraw(debugKey, pA, pB, pC);
            }
          }
          var bSolved = cacheBSolved;
          var cSolved = cacheCSolved;
          solveTwoBoneIKPositions(pA, pB, pC, target, hint, bSolved, cSolved);
          var qA = calculateRotationBetweenRays(cacheQuat, pA, pB, pA, bSolved);
          Quat.multiply(qA, qA, root.rotation);
          root.rotation = qA;
          var qB = calculateRotationBetweenRays(cacheQuat, pB, pC, bSolved, cSolved);
          Quat.multiply(qB, qB, middle.rotation);
          middle.rotation = qB;
          middle.position = bSolved;
          end.position = cSolved;
        };
      }());
      _export("solveTwoBoneIKPositions", solveTwoBoneIKPositions = function () {
        var cacheDirAT = new Vec3();
        var cacheDirAB = new Vec3();
        var cacheDirHeightLine = new Vec3();
        var cacheSanityChecker = SANITY_CHECK_ENABLED ? new TwoBoneIKPositionSanityChecker() : undefined;
        return function (a, b, c, target, middleTarget, bSolved, cSolved) {
          var sanityCheck = cacheSanityChecker ? function () {
            cacheSanityChecker === null || cacheSanityChecker === void 0 ? void 0 : cacheSanityChecker.reset(a, b, c);
            return function () {
              return cacheSanityChecker.check(a, bSolved, cSolved);
            };
          }() : undefined;
          var dAB = Vec3.distance(a, b);
          var dBC = Vec3.distance(b, c);
          var dAT = Vec3.distance(a, target);
          var dirAT = Vec3.subtract(cacheDirAT, target, a);
          dirAT.normalize();
          var chainLength = dAB + dBC;
          if (dAT >= chainLength) {
            // Target is too far
            Vec3.scaleAndAdd(bSolved, a, dirAT, dAB);
            Vec3.scaleAndAdd(cSolved, a, dirAT, chainLength);
            sanityCheck === null || sanityCheck === void 0 ? void 0 : sanityCheck();
            return;
          }

          // Now we should have a solution with target reached.
          // And then solve the middle joint B as Ḃ.
          Vec3.copy(cSolved, target);
          // Calculate ∠BAC's cosine.
          var cosḂAT = clamp((dAB * dAB + dAT * dAT - dBC * dBC) / (2 * dAB * dAT), -1.0, 1.0);
          // Then use basic trigonometry(instead of rotation) to solve Ḃ.
          // Let D the intersect point of the height line passing Ḃ.
          var dirAB = Vec3.subtract(cacheDirAB, middleTarget, a);
          var dirHeightLine = Vec3.projectOnPlane(cacheDirHeightLine, dirAB, dirAT);
          dirHeightLine.normalize();
          var dAD = dAB * cosḂAT;
          var hSqr = dAB * dAB - dAD * dAD;
          if (hSqr < 0) {
            // TODO: 'Shall handle this case';
            // eslint-disable-next-line no-debugger
            debugger;
          }
          var h = Math.sqrt(hSqr);
          Vec3.scaleAndAdd(bSolved, a, dirAT, dAD);
          Vec3.scaleAndAdd(bSolved, bSolved, dirHeightLine, h);
          sanityCheck === null || sanityCheck === void 0 ? void 0 : sanityCheck();
        };
      }());
    }
  };
});