/// <reference types="@rbxts/types" />
type Keybind = Enum.KeyCode | Enum.UserInputType.MouseMovement | Enum.UserInputType.MouseButton1 | Enum.UserInputType.MouseButton2 | Enum.UserInputType.MouseButton3;
export default function useNav(Key: Keybind): string;
export {};
