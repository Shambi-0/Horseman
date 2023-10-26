-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local getBindingValue = _pretty_roact_hooks.getBindingValue
local useTimer = _pretty_roact_hooks.useTimer
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pAnchor = _precomputed.pAnchor
local pSize = _precomputed.pSize
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local TweenService = TS.import(script, TS.getModule(script, "@rbxts", "services")).TweenService
local EvaluateNumberSequence = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Common", "Sequence").EvaluateNumberSequence
local CanvasGroup = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "CanvasGroup").CanvasGroup
local Frame = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Frame").Frame
local AspectRatio = TS.import(script, script.Parent.Parent.Parent, "Core", "Constraints", "AspectRatio").AspectRatio
local Corner = TS.import(script, script.Parent.Parent.Parent, "Core", "Constraints", "Corner").Corner
local AngleSequence = NumberSequence.new({ NumberSequenceKeypoint.new(0.0, 225), NumberSequenceKeypoint.new(0.07, 345), NumberSequenceKeypoint.new(0.3, 455), NumberSequenceKeypoint.new(0.39, 690), NumberSequenceKeypoint.new(0.7, 815), NumberSequenceKeypoint.new(0.75, 945), NumberSequenceKeypoint.new(0.76, 945), NumberSequenceKeypoint.new(1.0, 945) })
local AnimationStyleFromAlpha = function(Alpha)
	return TweenService:GetValue(Alpha, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)
end
local LoadingSpinner = withHooks(function(Properties)
	local Lifetime = useTimer()
	local AnimationFromOffset = function(Offset)
		return Lifetime.value:map(function(Time)
			local Angle = -math.rad(EvaluateNumberSequence(AngleSequence, AnimationStyleFromAlpha(((Time + Offset) % getBindingValue(Properties.Speed)) / getBindingValue(Properties.Speed)))) - math.pi / 2
			local _exp = UDim2.fromScale((math.sin(Angle) / 2) * 0.9, (math.cos(Angle) / 2) * 0.9)
			local _half = pSize.Half
			return _exp + _half
		end), Lifetime.value:map(function(Time)
			local Evaluated = AnimationStyleFromAlpha(((Time + Offset) % getBindingValue(Properties.Speed) / getBindingValue(Properties.Speed)))
			return if Evaluated > 0 and Evaluated < 0.75 then 0 else 1
		end)
	end
	local _arg0 = function(Delay, Index)
		local DotPosition, DotTransparency = AnimationFromOffset(Delay)
		return Roact.createFragment({
			["Dot" .. tostring(Index)] = Roact.createElement(Frame, {
				Size = UDim2.fromScale(getBindingValue(Properties.Scale), getBindingValue(Properties.Scale)),
				BackgroundTransparency = DotTransparency,
				AnchorPoint = pAnchor.Center.Center,
				BackgroundColor3 = Properties.Color,
				Position = DotPosition,
			}, {
				Roact.createElement(AspectRatio, {
					Ratio = 1,
				}),
				Roact.createElement(Corner, {
					Radius = 1,
				}),
			}),
		})
	end
	local _exp = { 0.0, 0.24, 0.48, 0.72, 0.96 }
	-- ▼ ReadonlyArray.map ▼
	local _newValue = table.create(#_exp)
	for _k, _v in _exp do
		_newValue[_k] = _arg0(_v, _k - 1, _exp)
	end
	-- ▲ ReadonlyArray.map ▲
	local _attributes = {
		GroupTransparency = Properties.BackgroundTransparency,
		AnchorPoint = Properties.AnchorPoint,
		Position = Properties.Position,
		Visible = Properties.Visible,
		Size = Properties.Size,
	}
	local _children = {
		Roact.createElement(AspectRatio, {
			Ratio = 1,
		}),
	}
	local _length = #_children
	for _k, _v in _newValue do
		_children[_length + _k] = _v
	end
	return Roact.createFragment({
		Spinner = Roact.createElement(CanvasGroup, _attributes, _children),
	})
end, {
	defaultProps = {
		Color = Color3.fromRGB(255, 255, 255),
		Speed = 5.5,
		Scale = 0.065,
	},
})
return {
	LoadingSpinner = LoadingSpinner,
}
