import { useEventListener } from "@rbxts/pretty-roact-hooks";
import { UserInputService } from "@rbxts/services";
import { useState } from "@rbxts/roact-hooked";

export type InputDevice = "Keyboard" | "Gamepad" | "Touch";

const getInputType = (Input = UserInputService.GetLastInputType()): InputDevice | undefined => {
	if ((Input === Enum.UserInputType.Keyboard) || (Input === Enum.UserInputType.MouseMovement)) {
		return "Keyboard";

	} else if (Input === Enum.UserInputType.Gamepad1) {
		return "Gamepad";

	} else if (Input === Enum.UserInputType.Touch) {
		return "Touch";
	};
};

/**
 * Returns the current input device being used by the player.
 * @returns An InputDevice string.
 */
export function useInputDevice() {
	const [ Device, SetDevice ] = useState<InputDevice>(() => (getInputType() ?? "Keyboard"));

	useEventListener(UserInputService.LastInputTypeChanged, Input => {
		const NewDevice = getInputType(Input);

		if (NewDevice !== undefined) SetDevice(NewDevice);
	});

	return Device;
};