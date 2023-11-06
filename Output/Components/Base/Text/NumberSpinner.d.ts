/// <reference types="ripple" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
export declare const NumberSpinner: (props: Partial<{
    Spring: import("@rbxts/pretty-roact-hooks").BindingOrValue<import("@rbxts/ripple").SpringOptions>;
    Scaled: import("@rbxts/pretty-roact-hooks").BindingOrValue<boolean>;
    Prefix: import("@rbxts/pretty-roact-hooks").BindingOrValue<string>;
    Digits: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    Value: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    BackgroundTransparency: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    BackgroundColor3: import("@rbxts/pretty-roact-hooks").BindingOrValue<Color3>;
    AnchorPoint: import("@rbxts/pretty-roact-hooks").BindingOrValue<Vector2>;
    LayoutOrder: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    TextColor3: import("@rbxts/pretty-roact-hooks").BindingOrValue<Color3>;
    Visible: import("@rbxts/pretty-roact-hooks").BindingOrValue<boolean>;
    Position: import("@rbxts/pretty-roact-hooks").BindingOrValue<UDim2>;
    Font: import("@rbxts/pretty-roact-hooks").BindingOrValue<Enum.Font>;
    Size: import("@rbxts/pretty-roact-hooks").BindingOrValue<UDim2>;
} & {
    [Children]?: Roact.Children | undefined;
} & Roact.JsxInstanceProperties<Instance> & {
    Event?: Roact.JsxInstanceEvents<Instance> | undefined;
    Change?: Roact.JsxInstanceChangeEvents<Instance> | undefined;
    Ref?: Roact.RefPropertyOrFunction<Instance> | undefined;
} & JSX.IntrinsicAttributes>) => Roact.Element;
