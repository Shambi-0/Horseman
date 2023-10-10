-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local Stroke = withHooks(function(Properties)
	return Roact.createFragment({
		Stroke = Roact.createElement("UIStroke", {
			ApplyStrokeMode = Properties.ApplyStroke,
			Transparency = Properties.Transparency,
			LineJoinMode = Properties.LineJoin,
			Thickness = Properties.Thickness,
			Color = Properties.Color,
		}),
	})
end)
return {
	Stroke = Stroke,
}
