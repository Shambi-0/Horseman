-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local useViewport = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).useViewport
local useState = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).useState
local function useOrientation()
	local Orientation, SetOrientation = useState("Landscape")
	useViewport(function(Viewport)
		SetOrientation(if (Viewport.Y > Viewport.X) then "Portrait" else "Landscape")
	end)
	return Orientation
end
return {
	useOrientation = useOrientation,
}
