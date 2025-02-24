import { KonvaNewShapeInterface, ShapeTypes, ShapeTypesInterface } from "@/app/Interfaces/ShapeInterface";
import { HistoryStageContext } from "@/components/Context Apis/HistoryStage";
import { SelectedItemContext } from "@/components/Context Apis/SelectedItem";
import { StageContext } from "@/components/Context Apis/StageContext";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { ArrowRight, Circle, Hexagon, Shapes, Square } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export function ShapeTools() {
    const [startColor, setStartColor] = useState("#ff0000");
    const [endColor, setEndColor] = useState("#ff0000");
    const svgRightArrowData = "M13.77 43.84l156.48 0 0 -32.25c0,-14.65 11.38,-13.91 19.22,-6.07l100.63 100.63c5.29,5.29 5.29,13.94 0,19.22l-100.63 100.63c-7.07,7.07 -19.22,8.99 -19.22,-5.37l0 -32.95 -156.48 0c-7.58,0 -13.77,-6.2 -13.77,-13.77l0 -116.3c0,-7.58 6.2,-13.77 13.77,-13.77z";
    const { setStage, stages } = useContext(StageContext);
    const { saveToHistory } = useContext(HistoryStageContext);
    const { selectedItem } = useContext(SelectedItemContext);
    const [isVisivleRectRoundingModal, setIsVisivleRectRoundingModal] = useState(false);
    const currentStage = stages.find((stage) => stage.id === 1)

    const optionsOfRectRoundedBorder = [
        { value: "2", label: '2' },
        { value: "5", label: '5' },
        { value: "10", label: '10' },
        { value: "15", label: '15' },
        { value: "20", label: '20' },
    ] as const

    useEffect(() => {
        if (selectedItem?.type === "rectangle") {
            return setIsVisivleRectRoundingModal(true);
        }
        return setIsVisivleRectRoundingModal(false)
    }, [selectedItem])

    const addNewShapeInStage = (shapeType: ShapeTypes) => {
        const shapeTypes: ShapeTypesInterface = {
            rectangle: {
                type: shapeType,
                id: `${Date.now()}`,
                x: Math.random() * 200,
                y: Math.random() * 200,
                width: 100,
                height: 100,
                fill: 'red',
                isGradient: false,
                fillLinearGradientColorStops: [0, startColor, 1, endColor],
                fillLinearGradientStartPoint: { x: 0, y: 0 },
                fillLinearGradientEndPoint: { x: 100, y: 0 },
            },
            circle: {
                type: shapeType,
                id: `${Date.now()}`,
                x: Math.random() * 200,
                y: Math.random() * 200,
                width: 100,
                height: 100,
                radius: 50,
                fill: 'red',
                isGradient: false,
                fillLinearGradientColorStops: [0, startColor, 1, endColor],
                fillLinearGradientStartPoint: { x: 0, y: 0 },
                fillLinearGradientEndPoint: { x: 100, y: 0 },
            },
            stamp: {
                type: shapeType,
                id: `${Date.now()}`,
                x: Math.random() * 200,
                y: Math.random() * 200,
                width: 100,
                height: 100,
                numPoints: 15,
                innerRadius: 45,
                outerRadius: 50,
                fill: "red",
                stroke: "black",
                isGradient: false,
                fillLinearGradientColorStops: [0, startColor, 1, endColor],
                fillLinearGradientStartPoint: { x: 0, y: 0 },
                fillLinearGradientEndPoint: { x: 100, y: 0 },
                stokeSize: 0
            },
            rightArrow: {
                type: shapeType,
                id: `${Date.now()}`,
                x: Math.random() * 200,
                y: Math.random() * 200,
                width: 100,
                height: 100,
                data: svgRightArrowData,
                fill: 'red',
                isGradient: false,
                fillLinearGradientColorStops: [0, startColor, 1, endColor],
                fillLinearGradientStartPoint: { x: 0, y: 0 },
                fillLinearGradientEndPoint: { x: 100, y: 0 },
            }

        }

        const newShape = shapeTypes[shapeType];

        if (currentStage) {

            const updatedShapesList = [...currentStage.shapes, newShape]

            setStage((prevStages) => {
                return prevStages.map((stage) => {
                    if (stage.id === currentStage.id) {
                        return {
                            ...stage,
                            shapes: updatedShapesList
                        }
                    }

                    return stage
                })
            })

            saveToHistory(currentStage.products, updatedShapesList, currentStage.texts, currentStage.copies)           
        }
    }

    return (
        <section className="flex flex-col gap-[10px] " >
            <div className="flex gap-[10px] ">
                <Button
                    title="Adicione um quadrado"
                    className="w-1 h-8 rounded-2xl "
                    onClick={() => { addNewShapeInStage("rectangle") }}
                >
                    <Square />
                </Button>

                <Button
                    title="Adicione um ciruclo"
                    className="w-1 h-8 rounded-2xl "
                    onClick={() => addNewShapeInStage("circle")}
                >
                    <Circle />
                </Button>
            </div>

            <div className="flex gap-[10px]">

                <Button
                    title="Adicione um selo"
                    className="w-1 h-8 rounded-2xl"
                    onClick={() => addNewShapeInStage("stamp")}
                >
                    <Hexagon />
                </Button>

                <Button
                    title="Adicione uma seta"
                    className="w-1 h-8 rounded-2xl "
                    onClick={() => addNewShapeInStage("rightArrow")}
                >
                    <ArrowRight />
                </Button>


            </div>
            {
                isVisivleRectRoundingModal && (
                    <div className="flex items-center justify-center flex-col p-[50px] bg-white rounded-lg shadow-black shadow-md gap-[10px] absolute -right-[200px] top-0 h-[130px] ">
                        <h4>Arrendodar Bordas </h4>

                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Escolha seu formato" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    optionsOfRectRoundedBorder.map((option, index) => (
                                        <SelectItem value={option.value} key={index}>
                                            {option.label}
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>
                )
            }
        </section>
    )
}