import { SelectedItemContext } from "@/components/Context Apis/SelectedItem";
import { StageContext } from "@/components/Context Apis/StageContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useUserData } from "@/services/User/User";
import { CalendarIcon, Copy, Images, MapPin, RotateCcw, RotateCw } from "lucide-react";
import { useContext, useState } from "react";
import { DateRange } from "react-day-picker";
import Konva from 'konva';

export function ActionsTools() {
    const { selectedItem } = useContext(SelectedItemContext)
    const { data: user } = useUserData()
    const { setStage } = useContext(StageContext)
    const [isCalendarVisible, setIsCalendarVisible] = useState(false)
    const [validateDate, setValidateDate] = useState<DateRange | undefined>()

    const duplicateItem = () => {
        if (selectedItem) {
            const copy: Konva.NodeConfig = {
                ...selectedItem,
                id: `${Date.now()}`,
            }

            setStage((prevStages) => {
                return prevStages.map((stage) => {
                    if (stage.id === 1) {
                        return {
                            ...stage,
                            copies: [...stage.copies, copy]
                        }
                    }

                    return stage
                })
            })

        }


    }

    const addShadowInItem = () => {
        if (selectedItem) {
            const itemType = (selectedItem as { type: string }).type
            const itemTypes = {
                productImage: () => {
                    setStage((prevStages) => {
                        return prevStages.map((stage) => {
                            if (stage.id === 1) {
                                return {
                                    ...stage,
                                    products: stage.products.map((product) => {
                                        if (product.id = parseInt(selectedItem.id)) {
                                            return {
                                                ...product,
                                                shadowColor: 'black',
                                                shadowOpacity: 0.5,
                                                shadowBlur: 5,
                                                shadowOffsetX: 0,
                                                shadowOffsetY: 0,
                                            }
                                        }
                                        return product
                                    })
                                }
                            }

                            return stage
                        })
                    })
                },
                shapes: () => {
                    setStage((prevStages) => {
                        return prevStages.map((stage) => {
                            if (stage.id === 1) {
                                return {
                                    ...stage,
                                    shapes: stage.shapes.map((shape) => {
                                        if (shape.id === selectedItem.id) {
                                            return {
                                                ...shape,
                                                shadowColor: 'black',
                                                shadowOpacity: 1,
                                                shadowBlur: 10,
                                                shadowOffsetX: 1,
                                                shadowOffsetY: 1,
                                            }
                                        }

                                        return shape
                                    })
                                }
                            }

                            return stage
                        })
                    })
                },
                text: () => {
                    setStage((prevStages) => {
                        return prevStages.map((stage) => {
                            if (stage.id === 1) {
                                return {
                                    ...stage,
                                    texts: stage.texts.map((text) => {
                                        if (text.id === selectedItem.id) {
                                            return {
                                                ...text,
                                                shadowColor: 'black',
                                                shadowOpacity: 1,
                                                shadowBlur: 10,
                                                shadowOffsetX: 1,
                                                shadowOffsetY: 1,
                                            }
                                        }

                                        return text
                                    })
                                }
                            }

                            return stage
                        })
                    })
                },
                copy: () => {
                    setStage((prevStages) => {
                        return prevStages.map((stage) => {
                            if (stage.id === 1) {
                                return {
                                    ...stage,
                                    copies: stage.copies.map((copy) => {
                                        if (copy.id === selectedItem.id) {
                                            return {
                                                ...copy,
                                                shadowColor: 'black',
                                                shadowOpacity: 1,
                                                shadowBlur: 10,
                                                shadowOffsetX: 1,
                                                shadowOffsetY: 1,
                                            }
                                        }

                                        return copy
                                    })
                                }
                            }

                            return stage
                        })
                    })
                }
            }

            if (itemType === "rectangle" || itemType === "circle" || itemType === "stamp" || itemType === "rightArrow") {
                const itemTypeFunction = itemTypes["shapes"];
                return itemTypeFunction();
            }

            const itemTypeFunction = itemTypes[itemType as keyof typeof itemTypes];
            return itemTypeFunction();
        }
    }


    //fazer função para voltar e prosseguir no histórico

    return (
        <section className="flex flex-col items-center justify-center gap-[5px]">
            <div className="flex items-center justify-cenetr gap-[5px]">

                <Button
                    className="w-1 h-8 rounded-2xl"
                    title="Duplique Algum Elemento"
                    disabled={!selectedItem}
                    onClick={() => duplicateItem()}
                >
                    <Copy />
                </Button>


                <Button
                    className="w-1 h-8 rounded-2xl"
                    title="Adicione o endereço"
                    disabled={!user?.Adress}
                >
                    <MapPin />
                </Button>

                <Button
                    className="w-1 h-8 rounded-2xl"
                    title="Escolha datas de validade"
                    onClick={() => setIsCalendarVisible(!isCalendarVisible)}
                >
                    <CalendarIcon />
                </Button>
            </div>

            <div className="flex items-center justify-cenetr gap-[5px]">


                <Button
                    className="w-1 h-8 rounded-2xl"
                    title="Adicionar Sombra ao Elemento"
                    disabled={!selectedItem}
                    onClick={() => addShadowInItem()}
                >
                    <Images />
                </Button>

                <Button
                    className="w-1 h-8 rounded-2xl"
                    title="Volte 1 Passo"
                >
                    <RotateCcw />
                </Button>

                <Button
                    className="w-1 h-8 rounded-2xl"
                    title="Avançar 1 Passo"
                >
                    <RotateCw />
                </Button>
            </div>

            {
                isCalendarVisible && (
                    <Calendar
                        mode="range"
                        selected={validateDate}
                        onSelect={setValidateDate}
                        className="absolute shadow-md shadow-black flex gap-[10px] top-0 -right-[150px] bg-white "
                    />
                )
            }
        </section>
    )
}