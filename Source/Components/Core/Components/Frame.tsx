import Roact from "@rbxts/roact";

import { useMemo, withHooks } from "@rbxts/roact-hooked";
import { pAnchor, pPoint, pSize } from "@rbxts/precomputed";
import { getBindingValue } from "@rbxts/pretty-roact-hooks";

interface Properties {
    Transparent: boolean;
    Center: boolean;
}

export const Frame = withHooks<Bindable<Properties, Frame>>(Properties => {
    if (getBindingValue(Properties.Transparent) === true) Properties.BackgroundTransparency = 1;

    if (getBindingValue(Properties.Center) === true) {
        Properties.AnchorPoint = Properties.AnchorPoint ?? pAnchor.Center.Center;
        Properties.Position = Properties.Position ?? pPoint.Center.Center;
    };

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