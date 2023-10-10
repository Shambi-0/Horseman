import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";

interface Properties {
    ApplyStroke: Enum.ApplyStrokeMode,
    LineJoin: Enum.LineJoinMode,
    Transparency: number,
    Thickness: number,
    Color: Color3
};

export const Stroke = withHooks<Bindable<Properties, UIConstraint>>((Properties) => {
    return (
        <uistroke
            ApplyStrokeMode={Properties.ApplyStroke}
            Transparency={Properties.Transparency}
            LineJoinMode={Properties.LineJoin}
            Thickness={Properties.Thickness}
            Color={Properties.Color}
            Key="Stroke"
        />
    );
});