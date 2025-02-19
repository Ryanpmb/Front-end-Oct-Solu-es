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
                ('image' in copy && copy.type === "productImage") && (
                    <>
                        <Image
                            draggable
                            onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                            onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                            onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                            image={copy.image}
                            type="copy"
                            x={copy.x}
                            y={copy.y}
                            width={copy.width}
                            height={copy.height}
                        />
                    </>
                )
            }

            {
                ("type" in copy && copy.type === 'rectangle') && (
                    <Rect
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        {...copy}
                        type="copy"
                        x={copy.x ? copy.x + 20 : 0}
                    />
                )
            }

            {
                ("type" in copy && copy.type === 'circle') && (
                    <Circle
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        {...copy}
                        type="copy"
                        x={copy.x ? copy.x + 20 : 0}
                    />
                )
            }

            {
                ("type" in copy && copy.type === 'stamp') && (
                    <Star
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        {...copy}
                        type="copy"
                        x={copy.x ? copy.x + 20 : 0}
                        numPoints={copy.numPoints ? copy.numPoints : 15}
                        innerRadius={copy.innerRadius ? copy.innerRadius : 45}
                        outerRadius={copy.outerRadius ? copy.outerRadius : 50}
                    />
                )
            }

            {
                ("type" in copy && copy.type === 'rightArrow') && (
                    <Path
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        {...copy}
                        type="copy"
                        x={copy.x ? copy.x + 20 : 0}
                    />
                )
            }

            {
                ("type" in copy && copy.type === 'text') && (
                    <Text
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        {...copy}
                        type="copy"
                        x={copy.x ? copy.x + 20 : 0}
                    />
                )
            }
        </>
    )

}