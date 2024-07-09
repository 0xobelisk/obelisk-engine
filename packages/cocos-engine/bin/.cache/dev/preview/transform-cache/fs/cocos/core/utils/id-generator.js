System.register("q-bundled:///fs/cocos/core/utils/id-generator.js", ["../../../../virtual/internal%253Aconstants.js"], function (_export, _context) {
  "use strict";

  var EDITOR, _class, NonUuidMark, IDGenerator;
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }],
    execute: function () {
      NonUuidMark = '.';
      /**
       * @en
       * ID generator for runtime.
       *
       * @zh
       * 运行时 ID 生成器。
       */
      _export("IDGenerator", IDGenerator = /*#__PURE__*/function () {
        /**
         * @en Construct a new id generator.
         * @zh 构造一个新的 id 生成器。
         *
         * @param category @en You can specify a unique category to avoid id collision with other instance of IdGenerator.
         * @zh 你能指定一个唯一的标识用于避免与其他 id 生成器冲突。
         */
        function IDGenerator(category) {
          /**
           * @en A number to record current id. It may increase when invoke `getNewId()`. Should use
           * `getNewId()` to get a unique id.
           * @zh 记录当前 id 值。调用 `getNewId()` 时，它可能被加1。应该使用 `getNewId()` 获取唯一的 id。
           */
          this.id = void 0;
          /**
           * @en A string value indicates the category this IDGenerator belongs to. It will be an empty
           * string if not be assigned by passed parameter in constructor.
           * @zh 用于标识该 IDGenerator 所属的类别。如果构造函数没有传参数对它赋值的话，它将是一个空字符串。
           */
          this.prefix = void 0;
          // Initialize with a random id to emphasize that the returns id should not be stored in persistence data.
          this.id = 0 | Math.random() * 998;
          this.prefix = category ? category + NonUuidMark : '';
        }

        /**
         * @en Gets a unique id. @zh 获取唯一的 id。
         * @returns @en The unique id. It has the form `prefix+id`, for example `scene55`, `scene` is `prefix`, `55` is `id`.
         * @zh 唯一的 id。它的形式是 `prefix+id`，比如 `scene55`，`scene` 是 prefix，`55` 是 `id`。
         */
        var _proto = IDGenerator.prototype;
        _proto.getNewId = function getNewId() {
          if (EDITOR && (this.prefix === 'Node.' || this.prefix === 'Comp.')) {
            return EditorExtends.UuidUtils.uuid();
          }
          return this.prefix + (++this.id).toString();
        };
        return IDGenerator;
      }());
      _class = IDGenerator;
      /**
      * @en
      * The global id generator might have a conflict problem once every 365 days,
      * if the game runs at 60 FPS and each frame 4760273 counts of new id are requested.
      *
      * @zh
      * 全局的 id 生成器，如果游戏以 60 FPS 运行，每帧获取 4760273 个新 id, 则可能在 365 天后发生冲突。
      */
      IDGenerator.global = new _class('global');
    }
  };
});