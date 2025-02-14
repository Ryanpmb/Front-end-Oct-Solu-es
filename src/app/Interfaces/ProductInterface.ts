export interface ProductInterface {
    id: number;
    name: string;
    img: string;
    price: number | null;
    secondePrice?: number | null;
    priceBoxtype?: string | null;
    ean: string | null;
}