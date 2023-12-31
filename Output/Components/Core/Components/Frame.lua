-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pAnchor = _precomputed.pAnchor
local pColor = _precomputed.pColor
local pPoint = _precomputed.pPoint
local pSize = _precomputed.pSize
local getBindingValue = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).getBindingValue
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local Frame = withHooks(function(Properties)
	if getBindingValue(Properties.Transparent) == true then
		Properties.BackgroundTransparency = 1
	end
	if getBindingValue(Properties.Center) == true then
		Properties.AnchorPoint = Properties.AnchorPoint or pAnchor.Center.Center
		Properties.Position = Properties.Position or pPoint.Center.Center
	end
	local _attributes = {}
	for _k, _v in Properties do
		_attributes[_k] = _v
	end
	return Roact.createElement("Frame", _attributes)
end, {
	defaultProps = {
		Size = pSize.Full,
		BorderSizePixel = 0,
		BackgroundColor3 = pColor.White,
	},
})
return {
	Frame = Frame,
}
