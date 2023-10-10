-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Ripple = TS.import(script, TS.getModule(script, "@rbxts", "ripple"))
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useBinding = _roact_hooked.useBinding
local useMemo = _roact_hooked.useMemo
local useJanitor = TS.import(script, script.Parent, "use-once.hook").useJanitor
local function useMotion(goal)
	local motion = useMemo(function()
		return Ripple.createMotion(goal, {
			start = true,
		})
	end, {})
	local binding, setValue = useBinding(motion:get())
	useJanitor(function(Garbage)
		Garbage:Add(motion:onStep(setValue), true)
		Garbage:Add(motion, "destroy")
	end)
	return binding, motion
end
local default = useMotion
return {
	useMotion = useMotion,
	default = default,
}
