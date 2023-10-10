export interface RemOptions {
    Minimum?: number;
    Maximum?: number;
}
type RemScaleMode = "Pixel" | "Unit";
export default function useRem(options?: RemOptions): <T extends number | UDim | Vector2 | UDim2>(Value: T, Mode?: RemScaleMode) => T;
export {};
