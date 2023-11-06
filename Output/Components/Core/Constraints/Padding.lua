-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local Padding = withHooks(function(Properties)
	return Roact.createFragment({
		Padding = Roact.createElement("UIPadding", {
			PaddingBottom = Properties.Bottom,
			PaddingRight = Properties.Right,
			PaddingLeft = Properties.Left,
			PaddingTop = Properties.Top,
		}),
	})
end)
return {
	Padding = Padding,
}
