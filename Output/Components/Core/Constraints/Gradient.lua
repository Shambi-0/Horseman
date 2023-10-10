-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local Gradient = withHooks(function(Properties)
	local _attributes = {}
	for _k, _v in Properties do
		_attributes[_k] = _v
	end
	return Roact.createFragment({
		Gradient = Roact.createElement("UIGradient", _attributes),
	})
end)
return {
	Gradient = Gradient,
}
