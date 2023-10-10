import Roact from "@rbxts/roact";

import { pAnchor, pColor, pPoint } from "@rbxts/precomputed";
import { withHooks } from "@rbxts/roact-hooked";

import { Frame } from "../../Core/Components/Frame";
import { Image } from "../../Core/Components/Image";

interface Properties {
    From: Vector2,
    To: Vector2,
    Size?: UDim2,
    BackgroundColor3: Color3,
    ForegroundColor3: Color3,
    Thickness?: number,
    Width?: number,
    BackgroundTransparency?: number,
    ForegroundTransparency?: number
};

export const MeasureFrame = withHooks<Partial<Properties>>(Properties => {
    return (
        <Frame
            Position={UDim2.fromOffset(Properties.From!.X, Properties.From!.Y)}
            Size={Properties.Size ? Properties.Size : UDim2.fromOffset(Properties.To!.X - Properties.From!.X, Properties.To!.Y - Properties.From!.Y)}
            BackgroundTransparency={Properties.BackgroundTransparency}
        >
            <Image
                Key="LineV1"
                BackgroundTransparency={1}
                Image="rbxassetid://13895861348"
                ScaleType={Enum.ScaleType.Tile}
                ImageColor3={Properties.ForegroundColor3}
                ImageTransparency={Properties.ForegroundTransparency}
                Size={new UDim2(1, 0, 0, Properties.Thickness!)}
                TileSize={new UDim2(0, Properties.Width!, 1, 0)}
            />
            <Image
                Key="LineH1"
                BackgroundTransparency={1}
                Image="rbxassetid://13895889245"
                ScaleType={Enum.ScaleType.Tile}
                ImageColor3={Properties.ForegroundColor3}
                ImageTransparency={Properties.ForegroundTransparency}
                Size={new UDim2(0, Properties.Thickness!, 1, 0)}
                TileSize={new UDim2(1, 0, 0, Properties.Width!)}
            />
            <Image
                Key="LineH2"
                AnchorPoint={pAnchor.Right.Top}
                BackgroundTransparency={1}
                Image="rbxassetid://13895889245"
                Position={pPoint.Right.Top}
                ScaleType={Enum.ScaleType.Tile}
                ImageColor3={Properties.ForegroundColor3}
                ImageTransparency={Properties.ForegroundTransparency}
                Size={new UDim2(0, Properties.Thickness!, 1, 0)}
                TileSize={new UDim2(1, 0, 0, Properties.Width!)}
            />
            <Image
                Key="LineV2"
                AnchorPoint={pAnchor.Left.Bottom}
                BackgroundTransparency={1}
                Image="rbxassetid://13895861348"
                Position={pPoint.Left.Bottom}
                ScaleType={Enum.ScaleType.Tile}
                ImageColor3={Properties.ForegroundColor3}
                ImageTransparency={Properties.ForegroundTransparency}
                Size={new UDim2(1, 0, 0, Properties.Thickness!)}
                TileSize={new UDim2(0, Properties.Width!, 1, 0)}
            />
            { Properties[Roact.Children] }
        </Frame>
    );
}, {
    "defaultProps": {
        From: Vector2.zero,
        To: new Vector2(100, 100),
        BackgroundColor3: pColor.White,
        ForegroundColor3: pColor.White,
        Thickness: 3,
        Width: 16,
        BackgroundTransparency: 1,
        ForegroundTransparency: 0
    }
});