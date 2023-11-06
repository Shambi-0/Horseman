-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local Corner = withHooks(function(Properties)
	local _attributes = {}
	local _radius = Properties.Radius
	_attributes.CornerRadius = if (typeof(_radius) == "number") then UDim.new(Properties.Radius, 0) else (Properties.Radius)
	return Roact.createFragment({
		Corner = Roact.createElement("UICorner", _attributes),
	})
end)
return {
	Corner = Corner,
}
