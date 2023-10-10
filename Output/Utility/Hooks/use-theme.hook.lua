-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local useContext = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).useContext
local ThemeContext = TS.import(script, script.Parent.Parent.Parent, "Contexts", "Theme.context").ThemeContext
local function useTheme()
	return useContext(ThemeContext)
end
return {
	default = useTheme,
}
