import { ProductInterface } from "@/app/Interfaces/ProductInterface"
import { Image, Text } from "react-konva"
import Konva from 'konva';

export function ProductsLayer({
    product,
    selectItemFn,
    grabCursorWhenOnTopOfAnItemFn,
    normalCursorWhenLeavingTheTopAnItemFn,
    transformEndToSaveToHistoryFn,
}: {
    product: ProductInterface,
    selectItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void
    grabCursorWhenOnTopOfAnItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void,
    normalCursorWhenLeavingTheTopAnItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void,
    transformEndToSaveToHistoryFn: (type: string) => void,
}) {
    return (
        <>
            <Image
                onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                type="productImage"
                id={String(product.id)}
                x={product.x}
                y={product.y}
                width={product.width}
                height={product.height}
                image={product.KonvaImg}
                draggable
                onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                shadowColor={product.shadowColor}
                shadowOpacity={product.shadowOpacity}
                shadowBlur={product.shadowBlur}
                shadowOffsetX={product.shadowOffsetX}
                shadowOffsetY={product.shadowOffsetY}
                scaleX={product.imageScaleX | 1}
                scaleY={product.imageScaleY | 1}
                onTransformEnd={() => transformEndToSaveToHistoryFn("productsImage")}
            />
            <Text
                onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                type="productName"
                text={product?.name}
                fontFamily="Microsoft"
                fontSize={16}
                x={product.x ? product.x + 100 : undefined}
                y={product.y ? product.y + 25 : undefined}
                draggable
                onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
            />
            <Text
                onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                type="productPrice"
                text={String(product.price)}
                fontFamily="Microsoft"
                fontSize={16}
                x={product.x ? product.x + 100 : undefined}
                y={product.y ? product.y + 45 : undefined}
                draggable
                onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
            />
        </>
    )
}