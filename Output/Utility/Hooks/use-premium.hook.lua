-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local useEventListener = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).useEventListener
local useState = TS.import(script, TS.getModule(script, "@rbxts", "roact-hooked").src).useState
local Players = TS.import(script, TS.getModule(script, "@rbxts", "services")).Players
local function usePremium()
	local IsPremium, SetIsPremium = useState(Players.LocalPlayer.MembershipType == Enum.MembershipType.Premium)
	useEventListener(Players.PlayerMembershipChanged, function(Player)
		if Player == Players.LocalPlayer then
			SetIsPremium(Player.MembershipType == Enum.MembershipType.Premium)
		end
	end)
	return IsPremium
end
return {
	default = usePremium,
}
