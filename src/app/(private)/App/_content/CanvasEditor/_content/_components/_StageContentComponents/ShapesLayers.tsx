import { KonvaNewShapeInterface } from "@/app/Interfaces/ShapeInterface"
import { Circle, Rect, Star } from "react-konva"
import Konva from 'konva';

export function ShapesLayers({
    shape, 
    selectItemFn
}:{
    shape: KonvaNewShapeInterface, 
    selectItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void
}){
    return (
        <>
            {
                shape.type === "rectangle" && (
                    <Rect
                        {...shape}
                        draggable
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                    />
                )
            }

            {
                shape.type === "circle" && (
                    <Circle
                        {...shape}
                        draggable
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                    />
                )
            }

            {
                shape.type === "stamp" && (
                    <Star
                        {...shape}
                        numPoints={shape.numPoints ? shape.numPoints : 15}
                        innerRadius={shape.innerRadius ? shape.innerRadius : 45}
                        outerRadius={shape.outerRadius ? shape.outerRadius : 50}
                        draggable
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                    />
                )
            }

        </>
    )
}