"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nativePackToolMg = exports.NativePackToolManager = void 0;
class NativePackToolManager {
    constructor() {
        this.PackToolMap = {};
    }
    getPackTool(platform) {
        const handler = this.PackToolMap[platform];
        if (!handler) {
            throw new Error(`No pack tool for platform ${platform}}`);
        }
        return handler;
    }
    register(platform, tool) {
        this.PackToolMap[platform] = tool;
    }
    init(params) {
        const tool = this.getPackTool(params.platform);
        tool.init(params);
    }
    async create(platform) {
        const tool = this.getPackTool(platform);
        if (!tool) {
            throw new Error(`No pack tool for platform ${platform}}`);
        }
        if (!tool.create) {
            return false;
        }
        await tool.create();
    }
    async generate(platform) {
        const tool = this.getPackTool(platform);
        if (!tool) {
            throw new Error(`No pack tool for platform ${platform}}`);
        }
        if (!tool.generate) {
            return false;
        }
        await tool.generate();
    }
    async make(platform) {
        const tool = this.getPackTool(platform);
        if (!tool.make) {
            return false;
        }
        await tool.make();
        return true;
    }
    async run(platform) {
        const tool = this.getPackTool(platform);
        if (!tool.run) {
            return false;
        }
        await tool.run();
        return true;
    }
}
exports.NativePackToolManager = NativePackToolManager;
exports.nativePackToolMg = new NativePackToolManager();
//# sourceMappingURL=manager.js.map