import { SelectedItemContext } from "@/components/Context Apis/SelectedItem";
import { StageContext } from "@/components/Context Apis/StageContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useUserData } from "@/services/User/User";
import { CalendarIcon, Copy, Images, MapPin, RotateCcw, RotateCw } from "lucide-react";
import { useContext, useState } from "react";
import { DateRange } from "react-day-picker";

export function ActionsTools() {
    const { selectedItem } = useContext(SelectedItemContext)
    const { data: user } = useUserData()
    const { setStage } = useContext(StageContext)
    const [isCalendarVisible, setIsCalendarVisible] = useState(false)
    const [validateDate, setValidateDate] = useState<DateRange | undefined>()

    const duplicateItem = () => {
        if (selectedItem) {
            const copy = {
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


    //fazer função para voltar e prosseguir no histórico

    //fazer função para adicionar sombra ao elemento

    return (
        <section className="flex flex-col items-center justify-center gap-[5px]">
            <div className="flex items-center justify-cenetr gap-[5px]">

                <Button
                    className="w-1 h-8 rounded-2xl"
                    title="Duplique Algum Elemento"
                    disabled={!selectedItem}
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