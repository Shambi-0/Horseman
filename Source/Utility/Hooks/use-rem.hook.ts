import { useCallback, useContext } from "@rbxts/roact-hooked";

import { DEFAULT_REM, RemContext } from "../../Providers/Rem.provider";

export interface RemOptions {
	Minimum?: number;
	Maximum?: number;
};

type RemFunction =
	((Value: number, Mode?: RemScaleMode) => number)
	| ((Value: UDim2, Mode?: RemScaleMode) => UDim2)
	| ((Value: UDim, Mode?: RemScaleMode) => UDim)
	| ((Value: Vector2, Mode?: RemScaleMode) => Vector2)

type RemScaleMode = "Pixel" | "Unit";

const ScaleFunctions = {
	number: (Value: number, Rem: number): number => {
		return Value * Rem;
	},

	UDim2: (Value: UDim2, Rem: number): UDim2 => {
		return new UDim2(Value.X.Scale, Value.X.Offset * Rem, Value.Y.Scale, Value.Y.Offset * Rem);
	},

	UDim: (Value: UDim, Rem: number): UDim => {
		return new UDim(Value.Scale, Value.Offset * Rem);
	},

	Vector2: (Value: Vector2, Rem: number): Vector2 => {
		return new Vector2(Value.X * Rem, Value.Y * Rem);
	},
};

function useRemContext({ Minimum = 0, Maximum = math.huge }: RemOptions = {}) {
	const Rem = useContext(RemContext);

	return math.clamp(Rem, Minimum, Maximum);
};

export function useRem(options?: RemOptions) {
	const Rem = useRemContext(options);

	const RemFunction = <T extends number | Vector2 | UDim | UDim2>(Value: T, Mode: RemScaleMode = "Unit"): T => {
		const Scale = ScaleFunctions[typeOf(Value) as never] as <T>(Value: T, Rem: number) => T;

		if (Scale) {
			return (Mode === "Unit") ? Scale(Value, Rem) : Scale(Value, Rem / DEFAULT_REM);
		} else {
			return Value;
		};
	};

	return useCallback(RemFunction, [ Rem ]);
};