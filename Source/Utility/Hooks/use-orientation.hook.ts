import { useViewport } from "@rbxts/pretty-roact-hooks";
import { useState } from "@rbxts/roact-hooked";

export function useOrientation() {
	const [ Orientation, SetOrientation ] = useState<"Landscape" | "Portrait">("Landscape");

	useViewport(Viewport => {
		SetOrientation((Viewport.Y > Viewport.X) ? "Portrait" : "Landscape");
	});

	return Orientation;
};