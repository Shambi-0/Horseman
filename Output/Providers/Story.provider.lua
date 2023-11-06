-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useMemo = _roact_hooked.useMemo
local withHooks = _roact_hooked.withHooks
local StoryContext = TS.import(script, script.Parent.Parent, "Contexts", "Story.context").StoryContext
local SetProperties = function(Properties)
	return Properties
end
local Provider = withHooks(function(Configuration)
	local _arg0 = SetProperties(Configuration)
	local Properties = _arg0
	local SourceContext = useMemo(function()
		return {
			Controls = Properties.Controls,
		}
	end, { Properties.Controls })
	local _attributes = {
		value = SourceContext,
	}
	local _children = {}
	local _length = #_children
	for _k, _v in Properties[Roact.Children] do
		if type(_k) == "number" then
			_children[_length + _k] = _v
		else
			_children[_k] = _v
		end
	end
	return Roact.createElement(StoryContext.Provider, _attributes, _children)
end)
return {
	Provider = Provider,
}
