import { Category } from "./Category";
import { Supplier } from "./Supplier";

export interface Product {
    productID: number;
    productName: string;
    supplierID: number | null;
    supplier?: Supplier;
    categoryID: number | null;
    category?: Category;
    quantityPerUnit: string | null;
    unitPrice: number | null;
    unitsInStock: number | null;
    unitsOnOrder: number | null;
    discontinued: boolean;
}