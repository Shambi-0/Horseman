/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const AspectRatio: (props: Partial<{
    Ratio: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Type: import("@rbxts/pretty-roact-hooks").BindingOrValue<Enum.AspectType>;
    Axis: import("@rbxts/pretty-roact-hooks").BindingOrValue<Enum.DominantAxis>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<UIConstraint> & {
    Event?: Roact.JsxInstanceEvents<UIConstraint> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<UIConstraint> | undefined;
    Ref?: Roact.RefPropertyOrFunction<UIConstraint> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
