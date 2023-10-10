import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";
import { pSize } from "@rbxts/precomputed";

interface Properties {}

export const Image = withHooks<Bindable<Properties, ImageLabel>>((Properties) => {
    return (
        <imagelabel
            { ... Properties }
        />
    );
}, {
    "defaultProps": {
        BackgroundTransparency: 1,
        Size: pSize.Full
    }
});