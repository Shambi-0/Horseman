-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local toBinding = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).toBinding
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pAnchor = _precomputed.pAnchor
local pColor = _precomputed.pColor
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local Corner = TS.import(script, script.Parent.Parent, "Core", "Constraints", "Corner").Corner
local Frame = TS.import(script, script.Parent.Parent, "Core", "Components", "Frame").Frame
local Point = withHooks(function(Properties)
	return Roact.createElement(Frame, {
		Position = toBinding(Properties.Location):map(function(Value)
			return UDim2.new(0.5, Value.X, 0.5, Value.Y)
		end),
		Size = toBinding(Properties.Thickness):map(function(Value)
			return UDim2.fromOffset(Value, Value)
		end),
		BackgroundTransparency = Properties.BackgroundTransparency,
		BackgroundColor3 = Properties.BackgroundColor3,
		AnchorPoint = pAnchor.Center.Center,
	}, {
		Roact.createElement(Corner, {
			Radius = 1,
		}),
	})
end, {
	defaultProps = {
		BackgroundColor3 = pColor.White,
		Thickness = 4,
	},
})
return {
	Point = Point,
}
