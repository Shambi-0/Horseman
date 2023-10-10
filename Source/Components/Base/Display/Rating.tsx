import Roact from "@rbxts/roact";

import { getBindingValue, joinAnyBindings, toBinding } from "@rbxts/pretty-roact-hooks";
import { useBinding, useEffect, withHooks } from "@rbxts/roact-hooked";
import { pSize } from "@rbxts/precomputed";

import { useMotion } from "../../../Utility/Hooks/use-motion.hook";

import { Frame } from "../../Core/Components/Frame";
import { Image } from "../../Core/Components/Image";

import { Gradient } from "../../Core/Constraints/Gradient";

interface Properties {
    Value: number,
    Digits: number,
    TextColor3: Color3
};

export const Rating = withHooks<Bindable<Properties, Frame>>(Properties => {
    const Digits: Roact.Element[] = [];

    for (let Index = 0; Index < math.max(getBindingValue(Properties.Digits!), math.ceil(getBindingValue(Properties.Value!))); Index++) {
        const GetDensity = (): "None" | "Half" | "Full" => {
            const Value = getBindingValue(Properties.Value!), High = math.ceil(Value);

            if ((Index < (High - 1)) || ((Index + 1) === Value)) return "Full";
            if ((Index < High) && (Value === (High - 0.5))) return "Half";
            
            return "None";
        };
        
        const [ Density, SetDensity ] = useBinding(GetDensity());

        const [ LT, LTM ] = useMotion((Density.getValue() !== "None") ? 0 : 0.85);
        const [ RT, RTM ] = useMotion((Density.getValue() === "Full") ? 0 : 0.85);

        useEffect(() => SetDensity(GetDensity()), [ Properties.Value, Properties.Digits ]);

        useEffect(() => {
            const Config = { "damping": 0.8, "frequency": 2 };

            RTM.spring((Density.getValue() === "Full") ? 0 : 0.85, Config);
            LTM.spring((Density.getValue() !== "None") ? 0 : 0.85, Config);
        }, [ Properties.Value, Properties.Digits ]);

        Digits.push(
            <Frame
                Key={`Digit${Index}`}
                Size={pSize.Full}
                SizeConstraint={Enum.SizeConstraint.RelativeYY}
                BackgroundTransparency={1}
                LayoutOrder={-Index}
            >
                <Image
                    Key="Icon"
                    Image={Density.map(Stage => {
                        if (Stage === "Full") {
                            return "http://www.roblox.com/asset/?id=6031068423";
                        
                        } else if (Stage === "Half") {
                            return "http://www.roblox.com/asset/?id=6031068427";
                        };

                        return "http://www.roblox.com/asset/?id=6031068425";
                    })}
                    ImageColor3={Properties.TextColor3}
                >
                    <Gradient
                        Transparency={joinAnyBindings({ L: LT, R: RT }).map(Value => {
                            return (
                                new NumberSequence([
                                    new NumberSequenceKeypoint(0.00, Value.L),
                                    new NumberSequenceKeypoint(0.49, Value.L),
                                    new NumberSequenceKeypoint(0.50, Value.R),
                                    new NumberSequenceKeypoint(1.00, Value.R)
                                ])
                            );
                        })}
                    />
                </Image>
            </Frame>
        );
    };

    return (
        <Frame
            Size={toBinding(Properties.Digits!).map(Value => UDim2.fromScale(Value, 1))}
            Position={Properties.Position}
            AnchorPoint={Properties.AnchorPoint}
            SizeConstraint={Enum.SizeConstraint.RelativeYY}
            BackgroundTransparency={1}
        >
            <uilistlayout
                Key="Layout"
                FillDirection={Enum.FillDirection.Horizontal}
                HorizontalAlignment={Enum.HorizontalAlignment.Center}
                VerticalAlignment={Enum.VerticalAlignment.Center}
            />
            { Digits }
        </Frame>
    );
});