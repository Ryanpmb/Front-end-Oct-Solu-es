import { StageContext } from "@/components/Context Apis/StageContext"
import { Layer, Rect, Circle, Stage, Text, Transformer, Line, Image, Star, Path, Group } from "react-konva";
import { useContext, useEffect } from "react"
import Konva from 'konva';
import { SelectedItemContext } from "@/components/Context Apis/SelectedItem";
import { ShapesLayers } from "./_components/_StageContentComponents/ShapesLayers";
import { ProductsLayer } from "./_components/_StageContentComponents/ProductsLayer";
import { TextsLayer } from "./_components/_StageContentComponents/TextsLayer";
import { CopyLayer } from "./_components/_StageContentComponents/CopyLayer";

export function StageContent() {
    const { stages } = useContext(StageContext)
    const currentStage = stages.find((stage) => stage.id === 1)
    const { setSelectedItem, selectedItem } = useContext(SelectedItemContext)

    const selectItem = (e: Konva.KonvaEventObject<MouseEvent>) => {
        setSelectedItem(e.target.attrs)
        console.log(selectedItem)
    }

    const grabCursorWhenOnTopOfAnItem = (e: Konva.KonvaEventObject<MouseEvent>) => {
        const container = e.target.getStage()?.container();
        if (container) {
            container.style.cursor = "grab"
        }
    }

    const normalCursorWhenLeavingTheTopAnItem = (e: Konva.KonvaEventObject<MouseEvent>) => {
        const container = e.target.getStage()?.container();
        if (container) {
            container.style.cursor = "default";
        }
    }



    return (
        <main className="mt-[250px]">
            <Stage width={600} height={800} className="border border-black">
                <Layer>
                    {
                        currentStage?.products?.map((product) => (
                            <ProductsLayer
                                key={product.id}
                                product={product}
                                selectItemFn={selectItem}
                                grabCursorWhenOnTopOfAnItemFn={grabCursorWhenOnTopOfAnItem}
                                normalCursorWhenLeavingTheTopAnItemFn={normalCursorWhenLeavingTheTopAnItem}

                            />
                        ))
                    }
                </Layer>
                <Layer>
                    {
                        currentStage?.shapes?.map((shape) => (
                            <ShapesLayers
                                key={shape.id}
                                shape={shape}
                                selectItemFn={selectItem}
                                grabCursorWhenOnTopOfAnItemFn={grabCursorWhenOnTopOfAnItem}
                                normalCursorWhenLeavingTheTopAnItemFn={normalCursorWhenLeavingTheTopAnItem}
                            />
                        ))
                    }
                </Layer>

                <Layer>
                    {
                        currentStage?.texts?.map((text) => (
                            <TextsLayer
                                key={text.id}
                                text={text}
                                selectItemFn={selectItem}
                                grabCursorWhenOnTopOfAnItemFn={grabCursorWhenOnTopOfAnItem}
                                normalCursorWhenLeavingTheTopAnItemFn={normalCursorWhenLeavingTheTopAnItem}
                            />
                        ))
                    }
                </Layer>

                <Layer>
                    {
                        currentStage?.copies?.map((copy) => (
                            <CopyLayer
                                key={copy.id}
                                copy={copy}
                                selectItemFn={selectItem}
                                grabCursorWhenOnTopOfAnItemFn={grabCursorWhenOnTopOfAnItem}
                                normalCursorWhenLeavingTheTopAnItemFn={normalCursorWhenLeavingTheTopAnItem}
                            />
                        ))
                    }
                </Layer>
            </Stage>
        </main>
    )
}