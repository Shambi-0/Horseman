/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const Rating: (props: Partial<{
    Value: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Digits: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    TextColor3: import("@rbxts/pretty-roact-hooks").BindingOrValue<Color3>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<Frame> & {
    Event?: Roact.JsxInstanceEvents<Frame> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<Frame> | undefined;
    Ref?: Roact.RefPropertyOrFunction<Frame> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
