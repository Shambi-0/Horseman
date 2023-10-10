/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const LoadingSpinner: (props: Partial<{
    Color: import("@rbxts/pretty-roact-hooks").BindingOrValue<Color3>;
    Speed: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Scale: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<Frame> & {
    Event?: Roact.JsxInstanceEvents<Frame> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<Frame> | undefined;
    Ref?: Roact.RefPropertyOrFunction<Frame> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
