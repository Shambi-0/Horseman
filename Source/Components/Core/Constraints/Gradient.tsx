import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";

interface Properties {};

export const Gradient = withHooks<Bindable<Properties, UIGradient>>((Properties) => {
    return (
        <uigradient
            Key="Gradient"
            { ... Properties }
        />
    );
});