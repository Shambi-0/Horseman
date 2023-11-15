-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local exports = {}
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local _Providers = TS.import(script, script, "Providers")
local RemProvider = _Providers.RemProvider
local ThemeProvider = _Providers.ThemeProvider
for _k, _v in TS.import(script, script, "Utility", "Hooks") or {} do
	exports[_k] = _v
end
for _k, _v in TS.import(script, script, "Components") or {} do
	exports[_k] = _v
end
--[[
	*
	 * @client
	 
]]
local Horseman = withHooks(function(Properties)
	local _children = {}
	local _length = #_children
	local _children_1 = {}
	local _length_1 = #_children_1
	local _child = Properties[Roact.Children]
	if _child then
		for _k, _v in _child do
			if type(_k) == "number" then
				_children_1[_length_1 + _k] = _v
			else
				_children_1[_k] = _v
			end
		end
	end
	_children[_length + 1] = Roact.createElement(RemProvider.Provider, {}, _children_1)
	return Roact.createElement(ThemeProvider.Provider, {}, _children)
end)
exports.Horseman = Horseman
return exports
