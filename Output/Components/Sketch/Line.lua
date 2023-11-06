-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local getBindingValue = _pretty_roact_hooks.getBindingValue
local toBinding = _pretty_roact_hooks.toBinding
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useMemo = _roact_hooked.useMemo
local withHooks = _roact_hooked.withHooks
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pAnchor = _precomputed.pAnchor
local pColor = _precomputed.pColor
local Frame = TS.import(script, script.Parent.Parent, "Core", "Components", "Frame").Frame
local Line = withHooks(function(Properties)
	local Data = useMemo(function()
		local From = getBindingValue(Properties.From) or Vector2.zero
		local To = getBindingValue(Properties.To) or Vector2.zero
		return {
			Rotation = math.deg(math.atan2(From.Y - To.Y, From.X - To.X)),
			Distance = (From - To).Magnitude,
			Center = From:Lerp(To, 0.5),
		}
	end, { Properties })
	return Roact.createElement(Frame, {
		Size = toBinding(Properties.Thickness):map(function(Value)
			return UDim2.fromOffset(Data.Distance, Value)
		end),
		Position = UDim2.new(0.5, Data.Center.X, 0.5, Data.Center.Y),
		BackgroundTransparency = Properties.BackgroundTransparency,
		BackgroundColor3 = Properties.BackgroundColor3,
		AnchorPoint = pAnchor.Center.Center,
		Rotation = Data.Rotation,
	})
end, {
	defaultProps = {
		BackgroundColor3 = pColor.White,
		Thickness = 4,
	},
})
return {
	Line = Line,
}
