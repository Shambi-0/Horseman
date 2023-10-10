-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local getBindingValue = _pretty_roact_hooks.getBindingValue
local joinAnyBindings = _pretty_roact_hooks.joinAnyBindings
local toBinding = _pretty_roact_hooks.toBinding
local useBindingListener = _pretty_roact_hooks.useBindingListener
local useEventListener = _pretty_roact_hooks.useEventListener
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useBinding = _roact_hooked.useBinding
local useMemo = _roact_hooked.useMemo
local useRef = _roact_hooked.useRef
local withHooks = _roact_hooked.withHooks
local _services = TS.import(script, TS.getModule(script, "@rbxts", "services"))
local RunService = _services.RunService
local UserInputService = _services.UserInputService
local useToggle = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked-plus").out).useToggle
local pAnchor = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out).pAnchor
local useMotion = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Hooks", "use-motion.hook").default
local useTheme = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Hooks", "use-theme.hook").default
local useRem = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Hooks", "use-rem.hook").default
local Progress = TS.import(script, script.Parent.Parent, "Display", "Progress").Progress
local Capture = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Capture").Capture
local Frame = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Frame").Frame
local AspectRatio = TS.import(script, script.Parent.Parent.Parent, "Core", "Constraints", "AspectRatio").AspectRatio
local Corner = TS.import(script, script.Parent.Parent.Parent, "Core", "Constraints", "Corner").Corner
--Min size where marks will be rendered
local MINSIZE_MARK = 0.05
local Slider = withHooks(function(Properties)
	local Rem = useRem()
	local Theme = useTheme()
	local MousePosition, SetMousePosition = useBinding(Vector2.zero)
	local OuterReference = useRef()
	local InnerReference = useRef()
	local Dragging, Drag = useToggle(false, { false, true })
	local V, SV = useBinding(getBindingValue(Properties.Value))
	local State, Motion = useMotion(V:getValue())
	local IsHovering, SetIsHovering = useToggle(false, { false, true })
	local Hovering, HoveringMotion = useMotion(0)
	local markVisible = useMemo(function()
		local _value = Properties.Step
		local _condition = not (_value ~= 0 and (_value == _value and _value))
		if not _condition then
			_condition = Properties.HideIncrement
		end
		if _condition then
			return false
		end
		local Step = getBindingValue(Properties.Step)
		local Minimum = getBindingValue(Properties.Min)
		local Maximum = getBindingValue(Properties.Max)
		local markDelta = Maximum - Minimum
		local markSize = Step / markDelta
		return markSize >= MINSIZE_MARK
	end, { Properties.Step, Properties.Min, Properties.Max, Properties.HideIncrement })
	local Marks = useMemo(function()
		local Output = {}
		local _value = Properties.Step
		local _condition = not (_value ~= 0 and (_value == _value and _value))
		if not _condition then
			_condition = not markVisible
		end
		if _condition then
			return Output
		end
		local Step = getBindingValue(Properties.Step)
		local Minimum = getBindingValue(Properties.Min)
		local Maximum = getBindingValue(Properties.Max)
		local _condition_1 = getBindingValue(Properties.Height)
		if not (_condition_1 ~= 0 and (_condition_1 == _condition_1 and _condition_1)) then
			_condition_1 = 0.05
		end
		local Height = Rem(_condition_1)
		if Step ~= 0 then
			local markDelta = Maximum - Minimum
			local markSize = Step / markDelta
			local markAmount = math.floor(1 / markSize)
			do
				local Index = 0
				local _shouldIncrement = false
				while true do
					if _shouldIncrement then
						Index += 1
					else
						_shouldIncrement = true
					end
					if not (Index < (markAmount - 1)) then
						break
					end
					local Scale = (1 / markAmount) * (Index + 1)
					local Size = Height * 1.25
					local _arg0 = Roact.createFragment({
						["m" .. tostring(Index)] = Roact.createElement(Frame, {
							ZIndex = 2,
							AnchorPoint = pAnchor.Center.Center,
							Position = UDim2.fromScale(Scale, 0.5),
							BackgroundColor3 = State:map(function(Value)
								return if (Value > Scale) then (getBindingValue(Properties.ForegroundColor3) or Theme.Primary.Primary500) else Theme.Default.Default600
							end),
							BackgroundTransparency = State:map(function(Value)
								return if (Value > Scale) then 0 else 0.75
							end),
							Size = State:map(function(Value)
								return if (Value > Scale) then UDim2.fromOffset(Size, Size) else (UDim2.new(0, math.clamp(Rem(0.15), 2, 4), 0, Height))
							end),
						}, {
							Roact.createElement(Corner, {
								Radius = Properties.Radius,
							}),
						}),
					})
					table.insert(Output, _arg0)
				end
			end
		end
		return Output
	end, { Properties.Step, Properties.Min, Properties.Max, Properties.Height, Properties.Radius, markVisible })
	if Properties.MouseLocation then
		useBindingListener(Properties.MouseLocation, function(Position)
			return SetMousePosition(Position)
		end)
	else
		useEventListener(RunService.Heartbeat, function()
			return SetMousePosition(UserInputService:GetMouseLocation())
		end)
	end
	useBindingListener(MousePosition, function()
		local Inner = InnerReference:getValue()
		local Outer = OuterReference:getValue()
		if Inner and Outer then
			local Solved = V:getValue()
			local Width = math.round(Outer.AbsoluteSize.X * getBindingValue(Properties.Width))
			if Dragging then
				Solved = (1 / Width) * math.clamp(MousePosition:getValue().X - Outer.AbsolutePosition.X, 0, Width)
			end
			local _value = Properties.Step
			if _value ~= 0 and (_value == _value and _value) then
				local Step = getBindingValue(Properties.Step)
				local Minimum = getBindingValue(Properties.Min)
				local Maximum = getBindingValue(Properties.Max)
				SV(Minimum + (math.round(((Solved * Maximum) - Minimum) / Step) * Step))
			elseif V:getValue() ~= Solved then
				SV(Solved)
			end
		end
	end)
	useBindingListener(V, function(Value)
		return Motion:spring(Value, getBindingValue(Properties.Spring))
	end)
	useBindingListener(IsHovering, function(Value)
		return HoveringMotion:spring(if Value then 1 else 0, {
			damping = 0.7,
			frequency = 5,
		})
	end)
	local _attributes = {
		Reference = OuterReference,
		Value = V,
		Size = Properties.Size,
		Position = Properties.Position,
		AnchorPoint = Properties.AnchorPoint,
		BackgroundColor3 = Properties.BackgroundColor3,
		ForegroundColor3 = Properties.ForegroundColor3,
		Width = Properties.Width,
		Height = toBinding(Properties.Height):map(function(Value)
			return Value * 0.75
		end),
		Radius = Properties.Radius,
		Spring = Properties.Spring,
	}
	local _children = {
		Roact.createElement(Frame, {
			[Roact.Ref] = InnerReference,
			Position = State:map(function(Value)
				local Width = getBindingValue(Properties.Width)
				return UDim2.fromScale(Value, 0.5)
			end),
			AnchorPoint = pAnchor.Center.Center,
			Size = joinAnyBindings({
				He = Properties.Height,
				Ho = Hovering,
			}):map(function(Value)
				local _condition = Value.He
				if not (_condition ~= 0 and (_condition == _condition and _condition)) then
					_condition = 0.05
				end
				local Scaled = Rem(_condition * 2.5) * (1 + (Value.Ho * 0.2))
				return UDim2.fromOffset(Scaled, Scaled)
			end),
			SizeConstraint = Enum.SizeConstraint.RelativeYY,
			BackgroundColor3 = Theme.Layout.Foreground,
			ZIndex = 3,
		}, {
			Roact.createElement(AspectRatio, {
				Ratio = 1,
			}),
			Roact.createElement(Corner, {
				Radius = Properties.Radius,
			}),
			Roact.createElement(Capture, {
				onHovering = function(Hovering)
					return SetIsHovering(if Dragging then true else Hovering)
				end,
				onInputBegan = function(_, Input, Outside)
					if (Input.UserInputType == Enum.UserInputType.MouseButton1) and not Outside then
						Drag(true)
						SetIsHovering(true)
					end
				end,
				onInputEnded = function(_, Input)
					if Input.UserInputType == Enum.UserInputType.MouseButton1 and Dragging then
						Drag(false)
						SetIsHovering(false)
					end
				end,
			}),
		}),
	}
	local _length = #_children
	for _k, _v in Marks do
		_children[_length + _k] = _v
	end
	return Roact.createFragment({
		Slider = Roact.createElement(Progress, _attributes, _children),
	})
end, {
	defaultProps = {
		Value = 0,
		Width = 1,
		Height = 2,
		Radius = 1,
		Min = 0,
		Max = 1,
		Spring = {
			damping = 0.8,
			frequency = 3,
		},
	},
})
return {
	Slider = Slider,
}
