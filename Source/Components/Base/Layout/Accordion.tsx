import Roact from "@rbxts/roact";

import { useBinding, useContext, useEffect, useMemo, useRef, withHooks } from "@rbxts/roact-hooked";
import { getBindingValue, useEventListener, useMountEffect } from "@rbxts/pretty-roact-hooks";
import { pAnchor, pPoint } from "@rbxts/precomputed";
import { useToggle } from "@rbxts/roact-hooked-plus";
import { RunService } from "@rbxts/services";

import getSounds from "../../../Utility/getSounds";

import { Capture } from "../../Core/Components/Capture";
import { Frame } from "../../Core/Components/Frame";
import { Image } from "../../Core/Components/Image";
import { Text } from "../../Core/Components/Text";
import { useMotion, useRem, useSounds } from "../../../Utility/Hooks";

const GroupContext = Roact.createContext({
	Register: identity<((H: Roact.Binding<number>) => number) | undefined>(undefined),
	Update: identity<(() => void) | undefined>(undefined),
});

const ContentContext = Roact.createContext({
	Update: identity<((Expanded: boolean) => void) | undefined>(undefined),
	Slot: identity<number | undefined>(undefined),
});

namespace Accordion {
	interface Properties {}

	export const Group = withHooks<Properties>((Properties) => {
		const Bindings = new Array<Roact.Binding<number>>();

		const [ Height, SetHeight ] = useBinding(0);

		let Slots = 0;

		const UpdateHeight = () => {
			let Accumulator = 0;

			for (const [ , Value ] of ipairs(Bindings)) Accumulator += Value.getValue();

			SetHeight(Accumulator);
		};

		const Source = useMemo(() => {
			return {
				Register: (HeightBinding: Roact.Binding<number>) => {
					Slots += 1;
					Bindings.push(HeightBinding);

					return Slots;
				},
				Update: () => UpdateHeight(),
			};
		}, []);

		return (
			<GroupContext.Provider value={Source}>
				<Frame
					Size={Height.map((Value) => new UDim2(1, 0, 0, Value))}
					BackgroundTransparency={1}
				>
					<uilistlayout
						HorizontalAlignment={Enum.HorizontalAlignment.Center}
						VerticalAlignment={Enum.VerticalAlignment.Top}
						FillDirection={Enum.FillDirection.Vertical}
						Key="Layout"
					/>
					{ Properties[Roact.Children] }
				</Frame>
			</GroupContext.Provider>
		);
	});

	interface ContentProperties {
		Icon: string;
		Title: string;
		Height: number;
	}

