import { ProductInterface } from "@/app/Interfaces/ProductInterface";
import { KonvaNewShapeInterface } from "@/app/Interfaces/ShapeInterface";
import { KonvaNewTextInterface } from "@/app/Interfaces/TextInterface";
import Konva from 'konva';
import { Image } from "react-konva";


export function CopyLayer({
    copy,
    selectItemFn
}: {
    copy: ProductInterface | KonvaNewShapeInterface | KonvaNewTextInterface,
    selectItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void
}) {

    return (
        <>
            {
                'img' in copy && (
                    <Image
                        image={copy.KonvaImg}
                        x={copy.x}
                        y={copy.y}
                        width={copy.width}
                        height={copy.height}
                        draggable
                        onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
                    />
                )
            }
        </>
    )

}