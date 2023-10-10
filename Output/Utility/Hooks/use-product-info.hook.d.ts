interface Information {
    Sales: number | undefined;
    Price: "N/A" | number;
    Description: string;
    Offsale: boolean;
    Identity: number;
    Name: string;
}
export declare function useProductInfo(ProductId: number): Information;
export {};
