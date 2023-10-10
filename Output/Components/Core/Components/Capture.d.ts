/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const IS_EDIT: boolean;
export declare const Capture: (props: Partial<{
    readonly onHovering: (Hovering: boolean) => void;
    readonly onInputBegan: (Object: Frame, Input: InputObject, Outside: boolean) => boolean | void;
    readonly onInputChanged: (Object: Frame, Input: InputObject) => void;
    readonly onInputEnded: (Object: Frame, Input: InputObject) => void;
    readonly Cooldown: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    readonly Visible: import("@rbxts/pretty-roact-hooks").BindingOrValue<boolean>;
    readonly Size: import("@rbxts/pretty-roact-hooks").BindingOrValue<UDim2>;
    readonly Position: import("@rbxts/pretty-roact-hooks").BindingOrValue<UDim2>;
    readonly AnchorPoint: import("@rbxts/pretty-roact-hooks").BindingOrValue<Vector2>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<Instance> & {
    Event?: Roact.JsxInstanceEvents<Instance> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<Instance> | undefined;
    Ref?: Roact.RefPropertyOrFunction<Instance> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
