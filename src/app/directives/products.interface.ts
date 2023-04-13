export interface Product {
    name: string;
    price: number;
    inStock: boolean;
    amount: number;
    isOnSale: boolean;
    category: string;
    description?: string;
    salePercentage?: number;
}