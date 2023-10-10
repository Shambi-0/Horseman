import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";
import { RemProvider, ThemeProvider } from "./Providers";

export * from "./Utility/Hooks";
export * from "./Components";

export const Horseman = withHooks(Properties => {
    return (
        <ThemeProvider.Provider>
            <RemProvider.Provider>
                { Properties[Roact.Children] }
            </RemProvider.Provider>
        </ThemeProvider.Provider>
    );
})