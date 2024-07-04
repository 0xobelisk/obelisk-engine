import { Paths } from "../utils";
import { NativePackTool } from "./default";
export type ISupportPlatform = 'mac-os' | 'mac' | 'ios' | 'android' | 'ohos';
export declare class NativePackToolManager {
    static Paths: Paths;
    private PackToolMap;
    private getPackTool;
    register(platform: string, tool: NativePackTool): void;
    init(params: any): void;
    create(platform: string): Promise<false | undefined>;
    generate(platform: string): Promise<false | undefined>;
    make(platform: string): Promise<boolean>;
    run(platform: string): Promise<boolean>;
}
export declare const nativePackToolMg: NativePackToolManager;
