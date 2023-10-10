import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";

interface Properties {
    Bottom: UDim,
    Right: UDim,
    Left: UDim,
    Top: UDim
};

export const Padding = withHooks<Bindable<Properties, UIConstraint>>(Properties => {
    return (
        <uipadding
            PaddingBottom={Properties.Bottom}
            PaddingRight={Properties.Right}
            PaddingLeft={Properties.Left}
            PaddingTop={Properties.Top}
            Key="Padding"
        />
    );
});