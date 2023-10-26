import Roact from "@rbxts/roact";

import { pAnchor, pPoint, pSize } from "@rbxts/precomputed";
import { getBindingValue } from "@rbxts/pretty-roact-hooks";
import { withHooks } from "@rbxts/roact-hooked";

interface Properties {
    Center: boolean;
}

export const CanvasGroup = withHooks<Bindable<Properties, CanvasGroup>>(Properties => {
    if (getBindingValue(Properties.Center) === true) {
        Properties.AnchorPoint = Properties.AnchorPoint ?? pAnchor.Center.Center;
        Properties.Position = Properties.Position ?? pPoint.Center.Center;
    };

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