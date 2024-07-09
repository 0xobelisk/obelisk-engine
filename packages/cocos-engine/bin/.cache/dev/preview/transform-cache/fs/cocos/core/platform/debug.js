System.register("q-bundled:///fs/cocos/core/platform/debug.js", ["../../../../virtual/internal%253Aconstants.js", "../../../DebugInfos.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var EDITOR, JSB, DEV, DEBUG, debugInfos, legacyCC, ccwindow, ccdocument, ERROR_MAP_URL, logList, ccLog, ccWarn, ccError, ccAssert, ccDebug, logFormatter, warnFormatter, errorFormatter, assertFormatter, DebugMode;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2018-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
   * Constructs a string from a sequence of js object arguments.
   */
  function formatString() {
    for (var _len2 = arguments.length, data = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      data[_key2] = arguments[_key2];
    }
    return legacyCC.js.formatStr.apply(null, data);
  }

  /**
   * @en Outputs a log message to the console. The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects.
   * @zh 向控制台输出一条日志信息。这条信息可能是单个字符串（包括可选的替代字符串），也可能是一个或多个对象。
   */
  function log() {
    return ccLog.apply(void 0, arguments);
  }

  /**
   * @en
   * Outputs a warning message to the console. The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects.
   * - In Cocos Creator, warning is yellow.
   * - In Chrome, warning have a yellow warning icon with the message text.
   * @zh
   * 向控制台输出一条警告信息。这条信息可能是单个字符串（包括可选的替代字符串），也可能是一个或多个对象。
   * - 在 Cocos Creator 中，警告信息显示是黄色的。<br/>
   * - 在 Chrome 中，警告信息有着黄色的图标以及黄色的消息文本。<br/>
   */
  function warn() {
    return ccWarn.apply(void 0, arguments);
  }

  /**
   * @en
   * Outputs an error message to the console. The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects.
   * - In Cocos Creator, error is red.<br/>
   * - In Chrome, error have a red icon along with red message text.<br/>
   * @zh
   * 向控制台输出一条错误信息。这条信息可能是单个字符串（包括可选的替代字符串），也可能是一个或多个对象。
   * - 在 Cocos Creator 中，错误信息显示是红色的。<br/>
   * - 在 Chrome 中，错误信息有红色的图标以及红色的消息文本。<br/>
   */
  function error() {
    return ccError.apply(void 0, arguments);
  }

  /**
   * @en
   * Assert the condition and output error messages if the condition is not true.
   * @zh
   * 对检查测试条件进行检查，如果条件不为 true 则输出错误消息
   * @param condition @zh 需要检查的条件。 @en The condition to check on.
   * @param message @zh 包含零个或多个需要替换的JavaScript字符串。@en JavaScript objects to replace substitution strings in msg.
   * @param optionalParams  @zh 用来替换在message中需要替换的JavaScript对象。@en JavaScript objects with which to replace substitution strings within msg.
   * This gives you additional control over the format of the output.
   */
  function assert(condition, message) {
    for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      optionalParams[_key3 - 2] = arguments[_key3];
    }
    return ccAssert.apply(void 0, [condition, message].concat(optionalParams));
  }

  /**
   * @en Outputs a message at the "debug" log level.
   * @zh 输出一条“调试”日志等级的消息。
   * @param data @zh 输出的消息对象。 @en The output message object.
   */
  function debug() {
    return ccDebug.apply(void 0, arguments);
  }

  /**
   * @engineInternal
   */
  function _resetDebugSetting(mode) {
    // reset
    ccLog = ccWarn = ccError = ccAssert = ccDebug = function ccDebug() {};
    if (mode === DebugMode.NONE) {
      return;
    }
    if (mode > DebugMode.ERROR) {
      // Log to web page.
      var logToWebPage = function logToWebPage(msg) {
        if (!legacyCC.game.canvas) {
          return;
        }
        if (!logList) {
          var logDiv = ccdocument.createElement('Div');
          logDiv.setAttribute('id', 'logInfoDiv');
          logDiv.setAttribute('width', '200');
          logDiv.setAttribute('height', legacyCC.game.canvas.height);
          var logDivStyle = logDiv.style;
          logDivStyle.zIndex = '99999';
          logDivStyle.position = 'absolute';
          logDivStyle.top = logDivStyle.left = '0';
          logList = ccdocument.createElement('textarea');
          logList.setAttribute('rows', '20');
          logList.setAttribute('cols', '30');
          logList.setAttribute('disabled', 'true');
          var logListStyle = logList.style;
          logListStyle.backgroundColor = 'transparent';
          logListStyle.borderBottom = '1px solid #cccccc';
          logListStyle.borderTopWidth = logListStyle.borderLeftWidth = logListStyle.borderRightWidth = '0px';
          logListStyle.borderTopStyle = logListStyle.borderLeftStyle = logListStyle.borderRightStyle = 'none';
          logListStyle.padding = '0px';
          logListStyle.margin = '0px';
          logDiv.appendChild(logList);
          legacyCC.game.canvas.parentNode.appendChild(logDiv);
        }
        logList.value = logList.value + msg + "\r\n";
        logList.scrollTop = logList.scrollHeight;
      };
      ccError = function ccError() {
        logToWebPage("ERROR :  " + formatString.apply(void 0, arguments));
      };
      ccAssert = function ccAssert(condition, message) {
        if (!condition) {
          for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
            optionalParams[_key4 - 2] = arguments[_key4];
          }
          logToWebPage("ASSERT: " + formatString.apply(void 0, [message].concat(optionalParams)));
        }
      };
      if (mode !== DebugMode.ERROR_FOR_WEB_PAGE) {
        ccWarn = function ccWarn() {
          logToWebPage("WARN :  " + formatString.apply(void 0, arguments));
        };
      }
      if (mode === DebugMode.INFO_FOR_WEB_PAGE) {
        ccLog = function ccLog() {
          logToWebPage(formatString.apply(void 0, arguments));
        };
      }
    } else if (console) {
      // Log to console.

      // For JSB
      if (!console.error) {
        console.error = console.log;
      }
      if (!console.warn) {
        console.warn = console.log;
      }
      if (EDITOR || console.error.bind) {
        // use bind to avoid pollute call stacks
        ccError = console.error.bind(console);
      } else {
        ccError = JSB ? console.error : function () {
          for (var _len5 = arguments.length, data = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            data[_key5] = arguments[_key5];
          }
          return console.error.apply(console, data);
        };
      }
      ccAssert = function ccAssert(condition, message) {
        if (!condition) {
          for (var _len6 = arguments.length, optionalParams = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
            optionalParams[_key6 - 2] = arguments[_key6];
          }
          var errorText = formatString.apply(void 0, [message].concat(optionalParams));
          if (DEV) {
            // eslint-disable-next-line no-debugger
            debugger;
          } else {
            throw new Error(errorText);
          }
        }
      };
    }
    if (mode !== DebugMode.ERROR) {
      if (EDITOR) {
        ccWarn = console.warn.bind(console);
      } else if (console.warn.bind) {
        // use bind to avoid pollute call stacks
        ccWarn = console.warn.bind(console);
      } else {
        ccWarn = JSB ? console.warn : function () {
          for (var _len7 = arguments.length, data = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            data[_key7] = arguments[_key7];
          }
          return console.warn.apply(console, data);
        };
      }
    }
    if (EDITOR) {
      ccLog = console.log.bind(console);
    } else if (mode <= DebugMode.INFO) {
      if (JSB) {
        ccLog = console.log;
      } else if (console.log.bind) {
        // use bind to avoid pollute call stacks
        ccLog = console.log.bind(console);
      } else {
        ccLog = function ccLog() {
          for (var _len8 = arguments.length, data = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            data[_key8] = arguments[_key8];
          }
          return console.log.apply(console, data);
        };
      }
    }
    if (mode <= DebugMode.VERBOSE) {
      if (typeof console.debug === 'function') {
        var vendorDebug = console.debug.bind(console);
        ccDebug = function ccDebug() {
          return vendorDebug.apply(void 0, arguments);
        };
      }
    }
  }
  function _throw(error_) {
    if (EDITOR) {
      return error(error_);
    } else {
      var stack = error_.stack;
      if (stack) {
        error(JSB ? error_ + "\n" + stack : stack);
      } else {
        error(error_);
      }
      return undefined;
    }
  }
  function getTypedFormatter(type) {
    return function (id) {
      var msg = DEBUG ? debugInfos[id] || 'unknown id' : type + " " + id + ", please go to " + ERROR_MAP_URL + "#" + id + " to see details.";
      for (var _len9 = arguments.length, args = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
        args[_key9 - 1] = arguments[_key9];
      }
      if (args.length === 0) {
        return msg;
      }
      return DEBUG ? formatString.apply(void 0, [msg].concat(args)) : msg + " Arguments: " + args.join(', ');
    };
  }
  function logID(id) {
    for (var _len10 = arguments.length, optionalParams = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
      optionalParams[_key10 - 1] = arguments[_key10];
    }
    log(logFormatter.apply(void 0, [id].concat(optionalParams)));
  }
  function warnID(id) {
    for (var _len11 = arguments.length, optionalParams = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
      optionalParams[_key11 - 1] = arguments[_key11];
    }
    warn(warnFormatter.apply(void 0, [id].concat(optionalParams)));
  }
  function errorID(id) {
    for (var _len12 = arguments.length, optionalParams = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
      optionalParams[_key12 - 1] = arguments[_key12];
    }
    error(errorFormatter.apply(void 0, [id].concat(optionalParams)));
  }
  function assertID(condition, id) {
    if (condition) {
      return;
    }
    for (var _len13 = arguments.length, optionalParams = new Array(_len13 > 2 ? _len13 - 2 : 0), _key13 = 2; _key13 < _len13; _key13++) {
      optionalParams[_key13 - 2] = arguments[_key13];
    }
    assert(false, assertFormatter.apply(void 0, [id].concat(optionalParams)));
  }

  /**
   * @en Enum for debug modes.
   * @zh 调试模式。
   */

  /**
   * @en Gets error message with the error id and possible parameters.
   * @zh 通过 error id 和必要的参数来获取错误信息。
   * @param errorId @zh 错误的ID。@en Error id.
   * @param param @zh 输出日志。@en Output log.
   */

  /**
   * @en Returns whether or not to display the FPS and debug information.
   * @zh 是否显示 FPS 信息和部分调试信息。
   * @deprecated @zh 从v3.6开始不再支持，请使用 profiler.isShowingStates。@en Since v3.6, Please use profiler.isShowingStates instead.
   */

  /**
   * @en Sets whether display the FPS and debug informations on the bottom-left corner.
   * @zh 设置是否在左下角显示 FPS 和部分调试。
   * @deprecated @zh 从v3.6开始不再支持，请使用 profiler.showStats。@en Since v3.6, Please use profiler.showStats instead.
   */
  function getError(errorId) {
    for (var _len14 = arguments.length, param = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
      param[_key14 - 1] = arguments[_key14];
    }
    return errorFormatter.apply(void 0, [errorId].concat(param));
  }
  function isDisplayStats() {
    return legacyCC.profiler ? legacyCC.profiler.isShowingStats() : false;
  }
  function setDisplayStats(displayStats) {
    if (legacyCC.profiler) {
      displayStats ? legacyCC.profiler.showStats() : legacyCC.profiler.hideStats();
    }
  }
  _export({
    log: log,
    warn: warn,
    error: error,
    assert: assert,
    debug: debug,
    _resetDebugSetting: _resetDebugSetting,
    _throw: _throw,
    logID: logID,
    warnID: warnID,
    errorID: errorID,
    assertID: assertID,
    getError: getError,
    isDisplayStats: isDisplayStats,
    setDisplayStats: setDisplayStats,
    DebugMode: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      JSB = _virtualInternal253AconstantsJs.JSB;
      DEV = _virtualInternal253AconstantsJs.DEV;
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_DebugInfosJs) {
      debugInfos = _DebugInfosJs.default;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
      ccwindow = _globalExportsJs.ccwindow;
    }],
    execute: function () {
      ccdocument = ccwindow.document;
      ERROR_MAP_URL = 'https://github.com/cocos-creator/engine/blob/develop/EngineErrorMap.md';
      // The html element displays log in web page (DebugMode.INFO_FOR_WEB_PAGE)
      logList = null;
      ccLog = console.log.bind(console);
      ccWarn = ccLog;
      ccError = ccLog;
      ccAssert = function ccAssert(condition, message) {
        if (!condition) {
          for (var _len = arguments.length, optionalParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            optionalParams[_key - 2] = arguments[_key];
          }
          console.log("ASSERT: " + formatString.apply(void 0, [message].concat(optionalParams)));
        }
      };
      ccDebug = ccLog;
      logFormatter = getTypedFormatter('Log');
      warnFormatter = getTypedFormatter('Warning');
      errorFormatter = getTypedFormatter('Error');
      assertFormatter = getTypedFormatter('Assert');
      (function (DebugMode) {
        DebugMode[DebugMode["NONE"] = 0] = "NONE";
        DebugMode[DebugMode["VERBOSE"] = 1] = "VERBOSE";
        DebugMode[DebugMode["INFO"] = 2] = "INFO";
        DebugMode[DebugMode["WARN"] = 3] = "WARN";
        DebugMode[DebugMode["ERROR"] = 4] = "ERROR";
        DebugMode[DebugMode["INFO_FOR_WEB_PAGE"] = 5] = "INFO_FOR_WEB_PAGE";
        DebugMode[DebugMode["WARN_FOR_WEB_PAGE"] = 6] = "WARN_FOR_WEB_PAGE";
        DebugMode[DebugMode["ERROR_FOR_WEB_PAGE"] = 7] = "ERROR_FOR_WEB_PAGE";
      })(DebugMode || _export("DebugMode", DebugMode = {}));
    }
  };
});