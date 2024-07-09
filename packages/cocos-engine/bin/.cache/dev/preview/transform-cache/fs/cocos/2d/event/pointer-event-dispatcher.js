System.register("q-bundled:///fs/cocos/2d/event/pointer-event-dispatcher.js", ["../../input/index.js", "../../input/types/index.js", "../../scene-graph/node-event-processor.js", "../../core/index.js", "../../input/types/event-enum.js", "../../input/input.js"], function (_export, _context) {
  "use strict";

  var Input, input, EventTouch, DispatcherEventType, NodeEventProcessor, js, InputEventType, EventDispatcherPriority, mouseEvents, touchEvents, PointerEventDispatcher, pointerEventDispatcher;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
    setters: [function (_inputIndexJs) {
      Input = _inputIndexJs.Input;
      input = _inputIndexJs.input;
    }, function (_inputTypesIndexJs) {
      EventTouch = _inputTypesIndexJs.EventTouch;
    }, function (_sceneGraphNodeEventProcessorJs) {
      DispatcherEventType = _sceneGraphNodeEventProcessorJs.DispatcherEventType;
      NodeEventProcessor = _sceneGraphNodeEventProcessorJs.NodeEventProcessor;
    }, function (_coreIndexJs) {
      js = _coreIndexJs.js;
    }, function (_inputTypesEventEnumJs) {
      InputEventType = _inputTypesEventEnumJs.InputEventType;
    }, function (_inputInputJs) {
      EventDispatcherPriority = _inputInputJs.EventDispatcherPriority;
    }],
    execute: function () {
      mouseEvents = [Input.EventType.MOUSE_DOWN, Input.EventType.MOUSE_MOVE, Input.EventType.MOUSE_UP, Input.EventType.MOUSE_WHEEL];
      touchEvents = [Input.EventType.TOUCH_START, Input.EventType.TOUCH_MOVE, Input.EventType.TOUCH_END, Input.EventType.TOUCH_CANCEL];
      PointerEventDispatcher = /*#__PURE__*/function () {
        function PointerEventDispatcher() {
          this.priority = EventDispatcherPriority.UI;
          this._isListDirty = false;
          this._inDispatchCount = 0;
          this._pointerEventProcessorList = [];
          this._processorListToAdd = [];
          this._processorListToRemove = [];
          input._registerEventDispatcher(this);
          NodeEventProcessor.callbacksInvoker.on(DispatcherEventType.ADD_POINTER_EVENT_PROCESSOR, this.addPointerEventProcessor, this);
          NodeEventProcessor.callbacksInvoker.on(DispatcherEventType.REMOVE_POINTER_EVENT_PROCESSOR, this.removePointerEventProcessor, this);
          NodeEventProcessor.callbacksInvoker.on(DispatcherEventType.MARK_LIST_DIRTY, this._markListDirty, this);
        }
        var _proto = PointerEventDispatcher.prototype;
        _proto.dispatchEvent = function dispatchEvent(event) {
          var eventType = event.type;
          if (touchEvents.includes(eventType)) {
            return this.dispatchEventTouch(event);
          } else if (mouseEvents.includes(eventType)) {
            return this.dispatchEventMouse(event);
          }
          return true;
        };
        _proto.addPointerEventProcessor = function addPointerEventProcessor(pointerEventProcessor) {
          if (this._inDispatchCount === 0) {
            if (!this._pointerEventProcessorList.includes(pointerEventProcessor)) {
              this._pointerEventProcessorList.push(pointerEventProcessor);
              this._isListDirty = true;
            }
          } else if (!this._processorListToAdd.includes(pointerEventProcessor)) {
            this._processorListToAdd.push(pointerEventProcessor);
          }
          js.array.remove(this._processorListToRemove, pointerEventProcessor);
        };
        _proto.removePointerEventProcessor = function removePointerEventProcessor(pointerEventProcessor) {
          if (this._inDispatchCount === 0) {
            js.array.remove(this._pointerEventProcessorList, pointerEventProcessor);
            this._isListDirty = true;
          } else if (!this._processorListToRemove.includes(pointerEventProcessor)) {
            this._processorListToRemove.push(pointerEventProcessor);
          }
          js.array.remove(this._processorListToAdd, pointerEventProcessor);
        };
        _proto.dispatchEventMouse = function dispatchEventMouse(eventMouse) {
          this._inDispatchCount++;
          this._sortPointerEventProcessorList();
          var pointerEventProcessorList = this._pointerEventProcessorList;
          var length = pointerEventProcessorList.length;
          var dispatchToNextEventDispatcher = true;
          for (var i = 0; i < length; ++i) {
            var pointerEventProcessor = pointerEventProcessorList[i];
            if (pointerEventProcessor.isEnabled && pointerEventProcessor.shouldHandleEventMouse && pointerEventProcessor._handleEventMouse(eventMouse)) {
              dispatchToNextEventDispatcher = false;
              if (!eventMouse.preventSwallow) {
                break;
              } else {
                eventMouse.preventSwallow = false; // reset swallow state
              }
            }
          }

          if (--this._inDispatchCount <= 0) {
            this._updatePointerEventProcessorList();
          }
          return dispatchToNextEventDispatcher;
        };
        _proto.dispatchEventTouch = function dispatchEventTouch(eventTouch) {
          this._inDispatchCount++;
          this._sortPointerEventProcessorList();
          var pointerEventProcessorList = this._pointerEventProcessorList;
          var length = pointerEventProcessorList.length;
          var touch = eventTouch.touch;
          var dispatchToNextEventDispatcher = true;
          for (var i = 0; i < length; ++i) {
            var pointerEventProcessor = pointerEventProcessorList[i];
            if (pointerEventProcessor.isEnabled && pointerEventProcessor.shouldHandleEventTouch) {
              if (eventTouch.type === InputEventType.TOUCH_START) {
                if (pointerEventProcessor._handleEventTouch(eventTouch)) {
                  // pointerEventProcessor may be disabled in handling touch event above.
                  if (pointerEventProcessor.isEnabled) {
                    pointerEventProcessor.claimedTouchIdList.push(touch.getID());
                  } else {
                    var cancelEvent = new EventTouch([eventTouch.touch], true, InputEventType.TOUCH_CANCEL);
                    cancelEvent.touch = eventTouch.touch;
                    pointerEventProcessor.dispatchEvent(cancelEvent);
                    pointerEventProcessor.claimedTouchIdList.length = 0;
                  }
                  dispatchToNextEventDispatcher = false;
                  if (!eventTouch.preventSwallow) {
                    break;
                  } else {
                    eventTouch.preventSwallow = false; // reset swallow state
                  }
                }
              } else if (pointerEventProcessor.claimedTouchIdList.length > 0) {
                var index = pointerEventProcessor.claimedTouchIdList.indexOf(touch.getID());
                if (index !== -1) {
                  pointerEventProcessor._handleEventTouch(eventTouch);
                  if (eventTouch.type === InputEventType.TOUCH_END || eventTouch.type === InputEventType.TOUCH_CANCEL) {
                    js.array.removeAt(pointerEventProcessor.claimedTouchIdList, index);
                  }
                  dispatchToNextEventDispatcher = false;
                  if (!eventTouch.preventSwallow) {
                    break;
                  } else {
                    eventTouch.preventSwallow = false; // reset swallow state
                  }
                }
              }
            }
          }

          if (--this._inDispatchCount <= 0) {
            this._updatePointerEventProcessorList();
          }
          return dispatchToNextEventDispatcher;
        };
        _proto._updatePointerEventProcessorList = function _updatePointerEventProcessorList() {
          var listToAdd = this._processorListToAdd;
          var addLength = listToAdd.length;
          for (var i = 0; i < addLength; ++i) {
            this.addPointerEventProcessor(listToAdd[i]);
          }
          listToAdd.length = 0;
          var listToRemove = this._processorListToRemove;
          var removeLength = listToRemove.length;
          for (var _i = 0; _i < removeLength; ++_i) {
            this.removePointerEventProcessor(listToRemove[_i]);
          }
          listToRemove.length = 0;
        };
        _proto._sortPointerEventProcessorList = function _sortPointerEventProcessorList() {
          if (!this._isListDirty) {
            return;
          }
          var pointerEventProcessorList = this._pointerEventProcessorList;
          var length = pointerEventProcessorList.length;
          for (var i = 0; i < length; ++i) {
            var pointerEventProcessor = pointerEventProcessorList[i];
            var node = pointerEventProcessor.node;
            if (node._uiProps) {
              var trans = node._uiProps.uiTransformComp;
              pointerEventProcessor.cachedCameraPriority = trans.cameraPriority;
            }
          }
          pointerEventProcessorList.sort(this._sortByPriority);
          this._isListDirty = false;
        };
        _proto._sortByPriority = function _sortByPriority(p1, p2) {
          var node1 = p1.node;
          var node2 = p2.node;
          if (!p2 || !node2 || !node2.activeInHierarchy || !node2._uiProps.uiTransformComp) {
            return -1;
          } else if (!p1 || !node1 || !node1.activeInHierarchy || !node1._uiProps.uiTransformComp) {
            return 1;
          }
          if (p1.cachedCameraPriority !== p2.cachedCameraPriority) {
            return p2.cachedCameraPriority - p1.cachedCameraPriority;
          }
          var n1 = node1;
          var n2 = node2;
          var ex = false;
          while (((_parent = n1.parent) === null || _parent === void 0 ? void 0 : _parent.uuid) !== ((_parent2 = n2.parent) === null || _parent2 === void 0 ? void 0 : _parent2.uuid)) {
            var _parent, _parent2, _n, _n$parent, _n2, _n2$parent;
            n1 = ((_n = n1) === null || _n === void 0 ? void 0 : (_n$parent = _n.parent) === null || _n$parent === void 0 ? void 0 : _n$parent.parent) === null ? (ex = true) && node2 : n1 && n1.parent;
            n2 = ((_n2 = n2) === null || _n2 === void 0 ? void 0 : (_n2$parent = _n2.parent) === null || _n2$parent === void 0 ? void 0 : _n2$parent.parent) === null ? (ex = true) && node1 : n2 && n2.parent;
          }
          if (n1.uuid === n2.uuid) {
            if (n1.uuid === node2.uuid) {
              return -1;
            }
            if (n1.uuid === node1.uuid) {
              return 1;
            }
          }
          var priority1 = n1 ? n1.getSiblingIndex() : 0;
          var priority2 = n2 ? n2.getSiblingIndex() : 0;
          return ex ? priority1 - priority2 : priority2 - priority1;
        };
        _proto._markListDirty = function _markListDirty() {
          this._isListDirty = true;
        };
        return PointerEventDispatcher;
      }();
      _export("pointerEventDispatcher", pointerEventDispatcher = new PointerEventDispatcher());
    }
  };
});