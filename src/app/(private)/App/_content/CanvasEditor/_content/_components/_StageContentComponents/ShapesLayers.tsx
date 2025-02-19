import { KonvaNewShapeInterface } from "@/app/Interfaces/ShapeInterface"
import { Circle, Path, Rect, Star } from "react-konva"
import Konva from 'konva';

export function ShapesLayers({
    shape,
    selectItemFn,
    grabCursorWhenOnTopOfAnItemFn,
    normalCursorWhenLeavingTheTopAnItemFn
}: {
    shape: KonvaNewShapeInterface,
    selectItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void,
    grabCursorWhenOnTopOfAnItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void,
    normalCursorWhenLeavingTheTopAnItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void

}) {
    return (
        <>
            {
                shape.type === "rectangle" && (
                    <Rect
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        {...shape}
                        draggable
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                    />
                )
            }

            {
                shape.type === "circle" && (
                    <Circle
                        draggable
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        {...shape}
                    />
                )
            }

            {
                shape.type === "stamp" && (
                    <Star
                        draggable
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        {...shape}
                        numPoints={shape.numPoints ? shape.numPoints : 15}
                        innerRadius={shape.innerRadius ? shape.innerRadius : 45}
                        outerRadius={shape.outerRadius ? shape.outerRadius : 50}
                    />
                )
            }

            {
                shape.type === "rightArrow" && (
                    <Path
                        draggable
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                        onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
                        onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
                        {...shape}
                        data={shape.data}
                    />
                )
            }

        </>
    )
}