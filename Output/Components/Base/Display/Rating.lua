-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local getBindingValue = _pretty_roact_hooks.getBindingValue
local joinAnyBindings = _pretty_roact_hooks.joinAnyBindings
local toBinding = _pretty_roact_hooks.toBinding
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useBinding = _roact_hooked.useBinding
local useEffect = _roact_hooked.useEffect
local withHooks = _roact_hooked.withHooks
local useMotion = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Hooks", "use-motion.hook").useMotion
local Frame = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Frame").Frame
local Image = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Image").Image
local Gradient = TS.import(script, script.Parent.Parent.Parent, "Core", "Constraints", "Gradient").Gradient
local Rating = withHooks(function(Properties)
	local Digits = {}
	do
		local _Index = 0
		local _shouldIncrement = false
		while true do
			local Index = _Index
			if _shouldIncrement then
				Index += 1
			else
				_shouldIncrement = true
			end
			if not (Index < math.max(getBindingValue(Properties.Digits), math.ceil(getBindingValue(Properties.Value)))) then
				break
			end
			local GetDensity = function()
				local Value = getBindingValue(Properties.Value)
				local High = math.ceil(Value)
				if (Index < (High - 1)) or ((Index + 1) == Value) then
					return "Full"
				end
				if (Index < High) and (Value == (High - 0.5)) then
					return "Half"
				end
				return "None"
			end
			local Density, SetDensity = useBinding(GetDensity())
			local LT, LTM = useMotion(if (Density:getValue() ~= "None") then 0 else 0.85)
			local RT, RTM = useMotion(if (Density:getValue() == "Full") then 0 else 0.85)
			useEffect(function()
				return SetDensity(GetDensity())
			end, { Properties.Value, Properties.Digits })
			useEffect(function()
				local Config = {
					damping = 0.8,
					frequency = 2,
				}
				RTM:spring(if (Density:getValue() == "Full") then 0 else 0.85, Config)
				LTM:spring(if (Density:getValue() ~= "None") then 0 else 0.85, Config)
			end, { Properties.Value, Properties.Digits })
			local _arg0 = Roact.createFragment({
				["Digit" .. tostring(Index)] = Roact.createElement(Frame, {
					SizeConstraint = Enum.SizeConstraint.RelativeYY,
					LayoutOrder = -Index,
					Transparent = true,
				}, {
					Icon = Roact.createElement(Image, {
						Image = Density:map(function(Stage)
							if Stage == "Full" then
								return "http://www.roblox.com/asset/?id=6031068423"
							elseif Stage == "Half" then
								return "http://www.roblox.com/asset/?id=6031068427"
							end
							return "http://www.roblox.com/asset/?id=6031068425"
						end),
						ImageColor3 = Properties.TextColor3,
					}, {
						Roact.createElement(Gradient, {
							Transparency = joinAnyBindings({
								L = LT,
								R = RT,
							}):map(function(Value)
								return NumberSequence.new({ NumberSequenceKeypoint.new(0.00, Value.L), NumberSequenceKeypoint.new(0.49, Value.L), NumberSequenceKeypoint.new(0.50, Value.R), NumberSequenceKeypoint.new(1.00, Value.R) })
							end),
						}),
					}),
				}),
			})
			table.insert(Digits, _arg0)
			_Index = Index
		end
	end
	local _attributes = {
		Size = toBinding(Properties.Digits):map(function(Value)
			return UDim2.fromScale(Value, 1)
		end),
		SizeConstraint = Enum.SizeConstraint.RelativeYY,
		AnchorPoint = Properties.AnchorPoint,
		Position = Properties.Position,
		Transparent = true,
	}
	local _children = {
		Layout = Roact.createElement("UIListLayout", {
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			VerticalAlignment = Enum.VerticalAlignment.Center,
			FillDirection = Enum.FillDirection.Horizontal,
		}),
	}
	local _length = #_children
	for _k, _v in Digits do
		_children[_length + _k] = _v
	end
	return Roact.createElement(Frame, _attributes, _children)
end)
return {
	Rating = Rating,
}
