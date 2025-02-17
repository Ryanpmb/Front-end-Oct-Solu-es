import { StageContext } from "@/components/Context Apis/StageContext"
import { Layer, Rect, Circle, Stage, Text, Transformer, Line, Image, Star, Path, Group } from "react-konva";
import { useContext } from "react"
import Konva from 'konva';
import { SelectedItemContext } from "@/components/Context Apis/SelectedItem";
import { ShapesLayers } from "./_components/_StageContentComponents/ShapesLayers";
import { ProductsLayer } from "./_components/_StageContentComponents/ProductsLayer";
import { TextsLayer } from "./_components/_StageContentComponents/TextsLayer";
import { CopyLayer } from "./_components/_StageContentComponents/CopyLayer";

export function StageContent() {
    const { stages } = useContext(StageContext)
    const currentStage = stages.find((stage) => stage.id === 1)
    const { setSelectedItem } = useContext(SelectedItemContext)

    const selectItem = (e: Konva.KonvaEventObject<MouseEvent>) => {
        setSelectedItem(e.target.attrs)
    }
    return (
        <main className="mt-[250px]">
            <Stage width={600} height={800} className="border border-black">
                <Layer>
                    {
                        currentStage?.products?.map((product) => (
                            <ProductsLayer key={product.id} product={product} selectItemFn={selectItem} />
                        ))
                    }
                </Layer>
                <Layer>
                    {
                        currentStage?.shapes?.map((shape) => (
                            <ShapesLayers key={shape.id} shape={shape} selectItemFn={selectItem} />
                        ))
                    }
                </Layer>

                <Layer>
                    {
                        currentStage?.texts?.map((text) => (
                            <TextsLayer key={text.id} text={text} selectItemFn={selectItem} />
                        ))
                    }
                </Layer>

                <Layer>
                    {
                        currentStage?.copies?.map((copy) =>(
                            <CopyLayer copy={copy} selectItemFn={selectItem} />
                        ))
                    }
                </Layer>
            </Stage>
        </main>
    )
}