/// <reference types="@rbxts/compiler-types" />
/**
 * @description Remap 'n' from the old range (oldMin, oldMax) to the new range (min, max).
 * @link https://github.com/Sleitnick/RbxCookbook/blob/master/src/Map.lua
 */
export declare function mapNumber(n: number, oldMin: number, oldMax: number, min: number, max: number): number;
/**
 * @description Checks that a value isn't `NaN`.
 */
export declare function isNotNaN(Value: unknown): boolean;
/**
 * @description Resolves a possible `NaN` value.
 * @async
 */
export declare function resolveNumber(Resolve: () => number | void): Promise<void>;
