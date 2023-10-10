import Navigation from "../Common/Navigation";

type Keybind = Enum.KeyCode | Enum.UserInputType.MouseMovement | Enum.UserInputType.MouseButton1 | Enum.UserInputType.MouseButton2 | Enum.UserInputType.MouseButton3

export function useNav(Key: Keybind): string {
    return Navigation.Dark.get(Key) || "";
};