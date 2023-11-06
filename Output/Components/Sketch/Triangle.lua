-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useMemo = _roact_hooked.useMemo
local withHooks = _roact_hooked.withHooks
local _precomputed = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out)
local pAnchor = _precomputed.pAnchor
local pColor = _precomputed.pColor
local getBindingValue = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).getBindingValue
local Image = TS.import(script, script.Parent.Parent, "Core", "Components", "Image").Image
local LEFT_IMAGE = "rbxassetid://319692171"
local RIGHT_IMAGE = "rbxassetid://319692151"
local Triangle = withHooks(function(Properties)
	local Data = useMemo(function()
		local A = getBindingValue(Properties.P) or Vector2.zero
		local B = getBindingValue(Properties.Q) or Vector2.zero
		local C = getBindingValue(Properties.R) or Vector2.zero
		local _b = B
		local _a = A
		local AB = _b - _a
		local _c = C
		local _a_1 = A
		local AC = _c - _a_1
		local _c_1 = C
		local _b_1 = B
		local BC = _c_1 - _b_1
		local ABD = AB:Dot(AB)
		local ACD = AC:Dot(AC)
		local BCD = BC:Dot(BC)
		if (ABD > ACD) and (ABD > BCD) then
			local T = C
			C = A
			local _exp = C
			A = T
			local _ = A
		elseif (ACD > BCD) and (ACD > ABD) then
			local T = A
			A = B
			local _exp = A
			B = T
			local _ = B
		end
		local _b_2 = B
		local _a_2 = A
		AB = _b_2 - _a_2
		local _exp = AB
		local _c_2 = C
		local _a_3 = A
		AC = _c_2 - _a_3
		local _exp_1 = AC
		local _c_3 = C
		local _b_3 = B
		BC = _c_3 - _b_3
		local _ = BC
		local Unit = BC.Unit
		local Height = Unit:Cross(AB)
		local Flip = Height >= 0
		local Theta = math.deg(math.atan2(Unit.Y, Unit.X)) + (if Flip then 0 else 180)
		local _a_4 = A
		local _b_4 = B
		local Left = (_a_4 + _b_4) / 2
		local _a_5 = A
		local _c_4 = C
		local Right = (_a_5 + _c_4) / 2
		return {
			Flip = Flip,
			Unit = Unit,
			AB = AB,
			AC = AC,
			Left = Left,
			Right = Right,
			Height = Height,
			Theta = Theta,
		}
	end, { Properties })
	return Roact.createFragment({
		Left = Roact.createFragment({
			Left = Roact.createElement(Image, {
				Size = UDim2.fromOffset(math.abs(Data.Unit:Dot(Data.AB)), Data.Height),
				BackgroundTransparency = Properties.BackgroundTransparency,
				Position = UDim2.fromOffset(Data.Left.X, Data.Left.Y),
				Image = if Data.Flip then RIGHT_IMAGE else LEFT_IMAGE,
				ImageColor3 = Properties.BackgroundColor3,
				AnchorPoint = pAnchor.Center.Center,
				Rotation = Data.Theta,
			}),
		}),
		Right = Roact.createFragment({
			Right = Roact.createElement(Image, {
				Size = UDim2.fromOffset(math.abs(Data.Unit:Dot(Data.AC)), Data.Height),
				BackgroundTransparency = Properties.BackgroundTransparency,
				Position = UDim2.fromOffset(Data.Right.X, Data.Right.Y),
				Image = if Data.Flip then LEFT_IMAGE else RIGHT_IMAGE,
				ImageColor3 = Properties.BackgroundColor3,
				AnchorPoint = pAnchor.Center.Center,
				Rotation = Data.Theta,
			}),
		}),
	})
end, {
	defaultProps = {
		BackgroundColor3 = pColor.White,
	},
})
return {
	Triangle = Triangle,
}
