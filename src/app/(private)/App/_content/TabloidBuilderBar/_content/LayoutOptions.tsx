import { TabloidBackgroundContext } from "@/components/Context Apis/BackgroundContext"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useContext } from "react"

const options = [
    { value: JSON.stringify({ width: 600, height: 800 }), label: "A4" },
    { value: JSON.stringify({ width: 500, height: 500 }), label: "Story" }
]

export default function LayoutOptions() {

    const { setTabloidBackground } = useContext(TabloidBackgroundContext)

    const selectBackground = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const img = new window.Image()
                img.src = reader.result as string;
                img.onload = () => {
                    setTabloidBackground(img)
                }
            }
        }

    }
    return (
        <section className="bg-red-200 p-[20px] flex flex-col gap-[5px] rounded-lg">

            <article className="flex items-center justify-center flex-col">
                <h3 className="m-0">
                    Qual formato de seu Tablóide/Post?
                </h3>

                <div className="flex w-full items-center justify-evenly  gap-[5px]">

                    <Select>
                        <SelectTrigger className="w-1/3 shadow-black shadow-md">
                            <SelectValue placeholder="Escolha seu formato" />
                        </SelectTrigger>
                        <SelectContent>
                            {options.map((option, index) => (
                                <SelectItem value={option.value} key={index}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Button className="w-1/3 shadow-black shadow-md">
                        Escolher Layout
                    </Button>
                </div>

            </article>

            <div className="flex items-center justify-center h-[20px] gap-[5px]">
                <hr className="w-[43%] border border-black" />
                <p>Ou</p>
                <hr className="w-[43%] border border-black" />
            </div>

            <article className="flex gap-[10px] w-full">

                <div className="w-1/2 flex flex-col items-center justify-center">
                    <Button className=" shadow-black shadow-md">
                        Carregar Layouts Salvos
                    </Button>
                    <p className="text-xs bold mt-2">Escolha aqui um layout</p>
                    <p className="text-xs bold">Que foi salvo anteriormente</p>
                </div>

                <div className="w-1/2 flex flex-col items-center justify-center">
                    <input id="backgroundSelect" onChange={(e: React.ChangeEvent<HTMLInputElement>) => selectBackground(e)} name={"Logo"} type={"file"} placeholder={"Logo de seu mercado"} hidden />
                    <label htmlFor="backgroundSelect" className="m-0 w-full h-[40px] rounded-lg flex items-center justify-center  bg-red-500 text-white shadow-black shadow-md cursor-pointer" style={{ fontFamily: 'Segoe UI', fontSize: '13px' }}>
                        Carregar a Logo
                    </label>
                    <p className="text-xs bold mt-2">Carregue aqui seu</p>
                    <p className="text-xs bold">Layout personalizado!</p>
                </div>

            </article>

        </section>
    )
}