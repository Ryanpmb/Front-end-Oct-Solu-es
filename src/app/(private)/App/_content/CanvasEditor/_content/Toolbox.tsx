import { TextEditTools } from "./_components/TextEditTools";

export function ToolBox() {

    return (
        <main className="flex flex-col items-center justify-center w-1/2 fixed z-20 rounded-lg">
            <div className="flex items-center justify-center shadow-black shadow-md border border-black rounded-lg bg-white w-[70%] p-[20px] ">
                <TextEditTools />
            </div>
        </main>
    )
}