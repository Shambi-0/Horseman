-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local getBindingValue = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).getBindingValue
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useMemo = _roact_hooked.useMemo
local withHooks = _roact_hooked.withHooks
local useRem = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Hooks").useRem
local Stroke = withHooks(function(Properties)
	local Rem = useRem()
	local Thickness = useMemo(function()
		local _condition = getBindingValue(Properties.Thickness)
		if not (_condition ~= 0 and (_condition == _condition and _condition)) then
			_condition = 0
		end
		local Value = _condition
		return if (getBindingValue(Properties.Scaled) == true) then Rem(Value, "Pixel") else Value
	end, { Properties })
	return Roact.createFragment({
		Stroke = Roact.createElement("UIStroke", {
			ApplyStrokeMode = Properties.ApplyStroke,
			Transparency = Properties.Transparency,
			LineJoinMode = Properties.LineJoin,
			Color = Properties.Color,
			Thickness = Thickness,
		}),
	})
end)
return {
	Stroke = Stroke,
}
