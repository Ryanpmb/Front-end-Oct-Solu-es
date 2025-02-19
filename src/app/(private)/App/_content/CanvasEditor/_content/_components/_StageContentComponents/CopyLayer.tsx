import { ProductInterface } from "@/app/Interfaces/ProductInterface";
import { KonvaNewShapeInterface } from "@/app/Interfaces/ShapeInterface";
import { KonvaNewTextInterface } from "@/app/Interfaces/TextInterface";
import Konva from 'konva';
import { Circle, Image, Path, Rect, Star, Text } from "react-konva";


export function CopyLayer({
    copy,
    selectItemFn,
    grabCursorWhenOnTopOfAnItemFn,
    normalCursorWhenLeavingTheTopAnItemFn
}: {
    copy: ProductInterface | KonvaNewShapeInterface | KonvaNewTextInterface | Konva.NodeConfig,
    selectItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void,
    grabCursorWhenOnTopOfAnItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void,
    normalCursorWhenLeavingTheTopAnItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void

}) {

    return (
        <>
            {
                ('image' in copy && copy.type === "productImage" ||'image' in copy && copy.type ===  "copyProductImage") && (
                    <>
                        <Image
                            draggable
                            onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                            onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                            onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                            image={copy.image}
                            type="copyProductImage"
                            x={copy.x}
                            y={copy.y}
                            width={copy.width}
                            height={copy.height}
                        />
                    </>
                )
            }

            {
                ("type" in copy && copy.type === 'rectangle' || "type" in copy && copy.type === 'copyRectangle') && (
                    <Rect
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        {...copy}
                        type="copyRectangle"
                        x={copy.x ? copy.x + 20 : 0}
                    />
                )
            }

            {
                ("type" in copy && copy.type === 'circle' || "type" in copy && copy.type === 'copyCircle' ) && (
                    <Circle
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        {...copy}
                        type="copyCircle"
                        x={copy.x ? copy.x + 20 : 0}
                    />
                )
            }

            {
                ("type" in copy && copy.type === 'stamp' || "type" in copy && copy.type === 'copyStamp') && (
                    <Star
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        {...copy}
                        type="copyStamp"
                        x={copy.x ? copy.x + 20 : 0}
                        numPoints={copy.numPoints ? copy.numPoints : 15}
                        innerRadius={copy.innerRadius ? copy.innerRadius : 45}
                        outerRadius={copy.outerRadius ? copy.outerRadius : 50}
                    />
                )
            }

            {
                ("type" in copy && copy.type === 'rightArrow' || "type" in copy && copy.type === 'copyRightArrow') && (
                    <Path
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        {...copy}
                        type="copyRightArrow"
                        x={copy.x ? copy.x + 20 : 0}
                    />
                )
            }

            {
                ("type" in copy && copy.type === 'text' || "type" in copy && copy.type === 'copyText') && (
                    <Text
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        {...copy}
                        type="copyText"
                        x={copy.x ? copy.x + 20 : 0}
                    />
                )
            }
        </>
    )

}