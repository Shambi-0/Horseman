-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local pColor = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out).pColor
--[[
	
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
	
]]
local ThemeContext = Roact.createContext({
	Layout = {
		Background = pColor.Black,
		Foreground = nil,
		Seperator = nil,
		Focus = nil,
	},
	Content = {
		ContentA = nil,
		ContentB = nil,
		ContentC = nil,
		ContentD = nil,
	},
	Base = {
		Default = nil,
		Primary = nil,
		Secondary = nil,
		Success = nil,
		Warning = nil,
		Danger = nil,
	},
	Default = {
		Default50 = nil,
		Default100 = nil,
		Default200 = nil,
		Default300 = nil,
		Default400 = nil,
		Default500 = nil,
		Default600 = nil,
		Default700 = nil,
		Default800 = nil,
		Default900 = nil,
	},
	Primary = {
		Primary50 = nil,
		Primary100 = nil,
		Primary200 = nil,
		Primary300 = nil,
		Primary400 = nil,
		Primary500 = nil,
		Primary600 = nil,
		Primary700 = nil,
		Primary800 = nil,
		Primary900 = nil,
	},
	Secondary = {
		Secondary50 = nil,
		Secondary100 = nil,
		Secondary200 = nil,
		Secondary300 = nil,
		Secondary400 = nil,
		Secondary500 = nil,
		Secondary600 = nil,
		Secondary700 = nil,
		Secondary800 = nil,
		Secondary900 = nil,
	},
	Success = {
		Success50 = nil,
		Success100 = nil,
		Success200 = nil,
		Success300 = nil,
		Success400 = nil,
		Success500 = nil,
		Success600 = nil,
		Success700 = nil,
		Success800 = nil,
		Success900 = nil,
	},
	Warning = {
		Warning50 = nil,
		Warning100 = nil,
		Warning200 = nil,
		Warning300 = nil,
		Warning400 = nil,
		Warning500 = nil,
		Warning600 = nil,
		Warning700 = nil,
		Warning800 = nil,
		Warning900 = nil,
	},
	Danger = {
		Danger50 = nil,
		Danger100 = nil,
		Danger200 = nil,
		Danger300 = nil,
		Danger400 = nil,
		Danger500 = nil,
		Danger600 = nil,
		Danger700 = nil,
		Danger800 = nil,
		Danger900 = nil,
	},
})
return {
	ThemeContext = ThemeContext,
}
