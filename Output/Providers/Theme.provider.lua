-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useMemo = _roact_hooked.useMemo
local withHooks = _roact_hooked.withHooks
local pColor = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out).pColor
local ThemeContext = TS.import(script, script.Parent.Parent, "Contexts", "Theme.context").ThemeContext
local SetProperties = function(Properties)
	return Properties
end
local Provider = withHooks(function(Configuration)
	local _arg0 = SetProperties(Configuration)
	local Properties = _arg0
	local SourceContext = useMemo(function()
		return {
			Layout = {
				Background = pColor.Black,
				Foreground = Color3.fromHex("#ECEDEE"),
				Seperator = Color3.fromHex("#262626"),
				Focus = Color3.fromHex("#006FEE"),
			},
			Content = {
				ContentA = Color3.fromHex("#18181b"),
				ContentB = Color3.fromHex("#27272a"),
				ContentC = Color3.fromHex("#3f3f46"),
				ContentD = Color3.fromHex("#52525b"),
			},
			Base = {
				Default = Color3.fromHex("#3f3f46"),
				Primary = Color3.fromHex("#006FEE"),
				Secondary = Color3.fromHex("#9353d3"),
				Success = Color3.fromHex("#17c964"),
				Warning = Color3.fromHex("#f5a524"),
				Danger = Color3.fromHex("#f31260"),
			},
			Default = {
				Default50 = Color3.fromHex("#18181b"),
				Default100 = Color3.fromHex("#27272a"),
				Default200 = Color3.fromHex("#3f3f46"),
				Default300 = Color3.fromHex("#52525b"),
				Default400 = Color3.fromHex("#71717a"),
				Default500 = Color3.fromHex("#a1a1aa"),
				Default600 = Color3.fromHex("#d4d4d8"),
				Default700 = Color3.fromHex("#e4e4e7"),
				Default800 = Color3.fromHex("#f4f4f5"),
				Default900 = Color3.fromHex("#fafafa"),
			},
			Primary = {
				Primary50 = Color3.fromHex("#001731"),
				Primary100 = Color3.fromHex("#002e62"),
				Primary200 = Color3.fromHex("#004493"),
				Primary300 = Color3.fromHex("#005bc4"),
				Primary400 = Color3.fromHex("#006FEE"),
				Primary500 = Color3.fromHex("#338ef7"),
				Primary600 = Color3.fromHex("#66aaf9"),
				Primary700 = Color3.fromHex("#99c7fb"),
				Primary800 = Color3.fromHex("#cce3fd"),
				Primary900 = Color3.fromHex("#e6f1fe"),
			},
			Secondary = {
				Secondary50 = Color3.fromHex("#180828"),
				Secondary100 = Color3.fromHex("#301050"),
				Secondary200 = Color3.fromHex("#481878"),
				Secondary300 = Color3.fromHex("#6020a0"),
				Secondary400 = Color3.fromHex("#7828c8"),
				Secondary500 = Color3.fromHex("#9353d3"),
				Secondary600 = Color3.fromHex("#ae7ede"),
				Secondary700 = Color3.fromHex("#c9a9e9"),
				Secondary800 = Color3.fromHex("#e4d4f4"),
				Secondary900 = Color3.fromHex("#f2eafa"),
			},
			Success = {
				Success50 = Color3.fromHex("#052814"),
				Success100 = Color3.fromHex("#095028"),
				Success200 = Color3.fromHex("#0e793c"),
				Success300 = Color3.fromHex("#12a150"),
				Success400 = Color3.fromHex("#17c964"),
				Success500 = Color3.fromHex("#45d483"),
				Success600 = Color3.fromHex("#74dfa2"),
				Success700 = Color3.fromHex("#a2e9c1"),
				Success800 = Color3.fromHex("#d1f4e0"),
				Success900 = Color3.fromHex("#e8faf0"),
			},
			Warning = {
				Warning50 = Color3.fromHex("#312107"),
				Warning100 = Color3.fromHex("#62420e"),
				Warning200 = Color3.fromHex("#936316"),
				Warning300 = Color3.fromHex("#c4841d"),
				Warning400 = Color3.fromHex("#f5a524"),
				Warning500 = Color3.fromHex("#f7b750"),
				Warning600 = Color3.fromHex("#f9c97c"),
				Warning700 = Color3.fromHex("#fbdba7"),
				Warning800 = Color3.fromHex("#fdedd3"),
				Warning900 = Color3.fromHex("#fefce8"),
			},
			Danger = {
				Danger50 = Color3.fromHex("#310413"),
				Danger100 = Color3.fromHex("#610726"),
				Danger200 = Color3.fromHex("#920b3a"),
				Danger300 = Color3.fromHex("#c20e4d"),
				Danger400 = Color3.fromHex("#f31260"),
				Danger500 = Color3.fromHex("#f54180"),
				Danger600 = Color3.fromHex("#f871a0"),
				Danger700 = Color3.fromHex("#faa0bf"),
				Danger800 = Color3.fromHex("#fdd0df"),
				Danger900 = Color3.fromHex("#fee7ef"),
			},
		}
	end, {})
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
	return Roact.createElement(ThemeContext.Provider, _attributes, _children)
end)
return {
	Provider = Provider,
}
