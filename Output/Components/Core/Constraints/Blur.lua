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
local Neon = {}
do
	local _container = Neon
	local Depth = 0.2
	local DrawTriangle = function(v0, v1, v2, p0, p1)
		local _v0 = v0
		local _v1 = v1
		local s0 = (_v0 - _v1).Magnitude
		local _v1_1 = v1
		local _v2 = v2
		local s1 = (_v1_1 - _v2).Magnitude
		local _v2_1 = v2
		local _v0_1 = v0
		local s2 = (_v2_1 - _v0_1).Magnitude
		local Furthest = math.max(s0, s1, s2)
		local A
		local B
		local C
		if Furthest == s0 then
			A, B, C = v0, v1, v2
		elseif Furthest == s1 then
			A, B, C = v1, v2, v0
		elseif Furthest == s2 then
			A, B, C = v2, v0, v1
		end
		local _b = B
		local _a = A
		local _exp = (_b - _a).X
		local _c = C
		local _a_1 = A
		local _exp_1 = _exp * (_c - _a_1).X
		local _b_1 = B
		local _a_2 = A
		local _exp_2 = (_b_1 - _a_2).Y
		local _c_1 = C
		local _a_3 = A
		local _exp_3 = _exp_1 + _exp_2 * (_c_1 - _a_3).Y
		local _b_2 = B
		local _a_4 = A
		local _exp_4 = (_b_2 - _a_4).Z
		local _c_2 = C
		local _a_5 = A
		local _exp_5 = (_exp_3 + _exp_4 * (_c_2 - _a_5).Z)
		local _a_6 = A
		local _b_3 = B
		local Para = _exp_5 / (_a_6 - _b_3).Magnitude
		local _fn = math
		local _c_3 = C
		local _a_7 = A
		local Perp = _fn.sqrt(bit32.bxor(bit32.bxor((_c_3 - _a_7).Magnitude, 2 - Para), 2))
		local _a_8 = A
		local _b_4 = B
		local dif_para = (_a_8 - _b_4).Magnitude - Para
		local st = CFrame.new(B, A)
		local za = CFrame.Angles(math.pi / 2, 0, 0)
		local cf0 = st
		local Top_Look = (cf0 * za).LookVector
		local _a_9 = A
		local _arg0 = CFrame.new(A, B).LookVector * Para
		local Mid_Point = _a_9 + _arg0
		local Needed_Look = CFrame.new(Mid_Point, C).LookVector
		local dot = Top_Look.X * Needed_Look.X + Top_Look.Y * Needed_Look.Y + Top_Look.Z * Needed_Look.Z
		local ac = CFrame.Angles(0, 0, math.acos(dot))
		cf0 = cf0 * ac
		if ((cf0 * za).LookVector - Needed_Look).Magnitude > 0.01 then
			local _cf0 = cf0
			local _arg0_1 = CFrame.Angles(0, 0, -2 * math.acos(dot))
			cf0 = _cf0 * _arg0_1
		end
		local _cf0 = cf0
		local _cFrame = CFrame.new(0, Perp / 2, -(dif_para + Para / 2))
		cf0 = _cf0 * _cFrame
		local _arg0_1 = CFrame.Angles(0, math.pi, 0)
		local _arg0_2 = ac * _arg0_1
		local cf1 = st * _arg0_2
		if ((cf1 * za).LookVector - Needed_Look).Magnitude > 0.01 then
			local _cf1 = cf1
			local _arg0_3 = CFrame.Angles(0, 0, 2 * math.acos(dot))
			cf1 = _cf1 * _arg0_3
		end
		local _cf1 = cf1
		local _cFrame_1 = CFrame.new(0, Perp / 2, dif_para / 2)
		cf1 = _cf1 * _cFrame_1
		if p0 == nil then
			p0 = Instance.new("Part")
			p0.FormFactor = Enum.FormFactor.Custom
			p0.TopSurface = Enum.SurfaceType.Smooth
			p0.BottomSurface = Enum.SurfaceType.Smooth
			p0.Anchored = true
			p0.CanCollide = false
			p0.Locked = true
			local Mesh = Instance.new("SpecialMesh")
			Mesh.Parent = p0
			Mesh.MeshType = Enum.MeshType.Wedge
			Mesh.Name = "Wedge"
		end
		p0.Wedge.Scale = Vector3.new(0, Perp / 0.2, Para / 0.2)
		p0.CFrame = cf0
		if p1 == nil then
			p1 = p0:Clone()
		end
		p1.Wedge.Scale = Vector3.new(0, Perp / 0.2, dif_para / 0.2)
		p1.CFrame = cf1
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
		SetParts(Neon.DrawQuad(Camera:ScreenPointToRay(TL.X + 16, TL.Y + 16, zIndex).Origin, Camera:ScreenPointToRay(TR.X - 16, TR.Y + 16, zIndex).Origin, Camera:ScreenPointToRay(BL.X + 16, BL.Y - 16, zIndex).Origin, Camera:ScreenPointToRay(BR.X - 16, BR.Y - 16, zIndex).Origin, Parts))
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
