-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pAnchor = _precomputed.pAnchor
local pColor = _precomputed.pColor
local pPoint = _precomputed.pPoint
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local Frame = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Frame").Frame
local Image = TS.import(script, script.Parent.Parent.Parent, "Core", "Components", "Image").Image
local MeasureFrame = withHooks(function(Properties)
	local _attributes = {
		Position = UDim2.fromOffset(Properties.From.X, Properties.From.Y),
		Size = if Properties.Size then Properties.Size else UDim2.fromOffset(Properties.To.X - Properties.From.X, Properties.To.Y - Properties.From.Y),
		BackgroundTransparency = Properties.BackgroundTransparency,
	}
	local _children = {
		LineV1 = Roact.createElement(Image, {
			BackgroundTransparency = 1,
			Image = "rbxassetid://13895861348",
			ScaleType = Enum.ScaleType.Tile,
			ImageColor3 = Properties.ForegroundColor3,
			ImageTransparency = Properties.ForegroundTransparency,
			Size = UDim2.new(1, 0, 0, Properties.Thickness),
			TileSize = UDim2.new(0, Properties.Width, 1, 0),
		}),
		LineH1 = Roact.createElement(Image, {
			BackgroundTransparency = 1,
			Image = "rbxassetid://13895889245",
			ScaleType = Enum.ScaleType.Tile,
			ImageColor3 = Properties.ForegroundColor3,
			ImageTransparency = Properties.ForegroundTransparency,
			Size = UDim2.new(0, Properties.Thickness, 1, 0),
			TileSize = UDim2.new(1, 0, 0, Properties.Width),
		}),
		LineH2 = Roact.createElement(Image, {
			AnchorPoint = pAnchor.Right.Top,
			BackgroundTransparency = 1,
			Image = "rbxassetid://13895889245",
			Position = pPoint.Right.Top,
			ScaleType = Enum.ScaleType.Tile,
			ImageColor3 = Properties.ForegroundColor3,
			ImageTransparency = Properties.ForegroundTransparency,
			Size = UDim2.new(0, Properties.Thickness, 1, 0),
			TileSize = UDim2.new(1, 0, 0, Properties.Width),
		}),
		LineV2 = Roact.createElement(Image, {
			AnchorPoint = pAnchor.Left.Bottom,
			BackgroundTransparency = 1,
			Image = "rbxassetid://13895861348",
			Position = pPoint.Left.Bottom,
			ScaleType = Enum.ScaleType.Tile,
			ImageColor3 = Properties.ForegroundColor3,
			ImageTransparency = Properties.ForegroundTransparency,
			Size = UDim2.new(1, 0, 0, Properties.Thickness),
			TileSize = UDim2.new(0, Properties.Width, 1, 0),
		}),
	}
	local _length = #_children
	local _child = Properties[Roact.Children]
	if _child then
		for _k, _v in _child do
			if type(_k) == "number" then
				_children[_length + _k] = _v
			else
				_children[_k] = _v
			end
		end
	end
	return Roact.createElement(Frame, _attributes, _children)
end, {
	defaultProps = {
		From = Vector2.zero,
		To = Vector2.new(100, 100),
		BackgroundColor3 = pColor.White,
		ForegroundColor3 = pColor.White,
		Thickness = 3,
		Width = 16,
		BackgroundTransparency = 1,
		ForegroundTransparency = 0,
	},
})
return {
	MeasureFrame = MeasureFrame,
}
