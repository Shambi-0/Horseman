-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local StoryContext = Roact.createContext({
	Controls = nil,
})
return {
	StoryContext = StoryContext,
}
