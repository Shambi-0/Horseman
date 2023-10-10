/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const Stroke: (props: Partial<{
    ApplyStroke: import("@rbxts/pretty-roact-hooks").BindingOrValue<Enum.ApplyStrokeMode>;
    LineJoin: import("@rbxts/pretty-roact-hooks").BindingOrValue<Enum.LineJoinMode>;
    Transparency: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Thickness: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Color: import("@rbxts/pretty-roact-hooks").BindingOrValue<Color3>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<UIConstraint> & {
    Event?: Roact.JsxInstanceEvents<UIConstraint> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<UIConstraint> | undefined;
    Ref?: Roact.RefPropertyOrFunction<UIConstraint> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
