-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local getBindingValue = _pretty_roact_hooks.getBindingValue
local toBinding = _pretty_roact_hooks.toBinding
local useTimer = _pretty_roact_hooks.useTimer
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useEffect = _roact_hooked.useEffect
local withHooks = _roact_hooked.withHooks
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pColor = _precomputed.pColor
local pSize = _precomputed.pSize
local useMotion = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Hooks", "use-motion.hook").useMotion
local CanvasGroup = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "CanvasGroup").CanvasGroup
local Frame = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Frame").Frame
local Text = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Text").Text
local RawFuaxRotation = function(Value, Iteration)
	if Value == nil then
		Value = 0
	end
	if Iteration == nil then
		Iteration = 0
	end
	return math.floor(Value / math.pow(10, Iteration))
end
local NumberSpinner = withHooks(function(Properties)
	local Lifetime = useTimer()
	local Digits = {}
	local PrefixFade, SetPrefixFade = useMotion(0)
	useEffect(function()
		SetPrefixFade:spring(if (getBindingValue(Properties.Value) > 0) then 0 else 0.75, getBindingValue(Properties.Spring))
	end, { Properties.Value })
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
			if not (Index < math.max(getBindingValue(Properties.Digits), #tostring(getBindingValue(Properties.Value)))) then
				break
			end
			local FuaxRotation, FuaxMotion = useMotion(RawFuaxRotation(0, Index))
			useEffect(function()
				FuaxMotion:spring(RawFuaxRotation(getBindingValue(Properties.Value), Index), getBindingValue(Properties.Spring))
			end, { Properties.Value })
			local _attributes = {
				SizeConstraint = Enum.SizeConstraint.RelativeYY,
				Size = UDim2.fromScale(0.6, 1),
				LayoutOrder = -Index,
				Transparent = true,
			}
			local _children = {}
			local _length = #_children
			local _arg0 = function(Value, Order)
				return Roact.createElement(Text, {
					TextTransparency = Lifetime.value:map(function()
						return math.clamp(1 - FuaxRotation:getValue(), 0, 1) * 0.75
					end),
					Position = UDim2.fromScale(0, Order),
					TextColor3 = Properties.TextColor3,
					Font = Properties.Font,
					Text = tostring(Value),
					Size = pSize.Full,
				})
			end
			local _exp = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 }
			-- ▼ ReadonlyArray.map ▼
			local _newValue = table.create(#_exp)
			for _k, _v in _exp do
				_newValue[_k] = _arg0(_v, _k - 1, _exp)
			end
			-- ▲ ReadonlyArray.map ▲
			local _attributes_1 = {
				Position = Lifetime.value:map(function()
					return UDim2.fromScale(0, -(FuaxRotation:getValue() % 10))
				end),
				Size = pSize.Full,
				Transparent = true,
			}
			local _children_1 = {}
			local _length_1 = #_children_1
			for _k, _v in _newValue do
				_children_1[_length_1 + _k] = _v
			end
			_children.Shift = Roact.createElement(Frame, _attributes_1, _children_1)
			local _arg0_1 = Roact.createFragment({
				["Digit" .. tostring(Index)] = Roact.createElement(Frame, _attributes, _children),
			})
			table.insert(Digits, _arg0_1)
			_Index = Index
		end
	end
	local _attributes = {
		BackgroundTransparency = Properties.BackgroundTransparency,
		BackgroundColor3 = Properties.BackgroundColor3,
		AnchorPoint = Properties.AnchorPoint,
		LayoutOrder = Properties.LayoutOrder,
		Position = Properties.Position,
		Visible = Properties.Visible,
		Size = Properties.Size,
		ClipsDescendants = true,
	}
	local _children = {}
	local _length = #_children
	local _value = getBindingValue(Properties.Prefix)
	local _attributes_1 = {
		Transparent = true,
	}
	local _children_1 = {
		Layout = Roact.createElement("UIListLayout", {
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			VerticalAlignment = Enum.VerticalAlignment.Center,
			FillDirection = Enum.FillDirection.Horizontal,
			SortOrder = Enum.SortOrder.LayoutOrder,
		}),
	}
	local _length_1 = #_children_1
	_children_1[_length_1 + 1] = if _value ~= "" and _value then (Roact.createFragment({
		Prefix = Roact.createElement(Frame, {
			Size = UDim2.fromScale(0.45 * #getBindingValue(Properties.Prefix), 1),
			SizeConstraint = Enum.SizeConstraint.RelativeYY,
			LayoutOrder = -math.huge,
			Transparent = true,
		}, {
			Roact.createElement(Text, {
				Text = toBinding(Properties.Prefix):map(function(Value)
					local _value_1 = Value
					local _arg1 = function(Character)
						return Character .. "  "
					end
					return (string.gsub(_value_1, ".", _arg1))
				end),
				TextColor3 = Properties.TextColor3,
				TextTransparency = PrefixFade,
				Font = Properties.Font,
				Size = pSize.Full,
			}),
		}),
	})) else Roact.createFragment()
	_length_1 = #_children_1
	for _k, _v in Digits do
		_children_1[_length_1 + _k] = _v
	end
	_children.Content = Roact.createElement(Frame, _attributes_1, _children_1)
	local _child = Properties[Roact.Children]
	if _child then
		for _k, _v in _child do
			if type(_k) == "number" then
				_children[_length + _k] = _v
			else
				_children[_k] = _v
			end
		end
	end
	return Roact.createFragment({
		Spinner = Roact.createElement(CanvasGroup, _attributes, _children),
	})
end, {
	defaultProps = {
		BackgroundTransparency = 1,
		AnchorPoint = Vector2.zero,
		TextColor3 = pColor.White,
		Font = Enum.Font.Gotham,
		Position = pSize.None,
		Size = pSize.Full,
		Visible = true,
		Scaled = false,
		Digits = 4,
		Spring = {
			damping = 0.5,
			frequency = 6,
		},
	},
})
return {
	NumberSpinner = NumberSpinner,
}
