import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";

interface Properties {
    Radius: number | UDim
};

export const Corner = withHooks<Bindable<Properties, UIConstraint>>((Properties) => {
	return (
        <uicorner
            CornerRadius={ (typeOf(Properties.Radius) === "number") ? new UDim(Properties.Radius as number, 0) : (Properties.Radius as UDim) }
            Key="Corner"
        />
    );
});