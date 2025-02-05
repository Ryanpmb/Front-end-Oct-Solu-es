import { Frame, Lightbulb, Paintbrush } from "lucide-react";

export default function LandingPageInforCards() {
    return (
        <section className=" flex items-center justify-center  p-[10px] bg-white">

            <div className="rounded-xl bg-white shadow shadow-lg w-[62%] h-full flex justify-around p-[10px]">

                <div className="w-[25%] h-full  flex items-center justify-center flex-col p-[10px]">
                    <div>
                        <Paintbrush />
                    </div>

                    <div>
                        <p>Com nosso sistema de design de tabloides, você cria layouts impactantes que valorizam o conteúdo com rapidez e eficiência. Experimente uma solução prática, criativa e única. Confira já!</p>

                    </div>
                </div>

                <hr className="m-0" />

                <div className="w-[25%] h-full  flex items-center justify-center flex-col p-[10px]">
                    <div>
                        <Lightbulb />
                    </div>

                    <div>
                        <p>A nossa ferramenta é simples e intuitiva, feita para facilitar o seu dia a dia. Com uma interface amigável, você encontra tudo o que precisa de forma rápida e prátic. Venha conhecer!</p>
                    </div>

                </div>

                <hr className="m-0" />

                <div className="w-[25%] h-full  flex items-center justify-center flex-col p-[10px]">
                    <div>
                        <Frame />
                    </div>

                    <div>
                        <p>Nossa ferramenta oferece total liberdade para você construir do seu jeito, sem limitações. Crie com flexibilidade e explore sua criatividade sem restrições.</p>
                    </div>
                    
                </div>

            </div>

        </section>
    )
}