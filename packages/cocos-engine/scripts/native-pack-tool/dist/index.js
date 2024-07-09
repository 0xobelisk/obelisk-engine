"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./base/manager");
const mac_1 = require("./platforms/mac");
const windows_1 = require("./platforms/windows");
const android_1 = require("./platforms/android");
const openharmony_1 = require("./platforms/openharmony");
const ohos_1 = require("./platforms/ohos");
const ios_1 = require("./platforms/ios");
const huawei_agc_1 = require("./platforms/huawei-agc");
manager_1.nativePackToolMg.register('ios', new ios_1.IOSPackTool());
manager_1.nativePackToolMg.register('mac', new mac_1.MacPackTool());
manager_1.nativePackToolMg.register('windows', new windows_1.WindowsPackTool());
manager_1.nativePackToolMg.register('android', new android_1.AndroidPackTool());
manager_1.nativePackToolMg.register('openharmony', new openharmony_1.OpenHarmonyPackTool());
manager_1.nativePackToolMg.register('ohos', new ohos_1.OHOSPackTool());
manager_1.nativePackToolMg.register('huawei-agc', new huawei_agc_1.HuaweiAGCPackTool());
__exportStar(require("./base/manager"), exports);
__exportStar(require("./base/default"), exports);
//# sourceMappingURL=index.js.map