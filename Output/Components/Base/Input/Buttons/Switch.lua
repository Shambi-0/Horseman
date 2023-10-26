-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pAnchor = _precomputed.pAnchor
local pPoint = _precomputed.pPoint
local pSize = _precomputed.pSize
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useEffect = _roact_hooked.useEffect
local withHooks = _roact_hooked.withHooks
local useToggle = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked-plus").out).useToggle
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local getBindingValue = _pretty_roact_hooks.getBindingValue
local useTimer = _pretty_roact_hooks.useTimer
local ColorUtils = TS.import(script, TS.getModule(script, "@rbxts", "ColourUtils"))
local useSounds = TS.import(script, script.Parent.Parent.Parent.Parent.Parent, "Utility", "Hooks", "use-sounds.hook").useSounds
local getSounds = TS.import(script, script.Parent.Parent.Parent.Parent.Parent, "Utility", "getSounds").default
local _Hooks = TS.import(script, script.Parent.Parent.Parent.Parent.Parent, "Utility", "Hooks")
local useMotion = _Hooks.useMotion
local useTheme = _Hooks.useTheme
local Frame = TS.import(script, script.Parent.Parent.Parent.Parent, "Core", "Components", "Frame").Frame
local AspectRatio = TS.import(script, script.Parent.Parent.Parent.Parent, "Core", "Constraints", "AspectRatio").AspectRatio
local Corner = TS.import(script, script.Parent.Parent.Parent.Parent, "Core", "Constraints", "Corner").Corner
local Capture = TS.import(script, script.Parent.Parent.Parent.Parent, "Core", "Components", "Capture").Capture
local Switch = withHooks(function(Properties)
	local Lifetime = useTimer()
	local _object = {}
	for _k, _v in getSounds("Alerts") do
		_object[_k] = _v
	end
	for _k, _v in getSounds("Buttons") do
		_object[_k] = _v
	end
	local Player = useSounds(_object)
	local Toggled, Toggle = useToggle(false, { false, true })
	local Snap, SnapMotion = useMotion(0)
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
	end, { Toggled })
	return Roact.createElement(Frame, {
		AnchorPoint = Properties.AnchorPoint,
		Position = Properties.Position,
		Size = Properties.Size,
		Transparent = true,
	}, {
		Sizing = Roact.createElement("UISizeConstraint", {
			MinSize = Vector2.new(0, 32),
		}),
		Roact.createElement(AspectRatio, {
			Ratio = 1.75,
		}),
		Container = Roact.createElement(Frame, {
			Center = true,
			AnchorPoint = pAnchor.Center.Center,
			Position = pPoint.Center.Center,
			Size = Hovering:map(function(Value)
				local _full = pSize.Full
				local _arg0 = pSize.None:Lerp(UDim2.fromScale(0.2, 0.2), Value)
				return _full + _arg0
			end),
			BackgroundColor3 = Lifetime.value:map(function()
				local Background = ColorUtils.Blend.Transparency(Theme.Primary.Primary400, Theme.Default.Default100, Snap:getValue())
				return ColorUtils.Blend.Transparency(ColorUtils.Lighten(Background, 0.1), Background, math.clamp(Hovering:getValue(), 0, 1))
			end),
		}, {
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
						Player(if Toggled then "ClickyButton1a" else "ClickyButton1b")
						Toggle()
						HoveringMotion:spring(1, getBindingValue(Properties.Spring))
						if Properties.Callback then
							task.defer(Properties.Callback, Toggled)
						end
					end
				end,
			}),
			Roact.createElement(Frame, {
				Position = Progress:map(function(Value)
					return UDim2.fromScale(0.05, 0.5):Lerp(UDim2.fromScale(0.95, 0.5), Value)
				end),
				AnchorPoint = Progress:map(function(Value)
					return pAnchor.Left.Center:Lerp(pAnchor.Right.Center, Value)
				end),
				SizeConstraint = Enum.SizeConstraint.RelativeYY,
				BackgroundColor3 = Theme.Default.Default900,
				Size = UDim2.fromScale(0.85, 0.85),
			}, {
				Roact.createElement(Corner, {
					Radius = Properties.Radius,
				}),
			}),
		}),
	})
end, {
	defaultProps = {
		Icon = "http://www.roblox.com/asset/?id=6031094667",
		Radius = UDim.new(1),
		Callback = function() end,
		Cooldown = 0.25,
		Spring = {
			damping = 0.6,
			frequency = 5,
		},
	},
})
return {
	Switch = Switch,
}
