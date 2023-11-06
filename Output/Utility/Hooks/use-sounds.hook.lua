-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local _services = TS.import(script, TS.getModule(script, "@rbxts", "services"))
local SoundService = _services.SoundService
local Workspace = _services.Workspace
local PlayLocalSound = function(Identity, Volume, Speed)
	local Sound = Instance.new("Sound")
	Sound.SoundId = "rbxassetid://" .. tostring(Identity)
	Sound.PlaybackSpeed = Speed
	Sound.Volume = Volume
	Sound.Parent = Workspace
	if not Sound.IsLoaded then
		Sound.Loaded:Wait()
	end
	SoundService:PlayLocalSound(Sound)
	task.delay(Sound.TimeLength, function()
		return Sound:Destroy()
	end)
end
local function useSounds(Sounds)
	return function(Name, Volume, Speed)
		if Volume == nil then
			Volume = 0.5
		end
		if Speed == nil then
			Speed = 1
		end
		task.defer(PlayLocalSound, Sounds[Name], Volume, Speed)
	end
end
return {
	useSounds = useSounds,
}
