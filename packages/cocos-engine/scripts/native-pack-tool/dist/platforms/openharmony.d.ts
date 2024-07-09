import { CocosParams, NativePackTool } from "../base/default";
export interface IOrientation {
    landscapeLeft: boolean;
    landscapeRight: boolean;
    portrait: boolean;
    upsideDown: boolean;
}
export interface OHOSParam {
    sdkPath: string;
    ndkPath: string;
    orientation: IOrientation;
    packageName: string;
    appABIs: string[];
    apiLevel: number;
}
export declare class OpenHarmonyPackTool extends NativePackTool {
    params: CocosParams<OHOSParam>;
    initEnv(): void;
    create(): Promise<boolean>;
    make(): Promise<boolean>;
    run(): Promise<boolean>;
    findHDCTool(sdkPath: string): string;
    private readJSON5Sync;
    private selectHapFile;
    get hdcPath(): string | null;
    randString(n: number): string;
}
