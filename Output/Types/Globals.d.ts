import { BindingOrValue } from "@rbxts/pretty-roact-hooks";

declare global {
    type Bindable<Properties, Element extends Instance, Excluded extends keyof Properties | undefined = undefined> =
        Partial<{ [Key in keyof Properties]: Key extends Excluded ? Properties[Key] : BindingOrValue<Properties[Key]> } & JSX.IntrinsicElement<Element>>;
}