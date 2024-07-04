System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/motion-sync/runtime-motion-sync.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/index.js"], function (_export, _context) {
  "use strict";

  var DEBUG, approx, assertIsTrue, RuntimeMotionSyncManager, Group, RuntimeMotionSyncRecordImpl;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      approx = _coreIndexJs.approx;
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }],
    execute: function () {
      _export("RuntimeMotionSyncManager", RuntimeMotionSyncManager = /*#__PURE__*/function () {
        function RuntimeMotionSyncManager() {
          this._groups = [];
        }
        var _proto = RuntimeMotionSyncManager.prototype;
        _proto.register = function register(syncInfo) {
          var groupName = syncInfo.group;
          var group = this._groups.find(function (group) {
            return group.name === groupName;
          });
          if (!group) {
            group = new Group(groupName);
            this._groups.push(group);
          }
          return group.addMember();
        };
        _proto.sync = function sync() {
          for (var _iterator = _createForOfIteratorHelperLoose(this._groups), _step; !(_step = _iterator()).done;) {
            var group = _step.value;
            group.sync();
          }
        };
        return RuntimeMotionSyncManager;
      }());
      Group = /*#__PURE__*/function () {
        function Group(name) {
          this._lastLeader = undefined;
          this._records = [];
          this.name = name;
        }
        var _proto2 = Group.prototype;
        _proto2.addMember = function addMember() {
          var record = new RuntimeMotionSyncRecordImpl();
          this._records.push(record);
          return record;
        };
        _proto2.sync = function sync() {
          var records = this._records;
          var nRecords = records.length;
          assertIsTrue(nRecords > 0);
          var lastLeader = this._lastLeader;
          this._lastLeader = undefined;

          // Do nothing if all of records are inactive.
          if (records.every(function (r) {
            return !r.active;
          })) {
            return;
          }

          // Sort records so that higher weighted records are in front,
          // inactive records are treated having weight -1.
          records.sort(function (a, b) {
            var kA = a.active ? a.weight : -1.0;
            var kB = b.active ? b.weight : -1.0;
            return kB - kA;
          });

          // Assertion: inactive records are in tail.
          if (DEBUG) {
            var firstInactiveRecord = records.findIndex(function (r) {
              return !r.active;
            });
            assertIsTrue((firstInactiveRecord < 0 ? [] : records.slice(firstInactiveRecord)).every(function (r) {
              return !r.active;
            }));
          }

          // Here's an optimization:
          // if two or more records have almost same weight. Their order is indeterminate.
          // To avoid this, we prefer the leader during previous sync.
          var leaderIndex = 0;
          var leaderWeight = records[0].weight;
          // If the first record is just the last leader, everyone is happy, nothing to do.
          if (records[leaderIndex] !== lastLeader) {
            for (var iRecord = 0; iRecord < nRecords; ++iRecord) {
              var record = records[iRecord];
              if (!record.active || !approx(record.weight, leaderWeight, 1e-6)) {
                break;
              }
              if (record === lastLeader) {
                leaderIndex = iRecord;
                break;
              }
            }
          }

          // Assertion: the first record is active. It becomes the leader.
          assertIsTrue(records[leaderIndex].active);
          this._lastLeader = records[leaderIndex];

          // Sync followers to follow the leader.
          var leaderNormalizedTime = records[leaderIndex].normalizedTime;
          for (var _iRecord = 0; _iRecord < nRecords; ++_iRecord) {
            var _record = records[_iRecord];
            if (!_record.active) {
              break;
            }
            _record.normalizedTime = leaderNormalizedTime;
            _record.reset();
          }
        };
        return Group;
      }();
      RuntimeMotionSyncRecordImpl = /*#__PURE__*/function () {
        function RuntimeMotionSyncRecordImpl() {
          this.normalizedTime = 0.0;
          this.weight = 0.0;
          this.active = false;
        }
        var _proto3 = RuntimeMotionSyncRecordImpl.prototype;
        _proto3.notifyRenter = function notifyRenter(normalizedTime) {
          this.reset();
          this.normalizedTime = normalizedTime;
        };
        _proto3.notifyUpdate = function notifyUpdate(normalizedDeltaTime, weight) {
          this.normalizedTime += normalizedDeltaTime;
          // Note: we're allowing update multiple times. The first update becomes "activate".
          if (this.active) {
            this.weight += weight;
          } else {
            this.active = true;
            this.weight = weight;
          }
        };
        _proto3.reset = function reset() {
          this.active = false;
          this.weight = 0.0;
        };
        _proto3.getSyncedEnterTime = function getSyncedEnterTime() {
          return this.normalizedTime;
        };
        return RuntimeMotionSyncRecordImpl;
      }();
    }
  };
});