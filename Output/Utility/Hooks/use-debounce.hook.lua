-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local getBindingValue = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).getBindingValue
local useBinding = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).useBinding
local function useDebounce(Delay)
	local Last, Update = useBinding(0)
	local Can = function(Now)
		if Now == nil then
			Now = os.clock()
		end
		return (getBindingValue(Last) + getBindingValue(Delay)) <= Now
	end
	local Try = function(Callback)
		local Now = os.clock()
		if not Can(Now) then
			return false
		end
		if Callback then
			task.defer(Callback)
		end
		Update(Now)
		return true
	end
	return Can, Try
end
return {
	useDebounce = useDebounce,
}
