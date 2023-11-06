import Roact from "@rbxts/roact";

import { getBindingValue } from "@rbxts/pretty-roact-hooks";
import { useMemo, withHooks } from "@rbxts/roact-hooked";

import { useRem } from "../../../Utility/Hooks";

interface Properties {
    ApplyStroke: Enum.ApplyStrokeMode,
    LineJoin: Enum.LineJoinMode,
    Transparency: number,
    Thickness: number,
    Scaled: boolean,
    Color: Color3
};

export const Stroke = withHooks<Bindable<Properties, UIConstraint>>((Properties) => {
    const Rem = useRem();

    const Thickness = useMemo(() => {
        const Value = getBindingValue(Properties.Thickness) || 0;

        return (getBindingValue(Properties.Scaled) === true) ? Rem(Value, "Pixel") : Value;
    }, [ Properties ])

    return (
        <uistroke
            ApplyStrokeMode={Properties.ApplyStroke}
            Transparency={Properties.Transparency}
            LineJoinMode={Properties.LineJoin}
            Color={Properties.Color}
            Thickness={Thickness}
            Key="Stroke"
        />
    );
});