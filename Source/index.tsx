import Roact from "@rbxts/roact";

import { withHooks } from "@rbxts/roact-hooked";

import { RemProvider, ThemeProvider } from "./Providers";
import { Players } from "@rbxts/services";

export * from "./Utility/Hooks";
export * from "./Components";

/**
 * @client
 */
export const Horseman = withHooks(Properties => {
    return (
        <ThemeProvider.Provider>
            <RemProvider.Provider>
                { Properties[Roact.Children] }
            </RemProvider.Provider>
        </ThemeProvider.Provider>
    );
});