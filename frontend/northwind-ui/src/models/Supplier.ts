import { Product } from "./Product";

export interface Supplier {
    supplierID: number;
    companyName: string;
    contactName: string;
    contactTitle: string;
    address: string;
    city: string;
    region: string | null;
    postalCode: string | null;
    country: string;
    phone: string;
    fax: string | null;
    homepage: string | null;    
    products: Product[];
}
