-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useMemo = _roact_hooked.useMemo
local useRef = _roact_hooked.useRef
local useState = _roact_hooked.useState
local withHooks = _roact_hooked.withHooks
local _services = TS.import(script, TS.getModule(script, "@rbxts", "services"))
local Lighting = _services.Lighting
local RunService = _services.RunService
local Workspace = _services.Workspace
local resolveNumber = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Common", "Number").resolveNumber
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local getBindingValue = _pretty_roact_hooks.getBindingValue
local useEventListener = _pretty_roact_hooks.useEventListener
local pSize = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out).pSize
local Camera = Workspace.CurrentCamera
resolveNumber(function()
	return Camera:ScreenPointToRay(0, 0).Origin.X
end):await()
local Cache = Instance.new("Folder")
Cache.Name = "Neon"
Cache.Parent = Camera
local DOF = Instance.new("DepthOfFieldEffect")
DOF.FocusDistance = 51.6
DOF.InFocusRadius = 50
DOF.Parent = Lighting
DOF.NearIntensity = 1
DOF.FarIntensity = 0
DOF.Name = "DOF"
local Wedge = Instance.new("WedgePart")
Wedge.Anchored = true
Wedge.TopSurface = Enum.SurfaceType.Smooth
Wedge.BottomSurface = Enum.SurfaceType.Smooth
local Neon = {}
do
	local _container = Neon
	local Depth = 0.2
	local DrawTriangle = function(v0, v1, v2, p0, p1)
		local A = v0
		local B = v1
		local C = v2
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
			local T = A
			A = B
			B = T
		elseif (ACD > BCD) and (ACD > ABD) then
			local T = A
			A = C
			C = T
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
		local Right = AC:Cross(AB).Unit
		local Up = BC:Cross(Right).Unit
		local Back = BC.Unit
		local Height = math.abs(AB:Dot(Up))
		p0 = p0 or Wedge:Clone()
		p0.Size = Vector3.new(Depth, Height, math.abs(AB:Dot(Back)))
		local _fn = CFrame
		local _a_4 = A
		local _b_4 = B
		p0.CFrame = _fn.fromMatrix((_a_4 + _b_4) / 2, Right, Up, Back)
		p0.Parent = Cache
		p1 = p1 or Wedge:Clone()
		p1.Size = Vector3.new(Depth, Height, math.abs(AC:Dot(Back)))
		local _fn_1 = CFrame
		local _a_5 = A
		local _c_4 = C
		p1.CFrame = _fn_1.fromMatrix((_a_5 + _c_4) / 2, Right * (-1), Up, Back * (-1))
		p1.Parent = Cache
		return p0, p1
	end
	_container.DrawTriangle = DrawTriangle
	local DrawQuad = function(v0, v1, v2, v3, Parts)
		local p0, p1 = DrawTriangle(v0, v1, v2, Parts[1], Parts[2])
		local p2, p3 = DrawTriangle(v2, v1, v3, Parts[3], Parts[4])
		return { p0, p1, p2, p3 }
	end
	_container.DrawQuad = DrawQuad
end
local Blur = withHooks(function(Properties)
	local Parts, SetParts = useState({ nil, nil, nil, nil })
	local Ref = useRef()
	useEventListener(RunService.RenderStepped, function()
		local Obj = Ref:getValue()
		if Obj == nil then
			return nil
		end
		local zIndex = 1 - 0.05 * Obj.ZIndex
		local TL = Obj.AbsolutePosition
		local _absolutePosition = Obj.AbsolutePosition
		local _absoluteSize = Obj.AbsoluteSize
		local BR = _absolutePosition + _absoluteSize
		local TR = Vector2.new(BR.X, TL.Y)
		local BL = Vector2.new(TL.X, BR.Y)
		-- TODO: Add support for frame rotation.
		SetParts(Neon.DrawQuad(Camera:ScreenPointToRay(TL.X + 64, TL.Y + 46, zIndex).Origin, Camera:ScreenPointToRay(TR.X - 64, TR.Y + 46, zIndex).Origin, Camera:ScreenPointToRay(BL.X + 64, BL.Y - 46, zIndex).Origin, Camera:ScreenPointToRay(BR.X - 64, BR.Y - 46, zIndex).Origin, Parts))
	end)
	useMemo(function()
		if Parts[1] == nil then
			return nil
		end
		for _, Part in Parts do
			Part.Parent = Cache
			Part.Transparency = getBindingValue(Properties.Transparency)
			Part.Material = getBindingValue(Properties.Material)
			Part.Color = getBindingValue(Properties.Color)
		end
	end, { Parts, Properties })
	return Roact.createFragment({
		Blur = Roact.createElement("Frame", {
			Position = Properties.Position,
			ZIndex = Properties.ZIndex,
			BackgroundTransparency = 1,
			Size = Properties.Size,
			[Roact.Ref] = Ref,
		}),
	})
end, {
	defaultProps = {
		Color = Color3.fromRGB(255, 255, 255),
		Material = Enum.Material.Glass,
		Transparency = 0.98,
		Size = pSize.Full,
	},
})
return {
	Blur = Blur,
}
