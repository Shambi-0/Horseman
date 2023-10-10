-- Compiled with roblox-ts v2.2.0
local function fromList(...)
	local Objects = { ... }
	return Objects[math.floor(math.random() * #Objects) + 1]
end
return {
	fromList = fromList,
}
