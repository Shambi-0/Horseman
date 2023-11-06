/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import Roact from "@rbxts/roact";
declare namespace Accordion {
    interface Properties {
    }
    export const Group: (props: Properties) => Roact.Element;
    export const Content: (props: Partial<{
        Icon: import("@rbxts/pretty-roact-hooks").BindingOrValue<string>;
        Title: import("@rbxts/pretty-roact-hooks").BindingOrValue<string>;
        Height: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    } & {
        [Children]?: Roact.Children | undefined;
    } & Roact.JsxInstanceProperties<Instance> & {
        Event?: Roact.JsxInstanceEvents<Instance> | undefined;
        Change?: Roact.JsxInstanceChangeEvents<Instance> | undefined;
        Ref?: Roact.RefPropertyOrFunction<Instance> | undefined;
    } & JSX.IntrinsicAttributes>) => Roact.Element;
    export const Trigger: (props: Partial<{} & {
        [Children]?: Roact.Children | undefined;
    } & Roact.JsxInstanceProperties<Frame> & {
        Event?: Roact.JsxInstanceEvents<Frame> | undefined;
        Change?: Roact.JsxInstanceChangeEvents<Frame> | undefined;
        Ref?: Roact.RefPropertyOrFunction<Frame> | undefined;
    } & JSX.IntrinsicAttributes>) => Roact.Element;
    export {};
}
export = Accordion;
