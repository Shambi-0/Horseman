import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";
import { pSize } from "@rbxts/precomputed";

interface Properties {}

export const CanvasGroup = withHooks<Bindable<Properties, CanvasGroup>>((Properties) => {
    return (
        <canvasgroup
            { ... Properties }
        />
    );
}, {
    "defaultProps": {
        Size: pSize.Full,
        BorderSizePixel: 0,
        BackgroundTransparency: 1
    }
});