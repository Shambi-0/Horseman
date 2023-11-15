/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const Blur: (props: Partial<{
    Material: import("@rbxts/pretty-roact-hooks").BindingOrValue<Enum.Material>;
    Transparency: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Position: import("@rbxts/pretty-roact-hooks").BindingOrValue<UDim2>;
    ZIndex: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Color: import("@rbxts/pretty-roact-hooks").BindingOrValue<Color3>;
    Size: import("@rbxts/pretty-roact-hooks").BindingOrValue<UDim2>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<Instance> & {
    Event?: Roact.JsxInstanceEvents<Instance> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<Instance> | undefined;
    Ref?: Roact.RefPropertyOrFunction<Instance> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
