interface Information {
    Sales: number | undefined;
    Price: "N/A" | number;
    Description: string;
    Offsale: boolean;
    Identity: number;
    Name: string;
}
export default function useProductInfo(ProductId: number): Information;
export {};
