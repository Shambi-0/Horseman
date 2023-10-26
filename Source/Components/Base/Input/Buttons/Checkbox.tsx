import Roact from "@rbxts/roact";

import { getBindingValue, useTimer } from "@rbxts/pretty-roact-hooks";
import { pAnchor, pPoint, pSize } from "@rbxts/precomputed";
import { useEffect, withHooks } from "@rbxts/roact-hooked";
import { useToggle } from "@rbxts/roact-hooked-plus";
import ColorUtils from "@rbxts/colour-utils";
import Ripple from "@rbxts/ripple";

import { useMotion, useSounds, useTheme } from "../../../../Utility/Hooks";
import getSounds from "../../../../Utility/getSounds";

import { Capture } from "../../../Core/Components/Capture";
import { Frame } from "../../../Core/Components/Frame";
import { Image } from "../../../Core/Components/Image";

import { AspectRatio } from "../../../Core/Constraints/AspectRatio";
import { Gradient } from "../../../Core/Constraints/Gradient";
import { Corner } from "../../../Core/Constraints/Corner";

interface Properties {
    Callback: (Bool: boolean) => void,
    Spring: Ripple.SpringOptions,
    Cooldown: number,
    Radius: UDim,
    Icon: string,
    From: string,
    To: string
};

export const Checkbox = withHooks<Bindable<Properties, Frame, "Callback">>(Properties => {
    const Lifetime = useTimer();

    const Player = useSounds({
        ... getSounds("Alerts"),
        ... getSounds("Buttons")
    });

    const [ Toggled, Toggle ] = useToggle(false, [ false, true ]);

    const [ Snap, SnapMotion ] = useMotion(0);
    const [ Icon, IconMotion ] = useMotion(0);
    const [ Progress, ProgressMotion ] = useMotion(0);
    const [ Hovering, HoveringMotion ] = useMotion(0);

    const Theme = useTheme();

    useEffect(() => {
        const Goal = Toggled ? 1 : 0;
        
        ProgressMotion.spring(Goal, getBindingValue(Properties.Spring));
        SnapMotion.spring(Goal, { "frequency": 6, "damping": 1 });
        IconMotion.spring(Goal, { "frequency": 2.5, "damping": 0.9 });
    }, [ Toggled ]);

    return (
        <Frame
            AnchorPoint={Properties.AnchorPoint}
            Position={Properties.Position}
            Size={Properties.Size}
            Transparent
        >
            <uisizeconstraint
                MinSize={new Vector2(0, 32)}
                Key="Sizing"
            />
            <AspectRatio Ratio={1} />
            <Frame
                Center
                Key="Container"
                Size={Hovering.map((Value: number) => pSize.Full.add(pSize.None.Lerp(UDim2.fromScale(0.2, 0.2), Value)))}
                BackgroundColor3={
                    Lifetime.value.map(() => {
                        const Background = ColorUtils.Blend.Transparency(Theme.Primary.Primary400!, Theme.Default.Default100!, Snap.getValue());

                        return ColorUtils.Blend.Transparency(ColorUtils.Lighten(Background, 0.1), Background, math.clamp(Hovering.getValue(), 0, 1));
                    })
                }
            >
                <Corner Radius={Properties.Radius} />
                <Capture
                    Cooldown={Properties.Cooldown}
                    onHovering={(Hovering: any) => HoveringMotion.spring(Hovering ? 1 : 0, getBindingValue(Properties.Spring))}
                    onInputBegan={
                        (_: any, Input: InputObject, Outside: boolean) => {
                            if ((Input.UserInputType === Enum.UserInputType.MouseButton1) && !Outside) {
                                // Player(Toggled ? "GenericNotification5" : "GenericNotification8");
                                Player(Toggled ? "ClickyButton1a" : "ClickyButton1b")

                                Toggle();
                                HoveringMotion.spring(1, getBindingValue(Properties.Spring));

                                if (Properties.Callback) task.defer(Properties.Callback, Toggled);
                            };
                        }
                    }
                />
                <Image
                    Size={Progress.map((Value: number) => UDim2.fromScale(0.7, 0.7).add(UDim2.fromScale(0.2, 0.2).Lerp(pSize.None, Value)))}
                    Image={Properties.From ? Properties.From : Properties.Icon}
                    ImageColor3={Theme.Layout.Foreground}
                    AnchorPoint={pAnchor.Center.Center}
                    Position={pPoint.Center.Center}
                    Key="Icon"
                >
                    <Gradient
                        Transparency={
                            Icon.map((Value: number) => {
                                const T = math.clamp(Value, 0.01, 0.98);

                                return new NumberSequence([
                                    new NumberSequenceKeypoint(0, 0),
                                    new NumberSequenceKeypoint(T, 0),
                                    new NumberSequenceKeypoint(T + 0.01, 1),
                                    new NumberSequenceKeypoint(1, 1),
                                ]);
                            })
                        }
                    />
                </Image>
                {
                    Properties.To ? <Image
                        Size={Progress.map((Value: number) => UDim2.fromScale(0.7, 0.7).add(UDim2.fromScale(0.2, 0.2).Lerp(pSize.None, 1 - Value)))}
                        ImageColor3={Theme.Primary.Primary400!}
                        AnchorPoint={pAnchor.Center.Center}
                        Position={pPoint.Center.Center}
                        Image={Properties.To}
                        Key="Hidden"
                    >
                        <Gradient
                            Transparency={
                                Icon.map((Value: number) => {
                                    const T = math.clamp(Value, 0.02, 0.99);

                                    return new NumberSequence([
                                        new NumberSequenceKeypoint(0, 1),
                                        new NumberSequenceKeypoint(T, 1),
                                        new NumberSequenceKeypoint(T + 0.01, 0),
                                        new NumberSequenceKeypoint(1, 0),
                                    ]);
                                })
                            }
                        />
                    </Image> : <></>
                }
            </Frame>
        </Frame>
    );
}, {
    "defaultProps": {
        Icon: "http://www.roblox.com/asset/?id=6031094667",
        Radius: new UDim(0.15),
        Callback: () => {},
        Cooldown: 0.15,
        Spring: {
            "damping": 0.6,
            "frequency": 6
        }
    }
});