	export const Content = withHooks<Bindable<ContentProperties, Instance>>((Properties) => {
		const GroupSource = useContext(GroupContext);
		const Rem = useRem();

		const TopbarHeight = Rem(4);
		const BottomPadding = Rem(2);

		const [ Height, HeightMotion ] = useMotion(TopbarHeight);
		const [ ContentHeight, SetContentHeight ] = useBinding(0);

		const [ Slot, SetSlot ] = useBinding(0);

		const [ Seperated, Seperate ] = useToggle(false, [false, true]);
		const [ Clip, SetClip ] = useToggle(false, [false, true]);

		const Source = useMemo(() => {
			return {
				Slot: getBindingValue(Slot),
				Update: (Expanded: boolean) => {
					SetClip(!Expanded);
					HeightMotion.spring(Expanded ? (ContentHeight.getValue() || 0) + TopbarHeight : TopbarHeight, {
						frequency: 5,
						damping: 1,
					});
				},
			};
		}, [ Slot ]);

		const Reference = useRef<Frame>();

		useMountEffect(() => SetSlot(GroupSource.Register!(Height)));
		HeightMotion.onStep(() => GroupSource.Update!());

		useEventListener(RunService.RenderStepped, () => {
			SetContentHeight(BottomPadding + (Reference.getValue()?.AbsoluteSize.Y || 0));
		});

		useEffect(() => Seperate(Slot.getValue() > 1), [Slot]);

		return (
			<ContentContext.Provider value={Source}>
				<Frame
					Size={Height.map((Value: number) => new UDim2(1, 0, 0, Value))}
					BackgroundTransparency={1}
					ClipsDescendants
				>
					<Frame
						Size={new UDim2(0.95, 0, 0, math.clamp(Rem(0.15), 1, 8))}
						AnchorPoint={pAnchor.Center.Center}
						BackgroundTransparency={0.5}
						Position={pPoint.Center.Top}
						Visible={Seperated}
					/>
					<Frame
						Size={new UDim2(1, 0, 0, TopbarHeight)}
						BackgroundTransparency={1}
						Key="Heading"
					>
						<Accordion.Trigger />
						<Text
							AutomaticSize={Enum.AutomaticSize.X}
							AnchorPoint={pAnchor.Left.Center}
							Size={UDim2.fromScale(0, 0.3)}
							Font={Enum.Font.GothamMedium}
							Position={pPoint.Left.Center}
							Text={Properties.Title}
							LayoutOrder={1}
							Key="Title"
						/>
					</Frame>
					<Frame
						Size={ContentHeight.map((Value) => new UDim2(1, 0, 0, Value))}
						Position={new UDim2(0.5, 0, 0, TopbarHeight)}
						AnchorPoint={pAnchor.Center.Top}
						BackgroundTransparency={1}
						ClipsDescendants={Clip}
						Key="Content"
					>
						<Frame
							Position={new UDim2(0.5, 0, 1, -BottomPadding)}
							AutomaticSize={Enum.AutomaticSize.Y}
							AnchorPoint={pAnchor.Center.Bottom}
							Size={UDim2.fromScale(1, 0)}
							BackgroundTransparency={1}
							Ref={Reference}
							LayoutOrder={1}
							Key="Container"
						>
							{ Properties[Roact.Children] }
						</Frame>
					</Frame>
				</Frame>
			</ContentContext.Provider>
		);
	});

	interface TriggerProperties {}

	export const Trigger = withHooks<Bindable<TriggerProperties, Frame>>((Properties) => {
		const Player = useSounds({ ... getSounds("Buttons"), ... getSounds("Slide") });

		const ContentSource = useContext(ContentContext);

		const [ Toggled, Toggle ] = useToggle(false, [ false, true ]);
		const [ Rotation, RotationMotion ] = useMotion(0);

		useEffect(() => {
			ContentSource.Update!(Toggled);
			RotationMotion.spring(Toggled ? 1 : 0, {
				frequency: 5.25,
				damping: 0.6,
			});
		}, [ Toggled ]);

		return (
			<Frame
				SizeConstraint={Properties.SizeConstraint}
				AnchorPoint={Properties.AnchorPoint}
				Position={Properties.Position}
				BackgroundTransparency={1}
				Size={Properties.Size}
				Key="Trigger"
			>
				<Capture
					Cooldown={0.35}
					onInputBegan={(_, Input, Outside) => {
						if (
							(Input.UserInputType === Enum.UserInputType.MouseButton1 ||
							Input.UserInputType === Enum.UserInputType.Touch) && !Outside
						) {
							Player(Toggled ? "Minimize1" : "LittleSwoosh1b", 0.2);
							Toggle();
						};
					}}
				/>
				<Frame
					BackgroundTransparency={1}
					Key="Container"
				>
					<Image
						Image="http://www.roblox.com/asset/?id=6031094670"
						SizeConstraint={Enum.SizeConstraint.RelativeYY}
						Rotation={Rotation.map((Value: number) => Value * -90)}
						AnchorPoint={pAnchor.Right.Center}
						Size={UDim2.fromScale(0.6, 0.6)}
						Position={pPoint.Right.Center}
						Key="Icon"
					/>
					{ Properties[Roact.Children] }
				</Frame>
			</Frame>
		);
	});
};

export = Accordion;