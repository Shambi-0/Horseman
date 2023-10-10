import { RunService } from "@rbxts/services";

/**
 * @description Remap 'n' from the old range (oldMin, oldMax) to the new range (min, max).
 * @link https://github.com/Sleitnick/RbxCookbook/blob/master/src/Map.lua
 */
export function mapNumber(n: number, oldMin: number, oldMax: number, min: number, max: number) {
    return min + (max - min) * ((n - oldMin) / (oldMax - oldMin));
};

/**
 * @description Checks that a value isn't `NaN`.
 */
export function isNotNaN(Value: unknown): boolean {
    return (Value === Value);
};

/**
 * @description Resolves a possible `NaN` value.
 * @async
 */
export async function resolveNumber(Resolve: () => number | void): Promise<void> {
    let Resolved = isNotNaN(Resolve());

    while (!Resolved) {
        RunService.RenderStepped.Wait();
        Resolved = isNotNaN(Resolve());
    };
};