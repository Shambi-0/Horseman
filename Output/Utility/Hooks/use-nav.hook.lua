-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Navigation = TS.import(script, script.Parent.Parent, "Common", "Navigation")
local function useNav(Key)
	local _dark = Navigation.Dark
	local _key = Key
	local _condition = _dark[_key]
	if not (_condition ~= "" and _condition) then
		_condition = ""
	end
	return _condition
end
return {
	useNav = useNav,
}
