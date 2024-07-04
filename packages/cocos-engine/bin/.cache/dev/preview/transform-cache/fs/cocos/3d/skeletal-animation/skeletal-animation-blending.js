System.register("q-bundled:///fs/cocos/3d/skeletal-animation/skeletal-animation-blending.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, Quat, BlendStateBuffer, BlendStateWriterInternal, TransformApplyFlag, TRANSFORM_APPLY_FLAGS_ALL, LegacyVec3PropertyBlendState, LegacyQuatPropertyBlendState, NodeBlendState, LegacyNodeBlendState, LegacyBlendStateBuffer;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
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
  function mixAveragedVec3(result, previous, accumulatedWeight, input, weight) {
    var newSum = accumulatedWeight + weight;
    if (weight === 1.0 && !accumulatedWeight) {
      Vec3.copy(result, input);
    } else if (newSum) {
      var t = weight / newSum;
      Vec3.lerp(result, result, input, t);
    }
    return newSum;
  }
  function mixAveragedQuat(result, previous, accumulatedWeight, input, weight) {
    var newSum = accumulatedWeight + weight;
    if (weight === 1.0 && !accumulatedWeight) {
      Quat.copy(result, input);
    } else if (newSum) {
      var t = weight / newSum;
      Quat.slerp(result, previous, input, t);
    }
    return newSum;
  }
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      Quat = _coreIndexJs.Quat;
    }],
    execute: function () {
      _export("BlendStateBuffer", BlendStateBuffer = /*#__PURE__*/function () {
        function BlendStateBuffer() {
          this._nodeBlendStates = new Map();
        }
        var _proto = BlendStateBuffer.prototype;
        _proto.createWriter = function createWriter(node, property, host, constants) {
          var propertyBlendState = this.ref(node, property);
          return new BlendStateWriterInternal(node, property, propertyBlendState, host, constants);
        };
        _proto.destroyWriter = function destroyWriter(writer) {
          var internal = writer;
          this.deRef(internal.node, internal.property);
        };
        _proto.ref = function ref(node, property) {
          var nodeBlendState = this._nodeBlendStates.get(node);
          if (!nodeBlendState) {
            nodeBlendState = this.createNodeBlendState();
            this._nodeBlendStates.set(node, nodeBlendState);
          }
          var propertyBlendState = nodeBlendState.refProperty(node, property);
          return propertyBlendState;
        };
        _proto.deRef = function deRef(node, property) {
          var nodeBlendState = this._nodeBlendStates.get(node);
          if (!nodeBlendState) {
            return;
          }
          nodeBlendState.deRefProperty(property);
          if (nodeBlendState.empty) {
            this._nodeBlendStates["delete"](node);
          }
        };
        _proto.apply = function apply() {
          this._nodeBlendStates.forEach(function (nodeBlendState, node) {
            nodeBlendState.apply(node);
          });
        };
        return BlendStateBuffer;
      }());
      BlendStateWriterInternal = /*#__PURE__*/function () {
        function BlendStateWriterInternal(_node, _property, _propertyBlendState, _host, _constants) {
          this._node = _node;
          this._property = _property;
          this._propertyBlendState = _propertyBlendState;
          this._host = _host;
          this._constants = _constants;
        }
        var _proto2 = BlendStateWriterInternal.prototype;
        _proto2.getValue = function getValue() {
          return this._node[this._property];
        };
        _proto2.setValue = function setValue(value) {
          var propertyBlendState = this._propertyBlendState,
            host = this._host;
          var weight = host.weight;
          // TODO: please fix type here @Leslie Leigh
          // Tracking issue: https://github.com/cocos/cocos-engine/issues/14640
          propertyBlendState.blend(value, weight);
        };
        _createClass(BlendStateWriterInternal, [{
          key: "node",
          get: function get() {
            return this._node;
          }
        }, {
          key: "property",
          get: function get() {
            return this._property;
          }
        }]);
        return BlendStateWriterInternal;
      }();
      (function (TransformApplyFlag) {
        TransformApplyFlag[TransformApplyFlag["POSITION"] = 1] = "POSITION";
        TransformApplyFlag[TransformApplyFlag["ROTATION"] = 2] = "ROTATION";
        TransformApplyFlag[TransformApplyFlag["SCALE"] = 4] = "SCALE";
        TransformApplyFlag[TransformApplyFlag["EULER_ANGLES"] = 8] = "EULER_ANGLES";
      })(TransformApplyFlag || (TransformApplyFlag = {}));
      TRANSFORM_APPLY_FLAGS_ALL = TransformApplyFlag.POSITION | TransformApplyFlag.ROTATION | TransformApplyFlag.SCALE | TransformApplyFlag.EULER_ANGLES;
      LegacyVec3PropertyBlendState = /*#__PURE__*/function () {
        function LegacyVec3PropertyBlendState() {
          this.refCount = 0;
          this.accumulatedWeight = 0.0;
          this.result = new Vec3();
        }
        var _proto3 = LegacyVec3PropertyBlendState.prototype;
        _proto3.blend = function blend(value, weight) {
          this.accumulatedWeight = mixAveragedVec3(this.result, this.result, this.accumulatedWeight, value, weight);
        };
        _proto3.reset = function reset() {
          this.accumulatedWeight = 0.0;
          Vec3.zero(this.result);
        };
        return LegacyVec3PropertyBlendState;
      }();
      LegacyQuatPropertyBlendState = /*#__PURE__*/function () {
        function LegacyQuatPropertyBlendState() {
          this.refCount = 0;
          this.accumulatedWeight = 0.0;
          this.result = new Quat();
        }
        var _proto4 = LegacyQuatPropertyBlendState.prototype;
        _proto4.blend = function blend(value, weight) {
          this.accumulatedWeight = mixAveragedQuat(this.result, this.result, this.accumulatedWeight, value, weight);
        };
        _proto4.reset = function reset() {
          this.accumulatedWeight = 0.0;
          Quat.identity(this.result);
        };
        return LegacyQuatPropertyBlendState;
      }();
      NodeBlendState = /*#__PURE__*/function () {
        function NodeBlendState() {
          this._transformApplyFlags = 0;
          this._properties = {};
        }
        var _proto5 = NodeBlendState.prototype;
        _proto5.refProperty = function refProperty(node, property) {
          var _properties$property, _properties$property2;
          var properties = this._properties;
          var propertyBlendState;
          switch (property) {
            default:
            case 'position':
            case 'scale':
            case 'eulerAngles':
              propertyBlendState = (_properties$property = properties[property]) !== null && _properties$property !== void 0 ? _properties$property : properties[property] = this._createVec3BlendState(node[property]);
              break;
            case 'rotation':
              propertyBlendState = (_properties$property2 = properties[property]) !== null && _properties$property2 !== void 0 ? _properties$property2 : properties[property] = this._createQuatBlendState(node.rotation);
              break;
          }
          ++propertyBlendState.refCount;
          return propertyBlendState;
        };
        _proto5.deRefProperty = function deRefProperty(property) {
          var properties = this._properties;
          var propertyBlendState = properties[property];
          if (!propertyBlendState) {
            return;
          }
          --propertyBlendState.refCount;
          if (propertyBlendState.refCount > 0) {
            return;
          }
          delete properties[property];
        };
        _proto5.apply = function apply(node) {
          var transformApplyFlags = this._transformApplyFlags,
            _this$_properties = this._properties,
            position = _this$_properties.position,
            scale = _this$_properties.scale,
            rotation = _this$_properties.rotation,
            eulerAngles = _this$_properties.eulerAngles;
          if (!transformApplyFlags) {
            return;
          }
          var t;
          var s;
          var r;
          if (position && transformApplyFlags & TransformApplyFlag.POSITION) {
            t = position.result;
          }
          if (scale && transformApplyFlags & TransformApplyFlag.SCALE) {
            s = scale.result;
          }
          if (eulerAngles && transformApplyFlags & TransformApplyFlag.EULER_ANGLES) {
            r = eulerAngles.result;
          }
          if (rotation && transformApplyFlags & TransformApplyFlag.ROTATION) {
            r = rotation.result;
          }
          if (r || t || s) {
            node.setRTS(r, t, s);
          }
          this._transformApplyFlags = 0;
        };
        _createClass(NodeBlendState, [{
          key: "empty",
          get: function get() {
            var properties = this._properties;
            return !properties.position && !properties.rotation && !properties.eulerAngles && !properties.scale;
          }
        }]);
        return NodeBlendState;
      }();
      LegacyNodeBlendState = /*#__PURE__*/function (_NodeBlendState) {
        _inheritsLoose(LegacyNodeBlendState, _NodeBlendState);
        function LegacyNodeBlendState() {
          return _NodeBlendState.apply(this, arguments) || this;
        }
        var _proto6 = LegacyNodeBlendState.prototype;
        _proto6.apply = function apply(node) {
          var _this$_properties2 = this._properties,
            position = _this$_properties2.position,
            scale = _this$_properties2.scale,
            rotation = _this$_properties2.rotation,
            eulerAngles = _this$_properties2.eulerAngles;
          if (position && position.accumulatedWeight) {
            this._transformApplyFlags |= TransformApplyFlag.POSITION;
            if (position.accumulatedWeight < 1.0) {
              position.blend(node.position, 1.0 - position.accumulatedWeight);
            }
          }
          if (scale && scale.accumulatedWeight) {
            this._transformApplyFlags |= TransformApplyFlag.SCALE;
            if (scale.accumulatedWeight < 1.0) {
              scale.blend(node.scale, 1.0 - scale.accumulatedWeight);
            }
          }
          if (eulerAngles && eulerAngles.accumulatedWeight) {
            this._transformApplyFlags |= TransformApplyFlag.EULER_ANGLES;
            if (eulerAngles.accumulatedWeight < 1.0) {
              eulerAngles.blend(node.eulerAngles, 1.0 - eulerAngles.accumulatedWeight);
            }
          }
          if (rotation && rotation.accumulatedWeight) {
            this._transformApplyFlags |= TransformApplyFlag.ROTATION;
            if (rotation.accumulatedWeight < 1.0) {
              rotation.blend(node.rotation, 1.0 - rotation.accumulatedWeight);
            }
          }
          _NodeBlendState.prototype.apply.call(this, node);
          position === null || position === void 0 ? void 0 : position.reset();
          scale === null || scale === void 0 ? void 0 : scale.reset();
          rotation === null || rotation === void 0 ? void 0 : rotation.reset();
          eulerAngles === null || eulerAngles === void 0 ? void 0 : eulerAngles.reset();
        };
        _proto6._createVec3BlendState = function _createVec3BlendState(_currentValue) {
          return new LegacyVec3PropertyBlendState();
        };
        _proto6._createQuatBlendState = function _createQuatBlendState(_currentValue) {
          return new LegacyQuatPropertyBlendState();
        };
        return LegacyNodeBlendState;
      }(NodeBlendState);
      _export("LegacyBlendStateBuffer", LegacyBlendStateBuffer = /*#__PURE__*/function (_BlendStateBuffer) {
        _inheritsLoose(LegacyBlendStateBuffer, _BlendStateBuffer);
        function LegacyBlendStateBuffer() {
          return _BlendStateBuffer.apply(this, arguments) || this;
        }
        var _proto7 = LegacyBlendStateBuffer.prototype;
        _proto7.createNodeBlendState = function createNodeBlendState() {
          return new LegacyNodeBlendState();
        };
        return LegacyBlendStateBuffer;
      }(BlendStateBuffer));
    }
  };
});