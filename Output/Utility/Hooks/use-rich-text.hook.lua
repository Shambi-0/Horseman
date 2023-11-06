-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Rich = TS.import(script, TS.getModule(script, "@rbxts", "rich-text-stream").out).default
local useMemo = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).useMemo
local function useRichText(factory, deps)
	return useMemo(function()
		return factory(Rich()):toString()
	end, deps)
end
return {
	useRichText = useRichText,
}
