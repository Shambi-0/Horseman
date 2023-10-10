import Roact from "@rbxts/roact";

import { pColor } from "@rbxts/precomputed";

/*
: {
    50: Color3.fromHex(""),
    100: Color3.fromHex(""),
    200: Color3.fromHex(""),
    300: Color3.fromHex(""),
    400: Color3.fromHex(""),
    500: Color3.fromHex(""),
    600: Color3.fromHex(""),
    700: Color3.fromHex(""),
    800: Color3.fromHex(""),
    900: Color3.fromHex("")
},
*/

export const ThemeContext = Roact.createContext({
	Layout: {
        Background: pColor.Black,
        Foreground: identity<Color3 | undefined>(undefined),
        Seperator: identity<Color3 | undefined>(undefined),
        Focus: identity<Color3 | undefined>(undefined)
    },
    Content: {
        ContentA: identity<Color3 | undefined>(undefined),
        ContentB: identity<Color3 | undefined>(undefined),
        ContentC: identity<Color3 | undefined>(undefined),
        ContentD: identity<Color3 | undefined>(undefined)
    },
    Base: {
        Default: identity<Color3 | undefined>(undefined),
        Primary: identity<Color3 | undefined>(undefined),
        Secondary: identity<Color3 | undefined>(undefined),
        Success: identity<Color3 | undefined>(undefined),
        Warning: identity<Color3 | undefined>(undefined),
        Danger: identity<Color3 | undefined>(undefined)
    },
    Default: {
        Default50: identity<Color3 | undefined>(undefined),
        Default100: identity<Color3 | undefined>(undefined),
        Default200: identity<Color3 | undefined>(undefined),
        Default300: identity<Color3 | undefined>(undefined),
        Default400: identity<Color3 | undefined>(undefined),
        Default500: identity<Color3 | undefined>(undefined),
        Default600: identity<Color3 | undefined>(undefined),
        Default700: identity<Color3 | undefined>(undefined),
        Default800: identity<Color3 | undefined>(undefined),
        Default900: identity<Color3 | undefined>(undefined)
    },
    
    Primary: {
        Primary50: identity<Color3 | undefined>(undefined),
        Primary100: identity<Color3 | undefined>(undefined),
        Primary200: identity<Color3 | undefined>(undefined),
        Primary300: identity<Color3 | undefined>(undefined),
        Primary400: identity<Color3 | undefined>(undefined),
        Primary500: identity<Color3 | undefined>(undefined),
        Primary600: identity<Color3 | undefined>(undefined),
        Primary700: identity<Color3 | undefined>(undefined),
        Primary800: identity<Color3 | undefined>(undefined),
        Primary900: identity<Color3 | undefined>(undefined)
    },
    Secondary: {
        Secondary50: identity<Color3 | undefined>(undefined),
        Secondary100: identity<Color3 | undefined>(undefined),
        Secondary200: identity<Color3 | undefined>(undefined),
        Secondary300: identity<Color3 | undefined>(undefined),
        Secondary400: identity<Color3 | undefined>(undefined),
        Secondary500: identity<Color3 | undefined>(undefined),
        Secondary600: identity<Color3 | undefined>(undefined),
        Secondary700: identity<Color3 | undefined>(undefined),
        Secondary800: identity<Color3 | undefined>(undefined),
        Secondary900: identity<Color3 | undefined>(undefined)
    },
    Success: {
        Success50: identity<Color3 | undefined>(undefined),
        Success100: identity<Color3 | undefined>(undefined),
        Success200: identity<Color3 | undefined>(undefined),
        Success300: identity<Color3 | undefined>(undefined),
        Success400: identity<Color3 | undefined>(undefined),
        Success500: identity<Color3 | undefined>(undefined),
        Success600: identity<Color3 | undefined>(undefined),
        Success700: identity<Color3 | undefined>(undefined),
        Success800: identity<Color3 | undefined>(undefined),
        Success900: identity<Color3 | undefined>(undefined)
    },
    Warning: {
        Warning50: identity<Color3 | undefined>(undefined),
        Warning100: identity<Color3 | undefined>(undefined),
        Warning200: identity<Color3 | undefined>(undefined),
        Warning300: identity<Color3 | undefined>(undefined),
        Warning400: identity<Color3 | undefined>(undefined),
        Warning500: identity<Color3 | undefined>(undefined),
        Warning600: identity<Color3 | undefined>(undefined),
        Warning700: identity<Color3 | undefined>(undefined),
        Warning800: identity<Color3 | undefined>(undefined),
        Warning900: identity<Color3 | undefined>(undefined)
    },
    Danger: {
        Danger50: identity<Color3 | undefined>(undefined),
        Danger100: identity<Color3 | undefined>(undefined),
        Danger200: identity<Color3 | undefined>(undefined),
        Danger300: identity<Color3 | undefined>(undefined),
        Danger400: identity<Color3 | undefined>(undefined),
        Danger500: identity<Color3 | undefined>(undefined),
        Danger600: identity<Color3 | undefined>(undefined),
        Danger700: identity<Color3 | undefined>(undefined),
        Danger800: identity<Color3 | undefined>(undefined),
        Danger900: identity<Color3 | undefined>(undefined)
    }
});