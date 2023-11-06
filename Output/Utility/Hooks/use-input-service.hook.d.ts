export type InputDevice = "Keyboard" | "Gamepad" | "Touch";
/**
 * Returns the current input device being used by the player.
 * @returns An InputDevice string.
 */
export declare function useInputDevice(): InputDevice;
