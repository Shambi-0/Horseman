import { useAsync } from "@rbxts/pretty-roact-hooks";
import { MarketplaceService } from "@rbxts/services";

interface Information {
    Sales: number | undefined;
    Price: "N/A" | number;
    Description: string;
    Offsale: boolean;
    Identity: number;
    Name: string;
};

const Default: Information = {
    Sales: undefined,
    Price: "N/A",
    Description: "...",
    Offsale: false,
    Identity: 0,
    Name: "..."
};

export function useProductInfo(ProductId: number): Information {
    const [ Info = Default ] = useAsync(() => {
        return Promise.retryWithDelay(async () => {
            const Details = MarketplaceService.GetProductInfo(ProductId, Enum.InfoType.Product);

            const Formatted: Information = {
                Description: Details.Description || "...",
                Identity: Details.ProductId,
                Offsale: !Details.IsForSale,
                Price: Details.PriceInRobux || "N/A",
                Sales: Details.Sales,
                Name: Details.Name
            };

            return Formatted;
        }, 10, 5);
    });

    return Info;
};