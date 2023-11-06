/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const Point: (props: Partial<{
    Thickness: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Location: import("@rbxts/pretty-roact-hooks").BindingOrValue<Vector2>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<Frame> & {
    Event?: Roact.JsxInstanceEvents<Frame> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<Frame> | undefined;
    Ref?: Roact.RefPropertyOrFunction<Frame> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
