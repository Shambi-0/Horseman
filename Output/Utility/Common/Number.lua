-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local RunService = TS.import(script, TS.getModule(script, "@rbxts", "services")).RunService
--[[
	*
	 * @description Remap 'n' from the old range (oldMin, oldMax) to the new range (min, max).
	 * @link https://github.com/Sleitnick/RbxCookbook/blob/master/src/Map.lua
	 
]]
local function mapNumber(n, oldMin, oldMax, min, max)
	return min + (max - min) * ((n - oldMin) / (oldMax - oldMin))
end
--[[
	*
	 * @description Checks that a value isn't `NaN`.
	 
]]
local function isNotNaN(Value)
	return Value == Value
end
--[[
	*
	 * @description Resolves a possible `NaN` value.
	 * @async
	 
]]
local resolveNumber = TS.async(function(Resolve)
	local Resolved = isNotNaN(Resolve())
	while not Resolved do
		RunService.RenderStepped:Wait()
		Resolved = isNotNaN(Resolve())
	end
end)
return {
	mapNumber = mapNumber,
	isNotNaN = isNotNaN,
	resolveNumber = resolveNumber,
}
