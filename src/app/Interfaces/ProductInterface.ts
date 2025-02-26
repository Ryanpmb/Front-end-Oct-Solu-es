export interface ProductInterface {
    id: number;
    name: string;
    nameFontSize?: string | null;
    isBoldName?: boolean;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    img: string;
    KonvaImg: HTMLImageElement;
    price?: number | null;
    priceFontSize?: string | null;
    secondePrice?: number | null;
    secondPriceFontSize?: string | null;
    priceBoxtype?: string | null;
    ean?: string | null;
    shadowColor?: string,
    shadowOpacity?: number,
    shadowBlur?: number,
    shadowOffsetX?: number,
    shadowOffsetY?: number,
    imageScaleX?: number,
    imageScaleY?: number,
}