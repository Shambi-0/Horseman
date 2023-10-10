-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local pSize = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out).pSize
local Group = Roact.forwardRef(function(Properties, Ref)
	local _attributes = {
		[Roact.Ref] = Ref,
		Size = Properties.Size or pSize.Full,
		Position = Properties.Position,
		AnchorPoint = Properties.AnchorPoint,
		Rotation = Properties.Rotation,
		ClipsDescendants = Properties.ClipsDescendants,
		LayoutOrder = Properties.LayoutOrder,
		Visible = Properties.Visible,
		ZIndex = Properties.zIndex,
		BackgroundTransparency = 1,
		Selectable = Properties.Selectable,
	}
	for _k, _v in Properties.Event or {} do
		_attributes[Roact.Event[_k]] = _v
	end
	for _k, _v in Properties.Change or {} do
		_attributes[Roact.Change[_k]] = _v
	end
	local _children = {}
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
	return Roact.createElement("Frame", _attributes, _children)
end)
return {
	Group = Group,
}
