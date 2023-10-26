-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local getBindingValue = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).getBindingValue
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local AspectRatio = withHooks(function(Properties)
	if getBindingValue(Properties.Square) == true then
		Properties.Ratio = 1
	end
	return Roact.createFragment({
		AspectRatio = Roact.createElement("UIAspectRatioConstraint", {
			AspectRatio = Properties.Ratio,
			DominantAxis = Properties.Axis,
			AspectType = Properties.Type,
		}),
	})
end)
return {
	AspectRatio = AspectRatio,
}
