-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useCallback = _roact_hooked.useCallback
local useContext = _roact_hooked.useContext
local _Rem_provider = TS.import(script, script.Parent.Parent.Parent, "Providers", "Rem.provider")
local DEFAULT_REM = _Rem_provider.DEFAULT_REM
local RemContext = _Rem_provider.RemContext
local ScaleFunctions = {
	number = function(Value, Rem)
		return Value * Rem
	end,
	UDim2 = function(Value, Rem)
		return UDim2.new(Value.X.Scale, Value.X.Offset * Rem, Value.Y.Scale, Value.Y.Offset * Rem)
	end,
	UDim = function(Value, Rem)
		return UDim.new(Value.Scale, Value.Offset * Rem)
	end,
	Vector2 = function(Value, Rem)
		return Vector2.new(Value.X * Rem, Value.Y * Rem)
	end,
}
local function useRemContext(_param)
	if _param == nil then
		_param = {}
	end
	local Minimum = _param.Minimum
	if Minimum == nil then
		Minimum = 0
	end
	local Maximum = _param.Maximum
	if Maximum == nil then
		Maximum = math.huge
	end
	local Rem = useContext(RemContext)
	return math.clamp(Rem, Minimum, Maximum)
end
local function useRem(options)
	local Rem = useRemContext(options)
	local RemFunction = function(Value, Mode)
		if Mode == nil then
			Mode = "Unit"
		end
		local _exp = ScaleFunctions
		local _value = Value
		local Scale = _exp[typeof(_value)]
		if Scale then
			return if (Mode == "Unit") then Scale(Value, Rem) else Scale(Value, Rem / DEFAULT_REM)
		else
			return Value
		end
	end
	return useCallback(RemFunction, { Rem })
end
return {
	useRem = useRem,
}
