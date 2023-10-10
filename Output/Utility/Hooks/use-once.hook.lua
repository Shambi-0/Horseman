-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Maid = TS.import(script, TS.getModule(script, "@rbxts", "janitor").src).Janitor
local useEffect = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).useEffect
local useOnce = function(Callback)
	return useEffect(function()
		return Callback()
	end, {})
end
local function useJanitor(Callback)
	local Janitor = Maid.new()
	useOnce(function()
		Callback(Janitor)
		return function()
			return Janitor:Destroy()
		end
	end)
end
local default = useOnce
return {
	useJanitor = useJanitor,
	useOnce = useOnce,
	default = default,
}
