/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="ripple" />
/// <reference types="roact" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
import Ripple from "@rbxts/ripple";
export declare const Progress: (props: Partial<{
    Value: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Width: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Height: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Radius: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    ForegroundColor3: import("@rbxts/pretty-roact-hooks").BindingOrValue<Color3>;
    Reference: import("@rbxts/pretty-roact-hooks").BindingOrValue<Roact.Ref<Instance>>;
    Spring: import("@rbxts/pretty-roact-hooks").BindingOrValue<Ripple.SpringOptions>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<Frame> & {
    Event?: Roact.JsxInstanceEvents<Frame> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<Frame> | undefined;
    Ref?: Roact.RefPropertyOrFunction<Frame> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
