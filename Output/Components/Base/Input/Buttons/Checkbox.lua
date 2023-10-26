-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local getBindingValue = _pretty_roact_hooks.getBindingValue
local useTimer = _pretty_roact_hooks.useTimer
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pAnchor = _precomputed.pAnchor
local pPoint = _precomputed.pPoint
local pSize = _precomputed.pSize
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useEffect = _roact_hooked.useEffect
local withHooks = _roact_hooked.withHooks
local useToggle = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked-plus").out).useToggle
local ColorUtils = TS.import(script, TS.getModule(script, "@rbxts", "ColourUtils"))
local _Hooks = TS.import(script, script.Parent.Parent.Parent.Parent.Parent, "Utility", "Hooks")
local useMotion = _Hooks.useMotion
local useTheme = _Hooks.useTheme
-- import getSounds from "../../../../Utility/getSounds";
local Capture = TS.import(script, script.Parent.Parent.Parent.Parent, "Core", "Components", "Capture").Capture
local Frame = TS.import(script, script.Parent.Parent.Parent.Parent, "Core", "Components", "Frame").Frame
local Image = TS.import(script, script.Parent.Parent.Parent.Parent, "Core", "Components", "Image").Image
local AspectRatio = TS.import(script, script.Parent.Parent.Parent.Parent, "Core", "Constraints", "AspectRatio").AspectRatio
local Gradient = TS.import(script, script.Parent.Parent.Parent.Parent, "Core", "Constraints", "Gradient").Gradient
local Corner = TS.import(script, script.Parent.Parent.Parent.Parent, "Core", "Constraints", "Corner").Corner
local Checkbox = withHooks(function(Properties)
	local Lifetime = useTimer()
	--[[
		
		    const Player = useSounds({
		        ... getSounds("Alerts"),
		        ... getSounds("Buttons")
		    });
		    
	]]
	local Toggled, Toggle = useToggle(false, { false, true })
	local Snap, SnapMotion = useMotion(0)
	local Icon, IconMotion = useMotion(0)
	local Progress, ProgressMotion = useMotion(0)
	local Hovering, HoveringMotion = useMotion(0)
	local Theme = useTheme()
	useEffect(function()
		local Goal = if Toggled then 1 else 0
		ProgressMotion:spring(Goal, getBindingValue(Properties.Spring))
		SnapMotion:spring(Goal, {
			frequency = 6,
			damping = 1,
		})
		IconMotion:spring(Goal, {
			frequency = 2.5,
			damping = 0.9,
		})
	end, { Toggled })
	local _attributes = {
		AnchorPoint = Properties.AnchorPoint,
		Position = Properties.Position,
		Size = Properties.Size,
		Transparent = true,
	}
	local _children = {
		Sizing = Roact.createElement("UISizeConstraint", {
			MinSize = Vector2.new(0, 32),
		}),
		Roact.createElement(AspectRatio, {
			Ratio = 1,
		}),
	}
	local _length = #_children
	local _attributes_1 = {
		Center = true,
		Size = Hovering:map(function(Value)
			local _full = pSize.Full
			local _arg0 = pSize.None:Lerp(UDim2.fromScale(0.2, 0.2), Value)
			return _full + _arg0
		end),
		BackgroundColor3 = Lifetime.value:map(function()
			local Background = ColorUtils.Blend.Transparency(Theme.Primary.Primary400, Theme.Default.Default100, Snap:getValue())
			return ColorUtils.Blend.Transparency(ColorUtils.Lighten(Background, 0.1), Background, math.clamp(Hovering:getValue(), 0, 1))
		end),
	}
	local _children_1 = {
		Roact.createElement(Corner, {
			Radius = Properties.Radius,
		}),
		Roact.createElement(Capture, {
			Cooldown = Properties.Cooldown,
			onHovering = function(Hovering)
				return HoveringMotion:spring(if Hovering ~= 0 and (Hovering == Hovering and (Hovering ~= "" and Hovering)) then 1 else 0, getBindingValue(Properties.Spring))
			end,
			onInputBegan = function(_, Input, Outside)
				if (Input.UserInputType == Enum.UserInputType.MouseButton1) and not Outside then
					-- Player(Toggled ? "ClickyButton1a" : "ClickyButton1b")
					Toggle()
					HoveringMotion:spring(1, getBindingValue(Properties.Spring))
					if Properties.Callback then
						task.defer(Properties.Callback, Toggled)
					end
				end
			end,
		}),
	}
	local _length_1 = #_children_1
	local _attributes_2 = {
		Size = Progress:map(function(Value)
			local _exp = UDim2.fromScale(0.7, 0.7)
			local _arg0 = UDim2.fromScale(0.2, 0.2):Lerp(pSize.None, Value)
			return _exp + _arg0
		end),
	}
	local _value = Properties.From
	_attributes_2.Image = if _value ~= "" and _value then Properties.From else Properties.Icon
	_attributes_2.ImageColor3 = Theme.Layout.Foreground
	_attributes_2.AnchorPoint = pAnchor.Center.Center
	_attributes_2.Position = pPoint.Center.Center
	_children_1.Icon = Roact.createElement(Image, _attributes_2, {
		Roact.createElement(Gradient, {
			Transparency = Icon:map(function(Value)
				local T = math.clamp(Value, 0.01, 0.98)
				return NumberSequence.new({ NumberSequenceKeypoint.new(0, 0), NumberSequenceKeypoint.new(T, 0), NumberSequenceKeypoint.new(T + 0.01, 1), NumberSequenceKeypoint.new(1, 1) })
			end),
		}),
	})
	local _value_1 = Properties.To
	_children_1[_length_1 + 1] = if _value_1 ~= "" and _value_1 then Roact.createFragment({
		Hidden = Roact.createElement(Image, {
			Size = Progress:map(function(Value)
				local _exp = UDim2.fromScale(0.7, 0.7)
				local _arg0 = UDim2.fromScale(0.2, 0.2):Lerp(pSize.None, 1 - Value)
				return _exp + _arg0
			end),
			ImageColor3 = Theme.Primary.Primary400,
			AnchorPoint = pAnchor.Center.Center,
			Position = pPoint.Center.Center,
			Image = Properties.To,
		}, {
			Roact.createElement(Gradient, {
				Transparency = Icon:map(function(Value)
					local T = math.clamp(Value, 0.02, 0.99)
					return NumberSequence.new({ NumberSequenceKeypoint.new(0, 1), NumberSequenceKeypoint.new(T, 1), NumberSequenceKeypoint.new(T + 0.01, 0), NumberSequenceKeypoint.new(1, 0) })
				end),
			}),
		}),
	}) else Roact.createFragment()
	_children.Container = Roact.createElement(Frame, _attributes_1, _children_1)
	return Roact.createElement(Frame, _attributes, _children)
end, {
	defaultProps = {
		Icon = "http://www.roblox.com/asset/?id=6031094667",
		Radius = UDim.new(0.15),
		Callback = function() end,
		Cooldown = 0.15,
		Spring = {
			damping = 0.6,
			frequency = 6,
		},
	},
})
return {
	Checkbox = Checkbox,
}
