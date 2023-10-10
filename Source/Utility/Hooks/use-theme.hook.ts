import { useContext } from "@rbxts/roact-hooked";

import { ThemeContext } from "../../Contexts/Theme.context";

export function useTheme() {
    return useContext(ThemeContext);
};