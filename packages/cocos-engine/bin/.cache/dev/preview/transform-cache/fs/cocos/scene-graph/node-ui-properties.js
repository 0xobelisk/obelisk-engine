System.register("q-bundled:///fs/cocos/scene-graph/node-ui-properties.js", ["../core/platform/debug.js"], function (_export, _context) {
  "use strict";

  var warnID, NodeUIProperties;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
    setters: [function (_corePlatformDebugJs) {
      warnID = _corePlatformDebugJs.warnID;
    }],
    execute: function () {
      /**
       * @en Node's UI properties abstraction
       * @zh 节点上 UI 相关的属性抽象类
       */
      _export("NodeUIProperties", NodeUIProperties = /*#__PURE__*/function () {
        var _proto = NodeUIProperties.prototype;
        /**
         * NOTE: engineInternal tag cannot only mark opacity setter as internal.
         * @engineInternal
         */
        _proto.setOpacity = function setOpacity(v) {
          this._opacity = v;
        };
        function NodeUIProperties(node) {
          this._uiComp = null;
          /**
           * @en The opacity of the UI node for final rendering
           * @zh 最终显示的 UI 透明度，受父节点透明度影响
           */
          this._opacity = 1;
          /**
           * @en The opacity of the UI node itself
           * @zh 本节点的 UI 透明度
           */
          this._localOpacity = 1;
          this.colorDirty = true;
          this._uiTransformComp = null;
          this._node = void 0;
          this._node = node;
        }

        /**
         * @deprecated since v3.4
         */
        _proto.applyOpacity = function applyOpacity(effectOpacity) {
          this._opacity = this._localOpacity * effectOpacity;
        }

        /**
         * @en Make the opacity state of node tree is dirty, not effect anymore
         * @zh 为结点树的透明度状态设置脏标签，不再有效果
         * @deprecated since v3.4
         */;
        NodeUIProperties.markOpacityTree = function markOpacityTree(node, isDirty) {
          if (isDirty === void 0) {
            isDirty = true;
          }
        };
        _createClass(NodeUIProperties, [{
          key: "uiTransformComp",
          get:
          /**
           * @en The UI transform component
           * @zh UI 变换组件
           */
          function get() {
            if (!this._uiTransformComp) {
              this._uiTransformComp = this._node.getComponent('cc.UITransform');
            }
            return this._uiTransformComp;
          },
          set: function set(value) {
            this._uiTransformComp = value;
          }

          /**
           * @en The base UI component
           * @zh UI 基类组件
           */
        }, {
          key: "uiComp",
          get: function get() {
            return this._uiComp;
          },
          set: function set(comp) {
            if (this._uiComp && comp) {
              warnID(12002);
              return;
            }
            this._uiComp = comp;
          }
        }, {
          key: "opacity",
          get: function get() {
            return this._opacity;
          }
        }, {
          key: "localOpacity",
          get: function get() {
            return this._localOpacity;
          },
          set: function set(val) {
            this._localOpacity = val;
            this.colorDirty = true;
          }
        }]);
        return NodeUIProperties;
      }());
    }
  };
});