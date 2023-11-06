import Roact from "@rbxts/roact";

import { getBindingValue, toBinding, useTimer } from "@rbxts/pretty-roact-hooks";
import { useEffect, withHooks } from "@rbxts/roact-hooked";
import { pColor, pSize } from "@rbxts/precomputed";

import { useMotion } from "../../../Utility/Hooks/use-motion.hook";

import { CanvasGroup } from "../../Core/Components/CanvasGroup";
import { Frame } from "../../Core/Components/Frame";
import { Text } from "../../Core/Components/Text";

interface Properties {
    Spring: Ripple.SpringOptions,

    Scaled: boolean,
    Prefix: string,
    Digits: number,
    Value: number,

    BackgroundTransparency: number,
    BackgroundColor3: Color3,
    AnchorPoint: Vector2,
    LayoutOrder: number,
    TextColor3: Color3,
    Visible: boolean,
    Position: UDim2,
    Font: Enum.Font,
    Size: UDim2
};

const RawFuaxRotation = (Value: number = 0, Iteration: number = 0): number => math.floor(Value / math.pow(10, Iteration));

export const NumberSpinner = withHooks<Bindable<Properties, Instance>>((Properties) => {
    const Lifetime = useTimer();
    const Digits: Roact.Element[] = [];

    const [ PrefixFade, SetPrefixFade ] = useMotion(0);
    
    useEffect(() => {
        SetPrefixFade.spring((getBindingValue(Properties.Value!) > 0) ? 0 : 0.75, getBindingValue(Properties.Spring));
    }, [ Properties.Value ])

    for (let Index = 0; Index < math.max(getBindingValue(Properties.Digits!), tostring(getBindingValue(Properties.Value!)).size()); Index++) {
        const [ FuaxRotation, FuaxMotion ] = useMotion(RawFuaxRotation(0, Index));

        useEffect(() => {
            FuaxMotion.spring(RawFuaxRotation(getBindingValue(Properties.Value), Index), getBindingValue(Properties.Spring));
        }, [ Properties.Value ])

        Digits.push(
            <Frame
                SizeConstraint={Enum.SizeConstraint.RelativeYY}
                Size={UDim2.fromScale(0.6, 1)}
                Key={`Digit${Index}`}
                LayoutOrder={-Index}
                Transparent
            >
                <Frame
                    Position={Lifetime.value.map(() => UDim2.fromScale(0, -(FuaxRotation.getValue() % 10)))}
                    Size={pSize.Full}
                    Transparent
                    Key="Shift"
                >
                    {
                        ... [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ].map((Value: number, Order: number) => {
                            return (
                                <Text
                                    TextTransparency={Lifetime.value.map(() => (math.clamp(1 - FuaxRotation.getValue(), 0, 1) * 0.75))}
                                    Position={UDim2.fromScale(0, Order)}
                                    TextColor3={Properties.TextColor3}
                                    Font={Properties.Font}
                                    Text={tostring(Value)}
                                    Size={pSize.Full}
                                />
                            );
                        })
                    }
                </Frame>
            </Frame>
        );
    };

    return (
        <CanvasGroup
            BackgroundTransparency={Properties.BackgroundTransparency}
            BackgroundColor3={Properties.BackgroundColor3}
            AnchorPoint={Properties.AnchorPoint}
            LayoutOrder={Properties.LayoutOrder}
            Position={Properties.Position}
            Visible={Properties.Visible}
            Size={Properties.Size}
            ClipsDescendants
            Key="Spinner"
        >
            <Frame
                Key="Content"
                Transparent
            >
                <uilistlayout
                    HorizontalAlignment={Enum.HorizontalAlignment.Center}
                    VerticalAlignment={Enum.VerticalAlignment.Center}
                    FillDirection={Enum.FillDirection.Horizontal}
                    SortOrder={Enum.SortOrder.LayoutOrder}
                    Key="Layout"
                />
                { getBindingValue(Properties.Prefix) ? (
                   <Frame
                        Size={UDim2.fromScale(0.45 * getBindingValue(Properties.Prefix!).size(), 1)}
                        SizeConstraint={Enum.SizeConstraint.RelativeYY}
                        LayoutOrder={-math.huge}
                        Key="Prefix"
                        Transparent
                    >
                        <Text
                            Text={toBinding(Properties.Prefix!).map(Value => Value.gsub(".", (Character: string) => `${Character}  `)[0])}
                            TextColor3={Properties.TextColor3}
                            TextTransparency={PrefixFade}
                            Font={Properties.Font}
                            Size={pSize.Full}
                        />
                    </Frame>
                ) : <></> }
                { Digits }
            </Frame>
            { Properties[Roact.Children] }
        </CanvasGroup>
    );
}, {
    "defaultProps": {
        BackgroundTransparency: 1,
        AnchorPoint: Vector2.zero,
        TextColor3: pColor.White,
        Font: Enum.Font.Gotham,
        Position: pSize.None,
        Size: pSize.Full,
        Visible: true,
        Scaled: false,
        Digits: 4,

        Spring: {
            damping: 0.5,
            frequency: 6
        }
    }
});