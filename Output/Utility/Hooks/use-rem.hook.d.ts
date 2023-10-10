export interface RemOptions {
    Minimum?: number;
    Maximum?: number;
}
type RemScaleMode = "Pixel" | "Unit";
export declare function useRem(options?: RemOptions): <T extends number | Vector2 | UDim | UDim2>(Value: T, Mode?: RemScaleMode) => T;
export {};
