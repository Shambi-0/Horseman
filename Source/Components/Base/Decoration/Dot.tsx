import Roact from "@rbxts/roact";

import { toBinding } from "@rbxts/pretty-roact-hooks";
import { pAnchor, pColor } from "@rbxts/precomputed";
import { withHooks } from "@rbxts/roact-hooked";

import { Frame } from "../../Core/Components/Frame";

import { Corner } from "../../Core/Constraints/Corner";

interface Properties {
    Location: Vector2;
    Thickness: number;
    BackgroundColor3: Color3;
    BackgroundTransparency: number;
};

export const Dot = withHooks<Bindable<Properties, Instance>>(Properties => {
    return (
        <Frame
            Position={toBinding(Properties.Location!).map(Value => new UDim2(0.5, Value.X, 0.5, Value.Y))}
            Size={toBinding(Properties.Thickness!).map(Value => UDim2.fromOffset(Value, Value))}
            AnchorPoint={pAnchor.Center.Center}
            BackgroundColor3={Properties.BackgroundColor3}
            BackgroundTransparency={Properties.BackgroundTransparency}
        >
            <Corner Radius={1} />
        </Frame>
    );
}, {
    "defaultProps": {
        "BackgroundColor3": pColor.Black,
        "Location": Vector2.zero,
        "Thickness": 4
    }
});