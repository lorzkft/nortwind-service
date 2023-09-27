import { Product } from "./Product";

export interface Category {
    categoryId: number;
    categoryName: string;
    description: string | null;
    picture: Uint8Array | null;
    products: Product[];
}
