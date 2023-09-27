export interface ProductSummary {
    productID: number;
    supplierID: number | null;
    productName: string;
    companyName: string;
    sumValue: number;
}