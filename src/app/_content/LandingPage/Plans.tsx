import { Button } from "@/components/ui/button";

export default function LandingPagePlans() {
    return (
        <section className="flex items-center justify-center w-full h-[600px] text-center">

            <div className="flex items-center justify-center gap-[30px] h-full w-full ">

                <div className="w-[20%] border border-black-500 h-[80%] shadow-black shadow-2xl flex justify-center items-center">

                    <div className="h-[80%] flex flex-col items-center justify-center">
                        <h1 className="text-2xl">Premium</h1>
                        <h1 className="text-xl">Anual</h1>

                        <h1 className="text-6xl font-mono">R$54,90</h1>
                        <p>POR MÊS POR 12 MESES</p>
                        <p>Total: R$658,80</p>
                        <Button className="bg-red-500">
                            Contratar Agora!
                        </Button>
                    </div>

                </div>

                <div className="w-[20%] border border-black-500 h-[80%] shadow-black shadow-2xl flex justify-center items-center">

                    <div className="h-[80%] flex flex-col items-center justify-center">
                        <h1 className="text-2xl">Premium</h1>
                        <h1 className="text-xl">Anual</h1>

                        <h1 className="text-6xl font-mono">R$54,90</h1>
                        <p>POR MÊS POR 12 MESES</p>
                        <p>Total: R$658,80</p>
                        <Button className="bg-red-500">
                            Contratar Agora!
                        </Button>
                    </div>

                </div>

                <div className="w-[20%] border border-black-500 h-[80%] shadow-black shadow-2xl flex justify-center items-center">

                    <div className="h-[80%] flex flex-col items-center justify-center">
                        <h1 className="text-2xl">Premium</h1>
                        <h1 className="text-xl">Anual</h1>

                        <h1 className="text-6xl font-mono">R$54,90</h1>
                        <p>POR MÊS POR 12 MESES</p>
                        <p>Total: R$658,80</p>
                        <Button className="bg-red-500">
                            Contratar Agora!
                        </Button>
                    </div>

                </div>
            </div>

        </section>
    )
}