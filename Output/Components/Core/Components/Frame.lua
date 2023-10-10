-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local pSize = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out).pSize
local Frame = withHooks(function(Properties)
	local _attributes = {}
	for _k, _v in Properties do
		_attributes[_k] = _v
	end
	return Roact.createElement("Frame", _attributes)
end, {
	defaultProps = {
		Size = pSize.Full,
		BorderSizePixel = 0,
	},
})
return {
	Frame = Frame,
}