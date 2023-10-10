-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _services = TS.import(script, TS.getModule(script, "@rbxts", "services"))
local RunService = _services.RunService
local UserInputService = _services.UserInputService
local useEventListener = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).useEventListener
local withHooks = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).withHooks
local useDebounce = TS.import(script, script.Parent.Parent.Parent.Parent, "Utility", "Hooks").useDebounce
local Group = TS.import(script, script.Parent, "Group").Group
local IS_EDIT = RunService:IsStudio() and not RunService:IsRunning()
local Capture = withHooks(function(Properties)
	local _, Try = useDebounce(Properties.Cooldown)
	local FrameRef = Roact.createRef()
	useEventListener(UserInputService.InputBegan, function(Input, GameProcessed)
		if FrameRef:getValue() and (not GameProcessed and (not IS_EDIT and Try())) then
			local _result = Properties.onInputBegan
			if _result ~= nil then
				_result(FrameRef:getValue(), Input, true)
			end
		end
	end)
	useEventListener(UserInputService.InputEnded, function(Input)
		if FrameRef:getValue() and not IS_EDIT then
			local _result = Properties.onInputEnded
			if _result ~= nil then
				_result(FrameRef:getValue(), Input)
			end
		end
	end)
	useEventListener(UserInputService.InputChanged, function(Input)
		if FrameRef:getValue() and not IS_EDIT then
			local _result = Properties.onInputChanged
			if _result ~= nil then
				_result(FrameRef:getValue(), Input)
			end
		end
	end)
	return Roact.createElement(Group, {
		Selectable = true,
		ClipsDescendants = true,
		[Roact.Ref] = FrameRef,
		Size = Properties.Size,
		Position = Properties.Position,
		AnchorPoint = Properties.AnchorPoint,
		zIndex = math.huge,
		Event = {
			InputBegan = (function(O, I)
				if Try() and Properties.onInputBegan then
					Properties.onInputBegan(O, I, false)
				end
			end),
			InputChanged = if IS_EDIT then Properties.onInputChanged else nil,
			InputEnded = if IS_EDIT then Properties.onInputEnded else nil,
			MouseEnter = function()
				if Properties.onHovering then
					Properties.onHovering(true)
				end
			end,
			MouseLeave = function()
				if Properties.onHovering then
					Properties.onHovering(false)
				end
			end,
			SelectionGained = function()
				if Properties.onHovering then
					Properties.onHovering(true)
				end
			end,
			SelectionLost = function()
				if Properties.onHovering then
					Properties.onHovering(false)
				end
			end,
		},
	})
end, {
	defaultProps = {
		Cooldown = 0.2,
	},
})
return {
	IS_EDIT = IS_EDIT,
	Capture = Capture,
}
