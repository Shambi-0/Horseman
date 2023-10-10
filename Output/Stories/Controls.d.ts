/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/compiler-types" />
export declare namespace StoryControls {
    type STORY_LISTENER = {
        InputBegan: RBXScriptSignal<(Input: InputObject, GameProcessed: boolean) => void>;
        InputEnded: RBXScriptSignal<(Input: InputObject, GameProcessed: boolean) => void>;
        InputChanged: RBXScriptSignal<(Input: InputObject, GameProcessed: boolean) => void>;
        MouseMoved: RBXScriptSignal<(Position: Vector2, GameProcessed: boolean) => void>;
    };
    type Default = {};
    const Default: Default;
    type RATING_CONTROLS = {
        Digits: number;
        Value: number;
        TextColor3: Color3;
    };
    const RATING_CONTROLS: RATING_CONTROLS;
    type PROGRESS_CONTROLS = {
        Value: number;
        Width: number;
        Height: number;
        Radius: number;
    };
    const PROGRESS_CONTROLS: PROGRESS_CONTROLS;
    type SLIDER_CONTROLS = Exclude<PROGRESS_CONTROLS, "Value"> & {
        Step: number;
        Increment: boolean;
    };
    const SLIDER_CONTROLS_: SLIDER_CONTROLS;
}
export type StoryController = (typeof StoryControls)[keyof (typeof StoryControls)];
