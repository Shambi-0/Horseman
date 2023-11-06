import { pColor } from "@rbxts/precomputed";
import { Boolean, Choose, Color, Slider } from "@rbxts/ui-labs/out/ControlsUtil";

export namespace StoryControls {
    export type STORY_LISTENER = {
        InputBegan:   RBXScriptSignal<(Input: InputObject, GameProcessed: boolean) => void>,
        InputEnded:   RBXScriptSignal<(Input: InputObject, GameProcessed: boolean) => void>,
        InputChanged: RBXScriptSignal<(Input: InputObject, GameProcessed: boolean) => void>,
        MouseMoved:   RBXScriptSignal<(Position: Vector2,  GameProcessed: boolean) => void>
    };

    export type Default = {};
    
    export const Default = {} as unknown as Default;

    export type RATING_CONTROLS = {
        Digits: number,
        Value: number,
        TextColor3: Color3
    };

    export const RATING_CONTROLS = {
        Digits: Slider(5, 3, 10, 1),
        Value: Slider(2.5, 0, 10, 0.5),
        TextColor3: Color(pColor.White)
    } as unknown as RATING_CONTROLS;

    export type PROGRESS_CONTROLS = {
        Value: number,
        Width: number,
        Height: number,
        Radius: number
    };

    export const PROGRESS_CONTROLS = {
        Value: Slider(0.25, 0, 1),
        Width: Slider(1, 0.1, 1, 0.1),
        Height: Slider(1, 1, 10, 1),
        Radius: Slider(1, 0, 1, 0.1)
    } as unknown as PROGRESS_CONTROLS;

    export type SLIDER_CONTROLS = Exclude<PROGRESS_CONTROLS, "Value"> & {
        Step: number,
        Increment: boolean
    };

    export const SLIDER_CONTROLS_ = {
        ... PROGRESS_CONTROLS,
        Value: undefined,
        Step: Choose([ 0, 0.05, 0.1, 0.25, 0.5 ], 1),
        Increment: Boolean(true)
    } as unknown as SLIDER_CONTROLS;
};

export type StoryController = (typeof StoryControls)[keyof (typeof StoryControls)]