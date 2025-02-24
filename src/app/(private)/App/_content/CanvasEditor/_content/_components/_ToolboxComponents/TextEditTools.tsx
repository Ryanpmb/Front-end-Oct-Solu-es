import { KonvaNewTextInterface } from "@/app/Interfaces/TextInterface";
import { HistoryStageContext } from "@/components/Context Apis/HistoryStage";
import { StageContext } from "@/components/Context Apis/StageContext";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bold, LetterText, Type } from "lucide-react";
import { useContext } from "react";


export function TextEditTools() {

    const { saveToHistory } = useContext(HistoryStageContext);
    const { setStage, stages } = useContext(StageContext);
    const currentStage = stages.find((stage) => stage.id === 1);


    const fontSizeSelectOptions = [
        8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46
    ]

    const outlineSelectOptions = [
        1, 2, 3, 4, 5
    ]

    const fontFamilySelectOptions = [
        "Viga", "Microsoft", "Microsoft Bold"
    ]

    const changeFontSize = (fontSize: string) => {

    }

    const changeFontFamily = (fontFamily: string) => {

    }

    const changeFontStyle = () => {

    }

    const changeOutine = () => {

    }

    const addTextBoxInStage = () => {

        const newText: KonvaNewTextInterface = {
            id: `${Date.now()}`,
            x: 100,
            y: 100,
            fontSize: 40,
            scaleX: 1,
            scaleY: 1,
            text: "Nova caixa de texto",
            fontFamily: "Microsoft",
            fontStyle: "normal"
        }

        if (currentStage) {

            const updatedTextList = [...currentStage.texts, newText]
            setStage((prevStage) => {
                return prevStage.map((stage) => {
                    if (stage.id === currentStage.id) {
                        return {
                            ...stage,
                            texts: updatedTextList
                        }
                    }

                    return stage;
                })
            })

            saveToHistory(currentStage.products, currentStage.shapes, updatedTextList, currentStage.copies)
        }
    }


    return (
        <section className="flex gap-[20px] w-[50%]">
            <div className="flex items-center justify-center flex-col gap-[5px]">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder='Escolha uma fonte' />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            fontFamilySelectOptions.map((fontFamily, index) => (
                                <SelectItem key={index} value={fontFamily}>
                                    {fontFamily}
                                </SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
                <div className="flex ">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione um tamanho de fonte" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                fontSizeSelectOptions.map((fontSize, index) => (
                                    <SelectItem key={index} value={String(fontSize)}>
                                        {fontSize}
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Tamanho de contorno" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                outlineSelectOptions.map((outline, index) => (
                                    <SelectItem key={index} value={String(outline)}>
                                        {outline}
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-[5px]">
                <Button
                    onClick={() => addTextBoxInStage()}
                    className="w-1 h-8 rounded-2xl "
                    title="Criar Caixa de Texto"
                >
                    <Type />
                </Button>

                <Button
                    className="w-1 h-8 rounded-2xl"
                    title="Deixar texto em negrito"
                >
                    <Bold />
                </Button>

            </div>
        </section>
    )

}