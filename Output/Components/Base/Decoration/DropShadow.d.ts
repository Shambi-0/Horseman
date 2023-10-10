/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const DropShadow: (props: Partial<{
    Thickness: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Transparency: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Color: import("@rbxts/pretty-roact-hooks").BindingOrValue<Color3>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<Instance> & {
    Event?: Roact.JsxInstanceEvents<Instance> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<Instance> | undefined;
    Ref?: Roact.RefPropertyOrFunction<Instance> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
