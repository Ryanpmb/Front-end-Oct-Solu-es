import { ProductInterface } from "@/app/Interfaces/ProductInterface"
import { Image, Text } from "react-konva"
import Konva from 'konva';

export function ProductsLayer({
    product,
    selectItemFn
}: {
    product: ProductInterface,
    selectItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void
}) {
    return (
        <>
            <Image
                key={product.id}
                x={product.x}
                y={product.y}
                width={product.width}
                height={product.height}
                image={product.KonvaImg}
                draggable
                onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
            />
            <Text
                text={product?.name}
                fontFamily="Microsoft"
                fontSize={16}
                x={product.x ? product.x + 100 : undefined}
                y={product.y ? product.y + 25 : undefined}
                draggable
                onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
            />
            <Text
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