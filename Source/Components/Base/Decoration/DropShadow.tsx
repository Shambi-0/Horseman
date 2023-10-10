import Roact from "@rbxts/roact";

import { useEffect, useState, withHooks } from "@rbxts/roact-hooked";
import { pColor } from "@rbxts/precomputed";

import { useRem } from "../../../Utility/Hooks";

import { Image } from "../../Core/Components/Image";
import { Frame } from "../../Core/Components/Frame";

interface Properties {
    Thickness: number,
    Transparency: number,
    Color: Color3
};

export const DropShadow = withHooks<Bindable<Properties, Instance>>(Properties => {
    const Rem = useRem();
    
    const [ Scale, SetScale ] = useState(Rem(Properties.Thickness! as number));

    useEffect(() => SetScale(Rem(Properties.Thickness! as number)), [ Properties.Thickness ]);

    return (
        <Frame
            Key="DropShadow"
            BackgroundTransparency={1}
        >
            <Image
                // BOTTOM
                Image="rbxassetid://2715137474"
                ImageColor3={Properties.Color!}
                ImageTransparency={Properties.Transparency!}
                Position={new UDim2(0, 0, 1, 0)}
                Size={new UDim2(1, 0, 0, Scale)}
            />
            <Image
                // LEFT
                AnchorPoint={new Vector2(1, 0)}
                Image="rbxassetid://2715140280"
                ImageColor3={Properties.Color!}
                ImageTransparency={Properties.Transparency!}
                Size={new UDim2(0, Scale, 1, 0)}
            />
            <Image
                // LEFT-BOTTOM
                AnchorPoint={new Vector2(1, 0)}
                Image="rbxassetid://2715199828"
                ImageColor3={Properties.Color!}
                ImageTransparency={Properties.Transparency!}
                Position={new UDim2(0, 0, 1, 0)}
                Size={new UDim2(0, Scale, 0, Scale)}
            />
            <Image
                // LEFT-TOP
                AnchorPoint={new Vector2(1, 1)}
                Image="rbxassetid://2715200507"
                ImageColor3={Properties.Color!}
                ImageTransparency={Properties.Transparency!}
                Size={new UDim2(0, Scale, 0, Scale)}
            />
            <Image
                // RIGHT
                Image="rbxassetid://2715141619"
                ImageColor3={Properties.Color!}
                ImageTransparency={Properties.Transparency!}
                Position={new UDim2(1, 0, 0, 0)}
                Size={new UDim2(0, Scale, 1, 0)}
            />
            <Image
                // RIGHT-BOTTOM
                Image="rbxassetid://2715200973"
                ImageColor3={Properties.Color!}
                ImageTransparency={Properties.Transparency!}
                Position={new UDim2(1, 0, 1, 0)}
                Size={new UDim2(0, Scale, 0, Scale)}
            />
            <Image
                // RIGHT-TOP
                AnchorPoint={new Vector2(0, 1)}
                Image="rbxassetid://2715201545"
                ImageColor3={Properties.Color!}
                ImageTransparency={Properties.Transparency!}
                Position={new UDim2(1, 0, 0, 0)}
                Size={new UDim2(0, Scale, 0, Scale)}
            />
            <Image
                // TOP
                AnchorPoint={new Vector2(0, 1)}
                Image="rbxassetid://2715138063"
                ImageColor3={Properties.Color!}
                ImageTransparency={Properties.Transparency!}
                Size={new UDim2(1, 0, 0, Scale)}
            />
        </Frame>
    );
}, {
    "defaultProps": {
        Thickness: 0.5,
        Transparency: 0.65,
        Color: pColor.Black
    }
});