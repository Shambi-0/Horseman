-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
-- eslint-disable @typescript-eslint/no-explicit-any 
local pColor = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out).pColor
local function EvaluateNumberSequence(Sequence, Time)
	Time = math.clamp(if Time == 1 then Time else Time % 1, 0, 1)
	if Time == 0 then
		return Sequence.Keypoints[1].Value
	elseif Time == 1 then
		return Sequence.Keypoints[(#Sequence.Keypoints - 1) + 1].Value
	end
	for Index = 0, #Sequence.Keypoints - 1 do
		local Current = Sequence.Keypoints[Index + 1]
		local Next = Sequence.Keypoints[(Index + 1) + 1]
		if Time >= Current.Time and Time < Next.Time then
			local Alpha = (Time - Current.Time) / (Next.Time - Current.Time)
			return Current.Value + (Next.Value - Current.Value) * Alpha
		end
	end
	return 0
end
local function EvaluateColorSequence(Sequence, Time)
	Time = math.clamp(if Time == 1 then Time else Time % 1, 0, 1)
	if Time == 0 then
		return Sequence.Keypoints[1].Value
	elseif Time == 1 then
		return Sequence.Keypoints[(#Sequence.Keypoints - 1) + 1].Value
	end
	for Index = 0, #Sequence.Keypoints - 1 do
		local Current = Sequence.Keypoints[Index + 1]
		local Next = Sequence.Keypoints[(Index + 1) + 1]
		if Time >= Current.Time and Time < Next.Time then
			local Alpha = (Time - Current.Time) / (Next.Time - Current.Time)
			return Current.Value:Lerp(Next.Value, Alpha)
		end
	end
	return pColor.White
end
return {
	EvaluateNumberSequence = EvaluateNumberSequence,
	EvaluateColorSequence = EvaluateColorSequence,
}
