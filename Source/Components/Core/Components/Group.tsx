import Roact from "@rbxts/roact";

import { BindingOrValue } from "@rbxts/pretty-roact-hooks";
import { pSize } from "@rbxts/precomputed";

interface GroupProps extends Roact.PropsWithChildren {
	Ref?: Roact.Ref<Frame>;
	Event?: Roact.JsxInstanceEvents<Frame>;
	Change?: Roact.JsxInstanceChangeEvents<Frame>;
	Size?: BindingOrValue<UDim2>;
	Position?: BindingOrValue<UDim2>;
	AnchorPoint?: BindingOrValue<Vector2>;
	Rotation?: BindingOrValue<number>;
	ClipsDescendants?: BindingOrValue<boolean>;
	LayoutOrder?: BindingOrValue<number>;
	Visible?: BindingOrValue<boolean>;
	zIndex?: BindingOrValue<number>;
	Selectable?: BindingOrValue<boolean>;
}

export const Group = Roact.forwardRef((Properties: GroupProps, Ref: Roact.Ref<Frame>) => {
	return (
		<frame
			Ref={Ref}
			Size={Properties.Size || pSize.Full}
			Position={Properties.Position}
			AnchorPoint={Properties.AnchorPoint}
			Rotation={Properties.Rotation}
			ClipsDescendants={Properties.ClipsDescendants}
			LayoutOrder={Properties.LayoutOrder}
			Visible={Properties.Visible}
			ZIndex={Properties.zIndex}
			BackgroundTransparency={1}
			Selectable={Properties.Selectable}
			Event={Properties.Event || {}}
			Change={Properties.Change || {}}
		>
			{ Properties[Roact.Children] }
		</frame>
	);
});