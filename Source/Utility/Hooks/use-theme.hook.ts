import { useContext } from "@rbxts/roact-hooked";

import { ThemeContext } from "../../Contexts/Theme.context";

export default function useTheme() {
    return useContext(ThemeContext);
};