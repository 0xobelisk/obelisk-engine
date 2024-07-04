System.register("q-bundled:///fs/cocos/core/data/object.js", ["../../../../virtual/internal%253Aconstants.js", "../utils/js.js", "./class.js", "../platform/debug.js", "../global-exports.js", "./editor-extras-tag.js"], function (_export, _context) {
  "use strict";

  var SUPPORT_JIT, EDITOR, TEST, JSB, EDITOR_NOT_IN_PREVIEW, js, CCClass, errorID, warnID, legacyCC, editorExtrasTag, copyAllProperties, CCObject, Destroyed, RealDestroyed, ToDestroy, DontSave, EditorOnly, Dirty, DontDestroy, Destroying, Deactivating, LockedInEditor, HideInHierarchy, IsOnEnableCalled, IsEditorOnEnableCalled, IsPreloadStarted, IsOnLoadCalled, IsOnLoadStarted, IsStartCalled, IsRotationLocked, IsScaleLocked, IsAnchorLocked, IsSizeLocked, IsPositionLocked, PersistentMask, AllHideMasks, objectsToDestroy, deferredDestroyTimer, prototype;
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
  function compileDestruct(obj, ctor) {
    const shouldSkipId = obj instanceof legacyCC.Node || obj instanceof legacyCC.Component;
    const idToSkip = shouldSkipId ? '_id' : null;
    let key;
    const propsToReset = {};
    for (key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) {
        if (key === idToSkip) {
          continue;
        }
        switch (typeof obj[key]) {
          case 'string':
            propsToReset[key] = '';
            break;
          case 'object':
          case 'function':
            propsToReset[key] = null;
            break;
          default:
            break;
        }
      }
    }
    // Overwrite propsToReset according to Class
    if (CCClass._isCCClass(ctor)) {
      const attrs = legacyCC.Class.Attr.getClassAttrs(ctor);
      const propList = ctor.__props__;
      for (let i = 0; i < propList.length; i++) {
        key = propList[i];
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        const attrKey = `${key}`;
        if (attrKey in attrs) {
          if (shouldSkipId && key === '_id') {
            continue;
          }
          switch (typeof attrs[attrKey]) {
            case 'string':
              propsToReset[key] = '';
              break;
            case 'object':
            case 'function':
              propsToReset[key] = null;
              break;
            case 'undefined':
              propsToReset[key] = undefined;
              break;
            default:
              break;
          }
        }
      }
    }
    if (SUPPORT_JIT) {
      // compile code
      let func = '';
      for (key in propsToReset) {
        let statement;
        if (CCClass.IDENTIFIER_RE.test(key)) {
          statement = `o.${key}=`;
        } else {
          statement = `o[${CCClass.escapeForJS(key)}]=`;
        }
        let val = propsToReset[key];
        if (val === '') {
          val = '""';
        }
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        func += `${statement + val};\n`;
      }
      // eslint-disable-next-line @typescript-eslint/no-implied-eval,no-new-func
      return Function('o', func);
    } else {
      return o => {
        for (const _key in propsToReset) {
          o[_key] = propsToReset[_key];
        }
      };
    }
  }

  /**
   * @en
   * The base class of most of all the objects in Fireball.
   * @zh
   * 大部分对象的基类。
   * @private
   */

  /*
   * @en
   * Checks whether the object is a CCObject.<br>
   *
   * @zh
   * 检查该对象是否为CCObject。<br>
   *
   * @method isCCObject
   * @param object
   * @return @en Whether it is a CCObject boolean value. @zh 是否为CCObject的布尔值。
   * @engineInternal
   */

  /*
   * @en
   * Checks whether the object is non-nil and not yet destroyed.<br>
   * When an object's `destroy` is called, it is actually destroyed after the end of this frame.
   * So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
   * If you want to determine whether the current frame has called `destroy`, use `isValid(obj, true)`,
   * but this is often caused by a particular logical requirements, which is not normally required.
   *
   * @zh
   * 检查该对象是否不为 null 并且尚未销毁。<br>
   * 当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
   * 因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
   * 如果希望判断当前帧是否调用过 `destroy`，请使用 `isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。
   *
   * @method isValid
   * @param value
   * @param [strictMode=false] - If true, Object called destroy() in this frame will also treated as invalid.
   * @return whether is valid
   * @example
   * ```
   * import { Node, log } from 'cc';
   * var node = new Node();
   * log(isValid(node));    // true
   * node.destroy();
   * log(isValid(node));    // true, still valid in this frame
   * // after a frame...
   * log(isValid(node));    // false, destroyed in the end of last frame
   * ```
   */
  function isCCObject(object) {
    return object instanceof CCObject;
  }
  function isValid(value, strictMode) {
    if (typeof value === 'object') {
      return !!value && !(value._objFlags & (strictMode ? Destroyed | ToDestroy : Destroyed));
    } else {
      return typeof value !== 'undefined';
    }
  }
  _export({
    isCCObject: isCCObject,
    isValid: isValid
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      SUPPORT_JIT = _virtualInternal253AconstantsJs.SUPPORT_JIT;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
      JSB = _virtualInternal253AconstantsJs.JSB;
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_utilsJsJs) {
      js = _utilsJsJs;
      copyAllProperties = _utilsJsJs.copyAllProperties;
    }, function (_classJs) {
      CCClass = _classJs.CCClass;
    }, function (_platformDebugJs) {
      errorID = _platformDebugJs.errorID;
      warnID = _platformDebugJs.warnID;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_editorExtrasTagJs) {
      editorExtrasTag = _editorExtrasTagJs.editorExtrasTag;
    }],
    execute: function () {
      // definitions for CCObject.Flags
      Destroyed = 1 << 0;
      RealDestroyed = 1 << 1;
      ToDestroy = 1 << 2;
      DontSave = 1 << 3;
      EditorOnly = 1 << 4;
      Dirty = 1 << 5;
      DontDestroy = 1 << 6;
      Destroying = 1 << 7;
      Deactivating = 1 << 8;
      LockedInEditor = 1 << 9;
      HideInHierarchy = 1 << 10;
      IsOnEnableCalled = 1 << 11;
      IsEditorOnEnableCalled = 1 << 12;
      IsPreloadStarted = 1 << 13;
      IsOnLoadCalled = 1 << 14;
      IsOnLoadStarted = 1 << 15;
      IsStartCalled = 1 << 16;
      IsRotationLocked = 1 << 17;
      IsScaleLocked = 1 << 18;
      IsAnchorLocked = 1 << 19;
      IsSizeLocked = 1 << 20;
      IsPositionLocked = 1 << 21; // var Hide = HideInGame | HideInEditor;
      // should not clone or serialize these flags
      PersistentMask = ~(ToDestroy | Dirty | Destroying | DontDestroy | Deactivating | IsPreloadStarted | IsOnLoadStarted | IsOnLoadCalled | IsStartCalled | IsOnEnableCalled | IsEditorOnEnableCalled | IsRotationLocked | IsScaleLocked | IsAnchorLocked | IsSizeLocked | IsPositionLocked
      /* RegisteredInEditor */); // all the hideFlags
      AllHideMasks = DontSave | EditorOnly | LockedInEditor | HideInHierarchy;
      objectsToDestroy = [];
      deferredDestroyTimer = null;
      _export("CCObject", CCObject = class CCObject {
        static _deferredDestroy() {
          const deleteCount = objectsToDestroy.length;
          for (let i = 0; i < deleteCount; ++i) {
            const obj = objectsToDestroy[i];
            if (!(obj._objFlags & Destroyed)) {
              obj._destroyImmediate();
            }
          }
          // if we called b.destory() in a.onDestroy(), objectsToDestroy will be resized,
          // but we only destroy the objects which called destory in this frame.
          if (deleteCount === objectsToDestroy.length) {
            objectsToDestroy.length = 0;
          } else {
            objectsToDestroy.splice(0, deleteCount);
          }
          if (EDITOR) {
            deferredDestroyTimer = null;
          }
        }

        /**
         * @internal
         */

        constructor(name = '') {
          /**
           * @internal
           */
          this._objFlags = void 0;
          this._name = void 0;
          /**
           * @default ""
           * @private
           */
          this._name = name;

          /**
           * @default 0
           * @private
           */
          this._objFlags = 0;
          if (EDITOR) {
            // See cocos/cocos-engine#15392
            this[editorExtrasTag] = {};
          }
        }

        // MEMBER

        /**
         * @en The name of the object.
         * @zh 该对象的名称。
         * @default ""
         * @example
         * ```
         * obj.name = "New Obj";
         * ```
         */
        get name() {
          return this._name;
        }
        set name(value) {
          this._name = value;
        }

        /**
         * @en After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.
         * @zh 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。
         */
        set hideFlags(hideFlags) {
          const flags = hideFlags & CCObject.Flags.AllHideMasks;
          this._objFlags = this._objFlags & ~CCObject.Flags.AllHideMasks | flags;
        }
        get hideFlags() {
          return this._objFlags & CCObject.Flags.AllHideMasks;
        }

        /**
         * @en
         * Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
         * When an object's `destroy` is called, it is actually destroyed after the end of this frame.
         * So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
         * If you want to determine whether the current frame has called `destroy`, use `isValid(obj, true)`,
         * but this is often caused by a particular logical requirements, which is not normally required.
         *
         * @zh
         * 表示该对象是否可用（被 destroy 后将不可用）。<br>
         * 当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
         * 因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
         * 如果希望判断当前帧是否调用过 `destroy`，请使用 `isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。
         * @default true
         * @readOnly
         * @example
         * ```ts
         * import { Node, log } from 'cc';
         * const node = new Node();
         * log(node.isValid);    // true
         * node.destroy();
         * log(node.isValid);    // true, still valid in this frame
         * // after a frame...
         * log(node.isValid);    // false, destroyed in the end of last frame
         * ```
         */
        get isValid() {
          return !(this._objFlags & Destroyed);
        }

        /**
         * @en
         * Destroy this Object, and release all its own references to other objects.<br/>
         * Actual object destruction will delayed until before rendering.
         * From the next frame, this object is not usable any more.
         * You can use `isValid(obj)` to check whether the object is destroyed before accessing it.
         * @zh
         * 销毁该对象，并释放所有它对其它对象的引用。<br/>
         * 实际销毁操作会延迟到当前帧渲染前执行。从下一帧开始，该对象将不再可用。
         * 您可以在访问对象之前使用 `isValid(obj)` 来检查对象是否已被销毁。
         * @return whether it is the first time the destroy being called
         * @example
         * ```
         * obj.destroy();
         * ```
         */
        destroy() {
          if (this._objFlags & Destroyed) {
            warnID(5000);
            return false;
          }
          if (this._objFlags & ToDestroy) {
            return false;
          }
          this._objFlags |= ToDestroy;
          objectsToDestroy.push(this);
          if (EDITOR && deferredDestroyTimer === null && legacyCC.engine && !legacyCC.engine._isUpdating) {
            // auto destroy immediate in edit mode
            deferredDestroyTimer = setTimeout(CCObject._deferredDestroy);
          }
          if (JSB) {
            // TODO: `_destroy` method only implemented on native @dumganhar
            // issue: https://github.com/cocos/cocos-engine/issues/14644
            this._destroy();
          }
          return true;
        }

        /**
         * @en
         * Clear all references in the instance.
         *
         * NOTE: this method will not clear the getter or setter functions which defined in the instance of CCObject.
         *
         * @zh
         * 清理实例的所有引用
         * 注意：此方法不会清理实例上的 getter 与 setter 方法。
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         * @example
         * ```
         * // You can override the _destruct method if you need, for example:
         *       _destruct: function () {
         *           for (var key in this) {
         *               if (this.hasOwnProperty(key)) {
         *                   switch (typeof this[key]) {
         *                       case 'string':
         *                           this[key] = '';
         *                           break;
         *                       case 'object':
         *                       case 'function':
         *                           this[key] = null;
         *                           break;
         *               }
         *           }
         *       }
         * ```
         */
        _destruct() {
          const ctor = this.constructor;
          let destruct;
          if (Object.prototype.hasOwnProperty.call(ctor, '__destruct__')) {
            destruct = ctor.__destruct__;
          } else {
            destruct = compileDestruct(this, ctor);
            js.value(ctor, '__destruct__', destruct, true);
          }
          destruct(this);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _destroyImmediate() {
          var _onPreDestroy, _ref;
          if (this._objFlags & Destroyed) {
            errorID(5000);
            return;
          }
          // TODO: '_onPreDestroy' should be define in CCObject class.
          // issue: https://github.com/cocos/cocos-engine/issues/14643
          (_onPreDestroy = (_ref = this)._onPreDestroy) === null || _onPreDestroy === void 0 ? void 0 : _onPreDestroy.call(_ref);
          if (!EDITOR_NOT_IN_PREVIEW) {
            /*Native properties cannot be reset by _destruct, because the native properties are hung on the prototype and
             *hasOwnProperty's detection cannot be passed.
             */
            // TODO: `destruct` is only implemented on native @dumganhar
            // issue: https://github.com/cocos/cocos-engine/issues/14644
            if (JSB && this.destruct) {
              this.destruct();
            }
            this._destruct();
          }
          this._objFlags |= Destroyed;
        }
      });
      prototype = CCObject.prototype;
      if (EDITOR || TEST) {
        js.get(prototype, 'isRealValid', function () {
          return !(this._objFlags & RealDestroyed);
        });

        /**
         * @en After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.
         * This method is only available for editors and is not recommended for developers
         * @zh 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能(该方法仅提供给编辑器使用，不建议开发者使用)。
         */
        js.getset(prototype, 'objFlags', function () {
          return this._objFlags;
        }, function (objFlags) {
          this._objFlags = objFlags;
        });

        /*
        * @en
        * In fact, Object's "destroy" will not trigger the destruct operation in Firebal Editor.
        * The destruct operation will be executed by Undo system later.
        * @zh
        * 事实上，对象的 “destroy” 不会在编辑器中触发析构操作，
        * 析构操作将在 Undo 系统中**延后**执行。
        * @method realDestroyInEditor
        * @private
        * TODO: this is a dynamic inject method, should be define in class
        * issue: https://github.com/cocos/cocos-engine/issues/14643
        */
        prototype.realDestroyInEditor = function () {
          if (!(this._objFlags & Destroyed)) {
            warnID(5001);
            return;
          }
          if (this._objFlags & RealDestroyed) {
            warnID(5000);
            return;
          }
          this._destruct();
          this._objFlags |= RealDestroyed;
        };
      }

      // NOTE: `clearImmediate` method is only defined in NodeJS environment.

      if (EDITOR) {
        js.value(CCObject, '_clearDeferredDestroyTimer', () => {
          if (deferredDestroyTimer !== null) {
            clearImmediate(deferredDestroyTimer);
            deferredDestroyTimer = null;
          }
        });
        /**
         * The customized serialization for this object. (Editor Only)
         * @method _serialize
         * @param {Boolean} exporting
         * @return {object} the serialized json data object
         * TODO: this is a dynamic inject method, should be define in class
         * issue: https://github.com/cocos/cocos-engine/issues/14643
         */
        prototype._serialize = null;
      }

      /**
       * Init this object from the custom serialized data.
       * @method _deserialize
       * @param {Object} data - the serialized json data
       * @param {_Deserializer} ctx
       * TODO: this is a dynamic inject method, should be define in class
       * issue: https://github.com/cocos/cocos-engine/issues/14643
       */
      prototype._deserialize = null;

      // See cocos/cocos-engine#15392
      if (EDITOR) {
        CCClass.fastDefine('cc.Object', CCObject, {
          _name: '',
          _objFlags: 0,
          [editorExtrasTag]: {}
        });
        CCClass.Attr.setClassAttr(CCObject, editorExtrasTag, 'editorOnly', true);
      } else {
        CCClass.fastDefine('cc.Object', CCObject, {
          _name: '',
          _objFlags: 0
        });
      }

      /**
       * Bit mask that controls object states.
       * @enum Object.Flags
       * @private
       */
      js.value(CCObject, 'Flags', {
        Destroyed,
        DontSave,
        EditorOnly,
        Dirty,
        DontDestroy,
        PersistentMask,
        Destroying,
        Deactivating,
        LockedInEditor,
        HideInHierarchy,
        AllHideMasks,
        IsPreloadStarted,
        IsOnLoadStarted,
        IsOnLoadCalled,
        IsOnEnableCalled,
        IsStartCalled,
        IsEditorOnEnableCalled,
        IsPositionLocked,
        IsRotationLocked,
        IsScaleLocked,
        IsAnchorLocked,
        IsSizeLocked
      });
      legacyCC.isValid = isValid;
      if (EDITOR || TEST) {
        js.value(CCObject, '_willDestroy', obj => !(obj._objFlags & Destroyed) && (obj._objFlags & ToDestroy) > 0);
        js.value(CCObject, '_cancelDestroy', obj => {
          obj._objFlags &= ~ToDestroy;
          js.array.fastRemove(objectsToDestroy, obj);
        });
      }
      if (JSB) {
        copyAllProperties(CCObject, jsb.CCObject, ['prototype', 'length', 'name']);
        copyAllProperties(CCObject.prototype, jsb.CCObject.prototype, ['constructor', 'name', 'hideFlags', 'isValid']);
        _export("CCObject", CCObject = jsb.CCObject);
      }
      legacyCC.Object = CCObject;
    }
  };
});