import Roact from "@rbxts/roact";

import { getBindingValue, joinAnyBindings, toBinding, useBindingListener, useEventListener } from "@rbxts/pretty-roact-hooks";
import { useBinding, useMemo, useRef, withHooks } from "@rbxts/roact-hooked";
import { RunService, UserInputService } from "@rbxts/services";
import { useToggle } from "@rbxts/roact-hooked-plus";
import { pAnchor } from "@rbxts/precomputed";

import { useMotion, useRem, useTheme } from "../../../Utility/Hooks";

import { Progress } from "../Display/Progress";

import { Capture } from "../../Core/Components/Capture";
import { Frame } from "../../Core/Components/Frame";

import { AspectRatio } from "../../Core/Constraints/AspectRatio";
import { Corner } from "../../Core/Constraints/Corner";

//Min size where marks will be rendered
const MINSIZE_MARK = 0.05;

interface Properties {
    Value: number,
    Width: number,
    Height: number,
    Radius: number,
    ForegroundColor3: Color3,
    Spring: Ripple.SpringOptions,

    Min: number,
    Max: number,
    Step: number,

    MouseLocation: Vector2,
    HideIncrement: boolean
};

export const Slider = withHooks<Bindable<Properties, Frame>>(Properties => {
    const Rem = useRem(), Theme = useTheme(), [ MousePosition, SetMousePosition ] = useBinding(Vector2.zero);

    const OuterReference = useRef<Frame>(), InnerReference = useRef<Frame>();

    const [ Dragging, Drag ] = useToggle(false, [ false, true ]);
    const [ V, SV ] = useBinding(getBindingValue(Properties.Value!));

    const [ State, Motion ] = useMotion(V.getValue());

    const [ IsHovering, SetIsHovering ] = useToggle(false, [ false, true ]);
    const [ Hovering, HoveringMotion ] = useMotion(0);

    const markVisible = useMemo(() => {
        if (!Properties.Step || Properties.HideIncrement) return false;

        const Step = getBindingValue(Properties.Step!);

        const Minimum = getBindingValue(Properties.Min!);
        const Maximum = getBindingValue(Properties.Max!);

        const markDelta = Maximum - Minimum;
        const markSize = Step / markDelta;

        return markSize >= MINSIZE_MARK;
    }, [ Properties.Step, Properties.Min, Properties.Max, Properties.HideIncrement ]);

    const Marks = useMemo(() => {
        const Output: Roact.Element[] = [];

        if (!Properties.Step || !markVisible) return Output;
        
        const Step = getBindingValue(Properties.Step!);

        const Minimum = getBindingValue(Properties.Min!);
        const Maximum = getBindingValue(Properties.Max!);

        const Height = Rem(getBindingValue(Properties.Height!) || 0.05);

        if (Step !== 0) {
            const markDelta = Maximum - Minimum;
            const markSize = Step / markDelta;
            
            const markAmount = math.floor(1 / markSize);

            for (let Index = 0; Index < (markAmount - 1); Index++) {
                const Scale = (1 / markAmount) * (Index + 1);
                const Size = Height * 1.25;

                Output.push(
                    <Frame
                        BackgroundColor3={State.map((Value: number) => ((Value > Scale) ? (getBindingValue(Properties.ForegroundColor3!) || Theme.Primary.Primary500!) : Theme.Default.Default600!))}
                        Size={State.map((Value: number) => ((Value > Scale) ? UDim2.fromOffset(Size, Size) : (new UDim2(0, math.clamp(Rem(0.15), 2, 4), 0, Height))))}
                        BackgroundTransparency={State.map((Value: number) => ((Value > Scale) ? 0 : 0.75))}
                        Position={UDim2.fromScale(Scale, 0.5)}
                        AnchorPoint={pAnchor.Center.Center}
                        Key={`m${Index}`}
                        ZIndex={2}
                    >
                        <Corner Radius={Properties.Radius} />
                    </Frame>
                );
            };
        };

        return Output;
    }, [ Properties.Step, Properties.Min, Properties.Max, Properties.Height, Properties.Radius, markVisible ]);

    if (Properties.MouseLocation) {
        useBindingListener(Properties.MouseLocation, Position => SetMousePosition(Position));
    } else {
        useEventListener(RunService.Heartbeat, () => SetMousePosition(UserInputService.GetMouseLocation()));
    };

    useBindingListener(MousePosition, () => {
        const Inner = InnerReference.getValue(), Outer = OuterReference.getValue();

        if (Inner && Outer) {
            let Solved = V.getValue();

            const Width = math.round(Outer.AbsoluteSize.X * getBindingValue(Properties.Width!));
            
            if (Dragging) Solved = (1 / Width) * math.clamp(MousePosition.getValue().X - Outer.AbsolutePosition.X, 0, Width);

            if (Properties.Step) {
                const Step = getBindingValue(Properties.Step!);

                const Minimum = getBindingValue(Properties.Min!);
                const Maximum = getBindingValue(Properties.Max!);

                SV(Minimum + (math.round(((Solved * Maximum) - Minimum) / Step) * Step));

            } else if (V.getValue() !== Solved) SV(Solved);
        };
    });

    useBindingListener(V, Value => Motion.spring(Value, getBindingValue(Properties.Spring)));
    useBindingListener(IsHovering, Value => HoveringMotion.spring(Value ? 1 : 0, { "damping": 0.7, "frequency": 5 }));

    return (
        <Progress
            Height={toBinding(Properties.Height!).map(Value => Value * 0.75)}
            BackgroundColor3={Properties.BackgroundColor3}
            ForegroundColor3={Properties.ForegroundColor3}
            AnchorPoint={Properties.AnchorPoint}
            Position={Properties.Position}
            Radius={Properties.Radius}
            Spring={Properties.Spring}
            Reference={OuterReference}
            Width={Properties.Width}
            Size={Properties.Size}
            Key="Slider"
            Value={V}
        >
            <Frame
                Ref={InnerReference}
                Position={State.map((Value: number | undefined) => {
                    // const Width = getBindingValue(Properties.Width!);

                    return UDim2.fromScale(Value, 0.5)
                })}
                AnchorPoint={pAnchor.Center.Center}
                Size={joinAnyBindings({ He: Properties.Height, Ho: Hovering }).map(Value => {
                    const Scaled = Rem((Value.He || 0.05) * 2.5) * (1 + (Value.Ho * 0.2));

                    return UDim2.fromOffset(Scaled, Scaled);
                })}
                SizeConstraint={Enum.SizeConstraint.RelativeYY}
                BackgroundColor3={Theme.Layout.Foreground}
                ZIndex={3}
            >
                <AspectRatio Ratio={1} />
                <Corner Radius={Properties.Radius} />
                <Capture
                    onHovering={Hovering => SetIsHovering(Dragging ? true : Hovering)}
                    onInputBegan={(_, Input: InputObject, Outside: boolean) => {
                        if ((Input.UserInputType === Enum.UserInputType.MouseButton1) && !Outside) {
                            Drag(true);
                            SetIsHovering(true);
                        };
                    }}
                    onInputEnded={(_, Input: InputObject) => {
                        if (Input.UserInputType === Enum.UserInputType.MouseButton1 && Dragging) {
                            Drag(false);
                            SetIsHovering(false);
                        };
                    }}
                />
            </Frame>
            { Marks }
        </Progress>
    );
}, {
    "defaultProps": {
        Value: 0,
        Width: 1,
        Height: 2,
        Radius: 1,
        
        Min: 0,
        Max: 1,

        Spring: {
            "damping": 0.8,
            "frequency": 3
        }
    }
});