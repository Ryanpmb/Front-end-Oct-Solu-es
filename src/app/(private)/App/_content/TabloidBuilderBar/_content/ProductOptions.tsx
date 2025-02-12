import { StageContext } from "@/components/Context Apis/StageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useContext, useEffect } from "react";


export default function ProductOptions() {

    const { setStage, stages } = useContext(StageContext)

    const selectProductQuantity = (value: string) => {
        
        setStage((prevStages) => prevStages.map((stage) => {
            return stage.id === 1 ? {...stage, productsQuantity: parseInt(value)} : stage;
        }));

    }

    return (
        <section className="flex flex-col items-center justify-center gap-[10px] bg-red-200 p-[10px] rounded-lg ">
            <div className="flex items-center justify-center text-start gap-[20px] w-full">
                <Select onValueChange={(value) => selectProductQuantity(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder='Escolha a quantidade de produtos'/>
                    </SelectTrigger>
                    <SelectContent>
                        {Array.from({length: 20}, (_, i) => i + 1).map( index =>(
                            <SelectItem value={String(index)} key={index}>
                                {index}
                            </SelectItem>
                        )) }
                    </SelectContent>
                </Select>
                <p className="text-xs">Adicione seus produtos manualmente.</p>
            </div>
        </section>
    )
}