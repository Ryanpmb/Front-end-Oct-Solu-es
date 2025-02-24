import { StageContext } from "@/components/Context Apis/StageContext"
import { Layer, Rect, Circle, Stage, Text, Transformer, Line, Image, Star, Path, Group } from "react-konva";
import { useContext, useEffect, useRef } from "react"
import Konva from 'konva';
import { SelectedItemContext } from "@/components/Context Apis/SelectedItem";
import { ShapesLayers } from "./_components/_StageContentComponents/ShapesLayers";
import { ProductsLayer } from "./_components/_StageContentComponents/ProductsLayer";
import { TextsLayer } from "./_components/_StageContentComponents/TextsLayer";
import { CopyLayer } from "./_components/_StageContentComponents/CopyLayer";
import { Transformer as KonvaTransformer } from "konva/lib/shapes/Transformer";
import { HistoryStageContext } from "@/components/Context Apis/HistoryStage";

export function StageContent() {
    const { setStage, stages } = useContext(StageContext)
    const currentStage = stages.find((stage) => stage.id === 1)

    const { setSelectedItem, selectedItem } = useContext(SelectedItemContext)

    const stageRef = useRef<Konva.Stage>(null)
    const transformerRef = useRef<KonvaTransformer | null>(null)

    const { saveToHistory } = useContext(HistoryStageContext)

    const selectItem = (e: Konva.KonvaEventObject<MouseEvent>) => {
        setSelectedItem(e.target.attrs)
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

    useEffect(() => {
        setTimeout(() => {
            if (transformerRef.current && selectedItem) {
                const selectedItemId = (selectedItem as { id: string }).id
                const itemInNodeType = stageRef.current?.findOne(`#${selectedItemId}`)
                if (itemInNodeType) {
                    transformerRef.current.nodes([itemInNodeType])
                    transformerRef.current.getLayer()?.batchDraw()
                } else {
                    transformerRef.current.nodes([])
                    transformerRef.current.getLayer()?.batchDraw()
                }

            }
        }, 1) //esse timeout só foi adicionado para o transformerRef não ser null para cair dentro do if
    }, [selectedItem])

    const transformEndToSaveToHistory = (type: string) => {
        if (currentStage) {
            const selectedItemId = (selectedItem as { id: string }).id
            const itemTypes = {
                shapes: () => {

                    const updatedShapeScale = currentStage.shapes.map((shape) => {
                        if (shape.id === selectedItemId) {
                            return {
                                ...shape,
                                scaleX: (selectedItem as { scaleX: number })?.scaleX,
                                scaleY: (selectedItem as { scaleY: number })?.scaleY,
                            }
                        }
                        return shape
                    })

                    setStage((prevStages) => {
                        return prevStages.map((stage) => {
                            if (stage.id === 1) {
                                return {
                                    ...stage,
                                    shapes: updatedShapeScale
                                }
                            }

                            return stage;
                        })
                    })

                    saveToHistory(currentStage.products, updatedShapeScale, currentStage.texts, currentStage.copies)
                },
                productsImage: () => {
                    const updatedProductScale = currentStage.products.map((product) => {
                        if (product.id === parseInt(selectedItemId)) {
                            return {
                                ...product,
                                imageScaleX: (selectedItem as { scaleX: number })?.scaleX,
                                imageScaleY: (selectedItem as { scaleY: number })?.scaleY,
                            }
                        }
                        return product
                    })

                    setStage((prevStages) => {
                        return prevStages.map((stage) => {
                            if (stage.id === 1) {
                                return {
                                    ...stage,
                                    products: updatedProductScale
                                };
                            }

                            return stage;
                        })
                    })

                    saveToHistory(updatedProductScale, currentStage.shapes, currentStage.texts, currentStage.copies)
                },
                copies: () => {
                    const updatedCopiesScale = currentStage.copies.map((copy) => {
                        if (copy.id === selectedItemId) {
                            return {
                                ...copy,
                                scaleX: (selectedItem as { scaleX: number })?.scaleX,
                                scaleY: (selectedItem as { scaleY: number })?.scaleY,
                            }
                        }
                        return copy
                    })

                    setStage((prevStages) => {
                        return prevStages.map((stage) => {
                            if (stage.id === 1) {
                                return {
                                    ...stage,
                                    copies: updatedCopiesScale
                                };
                            }

                            return stage;
                        })
                    })

                    saveToHistory(currentStage.products, currentStage.shapes, currentStage.texts, updatedCopiesScale)
                },
                texts: () => {
                    const updatedTextsScale = currentStage.texts.map((text) => {
                        if (text.id === selectedItemId) {
                            return {
                                ...text,
                                scaleX: (selectedItem as { scaleX: number })?.scaleX,
                                scaleY: (selectedItem as { scaleY: number })?.scaleY,
                            }
                        }
                        return text
                    })

                    setStage((prevStages) => {
                        return prevStages.map((stage) => {
                            if (stage.id === 1) {
                                return {
                                    ...stage,
                                    texts: updatedTextsScale
                                };
                            }

                            return stage;
                        })
                    })

                    saveToHistory(currentStage.products, currentStage.shapes, updatedTextsScale, currentStage.copies)
                },
            }

            const transformEndFn = itemTypes[type as keyof typeof itemTypes]
            if (transformEndFn) {
                transformEndFn()
            }

        }
    }


    return (
        <main className="mt-[250px]">
            <Stage
                width={650}
                height={800}
                className="border border-black"
                ref={stageRef}
            >
                <Layer>
                    {
                        currentStage?.products?.map((product) => (
                            <ProductsLayer
                                key={product.id}
                                product={product}
                                selectItemFn={selectItem}
                                grabCursorWhenOnTopOfAnItemFn={grabCursorWhenOnTopOfAnItem}
                                normalCursorWhenLeavingTheTopAnItemFn={normalCursorWhenLeavingTheTopAnItem}
                                transformEndToSaveToHistoryFn={transformEndToSaveToHistory}
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
                                transformEndToSaveToHistoryFn={transformEndToSaveToHistory}
                            />
                        ))
                    }

                    {
                        selectedItem && (
                            <Transformer
                                ref={transformerRef}
                                boundBoxFunc={(oldBox, newBox) => {
                                    if (newBox.width < 20 || newBox.width < 20) {
                                        return oldBox;
                                    }

                                    return newBox;
                                }}

                            />
                        )
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
                                transformEndToSaveToHistoryFn={transformEndToSaveToHistory}
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
                                transformEndToSaveToHistoryFn={transformEndToSaveToHistory}
                            />
                        ))
                    }
                </Layer>

            </Stage>
        </main>
    )
}