-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local getBindingValue = _pretty_roact_hooks.getBindingValue
local joinAnyBindings = _pretty_roact_hooks.joinAnyBindings
local toBinding = _pretty_roact_hooks.toBinding
local useBindingListener = _pretty_roact_hooks.useBindingListener
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pAnchor = _precomputed.pAnchor
local pPoint = _precomputed.pPoint
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local _Hooks = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Hooks")
local useMotion = _Hooks.useMotion
local useRem = _Hooks.useRem
local useTheme = _Hooks.useTheme
local CanvasGroup = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "CanvasGroup").CanvasGroup
local Frame = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Frame").Frame
local Corner = TS.import(script, script.Parent.Parent.Parent, "Core", "Constraints", "Corner").Corner
local Progress = withHooks(function(Properties)
	local Rem = useRem()
	local Theme = useTheme()
	local State, Motion = useMotion(getBindingValue(Properties.Value))
	useBindingListener(toBinding(Properties.Value), function(Value)
		Motion:spring(Value, getBindingValue(Properties.Spring))
	end)
	local _attributes = {
		AnchorPoint = Properties.AnchorPoint,
		Position = Properties.Position,
		Size = Properties.Size,
		Transparent = true,
	}
	local _children = {}
	local _length = #_children
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
	_length = #_children
	_children.Group = Roact.createElement(CanvasGroup, {
		Size = joinAnyBindings({
			W = Properties.Width,
			H = Properties.Height,
		}):map(function(Value)
			local _condition = Value.W
			if not (_condition ~= 0 and (_condition == _condition and _condition)) then
				_condition = 0
			end
			local _condition_1 = Value.H
			if not (_condition_1 ~= 0 and (_condition_1 == _condition_1 and _condition_1)) then
				_condition_1 = 0
			end
			return UDim2.new(_condition, 0, 0, Rem(_condition_1))
		end),
		BackgroundColor3 = Properties.BackgroundColor3 or Theme.Default.Default100,
		[Roact.Ref] = Properties.Reference,
		AnchorPoint = pAnchor.Center.Center,
		Position = pPoint.Center.Center,
	}, {
		Roact.createElement(Corner, {
			Radius = Properties.Radius,
		}),
		Foreground = Roact.createElement(Frame, {
			Size = State:map(function(Value)
				return UDim2.fromScale(math.clamp(Value, 0, 1), 1)
			end),
			BackgroundColor3 = Properties.ForegroundColor3 or Theme.Primary.Primary400,
		}, {
			Roact.createElement(Corner, {
				Radius = Properties.Radius,
			}),
		}),
	})
	return Roact.createFragment({
		Progress = Roact.createElement(Frame, _attributes, _children),
	})
end, {
	defaultProps = {
		Value = 0,
		Width = 1,
		Height = 2,
		Radius = 1,
		Spring = {
			damping = 0.8,
			frequency = 3,
		},
	},
})
return {
	Progress = Progress,
}
