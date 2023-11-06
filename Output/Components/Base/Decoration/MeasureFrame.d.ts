/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
import Roact from "@rbxts/roact";
interface Properties {
    From: Vector2;
    To: Vector2;
    Size?: UDim2;
    BackgroundColor3: Color3;
    ForegroundColor3: Color3;
    Thickness?: number;
    Width?: number;
    BackgroundTransparency?: number;
    ForegroundTransparency?: number;
}
export declare const MeasureFrame: (props: Partial<Properties>) => Roact.Element;
export {};
