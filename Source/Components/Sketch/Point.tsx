import Roact from "@rbxts/roact";

import { toBinding } from "@rbxts/pretty-roact-hooks";
import { pAnchor, pColor } from "@rbxts/precomputed";
import { withHooks } from "@rbxts/roact-hooked";

import { Corner } from "../Core/Constraints/Corner";
import { Frame } from "../Core/Components/Frame";

interface Properties {
    Thickness: number,
    Location: Vector2
};

export const Point = withHooks<Bindable<Properties, Frame>>(Properties => {
    return (
        <Frame
            Position={toBinding(Properties.Location!).map(Value => new UDim2(0.5, Value.X, 0.5, Value.Y))}
            Size={toBinding(Properties.Thickness!).map(Value => UDim2.fromOffset(Value, Value))}
            BackgroundTransparency={Properties.BackgroundTransparency}
            BackgroundColor3={Properties.BackgroundColor3}
            AnchorPoint={pAnchor.Center.Center}
        >
            <Corner Radius={1} />
        </Frame>
    );
}, {
    "defaultProps": {
        BackgroundColor3: pColor.White,
        Thickness: 4
    }
})