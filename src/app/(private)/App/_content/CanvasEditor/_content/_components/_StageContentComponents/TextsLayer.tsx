import { KonvaNewTextInterface } from "@/app/Interfaces/TextInterface"
import { Text } from "react-konva"
import Konva from 'konva';


export function TextsLayer({
    text,
    selectItemFn,
    grabCursorWhenOnTopOfAnItemFn,
    normalCursorWhenLeavingTheTopAnItemFn,
    transformEndToSaveToHistoryFn
}: {
    text: KonvaNewTextInterface,
    selectItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void,
    grabCursorWhenOnTopOfAnItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void,
    normalCursorWhenLeavingTheTopAnItemFn: (e: Konva.KonvaEventObject<MouseEvent>) => void,
    transformEndToSaveToHistoryFn: (type: string) => void,
}) {
    return (
        <Text
            draggable
            onClick={(e: Konva.KonvaEventObject<MouseEvent>) => { selectItemFn(e) }}
            onMouseEnter={(e: Konva.KonvaEventObject<MouseEvent>) => grabCursorWhenOnTopOfAnItemFn(e)}
            onMouseLeave={(e: Konva.KonvaEventObject<MouseEvent>) => normalCursorWhenLeavingTheTopAnItemFn(e)}
            {...text}
            type="text"
            text={text?.text}
            fontFamily="Microsoft"
            fontSize={16}
            x={text.x ? text.x + 100 : undefined}
            y={text.y ? text.y + 25 : undefined}
            onTransformEnd={() => transformEndToSaveToHistoryFn("texts")}
        />
    )
}