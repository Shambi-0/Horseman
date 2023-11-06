import Roact from "@rbxts/roact";

import { getBindingValue, toBinding } from "@rbxts/pretty-roact-hooks";
import { useMemo, withHooks } from "@rbxts/roact-hooked";
import { pAnchor, pColor } from "@rbxts/precomputed";

import { Frame } from "../Core/Components/Frame";

interface Properties {
    From: Vector2,
    To: Vector2,
    Thickness: number,
};

export const Line = withHooks<Bindable<Properties, Frame>>(Properties => {
    const Data: {
        Distance: number,
        Rotation: number,
        Center: Vector2
    } = useMemo(() => {
        const From = getBindingValue(Properties.From) || Vector2.zero;
        const To = getBindingValue(Properties.To) || Vector2.zero;
        
        return {
            Rotation: math.deg(math.atan2(From.Y - To.Y, From.X - To.X)),
            Distance: From.sub(To).Magnitude,
            Center: From.Lerp(To, 0.5)
        };
    }, [ Properties ]);

    return (
        <Frame
            Size={toBinding(Properties.Thickness!).map(Value => UDim2.fromOffset(Data.Distance,  Value))}
            Position={new UDim2(0.5, Data.Center.X, 0.5, Data.Center.Y)}
            BackgroundTransparency={Properties.BackgroundTransparency}
            BackgroundColor3={Properties.BackgroundColor3}
            AnchorPoint={pAnchor.Center.Center}
            Rotation={Data.Rotation}
        />
    );
}, {
    "defaultProps": {
        BackgroundColor3: pColor.White,
        Thickness: 4
    }
})