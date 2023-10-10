import Roact from "@rbxts/roact";

import { pAnchor, pPoint, pSize } from "@rbxts/precomputed";
import { useEffect, withHooks } from "@rbxts/roact-hooked";
import { useToggle } from "@rbxts/roact-hooked-plus";
import { useTimer } from "@rbxts/pretty-roact-hooks";
import ColorUtils from "@rbxts/colour-utils";

import { AspectRatio } from "../../Constraints/AspectRatio";
import { Gradient } from "../../Constraints/Gradient";
import { Corner } from "../../Constraints/Corner";

import { Capture } from "../../Capture";
import { Frame } from "../../Frame";
import { Image } from "../../Image";

import { useMotion } from "Client/Interfaces/Utility/Hooks/use-motion.hook";
import { useSounds } from "Client/Interfaces/Utility/Hooks/use-sounds.hook";
import { useTheme } from "Client/Interfaces/Utility/Hooks/use-theme.hook";

import getSpringConfig from "Client/Interfaces/Utility/getSpringConfig";
import getSounds from "Client/Interfaces/Utility/getSounds";

interface Properties {
    Radius: UDim,
    Frequency: number,
    Dampening: number,
    
    Callback: (Bool: boolean) => void,
    Cooldown: number,
    
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
        
        ProgressMotion.spring(Goal, getSpringConfig(Properties));
        SnapMotion.spring(Goal, { "frequency": 6, "damping": 1 });
        IconMotion.spring(Goal, { "frequency": 2.5, "damping": 0.9 });
    }, [ Toggled ]);

    return (
        <Frame
            Size={Properties.Size}
            Position={Properties.Position}
            AnchorPoint={Properties.AnchorPoint}
            BackgroundTransparency={1}
        >
            <uisizeconstraint
                Key="Sizing"
                MinSize={new Vector2(0, 32)}
            />
            <AspectRatio Ratio={1} />
            <Frame
                Key="Container"
                AnchorPoint={pAnchor.Center.Center}
                Position={pPoint.Center.Center}
                Size={Hovering.map(Value => pSize.Full.add(pSize.None.Lerp(UDim2.fromScale(0.2, 0.2), Value)))}
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
                    onHovering={Hovering => HoveringMotion.spring(Hovering ? 1 : 0, getSpringConfig(Properties))}
                    onInputBegan={
                        (_, Input: InputObject, Outside: boolean) => {
                            if ((Input.UserInputType === Enum.UserInputType.MouseButton1) && !Outside) {
                                // Player(Toggled ? "GenericNotification5" : "GenericNotification8");
                                Player(Toggled ? "ClickyButton1a" : "ClickyButton1b")

                                Toggle();
                                HoveringMotion.spring(1, getSpringConfig(Properties));

                                if (Properties.Callback) task.defer(Properties.Callback, Toggled);
                            };
                        }
                    }
                />
                <Image
                    Key="Icon"
                    Size={Progress.map(Value => UDim2.fromScale(0.7, 0.7).add(UDim2.fromScale(0.2, 0.2).Lerp(pSize.None, Value)))}
                    AnchorPoint={pAnchor.Center.Center}
                    ImageColor3={Theme.Layout.Foreground}
                    Position={pPoint.Center.Center}
                    Image={Properties.From ? Properties.From : Properties.Icon}
                >
                    <Gradient
                        Transparency={
                            Icon.map(Value => {
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
                        Key="Hidden"
                        Size={Progress.map(Value => UDim2.fromScale(0.7, 0.7).add(UDim2.fromScale(0.2, 0.2).Lerp(pSize.None, 1 - Value)))}
                        AnchorPoint={pAnchor.Center.Center}
                        ImageColor3={Theme.Primary.Primary400!}
                        Position={pPoint.Center.Center}
                        Image={Properties.To}
                    >
                        <Gradient
                            Transparency={
                                Icon.map(Value => {
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
        Radius: new UDim(0.15),
        Callback: () => {},
        Frequency: 6,
        Dampening: 0.6,
        Cooldown: 0.15,
        Icon: "http://www.roblox.com/asset/?id=6031094667"
    }
});