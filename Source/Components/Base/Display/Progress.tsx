import Roact from "@rbxts/roact";

import { getBindingValue, joinAnyBindings, toBinding, useBindingListener } from "@rbxts/pretty-roact-hooks";
import { pAnchor, pPoint } from "@rbxts/precomputed";
import { withHooks } from "@rbxts/roact-hooked";
import Ripple from "@rbxts/ripple";

import { useMotion, useRem, useTheme } from "../../../Utility/Hooks";

import { CanvasGroup } from "../../Core/Components/CanvasGroup";
import { Frame } from "../../Core/Components/Frame";

import { Corner } from "../../Core/Constraints/Corner";

interface Properties {
    Value: number,
    Width: number,
    Height: number,
    Radius: number,
    ForegroundColor3: Color3,
    Reference: Roact.Ref<Instance>,

    Spring: Ripple.SpringOptions
};

export const Progress = withHooks<Bindable<Properties, Frame>>(Properties => {
    const Rem = useRem(), Theme = useTheme();

    const [ State, Motion ] = useMotion(getBindingValue(Properties.Value!));

    useBindingListener(toBinding(Properties.Value!), Value => {
        Motion.spring(Value, getBindingValue(Properties.Spring))
    });

    return (
        <Frame
            Key="Progress"
            Size={Properties.Size}
            Position={Properties.Position}
            AnchorPoint={Properties.AnchorPoint}
            BackgroundTransparency={1}
        >
            { Properties[Roact.Children] }
            <CanvasGroup
                Ref={Properties.Reference as unknown as Roact.Ref<CanvasGroup>}
                Key="Group"
                BackgroundColor3={Properties.BackgroundColor3 || Theme.Default.Default100}
                BackgroundTransparency={0}
                AnchorPoint={pAnchor.Center.Center}
                Position={pPoint.Center.Center}
                Size={joinAnyBindings({ W: Properties.Width, H: Properties.Height }).map(Value => {
                    return new UDim2((Value.W || 0), 0, 0, Rem(Value.H || 0))
                })}
            >
                <Corner Radius={Properties.Radius} />
                <Frame
                    Key="Foreground"
                    BackgroundColor3={Properties.ForegroundColor3 || Theme.Primary.Primary400}
                    Size={State.map((Value: number) => {
                        return UDim2.fromScale(math.clamp(Value, 0, 1), 1)
                    })}
                >
                    <Corner Radius={Properties.Radius} />
                </Frame>
            </CanvasGroup>
        </Frame>
    );
}, {
    "defaultProps": {
        Value: 0,
        Width: 1,
        Height: 2,
        Radius: 1,
        Spring: {
            "damping": 0.8,
            "frequency": 3
        }
    }
});