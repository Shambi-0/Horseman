-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local useEventListener = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).useEventListener
local UserInputService = TS.import(script, TS.getModule(script, "@rbxts", "services")).UserInputService
local useState = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).useState
local getInputType = function(Input)
	if Input == nil then
		Input = UserInputService:GetLastInputType()
	end
	if (Input == Enum.UserInputType.Keyboard) or (Input == Enum.UserInputType.MouseMovement) then
		return "Keyboard"
	elseif Input == Enum.UserInputType.Gamepad1 then
		return "Gamepad"
	elseif Input == Enum.UserInputType.Touch then
		return "Touch"
	end
end
--[[
	*
	 * Returns the current input device being used by the player.
	 * @returns An InputDevice string.
	 
]]
local function useInputDevice()
	local Device, SetDevice = useState(function()
		return getInputType() or "Keyboard"
	end)
	useEventListener(UserInputService.LastInputTypeChanged, function(Input)
		local NewDevice = getInputType(Input)
		if NewDevice ~= nil then
			SetDevice(NewDevice)
		end
	end)
	return Device
end
return {
	useInputDevice = useInputDevice,
}
