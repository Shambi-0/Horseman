/// <reference types="@rbxts/compiler-types" />
import { BindingOrValue } from "@rbxts/pretty-roact-hooks";
export declare function useDebounce(Delay: BindingOrValue<number>): LuaTuple<[(Now?: number) => boolean, (Callback?: () => void) => boolean]>;
