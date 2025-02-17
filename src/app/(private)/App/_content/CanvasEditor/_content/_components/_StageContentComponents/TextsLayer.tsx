import { KonvaNewTextInterface } from "@/app/Interfaces/TextInterface"
import { Text } from "react-konva"
import Konva from 'konva';


export function TextsLayer({
    text,
    selectItemFn
}: {
    text: KonvaNewTextInterface,
    selectItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void
}) {
    return (
        <Text
            text={text?.text}
            fontFamily="Microsoft"
            fontSize={16}
            x={text.x ? text.x + 100 : undefined}
            y={text.y ? text.y + 25 : undefined}
            draggable
            onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
        />
    )
}