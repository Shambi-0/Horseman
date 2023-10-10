import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";
import { pSize } from "@rbxts/precomputed";

interface Properties {}

export const Frame = withHooks<Bindable<Properties, Frame>>((Properties) => {
    return (
        <frame
            { ... Properties }
        />
    );
}, {
    "defaultProps": {
        Size: pSize.Full,
        BorderSizePixel: 0
    }
});