-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _pretty_roact_hooks = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out)
local map = _pretty_roact_hooks.map
local useCamera = _pretty_roact_hooks.useCamera
local useDebounceState = _pretty_roact_hooks.useDebounceState
local useEventListener = _pretty_roact_hooks.useEventListener
local _roact_hooked = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src)
local useEffect = _roact_hooked.useEffect
local withHooks = _roact_hooked.withHooks
local DEFAULT_REM = 16
local MIN_REM = 8
local BASE_RESOLUTION = Vector2.new(1920, 1020)
local MAX_ASPECT_RATIO = 19 / 9
local RemContext = Roact.createContext(DEFAULT_REM)
local SetProperties = function(Properties)
	return Properties
end
local Provider = withHooks(function(Configuration)
	local _arg0 = SetProperties(Configuration)
	local Properties = _arg0
	local Camera = useCamera()
	local Rem, SetRem = useDebounceState(Properties.BaseRem, {
		wait = 0.2,
		leading = true,
	})
	local Update = function()
		local Viewport = Camera.ViewportSize
		if Properties.RemOverride ~= nil then
			return Properties.RemOverride
		end
		-- wide screens should not scale beyond iPhone aspect ratio
		local Resolution = Vector2.new(math.min(Viewport.X, Viewport.Y * MAX_ASPECT_RATIO), Viewport.Y)
		local Scale = Resolution.Magnitude / BASE_RESOLUTION.Magnitude
		local Desktop = (Resolution.X > Resolution.Y) or (Scale >= 1)
		-- portrait mode should downscale slower than landscape
		local Factor = if Desktop then Scale else map(Scale, 0, 1, 0.25, 1)
		SetRem(math.clamp(math.round(Properties.BaseRem * Factor), Properties.MinimumRem, Properties.MaximumRem))
	end
	useEventListener(Camera:GetPropertyChangedSignal("ViewportSize"), Update)
	useEffect(function()
		Update()
	end, { Properties.BaseRem, Properties.MinimumRem, Properties.MaximumRem, Properties.RemOverride })
	local _attributes = {
		value = Rem,
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
	return Roact.createElement(RemContext.Provider, _attributes, _children)
end, {
	defaultProps = {
		BaseRem = DEFAULT_REM,
		MinimumRem = MIN_REM,
		MaximumRem = math.huge,
	},
})
return {
	DEFAULT_REM = DEFAULT_REM,
	MIN_REM = MIN_REM,
	RemContext = RemContext,
	Provider = Provider,
}
