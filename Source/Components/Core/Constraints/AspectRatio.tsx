import Roact from "@rbxts/roact";

import { getBindingValue } from "@rbxts/pretty-roact-hooks";
import { withHooks } from "@rbxts/roact-hooked";

interface Properties {
    Ratio: number,
    Type: Enum.AspectType,
    Axis: Enum.DominantAxis,

    Square: boolean
};

export const AspectRatio = withHooks<Bindable<Properties, UIConstraint>>(Properties => {
    if (getBindingValue(Properties.Square) === true) Properties.Ratio = 1;

	return (
        <uiaspectratioconstraint
            AspectRatio={Properties.Ratio}
            DominantAxis={Properties.Axis}
            AspectType={Properties.Type}
            Key="AspectRatio"
        />
	);
});