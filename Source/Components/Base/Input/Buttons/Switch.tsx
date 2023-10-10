import Roact from "@rbxts/roact";

import { pAnchor, pPoint, pSize } from "@rbxts/precomputed";
import { useEffect, withHooks } from "@rbxts/roact-hooked";
import { useToggle } from "@rbxts/roact-hooked-plus";
import { getBindingValue, useTimer } from "@rbxts/pretty-roact-hooks";
import ColorUtils from "@rbxts/colour-utils";

import { useSounds } from "../../../../Utility/Hooks/use-sounds.hook";

import getSounds from "../../../../Utility/getSounds";
import { useMotion, useTheme } from "../../../../Utility/Hooks";
import Ripple from "@rbxts/ripple";
import { Frame } from "../../../Core/Components/Frame";
import { AspectRatio } from "../../../Core/Constraints/AspectRatio";
import { Corner } from "../../../Core/Constraints/Corner";
import { Capture } from "../../../Core/Components/Capture";

interface Properties {
    Callback: (Bool: boolean) => void,
    Spring: Ripple.SpringOptions,
    Cooldown: number,
    Radius: UDim,
    Icon: string,
    From: string,
    To: string
};

export const Switch = withHooks<Bindable<Properties, Frame, "Callback">>(Properties => {
    const Lifetime = useTimer();

    const Player = useSounds({
        ... getSounds("Alerts"),
        ... getSounds("Buttons")
    });

    const [ Toggled, Toggle ] = useToggle(false, [ false, true ]);

    const [ Snap, SnapMotion ] = useMotion(0);
    const [ Progress, ProgressMotion ] = useMotion(0);
    const [ Hovering, HoveringMotion ] = useMotion(0);

    const Theme = useTheme();

    useEffect(() => {
        const Goal = Toggled ? 1 : 0;
        
        ProgressMotion.spring(Goal, getBindingValue(Properties.Spring));
        SnapMotion.spring(Goal, { "frequency": 6, "damping": 1 });
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
            <AspectRatio Ratio={1.75} />
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
                    onHovering={(Hovering: any) => HoveringMotion.spring(Hovering ? 1 : 0, getBindingValue(Properties.Spring))}
                    onInputBegan={
                        (_, Input: InputObject, Outside: boolean) => {
                            if ((Input.UserInputType === Enum.UserInputType.MouseButton1) && !Outside) {
                                Player(Toggled ? "ClickyButton1a" : "ClickyButton1b");

                                Toggle();
                                HoveringMotion.spring(1, getBindingValue(Properties.Spring));

                                if (Properties.Callback) task.defer(Properties.Callback, Toggled);
                            };
                        }
                    }
                />
                <Frame
                    Size={UDim2.fromScale(0.85, 0.85)}
                    SizeConstraint={Enum.SizeConstraint.RelativeYY}
                    BackgroundColor3={Theme.Default.Default900}
                    Position={Progress.map((Value: number) => UDim2.fromScale(0.05, 0.5).Lerp(UDim2.fromScale(0.95, 0.5), Value))}
                    AnchorPoint={Progress.map((Value: number) => pAnchor.Left.Center.Lerp(pAnchor.Right.Center, Value))}
                >
                    <Corner Radius={Properties.Radius} />
                </Frame>
            </Frame>
        </Frame>
    );
}, {
    "defaultProps": {
        Icon: "http://www.roblox.com/asset/?id=6031094667",
        Radius: new UDim(1),
        Callback: () => {},
        Cooldown: 0.25,
        Spring: {
            "damping": 0.6,
            "frequency": 5
        }
    }
});