System.register("q-bundled:///fs/cocos/ui/editbox/types.js", ["../../core/value-types/index.js"], function (_export, _context) {
  "use strict";

  var Enum, KeyboardReturnType, InputMode, InputFlag;
  _export({
    KeyboardReturnType: void 0,
    InputMode: void 0,
    InputFlag: void 0
  });
  return {
    setters: [function (_coreValueTypesIndexJs) {
      Enum = _coreValueTypesIndexJs.Enum;
    }],
    execute: function () {
      (function (KeyboardReturnType) {
        KeyboardReturnType[KeyboardReturnType["DEFAULT"] = 0] = "DEFAULT";
        KeyboardReturnType[KeyboardReturnType["DONE"] = 1] = "DONE";
        KeyboardReturnType[KeyboardReturnType["SEND"] = 2] = "SEND";
        KeyboardReturnType[KeyboardReturnType["SEARCH"] = 3] = "SEARCH";
        KeyboardReturnType[KeyboardReturnType["GO"] = 4] = "GO";
        KeyboardReturnType[KeyboardReturnType["NEXT"] = 5] = "NEXT";
      })(KeyboardReturnType || _export("KeyboardReturnType", KeyboardReturnType = {}));
      Enum(KeyboardReturnType);

      /**
       * 输入模式。
       * @readonly
       * @enum EditBox.InputMode
       */
      (function (InputMode) {
        InputMode[InputMode["ANY"] = 0] = "ANY";
        InputMode[InputMode["EMAIL_ADDR"] = 1] = "EMAIL_ADDR";
        InputMode[InputMode["NUMERIC"] = 2] = "NUMERIC";
        InputMode[InputMode["PHONE_NUMBER"] = 3] = "PHONE_NUMBER";
        InputMode[InputMode["URL"] = 4] = "URL";
        InputMode[InputMode["DECIMAL"] = 5] = "DECIMAL";
        InputMode[InputMode["SINGLE_LINE"] = 6] = "SINGLE_LINE";
      })(InputMode || _export("InputMode", InputMode = {}));
      Enum(InputMode);

      /**
       * 定义了一些用于设置文本显示和文本格式化的标志位。
       * @readonly
       * @enum EditBox.InputFlag
       */
      (function (InputFlag) {
        InputFlag[InputFlag["PASSWORD"] = 0] = "PASSWORD";
        InputFlag[InputFlag["SENSITIVE"] = 1] = "SENSITIVE";
        InputFlag[InputFlag["INITIAL_CAPS_WORD"] = 2] = "INITIAL_CAPS_WORD";
        InputFlag[InputFlag["INITIAL_CAPS_SENTENCE"] = 3] = "INITIAL_CAPS_SENTENCE";
        InputFlag[InputFlag["INITIAL_CAPS_ALL_CHARACTERS"] = 4] = "INITIAL_CAPS_ALL_CHARACTERS";
        InputFlag[InputFlag["DEFAULT"] = 5] = "DEFAULT";
      })(InputFlag || _export("InputFlag", InputFlag = {}));
      Enum(InputFlag);
    }
  };
});