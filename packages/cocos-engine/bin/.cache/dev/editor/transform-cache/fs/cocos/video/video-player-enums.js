System.register("q-bundled:///fs/cocos/video/video-player-enums.js", ["../core/value-types/index.js"], function (_export, _context) {
  "use strict";

  var Enum, ResourceType, EventType, READY_STATE;
  _export({
    EventType: void 0,
    READY_STATE: void 0
  });
  return {
    setters: [function (_coreValueTypesIndexJs) {
      Enum = _coreValueTypesIndexJs.Enum;
    }],
    execute: function () {
      /*
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
      /**
       * @en Enum for video resource type.
       * @zh 视频资源类型枚举。
       */
      _export("ResourceType", ResourceType = Enum({
        /**
         * @en
         * The remote resource type.
         * @zh
         * 远程视频。
         */
        REMOTE: 0,
        /**
         * @en
         * The local resource type.
         * @zh
         * 本地视频。
         */
        LOCAL: 1
      }));
      (function (EventType) {
        EventType["NONE"] = "none";
        EventType["PLAYING"] = "playing";
        EventType["PAUSED"] = "paused";
        EventType["STOPPED"] = "stopped";
        EventType["COMPLETED"] = "completed";
        EventType["META_LOADED"] = "meta-loaded";
        EventType["READY_TO_PLAY"] = "ready-to-play";
        EventType["ERROR"] = "error";
        EventType["CLICKED"] = "clicked";
      })(EventType || _export("EventType", EventType = {}));
      (function (READY_STATE) {
        READY_STATE[READY_STATE["HAVE_NOTHING"] = 0] = "HAVE_NOTHING";
        READY_STATE[READY_STATE["HAVE_METADATA"] = 1] = "HAVE_METADATA";
        READY_STATE[READY_STATE["HAVE_CURRENT_DATA"] = 2] = "HAVE_CURRENT_DATA";
        READY_STATE[READY_STATE["HAVE_FUTURE_DATA"] = 3] = "HAVE_FUTURE_DATA";
        READY_STATE[READY_STATE["HAVE_ENOUGH_DATA"] = 4] = "HAVE_ENOUGH_DATA";
      })(READY_STATE || _export("READY_STATE", READY_STATE = {}));
    }
  };
});