/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
import Roact from "@rbxts/roact";
import { BindingOrValue } from "@rbxts/pretty-roact-hooks";
interface GroupProps extends Roact.PropsWithChildren {
    Ref?: Roact.Ref<Frame>;
    Event?: Roact.JsxInstanceEvents<Frame>;
    Change?: Roact.JsxInstanceChangeEvents<Frame>;
    Size?: BindingOrValue<UDim2>;
    Position?: BindingOrValue<UDim2>;
    AnchorPoint?: BindingOrValue<Vector2>;
    Rotation?: BindingOrValue<number>;
    ClipsDescendants?: BindingOrValue<boolean>;
    LayoutOrder?: BindingOrValue<number>;
    Visible?: BindingOrValue<boolean>;
    zIndex?: BindingOrValue<number>;
    Selectable?: BindingOrValue<boolean>;
}
export declare const Group: Roact.ComponentConstructor<GroupProps, {}>;
export {};
