-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local PhysicsService = TS.import(script, TS.getModule(script, "@rbxts", "services")).PhysicsService
--[[
	*
	 * @description Extracts all of the {@link BasePart BasePart} descendants.
	 * @param { Instance } Object The root {@link Instance Instance} which will have all of it's {@link BaseParts BasePart} extracted.
	 * @param { boolean } [ ExcludeRoot ] Whether the root object should be excluded.
	 * @returns { BasePart[] } All of the {@link BaseParts BasePart}.
	 
]]
local function getBaseParts(Object, ExcludeRoot)
	if ExcludeRoot == nil then
		ExcludeRoot = false
	end
	local _exp = Object:GetDescendants()
	local _arg0 = function(Value)
		return Value:IsA("BasePart")
	end
	-- ▼ ReadonlyArray.filter ▼
	local _newValue = {}
	local _length = 0
	for _k, _v in _exp do
		if _arg0(_v, _k - 1, _exp) == true then
			_length += 1
			_newValue[_length] = _v
		end
	end
	-- ▲ ReadonlyArray.filter ▲
	local Parts = _newValue
	if not ExcludeRoot and Object:IsA("BasePart") then
		local _object = Object
		table.insert(Parts, _object)
	end
	return Parts
end
--[[
	*
	 * @description Adds any given instances & their descendant {@link BasePart BasePart}s to any given collision group.
	 * @param { Instance } Object The object to be appended.
	 * @param { string } Group The collision group.
	 * @deprecated
	 
]]
local function addToCollisionGroup(Object, Group)
	local _exp = getBaseParts(Object)
	local _arg0 = function(Value)
		return PhysicsService:SetPartCollisionGroup(Value, Group)
	end
	for _k, _v in _exp do
		_arg0(_v, _k - 1, _exp)
	end
end
--[[
	*
	 * @description Adds any given instances & their descendant {@link BasePart BasePart}s to any given network.
	 * @param { Instance } Object The object to be appended to the network.
	 * @param { Player } [ Owner ] The owner of the given network.
	 
]]
local function setNetworkOwner(Object, Owner)
	local _exp = getBaseParts(Object)
	local _arg0 = function(Value)
		return (Value:CanSetNetworkOwnership())
	end
	-- ▼ ReadonlyArray.filter ▼
	local _newValue = {}
	local _length = 0
	for _k, _v in _exp do
		if _arg0(_v, _k - 1, _exp) == true then
			_length += 1
			_newValue[_length] = _v
		end
	end
	-- ▲ ReadonlyArray.filter ▲
	local _arg0_1 = function(Value)
		return Value:SetNetworkOwner(Owner)
	end
	for _k, _v in _newValue do
		_arg0_1(_v, _k - 1, _newValue)
	end
end
return {
	getBaseParts = getBaseParts,
	addToCollisionGroup = addToCollisionGroup,
	setNetworkOwner = setNetworkOwner,
}
