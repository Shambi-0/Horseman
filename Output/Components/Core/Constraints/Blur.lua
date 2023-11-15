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
local Workspace = _services.Workspace
local resolveNumber = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Common", "Number").resolveNumber
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
		repeat
			if Furthest == s0 then
				A, B, C = v0, v1, v2
				break
			end
			if Furthest == s1 then
				A, B, C = v1, v2, v0
				break
			end
			if Furthest == s2 then
				A, B, C = v2, v0, v1
				break
			end
			break
		until true
		local _b = B
		local _a = A
		local c0 = _b - _a
		local _c = C
		local _a_1 = A
		local c1 = _c - _a_1
		local _a_2 = A
		local _b_1 = B
		local c2 = _a_2 - _b_1
		local Parameter = ((c0.X * c1.X) + (c0.Y * c1.Y) + (c0.Z * c1.Z)) / c2.Magnitude
		local Perspective = math.sqrt(math.pow(c1.Magnitude, 2) - (Parameter * Parameter))
		local Difference = c2.Magnitude - Parameter
		local Reach = Perspective / Depth
		local Stare = CFrame.new(B, A)
		local Angle = CFrame.Angles(math.pi / 2, 0, 0)
		local From = Stare
		local To
		local Top = (From * Angle).LookVector
		local _a_3 = A
		local _arg0 = CFrame.new(A, B).LookVector * Parameter
		local Middle = _a_3 + _arg0
		local Goal = CFrame.new(Middle, C).LookVector
		local Dot = (Top.X * Goal.X) + (Top.Y * Goal.Y) + (Top.Z * Goal.Z)
		local Curve = math.acos(Dot)
		local Arc = CFrame.Angles(0, 0, Curve)
		From = From * Arc
		if ((From * Angle).LookVector - Goal).Magnitude > 0.01 then
			local _from = From
			local _arg0_1 = CFrame.Angles(0, 0, -2 * Curve)
			From = _from * _arg0_1
		end
		local _from = From
		local _cFrame = CFrame.new(0, Perspective / 2, -(Difference + (Parameter / 2)))
		From = _from * _cFrame
		local _arg0_1 = CFrame.Angles(0, math.pi, 0)
		local _arg0_2 = Arc * _arg0_1
		To = Stare * _arg0_2
		if ((To * Angle).LookVector - Goal).Magnitude > 0.01 then
			local _to = To
			local _arg0_3 = CFrame.Angles(0, 0, 2 * math.acos(Dot))
			To = _to * _arg0_3
		end
		local _to = To
		local _cFrame_1 = CFrame.new(0, Perspective / 2, Difference / 2)
		To = _to * _cFrame_1
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
		p0.Wedge.Scale = Vector3.new(0, Reach, Reach)
		p0.CFrame = From
		if p1 == nil then
			p1 = p0:Clone()
		end
		p1.Wedge.Scale = Vector3.new(0, Reach, Difference / 0.2)
		p1.CFrame = To
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
	useMemo(function()
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
		SetParts(Neon.DrawQuad(Camera:ScreenPointToRay(TL.X, TL.Y, zIndex).Origin, Camera:ScreenPointToRay(TR.X, TR.Y, zIndex).Origin, Camera:ScreenPointToRay(BL.X, BL.Y, zIndex).Origin, Camera:ScreenPointToRay(BR.X, BR.Y, zIndex).Origin, Parts))
	end, { Properties, Ref })
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
		Material = Enum.Material.SmoothPlastic,
	},
})
return {
	Blur = Blur,
}
