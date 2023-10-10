/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const Corner: (props: Partial<{
    Radius: import("@rbxts/pretty-roact-hooks").BindingOrValue<number | UDim>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<UIConstraint> & {
    Event?: Roact.JsxInstanceEvents<UIConstraint> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<UIConstraint> | undefined;
    Ref?: Roact.RefPropertyOrFunction<UIConstraint> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
