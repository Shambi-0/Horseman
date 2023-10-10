-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useEffect = _roact_hooked.useEffect
local useState = _roact_hooked.useState
local withHooks = _roact_hooked.withHooks
local pColor = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out).pColor
local useRem = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Hooks").useRem
local Image = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Image").Image
local Frame = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Frame").Frame
local DropShadow = withHooks(function(Properties)
	local Rem = useRem()
	local Scale, SetScale = useState(Rem(Properties.Thickness))
	useEffect(function()
		return SetScale(Rem(Properties.Thickness))
	end, { Properties.Thickness })
	return Roact.createFragment({
		DropShadow = Roact.createElement(Frame, {
			BackgroundTransparency = 1,
		}, {
			Roact.createElement(Image, {
				Image = "rbxassetid://2715137474",
				ImageColor3 = Properties.Color,
				ImageTransparency = Properties.Transparency,
				Position = UDim2.new(0, 0, 1, 0),
				Size = UDim2.new(1, 0, 0, Scale),
			}),
			Roact.createElement(Image, {
				AnchorPoint = Vector2.new(1, 0),
				Image = "rbxassetid://2715140280",
				ImageColor3 = Properties.Color,
				ImageTransparency = Properties.Transparency,
				Size = UDim2.new(0, Scale, 1, 0),
			}),
			Roact.createElement(Image, {
				AnchorPoint = Vector2.new(1, 0),
				Image = "rbxassetid://2715199828",
				ImageColor3 = Properties.Color,
				ImageTransparency = Properties.Transparency,
				Position = UDim2.new(0, 0, 1, 0),
				Size = UDim2.new(0, Scale, 0, Scale),
			}),
			Roact.createElement(Image, {
				AnchorPoint = Vector2.new(1, 1),
				Image = "rbxassetid://2715200507",
				ImageColor3 = Properties.Color,
				ImageTransparency = Properties.Transparency,
				Size = UDim2.new(0, Scale, 0, Scale),
			}),
			Roact.createElement(Image, {
				Image = "rbxassetid://2715141619",
				ImageColor3 = Properties.Color,
				ImageTransparency = Properties.Transparency,
				Position = UDim2.new(1, 0, 0, 0),
				Size = UDim2.new(0, Scale, 1, 0),
			}),
			Roact.createElement(Image, {
				Image = "rbxassetid://2715200973",
				ImageColor3 = Properties.Color,
				ImageTransparency = Properties.Transparency,
				Position = UDim2.new(1, 0, 1, 0),
				Size = UDim2.new(0, Scale, 0, Scale),
			}),
			Roact.createElement(Image, {
				AnchorPoint = Vector2.new(0, 1),
				Image = "rbxassetid://2715201545",
				ImageColor3 = Properties.Color,
				ImageTransparency = Properties.Transparency,
				Position = UDim2.new(1, 0, 0, 0),
				Size = UDim2.new(0, Scale, 0, Scale),
			}),
			Roact.createElement(Image, {
				AnchorPoint = Vector2.new(0, 1),
				Image = "rbxassetid://2715138063",
				ImageColor3 = Properties.Color,
				ImageTransparency = Properties.Transparency,
				Size = UDim2.new(1, 0, 0, Scale),
			}),
		}),
	})
end, {
	defaultProps = {
		Thickness = 0.5,
		Transparency = 0.65,
		Color = pColor.Black,
	},
})
return {
	DropShadow = DropShadow,
}
