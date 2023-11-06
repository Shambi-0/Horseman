-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local ListLayout = withHooks(function(Properties)
	return Roact.createElement("UIListLayout")
end, {
	defaultProps = {
		Key = "Layout",
	},
})
return ListLayout
