import { Button } from "@/components/ui/button";

export default function LandingPageOverView() {
    return (
        <section className=" flex items-center justify-evenly h-[500px]">

            <article className="flex flex-col justify-center h-[100%] ">

                <div className="text-2xl font-mono">
                    <h1>Nunca foi tão fácil</h1>
                    <h1>Fazer Cartaz para o seu negócio</h1>
                </div>

                <div className="font-sans">
                    <p>Um sistema de encarte simples</p>
                    <p>fácil e intuitvo</p>
                </div>

                <div>
                    <Button className="rounded-lg shadow-black shadow-lg bg-red-700 hover:bg-red-500 ">
                        Adquira Já!
                    </Button>
                </div>

            </article>

            <article className="h-full">
                <img  alt="" />
            </article>

        </section>
    )
}