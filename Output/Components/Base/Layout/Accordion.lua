-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useBinding = _roact_hooked.useBinding
local useContext = _roact_hooked.useContext
local useEffect = _roact_hooked.useEffect
local useMemo = _roact_hooked.useMemo
local useRef = _roact_hooked.useRef
local withHooks = _roact_hooked.withHooks
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local getBindingValue = _pretty_roact_hooks.getBindingValue
local useEventListener = _pretty_roact_hooks.useEventListener
local useMountEffect = _pretty_roact_hooks.useMountEffect
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pAnchor = _precomputed.pAnchor
local pPoint = _precomputed.pPoint
local useToggle = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked-plus").out).useToggle
local RunService = TS.import(script, TS.getModule(script, "@rbxts", "services")).RunService
local _Hooks = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Hooks")
local useMotion = _Hooks.useMotion
local useRem = _Hooks.useRem
-- import getSounds from "../../../Utility/getSounds";
local Capture = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Capture").Capture
local Frame = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Frame").Frame
local Image = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Image").Image
local Text = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Text").Text
local GroupContext = Roact.createContext({
	Register = nil,
	Update = nil,
})
local ContentContext = Roact.createContext({
	Update = nil,
	Slot = nil,
})
local Accordion
local Accordion = {}
do
	local _container = Accordion
	local Group = withHooks(function(Properties)
		local Bindings = {}
		local Height, SetHeight = useBinding(0)
		local Slots = 0
		local UpdateHeight = function()
			local Accumulator = 0
			for _, Value in ipairs(Bindings) do
				Accumulator += Value:getValue()
			end
			SetHeight(Accumulator)
		end
		local Source = useMemo(function()
			return {
				Register = function(HeightBinding)
					Slots += 1
					local _heightBinding = HeightBinding
					table.insert(Bindings, _heightBinding)
					return Slots
				end,
				Update = function()
					return UpdateHeight()
				end,
			}
		end, {})
		local _attributes = {
			value = Source,
		}
		local _children = {}
		local _length = #_children
		local _attributes_1 = {
			Size = Height:map(function(Value)
				return UDim2.new(1, 0, 0, Value)
			end),
			Transparent = true,
		}
		local _children_1 = {
			Layout = Roact.createElement("UIListLayout", {
				HorizontalAlignment = Enum.HorizontalAlignment.Center,
				VerticalAlignment = Enum.VerticalAlignment.Top,
				FillDirection = Enum.FillDirection.Vertical,
			}),
		}
		local _length_1 = #_children_1
		local _child = Properties[Roact.Children]
		if _child then
			for _k, _v in _child do
				if type(_k) == "number" then
					_children_1[_length_1 + _k] = _v
				else
					_children_1[_k] = _v
				end
			end
		end
		_children[_length + 1] = Roact.createElement(Frame, _attributes_1, _children_1)
		return Roact.createElement(GroupContext.Provider, _attributes, _children)
	end)
	_container.Group = Group
	local Content = withHooks(function(Properties)
		local GroupSource = useContext(GroupContext)
		local Rem = useRem()
		local TopbarHeight = Rem(4)
		local BottomPadding = Rem(2)
		local Height, HeightMotion = useMotion(TopbarHeight)
		local ContentHeight, SetContentHeight = useBinding(0)
		local Slot, SetSlot = useBinding(0)
		local Seperated, Seperate = useToggle(false, { false, true })
		local Clip, SetClip = useToggle(false, { false, true })
		local Source = useMemo(function()
			return {
				Slot = getBindingValue(Slot),
				Update = function(Expanded)
					SetClip(not Expanded)
					local _fn = HeightMotion
					local _result
					if Expanded then
						local _condition = ContentHeight:getValue()
						if not (_condition ~= 0 and (_condition == _condition and _condition)) then
							_condition = 0
						end
						_result = _condition + TopbarHeight
					else
						_result = TopbarHeight
					end
					_fn:spring(_result, {
						frequency = 5,
						damping = 1,
					})
				end,
			}
		end, { Slot })
		local Reference = useRef()
		useMountEffect(function()
			return SetSlot(GroupSource.Register(Height))
		end)
		HeightMotion:onStep(function()
			return GroupSource.Update()
		end)
		useEventListener(RunService.RenderStepped, function()
			local _result = Reference:getValue()
			if _result ~= nil then
				_result = _result.AbsoluteSize.Y
			end
			local _condition = _result
			if not (_condition ~= 0 and (_condition == _condition and _condition)) then
				_condition = 0
			end
			SetContentHeight(BottomPadding + _condition)
		end)
		useEffect(function()
			return Seperate(Slot:getValue() > 1)
		end, { Slot })
		local _attributes = {
			value = Source,
		}
		local _children = {}
		local _length = #_children
		local _attributes_1 = {
			Size = Height:map(function(Value)
				return UDim2.new(1, 0, 0, Value)
			end),
			ClipsDescendants = true,
			Transparent = true,
		}
		local _children_1 = {
			Roact.createElement(Frame, {
				Size = UDim2.new(0.95, 0, 0, math.clamp(Rem(0.15), 1, 8)),
				AnchorPoint = pAnchor.Center.Center,
				BackgroundTransparency = 0.5,
				Position = pPoint.Center.Top,
				Visible = Seperated,
			}),
			Heading = Roact.createElement(Frame, {
				Size = UDim2.new(1, 0, 0, TopbarHeight),
				Transparent = true,
			}, {
				Roact.createElement(Accordion.Trigger),
				Title = Roact.createElement(Text, {
					AutomaticSize = Enum.AutomaticSize.X,
					AnchorPoint = pAnchor.Left.Center,
					Size = UDim2.fromScale(0, 0.3),
					Font = Enum.Font.GothamMedium,
					Position = pPoint.Left.Center,
					Text = Properties.Title,
					LayoutOrder = 1,
				}),
			}),
		}
		local _length_1 = #_children_1
		local _attributes_2 = {
			Size = ContentHeight:map(function(Value)
				return UDim2.new(1, 0, 0, Value)
			end),
			Position = UDim2.new(0.5, 0, 0, TopbarHeight),
			AnchorPoint = pAnchor.Center.Top,
			ClipsDescendants = Clip,
			Transparent = true,
		}
		local _children_2 = {}
		local _length_2 = #_children_2
		local _attributes_3 = {
			Position = UDim2.new(0.5, 0, 1, -BottomPadding),
			AutomaticSize = Enum.AutomaticSize.Y,
			AnchorPoint = pAnchor.Center.Bottom,
			Size = UDim2.fromScale(1, 0),
			[Roact.Ref] = Reference,
			LayoutOrder = 1,
			Transparent = true,
		}
		local _children_3 = {}
		local _length_3 = #_children_3
		local _child = Properties[Roact.Children]
		if _child then
			for _k, _v in _child do
				if type(_k) == "number" then
					_children_3[_length_3 + _k] = _v
				else
					_children_3[_k] = _v
				end
			end
		end
		_children_2.Container = Roact.createElement(Frame, _attributes_3, _children_3)
		_children_1.Content = Roact.createElement(Frame, _attributes_2, _children_2)
		_children[_length + 1] = Roact.createElement(Frame, _attributes_1, _children_1)
		return Roact.createElement(ContentContext.Provider, _attributes, _children)
	end)
	_container.Content = Content
	local Trigger = withHooks(function(Properties)
		-- const Player = useSounds({ ... getSounds("Buttons"), ... getSounds("Slide") });
		local ContentSource = useContext(ContentContext)
		local Toggled, Toggle = useToggle(false, { false, true })
		local Rotation, RotationMotion = useMotion(0)
		useEffect(function()
			ContentSource.Update(Toggled)
			RotationMotion:spring(if Toggled then 1 else 0, {
				frequency = 5.25,
				damping = 0.6,
			})
		end, { Toggled })
		local _attributes = {
			SizeConstraint = Properties.SizeConstraint,
			AnchorPoint = Properties.AnchorPoint,
			Position = Properties.Position,
			Size = Properties.Size,
			Transparent = true,
		}
		local _children = {
			Roact.createElement(Capture, {
				Cooldown = 0.35,
				onInputBegan = function(_, Input, Outside)
					if (Input.UserInputType == Enum.UserInputType.MouseButton1 or Input.UserInputType == Enum.UserInputType.Touch) and not Outside then
						-- Player(Toggled ? "Minimize1" : "LittleSwoosh1b", 0.2);
						Toggle()
					end
				end,
			}),
		}
		local _length = #_children
		local _attributes_1 = {
			Transparent = true,
		}
		local _children_1 = {
			Icon = Roact.createElement(Image, {
				Image = "http://www.roblox.com/asset/?id=6031094670",
				SizeConstraint = Enum.SizeConstraint.RelativeYY,
				Rotation = Rotation:map(function(Value)
					return Value * -90
				end),
				AnchorPoint = pAnchor.Right.Center,
				Size = UDim2.fromScale(0.6, 0.6),
				Position = pPoint.Right.Center,
			}),
		}
		local _length_1 = #_children_1
		local _child = Properties[Roact.Children]
		if _child then
			for _k, _v in _child do
				if type(_k) == "number" then
					_children_1[_length_1 + _k] = _v
				else
					_children_1[_k] = _v
				end
			end
		end
		_children.Container = Roact.createElement(Frame, _attributes_1, _children_1)
		return Roact.createFragment({
			Trigger = Roact.createElement(Frame, _attributes, _children),
		})
	end)
	_container.Trigger = Trigger
end
return Accordion
