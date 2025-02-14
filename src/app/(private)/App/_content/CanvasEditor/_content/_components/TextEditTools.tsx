import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bold, LetterText, Type } from "lucide-react";


export function TextEditTools() {

    

    return(
        <>
            <div className="flex items-center justify-center flex-col gap-[5px]">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder='Escolha uma fonte'/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">
                                1
                        </SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex ">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione um tamanho de fonte"/>
                        </SelectTrigger>
                        <SelectContent>

                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Tamanho de contorno"/>
                        </SelectTrigger>
                    </Select>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-[5px]">
                <Button className="w-1 h-8 rounded-2xl ">
                    <Type/>
                </Button>

                <Button className="w-1 h-8 rounded-2xl ">
                    <Bold/>
                </Button>

            </div>
        </>
    )

}