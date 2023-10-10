import Roact from "@rbxts/roact";

import { map, useCamera, useDebounceState, useEventListener } from "@rbxts/pretty-roact-hooks";
import { useEffect, withHooks } from "@rbxts/roact-hooked";

export const DEFAULT_REM = 16;
export const MIN_REM = 8;
const BASE_RESOLUTION = new Vector2(1920, 1020);
const MAX_ASPECT_RATIO = 19 / 9;

export const RemContext = Roact.createContext<number>(DEFAULT_REM);

export interface Properties extends Roact.PropsWithChildren {
	BaseRem?: number;
	RemOverride?: number;
	MinimumRem?: number;
	MaximumRem?: number;
};

const SetProperties = (Properties: Properties) => {
    return Properties;
};

export const Provider = withHooks<Properties>(Configuration => {
    const Properties = identity<Required<Properties>>(SetProperties(Configuration) as Required<Properties>)

    const Camera = useCamera();
	const [ Rem, SetRem ] = useDebounceState(Properties.BaseRem, { wait: 0.2, leading: true });

	const Update = () => {
		const Viewport = Camera.ViewportSize;

		if (Properties.RemOverride !== undefined) {
			return Properties.RemOverride;
		};

		// wide screens should not scale beyond iPhone aspect ratio
		const Resolution = new Vector2(math.min(Viewport.X, Viewport.Y * MAX_ASPECT_RATIO), Viewport.Y);
		const Scale = Resolution.Magnitude / BASE_RESOLUTION.Magnitude;
		const Desktop = (Resolution.X > Resolution.Y) || (Scale >= 1);

		// portrait mode should downscale slower than landscape
		const Factor = Desktop ? Scale : map(Scale, 0, 1, 0.25, 1);

		SetRem(math.clamp(math.round(Properties.BaseRem * Factor), Properties.MinimumRem, Properties.MaximumRem));
	};

	useEventListener(Camera.GetPropertyChangedSignal("ViewportSize"), Update);

	useEffect(() => {
		Update();
	}, [
        Properties.BaseRem,
        Properties.MinimumRem,
        Properties.MaximumRem,
        Properties.RemOverride
    ]);

	return (
        <RemContext.Provider value={Rem}>
            { Properties[Roact.Children] }
        </RemContext.Provider>
    );
}, {
	"defaultProps": {
		BaseRem: DEFAULT_REM,
		MinimumRem: MIN_REM,
		MaximumRem: math.huge
	}
});