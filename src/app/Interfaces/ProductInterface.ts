export interface ProductInterface {
    id: number;
    name: string;
    nameFontSize?: string | null;
    isBoldName?: boolean;
    img: string;
    price?: number | null;
    priceFontSize?: string | null;
    secondePrice?: number | null;
    secondPriceFontSize?: string | null;
    priceBoxtype?: string | null;
    ean?: string | null;
}