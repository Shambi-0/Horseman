/// <reference types="@rbxts/compiler-types" />
/// <reference types="roact" />
/// <reference types="ripple" />
import Ripple from "@rbxts/ripple";
import Roact from "@rbxts/roact";
export declare function useMotion(goal: number): LuaTuple<[
    Roact.Binding<number>,
    Ripple.Motion<number>
]>;
export declare function useMotion<T extends Ripple.MotionGoal>(goal: T): LuaTuple<[
    Roact.Binding<T>,
    Ripple.Motion<T>
]>;
