/// <reference types="@rbxts/types" />
/// <reference types="ripple" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const Slider: (props: Partial<{
    Value: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Width: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Height: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Radius: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    ForegroundColor3: import("@rbxts/pretty-roact-hooks").BindingOrValue<Color3>;
    Spring: import("@rbxts/pretty-roact-hooks").BindingOrValue<import("@rbxts/ripple").SpringOptions>;
    Min: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Max: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Step: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    MouseLocation: import("@rbxts/pretty-roact-hooks").BindingOrValue<Vector2>;
    HideIncrement: import("@rbxts/pretty-roact-hooks").BindingOrValue<boolean>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<Frame> & {
    Event?: Roact.JsxInstanceEvents<Frame> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<Frame> | undefined;
    Ref?: Roact.RefPropertyOrFunction<Frame> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
