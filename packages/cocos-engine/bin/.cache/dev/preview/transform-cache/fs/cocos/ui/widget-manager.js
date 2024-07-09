System.register("q-bundled:///fs/cocos/ui/widget-manager.js", ["../../../virtual/internal%253Aconstants.js", "pal/screen-adapter", "../game/director.js", "../core/index.js", "./view.js", "../scene-graph/index.js", "../scene-graph/node.js", "./widget.js", "../2d/framework/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, DEV, screenAdapter, Director, director, Vec2, Vec3, visibleRect, js, cclegacy, approx, EPSILON, View, Scene, Node, AlignFlags, AlignMode, computeInverseTransForTarget, getReadonlyNodeSize, Widget, UITransform, _tempPos, _defaultAnchor, tInverseTranslate, tInverseScale, _tempVec2_1, _tempVec2_2, activeWidgets, widgetManager;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2013-2016 Chukong Technologies Inc.
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  // align to borders by adjusting node's position and size (ignore rotation)
  function align(node, widget) {
    // Hack: this flag use to ONCE mode
    if (widget._hadAlignOnce) return;
    if (!EDITOR && widget.alignMode === AlignMode.ONCE) {
      widget._hadAlignOnce = true;
    }
    var hasTarget = widget.target;
    var target;
    var inverseTranslate = tInverseTranslate;
    var inverseScale = tInverseScale;
    if (hasTarget) {
      target = hasTarget;
      // inverseTranslate = tInverseTranslate;
      // inverseScale = tInverseScale;
      computeInverseTransForTarget(node, target, inverseTranslate, inverseScale);
    } else {
      target = node.parent;
    }
    var targetSize = getReadonlyNodeSize(target);
    var useGlobal = target instanceof Scene || !target.getComponent(UITransform);
    var targetAnchor = useGlobal ? _defaultAnchor : target.getComponent(UITransform).anchorPoint;
    var isRoot = useGlobal;
    node.getPosition(_tempPos);
    var uiTrans = node._uiProps.uiTransformComp;
    var x = _tempPos.x;
    var y = _tempPos.y;
    var anchor = uiTrans.anchorPoint;
    var scale = node.getScale();
    if (widget.alignFlags & AlignFlags.HORIZONTAL) {
      var localLeft = 0;
      var localRight = 0;
      var targetWidth = targetSize.width;
      if (isRoot) {
        localLeft = visibleRect.left.x;
        localRight = visibleRect.right.x;
      } else {
        localLeft = -targetAnchor.x * targetWidth;
        localRight = localLeft + targetWidth;
      }

      // adjust borders according to offsets
      localLeft += widget.isAbsoluteLeft ? widget.left : widget.left * targetWidth;
      localRight -= widget.isAbsoluteRight ? widget.right : widget.right * targetWidth;
      if (hasTarget) {
        localLeft += inverseTranslate.x;
        localLeft *= inverseScale.x;
        localRight += inverseTranslate.x;
        localRight *= inverseScale.x;
      }
      var width = 0;
      var anchorX = anchor.x;
      var scaleX = scale.x;
      if (scaleX < 0) {
        anchorX = 1.0 - anchorX;
        scaleX = -scaleX;
      }
      if (widget.isStretchWidth) {
        width = localRight - localLeft;
        if (scaleX !== 0) {
          uiTrans.width = width / scaleX;
        }
        x = localLeft + anchorX * width;
      } else {
        width = uiTrans.width * scaleX;
        if (widget.isAlignHorizontalCenter) {
          var localHorizontalCenter = widget.isAbsoluteHorizontalCenter ? widget.horizontalCenter : widget.horizontalCenter * targetWidth;
          var targetCenter = (0.5 - targetAnchor.x) * targetSize.width;
          if (hasTarget) {
            localHorizontalCenter *= inverseScale.x;
            targetCenter += inverseTranslate.x;
            targetCenter *= inverseScale.x;
          }
          x = targetCenter + (anchorX - 0.5) * width + localHorizontalCenter;
        } else if (widget.isAlignLeft) {
          x = localLeft + anchorX * width;
        } else {
          x = localRight + (anchorX - 1) * width;
        }
        if (!approx(scaleX, 0, EPSILON)) {
          width /= scaleX;
        } else {
          width = uiTrans.width;
        }
      }
      widget._lastSize.width = width;
    }
    if (widget.alignFlags & AlignFlags.VERTICAL) {
      var localTop = 0;
      var localBottom = 0;
      var targetHeight = targetSize.height;
      if (isRoot) {
        localBottom = visibleRect.bottom.y;
        localTop = visibleRect.top.y;
      } else {
        localBottom = -targetAnchor.y * targetHeight;
        localTop = localBottom + targetHeight;
      }

      // adjust borders according to offsets
      localBottom += widget.isAbsoluteBottom ? widget.bottom : widget.bottom * targetHeight;
      localTop -= widget.isAbsoluteTop ? widget.top : widget.top * targetHeight;
      if (hasTarget) {
        // transform
        localBottom += inverseTranslate.y;
        localBottom *= inverseScale.y;
        localTop += inverseTranslate.y;
        localTop *= inverseScale.y;
      }
      var height = 0;
      var anchorY = anchor.y;
      var scaleY = scale.y;
      if (scaleY < 0) {
        anchorY = 1.0 - anchorY;
        scaleY = -scaleY;
      }
      if (widget.isStretchHeight) {
        height = localTop - localBottom;
        if (scaleY !== 0) {
          uiTrans.height = height / scaleY;
        }
        y = localBottom + anchorY * height;
      } else {
        height = uiTrans.height * scaleY;
        if (widget.isAlignVerticalCenter) {
          var localVerticalCenter = widget.isAbsoluteVerticalCenter ? widget.verticalCenter : widget.verticalCenter * targetHeight;
          var targetMiddle = (0.5 - targetAnchor.y) * targetSize.height;
          if (hasTarget) {
            localVerticalCenter *= inverseScale.y;
            targetMiddle += inverseTranslate.y;
            targetMiddle *= inverseScale.y;
          }
          y = targetMiddle + (anchorY - 0.5) * height + localVerticalCenter;
        } else if (widget.isAlignBottom) {
          y = localBottom + anchorY * height;
        } else {
          y = localTop + (anchorY - 1) * height;
        }
        if (!approx(scaleY, 0, EPSILON)) {
          height /= scaleY;
        } else {
          height = uiTrans.height;
        }
      }
      widget._lastSize.height = height;
    }
    node.setPosition(x, y, _tempPos.z);
    Vec3.set(widget._lastPos, x, y, _tempPos.z);
  }

  // TODO: type is hack, Change to the type actually used (Node or BaseNode) when BaseNode complete
  function visitNode(node) {
    var widget = node.getComponent(Widget);
    if (widget && widget.enabled) {
      if (DEV) {
        widget._validateTargetInDEV();
      }
      // Notice: remove align to after visitNode, AlignMode.ONCE will use widget._hadAlignOnce flag
      // align(node, widget);
      // if ((!EDITOR || widgetManager.animationState!.animatedSinceLastFrame) && widget.alignMode === AlignMode.ONCE) {
      //     widget.enabled = false;
      // } else {
      if (!cclegacy.isValid(node, true)) {
        return;
      }
      activeWidgets.push(widget);
    }
    var children = node.children;
    for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
      var child = _step.value;
      if (child.active) {
        visitNode(child);
      }
    }
  }

  // This function will be called on AFTER_SCENE_LAUNCH and AFTER_UPDATE
  function refreshScene() {
    var scene = director.getScene();
    if (scene) {
      widgetManager.isAligning = true;
      if (widgetManager._nodesOrderDirty) {
        activeWidgets.length = 0;
        visitNode(scene);
        widgetManager._nodesOrderDirty = false;
      }
      var i = 0;
      var widget = null;
      var iterator = widgetManager._activeWidgetsIterator;
      for (iterator.i = 0; iterator.i < activeWidgets.length; ++iterator.i) {
        widget = activeWidgets[iterator.i];
        if (widget._dirty) {
          align(widget.node, widget);
          widget._dirty = false;
        }
      }
      widgetManager.isAligning = false;
    }

    // check animation editor
    if (EDITOR) {
      widgetManager.animationState.animatedSinceLastFrame = false;
    }
  }
  // updateAlignment from scene to node recursively
  function updateAlignment(node) {
    var parent = node.parent;
    if (parent && Node.isNode(parent)) {
      updateAlignment(parent);
    }

    // node._widget will be null when widget is disabled
    var widget = node.getComponent(Widget);
    if (widget && parent) {
      align(node, widget);
    }
  }

  /**
   * @en widget Manager， use to align widget
   * @zh widget 管理器，用于对齐操作
   * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
   */
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      DEV = _virtualInternal253AconstantsJs.DEV;
    }, function (_palScreenAdapter) {
      screenAdapter = _palScreenAdapter.screenAdapter;
    }, function (_gameDirectorJs) {
      Director = _gameDirectorJs.Director;
      director = _gameDirectorJs.director;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      visibleRect = _coreIndexJs.visibleRect;
      js = _coreIndexJs.js;
      cclegacy = _coreIndexJs.cclegacy;
      approx = _coreIndexJs.approx;
      EPSILON = _coreIndexJs.EPSILON;
    }, function (_viewJs) {
      View = _viewJs.View;
    }, function (_sceneGraphIndexJs) {
      Scene = _sceneGraphIndexJs.Scene;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_widgetJs) {
      AlignFlags = _widgetJs.AlignFlags;
      AlignMode = _widgetJs.AlignMode;
      computeInverseTransForTarget = _widgetJs.computeInverseTransForTarget;
      getReadonlyNodeSize = _widgetJs.getReadonlyNodeSize;
      Widget = _widgetJs.Widget;
    }, function (_dFrameworkIndexJs) {
      UITransform = _dFrameworkIndexJs.UITransform;
    }],
    execute: function () {
      _tempPos = new Vec3();
      _defaultAnchor = new Vec2();
      tInverseTranslate = new Vec2();
      tInverseScale = new Vec2(1, 1);
      _tempVec2_1 = new Vec2();
      _tempVec2_2 = new Vec2();
      activeWidgets = [];
      _export("widgetManager", widgetManager = cclegacy._widgetManager = {
        isAligning: false,
        _nodesOrderDirty: false,
        _activeWidgetsIterator: new js.array.MutableForwardIterator(activeWidgets),
        // hack
        animationState: EDITOR ? {
          previewing: false,
          time: 0,
          animatedSinceLastFrame: false
        } : null,
        init: function init() {
          director.on(Director.EVENT_AFTER_SCENE_LAUNCH, refreshScene);
          director.on(Director.EVENT_AFTER_UPDATE, refreshScene);
          View.instance.on('design-resolution-changed', this.onResized, this);
          if (!EDITOR) {
            var thisOnResized = this.onResized.bind(this);
            View.instance.on('canvas-resize', thisOnResized);
            screenAdapter.on('window-resize', thisOnResized);
          }
        },
        add: function add(widget) {
          this._nodesOrderDirty = true;
        },
        remove: function remove(widget) {
          this._activeWidgetsIterator.remove(widget);
        },
        onResized: function onResized() {
          var scene = director.getScene();
          if (scene) {
            this.refreshWidgetOnResized(scene);
          }
        },
        refreshWidgetOnResized: function refreshWidgetOnResized(node) {
          var widget = Node.isNode(node) && node.getComponent(Widget);
          if (widget && widget.enabled && (widget.alignMode === AlignMode.ON_WINDOW_RESIZE || widget.alignMode === AlignMode.ALWAYS)) {
            widget.setDirty();
          }
          var children = node.children;
          for (var _iterator2 = _createForOfIteratorHelperLoose(children), _step2; !(_step2 = _iterator2()).done;) {
            var child = _step2.value;
            this.refreshWidgetOnResized(child);
          }
        },
        updateOffsetsToStayPut: function updateOffsetsToStayPut(widget, e) {
          function i(t, c) {
            return Math.abs(t - c) > 1e-10 ? c : t;
          }
          var widgetNode = widget.node;
          var widgetParent = widgetNode.parent;
          if (widgetParent) {
            var zero = _tempVec2_1;
            zero.set(0, 0);
            var one = _tempVec2_2;
            one.set(1, 1);
            if (widget.target) {
              widgetParent = widget.target;
              computeInverseTransForTarget(widgetNode, widgetParent, zero, one);
            }
            if (!e) {
              return;
            }
            var parentTrans = widgetParent._uiProps && widgetParent._uiProps.uiTransformComp;
            var parentAP = parentTrans ? parentTrans.anchorPoint : _defaultAnchor;
            var trans = widgetNode._uiProps.uiTransformComp;
            var matchSize = getReadonlyNodeSize(widgetParent);
            var myAP = trans.anchorPoint;
            var pos = widgetNode.getPosition();
            var alignFlags = AlignFlags;
            var widgetNodeScale = widgetNode.getScale();
            var temp = 0;
            if (e & alignFlags.LEFT) {
              var l = -parentAP.x * matchSize.width;
              l += zero.x;
              l *= one.x;
              temp = pos.x - myAP.x * trans.width * Math.abs(widgetNodeScale.x) - l;
              if (!widget.isAbsoluteLeft) {
                temp /= matchSize.width;
              }
              temp /= one.x;
              widget.left = i(widget.left, temp);
            }
            if (e & alignFlags.RIGHT) {
              var r = (1 - parentAP.x) * matchSize.width;
              r += zero.x;
              temp = (r *= one.x) - (pos.x + (1 - myAP.x) * trans.width * Math.abs(widgetNodeScale.x));
              if (!widget.isAbsoluteRight) {
                temp /= matchSize.width;
              }
              temp /= one.x;
              widget.right = i(widget.right, temp);
            }
            if (e & alignFlags.TOP) {
              var t = (1 - parentAP.y) * matchSize.height;
              t += zero.y;
              temp = (t *= one.y) - (pos.y + (1 - myAP.y) * trans.height * Math.abs(widgetNodeScale.y));
              if (!widget.isAbsoluteTop) {
                temp /= matchSize.height;
              }
              temp /= one.y;
              widget.top = i(widget.top, temp);
            }
            if (e & alignFlags.BOT) {
              var b = -parentAP.y * matchSize.height;
              b += zero.y;
              b *= one.y;
              temp = pos.y - myAP.y * trans.height * Math.abs(widgetNodeScale.y) - b;
              if (!widget.isAbsoluteBottom) {
                temp /= matchSize.height;
              }
              temp /= one.y;
              widget.bottom = i(widget.bottom, temp);
            }
          }
        },
        updateAlignment: updateAlignment,
        AlignMode: AlignMode,
        AlignFlags: AlignFlags
      });
      director.on(Director.EVENT_INIT, function () {
        widgetManager.init();
      });
    }
  };
});