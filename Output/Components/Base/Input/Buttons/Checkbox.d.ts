/// <reference types="ripple" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
import Ripple from "@rbxts/ripple";
export declare const Checkbox: (props: Partial<{
    Callback: (Bool: boolean) => void;
    Spring: import("@rbxts/pretty-roact-hooks").BindingOrValue<Ripple.SpringOptions>;
    Cooldown: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Radius: import("@rbxts/pretty-roact-hooks").BindingOrValue<UDim>;
    Icon: import("@rbxts/pretty-roact-hooks").BindingOrValue<string>;
    From: import("@rbxts/pretty-roact-hooks").BindingOrValue<string>;
    To: import("@rbxts/pretty-roact-hooks").BindingOrValue<string>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<Frame> & {
    Event?: Roact.JsxInstanceEvents<Frame> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<Frame> | undefined;
    Ref?: Roact.RefPropertyOrFunction<Frame> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
