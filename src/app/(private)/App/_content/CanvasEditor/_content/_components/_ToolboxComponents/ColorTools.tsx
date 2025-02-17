import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function ColorTools() {

    const changeColorSelectedItem = (color: string)=>{

    } 

    const changeOutlineColorSelectedItem = (color: string)=>{
        
    }



    return (
        <>
            <div className="text-sm flex items-center justify-center gap-[5px]">
                <p>Preenchimento</p>
                <Button
                    title="Branco"
                    className="bg-white w-[15px] h-[15px] rounded-[50%] p-0"
                    onClick={() => changeColorSelectedItem("#FFFF")}
                />

                <Button
                    title="Preto"
                    className="bg-black w-[15px] h-[15px] rounded-[50%] p-0"
                    onClick={() => changeColorSelectedItem("#000")}
                />
                <Button
                    title="Vermelho"
                    className="bg-red-600 w-[15px] h-[15px] rounded-[50%] p-0"
                    onClick={() => changeColorSelectedItem("#FF0000")}
                />
                <Button
                    title="Amarelo"
                    className="bg-yellow-400 w-[15px] h-[15px] rounded-[50%] p-0"
                    onClick={() => changeColorSelectedItem("#FFFF00")}
                />
                <Button
                    title="Verde"
                    className="bg-green-600 w-[15px] h-[15px] rounded-[50%] p-0"
                    onClick={() => changeColorSelectedItem("#008000")}
                />
                <Button
                    title="Azul"
                    className="bg-blue-700 w-[15px] h-[15px] rounded-[50%] p-0"
                    onClick={() => changeColorSelectedItem("#0000ff")}
                />
                <Button
                    className="w-[15px] h-[15px] rounded-[50%] p-0"
                >
                    <Plus/>
                </Button>

            </div>

            <hr className="border border-grey h-[8px] flex flex-col"/>

            <div className="text-sm flex items-center justify-center gap-[5px]">
                <p>Contorno</p>
                <Button
                    title="Branco"
                    className="bg-white w-[15px] h-[15px] rounded-[50%] p-0"
                />

                <Button
                    title="Preto"
                    className="bg-black w-[15px] h-[15px] rounded-[50%] p-0"
                />
                <Button
                    title="Vermelho"
                    className="bg-red-600 w-[15px] h-[15px] rounded-[50%] p-0"
                />
                <Button
                    title="Amarelo"
                    className="bg-yellow-400 w-[15px] h-[15px] rounded-[50%] p-0"
                />
                <Button
                    title="Verde"
                    className="bg-green-600 w-[15px] h-[15px] rounded-[50%] p-0"
                />
                <Button
                    title="Azul"
                    className="bg-blue-700 w-[15px] h-[15px] rounded-[50%] p-0"
                />
                <Button
                    className="w-[15px] h-[15px] rounded-[50%] p-0"
                >
                    <Plus/>
                </Button>

            </div>
        </>
    )
}