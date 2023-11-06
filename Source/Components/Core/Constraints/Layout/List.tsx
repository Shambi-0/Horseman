import Roact from "@rbxts/roact";
import { withHooks } from "@rbxts/roact-hooked";

interface Properties {};

const ListLayout = withHooks<Bindable<Properties, Instance>>(Properties => {
    return (
        <uilistlayout/>
    );
}, {
    "defaultProps": {
        Key: "Layout"
    }
});

export = ListLayout;