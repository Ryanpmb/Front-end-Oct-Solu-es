import { ActionsTools } from "./_components/_ToolboxComponents/ActionsTools";
import { ColorTools } from "./_components/_ToolboxComponents/ColorTools";
import { ShapeTools } from "./_components/_ToolboxComponents/ShapeTools";
import { TextEditTools } from "./_components/_ToolboxComponents/TextEditTools";

export function ToolBox() {

    return (
        <main className="flex flex-col items-center justify-center w-1/2 fixed z-20 rounded-lg mt-[20px]">
            <div className="flex items-center justify-evenly shadow-black shadow-md border border-black rounded-2xl bg-white w-[70%] p-[20px] pt-[50px] pb-[50px] ">
                <TextEditTools />
                <hr className="border border-grey h-[50px] flex flex-col" />
                <ShapeTools />
                <hr className="border border-grey h-[50px] flex flex-col" />
                <ActionsTools />
            </div>
            <div className="rounded-xl w-[60%] h-[30px] bg-red-200 border-[3px] border-white flex items-center justify-center gap-[10px] mt-[-15px]  ">
                <ColorTools />
            </div>
        </main>
    )
}