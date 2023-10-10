import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";

interface Properties {
    Ratio: number,
    Type: Enum.AspectType,
    Axis: Enum.DominantAxis
};

export const AspectRatio = withHooks<Bindable<Properties, UIConstraint>>((Properties) => {
	return (
        <uiaspectratioconstraint
            AspectRatio={Properties.Ratio}
            DominantAxis={Properties.Axis}
            AspectType={Properties.Type}
            Key="AspectRatio"
        />
	);
});