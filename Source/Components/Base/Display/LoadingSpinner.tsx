import Roact from "@rbxts/roact";

import { getBindingValue, useTimer } from "@rbxts/pretty-roact-hooks";
import { pAnchor, pSize } from "@rbxts/precomputed";
import { withHooks } from "@rbxts/roact-hooked";
import { TweenService } from "@rbxts/services";

import { EvaluateNumberSequence } from "../../../Utility/Common/Sequence";

import { CanvasGroup } from "../../Core/Components/CanvasGroup";
import { Frame } from "../../Core/Components/Frame";

import { AspectRatio } from "../../Core/Constraints/AspectRatio";
import { Corner } from "../../Core/Constraints/Corner";

const AngleSequence = new NumberSequence([
	new NumberSequenceKeypoint(0.0, 225),
	new NumberSequenceKeypoint(0.07, 345),
	new NumberSequenceKeypoint(0.3, 455),
	new NumberSequenceKeypoint(0.39, 690),
	new NumberSequenceKeypoint(0.7, 815),
	new NumberSequenceKeypoint(0.75, 945),
	new NumberSequenceKeypoint(0.76, 945),
	new NumberSequenceKeypoint(1.0, 945),
]);

const AnimationStyleFromAlpha = (Alpha: number): number => TweenService.GetValue(Alpha, Enum.EasingStyle.Quad, Enum.EasingDirection.Out);

interface Properties {
	Color: Color3;
	Speed: number;
	Scale: number;
};

export const LoadingSpinner = withHooks<Bindable<Properties, Frame>>((Properties) => {
	const Lifetime = useTimer();

	const AnimationFromOffset = (Offset: number): LuaTuple<[Roact.Binding<UDim2>, Roact.Binding<number>]> => {
		return $tuple(
			Lifetime.value.map(Time => {
				const Angle =
					-math.rad(
						EvaluateNumberSequence(
							AngleSequence,
							AnimationStyleFromAlpha(((Time + Offset) % getBindingValue(Properties.Speed!)) / getBindingValue(Properties.Speed!)),
						),
					) - math.pi / 2;

				return UDim2.fromScale((math.sin(Angle) / 2) * 0.9, (math.cos(Angle) / 2) * 0.9).add(pSize.Half);
			}),
			Lifetime.value.map(Time => {
				const Evaluated: number = AnimationStyleFromAlpha(((Time + Offset) % getBindingValue(Properties.Speed!) / getBindingValue(Properties.Speed!)));

				return Evaluated > 0 && Evaluated < 0.75 ? 0 : 1;
			})
		);
	};

	return (
		<CanvasGroup
			Key="Spinner"
			GroupTransparency={Properties.BackgroundTransparency}
			BackgroundTransparency={1}
			Size={Properties.Size}
			Position={Properties.Position}
			AnchorPoint={Properties.AnchorPoint}
			Visible={Properties.Visible}
		>
			<AspectRatio Ratio={1} />
			{
				... [ 0.0, 0.24, 0.48, 0.72, 0.96 ].map((Delay: number, Index: number) => {
					const [ DotPosition, DotTransparency ] = AnimationFromOffset(Delay);

					return (
						<Frame
							Key={`Dot${Index}`}
							AnchorPoint={pAnchor.Center.Center}
							Size={UDim2.fromScale(getBindingValue(Properties.Scale), getBindingValue(Properties.Scale))}
							BackgroundTransparency={DotTransparency}
							Position={DotPosition}
							BackgroundColor3={Properties.Color}
						>
							<AspectRatio Ratio={1} />
							<Corner Radius={1} />
						</Frame>
					);
				})
			}
		</CanvasGroup>
	);
}, {
	"defaultProps": {
		Color: Color3.fromRGB(255, 255, 255),
		Speed: 5.5,
		Scale: 0.065
	}
});