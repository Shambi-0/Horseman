-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local useAsync = TS.import(script, TS.getModule(script, "@rbxts", "pretty-roact-hooks").out).useAsync
local MarketplaceService = TS.import(script, TS.getModule(script, "@rbxts", "services")).MarketplaceService
local Default = {
	Sales = nil,
	Price = "N/A",
	Description = "...",
	Offsale = false,
	Identity = 0,
	Name = "...",
}
local function useProductInfo(ProductId)
	local Info = useAsync(function()
		return TS.Promise.retryWithDelay(TS.async(function()
			local Details = MarketplaceService:GetProductInfo(ProductId, Enum.InfoType.Product)
			local _object = {}
			local _left = "Description"
			local _condition = Details.Description
			if not (_condition ~= "" and _condition) then
				_condition = "..."
			end
			_object[_left] = _condition
			_object.Identity = Details.ProductId
			_object.Offsale = not Details.IsForSale
			local _left_1 = "Price"
			local _condition_1 = Details.PriceInRobux
			if not (_condition_1 ~= 0 and (_condition_1 == _condition_1 and _condition_1)) then
				_condition_1 = "N/A"
			end
			_object[_left_1] = _condition_1
			_object.Sales = Details.Sales
			_object.Name = Details.Name
			local Formatted = _object
			return Formatted
		end), 10, 5)
	end)
	if Info == nil then
		Info = Default
	end
	return Info
end
return {
	useProductInfo = useProductInfo,
}
