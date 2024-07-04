import { CocosParams, NativePackTool } from "../base/default";
export interface IOrientation {
    landscapeLeft: boolean;
    landscapeRight: boolean;
    portrait: boolean;
    upsideDown: boolean;
}
export interface MacOSParams {
    bundleId: string;
    skipUpdateXcodeProject: boolean;
}
export declare abstract class MacOSPackTool extends NativePackTool {
    params: CocosParams<MacOSParams>;
    create(): Promise<boolean>;
    abstract generate(): Promise<boolean>;
    shouldSkipGenerate(): boolean;
    protected isAppleSilicon(): boolean;
    protected getXcodeMajorVerion(): number;
    modifyXcodeProject(): Promise<void>;
    /**
     * When "Skip Xcode Project Update" is checked, changes to the contents of the "data" directory
     * still need to be synchronized with Xcode. One way to achieve this is to modify the Xcode
     * project file directly and use directory references to access the "data" directory.
     * However, this method is not supported in Xcode 11 and earlier project formats due to
     * differences in their formats.
     */
    xcodeFixAssetsReferences(): Promise<void>;
    checkIfXcodeInstalled(): Promise<boolean>;
}
