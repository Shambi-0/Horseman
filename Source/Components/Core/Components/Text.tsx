import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";
import { pColor } from "@rbxts/precomputed";

interface Properties {}

export const Text = withHooks<Bindable<Properties, TextLabel>>((Properties) => {
    return (
        <textlabel
            { ... Properties }
        />
    );
}, {
    "defaultProps": {
        BackgroundTransparency: 1,
        TextColor3: pColor.White,
        TextScaled: true,
        Font: Enum.Font.GothamBlack
    }
});